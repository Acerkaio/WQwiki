import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e7363dcb.js";const _=JSON.parse('{"title":"tree_related","description":"","frontmatter":{},"headers":[],"relativePath":"Graph/tree_related.md","filePath":"Graph/tree_related.md","lastUpdated":1738592860000}'),e={name:"Graph/tree_related.md"},p=l(`<h1 id="tree-related" tabindex="-1">tree_related <a class="header-anchor" href="#tree-related" aria-label="Permalink to &quot;tree_related&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">树的各种序列：</span></span>
<span class="line"><span style="color:#e1e4e8;">	dfs序1（最常见的dfs序）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：当且仅当递归进入一个节点时加入序列</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质1：lca(dfn[i],dfn[i+1])=fa[i+1] </span></span>
<span class="line"><span style="color:#e1e4e8;">				这是充要条件，可以用来判断其是否是dfs序</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质2：点x子树对应的序列就是[dfn[x],dfn[x]+sz[x]-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">				该性质用来处理涉及子树的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质3：任何一个点有且仅有一个位置，序列长度为n</span></span>
<span class="line"><span style="color:#e1e4e8;">				这是一个一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质4：对于点x,y(dfn[y]&gt;dfn[x])，dfn[y]越大，dep[lca(x,y)]越小</span></span>
<span class="line"><span style="color:#e1e4e8;">				这就是说，对于同一个左端点，右端点向右移动，lca&#39;必然是lca的祖先</span></span>
<span class="line"><span style="color:#e1e4e8;">				进一步的有，区间[x,y]的子区间的lca必然是lca(x,y)的孙子</span></span>
<span class="line"><span style="color:#e1e4e8;">				这就是单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质5：dfs序上任何一个区间[x,y]的lca(x,y)必然等于区间内的某个相邻点对的lca</span></span>
<span class="line"><span style="color:#e1e4e8;">		应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理对子树的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理 链加 等能差分操作的单点查询</span></span>
<span class="line"><span style="color:#e1e4e8;">			O(1)在线求lca</span></span>
<span class="line"><span style="color:#e1e4e8;">	dfs序2：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：递归进入x和回溯出x时加入x</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			记x第一次出现是ld[x]，第二次是rd[x]，那么x子树对应序列中[ld[x],rd[x]]</span></span>
<span class="line"><span style="color:#e1e4e8;">			给ld[x]加点权，rd[x]减点权，那么到ld[x]的前缀和就是x到根节点的路径上的点权和</span></span>
<span class="line"><span style="color:#e1e4e8;">			任何一个点只有两次出现，序列长度2*n</span></span>
<span class="line"><span style="color:#e1e4e8;">		应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			查询到根节点的路径点权和</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理点的树上莫队</span></span>
<span class="line"><span style="color:#e1e4e8;">	dfs序3：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：每次经过一条边就加入此边的终点（将树看作有向图）</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			abs(dep[dfn[i]]-dep[dfn[i+1]])=1</span></span>
<span class="line"><span style="color:#e1e4e8;">			任意两点的lca一定会出现在两点之间</span></span>
<span class="line"><span style="color:#e1e4e8;">			一个点的出现次数等于它的儿子数+1，序列长度2*n-1</span></span>
<span class="line"><span style="color:#e1e4e8;">		应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以维护有关树链的最优性问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理边的树上莫队</span></span>
<span class="line"><span style="color:#e1e4e8;">			O(1)在线求lca（时代的眼泪，被dfs序1代替了）</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">CF2002D：对dfs序的性质作了详细的分析</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1192B：就是要找一条边权和最大的链，直接用dfs序3即可</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">树的(带权）重心：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义1：删去该点后各连通块点权和都小于等于floor(总点权和/2)</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义2：到所有点距离乘点权的和最小的点</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义3：删去该点后各连通块点权和最大值最小的点</span></span>
<span class="line"><span style="color:#e1e4e8;">	以上各定义完全等价，可以用调整法证明：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑一条边左右两个连通块，分析移动重心的影响</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">		树的重心只与树的形态相关，与树的边权无关</span></span>
<span class="line"><span style="color:#e1e4e8;">		改变边权可以改变边权和，但不能改变重心</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质1：树的重心最多两个 </span></span>
<span class="line"><span style="color:#e1e4e8;">		具体的，当且仅当存在一条边平分了该树时，该树有两个重心，且就是该边的两个端点</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质2：两棵树连起来以后，新的重心必在两原重心的路径上</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质3：增添一个节点，树的重心最多移动一位</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体的，对于增操作，可以快速判断重心如何移动</span></span>
<span class="line"><span style="color:#e1e4e8;">		在一般的树上，树的重心在严格虚树上最多移动一位</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质4：树上任意一个点权和&gt;=(总点权和/2)的连通块必然经过重心</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	特别的，序列完全可以套用上述所有性质</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	扩展：处理树上距离和的最优化问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		经典的：处理形如min(sz,n-sz)的式子</span></span>
<span class="line"><span style="color:#e1e4e8;">		通常用重心定根，那么每一条边的方向都确定了</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC362F：</span></span>
<span class="line"><span style="color:#e1e4e8;">题目要求两两配对使距离和最大，考虑分离贡献，发现一条边的贡献形如min(sz,n-sz)</span></span>
<span class="line"><span style="color:#e1e4e8;">观察到这个形式，联想到重心，发现这等价于各子树的点都要往外配对，根据定义1，这理论上是可行的</span></span>
<span class="line"><span style="color:#e1e4e8;">考虑怎么构造，我每次将最大的连通块和最小的连通块配对，每次配对完动态维护大小</span></span>
<span class="line"><span style="color:#e1e4e8;">而官方题解比较厉害，直接在dfs序列上将a[i]和a[i+(n/2)]配对，这充分利用了定义1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">树的直径与中心</span></span>
<span class="line"><span style="color:#e1e4e8;">	直径定义：树上最远点对之间的路径</span></span>
<span class="line"><span style="color:#e1e4e8;">	中心定义：到最远点最近的点</span></span>
<span class="line"><span style="color:#e1e4e8;">	求直径：两次dfs（边权为正），DP求（没有要求）</span></span>
<span class="line"><span style="color:#e1e4e8;">	求中心：换根DP</span></span>
<span class="line"><span style="color:#e1e4e8;">	以下性质基于边权为正：</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质1：任何一个点在树上的最远点是直径的端点</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质2：两个点集合并成一个点集，新点集必存在一条直径满足以下两者之一：</span></span>
<span class="line"><span style="color:#e1e4e8;">		是其中一个点集的直径</span></span>
<span class="line"><span style="color:#e1e4e8;">		两端点分别是两个点集的直径端点</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质3：任何一个点到距其最远点的路径一定会过中心</span></span>
<span class="line"><span style="color:#e1e4e8;">		特别的，所有直径都经过中心，且中心会尽量的平分直径</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质4：以所有直径上的点建出虚树，虚树只有两种形态：扫帚形，菊花形</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">给定一棵树，称一个长为k的序列是好的，当且仅当对于所有1&lt;=i&lt;k，a[i+1]是a[i]在树上最远的点之一</span></span>
<span class="line"><span style="color:#e1e4e8;">求所有长为k的好的序列的数量。k&lt;=1e9，n&lt;=1e4</span></span>
<span class="line"><span style="color:#e1e4e8;">solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">显然矩阵加速。直接暴力是三次方的。根据性质4，我们以中心为根，其必然是从一颗子树到另一子树。</span></span>
<span class="line"><span style="color:#e1e4e8;">直接做还是三次方，但是感觉到这些路径都是一样的，只是有子树内数量的限制。</span></span>
<span class="line"><span style="color:#e1e4e8;">直接利用经典结论，按子树内路径数量对子树分类，不同的类只有根号级别，那么就行了。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">P2056：给定一棵树，初始节点颜色都是黑色。每次操作可以将某点的颜色反转，或是询问当前黑点集的直径长。</span></span>
<span class="line"><span style="color:#e1e4e8;">lim:n&lt;=1e5, m&lt;=1e5</span></span>
<span class="line"><span style="color:#e1e4e8;">solution:线段树维护最远点对即可，复杂度O(nlog^2(n))</span></span>
<span class="line"><span style="color:#e1e4e8;">	也有点分树的做法。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">CF1192B：动态直径。操作是修改边权，强制在线。</span></span>
<span class="line"><span style="color:#e1e4e8;">solution：</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先注意到边权始终为正数，那么就能套用上述性质。</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意到距离在动态变化，那线段树上维护的信息也可能会变化。</span></span>
<span class="line"><span style="color:#e1e4e8;">	但观察到会变的只有从子树内到子树外的，所以我们可以用类似于一个“假区间修改”的东西让子树那一片的dfs序列的东西重新pushup。</span></span>
<span class="line"><span style="color:#e1e4e8;">	至于距离的动态维护，当然不用树剖，只需要动态维护一下dis数组即可，可以用树状数组结合dfs序实现子树加，单点查询。</span></span>
<span class="line"><span style="color:#e1e4e8;">P1099 树网的核：略</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">[AGC001C] Shorten Diameter：分析了边权为1的特殊情况</span></span>
<span class="line"><span style="color:#e1e4e8;">	因为考虑直径问题，所以想办法确定中心</span></span>
<span class="line"><span style="color:#e1e4e8;">	在边权为1时，分直径长奇偶性考虑即可</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">lca的性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	lca具有单调性，可以类比gcd和Min</span></span>
<span class="line"><span style="color:#e1e4e8;">	lca(a[l],a[l+1],...,a[r])必定是lca(a[l],a[l+1]),lca(a[l+1],a[l+2]),...,lca(a[r-1],a[r])之一</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">虚树：</span></span>
<span class="line"><span style="color:#e1e4e8;">	 定义：只包含关键点集合和必要的交点的树</span></span>
<span class="line"><span style="color:#e1e4e8;">	 建虚树：线性对数建</span></span>
<span class="line"><span style="color:#e1e4e8;">	 性质（以下基于上述建虚树的办法）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	 	建出的树很可能有一些没什么用的点（即和上述定义略有不同）</span></span>
<span class="line"><span style="color:#e1e4e8;">	 		例如根节点，大概率不是别的点的lca，但还是存在</span></span>
<span class="line"><span style="color:#e1e4e8;">	 		只有在关键点中有根节点时，建出的才是严格意义上的虚树</span></span>
<span class="line"><span style="color:#e1e4e8;">	 	虚树的结点集合的组成：关键点集合、相邻关键点lca的集合</span></span>
<span class="line"><span style="color:#e1e4e8;">	 		参考lca的性质，</span></span>
<span class="line"><span style="color:#e1e4e8;">	 	虚树的总结点数至多2*n-1个，其中n是关键点数量</span></span>
<span class="line"><span style="color:#e1e4e8;">树链剖分：</span></span>
<span class="line"><span style="color:#e1e4e8;">	本质：求出了一个性质极强的dfs序</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.本身是dfs序，拥有dfs序的所有性质（详见上）</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.每条重链对应dfs序上的一个区间</span></span>
<span class="line"><span style="color:#e1e4e8;">		3.重链的终结点必是叶节点</span></span>
<span class="line"><span style="color:#e1e4e8;">		4.重链只有log条（常数是1）</span></span>
<span class="line"><span style="color:#e1e4e8;">		5.任何一条链都可以被表示成序列上log个区间的连续拼接</span></span>
<span class="line"><span style="color:#e1e4e8;">			（只会经过log个轻边）</span></span>
<span class="line"><span style="color:#e1e4e8;">		6.除了lca处的重链，其他重链都会经过其前缀</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		求解的答案只和询问的链有关的：</span></span>
<span class="line"><span style="color:#e1e4e8;">			利用性质5，只需要考虑以下核心点：</span></span>
<span class="line"><span style="color:#e1e4e8;">				能快速回答序列上的区间询问</span></span>
<span class="line"><span style="color:#e1e4e8;">				能快速合并答案（拼接）</span></span>
<span class="line"><span style="color:#e1e4e8;">			通常，如果线段树实现了序列上的问题，那么快速合并答案就是好做的</span></span>
<span class="line"><span style="color:#e1e4e8;">			一般来说，此类问题难点都在于序列上的区间询问</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			时刻铭记链查询等价于dfs序上的若干区间拼接查询	</span></span>
<span class="line"><span style="color:#e1e4e8;">		依赖树形态的快速操作问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">			利用性质5，只需要考虑以下核心点：</span></span>
<span class="line"><span style="color:#e1e4e8;">				如何快速维护重链上的区间查询</span></span>
<span class="line"><span style="color:#e1e4e8;">				如何快速维护轻儿子的贡献</span></span>
<span class="line"><span style="color:#e1e4e8;">			常见的做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">				将轻儿子的贡献放在重链上维护</span></span>
<span class="line"><span style="color:#e1e4e8;">				每次修改考虑轻儿子贡献的变化</span></span>
<span class="line"><span style="color:#e1e4e8;">			经典问题：动态DP</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">树的各种序列：</span></span>
<span class="line"><span style="color:#24292e;">	dfs序1（最常见的dfs序）：</span></span>
<span class="line"><span style="color:#24292e;">		定义：当且仅当递归进入一个节点时加入序列</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			性质1：lca(dfn[i],dfn[i+1])=fa[i+1] </span></span>
<span class="line"><span style="color:#24292e;">				这是充要条件，可以用来判断其是否是dfs序</span></span>
<span class="line"><span style="color:#24292e;">			性质2：点x子树对应的序列就是[dfn[x],dfn[x]+sz[x]-1]</span></span>
<span class="line"><span style="color:#24292e;">				该性质用来处理涉及子树的操作</span></span>
<span class="line"><span style="color:#24292e;">			性质3：任何一个点有且仅有一个位置，序列长度为n</span></span>
<span class="line"><span style="color:#24292e;">				这是一个一一对应</span></span>
<span class="line"><span style="color:#24292e;">			性质4：对于点x,y(dfn[y]&gt;dfn[x])，dfn[y]越大，dep[lca(x,y)]越小</span></span>
<span class="line"><span style="color:#24292e;">				这就是说，对于同一个左端点，右端点向右移动，lca&#39;必然是lca的祖先</span></span>
<span class="line"><span style="color:#24292e;">				进一步的有，区间[x,y]的子区间的lca必然是lca(x,y)的孙子</span></span>
<span class="line"><span style="color:#24292e;">				这就是单调性</span></span>
<span class="line"><span style="color:#24292e;">			性质5：dfs序上任何一个区间[x,y]的lca(x,y)必然等于区间内的某个相邻点对的lca</span></span>
<span class="line"><span style="color:#24292e;">		应用：</span></span>
<span class="line"><span style="color:#24292e;">			处理对子树的操作</span></span>
<span class="line"><span style="color:#24292e;">			处理 链加 等能差分操作的单点查询</span></span>
<span class="line"><span style="color:#24292e;">			O(1)在线求lca</span></span>
<span class="line"><span style="color:#24292e;">	dfs序2：</span></span>
<span class="line"><span style="color:#24292e;">		定义：递归进入x和回溯出x时加入x</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			记x第一次出现是ld[x]，第二次是rd[x]，那么x子树对应序列中[ld[x],rd[x]]</span></span>
<span class="line"><span style="color:#24292e;">			给ld[x]加点权，rd[x]减点权，那么到ld[x]的前缀和就是x到根节点的路径上的点权和</span></span>
<span class="line"><span style="color:#24292e;">			任何一个点只有两次出现，序列长度2*n</span></span>
<span class="line"><span style="color:#24292e;">		应用：</span></span>
<span class="line"><span style="color:#24292e;">			查询到根节点的路径点权和</span></span>
<span class="line"><span style="color:#24292e;">			处理点的树上莫队</span></span>
<span class="line"><span style="color:#24292e;">	dfs序3：</span></span>
<span class="line"><span style="color:#24292e;">		定义：每次经过一条边就加入此边的终点（将树看作有向图）</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			abs(dep[dfn[i]]-dep[dfn[i+1]])=1</span></span>
<span class="line"><span style="color:#24292e;">			任意两点的lca一定会出现在两点之间</span></span>
<span class="line"><span style="color:#24292e;">			一个点的出现次数等于它的儿子数+1，序列长度2*n-1</span></span>
<span class="line"><span style="color:#24292e;">		应用：</span></span>
<span class="line"><span style="color:#24292e;">			可以维护有关树链的最优性问题</span></span>
<span class="line"><span style="color:#24292e;">			处理边的树上莫队</span></span>
<span class="line"><span style="color:#24292e;">			O(1)在线求lca（时代的眼泪，被dfs序1代替了）</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">CF2002D：对dfs序的性质作了详细的分析</span></span>
<span class="line"><span style="color:#24292e;">CF1192B：就是要找一条边权和最大的链，直接用dfs序3即可</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">树的(带权）重心：</span></span>
<span class="line"><span style="color:#24292e;">	定义1：删去该点后各连通块点权和都小于等于floor(总点权和/2)</span></span>
<span class="line"><span style="color:#24292e;">	定义2：到所有点距离乘点权的和最小的点</span></span>
<span class="line"><span style="color:#24292e;">	定义3：删去该点后各连通块点权和最大值最小的点</span></span>
<span class="line"><span style="color:#24292e;">	以上各定义完全等价，可以用调整法证明：</span></span>
<span class="line"><span style="color:#24292e;">		考虑一条边左右两个连通块，分析移动重心的影响</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	注意：</span></span>
<span class="line"><span style="color:#24292e;">		树的重心只与树的形态相关，与树的边权无关</span></span>
<span class="line"><span style="color:#24292e;">		改变边权可以改变边权和，但不能改变重心</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	性质1：树的重心最多两个 </span></span>
<span class="line"><span style="color:#24292e;">		具体的，当且仅当存在一条边平分了该树时，该树有两个重心，且就是该边的两个端点</span></span>
<span class="line"><span style="color:#24292e;">	性质2：两棵树连起来以后，新的重心必在两原重心的路径上</span></span>
<span class="line"><span style="color:#24292e;">	性质3：增添一个节点，树的重心最多移动一位</span></span>
<span class="line"><span style="color:#24292e;">		具体的，对于增操作，可以快速判断重心如何移动</span></span>
<span class="line"><span style="color:#24292e;">		在一般的树上，树的重心在严格虚树上最多移动一位</span></span>
<span class="line"><span style="color:#24292e;">	性质4：树上任意一个点权和&gt;=(总点权和/2)的连通块必然经过重心</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	特别的，序列完全可以套用上述所有性质</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	扩展：处理树上距离和的最优化问题</span></span>
<span class="line"><span style="color:#24292e;">		经典的：处理形如min(sz,n-sz)的式子</span></span>
<span class="line"><span style="color:#24292e;">		通常用重心定根，那么每一条边的方向都确定了</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">ABC362F：</span></span>
<span class="line"><span style="color:#24292e;">题目要求两两配对使距离和最大，考虑分离贡献，发现一条边的贡献形如min(sz,n-sz)</span></span>
<span class="line"><span style="color:#24292e;">观察到这个形式，联想到重心，发现这等价于各子树的点都要往外配对，根据定义1，这理论上是可行的</span></span>
<span class="line"><span style="color:#24292e;">考虑怎么构造，我每次将最大的连通块和最小的连通块配对，每次配对完动态维护大小</span></span>
<span class="line"><span style="color:#24292e;">而官方题解比较厉害，直接在dfs序列上将a[i]和a[i+(n/2)]配对，这充分利用了定义1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">树的直径与中心</span></span>
<span class="line"><span style="color:#24292e;">	直径定义：树上最远点对之间的路径</span></span>
<span class="line"><span style="color:#24292e;">	中心定义：到最远点最近的点</span></span>
<span class="line"><span style="color:#24292e;">	求直径：两次dfs（边权为正），DP求（没有要求）</span></span>
<span class="line"><span style="color:#24292e;">	求中心：换根DP</span></span>
<span class="line"><span style="color:#24292e;">	以下性质基于边权为正：</span></span>
<span class="line"><span style="color:#24292e;">	性质1：任何一个点在树上的最远点是直径的端点</span></span>
<span class="line"><span style="color:#24292e;">	性质2：两个点集合并成一个点集，新点集必存在一条直径满足以下两者之一：</span></span>
<span class="line"><span style="color:#24292e;">		是其中一个点集的直径</span></span>
<span class="line"><span style="color:#24292e;">		两端点分别是两个点集的直径端点</span></span>
<span class="line"><span style="color:#24292e;">	性质3：任何一个点到距其最远点的路径一定会过中心</span></span>
<span class="line"><span style="color:#24292e;">		特别的，所有直径都经过中心，且中心会尽量的平分直径</span></span>
<span class="line"><span style="color:#24292e;">	性质4：以所有直径上的点建出虚树，虚树只有两种形态：扫帚形，菊花形</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">给定一棵树，称一个长为k的序列是好的，当且仅当对于所有1&lt;=i&lt;k，a[i+1]是a[i]在树上最远的点之一</span></span>
<span class="line"><span style="color:#24292e;">求所有长为k的好的序列的数量。k&lt;=1e9，n&lt;=1e4</span></span>
<span class="line"><span style="color:#24292e;">solution:</span></span>
<span class="line"><span style="color:#24292e;">显然矩阵加速。直接暴力是三次方的。根据性质4，我们以中心为根，其必然是从一颗子树到另一子树。</span></span>
<span class="line"><span style="color:#24292e;">直接做还是三次方，但是感觉到这些路径都是一样的，只是有子树内数量的限制。</span></span>
<span class="line"><span style="color:#24292e;">直接利用经典结论，按子树内路径数量对子树分类，不同的类只有根号级别，那么就行了。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">P2056：给定一棵树，初始节点颜色都是黑色。每次操作可以将某点的颜色反转，或是询问当前黑点集的直径长。</span></span>
<span class="line"><span style="color:#24292e;">lim:n&lt;=1e5, m&lt;=1e5</span></span>
<span class="line"><span style="color:#24292e;">solution:线段树维护最远点对即可，复杂度O(nlog^2(n))</span></span>
<span class="line"><span style="color:#24292e;">	也有点分树的做法。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">CF1192B：动态直径。操作是修改边权，强制在线。</span></span>
<span class="line"><span style="color:#24292e;">solution：</span></span>
<span class="line"><span style="color:#24292e;">	首先注意到边权始终为正数，那么就能套用上述性质。</span></span>
<span class="line"><span style="color:#24292e;">	注意到距离在动态变化，那线段树上维护的信息也可能会变化。</span></span>
<span class="line"><span style="color:#24292e;">	但观察到会变的只有从子树内到子树外的，所以我们可以用类似于一个“假区间修改”的东西让子树那一片的dfs序列的东西重新pushup。</span></span>
<span class="line"><span style="color:#24292e;">	至于距离的动态维护，当然不用树剖，只需要动态维护一下dis数组即可，可以用树状数组结合dfs序实现子树加，单点查询。</span></span>
<span class="line"><span style="color:#24292e;">P1099 树网的核：略</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">[AGC001C] Shorten Diameter：分析了边权为1的特殊情况</span></span>
<span class="line"><span style="color:#24292e;">	因为考虑直径问题，所以想办法确定中心</span></span>
<span class="line"><span style="color:#24292e;">	在边权为1时，分直径长奇偶性考虑即可</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">lca的性质：</span></span>
<span class="line"><span style="color:#24292e;">	lca具有单调性，可以类比gcd和Min</span></span>
<span class="line"><span style="color:#24292e;">	lca(a[l],a[l+1],...,a[r])必定是lca(a[l],a[l+1]),lca(a[l+1],a[l+2]),...,lca(a[r-1],a[r])之一</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">虚树：</span></span>
<span class="line"><span style="color:#24292e;">	 定义：只包含关键点集合和必要的交点的树</span></span>
<span class="line"><span style="color:#24292e;">	 建虚树：线性对数建</span></span>
<span class="line"><span style="color:#24292e;">	 性质（以下基于上述建虚树的办法）：</span></span>
<span class="line"><span style="color:#24292e;">	 	建出的树很可能有一些没什么用的点（即和上述定义略有不同）</span></span>
<span class="line"><span style="color:#24292e;">	 		例如根节点，大概率不是别的点的lca，但还是存在</span></span>
<span class="line"><span style="color:#24292e;">	 		只有在关键点中有根节点时，建出的才是严格意义上的虚树</span></span>
<span class="line"><span style="color:#24292e;">	 	虚树的结点集合的组成：关键点集合、相邻关键点lca的集合</span></span>
<span class="line"><span style="color:#24292e;">	 		参考lca的性质，</span></span>
<span class="line"><span style="color:#24292e;">	 	虚树的总结点数至多2*n-1个，其中n是关键点数量</span></span>
<span class="line"><span style="color:#24292e;">树链剖分：</span></span>
<span class="line"><span style="color:#24292e;">	本质：求出了一个性质极强的dfs序</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		1.本身是dfs序，拥有dfs序的所有性质（详见上）</span></span>
<span class="line"><span style="color:#24292e;">		2.每条重链对应dfs序上的一个区间</span></span>
<span class="line"><span style="color:#24292e;">		3.重链的终结点必是叶节点</span></span>
<span class="line"><span style="color:#24292e;">		4.重链只有log条（常数是1）</span></span>
<span class="line"><span style="color:#24292e;">		5.任何一条链都可以被表示成序列上log个区间的连续拼接</span></span>
<span class="line"><span style="color:#24292e;">			（只会经过log个轻边）</span></span>
<span class="line"><span style="color:#24292e;">		6.除了lca处的重链，其他重链都会经过其前缀</span></span>
<span class="line"><span style="color:#24292e;">	常见问题：</span></span>
<span class="line"><span style="color:#24292e;">		求解的答案只和询问的链有关的：</span></span>
<span class="line"><span style="color:#24292e;">			利用性质5，只需要考虑以下核心点：</span></span>
<span class="line"><span style="color:#24292e;">				能快速回答序列上的区间询问</span></span>
<span class="line"><span style="color:#24292e;">				能快速合并答案（拼接）</span></span>
<span class="line"><span style="color:#24292e;">			通常，如果线段树实现了序列上的问题，那么快速合并答案就是好做的</span></span>
<span class="line"><span style="color:#24292e;">			一般来说，此类问题难点都在于序列上的区间询问</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			时刻铭记链查询等价于dfs序上的若干区间拼接查询	</span></span>
<span class="line"><span style="color:#24292e;">		依赖树形态的快速操作问题：</span></span>
<span class="line"><span style="color:#24292e;">			利用性质5，只需要考虑以下核心点：</span></span>
<span class="line"><span style="color:#24292e;">				如何快速维护重链上的区间查询</span></span>
<span class="line"><span style="color:#24292e;">				如何快速维护轻儿子的贡献</span></span>
<span class="line"><span style="color:#24292e;">			常见的做法：</span></span>
<span class="line"><span style="color:#24292e;">				将轻儿子的贡献放在重链上维护</span></span>
<span class="line"><span style="color:#24292e;">				每次修改考虑轻儿子贡献的变化</span></span>
<span class="line"><span style="color:#24292e;">			经典问题：动态DP</span></span></code></pre></div>`,2),t=[p];function c(o,r,i,y,d,f){return n(),a("div",null,t)}const h=s(e,[["render",c]]);export{_ as __pageData,h as default};
