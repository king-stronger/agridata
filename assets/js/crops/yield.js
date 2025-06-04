const yieldChart = new ApexCharts(document.querySelector("#yield-chart"), {
    chart: {
        type: 'line',
        height: 280,
        toolbar: {
            tools: { download: true, selection: false, zoom: false, zoomin: false, zoomout: false, pan: false, reset: false },
        }
    },
    series: [{
        name: 'Rendement',
        data: [2.9, 2.7, 3.1, 3.5, 3.8, 4.2, 5.0, 5.2, 4.9, 4.3, 3.5, 3.0]
    }],
    xaxis: {
        categories: mois
    },
    yaxis: {
        title: { text: 'Tonnes/Ha' }
    },
    stroke: {
        curve: 'smooth',
        width: 3
    },
    markers: {
        size: 5
    },
    tooltip: {
        y: {
            formatter: val => `${val} T/Ha`
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#F97316'] // orange
});

yieldChart.render();