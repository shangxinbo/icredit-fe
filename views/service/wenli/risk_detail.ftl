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
                            <!--<h3 class="server-infor-title">中证码查询</h3>-->
                            <div class="server-infor-con">
                                <div class="server-search-area">
                                    <div class="sample-title clearfix">
                                        <h2>
                                            <a href="" class="back-title">风控预警 /</a> 预警详情</h2>
                                    </div>
                                    <div class="sample-main-con">
                                        <div class="company-name-t clearfix">
                                            <h3>sudantestAA02</h3>
                                            <div class="state-area">
                                                <span>预警编号：
                                                    <em>T1502-0001</em>
                                                </span>
                                                <span>状态：
                                                    <em>已处理</em>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="sample-table-box">
                                            <table class="four-transverse-table">
                                                <colgroup>
                                                    <col width="20%" />
                                                    <col width="30%" />
                                                    <col width="20%" />
                                                    <col width="30%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <td class="t-head">授信银行</td>
                                                        <td>招商银行</td>
                                                        <td class="t-head">授信额度(万元)</td>
                                                        <td>20,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="t-head">已贷款金额(万元)</td>
                                                        <td>20,000</td>
                                                        <td class="t-head">年利率</td>
                                                        <td>10%</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="t-head">已还款金额(万元)</td>
                                                        <td>20,000</td>
                                                        <td class="t-head">授信开始日期</td>
                                                        <td>2016-04-25</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="t-head">已逾期金额(万元)</td>
                                                        <td>20,000</td>
                                                        <td class="t-head">授信结束日期</td>
                                                        <td>2016-08-25</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="warning-details-box clearfix">
                                        <div class="left-warning">
                                            <i class="warning-icon"></i>
                                        </div>
                                        <div class="right-warning-details">
                                            <h3>出账单号CZ00001092发生逾期</h3>
                                            <p>2015年7月1日，客户sudantestAA02发生欠款50万，逾期三个月未还。</p>
                                            <p>sudantestAA02 2015年1月1日成功申请授权，授信金额100万，授信利率11%，授信开始日期2015年1月1日授信结束日期2015年12月31日，授信有效期一年。</p>
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