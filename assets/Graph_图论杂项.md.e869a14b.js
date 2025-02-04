import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"图论杂项","description":"","frontmatter":{},"headers":[],"relativePath":"Graph/图论杂项.md","filePath":"Graph/图论杂项.md","lastUpdated":1738592860000}'),p={name:"Graph/图论杂项.md"},l=e(`<h1 id="图论杂项" tabindex="-1">图论杂项 <a class="header-anchor" href="#图论杂项" aria-label="Permalink to &quot;图论杂项&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">平面图相关</span></span>
<span class="line"><span style="color:#e1e4e8;">	平面图定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		能画在平面上，边与边除端点外不相交的图</span></span>
<span class="line"><span style="color:#e1e4e8;">	相关概念</span></span>
<span class="line"><span style="color:#e1e4e8;">		无限面：即外部面</span></span>
<span class="line"><span style="color:#e1e4e8;">		有限面：即内部面</span></span>
<span class="line"><span style="color:#e1e4e8;">		面的次数：面边界的边数</span></span>
<span class="line"><span style="color:#e1e4e8;">	重要推论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		平面图所有面的次数和等于其度数的两倍</span></span>
<span class="line"><span style="color:#e1e4e8;">	极大平面图：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：多连任何一条边都不合法的图</span></span>
<span class="line"><span style="color:#e1e4e8;">		定理：一张图是极大平面图等价于其所有面次数都是3</span></span>
<span class="line"><span style="color:#e1e4e8;">	欧拉公式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		V-E+F=2</span></span>
<span class="line"><span style="color:#e1e4e8;">		适用于平面图和多边形</span></span>
<span class="line"><span style="color:#e1e4e8;">	重要结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		平面图的边数不超过3*n-6</span></span>
<span class="line"><span style="color:#e1e4e8;">			proof：</span></span>
<span class="line"><span style="color:#e1e4e8;">		平面图中至少存在一个度数不超过5的结点</span></span>
<span class="line"><span style="color:#e1e4e8;">			proof：反证即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	对偶图：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：每个面作为结点，两个点有边等价于两个面相邻</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			平面图最小割=对偶图最小环</span></span>
<span class="line"><span style="color:#e1e4e8;">				由上述引理可知，平面图最小割&lt;=5</span></span>
<span class="line"><span style="color:#e1e4e8;">			平面图x和y之间的最小割=对偶图中最小的包围x或y的环</span></span>
<span class="line"><span style="color:#e1e4e8;">				在网格图中，可以将环在无限面处拆开，从而变成最短路</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">偏序集相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	传递闭包：刻画可达性的01矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">	偏序集：传递闭包就是其本身的DAG</span></span>
<span class="line"><span style="color:#e1e4e8;">	dilworth引理：偏序集的最小路径覆盖 = 其最大独立集</span></span>
<span class="line"><span style="color:#e1e4e8;">		这里的路径覆盖可以是相交或不相交</span></span>
<span class="line"><span style="color:#e1e4e8;">简单应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">	CSP-S 2024 决斗</span></span>
<span class="line"><span style="color:#e1e4e8;">	导弹拦截plus</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">平面图相关</span></span>
<span class="line"><span style="color:#24292e;">	平面图定义：</span></span>
<span class="line"><span style="color:#24292e;">		能画在平面上，边与边除端点外不相交的图</span></span>
<span class="line"><span style="color:#24292e;">	相关概念</span></span>
<span class="line"><span style="color:#24292e;">		无限面：即外部面</span></span>
<span class="line"><span style="color:#24292e;">		有限面：即内部面</span></span>
<span class="line"><span style="color:#24292e;">		面的次数：面边界的边数</span></span>
<span class="line"><span style="color:#24292e;">	重要推论：</span></span>
<span class="line"><span style="color:#24292e;">		平面图所有面的次数和等于其度数的两倍</span></span>
<span class="line"><span style="color:#24292e;">	极大平面图：</span></span>
<span class="line"><span style="color:#24292e;">		定义：多连任何一条边都不合法的图</span></span>
<span class="line"><span style="color:#24292e;">		定理：一张图是极大平面图等价于其所有面次数都是3</span></span>
<span class="line"><span style="color:#24292e;">	欧拉公式：</span></span>
<span class="line"><span style="color:#24292e;">		V-E+F=2</span></span>
<span class="line"><span style="color:#24292e;">		适用于平面图和多边形</span></span>
<span class="line"><span style="color:#24292e;">	重要结论：</span></span>
<span class="line"><span style="color:#24292e;">		平面图的边数不超过3*n-6</span></span>
<span class="line"><span style="color:#24292e;">			proof：</span></span>
<span class="line"><span style="color:#24292e;">		平面图中至少存在一个度数不超过5的结点</span></span>
<span class="line"><span style="color:#24292e;">			proof：反证即可</span></span>
<span class="line"><span style="color:#24292e;">	对偶图：</span></span>
<span class="line"><span style="color:#24292e;">		定义：每个面作为结点，两个点有边等价于两个面相邻</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			平面图最小割=对偶图最小环</span></span>
<span class="line"><span style="color:#24292e;">				由上述引理可知，平面图最小割&lt;=5</span></span>
<span class="line"><span style="color:#24292e;">			平面图x和y之间的最小割=对偶图中最小的包围x或y的环</span></span>
<span class="line"><span style="color:#24292e;">				在网格图中，可以将环在无限面处拆开，从而变成最短路</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">偏序集相关：</span></span>
<span class="line"><span style="color:#24292e;">	传递闭包：刻画可达性的01矩阵</span></span>
<span class="line"><span style="color:#24292e;">	偏序集：传递闭包就是其本身的DAG</span></span>
<span class="line"><span style="color:#24292e;">	dilworth引理：偏序集的最小路径覆盖 = 其最大独立集</span></span>
<span class="line"><span style="color:#24292e;">		这里的路径覆盖可以是相交或不相交</span></span>
<span class="line"><span style="color:#24292e;">简单应用：</span></span>
<span class="line"><span style="color:#24292e;">	CSP-S 2024 决斗</span></span>
<span class="line"><span style="color:#24292e;">	导弹拦截plus</span></span></code></pre></div>`,2),t=[l];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const f=s(p,[["render",o]]);export{u as __pageData,f as default};
