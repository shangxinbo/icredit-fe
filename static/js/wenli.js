(function () {

    $.extend({
        toast: function (title, callback) {
            var html = '<div class="mask">\
                            <div class="toast">\
                                <div><img src="//storage.jd.com/blue-whale/images/done-img.png"/>'+ title + '</div>\
                            </div>\
                        </div>';
            $('.mask').remove()
            $('body').append(html)
            setTimeout(function () {
                $('.mask').remove()
            }, 2000)
        }
    })


    $('body').on('click', '.lengthwise-table .ml10', function () {
        $.toast('指标已开始重新计算')
    }).on('click', '.analysis-small-area h3 a', function () {
        var text = $(this).text().trim()
        if (text == '编辑') {
            $(this)
                .text('保存')
                .parents('.analysis-small-area')
                .find('td')
                .find('span')
                .hide().end()
                .find('input,select').show()
        } else {
            var item = $(this).parents('.analysis-small-area').find('td')
            item.each(function () {
                var val = $(this).find('input').val() || $(this).find('select').val()
                $(this).find('span').text(val)
            })
            item
                .find('span')
                .show()
                .end()
                .find('input,select').hide()
            $(this).text('编辑')
        }
    }).on('click', '.select-title-list', function () {
        var index = $(this).index()
        $('.index-analysis-table')
            .hide()
            .eq(index).show()
    }).on('click', '.visualization-curr span', function () {
        var index = $(this).index()
        $(this).siblings('span').removeClass('curr').end().addClass('curr')
        $(this).parents('.index-analysis-table').children(':gt(0)').hide()
        $(this).parents('.index-analysis-table').children(':eq(' + (index + 1) + ')').show()
    }).on('click', '.add-new-enterprise', function () {
        $('.addNewEnterprise').show(0, function () {
            $('.windowmask').remove()
            $('body').append('<div class="windowmask" style="opacity: 0.5;"></div>')
            var left = $(this).outerWidth() / 2
            var top = $(this).outerHeight() / 2
            $(this).css({
                'margin-left': '-' + left + 'px',
                'margin-top': '-' + top + 'px',
                'top': "50%",
                'position': 'fixed'
            })
        }).on('click', '.panelclose,.panel-btn a', function () {
            $('.addNewEnterprise').hide()
            $('.windowmask').remove()
        })
    }).on('click','#saleorders .up-icon',function(){
        if($(this).hasClass('down')){
            $(this).removeClass('down')
            $(this).parent().siblings('.company-record-table').css({height:'auto'})
        }else{
            $(this).addClass('down')
            $(this).parent().siblings('.company-record-table').css({height:'0px'})
        }
    }).on('click', '.reAnalysis-con a', function () {
        $.toast('已重新分析')
    }).on('click', '.edit-pj', function () {
        var tds = $(this).parents('tr').find('td')
        var name = tds.eq(1).text()
        var val1 = tds.eq(2).text()
        var val2 = tds.eq(3).text()
        var val3 = tds.eq(4).text()
        var lis = $('.editPJ-popup ul li .val')
        for (var i = 0; i < lis.length; i++) {
            if ($(lis[i]).find('.show-consignee-infor').length > 0) {
                $(lis[i]).find('.show-consignee-infor').find('p').text(tds.eq(i + 1).text().trim())
            } else {
                $(lis[i]).find('input').val(tds.eq(i + 1).text().trim())
            }
        }

        $('.editPJ-popup').show(0, function () {
            $('.windowmask').remove()
            $('body').append('<div class="windowmask" style="opacity: 0.5;"></div>')
            var left = $(this).outerWidth() / 2
            var top = $(this).outerHeight() / 2
            $(this).css({
                'margin-left': '-' + left + 'px',
                'margin-top': '-' + top + 'px',
                'top': "50%",
                'position': 'fixed'
            })
        }).on('click', '.panelclose,.panel-btn a', function () {
            $('.editPJ-popup').hide()
            $('.windowmask').remove()
        })
    })

    function getQuery(name){
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i")
        let r = window.location.search.substr(1).match(reg)
        if (r != null) return decodeURIComponent(r[2])
        return null
    }

    function scrollTable() {
        /*总长度*/
        var $items = $(".scroll-table-list")
        var totalWidth = 0
        $items.each(function () {
            totalWidth += parseFloat($(this).outerWidth()) + 1
        });

        var $con = $(".scroll-table-ul")
        var $scrollCon = $("#scrollCon")
        var $leftBtn = $(".b-left-jian")
        var $rightBtn = $(".b-rg-jian")

        $con.width(totalWidth)

        if (totalWidth < 800) {//如果宽度小，则无需滚动
            var conLeft = (800 - totalWidth) / 2
            $con.css({
                left: conLeft + "px"
            })
            $scrollCon.unbind("mousewheel DOMMouseScroll")
            $leftBtn.unbind("click").hide()
            $rightBtn.unbind("click").hide()
        } else {//如果宽度大，则需要滚动
            $('.scroll-table-right-border').addClass('right-shadow')
            $scrollCon.on("mousewheel DOMMouseScroll", function (e) {
                var left = parseInt($con.css("left"))
                var leftMin = 813 - totalWidth
                if (e.preventDefault) {
                    e.preventDefault()
                } else {
                    e.returnValue = false
                }
                var delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -1
                if (delta > 0) {
                    if (left < 0) {
                        $(".scroll-table-ul").css({ left: (left + 10) + "px" })
                        $('.scroll-table-left-border').addClass('left-shadow')
                        $('.scroll-table-right-border').addClass('right-shadow')
                    }
                    if (left == 0) {
                        $('.scroll-table-left-border').removeClass('left-shadow')
                        $('.scroll-table-right-border').addClass('right-shadow')
                    }
                    if (-500 < left < 0) {
                        $('.scroll-table-left-border').addClass('left-shadow')
                        $('.scroll-table-right-border').addClass('right-shadow')
                    }
                } else {
                    if (left > leftMin) {
                        $(".scroll-table-ul").css({ left: (left - 10) + "px" })
                    }
                    if (left == -500) {
                        $('.scroll-table-right-border').removeClass('right-shadow')
                        $('.scroll-table-left-border').addClass('left-shadow')
                    }
                    if (-500 < left < 0) {
                        $('.scroll-table-left-border').addClass('left-shadow')
                        $('.scroll-table-right-border').addClass('right-shadow')
                    }
                }
            });
            $leftBtn.on("click", function () {
                var left = parseInt($con.css("left"))
                /*剩下的width*/
                var widthLeft = totalWidth + left
                var finalVal = 0
                if (widthLeft > 740) {
                    finalVal = (left - 370) + "px"
                    $(".scroll-table-ul").stop().animate({ left: finalVal })
                } else {
                    finalVal = (370 - totalWidth) + "px"
                    $(".scroll-table-ul").stop().animate({ left: finalVal })
                }
            }).show()
            $rightBtn.on("click", function () {
                var left = parseInt($con.css("left"))
                var afterClickLeft = left + 370
                var finalVal = 0
                if (afterClickLeft > 0) {
                    finalVal = "0px"
                    $(".scroll-table-ul").stop().animate({ left: finalVal })
                } else {
                    finalVal = afterClickLeft + "px"
                    $(".scroll-table-ul").stop().animate({ left: finalVal })
                }
            }).show()
        }

    }

    // 企业分析-总览-数据可信度分析-雷达图
    var chart_opt_radar_reliability = {
        title: {
            text: '指标项分级数据'
        },
        tooltip: {
            trigger: 'item',
            extraCssText: 'width:200px; height:130px;box-shadow: 0 0 5px #4b76a4',
            backgroundColor: 'white',
            textStyle: {
                color: '#5e5e5e'
            }
        },
        radar: [
            {
                indicator: [
                    { name: '销售数据可信度', max: 100 },
                    { name: '采购数据可信度', max: 100 },
                    { name: '付款数据一致性', max: 100 },
                    { name: '收款款数据一致性', max: 100 },
                    { name: '库存数据一致性', max: 100 }
                ],
                center: ['50%', '50%'],
                splitArea: {
                    areaStyle: {
                        color: 'white'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#bcd5f7'
                    }
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    color: 'black'
                }
            }
        ],
        series: [
            {
                type: 'radar',
                symbolSize: 0,
                areaStyle: {
                    normal: {
                        color: '#288ffd'
                    }
                },
                lineStyle: {
                    normal: {
                        width: 0
                    }
                },
                data: [
                    {
                        value: [40, 72, 100, 89, 50],
                        name: '指标项分级数据'
                    }
                ]
            }
        ]
    }

    // 企业分析-总览-业务洞察-表格柱形图
    var chart_opt_bar_insight = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {  
                type: 'line' 
            }
        },
        grid: {
            top: '4%',
            left: '0',
            bottom: '0',
            containLabel: false
        },
        yAxis: {
            show: false,
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#e9e9e9",
                    type: "dashed"
                }
            },
            minInterval: 1
        },
        xAxis: {
            show: false,
            type: 'category',
            data: ['2016年08月', '2016年09月', '2016年10月', '2016年11月', '2016年12月', '2017年01月', '2017年02月', '2017年03月', '2017年04月', '2017年05月', '2017年06月', '2017年07月'],
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#e9e9e9",
                    type: "dashed"
                }
            },

            axisTick: {
                lineStyle: {
                    color: "#f1f1f1"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#e9e9e9"
                }
            },
            axisLabel: {
                interval: 0,
                rotate: 45,
                show: false,
                splitNumber: 15,
                textStyle: {
                    "fontFamily": "微软雅黑",
                    "fontSize": 12,
                    color: "#647178"
                }
            }
        },
        series: [
            {
                name: '',
                type: 'bar',
                stack: '总量',
                data: [],
                barWidth: "10",
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var c1 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(18, 157, 255, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(61, 109, 244, 1)'
                            }]);
                            var c2 = new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 1,
                                color: 'rgba(238, 8, 46, 1)'
                            }, {
                                offset: 0,
                                color: 'rgba(166, 16, 40, 1)'
                            }]);
                            var colorList = [
                                c1, c2
                            ];
                            if (params.data > 0) {
                                return colorList[0]
                            } else {
                                return colorList[1]
                            }
                        }
                    }
                }
            }
        ]
    }

    // 企业分析-总览-业务洞察-条柱混合图
    var chart_opt_mix_insight = {
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            top: '15%',
            left: '4%',
            bottom: '10%',
            right: '0',
            containLabel: true
        },
        legend: {
            show: true,
            right: 0,
            top: 0,
            data: []
        },
        xAxis: [
            {
                type: 'category',
                data: [],
                axisPointer: {
                    type: 'line'
                },
                /*设置分割线*/
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: "#e9e9e9",
                        type: "dashed"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#e9e9e9"
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "#e9e9e9"
                    }
                },
                /*X坐标轴倾斜*/
                axisLabel: {
                    interval: 0,
                    rotate: 45,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        fontFamily: "微软雅黑",
                        fontSize: 12,
                        color: "#647178"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '金额',
                /*是否显示轴线*/
                nameTextStyle: {
                    color: '#333',
                    fontWeight: 'bold',
                    fontSize: 14,
                    align: 'left'
                },
                nameGap: 15,
                axisLine: {
                    show: false
                },
                /*是否显示刻度*/
                axisTick: {
                    show: false
                },
                /*设置分割线*/
                splitLine: {
                    lineStyle: {
                        color: "#e9e9e9",
                        type: "dashed"
                    }
                },
                minInterval: 1
            }
        ],
        series: [
            {
                name: '',
                type: 'bar',
                data: [],
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                name: '',
                type: 'bar',
                data: [],
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                name: '',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        color: '#16c9be'
                    }
                },
                symbolSize: 7,
                smooth: false,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        color: "#0569ff"
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                },
                data: []
            },
            {
                name: '',
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 3,
                        color: '#ffc705'
                    }
                },
                symbolSize: 7,
                smooth: false,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        color: "#ffc705"
                    }
                },
                label: {
                    normal: {
                        show: false

                    }
                },
                data: []
            }
        ]
    }

    // 企业分析-总览-业务洞察-散点图
    var chart_opt_scatter_insight = {
        xAxis: {
            name: '占比',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            name: '环比',
            splitLine: {
                show: false
            },
            scale: true
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return value[2] + '<br />'
                    + '环比：' + value[1] + '<br />'
                    + '占比：' + value[0] + '<br />'
                    + '销售额：' + value[3] + '<br />'
            }
        },
        series: []
    }

    // 企业分析-总览-业务洞察-散点图
    var chart_opt_bar_horizontal = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {   
                type: 'line'  
            }
        },
        legend: {
            show: false
        },
        grid: {
            left: '3%',
            right: '4%',
            top: '2%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#e9e9e9",
                    type: "dashed"
                }
            },
            axisTick: {
                lineStyle: {
                    color: "#f1f1f1"
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#e9e9e9"
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#647178'
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#e9e9e9",
                    type: "dashed"
                }
            },
            minInterval: 1,
            data: []
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
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                data: []
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
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                data: []
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
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                data: []
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
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                data: [0, 1, 2, 2, 1]
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
                itemStyle: {
                    normal: {
                        color: function (params) {
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
                data: [0, 2, 2, 2, 2]
            }
        ]
    }


    $(function () {
        
        var href = window.location.href
        if(href.indexOf('/welink/analysis')>=0){
            $('.pro-server-left .buy-list:eq(0)').addClass('choose-list')
        }else if(href.indexOf('/welink/reliability')>=0){
            $('.pro-server-left .buy-list:eq(1)').addClass('choose-list')
        }else if(href.indexOf('/welink/indicator')>=0){
            $('.pro-server-left .buy-list:eq(2)').addClass('choose-list')
        }else if(href.indexOf('/welink/risk')>=0){
            $('.pro-server-left .buy-list:eq(3)').addClass('choose-list')
        }else{
            $('.pro-server-left .buy-list:eq(0)').addClass('choose-list')
        }


        //数据可信度分析
        if ($('#reliability_chart').length > 0) {
            var myChart = echarts.init(document.getElementById('reliability_chart'))
            echarts.init(document.getElementById('reliability_chart')).setOption(chart_opt_radar_reliability)
        }

        // 业务洞察
        if ($('#insight_page').length > 0) {

            var arr = [
                ['PC000008', '销售总额'],
                ['HZ000006', '毛利润'],
                ['PC000012', '采购总额'],
                ['YIV000001', '库存金额'],
                ['YFIN00051', '现金'],
                ['YFIN00016', '应收款'],
                ['YFIN00048', '应付款'],
                ['YMPAYED00001', '收款'],
                ['YMRECEIVED00001', '付款'],
                ['YFINI00020', '营业收入'],
                ['YFINI00029', '营业利润'],
                ['YFINI00034', '净利润'],
                ['YFINI00035', '流动资产'],
                ['YFINI00047', '固定资产'],
                ['YFINI00065', '资产合计'],
                ['YFINI00066', '流动负债'],
                ['YFINI00079', '非流动负债'],
                ['YFINI00087', '负债'],
                ['YFINI00088', '所有者权益'],
                ['YFINI00094', '负债和所有者权益'],
                ['YFINI00095', '经营活动现金流入'],
                ['YFINI00096', '经营活动现金流出'],
                ['YFINI00097', '筹资活动现金流入'],
                ['YFINI00098', '筹资活动现金流出'],
                ['YFINI00099', '投资活动现金流入'],
                ['YFINI00100', '投资活动现金流出']
            ]

            $.ajax({
                url: '/analysis/getTrend',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    var picker = data.obj.datas
                    var trs = $('.lengthwise-table .qs-charts')
                    var chart = []
                    for (var i = 0; i < trs.length; i++) {
                        var name = arr[i][1]
                        var trend = picker[arr[i][0]].trend.split(',')
                        var barData = trend.slice(-12)
                        var series = $.extend({}, chart_opt_bar_insight.series[0], {
                            name: name,
                            data: barData
                        })
                        var opt = $.extend({}, chart_opt_bar_insight, { series: series })
                        chart[i] = echarts.init(trs[i])
                        chart[i].setOption(opt)
                    }
                }
            })

            $.ajax({
                url: '/analysis/getsaleTrend',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    new Vue({
                        el: '#sales',
                        data: {
                            list: data.obj
                        },
                        filters: {
                            mathRound: function (val) {
                                if (!isNaN(val)) {
                                    return val.toFixed(2)
                                } else {
                                    return '-'
                                }
                            }
                        }
                    })

                    var labels = [], data1 = [], data2 = [], data3 = [], data4 = []

                    data.obj.forEach(function (item, index) {
                        labels.push(item.dataTime)
                        data1.push(item.SaleCostMonthAmount || 0)
                        data2.push(item.SaleInvoiceMonthAmount || 0)
                        data3.push(item.SaleOutMonthAmount || 0)
                        data4.push(item.ReceivableMonthAmount || 0)
                    })

                    var new_option = $.extend({}, chart_opt_mix_insight)

                    new_option.legend.data = [
                        { name: '销售订单' },
                        { name: '销售成本' },
                        { name: '应收账款' },
                        { name: '销售收款' }
                    ]
                    new_option.xAxis[0].data = labels
                    new_option.series[0].data = data1
                    new_option.series[0].name = '销售订单'
                    new_option.series[1].data = data2
                    new_option.series[1].name = '销售成本'
                    new_option.series[2].data = data3
                    new_option.series[2].name = '应收账款'
                    new_option.series[3].data = data4
                    new_option.series[3].name = '销售收款'

                    var myChart = echarts.init(document.getElementById('saleDataChart'))
                    myChart.setOption(new_option)
                }
            })

            // 采购数据
            $.ajax({
                url: '/analysis/getPurchaseTrend',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    new Vue({
                        el: '#purchase',
                        data: {
                            list: data.obj
                        },
                        filters: {
                            mathRound: function (val) {
                                if (!isNaN(val)) {
                                    return val.toFixed(2)
                                } else {
                                    return '-'
                                }
                            }
                        }
                    })

                    var labels = [], data1 = [], data2 = [], data3 = [], data4 = []

                    data.obj.forEach(function (item, index) {
                        labels.push(item.dataTime)
                        data1.push(item.purchaseOrderMonthAmount || 0)
                        data2.push(item.PurchaseInMonthAmount || 0)
                        data3.push(item.PayableMonthAmount || 0)
                        data4.push(0)
                    })

                    var new_option = $.extend({}, chart_opt_mix_insight)

                    new_option.legend.data = [
                        { name: '采购订单' },
                        { name: '采购入库' },
                        { name: '应付账款' },
                        { name: '采购付款' }
                    ]
                    new_option.xAxis[0].data = labels
                    new_option.series[0].data = data1
                    new_option.series[0].name = '采购订单'
                    new_option.series[1].data = data2
                    new_option.series[1].name = '采购入库'
                    new_option.series[2].data = data3
                    new_option.series[2].name = '应付账款'
                    new_option.series[3].data = data4
                    new_option.series[3].name = '采购付款'

                    var myChart = echarts.init(document.getElementById('saleDataChart2'))
                    myChart.setOption(new_option)

                }
            })

            // 客户分析
            $.ajax({
                url: '/analysis/getCustomer',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    new Vue({
                        el: '#customer',
                        data: {
                            list: data.obj
                        },
                        filters: {
                            mathRound: function (val) {
                                if (!isNaN(val)) {
                                    return val.toFixed(2)
                                } else {
                                    return '-'
                                }
                            }
                        }
                    })

                    var series = []

                    data.obj.forEach(function (item, index) {
                        series.push({
                            data: [[item.SaleZb, item.SaleHb, item.name, item.SaleAmount]],
                            type: 'scatter',
                            symbolSize: function (data) {
                                return Math.sqrt(data[1]) * 5
                            },
                            itemStyle: {
                                normal: {
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                                    shadowOffsetY: 5,
                                }
                            }
                        })
                    })

                    chart_opt_scatter_insight.series = series
                    var myChart = echarts.init(document.getElementById('scatter1'))
                    myChart.setOption(chart_opt_scatter_insight)
                }
            })

            // 供应商分析
            $.ajax({
                url: '/analysis/getSupplier',
                dataType: 'json',
                type: 'get',
                success: function (data) {
                    new Vue({
                        el: '#supplier',
                        data: {
                            list: data.obj
                        },
                        filters: {
                            mathRound: function (val) {
                                if (!isNaN(val)) {
                                    return val.toFixed(2)
                                } else {
                                    return '-'
                                }
                            }
                        }
                    })

                    var series = []

                    data.obj.forEach(function (item, index) {
                        series.push({
                            data: [[item.purchaseZb, item.purchaseHb, item.name, item.purchaseAmount]],
                            type: 'scatter',
                            symbolSize: function (data) {
                                return Math.sqrt(data[1]) * 5
                            },
                            itemStyle: {
                                normal: {
                                    shadowBlur: 10,
                                    shadowColor: 'rgba(120, 36, 50, 0.5)',
                                    shadowOffsetY: 5,
                                }
                            }
                        })
                    })

                    chart_opt_scatter_insight.series = series
                    var myChart = echarts.init(document.getElementById('scatter2'))
                    myChart.setOption(chart_opt_scatter_insight)
                }
            })

        }

        var vueObj1 = null
        function getSaleorders(page) {
            $.ajax({
                url: '/analysis/erpSaleOrder',
                dataType: 'json',
                type: 'get',
                data: {
                    page: page || 1
                },
                success: function (data) {
                    var originList = data.rows
                    var list = {}
                    originList.forEach(function (item, index) {
                        if (list[item.customerCode]) {
                            list[item.customerCode].arr.push(item)
                        } else {
                            list[item.customerCode] = {
                                name: item.customerName,
                                arr: [item]
                            }
                        }
                    })

                    if (vueObj1) {
                        vueObj1.$data.list = list
                        vueObj1.$data.page = page
                    } else {
                        vueObj1 = new Vue({
                            el: '#saleorders',
                            data: {
                                list: list,
                                page: page || 1
                            },
                            filters: {
                                mathRound: function (val) {
                                    if (!isNaN(val)) {
                                        return val.toFixed(2)
                                    } else {
                                        return '-'
                                    }
                                },
                                dateFormat: function (val) {
                                    var time = new Date(val)
                                    return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
                                }
                            }
                        })
                    }

                }
            })
        }

        if ($('#data_page').length > 0) {
            var currentPage = 1
            getSaleorders()
            $('body').on('click', '#pageWrap a', function () {
                if ($(this).hasClass('up-page')) {
                    if (currentPage > 1) {
                        currentPage--
                        getSaleorders(currentPage)
                    }
                } else if ($(this).hasClass('down-page')) {
                    if (currentPage < 3) {
                        currentPage++
                        getSaleorders(currentPage)
                    }
                } else {
                    var num = $(this).text()
                    currentPage = num
                    getSaleorders(currentPage)
                }
            })
        }

        if ($('#reliability_page').length > 0) {
            
            var option1 = $.extend({}, chart_opt_bar_horizontal)
            option1.yAxis.data = ['销售数据相关性', '采购相关性', '财务业务一致性 · 库存', '财务业务一致性 · 收款', '财务业务一致性 · 付款']
            option1.series[0].data = [1, 1, 3, 2, 4]
            option1.series[1].data = [1, 0, 0, 0, 0]
            option1.series[2].data = [2, 2, 0, 1, 0]
            option1.series[3].data = [0, 1, 2, 2, 1]
            option1.series[4].data = [0, 2, 2, 2, 2]
            if ($('#zbAnalysis').length > 0) {
                var myChart1 = echarts.init(document.getElementById('zbAnalysis'))
                myChart1.setOption(option1)
            }

            var option2 = $.extend({}, chart_opt_bar_horizontal)
            option2.yAxis.data = ['销售采购比 (%)', '销售金额环比 (%)', '销售金额同比 (%)', '应收账款金额环比 (%)', '应收账款金额同比 (%)',
                '销售收款金额环比 (%)', '销售收款金额同比 (%)', '采购金额环比 (%)', '采购金额同比 (%)', '销售金额环比 (%)', '应付账款金额环比 (%)', '应付账款金额同比 (%)', '采购付款金额环比 (%)', '采购付款金额同比 (%)', '库存余额环比 (%)', '库存余额同比 (%)', '销售退款率 (%)', '采购退款率 (%)', '毛利率 (%)', '应收账款周转率 (次)', '应付账款周转率 (次)', '库存周转率 (次)']
            option2.series[0].data = [2, 2, 2, 1, 1, 1, 2, 2, 3, 2, 2, 2, 1, 1, 1, 1, 3, 1, 3, 1, 2, 3]
            option2.series[1].data = [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0]
            option2.series[2].data = [0, 0, 3, 2, 2, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 2, 0, 2, 0, 1, 0, 0]
            option2.series[3].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 2]
            option2.series[4].data = [0, 0, 0, 0, 0, 1, 4, 2, 2, 0, 0, 0, 1, 1, 0, 2, 2, 0, 0, 0, 0, 2]
            if ($('#jyzbAnalysis').length > 0) {
                var myChart2 = echarts.init(document.getElementById('jyzbAnalysis'))
                myChart2.setOption(option2)
            }

            var option3 = $.extend({}, chart_opt_bar_horizontal)
            option3.yAxis.data = ['销售采购比 (%)', '销售金额环比 (%)', '销售金额同比 (%)', '应收账款金额环比 (%)', '应收账款金额同比 (%)',
                '销售收款金额环比 (%)', '销售收款金额同比 (%)', '采购金额环比 (%)', '采购金额同比 (%)', '销售金额环比 (%)', '应付账款金额环比 (%)', '应付账款金额同比 (%)', '采购付款金额环比 (%)', '采购付款金额同比 (%)', '库存余额环比 (%)', '库存余额同比 (%)', '销售退款率 (%)', '采购退款率 (%)']
            option3.series[0].data = [2, 2, 2, 2, 2, 5, 5, 5, 2, 5, 3, 2, 2, 2, 2, 5, 5, 2]
            option3.series[1].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            option3.series[2].data = [3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            option3.series[3].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]
            option3.series[4].data = [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 2, 1, 1, 0, 0, 0]
            if ($('#cwzbAnalysis').length > 0) {
                var myChart3 = echarts.init(document.getElementById('cwzbAnalysis'))
                myChart3.setOption(option3)
            }
        }

        // 业务洞察报表
        if($('#insight_table_page').length>0){
            scrollTable()
            var type = getQuery('type')||0
            if(type<3){
                $('.select-ul a:eq('+ type +')').click()
                $(".select-line").stop().animate({left: (110 * type)}, 300);
            }
        }
        
    })

})()