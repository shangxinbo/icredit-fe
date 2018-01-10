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
                            <h2><a href="/welink/analysis/index" class="back-title">企业分析&nbsp;/</a><a href="/welink/analysis/detail" class="back-title">&nbsp;总览&nbsp;/</a> 企业详情</h2>
                        </div>
                        <div class="analysis-con-box pt30">
                            <div class="analysis-small-area">
                                <h3><i class="blue-line"></i>业务信息 <a href="javascript:void(0)">编辑</a></h3>
                                <div class="analysis-details-box">
                                    <div class="analysis-table-area pt10">
                                        <table class="four-transverse-table">
                                            <colgroup>
                                                <col width="18%">
                                                <col width="32%">
                                                <col width="18%">
                                                <col width="">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <td class="t-head">所属行业</td>
                                                <td>
                                                    <span></span>
                                                    <select>
                                                        <option value="农、林、牧、渔业">农、林、牧、渔业</option>
                                                        <option value="采矿业">采矿业</option>
                                                        <option value="制造业">制造业</option>
                                                        <option value="电力、热力、燃气及水生产和供应业">电力、热力、燃气及水生产和供应业</option>
                                                        <option value="建筑业">建筑业</option>
                                                        <option value="批发和零售业">批发和零售业</option>
                                                        <option value="交通运输、仓储和邮政业">交通运输、仓储和邮政业</option>
                                                        <option value="住宿和餐饮业">住宿和餐饮业</option>
                                                        <option value="信息传输、软件和信息技术服务业">信息传输、软件和信息技术服务业</option>
                                                        <option value="金融业">金融业</option>
                                                        <option value="房地产业">房地产业</option>
                                                        <option value="租赁和商务服务业">租赁和商务服务业</option>
                                                        <option value="科学研究和技术服务业">科学研究和技术服务业</option>
                                                        <option value="水利、环境和公共设施管理业">水利、环境和公共设施管理业</option>
                                                        <option value="水居民服务、修理和其他服务业">水居民服务、修理和其他服务业</option>
                                                        <option value="教育">教育</option>
                                                        <option value="卫生和社会工作">卫生和社会工作</option>
                                                        <option value="文化、体育和娱乐业">文化、体育和娱乐业</option>
                                                        <option value="公共管理、社会保障和社会组织">公共管理、社会保障和社会组织</option>
                                                        <option value="国际组织">国际组织</option>
                                                        <option value="农业">农业</option>
                                                        <option value="林业">林业</option>
                                                        <option value="畜牧业">畜牧业</option>
                                                        <option value="渔业">渔业</option>
                                                        <option value="农、林、牧、渔服务业">农、林、牧、渔服务业</option>
                                                        <option value="煤炭开采和洗选业">煤炭开采和洗选业</option>
                                                        <option value="石油和天然气开采业">石油和天然气开采业</option>
                                                        <option value="黑色金属矿采选业">黑色金属矿采选业</option>
                                                        <option value="有色金属矿采选业">有色金属矿采选业</option>
                                                        <option value="非金属矿采选业">非金属矿采选业</option>
                                                        <option value="开采辅助活动">开采辅助活动</option>
                                                        <option value="其他采矿业">其他采矿业</option>
                                                        <option value="农副食品加工业">农副食品加工业</option>
                                                        <option value="食品制造业">食品制造业</option>
                                                        <option value="酒、饮料和精制茶制造业">酒、饮料和精制茶制造业</option>
                                                        <option value="烟草制品业">烟草制品业</option>
                                                        <option value="纺织业">纺织业</option>
                                                        <option value="纺织服装、服饰业">纺织服装、服饰业</option>
                                                        <option value="皮革、毛皮、羽毛及其制品和制鞋业">皮革、毛皮、羽毛及其制品和制鞋业</option>
                                                        <option value="木材加工和木、竹、藤、棕、草制品业">木材加工和木、竹、藤、棕、草制品业</option>
                                                        <option value="家具制造业">家具制造业</option>
                                                        <option value="造纸和纸制品业">造纸和纸制品业</option>
                                                        <option value="印刷和记录媒介复制业">印刷和记录媒介复制业</option>
                                                        <option value="文教、工美、体育和娱乐用品制造业">文教、工美、体育和娱乐用品制造业</option>
                                                        <option value="石油加工、炼焦和核燃料加工业">石油加工、炼焦和核燃料加工业</option>
                                                        <option value="化学原料和化学制品制造业">化学原料和化学制品制造业</option>
                                                        <option value="医药制造业">医药制造业</option>
                                                        <option value="化学纤维制造业">化学纤维制造业</option>
                                                        <option value="橡胶和塑料制品业">橡胶和塑料制品业</option>
                                                        <option value="非金属矿物制品业">非金属矿物制品业</option>
                                                        <option value="黑色金属冶炼和压延加工业">黑色金属冶炼和压延加工业</option>
                                                        <option value="有色金属冶炼和压延加工业">有色金属冶炼和压延加工业</option>
                                                        <option value="金属制品业">金属制品业</option>
                                                        <option value="通用设备制造业">通用设备制造业</option>
                                                        <option value="专用设备制造业">专用设备制造业</option>
                                                        <option value="汽车制造业">汽车制造业</option>
                                                        <option value="铁路、船舶、航空航天和其他运输设备制造业">铁路、船舶、航空航天和其他运输设备制造业</option>
                                                        <option value="电气机械和器材制造业">电气机械和器材制造业</option>
                                                        <option value="计算机、通信和其他电子设备制造业">计算机、通信和其他电子设备制造业</option>
                                                        <option value="仪器仪表制造业">仪器仪表制造业</option>
                                                        <option value="其他制造业">其他制造业</option>
                                                        <option value="废弃资源综合利用业">废弃资源综合利用业</option>
                                                        <option value="金属制品、机械和设备修理业">金属制品、机械和设备修理业</option>
                                                        <option value="电力、热力生产和供应业">电力、热力生产和供应业</option>
                                                        <option value="燃气生产和供应业">燃气生产和供应业</option>
                                                        <option value="水的生产和供应业">水的生产和供应业</option>
                                                        <option value="房屋建筑业">房屋建筑业</option>
                                                        <option value="土木工程建筑业">土木工程建筑业</option>
                                                        <option value="建筑安装业">建筑安装业</option>
                                                        <option value="建筑装饰和其他建筑业">建筑装饰和其他建筑业</option>
                                                        <option value="批发业">批发业</option>
                                                        <option value="零售业">零售业</option>
                                                        <option value="铁路运输业">铁路运输业</option>
                                                        <option value="道路运输业">道路运输业</option>
                                                        <option value="水上运输业">水上运输业</option>
                                                        <option value="航空运输业">航空运输业</option>
                                                        <option value="管道运输业">管道运输业</option>
                                                        <option value="装卸搬运和运输代理业">装卸搬运和运输代理业</option>
                                                        <option value="仓储业">仓储业</option>
                                                        <option value="邮政业">邮政业</option>
                                                        <option value="住宿业">住宿业</option>
                                                        <option value="餐饮业">餐饮业</option>
                                                        <option value="电信、广播电视和卫星传输服务">电信、广播电视和卫星传输服务</option>
                                                        <option value="互联网和相关服务">互联网和相关服务</option>
                                                        <option value="软件和信息技术服务业">软件和信息技术服务业</option>
                                                        <option value="货币金融服务">货币金融服务</option>
                                                        <option value="资本市场服务">资本市场服务</option>
                                                        <option value="保险业">保险业</option>
                                                        <option value="其他金融业">其他金融业</option>
                                                        <option value="房地产业">房地产业</option>
                                                        <option value="租赁业">租赁业</option>
                                                        <option value="商务服务业">商务服务业</option>
                                                        <option value="研究和试验发展">研究和试验发展</option>
                                                        <option value="专业技术服务业">专业技术服务业</option>
                                                        <option value="科技推广和应用服务业">科技推广和应用服务业</option>
                                                        <option value="水利管理业">水利管理业</option>
                                                        <option value="生态保护和环境治理业">生态保护和环境治理业</option>
                                                        <option value="公共设施管理业">公共设施管理业</option>
                                                        <option value="居民服务业">居民服务业</option>
                                                        <option value="机动车、电子产品和日用产品修理业">机动车、电子产品和日用产品修理业</option>
                                                        <option value="其他服务业">其他服务业</option>
                                                        <option value="教育">教育</option>
                                                        <option value="卫生">卫生</option>
                                                        <option value="社会工作">社会工作</option>
                                                        <option value="新闻和出版业">新闻和出版业</option>
                                                        <option value="广播、电视、电影和影视录音制作业">广播、电视、电影和影视录音制作业</option>
                                                        <option value="文化艺术业">文化艺术业</option>
                                                        <option value="体育">体育</option>
                                                        <option value="娱乐业">娱乐业</option>
                                                        <option value="中国共产党机关">中国共产党机关</option>
                                                        <option value="国家机构">国家机构</option>
                                                        <option value="人民政协、民主党派">人民政协、民主党派</option>
                                                        <option value="社会保障">社会保障</option>
                                                        <option value="群众团体、社会团体和其他成员组织">群众团体、社会团体和其他成员组织</option>
                                                        <option value="基层群众自治组织">基层群众自治组织</option>
                                                        <option value="国际组织">国际组织</option>
                                                    </select>
                                                </td>
                                                <td class="t-head">业务规模</td>
                                                <td><span></span><input type="text" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">企业性质</td>
                                                <td><span></span><input type="text" value="" /></td>
                                                <td class="t-head">成立年份</td>
                                                <td><span>2005</span><input type="text" value="2005" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">主营业务</td>
                                                <td><span></span><input type="text" value="" /></td>
                                                <td class="t-head">注册资金</td>
                                                <td><span>100,000</span><input type="text" value="100000" />元</td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">员工数</td>
                                                <td><span>1002</span><input type="text" value="1002" /></td>
                                                <td class="t-head"></td>
                                                <td></td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="analysis-small-area mt30">
                                <h3><i class="blue-line"></i>企业信息 <a href="javascript:void(0)">编辑</a></h3>
                                <div class="analysis-details-box">
                                    <div class="analysis-table-area pt10">
                                        <table class="four-transverse-table">
                                            <colgroup>
                                                <col width="18%">
                                                <col width="32%">
                                                <col width="18%">
                                                <col width="">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <td class="t-head">公司全称</td>
                                                <td><span>sudantestAA02</span><input type="text" value="sudantestAA02" /></td>
                                                <td class="t-head">英文名称</td>
                                                <td><span></span><input type="text" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">公司地址</td>
                                                <td><span>上海市普陀区光复西路1188弄</span><input type="text" value="上海市普陀区光复西路1188弄" /></td>
                                                <td class="t-head">邮编</td>
                                                <td><span></span><input type="text" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">组织机构代码</td>
                                                <td><span></span><input type="text" value="" /></td>
                                                <td class="t-head">税号</td>
                                                <td><span></span><input type="text" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">法人</td>
                                                <td><span></span><input type="text" value="" /></td>
                                                <td class="t-head">实际控制人</td>
                                                <td><span></span><input type="text" value="" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">联系人</td>
                                                <td><span>sudantestAA02</span><input type="text" value="sudantestAA02" /></td>
                                                <td class="t-head">电话</td>
                                                <td><span>18321497713</span><input type="text" value="18321497713" /></td>
                                            </tr>
                                            <tr>
                                                <td class="t-head">邮箱</td>
                                                <td><span></span><input type="text" value="" /></td>
                                                <td class="t-head"></td>
                                                <td></td>
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
<script src="/static/js/wenli.js"></script>
</body>
</html>
