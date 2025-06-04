const humidityChart = new ApexCharts(document.querySelector("#humidity-chart"), {
    chart: {
        type: 'area',
        height: 260,
        toolbar: { tools: { download: true, zoom: false, pan: false, reset: false } }
    },
    series: [{
        name: 'Humidité',
        data: [65, 67, 70, 73, 75, 78, 80, 82, 85, 87, 89, 91, 88, 85, 83, 81, 78, 76, 74, 72, 70, 68, 66, 64, 63, 60, 58, 57, 56, 55, 57]
    }],
    xaxis: {
        categories: joursDuMois,
        title: { text: 'Jour du mois' }
    },
    yaxis: {
        title: { text: '%' }
    },
    colors: ['#34D399'], // vert
    stroke: { curve: 'smooth' },
    fill: {
    type: 'gradient',
        gradient: { shadeIntensity: 1, opacityFrom: 0.6, opacityTo: 0.1 }
    },
    tooltip: {
        y: {
            formatter: val => `${val}%`
        }
    },
    dataLabels: { enabled: false }
});

humidityChart.render();