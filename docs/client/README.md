---
title: Layout布局
---

# Lin的Layout布局

想要了解一个 CMS 系统，可以从 Layout 布局开始，从中可以看出其设计理念。将下图分解为以下几个模块：

- 页面顶部 Header组件
- 左侧菜单 SideBar组件
- 历史记录 ReuseTab组件
- 右侧菜单 MenuTab组件
- 白底舞台 AppMain组件

PS：约定白底界面部分为 `舞台`。

除 `舞台` 外，其他模块已经内置在 Lin 中，开发者只需要集中精力在舞台上开发自己的 CMS 业务即可。

<img-wrapper>
  <img src="https://consumerminiaclprd01.blob.core.chinacloudapi.cn/miniappbackground/sfgmember/lin/lin-cms-ui.png">
</img-wrapper>

## 页面顶部 Header组件

页面顶部 Header 组件依次包含了面包屑导航、页面全屏、个人中心等功能模块，这里就是一个应用的头部，后续还将扩充消息推送等其他功能。

## 左侧菜单 SideBar组件

- 左侧菜单根据路由配置显示，不同权限的管理员登录看到的菜单有所不同。
- 左侧菜单支持一级和二级路由，如果存在三级路由将在右侧内容区以 tab 的形式渲染。

## 历史记录 ReuseTab组件

- 管理员登录后，查看的不同路由页面，将以历史记录的形式留存在该组件。
- 历史记录超过屏幕宽度可以左右滑动。

## 右侧菜单 MenuTab组件

框架提供了三级菜单机制，也就是按照父子关系写三级就行了。如果你并不想在左侧 sideBar 显示，框架同样提供了在右侧以 menuTab 形式存在的可能，

方法：配置右侧路由的上级路由类型为 `tab`

```js
    {
      title: '分组管理',
      type: 'tab', // 类型: folder, tab, view
      children: [
        {
          type: 'view',
          title: '分组列表',
        },
        {
          type: 'view',
          title: '添加分组',
        },
      ],
    },
```

请一定要理解路由三种type的含义： 

| folder | tab   | view |
| ---- | ----- |----- |
| 父路由，没有具体页面，控制左侧菜单折叠 | 父路由，配置子路由到右侧，默认选中第一个 | 视图页面，最底层路由 |

## 舞台 AppMain组件

`舞台` 是业务核心组件，每个开发者的业务不尽相同，需要根据实际情况来决定实现效果。

<RightMenu />