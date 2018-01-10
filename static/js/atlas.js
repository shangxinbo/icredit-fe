(function () {

    function launchFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen()
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen()
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen()
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen()
        }
    }


    function mAjax(opt) {
        var option = $.extend({
            type: 'post',
            dataType: 'json',
            url: '',
            data: {},
            success: new Function()
        }, opt)
        $.ajax({
            type: option.type,
            dataType: option.dataType,
            url: option.url,
            data: option.data,
            success: function (data) {
                if (data && data.error == 'NotLogin') {
                    if (!window.needLoginStatus) {
                        $.alert('用户认证失效，请重新登录', function () {
                            window.location.href = contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.href)
                        })
                        window.needLoginStatus = true
                        setTimeout(function () {   // 防止多次弹窗，2s后取消限制
                            window.needLoginStatus = false
                        }, 2000)
                    }
                } else {
                    if (data.code == 204 && data.data.title && data.data.title.indexOf('当前没有可用余量') >= 0) {
                        tipsController('当前没有可用余量，请联系客服购买', data.data.msg, 'javascript:void(0);', '关闭', '');
                    } else {
                        option.success(data)
                    }
                }
            },
            error: function (err) {
                $.alert(err)
            }
        })
    }

    function progressCircle() {
        var $canvas = $('#fundGauge')
        var canvas = $canvas.get(0)
        var val = parseFloat($canvas.data('value'))
        var newVal = val
        if (isNaN(val)) val = 0
        if (!canvas.getContext) {
            $('.score-text').text($canvas.data('value'))
            return
        }
        var ctx = canvas.getContext("2d")
        var gr = ctx.createRadialGradient(260, 260, 210, 100, 100, 100)
        gr.addColorStop(0, 'rgb(192,25,255)')
        gr.addColorStop(1, 'rgb(2,208,255)')
        var img = document.getElementById("lamp")
        var pat = ctx.createPattern(img, "no-repeat")
        ctx.strokeStyle = pat
        ctx.lineWidth = 11
        ctx.lineCap = "round"
        var startDeg = 147
        var sDeg = (Math.PI / 180) * startDeg
        var scale = ((390.1 - startDeg) / 100 * val + startDeg)
        var stepCanvas = (scale - startDeg) / 3
        var stepNumber = (!(val / stepCanvas)) ? 0 : val / stepCanvas
        var $scoreText = $('.meter-text-wrap .meter-text b')
        var newStepNumber = 0
        var timer = setInterval(function () {
            if (isNaN(newVal)) {
                clearInterval(timer)
                $scoreText.text('--')
                return
            }
            if (sDeg >= (Math.PI / 180) * scale) {
                clearInterval(timer)
            } else {
                drawScreen(sDeg, sDeg + (Math.PI / 180) * 3)
                sDeg = sDeg + (Math.PI / 180) * 3
            }

            newStepNumber += stepNumber
            if (newStepNumber > val) {
                newStepNumber = val
            }
            $scoreText.text(newStepNumber < 10 ? newStepNumber.toFixed(0) : newStepNumber.toFixed(0))
        }, 15)

        function drawScreen(sDeg, eDeg) {
            ctx.clearRect(0, 0, 261, 251)
            ctx.arc(129.5, 135, 97.5, sDeg, eDeg, false)
            ctx.stroke()
        }
    }



    function cloudWord(entName) {
        if (typeof (entName) == "undefined" || entName == '') {
            return;
        }
        var myChart = echarts.init(document.getElementById('cloudWordChart'), null, {
            renderer: 'canvas'
        });

        mAjax({
            url: "/user/trade/visualization/basicQuery",
            dataType: "json",
            data: { "queryName": entName },
            success: function (datas) {
                if (datas.code == 200 && datas.data != null) {
                    var entData = datas.data;
                    var jsonList = [];
                    jsonList.push({
                        name: entData.entName,
                        value: 50
                    }, {
                            name: entData.regCapital,
                            value: 90
                        }, {
                            name: entData.regStatus,
                            value: 70
                        }, {
                            name: entData.companyOrgType,
                            value: 60
                        }, {
                            name: entData.establishTime,
                            value: 60
                        }, {
                            name: entData.legalPersonName,
                            value: 90
                        }, {
                            name: entData.category,
                            value: 60
                        }, {
                            name: entData.regLocation,
                            value: 30
                        }, {
                            name: entData.base,
                            value: 50
                        }, {
                            name: entData.creditCode,
                            value: 60
                        });

                    var option = {
                        tooltip: {
                            show: false
                        },
                        toolbox: {
                            feature: {
                                mark: {
                                    show: false
                                },
                                dataView: {
                                    show: false,
                                    readOnly: false
                                },
                                restore: {
                                    show: false
                                },
                                saveAsImage: {
                                    show: false
                                }
                            }
                        },

                        series: [{
                            name: '词云图',
                            type: 'wordCloud',
                            size: ['9%', '99%'],
                            rotationRange: [-45, 90],
                            textPadding: 0,
                            autoSize: {
                                enable: true,
                                minSize: 6
                            },
                            textStyle: {
                                normal: {
                                    color: function () {
                                        return 'rgb(' + [
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160),
                                            Math.round(Math.random() * 160)
                                        ].join(',') + ')';
                                    }
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowColor: '#fff'
                                }
                            },
                            data: jsonList
                        }]
                    };
                    myChart.setOption(option);
                }
            }
        });
    }


    function charts(entName) {
        if (typeof (entName) == "undefined" || entName == '') {
            return;
        }
        var myChart = echarts.init(document.getElementById('sdChart'), null, {
            renderer: 'canvas'
        });

        mAjax({
            url: '/user/trade/visualization/alterQuery', 
            dataType: "json", 
            data: { "queryName": entName }, 
            success: function (datas) {
                if (datas.code == 200 && datas.data != null) {
                    var alterData = datas.data;

                    var dataX = [];
                    var dataY = ['其他', '法人、高管', '股东', '住所', '注册资本', '经营范围', '企业名称'];

                    var data = [];
                    $(alterData).each(function (index, item) {
                        dataX.push(item.quarter);
                        data.push([index, 0, item.otherAltNumbers]);
                        data.push([index, 1, item.mainStaffAltNumbers]);
                        data.push([index, 2, item.shareHolderAltNumbers]);
                        data.push([index, 3, item.domAltNumbers]);
                        data.push([index, 4, item.regCapAltNumbers]);
                        data.push([index, 5, item.opScopeAltNumbers]);
                        data.push([index, 6, item.entNameAltNumbers]);
                    });

                    option = {
                        /*标题*/
                        title: {
                            show: false
                        },
                        /*图例*/
                        legend: {
                            show: false
                        },
                        /*鼠标滑上指针提示*/
                        tooltip: {
                            position: 'top',
                            formatter: function (params) {
                                return '变更事项：' + dataY[params.value[1]] + '</br>' + '变更次数：' + params.value[2];
                            }
                        },
                        /*网格线*/
                        grid: {
                            show: false
                        },
                        /*X轴配置*/
                        xAxis: {
                            /*数据类型*/
                            type: 'category',
                            data: dataX,
                            boundaryGap: false,
                            /*坐标轴在 grid 区域中的分隔线设置*/
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#e5e5e5',
                                    type: 'dashed'
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            }
                        },
                        yAxis: {
                            type: 'category',
                            data: dataY,

                            /*是否显示轴线*/
                            axisLine: {
                                show: false
                            },
                            /*是否显示刻度*/
                            axisTick: {
                                show: false
                            },
                            /*坐标轴在 grid 区域中的分隔线。*/
                            splitLine: {
                                show: false
                            }
                        },
                        series: [{
                            name: 'Punch Card',
                            type: 'scatter',
                            symbolSize: function (val) {
                                return val[2] * 15;
                            },
                            data: data,
                            animationDelay: function (idx) {
                                return idx * 5;
                            },
                            itemStyle: {
                                normal: {
                                    color: "#1284ff"
                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            }
        });
    }


    function relationshipChart(entName) {
        if (typeof (entName) == "undefined" || entName == '') {
            return;
        }
        var myChart = echarts.init(document.getElementById('relationshipChart'), null, {
            renderer: 'canvas'
        });

        mAjax({
            url: '/user/trade/visualization/investorQuery', 
            dataType: "json", 
            data: { "queryName": entName }, 
            success: function (datas) {
                if (datas.code == 200 && datas.data != null) {
                    var centerText = "股东股权信息";
                    var investorData = datas.data;
                    var data = [];
                    var link = [];
                    var allRatio = 0;
                    $(investorData).each(function (index, item) {
                        data.push({
                            "name": item.investorName,
                            "symbolSize": item.capitalRatio * 100 + 20,
                            "draggable": "true",
                            "value": item.capitalRatio

                        });
                        link.push({
                            "source": centerText,
                            "target": item.investorName
                        });
                        allRatio += item.capitalRatio;
                    });

                    data.push({
                        "name": centerText,
                        "symbolSize": 150,
                        "draggable": "true",
                    });

                    option = {
                        itemStyle: {
                            normal: {
                                color: "#0584ff",
                                borderWidth: 4,
                                borderType: "solid",
                                borderColor: "#c7e0ed",
                                textStyle: {
                                    color: "#333"
                                }
                            }
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: "#333"
                                }
                            },
                            emphasis: {
                                textStyle: {
                                    color: "#333"
                                }
                            }
                        },
                        tooltip: {},
                        toolbox: {
                            show: false
                        },
                        animationDuration: 300,
                        animationEasingUpdate: 'quinticInOut',
                        series: [{
                            name: '股东股权信息',
                            type: 'graph',
                            layout: 'force',
                            force: {
                                repulsion: 500,
                                edgeLength: [50, 250]
                            },
                            data: data,
                            links: link,
                            focusNodeAdjacency: true,
                            roam: true,
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                }
                            },
                            lineStyle: {
                                normal: {
                                    color: 'source',
                                    curveness: 0,
                                    type: "solid"
                                }
                            }
                        }]
                    };
                    myChart.setOption(option);
                }
            }
        })
    }


    function Atlas() {

        this.defaultColors = [
            ["#1a84ff", "#30a9ff"],
            ["#f9922e", "#f9a452"],
            ["#fb6060", "#fb8484"],
            ["#40c9b3", "#52f3d9"],
            ["#88ce67", "#a3f37d"],
            ["#5d924d", "#9af27f"],
            ["#d16391", "#f971aa"],
            ["#fe80a2", "#f99eb7"],
            ["#707e91", "#68a3f2"],
            ["#67c2da", "#7ddef8"],
            ["#8a8ded", "#a0a3f9"]
        ]

        this.colors = {
            company: ["#1a84ff", "#30a9ff"],
            investing: ["#f9922e", "#f9a452"],
            investor: ["#fb6060", "#fb8484"],
            staff: ["#40c9b3", "#52f3d9"],
            pledge: ["#88ce67", "#a3f37d"],
            lawsuit: ["#5d924d", "#9af27f"],
            courtAnnouncement: ["#d16391", "#f971aa"],
            lawInstituteAnnouncement: ["#fe80a2", "#f99eb7"]
        }

        this.cateLabel = [
            'company',
            'investing',
            'investor',
            'staff',
            'pledge',
            'lawsuit',
            'courtAnnouncement',
            'lawInstituteAnnouncement'
        ]

        this.companyId = null
        this.chartOriginData = {}
        this.fullscreen = false   // 全屏状态
        this.companyInfoStatus = false

        this.forceChartBaseOption = {
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    silent: true,
                    symbolSize: function (value, param) {
                        if (param.data.category == 0) {
                            return 60
                        } else if (param.data.category < 8) {
                            return 35
                        } else if (param.data.category > 7) {
                            return 20
                        } else {
                            return 20
                        }
                    },
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                            curveness: 0.1,  // 连线的弧度
                            color: '#cccccc'
                        }
                    },
                    force: {
                        repulsion: 150,
                        gravity: 0.2,
                        edgeLength: [30, 80]
                    },
                    categories: [],
                    data: [],
                    links: []
                }
            ]
        }

        this.optionChart = {
            textStyle: {
                color: '#6b6b6b'
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    hoverAnimation: false,
                    symbolSize: function (value, param) {  // 节点的大小
                        var label = param.data.label
                        if (label == 'company') {
                            return 50
                        } else if (label.indexOf('class') == 0 && label.split('_').length == 2) {
                            // 区分二级和三级类节点
                            return 30
                        } else if (label.indexOf('class') == 0 && label.split('_').length == 3) {
                            return 25
                        } else {
                            return 15
                        }
                    },
                    focusNodeAdjacency: false,
                    roam: true,
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 1,
                            curveness: 0.1,
                            color: 'target'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                fontSize: 11
                            },
                            position: 'top'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: 12
                            },
                            position: 'top'
                        }
                    },
                    force: {
                        repulsion: 200,
                        gravity: 0.1,
                        edgeLength: [30, 80]
                    },
                    top: 200,
                    bottom: 200,
                    categories: [],
                    data: [],
                    links: []
                }
            ]
        }
    }

    Atlas.prototype = {
        init: function () {
            var _this = this
            this.renderDefaultChart()
            this.autoComplete()
            $('body').on('click', '.search-button', function () {
                if (!$('.search-item1 input').val().trim()) return
                $('#default_page').hide()
                $('#search_page').show(0, function () {
                    _this.search()
                    $(".select-line").stop().animate({left: 0}, 300);
                    _this.getChartData()
                })
            }).on('keyup', function (event) {
                if (event.keyCode == 13) $('.search-button').click()
            }).on('click', '.sildebar-switch', function () {
                var status = $(this).hasClass('switch-open')
                if (status) {
                    $('.node-slidebar').animate({
                        right: '10px'
                    }, function () {
                        $('.sildebar-switch').removeClass('switch-open').addClass('switch-close')
                    })
                } else {
                    $('.node-slidebar').animate({
                        right: '-250px'
                    }, function () {
                        $('.sildebar-switch').removeClass('switch-close').addClass('switch-open')
                    })
                }
            }).on('click', '.select-ul a', function () {  //切换详情
                var page = $(this).index()
                if (page == 1) {
                    mAjax({
                        url: '/graph/entBasicInfo',
                        dataType: 'json',
                        type: 'get',
                        data: {
                            entName: $('.search-item1 input').val().trim()
                        },
                        success: function (data) {
                            var obj = $.extend({},data.data,{companyStatus:_this.companyInfoStatus})
                            var dom = template('tpl-detail-basic', obj)
                            $('.company-detail .details-i-box').html(dom)
                        }
                    })

                    $('.company-detail').show()
                    $('.company-more').hide()
                } else {
                    $('.company-detail').hide()
                    $('.company-more').show()
                }
            }).on('click', '#ceng1 .right', function () {  // 详情图表切换
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng1 .visualization-area .visualization-box:first').hide()
                $('#ceng1 .visualization-area .visualization-box:last').show()
                cloudWord($('.search-item1 input').val().trim())
            }).on('click', '#ceng1 .left', function () {
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng1 .visualization-area .visualization-box:first').show()
                $('#ceng1 .visualization-area .visualization-box:last').hide()
            }).on('click', '#ceng2 .right', function () {
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng2 .visualization-area .visualization-box:first').hide()
                $('#ceng2 .visualization-area .visualization-box:last').show()
                charts($('.search-item1 input').val().trim())
            }).on('click', '#ceng2 .left', function () {
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng2 .visualization-area .visualization-box:first').show()
                $('#ceng2 .visualization-area .visualization-box:last').hide()
            }).on('click', '#ceng3 .right', function () {
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng3 .visualization-area .visualization-box:first').hide()
                $('#ceng3 .visualization-area .visualization-box:last').show()
                relationshipChart($('.search-item1 input').val().trim())
            }).on('click', '#ceng3 .left', function () {
                $(this).siblings('span').removeClass('curr').end().addClass('curr')
                $('#ceng3 .visualization-area .visualization-box:first').show()
                $('#ceng3 .visualization-area .visualization-box:last').hide()
            })
        },
        autoComplete: function () {
            $('body').on('input', '.search-item1 input', function () {
                var value = $(this).val().trim()
                if (!value) return false
                mAjax({
                    url: '/search/free/name',
                    dataType: "json",
                    type: 'post',
                    data: {
                        q: value
                    },
                    success: function (data) {
                        if (data.obj != null) {
                            var list = ""
                            data.obj.forEach(function (item, index) {
                                list += '<li class="search-list">' + item.entName + '</li>'
                            })

                            $(".result-list-area ul").html(list)
                            $(".result-list-area").show()
                        } else {
                            $(".result-list-area").hide()
                        }
                    }
                })
            }).on('click', '.search-list-ul .search-list', function () {
                $(this).parents('.result-list-area').hide()
                var text = $(this).text()
                $('.search-item1 input').val(text)
                $('.search-button').click()
            })

        },
        renderDefaultChart: function () {

            mAjax({
                url: '/graph/queryGraph',
                type: 'post',
                dataType: 'json',
                data: {
                    entName: '网银在线科技有限公司',
                    itemId: 58
                },
                success: function (data) {
                    //console.log(123)
                }
            })

            var categories = [{
                name: 0,
                itemStyle: {
                    normal: {
                        color: this.defaultColors[0][0]
                    }
                }
            }]
            var nodes = [{
                name: Math.random(),
                category: 0
            }]

            var links = []

            for (var i = 1; i < 8; i++) {
                categories.push({
                    name: i,       // 7以内的是2级节点
                    itemStyle: {
                        normal: {
                            color: this.defaultColors[i][0]
                        }
                    }
                })

                categories.push({
                    name: i + 7,   // 8以上的是3节点
                    itemStyle: {
                        normal: {
                            color: this.defaultColors[i][0]
                        }
                    }
                })
            }

            categories.sort(function (a, b) {
                return a.name - b.name
            })

            for (var i = 1; i < 8; i++) {
                nodes.push({
                    name: Math.random(),
                    category: i
                })
                links.push({
                    source: 0,
                    target: i
                })
            }

            for (var i = 1; i < 8; i++) {
                var leaves = parseInt(Math.random() * 20)
                for (var j = 0; j < leaves; j++) {
                    nodes.push({
                        name: Math.random(),
                        category: i + 7
                    })
                    links.push({
                        source: i,
                        target: nodes.length - 1
                    })
                }
            }

            var option = $.extend({}, this.forceChartBaseOption)
            option.series[0].categories = categories
            option.series[0].data = nodes
            option.series[0].links = links

            echarts.init(document.getElementById('default-chart')).setOption(option)
        },
        search: function () {
            var _this = this
            var companyName = $('.search-item1 input').val()
            if (!companyName) return false
            _this.companyInfoStatus = false
            mAjax({
                url: '/graph/queryEntCard',
                type: 'post',
                dataType: 'json',
                data: {
                    entName: companyName
                },
                success: function (data) {
                    if (data.code == 200) {
                        _this.companyInfoStatus = true
                        var dom = template('tpl-company-sum', data.data)
                        $('#search_page .search-company-head').html(dom)
                        if (data.data.title && data.data.score && data.data.progress) {
                            setTimeout(function () {
                                progressCircle()
                            }, 500)
                        }
                    } else {
                        $('#search_page .search-company-head').html('<div class="no-data">没有企业信息</div>')
                    }
                }
            })

        },
        getChartData: function () {
            var _this = this
            var companyName = $('.search-item1 input').val()

            _this.myChart && _this.myChart.dispose()
            $('.table-right-contain').remove()
            $('.select-ul a:first').click()
            $('.tab-chart-content').show()
            $('#relation-chart').html('<div class="chart-loading"><img src="//storage.jd.com/blue-whale/images/loading-joy4.gif" /></div>')
            $('#relation-chart').siblings('.chart-legend').remove()
            $('.node-slidebar').hide()

            mAjax({
                url: '/graph/queryGraph',
                type: 'post',
                dataType: 'json',
                data: {
                    entName: companyName,
                    itemId: 58
                },
                success: function (data) {
                    if (data.code == 200) {
                        _this.companyId = data.data.companyId
                        _this.chartOriginData = data.data.graphStr
                        _this.renderTab(data.data)
                    }

                }
            })
        },
        getNodeIndex: function (id, nodes) {
            var m = ''
            nodes.forEach(function (item, index) {
                if (item.id == id) {
                    m = index
                }
            })
            return m
        },
        getNodeCategory: function (label) {
            for (var i = 1; i < this.cateLabel.length; i++) {
                var t = this.cateLabel[i]
                if (label.indexOf(t) >= 0) {
                    return i
                    break
                }
            }
            // 解决 investor_company 这种数据
            if (label == 'company') return 0
        },
        renderTab: function (tab) {
            var _this = this
            var dom = template('tpl-info-tab', tab || {})
            $('#search_page .company-more .company-items').html(dom)
            _this.renderChart()

            $('.report-result-area').off().on('click', '.company-more .company-items li', function () {
                var node_type = 'class_' + $(this).data('type')
                var hadRendered = $(this).data('loaded')
                var $this = $(this)
                if (node_type == 'class_chart') {
                    $('.tab-container .table-right-contain').hide()
                    $('.tab-chart-content').show()
                    $('.report-result-area .company-items li').removeClass('active')
                    $this.addClass('active')
                    return false
                }
                if (hadRendered) {
                    $('.tab-chart-content').hide()
                    $('.tab-container .table-right-contain').hide()
                    $('#' + $(this).data('type') + '-tab-content').show()
                    $('.report-result-area .company-items li').removeClass('active')
                    $this.addClass('active')
                    return false
                }
                console.log(node_type)
                _this.tabRenderTables(node_type, 1, $this)

            })
        },
        tabRenderTables: function (label, page, item) {
            var _this = this
            //分页 loading
            $('#' + item.data('type') + '-tab-content').html('<div class="chart-loading"><img style="margin-top:200px;" src="//storage.jd.com/blue-whale/images/loading-joy4.gif" /></div>')
            $.ajax({
                url: '/graph/vertexList',
                dataType: 'json',
                type: 'post',
                data: {
                    companyId: _this.companyId || 30888136,
                    label: label.toUpperCase(),
                    pageNum: page || 1,
                    pageSize: 10,
                    itemId: 58
                },
                success: function (data) {
                    var list = data.data.vertexList
                    var tpl = ''
                    if (label.indexOf('class_staff') == 0) {
                        tpl = 'tpl-tab-staff'
                    } else if (label.indexOf('class_investor') == 0) {
                        tpl = 'tpl-tab-investor'
                    } else if (label.indexOf('class_courtAnnouncement') == 0) {
                        tpl = 'tpl-tab-courtAnnouncement'
                    } else if (label.indexOf('class_pledge') == 0) {
                        tpl = 'tpl-tab-pledge'
                    } else if (label.indexOf('class_lawsuit') == 0) {
                        tpl = 'tpl-tab-lawsuit'
                    } else if (label.indexOf('class_lawInstituteAnnouncement') == 0) {
                        tpl = 'tpl-tab-lawInstituteAnnouncement'
                    }else if(label.indexOf('class_investing')==0){
                        tpl = 'tpl-tab-investing'
                    }

                    var domstr = template(tpl, { list: list })
                    $('.tab-container>div').hide()
                    $('#' + item.data('type') + '-tab-content').remove()
                    $('.tab-container').append(domstr)
                    if (data.data.pageNum > 1) {
                        $('#' + item.data('type') + '-tab-content .page-wrap').pagination({
                            activeCls: 'curr',
                            prevCls: 'up-page',
                            nextCls: 'down-page',
                            pageCount: data.data.pageNum,
                            current: data.data.totalPage,
                            callback: function (p) {
                                _this.tabRenderTables(label, p.getCurrent(), item)
                            }
                        })
                    }

                    $('.report-result-area .company-items li').removeClass('active')
                    item.addClass('active').data('loaded', 1)

                }
            })
        },
        initChartEvent: function (myChart) {
            var _this = this

            // 点击节点
            myChart.on('click', function (param) {
                myChart.dispatchAction({
                    type: 'focusNodeAdjacency',
                    seriesIndex: 0,
                    dataIndex: param.dataIndex
                })
                if (!param.data.label) return false // 线
                if (param.data.label.indexOf('class') == 0) {
                    mAjax({
                        url: '/graph/vertexList',
                        dataType: 'json',
                        type: 'post',
                        data: {
                            companyId: _this.companyId,
                            label: param.data.label.toUpperCase(),
                            pageNum: 1,
                            pageSize: 200,
                            itemId: 58
                        },
                        success: function (data) {
                            if (data.code == 200) {
                                var list = data.data.vertexList
                                var tpl = 'tpl-slider-' + param.data.label.split('_')[1]
                                $('.slider-content').html(template(tpl, { list: list }))
                                $('.node-slidebar').show().animate({
                                    right: '10px'
                                }, function () {
                                    $('.sildebar-switch').removeClass('switch-open').addClass('switch-close')
                                })
                            } else {
                                $('.slider-content').html('<div class="no-data">获取节点信息失败</div>')
                            }
                        }
                    })
                } else {
                    mAjax({
                        url: '/graph/vertexDetail',
                        dataType: 'json',
                        type: 'post',
                        data: {
                            companyId: _this.companyId,
                            vertexId: param.data.id,
                            itemId: 58
                        },
                        success: function (data) {
                            var detail = data.data.vertexDetail[0]
                            var tpl = 'tpl-slider-' + (detail.label.split('_')[0] == 'company' ? 'investor' : detail.label.split('_')[0]) + '-detail'
                            $('.slider-content').html(template(tpl, { detail: detail }))
                            $('.node-slidebar').show().animate({
                                right: '10px'
                            }, function () {
                                $('.sildebar-switch').removeClass('switch-open').addClass('switch-close')
                            })
                        }
                    })
                }

                param.event.event.preventDefault();
                param.event.event.stopPropagation();

            })

        },
        renderChart: function () {
            var _this = this
            var originData = this.chartOriginData[0]
            var nodes = []
            var links = []
            var categories = []
            if (originData.length <= 0) {
                $('#relation-chart').html('<div class="no-data" style="padding-top:300px;">暂无图谱信息</div>')
                return false
            }

            _this.cateLabel.forEach(function (item, index) {
                categories.push({
                    name: item,
                    itemStyle: {
                        normal: {
                            color: _this.colors[item][0]
                        },
                        emphasis: {
                            color: _this.colors[item][1]
                        }
                    }
                })
            })

            var legendArr = []
            originData.forEach(function (item, index) {
                if (item.v) {
                    var name = '';
                    switch (item.v.label) {
                        case 'company':
                            name = item.v.company_name;
                            break;
                        case 'class_investing':
                            name = '对外投资';
                            legendArr.push({
                                name: '对外投资',
                                value: 'investing'
                            })
                            break;
                        case 'class_investor':
                            name = '股东';
                            legendArr.push({
                                name: '股东',
                                value: 'investor'
                            })
                            break;
                        case 'class_staff':
                            name = '主要成员';
                            legendArr.push({
                                name: '主要成员',
                                value: 'staff'
                            })
                            break;
                        case 'class_pledge':
                            name = '股权质押';
                            legendArr.push({
                                name: '股权质押',
                                value: 'pledge'
                            })
                            break;
                        case 'class_lawsuit':
                            name = '涉诉';
                            legendArr.push({
                                name: '涉诉',
                                value: 'lawsuit'
                            })
                            break;
                        case 'class_courtAnnouncement':
                            name = '开庭公告';
                            legendArr.push({
                                name: '开庭公告',
                                value: 'courtAnnouncement'
                            })
                            break;
                        case 'class_lawInstituteAnnouncement':
                            name = '法院公告';
                            legendArr.push({
                                name: '法院公告',
                                value: 'lawInstituteAnnouncement'
                            })
                            break;
                        case 'class_investor_personal':
                            name = '个人股东';
                            break;
                        case 'class_investor_company':
                            name = '企业股东';
                            break;
                        case 'class_lawsuit_demandant':
                            name = '原告';
                            break;
                        case 'class_lawsuit_defendant':
                            name = '被告';
                            break;
                        case 'class_lawsuit_other':
                            name = '其他';
                            break;
                        case 'class_courtAnnouncement_plaintiff':
                            name = '原告';
                            break;
                        case 'class_courtAnnouncement_defendant':
                            name = '被告';
                            break;
                        case 'class_courtAnnouncement_other':
                            name = '其他';
                            break;
                        case 'class_lawInstituteAnnouncement_plaintiff':
                            name = '原告';
                            break;
                        case 'class_lawInstituteAnnouncement_defendant':
                            name = '被告';
                            break;
                        case 'class_lawInstituteAnnouncement_other':
                            name = '其他';
                            break;
                        default:
                            name = item.v[item.v.label + '_name'] ? item.v[item.v.label + '_name'][0] : 'noName'
                            break;
                    }
                    nodes.push({
                        id: item.v.id,
                        name: name,
                        category: _this.getNodeCategory(item.v.label),
                        label: item.v.label,
                        draggable: true
                    })
                }
            })

            // 不限制节点
            originData.forEach(function (item, index) {
                if (item.e) {
                    var start = _this.getNodeIndex(item.e.inV, nodes)
                    var end = _this.getNodeIndex(item.e.outV, nodes)
                    links.push({
                        source: end,
                        target: start
                    })
                }
            })

            // // 限制过多节点
            // var linksGroup = {}
            // var edges = []
            // originData.forEach(function (item, index) {
            //     if (item.e) {
            //         edges.push(item.e)
            //     }
            // })

            // edges.forEach(function (item, index) {
            //     linksGroup[item.outV] = []
            // })
            // edges.forEach(function (item, index) {
            //     linksGroup[item.outV].push(index)
            // })

            // var toLimitIds = []
            // for (var i in linksGroup) {
            //     if (linksGroup[i].length > 30) {
            //         toLimitIds.push(i)
            //     }
            // }

            // var removeLinksArr = []
            // toLimitIds.forEach(function (e, i) {
            //     var limit = 0
            //     edges.forEach(function (item, index) {
            //         if (item.outV == e) {
            //             limit++;
            //             if (limit > 30) {
            //                 removeLinksArr.push(index)
            //             }
            //         }
            //     })
            // })

            // var removeNodesArr = []   // 存的是id
            // removeLinksArr.forEach(function (item, index) {
            //     removeNodesArr.push(edges[item].inV)
            //     delete edges[index]
            // })

            // removeNodesArr.forEach(function (item, index) {
            //     var i = _this.getNodeIndex(item, nodes)
            //     delete nodes[i]
            // })

            // edges.forEach(function (item, index) {
            //     var start = _this.getNodeIndex(item.inV, nodes)
            //     var end = _this.getNodeIndex(item.outV, nodes)
            //     links.push({
            //         source: end,
            //         target: start
            //     })
            // })
            // // 限制过多节点
            // console.log(links)

            var domstr = template('tpl-chart-tools', { 'legend': legendArr })
            $('#relation-chart').after(domstr)

            var option = $.extend({}, _this.optionChart)
            option.series[0].categories = categories
            option.series[0].data = nodes
            option.series[0].links = links

            var myChart = echarts.init(document.getElementById('relation-chart'))
            _this.myChart = myChart
            myChart.setOption(option)
            myChart.dispatchAction({
                type: 'focusNodeAdjacency',
                seriesIndex: 0,
                dataIndex: 0
            })

            _this.initChartEvent(myChart, nodes)


            // 图例点击
            $('.chart-legend li').on('click', function () {

                $(this).toggleClass('ncheck')
                var unChoosed = $('.chart-legend .ncheck i')
                var unChoosedType = []
                for (var i = 0; i < unChoosed.length; i++) {
                    unChoosedType.push($(unChoosed[i]).data('type'))
                }

                var nodesBak = nodes.filter(function (item) {
                    var tag = 1
                    for (var j = 0; j < unChoosedType.length; j++) {
                        if (item.label.indexOf(unChoosedType[j]) >= 0) {
                            tag = 0
                        }
                        // 处理叶子节点的企业信息
                        if (unChoosedType[j] == 'investor' && item.label == 'company') {
                            if (item.id != _this.companyId) {
                                tag = 0
                            }
                        }
                    }

                    return tag
                })

                var linkBak = []

                originData.forEach(function (item, index) {
                    if (item.e) {
                        var end = _this.getNodeIndex(item.e.inV, nodesBak)
                        var start = _this.getNodeIndex(item.e.outV, nodesBak)
                        if (start !== '' && end !== '') {
                            linkBak.push({
                                source: start,
                                target: end
                            })
                        }
                    }
                })
                option.series[0].data = nodesBak
                option.series[0].links = linkBak

                myChart.setOption(option)

            })

            $('#relation-chart').on('click', function () {
                myChart.dispatchAction({
                    type: 'unfocusNodeAdjacency',
                    seriesIndex: 0
                })
            })

            // 图例工具点击

            $(document).off('webkitfullscreenchange').on("webkitfullscreenchange", function (event) {
                if (document.webkitFullscreenElement) {
                    $('#relation-chart').css({ width: '100%', height: '100%' })
                    $('.tab-chart-content').css({ width: '100%', height: '100%' })
                    myChart.resize({ width: window.screen.width, height: window.screen.height })
                } else {
                    $('#relation-chart').css({ width: '964px', height: '700px' })
                    $('.tab-chart-content').css({ width: 'auto', height: 'auto' })
                    myChart.resize({ width: 964, height: 700 })
                }
            }).off('mozfullscreenchange').on("mozfullscreenchange", function (event) {
                if (document.mozFullScreenElement) {
                    $('#relation-chart').css({ width: '100%', height: '100%' })
                    $('.tab-chart-content').css({ width: '100%', height: '100%' })
                    myChart.resize({ width: window.screen.width, height: window.screen.height })
                } else {
                    $('#relation-chart').css({ width: '964px', height: '700px' })
                    $('.tab-chart-content').css({ width: 'auto', height: 'auto' })
                    myChart.resize({ width: 964, height: 700 })
                }
            }).off('MSFullscreenChange').on("MSFullscreenChange", function (event) {
                if (document.msFullscreenElement) {
                    $('#relation-chart').css({ width: '100%', height: '100%' })
                    $('.tab-chart-content').css({ width: '100%', height: '100%' })
                    myChart.resize({ width: window.screen.width, height: window.screen.height })
                } else {
                    $('#relation-chart').css({ width: '964px', height: '700px' })
                    $('.tab-chart-content').css({ width: 'auto', height: 'auto' })
                    myChart.resize({ width: 964, height: 700 })
                }
            })

            $('.chart-legend .tools').on('click', '.fullscreen', function () {
                if (_this.fullscreen) {
                    exitFullscreen(document.querySelector('.tab-chart-content'))
                } else {
                    launchFullscreen(document.querySelector('.tab-chart-content'))
                }
                _this.fullscreen = !_this.fullscreen

            }).on('click', '.reset', function () {
                var option = $.extend({}, _this.optionChart)
                option.series[0].categories = categories
                option.series[0].data = nodes
                option.series[0].links = links
                myChart.dispose()
                myChart = echarts.init(document.getElementById('relation-chart'))
                myChart.setOption(option)
                _this.initChartEvent(myChart)
                $('.chart-legend .legend-item li').removeClass('ncheck')

            }).on('click', '.download', function () {
                var imgData = myChart.getDataURL({
                    pixelRatio: 3,
                    type: 'jpeg',
                    backgroundColor: '#fff'
                });
                var _fixType = function (type) {
                    type = type.toLowerCase().replace(/jpg/i, 'jpeg');
                    var r = type.match(/png|jpeg|bmp|gif/)[0];
                    return 'image/' + r;
                };

                // 加工image data，替换mime type
                var filename = 'jd_chart' + (new Date()).getTime() + '.jpeg';
                imgData = imgData.replace(_fixType('jpeg'), 'image/octet-stream');
                var saveFile = function (data, filename) {
                    var save_link = document.createElement('a');
                    save_link.href = data;
                    save_link.download = filename;
                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    save_link.dispatchEvent(event);
                };

                if (navigator.userAgent.indexOf('MSIE') >= 0) {
                    saveFileForIE($('#relation-chart canvas')[0], filename)
                } else {
                    saveFile(imgData, filename);
                }


                function saveFileForIE(canvas, fileName) {
                    var blob = canvas.msToBlob();
                    navigator.msSaveBlob(blob, fileName);
                }


            })
        }
    }

    var atlas = new Atlas()
    atlas.init()
})()