const sampleData = [
    { year: "2014", production: 10500, area: 25, yield: 420 },
    { year: "2015", production: 11000, area: 26, yield: 425 },
    { year: "2016", production: 10800, area: 24, yield: 400 },
    { year: "2017", production: 11500, area: 28, yield: 410 },
    { year: "2018", production: 12000, area: 29, yield: 415 },
    { year: "2019", production: 11800, area: 27, yield: 400 },
    { year: "2020", production: 13000, area: 32, yield: 405 },
    { year: "2021", production: 12500, area: 30, yield: 375 },
    { year: "2022", production: 13500, area: 33, yield: 400 },
    { year: "2023", production: 14000, area: 31, yield: 390 }
];
    

function getColor(key) {
    const colors = {
        production: "#4caf50", // vert
        area: "#2196f3",       // bleu
        yield: "#ff9800"       // orange
    };
    return colors[key] || "#999"; // couleur de secours
}

function createBarChart({ selector, data, valueKey, unit }) {
    const container = d3.select(selector);
    container.selectAll("*").remove();

    const containerNode = container.node();
    const width = containerNode.getBoundingClientRect().width;
    const height = 400;
    const margin = { top: 30, right: 20, bottom: 50, left: 60 };

    const color = getColor(valueKey);

    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .attr("preserveAspectRatio", "xMidYMid meet");

    const x = d3.scaleBand()
        .domain(data.map(d => d.year))
        .range([margin.left, width - margin.right])
        .padding(0.4);

    const rawMax = d3.max(data, d => d[valueKey]);
    const unitSize = Math.pow(10, Math.floor(Math.log10(rawMax / 6)));
    const step = Math.ceil((rawMax / 6) / unitSize) * unitSize;
    const maxValue = step * 6;
    const yTicks = d3.range(0, maxValue + 1, step);

    const y = d3.scaleLinear()
        .domain([0, maxValue])
        .range([height - margin.bottom, margin.top]);

    // Ajoute les axes d'abord (grille horizontale)
    const yAxis = svg.append("g")
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y)
            .tickValues(yTicks)
            .tickSize(- (width - margin.left - margin.right))
            .tickPadding(10));

    yAxis.selectAll("line").attr("stroke", "#ccc");
    yAxis.selectAll(".domain").remove();

    // Axe X (pas de grille verticale)
    const xAxis = svg.append("g")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSize(0));

    xAxis.selectAll("text").attr("font-size", "13px");
    xAxis.selectAll(".domain").remove();

    // Barres (dessinées après les axes pour passer par-dessus la grille)
    svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", d => x(d.year))
        .attr("y", d => y(d[valueKey]))
        .attr("width", x.bandwidth())
        .attr("height", d => height - margin.bottom - y(d[valueKey]))
        .attr("fill", color)
        .on("mouseover", (event, d) => {
            tooltip.transition().duration(200).style("opacity", 1);
            tooltip.html(`<strong>${d[valueKey]}${unit}</strong>`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", () => {
            tooltip.transition().duration(200).style("opacity", 0);
        });

    // Tooltip
    const tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("background", "#fff")
        .style("border", "1px solid #ccc")
        .style("padding", "6px 10px")
        .style("font-size", "13px")
        .style("border-radius", "4px")
        .style("pointer-events", "none")
        .style("opacity", 0);
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
