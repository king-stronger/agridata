const surfaceChart = new ApexCharts(document.querySelector("#surface-chart"), {
    chart: {
        type: 'bar',
        height: 280,
        toolbar: {
            tools: { download: true, selection: false, zoom: false, zoomin: false, zoomout: false, pan: false, reset: false },
        }
    },
    series: [{
        name: 'Surface',
        data: [2.1, 1.8, 2.5, 3.4, 4.1, 5.0, 5.8, 6.0, 6.2, 5.5, 3.6, 2.9]
    }],
    xaxis: {
        categories: mois
    },
    yaxis: {
        title: { text: 'Hectares (Ha)' }
    },
    tooltip: {
        y: {
            formatter: val => `${val} Ha`
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#10B981'] // vert
});

surfaceChart.render();