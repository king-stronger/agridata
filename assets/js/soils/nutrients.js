const nutrientsChart = new ApexCharts(document.querySelector("#nutrients-chart"), {
    chart: {
        type: 'bar',
        height: 260,
        toolbar: { tools: { download: true } }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            distributed: true,
            barHeight: '60%'
        }
    },
    series: [{
        data: [30, 60, 90] // scores fictifs pour : faible, moyen, bon
    }],
    xaxis: {
        categories: ['Azote', 'Phosphore', 'Potassium'],
        title: { text: 'Niveau (en % relatif)' },
        max: 100
    },
    colors: ['#F87171', '#FBBF24', '#34D399'], // rouge, jaune, vert
    tooltip: {
        x: { show: true },
        y: {
            formatter: val => `${val}%`
        }
    },
    dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        style: { fontWeight: 'bold' }
    },
    legend: { show: false },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: { height: 220 }
        }
    }]
});

nutrientsChart.render();
