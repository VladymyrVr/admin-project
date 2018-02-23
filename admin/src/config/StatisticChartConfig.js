const StatisticChartConfig = {
    ActiveUsersChart: {
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
                marker: {
                    radius: false,
                    lineColor: '#7a4fff',
                    lineWidth: 10
                }
            }
        },
        series: [{
            data: [],
            color: {
                linearGradient: [0, 0, 500, 0],
                stops: [
                    [0, 'rgb(85, 132, 255)'],
                    [1, 'rgb(255, 58, 118)']
                ]
            },
            lineWidth: 4,
            showInLegend: false,
            label: false,
            name: 'Active Users',
            marker: {
                symbol: false
            }
        }],
        credits: {
            enabled: false
        }
    }
};

export default StatisticChartConfig;