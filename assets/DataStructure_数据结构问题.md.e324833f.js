import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"数据结构问题","description":"","frontmatter":{},"headers":[],"relativePath":"DataStructure/数据结构问题.md","filePath":"DataStructure/数据结构问题.md","lastUpdated":1738591681000}'),l={name:"DataStructure/数据结构问题.md"},p=e(`<h1 id="数据结构问题" tabindex="-1">数据结构问题 <a class="header-anchor" href="#数据结构问题" aria-label="Permalink to &quot;数据结构问题&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">处理区间问题的常见办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	差分：前缀和，主席树</span></span>
<span class="line"><span style="color:#e1e4e8;">	线段树：</span></span>
<span class="line"><span style="color:#e1e4e8;">		首先考虑区间维护什么信息，如何push_up</span></span>
<span class="line"><span style="color:#e1e4e8;">		若有区间修改，考虑如何打tag，如何快速修改区间信息</span></span>
<span class="line"><span style="color:#e1e4e8;">	分块：</span></span>
<span class="line"><span style="color:#e1e4e8;">		序列分块，时间轴分块</span></span>
<span class="line"><span style="color:#e1e4e8;">		优化暴力</span></span>
<span class="line"><span style="color:#e1e4e8;">	莫队：考虑左右端点的扩展和收缩如何维护答案</span></span>
<span class="line"><span style="color:#e1e4e8;">	定右端点扫描线：没有修改时的首选算法</span></span>
<span class="line"><span style="color:#e1e4e8;">	“跳端点”的询问：倍增，跳端点分治</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">可撤销相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	任意顺序：</span></span>
<span class="line"><span style="color:#e1e4e8;">		01背包方案数</span></span>
<span class="line"><span style="color:#e1e4e8;">		高维前缀和</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		一般的，需要满足以下条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">			计数DP</span></span>
<span class="line"><span style="color:#e1e4e8;">			运算可撤销（例如加法,乘法）</span></span>
<span class="line"><span style="color:#e1e4e8;">	固定顺序：</span></span>
<span class="line"><span style="color:#e1e4e8;">		按秩合并并查集</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		莫队：一般是任意顺序的，区间查询，不支持修改</span></span>
<span class="line"><span style="color:#e1e4e8;">		线段树分治：任意顺序或固定顺序，单点查询，区间修改</span></span>
<span class="line"><span style="color:#e1e4e8;">染色问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	修改：单点修改，区间推平，区间加颜色</span></span>
<span class="line"><span style="color:#e1e4e8;">	查询：区间颜色数</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见算法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		莫队：单点修，区间颜色数</span></span>
<span class="line"><span style="color:#e1e4e8;">		线段树维护颜色状压：区间加颜色，区间颜色数</span></span>
<span class="line"><span style="color:#e1e4e8;">		线段树维护pre数组：单点修，区间颜色数</span></span>
<span class="line"><span style="color:#e1e4e8;">		ODT：区间推平，构成颜色段均摊</span></span>
<span class="line"><span style="color:#e1e4e8;">		转化成二维数点问题：区间推平，区间颜色数</span></span>
<span class="line"><span style="color:#e1e4e8;">区间mex问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	区间扩展和收缩：</span></span>
<span class="line"><span style="color:#e1e4e8;">		结合桶，维护没有出现过的数，每次最小的就是mex</span></span>
<span class="line"><span style="color:#e1e4e8;">	区间在线求mex：</span></span>
<span class="line"><span style="color:#e1e4e8;">		维护n*n的矩阵，t[i][j]表示在a[1~i]中，数j最后一次出现的位置</span></span>
<span class="line"><span style="color:#e1e4e8;">		一个数x在[l,r]中出现等价于a[r][x]&gt;=l</span></span>
<span class="line"><span style="color:#e1e4e8;">		想办法维护这个矩阵即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			在线：可持久化线段树上二分</span></span>
<span class="line"><span style="color:#e1e4e8;">			离线：扫描线+线段树上二分</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">根号分治：</span></span>
<span class="line"><span style="color:#e1e4e8;">	发现条件：反的单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见形式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		分式形式：</span></span>
<span class="line"><span style="color:#e1e4e8;">			条件：分子一定</span></span>
<span class="line"><span style="color:#e1e4e8;">			分式值和分母做平衡</span></span>
<span class="line"><span style="color:#e1e4e8;">		和一定形式：</span></span>
<span class="line"><span style="color:#e1e4e8;">			具体的，有：度数和点数，连通块数和块的大小 等</span></span>
<span class="line"><span style="color:#e1e4e8;">			结论一：</span></span>
<span class="line"><span style="color:#e1e4e8;">				数的大小和数量做平衡</span></span>
<span class="line"><span style="color:#e1e4e8;">			结论二：</span></span>
<span class="line"><span style="color:#e1e4e8;">				数的种类是根号级别的</span></span>
<span class="line"><span style="color:#e1e4e8;">				这其实基于结论一：</span></span>
<span class="line"><span style="color:#e1e4e8;">					小数就是有根号种（可能有重复的）</span></span>
<span class="line"><span style="color:#e1e4e8;">					大数就是根号个（有重复也没关系）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">线段树合并：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		与普通的动态开点线段树相同</span></span>
<span class="line"><span style="color:#e1e4e8;">		支持懒标记下传，其特殊的是：</span></span>
<span class="line"><span style="color:#e1e4e8;">			当ls和rs有一个不为空时就下传，否则不下传</span></span>
<span class="line"><span style="color:#e1e4e8;">	复杂度：修改时遍历的节点数级别</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：</span></span>
<span class="line"><span style="color:#e1e4e8;">			首先，懒标记下传产生的新节点数和修改时遍历节点数、合并时遍历节点数同阶，可以不管</span></span>
<span class="line"><span style="color:#e1e4e8;">			考虑在所有线段树中同一个节点的所有修改操作次数x</span></span>
<span class="line"><span style="color:#e1e4e8;">			假如没有额外的分裂，那么该节点在merge函数中被遍历不return的次数就是x-1</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么，整个树的merge调用次数就是和修改操作遍历节点个数同级</span></span>
<span class="line"><span style="color:#e1e4e8;">启发式：</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心：在和一定的情况下，只遍历较小的那个集合</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">		关注根据什么来做启发式，不是所有时候都是节点个数</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如，在既要遍历子树，又要遍历子树中的询问的时候，就认为集合大小是节点数+询问数</span></span>
<span class="line"><span style="color:#e1e4e8;">		关注启发式做法的常数，只要想卡，是容易卡到对数的</span></span>
<span class="line"><span style="color:#e1e4e8;">	启发式合并：</span></span>
<span class="line"><span style="color:#e1e4e8;">		实现：将小集合中的元素逐个插入到大集合中</span></span>
<span class="line"><span style="color:#e1e4e8;">		适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">			插入复杂度（实现难度）低于合并</span></span>
<span class="line"><span style="color:#e1e4e8;">			集合总量可以接受</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见运用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			set合并</span></span>
<span class="line"><span style="color:#e1e4e8;">	启发式分裂：</span></span>
<span class="line"><span style="color:#e1e4e8;">		实现：通过同步扫描，不断裂出已经扫完的部分</span></span>
<span class="line"><span style="color:#e1e4e8;">		适用范围：自己看着办</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">点分治的实现问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	点分治有两种，一种是计数，一种是最优化</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于计数类，比较方便的实现方法是：</span></span>
<span class="line"><span style="color:#e1e4e8;">		ans+=solve(rt);//直接统计当前分治树的点对贡献</span></span>
<span class="line"><span style="color:#e1e4e8;">		ans-=solve(son);//容斥掉rt的各个子树的不合法部分</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		而对于solve(x)函数，通常可以把所有点都放进一个序列里，然后直接用某些离线做法</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样可以避免用一些在线数据结构，代码更好写，复杂度也更优</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，这种做法 不用 考虑从rt出发的某些特殊情况</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于计数类和最优化类，通用的实现方法是：</span></span>
<span class="line"><span style="color:#e1e4e8;">		涉及最值的，可以优先考虑法二</span></span>
<span class="line"><span style="color:#e1e4e8;">		法一：</span></span>
<span class="line"><span style="color:#e1e4e8;">			利用某些在线数据结构，先把所有点都加进去；当要统计某棵子树的贡献时，就再把其贡献删掉，统计完再加回来</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			但是，在某些最优化中，我们可以不用又删又加的，可以直接维护最大次大值，本质和换根DP相似</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意，这种做法 必须 考虑从rt出发的某些特殊情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		法二：</span></span>
<span class="line"><span style="color:#e1e4e8;">			考虑正着扫的同时加入一棵棵子树的贡献，然后再清空，再倒着做一遍</span></span>
<span class="line"><span style="color:#e1e4e8;">			通常用于处理删除操作不好实现的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">			如果路径无序，则不需要再倒着做一遍</span></span>
<span class="line"><span style="color:#e1e4e8;">	点分治卡常的常见办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		多次调用，先建出点分树</span></span>
<span class="line"><span style="color:#e1e4e8;">		灵活选用上述的各种写法（一定要在coding之前确定当前做法最简）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">树上 对 链 或 连通块 的查询问题处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">	类型：</span></span>
<span class="line"><span style="color:#e1e4e8;">		求最优的连通块</span></span>
<span class="line"><span style="color:#e1e4e8;">		求最优的链</span></span>
<span class="line"><span style="color:#e1e4e8;">		查询某条链对应的信息</span></span>
<span class="line"><span style="color:#e1e4e8;">		查询某个连通块对应的信息（一般带修）</span></span>
<span class="line"><span style="color:#e1e4e8;">	带修：</span></span>
<span class="line"><span style="color:#e1e4e8;">		树链剖分：处理查询问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		cdq：处理查询和最优化问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	不修：</span></span>
<span class="line"><span style="color:#e1e4e8;">		比较通用的做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			树链剖分：处理查询问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			点分治：可以处理查询和最优化问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			换根：处理对于每个起点的链查询，可以结合DP或dfs序</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果使用了点分治，可能可以有如下进阶办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			直接在lca处处理对应的链：</span></span>
<span class="line"><span style="color:#e1e4e8;">				核心难点：处理链的合并</span></span>
<span class="line"><span style="color:#e1e4e8;">				常用相关算法：</span></span>
<span class="line"><span style="color:#e1e4e8;">					dsu on tree</span></span>
<span class="line"><span style="color:#e1e4e8;">					线段树合并</span></span>
<span class="line"><span style="color:#e1e4e8;">					</span></span>
<span class="line"><span style="color:#e1e4e8;">可持久化数据结构：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将改变了的节点新建出来，作为新的版本</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样的时空做法复杂度就是和修改的节点数相同的</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		基于均摊/势能分析的做法可持久化的复杂度是</span></span>
<span class="line"><span style="color:#e1e4e8;">			单次操作降到 其最劣修改复杂度</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：</span></span>
<span class="line"><span style="color:#e1e4e8;">			只要每次做最劣修改然后再回退即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见例子：</span></span>
<span class="line"><span style="color:#e1e4e8;">			路径压缩的并查集</span></span>
<span class="line"><span style="color:#e1e4e8;">			splay</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">处理区间问题的常见办法：</span></span>
<span class="line"><span style="color:#24292e;">	差分：前缀和，主席树</span></span>
<span class="line"><span style="color:#24292e;">	线段树：</span></span>
<span class="line"><span style="color:#24292e;">		首先考虑区间维护什么信息，如何push_up</span></span>
<span class="line"><span style="color:#24292e;">		若有区间修改，考虑如何打tag，如何快速修改区间信息</span></span>
<span class="line"><span style="color:#24292e;">	分块：</span></span>
<span class="line"><span style="color:#24292e;">		序列分块，时间轴分块</span></span>
<span class="line"><span style="color:#24292e;">		优化暴力</span></span>
<span class="line"><span style="color:#24292e;">	莫队：考虑左右端点的扩展和收缩如何维护答案</span></span>
<span class="line"><span style="color:#24292e;">	定右端点扫描线：没有修改时的首选算法</span></span>
<span class="line"><span style="color:#24292e;">	“跳端点”的询问：倍增，跳端点分治</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">可撤销相关：</span></span>
<span class="line"><span style="color:#24292e;">	任意顺序：</span></span>
<span class="line"><span style="color:#24292e;">		01背包方案数</span></span>
<span class="line"><span style="color:#24292e;">		高维前缀和</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		一般的，需要满足以下条件：</span></span>
<span class="line"><span style="color:#24292e;">			计数DP</span></span>
<span class="line"><span style="color:#24292e;">			运算可撤销（例如加法,乘法）</span></span>
<span class="line"><span style="color:#24292e;">	固定顺序：</span></span>
<span class="line"><span style="color:#24292e;">		按秩合并并查集</span></span>
<span class="line"><span style="color:#24292e;">	常见做法：</span></span>
<span class="line"><span style="color:#24292e;">		莫队：一般是任意顺序的，区间查询，不支持修改</span></span>
<span class="line"><span style="color:#24292e;">		线段树分治：任意顺序或固定顺序，单点查询，区间修改</span></span>
<span class="line"><span style="color:#24292e;">染色问题</span></span>
<span class="line"><span style="color:#24292e;">	修改：单点修改，区间推平，区间加颜色</span></span>
<span class="line"><span style="color:#24292e;">	查询：区间颜色数</span></span>
<span class="line"><span style="color:#24292e;">	常见算法：</span></span>
<span class="line"><span style="color:#24292e;">		莫队：单点修，区间颜色数</span></span>
<span class="line"><span style="color:#24292e;">		线段树维护颜色状压：区间加颜色，区间颜色数</span></span>
<span class="line"><span style="color:#24292e;">		线段树维护pre数组：单点修，区间颜色数</span></span>
<span class="line"><span style="color:#24292e;">		ODT：区间推平，构成颜色段均摊</span></span>
<span class="line"><span style="color:#24292e;">		转化成二维数点问题：区间推平，区间颜色数</span></span>
<span class="line"><span style="color:#24292e;">区间mex问题：</span></span>
<span class="line"><span style="color:#24292e;">	区间扩展和收缩：</span></span>
<span class="line"><span style="color:#24292e;">		结合桶，维护没有出现过的数，每次最小的就是mex</span></span>
<span class="line"><span style="color:#24292e;">	区间在线求mex：</span></span>
<span class="line"><span style="color:#24292e;">		维护n*n的矩阵，t[i][j]表示在a[1~i]中，数j最后一次出现的位置</span></span>
<span class="line"><span style="color:#24292e;">		一个数x在[l,r]中出现等价于a[r][x]&gt;=l</span></span>
<span class="line"><span style="color:#24292e;">		想办法维护这个矩阵即可</span></span>
<span class="line"><span style="color:#24292e;">		具体做法：</span></span>
<span class="line"><span style="color:#24292e;">			在线：可持久化线段树上二分</span></span>
<span class="line"><span style="color:#24292e;">			离线：扫描线+线段树上二分</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">根号分治：</span></span>
<span class="line"><span style="color:#24292e;">	发现条件：反的单调性</span></span>
<span class="line"><span style="color:#24292e;">	常见形式：</span></span>
<span class="line"><span style="color:#24292e;">		分式形式：</span></span>
<span class="line"><span style="color:#24292e;">			条件：分子一定</span></span>
<span class="line"><span style="color:#24292e;">			分式值和分母做平衡</span></span>
<span class="line"><span style="color:#24292e;">		和一定形式：</span></span>
<span class="line"><span style="color:#24292e;">			具体的，有：度数和点数，连通块数和块的大小 等</span></span>
<span class="line"><span style="color:#24292e;">			结论一：</span></span>
<span class="line"><span style="color:#24292e;">				数的大小和数量做平衡</span></span>
<span class="line"><span style="color:#24292e;">			结论二：</span></span>
<span class="line"><span style="color:#24292e;">				数的种类是根号级别的</span></span>
<span class="line"><span style="color:#24292e;">				这其实基于结论一：</span></span>
<span class="line"><span style="color:#24292e;">					小数就是有根号种（可能有重复的）</span></span>
<span class="line"><span style="color:#24292e;">					大数就是根号个（有重复也没关系）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">线段树合并：</span></span>
<span class="line"><span style="color:#24292e;">	处理：</span></span>
<span class="line"><span style="color:#24292e;">		与普通的动态开点线段树相同</span></span>
<span class="line"><span style="color:#24292e;">		支持懒标记下传，其特殊的是：</span></span>
<span class="line"><span style="color:#24292e;">			当ls和rs有一个不为空时就下传，否则不下传</span></span>
<span class="line"><span style="color:#24292e;">	复杂度：修改时遍历的节点数级别</span></span>
<span class="line"><span style="color:#24292e;">		proof：</span></span>
<span class="line"><span style="color:#24292e;">			首先，懒标记下传产生的新节点数和修改时遍历节点数、合并时遍历节点数同阶，可以不管</span></span>
<span class="line"><span style="color:#24292e;">			考虑在所有线段树中同一个节点的所有修改操作次数x</span></span>
<span class="line"><span style="color:#24292e;">			假如没有额外的分裂，那么该节点在merge函数中被遍历不return的次数就是x-1</span></span>
<span class="line"><span style="color:#24292e;">			那么，整个树的merge调用次数就是和修改操作遍历节点个数同级</span></span>
<span class="line"><span style="color:#24292e;">启发式：</span></span>
<span class="line"><span style="color:#24292e;">	核心：在和一定的情况下，只遍历较小的那个集合</span></span>
<span class="line"><span style="color:#24292e;">	注意：</span></span>
<span class="line"><span style="color:#24292e;">		关注根据什么来做启发式，不是所有时候都是节点个数</span></span>
<span class="line"><span style="color:#24292e;">		例如，在既要遍历子树，又要遍历子树中的询问的时候，就认为集合大小是节点数+询问数</span></span>
<span class="line"><span style="color:#24292e;">		关注启发式做法的常数，只要想卡，是容易卡到对数的</span></span>
<span class="line"><span style="color:#24292e;">	启发式合并：</span></span>
<span class="line"><span style="color:#24292e;">		实现：将小集合中的元素逐个插入到大集合中</span></span>
<span class="line"><span style="color:#24292e;">		适用范围：</span></span>
<span class="line"><span style="color:#24292e;">			插入复杂度（实现难度）低于合并</span></span>
<span class="line"><span style="color:#24292e;">			集合总量可以接受</span></span>
<span class="line"><span style="color:#24292e;">		常见运用：</span></span>
<span class="line"><span style="color:#24292e;">			set合并</span></span>
<span class="line"><span style="color:#24292e;">	启发式分裂：</span></span>
<span class="line"><span style="color:#24292e;">		实现：通过同步扫描，不断裂出已经扫完的部分</span></span>
<span class="line"><span style="color:#24292e;">		适用范围：自己看着办</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">点分治的实现问题：</span></span>
<span class="line"><span style="color:#24292e;">	点分治有两种，一种是计数，一种是最优化</span></span>
<span class="line"><span style="color:#24292e;">	对于计数类，比较方便的实现方法是：</span></span>
<span class="line"><span style="color:#24292e;">		ans+=solve(rt);//直接统计当前分治树的点对贡献</span></span>
<span class="line"><span style="color:#24292e;">		ans-=solve(son);//容斥掉rt的各个子树的不合法部分</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		而对于solve(x)函数，通常可以把所有点都放进一个序列里，然后直接用某些离线做法</span></span>
<span class="line"><span style="color:#24292e;">		这样可以避免用一些在线数据结构，代码更好写，复杂度也更优</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		注意，这种做法 不用 考虑从rt出发的某些特殊情况</span></span>
<span class="line"><span style="color:#24292e;">	对于计数类和最优化类，通用的实现方法是：</span></span>
<span class="line"><span style="color:#24292e;">		涉及最值的，可以优先考虑法二</span></span>
<span class="line"><span style="color:#24292e;">		法一：</span></span>
<span class="line"><span style="color:#24292e;">			利用某些在线数据结构，先把所有点都加进去；当要统计某棵子树的贡献时，就再把其贡献删掉，统计完再加回来</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			但是，在某些最优化中，我们可以不用又删又加的，可以直接维护最大次大值，本质和换根DP相似</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			注意，这种做法 必须 考虑从rt出发的某些特殊情况</span></span>
<span class="line"><span style="color:#24292e;">		法二：</span></span>
<span class="line"><span style="color:#24292e;">			考虑正着扫的同时加入一棵棵子树的贡献，然后再清空，再倒着做一遍</span></span>
<span class="line"><span style="color:#24292e;">			通常用于处理删除操作不好实现的情况</span></span>
<span class="line"><span style="color:#24292e;">			如果路径无序，则不需要再倒着做一遍</span></span>
<span class="line"><span style="color:#24292e;">	点分治卡常的常见办法：</span></span>
<span class="line"><span style="color:#24292e;">		多次调用，先建出点分树</span></span>
<span class="line"><span style="color:#24292e;">		灵活选用上述的各种写法（一定要在coding之前确定当前做法最简）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">树上 对 链 或 连通块 的查询问题处理：</span></span>
<span class="line"><span style="color:#24292e;">	类型：</span></span>
<span class="line"><span style="color:#24292e;">		求最优的连通块</span></span>
<span class="line"><span style="color:#24292e;">		求最优的链</span></span>
<span class="line"><span style="color:#24292e;">		查询某条链对应的信息</span></span>
<span class="line"><span style="color:#24292e;">		查询某个连通块对应的信息（一般带修）</span></span>
<span class="line"><span style="color:#24292e;">	带修：</span></span>
<span class="line"><span style="color:#24292e;">		树链剖分：处理查询问题</span></span>
<span class="line"><span style="color:#24292e;">		cdq：处理查询和最优化问题</span></span>
<span class="line"><span style="color:#24292e;">	不修：</span></span>
<span class="line"><span style="color:#24292e;">		比较通用的做法：</span></span>
<span class="line"><span style="color:#24292e;">			树链剖分：处理查询问题</span></span>
<span class="line"><span style="color:#24292e;">			点分治：可以处理查询和最优化问题</span></span>
<span class="line"><span style="color:#24292e;">			换根：处理对于每个起点的链查询，可以结合DP或dfs序</span></span>
<span class="line"><span style="color:#24292e;">		如果使用了点分治，可能可以有如下进阶办法：</span></span>
<span class="line"><span style="color:#24292e;">			直接在lca处处理对应的链：</span></span>
<span class="line"><span style="color:#24292e;">				核心难点：处理链的合并</span></span>
<span class="line"><span style="color:#24292e;">				常用相关算法：</span></span>
<span class="line"><span style="color:#24292e;">					dsu on tree</span></span>
<span class="line"><span style="color:#24292e;">					线段树合并</span></span>
<span class="line"><span style="color:#24292e;">					</span></span>
<span class="line"><span style="color:#24292e;">可持久化数据结构：</span></span>
<span class="line"><span style="color:#24292e;">	处理办法：</span></span>
<span class="line"><span style="color:#24292e;">		将改变了的节点新建出来，作为新的版本</span></span>
<span class="line"><span style="color:#24292e;">		这样的时空做法复杂度就是和修改的节点数相同的</span></span>
<span class="line"><span style="color:#24292e;">	结论：</span></span>
<span class="line"><span style="color:#24292e;">		基于均摊/势能分析的做法可持久化的复杂度是</span></span>
<span class="line"><span style="color:#24292e;">			单次操作降到 其最劣修改复杂度</span></span>
<span class="line"><span style="color:#24292e;">		proof：</span></span>
<span class="line"><span style="color:#24292e;">			只要每次做最劣修改然后再回退即可</span></span>
<span class="line"><span style="color:#24292e;">		常见例子：</span></span>
<span class="line"><span style="color:#24292e;">			路径压缩的并查集</span></span>
<span class="line"><span style="color:#24292e;">			splay</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{m as __pageData,h as default};
