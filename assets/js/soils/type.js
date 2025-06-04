const soilTypeChart = new ApexCharts(document.querySelector("#soil-type-chart"), {
    chart: {
        type: 'donut',
        height: 350,
        toolbar: { tools: { download: true } }
    },
    labels: ['Argileux', 'Limoneux', 'Sableux'],
    series: [42, 30, 28],
    colors: ['#4B5563', '#9CA3AF', '#FBBF24'], // gris foncé, gris clair, jaune sable
    tooltip: {
        y: {
            formatter: val => `${val}%`
        }
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => `${Math.round(val)}%`
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: { height: 220 }
        }
    }]
});

soilTypeChart.render();
