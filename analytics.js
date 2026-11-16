(()=>{const $=s=>document.querySelector(s);if(!$('#chart'))return;
    const chartData = [
      { name: "Pakistan", region: "asia", gdp: 1550, life: 67, co2: .9, pop: 240 },
      { name: "India", region: "asia", gdp: 2400, life: 68, co2: 1.9, pop: 1428 },
      { name: "China", region: "asia", gdp: 12500, life: 78, co2: 7.6, pop: 1412 },
      { name: "Japan", region: "asia", gdp: 34000, life: 84, co2: 8.4, pop: 124 },
      { name: "Bangladesh", region: "asia", gdp: 2650, life: 73, co2: .6, pop: 173 },
      { name: "Germany", region: "europe", gdp: 52000, life: 81, co2: 8.1, pop: 84 },
      { name: "United Kingdom", region: "europe", gdp: 46000, life: 80, co2: 4.7, pop: 68 },
      { name: "France", region: "europe", gdp: 44000, life: 82, co2: 4.6, pop: 68 },
      { name: "Brazil", region: "americas", gdp: 10300, life: 75, co2: 2.3, pop: 216 },
      { name: "United States", region: "americas", gdp: 80000, life: 77, co2: 14.9, pop: 335 },
      { name: "Mexico", region: "americas", gdp: 11500, life: 75, co2: 3.7, pop: 128 },
      { name: "Nigeria", region: "africa", gdp: 2200, life: 55, co2: .6, pop: 223 },
      { name: "South Africa", region: "africa", gdp: 6200, life: 62, co2: 7.4, pop: 60 }
    ];
    const regionColors = { asia: "#d9ae52", europe: "#5aa9e6", americas: "#59c98f", africa: "#c97bd1" };
    const regionLabels = { asia: "Asia", europe: "Europe", americas: "Americas", africa: "Africa" };
    const metricLabels = { gdp: "GDP per capita", life: "Life expectancy", co2: "CO₂ emissions" };
    const metricFormat = {
      gdp: v => "$" + Math.round(v).toLocaleString(),
      life: v => v.toFixed(0) + " yrs",
      co2: v => v.toFixed(1) + " t/capita"
    };
    const popSqrtValues = chartData.map(d => Math.sqrt(d.pop));
    const popSqrtMin = Math.min(...popSqrtValues);
    const popSqrtMax = Math.max(...popSqrtValues);
    function bubbleRadius(pop) {
      const t = (Math.sqrt(pop) - popSqrtMin) / ((popSqrtMax - popSqrtMin) || 1);
      return 5 + t * 16;
    }
    function pearson(points, xKey, yKey) {
      const n = points.length;
      if (n < 2) return null;
      const xs = points.map(p => p.point[xKey]);
      const ys = points.map(p => p.point[yKey]);
      const mx = xs.reduce((a, b) => a + b, 0) / n;
      const my = ys.reduce((a, b) => a + b, 0) / n;
      let num = 0, dx2 = 0, dy2 = 0;
      for (let i = 0; i < n; i++) {
        const dx = xs[i] - mx, dy = ys[i] - my;
        num += dx * dy; dx2 += dx * dx; dy2 += dy * dy;
      }
      const denom = Math.sqrt(dx2 * dy2);
      return denom ? num / denom : null;
    }
    let plotted = [];
    const currentPositions = new Map();
    let chartAnimId = null;
    let pinnedName = null;

    function renderLegend(activeRegion) {
      const holder = $("#chartLegend");
      holder.innerHTML = "";
      Object.keys(regionColors).forEach(region => {
        const chip = document.createElement("span");
        chip.className = "legend-chip" + (activeRegion !== "all" && activeRegion !== region ? " is-dim" : "");
        chip.style.color = regionColors[region];
        chip.innerHTML = `<span class="legend-dot" style="background:${regionColors[region]}"></span><span style="color:var(--muted)">${regionLabels[region]}</span>`;
        holder.appendChild(chip);
      });
    }
    function updateReadout(points, xMetric, yMetric) {
      const readout = $("#chartReadout");
      if (!points.length) { readout.innerHTML = `<span>No countries in this region.</span>`; return; }
      const r = pearson(points, xMetric, yMetric);
      let strength = "no clear";
      if (r !== null) {
        const abs = Math.abs(r);
        strength = abs > 0.66 ? "a strong" : abs > 0.33 ? "a moderate" : "a weak";
        strength += r >= 0 ? " positive" : " negative";
      }
      const leaderX = points.reduce((a, b) => (b.point[xMetric] > a.point[xMetric] ? b : a), points[0]);
      const leaderY = points.reduce((a, b) => (b.point[yMetric] > a.point[yMetric] ? b : a), points[0]);
      let html = `
        <span><strong>r = ${r === null ? "–" : r.toFixed(2)}</strong> · ${strength} relationship</span>
        <span>Leads on ${metricLabels[xMetric].toLowerCase()}: <strong>${leaderX.point.name}</strong></span>
        <span>Leads on ${metricLabels[yMetric].toLowerCase()}: <strong>${leaderY.point.name}</strong></span>
      `;
      const pinned = pinnedName && points.find(item => item.point.name === pinnedName);
      if (pinned) {
        html += `<span class="pinned"><strong>${pinned.point.name}</strong> · ${regionLabels[pinned.point.region]} · ${pinned.point.pop.toLocaleString()}M people · ${metricLabels[xMetric]}: ${metricFormat[xMetric](pinned.point[xMetric])} · ${metricLabels[yMetric]}: ${metricFormat[yMetric](pinned.point[yMetric])}</span>`;
      }
      readout.innerHTML = html;
    }
    function computeTargets() {
      const canvas = $("#chart");
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const xMetric = $("#xMetric").value;
      const yMetric = $("#yMetric").value;
      const filter = $("#regionFilter").value;
      const points = chartData.filter(point => filter === "all" || point.region === filter);
      const values = key => points.map(point => point[key]);
      const min = key => Math.min(...values(key));
      const max = key => Math.max(...values(key));
      const padL = 54, padR = 20, padT = 16, padB = 40;
      const xMin = min(xMetric), xMax = max(xMetric) || xMin + 1;
      const yMin = min(yMetric), yMax = max(yMetric) || yMin + 1;
      const xScale = v => padL + ((v - xMin) / ((xMax - xMin) || 1)) * (width - padL - padR);
      const yScale = v => height - padB - ((v - yMin) / ((yMax - yMin) || 1)) * (height - padT - padB);
      const targets = points.map(point => ({
        point,
        x: xScale(point[xMetric]),
        y: yScale(point[yMetric]),
        radius: bubbleRadius(point.pop),
        color: regionColors[point.region]
      }));
      let trend = null;
      const r = pearson(targets, xMetric, yMetric);
      if (targets.length > 1 && r !== null) {
        const xs = targets.map(t => t.point[xMetric]);
        const n = xs.length;
        const mx = xs.reduce((a, b) => a + b, 0) / n;
        const my = targets.map(t => t.point[yMetric]).reduce((a, b) => a + b, 0) / n;
        let num = 0, den = 0;
        targets.forEach(t => { const dx = t.point[xMetric] - mx; num += dx * (t.point[yMetric] - my); den += dx * dx; });
        const slope = den ? num / den : 0;
        const intercept = my - slope * mx;
        trend = {
          x1: xScale(xMin), y1: yScale(slope * xMin + intercept),
          x2: xScale(xMax), y2: yScale(slope * xMax + intercept)
        };
      }
      return { targets, width, height, xMetric, yMetric, padL, padR, padT, padB, xMin, xMax, yMin, yMax, trend };
    }
    function drawFrame(layout, frameTargets, trendAlpha) {
      const canvas = $("#chart");
      const dpr = window.devicePixelRatio || 1;
      canvas.width = layout.width * dpr;
      canvas.height = layout.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx.scale(dpr, dpr);
      const { width, height, padL, padR, padT, padB, xMin, xMax, yMin, yMax, xMetric, yMetric } = layout;
      ctx.clearRect(0, 0, width, height);
      const lineColor = getComputedStyle(document.body).getPropertyValue("--line").trim();
      const mutedColor = getComputedStyle(document.body).getPropertyValue("--muted").trim();
      ctx.strokeStyle = lineColor; ctx.lineWidth = 1;
      ctx.font = "10.5px 'Space Mono'"; ctx.fillStyle = mutedColor;
      for (let i = 0; i <= 4; i++) {
        const y = padT + (i * (height - padT - padB)) / 4;
        ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(width - padR, y); ctx.stroke();
        const val = yMax - (i * (yMax - yMin)) / 4;
        ctx.textAlign = "right";
        ctx.fillText(metricFormat[yMetric] ? metricFormat[yMetric](val) : val.toFixed(0), padL - 8, y + 3);
      }
      ctx.textAlign = "left";
      for (let i = 0; i <= 3; i++) {
        const val = xMin + (i * (xMax - xMin)) / 3;
        const x = padL + (i * (width - padL - padR)) / 3;
        ctx.fillText(metricFormat[xMetric] ? metricFormat[xMetric](val) : val.toFixed(0), Math.min(x, width - padR - 55), height - padB + 16);
      }
      if (layout.trend && trendAlpha > 0) {
        ctx.save(); ctx.globalAlpha = trendAlpha; ctx.setLineDash([5, 5]);
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--gold").trim();
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(layout.trend.x1, layout.trend.y1);
        ctx.lineTo(layout.trend.x2, layout.trend.y2);
        ctx.stroke(); ctx.restore();
      }
      frameTargets.forEach(t => {
        ctx.beginPath();
        ctx.fillStyle = t.color; ctx.globalAlpha = .88;
        ctx.shadowBlur = 14; ctx.shadowColor = t.color;
        ctx.arc(t.x, t.y, t.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; ctx.globalAlpha = 1;
        ctx.lineWidth = 1; ctx.strokeStyle = "rgba(0,0,0,.25)"; ctx.stroke();
        if (pinnedName && t.point.name === pinnedName) {
          ctx.beginPath();
          ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--gold").trim();
          ctx.lineWidth = 2;
          ctx.arc(t.x, t.y, t.radius + 5, 0, Math.PI * 2);
          ctx.stroke();
        }
      });
      plotted = frameTargets;
    }
    function drawChart(animate = true) {
      const showTrend = $("#trendToggle").checked;
      const layout = computeTargets();
      renderLegend($("#regionFilter").value);
      updateReadout(layout.targets, layout.xMetric, layout.yMetric);
      if (!layout.trend) layout.trend = null;
      if (!showTrend) layout.trend = null;
      const starts = layout.targets.map(t => currentPositions.get(t.point.name) || { x: t.x, y: t.y, radius: t.radius });
      const hasMoved = layout.targets.some((t, i) => Math.hypot(t.x - starts[i].x, t.y - starts[i].y) > 1);
      cancelAnimationFrame(chartAnimId);
      if (!animate || !hasMoved) {
        drawFrame(layout, layout.targets, showTrend ? 1 : 0);
        layout.targets.forEach(t => currentPositions.set(t.point.name, { x: t.x, y: t.y, radius: t.radius }));
        return;
      }
      const duration = 560;
      const startTime = performance.now();
      function step(now) {
        const t = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const frameTargets = layout.targets.map((target, i) => ({
          ...target,
          x: starts[i].x + (target.x - starts[i].x) * eased,
          y: starts[i].y + (target.y - starts[i].y) * eased,
          radius: starts[i].radius + (target.radius - starts[i].radius) * eased
        }));
        drawFrame(layout, frameTargets, showTrend ? eased : 0);
        if (t < 1) chartAnimId = requestAnimationFrame(step);
        else layout.targets.forEach(target => currentPositions.set(target.point.name, { x: target.x, y: target.y, radius: target.radius }));
      }
      chartAnimId = requestAnimationFrame(step);
    }
    function hitTest(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const px = event.clientX - rect.left;
      const py = event.clientY - rect.top;
      return plotted.find(item => Math.hypot(item.x - px, item.y - py) < item.radius + 4);
    }
    ["xMetric", "yMetric", "regionFilter", "trendToggle"].forEach(id => $("#" + id).addEventListener("change", () => drawChart(!matchMedia("(prefers-reduced-motion: reduce)").matches)));
    $("#chart").addEventListener("mousemove", event => {
      const rect = event.currentTarget.getBoundingClientRect();
      const hit = hitTest(event);
      const tooltip = $("#tooltip");
      if (hit) {
        const xMetric = $("#xMetric").value;
        const yMetric = $("#yMetric").value;
        tooltip.style.display = "block";
        tooltip.style.left = Math.min(hit.x + 14, rect.width - 170) + "px";
        tooltip.style.top = Math.max(hit.y - 8, 0) + "px";
        tooltip.innerHTML = `<strong>${hit.point.name}</strong><br>${regionLabels[hit.point.region]} · ${(hit.point.pop).toLocaleString()}M people<br>${metricLabels[xMetric]}: ${metricFormat[xMetric](hit.point[xMetric])}<br>${metricLabels[yMetric]}: ${metricFormat[yMetric](hit.point[yMetric])}`;
      } else tooltip.style.display = "none";
    });
    $("#chart").addEventListener("mouseleave", () => { $("#tooltip").style.display = "none"; });
    $("#chart").addEventListener("click", event => {
      const hit = hitTest(event);
      if (!hit) { pinnedName = null; }
      else { pinnedName = pinnedName === hit.point.name ? null : hit.point.name; }
      drawChart(false);
      if (pinnedName) showToast(pinnedName + " pinned. Click again to clear.");
    });
    $("#downloadChart").addEventListener("click", () => {
      const link = document.createElement("a");
      link.download = "owais-economic-indicators-chart.png";
      link.href = $("#chart").toDataURL("image/png");
      link.click();
    });
    window.addEventListener("resize", () => drawChart(false));
    drawChart(false);


function updateTable(){const region=$('#regionFilter').value;const rows=chartData.filter(d=>region==='all'||d.region===region);$('#dataBody').innerHTML=rows.map(d=>`<tr><th scope="row">${d.name}</th><td>${regionLabels[d.region]}</td><td>${d.gdp.toLocaleString()}</td><td>${d.life}</td><td>${d.co2}</td><td>${d.pop}</td></tr>`).join('');}
$('#regionFilter').addEventListener('change',updateTable);updateTable();
$('#downloadCSV').addEventListener('click',()=>{const rows=chartData.filter(d=>$('#regionFilter').value==='all'||d.region===$('#regionFilter').value);downloadFile('illustrative-indicators.csv','ILLUSTRATIVE DEMONSTRATION DATA — NOT VERIFIED ECONOMIC STATISTICS\nCountry,Region,GDP per capita (USD),Life expectancy (years),CO2 (t/capita),Population (million)\n'+rows.map(d=>[d.name,d.region,d.gdp,d.life,d.co2,d.pop].join(',')).join('\n'),'text/csv');});
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('#analyticsPanel').requestFullscreen();setTimeout(()=>drawChart(false),150);}catch{showToast('Fullscreen is unavailable in this browser.');}});
$('#pinCountry').innerHTML='<option value="">No country selected</option>'+chartData.map(d=>`<option>${d.name}</option>`).join('');$('#pinCountry').addEventListener('change',e=>{pinnedName=e.target.value||null;drawChart(false);});
new MutationObserver(()=>drawChart(false)).observe(document.body,{attributes:true,attributeFilter:['data-theme']});
})();