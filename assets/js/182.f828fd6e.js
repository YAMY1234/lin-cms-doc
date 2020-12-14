(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{560:function(a,s,t){"use strict";t.r(s);var e=t(26),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"起步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[a._v("#")]),a._v(" 起步")]),a._v(" "),t("p",[a._v("本小节将以最快、最便捷的方式教你如何启动 lin-cms 。")]),a._v(" "),t("h2",{attrs:{id:"依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[a._v("#")]),a._v(" 依赖")]),a._v(" "),t("ul",[t("li",[a._v("JDK1.8+，已在 JAVA8、9、11 上测试通过。")]),a._v(" "),t("li",[a._v("MySQL5.6+，确保你有可用的数据库环境。")]),a._v(" "),t("li",[a._v("Maven3.6+，依赖、打包需要它。")])]),a._v(" "),t("p",[a._v("lin-cms 依赖于 spring-boot 和 mybatis，你如果不满足看一看，那么请一定要有一定的\n基础。")]),a._v(" "),t("h2",{attrs:{id:"获取项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取项目"}},[a._v("#")]),a._v(" 获取项目")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/TaleLin/lin-cms-spring-boot.git latticy\n")])])]),t("blockquote",[t("p",[a._v("此处我们以 latticy 作为工程名，当然你也可以以任意你喜爱的名字作为工程名。如果 你\n想以某个版本，如 0.0.1 版，作为起始项目，那么请在 github 上的版本页下载相应 的\n版本即可。")])]),a._v(" "),t("h2",{attrs:{id:"安装依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[a._v("#")]),a._v(" 安装依赖")]),a._v(" "),t("p",[a._v("进入项目目录：")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" latticy\n")])])]),t("p",[a._v("安装依赖并打包 jar 包")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("mvn "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" -Dmaven.test.skip"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),t("h2",{attrs:{id:"数据库配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[a._v("#")]),a._v(" 数据库配置")]),a._v(" "),t("h3",{attrs:{id:"导入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入数据"}},[a._v("#")]),a._v(" 导入数据")]),a._v(" "),t("p",[a._v("在你的开发环境 RDBMS 中，新建一个数据库，如 "),t("code",[a._v("lin-cms")]),a._v("。")]),a._v(" "),t("p",[a._v("然后找到目录下的"),t("code",[a._v("/src/main/resources/schema.sql")]),a._v("文件，并在 MySQL 中执行该脚本文\n件。")]),a._v(" "),t("p",[a._v("推荐你使用 navicat 等数据库工具导入并执行脚本文件，如果你熟悉 mysql 客户端工具，\n也可使用它导入数据。")]),a._v(" "),t("h3",{attrs:{id:"更改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改配置"}},[a._v("#")]),a._v(" 更改配置")]),a._v(" "),t("p",[a._v("找到"),t("code",[a._v("/src/main/resources/application-dev.properties")]),a._v("配置文件，并在其中修改你开发\n环境的数据库配置：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.datasource.url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("jdbc:mysql://localhost:3306/lin-cms?useSSL=false&serverTimezone=UTC&characterEncoding=UTF8")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.datasource.username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("root")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("spring.datasource.password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("123456")]),a._v("\n")])])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[a._v("#")]),a._v(" 运行")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("java -jar target/latticy-0.0.1-SNAPSHOT.jar\n")])])]),t("h2",{attrs:{id:"完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完成"}},[a._v("#")]),a._v(" 完成")]),a._v(" "),t("p",[a._v("运行成功后，打开浏览器访问 "),t("code",[a._v("http://localhost:5000/")]),a._v(" ，你可以看到 ：")]),a._v(" "),t("p",[t("strong",[a._v("心上无垢，林间有风")])]),a._v(" "),t("p",[a._v("几个大字，证明你一切已经 ok , 你可以进入后面的章节学习了。")]),a._v(" "),t("p",[a._v("当然你也可以通过其它的工具验证，如:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" http://localhost:5000/\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("在默认的开发环境中，我们是关闭权限系统的，这可能会导致部分接口和功能不能使用，如果\n你需要和前端对接，请在"),t("code",[a._v("/src/main/resources/application-dev.properties")]),a._v("配置\n文件中开启权限拦截，如下：")]),a._v(" "),t("div",{staticClass:"language-properties extra-class"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("auth.enabled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n")])])])]),a._v(" "),t("p",[a._v("最后，祝贺你，开始了一段新的旅程。")]),a._v(" "),t("RightMenu")],1)}),[],!1,null,null,null);s.default=r.exports}}]);