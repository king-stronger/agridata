const tempChart = new ApexCharts(document.querySelector("#temp-chart"), {
    chart: {
        type: 'line',
        height: 350,
        toolbar: { tools: { download: true, zoom: false, pan: false, reset: false } }
    },
    series: [{
        name: 'Température moyenne',
        data: [28.1, 29.0, 30.2, 29.5, 30.4, 31.0, 29.9, 30.8, 31.2, 30.1, 28.8, 29.3, 30.5, 31.4, 32.0, 30.6, 29.7, 30.2, 31.6, 29.4, 28.5, 27.9, 29.1, 30.0, 30.7, 29.6, 28.8, 30.2, 31.1, 30.5, 29.9]
    }],
    xaxis: {
        categories: joursDuMois,
        title: { text: 'Jour du mois' }
    },
    yaxis: {
        title: { text: '°C' }
    },
    colors: ['#F97316'], // orange
    stroke: { curve: 'smooth', width: 3 },
    markers: { size: 4 },
    tooltip: {
        y: {
            formatter: val => `${val.toFixed(1)} °C`
        }
    },
    dataLabels: { enabled: false }
});

tempChart.render();