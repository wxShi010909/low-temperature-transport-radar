"use client";

import { useEffect, useState } from "react";

export const FAVORITES_KEY = "lt-radar:favorites:v1";
export const NOTE_PREFIX = "lt-radar:note:v1:";
export const READER_EVENT = "lt-radar-reader-change";

function readFavorites() {
  if (typeof window === "undefined") return [] as string[];
  try {
    const value = JSON.parse(window.localStorage.getItem(FAVORITES_KEY) ?? "[]");
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

export function getFavoriteIds() {
  return readFavorites();
}

export function getSavedNote(id: string) {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(`${NOTE_PREFIX}${id}`) ?? "";
}

function announceChange() {
  window.dispatchEvent(new CustomEvent(READER_EVENT));
}

function safeFilename(value: string) {
  return value.replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ").trim().slice(0, 80) || "阅读笔记";
}

function downloadMarkdown(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.URL.revokeObjectURL(url);
}

export function FavoriteButton({ id, compact = false }: { id: string; compact?: boolean }) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const sync = () => setFavorite(readFavorites().includes(id));
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(READER_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(READER_EVENT, sync);
    };
  }, [id]);

  function toggle() {
    const values = new Set(readFavorites());
    if (values.has(id)) values.delete(id);
    else values.add(id);
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify([...values]));
    setFavorite(!favorite);
    announceChange();
  }

  return (
    <button
      className={`favorite-button ${favorite ? "is-favorite" : ""} ${compact ? "compact" : ""}`}
      type="button"
      onClick={(event) => { event.preventDefault(); event.stopPropagation(); toggle(); }}
      aria-pressed={favorite}
      aria-label={favorite ? "取消收藏" : "收藏文章"}
      title={favorite ? "取消收藏" : "收藏后可在“我的阅读”中继续查看"}
    >
      <span aria-hidden="true">{favorite ? "♥" : "♡"}</span>{compact ? null : <b>{favorite ? "已收藏" : "收藏"}</b>}
    </button>
  );
}

export function NoteEditor({ id, title, suggested, daily = false }: { id: string; title: string; suggested: string; daily?: boolean }) {
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"saved" | "copied" | "exported" | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setNote(getSavedNote(id)));
    return () => window.cancelAnimationFrame(frame);
  }, [id]);

  function save() {
    window.localStorage.setItem(`${NOTE_PREFIX}${id}`, note.trim());
    setStatus("saved");
    announceChange();
    window.setTimeout(() => setStatus(null), 1800);
  }

  function useSuggested() {
    if (note.trim() && !window.confirm("当前草稿已有内容，是否用系统整理模板替换？")) return;
    setNote(suggested);
    setStatus(null);
  }

  async function copyNote() {
    if (!note.trim()) return;
    try {
      await window.navigator.clipboard.writeText(note);
      setStatus("copied");
      window.setTimeout(() => setStatus(null), 1800);
    } catch {
      window.alert("浏览器没有允许自动复制，请使用“导出 Markdown”。");
    }
  }

  function exportNote() {
    if (!note.trim()) return;
    const markdown = `# ${title}\n\n${note.trim()}\n\n---\n\n导出自：低温输运研究雷达\n`;
    downloadMarkdown(`${safeFilename(title)}.md`, markdown);
    setStatus("exported");
    window.setTimeout(() => setStatus(null), 1800);
  }

  return (
    <section className={`note-editor ${daily ? "daily-note-editor" : ""}`}>
      <div className="note-editor-heading">
        <div><span>{daily ? "DAILY NOTES" : "MY NOTES"}</span><h2>{title}</h2></div>
        <button type="button" className="organize-button" onClick={useSuggested}>帮我先整理</button>
      </div>
      <textarea
        value={note}
        onChange={(event) => { setNote(event.target.value); setStatus(null); }}
        placeholder="可以记录：我理解了什么、还有什么没懂、和当前实验有什么关系、下一步想验证什么……"
        rows={daily ? 11 : 9}
      />
      <div className="note-editor-footer">
        <span>保存在当前浏览器；更换设备或清理浏览器数据后不会自动同步。</span>
        <div className="note-actions">
          <button className="note-action-secondary" type="button" onClick={copyNote} disabled={!note.trim()}>{status === "copied" ? "已复制 ✓" : "复制"}</button>
          <button className="note-action-secondary" type="button" onClick={exportNote} disabled={!note.trim()}>{status === "exported" ? "已导出 ✓" : "导出 Markdown"}</button>
          <button className="note-save-button" type="button" onClick={save}>{status === "saved" ? "已保存 ✓" : "保存笔记"}</button>
        </div>
      </div>
    </section>
  );
}

export function ExportAllNotesButton({ entries }: { entries: { id: string; title: string }[] }) {
  function exportAll() {
    const notes = entries.map((entry) => ({ ...entry, note: getSavedNote(entry.id).trim() })).filter((entry) => entry.note);
    if (!notes.length) {
      window.alert("目前还没有已保存的笔记。请先保存至少一条笔记。 ");
      return;
    }
    const content = [
      "# 低温输运研究雷达｜全部阅读笔记",
      "",
      `导出时间：${new Intl.DateTimeFormat("zh-CN", { dateStyle: "long", timeStyle: "short" }).format(new Date())}`,
      "",
      ...notes.flatMap((entry, index) => [`## ${index + 1}. ${entry.title}`, "", entry.note, ""]),
      "---",
      "导出自：低温输运研究雷达",
      "",
    ].join("\n");
    const date = new Date().toISOString().slice(0, 10);
    downloadMarkdown(`低温输运研究雷达-全部笔记-${date}.md`, content);
  }

  return <button className="export-all-button" type="button" onClick={exportAll}>导出全部笔记</button>;
}
