"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import report from "@/data/reports.json";
import dailyReading from "@/data/daily-reading.json";
import { ExportAllNotesButton, FavoriteButton, getFavoriteIds, getSavedNote, NoteEditor, READER_EVENT } from "@/app/reader-tools";

type TrackKey = "A" | "B" | "C" | "D" | "E";
type SectionKey = "today" | "reading" | "my-reading" | "library" | "opportunities" | "methods" | "atomic";
type Paper = (typeof report.papers)[number];
type ReadingItem = typeof dailyReading.review | (typeof dailyReading.classics)[number];

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

const counts = report.papers.reduce<Record<string, number>>((acc, paper) => {
  acc[paper.track] = (acc[paper.track] ?? 0) + 1;
  return acc;
}, {});

const featured = report.papers.filter((paper) => paper.featured).slice(0, 5);
const readingItems: ReadingItem[] = [dailyReading.review, ...dailyReading.classics];

const reportDateLabel = new Intl.DateTimeFormat("zh-CN", {
  timeZone: "Asia/Shanghai",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(new Date(`${report.reportDate}T00:00:00+08:00`));

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
          <div className="library-secondary-actions"><FavoriteButton id={paper.id} /><a href={paper.url} target="_blank" rel="noreferrer">原始文献 ↗</a></div>
        </div>
      </aside>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTrack, setActiveTrack] = useState<"ALL" | TrackKey>("ALL");
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
      const allIds = [...report.papers.map((paper) => paper.id), ...readingItems.map((item) => item.id), `daily-${report.reportDate}`];
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

  const filteredPapers = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("zh-CN");
    const papers = report.papers.filter((paper) => {
      const inTrack = activeTrack === "ALL" || paper.track === activeTrack || paper.secondaryTracks.includes(activeTrack);
      if (!inTrack) return false;
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
  }, [activeTrack, query, sortBy]);

  const primaryPapers = activeTrack === "ALL" ? filteredPapers : filteredPapers.filter((paper) => paper.track === activeTrack);
  const relatedPapers = activeTrack === "ALL" ? [] : filteredPapers.filter((paper) => paper.track !== activeTrack);
  const favoritePapers = report.papers.filter((paper) => favoriteIds.includes(paper.id));
  const favoriteReadings = readingItems.filter((item) => favoriteIds.includes(item.id));

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
          <p className="date-line">{reportDateLabel} · 工作日报</p>
          <h1>跨材料追踪低温输运研究全链条</h1>
          <p className="hero-kicker">实验 <b>·</b> 制备 <b>·</b> 理论 <b>·</b> 设备 <b>·</b> 原子制造</p>
          <p className="hero-description">每日检索、核验并关联从材料生长到低温测量的关键进展，让论文、工艺、设备和可验证的研究机会出现在同一条线上。</p>
          <form className="hero-actions" onSubmit={submitSearch}>
            <label className="search-shell"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索材料、现象、方法或 DOI" aria-label="搜索文献" /></label>
            <button className="primary-action" type="submit">搜索文献 <span aria-hidden="true">→</span></button>
          </form>
        </div>
        <TransportPlot />
      </section>

      <section className="track-grid" aria-label="五条研究主线">
        {trackKeys.map((key) => (
          <button className={`track-card track-${key.toLowerCase()}`} key={key} onClick={() => selectTrack(key)} type="button">
            <span className="track-letter">{key}</span><span className="track-label">{tracks[key].label}</span><strong>{counts[key] ?? 0}</strong>
          </button>
        ))}
      </section>

      <section className="today" id="today">
        <div className="section-heading"><div><p>DAILY SIGNAL</p><h2>今日最值得关注</h2></div><span>{report.scope}</span></div>
        <div className="featured-grid">
          {featured.map((paper) => (
            <article className={`paper-card track-${paper.track.toLowerCase()}`} key={paper.id}>
              <div className="paper-meta"><PaperClassification paper={paper} /><div className="paper-meta-tools"><span>{paper.published}</span><FavoriteButton id={paper.id} compact /></div></div>
              <h3>{paper.titleZh}</h3><p className="paper-title-en">{paper.title}</p><PaperTags paper={paper} limit={3} /><p className="summary">{paper.summary}</p>
              <div className="paper-footer"><span className="read-badge">点击查看通俗详解</span><span className="score"><b>{paper.score.toFixed(1)}</b> / 10</span></div>
              <a className="card-link" href={`/paper?id=${encodeURIComponent(paper.id)}`} aria-label={`查看 ${paper.title} 的通俗详解`} />
            </article>
          ))}
        </div>
      </section>

      <section className="reading-section" id="reading">
        <div className="section-heading wide"><div><p>CURATED READING</p><h2>每日综述与经典文章</h2></div><span>与当天新增分开 · 只选已发表的高质量旧文献</span></div>
        <article className="daily-review-card track-a">
          <div className="reading-card-top">
            <div><span className="reading-kind">{dailyReading.review.kind}</span><span className="old-paper-badge">非当天新增 · {dailyReading.review.published}</span></div>
            <FavoriteButton id={dailyReading.review.id} />
          </div>
          <div className="reading-review-layout">
            <div>
              <p className="reading-track">主线 {dailyReading.review.track} · {tracks[dailyReading.review.track as TrackKey].label}</p>
              <h3>{dailyReading.review.titleZh}</h3>
              <p className="reading-title-en">{dailyReading.review.title}</p>
              <p className="reading-authors">{dailyReading.review.authors} · {dailyReading.review.venue}</p>
              <p className="assistant-summary">{dailyReading.review.assistantSummary}</p>
            </div>
            <aside>
              <b>为什么今天推荐</b><p>{dailyReading.review.whySelected}</p>
              <b>建议阅读顺序</b><ol>{dailyReading.review.readingGuide.map((item) => <li key={item}>{item}</li>)}</ol>
              <a href={dailyReading.review.url} target="_blank" rel="noreferrer">查看出版社页面 ↗</a>
            </aside>
          </div>
        </article>

        <div className="classic-heading"><div><h3>经典文章回看</h3><p>不按日期追新，只看对实验思路和研究框架仍有价值的工作。</p></div><span>{dailyReading.classics.length} 篇</span></div>
        <div className="classic-grid">
          {dailyReading.classics.map((item) => (
            <article className={`classic-card track-${item.track.toLowerCase()}`} key={item.id}>
              <div className="reading-card-top"><div><span className="reading-kind">{item.kind}</span><span className="old-paper-badge">{item.published}</span></div><FavoriteButton id={item.id} compact /></div>
              <p className="reading-track">主线 {item.track} · {tracks[item.track as TrackKey].label}</p>
              <h3>{item.titleZh}</h3><p className="reading-title-en">{item.title}</p>
              <p className="assistant-summary">{item.assistantSummary}</p>
              <div className="classic-why"><b>为什么值得重读</b><p>{item.whySelected}</p></div>
              <a href={item.url} target="_blank" rel="noreferrer">出版社原文 · DOI {item.doi} ↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="my-reading-section" id="my-reading">
        <div className="section-heading wide"><div><p>MY READING</p><h2>我的收藏与阅读整理</h2></div><span>{favoriteIds.length} 篇收藏 · {savedNoteIds.length} 条已保存笔记</span></div>
        <div className="saved-reading-panel">
          <div className="saved-reading-heading"><div><h3>红心收藏</h3><p>收藏后可从这里继续阅读；再次点击红心即可取消。</p></div><div className="saved-reading-tools"><span>保存在当前浏览器</span><ExportAllNotesButton entries={[...report.papers.map((paper) => ({ id: paper.id, title: paper.titleZh })), ...readingItems.map((item) => ({ id: item.id, title: item.titleZh })), { id: `daily-${report.reportDate}`, title: `${reportDateLabel}阅读整理` }]} /></div></div>
          {favoritePapers.length + favoriteReadings.length === 0 ? (
            <div className="saved-empty"><span>♡</span><div><b>还没有收藏文章</b><p>点击文章卡片上的红心，这里就会形成你的待读清单。</p></div></div>
          ) : (
            <div className="saved-reading-list">
              {favoritePapers.map((paper) => <article key={paper.id}><FavoriteButton id={paper.id} compact /><div><span>{paper.track} · {tracks[paper.track as TrackKey].short}</span><b>{paper.titleZh}</b><small>{savedNoteIds.includes(paper.id) ? "已有笔记" : "尚未记笔记"}</small></div><a href={`/paper?id=${encodeURIComponent(paper.id)}`}>继续阅读 →</a></article>)}
              {favoriteReadings.map((item) => <article key={item.id}><FavoriteButton id={item.id} compact /><div><span>{item.kind}</span><b>{item.titleZh}</b><small>{savedNoteIds.includes(item.id) ? "已有笔记" : "旧文精选"}</small></div><a href={item.url} target="_blank" rel="noreferrer">打开原文 ↗</a></article>)}
            </div>
          )}
        </div>
        <NoteEditor
          id={`daily-${report.reportDate}`}
          title={`${reportDateLabel}阅读整理`}
          daily
          suggested={`【今日先看】\n${featured.map((paper, index) => `${index + 1}. ${paper.titleZh}：${paper.summary}`).join("\n")}\n\n【今日综述】\n${dailyReading.review.titleZh}：${dailyReading.review.assistantSummary}\n\n【共同线索】\n今天的内容可以从“材料与界面如何影响可测输运”“理论候选如何转化为实验判据”“自动表征怎样进入制造反馈闭环”三条线整理。\n\n【我已经理解】\n\n【我还没理解】\n\n【与当前实验/设备的关系】\n\n【下一步要查或要做】\n`}
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
            <label className="sort-select"><span>排序</span><select value={sortBy} onChange={(event) => setSortBy(event.target.value as "score" | "date")}><option value="score">综合评分</option><option value="date">发表时间</option></select></label>
          </div>
        </div>
        <p className="result-count">
          {activeTrack === "ALL"
            ? `当前显示 ${filteredPapers.length} 项`
            : `当前显示 ${filteredPapers.length} 项 · 主分类 ${activeTrack}：${primaryPapers.length} 项 · 兼具 ${activeTrack}：${relatedPapers.length} 项`}
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
        <div className="section-heading"><div><p>CROSS-TRACK IDEAS</p><h2>跨主线研究机会</h2></div><span>从论文中提取可执行的实验连接</span></div>
        <div className="opportunity-grid">
          <article><span>B → A</span><h3>界面无序 × 超电流非互易性</h3><p>把扭角、界面透明度和无序做成正交变量，以同一器件的 TEM 与低温输运关联，判断二极管效应究竟来自结构设计还是加工缺陷。</p><b>建议测量：I<sub>c</sub><sup>+</sup>/I<sub>c</sub><sup>−</sup>、正常态电阻、磁场图样、界面统计</b></article>
          <article><span>D → A</span><h3>低温热成像 × 输运同步测量</h3><p>在标准微加热器上先标定低温扫描热探针，再与四端输运同步，区分整体相变、局域热点和接触耗散。</p><b>建议建设：探针热阻校准、磁场兼容、扰动评估、标准样品</b></article>
          <article><span>D → E</span><h3>自动 XRD × 制造参数闭环</h3><p>让自动结构候选与 Rietveld 精修进入每批生长记录，但保留残差图、人工审核和 TEM/XPS 交叉验证，再反馈下一轮温度与通量。</p><b>建议指标：候选排序、精修残差、误报率、跨表征一致性</b></article>
        </div>
      </section>

      <section className="methods-section" id="methods">
        <div className="section-heading"><div><p>METHODS & INFRASTRUCTURE</p><h2>方法与设备建设</h2></div><span>优先提取能在实验室复用的方案</span></div>
        <div className="method-layout">
          <div className="method-feature">
            <p className="eyebrow">本期设备启发</p><h3>低温扫描热显微：先做可追溯校准</h3><p>不要只追求最低温度和最高空间分辨率。探针灵敏度、探针—样品热阻、样品扰动与磁场兼容必须在同一套标准样品上验收。</p>
            <ul><li>已知功率微加热器与热导标准样品</li><li>探针温度计与热接触电阻校准</li><li>扫描振动、热漂移与空间分辨率评估</li><li>局域温度图与四端电输运同步记录</li></ul>
          </div>
          <div className="method-cards">
            <article><span>01</span><div><h3>低温系统</h3><p>制冷、磁体、温控、样品空间与振动隔离。</p></div></article>
            <article><span>02</span><div><h3>电学链路</h3><p>滤波、屏蔽、接地、低噪声放大与标准样品。</p></div></article>
            <article><span>03</span><div><h3>自动化采集</h3><p>状态机、阈值守护、异常回退与元数据记录。</p></div></article>
            <article><span>04</span><div><h3>分析与 AI</h3><p>质量评分、相图识别、可追溯结论与实验建议。</p></div></article>
          </div>
        </div>
      </section>

      <section className="atomic-section" id="atomic">
        <div className="section-heading"><div><p>ATOMIC & EXTREME MANUFACTURING</p><h2>原子制造与极端制造</h2></div><span>新增 E 类独立追踪方向</span></div>
        <div className="atomic-grid">
          <article><span>设备搭建</span><h3>制造—表征一体化平台</h3><p>MBE、PLD、磁控溅射、IBE/EBE、原子层沉积/刻蚀、真空互联与原位转移，以及设备稳定性、污染控制和校准方法。</p><small>重点指标：真空度、漂移、通量、温度均匀性、颗粒与损伤</small></article>
          <article><span>器件制备</span><h3>从原子操控到量子器件</h3><p>原子结、原子级缺陷、超薄膜、异质界面、微纳图形化、接触工程、封装与面向低温测量的完整器件流程。</p><small>重点指标：良率、重复性、界面洁净度、接触电阻、热预算</small></article>
          <article><span>表征测试</span><h3>结构—成分—输运闭环</h3><p>STM/STS、AFM、TEM/STEM、XPS、Raman、XRD 与电学/磁学/低温输运联合表征，用实测反馈下一步制造动作。</p><small>重点指标：原子识别准确率、空间分辨率、关联性与可追溯性</small></article>
        </div>
        <div className="atomic-paper-strip">
          {report.papers.filter((paper) => paper.track === "E").map((paper) => <a href={paper.url} target="_blank" rel="noreferrer" key={paper.id}><span>{paper.score.toFixed(1)}</span><div><b>{paper.titleZh}</b><small>{paper.methods.slice(0, 3).join(" · ")}</small></div><em>↗</em></a>)}
        </div>
      </section>

      <section className="history-section">
        <div className="history-heading"><p>DAILY ARCHIVE</p><h2>历史日报</h2><span>每日更新后自动保留日期、分类数量和文献记录</span></div>
        <div className="history-list">
          {[...report.history].reverse().map((entry) => (
            <article className={expandedHistory === entry.date ? "is-open" : ""} key={entry.date}>
              <button className="history-summary" type="button" onClick={() => setExpandedHistory(expandedHistory === entry.date ? null : entry.date)} aria-expanded={expandedHistory === entry.date}>
                <div><b>{entry.date}</b><small>{entry.label} · {entry.total} 项已核验内容</small></div>
                <div className="coverage"><span>A {entry.counts.A}</span><span>B {entry.counts.B}</span><span>C {entry.counts.C}</span><span>D {entry.counts.D}</span><span>E {entry.counts.E}</span><em>{expandedHistory === entry.date ? "收起 ↑" : "展开 ↓"}</em></div>
              </button>
              {expandedHistory === entry.date && (
                <div className="history-papers">
                  {entry.paperIds.map((id, index) => {
                    const paper = report.papers.find((item) => item.id === id);
                    if (!paper) return null;
                    return <a href={`/paper?id=${encodeURIComponent(paper.id)}`} key={paper.id}><span>{String(index + 1).padStart(2, "0")}</span><div><b>{paper.titleZh}</b><small>主分类 {paper.track} · {paper.venue}</small></div><em>查看详解 →</em></a>;
                  })}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <footer><div><span className="brand-mark">LT</span><b>低温输运研究雷达</b></div><p>每日更新 · 来源核验 · 材料中立 · 研究链条关联</p><small>最近更新：{updatedAtLabel}（北京时间）</small></footer>
    </main>
  );
}
