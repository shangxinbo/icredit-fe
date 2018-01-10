/**
 * Des
 * Created by wangxiaoxin on 2017/9/26.
 * E-mail wangxiaoxin@jd.com
 * Update 2017/9/26
 */

/*堆叠柱形图*/
function ajCharts2(){
    var myChart = echarts.init(document.getElementById('zbAnalysis'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:false
        },
        grid: {
            left: '3%',
            right: '4%',
            top:'2%',
            //bottom: '10%',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            /*设置分割线*/
            splitLine:{
                show:false,
                lineStyle:{
                    color:"#e9e9e9",
                    type:"dashed"
                }
            },

            axisTick:{
                lineStyle:{
                    color:"#f1f1f1"
                }
            },
            axisLine: {
                show: true,
                lineStyle:{
                    color:"#e9e9e9"
                }
            },
            axisLabel:{
                textStyle:{
                    color:'#647178'
                }

            }
        },
        yAxis: {
            type: 'category',
            /*是否显示轴线*/
            axisLine:{
                show:false
            },
            /*是否显示刻度*/
            axisTick:{
                show:false
            },
            /*设置分割线*/
            splitLine:{
                lineStyle:{
                    color:"#e9e9e9",
                    type:"dashed"
                }
            },
            minInterval: 1,
            data: ['销售数据相关性','采购相关性','财务业务一致性 · 库存','财务业务一致性 · 收款','财务业务一致性 · 付款','历史一致性 · 毛利率']
        },
        series: [
            {
                name: '优秀',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(24, 213, 198, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(58, 227, 193, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }
                    }
                },
                data: [90, 90, 90, 90, 90, 90]
            },
            {
                name: '良好',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(0, 150, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(0, 191, 255, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }
                    }
                },
                data: [110, 110, 110, 110, 110, 110]
            },
            {
                name: '一般',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(155, 96, 253, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(194, 108, 255, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }
                    }
                },
                data: [300, 300, 300, 300, 300, 300]
            },
            {
                name: '较差',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(255, 146, 33, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(255, 161, 41, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }
                    }
                },
                data: [200, 200, 200, 200, 200, 200]
            },
            {
                name: '差',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(254, 221, 56, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(255, 233, 48, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }
                    }
                },
                data: [100, 100, 100, 100, 100, 100]
            }
        ]
    };

    myChart.setOption(option);
}
ajCharts2();




