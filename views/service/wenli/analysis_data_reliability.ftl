<!DOCTYPE html>
<html>
<head>
    <#include "/common/config.ftl">
    <link rel="stylesheet" href="/static/css/wen.css"/>
</head>
<body>
    <div class="common-body-container">
        <#include "/common/header.ftl">
        <div class="products-server-center clearfix">
            <#include "./slider-left.ftl">
            <div class="pro-server-right">
                <div class="server-infor-box">
                    <div class="server-infor-con">
                        <div class="sample-title clearfix">
                            <h2><a href="/welink/analysis/index" class="back-title">企业分析&nbsp;/</a><a href="/welink/analysis/detail" class="back-title">&nbsp;总览&nbsp;/</a> 数据可信度分析</h2>
                        </div>
                        <div class="sample-main-con">
                            <div class="company-name-t clearfix"><h3>sudantestAA02</h3></div>
                            <div class="table-chart-area clearfix">
                                <div class="s-table fl">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th colspan="2">指标项名称</th>
                                                <th>权重</th>
                                                <th>得分</th>
                                                <th>评级</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td colspan="2">销售数据可信度</td>
                                            <td>10%</td>
                                            <td>40.00</td>
                                            <td>较差</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">采购数据可信度</td>
                                            <td>10%</td>
                                            <td>72.00</td>
                                            <td>良好</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">付款数据一致性</td>
                                            <td>10%</td>
                                            <td>100.00</td>
                                            <td>优秀</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">收款款数据一致性</td>
                                            <td>35%</td>
                                            <td>89.00</td>
                                            <td>优秀</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">库存数据一致性</td>
                                            <td>35%</td>
                                            <td>50</td>
                                            <td>较差</td>
                                        </tr>
                                        <tr>
                                            <td><b>年月</b></td>
                                            <td>2017-07</td>
                                            <td><b>合计</b></td>
                                            <td>46.50</td>
                                            <td>良好</td>
                                        </tr>
                                        </tbody>

                                    </table>
                                </div>
                                <div class="chart-img-box fl">
                                    <div id="reliability_chart"></div>
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
<script src="/static/js/lib/echarts.min.js"></script>
<script src="/static/js/wenli.js"></script>
</body>
</html>
