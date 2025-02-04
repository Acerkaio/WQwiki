import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const j=JSON.parse('{"title":"最短路相关","description":"","frontmatter":{},"headers":[],"relativePath":"Graph/最短路相关.md","filePath":"Graph/最短路相关.md","lastUpdated":1738592860000}'),l={name:"Graph/最短路相关.md"},p=e(`<h1 id="最短路相关" tabindex="-1">最短路相关 <a class="header-anchor" href="#最短路相关" aria-label="Permalink to &quot;最短路相关&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">floyd</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：稠密图全源最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见的floyd是实时维护一个点集V，当前dis[i][j]表示从i到j只能中途经过V中点的最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意，这里的“中途”不含起点和终点（这是因为 朴素的floyd初始f[i][j]表示邻接矩阵）</span></span>
<span class="line"><span style="color:#e1e4e8;">	当然，可以改成每次路径全程不经过某些点，这只需要特判起点和终点即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	正确性证明：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次新增一个点，i,j之间的最短路要么经过，要么不经过</span></span>
<span class="line"><span style="color:#e1e4e8;">		不经过就是原来的dis</span></span>
<span class="line"><span style="color:#e1e4e8;">		经过的话，如果图没有负环，必然经过恰一次，就是dis[i][k]+dis[k][j]</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意这里是滚动实现，因为没有负环时，经过同一个点两次必然不优</span></span>
<span class="line"><span style="color:#e1e4e8;">	判负环：必然有一个点经过了两次，做两次floyd，在第二次看能不能再松弛即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	扩展：结合线段树分治实现稠密图加点删点全源最短路（边的问题类似）</span></span>
<span class="line"><span style="color:#e1e4e8;">dijkstra</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：非负权单源最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	原理：简单贪心，略</span></span>
<span class="line"><span style="color:#e1e4e8;">	扩展：模拟dij</span></span>
<span class="line"><span style="color:#e1e4e8;">		dij的过程非常简单，核心就两步：</span></span>
<span class="line"><span style="color:#e1e4e8;">			找到最小点</span></span>
<span class="line"><span style="color:#e1e4e8;">			用当前点松弛所有相连点</span></span>
<span class="line"><span style="color:#e1e4e8;">		模拟的难点在于松弛部分，通常可以用DS实现</span></span>
<span class="line"><span style="color:#e1e4e8;">		经典的：处理区间连边</span></span>
<span class="line"><span style="color:#e1e4e8;">bellman-ford：</span></span>
<span class="line"><span style="color:#e1e4e8;">	正确性证明：没有负环的时候，最短路长度&lt;=n</span></span>
<span class="line"><span style="color:#e1e4e8;">spfa：</span></span>
<span class="line"><span style="color:#e1e4e8;">	复杂度证明：每个点入队必然因为某条新边导致的最短路，最多入队m次</span></span>
<span class="line"><span style="color:#e1e4e8;">	判负环：</span></span>
<span class="line"><span style="color:#e1e4e8;">		建立超级源点，连向每一个点，跑spfa（保证连通性）</span></span>
<span class="line"><span style="color:#e1e4e8;">		同时记录最短路点数，超过n就有负环</span></span>
<span class="line"><span style="color:#e1e4e8;">	优化：</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接优化（正式比赛不要往这方面想）：比较常用的是SLF优化</span></span>
<span class="line"><span style="color:#e1e4e8;">		去掉负权边跑dij（常用）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			重新设计建图</span></span>
<span class="line"><span style="color:#e1e4e8;">			结合图的特性，合理赋势能</span></span>
<span class="line"><span style="color:#e1e4e8;">k-bfs：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：边权非负且值域可以接受</span></span>
<span class="line"><span style="color:#e1e4e8;">	本质：模拟dij，通过让每个队列内部不降，保证取到最小值</span></span>
<span class="line"><span style="color:#e1e4e8;">	复杂度O(nv+m)，特别的有01bfs</span></span>
<span class="line"><span style="color:#e1e4e8;">差分约束问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理不等关系：直接建边</span></span>
<span class="line"><span style="color:#e1e4e8;">	相等关系：建双向边</span></span>
<span class="line"><span style="color:#e1e4e8;">	和特殊值的不等关系：取虚点建边</span></span>
<span class="line"><span style="color:#e1e4e8;">johnson：</span></span>
<span class="line"><span style="color:#e1e4e8;">	利用差分约束实现一般图的赋势能</span></span>
<span class="line"><span style="color:#e1e4e8;">最短路树：</span></span>
<span class="line"><span style="color:#e1e4e8;">	以下都是有向任意边权图</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		最短路DAG：满足dis[v]=dis[u]+w(u,v)的边组成的图</span></span>
<span class="line"><span style="color:#e1e4e8;">		最短路树：最短路DAG的生成树</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意，这是有向树</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		（核心）非树边满足三角形不等式</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何一条从st出发到ed的简单路径和合法的非树边序列一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">			合法：序列中的任何非树边前驱能只走树边到该非树边</span></span>
<span class="line"><span style="color:#e1e4e8;">		路径权值和非树边序列权值的对应关系：	</span></span>
<span class="line"><span style="color:#e1e4e8;">			将非树边的权值重定义为dis[v]+w(u,v)-dis[u]</span></span>
<span class="line"><span style="color:#e1e4e8;">			路径的长度就是非树边权值和加上st,ed之间的最短路长度</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">k短路：</span></span>
<span class="line"><span style="color:#e1e4e8;">	不要求简单路径：在dij过程中第k次取出的x点dis就是k短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	简单路径：结合最短路树和调整法实现</span></span>
<span class="line"><span style="color:#e1e4e8;">同余最短路：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：存在性完全背包问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	任取一个基准物品，记其体积为mod</span></span>
<span class="line"><span style="color:#e1e4e8;">	那么，对于0&lt;=i&lt;mod，dis[i]表示到达j*mod+i的最小的j*mod+i</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于体积为v的物品，其松弛形如chkmi(dis[(i+v)%mod],dis[i]+v)</span></span>
<span class="line"><span style="color:#e1e4e8;">	判定一个体积v是否可以表示出来，可以直接看dis[v%mod]和v的大小关系</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接实现是最短路，但是，这是否可以直接DP去掉log呢？</span></span>
<span class="line"><span style="color:#e1e4e8;">	观察松弛进行的条件，假设从st开始，持续松弛成功，过程形如环上跳</span></span>
<span class="line"><span style="color:#e1e4e8;">	而这个跳肯定不会一直成功到st（因为一开始就是用dis[st]松弛的）</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以，可以枚举st，模拟跳的过程，转两圈，保证每个环上点都松弛到位</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心：不会经过同一个状态</span></span>
<span class="line"><span style="color:#e1e4e8;">删边最短路：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理 无向正权图 的删边后的固定起终点最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	下面求1到n的删边最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	建出两个最短路树做，懒得写了，太少用了</span></span>
<span class="line"><span style="color:#e1e4e8;">次短路的扩展应用：维护多个最值处理限制</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用背景：</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理带限制的最短路（DP转移）</span></span>
<span class="line"><span style="color:#e1e4e8;">		限制可以被刻画成：</span></span>
<span class="line"><span style="color:#e1e4e8;">			解的特征值恰不等于给定集合中的任何一个</span></span>
<span class="line"><span style="color:#e1e4e8;">			其中，特征值需要自己设计</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于同一个点（状态），不合法的边（转移）的数量是可以接受的</span></span>
<span class="line"><span style="color:#e1e4e8;">	经典例子：</span></span>
<span class="line"><span style="color:#e1e4e8;">		最短路相邻不能经过相同的点</span></span>
<span class="line"><span style="color:#e1e4e8;">		最短路源点不同</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		维护(最多不合法数量+1)个最值，要求最值的特征值两两不同</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次松弛（转移），分类讨论：</span></span>
<span class="line"><span style="color:#e1e4e8;">			如果最值集合中没有当前特征值：尝试用当前最值替换集合中的最劣解</span></span>
<span class="line"><span style="color:#e1e4e8;">			如果最值集合中有当前特征值：直接更新对应最值</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果是DP，直接朴素维护或平衡树维护</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果是dij，每个集合中的最值对应一个点，每次松弛最多更新一个点的dis，及时将其放入队列</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		最短路，但是每个点有点权，要求路径的任何一个前缀的点权异或和不为0</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution：直接做就可以了，此题当然可以加强，但我懒得</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">floyd</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：稠密图全源最短路</span></span>
<span class="line"><span style="color:#24292e;">	常见的floyd是实时维护一个点集V，当前dis[i][j]表示从i到j只能中途经过V中点的最短路</span></span>
<span class="line"><span style="color:#24292e;">	注意，这里的“中途”不含起点和终点（这是因为 朴素的floyd初始f[i][j]表示邻接矩阵）</span></span>
<span class="line"><span style="color:#24292e;">	当然，可以改成每次路径全程不经过某些点，这只需要特判起点和终点即可</span></span>
<span class="line"><span style="color:#24292e;">	正确性证明：</span></span>
<span class="line"><span style="color:#24292e;">		每次新增一个点，i,j之间的最短路要么经过，要么不经过</span></span>
<span class="line"><span style="color:#24292e;">		不经过就是原来的dis</span></span>
<span class="line"><span style="color:#24292e;">		经过的话，如果图没有负环，必然经过恰一次，就是dis[i][k]+dis[k][j]</span></span>
<span class="line"><span style="color:#24292e;">		注意这里是滚动实现，因为没有负环时，经过同一个点两次必然不优</span></span>
<span class="line"><span style="color:#24292e;">	判负环：必然有一个点经过了两次，做两次floyd，在第二次看能不能再松弛即可</span></span>
<span class="line"><span style="color:#24292e;">	扩展：结合线段树分治实现稠密图加点删点全源最短路（边的问题类似）</span></span>
<span class="line"><span style="color:#24292e;">dijkstra</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：非负权单源最短路</span></span>
<span class="line"><span style="color:#24292e;">	原理：简单贪心，略</span></span>
<span class="line"><span style="color:#24292e;">	扩展：模拟dij</span></span>
<span class="line"><span style="color:#24292e;">		dij的过程非常简单，核心就两步：</span></span>
<span class="line"><span style="color:#24292e;">			找到最小点</span></span>
<span class="line"><span style="color:#24292e;">			用当前点松弛所有相连点</span></span>
<span class="line"><span style="color:#24292e;">		模拟的难点在于松弛部分，通常可以用DS实现</span></span>
<span class="line"><span style="color:#24292e;">		经典的：处理区间连边</span></span>
<span class="line"><span style="color:#24292e;">bellman-ford：</span></span>
<span class="line"><span style="color:#24292e;">	正确性证明：没有负环的时候，最短路长度&lt;=n</span></span>
<span class="line"><span style="color:#24292e;">spfa：</span></span>
<span class="line"><span style="color:#24292e;">	复杂度证明：每个点入队必然因为某条新边导致的最短路，最多入队m次</span></span>
<span class="line"><span style="color:#24292e;">	判负环：</span></span>
<span class="line"><span style="color:#24292e;">		建立超级源点，连向每一个点，跑spfa（保证连通性）</span></span>
<span class="line"><span style="color:#24292e;">		同时记录最短路点数，超过n就有负环</span></span>
<span class="line"><span style="color:#24292e;">	优化：</span></span>
<span class="line"><span style="color:#24292e;">		直接优化（正式比赛不要往这方面想）：比较常用的是SLF优化</span></span>
<span class="line"><span style="color:#24292e;">		去掉负权边跑dij（常用）：</span></span>
<span class="line"><span style="color:#24292e;">			重新设计建图</span></span>
<span class="line"><span style="color:#24292e;">			结合图的特性，合理赋势能</span></span>
<span class="line"><span style="color:#24292e;">k-bfs：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：边权非负且值域可以接受</span></span>
<span class="line"><span style="color:#24292e;">	本质：模拟dij，通过让每个队列内部不降，保证取到最小值</span></span>
<span class="line"><span style="color:#24292e;">	复杂度O(nv+m)，特别的有01bfs</span></span>
<span class="line"><span style="color:#24292e;">差分约束问题：</span></span>
<span class="line"><span style="color:#24292e;">	处理不等关系：直接建边</span></span>
<span class="line"><span style="color:#24292e;">	相等关系：建双向边</span></span>
<span class="line"><span style="color:#24292e;">	和特殊值的不等关系：取虚点建边</span></span>
<span class="line"><span style="color:#24292e;">johnson：</span></span>
<span class="line"><span style="color:#24292e;">	利用差分约束实现一般图的赋势能</span></span>
<span class="line"><span style="color:#24292e;">最短路树：</span></span>
<span class="line"><span style="color:#24292e;">	以下都是有向任意边权图</span></span>
<span class="line"><span style="color:#24292e;">	定义：</span></span>
<span class="line"><span style="color:#24292e;">		最短路DAG：满足dis[v]=dis[u]+w(u,v)的边组成的图</span></span>
<span class="line"><span style="color:#24292e;">		最短路树：最短路DAG的生成树</span></span>
<span class="line"><span style="color:#24292e;">			注意，这是有向树</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		（核心）非树边满足三角形不等式</span></span>
<span class="line"><span style="color:#24292e;">		任何一条从st出发到ed的简单路径和合法的非树边序列一一对应</span></span>
<span class="line"><span style="color:#24292e;">			合法：序列中的任何非树边前驱能只走树边到该非树边</span></span>
<span class="line"><span style="color:#24292e;">		路径权值和非树边序列权值的对应关系：	</span></span>
<span class="line"><span style="color:#24292e;">			将非树边的权值重定义为dis[v]+w(u,v)-dis[u]</span></span>
<span class="line"><span style="color:#24292e;">			路径的长度就是非树边权值和加上st,ed之间的最短路长度</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">k短路：</span></span>
<span class="line"><span style="color:#24292e;">	不要求简单路径：在dij过程中第k次取出的x点dis就是k短路</span></span>
<span class="line"><span style="color:#24292e;">	简单路径：结合最短路树和调整法实现</span></span>
<span class="line"><span style="color:#24292e;">同余最短路：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：存在性完全背包问题</span></span>
<span class="line"><span style="color:#24292e;">	任取一个基准物品，记其体积为mod</span></span>
<span class="line"><span style="color:#24292e;">	那么，对于0&lt;=i&lt;mod，dis[i]表示到达j*mod+i的最小的j*mod+i</span></span>
<span class="line"><span style="color:#24292e;">	对于体积为v的物品，其松弛形如chkmi(dis[(i+v)%mod],dis[i]+v)</span></span>
<span class="line"><span style="color:#24292e;">	判定一个体积v是否可以表示出来，可以直接看dis[v%mod]和v的大小关系</span></span>
<span class="line"><span style="color:#24292e;">	直接实现是最短路，但是，这是否可以直接DP去掉log呢？</span></span>
<span class="line"><span style="color:#24292e;">	观察松弛进行的条件，假设从st开始，持续松弛成功，过程形如环上跳</span></span>
<span class="line"><span style="color:#24292e;">	而这个跳肯定不会一直成功到st（因为一开始就是用dis[st]松弛的）</span></span>
<span class="line"><span style="color:#24292e;">	所以，可以枚举st，模拟跳的过程，转两圈，保证每个环上点都松弛到位</span></span>
<span class="line"><span style="color:#24292e;">	核心：不会经过同一个状态</span></span>
<span class="line"><span style="color:#24292e;">删边最短路：</span></span>
<span class="line"><span style="color:#24292e;">	处理 无向正权图 的删边后的固定起终点最短路</span></span>
<span class="line"><span style="color:#24292e;">	下面求1到n的删边最短路</span></span>
<span class="line"><span style="color:#24292e;">	建出两个最短路树做，懒得写了，太少用了</span></span>
<span class="line"><span style="color:#24292e;">次短路的扩展应用：维护多个最值处理限制</span></span>
<span class="line"><span style="color:#24292e;">	适用背景：</span></span>
<span class="line"><span style="color:#24292e;">		处理带限制的最短路（DP转移）</span></span>
<span class="line"><span style="color:#24292e;">		限制可以被刻画成：</span></span>
<span class="line"><span style="color:#24292e;">			解的特征值恰不等于给定集合中的任何一个</span></span>
<span class="line"><span style="color:#24292e;">			其中，特征值需要自己设计</span></span>
<span class="line"><span style="color:#24292e;">	适用条件：</span></span>
<span class="line"><span style="color:#24292e;">		对于同一个点（状态），不合法的边（转移）的数量是可以接受的</span></span>
<span class="line"><span style="color:#24292e;">	经典例子：</span></span>
<span class="line"><span style="color:#24292e;">		最短路相邻不能经过相同的点</span></span>
<span class="line"><span style="color:#24292e;">		最短路源点不同</span></span>
<span class="line"><span style="color:#24292e;">	处理办法：</span></span>
<span class="line"><span style="color:#24292e;">		维护(最多不合法数量+1)个最值，要求最值的特征值两两不同</span></span>
<span class="line"><span style="color:#24292e;">		每次松弛（转移），分类讨论：</span></span>
<span class="line"><span style="color:#24292e;">			如果最值集合中没有当前特征值：尝试用当前最值替换集合中的最劣解</span></span>
<span class="line"><span style="color:#24292e;">			如果最值集合中有当前特征值：直接更新对应最值</span></span>
<span class="line"><span style="color:#24292e;">		如果是DP，直接朴素维护或平衡树维护</span></span>
<span class="line"><span style="color:#24292e;">		如果是dij，每个集合中的最值对应一个点，每次松弛最多更新一个点的dis，及时将其放入队列</span></span>
<span class="line"><span style="color:#24292e;">	例题：</span></span>
<span class="line"><span style="color:#24292e;">		最短路，但是每个点有点权，要求路径的任何一个前缀的点权异或和不为0</span></span>
<span class="line"><span style="color:#24292e;">		solution：直接做就可以了，此题当然可以加强，但我懒得</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,d,_){return n(),a("div",null,t)}const v=s(l,[["render",o]]);export{j as __pageData,v as default};
