---
theme: seriph
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

# 如何使用 TailwindCSS

取其精华，为我所用

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    @meathill
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/meathill/slides" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# TailwindCSS 简介

TailwindCSS 是一套原子化的 UI 框架。

- 📝 **原子化** - 提供大量具体的原子化样式，关注每个属性
- 🎨 **好看** - 默认样式比原生 CSS 更好看
- 🧑‍💻 **语法友善** - 比 CSS 更好懂、更简单
- 🤹 **构建优化** - 生成的代码只包含使用到的样式，体积很小
- 🎥 **生态丰富** - 围绕它已经有丰富的生态成长起来
- 📤 **Dark 模式、响应式** - 自带黑暗模式、响应式支持
- 🛠 **可配置可扩展** - 提供比较方便的扩展方法

<br>
<br>

Read more about [TailwindCSS](https://tailwindcss.com)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---

# 看下示范

我们看下 TailwindCSS 官方的例子：[TailwindCSS Playground](https://play.tailwindcss.com)

[TailwindCSS Playground](/tailwindcss/img_2.png)

---

# TailwindCSS 好用么？

<br>
<br>

[代码截图](/tailwindcss/img.png)

---

# 我的建议

在合适的地方使用 TailwindCSS。

- 过分原子化的样式会导致代码难以维护
- 可以选择一个基础框架，比如 AntDesign、Element-UI
- 或者选择基于 TailwindCSS 打造的整体框架，比如 [DaisyUI](https://daisyui.com)
- 然后配合 TailwindCSS 的工具类，可以很方便的调整样式
- 自己使用 `@apply` 组织一些常用组件

---

# 前端框架的选择原则

<br />

- 当你第一次写一个组件的时候，能否少敲几次键盘；
- 当你需要另一个类似的节点时，能否少敲几次键盘；
- 当你要改变某一类型节点时，能否少敲几次键盘

---

# DaisyUI

推荐配合 DaisyUI 使用 [DaisyUI](https://daisyui.com).

[DaisyUI 首页](/tailwindcss/img_1.png)

---
src: ./pages/qa.md
---
