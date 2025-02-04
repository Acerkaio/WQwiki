import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"非套路分治","description":"","frontmatter":{},"headers":[],"relativePath":"DataStructure/非套路分治.md","filePath":"DataStructure/非套路分治.md","lastUpdated":1738591681000}'),l={name:"DataStructure/非套路分治.md"},p=e(`<h1 id="非套路分治" tabindex="-1">非套路分治 <a class="header-anchor" href="#非套路分治" aria-label="Permalink to &quot;非套路分治&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">分治概述：</span></span>
<span class="line"><span style="color:#e1e4e8;">	很多时候，分治可以被带有分治结构的DS代替</span></span>
<span class="line"><span style="color:#e1e4e8;">	但是分治是DS题最基本的方法，只要是一道题，基本上都可以用</span></span>
<span class="line"><span style="color:#e1e4e8;">分治的性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	我们以线段树的结构来分析分治的结构性质</span></span>
<span class="line"><span style="color:#e1e4e8;">	记一个节点的大小为其对应线段长</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	层数只有log层</span></span>
<span class="line"><span style="color:#e1e4e8;">	所有节点的大小总和是nlogn</span></span>
<span class="line"><span style="color:#e1e4e8;">	每个节点的子树大小和为nlog^2</span></span>
<span class="line"><span style="color:#e1e4e8;">	每个节点的两个子节点的大小几乎相等</span></span>
<span class="line"><span style="color:#e1e4e8;">分治的常见运用：</span></span>
<span class="line"><span style="color:#e1e4e8;">	优化背包合并的复杂度：</span></span>
<span class="line"><span style="color:#e1e4e8;">		闵可夫斯基和，FFT都可以用此优化</span></span>
<span class="line"><span style="color:#e1e4e8;">		有时也可以写成倍增形态</span></span>
<span class="line"><span style="color:#e1e4e8;">	去掉一维偏序：</span></span>
<span class="line"><span style="color:#e1e4e8;">		即CDQ分治</span></span>
<span class="line"><span style="color:#e1e4e8;">		在某些问题中也可以处理修改操作，例如点的统计问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理一般的多次询问问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心：将跨过中线的询问去掉一半，然后将另一半以及其他的询问继续递归</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：跳端点分治</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">ARC184B：</span></span>
<span class="line"><span style="color:#e1e4e8;">	观察到当序列中的某一种元素已经大于假币数量时，我们就可以确定这个序列那些是假币</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以要让序列尽可能长，联想到分治的平衡结构，尝试分治</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑正确性，只要序列长度&gt;2*m，那么序列就一定能确定，所以至少可以减少1000/20=50次询问</span></span>
<span class="line"><span style="color:#e1e4e8;">Gym102331J：</span></span>
<span class="line"><span style="color:#e1e4e8;">	显然有背包+闵可夫斯基和的做法，复杂度O(N^2)</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑到本题不太有其他做法，所以尝试优化当前做法</span></span>
<span class="line"><span style="color:#e1e4e8;">	瓶颈在闵可夫斯基和，发现复杂度就是每棵子树的大小乘上其合并的次数再求和</span></span>
<span class="line"><span style="color:#e1e4e8;">	联想到分治的层数少，可以尝试用分治合并</span></span>
<span class="line"><span style="color:#e1e4e8;">	但是复杂度还是不对，因为每个子树都被合并了一遍</span></span>
<span class="line"><span style="color:#e1e4e8;">	联想到启发式，分一下轻重儿子，轻儿子分治合并，重儿子在重链上分治合并</span></span>
<span class="line"><span style="color:#e1e4e8;">rqrmq1：</span></span>
<span class="line"><span style="color:#e1e4e8;">	略</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">整体二分：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用情况：不强制在线，所有询问都能用二分解决（可以有单点修改）</span></span>
<span class="line"><span style="color:#e1e4e8;">	此类问题的常见思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每个询问二分：复杂度平方对数</span></span>
<span class="line"><span style="color:#e1e4e8;">		暴力均摊：复杂度平方</span></span>
<span class="line"><span style="color:#e1e4e8;">		整体二分：主体随二分的范围变小而变小，复杂度线性对数</span></span>
<span class="line"><span style="color:#e1e4e8;">	整体二分的重要性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		同一层保证二分的值单调递增，可以一起处理</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	区间k大值：</span></span>
<span class="line"><span style="color:#e1e4e8;">		经典题，想怎么做就怎么做</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果带修呢？</span></span>
<span class="line"><span style="color:#e1e4e8;">			将修改看作减掉一个点和加上一个点，和询问一起按时间放进操作序列，然后每次按值域分治操作</span></span>
<span class="line"><span style="color:#e1e4e8;">	多次询问无向图任意两点的min/max最短路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		kruskal重构树板子，但整体二分也能做，结合一下可撤销并查集，每次只加入&lt;=mid的边</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">图分治：</span></span>
<span class="line"><span style="color:#e1e4e8;">	专门处理网格图上的抽象问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	例如：</span></span>
<span class="line"><span style="color:#e1e4e8;">		多次查询</span></span>
<span class="line"><span style="color:#e1e4e8;">		最优化子矩形</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	ZJOI旅行者</span></span>
<span class="line"><span style="color:#e1e4e8;">	各种关于子矩形的题目</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">分治概述：</span></span>
<span class="line"><span style="color:#24292e;">	很多时候，分治可以被带有分治结构的DS代替</span></span>
<span class="line"><span style="color:#24292e;">	但是分治是DS题最基本的方法，只要是一道题，基本上都可以用</span></span>
<span class="line"><span style="color:#24292e;">分治的性质：</span></span>
<span class="line"><span style="color:#24292e;">	我们以线段树的结构来分析分治的结构性质</span></span>
<span class="line"><span style="color:#24292e;">	记一个节点的大小为其对应线段长</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	层数只有log层</span></span>
<span class="line"><span style="color:#24292e;">	所有节点的大小总和是nlogn</span></span>
<span class="line"><span style="color:#24292e;">	每个节点的子树大小和为nlog^2</span></span>
<span class="line"><span style="color:#24292e;">	每个节点的两个子节点的大小几乎相等</span></span>
<span class="line"><span style="color:#24292e;">分治的常见运用：</span></span>
<span class="line"><span style="color:#24292e;">	优化背包合并的复杂度：</span></span>
<span class="line"><span style="color:#24292e;">		闵可夫斯基和，FFT都可以用此优化</span></span>
<span class="line"><span style="color:#24292e;">		有时也可以写成倍增形态</span></span>
<span class="line"><span style="color:#24292e;">	去掉一维偏序：</span></span>
<span class="line"><span style="color:#24292e;">		即CDQ分治</span></span>
<span class="line"><span style="color:#24292e;">		在某些问题中也可以处理修改操作，例如点的统计问题</span></span>
<span class="line"><span style="color:#24292e;">	处理一般的多次询问问题：</span></span>
<span class="line"><span style="color:#24292e;">		核心：将跨过中线的询问去掉一半，然后将另一半以及其他的询问继续递归</span></span>
<span class="line"><span style="color:#24292e;">		例如：跳端点分治</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">ARC184B：</span></span>
<span class="line"><span style="color:#24292e;">	观察到当序列中的某一种元素已经大于假币数量时，我们就可以确定这个序列那些是假币</span></span>
<span class="line"><span style="color:#24292e;">	所以要让序列尽可能长，联想到分治的平衡结构，尝试分治</span></span>
<span class="line"><span style="color:#24292e;">	考虑正确性，只要序列长度&gt;2*m，那么序列就一定能确定，所以至少可以减少1000/20=50次询问</span></span>
<span class="line"><span style="color:#24292e;">Gym102331J：</span></span>
<span class="line"><span style="color:#24292e;">	显然有背包+闵可夫斯基和的做法，复杂度O(N^2)</span></span>
<span class="line"><span style="color:#24292e;">	考虑到本题不太有其他做法，所以尝试优化当前做法</span></span>
<span class="line"><span style="color:#24292e;">	瓶颈在闵可夫斯基和，发现复杂度就是每棵子树的大小乘上其合并的次数再求和</span></span>
<span class="line"><span style="color:#24292e;">	联想到分治的层数少，可以尝试用分治合并</span></span>
<span class="line"><span style="color:#24292e;">	但是复杂度还是不对，因为每个子树都被合并了一遍</span></span>
<span class="line"><span style="color:#24292e;">	联想到启发式，分一下轻重儿子，轻儿子分治合并，重儿子在重链上分治合并</span></span>
<span class="line"><span style="color:#24292e;">rqrmq1：</span></span>
<span class="line"><span style="color:#24292e;">	略</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">整体二分：</span></span>
<span class="line"><span style="color:#24292e;">	适用情况：不强制在线，所有询问都能用二分解决（可以有单点修改）</span></span>
<span class="line"><span style="color:#24292e;">	此类问题的常见思路：</span></span>
<span class="line"><span style="color:#24292e;">		每个询问二分：复杂度平方对数</span></span>
<span class="line"><span style="color:#24292e;">		暴力均摊：复杂度平方</span></span>
<span class="line"><span style="color:#24292e;">		整体二分：主体随二分的范围变小而变小，复杂度线性对数</span></span>
<span class="line"><span style="color:#24292e;">	整体二分的重要性质：</span></span>
<span class="line"><span style="color:#24292e;">		同一层保证二分的值单调递增，可以一起处理</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">	区间k大值：</span></span>
<span class="line"><span style="color:#24292e;">		经典题，想怎么做就怎么做</span></span>
<span class="line"><span style="color:#24292e;">		如果带修呢？</span></span>
<span class="line"><span style="color:#24292e;">			将修改看作减掉一个点和加上一个点，和询问一起按时间放进操作序列，然后每次按值域分治操作</span></span>
<span class="line"><span style="color:#24292e;">	多次询问无向图任意两点的min/max最短路：</span></span>
<span class="line"><span style="color:#24292e;">		kruskal重构树板子，但整体二分也能做，结合一下可撤销并查集，每次只加入&lt;=mid的边</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">图分治：</span></span>
<span class="line"><span style="color:#24292e;">	专门处理网格图上的抽象问题</span></span>
<span class="line"><span style="color:#24292e;">	例如：</span></span>
<span class="line"><span style="color:#24292e;">		多次查询</span></span>
<span class="line"><span style="color:#24292e;">		最优化子矩形</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">	ZJOI旅行者</span></span>
<span class="line"><span style="color:#24292e;">	各种关于子矩形的题目</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
