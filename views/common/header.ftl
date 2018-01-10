<script type="text/javascript" src="${request.contextPath}/js/header.js" charset="utf-8"></script>
<div class="header-area shadow-header">
    <div class="header-main w clearfix">
        <div class="logo-box">
        	<a href="${request.contextPath}/index" class="back-homePage">
            	<span class="jdjr-logo"></span>
            </a>
        </div>
        <div class="header-nav">
            <ul class="clearfix index">
                <!-- 头部菜单begin -->
                <li id="index"  class="nav-list">
                    <a href="${request.contextPath}/index" class="nav-text">首页</a>
                </li>
                <li id="service" class="nav-list ${(path??&&path=="credit")?string("curr","")}">
                    <a href="${request.contextPath}/service/todo?type=CREDIT_SERVICE" target="navTab" class="nav-text">信用服务</a>
                </li>
                <li id="data" class="nav-list ${(path??&&path=="data")?string("curr","")}">
                    <a href="${request.contextPath}/service/todo?type=DATA_SERVICE" target="navTab" class="nav-text">数据服务</a>
                </li>
                <li id="featured" class="nav-list ${(path??&&(path=="userprofile"||path=="smurfs" || path=="mini" || path=="opinion"))?string("curr","")}">
                    <a href="javascript:;" class="nav-text">特色产品</a>
                    <div class="sub-pro-link">
                        <span>特色产品</span>
                        <ul class="sub-nav-ul">
                            <li class="sub-nav-list ">
                                <a href="${request.contextPath}/user/vipcenter/todo" target="navTab">蓝鲸灵</a>
                            </li>
                            <li class="sub-nav-list ">
                                <a href="${request.contextPath}/user/mini/todo" target="navTab">Mini尽调</a>
                            </li>
                            <li class="sub-nav-list ">
                                <a href="${request.contextPath}/opinion/todo" target="navTab">企业舆情</a>
                            </li>
                            <li class="sub-nav-list ">
                                <a href="${request.contextPath}/graph/todo" target="navTab">企业图谱</a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="report" class="nav-list ${(path??&&path=="report")?string("curr","")}">
                    <a  href="${request.contextPath}/report/todo"  target="navTab" class="nav-text">信用报告</a>
                </li>
                <li id="shop" class="nav-list ${(path??&&path=="shop")?string("curr","")}">
                    <a  href="${request.contextPath}/shop" class="nav-text">模型商城</a>
                </li>
                <li id="help" class="nav-list ${(path??&&path=="help")?string("curr","")}">
                    <a  href="${request.contextPath}/help/center" class="nav-text">帮助中心</a>
                </li>
                <!-- 头部菜单end -->

                <li class="nav-list">
                    <div class="login-area">
                        <div class="not-login" >
                            <a target="_blank" href="javascript:;" id="login-credit">登录</a><i class="line"></i><a target="_blank" href="https://biz.jd.com/register/toEnterpriseRegister.do">注册</a>
                        </div>
                        <div class="had-login" style="display:none;">
                            <div class="user-pic-area">
                                <img src="//static.360buyimg.com/finance/platform/bizCredit/1.0.0/images/user-int.png" alt="">
                    
                                <div class="wrap"></div>
                            </div>
                            <div class="select-page-area">
                                <ul class="select-page-ul">
                                    <li class="select-page-list">
                                        <a href="${request.contextPath}/user/console/index" >
                                            <div class="cz-box"><i class="base-icon icon11"></i>用户中心</div>
                                        </a>
                                    </li>
                                    <li class="select-page-list">
                                        <a href="${request.contextPath}/user/console/contract" >
                                            <div class="cz-box"><i class="base-icon icon12"></i>合同管理</div>
                                        </a>
                                    </li>
                                    <li class="select-page-list">
                                        <a href="${request.contextPath}/user/console/order" >
                                            <div class="cz-box"><i class="base-icon icon13"></i>我的订单</div>
                                        </a>
                                    </li>
                                    <li class="select-page-list">
                                        <a href="${request.contextPath}/user/console/product" >
                                            <div class="cz-box"><i class="base-icon icon17"></i>产品购买中心</div>
                                        </a>
                                    </li>
                                    <li class="select-page-list">
                                        <a href="${request.contextPath}/user/console/account" >
                                            <div class="cz-box"><i class="base-icon icon15"></i>账号设置</div>
                                        </a>
                                    </li>
                                    <li class="select-page-list">
                                        <a href="//biz.jd.com/login/toLogout.do?return=https://icredit.jd.com/index">
                                            <div class="cz-box"><i class="base-icon icon16"></i>退出</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
