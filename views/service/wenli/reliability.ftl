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
                                        <h2>数据可信度</h2>
                                    </div>
                                    <div class="analysis-con-box">
                                        <div class="reAnalysis-con clearfix">
                                            <p>数据可信度分析 （已分析7家企业）</p>
                                            <a href="javascript:void(0)">重新分析</a>
                                        </div>
                                        <div class="analysis-small-area mt50">
                                            <h3>
                                                <i class="blue-line"></i>指标分析</h3>
                                            <div class="analysis-details-box">
                                                <div class="analysis-charts-area clearfix">
                                                    <div class="chart-title">
                                                        <span>
                                                            <i class="col01"></i>优秀</span>
                                                        <span>
                                                            <i class="col02"></i>良好</span>
                                                        <span>
                                                            <i class="col03"></i>一般</span>
                                                        <span>
                                                            <i class="col04"></i>较差</span>
                                                        <span>
                                                            <i class="col05"></i>差</span>
                                                    </div>
                                                    <div class="chart-box fl">
                                                        <div id="zbAnalysis"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="analysis-small-area">
                                            <h3>
                                                <i class="blue-line"></i>数据可信度分析
                                            </h3>
                                            <div class="analysis-details-box">
                                                <div class="analysis-table-area">

                                                    <table class="lengthwise-table no-border-table long-table mt15">
                                                        <colgroup>
                                                            <col width="10%" />
                                                            <col width="20%" />
                                                            <col width="10%" />
                                                            <col width="10%" />
                                                            <col width="10%" />
                                                            <col width="10%" />
                                                            <col width="10%" />
                                                            <col width="" />
                                                        </colgroup>
                                                        <thead>
                                                            <tr>
                                                                <th class="pl20">编号</th>
                                                                <th>指标名称</th>
                                                                <th>优秀值</th>
                                                                <th>良好值</th>
                                                                <th>平均值</th>
                                                                <th>较低值</th>
                                                                <th>较差值</th>
                                                                <th>操作</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>CRED00001</td>
                                                                <td id="CRED00001name">销售数据可信度</td>
                                                                <td id="CRED00001Step1"><span>99.00</span></td>
                                                                <td id="CRED00001Step2"><span>98.00</span></td>
                                                                <td id="CRED00001Step3"><span>-13.00</span></td>
                                                                <td id="CRED00001Step4"><span>-13.00</span></td>
                                                                <td id="CRED00001Step5"></td>
                                                                <td>
                                                                    <a href="javascript:;" class="edit-pj">编辑</a>
                                                                    <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>CRED00002</td>
                                                                <td id="CRED00002name">采购数据可信度</td>
                                                                <td id="CRED00002Step1"><span>99.00</span></td>
                                                                <td id="CRED00002Step2"><span>98.50</span></td>
                                                                <td id="CRED00002Step3"><span>98.00</span></td>
                                                                <td id="CRED00002Step4"><span>55.50</span></td>
                                                                <td id="CRED00002Step5"><span>15.00</span></td>
                                                                <td>
                                                                    <a href="javascript:;" class="edit-pj">编辑</a>
                                                                    <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>CRED00003</td>
                                                                <td id="CRED00003name">付款数据一致性</td>
                                                                <td id="CRED00003Step1"><span>100.00</span></td>
                                                                <td id="CRED00003Step2"><span>100.00</span></td>
                                                                <td id="CRED00003Step3"><span>50.00</span></td>
                                                                <td id="CRED00003Step4"><span>-5.68</span></td>
                                                                <td id="CRED00003Step5"><span>-48.50</span></td>
                                                                <td>
                                                                    <a href="javascript:;" class="edit-pj">编辑</a>
                                                                    <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>CRED00004</td>
                                                                <td id="CRED00004name">收款款数据一致性</td>
                                                                <td id="CRED00004Step1"><span>100.00</span></td>
                                                                <td id="CRED00004Step2"><span>100.00</span></td>
                                                                <td id="CRED00004Step3"><span>38.47</span></td>
                                                                <td id="CRED00004Step4"><span>-78.94</span></td>
                                                                <td id="CRED00004Step5"><span>-222.70</span></td>
                                                                <td>
                                                                    <a href="javascript:;" class="edit-pj">编辑</a>
                                                                    <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>CRED00005</td>
                                                                <td id="CRED00005name">库存数据一致性</td>
                                                                <td id="CRED00005Step1"><span>100.00</span></td>
                                                                <td id="CRED00005Step2"><span>100.00</span></td>
                                                                <td id="CRED00005Step3"><span>100.00</span></td>
                                                                <td id="CRED00005Step4"><span>-1628.13</span></td>
                                                                <td id="CRED00005Step5"><span>-3358.99</span></td>
                                                                <td>
                                                                    <a href="javascript:;" class="edit-pj">编辑</a>
                                                                    <a href="javascript:void(0)" class="ml10">现有数据分析</a>
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