import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const h=JSON.parse('{"title":"绝对众数相关","description":"","frontmatter":{},"headers":[],"relativePath":"misc/绝对众数相关.md","filePath":"misc/绝对众数相关.md","lastUpdated":1740448168000}'),l={name:"misc/绝对众数相关.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="绝对众数相关" tabindex="-1">绝对众数相关 <a class="header-anchor" href="#绝对众数相关" aria-label="Permalink to &quot;绝对众数相关&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">定义：序列a[1~n]中出现次数大于floor(n/2)的数</span></span>
<span class="line"><span style="color:#e1e4e8;">性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	绝对众数是众数</span></span>
<span class="line"><span style="color:#e1e4e8;">	任何一个可重集的绝对众数唯一</span></span>
<span class="line"><span style="color:#e1e4e8;">	两个可重集合并成新可重集，新的绝对众数如果存在，那必然是原来两个可重集的绝对众数之一</span></span>
<span class="line"><span style="color:#e1e4e8;">	端点一定的区间的绝对众数最多O(log)个</span></span>
<span class="line"><span style="color:#e1e4e8;">常见问题：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">判定某个数是否是绝对众数：</span></span>
<span class="line"><span style="color:#e1e4e8;">	将是该数的设为1，否则设为-1，判断和是否是正的</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	此做法可以扩展至判定某个数的出现次数形如&gt;n/k的形式</span></span>
<span class="line"><span style="color:#e1e4e8;">	例如：x&gt;=floor((x+y)/3)，解得 2x-y&gt;-3，那么可以分别赋2，-1的权值，将其和与-3比较</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	此做法的优势是不用考虑区间长度</span></span>
<span class="line"><span style="color:#e1e4e8;">区间绝对众数：</span></span>
<span class="line"><span style="color:#e1e4e8;">	摩尔投票法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		区间信息是：绝对众数及其对消后的次数</span></span>
<span class="line"><span style="color:#e1e4e8;">		该信息有可加性，可以结合线段树实现</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，其结果需要进行判定（不保证一定有绝对众数）</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		该做法可以扩展至求出现次数大于n/k的数：</span></span>
<span class="line"><span style="color:#e1e4e8;">			具体的，维护k-1个可能的绝对众数a[1~k-1]，我们先考虑加入一个数x的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">			若x在a序列中出现过，则将其次数++</span></span>
<span class="line"><span style="color:#e1e4e8;">			否则，看有没有空的位置，有就给x</span></span>
<span class="line"><span style="color:#e1e4e8;">			否则，就给所有的数的次数--</span></span>
<span class="line"><span style="color:#e1e4e8;">			同样也要判定合法性</span></span>
<span class="line"><span style="color:#e1e4e8;">	概率做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次在区间中随机一个数判定</span></span>
<span class="line"><span style="color:#e1e4e8;">		非常容易扩展到n/k的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">	中位数做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		绝对众数一定是中位数</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以用主席树实现</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		扩展有限，只能扩展到n/2+dt的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">P3765</span></span>
<span class="line"><span style="color:#e1e4e8;">[ARC159F] Good Division：是P4062的强化版</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先有平方的1D/1D的DP，瓶颈在转移</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接套分支结构DS不行，那只能上分治了</span></span>
<span class="line"><span style="color:#e1e4e8;">	利用log结论和信息合并的结论，可以得到分治区间内有用的绝对众数是log的</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">定义：序列a[1~n]中出现次数大于floor(n/2)的数</span></span>
<span class="line"><span style="color:#24292e;">性质：</span></span>
<span class="line"><span style="color:#24292e;">	绝对众数是众数</span></span>
<span class="line"><span style="color:#24292e;">	任何一个可重集的绝对众数唯一</span></span>
<span class="line"><span style="color:#24292e;">	两个可重集合并成新可重集，新的绝对众数如果存在，那必然是原来两个可重集的绝对众数之一</span></span>
<span class="line"><span style="color:#24292e;">	端点一定的区间的绝对众数最多O(log)个</span></span>
<span class="line"><span style="color:#24292e;">常见问题：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">判定某个数是否是绝对众数：</span></span>
<span class="line"><span style="color:#24292e;">	将是该数的设为1，否则设为-1，判断和是否是正的</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	此做法可以扩展至判定某个数的出现次数形如&gt;n/k的形式</span></span>
<span class="line"><span style="color:#24292e;">	例如：x&gt;=floor((x+y)/3)，解得 2x-y&gt;-3，那么可以分别赋2，-1的权值，将其和与-3比较</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	此做法的优势是不用考虑区间长度</span></span>
<span class="line"><span style="color:#24292e;">区间绝对众数：</span></span>
<span class="line"><span style="color:#24292e;">	摩尔投票法：</span></span>
<span class="line"><span style="color:#24292e;">		区间信息是：绝对众数及其对消后的次数</span></span>
<span class="line"><span style="color:#24292e;">		该信息有可加性，可以结合线段树实现</span></span>
<span class="line"><span style="color:#24292e;">		注意，其结果需要进行判定（不保证一定有绝对众数）</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		该做法可以扩展至求出现次数大于n/k的数：</span></span>
<span class="line"><span style="color:#24292e;">			具体的，维护k-1个可能的绝对众数a[1~k-1]，我们先考虑加入一个数x的情况</span></span>
<span class="line"><span style="color:#24292e;">			若x在a序列中出现过，则将其次数++</span></span>
<span class="line"><span style="color:#24292e;">			否则，看有没有空的位置，有就给x</span></span>
<span class="line"><span style="color:#24292e;">			否则，就给所有的数的次数--</span></span>
<span class="line"><span style="color:#24292e;">			同样也要判定合法性</span></span>
<span class="line"><span style="color:#24292e;">	概率做法：</span></span>
<span class="line"><span style="color:#24292e;">		每次在区间中随机一个数判定</span></span>
<span class="line"><span style="color:#24292e;">		非常容易扩展到n/k的情况</span></span>
<span class="line"><span style="color:#24292e;">	中位数做法：</span></span>
<span class="line"><span style="color:#24292e;">		绝对众数一定是中位数</span></span>
<span class="line"><span style="color:#24292e;">		可以用主席树实现</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		扩展有限，只能扩展到n/2+dt的情况</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">P3765</span></span>
<span class="line"><span style="color:#24292e;">[ARC159F] Good Division：是P4062的强化版</span></span>
<span class="line"><span style="color:#24292e;">	首先有平方的1D/1D的DP，瓶颈在转移</span></span>
<span class="line"><span style="color:#24292e;">	直接套分支结构DS不行，那只能上分治了</span></span>
<span class="line"><span style="color:#24292e;">	利用log结论和信息合并的结论，可以得到分治区间内有用的绝对众数是log的</span></span></code></pre></div>`,3),t=[p];function o(c,i,r,y,d,_){return n(),a("div",null,t)}const k=s(l,[["render",o]]);export{h as __pageData,k as default};
