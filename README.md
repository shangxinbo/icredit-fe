### 前端是在做什么

* 工作内容上 html+ css+ js 

  从编写的代码类型来看，前端的工作内容几乎都是在围绕这3样东西，一般我们去限定任务边界时也经常依据这一套标准。

  虽然现在前端的源代码往往是另一种格式：比如你写html时有可能直接写html而是再用模板引擎，而你的css源代码也或许是less或者sass等预编译语言，你编写的js和真正到浏览器上执行的代码不是一个规范。但是你会发现前端最终输出的内容差不多都离不开html+css+js。

  因为前端最终的“编译器“是浏览器，浏览器只认识这3样东西。

  ```javascript
  template(tpl,ftl) ----> html  // 解决可复用dom维护问题
  mustache,handlebars,arttemplate / jade(pug),ejs,swig  
  less/sass/stylus ------> css   // 解决css编写过程中函数，变量，嵌套的一些问题
  es6 -----> es5(ie8)        // 最新的规范受浏览器的发展影响
  ```

  ​

  > 在技术架构里不足以划分任务边界

  ​

* 表现层

  前端相较于后端而言，在传统的MVC软件架构里，前端可以理解成表现层View。

  ![技术架构](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016090302.png)

  ​

  表现层是和用户接触最近的，主要负责界面的视觉和用户交互，用户可以直接看到的，以及用户所能触达的交互行为相关的事情都是表现层要处理的事情。

  而前端工作内容就是在处理表现层的内容。在这个角度考虑，你就会理解现在比较火的“大前端”概念了。

  > 大前端




###  前后端分离

什么是前后端分离：就是将表现层和业务逻辑层彻底的分离开，已达到独立工程化的程度。

#### 为什么分离

> 前提： 富交互化app盛行, 更多的动画效果，复杂的交互逻辑，统一的组件管理，H5 更多的API等等。前端要考虑的内容变得没有那么简单了。以前京东做金融就做个支付，后来金融业务多了，没办法就分离出来一个叫做网银在线的什么公司。

* 技术角色专业化
* 前端和后端在开发阶段脱离硬依赖关系，项目进度并行，可以缩短开发周期。
* 可实现server对接多终端，server api更方便的做技术选型和架构切换
* 项目系统代码的解耦，方便分而治之。
* 满足表现层和业务逻辑层的迭代频率不一致




### 如何做前后端分离

前后端分离最重要的是将工作关注点分离，具体到工作当中就是前端只管前端的code，后端只管后端的code。表现在合作方式上就是后端提供resfull api，前端通过HTTP请求获取数据并将数据以友好的方式呈现给用户。

* 前后端code分离
* 通信协议http
* 数据格式json



1.要解决通信协议的问题，在http协议上层添加逻辑处理通信协议{code:200,msg:'',data:''}

2.要解决并行的问题和环境隔离的问题

3.要解决联调的问题

4.要解决不同环境部署和测试的问题

5.要解决接口数据格式协商的问题



后端要做的事：不再处理模板渲染，根据业务逻辑规划api分布，维护每个api服务的版本，确定每个api的入参出参，做好数据逻辑计算以及数据的CURD，必要时做缓存处理，做日志记录，做必要的验证以确保安全性。

前端要做的事：完整的理解产品的呈现形式和交互逻辑。合理输出HTML，css，js用以呈现结构化数据，辅助表现形式以及丰富的用户交互。合理分割UI组件，以最大化复用率提高复用率。使用必要的工具来提高前端开发效率和降低维护成本，在前端项目复杂化时做好工程化。



#### 方案1

先做分离，使用纯html，css，js编写前端，前端容器和后端容器可以是一个也可以在不同的机器上。

```
server {
    listen 80;
    server_name your.domain.name;
    location / {
        proxy_pass http://localhost:5000/;
    }

    location /api/ {
        proxy_pass http://localhost:8080/service/;    
    }
}  
```

开发环境的查看，使用http-server 完成本地服务容器的支持，使用mock数据做假数据，保证你的mock的api和后端协商一致，保证联调阶段以及测试环境及生产环境可使用正常的api服务



#### 方案2

1.公共部分作为维护起来比较麻烦

freemarker

2.使用css预处理器

查看文沥实例

3.使用js模块加载器,解决js代码量剧增，需要分模块管理的问题，实质上解决js命名空间冲突的问题

sea.js

http://lesscss.cn/

自动化构建，gulp

sass-> css,    css 合并压缩，雪碧图，js打包压缩

静态资源版本号的添加



从此有了 source code 和 release code 之分

可以使用seajs-init



难道我们只是把原来的server render变成了 restful api 就行了么，下面享受一下前后端分离所带来的变化





#### 方案3

backbone

angular

vue 



npm 包管理工具

node 开发调试环境



1.node v8+

2.使用自动化创建项目脚本 vue-cli

``` bash
npm install vue-cli -g
vue init webpack my-project
cd my-project
npm install
npm run dev
```

3.自动化脚本

```javascript
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
"start": "npm run dev",
"proxy": "node run dev --proxy",
"unit": "jest --config test/unit/jest.conf.js --coverage",
"test": "npm run unit",
"lint": "eslint --ext .js,.vue src test/unit",
"build": "node build/build.js"
```

4.配置信息



5.开发流程示例

组件 page 组件，子模块组件，通用组件，组件的格式vue

组件的嵌入 `<template>`  每个组件的逻辑在每个组件里，不影响其他组件 

同组件使用相同数据 ,父子组件传值

图片的引入 万物皆js

router link的编写

6.联调流程

当前后端开发完毕之后，我们需要联调，联调的作用是将不同的系统部分组合在一起，形成一体，这是分离的必要阶段

理想状态是完美插拔。但一般情况不能达到理想状态。所以一般联调阶段是需要耗费时间进行齿轮的吻合过程。

我们的原则是，尽量在并行阶段进行完善的自测，以缩短联调时间，一种不健康的开发模式是，联调双方还没有开发完成就进入联调，这样往往会影响双方的计划时间，并浪费专注开发时间，一些方案会出现摇摆不定的情况。

联调不是单纯的下游验证上游的过程。

前端后端联调，需要一台可同时做code runtime的机器，我们一般会放到测试环境，在这个环境里，前后端代码整合在一起，前后端一起验证功能是否完善，联调测试是提测前必要的阶段。

联调阶段，前端本地调试真实接口使用node 做代理切换，讲mock接口换成真实环境接口。

```bash
npm run proxy
```



6.自动化部署

前端部署的东西就是静态文件

source code

release code 

把 release node  放到服务器容器即可，

一般的打包流程是

1.使用jenkins  git pull 

2.jenkins 执行 npm run build 

3.jenkins 将dist/* 文件发布到目标机器

* 注意每次初始化时，或者有新依赖加入时要在build 前进行npm install 依赖下载



git 工作流的问题

1. develop   测试环境
2. master    预发环境
3. online     线上环境
4. feature/XXX   功能分支
5. hotfix/XXX     bug 分支



分支的纯净度  develop -> master -> online 

每次新feature或bugfix ，从online创建一个新分支，然后依次merge到develop->master->online

举个例子

我们要做舆情新需求，从online分支创建一个新的分支,一般创建远端分支，然后本地checkout 下来，然后进行开发，然后切换到develop 分支，merge 新分支的提交，然后提交develop，然后推送到远端develop 分支，然后jenkins测试环境打包部署，联调或测试，测试完毕后，切换master分支，merge 新版本功能，然后推送到远端master. 然后预发打包部署，测试预发，预发测试完毕说明新分支可以迭代上线，切换到online分支合并到online，线上打包部署。出现冲突解决。

```
git checkout 
```



兼容问题

因为vue 的核心原理是es5 的object.defineProperty()方法，同样的react 最新的方式也在使用这个方法，所以以react，vue，ember等mvvm框架成为主流的趋势，最低ie兼容版本来到了ie9。



用户认证的问题

角色权限问题

验证问题