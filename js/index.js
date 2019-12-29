var monitoring = {
    init: function () {
        this.networkData();
        this.spiderDistribution();
        this.totalLoad();
        this.traffic();
        this.requestsNum();
        this.qps();
    },
    /**
     * 网络数据
     */
    networkData: function () {
        var dom = document.getElementById("network-data");
        var myChart = echarts.init(dom);
        option = null;
        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                textStyle: {
                    color: '#7B89A1'
                },
                data: [{
                    name: '折线一'
                }, {
                    name: '折线二'
                }, {
                    name: '折线三'
                }]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: ['7/11', '7/12', '7/13', '7/14', '7/15', '7/16']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                    name: '折线一',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#45A9E5',
                            lineStyle: {
                                color: '#45A9E5'
                            }
                        }
                    },
                    data: [120, 132, 101, 134, 90, 230]
                },
                {
                    name: '折线二',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#E57838',
                            lineStyle: {
                                color: '#E57838'
                            }
                        }
                    },
                    data: [220, 182, 191, 234, 290, 330]
                },
                {
                    name: '折线三',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#BBE7E0',
                            lineStyle: {
                                color: '#BBE7E0'
                            }
                        }
                    },
                    data: [20, 282, 91, 234, 190, 130]
                }
            ]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    /**
     * 蜘蛛分布
     */
    spiderDistribution: function () {
        var dom = document.getElementById("spider-distribution");
        var myChart = echarts.init(dom);
        option = null;
        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'item'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: ['百度', '谷歌', '搜狗', '360', '其他']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        color: '#3899D7'
                    }
                },
                data: [120, 200, 150, 80, 70, 110, 130]
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    /**
     * 总负载
     */
    totalLoad: function () {
        var _this = this;
        var dom = document.getElementById("total-load");

        var myChart = echarts.init(dom);
        option = null;
        var data = [];

        (function() {
            for (var i = 0; i < 24 * 3; i++) {
                data.push([
                    i,
                    Math.random() * 100
                ])
            }
        })();

        var dateList = data.map(function (item) {
            var date = new Date();
            var date1 = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
            var time = '00:00:00';
            var newTime = new Date(date1 + ' ' + time);
            newTime.setHours(newTime.getHours() + (item[0] / 3));
            return  _this.formatting(newTime.getHours()) + ':' + _this.formatting(newTime.getMinutes());
        });

        var valueList = data.map(function (item) {
            return item[1];
        });

        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: dateList
                // data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                type: 'line',
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: '#3A94BE',
                        lineStyle: {
                            color: '#3A94BE'
                        }
                    }
                },
                data: valueList
            }]
        };;
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    /**
     * 上行流量
     */
    traffic: function () {

        var _this = this;
        var dom = document.getElementById("traffic");

        var myChart = echarts.init(dom);
        option = null;
        var data = [];

        (function() {
            for (var i = 0; i < 24 * 3; i++) {
                data.push([
                    i,
                    Math.random() * 100
                ])
            }
        })();

        var dateList = data.map(function (item) {
            var date = new Date();
            var date1 = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
            var time = '00:00:00';
            var newTime = new Date(date1 + ' ' + time);
            newTime.setHours(newTime.getHours() + (item[0] / 3));
            return  _this.formatting(newTime.getHours()) + ':' + _this.formatting(newTime.getMinutes());
        });

        var valueList = data.map(function (item) {
            return item[1];
        });

        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: dateList
                // data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                type: 'line',
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: '#C46A39',
                        lineStyle: {
                            color: '#C46A39'
                        }
                    }
                },
                data: valueList
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    /**
     * 今日请求数
     */
    requestsNum: function () {
        var dom = document.getElementById("requests-num");
        var myChart = echarts.init(dom);
        option = null;
        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                itemStyle: {
                    normal: {
                        color: '#8F518D',
                        lineStyle: {
                            color: '#8F518D'
                        }
                    }
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330],
                type: 'line',
                smooth: true
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    /**
     * QPS
     */
    qps: function () {

        var _this = this;
        var dom = document.getElementById("qps");

        var myChart = echarts.init(dom);
        option = null;
        var data = [];

        (function() {
            for (var i = 0; i < 24 * 3; i++) {
                data.push([
                    i,
                    Math.random() * 100
                ])
            }
        })();

        var dateList = data.map(function (item) {
            var date = new Date();
            var date1 = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
            var time = '00:00:00';
            var newTime = new Date(date1 + ' ' + time);
            newTime.setHours(newTime.getHours() + (item[0] / 3));
            return  _this.formatting(newTime.getHours()) + ':' + _this.formatting(newTime.getMinutes());
        });

        var valueList = data.map(function (item) {
            return item[1];
        });

        option = {
            title: {
                text: '标题',
                textStyle: {
                    color: '#7B89A1',
                    fontSize: 12
                }
            },
            textStyle: {
                color: "#7B89A1",
                borderColor: '#7B89A1'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '35',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                data: dateList
                // data: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#40506F'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#172C50']
                    }
                }
            },
            series: [{
                type: 'line',
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: '#AAD1D3',
                        lineStyle: {
                            color: '#AAD1D3'
                        }
                    }
                },
                data: valueList
            }]
        };
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
    },
    formatting: function (num) {
        return num < 10 ? '0' + num : num;
    }
}

window.onload = function (params) {
    monitoring.init();
}