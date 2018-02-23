let HomeChartConfig = {
    SalesChart: {
        chart: {
            type: 'pie',
            height: '310',

        },
        plotOptions: {
            pie: {
                shadow: false,
                colors: ['#25396e', '#3755a4', '#4164c2', '#4b74e0', '#5584ff'],
                borderWidth: 1,
                borderColor: null
            },
            series: {
                allowPointSelect: true,
            }
        },
        title: {
            text: '',
            verticalAlign: 'middle',
            floating: true,
            x: -65,
            y: 0,
            style: {
                color: '#8492af',
                font: '700 36px "Roboto", sans-serif'
            }
        },
        subtitle: {
            text: 'sales',
            verticalAlign: 'middle',
            floating: true,
            x: -65,
            y: 20,
            style: {
                color: '#8492af',
                font: '300 20px "Roboto", sans-serif'
            }
        },
        legend: {
            align: 'right',
            layout: 'vertical',
            verticalAlign: 'middle',
            itemMarginTop: 5,
            itemMarginBottom: 5
        },
        series: [{
            data: [],
            innerSize: '65%',
            showInLegend: true,
            dataLabels: {
                enabled: false
            },
            name: 'Sales value'
        }],
        credits: {
            enabled: false
        }
    },

    ReportChart: {
        chart: {
            type: 'spline',
            height: 450

        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['', '', '', '', '', '', '', '', '', '', '', '', ''],
            tickInterval: 2,
            tickWidth: 0,
            gridLineWidth: 1,
            labels: {
                align: 'center',
                x: -20,
                y: 20
            }
        },
        yAxis: {
            title: {
                text: ''
            },
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                color: '#7a4fff',
                marker: {
                    radius: false,
                    lineColor: '#7a4fff',
                    lineWidth: 7
                }
            }
        },
        series: [{
            data: [],
            lineWidth: 4,
            showInLegend: false,
            label: false,
            name: 'Report graph value',
            marker: {
                symbol: false
            }
        }],
        credits: {
            enabled: false
        }
    }
};

export default HomeChartConfig;