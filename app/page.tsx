"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import report from "@/data/reports.json";
import curatedReading from "@/data/curated-reading.json";
import insightArchive from "@/data/insight-archive.json";
import { ExportAllNotesButton, FavoriteButton, getFavoriteIds, getSavedNote, NoteEditor, READER_EVENT } from "@/app/reader-tools";

type TrackKey = "A" | "B" | "C" | "D" | "E";
type SectionKey = "today" | "reading" | "my-reading" | "library" | "opportunities" | "methods" | "atomic";
type Paper = (typeof report.papers)[number];
type ReadingItem = (typeof curatedReading.items)[number];
type InsightItem = (typeof insightArchive.items)[number];

const tracks: Record<TrackKey, { label: string; short: string }> = {
  A: { label: "低温输运实验", short: "输运实验" },
  B: { label: "材料与器件基础", short: "材料器件" },
  C: { label: "理论与计算", short: "理论计算" },
  D: { label: "设备与测量平台", short: "设备平台" },
  E: { label: "原子与极端制造", short: "原子制造" },
};

const trackKeys = Object.keys(tracks) as TrackKey[];

const navigation: { id: SectionKey; label: string }[] = [
  { id: "today", label: "今日日报" },
  { id: "reading", label: "每日综述" },
  { id: "my-reading", label: "我的阅读" },
  { id: "library", label: "文献库" },
  { id: "opportunities", label: "研究机会" },
  { id: "methods", label: "方法与设备" },
  { id: "atomic", label: "原子制造" },
];

const readingItems: ReadingItem[] = curatedReading.items;
const reportDates = Array.from(new Set([
  ...report.history.map((entry) => entry.date),
  ...curatedReading.history.map((entry) => entry.date),
  ...insightArchive.history.map((entry) => entry.date),
])).sort((a, b) => b.localeCompare(a));
const insightItems: InsightItem[] = insightArchive.items;
const findInsight = (id: string) => insightItems.find((item) => item.id === id);
const unavailableSourceIds = new Set(["2607.12740", "2607.12394", "2607.12754"]);

const reportDateFormatter = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const formatReportDate = (date: string) => reportDateFormatter.format(new Date(`${date}T00:00:00+08:00`));

const updatedAtLabel = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
}).format(new Date(report.updatedAt));

function TransportPlot() {
  return (
    <div className="transport-plot" aria-label="低温电阻随温度变化的示意曲线">
      <div className="chip-grid" aria-hidden="true"><span /><span /><span /><span /></div>
      <svg viewBox="0 0 470 245" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="curve" x1="0" x2="1"><stop offset="0" stopColor="#9cc1ff" /><stop offset="1" stopColor="#1466ee" /></linearGradient>
        </defs>
        <path className="axis" d="M48 22V206H438" />
        <path className="grid-line" d="M48 160H438M48 112H438M48 64H438" />
        <path className="curve-shadow" d="M49 198 C90 188,104 171,132 167 C175 161,216 159,253 151 C306 140,329 119,347 90 C370 54,386 22,437 14" />
        <path className="curve-line" d="M49 198 C90 188,104 171,132 167 C175 161,216 159,253 151 C306 140,329 119,347 90 C370 54,386 22,437 14" />
        <text x="14" y="32">R (Ω)</text><text x="226" y="236">T (K)</text><text x="46" y="224">0</text><text x="190" y="224">1</text><text x="310" y="224">10</text><text x="411" y="224">100</text>
      </svg>
    </div>
  );
}

function PaperTags({ paper, limit = 4 }: { paper: Paper; limit?: number }) {
  return <div className="tag-row">{paper.methods.slice(0, limit).map((method) => <span key={method}>{method}</span>)}</div>;
}

function PaperClassification({ paper }: { paper: Paper }) {
  return (
    <div className={`classification track-${paper.track.toLowerCase()}`}>
      <span className="primary-classification">主分类 {paper.track} · {tracks[paper.track as TrackKey].label}</span>
      {paper.secondaryTracks.map((track) => (
        <span className="secondary-classification" key={track}>
          兼具 {track} · {tracks[track as TrackKey].short}
        </span>
      ))}
    </div>
  );
}

function OriginalSourceLink({ paper, label = "原始文献 ↗" }: { paper: Paper; label?: string }) {
  if (unavailableSourceIds.has(paper.id)) {
    return <span className="source-unavailable" title="本站复核时该原始页面返回不可用状态">原始入口暂不可用</span>;
  }
  return <a href={paper.url} target="_blank" rel="noreferrer">{label}</a>;
}

function LibraryPaper({ paper }: { paper: Paper }) {
  return (
    <article className={`library-item track-${paper.track.toLowerCase()}`}>
      <div className="library-main">
        <div className="paper-meta"><PaperClassification paper={paper} /><span>{paper.venue} · {paper.published}</span></div>
        <h3>{paper.titleZh}</h3><p className="paper-title-en">{paper.title}</p>
        <p className="authors">{paper.authors}</p><PaperTags paper={paper} />
        <div className="evidence-grid"><div><b>核心结果</b><p>{paper.summary}</p></div><div><b>与研究主线的关系</b><p>{paper.relevance}</p></div></div>
      </div>
      <aside className="library-aside">
        <div className="score-panel"><strong>{paper.score.toFixed(1)}</strong><span>/ 10</span><em>{paper.priority} 级</em></div>
        <dl><div><dt>体系</dt><dd>{paper.system}</dd></div><div><dt>条件 / 工艺</dt><dd>{paper.conditions}</dd></div><div><dt>局限</dt><dd>{paper.limitation}</dd></div></dl>
        <div className="library-actions">
          <a className="detail-action" href={`/paper?id=${encodeURIComponent(paper.id)}`}>查看通俗详解 →</a>
          <div className="library-secondary-actions"><FavoriteButton id={paper.id} /><OriginalSourceLink paper={paper} /></div>
        </div>
      </aside>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTrack, setActiveTrack] = useState<"ALL" | TrackKey>("ALL");
  const [activeDate, setActiveDate] = useState<string>(report.reportDate);
  const [sortBy, setSortBy] = useState<"score" | "date">("score");
  const [activeSection, setActiveSection] = useState<SectionKey>("today");
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [savedNoteIds, setSavedNoteIds] = useState<string[]>([]);
  const [expandedHistory, setExpandedHistory] = useState<string | null>(report.history.at(-1)?.date ?? null);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120;
      let current: SectionKey = "today";

      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) current = item.id;
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const syncReaderState = () => {
      setFavoriteIds(getFavoriteIds());
      const allIds = [...report.papers.map((paper) => paper.id), ...readingItems.map((item) => item.id), ...insightItems.map((item) => item.id), `daily-${report.reportDate}`];
      setSavedNoteIds(allIds.filter((id) => Boolean(getSavedNote(id).trim())));
    };
    syncReaderState();
    window.addEventListener("storage", syncReaderState);
    window.addEventListener(READER_EVENT, syncReaderState);
    return () => {
      window.removeEventListener("storage", syncReaderState);
      window.removeEventListener(READER_EVENT, syncReaderState);
    };
  }, []);

  useEffect(() => {
    setExpandedHistory(activeDate);
  }, [activeDate]);

  const filteredPapers = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("zh-CN");
    const selectedHistory = report.history.find((entry) => entry.date === activeDate);
    const datePaperIds = new Set(selectedHistory?.paperIds ?? []);
    const papers = report.papers.filter((paper) => {
      const inTrack = activeTrack === "ALL" || paper.track === activeTrack || paper.secondaryTracks.includes(activeTrack);
      if (!inTrack) return false;
      if (!datePaperIds.has(paper.id)) return false;
      if (!normalized) return true;
      const haystack = [paper.title, paper.titleZh, paper.authors, paper.system, paper.summary, paper.relevance, paper.doi, paper.arxiv, ...paper.methods].join(" ").toLocaleLowerCase("zh-CN");
      return haystack.includes(normalized);
    });
    return [...papers].sort((a, b) => {
      if (activeTrack !== "ALL") {
        const aIsPrimary = a.track === activeTrack;
        const bIsPrimary = b.track === activeTrack;
        if (aIsPrimary !== bIsPrimary) return aIsPrimary ? -1 : 1;
      }
      return sortBy === "score" ? b.score - a.score : b.published.localeCompare(a.published);
    });
  }, [activeDate, activeTrack, query, sortBy]);

  const primaryPapers = activeTrack === "ALL" ? filteredPapers : filteredPapers.filter((paper) => paper.track === activeTrack);
  const relatedPapers = activeTrack === "ALL" ? [] : filteredPapers.filter((paper) => paper.track !== activeTrack);
  const favoritePapers = report.papers.filter((paper) => favoriteIds.includes(paper.id));
  const favoriteReadings = readingItems.filter((item) => favoriteIds.includes(item.id));
  const favoriteInsights = insightItems.filter((item) => favoriteIds.includes(item.id));
  const selectedReportHistory = report.history.find((entry) => entry.date === activeDate);
  const selectedPaperIds = new Set(selectedReportHistory?.paperIds ?? []);
  const selectedPapers = report.papers.filter((paper) => selectedPaperIds.has(paper.id));
  const selectedFeatured = selectedPapers.filter((paper) => paper.featured).sort((a, b) => b.score - a.score).slice(0, 5);
  const featuredForDate = selectedFeatured.length > 0 ? selectedFeatured : [...selectedPapers].sort((a, b) => b.score - a.score).slice(0, 5);
  const selectedReadingHistory = curatedReading.history.find((entry) => entry.date === activeDate);
  const selectedReview = selectedReadingHistory ? readingItems.find((item) => item.id === selectedReadingHistory.reviewId) : undefined;
  const selectedClassics = selectedReadingHistory?.classicIds.map((id) => readingItems.find((item) => item.id === id)).filter((item): item is ReadingItem => Boolean(item)) ?? [];
  const selectedInsightHistory = insightArchive.history.find((entry) => entry.date === activeDate);
  const selectedOpportunityItems = selectedInsightHistory?.opportunityIds.map(findInsight).filter((item): item is InsightItem => Boolean(item)) ?? [];
  const selectedMethodItems = selectedInsightHistory?.methodIds.map(findInsight).filter((item): item is InsightItem => Boolean(item)) ?? [];
  const selectedAtomicItems = selectedInsightHistory?.atomicIds.map(findInsight).filter((item): item is InsightItem => Boolean(item)) ?? [];
  const selectedDateLabel = formatReportDate(activeDate);
  const counts = report.papers.reduce<Record<string, number>>((acc, paper) => {
    if (!selectedPaperIds.has(paper.id)) return acc;
    acc[paper.track] = (acc[paper.track] ?? 0) + 1;
    return acc;
  }, {});

  function submitSearch(event: FormEvent) {
    event.preventDefault();
    setActiveSection("library");
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectTrack(track: TrackKey) {
    setActiveTrack(track);
    setActiveSection("library");
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth" });
  }

  function selectDate(date: string) {
    setActiveDate(date);
  }

  function selectSection(section: SectionKey) {
    setActiveSection(section);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页"><span className="brand-mark">LT</span><span>低温输运研究雷达</span></a>
        <nav aria-label="主导航">
          {navigation.map((item) => (
            <a
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => selectSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="date-line">{selectedDateLabel} · 已归档日报</p>
          <h1>跨材料追踪低温输运研究全链条</h1>
          <p className="hero-kicker">实验 <b>·</b> 制备 <b>·</b> 理论 <b>·</b> 设备 <b>·</b> 原子制造</p>
          <p className="hero-description">以你当前的原子级制造、MTJ器件与存储器工作为核心，追踪界面控制、器件制备、低温输运、可靠性和规模集成；石墨烯作为可迁移方法与重要背景保留，不再占据默认中心。</p>
          <form className="hero-actions" onSubmit={submitSearch}>
            <label className="search-shell"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索材料、现象、方法或 DOI" aria-label="搜索文献" /></label>
            <button className="primary-action" type="submit">搜索文献 <span aria-hidden="true">→</span></button>
          </form>
        </div>
        <TransportPlot />
      </section>

      <section className="research-focus-strip" aria-label="当前研究优先级">
        <div><span>CURRENT FOCUS</span><b>当前选文优先级</b></div>
        <ol>
          <li><strong>01</strong><span>原子级制造与界面控制</span></li>
          <li><strong>02</strong><span>MTJ · STT/SOT/VCMA存储器</span></li>
          <li><strong>03</strong><span>器件工艺 · 可靠性 · 晶圆级集成</span></li>
          <li><strong>04</strong><span>可产业化的低温输运与设备平台</span></li>
        </ol>
      </section>

      <section className="track-grid" aria-label="五条研究主线">
        {trackKeys.map((key) => (
          <button className={`track-card track-${key.toLowerCase()}`} key={key} onClick={() => selectTrack(key)} type="button">
            <span className="track-letter">{key}</span><span className="track-label">{tracks[key].label}</span><strong>{counts[key] ?? 0}</strong>
          </button>
        ))}
      </section>
      <section className="date-filter-bar" aria-label="按日报日期筛选">
        <div><span>GLOBAL DATE</span><div><b>选择一个日报日期</b><small>论文、综述、经典文章、研究机会、设备与原子制造将一起切换</small></div></div>
        <label><span>当前显示日期</span><select value={activeDate} onChange={(event) => selectDate(event.target.value)}>{reportDates.map((date) => <option value={date} key={date}>{date}{date === report.reportDate ? "（最新）" : ""}</option>)}</select></label>
        <span className="date-sync-badge">全站同步</span>
      </section>

      <section className="today" id="today">
        <div className="section-heading"><div><p>DAILY SIGNAL · {activeDate}</p><h2>本期最值得关注</h2></div><span>{selectedReportHistory ? `${selectedReportHistory.total} 项已核验内容` : "本日没有论文记录"}</span></div>
        <div className="featured-grid">
          {featuredForDate.map((paper) => (
            <article className={`paper-card track-${paper.track.toLowerCase()}`} key={paper.id}>
              <div className="paper-meta"><PaperClassification paper={paper} /><div className="paper-meta-tools"><span>{paper.published}</span><FavoriteButton id={paper.id} compact /></div></div>
              <h3>{paper.titleZh}</h3><p className="paper-title-en">{paper.title}</p><PaperTags paper={paper} limit={3} /><p className="summary">{paper.summary}</p>
              <div className="paper-footer"><span className="read-badge">点击查看通俗详解</span><span className="score"><b>{paper.score.toFixed(1)}</b> / 10</span></div>
              <a className="card-link" href={`/paper?id=${encodeURIComponent(paper.id)}`} aria-label={`查看 ${paper.title} 的通俗详解`} />
            </article>
          ))}
        </div>
        {featuredForDate.length === 0 && <div className="empty-state"><b>这个日期没有精选论文</b><span>可切换上方日期查看其他日报。</span></div>}
      </section>

      <section className="reading-section" id="reading">
        <div className="section-heading wide"><div><p>CURATED READING · {activeDate}</p><h2>本期综述与经典文章</h2></div><span>跟随上方日期切换 · 历史内容永久保留</span></div>
        {selectedReview ? <article className={`daily-review-card track-${selectedReview.track.toLowerCase()}`}>
          <div className="reading-card-top">
            <div><span className="reading-kind">{selectedReview.kind}</span><span className="old-paper-badge">非当天新增 · {selectedReview.published}</span></div>
            <FavoriteButton id={selectedReview.id} />
          </div>
          <div className="reading-review-layout">
            <div>
              <p className="reading-track">主线 {selectedReview.track} · {tracks[selectedReview.track as TrackKey].label}</p>
              <h3>{selectedReview.titleZh}</h3>
              <p className="reading-title-en">{selectedReview.title}</p>
              <p className="reading-authors">{selectedReview.authors} · {selectedReview.venue}</p>
              <p className="assistant-summary">{selectedReview.assistantSummary}</p>
            </div>
            <aside>
              <b>为什么本期推荐</b><p>{selectedReview.whySelected}</p>
              <b>建议阅读顺序</b><ol>{selectedReview.readingGuide.map((item) => <li key={item}>{item}</li>)}</ol>
              <a className="curated-detail-link" href={`/reading?id=${encodeURIComponent(selectedReview.id)}`}>查看通俗详解 →</a>
              <a href={selectedReview.url} target="_blank" rel="noreferrer">查看出版社页面 ↗</a>
            </aside>
          </div>
        </article> : <div className="empty-state"><b>这个日期没有综述记录</b><span>切换上方日期即可查看其他已归档综述。</span></div>}

        <div className="classic-heading"><div><h3>经典文章回看</h3><p>按推荐日期归档，文章本身可以来自近期或近几年。</p></div><span>{selectedClassics.length} 篇</span></div>
        <div className="classic-grid">
          {selectedClassics.map((item) => (
            <article className={`classic-card track-${item.track.toLowerCase()}`} key={item.id}>
              <div className="reading-card-top"><div><span className="reading-kind">{item.kind}</span><span className="old-paper-badge">{item.published}</span></div><FavoriteButton id={item.id} compact /></div>
              <p className="reading-track">主线 {item.track} · {tracks[item.track as TrackKey].label}</p>
              <h3>{item.titleZh}</h3><p className="reading-title-en">{item.title}</p>
              <p className="assistant-summary">{item.assistantSummary}</p>
              <div className="classic-why"><b>为什么值得重读</b><p>{item.whySelected}</p></div>
              <div className="classic-actions"><a className="curated-detail-link" href={`/reading?id=${encodeURIComponent(item.id)}`}>查看通俗详解 →</a><a href={item.url} target="_blank" rel="noreferrer">出版社原文 ↗</a></div>
            </article>
          ))}
        </div>
        <div className="curated-archive">
          <div className="classic-heading"><div><h3>{activeDate} 综述与经典文献档案</h3><p>切换上方日期查看往期；页面只展开当前日期，避免列表无限增长。</p></div><span>{curatedReading.items.length} 篇永久归档</span></div>
          <div className="curated-history-list">
            {selectedReadingHistory && (
              <article key={selectedReadingHistory.date}>
                <div className="curated-history-date"><b>{selectedReadingHistory.date}</b><span>1 篇综述 · {selectedReadingHistory.classicIds.length} 篇经典文章</span></div>
                <div className="curated-history-papers">
                  {[selectedReadingHistory.reviewId, ...selectedReadingHistory.classicIds].map((id) => {
                    const item = curatedReading.items.find((candidate) => candidate.id === id);
                    if (!item) return null;
                    return <a href={`/reading?id=${encodeURIComponent(item.id)}`} key={item.id}><span>{item.kind}</span><b>{item.titleZh}</b><em>查看详解 →</em></a>;
                  })}
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      <section className="my-reading-section" id="my-reading">
        <div className="section-heading wide"><div><p>MY READING</p><h2>我的收藏与阅读整理</h2></div><span>{favoriteIds.length} 项收藏 · {savedNoteIds.length} 条已保存笔记</span></div>
        <div className="saved-reading-panel">
          <div className="saved-reading-heading"><div><h3>红心收藏</h3><p>文章、研究机会和设备方案都能收藏；再次点击红心即可取消。</p></div><div className="saved-reading-tools"><span>保存在当前浏览器</span><ExportAllNotesButton entries={[...report.papers.map((paper) => ({ id: paper.id, title: paper.titleZh })), ...readingItems.map((item) => ({ id: item.id, title: item.titleZh })), ...insightItems.map((item) => ({ id: item.id, title: item.title })), { id: `daily-${report.reportDate}`, title: `${reportDateLabel}阅读整理` }]} /></div></div>
          {favoritePapers.length + favoriteReadings.length + favoriteInsights.length === 0 ? (
            <div className="saved-empty"><span>♡</span><div><b>还没有收藏文章</b><p>点击文章卡片上的红心，这里就会形成你的待读清单。</p></div></div>
          ) : (
            <div className="saved-reading-list">
              {favoritePapers.map((paper) => <article key={paper.id}><FavoriteButton id={paper.id} compact /><div><span>{paper.track} · {tracks[paper.track as TrackKey].short}</span><b>{paper.titleZh}</b><small>{savedNoteIds.includes(paper.id) ? "已有笔记" : "尚未记笔记"}</small></div><a href={`/paper?id=${encodeURIComponent(paper.id)}`}>继续阅读 →</a></article>)}
              {favoriteReadings.map((item) => <article key={item.id}><FavoriteButton id={item.id} compact /><div><span>{item.kind}</span><b>{item.titleZh}</b><small>{savedNoteIds.includes(item.id) ? "已有笔记" : "旧文精选"}</small></div><a href={`/reading?id=${encodeURIComponent(item.id)}`}>继续阅读 →</a></article>)}
              {favoriteInsights.map((item) => <article key={item.id}><FavoriteButton id={item.id} compact /><div><span>{item.typeZh} · {item.trackLabel}</span><b>{item.title}</b><small>{savedNoteIds.includes(item.id) ? "已有笔记" : "方案详解"}</small></div><a href={`/insight?id=${encodeURIComponent(item.id)}`}>继续查看 →</a></article>)}
            </div>
          )}
        </div>
        <NoteEditor
          id={`daily-${activeDate}`}
          title={`${selectedDateLabel}阅读整理`}
          daily
          suggested={`【本期先看】\n${featuredForDate.map((paper, index) => `${index + 1}. ${paper.titleZh}：${paper.summary}`).join("\n")}\n\n【本期综述】\n${selectedReview ? `${selectedReview.titleZh}：${selectedReview.assistantSummary}` : "本期未归档综述"}\n\n【共同线索】\n本期内容可从“材料与界面如何影响可测输运”“理论候选如何转化为实验判据”“表征与设备怎样进入制造反馈闭环”三条线整理。\n\n【我已经理解】\n\n【我还没理解】\n\n【与当前实验/设备的关系】\n\n【下一步要查或要做】\n`}
        />
      </section>

      <section className="library-section" id="library">
        <div className="section-heading wide"><div><p>RESEARCH LIBRARY</p><h2>文献库</h2></div><span>已核验 {report.papers.length} 项 · 按 DOI / arXiv / 标题去重</span></div>
        <div className="library-toolbar">
          <div className="filter-chips" aria-label="按研究主线筛选">
            <button className={activeTrack === "ALL" ? "selected" : ""} onClick={() => setActiveTrack("ALL")} type="button">全部</button>
            {trackKeys.map((key) => <button className={`${activeTrack === key ? "selected" : ""} track-${key.toLowerCase()}`} onClick={() => setActiveTrack(key)} type="button" key={key}>{key} {tracks[key].short}</button>)}
          </div>
          <div className="toolbar-right">
            <label className="compact-search"><span>搜索</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="题目、材料、方法、DOI" /></label>
            <label className="sort-select date-select"><span>全站日期</span><select value={activeDate} onChange={(event) => setActiveDate(event.target.value)}>{reportDates.map((date) => <option value={date} key={date}>{date}</option>)}</select></label>
            <label className="sort-select"><span>排序</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value as "score" | "date")}><option value="score">综合评分</option><option value="date">发表时间</option></select></label>
          </div>
        </div>
        <p className="result-count">
          {activeTrack === "ALL"
            ? `当前显示 ${filteredPapers.length} 项 · ${activeDate} 日报`
            : `当前显示 ${filteredPapers.length} 项 · ${activeDate} 日报 · 主分类 ${activeTrack}：${primaryPapers.length} 项 · 兼具 ${activeTrack}：${relatedPapers.length} 项`}
        </p>
        <div className="library-list">
          {activeTrack === "ALL" ? (
            filteredPapers.map((paper) => <LibraryPaper paper={paper} key={paper.id} />)
          ) : (
            <>
              <div className="result-group-heading primary-group">
                <div><span>{activeTrack}</span><b>主分类为 {activeTrack} · {tracks[activeTrack].label}</b></div>
                <small>{primaryPapers.length} 项 · 优先显示</small>
              </div>
              {primaryPapers.map((paper) => <LibraryPaper paper={paper} key={paper.id} />)}
              {relatedPapers.length > 0 && (
                <div className="result-group-heading related-group">
                  <div><span>+</span><b>兼具 {activeTrack} 的交叉文献</b></div>
                  <small>{relatedPapers.length} 项 · 主分类属于其他方向，仍与 {tracks[activeTrack].label} 相关</small>
                </div>
              )}
              {relatedPapers.map((paper) => <LibraryPaper paper={paper} key={paper.id} />)}
            </>
          )}
        </div>
        {filteredPapers.length === 0 && <div className="empty-state"><b>没有找到匹配内容</b><span>请更换关键词或切换研究主线。</span></div>}
      </section>

      <section className="opportunity-section" id="opportunities">
        <div className="section-heading"><div><p>CROSS-TRACK IDEAS · {activeDate}</p><h2>本期跨主线研究机会</h2></div><span>跟随全站日期 · 点击进入完整实施方案</span></div>
        <div className="opportunity-grid">
          {selectedOpportunityItems.map((item) => (
            <article className="insight-summary-card" key={item.id}>
              <div className="insight-card-top"><span>{item.trackLabel}</span><FavoriteButton id={item.id} compact /></div>
              <h3>{item.title}</h3><p>{item.summary}</p>
              <b>{item.subtitle}</b>
              <a className="insight-detail-link" href={`/insight?id=${encodeURIComponent(item.id)}`}>查看问题、步骤、设备与验收指标 →</a>
            </article>
          ))}
        </div>
        {selectedOpportunityItems.length === 0 && <div className="empty-state"><b>这个日期没有研究机会记录</b><span>可切换上方日期查看往期方案。</span></div>}
      </section>

      <section className="methods-section" id="methods">
        <div className="section-heading"><div><p>METHODS & INFRASTRUCTURE · {activeDate}</p><h2>本期方法与设备建设</h2></div><span>重点生态：ICEoxford · Oxford Instruments · Quantum Design · 多场科技 · 飞斯科</span></div>
        <div className="equipment-focus-note"><b>设备资料如何进入日报</b><span>优先跟踪正式技术文档、应用案例、升级公告和系统集成方案；厂商材料单独标注来源类型，不作为科研结论。</span></div>
        <div className="method-layout">
          {selectedMethodItems[0] && <div className="method-feature insight-method-feature">
            <div className="insight-card-top"><p className="eyebrow">本期设备启发</p><FavoriteButton id={selectedMethodItems[0].id} compact /></div>
            <h3>{selectedMethodItems[0].title}</h3><p>{selectedMethodItems[0].summary}</p>
            <ul>{selectedMethodItems[0].metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
            <a className="insight-detail-link on-dark" href={`/insight?id=${encodeURIComponent(selectedMethodItems[0].id)}`}>查看完整建设、校准与验收路线 →</a>
          </div>}
          <div className="method-cards">
            {selectedMethodItems.slice(1).map((item, index) => (
              <article className="method-link-card" key={item.id}>
                <span>{String(index + 2).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.summary}</p><a href={`/insight?id=${encodeURIComponent(item.id)}`}>查看设备方案 →</a></div>
              </article>
            ))}
          </div>
        </div>
        {selectedMethodItems.length === 0 && <div className="empty-state"><b>这个日期没有设备方案记录</b><span>可切换上方日期查看往期平台建设内容。</span></div>}
      </section>

      <section className="atomic-section" id="atomic">
        <div className="section-heading"><div><p>ATOMIC & EXTREME MANUFACTURING · {activeDate}</p><h2>本期原子制造与极端制造</h2></div><span>设备、工艺和表征分别给出完整路线</span></div>
        <div className="atomic-grid">
          {selectedAtomicItems.map((item) => (
            <article className="insight-summary-card" key={item.id}>
              <div className="insight-card-top"><span>{item.trackLabel.replace("E · ", "")}</span><FavoriteButton id={item.id} compact /></div>
              <h3>{item.title}</h3><p>{item.summary}</p><small>{item.subtitle}</small>
              <a className="insight-detail-link atomic-link" href={`/insight?id=${encodeURIComponent(item.id)}`}>查看完整设备 / 工艺 / 表征路线 →</a>
            </article>
          ))}
        </div>
        <div className="atomic-paper-strip">
          {selectedPapers.filter((paper) => paper.track === "E" || paper.secondaryTracks.includes("E")).map((paper) => <a href={`/paper?id=${encodeURIComponent(paper.id)}`} key={paper.id}><span>{paper.score.toFixed(1)}</span><div><b>{paper.titleZh}</b><small>{paper.methods.slice(0, 3).join(" · ")}</small></div><em>详解 →</em></a>)}
        </div>
        {selectedAtomicItems.length === 0 && <div className="empty-state"><b>这个日期没有原子制造方案记录</b><span>相关论文仍会按兼具E标签显示在文献库。</span></div>}
      </section>

      <section className="insight-archive-section">
        <div className="history-heading"><p>IDEA & PLATFORM ARCHIVE</p><h2>{activeDate} 研究机会与方案档案</h2><span>只展开当前所选日期；切换上方日期即可查看往期，历史数据不删除。</span></div>
        <div className="insight-history-list">
          {selectedInsightHistory && (() => {
            const ids = [...selectedInsightHistory.opportunityIds, ...selectedInsightHistory.methodIds, ...selectedInsightHistory.atomicIds];
            return <article key={selectedInsightHistory.date}>
              <div className="insight-history-date"><b>{selectedInsightHistory.date}</b><span>{selectedInsightHistory.opportunityIds.length} 条研究机会 · {selectedInsightHistory.methodIds.length} 条设备方案 · {selectedInsightHistory.atomicIds.length} 条原子制造路线</span></div>
              <div className="insight-history-links">{ids.map((id) => {
                const item = findInsight(id);
                if (!item) return null;
                return <a href={`/insight?id=${encodeURIComponent(item.id)}`} key={item.id}><span>{item.typeZh}</span><b>{item.title}</b><em>查看详解 →</em></a>;
              })}</div>
            </article>;
          })()}
        </div>
      </section>

      <section className="history-section">
        <div className="history-heading"><p>DAILY ARCHIVE</p><h2>{activeDate} 日报档案</h2><span>所有历史记录仍永久保存；此处只显示上方选中的日期，避免页面无限变长。</span></div>
        <div className="history-list">
          {selectedReportHistory && (
            <article className={expandedHistory === selectedReportHistory.date ? "is-open" : ""} key={selectedReportHistory.date}>
              <button className="history-summary" type="button" onClick={() => setExpandedHistory(expandedHistory === selectedReportHistory.date ? null : selectedReportHistory.date)} aria-expanded={expandedHistory === selectedReportHistory.date}>
                <div><b>{selectedReportHistory.date}</b><small>{selectedReportHistory.label} · {selectedReportHistory.total} 项已核验内容</small></div>
                <div className="coverage"><span>A {selectedReportHistory.counts.A}</span><span>B {selectedReportHistory.counts.B}</span><span>C {selectedReportHistory.counts.C}</span><span>D {selectedReportHistory.counts.D}</span><span>E {selectedReportHistory.counts.E}</span><em>{expandedHistory === selectedReportHistory.date ? "收起 ↑" : "展开 ↓"}</em></div>
              </button>
              {expandedHistory === selectedReportHistory.date && (
                <div className="history-papers">
                  {selectedReportHistory.paperIds.map((id, index) => {
                    const paper = report.papers.find((item) => item.id === id);
                    if (!paper) return null;
                    return <a href={`/paper?id=${encodeURIComponent(paper.id)}`} key={paper.id}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{paper.titleZh}</b><small>主分类 {paper.track} · {paper.venue}</small></div><em>查看详解 →</em></a>;
                  })}
                </div>
              )}
            </article>
          )}
        </div>
      </section>

      <footer><div><span className="brand-mark">LT</span><b>低温输运研究雷达</b></div><p>每日更新 · 来源核验 · 材料中立 · 研究链条关联</p><small>最近更新：{updatedAtLabel}（北京时间）</small></footer>
    </main>
  );
}
