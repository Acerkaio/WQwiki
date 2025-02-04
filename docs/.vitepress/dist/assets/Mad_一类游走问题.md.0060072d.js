import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const u=JSON.parse('{"title":"一类游走问题","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/一类游走问题.md","filePath":"Mad/一类游走问题.md","lastUpdated":1738666900000}'),l={name:"Mad/一类游走问题.md"},p=e(`<h1 id="一类游走问题" tabindex="-1">一类游走问题 <a class="header-anchor" href="#一类游走问题" aria-label="Permalink to &quot;一类游走问题&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">通常可以看作从根节点出发，每次扩展一小部分，但是不太规律，只能用贪心解决</span></span>
<span class="line"><span style="color:#e1e4e8;">常见的情况下，我们应该设计一种方式，使得祖先一定先选，然后才是儿子选，且答案最优</span></span>
<span class="line"><span style="color:#e1e4e8;">常见实现：可并堆，长链剖分</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">[POI2006] MET-Subway：</span></span>
<span class="line"><span style="color:#e1e4e8;">	一看就是贪心。显然直径必选。考虑第二次怎么选。</span></span>
<span class="line"><span style="color:#e1e4e8;">	有个naive的想法是分一下类，与直径相交和不相交。相交直接从直径上引出两条链，不相交很麻烦。</span></span>
<span class="line"><span style="color:#e1e4e8;">	大胆猜想不会不相交，直接选就可以。发现是对的。为什么？</span></span>
<span class="line"><span style="color:#e1e4e8;">	因为可以和上面的链交换一下端点，调整证明。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">SDSZ：杀戮尖塔</span></span>
<span class="line"><span style="color:#e1e4e8;">	小Z最近接触了一款游戏，叫做《杀戮尖塔》。游戏中的主人公将会依次进入若干个房间。</span></span>
<span class="line"><span style="color:#e1e4e8;">	可能为怪物房间（a[i]&lt;0）——房间i内会有怪物减少主人公(-a[i])的血量；</span></span>
<span class="line"><span style="color:#e1e4e8;">	可能为补给房间（a[i]&gt;0）——房间i可以帮助主人公增加(a[i])的血量。</span></span>
<span class="line"><span style="color:#e1e4e8;">	主人公可以多次经过同一个房间，但只有在第一次进入房间时才会触发该房间的房间效果。主人公的初始血量为0，当主人公的血量&lt;0时，游戏失败。游戏的目标是要达到指定的T号房间。</span></span>
<span class="line"><span style="color:#e1e4e8;">	N个房间之间由N-1条双向通道相连，每条通道连接两个房间。一条通道只有当连接的两个房间至少一个房间的房间效果触发后才可以使用。</span></span>
<span class="line"><span style="color:#e1e4e8;">	现在，小Z的主人公站在1号房间的入口处（还没有进入1号房间）。小Z希望得知他能否操作主人公到达号房间。</span></span>
<span class="line"><span style="color:#e1e4e8;">	lim:N&lt;=1e5</span></span>
<span class="line"><span style="color:#e1e4e8;">solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">	将T及其子树的a合并成inf，将题目转化为求最大最终血量。</span></span>
<span class="line"><span style="color:#e1e4e8;">	如果没有血量总是非负的限制的话，可以直接DP</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑怎么处理非负限制，mi表示遍历该块的过程中，suma的最小值，可以结合suma用来刻画限制</span></span>
<span class="line"><span style="color:#e1e4e8;">	先考虑怎么直接贪。比较naive的想法是先选mi小的，然后不断提升自己的血量，就可以选更多mi小的</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以肯定是按mi从大到小排序。</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑父亲必须先选，所以将父亲在插入堆中时，把mi比他大的都合并了，并且得保证增幅非负。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">通常可以看作从根节点出发，每次扩展一小部分，但是不太规律，只能用贪心解决</span></span>
<span class="line"><span style="color:#24292e;">常见的情况下，我们应该设计一种方式，使得祖先一定先选，然后才是儿子选，且答案最优</span></span>
<span class="line"><span style="color:#24292e;">常见实现：可并堆，长链剖分</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">[POI2006] MET-Subway：</span></span>
<span class="line"><span style="color:#24292e;">	一看就是贪心。显然直径必选。考虑第二次怎么选。</span></span>
<span class="line"><span style="color:#24292e;">	有个naive的想法是分一下类，与直径相交和不相交。相交直接从直径上引出两条链，不相交很麻烦。</span></span>
<span class="line"><span style="color:#24292e;">	大胆猜想不会不相交，直接选就可以。发现是对的。为什么？</span></span>
<span class="line"><span style="color:#24292e;">	因为可以和上面的链交换一下端点，调整证明。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">SDSZ：杀戮尖塔</span></span>
<span class="line"><span style="color:#24292e;">	小Z最近接触了一款游戏，叫做《杀戮尖塔》。游戏中的主人公将会依次进入若干个房间。</span></span>
<span class="line"><span style="color:#24292e;">	可能为怪物房间（a[i]&lt;0）——房间i内会有怪物减少主人公(-a[i])的血量；</span></span>
<span class="line"><span style="color:#24292e;">	可能为补给房间（a[i]&gt;0）——房间i可以帮助主人公增加(a[i])的血量。</span></span>
<span class="line"><span style="color:#24292e;">	主人公可以多次经过同一个房间，但只有在第一次进入房间时才会触发该房间的房间效果。主人公的初始血量为0，当主人公的血量&lt;0时，游戏失败。游戏的目标是要达到指定的T号房间。</span></span>
<span class="line"><span style="color:#24292e;">	N个房间之间由N-1条双向通道相连，每条通道连接两个房间。一条通道只有当连接的两个房间至少一个房间的房间效果触发后才可以使用。</span></span>
<span class="line"><span style="color:#24292e;">	现在，小Z的主人公站在1号房间的入口处（还没有进入1号房间）。小Z希望得知他能否操作主人公到达号房间。</span></span>
<span class="line"><span style="color:#24292e;">	lim:N&lt;=1e5</span></span>
<span class="line"><span style="color:#24292e;">solution:</span></span>
<span class="line"><span style="color:#24292e;">	将T及其子树的a合并成inf，将题目转化为求最大最终血量。</span></span>
<span class="line"><span style="color:#24292e;">	如果没有血量总是非负的限制的话，可以直接DP</span></span>
<span class="line"><span style="color:#24292e;">	考虑怎么处理非负限制，mi表示遍历该块的过程中，suma的最小值，可以结合suma用来刻画限制</span></span>
<span class="line"><span style="color:#24292e;">	先考虑怎么直接贪。比较naive的想法是先选mi小的，然后不断提升自己的血量，就可以选更多mi小的</span></span>
<span class="line"><span style="color:#24292e;">	所以肯定是按mi从大到小排序。</span></span>
<span class="line"><span style="color:#24292e;">	考虑父亲必须先选，所以将父亲在插入堆中时，把mi比他大的都合并了，并且得保证增幅非负。</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,d,_){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{u as __pageData,h as default};
