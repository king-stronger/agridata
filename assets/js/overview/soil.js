// soil-fertility-chart.js
const soilChartOptions = {
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: true,
        tools: { download: true }
    }
    },
    series: [{
    name: 'Fertilité',
    data: [75, 62, 58, 45]  // valeurs fictives
    }],
    xaxis: {
    categories: ['Sableux', 'Argileux', 'Limoneux', 'Rocheux']
    },
    yaxis: {
    title: { text: 'Taux de fertilité (%)' },
    labels: {
        formatter: val => `${val}%`
    }
    },
    colors: ['#8BC34A'],
    dataLabels: { enabled: false },
    tooltip: {
    y: {
        formatter: val => `${val}%`
    }
    },
    responsive: [{
    breakpoint: 768,
    options: {
        chart: { height: 300 }
    }
    }]
};

new ApexCharts(document.querySelector("#soil-fertility-chart"), soilChartOptions).render();
