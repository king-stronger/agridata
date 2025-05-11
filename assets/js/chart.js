const sampleData = [
  { year: "2014", production: 10500, area: 30, yield: 350 },
  { year: "2015", production: 11200, area: 32, yield: 360 },
  { year: "2016", production: 12000, area: 34, yield: 370 },
  { year: "2017", production: 12500, area: 35, yield: 375 },
  { year: "2018", production: 13000, area: 36, yield: 380 },
  { year: "2019", production: 14000, area: 37, yield: 390 },
  { year: "2020", production: 14500, area: 38, yield: 395 },
  { year: "2021", production: 15000, area: 40, yield: 400 },
  { year: "2022", production: 15500, area: 41, yield: 405 },
  { year: "2023", production: 16000, area: 43, yield: 410 }
];

function createBarChart({ selector, data, valueKey, unit }) {
    const container = d3.select(selector);
    container.selectAll("*").remove();

    // Détection de la largeur du conteneur parent pour le responsive
    const containerNode = container.node();
    const width = containerNode.getBoundingClientRect().width;
    const height = 350;
    const margin = { top: 30, right: 20, bottom: 40, left: 60 };

    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`) // Rend le SVG responsive
        .attr("preserveAspectRatio", "xMidYMid meet");

    const x = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([margin.left, width - margin.right])
        .paddingInner(0.4)
        .paddingOuter(0.2);

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[valueKey]) * 1.1])
        .nice()
        .range([height - margin.bottom, margin.top])

    svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x));

    svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y));

    const tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("background", "#fff")
        .style("border", "1px solid #ccc")
        .style("padding", "6px 10px")
        .style("font-size", "13px")
        .style("border-radius", "4px")
        .style("pointer-events", "none")
        .style("opacity", 0);

    svg.selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.year))
        .attr("y", d => y(d[valueKey]))
        .attr("width", x.bandwidth())
        .attr("height", d => y(0) - y(d[valueKey]))
        .attr("fill", "#4caf50")
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", 1);
            tooltip.html(`<strong>${d[valueKey]} ${unit}</strong>`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.transition().duration(200).style("opacity", 0);
        });
}

function renderCharts() {
    createBarChart({
        selector: ".production-section .chart",
        data: sampleData,
        valueKey: "production",
        unit: " Tonnes"
    });

    createBarChart({
        selector: ".area-harvested-section .chart",
        data: sampleData,
        valueKey: "area",
        unit: " Hectares"
    });

    createBarChart({
        selector: ".yield-section .chart",
        data: sampleData,
        valueKey: "yield",
        unit: " T/ha"
    });
}


renderCharts();

let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        renderCharts();
    }, 300);
});
