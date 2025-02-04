import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"网络流建模","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/网络流/网络流建模.md","filePath":"Mad/网络流/网络流建模.md","lastUpdated":null}'),l={name:"Mad/网络流/网络流建模.md"},p=e(`<h1 id="网络流建模" tabindex="-1">网络流建模 <a class="header-anchor" href="#网络流建模" aria-label="Permalink to &quot;网络流建模&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">二分图最大匹配：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：将边分成匹配和非匹配边，使每个点相邻的匹配边数量&lt;=1</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑刻画限制数量&lt;=1，而最大流是容易刻画数量限制的</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用二分图，分别左右部点处理即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		当然，也可以认为这要转化成刻画选择，可以最小割，但复杂度更差</span></span>
<span class="line"><span style="color:#e1e4e8;">集合划分问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：每个物品选A或选B，选A有代价，选B有代价，某两个物品在不同集合有代价，总代价最小</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		涉及到集合划分的，常见做法是最小割，因为最小割容易刻画“选择”</span></span>
<span class="line"><span style="color:#e1e4e8;">		套路的考虑让割边表示选择，那么将每个物品分别向源汇点连边</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画限制，不同集合就是直接连一条边</span></span>
<span class="line"><span style="color:#e1e4e8;">二分图最小点覆盖：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：选出一个大小最小的点集，使得任意一条边都与集合中的某个点相邻</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画选择，所以考虑最小割</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑什么时候不合法，就是一条边两个端点都不选</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么在左右部点分别连边源汇点以后，考虑将原图每一条边连上去，权值是正无穷即可</span></span>
<span class="line"><span style="color:#e1e4e8;">二分图最大独立集：</span></span>
<span class="line"><span style="color:#e1e4e8;">	和最小点覆盖是补问题</span></span>
<span class="line"><span style="color:#e1e4e8;">最大权闭合子图：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：略</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画选择，考虑最小割</span></span>
<span class="line"><span style="color:#e1e4e8;">		先把最大转最小，考虑取加法部分的补集，然后给减法直接取相反数</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么直接刻画即可</span></span>
<span class="line"><span style="color:#e1e4e8;">最小DAG路径覆盖：</span></span>
<span class="line"><span style="color:#e1e4e8;">	不相交：每个点恰被一条路径覆盖，求所需的最小路径数量</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		限制难处理，考虑重新刻画</span></span>
<span class="line"><span style="color:#e1e4e8;">		点没前途，考虑边，发现限制就是每个点的入边选择数量&lt;=1且出边选择数量&lt;=1，然后要让选的边最多</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画数量限制的直接做法是最大流，这里应该分别限制出入边，所以拆点即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		当然，直接做也可以，用最小费用最大流可以实现相同复杂度</span></span>
<span class="line"><span style="color:#e1e4e8;">	可相交：恰改至少</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑刻画之，但没什么想法，尝试直接做</span></span>
<span class="line"><span style="color:#e1e4e8;">		DP不行，看网络流，这其实是有下界的最小流</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接上下界最小费用可行流即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		当然，也可以考虑重新刻画路径的本质</span></span>
<span class="line"><span style="color:#e1e4e8;">		将所有点划分成若干集合，限制是集合内部的点满足相邻可达</span></span>
<span class="line"><span style="color:#e1e4e8;">		那我们只关心可达性，直接传递闭包以后用不相交路径覆盖即可</span></span>
<span class="line"><span style="color:#e1e4e8;">切糕问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：来自HNOI2013</span></span>
<span class="line"><span style="color:#e1e4e8;">	思路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑直接做，dp几乎不可能，考虑割刻画选择</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么将待选的值[1,m]顺次连成一条链</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑不合法限制，容易通过连边刻画</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">二分图最大匹配：</span></span>
<span class="line"><span style="color:#24292e;">	内容：将边分成匹配和非匹配边，使每个点相邻的匹配边数量&lt;=1</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		考虑刻画限制数量&lt;=1，而最大流是容易刻画数量限制的</span></span>
<span class="line"><span style="color:#24292e;">		利用二分图，分别左右部点处理即可</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		当然，也可以认为这要转化成刻画选择，可以最小割，但复杂度更差</span></span>
<span class="line"><span style="color:#24292e;">集合划分问题：</span></span>
<span class="line"><span style="color:#24292e;">	内容：每个物品选A或选B，选A有代价，选B有代价，某两个物品在不同集合有代价，总代价最小</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		涉及到集合划分的，常见做法是最小割，因为最小割容易刻画“选择”</span></span>
<span class="line"><span style="color:#24292e;">		套路的考虑让割边表示选择，那么将每个物品分别向源汇点连边</span></span>
<span class="line"><span style="color:#24292e;">		刻画限制，不同集合就是直接连一条边</span></span>
<span class="line"><span style="color:#24292e;">二分图最小点覆盖：</span></span>
<span class="line"><span style="color:#24292e;">	内容：选出一个大小最小的点集，使得任意一条边都与集合中的某个点相邻</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		刻画选择，所以考虑最小割</span></span>
<span class="line"><span style="color:#24292e;">		考虑什么时候不合法，就是一条边两个端点都不选</span></span>
<span class="line"><span style="color:#24292e;">		那么在左右部点分别连边源汇点以后，考虑将原图每一条边连上去，权值是正无穷即可</span></span>
<span class="line"><span style="color:#24292e;">二分图最大独立集：</span></span>
<span class="line"><span style="color:#24292e;">	和最小点覆盖是补问题</span></span>
<span class="line"><span style="color:#24292e;">最大权闭合子图：</span></span>
<span class="line"><span style="color:#24292e;">	内容：略</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		刻画选择，考虑最小割</span></span>
<span class="line"><span style="color:#24292e;">		先把最大转最小，考虑取加法部分的补集，然后给减法直接取相反数</span></span>
<span class="line"><span style="color:#24292e;">		那么直接刻画即可</span></span>
<span class="line"><span style="color:#24292e;">最小DAG路径覆盖：</span></span>
<span class="line"><span style="color:#24292e;">	不相交：每个点恰被一条路径覆盖，求所需的最小路径数量</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		限制难处理，考虑重新刻画</span></span>
<span class="line"><span style="color:#24292e;">		点没前途，考虑边，发现限制就是每个点的入边选择数量&lt;=1且出边选择数量&lt;=1，然后要让选的边最多</span></span>
<span class="line"><span style="color:#24292e;">		刻画数量限制的直接做法是最大流，这里应该分别限制出入边，所以拆点即可</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		当然，直接做也可以，用最小费用最大流可以实现相同复杂度</span></span>
<span class="line"><span style="color:#24292e;">	可相交：恰改至少</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		考虑刻画之，但没什么想法，尝试直接做</span></span>
<span class="line"><span style="color:#24292e;">		DP不行，看网络流，这其实是有下界的最小流</span></span>
<span class="line"><span style="color:#24292e;">		直接上下界最小费用可行流即可</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		当然，也可以考虑重新刻画路径的本质</span></span>
<span class="line"><span style="color:#24292e;">		将所有点划分成若干集合，限制是集合内部的点满足相邻可达</span></span>
<span class="line"><span style="color:#24292e;">		那我们只关心可达性，直接传递闭包以后用不相交路径覆盖即可</span></span>
<span class="line"><span style="color:#24292e;">切糕问题：</span></span>
<span class="line"><span style="color:#24292e;">	内容：来自HNOI2013</span></span>
<span class="line"><span style="color:#24292e;">	思路：</span></span>
<span class="line"><span style="color:#24292e;">		考虑直接做，dp几乎不可能，考虑割刻画选择</span></span>
<span class="line"><span style="color:#24292e;">		那么将待选的值[1,m]顺次连成一条链</span></span>
<span class="line"><span style="color:#24292e;">		考虑不合法限制，容易通过连边刻画</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{m as __pageData,u as default};
