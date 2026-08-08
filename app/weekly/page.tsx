"use client";

import { useEffect, useMemo, useState } from "react";
import weeklyReading from "@/data/weekly-reading.json";
import reports from "@/data/reports.json";
import curatedReading from "@/data/curated-reading.json";
import { CalendarDatePicker } from "@/app/calendar-date-picker";

type WeeklyReport = (typeof weeklyReading.reports)[number];
type WeeklyItem = WeeklyReport["items"][number];

const trackLabels: Record<string, string> = {
  A: "低温输运实验",
  B: "材料与器件基础",
  C: "理论与计算",
  D: "设备与测量平台",
  E: "原子与极端制造",
};

function sourceFor(id: string) {
  const paper = reports.papers.find((entry) => entry.id === id);
  if (paper) return paper;
  return curatedReading.items.find((entry) => entry.id === id);
}

function dateLabel(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T00:00:00+08:00`));
}

function WeeklyArticle({ item }: { item: WeeklyItem }) {
  const source = sourceFor(item.id);
  if (!source) return null;
  const track = "track" in source ? source.track : "B";
  const backupUrl = "backupUrl" in source ? source.backupUrl : "";

  return (
    <article className="weekly-article" id={`weekly-${item.id}`}>
      <header className="weekly-article-header">
        <div className="weekly-rank">{String(item.rank).padStart(2, "0")}</div>
        <div>
          <p className="weekly-role">{item.role}</p>
          <h2>{source.titleZh}</h2>
          <p className="weekly-title-en">{source.title}</p>
          <p className="weekly-meta">{source.authors} · {source.venue} · {source.published}</p>
          <div className="weekly-source-actions">
            <a href={source.url} target="_blank" rel="noreferrer">直接来源 ↗</a>
            {backupUrl && <a href={backupUrl} target="_blank" rel="noreferrer">DOI备用 ↗</a>}
            {source.doi && <span>DOI {source.doi}</span>}
            <span>{track} · {trackLabels[track] ?? track}</span>
          </div>
        </div>
      </header>

      <div className="weekly-detail-grid">
        <section><h3>基础背景与术语</h3><p>{item.background}</p></section>
        <section><h3>作者真正要解决的问题</h3><p>{item.question}</p></section>
        <section><h3>样品 / 堆栈 / 器件结构</h3><p>{item.structure}</p></section>
        <section><h3>制备、测量与流程</h3><p>{item.process}</p></section>
      </div>

      <section className="weekly-findings">
        <h3>关键发现与定量数据</h3>
        <ol>{item.keyFindings.map((finding) => <li key={finding}>{finding}</li>)}</ol>
      </section>

      <div className="weekly-evidence-grid">
        <section><h3>物理 / 工艺机制</h3><p>{item.mechanism}</p></section>
        <section><h3>证据分界与不能外推之处</h3><p>{item.boundary}</p></section>
        <section><h3>与你当前工作的连接</h3><p>{item.connection}</p></section>
        <section><h3>可以立刻开展的下一步</h3><p>{item.nextStep}</p></section>
        <section><h3>产业化位置与缺失验证</h3><p>{item.industrialization}</p></section>
        <section className="weekly-reading-guide"><h3>建议先看</h3><p>{item.readingGuide}</p></section>
      </div>
    </article>
  );
}

export default function WeeklyPage() {
  const weeklyDates = useMemo(
    () => weeklyReading.reports.map((entry) => entry.date).sort(),
    [],
  );
  const [activeDate, setActiveDate] = useState(weeklyDates.at(-1) ?? weeklyReading.reports[0].date);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("date");
    if (requested && weeklyDates.includes(requested)) setActiveDate(requested);
  }, [weeklyDates]);

  const issue = weeklyReading.reports.find((entry) => entry.date === activeDate) ?? weeklyReading.reports[0];

  function selectDate(date: string) {
    setActiveDate(date);
    const url = new URL(window.location.href);
    url.searchParams.set("date", date);
    window.history.replaceState({}, "", `${url.pathname}${url.search}`);
  }

  return (
    <main className="weekly-page">
      <header className="site-header weekly-header">
        <a className="brand" href="/" aria-label="返回研究雷达首页"><span className="brand-mark">LT</span><span>低温输运研究雷达</span></a>
        <nav aria-label="周精选导航">
          <a href="/">工作日日报</a>
          <a className="active" href="/weekly">本周精选</a>
          <a href="#comparison">跨文献比较</a>
          <a href="#actions">执行清单</a>
        </nav>
      </header>

      <section className="weekly-hero">
        <div>
          <p className="weekly-eyebrow">WEEKLY DEEP READING · {dateLabel(issue.date)}</p>
          <h1>{issue.title}</h1>
          <p className="weekly-subtitle">{issue.subtitle}</p>
          <div className="weekly-mainline"><b>本周主线</b><span>{issue.mainLine}</span></div>
        </div>
        <aside className="weekly-date-card">
          <span>周精选归档</span>
          <strong>{issue.weekStart} — {issue.weekEnd}</strong>
          <CalendarDatePicker
            compact
            label="选择周精选日期"
            value={activeDate}
            availableDates={weeklyDates}
            onChange={selectDate}
          />
          <small>日期范围由真实周精选数据动态生成，后续自动跨月延伸。</small>
        </aside>
      </section>

      <section className="weekly-container weekly-overview">
        <div className="weekly-section-heading">
          <div><span>SELECTION LOGIC</span><h2>为什么是这 5 篇</h2></div>
          <p>质量不足不凑数：本周没有单列纯理论论文，而由正式Primer提供共同理论框架；5篇分别占据方法、设备、图形化、器件和可靠性位置。</p>
        </div>
        <div className="weekly-coverage-grid">
          {Object.entries(issue.coverage).map(([track, text]) => (
            <article key={track}><strong>{track}</strong><div><b>{trackLabels[track]}</b><p>{text}</p></div></article>
          ))}
        </div>
      </section>

      <section className="weekly-container weekly-order">
        <div className="weekly-section-heading"><div><span>READING ORDER</span><h2>建议先读顺序</h2></div></div>
        <ol>
          {issue.readingOrder.map((entry, index) => {
            const item = issue.items.find((candidate) => candidate.id === entry.id);
            const source = sourceFor(entry.id);
            return <li key={entry.id}><a href={`#weekly-${entry.id}`}><span>{index + 1}</span><div><b>{source?.titleZh ?? entry.id}</b><p>{entry.reason}</p><small>{item?.readingGuide}</small></div></a></li>;
          })}
        </ol>
      </section>

      <section className="weekly-container weekly-articles" aria-label="本周五篇详细解读">
        {issue.items.map((item) => <WeeklyArticle item={item} key={item.id} />)}
      </section>

      <section className="weekly-container weekly-comparison" id="comparison">
        <div className="weekly-section-heading">
          <div><span>CROSS-PAPER MATRIX</span><h2>跨文献比较表</h2></div>
          <p>用同一组指标比较，避免把最高单点结果与可制造性混为一谈。</p>
        </div>
        <div className="weekly-table-wrap">
          <table>
            <thead><tr><th>环节 / 文献</th><th>证据类型</th><th>公开定量数据</th><th>距离制造还缺什么</th></tr></thead>
            <tbody>
              {issue.comparison.map((row) => {
                const source = sourceFor(row.id);
                return <tr key={row.id}><th><span>{row.stage}</span><b>{source?.titleZh ?? row.id}</b></th><td>{row.evidence}</td><td>{row.keyNumbers}</td><td>{row.manufacturingGap}</td></tr>;
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="weekly-container weekly-variables">
        <div className="weekly-section-heading"><div><span>COMMON VARIABLES</span><h2>共同变量与可比较指标</h2></div></div>
        <ul>{issue.sharedVariables.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="weekly-container weekly-actions" id="actions">
        <div className="weekly-section-heading">
          <div><span>THIS WEEK</span><h2>本周可执行清单</h2></div>
          <p>每一项都包含变量、对照和测量指标，可以直接转成实验记录表。</p>
        </div>
        <ol>{issue.checklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol>
      </section>

      <section className="weekly-container weekly-source-note">
        <b>来源与证据说明</b><p>{issue.sourceNote}</p>
      </section>

      <footer className="weekly-footer">
        <div><b>低温输运研究雷达</b><span>原子制造 · MTJ/MRAM · 低温测量 · 可靠性</span></div>
        <a href="/">返回工作日日报 →</a>
      </footer>
    </main>
  );
}
