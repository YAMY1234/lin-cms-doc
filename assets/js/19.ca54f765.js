(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{401:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"内置插件的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置插件的使用"}},[t._v("#")]),t._v(" "),a("H2Icon"),t._v(" 内置插件的使用")],1),t._v(" "),a("p",[t._v("在"),a("RouterLink",{attrs:{to:"/0.2.x/abandon/plugin.html"}},[t._v("插件")]),t._v("一节中，我们详细的阐明了 Lin 插件的机制和规范。在 Lin 的基础库中其实已经默认的集成了两个插件，它们分别是 logger 和 notify。")],1),t._v(" "),a("h2",{attrs:{id:"logger-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logger-插件"}},[t._v("#")]),t._v(" logger 插件")]),t._v(" "),a("p",[t._v("在诸多 CMS 系统中，权限被分配给用户后，那么就代表这一用户拥有某个权限的绝对控制权。但是有些权限又比较危险，比如删除所有图书这个权限，它很可能直接清除了系统里面的所有图书数据，这显然是一个危险的操作。那么这么危险的操作，如果发生了，作为管理员你该怎么办了。很简单，找到该用户，并禁用该用户，随后联系开发者，恢复数据。")]),t._v(" "),a("p",[t._v("logger 插件主要用来解决这一类的问题，当然你可以将记录任何你觉得敏感的操作，比如某用户访问了某私密数据。接下来，我们来实操一下 logger 插件的使用。")]),t._v(" "),a("p",[t._v("我们修改"),a("code",[t._v("get_book")]),t._v("这个视图函数为：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logger\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 省略诸多代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@book_api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/<id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@Logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'某用户查询了一本图书'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送的消息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" NotFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'没有找到相关书籍'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("接下来，当有任何用户请求这个 API 时，均会在数据库中写入一条日志信息。该日志信息的数据模型的定义在"),a("code",[t._v("lin.plugins.logger.app.model")]),t._v("中，对应的数据表名为"),a("code",[t._v("lin_log")]),t._v("。")]),t._v(" "),a("p",[t._v("但有时，"),a("em",[t._v("某用户查询了一本图书")]),t._v("这样的信息未免显得太过于单薄，它无法很好的向前端说明更多的信息。因此 Lin 提供了一个简单的模板语法，你可以在"),a("code",[t._v("template")]),t._v("这个参数中，写入一些变量，如"),a("code",[t._v("{user.username}查询了一本图书")]),t._v("，请记住每一个"),a("code",[t._v("{}")]),t._v("中就可以写入一个变量，"),a("code",[t._v("user.username")]),t._v("就表示当前用户的昵称。如下：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logger\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" route_meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" group_required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" login_required\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 省略诸多代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@book_api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/<id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@Logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{user.username}查询了一本图书'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送的消息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@login_required")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 必须，如果用户不登陆，就没有user这个实例")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" NotFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'没有找到相关书籍'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("此时，你每请求一次这个 API，它就会在数据中写下下面类似的信息（请注意，这个 API 现在请求必须登陆）。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("+----+---------------------+---------------------+---------+-----------+-------------+--------+------------+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" message             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" user_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" user_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" status_code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" path       "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" authority "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+----+---------------------+---------------------+---------+-----------+-------------+--------+------------+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" pedro查询了一本图书 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v("-10-24 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":11:40 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" pedro     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" GET    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" /v1/book/1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+----+---------------------+---------------------+---------+-----------+-------------+--------+------------+-----------+\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.13")]),t._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("我们的模板语法，不仅仅可以在其中嵌入"),a("code",[t._v("user")]),t._v("这个实例，你还可以嵌入 Flask Response 的任何属性，如："),a("code",[t._v("response.status")]),t._v("，还有 Flask Request 的诸多属性，如"),a("code",[t._v("request.url")]),t._v("。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("user_model 实例")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")])]),t._v(" "),a("tr",[a("td",[t._v("response")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Flask Response 实例")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")])]),t._v(" "),a("tr",[a("td",[t._v("request")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Flask Request 实例")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("object")])])])]),t._v(" "),a("p",[t._v("这一切取决于你的需求，关于 user 的所有属性，请阅读 user_model 中的所有属性，response 和 request 的所有属性，请阅读"),a("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/api/#response-objects",target:"_blank",rel:"noopener noreferrer"}},[t._v("Response"),a("OutboundLink")],1),t._v("，"),a("a",{attrs:{href:"http://flask.pocoo.org/docs/1.0/api/#incoming-request-data",target:"_blank",rel:"noopener noreferrer"}},[t._v("Request"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"notify-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notify-插件"}},[t._v("#")]),t._v(" notify 插件")]),t._v(" "),a("p",[t._v("notify 是一种消息推送的解决方案，它基于 SSE（Server Sent Events）,关于 SSE 你可以简单的理解为它是一种类 Websocket 的通信方式，\n具体细节请你阅读"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN 官网"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[t._v("notify 插件主要用来解决服务器向前端推送消息，例如当购物小程序中，某用户配送一件商品，这是服务器向 CMS 前端推送该消息，然后管理员看到消息通知配送员配送。\n接下来，我们来实操一下 notify 插件的使用。")]),t._v(" "),a("p",[t._v("我们再次修改"),a("code",[t._v("get_book")]),t._v("这个视图函数为：")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Logger\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" lin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notify "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Notify\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 省略代码。。。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@book_api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/<id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@Logger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{user.username}查询了一本图书'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@Notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{user.username}查询了一本图书'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" event"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'queryBook'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# template与Logger的template的用法一样，但必须多传入一个参数event")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@login_required")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_book")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    book "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" book "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("raise")]),t._v(" NotFound"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'没有找到相关书籍'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("book"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("在 Notify 的构造函数中你可以传入诸多参数，其中"),a("code",[t._v("template")]),t._v("与"),a("code",[t._v("event")]),t._v("为必传，template 的用法与 Logger 的 template 用法完全一致，而 event 为当前推送事件的名称。")]),t._v(" "),a("p",[t._v("你可能会奇怪，为什么需要多加一个 event 参数，因为对于 CMS 来说，管理员需要决定某些用户可接受的推送消息，有一些消息只能推送到某些人。因此请开发者你谨慎使用 event 这个属性，因为有些推送消息不能让某些人知道。")]),t._v(" "),a("p",[t._v("接下来，当任何用户访问该 API 时，CMS 前端便可以接受到一条推送消息，关于真正的实现效果，"),a("a",{attrs:{href:""}},[t._v("参考")]),t._v("。")]),t._v(" "),a("RightMenu")],1)}),[],!1,null,null,null);s.default=e.exports}}]);