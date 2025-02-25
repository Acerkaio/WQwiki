import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"判定点在回路内的技巧","description":"","frontmatter":{},"headers":[],"relativePath":"misc/判定点在回路内的技巧.md","filePath":"misc/判定点在回路内的技巧.md","lastUpdated":1738666900000}'),l={name:"misc/判定点在回路内的技巧.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="判定点在回路内的技巧" tabindex="-1">判定点在回路内的技巧 <a class="header-anchor" href="#判定点在回路内的技巧" aria-label="Permalink to &quot;判定点在回路内的技巧&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">该技巧的核心思想是将以下两个问题互化：</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.判定一个点是否与外界联通</span></span>
<span class="line"><span style="color:#e1e4e8;">	2.判定一个点是否被回路围住</span></span>
<span class="line"><span style="color:#e1e4e8;">怎么转换呢？</span></span>
<span class="line"><span style="color:#e1e4e8;">	一个点可以四联通等价于回路可以八联通</span></span>
<span class="line"><span style="color:#e1e4e8;">	类似的我们可以转换问题</span></span>
<span class="line"><span style="color:#e1e4e8;">那么以下的两个技巧就是针对这两个问题的：</span></span>
<span class="line"><span style="color:#e1e4e8;">	1.直接用并查集维护联通性，可以处理问题1</span></span>
<span class="line"><span style="color:#e1e4e8;">	2.引一条射线，利用扩展域并查集，可以处理问题2</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1920F2 Smooth Sailing</span></span>
<span class="line"><span style="color:#e1e4e8;">	技巧1做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		原题要求回路四联通，那么就是要求移动点八联通，我们可以维护中心岛屿到某个边界点的联通性</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以预处理出每个点的点权，那么问题转化成去掉权值&lt;=x的点，使中心岛不与目标点联通</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接整体二分结合可撤销并查集即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	技巧2做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		法一：</span></span>
<span class="line"><span style="color:#e1e4e8;">			能围住岛屿等价于出现了并查集中的0类点和1类点联通</span></span>
<span class="line"><span style="color:#e1e4e8;">			直接整体二分即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		法二：</span></span>
<span class="line"><span style="color:#e1e4e8;">			发现这个是最值最短路，可以直接kruskal重构树</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC361G Go Territory</span></span>
<span class="line"><span style="color:#e1e4e8;">	技巧1做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接连会炸掉，但发现有用的只有只有黑点之间的线段，所以可以只保留这些线段进行连边即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		至于如何连边，可以双指针维护相邻相交线段，也可以把黑点上下左右的白点拿出来去试着往旁边的白点连</span></span>
<span class="line"><span style="color:#e1e4e8;">	技巧2做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		发现这等价于询问每个黑点上面的白点是否被回路包围</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑到某个并查集只有在覆盖了射线的情况下才会改变连向，所以直接线段树分治</span></span>
<span class="line"><span style="color:#e1e4e8;">		先对横坐标线段树分治，递归到叶子以后再对纵坐标做线段树分治 即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		https://atcoder.jp/contests/abc361/submissions/55356486</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">该技巧的核心思想是将以下两个问题互化：</span></span>
<span class="line"><span style="color:#24292e;">	1.判定一个点是否与外界联通</span></span>
<span class="line"><span style="color:#24292e;">	2.判定一个点是否被回路围住</span></span>
<span class="line"><span style="color:#24292e;">怎么转换呢？</span></span>
<span class="line"><span style="color:#24292e;">	一个点可以四联通等价于回路可以八联通</span></span>
<span class="line"><span style="color:#24292e;">	类似的我们可以转换问题</span></span>
<span class="line"><span style="color:#24292e;">那么以下的两个技巧就是针对这两个问题的：</span></span>
<span class="line"><span style="color:#24292e;">	1.直接用并查集维护联通性，可以处理问题1</span></span>
<span class="line"><span style="color:#24292e;">	2.引一条射线，利用扩展域并查集，可以处理问题2</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">CF1920F2 Smooth Sailing</span></span>
<span class="line"><span style="color:#24292e;">	技巧1做法：</span></span>
<span class="line"><span style="color:#24292e;">		原题要求回路四联通，那么就是要求移动点八联通，我们可以维护中心岛屿到某个边界点的联通性</span></span>
<span class="line"><span style="color:#24292e;">		可以预处理出每个点的点权，那么问题转化成去掉权值&lt;=x的点，使中心岛不与目标点联通</span></span>
<span class="line"><span style="color:#24292e;">		直接整体二分结合可撤销并查集即可</span></span>
<span class="line"><span style="color:#24292e;">	技巧2做法：</span></span>
<span class="line"><span style="color:#24292e;">		法一：</span></span>
<span class="line"><span style="color:#24292e;">			能围住岛屿等价于出现了并查集中的0类点和1类点联通</span></span>
<span class="line"><span style="color:#24292e;">			直接整体二分即可</span></span>
<span class="line"><span style="color:#24292e;">		法二：</span></span>
<span class="line"><span style="color:#24292e;">			发现这个是最值最短路，可以直接kruskal重构树</span></span>
<span class="line"><span style="color:#24292e;">ABC361G Go Territory</span></span>
<span class="line"><span style="color:#24292e;">	技巧1做法：</span></span>
<span class="line"><span style="color:#24292e;">		直接连会炸掉，但发现有用的只有只有黑点之间的线段，所以可以只保留这些线段进行连边即可</span></span>
<span class="line"><span style="color:#24292e;">		至于如何连边，可以双指针维护相邻相交线段，也可以把黑点上下左右的白点拿出来去试着往旁边的白点连</span></span>
<span class="line"><span style="color:#24292e;">	技巧2做法：</span></span>
<span class="line"><span style="color:#24292e;">		发现这等价于询问每个黑点上面的白点是否被回路包围</span></span>
<span class="line"><span style="color:#24292e;">		考虑到某个并查集只有在覆盖了射线的情况下才会改变连向，所以直接线段树分治</span></span>
<span class="line"><span style="color:#24292e;">		先对横坐标线段树分治，递归到叶子以后再对纵坐标做线段树分治 即可</span></span>
<span class="line"><span style="color:#24292e;">		https://atcoder.jp/contests/abc361/submissions/55356486</span></span></code></pre></div>`,3),t=[p];function o(c,i,r,y,_,d){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
