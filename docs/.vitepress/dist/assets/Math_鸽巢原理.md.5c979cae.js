import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const h=JSON.parse('{"title":"鸽巢原理","description":"","frontmatter":{},"headers":[],"relativePath":"Math/鸽巢原理.md","filePath":"Math/鸽巢原理.md","lastUpdated":1738591681000}'),l={name:"Math/鸽巢原理.md"},p=e(`<h1 id="鸽巢原理" tabindex="-1">鸽巢原理 <a class="header-anchor" href="#鸽巢原理" aria-label="Permalink to &quot;鸽巢原理&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">基本内容：</span></span>
<span class="line"><span style="color:#e1e4e8;">	若 x1+x2+....+xn = m</span></span>
<span class="line"><span style="color:#e1e4e8;">	则 不可能 任意 xi &lt;= floor((m-1)/n)</span></span>
<span class="line"><span style="color:#e1e4e8;">	也 不可能 任意 xi &gt;= ceil(m/n)	</span></span>
<span class="line"><span style="color:#e1e4e8;">以下计该值为mid</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">	所有加和形式的式子都可考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">具体处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以根据和mid的大小关系分类讨论</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心是&lt;=mid的数不可以组成一组</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">UOJ 元旦激光炮</span></span>
<span class="line"><span style="color:#e1e4e8;">ARC148E ≥ K</span></span>
<span class="line"><span style="color:#e1e4e8;">清澄 K大巨头</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">基本内容：</span></span>
<span class="line"><span style="color:#24292e;">	若 x1+x2+....+xn = m</span></span>
<span class="line"><span style="color:#24292e;">	则 不可能 任意 xi &lt;= floor((m-1)/n)</span></span>
<span class="line"><span style="color:#24292e;">	也 不可能 任意 xi &gt;= ceil(m/n)	</span></span>
<span class="line"><span style="color:#24292e;">以下计该值为mid</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">适用范围：</span></span>
<span class="line"><span style="color:#24292e;">	所有加和形式的式子都可考虑</span></span>
<span class="line"><span style="color:#24292e;">具体处理：</span></span>
<span class="line"><span style="color:#24292e;">	可以根据和mid的大小关系分类讨论</span></span>
<span class="line"><span style="color:#24292e;">	核心是&lt;=mid的数不可以组成一组</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">UOJ 元旦激光炮</span></span>
<span class="line"><span style="color:#24292e;">ARC148E ≥ K</span></span>
<span class="line"><span style="color:#24292e;">清澄 K大巨头</span></span></code></pre></div>`,2),o=[p];function t(c,i,r,d,y,_){return n(),a("div",null,o)}const x=s(l,[["render",t]]);export{h as __pageData,x as default};
