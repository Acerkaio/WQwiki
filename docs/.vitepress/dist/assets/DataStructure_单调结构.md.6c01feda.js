import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"单调结构","description":"","frontmatter":{},"headers":[],"relativePath":"DataStructure/单调结构.md","filePath":"DataStructure/单调结构.md","lastUpdated":1738591681000}'),l={name:"DataStructure/单调结构.md"},p=e(`<h1 id="单调结构" tabindex="-1">单调结构 <a class="header-anchor" href="#单调结构" aria-label="Permalink to &quot;单调结构&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">单调栈</span></span>
<span class="line"><span style="color:#e1e4e8;">功能：维护后缀最小值序列</span></span>
<span class="line"><span style="color:#e1e4e8;">支持的修改：每次可以向数组末尾加一个数</span></span>
<span class="line"><span style="color:#e1e4e8;">支持的查询：</span></span>
<span class="line"><span style="color:#e1e4e8;">	线性复杂度查询：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次询问的值单调不降，且始终不大于下一个要插入的数</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见应用：查询某个插入数前面第一个大于当前数的位置</span></span>
<span class="line"><span style="color:#e1e4e8;">	对数复杂度查询：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对询问值没有要求，结合二分实现即可</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1988E：经典问题</span></span>
<span class="line"><span style="color:#e1e4e8;">直接二分和st表的做法略去，考虑怎么线性实现求l,r,l2,r2</span></span>
<span class="line"><span style="color:#e1e4e8;">l,r分别是求前后缀第一个小于当前数的位置，经典的单调栈</span></span>
<span class="line"><span style="color:#e1e4e8;">再考虑l2（r2同理），即l左边的第一个小于当前数的位置，发现查询可以满足限制（a[l]一定小于a[i]）</span></span>
<span class="line"><span style="color:#e1e4e8;">所以我们要首先让l有单调性（便于加数），然后让查询的a值有单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">这需要排序。为了线性，用二维桶排即可</span></span>
<span class="line"><span style="color:#e1e4e8;">此做法可以扩展到求lk和rk的情况</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">单调队列</span></span>
<span class="line"><span style="color:#e1e4e8;">功能：维护一个线性单调变化的范围内的最值</span></span>
<span class="line"><span style="color:#e1e4e8;">	其实理论上，我们维护的还是后缀最小值序列，但是在很多情况下都只查询最值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">单调栈</span></span>
<span class="line"><span style="color:#24292e;">功能：维护后缀最小值序列</span></span>
<span class="line"><span style="color:#24292e;">支持的修改：每次可以向数组末尾加一个数</span></span>
<span class="line"><span style="color:#24292e;">支持的查询：</span></span>
<span class="line"><span style="color:#24292e;">	线性复杂度查询：</span></span>
<span class="line"><span style="color:#24292e;">		每次询问的值单调不降，且始终不大于下一个要插入的数</span></span>
<span class="line"><span style="color:#24292e;">		常见应用：查询某个插入数前面第一个大于当前数的位置</span></span>
<span class="line"><span style="color:#24292e;">	对数复杂度查询：</span></span>
<span class="line"><span style="color:#24292e;">		对询问值没有要求，结合二分实现即可</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">CF1988E：经典问题</span></span>
<span class="line"><span style="color:#24292e;">直接二分和st表的做法略去，考虑怎么线性实现求l,r,l2,r2</span></span>
<span class="line"><span style="color:#24292e;">l,r分别是求前后缀第一个小于当前数的位置，经典的单调栈</span></span>
<span class="line"><span style="color:#24292e;">再考虑l2（r2同理），即l左边的第一个小于当前数的位置，发现查询可以满足限制（a[l]一定小于a[i]）</span></span>
<span class="line"><span style="color:#24292e;">所以我们要首先让l有单调性（便于加数），然后让查询的a值有单调性</span></span>
<span class="line"><span style="color:#24292e;">这需要排序。为了线性，用二维桶排即可</span></span>
<span class="line"><span style="color:#24292e;">此做法可以扩展到求lk和rk的情况</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">单调队列</span></span>
<span class="line"><span style="color:#24292e;">功能：维护一个线性单调变化的范围内的最值</span></span>
<span class="line"><span style="color:#24292e;">	其实理论上，我们维护的还是后缀最小值序列，但是在很多情况下都只查询最值</span></span></code></pre></div>`,2),o=[p];function t(c,r,i,y,_,d){return n(),a("div",null,o)}const k=s(l,[["render",t]]);export{u as __pageData,k as default};
