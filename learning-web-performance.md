---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  Presentation slides for developers.
    
  Learn more at [Sli.dev](https://sli.dev)
drawings:
    persist: false
css: unocss
---

# 从浏览器渲染理解 Web 性能

“在浏览器地址栏输入 URL，按下回车后会发生什么？”

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    @meathill
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/meathill/my-workshop" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: image-right
image: https://evereditor.com/meathill.jpg
---

# @Meathill

- 全栈工程师
- 兴趣使然的分享者
- 就职于 Code.fun，远程工作
- 现居广州

---

# 本次分享的目标

- 📖 了解浏览器渲染的基本流程
- 💡 了解影响网页渲染的因素
- 📈 从而了解网页性能优化的方式

---
layout: center
---

# 在地址栏输入 URL，按下回车后发生了什么？

<a href="https://blog.meathill.com/tech/fe/css/video-right-way-to-use-tailwindcss.html" target="_blank" class="text-2xl">https://blog.meathill.com/tech/fe/css/video-right-way-to-use-tailwindcss.html</a>

---
layout: statement
---
集中讨论以 SPA 为主的前端应用。

集中讨论启动状态，不考虑交互状态。

以前端视角为主。

---

# 🔍 第一步：域名解析

### https://blog.meathill.com/tech/fe/css/video-right-way-to-use-tailwindcss.html

<br />

- 协议：`https`
- 域名：`blog.meathill.com`
- 路径：`/tech/fe/css/video-right-way-to-use-tailwindcss.html`
- 隐藏属性- 端口：`443`
- 隐藏属性- 检索参数，如：`'?a=foo&b=2'`
- 隐藏属性- 锚点，如：`'#comments'`

---

## 💡影响性能的关键：域名解析

<br />

- 将域名解析成 IP
- 由近及远查询
- 默认使用缓存

<br />

### 📈 优化方向

<br />

- 使用 `dns-prefetch`
- 减少域名数量
- 使用第三方知名域名

---

# 🔗 第二步：建立连接

<br />

- 浏览器会尝试连接对方的服务器
- 因为彼此存在不同的网络环境，连接过程会比较复杂
- 这个阶段优化空间不大，一般和服务器部署有关
- 后端可以使用 CDN 加速

---

# 📃 第三步：发起请求

- 浏览器构建请求
- ```
    GET /tech/fe/css/video-right-way-to-use-tailwindcss.html HTTP/1.1
    Host: blog.meathill.com
    User-Agent: xxx
    Cookie: foo=bar; bar=baz
    ……
    ```
- 请求方法 http method
- 请求路径 path
- 请求头 headers
- 请求体 body

---

### 📈优化方向

<br />

- 减少请求数量
- 利用 cookie 传递初始化所需的数据

---

# ⏬ 第四步：下载网页

<br />

- 检查响应头，是否适用缓存
- 是 -> 直接启用缓存，进入渲染阶段
- 否 -> 下载网页

<br />

### ⚠️ 注意事项

<br />

- 尽量不要给 HTML 加缓存，以避免更新问题

---

# 🎨 第五步：边解析边渲染

<br />

- 边下载、边解析、边渲染
- `<link>` 不会阻塞渲染
- `<script>` 可能会阻塞渲染
- 图片、视频等资源一般不会阻塞渲染
- 因为嵌套关系，渲染一般发生在闭合标签时
- 加载完成，分别触发 `load`，`DOMContentLoaded` 事件

---

## 💡 影响性能优化的因素：`<script>` 阻塞渲染

<br />

- `<script>` 包含影响 DOM 的方法，所以会阻塞渲染
- `<script defer>` 不阻塞渲染，脚本会按顺序执行
- `<script async>` 不阻塞渲染，脚本加载完就会执行
- `<script type="module">` 会按需加载，按需执行
- `<script>` 会影响到 `DOMContentLoaded` 事件

<br />

### 📈 优化方向

<br />

- 尽量将 `<script>` 放在 `<body>` 末尾
- 添加 `defer` 或 `async` 属性
- 业务无关的代码（比如统计脚本），建议最后手动加载

---

## 💡 影响性能优化的因素：首屏渲染

<br />

- FCP（First Contentful Paint）：第一次渲染的时间点，发生在 `<head>` 加载完成后
- FCP 一般不会影响渲染的总时间，但对用户体验帮助巨大
- 通常来说，我们希望 FCP < 1s

<br />

### 📈 优化方向

<br />

- 将关键样式放在 `<head>` 中
- `<head>` 里不要加载会阻塞渲染的 `<script>`
- 首屏 HTML 要放在一个闭合标签里
- 将首屏内容需要的东西以 inline 的方式放在 `<head>` 里
- 使用骨架屏

<!--
【补充】首屏渲染 FCP：
可以将首屏渲染需要的内容直接写到 `<head>` 里。
通常来说，html 体积都不大，几k 的内容放在现代化网络里对加载时间影响微乎其微，但是减少网络请求带来的收益可能很高。所以这是个很可行的优化方向。
-->

--- 

## 💡 影响性能优化的因素：并行加载

<br />

- http/1.1 可以同时从一个域名下载 6 个资源
- http/2 通过复用连接，可以同时下载更多资源

<br />

### 📈 优化方向

<br />

- 服务器使用 http/2 协议
- 如果使用 http/1.1，可以使用多个域名；否则，少使用一些域名
- 压缩请求数
- 减少首次加载内容，使用 lazy-load 加载图片等资源
- 非核心内容人工延迟加载

--- 

## 💡 影响性能优化的因素：CLS

<br />

- CLS（Cumulative Layout Shift）是页面布局的稳定性
- 如果在渲染过程中，页面出现大量布局变化，会影响用户体验
- 所以 Google Web Vitals 中，将 CLS 纳入考量

<br />

### 📈优化方向

<br />

- 使用骨架屏
- 减少使用 web fonts
- 给图片添加起始尺寸
- 避免后期加载的内容导致页面变化

---

## 💡 影响性能优化的因素：LCP

<br />

- LCP（Largest Contentful Paint）是页面最大内容的渲染时间
- 面积最大的内容，通常也是最重要的内容，所以 Google Vitals 用这个指标衡量用户体验

<br />

### 📈 优化方向

<br />

- 将关键内容放在网页文件的前面
- 通过样式调整，满足产品的需要的同时，让关键内容尽早渲染

---

# 🚚 第六步：加载资源

<br />

- 同样的效果，体积可能大不一样
- 优化资源，不仅提升用户体验，还给自己省钱

<br />

### 📈优化方向

<br />

- 减少请求的数量
- 压缩图片：位图 webp，矢量 svg
- 压缩视频 mp4
- 使用视频替代 gif
- 增加缓存时间

---

# 🎯 第七步：执行 JS

<br />

终于聊到 SPA 的关键步骤。

- 所有 JS 都要先执行
- SPA 里，JS 负责渲染页面
- 所以 JS 的执行时间，直接影响到用户体验

---

## 💡 影响性能优化的因素：执行效率

<br />

- 原生 API，性能更好
- 新特性，通常有更好的优化效率
- 静态代码更容易优化

<br />

### 📈 优化方向

<br />

- 在开发中多使用新特性，通过构建工具保证兼容性
- 通过统计工具，照顾尽可能多的用户，但要适当提高目标平台的要求
- 配置编译工具，尽可能使用原生 API
- 不要使用 `eval`，`new Function()` 等方法

---

## 💡 影响性能优化的因素：代码量

<br />

- 代码量越少，下载时间越短
- 代码量越少，执行时间越短
- 用户通常只需要 20% 的功能，不要让他们下载 100% 的代码

<br />

### 📈 优化方向

<br />

- 代码分模块，按需加载
- 使用 ES Module，配合 http/2
- 使用 tree-shaking
- 使用高版本的第三方库

---

### 📈 优化方向：复用缓存

<br />

- 代码分模块时，根据使用场景分组
- 升级依赖的时候，尽量集中更新某个模块
- 尽量让生成的代码具备一样的 hash
- 如果有多个项目，则尽量使用同样的分包

---

# 💪 第八步：渲染完成

<br />

现代化前端 SPA 的渲染通常是分阶段的：

- 得到服务器响应后，快速渲染出骨架屏
- 加载必要的资源后，渲染出首屏
- 渲染出大部分页面骨架，等待静态资源慢慢加载

---

## 💡 影响性能优化的因素：FID

<br />

- FID（First Input Delay）是用户第一次交互的延迟
- 通常与重负荷的 JS 有关

<br />

### 📈 优化方向

<br />

- 减少冷启动的 JS 执行时间
- 拆分模块，按需加载，使用懒加载
- 重负荷的工作交给 web worker
- 非业务工作，可以延迟执行

---

## 💡 影响性能优化的因素：SSR

<br />

- SSR（Server Side Rendering）服务端渲染，即在服务器上渲染出页面内容，再返回给客户端
- 通常 SPA 需要等待 JS 执行完毕，再请求数据，再渲染页面
- SSR 可以让用户更早看到内容，提升用户体验

<br />

### 📈 优化方向

<br />

- 使用 SSR 框架，比如 Nuxt.js，Next.js
- 使用支持边缘计算和 Serverless 的服务，比如 Vercel
- 使用预渲染提前渲染页面

<br />

> 打个广告，我的 Nuxt.js 教程正在筹备制作中。
---

# 🔋 第九步：为用户回访、站内跳转做准备

<br />

- 静态资源保留较长时间的缓存
- 加强资源复用，减少请求
- 提前预缓存、预加载、本地化所需资源
- 不常变的数据，缓存在用户本地

---

# 🎉 总结

<br />

- 页面性能优化是一个持续的过程，需要结合业务场景，不断优化
- 页面性能优化需要多部门协作，共同努力，整体通盘考虑
- 页面性能优化不仅能提升用户体验，还可以给公司省钱
- 本次分享以前端视角为主，其它领域的优化点，需要大家自发总结

---
layout: fact
---

本次分享的内容是流行面试题，建议大家全文背诵。

🫵

---
layout: center
class: text-center
---

# 欢迎提问

[博客](https://blog.meathill.com) · [Bilibili](https://space.bilibili.com/7409098) · [@meathill](https://weibo.com/meathill)
