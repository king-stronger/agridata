const productionChart = new ApexCharts(document.querySelector("#production-chart"), {
    chart: {
        type: 'bar',
        height: 350,
        toolbar: {
            tools: { download: true, selection: false, zoom: false, zoomin: false, zoomout: false, pan: false, reset: false },
        }
    },
    series: [{
        name: 'Production',
        data: [620, 315, 400, 550, 680, 890, 1020, 1025, 950, 760, 540, 390]
    }],
    xaxis: {
        categories: mois
    },
    yaxis: {
        title: { text: 'Tonnes (T)' }
    },
    tooltip: {
        y: {
            formatter: val => `${val} T`
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#3B82F6'] // bleu
});

productionChart.render();