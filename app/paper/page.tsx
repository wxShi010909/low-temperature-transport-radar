"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import report from "@/data/reports.json";
import details from "@/data/paper-details.json";
import { FavoriteButton, NoteEditor } from "@/app/reader-tools";

type TrackKey = "A" | "B" | "C" | "D" | "E";

const tracks: Record<TrackKey, { label: string; short: string }> = {
  A: { label: "低温输运实验", short: "输运实验" },
  B: { label: "材料与器件基础", short: "材料器件" },
  C: { label: "理论与计算", short: "理论计算" },
  D: { label: "设备与测量平台", short: "设备平台" },
  E: { label: "原子与极端制造", short: "原子制造" },
};

const unavailableSourceIds = new Set(["2607.12740", "2607.12394", "2607.12754"]);

export default function PaperDetailPage() {
  const [paperId, setPaperId] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setPaperId(new URLSearchParams(window.location.search).get("id")));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (paperId === undefined) {
    return <main className="detail-loading">正在打开文章详解…</main>;
  }

  const paper = report.papers.find((item) => item.id === paperId);
  const detail = details.find((item) => item.id === paperId);

  if (!paper || !detail) {
    return (
      <main className="detail-loading">
        <b>暂时没有找到这篇文章的详解。</b>
        <Link href="/#library">返回文献库</Link>
      </main>
    );
  }

  return (
    <main className={`paper-detail-page track-${paper.track.toLowerCase()}`}>
      <header className="detail-header">
        <Link className="brand" href="/"><span className="brand-mark">LT</span><span>低温输运研究雷达</span></Link>
        <Link className="back-link" href="/#library">← 返回文献库</Link>
      </header>

      <article className="detail-article">
        <div className="detail-breadcrumb"><Link href="/">首页</Link><span>/</span><Link href="/#library">文献库</Link><span>/</span><b>文章详解</b></div>

        <section className="detail-hero">
          <div className="detail-classification">
            <span className="detail-primary">主分类 {paper.track} · {tracks[paper.track as TrackKey].label}</span>
            {paper.secondaryTracks.map((track) => <span key={track}>兼具 {track} · {tracks[track as TrackKey].short}</span>)}
          </div>
          <p className="detail-date">{paper.venue} · {paper.published}</p>
          <h1>{paper.titleZh}</h1>
          <p className="detail-title-en">{paper.title}</p>
          <p className="detail-authors">{paper.authors}</p>
          <div className="detail-hero-footer">
            <div><strong>{paper.score.toFixed(1)}</strong><span>/ 10 · {paper.priority} 级</span></div>
            <div className="detail-hero-actions">
              <FavoriteButton id={paper.id} />
              {unavailableSourceIds.has(paper.id)
                ? <span className="source-unavailable">原始入口暂不可用 · 已标记复核</span>
                : <a href={paper.url} target="_blank" rel="noreferrer">查看原始文献 ↗</a>}
            </div>
          </div>
        </section>

        <section className="plain-summary">
          <span>先用一句话理解</span>
          <p>{detail.oneSentence}</p>
        </section>

        <div className="detail-layout">
          <div className="detail-content">
            <section id="background" className="detail-section">
              <div className="detail-section-title"><span>01</span><div><p>BACKGROUND</p><h2>为什么要做这项研究？</h2></div></div>
              <p>{detail.background}</p>
            </section>

            <section id="question" className="detail-section question-section">
              <div className="detail-section-title"><span>02</span><div><p>QUESTION</p><h2>作者真正想解决什么？</h2></div></div>
              <blockquote>{detail.question}</blockquote>
            </section>

            <section id="workflow" className="detail-section">
              <div className="detail-section-title"><span>03</span><div><p>WORKFLOW</p><h2>具体是怎么做的？</h2></div></div>
              <ol className="detail-steps">
                {detail.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
              </ol>
            </section>

            <section id="findings" className="detail-section">
              <div className="detail-section-title"><span>04</span><div><p>KEY FINDINGS</p><h2>得到了哪些关键结果？</h2></div></div>
              <div className="finding-list">
                {detail.findings.map((finding, index) => <div key={finding}><b>{index + 1}</b><p>{finding}</p></div>)}
              </div>
            </section>

            <section id="explanation" className="detail-section explanation-section">
              <div className="detail-section-title"><span>05</span><div><p>PLAIN EXPLANATION</p><h2>这些结果应该怎样理解？</h2></div></div>
              <p>{detail.explanation}</p>
            </section>

            <section id="value" className="detail-section">
              <div className="detail-section-title"><span>06</span><div><p>WHY IT MATTERS</p><h2>这项工作有什么价值？</h2></div></div>
              <ul className="value-list">{detail.whyItMatters.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section id="connection" className="detail-section connection-section">
              <div className="detail-section-title"><span>07</span><div><p>RESEARCH CONNECTION</p><h2>和你的研究有什么关系？</h2></div></div>
              <p>{detail.researchConnection}</p>
            </section>

            <section id="limitations" className="detail-section limitation-section">
              <div className="detail-section-title"><span>08</span><div><p>EVIDENCE BOUNDARY</p><h2>论文没有解决什么？</h2></div></div>
              <p>{detail.limitationsDetailed}</p>
            </section>

            <section id="terms" className="detail-section">
              <div className="detail-section-title"><span>09</span><div><p>TERMS</p><h2>需要先懂的术语</h2></div></div>
              <dl className="term-grid">
                {detail.terms.map((term) => <div key={term.name}><dt>{term.name}</dt><dd>{term.meaning}</dd></div>)}
              </dl>
            </section>

            <section className="takeaway-section">
              <span>读完只记住这一点</span>
              <p>{detail.takeaway}</p>
            </section>

            <NoteEditor
              id={paper.id}
              title="这篇文章的阅读笔记"
              suggested={`【一句话理解】\n${detail.oneSentence}\n\n【作者做了什么】\n${detail.workflow.join("\n")}\n\n【最重要的结果】\n${detail.findings.join("\n")}\n\n【与当前研究的关系】\n${detail.researchConnection}\n\n【证据边界】\n${detail.limitationsDetailed}\n\n【我的理解 / 下一步想法】\n`}
            />
          </div>

          <aside className="detail-aside">
            <div className="detail-toc">
              <p>快速阅读</p>
              <a href="#background">为什么要做</a>
              <a href="#question">研究问题</a>
              <a href="#workflow">实验 / 计算流程</a>
              <a href="#findings">关键结果</a>
              <a href="#explanation">通俗理解</a>
              <a href="#connection">与你的研究关系</a>
              <a href="#limitations">证据边界</a>
              <a href="#terms">术语解释</a>
            </div>
            <div className="detail-metadata">
              <p>文献信息</p>
              <dl>
                <div><dt>研究体系</dt><dd>{paper.system}</dd></div>
                <div><dt>条件 / 工艺</dt><dd>{paper.conditions}</dd></div>
                <div><dt>DOI</dt><dd>{paper.doi}</dd></div>
              </dl>
            </div>
            <p className="detail-note">通俗解读依据论文公开摘要和可核验信息整理；涉及定量参数时请以原文为准。原始入口若在复核时不可打开，会明确标记而不会继续伪装成可用链接。</p>
          </aside>
        </div>
      </article>
    </main>
  );
}
