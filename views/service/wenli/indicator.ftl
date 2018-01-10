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
                        <div class="server-infor-con">
                            <div class="server-search-area">
                                <div class="sample-title clearfix">
                                    <h2>经营指标</h2>
                                </div>
                                <div class="analysis-con-box">
                                    <div class="reAnalysis-con clearfix">
                                        <p>经营指标分析（已分析7家企业）</p>
                                        <a href="javascript:void(0)">重新分析</a>
                                    </div>
                                    <div class="analysis-small-area mt50">
                                        <h3>
                                            <i class="blue-line"></i>经营指标分析</h3>
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
                                                    <div id="jyzbAnalysis"></div>
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
                                                            <td>BUSI00002</td>
                                                            <td id="BUSI00002name">销售金额环比增长(%)</td>
                                                            <td id="BUSI00002Step1">
                                                                <span>12.62</span>
                                                            </td>
                                                            <td id="BUSI00002Step2">
                                                                <span>12.62</span>
                                                            </td>
                                                            <td id="BUSI00002Step3">
                                                                <span>12.62</span>
                                                            </td>
                                                            <td id="BUSI00002Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00002Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00003</td>
                                                            <td id="BUSI00003name">销售金额同比增长(%)</td>
                                                            <td id="BUSI00003Step1">
                                                                <span>-52.77</span>
                                                            </td>
                                                            <td id="BUSI00003Step2">
                                                                <span>-52.77</span>
                                                            </td>
                                                            <td id="BUSI00003Step3">
                                                                <span>-52.77</span>
                                                            </td>
                                                            <td id="BUSI00003Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00003Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00004</td>
                                                            <td id="BUSI00004name">应收账款金额环比增长(%)</td>
                                                            <td id="BUSI00004Step1">
                                                                <span>10.43</span>
                                                            </td>
                                                            <td id="BUSI00004Step2">
                                                                <span>10.43</span>
                                                            </td>
                                                            <td id="BUSI00004Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00004Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00004Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00005</td>
                                                            <td id="BUSI00005name">应收账款金额同比增长(%)</td>
                                                            <td id="BUSI00005Step1">
                                                                <span>1.03</span>
                                                            </td>
                                                            <td id="BUSI00005Step2">
                                                                <span>-45.72</span>
                                                            </td>
                                                            <td id="BUSI00005Step3">
                                                                <span>-56.89</span>
                                                            </td>
                                                            <td id="BUSI00005Step4">
                                                                <span>-56.89</span>
                                                            </td>
                                                            <td id="BUSI00005Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00006</td>
                                                            <td id="BUSI00006name">销售收款金额环比增长(%)</td>
                                                            <td id="BUSI00006Step1">
                                                                <span>-25.00</span>
                                                            </td>
                                                            <td id="BUSI00006Step2">
                                                                <span>-84.88</span>
                                                            </td>
                                                            <td id="BUSI00006Step3">
                                                                <span>-99.40</span>
                                                            </td>
                                                            <td id="BUSI00006Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00006Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00007</td>
                                                            <td id="BUSI00007name">销售收款金额同比增长(%)</td>
                                                            <td id="BUSI00007Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00007Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00007Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00007Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00007Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00008</td>
                                                            <td id="BUSI00008name">采购金额环比增长(%)</td>
                                                            <td id="BUSI00008Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00008Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00008Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00008Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00008Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00009</td>
                                                            <td id="BUSI00009name">采购金额同比增长(%)</td>
                                                            <td id="BUSI00009Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00009Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00009Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00009Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00009Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00010</td>
                                                            <td id="BUSI00010name">应付账款金额环比增长(%)</td>
                                                            <td id="BUSI00010Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00010Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00010Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00010Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00010Step5">
                                                                <span>0.00</span>
                                                            </td>

                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00011</td>
                                                            <td id="BUSI00011name">应付账款金额同比增长(%)</td>
                                                            <td id="BUSI00011Step1">
                                                                <span>16.21</span>
                                                            </td>
                                                            <td id="BUSI00011Step2">
                                                                <span>16.21</span>
                                                            </td>
                                                            <td id="BUSI00011Step3">
                                                                <span>10.20</span>
                                                            </td>
                                                            <td id="BUSI00011Step4">
                                                                <span>-49.99</span>
                                                            </td>
                                                            <td id="BUSI00011Step5"></td>

                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00012</td>
                                                            <td id="BUSI00012name">采购付款金额环比增长(%)</td>
                                                            <td id="BUSI00012Step1">
                                                                <span>84.53</span>
                                                            </td>
                                                            <td id="BUSI00012Step2">
                                                                <span>84.53</span>
                                                            </td>
                                                            <td id="BUSI00012Step3">
                                                                <span>-90.42</span>
                                                            </td>
                                                            <td id="BUSI00012Step4"></td>
                                                            <td id="BUSI00012Step5"></td>

                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00013</td>
                                                            <td id="BUSI00013name">采购付款金额同比增长(%)</td>
                                                            <td id="BUSI00013Step1">
                                                                <span>-76.16</span>
                                                            </td>
                                                            <td id="BUSI00013Step2">
                                                                <span>-76.16</span>
                                                            </td>
                                                            <td id="BUSI00013Step3"></td>
                                                            <td id="BUSI00013Step4"></td>
                                                            <td id="BUSI00013Step5"></td>

                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00014</td>
                                                            <td id="BUSI00014name">库存余额环比增长(%)</td>
                                                            <td id="BUSI00014Step1">
                                                                <span>47.65</span>
                                                            </td>
                                                            <td id="BUSI00014Step2">
                                                                <span>43.43</span>
                                                            </td>
                                                            <td id="BUSI00014Step3">
                                                                <span>10.00</span>
                                                            </td>
                                                            <td id="BUSI00014Step4"></td>
                                                            <td id="BUSI00014Step5"></td>

                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00015</td>
                                                            <td id="BUSI00015name">库存余额同比增长(%)</td>
                                                            <td id="BUSI00015Step1">
                                                                <span>22.17</span>
                                                            </td>
                                                            <td id="BUSI00015Step2">
                                                                <span>18.68</span>
                                                            </td>
                                                            <td id="BUSI00015Step3">
                                                                <span>10.00</span>
                                                            </td>
                                                            <td id="BUSI00015Step4"></td>
                                                            <td id="BUSI00015Step5"></td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00016</td>
                                                            <td id="BUSI00016name">销售退货率(%)</td>
                                                            <td id="BUSI00016Step1">
                                                                <span>4.00</span>
                                                            </td>
                                                            <td id="BUSI00016Step2">
                                                                <span>-16.42</span>
                                                            </td>
                                                            <td id="BUSI00016Step3"></td>
                                                            <td id="BUSI00016Step4"></td>
                                                            <td id="BUSI00016Step5"></td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00017</td>
                                                            <td id="BUSI00017name">采购退货率(%)</td>
                                                            <td id="BUSI00017Step1">
                                                                <span>4.00</span>
                                                            </td>
                                                            <td id="BUSI00017Step2">
                                                                <span>2.23</span>
                                                            </td>
                                                            <td id="BUSI00017Step3">
                                                                <span>0.36</span>
                                                            </td>
                                                            <td id="BUSI00017Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00017Step5">
                                                                <span>-2.79</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00018</td>
                                                            <td id="BUSI00018name">毛利率(%)</td>
                                                            <td id="BUSI00018Step1">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00018Step2">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00018Step3">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00018Step4">
                                                                <span>-862.44</span>
                                                            </td>
                                                            <td id="BUSI00018Step5">
                                                                <span>-1851.29</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00019</td>
                                                            <td id="BUSI00019name">应收账款周转率(次)</td>
                                                            <td id="BUSI00019Step1">
                                                                <span>0.20</span>
                                                            </td>
                                                            <td id="BUSI00019Step2">
                                                                <span>0.20</span>
                                                            </td>
                                                            <td id="BUSI00019Step3">
                                                                <span>0.07</span>
                                                            </td>
                                                            <td id="BUSI00019Step4">
                                                                <span>0.07</span>
                                                            </td>
                                                            <td id="BUSI00019Step5"></td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00020</td>
                                                            <td id="BUSI00020name">应付账款周转率(次)</td>
                                                            <td id="BUSI00020Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00020Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00020Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00020Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00020Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00021</td>
                                                            <td id="BUSI00021name">库存周转率(次)</td>
                                                            <td id="BUSI00021Step1">
                                                                <span>11.73</span>
                                                            </td>
                                                            <td id="BUSI00021Step2">
                                                                <span>11.58</span>
                                                            </td>
                                                            <td id="BUSI00021Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="BUSI00021Step4"></td>
                                                            <td id="BUSI00021Step5"></td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00022</td>
                                                            <td id="BUSI00022name">前5大客户集中度(%)</td>
                                                            <td id="BUSI00022Step1">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00022Step2">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00022Step3">
                                                                <span>89.68</span>
                                                            </td>
                                                            <td id="BUSI00022Step4">
                                                                <span>79.36</span>
                                                            </td>
                                                            <td id="BUSI00022Step5">
                                                                <span>79.36</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>BUSI00023</td>
                                                            <td id="BUSI00023name">前5大供应商集中度(%)</td>
                                                            <td id="BUSI00023Step1">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00023Step2">
                                                                <span>100.00</span>
                                                            </td>
                                                            <td id="BUSI00023Step3">
                                                                <span>99.23</span>
                                                            </td>
                                                            <td id="BUSI00023Step4">
                                                                <span>90.41</span>
                                                            </td>
                                                            <td id="BUSI00023Step5">
                                                                <span>81.72</span>
                                                            </td>
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
                                    <div class="analysis-small-area mt50">
                                        <h3>
                                            <i class="blue-line"></i>经营指标分析</h3>
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
                                                    <div id="cwzbAnalysis"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="analysis-small-area">
                                        <h3>
                                            <i class="blue-line"></i>财务指标分析
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
                                                            <td>FINI00001</td>
                                                            <td id="FINI00001name">净资产收益率(%)</td>
                                                            <td id="FINI00001Step1">
                                                                <span>4.87</span>
                                                            </td>
                                                            <td id="FINI00001Step2">
                                                                <span>4.87</span>
                                                            </td>
                                                            <td id="FINI00001Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00001Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00001Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00002</td>
                                                            <td id="FINI00002name">总资产报酬率(%)</td>
                                                            <td id="FINI00002Step1">
                                                                <span>0.28</span>
                                                            </td>
                                                            <td id="FINI00002Step2">
                                                                <span>0.28</span>
                                                            </td>
                                                            <td id="FINI00002Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00002Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00002Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00003</td>
                                                            <td id="FINI00003name">销售(营业)利润率(%)</td>
                                                            <td id="FINI00003Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00003Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00003Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00003Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00003Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00004</td>
                                                            <td id="FINI00004name">盈余现金保障倍数</td>
                                                            <td id="FINI00004Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00004Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00004Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00004Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00004Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00005</td>
                                                            <td id="FINI00005name">成本费用利润率(%)</td>
                                                            <td id="FINI00005Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00005Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00005Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00005Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00005Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00006</td>
                                                            <td id="FINI00006name">资本收益率(%)</td>
                                                            <td id="FINI00006Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00006Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00006Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00006Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00006Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00007</td>
                                                            <td id="FINI00007name">总资产周转率(次)</td>
                                                            <td id="FINI00007Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00007Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00007Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00007Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00007Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00008</td>
                                                            <td id="FINI00008name">流动资产周转率(次)</td>
                                                            <td id="FINI00008Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00008Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00008Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00008Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00008Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00009</td>
                                                            <td id="FINI00009name">资产现金回收率(%)</td>
                                                            <td id="FINI00009Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00009Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00009Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00009Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00009Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00010</td>
                                                            <td id="FINI00010name">资产负债率(%)</td>
                                                            <td id="FINI00010Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00010Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00010Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00010Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00010Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00011</td>
                                                            <td id="FINI00011name">速动比率(%)</td>
                                                            <td id="FINI00011Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00011Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00011Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00011Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00011Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00012</td>
                                                            <td id="FINI00012name">现金流动负债比率(%)</td>
                                                            <td id="FINI00012Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00012Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00012Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00012Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00012Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00013</td>
                                                            <td id="FINI00013name">带息负债比率(%)</td>
                                                            <td id="FINI00013Step1">
                                                                <span>22.60</span>
                                                            </td>
                                                            <td id="FINI00013Step2">
                                                                <span>22.60</span>
                                                            </td>
                                                            <td id="FINI00013Step3">
                                                                <span>14.61</span>
                                                            </td>
                                                            <td id="FINI00013Step4">
                                                                <span>3.31</span>
                                                            </td>
                                                            <td id="FINI00013Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00014</td>
                                                            <td id="FINI00014name">销售(营业)增长率(%)</td>
                                                            <td id="FINI00014Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00014Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00014Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00014Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00014Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00015</td>
                                                            <td id="FINI00015name">销售(营业)利润增长率(%)</td>
                                                            <td id="FINI00015Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00015Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00015Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00015Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00015Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00016</td>
                                                            <td id="FINI00016name">总资产增长率(%)</td>
                                                            <td id="FINI00016Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00016Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00016Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00016Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00016Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00017</td>
                                                            <td id="FINI00017name">存货周转率(次)</td>
                                                            <td id="FINI00017Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00017Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00017Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00017Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00017Step5">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td>
                                                                <a href="javascript:;" class="edit-pj">编辑</a>
                                                                <a href="javascript:void(0)" class="ml10">现有数据分析</a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>FINI00018</td>
                                                            <td id="FINI00018name">成本费用占营业收入比重(%)</td>
                                                            <td id="FINI00018Step1">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00018Step2">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00018Step3">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00018Step4">
                                                                <span>0.00</span>
                                                            </td>
                                                            <td id="FINI00018Step5">
                                                                <span>0.00</span>
                                                            </td>
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