<!DOCTYPE html>
<html>
<head>
    <#include "/common/config.ftl">
        <link rel="stylesheet" href="/static/css/wen.css" />
</head>
<body>
    <div class="common-body-container" id="reliability_page">
        <#include "/common/header.ftl">
            <div class="products-server-center clearfix">
                <#include "./slider-left.ftl">
                    <div class="pro-server-right">
                        <div class="server-infor-box">
                            <div class="server-infor-con">
                                <div class="server-search-area">
                                    <div class="sample-title clearfix">
                                        <h2>风控预警</h2>
                                    </div>
                                    <div class="sample-main-con">
                                        <div class="search-sample-area clearfix">
                                            <div class="sample-s-box clearfix">
                                                <div class="key">状态：</div>
                                                <div class="val">
                                                    <div class="select-box w100-select">
                                                        <div class="consignee-infor">
                                                            <div class="show-consignee-infor show-title">
                                                                <p>已关闭</p>
                                                            </div>
                                                            <div class="hide-consignee-infor" style="display: none;">
                                                                <div class="consignee-title show-title">
                                                                    <p>已关闭</p>
                                                                </div>
                                                                <i class="arrow arrow-up"></i>
                                                                <ul>
                                                                    <li class="ad-list">
                                                                        <p>已关闭</p>
                                                                    </li>
                                                                    <li class="ad-list">
                                                                        <p>未关闭</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <i class="arrow arrow-down"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sample-s-box clearfix ml20">
                                                <div class="key">日期：</div>
                                                <div class="val clearfix">
                                                    <div class="date-input-box">
                                                        <input type="text" placeholder="起始日期" />
                                                        <i class="date-icon"></i>
                                                    </div>
                                                    <span class="cell">至</span>
                                                    <div class="date-input-box">
                                                        <input type="text" placeholder="结束日期" />
                                                        <i class="date-icon"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sample-s-box clearfix ml10">
                                                <div class="key">企业：</div>
                                                <div class="val clearfix">
                                                    <div class="search-sample-input fl">
                                                        <input type="text" class="w170" placeholder="请输入企业名称查询" />
                                                    </div>
                                                    <div class="search-sample-btn fl">
                                                        <a href="">
                                                            <i class="search-icon"></i>查询</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sample-table-box">
                                            <table class="lengthwise-table no-border-table long-table mt15">
                                                <colgroup>
                                                    <col width="11%" />
                                                    <col width="15%" />
                                                    <col width="7%" />
                                                    <col width="8%" />
                                                    <col width="15%" />
                                                    <col width="12%" />
                                                    <col width="12%" />
                                                    <col width="7%" />
                                                    <col width="7%" />
                                                    <col width="" />
                                                </colgroup>
                                                <thead>
                                                    <tr>
                                                        <th class="pl20">编号</th>
                                                        <th>企业名称</th>
                                                        <th>类型</th>
                                                        <th>风险级别</th>
                                                        <th>说明</th>
                                                        <th>产生时间</th>
                                                        <th>处理时间</th>
                                                        <th>处理人员</th>
                                                        <th>状态</th>
                                                        <th>操作</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="pl20">T1502-0001</td>
                                                        <td>
                                                            <a href="" class="project-name" title="sudantestAA02">sudantestAA02</a>
                                                        </td>
                                                        <td>自动</td>
                                                        <td>
                                                            <span class="level-label level-one">一级</span>
                                                        </td>
                                                        <td>发生逾期</td>
                                                        <td>2014-10-1 12:00</td>
                                                        <td>2016-03-01 12:00</td>
                                                        <td>shangxinbo</td>
                                                        <td>未关闭</td>
                                                        <td>
                                                            <a href="/welink/risk/detail">查看</a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cut-area"></div>
            </div>
            <div class="footer-fix"></div>
    </div>
    <#include "/common/footer.ftl">
        <#include "./popups/editPJ.ftl">
            <script src="https://unpkg.com/vue"></script>
            <script src="/static/js/lib/echarts.min.js"></script>
            <script src="/static/js/mock-min.js"></script>
            <script src="/static/js/mock-data.js"></script>
            <script src="/static/js/wenli.js"></script>
</body>
</html>