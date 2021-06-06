---
title: 架构
---

# 架构

## 前言

在正文之前，笔者觉得还是很有必要来唠唠嗑的。一谈到架构这个问题，很多人些许有些慌了，
是不是很难啊？是不是很复杂啊？是不是得精通各种技术才能学啊？

当然不是，架构不是具体实现。你只需要有一点想象力，有一点理解能力，
另外还有一点看图能力，你就能大概的理解本章的内容。

当然了，如果你专注于开发，啪啦啪啦的写代码完全可以略过本节，因为本小节没有代码；
如果你想更好的开发、更有计划的开发甚至想参与 lin-cms 的开发，那么本节是你必不可少的一节。

## 结构

`架构`这个词或许显得有些高大上，所以我们先以`结构`这个词来理解理解。一般地，我们
可以把结构大致的分为两类——即水平结构和垂直结构。

这样就很好理解了，一个产品的落地可能是水平结构，可能是垂直结构，当然了，大概率还
是水平+垂直的结构。

`lin-cms`是鲜明的`垂直结构`，且被分为了三层，`core`，`starter`和`demo`。

```bash
--------       -----------       ----------
|      |       |         |       |        |
| core | --->  | starter | --->  |  demo  |
|      |       |         |       |        |
--------       -----------       ----------
```

不要被上面的图所误导，虽然它是横着画的，可是它确实是从最底层的`core`一直通过箭头
向上推进到`demo`的，所以它确实是垂直结构。

而且这三层是上下依赖的，即`demo`依赖`starter`，`starter`依赖`core`。

说了那么多，究竟什么是`demo`和`starter`啊？先卖个关子，如果你对 lin-cms 的开发足
够熟悉可以先琢磨琢磨。答案嘛，别急，在下面！

## 边界

既然谈到`分层`，那就必须得谈到另一个概念——`边界`。例如，core 与 starter 这两层是
被什么分开的，当然是被边界分开的。

那么`lin-cms`的结构必然会存在两个边界，分别用来分开`core`与`starter`以及
`starter`与`demo`。这两个边界如下：

- lin 边界。我们在 core 中封装了一些可复用的类库，这些类库不仅可以帮
  助`starter`层进行快速的开发，还能帮助其它的 java 项目进行开发。这样的类库需放
  在 core 里面，它可以服务于其它的项目。我们以 lin 为边界来区分，把可复用的类库
  放到了 core 中，把跟 lin 相关的放在了 starter 中。如果你熟悉 spring-boot，那么
  一定能理解`starter`，没错，这里的 starter 就是 spring-boot 的 starter，它提供
  了自动装配和配置信息。

- 业务边界。`starter`提供了配置和具体的业务结构，但 starter 中不存放任何与具体业
  务相关的代码，应该把业务代码存放在 demo 中。starter 中应是业务的结构和逻辑，而
  将具体的业务实现交给 demo。

好，你可能已经蒙圈了。没关系，你只需要知道，我们的三层结构是通过两个边界区分的，
这两个边界分别是`与lin有无关系`，`与业务有无关系`。

知道了边界以后，我们再来摆出`core`、`starter`和`demo`的定义。

- `core`：全名 lin-cms-core，其实就是一堆基础类库，方便我们进行业务开发。
- `starter`：全名 lin-cms-starter，其实就是 spring-boot 里面的 starter，提供自动
  装配和默认配置，但不涉及具体业务的实现。
- `demo`：全名 lin-cms-spring-boot，也就是我们的工程项目。

## 功能点

下面我们将会概括性的介绍一下`core`与`starter`的功能。

### core

代码目录如下：

```bash
core/src/main/java/io/github/talelin/core/
├── annotation  注解类
├── constant      常量类
├── enumeration       枚举类
├── logger      日志
├── token       令牌
└── util       工具函数类
```

在文件夹的后方，我们已经标注了其作用。

目前来说，core 的功能其实不多，主要如下：

1. 定义了 lin-cms 里面需要的注解和枚举。
2. 自定义 logback appender 类，方便实现文件日志记录。
3. 提供了令牌类库，方便使用 JWT。

### starter

代码目录如下：

```bash
├── autoconfigure 自动装配类
├── bean          java bean，全局信息类
├── exception     异常类
├── interceptor   spring-mvc 拦截器
├── interfaces    抽象接口
├── response      统一相应类
├── util          工具类
└── validator     校验类
```

在文件夹的后方，我们也已经标注了其作用。

starter 的主要功能如下：

1. 提供自动配置装配
2. 提供常见异常类，方便在工程中直接使用。
3. 提供抽象接口，供工程项目实现。
4. 提供校验类，供工程项目使用。

<RightMenu />