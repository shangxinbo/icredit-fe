$(function () {

    $.fn.extend({
        checkboxCtrl: function (parent) {
            return this.each(function () {
                var $trigger = $(this);
                alert($trigger);
                $trigger.click(function () {
                    var group = $trigger.attr("group");
                    alert(group);
                    if ($trigger.is(":checkbox")) {
                        var type = $trigger.is(":checked") ? "all" : "none";
                        if (group)
                            $.checkbox.select(group, type, parent);
                    } else {
                        if (group)
                            $.checkbox.select(group, $trigger.attr("selectType") || "all", parent);
                    }
                });
            });
        },
    });
    $.checkbox = {
        selectAll: function (_name, _parent) {
            this.select(_name, "all", _parent);
        },
        unSelectAll: function (_name, _parent) {
            this.select(_name, "none", _parent);
        },
        selectInvert: function (_name, _parent) {
            this.select(_name, "invert", _parent);
        },
        select: function (_name, _type, _parent) {
            $parent = $(_parent || document);
            $checkboxLi = $parent.find(":checkbox[name='" + _name + "']");
            switch (_type) {
                case "invert":
                    $checkboxLi.each(function () {
                        $checkbox = $(this);
                        $checkbox.attr('checked', !$checkbox.is(":checked"));
                    });
                    break;
                case "none":
                    $checkboxLi.attr('checked', false);
                    break;
                default:
                    $checkboxLi.attr('checked', true);
                    break;
            }
        }
    };
    var $p = "";
    $(".checkboxCtrl,.checkboxCtrl", $p).checkboxCtrl($p);
    initHrefClick();
    loadDivData();
    initPages();
    ajaxTodo();
    initCalendar();
    showChoose();
    toggleChoose();
    slideLine();
    dateToggleChoose();
    inputBindEvent();

    //协议弹窗
    $('.close-popup').click(function () {
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function (pop) {
            pop.hideLayer($('.protocol-popup'));
        });
    });

    $('.protocol-btn').click(function () {
        seajs.use('financial/common/module/popup/1.0.0/js/popup', function (pop) {
            $.ajax({
                type: "post",
                async: false,
                data: {isAgree: "true"},
                url: contextPath + "/api/register/doRegisterNew",
                dataType: "json",
                success: function (data) {
                    if (data.code == 200 && data.data.result == "success") {
                        pop.hideLayer($('.protocol-popup'));
                    } else {
                        return false;
                    }
                },
                error: function () {
                    return false;
                }
            });


        });
    });
});

$(document).ajaxStart(function (e) {
//	var loadImg = e.currentTarget.activeElement.attributes.loading;
//	if(loadImg){
//		if(loadImg.value=="top"||loadImg.value=="all"){
//			$('<div id="web_loading" style="z-index:99999;width:100%;top:0;position:fixed;"><div style="width:0;height:5px;background:#0587FF;"></div></div>').appendTo($(document).find("html"));
//			$("#web_loading div").animate({width:"100%"},800,function(){}); 
//		}else if(loadImg.value=="none"){
//		}
//	}else{
//		$('<div id="web_loading" style="z-index:99999;width:100%;top:0;position:fixed;"><div style="width:0;height:5px;background:#0587FF;"></div></div>').appendTo($(document).find("html"));
//		$("#web_loading div").animate({width:"100%"},800,function(){}); 
//	}
}).ajaxStop(function () {
    $("#web_loading div").fadeOut(600);
//	$("#web_joy_loading").fadeOut(100); 
    $('.joy-mask').animate({opacity: 0}, 10, function () {
        $(this).remove();
    });
});

/**
 * 产品查询页，选择产品后显示该产品查询条件
 * @param divClass
 */
function toggleChoose(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = ".service-list";
    } else {
        varDivClass = "." + divClass + " .service-list";
    }
    var item = $(varDivClass);
//        item.off("click");
    item.on("click", function () {
        var idx = $(this).index();
        $(this).find(".pro-list-box").addClass("choose").parent().siblings().find(".pro-list-box").removeClass("choose");
        $(this).parents(".service-con").find(".report-con-box").eq(idx).show().siblings(".report-con-box").hide();
        $(this).parents(".check-service-area").find(".details-box").eq(idx).show().siblings().hide();
    });
}

/**
 * 列表页tab切换
 */
function slideLine(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = ".select-title-list";
    } else {
        varDivClass = "." + divClass + " .select-title-list";
    }
    var selectItem = $(varDivClass);
    var idx = null;
    selectItem.on("click", function () {
        idx = $(this).index();
        $(this).addClass("choose-item").siblings().removeClass("choose-item");
        $(".coupon-container-box").hide().eq(idx).show();
    });
    selectItem.on("mouseenter", function () {
        var index = $(this).index();
        $(".select-line").stop().animate({left: (110 * index)}, 300);
    });
    $(".select-ul").on("mouseleave", function () {
        if (idx != null) {
            $(".select-line").stop().animate({left: (110 * idx)}, 300);
        }
    });

}

/**
 * 下拉框选择input赋值
 */
function showChoose(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = ".show-consignee-infor";
    } else {
        varDivClass = "." + divClass + " .show-consignee-infor";
    }
    $(varDivClass).on("click", function (e) {
        $(document).click();//先清除页面上已有的下拉框
        var target = $(this).attr("inputId") || "";
        var callBackFunc = $(this).attr("callback") || "";
        if (e || e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            window.event.cancelBubble = true;
        }
        $(this).parent().find(".hide-consignee-infor").show();
        $(this).parent().find(".ad-list").on("click", function (e) {

            if (e || e.stopPropagation) {
                e.stopPropagation();
            }
            else {
                window.event.cancelBubble = true;
            }
            var value = $(this).attr("pvalue") || "";
            $("#" + target).val(value);
            var val = $(this).html();

            $(this).parents(".consignee-infor").find(".show-title").html(val);
            $(this).parents(".consignee-infor").find(".hide-consignee-infor").hide();

            if (callBackFunc != "") {
                if ($.isFunction(eval(callBackFunc))) {
                    eval(callBackFunc + '()');
                }
            }
        });
    });
    $(document).on('click', function (e) {
        if (e || e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            window.event.cancelBubble = true;
        }
        $(".hide-consignee-infor").hide();
    });
}

/**
 * * 日期tab添加click事件，选择后input赋值,例如：七天-->startTarget=当天向前推算七天
 *
 * @step1.样式为scan-list设置click事件，选择不同tab时添加样式为curr，其他赋予初始化状态
 * @step2.属性startTarget和finishTarget中定义的input的id赋值
 * @param divClass
 * @param startTarget-开始时间input的id，默认空 ,必填
 * @param finishTarget-开始时间input的id，默认空,必填
 * @param date-类型，默认空,必填
 *             参数值：字符串空（""）-全部(选填)，d-今天，w-一周，m-当月，q-前三个月,a -前三个月
 * @returns .scan-list 标签添加click事件
 *
 */
function dateToggleChoose(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = ".scan-list";
    } else {
        varDivClass = "." + divClass + " .scan-list";
    }
    var item = $(varDivClass);
    item.on("click", function () {
        idx = $(this).index();
        $(this).addClass("curr").siblings().removeClass("curr");
        var start = $(this).attr("startTarget") || "";
        var finish = $(this).attr("finishTarget") || "";
        var date = $(this).attr("date") || "";
        if (start != "") {
            if (date != "") {
                var now = new Date();
                switch (date) {
                    case "d": {
//                    	now.setDate(now.getDate());
                        break;
                    }
                    case "w": {
                        now.setDate(now.getDate() - 7);
                        break;
                    }
                    case "m": {
                        now.setMonth(now.getMonth() - 1);
                        break;
                    }
                    case "q": {
                        now.setMonth(now.getMonth() - 3);
                        break;
                    }
                    case "a": {
                        now.setMonth(now.getMonth() - 6);
                    }
                }
                $("#" + start).val(now.getFullYear() + "-" + (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1)) + "-" + (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()));
//            		$("#"+start).val(now.toLocaleDateString().replace(/\//g,"-"));
            } else {
                $("#" + start).val("");
            }
        }
        if (finish != "") {
            if (date != "") {
                var now = new Date();
                $("#" + finish).val(now.getFullYear() + "-" + (now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1)) + "-" + (now.getDate() < 10 ? "0" + now.getDate() : now.getDate()));
            } else {
                $("#" + finish).val("");
            }
        }
    });
}

/**
 * input[target=calendar]，input标签添加日期控件
 * @step1.input标签配置target="calendar"属性，配置id属性
 * @param target-检索属性，配置calendar,必填
 * @param id-时间input的id，必填
 * @returns input[target=calendar]，input标签添加日期控件
 */
function initCalendar(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = "input[target=calendar]";
    } else {
        varDivClass = "." + divClass + " input[target=calendar]";
    }
    try {
        $(varDivClass).each(function () {
            $("#" + $(this).attr("id")).datetimepicker({
                format: "Y-m-d",
                timepicker: false,
                todayButton: false
            });
            $.datetimepicker.setLocale('ch');
        });
    } catch (e) {
        if (console) {
            console.log("%s", e.message);
        }
    }


}

/**
 * 表单ajax提交
 * @param form
 * current 指定页面 默认1
 * @returns {Boolean}
 */
function validateCallback(form) {
    var $form = $(form);
    var tabid = $form.attr("rel") || "";
//		alert($.formValidator.pageIsValid('1'));
//		if($.formValidator.pageIsValid('1')){
    var $validForm = $form.attr("validForm") || "";
    var $callback = $form.attr("callback") || "";
    var method = $form.attr("method") || "GET";
    var current = $form.attr("current") || 1;
    var loadingFlag = $form.attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
    doAjax({
        url: $form.attr("action"),
        data: $form.serializeArray(),
        validForm: $validForm,
        type: method,
        tabid: tabid,
        loading: loadingFlag,
        callback: function (datas) {
            if (tabid != "" && $("." + tabid)) {
                $("." + tabid).empty();
                $("." + tabid).html(datas);//要刷新的div
//				$("."+tabid).append(messageTip1('操作成功',1));
//				$('#gritter-notice-wrapper').fadeOut(4000);
                initHrefClick(tabid);
                loadDivData(tabid);
                initPages(tabid, current);
                ajaxTodo(tabid);
                initCalendar(tabid);
                showChoose(tabid);
                toggleChoose(tabid);
                slideLine(tabid);
                dateToggleChoose(tabid);
                inputBindEvent(tabid);
            } else {
                //刷新整个页面
//				$(document).find("html").empty();
//				$(datas).appendTo($(document).find("html"));
//				window.history.pushState(null, null, url);
                if (typeof(datas) == "string") {
                    if (datas.match("^\{(.+:.+,*){1,}\}$")) {
                        //通过这种方法可将字符串转换为对象
                        var rdata = jQuery.parseJSON(datas);
                        if (rdata.data != null) {
                            if (rdata.data.href != null && rdata.data.href != "") {
                                window.location = rdata.data.href;
                            }
                        }
                    }
                } else {
                    if (datas.data != null) {
                        if (datas.data.href != null && datas.data.href != "") {
                            window.location = datas.data.href;
                        }
                    }
                }
            }
            try {
                if ($callback != "") {
                    if ($.isFunction(eval($callback))) {
                        $callback = eval($callback + '(datas)');
                        if ($callback == false) {
                            return;
                        }
                    }
                }
            } catch (e) {
                if (console) {
                    console.log("%s", e.message);
                }
            }
        }
    });
//		}
    return false;
}

function inputBindEvent(divClass) {
    var varHrefClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varHrefClass = "input[target=searchTip]";
    } else {
        varHrefClass = "." + divClass + " input[target=searchTip]";
    }
    var varHrefItem = $(varHrefClass);
    $(varHrefItem).each(function () {
        var $this = $(this);
        var id = $this.attr("id") || "";
        var href = $this.attr("href") || "";
        var tipHref = $this.attr("tipHref") || "";
        var returnUrl = $this.attr("returnUrl") || "";
        var action = $this.attr("action") || "padding";
        var loadingFlag = $this.attr("loadingFlag") || "none";//top、joy、none，其他默认为全显示
        $this.bind('input', function () {
            if ($this.val().trim() != "") {
                doAjax({
                    url: href,
                    dataType: "json",
                    data: "q=" + encodeURIComponent($this.val().trim()),
                    loading: loadingFlag,
                    callback: function (data) {
                        if (data.obj != null) {
                            var list = "";
                            $.each(data.obj, function (n, value) {
                                if (action == "skip") {
                                    list += "<a target=\"navTab\" style='color:#5e5e5e' href='" + tipHref + escape(encodeURIComponent(value.originalName)) + "'  returnUrl='" + returnUrl + encodeURIComponent(value.originalName) + "'><li class='search-list'>" + value.entName + "</li></a>";
                                } else {
                                    list += "<li class='search-list' onClick='searchTipPaddingValue(\"" + id + "\",\"" + value.originalName + "\")'>" + value.entName + "</li>";
                                }
                            });

                            $(".result-list-area ul").html(list);
                            $(".result-list-area").show();
                            if (action == "skip") {
                                initHrefClick(divClass);
                            }
                        } else {
                            $(".result-list-area").hide();
                        }

                    }
                });
            } else {
                $(".result-list-area").hide();
            }
        });
        $(this).bind('blur', function () {
            var isFocus = $(".result-list-area ul").is(":hover");
            if (!isFocus) {
                $(".result-list-area").hide();
            }
        });
        $(this).bind('keypress', function (event) {
            if (event.keyCode == "13") {
                $(".result-list-area").hide();
            }
        });
    });
    /* $(document).keydown(function(e){
          var code;
          if(!e) var e=window.event;
          if(e.keyCode) {
            code=e.keyCode;
          }else if(e.which){
            code = e.which;
          }

          if(code == 37){
              movePrev();
          }else if(code == 39){
              moveNext();
          }
      });

      var movePrev = function(){
          var index = $("li.curr").prevAll().length;
          if(index == 0) $("li").removeClass('curr').eq($("li").length-1).addClass('curr');            //可循环移动
          // if(index == 0) return false;                                                            //不可循环移动
          else $("li").removeClass('curr').eq(index-1).addClass('curr');
      }

      var moveNext = function(){
          var index = $("li.curr").prevAll().length;
          if(index == $("li").length-1) $("li").removeClass('curr').eq(0).addClass('curr');            //可循环移动
          // if(index == $("li").length-1) return false;                                                //不可循环移动
          else $("li").removeClass('curr').eq(index+1).addClass('curr');
      }   */
}

function searchTipPaddingValue(objId, value) {
    $("#" + objId).val(value);
    $(".result-list-area").hide();
}

/**
 * a点击事件
 * @param divClass
 */
function initHrefClick(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = "a[target=navTab]";
    } else {
        varDivClass = "." + divClass + " a[target=navTab]";
    }
    $(varDivClass).each(function () {
        $(this).off("click");
        $(this).click(function (event) {
            var $this = $(this);
            var title = $this.attr("title") || "";
            var slideClass = $this.attr("slideClass") || "select-page-list";//导航需要循环剔除高亮的class
            var slideSelected = $this.attr("slideSelected") || "choose";//导航切换需要高亮的class
            var slideRemote = $this.attr("slideRemote") || "";//子页面点击需要修改的导航class，修改a标签点击时不需要填写
            var tabid = $this.attr("rel") || "";
            var fresh = eval($this.attr("fresh") || "true");
            var form = $this.attr("formId") || "";//表单ID
            var url = encodeURI(unescape($this.attr("href")));
            var $validForm = $this.attr("validForm") || "";
            var $callback = $this.attr("callback") || "";
            var method = $this.attr("method") || "GET";
            var asyncAjax = $this.attr("asyncAjax") ==="false" ? false : true;
            var ssoReturnUrl = $this.attr("returnUrl") || null;
            var loadingFlag = $this.attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
            if (url.indexOf('javascript') > -1) {
                return false;
            }
            var $form = $("#" + form);
            var param = null;
            if ($form != null) {
                param = $form.serializeArray();
            }
            doAjax({
                target: ssoReturnUrl,
                url: url,
                validForm: $validForm,
                type: method,
                data: param,
                async: asyncAjax,
                tabid: tabid,
                loading: loadingFlag,
                callback: function (datas) {
                    if (tabid != "" && $("." + tabid)) {
                        $("." + tabid).empty();
                        $("." + tabid).html(datas);//要刷新的div
                        initHrefClick(tabid);
                        loadDivData(tabid);
                        initPages(tabid);
                        ajaxTodo(tabid);
                        toggleChoose(tabid);
                        slideLine(tabid);
                        dateToggleChoose(tabid);
                        initCalendar(tabid);
                        showChoose(tabid);
                        inputBindEvent(tabid);
                    } else {
                        //刷新整个页面
//						$(document).find("html").empty();
//						$(datas).appendTo($(document).find("html"));
//						window.history.pushState(null, null, url);
                        if (typeof(datas) == "string") {
                            if (datas.match("^\{(.+:.+,*){1,}\}$")) {
                                //通过这种方法可将字符串转换为对象
                                var rdata = jQuery.parseJSON(datas);
                                if (rdata.data != null) {
                                    if (rdata.data.href != null && rdata.data.href != "") {
                                        window.location = rdata.data.href;
                                    }
                                }
                            }
                        } else {
                            if (datas.data != null) {
                                if (datas.data.href != null && datas.data.href != "") {
                                    window.location = datas.data.href;
                                }
                            }
                        }
                    }
                    try {
                        if ($callback != "") {
                            if ($.isFunction(eval($callback))) {
                                $callback = eval($callback + '(datas)');
                                if ($callback == false) {
                                    return;
                                }
                            }
                        }
                    } catch (e) {
                        if (console) {
                            console.log("%s", e.message);
                        }
                    }
                }
            });
            if ($("." + slideClass) != undefined && $("." + slideClass) != "" && $("." + slideClass) != null) {
                if (slideRemote == "") {
//					 $("."+slideClass).addClass(slideSelected).siblings().removeClass(slideSelected);
                    $this.parent().addClass(slideSelected).siblings("." + slideClass).removeClass(slideSelected);
                } else {
                    $("." + slideRemote).addClass(slideSelected).siblings("." + slideClass).removeClass(slideSelected);
                }
            }
            event.preventDefault();
            return false;
        });
    });
}

/**
 * div自动加载，无点击事件
 * @param divClass
 */
function loadDivData(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = "div[target=navTab]";
    } else {
        varDivClass = "." + divClass + " div[target=navTab]";
    }
    $(varDivClass).each(function () {
        var $this = $(this);
        var tabid = $this.attr("rel") || "";
        var url = unescape($this.attr("href"));
        var $validForm = $this.attr("validForm") || "";
        var method = $this.attr("method") || "GET";
        var loadingFlag = $this.attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
        if (url.indexOf('javascript') == -1) {
            var $callback = $this.attr("callback") || "";
            doAjax({
                url: url,
                validForm: $validForm,
                type: method,
                tabid: tabid,
                loading: loadingFlag,
                callback: function (datas) {
                    $this.empty();
                    $this.html(datas);//要刷新的div
                    if (tabid != "" && $("." + tabid)) {
                        initHrefClick(tabid);
                        loadDivData(tabid);
                        initPages(tabid);
                        ajaxTodo(tabid);
                        toggleChoose(tabid);
                        slideLine(tabid);
                        dateToggleChoose(tabid);
                        initCalendar(tabid);
                        showChoose(tabid);
                        inputBindEvent(tabid);
                    }
                    try {
                        if ($callback != "") {
                            if ($.isFunction(eval($callback))) {
                                $callback = eval($callback + '(datas)');
                                if ($callback == false) {
                                    return;
                                }
                            }
                        }
                    } catch (e) {
                        if (console) {
                            console.log("%s", e.message);
                        }
                    }
                }
            });
        }
    });
}

/**
 * .page-wrap 添加分页控件，click事件通过ajax访问数据
 * step1.检索.page-wrap属性的div,设置分页样式
 * step2.设置分页点击事件
 * param divClass-父类class,可选
 * param current-当前页，默认1,可选
 * param total-总条数，默认0,必填
 * param pageCount-每页个数，默认10,可选
 * param formId-表单ID,序列化表单元素，可选
 * param rel-目标div的class，默认0,必填
 * param href-分页跳转链接,必填
 * param method-ajax协议，默认GET,可选
 * param validForm- ajax调用前验证function,可选
 * param callback-ajax调用前验证function,可选
 * return .page-wrap 添加分页控件，click事件通过ajax访问数据
 */
function initPages(divClass, current) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = ".page-wrap";
    } else {
        varDivClass = "." + divClass + " .page-wrap";
    }
    $(varDivClass).each(function () {
        var $this = $(this);
        var total = $this.attr("total") || "0";//总条数
        var pageCount = $this.attr("pageCount") || "10";//每页个数
        var form = $this.attr("formId") || "";//表单ID
        var tabid = $this.attr("rel") || "";//目标div的class
        var href = $this.attr("href") || "";//分页跳转链接
        var method = $this.attr("method") || "GET";
        var $validForm = $this.attr("validForm") || "";//ajax 调用前验证function
        var $callback = $this.attr("callback") || "";//ajax 调用前验证function
        var $pageType = $this.attr("pageType") || "";//ajax 调用前验证function
        var loadingFlag = $this.attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
        if (href == "") {
            return;
        }

        $(this).pagination({
            totalData: total,
            showData: pageCount,
            activeCls: "curr",
            current: current,
            prevCls: 'up-page',		//上一页class
            nextCls: 'down-page',
            coping: true,
            pageType: $pageType,
            callback: function (data) {
                var $form = $("#" + form);
                var param = "";
                if ($form != null) {
                    param = $form.serialize();
                }
                param += "&currentPage=" + data.getCurrent() + "&limit=" + pageCount;
                doAjax({
                    url: href,
                    data: param,
                    validForm: $validForm,
                    type: method,
                    tabid: tabid,
                    loading: loadingFlag,
                    callback: function (datas) {
                        $("." + tabid).empty();
                        $("." + tabid).html(datas);//要刷新的div
//							$("."+tabid).append(messageTip1('操作成功',1));
//							$('#gritter-notice-wrapper').fadeOut(4000);
                        initHrefClick(tabid);
                        loadDivData(tabid);
                        ajaxTodo(tabid);
                        inputBindEvent(tabid);

                        initPages(tabid, data.getCurrent());
                        try {
                            if ($callback != "") {
                                if ($.isFunction(eval($callback))) {
                                    $callback = eval($callback + '(datas)');
                                    if ($callback == false) {
                                        return;
                                    }
                                }
                            }
                        } catch (e) {
                            if (console) {
                                console.log("%s", e.message);
                            }
                        }
                    }
                });
            }
        });
    });
}

/**
 * a[target=ajaxDone],div[target=ajaxDone]添加点击事件，点击后通过ajax访问数据，协议为json
 * 请求判断和返回结果自行处理
 * step1.a、div标签配置target="ajaxDone"属性
 * step1.a、div标签添加click事件
 * param target-检索属性，配置ajaxDone,必填
 * param loading-自动加载，配置auto,默认空，可选
 * param href-访问路径,默认空,必填
 * param formId-表单ID，配置后将表单内容序列化,默认空，可选
 * param validForm-ajax前处理，配置function名称,默认空，可选
 * param callback-ajax后处理，配置function名称,默认空，可选
 * param method-协议,默认GET，可选
 * return input[target=calendar]，input标签添加日期控件
 */
function ajaxTodo(divClass) {
    var varDivClass;
    if (divClass == undefined || divClass == "" || divClass == null) {
        varDivClass = "a[target=ajaxDone],div[target=ajaxDone]";
    } else {
        varDivClass = "." + divClass + " a[target=ajaxDone],div[target=ajaxDone]";
    }
    $(varDivClass).each(function () {
        var $this = $(this);
        var loading = $this.attr("loading") || "";
        if (loading == "auto") {
            var method = $this.attr("method") || "GET";
            var url = unescape($this.attr("href")) || "";
            var formId = unescape($this.attr("formId")) || "";
            var tabid = unescape($this.attr("rel")) || "";//在此id的div中加载loading
            var $callback = $this.attr("callback") || function () {
            };
            if (!$.isFunction($callback)) $callback = eval('(' + $callback + ')');
            var $validForm = $this.attr("validForm") || "";
            var loadingFlag = $this.attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
            var data = "";
            if (formId != "") {
                var $form = $("#" + formId);
                if ($form != null) {
                    data = $form.serializeArray();
                }
            }
            doAjax({
                url: url,
                dataType: "json",
                validForm: $validForm,
                type: method,
                data: data,
                tabid: tabid,
                loading: loadingFlag,
                callback: $callback
            });
        } else {
            $this.click(function (event) {
                var method = $(this).attr("method") || "GET";
                var url = unescape($(this).attr("href")) || "";
                var formId = unescape($(this).attr("formId")) || "";
                var $callback = $(this).attr("callback") || function () {
                };
                if (!$.isFunction($callback)) $callback = eval('(' + $callback + ')');
                var $validForm = $(this).attr("validForm") || "";
                var loadingFlag = $(this).attr("loadingFlag") || "";//top、joy、none，其他默认为全显示
                var data = "";
                if (formId != "") {
                    var $form = $("#" + formId);
                    if ($form != null) {
                        data = $form.serializeArray();
                    }
                }
                doAjax({
                    url: url,
                    timeout: 10000,
                    dataType: "json",
                    validForm: $validForm,
                    type: method,
                    data: data,
                    loading: loadingFlag,
                    callback: $callback
                });
                event.preventDefault();
            });
        }
    });
}

/**
 * ajax提交公用类，拦截返回值并同一提示文案
 * @param options
 */
function doAjax(options) {
    var op = $.extend({
        type: "GET",
        url: null,
        data: null,
        dataType: "html",
        cache: false,
        callback: null,
        timeout: 40000,
        validForm: "",
        async: true,
        tabid: "",
        loading: "",
        hasFile: false
    }, options);

    if (op.url.indexOf('javascript') == -1 && op.url != null && op.url != "") {
        /*try{*/
        if (op.validForm != "") {
            if ($.isFunction(eval(op.validForm))) {
                var validForm = eval(op.validForm + '()');
                if (validForm == false) {
                    return;
                }
            }
        }

        /*}catch(e){
            if(console){
                console.log("%s", e.message);
            }
        }*/
        //如果为文件上传，使用FormData对象，需要设置processData和contentType字段
        var processData = true;
        var contentType = "application/x-www-form-urlencoded";
        if (op.hasFile) {
            processData = false;
            contentType = false;
        }

        $.ajax({
            type: op.type,
            url: op.url,
            data: op.data,
            dataType: op.dataType,
            cache: op.cache,
            async: op.async,
            timeout: op.timeout,
            processData: processData,
            contentType: contentType,
            beforeSend: function (e) {
//				if(op.tabid!=null&&op.tabid!=""&&op.tabid!="undifined"){
                if (op.loading) {
                    if (op.loading == "all") {
//							$("#web_joy_loading").remove();
//							$(document).find("html").append('<div id="web_joy_loading" ><div style="position: absolute; margin: auto;top: 40%;left: 0;bottom: 0;right: 0;background:url(//static.360buyimg.com/finance/platform/bizCredit/1.0.0/css/i/loading-joy.gif) top center no-repeat"></div></div>');
                        var htmlStr = $('<div class="joy-mask"><span class="loading-joy"></span></div>');
                        $("body").append(htmlStr);
                        htmlStr.animate({opacity: 0.1}, 0);
                        $('<div id="web_loading" style="z-index:99999;width:100%;top:0;position:fixed;"><div style="width:0;height:5px;background:#0587FF;"></div></div>').appendTo($(document).find("html"));
                        $("#web_loading div").animate({width: "100%"}, 1000, function () {
                        });
                    } else if (op.loading == "joy") {
//							$("#web_joy_loading").remove();
//							$(document).find("html").append('<div id="web_joy_loading" ><div style="position: absolute; margin: auto;top: 40%;left: 0;bottom: 0;right: 0;background:url(//static.360buyimg.com/finance/platform/bizCredit/1.0.0/css/i/loading-joy.gif) top center no-repeat"></div></div>');
                        var htmlStr = $('<div class="joy-mask"><span class="loading-joy"></span></div>');
                        $("body").append(htmlStr);
                        htmlStr.animate({opacity: 0.1}, 0);
                    } else if (op.loading == "top") {
                        $('<div id="web_loading" style="z-index:99999;width:100%;top:0;position:fixed;"><div style="width:0;height:5px;background:#0587FF;"></div></div>').appendTo($(document).find("html"));
                        $("#web_loading div").animate({width: "100%"}, 1000, function () {
                        });
                    } else if (op.loading == "none") {

                    }
                } else {
                    var htmlStr = $('<div class="joy-mask"><span class="loading-joy"></span></div>');
                    $("body").append(htmlStr);
                    htmlStr.animate({opacity: 0.1}, 0);
//						$("#web_joy_loading").remove();
//						$(document).find("html").append('<div id="web_joy_loading" ><div style="position: absolute; margin: auto;top: 50%;left: 0;bottom: 0;right: 0;background:url(//static.360buyimg.com/finance/platform/bizCredit/1.0.0/css/i/loading-joy.gif) top center no-repeat"></div></div>');
                    $('<div id="web_loading" style="z-index:99999;width:100%;top:0;position:fixed;"><div style="width:0;height:5px;background:#0587FF;"></div></div>').appendTo($(document).find("html"));
                    $("#web_loading div").animate({width: "100%"}, 1000, function () {
                    });
                }
//				}
            },
            success: function (datas) {

                if (typeof(datas) == "string") {
                    if (datas.match("^\{(.+:.+,*){1,}\}$")) {
                        //通过这种方法可将字符串转换为对象
                        var rdata = jQuery.parseJSON(datas);
                        if (!ajaxTips(rdata, op.target))
                            return;
                    }
                } else {
                    //json obejct
                    if (!ajaxTips(datas, op.target))
                        return;
                }
                //$("#web_joy_loading div").fadeOut(100);
                if (jQuery.isFunction(op.callback)) op.callback(datas);
            },
            error: function () {
                //$("#web_joy_loading div").fadeOut(100);
                tipsController("网络异常，请稍后重试！", "", "javascript:;", "关闭");
            }
        });
    }
}

function ajaxTipsWithReturnUrl(rdata, returnUrl) {

    // var loginUrl = "//biz.jd.com/login/index.do?code=00006&ticket=credit_portal&return=";

    if (rdata.error == "NotLogin") {
        $.ajax({
            type: "get",
            async: false,
            url: "//biz.jd.com/login/checkLoginedUser.do",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpCallback: "loginCheck",
            success: function (data) {
                if (data.code == 00000) {
                    if (returnUrl == null) {
                        tipsController("绑定企业钱包账号后才能使用企业征信服务!", "", "//biz.jd.com/login/binding/binding.do?return=" + encodeURIComponent(location.href), "去绑定");
                    } else {
                        tipsController("绑定企业钱包账号后才能使用企业征信服务!", "", "//biz.jd.com/login/binding/binding.do?return=" + encodeURIComponent(window.location.host + returnUrl), "去绑定");
                    }

                    return false;
                }
            },
            error: function () {
            }
        });

        if (returnUrl == null) {
            tipsController("登录系统以后才能查看企业详细信息!", "", contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.href), "登录", true);
        } else {
            tipsController("登录系统以后才能查看企业详细信息!", "", contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.host + returnUrl), "登录", true);
        }
        return false;

    }

    if (rdata.code == "401") {
        if (returnUrl == null) {
            tipsController("登录系统以后才能查看企业详细信息!", "", contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.href), "登录", true);
        } else {
            tipsController("登录系统以后才能查看企业详细信息!", "", contextPath + "/login?returnUrl=" + encodeURIComponent(window.location.host + returnUrl), "登录", true);
        }
        return false;
    } else if (rdata.code == "403" || rdata.code == "500") {
        var title = "操作失败";
        var msg = "";
        var href = "javascript:void(0);";
        var btnText = "关闭";
        var blank = false;
        if (rdata.data != null && rdata.data != "" && rdata.data != "null" && rdata.data != undefined) {
            if (rdata.data.title != "" && rdata.data.title != "null" && rdata.data.title != undefined) {
                title = rdata.data.title;
            }
            if (rdata.data.msg != "" && rdata.data.msg != "null" && rdata.data.msg != undefined) {
                msg = rdata.data.msg;
            }
            if (rdata.data.href != "" && rdata.data.href != "null" && rdata.data.href != undefined) {
                href = rdata.data.href;
            }
            if (rdata.data.btnText != "" && rdata.data.btnText != "null" && rdata.data.btnText != undefined) {
                btnText = rdata.data.btnText;
            }
            if (rdata.data.blank == "OPEN_TAB") {
                blank = true;
            }
        }
        tipsController(title, msg, href, btnText, blank);

        return false;
    } else if (rdata.code == "204") {
        var title = "操作失败";
        var msg = "";
        var href = "javascript:;";
        var btnText = "关闭";
        var blank = false;
        var onclick = "";
        if (rdata.data != null && rdata.data != "" && rdata.data != "null") {
            if (rdata.data.title != "" && rdata.data.title != "null") {
                title = rdata.data.title;
            }
            if (rdata.data.msg != "" && rdata.data.msg != "null") {
                msg = rdata.data.msg;
            }
            if (rdata.data.href != "" && rdata.data.href != "null") {
                href = rdata.data.href;
            }
            if (rdata.data.btnText != "" && rdata.data.btnText != "null") {
                btnText = rdata.data.btnText;
            }
            if (rdata.data.onclick != "" && rdata.data.onclick != "null") {
                onclick = rdata.data.onclick;
            }
            if (rdata.data.blank == "OPEN_TAB") {
                blank = true;
            }
        }
        if (onclick !== null && onclick !== undefined && onclick !== ''){
            tipsController(title, msg, href, btnText, blank, onclick);
        }else {
            tipsController(title, msg, href, btnText, blank);
        }

        return false;
    } else if (rdata.code == "405") {
        showLayerRegister();
        return false;
    } else if (rdata.code == "400") {
        var title = "参数错误";
        var msg = "";
        var href = "javascript:;";
        var btnText = "关闭";
        var blank = false;
        if (rdata.msg != "" && rdata.msg != "null") {
            msg = rdata.msg;
        }
        tipsController(title, msg, href, btnText, blank);
        return false;
    }
    return true;
}

function ajaxTips(rdata, target) {
    return ajaxTipsWithReturnUrl(rdata, target);
}


function showLayerRegister() {
    $("#protocolName").html("用户注册服务协议");
    seajs.use('financial/common/module/popup/1.0.0/js/popup', function (pop) {
        $(".protocol-container").load(contextPath + "html/protocolRegister.htm .contract-details-box", function () {
            pop.showLayer($('.protocol-popup'));
        });
    });
}

function tipsController(title, msg, href, btnText, blank) {
    tipsController(title, msg, href, btnText, blank, null)
}

function tipsController(title, msg, href, btnText, blank, onclick) {
    $(".-panelboxAlert").remove();
    $(".windowmask").remove();
    if (onclick !== null && onclick !== undefined && onclick !== ''){
        $(messageContent(title, msg, href, btnText,onclick)).appendTo($(document).find("html"));
    }else {
        $(messageContent(title, msg, href, btnText)).appendTo($(document).find("html"));
    }

    if (blank == true) {
        $(".sign-out").attr("target", "_blank");
    }
    $(".windowmask").show();
    $(".-panelboxAlert").show();
    $(".sign-out").click(function () {
        $(".-panelboxAlert").hide();
        if($('.panelboxR:visible').length<1){
            $(".windowmask").remove();
        }
    });
    $(".panelclose").click(function () {
        $(".-panelboxAlert").hide();
        if($('.panelboxR:visible').length<1){
            $(".windowmask").remove();
        }
    });
}

/**
 * 弹窗
 * @param tip 标题
 * @param message 内容
 * @param href 跳转地址
 * @param btnText 按钮文字
 * @returns {String}
 */
function messageContent(tip, message, href, btnText) {//type:1成功 type:2失败
    return '<div class="windowmask" style="opacity: 0.5;"></div>' +
        '<div class="panelboxR -panelboxAlert" style="display:block;top:50%;left:50%; margin-left: -265px; margin-top: -145px;position: fixed;">' +
        '<div class="panelwrap">' +
        '<div class="paneltitle">' +
        '<span class="text">提示</span>' +
        '<span class="panelclose"></span>' +
        '</div>' +
        '<div class="panelcon clearfix" style="width: 520px;">' +
        '<div class="panel-text-area">' +
        '<span class="text-tips " style="max-width: 500px;padding-left:0px;">' +
        '<i class="tips"></i>' +
        tip +
        '</span>' +
        '<p class="sub-text">' + message + '</p>' +
        '</div>' +
        '<div class="panel-btn">' +
        '<a href="' + href + '"  class="sign-out">' + btnText + '</a>' +
        '</div>' +
        '</div>' +
        ' </div>' +
        '</div>';
}


/**
 * 弹窗
 * @param tip 标题
 * @param message 内容
 * @param href 跳转地址
 * @param btnText 按钮文字
 * @returns {String}
 */
function messageContent(tip, message, href, btnText,onclick) {//type:1成功 type:2失败
    return '<div class="windowmask" style="opacity: 0.5;"></div>' +
        '<div class="panelboxR -panelboxAlert" style="display:block;top:50%;left:50%; margin-left: -265px; margin-top: -145px;position: fixed;">' +
        '<div class="panelwrap">' +
        '<div class="paneltitle">' +
        '<span class="text">提示</span>' +
        '<span class="panelclose"></span>' +
        '</div>' +
        '<div class="panelcon clearfix" style="width: 520px;">' +
        '<div class="panel-text-area">' +
        '<span class="text-tips " style="max-width: 500px;padding-left:0px;">' +
        '<i class="tips"></i>' +
        tip +
        '</span>' +
        '<p class="sub-text">' + message + '</p>' +
        '</div>' +
        '<div class="panel-btn">' +
        '<a href="' + href + '"  class="sign-out" onclick="'+onclick+'">' + btnText + '</a>' +
        '</div>' +
        '</div>' +
        ' </div>' +
        '</div>';
}

//日期格式化
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//加载数据分页
function initClientDataPage(scopeClass, pageCount) {
    if (pageCount == undefined) {
        pageCount = 10;
    }
    var selector = "";
    if (scopeClass == "") {
        selector = "tbody.page";
    } else {
        selector = "." + scopeClass + " tbody.page";
    }
    $(selector).each(function () {
        var pageBody = $(this);
        var rowNum = $(pageBody).attr("rowNum");
        if (rowNum == 0) {
            $(pageBody).removeClass("dis-none");
            return;
        }
        var allTr = $(pageBody).children();
        var bodyShow = $("<tbody></tbody>");
        for (var i = 0; i < pageCount; i++) {
            bodyShow.append(allTr[i]);
        }
        $(pageBody).before(bodyShow);
        //将数据保存在tbody里
        $(pageBody).data("allTr", allTr);

        var wrapper = $('<div class="page-wrap"></div>');
        $(wrapper).pagination({
            totalData: rowNum,
            showData: pageCount,
            activeCls: "curr",
            prevCls: 'up-page',
            nextCls: 'down-page',
            coping: true,
            callback: function (data) {
                $(pageBody).prev().remove();
                var cur = data.getCurrent();
                var bodyShow = $("<tbody></tbody>");
                for (var i = (cur - 1) * pageCount; i < cur * pageCount; i++) {
                    bodyShow.append(allTr[i]);
                }
                $(pageBody).before(bodyShow);
            }
        });
        var page = $('<div class="page2 m0 clearfix"></div>');
        page.append(wrapper);
        $(pageBody).parent().after(page);
    });
}


// 扩展jquery静态方法
$.extend({
    // 公用alert
    alert: function (t, c, b) {

        var title, content, callback

        if (arguments.length == 1) {
            content = arguments[0]
        } else if (arguments.length == 2) {
            if (arguments[1] instanceof Function) {
                content = arguments[0]
                callback = arguments[1]
            } else {
                title = arguments[0]
                content = arguments[1]
            }
        } else if (arguments.length > 2) {
            title = arguments[0]
            content = arguments[1]
            callback = arguments[2]
        } else {
            return false
        }

        var domstr = '<div class="panelboxR alert" style="display: block;top: 50%;left: 50%">\n' +
            '          <div class="panelwrap">\n' +
            '              <div class="paneltitle">\n' +
            '                  <span class="text">提示</span>\n' +
            '                  <span class="panelclose"></span>\n' +
            '              </div>\n' +
            '              <div class="panelcon clearfix">'
        if (title) {
            domstr += ' <div class="dialog-title">' + title + '</div>'
        }
        domstr += '                  <div class="dialog-content">\n' +
            '                      <span>' + content + '</span>\n' +
            '                  </div>\n' +
            '                  <div class="panel-btn">\n' +
            '                      <a href="javascript:;" class="sure">确定</a>\n' +
            '                  </div>\n' +
            '              </div>\n' +
            '          </div>\n' +
            '      </div>'

        var mask = '<div class="windowmask" style="opacity: 0.5;"></div>'

        $('.windowmask').remove()
        $('body').append(mask)

        $('body').find('.alert').remove().end().append(domstr)

        var _this = $('.alert.panelboxR')
        var left = _this.outerWidth() / 2
        var top = _this.outerHeight() / 2
        _this.css({
            'margin-left': '-' + left + 'px',
            'margin-top': '-' + top + 'px'
        })

        $('body .windowmask').off().on('click', function () {
            event.preventDefault()
            event.stopPropagation()
            $('.panelboxR').hide(0)
            if($('.panelboxR:visible').length<1){
                $(".windowmask").remove();
            }
        })

        $('.alert.panelboxR').off().on('click', '.panelclose', function () {
            event.preventDefault()
            event.stopPropagation()
            $($('.windowmask')[0]).remove()
            $('.alert.panelboxR').hide(0)
        }).on('click', '.sure', function () {
            event.preventDefault()
            event.stopPropagation()
            $('.alert.panelboxR').hide(0)
            if($('.panelboxR:visible').length<1){
                $(".windowmask").remove();
            }
            if (callback) callback()
        })


    },
    confirm: function (t, c, y, n) {
        var title, content, sure, cancel

        if (arguments.length == 1) {
            content = arguments[0]
        } else if (arguments.length == 2) {
            if (arguments[1] instanceof Function) {
                content = arguments[0]
                sure = arguments[1]
            } else {
                title = arguments[0]
                content = arguments[1]
            }
        } else if (arguments.length == 3) {
            if (arguments[1] instanceof Function) {
                content = arguments[0]
                sure = arguments[1]
                cancel = arguments[2]
            } else {
                title = arguments[0]
                content = arguments[1]
                sure = arguments[2]
            }
        } else if (arguments.length > 3) {
            title = arguments[0]
            content = arguments[1]
            sure = arguments[2]
            cancel = arguments[3]
        } else {
            return false
        }

        var domstr = '<div class="panelboxR confirm" style="display: block;top: 50%;left: 50%">\n' +
            '          <div class="panelwrap">\n' +
            '              <div class="paneltitle">\n' +
            '                  <span class="text">提示</span>\n' +
            '                  <span class="panelclose"></span>\n' +
            '              </div>\n' +
            '              <div class="panelcon clearfix">'
        if (title) {
            domstr += ' <div class="dialog-title">' + title + '</div>'
        }
        domstr += '                  <div class="dialog-content">\n' +
            '                      <span>' + content + '</span>\n' +
            '                  </div>\n' +
            '                  <div class="panel-btn">\n' +
            '                      <a href="javascript:;" class="sure">确定</a>\n' +
            '                      <a href="javascript:;" class="cancel">取消</a>\n' +
            '                  </div>\n' +
            '              </div>\n' +
            '          </div>\n' +
            '      </div>'

        var mask = '<div class="windowmask" style="opacity: 0.5;"></div>'

        $('body').find('.windowmask').remove().end().append(mask)

        $('body').find('.confirm').remove().end().append(domstr)

        var _this = $('.confirm.panelboxR')
        var left = _this.outerWidth() / 2
        var top = _this.outerHeight() / 2
        _this.css({
            'margin-left': '-' + left + 'px',
            'margin-top': '-' + top + 'px'
        })

        $('body .windowmask').off().on('click', function () {
            event.preventDefault()
            event.stopPropagation()
            $('.panelboxR').hide(0)
            $('.windowmask').remove()
        })

        $('.confirm.panelboxR').off().on('click', '.panelclose', function () {
            event.preventDefault()
            event.stopPropagation()
            $($('.windowmask')[0]).remove()
            $('.confirm.panelboxR').hide(0)
        }).on('click', '.sure', function () {
            event.preventDefault()
            event.stopPropagation()
            $($('.windowmask')[0]).remove()
            $('.confirm.panelboxR').hide(0)
            if (sure) sure()
        }).on('click', '.cancel', function () {
            event.preventDefault()
            event.stopPropagation()
            $($('.windowmask')[0]).remove()
            $('.confirm.panelboxR').hide(0)
            if (cancel) cancel()
        })
    }
})