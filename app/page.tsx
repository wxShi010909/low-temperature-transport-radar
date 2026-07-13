import report from "@/data/reports.json";

const tracks = {
  A: { label: "低温输运实验", count: 0 },
  B: { label: "材料与器件基础", count: 0 },
  C: { label: "理论与计算", count: 0 },
  D: { label: "设备与测量平台", count: 0 },
  E: { label: "原子与极端制造", count: 0 },
} as const;

const counts = report.papers.reduce<Record<string, number>>((acc, paper) => {
  acc[paper.track] = (acc[paper.track] ?? 0) + 1;
  return acc;
}, {});

const featured = report.papers.filter((paper) => paper.featured).slice(0, 3);

function TransportPlot() {
  return (
    <div className="transport-plot" aria-label="低温电阻随温度变化的示意曲线">
      <div className="chip-grid" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <svg viewBox="0 0 470 245" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="curve" x1="0" x2="1">
            <stop offset="0" stopColor="#9cc1ff" />
            <stop offset="1" stopColor="#1466ee" />
          </linearGradient>
        </defs>
        <path className="axis" d="M48 22V206H438" />
        <path className="grid-line" d="M48 160H438M48 112H438M48 64H438" />
        <path
          className="curve-shadow"
          d="M49 198 C90 188,104 171,132 167 C175 161,216 159,253 151 C306 140,329 119,347 90 C370 54,386 22,437 14"
        />
        <path
          className="curve-line"
          d="M49 198 C90 188,104 171,132 167 C175 161,216 159,253 151 C306 140,329 119,347 90 C370 54,386 22,437 14"
        />
        <text x="14" y="32">R (Ω)</text>
        <text x="226" y="236">T (K)</text>
        <text x="46" y="224">0</text>
        <text x="190" y="224">1</text>
        <text x="310" y="224">10</text>
        <text x="411" y="224">100</text>
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="返回首页">
          <span className="brand-mark">LT</span>
          <span>低温输运研究雷达</span>
        </a>
        <nav aria-label="主导航">
          <a className="active" href="#today">今日日报</a>
          <a href="#library">文献库</a>
          <a href="#opportunities">研究机会</a>
          <a href="#methods">方法与设备</a>
          <a href="#atomic">原子制造</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="date-line">2026年7月13日 · 初始化精选</p>
          <h1>跨材料追踪低温输运研究全链条</h1>
          <p className="hero-kicker">
            实验 <b>·</b> 制备 <b>·</b> 理论 <b>·</b> 设备 <b>·</b> 原子制造
          </p>
          <p className="hero-description">
            每日检索、核验并关联从材料生长到低温测量的关键进展，
            让论文、工艺、设备和可验证的研究机会出现在同一条线上。
          </p>
          <div className="hero-actions">
            <label className="search-shell">
              <span aria-hidden="true">⌕</span>
              <input placeholder="搜索材料、现象、方法或 DOI" aria-label="搜索文献" />
            </label>
            <a className="primary-action" href="#today">
              查看今日精选 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <TransportPlot />
      </section>

      <section className="track-grid" aria-label="五条研究主线">
        {Object.entries(tracks).map(([key, value]) => (
          <article className={`track-card track-${key.toLowerCase()}`} key={key}>
            <span className="track-letter">{key}</span>
            <span className="track-label">{value.label}</span>
            <strong>{counts[key] ?? value.count}</strong>
          </article>
        ))}
      </section>

      <section className="today" id="today">
        <div className="section-heading">
          <div>
            <p>DAILY SIGNAL</p>
            <h2>今日最值得关注</h2>
          </div>
          <span>{report.scope}</span>
        </div>
        <div className="featured-grid">
          {featured.map((paper) => (
            <article className={`paper-card track-${paper.track.toLowerCase()}`} key={paper.id}>
              <div className="paper-meta">
                <span>{paper.track} · {tracks[paper.track as keyof typeof tracks].label}</span>
                <span>{paper.published}</span>
              </div>
              <h3>{paper.titleZh}</h3>
              <p className="paper-title-en">{paper.title}</p>
              <div className="tag-row">
                {paper.methods.slice(0, 3).map((method) => <span key={method}>{method}</span>)}
              </div>
              <p className="summary">{paper.summary}</p>
              <div className="paper-footer">
                <span className="read-badge">★ 建议精读</span>
                <span className="score"><b>{paper.score.toFixed(1)}</b> / 10</span>
              </div>
              <a className="card-link" href={paper.url} target="_blank" rel="noreferrer" aria-label={`打开 ${paper.title}`} />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
