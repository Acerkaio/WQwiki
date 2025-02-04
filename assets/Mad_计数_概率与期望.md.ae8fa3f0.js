import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"概率与期望","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/计数/概率与期望.md","filePath":"Mad/计数/概率与期望.md","lastUpdated":1738666900000}'),p={name:"Mad/计数/概率与期望.md"},l=e(`<h1 id="概率与期望" tabindex="-1">概率与期望 <a class="header-anchor" href="#概率与期望" aria-label="Permalink to &quot;概率与期望&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">常见结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">	期望的线性性：</span></span>
<span class="line"><span style="color:#e1e4e8;">		E(X+Y)=E(X)+E(Y)</span></span>
<span class="line"><span style="color:#e1e4e8;">		E(aX)=aE(X)</span></span>
<span class="line"><span style="color:#e1e4e8;">		应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将一个大的随机事件拆解成若干个随机事件的和，从而分别计算</span></span>
<span class="line"><span style="color:#e1e4e8;">	无限操作的小结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		一个事件的成功概率是p，不断进行该事件直到成功的期望操作次数是1/p</span></span>
<span class="line"><span style="color:#e1e4e8;">价值和计数转期望：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用条件（同时满足）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于所有操作序列求对应方案的价值和</span></span>
<span class="line"><span style="color:#e1e4e8;">		操作序列是个排列</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		选择一个决策的概率等于其对应的方案数占总方案数的比值 </span></span>
<span class="line"><span style="color:#e1e4e8;">			（通常是当前剩下没确定的操作序列位置数的倒数） </span></span>
<span class="line"><span style="color:#e1e4e8;">			一些对价值和计算没有影响（只是产生了方案数的乘积）的操作可以忽略</span></span>
<span class="line"><span style="color:#e1e4e8;">		正着算需要记录方案数（概率）和价值和，反着算就只记录期望了</span></span>
<span class="line"><span style="color:#e1e4e8;">		最后得到的期望乘上操作序列的种数就是答案</span></span>
<span class="line"><span style="color:#e1e4e8;">	 作用：</span></span>
<span class="line"><span style="color:#e1e4e8;">	 	如果不用此trick，此类问题通常要记录价值和、方案数两个DP数组（此类问题通法）</span></span>
<span class="line"><span style="color:#e1e4e8;">		应用此trick可以大大简化DP式，使优化更为显然和方便</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		应当注意的是，这是特殊做法，一般情况下还是应该使用两个DP数组做计数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">常见结论：</span></span>
<span class="line"><span style="color:#24292e;">	期望的线性性：</span></span>
<span class="line"><span style="color:#24292e;">		E(X+Y)=E(X)+E(Y)</span></span>
<span class="line"><span style="color:#24292e;">		E(aX)=aE(X)</span></span>
<span class="line"><span style="color:#24292e;">		应用：</span></span>
<span class="line"><span style="color:#24292e;">			将一个大的随机事件拆解成若干个随机事件的和，从而分别计算</span></span>
<span class="line"><span style="color:#24292e;">	无限操作的小结论：</span></span>
<span class="line"><span style="color:#24292e;">		一个事件的成功概率是p，不断进行该事件直到成功的期望操作次数是1/p</span></span>
<span class="line"><span style="color:#24292e;">价值和计数转期望：</span></span>
<span class="line"><span style="color:#24292e;">	适用条件（同时满足）：</span></span>
<span class="line"><span style="color:#24292e;">		对于所有操作序列求对应方案的价值和</span></span>
<span class="line"><span style="color:#24292e;">		操作序列是个排列</span></span>
<span class="line"><span style="color:#24292e;">	具体处理：</span></span>
<span class="line"><span style="color:#24292e;">		选择一个决策的概率等于其对应的方案数占总方案数的比值 </span></span>
<span class="line"><span style="color:#24292e;">			（通常是当前剩下没确定的操作序列位置数的倒数） </span></span>
<span class="line"><span style="color:#24292e;">			一些对价值和计算没有影响（只是产生了方案数的乘积）的操作可以忽略</span></span>
<span class="line"><span style="color:#24292e;">		正着算需要记录方案数（概率）和价值和，反着算就只记录期望了</span></span>
<span class="line"><span style="color:#24292e;">		最后得到的期望乘上操作序列的种数就是答案</span></span>
<span class="line"><span style="color:#24292e;">	 作用：</span></span>
<span class="line"><span style="color:#24292e;">	 	如果不用此trick，此类问题通常要记录价值和、方案数两个DP数组（此类问题通法）</span></span>
<span class="line"><span style="color:#24292e;">		应用此trick可以大大简化DP式，使优化更为显然和方便</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		应当注意的是，这是特殊做法，一般情况下还是应该使用两个DP数组做计数</span></span></code></pre></div>`,2),t=[l];function c(o,r,i,y,d,_){return n(),a("div",null,t)}const E=s(p,[["render",c]]);export{u as __pageData,E as default};
