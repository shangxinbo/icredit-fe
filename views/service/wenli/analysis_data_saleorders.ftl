<!DOCTYPE html>
<html>
<head>
    <#include "/common/config.ftl">
    <link rel="stylesheet" href="/static/css/wen.css" />
</head>
<body>
    <div class="common-body-container" id="data_page">
        <#include "/common/header.ftl">
            <div class="products-server-center clearfix">
                <#include "./slider-left.ftl">
                    <div class="pro-server-right">
                        <div class="server-search-area">
                            <div class="sample-title clearfix">
                                <h2>
                                    <a href="/welink/analysis/index" class="back-title">企业分析&nbsp;/</a>
                                    <a href="/welink/analysis/detail" class="back-title">&nbsp;总览&nbsp;/</a> 明细数据</h2>
                                <div class="sample-title-btn">
                                    <div class="search-sample-btn">
                                        <a href="javascript:void(0)">
                                            <i class="s-down-load-icon"></i>下载</a>
                                    </div>
                                </div>
                            </div>
                            <div class="sample-main-con">
                                <div class="search-sample-area clearfix">
                                    <div class="sample-s-box clearfix">
                                        <div class="key">分组：</div>
                                        <div class="val">
                                            <div class="select-box w100-select">
                                                <div class="consignee-infor">
                                                    <div class="show-consignee-infor show-title">
                                                        <p>按供应商分组</p>
                                                    </div>
                                                    <div class="hide-consignee-infor" style="display: none;">
                                                        <div class="consignee-title show-title">
                                                            <p>按供应商分组</p>
                                                        </div>
                                                        <i class="arrow arrow-up"></i>
                                                        <ul>
                                                            <li class="ad-list">
                                                                <p>按客户分组</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>按时间分组</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>取消分组</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <i class="arrow arrow-down"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sample-s-box ml20 clearfix">
                                        <div class="key">时间：</div>
                                        <div class="val">
                                            <div class="select-box w100-select">
                                                <div class="consignee-infor">
                                                    <div class="show-consignee-infor show-title">
                                                        <p>所有时间</p>
                                                    </div>
                                                    <div class="hide-consignee-infor" style="display: none;">
                                                        <div class="consignee-title show-title">
                                                            <p>本月</p>
                                                        </div>
                                                        <i class="arrow arrow-up"></i>
                                                        <ul>
                                                            <li class="ad-list">
                                                                <p>本月</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>上月</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>本季度</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>上季度</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>本年</p>
                                                            </li>
                                                            <li class="ad-list">
                                                                <p>上年</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <i class="arrow arrow-down"></i>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="sample-s-box clearfix ml10">
                                        <div class="key">搜索：</div>
                                        <div class="val clearfix">
                                            <div class="search-sample-input fl">
                                                <input type="text" class="w240" placeholder="输入编码或者名称搜索" />
                                            </div>
                                            <div class="search-sample-btn fl">
                                                <a href="">
                                                    <i class="search-icon"></i>查询</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sample-table-box" id="saleorders" v-cloak>
                                    <table class="lengthwise-table no-border-table long-table mt15">
                                        <colgroup>
                                            <col width="35%" />
                                            <col width="12%" />
                                            <col width="12%" />
                                            <col width="13%" />
                                            <col width="13%" />
                                            <col width="" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th class="pl20 pointer">客户名称
                                                    <i class="double-down-icon ml2"></i>
                                                </th>
                                                <th class="pointer">客户编码</th>
                                                <th class="pointer">销售单号</th>
                                                <th class="pointer">未税金额 (元)</th>
                                                <th class="pointer">含税金额 (元)</th>
                                                <th class="pointer">业务时间</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in list">
                                                <td class="" colspan="6">
                                                    <div class="company-record-box">
                                                        <div class="company-title-box pl40">
                                                            <em class="up-icon up"></em>
                                                            <b>{{item.name}}</b>
                                                            <i>(共{{item.arr.length}}条或以上记录)</i>
                                                        </div>
                                                        <div class="company-record-table">
                                                            <table class="lengthwise-table no-border-table">
                                                                <colgroup>
                                                                    <col width="35%" />
                                                                    <col width="12%" />
                                                                    <col width="12%" />
                                                                    <col width="13%" />
                                                                    <col width="13%" />
                                                                    <col width="" />
                                                                </colgroup>
                                                                <tr v-for="val in item.arr">
                                                                    <td class="pl60">{{val.customerName}}</td>
                                                                    <td>{{val.customerCode}}</td>
                                                                    <td>{{val.saleOrderNo}}</td>
                                                                    <td>{{val.totalnetAmt | mathRound}}</td>
                                                                    <td>{{val.totalAmt | mathRound}}</td>
                                                                    <td>{{val.businessTime | dateFormat}}</td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class="page2 clearfix">
                                        <div class="page-wrap" id="pageWrap">
                                            <a href="javascript:void(0)" v-show="page!=1" class="up-page">
                                                <i class="prev-i">&lt;</i>
                                            </a>
                                            <a href="javascript:void(0)" :class="{curr:page==1}">1</a>
                                            <a href="javascript:void(0)" :class="{curr:page==2}">2</a>
                                            <a href="javascript:void(0)" :class="{curr:page==3}">3</a>
                                            <a href="javascript:void(0)" v-show="page!=3"  class="down-page">
                                                <i class="next-i">&gt;</i>
                                            </a>
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
    <script src="https://unpkg.com/vue"></script>
    <script src="/static/js/lib/echarts.min.js"></script>
    <script src="/static/js/mock-min.js"></script>
    <script src="/static/js/mock-data.js"></script>
    <script src="/static/js/wenli.js"></script>
</body>
</html>