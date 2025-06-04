// yield-monthly-chart.js
const yieldChartOptions = {
    chart: {
    type: 'bar',
    height: 350,
    toolbar: {
        show: true,
        tools: { download: true }
    }
    },
    series: [{
    name: 'Rendement',
    data: [2.8, 3.1, 3.4, 3.7, 4.2, 4.5, 5.0, 5.2, 4.8, 4.0, 3.3, 2.1]
    }],
    xaxis: {
    categories: ['Janv', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc']
    },
    yaxis: {
    title: { text: 'Tonnes / Hectare' },
    labels: {
        formatter: val => `${val} T`
    }
    },
    colors: ['#4CAF50'],
    dataLabels: {
    enabled: false
    },
    tooltip: {
    y: {
        formatter: val => `${val.toFixed(1)} T/Ha`
    }
    },
    responsive: [{
    breakpoint: 768,
    options: {
        chart: { height: 300 },
        xaxis: { labels: { rotate: -45 } }
    }
    }]
};

new ApexCharts(document.querySelector("#yield-monthly-chart"), yieldChartOptions).render();
