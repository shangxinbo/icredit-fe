<!DOCTYPE html>
<html>
<head>
    <#include "/common/config.ftl">
        <link rel="stylesheet" href="/static/css/wen.css" />
</head>
<body>
    <div class="common-body-container" id="insight_page">
        <#include "/common/header.ftl">
            <div class="products-server-center clearfix">
                <#include "./slider-left.ftl">
                    <div class="pro-server-right">
                        <div class="server-infor-con">
                            <div class="server-search-area">
                                <div class="sample-title no-bottom clearfix">
                                    <h2>
                                        <a href="/welink/analysis/index" class="back-title">企业分析&nbsp;/</a>
                                        <a href="/welink/analysis/detail" class="back-title">&nbsp;总览&nbsp;/</a> 指标分析</h2>
                                    <div class="sample-title-btn">
                                        <div class="select-box w100-select h30-select">
                                            <div class="consignee-infor">
                                                <div class="show-consignee-infor show-title">
                                                    <p>2017年8月</p>
                                                </div>
                                                <div class="hide-consignee-infor" style="display: none;">
                                                    <div class="consignee-title show-title">
                                                        <p>2017年8月</p>
                                                    </div>
                                                    <i class="arrow arrow-up"></i>
                                                    <ul>
                                                        <li class="ad-list">
                                                            <p>2017年8月</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>2017年7月</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>2017年6月</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>2017年5月</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>2017年4月</p>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <i class="arrow arrow-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="select-list-box">
                                    <div class="select-ul clearfix">
                                        <a href="javascript:;" class="select-title-list clearfix choose-item">业务指标
                                            <i class="cut-line"></i>
                                        </a>
                                        <a href="javascript:;" class="select-title-list clearfix">财务指标</a>
                                    </div>
                                    <div class="select-line-area">
                                        <div class="select-line" style="left: 0px;"></div>
                                    </div>
                                </div>
                                <div class="index-table-area">
                                    <div class="index-analysis-table" style="display: block">
                                        <table class="lengthwise-table no-border-table mt15">
                                            <colgroup>
                                                <col width="25%" />
                                                <col width="20%" />
                                                <col width="20%" />
                                                <col width="20%" />
                                                <col width="" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th class="pl20">指标</th>
                                                    <th>本期(2017-07)</th>
                                                    <th>上期(2017-06)</th>
                                                    <th>平均(近12个月)</th>
                                                    <th>评级</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="pl20">前5大供应商集中度(%)</td>
                                                    <td>-</td>
                                                    <td>82.62%</td>
                                                    <td>87.49%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">前5大客户集中度(%)</td>
                                                    <td>-</td>
                                                    <td>100.00%</td>
                                                    <td>100.00%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">库存周转率(次)</td>
                                                    <td>-</td>
                                                    <td>11.58%</td>
                                                    <td>9.80%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应付账款周转率(次)</td>
                                                    <td>-</td>
                                                    <td>0.04%</td>
                                                    <td>0.00%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应收账款周转率(次)</td>
                                                    <td>-</td>
                                                    <td>0.07%</td>
                                                    <td>0.01%</td>
                                                    <td>-</td>
                                                </tr>


                                                <tr>
                                                    <td class="pl20">毛利率(%)</td>
                                                    <td>-</td>
                                                    <td>-1,824.89%</td>
                                                    <td>-1,824.89%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">采购退货率(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">销售退货率(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">库存余额同比增长(%)</td>
                                                    <td>18.68%</td>
                                                    <td>-28.21%</td>
                                                    <td>-8.16%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">库存余额环比增长(%)</td>
                                                    <td>43.43%</td>
                                                    <td>-21.95%</td>
                                                    <td>2.59%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="pl20">采购付款金额同比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">采购付款金额环比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应付账款金额同比增长(%)</td>
                                                    <td>16.21%</td>
                                                    <td>66.80%</td>
                                                    <td>37.85%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应付账款金额环比增长(%)</td>
                                                    <td>-24.45%</td>
                                                    <td>20.70%</td>
                                                    <td>2.35%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">差</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">采购金额同比增长(%)</td>
                                                    <td>-</td>
                                                    <td>10,403.02%</td>
                                                    <td>3,376.34%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">采购金额环比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-24.27%</td>
                                                    <td>466.07%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">销售收款金额同比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">销售收款金额环比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应收账款金额同比增长(%)</td>
                                                    <td>-56.89%</td>
                                                    <td>-64.06%</td>
                                                    <td>-34.62%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">应收账款金额环比增长(%)</td>
                                                    <td>10.43%</td>
                                                    <td>-34.07%</td>
                                                    <td>-0.57%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td class="pl20">销售金额同比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">销售金额环比增长(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td class="pl20">销售采购比(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="index-analysis-table">
                                        <table class="lengthwise-table no-border-table mt15">
                                            <colgroup>
                                                <col width="25%" />
                                                <col width="20%" />
                                                <col width="20%" />
                                                <col width="20%" />
                                                <col width="" />
                                            </colgroup>
                                            <thead>
                                                <tr>
                                                    <th class="pl20">指标</th>
                                                    <th>本期(2017-07)</th>
                                                    <th>上期(2017-06)</th>
                                                    <th>平均 (近12个月)</th>
                                                    <th>评级</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>成本费用占营业收入比重(%)</td>
                                                    <td>79.14%</td>
                                                    <td>90.10%</td>
                                                    <td>93.67%</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00017">存货周转率(次)</td>
                                                    <td>32.46%</td>
                                                    <td>26.71%</td>
                                                    <td>26.93%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00016">总资产增长率(%)</td>
                                                    <td>2.83%</td>
                                                    <td>1.26%</td>
                                                    <td>1.48%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00015">销售(营业)利润增长率(%)</td>
                                                    <td>148.06%</td>
                                                    <td>35.75%</td>
                                                    <td>-39.67%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00014">销售(营业)增长率(%)</td>
                                                    <td>15.15%</td>
                                                    <td>21.86%</td>
                                                    <td>23.84%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00013">带息负债比率(%)</td>
                                                    <td>22.60%</td>
                                                    <td>22.79%</td>
                                                    <td>25.19%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00012">现金流动负债比率(%)</td>
                                                    <td>0.01%</td>
                                                    <td>0.00%</td>
                                                    <td>0.01%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00011">速动比率(%)</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00010">资产负债率(%)</td>
                                                    <td>89.28%</td>
                                                    <td>91.03%</td>
                                                    <td>94.01%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">较差</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00009">资产现金回收率(%)</td>
                                                    <td>0.01%</td>
                                                    <td>0.00%</td>
                                                    <td>0.01%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00008">流动资产周转率(次)</td>
                                                    <td>0.16%</td>
                                                    <td>0.14%</td>
                                                    <td>0.13%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00007">总资产周转率(次)</td>
                                                    <td>0.12%</td>
                                                    <td>0.11%</td>
                                                    <td>0.09%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00006">资本收益率(%)</td>
                                                    <td>16.98%</td>
                                                    <td>7.05%</td>
                                                    <td>6.09%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00005">成本费用利润率(%)</td>
                                                    <td>25.20%</td>
                                                    <td>10.29%</td>
                                                    <td>11.02%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00004">盈余现金保障倍数</td>
                                                    <td>0.00%</td>
                                                    <td>0.00%</td>
                                                    <td>0.00%</td>
                                                    <td>
                                                        <span class="level-label label-col-three">一般</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00003">销售(营业)利润率(%)</td>
                                                    <td>19.97%</td>
                                                    <td>9.27%</td>
                                                    <td>5.87%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00002">总资产报酬率(%)</td>
                                                    <td>2.40%</td>
                                                    <td>0.99%</td>
                                                    <td>0.94%</td>
                                                    <td>
                                                        <span class="level-label label-col-one">优秀</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td id="FINI00001">净资产收益率(%)</td>
                                                    <td>25.01%</td>
                                                    <td>12.61%</td>
                                                    <td>16.58%</td>
                                                    <td>
                                                        <span class="level-label label-col-two">良好</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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