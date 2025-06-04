// weather-combo-chart.js
const weatherChartOptions = {
    chart: {
    height: 350,
    type: 'line',
    toolbar: {
        show: true,
        tools: { download: true, zoom: false, selection: false, pan: false, reset: false }
    },
    zoom: { enabled: false }
    },
    series: [
    {
        name: "Température Moyenne (°C)",
        type: "line",
        data: [28.4, 30.1, 31.5, 32.0, 33.2, 34.1, 34.9, 35.2, 33.8, 31.0, 29.2, 28.0]
    },
    {
        name: "Pluie (mm)",
        type: "column",
        data: [10, 15, 25, 60, 110, 160, 200, 210, 160, 80, 30, 5]
    }
    ],
    stroke: {
    width: [2, 0],
    curve: 'smooth'
    },
    markers: {
    size: [4, 0],
    colors: ['#FF5722'],
    strokeColors: '#fff',
    strokeWidth: 2
    },
    dataLabels: { enabled: false },
    xaxis: {
    categories: ['Janv', 'Fév', 'Mars', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sept', 'Oct', 'Nov', 'Déc']
    },
    yaxis: [
    {
        title: { text: "Température (°C)" },
        labels: {
        formatter: val => `${val}°C`
        }
    },
    {
        opposite: true,
        title: { text: "Pluie (mm)" },
        labels: {
        formatter: val => `${val} mm`
        }
    }
    ],
    tooltip: {
    y: {
        formatter: val => `${val}`
    }
    },
    colors: ['#FF5722', '#2196F3'],
    responsive: [{
    breakpoint: 768,
    options: {
        chart: { height: 300 }
    }
    }]
};

new ApexCharts(document.querySelector("#weather-combo-chart"), weatherChartOptions).render();
