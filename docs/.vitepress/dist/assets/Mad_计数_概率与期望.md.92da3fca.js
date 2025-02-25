import{_ as a,o as e,c as l,Q as t}from"./chunks/framework.e7363dcb.js";const f=JSON.parse('{"title":"概率与期望","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/计数/概率与期望.md","filePath":"Mad/计数/概率与期望.md","lastUpdated":1738666900000}'),i={name:"Mad/计数/概率与期望.md"},r=t('<h1 id="概率与期望" tabindex="-1">概率与期望 <a class="header-anchor" href="#概率与期望" aria-label="Permalink to &quot;概率与期望&quot;">​</a></h1><h2 id="常见结论" tabindex="-1">常见结论 <a class="header-anchor" href="#常见结论" aria-label="Permalink to &quot;常见结论&quot;">​</a></h2><h3 id="期望的线性性" tabindex="-1">期望的线性性 <a class="header-anchor" href="#期望的线性性" aria-label="Permalink to &quot;期望的线性性&quot;">​</a></h3><ul><li>$E(X + Y)=E(X)+E(Y)$</li><li>$E(aX)=aE(X)$</li></ul><h4 id="应用" tabindex="-1">应用 <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用&quot;">​</a></h4><p>将一个大的随机事件拆解成若干个随机事件的和，从而分别计算。</p><h3 id="无限操作的小结论" tabindex="-1">无限操作的小结论 <a class="header-anchor" href="#无限操作的小结论" aria-label="Permalink to &quot;无限操作的小结论&quot;">​</a></h3><p>一个事件的成功概率是 $p$，不断进行该事件直到成功的期望操作次数是 $\\frac{1}{p}$。</p><h2 id="价值和计数转期望" tabindex="-1">价值和计数转期望 <a class="header-anchor" href="#价值和计数转期望" aria-label="Permalink to &quot;价值和计数转期望&quot;">​</a></h2><h3 id="适用条件-同时满足" tabindex="-1">适用条件（同时满足） <a class="header-anchor" href="#适用条件-同时满足" aria-label="Permalink to &quot;适用条件（同时满足）&quot;">​</a></h3><ul><li>对于所有操作序列求对应方案的价值和。</li><li>操作序列是个排列。</li></ul><h3 id="具体处理" tabindex="-1">具体处理 <a class="header-anchor" href="#具体处理" aria-label="Permalink to &quot;具体处理&quot;">​</a></h3><ul><li>选择一个决策的概率等于其对应的方案数占总方案数的比值 （通常是当前剩下没确定的操作序列位置数的倒数） 。一些对价值和计算没有影响（只是产生了方案数的乘积）的操作可以忽略。</li><li>正着算需要记录方案数（概率）和价值和，反着算就只记录期望了。</li><li>最后得到的期望乘上操作序列的种数就是答案。</li></ul><h3 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h3><ul><li>如果不用此trick，此类问题通常要记录价值和、方案数两个DP数组（此类问题通法）。应用此trick可以大大简化DP式，使优化更为显然和方便。</li><li>应当注意的是，这是特殊做法，一般情况下还是应该使用两个DP数组做计数。</li></ul>',15),o=[r];function h(d,n,c,s,_,u){return e(),l("div",null,o)}const m=a(i,[["render",h]]);export{f as __pageData,m as default};
