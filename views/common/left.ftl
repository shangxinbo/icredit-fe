        <div class="user-operation-area">
            <div class="user-photo-area">
                <div class="user-pic-box">
                    <img src="//static.360buyimg.com/finance/platform/bizCredit/1.0.0/images/user-int.png" alt="">
                    <div class="wrap"></div>
                </div>
                <div class="user-base-infor-box">
                    <h3 class="user-name">${creditUser.email!""}</h3>
                    <p class="zw-text clearfix"><span class="key">商户号：</span><span class="val">${creditUser.merchantNo!""}</span></p>
                    <p class="zw-text clearfix"><span class="key two-cell clearfix"><i class="fl">职</i><i class="fr">务：</i></span><span class="val">管理员</span></p>
                </div>
            </div>

            <div class="operation-box">
                <ul class="select-page-ul">
                <#if path == "index">
                    <li class="select-page-list choose">
                    <#else>
                    <li class="select-page-list ">
                    </#if>
                        <a href="${request.contextPath}/user/main/todo" target="navTab" rel="center-details-area">
                            <div class="cz-box"><i class="base-icon icon11"></i>用户中心 <em class="right-icon"></em></div>
                        </a>
                    </li>
                    <#if path == "contract">
                    <li class="select-page-list choose">
                    <#else>
                    <li class="select-page-list ">
                    </#if>
                        <a href="${request.contextPath}/user/contract/todo" target="navTab" rel="center-details-area">
                            <div class="cz-box"><i class="base-icon icon12"></i>合同管理 <em class="right-icon"></em></div>
                        </a>
                    </li>
                   <#if path == "order">
                    <li class="select-page-list choose">
                    <#else>
                    <li class="select-page-list ">
                    </#if>
                        <a href="${request.contextPath}/user/order/todo" target="navTab" rel="center-details-area">
                            <div class="cz-box"><i class="base-icon icon13"></i>我的订单 <em class="right-icon"></em></div>
                        </a>
                    </li>

                    <#if path == "product">
                    <li class="select-page-list choose">
                    <#else>
                    <li class="select-page-list ">
                    </#if>
                        <a href="${request.contextPath}/user/product/todo" target="navTab" rel="center-details-area">
                            <div class="cz-box"><i class="base-icon icon16"></i>产品购买中心 <em class="right-icon"></em></div>
                        </a>
                    </li>
                    <#--<#if creditUser?? && creditUser.vipMonitorFlag ?? && creditUser.vipMonitorFlag>-->
                        <#--<#if path == "vipcenter">-->
                        <#--<li class="select-page-list choose">-->
                        <#--<#else>-->
                        <#--<li class="select-page-list ">-->
                        <#--</#if>-->
                            <#--<a href="${request.contextPath}/user/vipcenter/todo" target="navTab" rel="center-details-area">-->
                                <#--<div class="cz-box"><i class="base-icon icon17"></i>VIP数据统计<em class="right-icon"></em></div>-->
                            <#--</a>-->
                        <#--</li>-->
                    <#--</#if>-->

                    <#if path == "account">
                    <li class="select-page-list choose">
                    <#else>
                    <li class="select-page-list ">
                    </#if>
                        <a href="${request.contextPath}/user/account/main" target="navTab" rel="center-details-area">
                            <div class="cz-box"><i class="base-icon icon15"></i>账号设置 <em class="right-icon"></em></div>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="account-infor">
                <ul class="infor-ul">
                    <li class="infor-list">账户开通时间：${creditUser.createdDate?string("yyyy-MM-dd hh:mm:ss")}</li>
                 </ul>
            </div>
        </div>
