import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"经典问题","description":"","frontmatter":{},"headers":[],"relativePath":"SearchRandom/经典问题.md","filePath":"SearchRandom/经典问题.md","lastUpdated":1738592860000}'),l={name:"SearchRandom/经典问题.md"},p=e(`<h1 id="经典问题" tabindex="-1">经典问题 <a class="header-anchor" href="#经典问题" aria-label="Permalink to &quot;经典问题&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">哈密顿路：</span></span>
<span class="line"><span style="color:#e1e4e8;">	剪枝：一旦出现不连通的情况就剪</span></span>
<span class="line"><span style="color:#e1e4e8;">	判存在性：</span></span>
<span class="line"><span style="color:#e1e4e8;">		有向图哈密顿路：</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">最小点覆盖（最大独立集）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	剪枝：</span></span>
<span class="line"><span style="color:#e1e4e8;">		叶子节点的父亲必选</span></span>
<span class="line"><span style="color:#e1e4e8;">		当前点要是不选，那与之相连的点都得选</span></span>
<span class="line"><span style="color:#e1e4e8;">		优先处理度数大的</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：CF164D</span></span>
<span class="line"><span style="color:#e1e4e8;">一般图最大匹配：</span></span>
<span class="line"><span style="color:#e1e4e8;">	有多项式复杂度做法，一般不考察</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">哈密顿路：</span></span>
<span class="line"><span style="color:#24292e;">	剪枝：一旦出现不连通的情况就剪</span></span>
<span class="line"><span style="color:#24292e;">	判存在性：</span></span>
<span class="line"><span style="color:#24292e;">		有向图哈密顿路：</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">最小点覆盖（最大独立集）：</span></span>
<span class="line"><span style="color:#24292e;">	剪枝：</span></span>
<span class="line"><span style="color:#24292e;">		叶子节点的父亲必选</span></span>
<span class="line"><span style="color:#24292e;">		当前点要是不选，那与之相连的点都得选</span></span>
<span class="line"><span style="color:#24292e;">		优先处理度数大的</span></span>
<span class="line"><span style="color:#24292e;">	例题：CF164D</span></span>
<span class="line"><span style="color:#24292e;">一般图最大匹配：</span></span>
<span class="line"><span style="color:#24292e;">	有多项式复杂度做法，一般不考察</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,d,_,y){return a(),n("div",null,t)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
