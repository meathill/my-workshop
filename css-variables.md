---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
highlighter: shiki
lineNumbers: true
info: |
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
---

# 深入浅出 CSS Variables

跟 Stylus、Less、Sass 说拜拜

<div class="pt-12">
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

# 基础范例

```css
:root {
  --my-color: #369;
}

.some-class {
  --my-color: #f90;
}

.inner-class {
  color: var(--my-color);
}
```

---

# 计算属性 `calc()`

```css
:root {
  --w-64: 16rem;
}

.inner-class {
  width: calc(var(--w-64) * 2);
}
```

---

# 优势场景：多属性动画

有时候我们需要调整某一项属性，但是又不想影响其他属性，这时候就可以使用 CSS Variables。

```css
.transition1 {
  transform: scale(--scale) rotate(--rotate);
}

```

---

# 预处理工具的问题

* 与 `rgb()` `rgba()` 冲突
