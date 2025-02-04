import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const x=JSON.parse('{"title":"连通性相关","description":"","frontmatter":{},"headers":[],"relativePath":"Graph/连通性相关.md","filePath":"Graph/连通性相关.md","lastUpdated":1738592860000}'),p={name:"Graph/连通性相关.md"},l=e(`<h1 id="连通性相关" tabindex="-1">连通性相关 <a class="header-anchor" href="#连通性相关" aria-label="Permalink to &quot;连通性相关&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">边双基本性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	任意两点之间的所有路径的必经边（所有路径边集的交）</span></span>
<span class="line"><span style="color:#e1e4e8;">		=两点之间任意一条简单路径经过的割边</span></span>
<span class="line"><span style="color:#e1e4e8;">		=边双缩点树上两点所在点的路径长</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	x,y边双连通</span></span>
<span class="line"><span style="color:#e1e4e8;">		=任何一条边割去后x,y仍然连通</span></span>
<span class="line"><span style="color:#e1e4e8;">		=x,y之间</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	任何一个点恰属于一个边双</span></span>
<span class="line"><span style="color:#e1e4e8;">	任何一条边要么属于一个边双，要么是割边</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	边双缩点树割去一条边后点的连通性和原图中割去该边的连通性相同</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	边双具有传递性：</span></span>
<span class="line"><span style="color:#e1e4e8;">		a,b边双连通，b,c边双连通，则a,c边双连通</span></span>
<span class="line"><span style="color:#e1e4e8;">点双基本性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	任意两点之间所有路径的必经点（所有路径点集的交）</span></span>
<span class="line"><span style="color:#e1e4e8;">		=圆方树上两点之间路径的原点个数</span></span>
<span class="line"><span style="color:#e1e4e8;">		!=两点之间任意一条简单路径上的割点个数</span></span>
<span class="line"><span style="color:#e1e4e8;">	圆方树是无根树</span></span>
<span class="line"><span style="color:#e1e4e8;">	一个点是割点</span></span>
<span class="line"><span style="color:#e1e4e8;">		=该点是两个点双的交</span></span>
<span class="line"><span style="color:#e1e4e8;">		=该点在圆方树上不是叶子节点</span></span>
<span class="line"><span style="color:#e1e4e8;">	任何一条边恰属于一个方点（点双）</span></span>
<span class="line"><span style="color:#e1e4e8;">	圆方树割去一个点后点的连通性和原图中割去该点的连通性相同</span></span>
<span class="line"><span style="color:#e1e4e8;">	点双不具有传递性</span></span>
<span class="line"><span style="color:#e1e4e8;">	点双的分类：</span></span>
<span class="line"><span style="color:#e1e4e8;">		点数=2：特殊情况，一般需要单独考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">		点数&gt;2：一般情况，重点考虑此类</span></span>
<span class="line"><span style="color:#e1e4e8;">一些涉及存在性的性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	下面的点双不考虑点数=2的特殊情况</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	边双中任意两点有回路（不保证点不交，但保证边不交）</span></span>
<span class="line"><span style="color:#e1e4e8;">	点双中经过任意两点/任意一点一边/任意两边有简单环</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	menger定理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		无向图上任意不同的两点不连通所需删去的边的数量的最小值 </span></span>
<span class="line"><span style="color:#e1e4e8;">			=两点之间边不相交的迹的数量的最大值</span></span>
<span class="line"><span style="color:#e1e4e8;">		无向图上任意不同且不相邻的两点不连通所需删去的点的数量的最小值，等于 </span></span>
<span class="line"><span style="color:#e1e4e8;">			=两点之间点不相交（不在除了这两点以外的点相交）的路径数量的最大值</span></span>
<span class="line"><span style="color:#e1e4e8;">	proof:最大流最小割定理</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	点双中任意两点x,y和任意一边e，存在x-&gt;e-&gt;y的简单路径</span></span>
<span class="line"><span style="color:#e1e4e8;">	点双中任意三点x,y,z，存在x-&gt;y-&gt;z的简单路径</span></span>
<span class="line"><span style="color:#e1e4e8;">求边双（割边）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意low[x]的本质：dfs树中x子树的非树边能覆盖到的最浅祖先</span></span>
<span class="line"><span style="color:#e1e4e8;">	当然，树上差分也可以处理覆盖</span></span>
<span class="line"><span style="color:#e1e4e8;">	而根据menger定理，被覆盖了的树边必然不是割边，而割边必然是树边，所以这样求是对的</span></span>
<span class="line"><span style="color:#e1e4e8;">	而边双在dfs树上是占据了一个连通块，所以可以通过栈来处理</span></span>
<span class="line"><span style="color:#e1e4e8;">	每次判定当前已经到了一个边双（所在连通块）的最高点，就将当前边双pop出去</span></span>
<span class="line"><span style="color:#e1e4e8;">求点双：原理类似边双</span></span>
<span class="line"><span style="color:#e1e4e8;">	求割点注意根节点必须有两个儿子（不是叶节点）才是割点</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tarjan求强连通分量（有向图dfs树相关）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	在分析强连通分量时，因为其定义，所以从任意一点开始用dfs考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">	有向图的dfs树中有四种边：</span></span>
<span class="line"><span style="color:#e1e4e8;">		树边，返祖边，前向边，横叉边</span></span>
<span class="line"><span style="color:#e1e4e8;">	其中，前向边对于连通性没有影响，可以暂时不管</span></span>
<span class="line"><span style="color:#e1e4e8;">	返祖边能让边到的祖先和当前点的路径上的所有点都进入SCC</span></span>
<span class="line"><span style="color:#e1e4e8;">	重点看横叉边，其有用当且仅当其能到当前点的祖先（通过若干横叉边，返祖边）</span></span>
<span class="line"><span style="color:#e1e4e8;">	而SCC在dfs树上仍然是占据了一个连通块，所以还是通过栈来处理，想办法在最高点做出判定</span></span>
<span class="line"><span style="color:#e1e4e8;">	发现，核心还是在返祖边，而横叉边是传递作用</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以还是考虑维护当前节点x能到的最高祖先的dfn，即low[x]</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先直接对儿子的最高祖先取min，然后考虑当前节点的</span></span>
<span class="line"><span style="color:#e1e4e8;">	返祖边直接取dfn作chkmi，前向边不作更新</span></span>
<span class="line"><span style="color:#e1e4e8;">	而横叉边首先保证能到当前节点的祖先，下面提供一种方便的判定方式</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以发现如果能到某个祖先y，那么y一定是该横叉边两端点的lca的祖先</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以这些点一定还保存在栈中，记录一下每个节点是否在栈中，在的话才要取其low作chkmi</span></span>
<span class="line"><span style="color:#e1e4e8;">	最高点的判定就是low[x]==dfn[x]，及时pop</span></span>
<span class="line"><span style="color:#e1e4e8;">	当然，我们发现横叉边也可以取dfn作判定，前向边也可以不特判，效果一样</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	我们常写的模板是最简洁的版本，事实上可以有多种实现</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	扩展：取产生每个SCC的顺序的反序就是拓扑序</span></span>
<span class="line"><span style="color:#e1e4e8;">	proof：一棵dfs树肯定是对的，多棵之间连接也是有序的（否则就会变成一棵）</span></span>
<span class="line"><span style="color:#e1e4e8;">kosaraju求强连通分量：</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">边双基本性质：</span></span>
<span class="line"><span style="color:#24292e;">	任意两点之间的所有路径的必经边（所有路径边集的交）</span></span>
<span class="line"><span style="color:#24292e;">		=两点之间任意一条简单路径经过的割边</span></span>
<span class="line"><span style="color:#24292e;">		=边双缩点树上两点所在点的路径长</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	x,y边双连通</span></span>
<span class="line"><span style="color:#24292e;">		=任何一条边割去后x,y仍然连通</span></span>
<span class="line"><span style="color:#24292e;">		=x,y之间</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	任何一个点恰属于一个边双</span></span>
<span class="line"><span style="color:#24292e;">	任何一条边要么属于一个边双，要么是割边</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	边双缩点树割去一条边后点的连通性和原图中割去该边的连通性相同</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	边双具有传递性：</span></span>
<span class="line"><span style="color:#24292e;">		a,b边双连通，b,c边双连通，则a,c边双连通</span></span>
<span class="line"><span style="color:#24292e;">点双基本性质：</span></span>
<span class="line"><span style="color:#24292e;">	任意两点之间所有路径的必经点（所有路径点集的交）</span></span>
<span class="line"><span style="color:#24292e;">		=圆方树上两点之间路径的原点个数</span></span>
<span class="line"><span style="color:#24292e;">		!=两点之间任意一条简单路径上的割点个数</span></span>
<span class="line"><span style="color:#24292e;">	圆方树是无根树</span></span>
<span class="line"><span style="color:#24292e;">	一个点是割点</span></span>
<span class="line"><span style="color:#24292e;">		=该点是两个点双的交</span></span>
<span class="line"><span style="color:#24292e;">		=该点在圆方树上不是叶子节点</span></span>
<span class="line"><span style="color:#24292e;">	任何一条边恰属于一个方点（点双）</span></span>
<span class="line"><span style="color:#24292e;">	圆方树割去一个点后点的连通性和原图中割去该点的连通性相同</span></span>
<span class="line"><span style="color:#24292e;">	点双不具有传递性</span></span>
<span class="line"><span style="color:#24292e;">	点双的分类：</span></span>
<span class="line"><span style="color:#24292e;">		点数=2：特殊情况，一般需要单独考虑</span></span>
<span class="line"><span style="color:#24292e;">		点数&gt;2：一般情况，重点考虑此类</span></span>
<span class="line"><span style="color:#24292e;">一些涉及存在性的性质：</span></span>
<span class="line"><span style="color:#24292e;">	下面的点双不考虑点数=2的特殊情况</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	边双中任意两点有回路（不保证点不交，但保证边不交）</span></span>
<span class="line"><span style="color:#24292e;">	点双中经过任意两点/任意一点一边/任意两边有简单环</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	menger定理：</span></span>
<span class="line"><span style="color:#24292e;">		无向图上任意不同的两点不连通所需删去的边的数量的最小值 </span></span>
<span class="line"><span style="color:#24292e;">			=两点之间边不相交的迹的数量的最大值</span></span>
<span class="line"><span style="color:#24292e;">		无向图上任意不同且不相邻的两点不连通所需删去的点的数量的最小值，等于 </span></span>
<span class="line"><span style="color:#24292e;">			=两点之间点不相交（不在除了这两点以外的点相交）的路径数量的最大值</span></span>
<span class="line"><span style="color:#24292e;">	proof:最大流最小割定理</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	点双中任意两点x,y和任意一边e，存在x-&gt;e-&gt;y的简单路径</span></span>
<span class="line"><span style="color:#24292e;">	点双中任意三点x,y,z，存在x-&gt;y-&gt;z的简单路径</span></span>
<span class="line"><span style="color:#24292e;">求边双（割边）：</span></span>
<span class="line"><span style="color:#24292e;">	注意low[x]的本质：dfs树中x子树的非树边能覆盖到的最浅祖先</span></span>
<span class="line"><span style="color:#24292e;">	当然，树上差分也可以处理覆盖</span></span>
<span class="line"><span style="color:#24292e;">	而根据menger定理，被覆盖了的树边必然不是割边，而割边必然是树边，所以这样求是对的</span></span>
<span class="line"><span style="color:#24292e;">	而边双在dfs树上是占据了一个连通块，所以可以通过栈来处理</span></span>
<span class="line"><span style="color:#24292e;">	每次判定当前已经到了一个边双（所在连通块）的最高点，就将当前边双pop出去</span></span>
<span class="line"><span style="color:#24292e;">求点双：原理类似边双</span></span>
<span class="line"><span style="color:#24292e;">	求割点注意根节点必须有两个儿子（不是叶节点）才是割点</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tarjan求强连通分量（有向图dfs树相关）：</span></span>
<span class="line"><span style="color:#24292e;">	在分析强连通分量时，因为其定义，所以从任意一点开始用dfs考虑</span></span>
<span class="line"><span style="color:#24292e;">	有向图的dfs树中有四种边：</span></span>
<span class="line"><span style="color:#24292e;">		树边，返祖边，前向边，横叉边</span></span>
<span class="line"><span style="color:#24292e;">	其中，前向边对于连通性没有影响，可以暂时不管</span></span>
<span class="line"><span style="color:#24292e;">	返祖边能让边到的祖先和当前点的路径上的所有点都进入SCC</span></span>
<span class="line"><span style="color:#24292e;">	重点看横叉边，其有用当且仅当其能到当前点的祖先（通过若干横叉边，返祖边）</span></span>
<span class="line"><span style="color:#24292e;">	而SCC在dfs树上仍然是占据了一个连通块，所以还是通过栈来处理，想办法在最高点做出判定</span></span>
<span class="line"><span style="color:#24292e;">	发现，核心还是在返祖边，而横叉边是传递作用</span></span>
<span class="line"><span style="color:#24292e;">	所以还是考虑维护当前节点x能到的最高祖先的dfn，即low[x]</span></span>
<span class="line"><span style="color:#24292e;">	首先直接对儿子的最高祖先取min，然后考虑当前节点的</span></span>
<span class="line"><span style="color:#24292e;">	返祖边直接取dfn作chkmi，前向边不作更新</span></span>
<span class="line"><span style="color:#24292e;">	而横叉边首先保证能到当前节点的祖先，下面提供一种方便的判定方式</span></span>
<span class="line"><span style="color:#24292e;">	可以发现如果能到某个祖先y，那么y一定是该横叉边两端点的lca的祖先</span></span>
<span class="line"><span style="color:#24292e;">	所以这些点一定还保存在栈中，记录一下每个节点是否在栈中，在的话才要取其low作chkmi</span></span>
<span class="line"><span style="color:#24292e;">	最高点的判定就是low[x]==dfn[x]，及时pop</span></span>
<span class="line"><span style="color:#24292e;">	当然，我们发现横叉边也可以取dfn作判定，前向边也可以不特判，效果一样</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	我们常写的模板是最简洁的版本，事实上可以有多种实现</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	扩展：取产生每个SCC的顺序的反序就是拓扑序</span></span>
<span class="line"><span style="color:#24292e;">	proof：一棵dfs树肯定是对的，多棵之间连接也是有序的（否则就会变成一棵）</span></span>
<span class="line"><span style="color:#24292e;">kosaraju求强连通分量：</span></span></code></pre></div>`,2),t=[l];function o(c,r,i,y,d,f){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{x as __pageData,h as default};
