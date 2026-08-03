"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import archive from "@/data/insight-archive.json";
import report from "@/data/reports.json";
import { FavoriteButton } from "@/app/reader-tools";
import { ReadingDock, useReadingDockState } from "@/app/reading-dock";
import { CalendarDatePicker } from "@/app/calendar-date-picker";

const typeAnchors: Record<string, string> = {
  "research-opportunity": "opportunities",
  "method-platform": "methods",
  "atomic-manufacturing": "atomic",
};

const typeColors: Record<string, string> = {
  "research-opportunity": "track-a",
  "method-platform": "track-d",
  "atomic-manufacturing": "track-e",
};
const reportDates = Array.from(new Set([...report.history.map((entry) => entry.date), ...archive.history.map((entry) => entry.date)])).sort((a, b) => b.localeCompare(a));

export default function InsightDetailPage() {
  const [insightId, setInsightId] = useState<string | null | undefined>(undefined);
  const { open: readingDockOpen, setOpen: setReadingDockOpen } = useReadingDockState();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setInsightId(new URLSearchParams(window.location.search).get("id")));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (insightId === undefined) return <main className="detail-loading">正在打开研究方案详解…</main>;

  const item = archive.items.find((entry) => entry.id === insightId);
  if (!item) {
    return <main className="detail-loading"><b>暂时没有找到这份方案详解。</b><Link href="/#opportunities">返回研究机会与设备方案</Link></main>;
  }

  const backAnchor = typeAnchors[item.type] ?? "opportunities";
  const relatedPapers = item.relatedPaperIds.map((id) => report.papers.find((paper) => paper.id === id)).filter((paper) => Boolean(paper));
  const className = typeColors[item.type] ?? "track-d";
  const noteSuggestion = `【核心问题】\n${item.question}\n\n【为什么值得做】\n${item.rationale}\n\n【建议实施步骤】\n${item.workflow.map((step, index) => `${index + 1}. ${step}`).join("\n")}\n\n【关键验收指标】\n${item.metrics.join("\n")}\n\n【证据边界】\n${item.evidenceBoundary}\n\n【我准备先做】\n${item.firstSteps.join("\n")}\n\n【我的补充】\n`;

  return (
    <main className={`paper-detail-page insight-detail-page ${className}`}>
      <header className={`detail-header ${readingDockOpen ? "with-reading-dock" : ""}`}>
        <Link className="brand" href="/"><span className="brand-mark">LT</span><span>低温输运研究雷达</span></Link>
        <div className="detail-header-tools"><CalendarDatePicker compact label="归档日期" value={item.date} availableDates={reportDates} /><Link className="back-link" href={`/?date=${encodeURIComponent(item.date)}#${backAnchor}`}>← 返回{item.typeZh}</Link></div>
      </header>

      <div className={`detail-site-body ${readingDockOpen ? "with-reading-dock" : ""}`}>

      <article className="detail-article">
        <div className="detail-breadcrumb"><Link href="/">首页</Link><span>/</span><Link href={`/#${backAnchor}`}>{item.typeZh}</Link><span>/</span><b>方案详解</b></div>

        <section className="detail-hero insight-detail-hero">
          <div className="detail-classification"><span className="detail-primary">{item.typeZh}</span><span>{item.trackLabel}</span><span>归档日期 {item.date}</span></div>
          <p className="detail-date">{item.status}</p>
          <h1>{item.title}</h1>
          <p className="detail-title-en">{item.subtitle}</p>
          <div className="detail-hero-footer curated-detail-footer">
            <div><strong>可执行方案</strong><span>完整内容永久归档</span></div>
            <div className="detail-hero-actions"><FavoriteButton id={item.id} /></div>
          </div>
        </section>

        <section className="plain-summary"><span>先用一句话理解</span><p>{item.summary}</p></section>

        <div className="detail-layout">
          <div className="detail-content">
            <section id="rationale" className="detail-section">
              <div className="detail-section-title"><span>01</span><div><p>WHY THIS IDEA</p><h2>为什么提出这条路线？</h2></div></div>
              <p>{item.rationale}</p>
            </section>

            <section id="question" className="detail-section question-section">
              <div className="detail-section-title"><span>02</span><div><p>CORE QUESTION</p><h2>真正要回答什么问题？</h2></div></div>
              <blockquote>{item.question}</blockquote>
            </section>

            <section id="workflow" className="detail-section">
              <div className="detail-section-title"><span>03</span><div><p>IMPLEMENTATION</p><h2>建议怎样一步步实施？</h2></div></div>
              <ol className="detail-steps">{item.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            </section>

            <section id="equipment" className="detail-section">
              <div className="detail-section-title"><span>04</span><div><p>EQUIPMENT</p><h2>需要哪些设备与能力？</h2></div></div>
              <div className="insight-list-grid">{item.equipment.map((entry, index) => <div key={entry}><b>{String(index + 1).padStart(2, "0")}</b><p>{entry}</p></div>)}</div>
            </section>

            <section id="measurements" className="detail-section">
              <div className="detail-section-title"><span>05</span><div><p>MEASUREMENTS</p><h2>具体测什么？</h2></div></div>
              <ul className="value-list">{item.measurements.map((entry) => <li key={entry}>{entry}</li>)}</ul>
            </section>

            <section id="metrics" className="detail-section explanation-section">
              <div className="detail-section-title"><span>06</span><div><p>ACCEPTANCE METRICS</p><h2>怎样判断方案做得好不好？</h2></div></div>
              <div className="metric-grid">{item.metrics.map((entry) => <div key={entry}>{entry}</div>)}</div>
            </section>

            <section id="first-steps" className="detail-section connection-section">
              <div className="detail-section-title"><span>07</span><div><p>START HERE</p><h2>现在最适合先做什么？</h2></div></div>
              <ol className="detail-steps compact-steps">{item.firstSteps.map((step, index) => <li key={step}><span>{index + 1}</span><p>{step}</p></li>)}</ol>
            </section>

            <section id="connection" className="detail-section">
              <div className="detail-section-title"><span>08</span><div><p>RESEARCH CONNECTION</p><h2>和你的研究有什么关系？</h2></div></div>
              <p>{item.researchConnection}</p>
            </section>

            <section id="boundary" className="detail-section limitation-section">
              <div className="detail-section-title"><span>09</span><div><p>EVIDENCE BOUNDARY</p><h2>哪些地方不能过度解释？</h2></div></div>
              <p>{item.evidenceBoundary}</p>
            </section>

            {relatedPapers.length > 0 && (
              <section id="sources" className="detail-section">
                <div className="detail-section-title"><span>10</span><div><p>SOURCE PAPERS</p><h2>这条方案由哪些文献支持？</h2></div></div>
                <div className="insight-source-list">{relatedPapers.map((paper) => paper && <a href={`/paper?id=${encodeURIComponent(paper.id)}`} key={paper.id}><span>{paper.track}</span><div><b>{paper.titleZh}</b><small>{paper.venue} · {paper.published}</small></div><em>查看文章详解 →</em></a>)}</div>
              </section>
            )}

            <section className="takeaway-section"><span>看完只记住这一点</span><p>{item.takeaway}</p></section>

          </div>

          <aside className="detail-aside">
            <div className="detail-toc"><p>快速阅读</p><a href="#rationale">为什么提出</a><a href="#question">核心问题</a><a href="#workflow">实施步骤</a><a href="#equipment">设备能力</a><a href="#measurements">测量内容</a><a href="#metrics">验收指标</a><a href="#first-steps">先做什么</a><a href="#boundary">证据边界</a>{relatedPapers.length > 0 && <a href="#sources">支持文献</a>}</div>
            <div className="detail-metadata"><p>方案信息</p><dl><div><dt>方向</dt><dd>{item.trackLabel}</dd></div><div><dt>状态</dt><dd>{item.status}</dd></div><div><dt>归档日期</dt><dd>{item.date}</dd></div><div><dt>相关文献</dt><dd>{relatedPapers.length} 篇</dd></div></dl></div>
            <p className="detail-note">这里把文献启发、建议动作和证据边界分开写。研究机会是待验证方案，不会被表述成已经完成的实验结论。</p>
          </aside>
        </div>
      </article>
      </div>
      <ReadingDock
        context={{ id: item.id, title: `${item.title}｜方案笔记`, suggested: noteSuggestion, label: item.typeZh, date: item.date }}
        open={readingDockOpen}
        onOpenChange={setReadingDockOpen}
      />
    </main>
  );
}
