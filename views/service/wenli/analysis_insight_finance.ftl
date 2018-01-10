<!DOCTYPE html>
<html>
<head>
    <#include "/common/config.ftl">
        <link rel="stylesheet" href="/static/css/wen.css" />
</head>
<body>
    <div class="common-body-container" id="insight_table_page">
        <#include "/common/header.ftl">
            <div class="products-server-center clearfix">
                <#include "./slider-left.ftl">
                    <div class="pro-server-right">
                        <div class="server-infor-box">
                            <div class="server-infor-con">
                                <div class="server-search-area">
                                    <div class="sample-title no-bottom clearfix">
                                        <h2>
                                            <a href="/welink/analysis/index" class="back-title">企业分析&nbsp;/</a>
                                            <a href="/welink/analysis/detail" class="back-title">&nbsp;总览&nbsp;/</a>
                                            <a href="/welink/analysis/insight" class="back-title">&nbsp;业务洞察&nbsp;/</a>&nbsp;财务分析</h2>
                                    </div>
                                    <div class="select-list-box">
                                        <div class="select-ul clearfix">
                                            <a href="javascript:;" class="select-title-list clearfix choose-item">资产负债表
                                                <i class="cut-line"></i>
                                            </a>
                                            <a href="javascript:;" class="select-title-list clearfix">利润表
                                                <i class="cut-line"></i>
                                            </a>
                                            <a href="javascript:;" class="select-title-list clearfix">现金流量表</a>
                                        </div>
                                        <div class="select-line-area">
                                            <div class="select-line" style="left: 0px;"></div>
                                        </div>
                                    </div>
                                    <div class="index-table-area">
                                        <div class="index-analysis-table" style="display: block">
                                            <div class="table-head-box clearfix">
                                                <div class="select-box w100-select h30-select fl mt20">
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
                                                <div class="visualization-curr mt20 clearfix">
                                                    <span class="left curr">月度报表</span>
                                                    <span class="right">年度报表</span>
                                                </div>
                                            </div>
                                            <#include "./tables/finance_month.ftl">
                                            <#include "./tables/finance_quarter.ftl">
                                        </div>

                                        <div class="index-analysis-table">
                                            <div class="table-head-box clearfix">
                                                <div class="select-box w100-select h30-select fl mt20">
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

                                                <div class="visualization-curr mt20 clearfix">
                                                    <span class="left curr">月度报表</span>
                                                    <span class="right">年度报表</span>
                                                </div>
                                            </div>
                                            <#include "./tables/finance_profit_month.ftl">
                                            <#include "./tables/finance_profit_quarter.ftl">
                                        </div>

                                        <div class="index-analysis-table">
                                            <div class="table-head-box clearfix">
                                                <div class="select-box w100-select h30-select fl mt20">
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

                                            <div class="scroll-table-box mt20 clearfix">
                                                <div class="scroll-table-left">
                                                    <div class="t-head">项目</div>
                                                    <ul class="">
                                                        <li class="clearfix">
                                                            <div class="left">经营活动</div>
                                                            <div class="right">
                                                                <p>收入</p>
                                                                <p>支出</p>
                                                            </div>
                                                        </li>
                                                        <li class="clearfix">
                                                            <div class="left">筹资活动</div>
                                                            <div class="right">
                                                                <p>收入</p>
                                                                <p>支出</p>
                                                            </div>
                                                        </li>
                                                        <li class="clearfix">
                                                            <div class="left">投资活动</div>
                                                            <div class="right">
                                                                <p>收入</p>
                                                                <p>支出</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div class="scroll-table-right more-table">
                                                    <div class="scroll-table-left-border"></div>
                                                    <div class="scroll-table-right-border"></div>
                                                    <ul class="scroll-table-ul clearfix" id="scrollCon">
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">平均</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">1</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">2</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">3</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">4</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">5</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">6</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">7</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">8</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">9</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">10</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">11</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                        <li class="scroll-table-list">
                                                            <div class="table-row table-row-head">12</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                            <div class="table-row">-</div>
                                                        </li>
                                                    </ul>
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
    <script src="https://unpkg.com/vue"></script>
    <script src="/static/js/lib/echarts.min.js"></script>
    <script src="/static/js/mock-min.js"></script>
    <script src="/static/js/mock-data.js"></script>
    <script src="/static/js/wenli.js"></script>
</body>
</html>