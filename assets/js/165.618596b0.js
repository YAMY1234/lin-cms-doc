(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{543:function(s,t,a){"use strict";a.r(t);var n=a(26),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"日志系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志系统"}},[s._v("#")]),s._v(" 日志系统")]),s._v(" "),a("p",[s._v("在本小节的正式内容之前，我们先来闲聊一下目前市面上的日志框架。在笔者\n为"),a("code",[s._v("lin-cms")]),s._v("实现日志系统的过程中，浏览和使用了诸多的日志框架，诸\n如"),a("code",[s._v("java")]),s._v("的"),a("code",[s._v("log4j")]),s._v("和"),a("code",[s._v("logback")]),s._v("，"),a("code",[s._v("node.js")]),s._v("的"),a("code",[s._v("log4j")]),s._v("和"),a("code",[s._v("egg-logger")]),s._v("以及"),a("code",[s._v("consola")]),s._v("，还\n有其它很多的日志框架。")]),s._v(" "),a("p",[s._v("不难发现，"),a("code",[s._v("java")]),s._v("作为工业界的王者，它的日志框架最为齐全，高效和易用，因\n此"),a("code",[s._v("node.js")]),s._v("的"),a("code",[s._v("log4j")]),s._v("几乎可以说是大量借鉴了"),a("code",[s._v("java")]),s._v("的"),a("code",[s._v("log4j")]),s._v("。得益于"),a("code",[s._v("log4j")]),s._v("优雅的设\n计哲学，nodejs 的"),a("code",[s._v("log4j")]),s._v("目前已经是"),a("code",[s._v("nodejs")]),s._v("下的第一日志框架，可惜因为"),a("code",[s._v("js")]),s._v("本身的桎\n梏，nodejs 版的 log4j 不够灵活。")]),s._v(" "),a("p",[a("code",[s._v("lin-cms-koa")]),s._v("日志系统拥有自己的标准，这个日志标准需要高度的自定制。因此，笔者确\n实纠结了很长一段时间，"),a("code",[s._v("koa")]),s._v("这个框架过小，基础设施太少，因此必须得去集成其它框架\n，"),a("code",[s._v("nodejs")]),s._v("的生态虽然说很不错，可惜质量跟"),a("code",[s._v("java")]),s._v("比确实显得相形见绌。")]),s._v(" "),a("p",[s._v("很可惜，"),a("code",[s._v("log4j")]),s._v("不能够满足我们的要求，"),a("code",[s._v("consola")]),s._v("输出的日志确实很漂亮，可以仅仅支持\n终端的普通输出。因此笔者选择了"),a("code",[s._v("egg-logger")]),s._v("进行定制，笔者在实现的过程中，仿佛可以\n体会到"),a("code",[s._v("egg.js")]),s._v("团队可能也不满"),a("code",[s._v("log4j")]),s._v("，所以实现了自己的"),a("code",[s._v("egg-logger")]),s._v("。")]),s._v(" "),a("p",[s._v("闲聊完了，接下来正式进入日志系统的内容。")]),s._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("lin-cms-koa")]),s._v("中，日志系统是开箱即用的，你无需自己去集成，可以直接拿来就用。它\n被挂载到了"),a("code",[s._v("context")]),s._v("的原型上，你可以通过如下的方式主动调用。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("debug")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("请将重要的调试信息输出到日志中，方便开发查看。")]),s._v(" "),a("h2",{attrs:{id:"日志记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志记录"}},[s._v("#")]),s._v(" 日志记录")]),s._v(" "),a("p",[a("code",[s._v("lin-cms-koa")]),s._v("记录的日志会默认记录到两个地方：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("终端：将日志记录到终端是最基础的记录方法，几乎所有的库都会向终端输出日志。")])]),s._v(" "),a("li",[a("p",[s._v("文件：将日志记录到文件，绝大部分情况我们需要将日志存储到磁盘以供后面查看和分析\n。lin-cms-koa 记录到文件的日志，是有一套标准的，如下：")])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("logs\n└── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06\n  ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-12.log\n  ├── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-14.log\n  └── "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-17.log\n")])])]),a("p",[s._v("日志文件默认存储到"),a("code",[s._v("当前工作目录下的logs目录")]),s._v("，且每一个月都是一个子目录，每一个子\n目录下皆有每一天的日志文件。当某一个日志文件超过一定的大小时，会被切割。")]),s._v(" "),a("p",[s._v("具体日志的记录信息如下：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":32:59,857 DEBUG "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8110")]),s._v("  --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("7insummer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/cms/file/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" from: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 costs: 39ms data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),s._v("-06-16 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(":33:37,748 DEBUG "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8110")]),s._v("  --- "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("7insummer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" - "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/cms/user/login"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" from: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 costs: 7ms data:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"body"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"super"')]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"日志配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志配置"}},[s._v("#")]),s._v(" 日志配置")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("app/config/log.js")]),s._v("下存放着日志系统的配置：")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  log"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    level"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEBUG'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 日志记录的level，推荐开发环境下为DEBUG，生产环境下为INFO")]),s._v("\n    dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'logs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录日志文件的目录，默认为logs")]),s._v("\n    sizeLimit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 日志文件的切割大小，默认为5M")]),s._v("\n    requestLog"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 记录http请求日志，默认为true，即记录，为false时则不记录")]),s._v("\n    file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启日志文件记录，默认为true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("在上面，已经明确的标明了每一项配置的作用，不过我们还是需要着重强调两个地方。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("level，日志的 level 很重要，只要 level 足够的日志才会被输出，一般开发环境下推\n荐 debug，生产环境下推荐 info。")])]),s._v(" "),a("li",[a("p",[s._v("file，磁盘 IO 是耗性能的。所以日志记录到文件是有成本的，如果你追求极致的性能\n，又对日志的记录的要求不高，确实可以考虑关闭 file。")])])]),s._v(" "),a("h2",{attrs:{id:"自定义-transport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义-transport"}},[s._v("#")]),s._v(" 自定义 Transport")]),s._v(" "),a("p",[a("code",[s._v("Transport")]),s._v("(传输)，是"),a("code",[s._v("egg-logger")]),s._v("里面一个重要的概念，你可以把它简单的理解\n为"),a("code",[s._v("日志传输")]),s._v("。记住，日志是可以有多条传输的，默认"),a("code",[s._v("lin-cms-koa")]),s._v("有两条传输路\n径"),a("code",[s._v("console")]),s._v("和"),a("code",[s._v("file")]),s._v("。你可以自定义一条"),a("code",[s._v("Transport")]),s._v("并加入到"),a("code",[s._v("logger")]),s._v("中，让日志传输到\n你需要传输到的地方。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// urllib-transport.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" urllib "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'urllib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" Transport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'egg-logger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Transport"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UrllibTransport")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Transport")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" urllib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url?msg='")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// app.js")]),s._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'remote'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UrllibTransport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    level"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEBUG'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nlogger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'info'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如上，我们自定义了一个"),a("code",[s._v("UrllibTransport")]),s._v("的类，并将其加到了"),a("code",[s._v("logger")]),s._v("中，这样日志就\n可以通过"),a("code",[s._v("urllib")]),s._v("发送到其它地方。")])])}),[],!1,null,null,null);t.default=e.exports}}]);