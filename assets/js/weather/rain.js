const rainChart = new ApexCharts(document.querySelector("#rain-chart"), {
    chart: {
        type: 'bar',
        height: 260,
        toolbar: { tools: { download: true, zoom: false, pan: false, reset: false } }
    },
    series: [{
        name: 'Précipitations',
        data: [0, 5, 8, 0, 12, 20, 0, 25, 10, 0, 6, 12, 0, 18, 14, 9, 7, 0, 4, 16, 23, 0, 5, 3, 0, 15, 11, 0, 19, 6, 7]
    }],
    xaxis: {
        categories: joursDuMois,
        title: { text: 'Jour du mois' }
    },
    yaxis: {
        title: { text: 'mm' }
    },
    colors: ['#60A5FA'], // bleu clair
    tooltip: {
        y: {
        formatter: val => `${val} mm`
        }
    },
    dataLabels: { enabled: false }
});
rainChart.render();
