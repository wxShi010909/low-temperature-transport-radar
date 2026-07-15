"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import curated from "@/data/curated-reading.json";
import details from "@/data/curated-details.json";
import { FavoriteButton } from "@/app/reader-tools";
import { ReadingDock, useReadingDockState } from "@/app/reading-dock";

type TrackKey = "A" | "B" | "C" | "D" | "E";

const tracks: Record<TrackKey, { label: string; short: string }> = {
  A: { label: "低温输运实验", short: "输运实验" },
  B: { label: "材料与器件基础", short: "材料器件" },
  C: { label: "理论与计算", short: "理论计算" },
  D: { label: "设备与测量平台", short: "设备平台" },
  E: { label: "原子与极端制造", short: "原子制造" },
};

export default function CuratedReadingDetailPage() {
  const [readingId, setReadingId] = useState<string | null | undefined>(undefined);
  const { open: readingDockOpen, setOpen: setReadingDockOpen } = useReadingDockState();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReadingId(new URLSearchParams(window.location.search).get("id")));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (readingId === undefined) return <main className="detail-loading">正在打开综述与经典文章详解…</main>;

  const item = curated.items.find((entry) => entry.id === readingId);
  const detail = details.find((entry) => entry.id === readingId);

  if (!item || !detail) {
    return <main className="detail-loading"><b>暂时没有找到这篇文章的详解。</b><Link href="/#reading">返回综述与经典文献库</Link></main>;
  }

  const noteSuggestion = `【一句话理解】\n${detail.oneSentence}\n\n【研究组织/实验流程】\n${detail.workflow.join("\n")}\n\n【关键结果】\n${detail.findings.join("\n")}\n\n【与当前研究的关系】\n${detail.researchConnection}\n\n【证据边界】\n${detail.limitationsDetailed}\n\n【我的理解 / 下一步想法】\n`;

  return (
    <main className={`paper-detail-page track-${item.track.toLowerCase()}`}>
      <div className={`detail-site-body ${readingDockOpen ? "with-reading-dock" : ""}`}>
      <header className="detail-header">
        <Link className="brand" href="/"><span className="brand-mark">LT</span><span>低温输运研究雷达</span></Link>
        <Link className="back-link" href="/#reading">← 返回综述与经典文献库</Link>
      </header>

      <article className="detail-article">
        <div className="detail-breadcrumb"><Link href="/">首页</Link><span>/</span><Link href="/#reading">每日综述与经典文章</Link><span>/</span><b>通俗详解</b></div>

        <section className="detail-hero">
          <div className="detail-classification">
            <span className="detail-primary">主分类 {item.track} · {tracks[item.track as TrackKey].label}</span>
            {item.secondaryTracks.map((track) => <span key={track}>兼具 {track} · {tracks[track as TrackKey].short}</span>)}
            <span>{item.kind}</span><span>非当天新增</span>
          </div>
          <p className="detail-date">{item.venue} · 原始发表 {item.published} · 本站推荐 {item.recommendedOn}</p>
          <h1>{item.titleZh}</h1>
          <p className="detail-title-en">{item.title}</p>
          <p className="detail-authors">{item.authors}</p>
          <div className="detail-hero-footer curated-detail-footer">
            <div><strong>{item.kind}</strong><span>永久保存在经典文献库</span></div>
            <div className="detail-hero-actions"><FavoriteButton id={item.id} /><a href={item.url} target="_blank" rel="noreferrer">查看出版社原文 ↗</a></div>
          </div>
        </section>

        <section className="plain-summary"><span>先用一句话理解</span><p>{detail.oneSentence}</p></section>

        <div className="detail-layout">
          <div className="detail-content">
            <section id="background" className="detail-section"><div className="detail-section-title"><span>01</span><div><p>BACKGROUND</p><h2>为什么值得读这篇文章？</h2></div></div><p>{detail.background}</p></section>
            <section id="question" className="detail-section question-section"><div className="detail-section-title"><span>02</span><div><p>QUESTION</p><h2>文章真正要解决什么？</h2></div></div><blockquote>{detail.question}</blockquote></section>
            <section id="workflow" className="detail-section"><div className="detail-section-title"><span>03</span><div><p>WORKFLOW</p><h2>作者是怎样组织研究的？</h2></div></div><ol className="detail-steps">{detail.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol></section>
            <section id="findings" className="detail-section"><div className="detail-section-title"><span>04</span><div><p>KEY FINDINGS</p><h2>最重要的结果是什么？</h2></div></div><div className="finding-list">{detail.findings.map((finding, index) => <div key={finding}><b>{index + 1}</b><p>{finding}</p></div>)}</div></section>
            <section id="explanation" className="detail-section explanation-section"><div className="detail-section-title"><span>05</span><div><p>PLAIN EXPLANATION</p><h2>这些结果应该怎样理解？</h2></div></div><p>{detail.explanation}</p></section>
            <section id="value" className="detail-section"><div className="detail-section-title"><span>06</span><div><p>WHY IT MATTERS</p><h2>为什么成为经典或重要综述？</h2></div></div><ul className="value-list">{detail.whyItMatters.map((entry) => <li key={entry}>{entry}</li>)}</ul></section>
            <section id="connection" className="detail-section connection-section"><div className="detail-section-title"><span>07</span><div><p>RESEARCH CONNECTION</p><h2>和你的研究有什么关系？</h2></div></div><p>{detail.researchConnection}</p></section>
            <section id="limitations" className="detail-section limitation-section"><div className="detail-section-title"><span>08</span><div><p>EVIDENCE BOUNDARY</p><h2>应该保留哪些证据边界？</h2></div></div><p>{detail.limitationsDetailed}</p></section>
            <section id="terms" className="detail-section"><div className="detail-section-title"><span>09</span><div><p>TERMS</p><h2>需要先懂的术语</h2></div></div><dl className="term-grid">{detail.terms.map((term) => <div key={term.name}><dt>{term.name}</dt><dd>{term.meaning}</dd></div>)}</dl></section>
            <section className="takeaway-section"><span>读完只记住这一点</span><p>{detail.takeaway}</p></section>
          </div>

          <aside className="detail-aside">
            <div className="detail-toc"><p>快速阅读</p><a href="#background">为什么值得读</a><a href="#question">研究问题</a><a href="#workflow">研究流程</a><a href="#findings">关键结果</a><a href="#explanation">通俗理解</a><a href="#connection">与你的研究关系</a><a href="#limitations">证据边界</a><a href="#terms">术语解释</a></div>
            <div className="detail-metadata"><p>文献信息</p><dl><div><dt>类型</dt><dd>{item.kind}</dd></div><div><dt>原始发表时间</dt><dd>{item.published}</dd></div><div><dt>本站推荐日期</dt><dd>{item.recommendedOn}</dd></div><div><dt>DOI</dt><dd>{item.doi}</dd></div></dl></div>
            <p className="detail-note">综述与经典文章会永久保留在本站档案中；每日推荐只决定当天展示，不会删除历史记录。</p>
          </aside>
        </div>
      </article>
      </div>
      <ReadingDock
        context={{ id: item.id, title: `${item.titleZh}｜阅读笔记`, suggested: noteSuggestion, label: item.kind }}
        open={readingDockOpen}
        onOpenChange={setReadingDockOpen}
      />
    </main>
  );
}
