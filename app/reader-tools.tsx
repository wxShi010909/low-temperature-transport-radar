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
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setNote(getSavedNote(id)));
    return () => window.cancelAnimationFrame(frame);
  }, [id]);

  function save() {
    window.localStorage.setItem(`${NOTE_PREFIX}${id}`, note.trim());
    setSaved(true);
    announceChange();
    window.setTimeout(() => setSaved(false), 1800);
  }

  function useSuggested() {
    if (note.trim() && !window.confirm("当前草稿已有内容，是否用系统整理模板替换？")) return;
    setNote(suggested);
    setSaved(false);
  }

  return (
    <section className={`note-editor ${daily ? "daily-note-editor" : ""}`}>
      <div className="note-editor-heading">
        <div><span>{daily ? "DAILY NOTES" : "MY NOTES"}</span><h2>{title}</h2></div>
        <button type="button" className="organize-button" onClick={useSuggested}>帮我先整理</button>
      </div>
      <textarea
        value={note}
        onChange={(event) => { setNote(event.target.value); setSaved(false); }}
        placeholder="可以记录：我理解了什么、还有什么没懂、和当前实验有什么关系、下一步想验证什么……"
        rows={daily ? 11 : 9}
      />
      <div className="note-editor-footer">
        <span>保存在当前浏览器；更换设备或清理浏览器数据后不会自动同步。</span>
        <button type="button" onClick={save}>{saved ? "已保存 ✓" : "保存笔记"}</button>
      </div>
    </section>
  );
}
