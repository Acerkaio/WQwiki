import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"模拟费用流.","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/模拟费用流.md","filePath":"Mad/模拟费用流.md","lastUpdated":1738666900000}'),l={name:"Mad/模拟费用流.md"},p=e(`<h1 id="模拟费用流" tabindex="-1">模拟费用流. <a class="header-anchor" href="#模拟费用流" aria-label="Permalink to &quot;模拟费用流.&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">核心思考方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	增量-消圈法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">			最小费用可行流</span></span>
<span class="line"><span style="color:#e1e4e8;">			最小费用最大流：将连向汇点的边费用减inf，转化为可行流</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">			每次考虑加入新的点和边，新产生的：</span></span>
<span class="line"><span style="color:#e1e4e8;">				1.负圈 2.源汇负路</span></span>
<span class="line"><span style="color:#e1e4e8;">	模拟EK：</span></span>
<span class="line"><span style="color:#e1e4e8;">		适用范围：很广</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理：考虑每次新找一条最短增广路</span></span>
<span class="line"><span style="color:#e1e4e8;">常用结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">	增广路（负圈）不会重复经过同一节点</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">老鼠钻洞plus版：「ICPC World Finals 2018」征服世界</span></span>
<span class="line"><span style="color:#e1e4e8;">solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先建出费用流模型：类似上下界网络流，将两个权值相减跑最小费用最大流</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑模拟费用流，先将最大流转可行流，增量法处理</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑每次加入子树的根节点，每次只要看子树中的入流和出流（之前子树已经流尽了）</span></span>
<span class="line"><span style="color:#e1e4e8;">	因为路径可以拆价值，所以直接匹配入和出就可以，结合可并堆实现即可</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">核心思考方法：</span></span>
<span class="line"><span style="color:#24292e;">	增量-消圈法：</span></span>
<span class="line"><span style="color:#24292e;">		适用范围：</span></span>
<span class="line"><span style="color:#24292e;">			最小费用可行流</span></span>
<span class="line"><span style="color:#24292e;">			最小费用最大流：将连向汇点的边费用减inf，转化为可行流</span></span>
<span class="line"><span style="color:#24292e;">		处理：</span></span>
<span class="line"><span style="color:#24292e;">			每次考虑加入新的点和边，新产生的：</span></span>
<span class="line"><span style="color:#24292e;">				1.负圈 2.源汇负路</span></span>
<span class="line"><span style="color:#24292e;">	模拟EK：</span></span>
<span class="line"><span style="color:#24292e;">		适用范围：很广</span></span>
<span class="line"><span style="color:#24292e;">		处理：考虑每次新找一条最短增广路</span></span>
<span class="line"><span style="color:#24292e;">常用结论：</span></span>
<span class="line"><span style="color:#24292e;">	增广路（负圈）不会重复经过同一节点</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">老鼠钻洞plus版：「ICPC World Finals 2018」征服世界</span></span>
<span class="line"><span style="color:#24292e;">solution:</span></span>
<span class="line"><span style="color:#24292e;">	首先建出费用流模型：类似上下界网络流，将两个权值相减跑最小费用最大流</span></span>
<span class="line"><span style="color:#24292e;">	考虑模拟费用流，先将最大流转可行流，增量法处理</span></span>
<span class="line"><span style="color:#24292e;">	考虑每次加入子树的根节点，每次只要看子树中的入流和出流（之前子树已经流尽了）</span></span>
<span class="line"><span style="color:#24292e;">	因为路径可以拆价值，所以直接匹配入和出就可以，结合可并堆实现即可</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,d,_){return n(),a("div",null,t)}const f=s(l,[["render",o]]);export{u as __pageData,f as default};
