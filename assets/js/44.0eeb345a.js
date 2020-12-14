(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{425:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"后端插件开发（目前处于测试状态）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端插件开发（目前处于测试状态）"}},[t._v("#")]),t._v(" "),s("H2Icon"),t._v(" 后端插件开发（目前处于测试状态）")],1),t._v(" "),s("h1",{attrs:{id:"深入学习插件机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入学习插件机制"}},[t._v("#")]),t._v(" 深入学习插件机制")]),t._v(" "),s("blockquote",[s("p",[t._v("本小节让我们来详细介绍一下 Lin 的精髓——插件机制\n我们在这里再次强调，诸如 Flask-JWT 这样的第三方库，Flask 官方把它称之为"),s("code",[t._v("扩展")]),t._v("（extension）\n而在 Lin 中，我们的插件（plugin）某种程度上类似于扩展，但是它们完全不是一种东西！")])]),t._v(" "),s("h2",{attrs:{id:"插件的规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的规范"}},[t._v("#")]),t._v(" 插件的规范")]),t._v(" "),s("p",[t._v("首先，我们通过"),s("RouterLink",{attrs:{to:"/0.2.x/plugins/flask/fe.html"}},[t._v("插件使用")]),t._v("一章中的"),s("code",[t._v("古诗词")]),t._v("插件示例 来看看插件的目录规范和开发规范。")],1),t._v(" "),s("h3",{attrs:{id:"目录规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录规范"}},[t._v("#")]),t._v(" 目录规范")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("├───poem\n│   │   config.py  // 配置文件（必需），记录关于插件的可用配置\n│   │   info.py    // 插件基本信息\n│   │   README.md  // 插件文档\n│   │   requirements.txt // 插件依赖包\n│   │\n│   └───app     // 应用开发目录\n│           controller.py  // 控制层文件\n│           forms.py       // 校验层文件\n│           model.py       // 模型层文件\n│           __init__.py    // 导出文件（必需）。重要！！！\n")])])]),s("p",[t._v("Lin 的插件可能与你以前了解的插件概念不一样，"),s("em",[t._v("你可以把每个插件理解为一个小 app")]),t._v("。每个插件都有自己的配置、控制层、模型层甚至校验层（forms），换言之每个插件都有自己的业务，它的功能很像"),s("strong",[t._v("微服务")]),t._v("，即每个插件只负责完成某一项功能。")]),t._v(" "),s("p",[t._v("下面我们来介绍插件目录结构中的几个关键文件，你可以打开本地已经安装好的 "),s("code",[t._v("poem")]),t._v(" 插件的源码，对照学习")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("config.py")]),s("br"),t._v("\n配置文件，其中的所有配置项会在我们执行 "),s("code",[t._v("python plugin_init.py")]),t._v(" 初始化插件成功后，自动写入到项目配置文件 "),s("code",[t._v("setting.py")]),t._v(" 中，你也可以根据自己的业务场景自由修改配置项，关于配置文件的更多话题，我们在下面会继续介绍。")])]),t._v(" "),s("li",[s("p",[t._v("关于 "),s("strong",[t._v("info.py")]),s("br"),t._v("\n插件基本信息，里面定义了三个变量"),s("code",[t._v("__name__")]),t._v("、"),s("code",[t._v("__version__")]),t._v("和"),s("code",[t._v("__author__")]),t._v("，分别表示插件名、插件版本号和插件开发者。在插件初始化时，插件初始化脚本会根据 "),s("code",[t._v("info.py")]),t._v(" 中的信息来找到对应的插件。")])]),t._v(" "),s("li",[s("p",[t._v("关于 "),s("strong",[t._v("requirements.txt")]),s("br"),t._v("\n如果你是在插件中使用了一些第三方库，这些库在主应用中是没有的，那么请你将它添加到 "),s("strong",[t._v("requirements.txt")]),t._v(" 中。以方便我们运行初始化插件脚本的时候自动检测并安装这些依赖。"),s("strong",[t._v("注意，在你自己开发插件的时候，请一定不要将主应用中已经存在的第三方库添加到该文件中，否则可能造成插件与主应用的版本冲突，无法使用插件甚至主应用都会因此受损！")]),t._v(" 文件的格式如下")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("oss2==2.6.1\n")])])]),s("h3",{attrs:{id:"开发规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发规范"}},[t._v("#")]),t._v(" 开发规范")]),t._v(" "),s("p",[t._v("如果你想开发一个插件，你可以使用项目中的 "),s("code",[t._v("verdor/plugin_generator.py")]),t._v(" 脚本来生成一个后端插件的基础模板。")]),t._v(" "),s("p",[t._v("假设你想生成一个名为 "),s("code",[t._v("test")]),t._v(" 的插件模板，请在项目的根目录下运行如下命令：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("python vendor/plugin_generator.py -n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("p",[t._v("由于插件本身就是一个微型的 app，插件的开发规范与项目的开发规范几乎一致，如果你还不够熟悉，那么请你再次阅读"),s("RouterLink",{attrs:{to:"/0.2.x/plugins/server/"}},[t._v("开发规范")]),t._v("。")],1),t._v(" "),s("p",[t._v("当然，插件这里也有一个自己独特的机制——加载。在前面，我们在介绍项目开发时，红图以及模型都是我们主动去通过"),s("code",[t._v("import")]),t._v("导入的。但是在插件中，我们可以不用做这件事情，因为 Lin 会自动通过 loader（加载器）来帮我们做这件事，loader 可以帮我们自动去加载插件中的红图 api 和数据模型类。")]),t._v(" "),s("p",[t._v("但是，在你开发的插件中，你必须明确告诉 loader，因为 loader 真的不够聪明，它到底该加载哪些东西。而"),s("code",[t._v("poem/app/__init__.py")]),t._v("这个文件则扮演这个角色，它里面的代码很简单，如下：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("controller "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" api\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Poem\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initial_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("在代码的第一行，我们从当前目录中的"),s("code",[t._v("controller")]),t._v("导入了"),s("code",[t._v("api")]),t._v("这个红图，第二行从"),s("code",[t._v("model")]),t._v("中导入了"),s("code",[t._v("Poem")]),t._v("这个模型类。而后，loader 会自动的从"),s("code",[t._v("__init__.py")]),t._v("文件得到刚才导出的"),s("code",[t._v("api")]),t._v("和"),s("code",[t._v("Poem")]),t._v("，然后存储到自身的容器中。")]),t._v(" "),s("p",[t._v("当然，在"),s("code",[t._v("__init__.py")]),t._v("你可以导入多个的红图和模型，如你还可能需要加载另外一个红图"),s("code",[t._v("some_api")]),t._v("和另外一个模型"),s("code",[t._v("Some")]),t._v("，接下来你应该在上段的代码中加入：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("some "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" some_api\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Some\n")])])]),s("p",[t._v("被 loader 加载红图会被直接挂载到默认的 plugin 蓝图中，你可通过相应的 url 直接访问。而加载的模型你可通过如下的方式得到：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" manager "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到manager")]),t._v("\nImage "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" manager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Poem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 得到加载到容器中的Log模型")]),t._v("\n")])])]),s("p",[t._v("当然如果你不喜欢这种方式，你也可以通过"),s("code",[t._v("import")]),t._v("方式得到这个模型：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("poem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Poem\n")])])]),s("p",[t._v("除了导出插件中的红图 api 和数据模型类的功能，"),s("code",[t._v("__init__.py")]),t._v("中还可以定义一个名称为"),s("code",[t._v("initial_data")]),t._v("的函数，当插件初始化时，我们有时候需要向数据库添加一些初始数据，其业务逻辑可以封装在这个函数中。")]),t._v(" "),s("p",[s("code",[t._v("initial_data")]),t._v("函数的编写方法非常简单，你可以查看"),s("code",[t._v("poem/app/__init__.py")]),t._v("的源码来学习如何向数据添加初始数据。当然，如果你自己编写的插件不需要初始数据，可以不定义这个函数。但注意，"),s("code",[t._v("__init__.py")]),t._v("文件中只处理上述的两种业务，"),s("em",[t._v("请不要在该文件下编写任何其他的业务逻辑")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"插件的加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件的加载"}},[t._v("#")]),t._v(" 插件的加载")]),t._v(" "),s("p",[t._v("在"),s("RouterLink",{attrs:{to:"/0.2.x/plugins/server/run_process.html"}},[t._v("运行流程")]),t._v("一节中我们留下了一个悬念，那就是插件的加载流程。在 Lin 源代码中，可以在 Manager 的构造函数中找到如下代码段：")],1),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Loader\nself"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Loader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Loader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("这里初始化的 loader （插件加载器），由它来负责所有插件的加载，我们继续打开 Loader 的构造函数。")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("assert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin_path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin_path must be a dict'")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin_path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" plugin_path\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins_config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载插件配置")]),t._v("\n    self"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加载插件")]),t._v("\n")])])]),s("p",[t._v("这里大致的流程是这样的，loader 率先从主 app 中读取插件的路径和配置（setting.py 文件中），然后加载每个插件单独的配置，最后加载插件。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-------------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载插件配置   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   ----"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  加载插件各自配置    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     ----"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 加载插件  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-------------------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("----------"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n")])])]),s("p",[t._v("接下来我们继续，在 Loader 类中还有两个方法"),s("code",[t._v("_load_plugin")]),t._v("和"),s("code",[t._v("_load_config")]),t._v("，这两个方法是 loader 的核心方法，由它们向容器中加载插件和插件配置。这两个方法的思路很明确，我们相信你完全可以自己理解。")]),t._v(" "),s("p",[t._v("好，插件的整体流程的梳理到此已经结束了。如果你感到疑惑，请记住 loader 的加载本身只是一个很简单的过程，当你亲身通过断点 Debug 的方式去运行程序时，你就会觉得豁然开朗。")]),t._v(" "),s("h2",{attrs:{id:"实操poem插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实操poem插件"}},[t._v("#")]),t._v(" 实操Poem插件")]),t._v(" "),s("blockquote",[s("p",[t._v("在大家已经了解了插件机制和插件的使用方法后，下面我们来手把手带着大家来实操的古诗词插件，你将学到一个插件的整个开发流程和注意事项。好了，话不多说，我们开始吧！")])]),t._v(" "),s("h3",{attrs:{id:"主配置文件解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主配置文件解析"}},[t._v("#")]),t._v(" 主配置文件解析")]),t._v(" "),s("p",[t._v("打开"),s("code",[t._v("app/config/setting.py")]),t._v("文件，如果该文件中已经存在了如下配置：")]),t._v(" "),s("div",{staticClass:"language-py extra-class"},[s("pre",{pre:!0,attrs:{class:"language-py"}},[s("code",[t._v("PLUGIN_PATH "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'poem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.plugins.poem'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'enable'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'limit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("证明你已经下载插件源码并且在项目中进行了插件的初始化，上述配置会被自动写入。如果你想了解插件初始化脚本的执行流程，请查看"),s("code",[t._v("vendor/plugin_init.py")]),t._v("的文档注释。")]),t._v(" "),s("p",[t._v("如果你是自己开发插件，为了让插件的路由成功注册，以方便在开发中调试插件的api，你可以先手动将插件的配置写入到"),s("code",[t._v("setting.py")]),t._v("文件中。")]),t._v(" "),s("p",[t._v("下面我们解释这个配置项：")]),t._v(" "),s("ul",[s("li",[t._v("PLUGIN_PATH：每个插件的单独配置。\n如"),s("code",[t._v("poem")]),t._v("代表当前的插件的名字为"),s("strong",[t._v("poem")]),t._v("，"),s("code",[t._v("path")]),t._v("表示插件的路径，如 poem 插件的路径在"),s("code",[t._v("app/plugins/poem")]),t._v("下，"),s("code",[t._v("enable: True")]),t._v("表示开启当前插件。其他更多的配置项如 "),s("code",[t._v("limit")]),t._v(" 是插件中使用到的配置。")])]),t._v(" "),s("h3",{attrs:{id:"调用获取古诗词接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调用获取古诗词接口"}},[t._v("#")]),t._v(" 调用获取古诗词接口")]),t._v(" "),s("p",[t._v("我们运行"),s("code",[t._v("starter.py")]),t._v("文件，然后请打开 postman 测试工具，选择 get 方法，请求 url 为"),s("code",[t._v("http://localhost:5000/plugin/poem/all")]),t._v("。")]),t._v(" "),s("p",[t._v("你可能会有所疑惑？这个 url 是如何确定的，插件中的路由 url 满足下述规范。")]),t._v(" "),s("ul",[s("li",[t._v("所有插件的路由都会被挂载到 plugin 的蓝图中，该蓝图的路径前缀为"),s("code",[t._v("/plugin")]),t._v("。")]),t._v(" "),s("li",[t._v("每个单独的插件都会有一个名字，如 poem 插件的名称为"),s("code",[t._v("poem")]),t._v("，若在该插件下，存在多个红图实例（redprint）,则其所有路由都会有一个二级前缀"),s("code",[t._v("/poem")]),t._v("。若该插件下只存在一个红图实例，即一个 controller，则不会有二级前缀，你的路径只有一个一级前缀，即"),s("code",[t._v("/plugin")]),t._v("。")]),t._v(" "),s("li",[t._v("后面的路径就被每个插件下的红图所确定，如 poem 插件下有个名为"),s("code",[t._v("poem")]),t._v("红图实例，该红图下有"),s("code",[t._v("get_list")]),t._v("这个视图函数。此时该插件只有一个红图实例，故它的前缀只有一级，所以获取古诗词接口的 url 为"),s("code",[t._v("/plugin/poem/all")]),t._v("。如果 all 插件下有多个红图实例，且某个红图名为"),s("code",[t._v("some")]),t._v("，some 下有"),s("code",[t._v("test")]),t._v("的视图函数，则访问这个视图函数的 url 为"),s("code",[t._v("/plugin/poem/some/test")]),t._v("。")])]),t._v(" "),s("p",[t._v("点击"),s("code",[t._v("Send")]),t._v("，如果一些顺利你会看到如下返回结果：")]),t._v(" "),s("img-wrapper",[s("img",{attrs:{src:"http://imglf4.nosdn0.126.net/img/L1FxUmNhYXM3L2RnZnhXR0grZFJTZlg3RFJkRnU1UitnT3ppYmZNWlpnblFzYXI0ZktGY3dRPT0.png?imageView&thumbnail=1680x0&quality=96&stripmeta=0"}})]),t._v(" "),s("h3",{attrs:{id:"插件局部配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#插件局部配置文件"}},[t._v("#")]),t._v(" 插件局部配置文件")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("poem")]),t._v("的模型层"),s("code",[t._v("poem/app/model.py")]),t._v("代码中，你或许已经发现，我们从lin的核心库中导入了"),s("code",[t._v("lin_config")]),t._v("，并且使用"),s("code",[t._v("lin_config.get_config('poem.limit')")]),t._v("获取到了配置，那么配置文件定义在哪里呢？\n我们打开"),s("code",[t._v("poem/config.py")]),t._v("配置文件，可以发现，Lin建议用户定义的配置项是小写的。如果你开发的插件有更多的配置，都可以在这个文件中添加。")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# app/plugins/poem/config.py")]),t._v("\nlimit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("p",[t._v("此处设置了limit为20，由于我们在 "),s("code",[t._v("setting.py")]),t._v(" 中也有"),s("strong",[t._v("limit")]),t._v("的相关配置，"),s("code",[t._v("lin_config")]),t._v("会优先调用setting.py中的配置。修改"),s("code",[t._v("setting.py")]),t._v("中的 limit 为5，再次调用接口，可发现接口返回了5条古诗词的记录。")]),t._v(" "),s("h2",{attrs:{id:"小结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),s("p",[t._v("在本小节，我们通过 poem 这个插件示例，学习了插件的开发规范和加载流程，请在"),s("code",[t._v("controller.py")]),t._v("文件中查看相应的 api。")]),t._v(" "),s("p",[t._v("我们还通过修改配置来限制获取古诗词的数量，请注意配置很重要，真的很重要，它给了插件很大的灵活性。")]),t._v(" "),s("p",[t._v("但是，在此你可能会疑惑，插件的配置与 Flask 的配置有何区别？为何我们还需要一个插件的配置，而不是直接从 Flask 中读取。")]),t._v(" "),s("p",[t._v("原因有如下几点:")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Flask 的配置依赖 Flask 的上下文。在 Flask 中读取配置，你必须在 Flask 的上下文中才能读取到相应的配置，而我们的插件是通过路径加载的，它的加载先于 Flask 的上下文创建，因此很多配置只能在视图函数中使用，这不够灵活。")])]),t._v(" "),s("li",[s("p",[t._v("插件的配置既可以在 config.py 中配置，也可以在 setting.py 中更改，Flask 本身的配置机制不能够满足如此需求。")])]),t._v(" "),s("li",[s("p",[t._v("再者，Flask 的配置有明确的要求，所有字母均要求大写，但很多时候如"),s("code",[t._v("poem")]),t._v("名称，我们还是觉得小写比较直观，而且我们必须让取配置更加方便，如"),s("code",[t._v("lin_config.get_config('poem.limit')")]),t._v("可直接取到 poem 下的 limit 配置。很多时候插件的配置是层叠的，我们支持二级直接取配置。")])])]),t._v(" "),s("p",[t._v("插件的实战到这里就结束了，你可能觉得会有些短，有些少。但是这确实是真实的情况，因为插件本身就很简单，你完全可以把它理解为一个"),s("strong",[t._v("微 app")]),t._v("。按照我们之前的开发规范来开发插件即可。\n"),s("RightMenu")],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);