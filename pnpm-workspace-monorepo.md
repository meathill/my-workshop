---
theme: apple-basic
background: https://source.unsplash.com/collection/94734566/1920x1080
highlighter: shiki
lineNumbers: false
info: |
  介绍如何使用 pnpm workspace 管理 Monorepo，重点是理清概念，
  该由 pnpm 处理的，由 pnpm 处理；其它工作交给其它工具。
drawings:
  persist: false
css: unocss
layout: intro-image
image: 'https://source.unsplash.com/collection/94734566/1920x1080'
---

# 使用 pnpm Workspace 管理 Monorepo 

理清概念，各司其职

<div>
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
src: ./pages/author.md
---

---
layout: section
---

pnpm 简介
======

快速的，节省磁盘空间的包管理工具

---
layout: bullets
---

* 快速：pnpm 会将包缓存到本地，减少二次安装需要的时间
* 节省磁盘空间：它会把包软链到项目本地，不需要反复安装
* 节省网络带宽：同样的道理
* 更好的依赖处理逻辑

---
layout: section
---

Monorepo 简介
======

---
layout: statement
---

# 在一个代码仓库中，
# 管理多个不同的项目。

---
layout: section
---

## 举个例子

- Webpack 及其插件
- 同时包含前后端的大型项目
- Chrome 扩展等有多个入口的项目

---
layout: section
---

## 使用 Monorepo 的优势

- 便于管理多个互相依赖的项目
- 便于团队共享知识库
- 减少项目管理的成本
- 不同项目之间，可以使用不同的依赖/版本

---
layout: section
---

## 使用 Monorepo 的劣势

- 版本管理混乱
- 代码质量参差不齐，且互相影响
- 技术栈升级困难
- 难以进行权限管理

---
layout: quote
---

浅尝 Monorepo
========
https://github.com/slidevjs/themes/tree/main/packages/theme-apple-basic

---
layout: section
---

# 什么时候使用 Monorepo？

---

## 充分条件

- 多个项目互相依赖
- 功能、版本之间存在强关联
- 项目中存在多个编译入口，且构建条件存在差异

## 次要条件

- 希望在团队中共享知识
- 降低项目管理的成本

---
layout: fact
---

# PNPM
管理 Monorepo 的最佳选择

---
layout: section
---

- 速度快
- 磁盘占用少
- 项目依赖彼此独立、隔离
- 有各种命令方便操作

---
layout: section
---

# 创建 pnpm-workspace.yaml

---
layout: section
---

# 引用仓库中的项目

---
layout: section
---

# 安装依赖

---
layout: section
---

# 常见问题解决

---
layout: quote
---

# 基本原则：各司其职

- pnpm 只负责生成依赖目录 `node_modules`
- 脚手架负责在工作目录内构建开发环境、打包项目
- lock 文件负责记录依赖版本号
- `package.json` 负责记录依赖和脚本

---
layout: section
---
❓

需要每个项目文件夹配置单独的入口文件么？
- 是的，需要。每个项目文件夹都是独立的项目。

❓

怎么安装依赖？
- 我建议在每个项目文件夹下面执行 `pnpm i`。

❓

怎么引用依赖？
- 该怎么引用就怎么应用。

---
layout: section
---
❓

怎么打包？怎么启动开发环境？
- 对每个项目而言，跟以前一样。对整个项目，你可以自己写脚本。

❓

单个项目需要发布到 NPM 么？
- 不需要。对同一个 monorepo 下的项目，它们就相当于已经发布了。

❓

怎么处理端口？
- 以前怎么处理，现在还是。workspace 并不会帮你处理端口。

---
layout: statement
---

# Monorepo 的好处在于自身
# pnpm 只是帮我们管理

---
src: ./pages/qa.md
---
