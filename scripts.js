const opportunities = [
  {
    account: 'Atlas Robotics',
    owner: 'Erin F.',
    region: 'amer',
    segment: 'enterprise',
    stage: 'Negotiation',
    status: 'open',
    amount: 240000,
    probability: 0.55,
    product: 'Platform',
    month: '2024-12-01'
  },
  {
    account: 'Northwind Steel',
    owner: 'Liam S.',
    region: 'emea',
    segment: 'enterprise',
    stage: 'Proposal',
    status: 'open',
    amount: 180000,
    probability: 0.45,
    product: 'Predictive',
    month: '2024-11-01'
  },
  {
    account: 'Silverline Solar',
    owner: 'Priya R.',
    region: 'apac',
    segment: 'smb',
    stage: 'Evaluation',
    status: 'open',
    amount: 72000,
    probability: 0.35,
    product: 'Automation',
    month: '2024-10-01'
  },
  {
    account: 'Beacon Labs',
    owner: 'Jonas T.',
    region: 'amer',
    segment: 'smb',
    stage: 'Discovery',
    status: 'open',
    amount: 54000,
    probability: 0.25,
    product: 'Platform',
    month: '2024-09-01'
  },
  {
    account: 'Helios Textiles',
    owner: 'Fatima L.',
    region: 'emea',
    segment: 'enterprise',
    stage: 'Won',
    status: 'won',
    amount: 320000,
    probability: 1,
    product: 'Platform',
    month: '2024-12-01'
  },
  {
    account: 'Granite Works',
    owner: 'Carlos M.',
    region: 'amer',
    segment: 'enterprise',
    stage: 'Won',
    status: 'won',
    amount: 210000,
    probability: 1,
    product: 'Automation',
    month: '2024-11-01'
  },
  {
    account: 'Eastridge Mobility',
    owner: 'Hanna P.',
    region: 'apac',
    segment: 'enterprise',
    stage: 'Won',
    status: 'won',
    amount: 150000,
    probability: 1,
    product: 'Platform',
    month: '2024-11-01'
  },
  {
    account: 'Polar Freight',
    owner: 'Aaron J.',
    region: 'emea',
    segment: 'smb',
    stage: 'Won',
    status: 'won',
    amount: 88000,
    probability: 1,
    product: 'Predictive',
    month: '2024-10-01'
  },
  {
    account: 'Civic Grid',
    owner: 'Lina Y.',
    region: 'amer',
    segment: 'smb',
    stage: 'Won',
    status: 'won',
    amount: 126000,
    probability: 1,
    product: 'Automation',
    month: '2024-09-01'
  },
  {
    account: 'Orchid Health',
    owner: 'Sven K.',
    region: 'apac',
    segment: 'enterprise',
    stage: 'Won',
    status: 'won',
    amount: 196000,
    probability: 1,
    product: 'Platform',
    month: '2024-08-01'
  },
  {
    account: 'Mono Rail',
    owner: 'Ella W.',
    region: 'amer',
    segment: 'enterprise',
    stage: 'Lost',
    status: 'lost',
    amount: 142000,
    probability: 0,
    product: 'Platform',
    month: '2024-09-01'
  },
  {
    account: 'Altitude Labs',
    owner: 'Priya R.',
    region: 'apac',
    segment: 'smb',
    stage: 'Lost',
    status: 'lost',
    amount: 64000,
    probability: 0,
    product: 'Automation',
    month: '2024-08-01'
  },
  {
    account: 'Emerald Foods',
    owner: 'Hanna P.',
    region: 'emea',
    segment: 'enterprise',
    stage: 'Proposal',
    status: 'open',
    amount: 96000,
    probability: 0.4,
    product: 'Predictive',
    month: '2024-07-01'
  },
  {
    account: 'Beacon Labs (Renewal)',
    owner: 'Jonas T.',
    region: 'amer',
    segment: 'smb',
    stage: 'Won',
    status: 'won',
    amount: 62000,
    probability: 1,
    product: 'Automation',
    month: '2024-07-01'
  },
  {
    account: 'MetroGrid',
    owner: 'Erin F.',
    region: 'amer',
    segment: 'enterprise',
    stage: 'Evaluation',
    status: 'open',
    amount: 134000,
    probability: 0.3,
    product: 'Platform',
    month: '2024-06-01'
  },
  {
    account: 'Nexus Energy',
    owner: 'Fatima L.',
    region: 'emea',
    segment: 'enterprise',
    stage: 'Discovery',
    status: 'open',
    amount: 120000,
    probability: 0.2,
    product: 'Predictive',
    month: '2024-05-01'
  },
  {
    account: 'Brightline',
    owner: 'Liam S.',
    region: 'emea',
    segment: 'smb',
    stage: 'Won',
    status: 'won',
    amount: 72000,
    probability: 1,
    product: 'Automation',
    month: '2024-05-01'
  },
  {
    account: 'Terranova',
    owner: 'Priya R.',
    region: 'apac',
    segment: 'enterprise',
    stage: 'Lost',
    status: 'lost',
    amount: 101000,
    probability: 0,
    product: 'Platform',
    month: '2024-04-01'
  },
  {
    account: 'Hearth & Home',
    owner: 'Erin F.',
    region: 'amer',
    segment: 'smb',
    stage: 'Won',
    status: 'won',
    amount: 52000,
    probability: 1,
    product: 'Predictive',
    month: '2024-03-01'
  },
  {
    account: 'Asterix Mining',
    owner: 'Sven K.',
    region: 'apac',
    segment: 'enterprise',
    stage: 'Discovery',
    status: 'open',
    amount: 148000,
    probability: 0.2,
    product: 'Platform',
    month: '2024-02-01'
  }
];

const retentionHistory = [
  { month: '2024-12-01', region: 'all', segment: 'enterprise', retention: 0.95 },
  { month: '2024-12-01', region: 'all', segment: 'smb', retention: 0.92 },
  { month: '2024-09-01', region: 'amer', segment: 'enterprise', retention: 0.93 },
  { month: '2024-09-01', region: 'emea', segment: 'enterprise', retention: 0.91 },
  { month: '2024-09-01', region: 'apac', segment: 'enterprise', retention: 0.9 },
  { month: '2024-09-01', region: 'amer', segment: 'smb', retention: 0.9 },
  { month: '2024-09-01', region: 'emea', segment: 'smb', retention: 0.88 },
  { month: '2024-09-01', region: 'apac', segment: 'smb', retention: 0.89 }
];

const signals = [
  { type: 'Intent surge', detail: 'Atlas Robotics +32% web visits week-over-week', severity: 'success' },
  { type: 'Risk alert', detail: 'Hearth & Home renewal flagged due to support backlog', severity: 'danger' },
  { type: 'Product usage', detail: 'Beacon Labs automation hours up 18% MoM', severity: 'success' },
  { type: 'GTM', detail: 'New partner influenced deal opened in EMEA (Northwind Steel)', severity: 'warning' },
  { type: 'Finance', detail: 'Discount above 18% requested by MetroGrid', severity: 'warning' },
  { type: 'Advocacy', detail: 'Reference available from Helios Textiles CTO', severity: 'success' }
];

const baselineRoi = {
  revenueYear1: 265000,
  costsYear1: 163186,
  marginYear1: 101814,
  cumulativeRevenue5: 3974000,
  cumulativeCosts5: 753730,
  cumulativeMargin5: 1218294,
  targetRoi: 1.62
};

const baseSeasonality = [1.05, 0.97, 0.92, 0.88, 0.94, 1.0, 1.08, 1.12, 1.18, 1.22, 1.1, 1.03];

const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const euroFormatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
const percentFmt = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 });

const state = {
  timeframe: 12,
  region: 'all',
  segments: new Set(['enterprise', 'smb']),
  search: ''
};

let charts = { trend: null, stage: null, product: null, roi: null, seasonality: null };
let forecastState = { seasonality: [...baseSeasonality], ramp: buildRampMultipliers() };

function parseMonth(value) {
  return new Date(value + 'T00:00:00');
}

function maxMonth() {
  return opportunities.reduce((max, o) => {
    const d = parseMonth(o.month);
    return d > max ? d : max;
  }, new Date(0));
}

function withinTimeframe(opportunity, months) {
  const latest = maxMonth();
  const threshold = new Date(latest);
  threshold.setMonth(threshold.getMonth() - (months - 1));
  const d = parseMonth(opportunity.month);
  return d >= threshold && d <= latest;
}

function filterOpportunities() {
  return opportunities.filter((op) => {
    if (!withinTimeframe(op, state.timeframe)) return false;
    if (state.region !== 'all' && op.region !== state.region) return false;
    if (!state.segments.has(op.segment)) return false;
    if (state.search) {
      const term = state.search.toLowerCase();
      const hay = `${op.account} ${op.owner} ${op.product}`.toLowerCase();
      if (!hay.includes(term)) return false;
    }
    return true;
  });
}

function partitionPeriods(months) {
  const latest = maxMonth();
  const startCurrent = new Date(latest);
  startCurrent.setMonth(startCurrent.getMonth() - (months - 1));
  const endPrevious = new Date(startCurrent);
  endPrevious.setDate(0);
  const startPrevious = new Date(endPrevious);
  startPrevious.setMonth(startPrevious.getMonth() - (months - 1));
  return { startCurrent, latest, startPrevious, endPrevious };
}

function sumRevenue(data) {
  return data.filter((d) => d.status === 'won').reduce((acc, d) => acc + d.amount, 0);
}

function sumPipeline(data) {
  return data.filter((d) => d.status === 'open').reduce((acc, d) => acc + d.amount * d.probability, 0);
}

function winRate(data) {
  const won = data.filter((d) => d.status === 'won').length;
  const decided = data.filter((d) => d.status === 'won' || d.status === 'lost').length;
  return decided === 0 ? 0 : won / decided;
}

function retention(months) {
  const { startCurrent, latest } = partitionPeriods(months);
  const relevant = retentionHistory.filter((r) => {
    const d = parseMonth(r.month);
    const regionMatch = state.region === 'all' || r.region === state.region || r.region === 'all';
    return d >= startCurrent && d <= latest && regionMatch && state.segments.has(r.segment);
  });
  if (!relevant.length) return 0.9;
  const total = relevant.reduce((acc, r) => acc + r.retention, 0);
  return total / relevant.length;
}

function delta(current, previous) {
  if (previous === 0) return current > 0 ? 1 : 0;
  return (current - previous) / previous;
}

function formatDelta(value) {
  const pct = percentFmt.format(Math.abs(value));
  const sign = value >= 0 ? '▲' : '▼';
  return `${sign} ${pct}`;
}

function stageColor(stage) {
  const map = {
    Discovery: '#60a5fa',
    Evaluation: '#22d3ee',
    Proposal: '#a855f7',
    Negotiation: '#f59e0b',
    Won: '#34d399'
  };
  return map[stage] || '#94a3b8';
}

function buildTrendData(data, months) {
  const latest = maxMonth();
  const points = [];
  for (let i = months - 1; i >= 0; i -= 1) {
    const current = new Date(latest);
    current.setMonth(latest.getMonth() - i);
    const monthKey = current.toISOString().slice(0, 7);
    const monthRevenue = data
      .filter((d) => d.status === 'won' && d.month.startsWith(monthKey))
      .reduce((acc, d) => acc + d.amount, 0);
    points.push({ label: current.toLocaleString('default', { month: 'short' }), value: monthRevenue });
  }
  return points;
}

function buildStageData(data) {
  const stages = ['Discovery', 'Evaluation', 'Proposal', 'Negotiation'];
  return stages.map((stage) => ({ stage, value: data.filter((d) => d.stage === stage).reduce((acc, d) => acc + d.amount, 0) }));
}

function buildProductMix(data) {
  const mix = {};
  data.forEach((d) => {
    if (d.status !== 'won') return;
    mix[d.product] = (mix[d.product] || 0) + d.amount;
  });
  return Object.entries(mix).map(([product, value]) => ({ product, value }));
}

function updateKpi(elementId, value, deltaValue, formatterFn, isPercent = false) {
  const card = document.getElementById(elementId);
  const valueEl = card.querySelector('[data-field="value"]');
  const deltaEl = card.querySelector('[data-field="delta"]');
  valueEl.textContent = formatterFn(value);
  deltaEl.textContent = formatDelta(deltaValue);
  deltaEl.classList.toggle('negative', deltaValue < 0);
  deltaEl.setAttribute('aria-label', `${isPercent ? 'Percentage' : 'Value'} change ${formatDelta(deltaValue)}`);
}

function renderTable(data) {
  const tbody = document.getElementById('deal-rows');
  tbody.innerHTML = '';
  const rows = data
    .sort((a, b) => b.amount * b.probability - a.amount * a.probability)
    .slice(0, 12)
    .map((deal) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${deal.account}</td>
        <td><span class="badge">${deal.region.toUpperCase()}</span></td>
        <td><span class="badge">${deal.segment}</span></td>
        <td><span class="stage-pill">${deal.stage}</span></td>
        <td class="numeric">${formatter.format(deal.amount)}</td>
        <td class="numeric">${percentFmt.format(deal.probability)}</td>
      `;
      return tr;
    });
  rows.forEach((row) => tbody.appendChild(row));
  document.getElementById('table-caption').textContent = `${rows.length} deals surfaced`;
}

function renderFeed(items) {
  const list = document.getElementById('feed');
  list.innerHTML = '';
  items.slice(0, 6).forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="dot" style="background:${severityColor(item.severity)}"></span>
      <div>
        <strong>${item.type}</strong>
        <p class="muted">${item.detail}</p>
      </div>
    `;
    list.appendChild(li);
  });
}

function severityColor(level) {
  const map = {
    success: 'var(--success)',
    warning: 'var(--warning)',
    danger: 'var(--danger)'
  };
  return map[level] || 'var(--accent)';
}

function buildRampMultipliers() {
  const months = 60;
  const ramp = [];
  for (let i = 0; i < months; i += 1) {
    if (i < 12) {
      ramp.push(0.35 + (i / 11) * (1 - 0.35));
    } else if (i < 24) {
      ramp.push(1 + ((i - 12) / 12) * 0.05);
    } else {
      ramp.push(1.05);
    }
  }
  return ramp;
}

function buildForecast() {
  const ramp = forecastState.ramp;
  const seasonality = forecastState.seasonality;
  const monthlyFactors = ramp.map((r, idx) => r * seasonality[idx % 12]);
  const baseMonthlyRevenue = baselineRoi.revenueYear1 / monthlyFactors.slice(0, 12).reduce((acc, val) => acc + val, 0);
  const baseMonthlyCosts = baselineRoi.costsYear1 / 12;

  const months = [];
  const years = [];
  let cumulativeMargin = 0;
  for (let i = 0; i < ramp.length; i += 1) {
    const revenue = baseMonthlyRevenue * monthlyFactors[i];
    const costs = baseMonthlyCosts * (0.98 + Math.floor(i / 12) * 0.02);
    const margin = revenue - costs;
    cumulativeMargin += margin;
    const date = new Date();
    date.setMonth(date.getMonth() + i);
    months.push({
      label: date.toLocaleString('default', { month: 'short', year: '2-digit' }),
      revenue,
      costs,
      margin,
      multiplier: monthlyFactors[i]
    });
    const yearIdx = Math.floor(i / 12);
    if (!years[yearIdx]) years[yearIdx] = { label: `Jahr ${yearIdx + 1}`, revenue: 0, costs: 0, margin: 0 };
    years[yearIdx].revenue += revenue;
    years[yearIdx].costs += costs;
    years[yearIdx].margin += margin;
  }
  return { months, years, cumulativeMargin };
}

function renderRoiKpis(forecast) {
  const year1 = forecast.years[0];
  const cumulative = forecast.years.reduce(
    (acc, year) => ({
      revenue: acc.revenue + year.revenue,
      costs: acc.costs + year.costs,
      margin: acc.margin + year.margin
    }),
    { revenue: 0, costs: 0, margin: 0 }
  );
  const roi = cumulative.margin / cumulative.costs;

  setRoiCard('kpi-roi-revenue', year1.revenue, `Baseline: ${euroFormatter.format(baselineRoi.revenueYear1)}`);
  setRoiCard('kpi-roi-costs', year1.costs, `Setup + laufend: ${euroFormatter.format(baselineRoi.costsYear1)}`);
  setRoiCard('kpi-roi-margin', year1.margin, `Kumuliert 5 Jahre: ${euroFormatter.format(cumulative.margin)}`);
  setRoiCard('kpi-roi-multiplier', roi, `Ziel > ${percentFmt.format(baselineRoi.targetRoi)}`, true);
}

function setRoiCard(id, value, subtitle, isPercent = false) {
  const card = document.getElementById(id);
  if (!card) return;
  const valueEl = card.querySelector('[data-field="value"]');
  const deltaEl = card.querySelector('[data-field="delta"]');
  valueEl.textContent = isPercent ? percentFmt.format(value) : euroFormatter.format(value);
  deltaEl.textContent = subtitle;
  deltaEl.classList.toggle('negative', false);
}

function renderRoiCharts(forecast) {
  const roiCtx = document.getElementById('roi-chart');
  const seasonalityCtx = document.getElementById('seasonality-chart');

  const roiLabels = forecast.years.map((y) => y.label);
  const revenues = forecast.years.map((y) => Math.round(y.revenue));
  const costs = forecast.years.map((y) => Math.round(y.costs));
  const roiLine = forecast.years.map((y) => y.margin / y.costs);

  if (charts.roi) charts.roi.destroy();
  charts.roi = new Chart(roiCtx, {
    type: 'bar',
    data: {
      labels: roiLabels,
      datasets: [
        {
          label: 'Umsatz',
          data: revenues,
          backgroundColor: 'rgba(0, 95, 135, 0.65)',
          borderRadius: 8
        },
        {
          label: 'Kosten',
          data: costs,
          backgroundColor: 'rgba(243, 156, 18, 0.65)',
          borderRadius: 8
        },
        {
          label: 'ROI',
          data: roiLine,
          type: 'line',
          borderColor: 'var(--success)',
          backgroundColor: 'rgba(43, 159, 123, 0.14)',
          yAxisID: 'y1',
          tension: 0.35,
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { stacked: true, ticks: { callback: (v) => euroFormatter.format(v) }, grid: { color: 'rgba(255,255,255,0.08)' } },
        y1: {
          position: 'right',
          ticks: { callback: (v) => percentFmt.format(v) },
          grid: { display: false },
          suggestedMin: 0,
          suggestedMax: 2
        },
        x: { stacked: true, grid: { display: false } }
      },
      plugins: { legend: { position: 'bottom' } }
    }
  });

  if (charts.seasonality) charts.seasonality.destroy();
  charts.seasonality = new Chart(seasonalityCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mrz', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
      datasets: [
        {
          label: 'Saison',
          data: forecastState.seasonality,
          borderColor: 'var(--warning)',
          backgroundColor: 'rgba(243, 156, 18, 0.12)',
          tension: 0.35,
          fill: true
        },
        {
          label: 'Ramp-up Jahr 1',
          data: forecastState.ramp.slice(0, 12),
          borderColor: 'var(--success)',
          backgroundColor: 'rgba(43, 159, 123, 0.1)',
          tension: 0.35,
          fill: true
        }
      ]
    },
    options: {
      plugins: { legend: { position: 'bottom' } },
      scales: {
        y: { ticks: { callback: (v) => `${v.toFixed(2)}x` }, grid: { color: 'rgba(255,255,255,0.08)' }, suggestedMin: 0.2 },
        x: { grid: { display: false } }
      }
    }
  });

  renderSeasonalityTable();
}

function renderSeasonalityTable() {
  const container = document.getElementById('seasonality-rows');
  if (!container) return;
  container.innerHTML = '';
  for (let i = 0; i < 12; i += 1) {
    const row = document.createElement('div');
    const multiplier = forecastState.seasonality[i] * forecastState.ramp[i];
    row.className = 'seasonality__row';
    row.innerHTML = `
      <span>${i + 1}</span>
      <span>${forecastState.seasonality[i].toFixed(2)}x</span>
      <span>${forecastState.ramp[i].toFixed(2)}x</span>
      <span>${multiplier.toFixed(2)}x</span>
    `;
    container.appendChild(row);
  }
}

function renderCharts(trendPoints, stagePoints, productPoints) {
  const trendCtx = document.getElementById('trend-chart');
  const stageCtx = document.getElementById('stage-chart');
  const productCtx = document.getElementById('product-chart');

  if (charts.trend) charts.trend.destroy();
  charts.trend = new Chart(trendCtx, {
    type: 'line',
    data: {
      labels: trendPoints.map((p) => p.label),
      datasets: [
        {
          label: 'Revenue',
          data: trendPoints.map((p) => p.value),
          borderColor: 'var(--accent)',
          backgroundColor: 'rgba(93, 216, 255, 0.2)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointRadius: 3.5
        }
      ]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { callback: (v) => formatter.format(v) }, grid: { color: 'rgba(255,255,255,0.08)' } },
        x: { grid: { display: false } }
      }
    }
  });

  if (charts.stage) charts.stage.destroy();
  charts.stage = new Chart(stageCtx, {
    type: 'bar',
    data: {
      labels: stagePoints.map((p) => p.stage),
      datasets: [
        {
          label: 'Pipeline',
          data: stagePoints.map((p) => p.value),
          backgroundColor: stagePoints.map((p) => stageColor(p.stage)),
          borderRadius: 8
        }
      ]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: { ticks: { callback: (v) => formatter.format(v) }, grid: { color: 'rgba(255,255,255,0.08)' } },
        x: { grid: { display: false } }
      }
    }
  });

  if (charts.product) charts.product.destroy();
  charts.product = new Chart(productCtx, {
    type: 'doughnut',
    data: {
      labels: productPoints.map((p) => p.product),
      datasets: [
        {
          data: productPoints.map((p) => p.value),
          backgroundColor: ['var(--accent)', 'var(--accent-2)', '#14b8a6', '#eab308'],
          borderWidth: 0
        }
      ]
    },
    options: {
      plugins: {
        legend: { position: 'bottom' }
      },
      cutout: '60%'
    }
  });
}

function toast(message) {
  const el = document.querySelector('.toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}

function update() {
  const filtered = filterOpportunities();
  const periods = partitionPeriods(state.timeframe);
  const prevData = opportunities.filter((op) => {
    const d = parseMonth(op.month);
    return d >= periods.startPrevious && d <= periods.endPrevious && (state.region === 'all' || op.region === state.region) &&
      state.segments.has(op.segment);
  });

  const currentRevenue = sumRevenue(filtered);
  const previousRevenue = sumRevenue(prevData);
  const currentPipeline = sumPipeline(filtered);
  const previousPipeline = sumPipeline(prevData);
  const currentWin = winRate(filtered);
  const previousWin = winRate(prevData);
  const currentRetention = retention(state.timeframe);
  const previousRetention = retention(Math.max(state.timeframe - 3, 3));

  updateKpi('kpi-revenue', currentRevenue, delta(currentRevenue, previousRevenue), formatter);
  updateKpi('kpi-pipeline', currentPipeline, delta(currentPipeline, previousPipeline), formatter);
  updateKpi('kpi-winrate', currentWin, delta(currentWin, previousWin), percentFmt, true);
  updateKpi('kpi-churn', currentRetention, delta(currentRetention, previousRetention), percentFmt, true);

  const trend = buildTrendData(filtered, state.timeframe);
  const stageData = buildStageData(filtered.filter((d) => d.status === 'open'));
  const product = buildProductMix(filtered);
  const forecast = buildForecast();
  renderCharts(trend, stageData, product);
  renderTable(filtered);
  renderFeed(signals);
  renderRoiKpis(forecast);
  renderRoiCharts(forecast);

  document.getElementById('trend-caption').textContent = `${state.timeframe}-month view, ${state.region === 'all' ? 'all regions' : state.region.toUpperCase()}`;
}

function bindEvents() {
  document.getElementById('timeframe').addEventListener('change', (e) => {
    state.timeframe = Number(e.target.value);
    update();
  });

  document.getElementById('region').addEventListener('change', (e) => {
    state.region = e.target.value;
    update();
  });

  document.querySelectorAll('input[name="segment"]').forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        state.segments.add(e.target.value);
      } else {
        state.segments.delete(e.target.value);
        if (state.segments.size === 0) state.segments.add(e.target.value);
      }
      update();
    });
  });

  document.getElementById('search').addEventListener('input', (e) => {
    state.search = e.target.value.trim();
    update();
  });

  document.getElementById('refresh-data').addEventListener('click', () => {
    jitterData();
    toast('Data refreshed with slight randomness');
    update();
  });

  document.getElementById('reset-forecast').addEventListener('click', () => {
    forecastState = { seasonality: [...baseSeasonality], ramp: buildRampMultipliers() };
    toast('Saison- und Ramp-up-Faktoren zurückgesetzt');
    update();
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    document.getElementById('theme-toggle').textContent = isLight ? '🌞 Light mode' : '🌙 Dark mode';
    update();
  });
}

function jitterData() {
  opportunities.forEach((op) => {
    const variance = (Math.random() * 0.06) - 0.03;
    op.amount = Math.max(38000, Math.round(op.amount * (1 + variance)));
    if (op.status === 'open') {
      op.probability = Math.min(0.95, Math.max(0.18, op.probability + variance));
    }
  });

  forecastState.seasonality = forecastState.seasonality.map((v) => {
    const tweak = (Math.random() * 0.04) - 0.02;
    return Math.max(0.75, Math.min(1.3, Number((v * (1 + tweak)).toFixed(2))));
  });
  forecastState.ramp = forecastState.ramp.map((v, idx) => {
    if (idx >= 12) return v;
    const tweak = (Math.random() * 0.05) - 0.025;
    return Math.max(0.3, Math.min(1.15, Number((v * (1 + tweak)).toFixed(2))));
  });
}

function init() {
  bindEvents();
  renderFeed(signals);
  update();
}

document.addEventListener('DOMContentLoaded', init);
