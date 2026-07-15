"use client";

import { useEffect, useRef, useState } from "react";
import report from "@/data/reports.json";
import curatedReading from "@/data/curated-reading.json";
import insightArchive from "@/data/insight-archive.json";
import { ExportAllNotesButton, FavoriteButton, getFavoriteIds, getSavedNote, NoteEditor, READER_EVENT } from "@/app/reader-tools";

type DockTab = "notes" | "favorites";

export type ReadingDockContext = {
  id: string;
  title: string;
  suggested: string;
  label: string;
  daily?: boolean;
};

export function useReadingDockState() {
  const [open, setOpenState] = useState(false);

  useEffect(() => {
    const compactViewport = window.matchMedia("(max-width: 1279px)");
    const restoreDesktopPreference = () => {
      const stored = window.localStorage.getItem("lt-radar:reading-dock:v1");
      setOpenState(stored ? stored === "open" : true);
    };
    const adaptToViewport = (event: MediaQueryListEvent) => {
      if (event.matches) setOpenState(false);
      else restoreDesktopPreference();
    };

    if (compactViewport.matches) setOpenState(false);
    else restoreDesktopPreference();
    compactViewport.addEventListener("change", adaptToViewport);
    return () => compactViewport.removeEventListener("change", adaptToViewport);
  }, []);

  function setOpen(next: boolean) {
    setOpenState(next);
    window.localStorage.setItem("lt-radar:reading-dock:v1", next ? "open" : "closed");
  }

  return { open, setOpen };
}

export function ReadingDock({ context, open, onOpenChange }: { context: ReadingDockContext; open: boolean; onOpenChange: (open: boolean) => void }) {
  const [tab, setTab] = useState<DockTab>("notes");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [savedNoteIds, setSavedNoteIds] = useState<string[]>([]);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => () => {
    if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    const sync = () => {
      setFavoriteIds(getFavoriteIds());
      const ids = [
        ...report.papers.map((paper) => paper.id),
        ...curatedReading.items.map((item) => item.id),
        ...insightArchive.items.map((item) => item.id),
        ...report.history.map((entry) => `daily-${entry.date}`),
        context.id,
      ];
      setSavedNoteIds(Array.from(new Set(ids)).filter((id) => Boolean(getSavedNote(id).trim())));
    };

    sync();
    window.addEventListener("storage", sync);
    window.addEventListener(READER_EVENT, sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener(READER_EVENT, sync);
    };
  }, [context.id]);

  const favoritePapers = report.papers.filter((paper) => favoriteIds.includes(paper.id));
  const favoriteReadings = curatedReading.items.filter((item) => favoriteIds.includes(item.id));
  const favoriteInsights = insightArchive.items.filter((item) => favoriteIds.includes(item.id));
  const totalFavorites = favoritePapers.length + favoriteReadings.length + favoriteInsights.length;
  const noteEntryMap = new Map([
    ...report.papers.map((paper) => [paper.id, paper.titleZh] as const),
    ...curatedReading.items.map((item) => [item.id, item.titleZh] as const),
    ...insightArchive.items.map((item) => [item.id, item.title] as const),
    ...report.history.map((entry) => [`daily-${entry.date}`, `${entry.date} 阅读整理`] as const),
    [context.id, context.title] as const,
  ]);
  const noteEntries = Array.from(noteEntryMap, ([id, title]) => ({ id, title }));

  function closeDock() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onOpenChange(false);
      return;
    }
    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setClosing(false);
      onOpenChange(false);
      closeTimer.current = null;
    }, 220);
  }

  if (!open) {
    return <button className="reading-dock-launcher" type="button" onClick={() => onOpenChange(true)} aria-label="打开阅读助手"><span>♡</span><b>笔记与收藏</b><em>{totalFavorites}</em></button>;
  }

  return (
    <>
      <button className={`reading-dock-backdrop ${closing ? "is-closing" : ""}`} type="button" onClick={closeDock} aria-label="关闭阅读助手遮罩" />
      <aside className={`reading-dock ${closing ? "is-closing" : ""}`} aria-label="固定阅读助手">
        <div className="reading-dock-header"><div><span>READING DESK</span><b>阅读助手</b><small>{context.label} · {totalFavorites} 项收藏</small></div><button type="button" onClick={closeDock} aria-label="收起阅读助手">×</button></div>
        <div className="reading-dock-tabs" role="tablist" aria-label="阅读助手内容">
          <button className={tab === "notes" ? "active" : ""} type="button" role="tab" aria-selected={tab === "notes"} onClick={() => setTab("notes")}>快速笔记</button>
          <button className={tab === "favorites" ? "active" : ""} type="button" role="tab" aria-selected={tab === "favorites"} onClick={() => setTab("favorites")}>收藏 {totalFavorites}</button>
        </div>
        <div className="reading-dock-content">
          {tab === "notes" ? (
            <NoteEditor id={context.id} title={context.title} daily={context.daily} compact suggested={context.suggested} />
          ) : (
            <div className="dock-favorites-panel">
              {totalFavorites === 0 ? <div className="dock-empty"><span>♡</span><b>还没有收藏</b><p>点击文章或方案上的红心，这里会立即出现。</p></div> : <div className="dock-favorites-list">
                {favoritePapers.map((paper) => <article key={paper.id}><FavoriteButton id={paper.id} compact /><a href={`/paper?id=${encodeURIComponent(paper.id)}`}><span>{paper.track} · 论文</span><b>{paper.titleZh}</b><small>{savedNoteIds.includes(paper.id) ? "已有笔记" : "打开详解"}</small></a></article>)}
                {favoriteReadings.map((item) => <article key={item.id}><FavoriteButton id={item.id} compact /><a href={`/reading?id=${encodeURIComponent(item.id)}`}><span>{item.kind}</span><b>{item.titleZh}</b><small>{savedNoteIds.includes(item.id) ? "已有笔记" : "打开详解"}</small></a></article>)}
                {favoriteInsights.map((item) => <article key={item.id}><FavoriteButton id={item.id} compact /><a href={`/insight?id=${encodeURIComponent(item.id)}`}><span>{item.typeZh}</span><b>{item.title}</b><small>{savedNoteIds.includes(item.id) ? "已有笔记" : "打开方案"}</small></a></article>)}
              </div>}
              <div className="dock-export"><span>{savedNoteIds.length} 条已保存笔记</span><ExportAllNotesButton entries={noteEntries} /></div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
