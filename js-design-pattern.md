---
theme: default
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  Design Pattern for JavaScript, in 2023
drawings:
    persist: false
css: unocss
---

# JavaScript 设计模式

年年岁岁花相似，岁岁年年人不同。2023 年，我们怎么学习 JavaScript 设计模式？

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
- 独立开发+远程工作
- 现居广州

---

# 本次分享的目标

- 📖 了解设计模式
- 💡 理解 JavaScript 下的设计模式
- 📈 明白 2023 年，我们应该怎样学习和理解设计模式
- 🚀 学会从全栈的角度做系统设计

---
layout: center
---

# 什么是设计模式？

---

> 可复用面向对象软件的基础。

&nbsp;

> 在软体工程中，设计模式（design pattern）是对软体设计中普遍存在（反复出现）的各种问题，所提出的解决方案。

---
layout: center
---

# 设计模式的诞生

---
layout: image-right
image: /design-pattern/design-pattern-book.png
---

- 《设计模式》成书于1994年
- 没有很好的图形系统
- 主要针对大型企业级应用，由专业人员开发，服务于专业人员
- 设计模式有标准的定义，标准的文档结构

---
layout: center
---

# 如何学习设计模式

---
layout: center
---

### 学习设计模式，不能套用现在的经验，要结合历史的进程来学习和看待它。

---

- 设计模式已经深入我们的日常开发当中
- 不要纠结名词
- JavaScript 是脚本语言、高级语言
- JavaScript 不是面向对象语言
- JavaScript 里本就包含很多设计模式

---

- 了解设计模式的原理，理解它的动机，默默记下来
- 寻找合适的场景，尝试用自己熟悉的语言实现
- 和传统设计模式做对比，看有没有改进空间、或者是否能对应上
- 不断改进

---
layout: center
---

## 如何判断一篇讲设计模式的文章是否靠谱？

---

## 看他/她怎么写单例模式

- 如果创建类，然后实例化——差评
- 利用打包工具/CommonJS/ESM，输出一个对象——好评

---
layout: center
---

# jQuery 中的优秀设计模式赏析

---

## jQuery
### “Write less, do more”

- 曾经的王者
- 普及率 >= 99%
- 解决兼容性，使用极其方便
- https://jquery.com

---
layout: center
---

# 工厂方法（模式）
# Factory Method

---

> 定义一个用于创建对象的接口，让子类决定实例化哪一个类。Factory Method 使一个类的实例化延迟到其子类。

---

## 万能的 $()

- `$(function () {})`
- `$(dom)`
- `$(‘<div></div>’)`
- `$(‘.selector’)`
- `$(window)`
- `$($(‘.selector’))`
- `$({})`

---
layout: center
---

# 适配器模式
# Adapter Pattern

---

> 将一个类的接口转换成客户希望的另外一个接口。

---

## Ajax

`$.ajax(url, params)`

---
layout: center
---

# 外观模式
# Facade Pattern

---

> 为子系统中的一组接口提供一个一致的界面，Facade 模式定义了一个高层接口。这个接口使得这一子系统更加容易使用。

---

## 选择器

- `$('some-el#some-id.some-class[some-attr]')`
- `$('a').width('100')`

---
layout: center
---

# 组合模式
# Composite Pattern

---

> 将对象组合成树形结构以表示“部分-整体”的层次结构。Composite 是的用户对单个对象和组合对象的使用具有一致性。

---

- `$('a').css('color', 'red')`

---
layout: center
---

# 其它设计模式

- 原型链（Prototype）
- 迭代器（Iterator）
- 代理（Proxy）
- 观察者（Observer）
- 中介者（Mediator）
- ……

---
layout: center
---

# 2023 年的“设计模式”

- 开发工具链
- 浏览器扩展
- 桌面工具
- 云原生

---

# 开发工具链

- Vite
- DSL
- Scripts

---

# 浏览器扩展

- 更丰富的 API
- 模拟用户操作
- 真实的浏览器环境

---

# 桌面工具

- Electron/Tauri/Webview2
- Node.js
- Puppeteer

---

# 云原生

- Serverless Function
- 云数据库/Redis
- Auth0

---
layout: center
---

# 总结

- 学习设计模式很重要
- 新时期，用新的学习方式
- 新时期，用新的“设计模式”

---
src: ./pages/qa.md
---
