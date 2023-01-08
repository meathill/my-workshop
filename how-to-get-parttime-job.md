---
theme: bricks
background: https://source.unsplash.com/collection/94734566/1920x1080
highlighter: shiki
lineNumbers: false
info: |
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
---

# 私单纪实：接洽不懂技术的甲方

用项目管理提升说服力

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
src: ./pages/author.md
---

---
layout: intro
---

# 最近接了一个电商独立建站项目，也不管是不是打自己的脸了，分享经验给大家

---
layout: section
---

# 项目背景

::right::

## 跨境电商独立建站

* 朋友的朋友，因疫情而恢复联系
* 无技术背景
* 个人项目，预算只有几千块
* 希望基于 Shopify 做独立建站

---
layout: quote
---

# "尽量不要接私单"

<v-click>

<img alt="Nick Young" src="/nick-young.jpg" class="h-32 block mx-auto" />

</v-click>

---

# 不接私单的原因

* 报酬通常偏低
* 很难获得持续性收入
* 未必能拿到全款
* 缺少长期的资产积累

---

# 为什么接这个单子？

* 跨境电商，可以填补项目经验上的空白
* Shopify 在独立建站方面有很大优势
    * 提供完整的供销存管理功能
    * 提供完整 API，开发网站只需要做前端展示部分
    * 前端框架基于 Next.js + React + TailwindCSS，且支持 Vercel Serverless 部署
* 相信会有很多同学对这方面的教程感兴趣，可以补充收益
* 有几个朋友处于失业状态，可以帮忙

---
layout: fact
---

# 结论：接单

自己能学习新技术，还有人给钱，何乐而不为？

---

# 初步接触
确认基本需求

> * 做运动服装品牌，国内生产，主攻国外市场
> * 除了网站自营，还可以链接到 Amazon、eBay
> * 希望网站能包含库存管理
> * 希望网站上有FACEBOOK, INSTAGRAM，PINTEREST等的链接
> * 以前用过WooCommerce，这次想用 Shopify

---

# 我方给出 Demo 网站
初步接触

* Shopify Hydrogen 起始网站
* 包含用户注册、登录、购买的完整流程
* 包含首页、列表页、详情页等必须页面

客户评价：

> 看起来很不错。

---
layout: quote
---

 # "怎么收费？"

---

# 对客户的判断
知己知彼，百战不殆

* 无技术背景，亦缺少研发项目管理经验
* 个体户小老板，刚开始创业，预算有限，价格敏感
* 初创项目，需求很多

需要我们：

* 提供完整的技术方案
* 帮忙进行项目管理
* 甄别需求优先级，合理报价，帮老板进行取舍

---

# 合理报价
拒绝拍脑门

* 明确费用分类
    1. 设计费用
    2. 开发费用
    3. 域名、服务器、Shopify 服务费等第三方费用
    4. 其它需求，比如 seo，需要进一步拆包
* 尽可能详细拆分需求到功能点
* 明确功能点的要求和边界
* 以功能点为单位，给出报价
* 最终得出总报价

---

# 报价模板
详细拆分，截图留证

![报价截图](/how-to-get-parttime-job/phase1-plan.png)

---

# 注意事项
合理报价的价值

* 报价单完整，有助于雇工双方妥善评估工作量
* 报价单同时也是规格说明书，超过这个表格的东西，可以不做，或者加钱
* 所以也要留下截图等附件，不能停留在口头
* 推荐使用 airtable 等低代码工具

---

# 上线任务安排
让老板对上线时间有个预期

![上线任务安排](/how-to-get-parttime-job/tasks.png)

---

# 费用支付安排
分阶段支付，确保双方利益

![费用安排](/how-to-get-parttime-job/payment.png)

---

# 关于发票
越来越绕不开的话题

* 委托有公司的朋友帮忙
    * 可能涉及到合同签署 
* 自己注册公司
* 去地税局开发票
* 用其它发票抵扣，云服务商最好

> 要相信我们的财会制度，基本没什么空子给你钻。

---

# 第三方账号管理
上线后需要全部移交给客户

![第三方账号管理](/how-to-get-parttime-job/third-party.png)

---

# 总结
希望大家都能得到合理的、理想的收入

* 全面考虑得失，多方面开拓收入渠道，不轻易一票否决
* 多个朋友多条路，好好服务每个客户，买卖不成仁义在
* 通过合理的报价、清晰的报价单，让客户对费用有合理认知，同时也保证未来工作顺利开展
* 物料准备能让自己显得更加专业，让客户更加放心
* 积极贡献自己的经验，提升说服力，让客户觉得物超所值

---
layout: fact
---

## 敬请期待：
# Shopify 独立电商网站教程

---
src: ./pages/qa.md
---
