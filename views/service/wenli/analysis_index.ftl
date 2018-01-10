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
                    <div class="server-search-area">
                        <div class="sample-title clearfix">
                            <h2>项目列表</h2>
                            <div class="sample-title-btn">
                                <a href="javascript:void(0);" class="main-sure-btn add-new-enterprise ml5 ">
                                    <i class="add-icon">+</i>新增企业
                                </a>
                            </div>
                        </div>
                        <div class="sample-main-con">
                            <div class="search-sample-area clearfix">
                                <div class="sample-s-box clearfix">
                                    <div class="key">处理状态：</div>
                                    <div class="val">
                                        <div class="select-box w100-select">
                                            <div class="consignee-infor">
                                                <div class="show-consignee-infor show-title">
                                                    <p>全部处理状态</p>
                                                </div>
                                                <div class="hide-consignee-infor" style="display: none;">
                                                    <div class="consignee-title show-title">
                                                        <p>全部处理状态</p>
                                                    </div>
                                                    <i class="arrow arrow-up"></i>
                                                    <ul>
                                                        <li class="ad-list">
                                                            <p>全部处理状态</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>解析准备中</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>解析中</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>解析成功</p>
                                                        </li>
                                                        <li class="ad-list">
                                                            <p>解析失败</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <i class="arrow arrow-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="sample-s-box clearfix ml10">
                                    <div class="key">企业名称：</div>
                                    <div class="val clearfix">
                                        <div class="search-sample-input fl">
                                            <input type="text" class="w240" placeholder="请输入企业名称或者企业编号查询"/>
                                        </div>
                                        <div class="search-sample-btn fl">
                                            <a href=""><i class="search-icon"></i>查询</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sample-table-box">
                                <table class="lengthwise-table no-border-table long-table mt15">
                                    <colgroup>
                                        <col width="25%"/>
                                        <col width="10%"/>
                                        <col width="10%"/>
                                        <col width="10%"/>
                                        <col width="10%"/>
                                        <col width="15%"/>
                                        <col width=""/>
                                    </colgroup>
                                    <thead>
                                    <tr>
                                        <th class="pl20">企业名称</th>
                                        <th>企业编码</th>
                                        <th>客户联系人</th>
                                        <th>联系电话</th>
                                        <th>处理状态</th>
                                        <th>数据最后时间</th>
                                        <th class="relative refresh-tr">操作 <a href="" class="refresh-btn"></a></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="pl20">企业dfd0808</td>
                                        <td>dfd0808</td>
                                        <td>dfd0808</td>
                                        <td>18321497713</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-09-07 10:56</td>
                                        <td>
                                            <span>企业分析</span>
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20">lh0808</td>
                                        <td>lh0808</td>
                                        <td>lh0808</td>
                                        <td>18321497713</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-09-05 15:46</td>
                                        <td>
                                            <span>企业分析</span>
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20"><a href="" class="project-name" title="测试企业090501">测试企业090501</a></td>
                                        <td>090501</td>
                                        <td>李四</td>
                                        <td>15224879654</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-09-07 14:28</td>
                                        <td>
                                            <span>企业分析</span> 
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20">金蝶数据</td>
                                        <td>jindie01</td>
                                        <td>jindie01</td>
                                        <td>18321497713</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-08-31 11:24</td>
                                        <td>
                                            <span>企业分析</span> 
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20">用友账套01</td>
                                        <td>yongyou001</td>
                                        <td>yongyou001</td>
                                        <td>18321497713</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-08-31 11:08</td>
                                        <td>
                                            <span>企业分析</span> 
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20">sudantestAA02</td>
                                        <td>sudantestAA02</td>
                                        <td>sudantestAA02</td>
                                        <td>18321497713</td>
                                        <td title="文件解析部分成功">文件解析部分成功</td>
                                        <td>2017-08-28 18:48</td>
                                        <td>
                                            <a href="/welink/analysis/detail">企业分析</a> 
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="pl20">sudantestAA02</td>
                                        <td>sudantestAA01</td>
                                        <td>sudantestAA01</td>
                                        <td>18321497713</td>
                                        <td title="文件解析失败">文件解析失败</td>
                                        <td>2017-08-28 18:46</td>
                                        <td>
                                            <span>企业分析</span> 
                                            <a href="javascript:void(0)" class="ml10">重新分析</a>
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
    <#include "./popups/addNewEnterprise.ftl">
<script src="/static/js/wenli.js"></script>
</body>
</html>
