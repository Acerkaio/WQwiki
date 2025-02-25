import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"剪枝","description":"","frontmatter":{},"headers":[],"relativePath":"SearchRandom/剪枝.md","filePath":"SearchRandom/剪枝.md","lastUpdated":1740448168000}'),p={name:"SearchRandom/剪枝.md"},l=e(`<p>把这些转为markdown源码给我：</p><h1 id="剪枝" tabindex="-1">剪枝 <a class="header-anchor" href="#剪枝" aria-label="Permalink to &quot;剪枝&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">剪枝的一般思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">	去除冗余：等价的搜索过程去掉</span></span>
<span class="line"><span style="color:#e1e4e8;">	最优性：</span></span>
<span class="line"><span style="color:#e1e4e8;">		去掉显然不优的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		和现有答案比较</span></span>
<span class="line"><span style="color:#e1e4e8;">	改变处理顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">DP剪枝还有一些技巧：</span></span>
<span class="line"><span style="color:#e1e4e8;">	只存有用的状态(vector/gp_hash_table)</span></span>
<span class="line"><span style="color:#e1e4e8;">	背包的单调性剪枝</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">剪枝的一般思路：</span></span>
<span class="line"><span style="color:#24292e;">	去除冗余：等价的搜索过程去掉</span></span>
<span class="line"><span style="color:#24292e;">	最优性：</span></span>
<span class="line"><span style="color:#24292e;">		去掉显然不优的情况</span></span>
<span class="line"><span style="color:#24292e;">		和现有答案比较</span></span>
<span class="line"><span style="color:#24292e;">	改变处理顺序</span></span>
<span class="line"><span style="color:#24292e;">DP剪枝还有一些技巧：</span></span>
<span class="line"><span style="color:#24292e;">	只存有用的状态(vector/gp_hash_table)</span></span>
<span class="line"><span style="color:#24292e;">	背包的单调性剪枝</span></span></code></pre></div>`,3),t=[l];function o(c,r,i,d,_,h){return a(),n("div",null,t)}const u=s(p,[["render",o]]);export{m as __pageData,u as default};
