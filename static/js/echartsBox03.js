/**
 * Des
 * Created by wangxiaoxin on 2017/10/11.
 * E-mail wangxiaoxin@jd.com
 * Update 2017/10/11
 */
function qsCharts1(){
    var myChart = echarts.init(document.getElementById('qsChart1'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts1();
function qsCharts2(){
    var myChart = echarts.init(document.getElementById('qsChart2'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts2();
function qsCharts3(){
    var myChart = echarts.init(document.getElementById('qsChart3'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts3();
function qsCharts4(){
    var myChart = echarts.init(document.getElementById('qsChart4'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts4();
function qsCharts5(){
    var myChart = echarts.init(document.getElementById('qsChart5'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts5();
function qsCharts6(){
    var myChart = echarts.init(document.getElementById('qsChart6'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts6();
function qsCharts7(){
    var myChart = echarts.init(document.getElementById('qsChart7'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts7();
function qsCharts8(){
    var myChart = echarts.init(document.getElementById('qsChart8'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts8();
function qsCharts9(){
    var myChart = echarts.init(document.getElementById('qsChart9'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts9();
function qsCharts10(){
    var myChart = echarts.init(document.getElementById('qsChart10'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip : {
            show:true,
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //legend: {
        //    data: ['检修一班', '检修二班','检修三班','检修四班','检修五班']
        //},
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis:  {
            show:false,
            type: 'value',

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
            minInterval: 1

        },
        xAxis: {
            show:false,
            type: 'category',
            data: ['2015年12月','2015年11月','2015年10月','2015年9月','2015年8月','2015年7月','2015年6月','2015年5月','2015年4月','2015年3月','2015年2月','2015年1月'],
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
            /*X坐标轴倾斜*/
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color:"#647178"
                }
            }

        },
        series: [
            {
                name: '销售总额',
                type: 'bar',
                stack: '总量',
                data: [15, 20, 15, 13,15, 20, 15, 13, 13, 15, 13,15],
                barWidth:"10",
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            }
        ]
    };

    myChart.setOption(option);
}
qsCharts10();
/*柱折混合图*/
function zzCharts(){
    var myChart = echarts.init(document.getElementById('saleDataChart'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '10%',
            left: '4%',
            bottom: '4%',
            right:'0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2016-1','2016-2','2016-3','2016-4','2016-5','2016-6','2016-7','2016-8','2016-9','2016-10','2016-11','2016-12'],
                axisPointer: {
                    type: 'line'
                },
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
                        color:"#e9e9e9"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:"#e9e9e9"
                    }
                },
                /*X坐标轴倾斜*/
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    show: true,

                    splitNumber: 15,
                    textStyle: {
                        "fontFamily": "微软雅黑",
                        "fontSize": 12,
                        color:"#647178"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '金额',
                /*强制分割*/
                //min: 0,
                //max: 250,
                //interval: 50,
                //axisLabel: {
                //    formatter: '{value} ml'
                //}
                /*是否显示轴线*/
                nameTextStyle:{
                    color:'#333',
                    fontWeight:'bold',
                    fontSize:14,
                    align:'left'
                },
                nameGap:15,
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
                minInterval: 1
            }
        ],
        series: [
            {
                name:'销售订单',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(0, 176, 176, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(41, 223, 203, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            },
            {
                name:'销售成本',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(73, 77, 229, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(19, 131, 255, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            },
            {
                name:'应收账款',
                type:'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        //shadowBlur: 10,
                        //shadowOffsetY: 10,
                        color: '#16c9be'
                    }
                },
                symbolSize: 7,
                smooth:false,
                symbol:'circle',
                "itemStyle": {
                    "normal": {
                        "color": "#0569ff"
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[90.0, 82.2, 72.3, 124.5, 136.3, 180.2, 200.3, 223.4, 123.0, 106.5, 102.0, 56.2]
            },
            {
                name:'销售收款',
                type:'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        //shadowBlur: 10,
                        //shadowOffsetY: 10,
                        color: '#ffc705'
                    }
                },
                symbolSize: 7,
                smooth:false,
                symbol:'circle',
                "itemStyle": {
                    "normal": {
                        "color": "#ffc705"
                    }
                },

                label: {
                    normal: {
                        show: false

                    }
                },
                data:[2.0, 52.2, 33.3, 64.5, 96.3, 120.2, 120.3, 223.4, 263.0, 166.5, 112.0, 6.2]
            }

        ]
    };

    myChart.setOption(option);
}
zzCharts();


/*柱折混合图2*/
function zzCharts2(){
    var myChart = echarts.init(document.getElementById('saleDataChart2'), null, {
        renderer: 'canvas'
    });
    option = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '10%',
            left: '4%',
            bottom: '4%',
            right:'0',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['2016-1','2016-2','2016-3','2016-4','2016-5','2016-6','2016-7','2016-8','2016-9','2016-10','2016-11','2016-12'],
                axisPointer: {
                    type: 'line'
                },
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
                        color:"#e9e9e9"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:"#e9e9e9"
                    }
                },
                /*X坐标轴倾斜*/
                axisLabel: {
                    interval: 0,
                    rotate: 0,
                    show: true,

                    splitNumber: 15,
                    textStyle: {
                        "fontFamily": "微软雅黑",
                        "fontSize": 12,
                        color:"#647178"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '金额',
                /*强制分割*/
                //min: 0,
                //max: 250,
                //interval: 50,
                //axisLabel: {
                //    formatter: '{value} ml'
                //}
                /*是否显示轴线*/
                nameTextStyle:{
                    color:'#333',
                    fontWeight:'bold',
                    fontSize:14,
                    align:'left'
                },
                nameGap:15,
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
                minInterval: 1
            }
        ],
        series: [
            {
                name:'采购订单',
                type:'bar',
                data:[62.0, 54.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(0, 176, 176, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(41, 223, 203, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            },
            {
                name:'采购入口',
                type:'bar',
                data:[42.6, 51.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                itemStyle:{
                    normal:{
                        color: function(params) {
                            // build a color map as your need.
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(73, 77, 229, 1)'
                            }, {
                                offset: 1,
                                color: 'rgba(19, 131, 255, 1)'
                            }]);
                            var colorList = [
                                c1
                            ];
                            return colorList[0]
                        }

                    }
                }
            },
            {
                name:'应收账款',
                type:'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        //shadowBlur: 10,
                        //shadowOffsetY: 10,
                        color: '#16c9be'
                    }
                },
                symbolSize: 7,
                smooth:false,
                symbol:'circle',
                "itemStyle": {
                    "normal": {
                        "color": "#0569ff"
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data:[90.0, 82.2, 72.3, 124.5, 136.3, 180.2, 200.3, 223.4, 123.0, 106.5, 102.0, 56.2]
            },
            {
                name:'销售收款',
                type:'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        //shadowColor: 'rgba(0,0,0,0.4)',
                        //shadowBlur: 10,
                        //shadowOffsetY: 10,
                        color: '#ffc705'
                    }
                },
                symbolSize: 7,
                smooth:false,
                symbol:'circle',
                "itemStyle": {
                    "normal": {
                        "color": "#ffc705"
                    }
                },

                label: {
                    normal: {
                        show: false

                    }
                },
                data:[2.0, 52.2, 33.3, 64.5, 96.3, 120.2, 120.3, 223.4, 263.0, 166.5, 112.0, 6.2]
            }

        ]
    };

    myChart.setOption(option);
}
zzCharts2();