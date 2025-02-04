import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const P=JSON.parse('{"title":"常见建模","description":"","frontmatter":{},"headers":[],"relativePath":"Graph/常见建模.md","filePath":"Graph/常见建模.md","lastUpdated":1738592860000}'),p={name:"Graph/常见建模.md"},l=e(`<h1 id="常见建模" tabindex="-1">常见建模 <a class="header-anchor" href="#常见建模" aria-label="Permalink to &quot;常见建模&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">图论基本知识：</span></span>
<span class="line"><span style="color:#e1e4e8;">	无向图满足：所有点度数和=总边数*2</span></span>
<span class="line"><span style="color:#e1e4e8;">	有向图满足：所有点入度和=所有点出度和</span></span>
<span class="line"><span style="color:#e1e4e8;">	n个点、n-1条边的无向连通图是树</span></span>
<span class="line"><span style="color:#e1e4e8;">		树森林满足：点数-边数=连通块数</span></span>
<span class="line"><span style="color:#e1e4e8;">	n个点、n条边的无向图是基环树森林</span></span>
<span class="line"><span style="color:#e1e4e8;">		满足所有点的度数都是2的无向图是若干环组成的图</span></span>
<span class="line"><span style="color:#e1e4e8;">	二分图任何一个环都是偶环，且左右部点在环上交替出现</span></span>
<span class="line"><span style="color:#e1e4e8;">		若是简单环，那么其经过的左右部点个数相同</span></span>
<span class="line"><span style="color:#e1e4e8;">	每个点的出度都是1的有向图是内向基环树森林</span></span>
<span class="line"><span style="color:#e1e4e8;">一维分析法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	常用来分析DP数组的变化</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先要对DP分一下阶段，然后考虑新的阶段怎么变</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见的性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">二维平面分析法</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理二维问题，将其形象化</span></span>
<span class="line"><span style="color:#e1e4e8;">	经典的：</span></span>
<span class="line"><span style="color:#e1e4e8;">		矩形问题：二维数点等，DS常用</span></span>
<span class="line"><span style="color:#e1e4e8;">		格路计数，反射容斥</span></span>
<span class="line"><span style="color:#e1e4e8;">		DP数组变化分析</span></span>
<span class="line"><span style="color:#e1e4e8;">		刻画排列：棋盘放子</span></span>
<span class="line"><span style="color:#e1e4e8;">笛卡尔树</span></span>
<span class="line"><span style="color:#e1e4e8;">	分为二叉和多叉</span></span>
<span class="line"><span style="color:#e1e4e8;">	二叉：</span></span>
<span class="line"><span style="color:#e1e4e8;">		要求序列元素两两不同</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果有相同的，用不unique的离散化方法转成两两不同的</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质非常丰富，但一般做题比较鸡肋，可能比直接做更难做</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：（以小根为例）</span></span>
<span class="line"><span style="color:#e1e4e8;">			堆性质</span></span>
<span class="line"><span style="color:#e1e4e8;">			二叉查找树性质</span></span>
<span class="line"><span style="color:#e1e4e8;">			任意两点之间的最小值在两点的lca处</span></span>
<span class="line"><span style="color:#e1e4e8;">				这启示我们在lca处处理跨过左右两个子树的询问</span></span>
<span class="line"><span style="color:#e1e4e8;">			每个点能覆盖的范围就是自己的子树</span></span>
<span class="line"><span style="color:#e1e4e8;">		为数不多的运用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			四毛子算法</span></span>
<span class="line"><span style="color:#e1e4e8;">			有时可以多叉转二叉</span></span>
<span class="line"><span style="color:#e1e4e8;">	多叉：</span></span>
<span class="line"><span style="color:#e1e4e8;">		比较常用，可以将一般问题的分析转化到树上分析</span></span>
<span class="line"><span style="color:#e1e4e8;">		对性质分析帮助很大</span></span>
<span class="line"><span style="color:#e1e4e8;">		自己本身没什么性质</span></span>
<span class="line"><span style="color:#e1e4e8;">刻画排列的常见办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	排列环：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于排列a，将i向a[i]连边，这会形成若干个环</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			该建模和原排列一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">			假如每次可以交换两个数，那么还原该排列的必要操作次数是n-排列环个数</span></span>
<span class="line"><span style="color:#e1e4e8;">	棋盘：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于排列a，每一个(i,a[i])看作棋盘上的一个点，限制是两两点不在同一行或列</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			任何一个棋盘和排列一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">			刻画大小关系非常方便</span></span>
<span class="line"><span style="color:#e1e4e8;">		例题：CF1909F2</span></span>
<span class="line"><span style="color:#e1e4e8;">欧拉路径：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		构造方案</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见的方案满足的限制：</span></span>
<span class="line"><span style="color:#e1e4e8;">			“数量相等”</span></span>
<span class="line"><span style="color:#e1e4e8;">			“数量相差最多1”</span></span>
<span class="line"><span style="color:#e1e4e8;">			“划分成两个数量相差1的集合”</span></span>
<span class="line"><span style="color:#e1e4e8;">			“满足至少m/2个条件”	</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见引理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何一张无向图所有节点度数和为偶数</span></span>
<span class="line"><span style="color:#e1e4e8;">		（自环看作两条度）</span></span>
<span class="line"><span style="color:#e1e4e8;">		所以，奇度点必然成对出现</span></span>
<span class="line"><span style="color:#e1e4e8;">	欧拉路径存在的条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">		有向图：</span></span>
<span class="line"><span style="color:#e1e4e8;">			变成无向图后连通</span></span>
<span class="line"><span style="color:#e1e4e8;">			两个点不满足入度数等于出度数，或都满足</span></span>
<span class="line"><span style="color:#e1e4e8;">		无向图：</span></span>
<span class="line"><span style="color:#e1e4e8;">			连通</span></span>
<span class="line"><span style="color:#e1e4e8;">			最多两个点度数为奇数，或都为偶数</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		总的来说：连通性，奇偶性</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见trick：</span></span>
<span class="line"><span style="color:#e1e4e8;">		有起终点和无起终点可以互相转化：</span></span>
<span class="line"><span style="color:#e1e4e8;">			有-&gt;无：将欧拉路径的起点和终点连一条边</span></span>
<span class="line"><span style="color:#e1e4e8;">			无-&gt;有：删掉欧拉回路的一条边即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		无向图和有向图路径的转化：</span></span>
<span class="line"><span style="color:#e1e4e8;">			无向图欧拉路径本质上是给每条边定向</span></span>
<span class="line"><span style="color:#e1e4e8;">			将有向图变成无向图，那么已有路径就是一个解</span></span>
<span class="line"><span style="color:#e1e4e8;">		无向图定向：</span></span>
<span class="line"><span style="color:#e1e4e8;">			任何一张无向图都能存在一种定向成有向图的方法，使 出入度数量差&lt;=1</span></span>
<span class="line"><span style="color:#e1e4e8;">			proof:</span></span>
<span class="line"><span style="color:#e1e4e8;">				将奇度点两两连边，必然存在欧拉回路，根据路径方向定向即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		混合图欧拉回路：</span></span>
<span class="line"><span style="color:#e1e4e8;">			无向图欧拉路径本质上是给每条边定向</span></span>
<span class="line"><span style="color:#e1e4e8;">			我们已知已经定下的有向边，解个方程可以得到还需要的出入度数</span></span>
<span class="line"><span style="color:#e1e4e8;">			设一个点的权值为入度数-出度数</span></span>
<span class="line"><span style="color:#e1e4e8;">			一条无向边定向的影响等价于起点--，终点++</span></span>
<span class="line"><span style="color:#e1e4e8;">			如果直接建网络流就没法保证每条无向边都定向，所以将点的权值先减掉无向边的数量再除以2</span></span>
<span class="line"><span style="color:#e1e4e8;">			每次定向的影响就是给两个点之一的点权++，这样就好流了</span></span>
<span class="line"><span style="color:#e1e4e8;">		边黑白染色：</span></span>
<span class="line"><span style="color:#e1e4e8;">			实现：沿着欧拉路径交替黑白染色</span></span>
<span class="line"><span style="color:#e1e4e8;">			性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">				可以将除了起终点以外的所有点的度划分成两个大小相同的集合</span></span>
<span class="line"><span style="color:#e1e4e8;">				对于起终点，根据无向图边数分析其染色情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		调节无向图节点度数奇偶性的方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			法一：将没选的边建成图，原来的奇度点两两配对，然后每次找一条连接两点的一条路径，上面的每一条边状态都取反</span></span>
<span class="line"><span style="color:#e1e4e8;">			法二：将没选的边建成图，取一棵生成树，然后从底向上处理</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		CF547D Mike and Fish：套路的将行列看成点，将平面上的点看作无向边，染色就是定向，先调整奇偶性，然后跑完删掉额外边即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		P6628 丁香之路：传奇题目。先补连通性，再调整奇偶性，贪心智慧大集合</span></span>
<span class="line"><span style="color:#e1e4e8;">		CF429E 据说很像，懒的做了</span></span>
<span class="line"><span style="color:#e1e4e8;">		经典题：a序列经过多少次交换形成b序列</span></span>
<span class="line"><span style="color:#e1e4e8;">		Gym 102893G：利用无向图定向的结论，可以暴力枚举入边的所有可能</span></span>
<span class="line"><span style="color:#e1e4e8;">		COCI2021-2022 fliper</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">自动机（DFA）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	形象化定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		一个DAG，每条边代表一个转移，有若干终止节点</span></span>
<span class="line"><span style="color:#e1e4e8;">		一条能到终止节点的路径对应一种合法方案</span></span>
<span class="line"><span style="color:#e1e4e8;">	作用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		设计出复杂度可以接受的自动机，可以方便地去掉一些条件</span></span>
<span class="line"><span style="color:#e1e4e8;">		从而让问题转化成DAG上的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见自动机：</span></span>
<span class="line"><span style="color:#e1e4e8;">		kmp，AC自动机</span></span>
<span class="line"><span style="color:#e1e4e8;">		SAM</span></span>
<span class="line"><span style="color:#e1e4e8;">		DP转移DAG，最短路径DAG，DP套DP</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本性质：从任何一个入度为0的点走到一个出度为0的点，都是一种合法方案</span></span>
<span class="line"><span style="color:#e1e4e8;">	应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		正反向转化：可以实现解的拼接或用于终状态更好求的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">			特别的：在转移相同的情况下，要分别求多个起始状态对应的终状态的DP值，可以反向DP</span></span>
<span class="line"><span style="color:#e1e4e8;">		合法解的必经点和可行点：可以利用方案数统计实现</span></span>
<span class="line"><span style="color:#e1e4e8;">			具体的：考虑拼接正向方案数和反向方案数</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	网络流24题 P2766 最长不下降子序列问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		要求最优的基础上选最多，看到很小的值域范围，可以直接建出DAG，那么问题就转化成了DAG最小路径覆盖</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">状态树：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义</span></span>
<span class="line"><span style="color:#e1e4e8;">	状态树是一种特殊的关系，适用于刻画如下这类问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定一个有限状态集合以及单目运算，任何一个状态在运算后会变成集合中的另一个状态（每个状态有一个后继）</span></span>
<span class="line"><span style="color:#e1e4e8;">	此时，将每个状态指向其会变成的状态，就成了内向基环树森林，即为状态树，称指向的状态为后继状态</span></span>
<span class="line"><span style="color:#e1e4e8;">	特殊的，此运算若有不动点，就一定是基环树的长度为1的自环（根部）</span></span>
<span class="line"><span style="color:#e1e4e8;">	特殊的，有时运算具有偏序关系，且某些状态没有后继状态，那就应该是内向树森林</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	经典例子</span></span>
<span class="line"><span style="color:#e1e4e8;">	给定数组a[1~n]，其值域在[1,n]之间，多组询问，每次问对于一个在[1,n]的整数x，其变换k次的结果。此处，变换指x=a[x]</span></span>
<span class="line"><span style="color:#e1e4e8;">	AT上有原题，忘了题号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	这里，状态就是当前的数，形成内向基环树，变换k次就是k级祖先，倍增求K级祖先</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	[NOIP2012 提高组] 开车旅行</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	这里，状态就是当前的位置，倍增求K级祖先</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	2024“钉耙编程”中国大学生算法设计超级联赛（10） J 题 Forced Online Query Master II </span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	这里，我们把变换看作一个数经过了一个序列的操作，然后找不动点</span></span>
<span class="line"><span style="color:#e1e4e8;">	但是状态集过大，没法用常规算法</span></span>
<span class="line"><span style="color:#e1e4e8;">	猜想答案唯一，树高不高，直接暴力跳</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	CF2007F Eri and Expanded Sets</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	这里状态就是整个集合，变换就是题目的变换，要分析不动点是否满足公差为1</span></span>
<span class="line"><span style="color:#e1e4e8;">	考虑不动点是什么样的，显然应该是公差为奇数的等差数列</span></span>
<span class="line"><span style="color:#e1e4e8;">	那再考虑公差和这些初始的数有什么关系</span></span>
<span class="line"><span style="color:#e1e4e8;">	先把初始的数排个序，显然数的相对位置更重要，所以可以把第一个数设成0</span></span>
<span class="line"><span style="color:#e1e4e8;">	操作就是插入两个数的平均数，而我们只关心差值，发现这其实就是将两个数的差不断除以2的结果和其他的数做一做差</span></span>
<span class="line"><span style="color:#e1e4e8;">	那这种加加减减的东西肯定结果就是gcd的倍数</span></span>
<span class="line"><span style="color:#e1e4e8;">	我们感觉一下，就是其差分的gcd，然后把2都除掉</span></span>
<span class="line"><span style="color:#e1e4e8;">	然后问题就变成了询问有多少个子段满足gcd==1||gcd==0</span></span>
<span class="line"><span style="color:#e1e4e8;">	不删除双指针/ST表 即可</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	总结</span></span>
<span class="line"><span style="color:#e1e4e8;">	这个模型的适用范围：</span></span>
<span class="line"><span style="color:#e1e4e8;">		只要有单元操作且是有限集合就可以</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		最常见的就是描述“走”的过程</span></span>
<span class="line"><span style="color:#e1e4e8;">	不动点：</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见表现：操作后不变/无法操作</span></span>
<span class="line"><span style="color:#e1e4e8;">		基环树退化成了树</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以利用不动点分析性质，进而得到整棵树的性质（终态分析法）</span></span>
<span class="line"><span style="color:#e1e4e8;">	集合很大：</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以只关注不动点/lca</span></span>
<span class="line"><span style="color:#e1e4e8;">		可能树高不高</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以用虚树</span></span>
<span class="line"><span style="color:#e1e4e8;">	进行k次操作（k级祖先）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		集合不大时可以用倍增</span></span>
<span class="line"><span style="color:#e1e4e8;">		否则，看一看能不能快速幂	</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">	solution:将x和y连边，答案就是2的(连通块的点数-1)次幂的乘积</span></span>
<span class="line"><span style="color:#e1e4e8;">一个神奇的事：</span></span>
<span class="line"><span style="color:#e1e4e8;">	问题：给定01数组，有若干操作(x,y)，每次可以给a[x]和a[y]异或1</span></span>
<span class="line"><span style="color:#e1e4e8;">	刻画：对于每个操作，将x和y连边</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		不妨假设a数组初始都是0，目标数组是b数组，建出图。</span></span>
<span class="line"><span style="color:#e1e4e8;">		不妨假设图中只有一个连通块</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质1：操作一次边不会改变数组的异或和</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：显然</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质2：b能被a得到当且仅当a的异或和等于b的异或和</span></span>
<span class="line"><span style="color:#e1e4e8;">			（特别注意这里的构造办法）</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:</span></span>
<span class="line"><span style="color:#e1e4e8;">			对于当前连通块，拿出任一个生成树，从底向上考虑：</span></span>
<span class="line"><span style="color:#e1e4e8;">				if(a[x]!=b[x]) 将x对应的父边操作</span></span>
<span class="line"><span style="color:#e1e4e8;">			对于根节点，其他的点已经到了b，而操作不改变数组的异或和，所以也到了b</span></span>
<span class="line"><span style="color:#e1e4e8;">			所以最终总是能调整成功</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质3：边的操作方案 和 得到的数组 一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:</span></span>
<span class="line"><span style="color:#e1e4e8;">			首先，每个数组都是可以被映射到的（满射）</span></span>
<span class="line"><span style="color:#e1e4e8;">			而对于两个不同的操作方案，我们取出在遍历生成树时第一个不同操作的边，</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么其下端点必然不同（单射）</span></span>
<span class="line"><span style="color:#e1e4e8;">			所以有双射</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质4：将取出的生成树的边当成向量，则这些向量线性无关</span></span>
<span class="line"><span style="color:#e1e4e8;">			其他的每条边对应的向量都可以被这些向量表示出来</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：由性质2,3显然</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		值得一提的是，这个东西也可以用线性基来理解，运用了经典结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">			能表示出的数的个数等于线性无关的数的个数的2的次幂</span></span>
<span class="line"><span style="color:#e1e4e8;">		需要注意的是，如果是一般的图，一定要对于每个连通块单独考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">			在处理一个块时，不要忘了其他的块</span></span>
<span class="line"><span style="color:#e1e4e8;">	一些应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		调节节点度数奇偶性：注意到初始所有点的度数都是0，然后就是板子</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定若干个数，每个数形如0000...011111..100000，给定了前缀0和中间1的个数，问这些数能异或出多少种数？</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution：首先将区间操作通过前缀和（差分）转成边操作，然后就是板子</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		当然，也可以把这个作为背景，出一些关于生成树的问题</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">图论基本知识：</span></span>
<span class="line"><span style="color:#24292e;">	无向图满足：所有点度数和=总边数*2</span></span>
<span class="line"><span style="color:#24292e;">	有向图满足：所有点入度和=所有点出度和</span></span>
<span class="line"><span style="color:#24292e;">	n个点、n-1条边的无向连通图是树</span></span>
<span class="line"><span style="color:#24292e;">		树森林满足：点数-边数=连通块数</span></span>
<span class="line"><span style="color:#24292e;">	n个点、n条边的无向图是基环树森林</span></span>
<span class="line"><span style="color:#24292e;">		满足所有点的度数都是2的无向图是若干环组成的图</span></span>
<span class="line"><span style="color:#24292e;">	二分图任何一个环都是偶环，且左右部点在环上交替出现</span></span>
<span class="line"><span style="color:#24292e;">		若是简单环，那么其经过的左右部点个数相同</span></span>
<span class="line"><span style="color:#24292e;">	每个点的出度都是1的有向图是内向基环树森林</span></span>
<span class="line"><span style="color:#24292e;">一维分析法：</span></span>
<span class="line"><span style="color:#24292e;">	常用来分析DP数组的变化</span></span>
<span class="line"><span style="color:#24292e;">	首先要对DP分一下阶段，然后考虑新的阶段怎么变</span></span>
<span class="line"><span style="color:#24292e;">	常见的性质：</span></span>
<span class="line"><span style="color:#24292e;">		单调性</span></span>
<span class="line"><span style="color:#24292e;">二维平面分析法</span></span>
<span class="line"><span style="color:#24292e;">	处理二维问题，将其形象化</span></span>
<span class="line"><span style="color:#24292e;">	经典的：</span></span>
<span class="line"><span style="color:#24292e;">		矩形问题：二维数点等，DS常用</span></span>
<span class="line"><span style="color:#24292e;">		格路计数，反射容斥</span></span>
<span class="line"><span style="color:#24292e;">		DP数组变化分析</span></span>
<span class="line"><span style="color:#24292e;">		刻画排列：棋盘放子</span></span>
<span class="line"><span style="color:#24292e;">笛卡尔树</span></span>
<span class="line"><span style="color:#24292e;">	分为二叉和多叉</span></span>
<span class="line"><span style="color:#24292e;">	二叉：</span></span>
<span class="line"><span style="color:#24292e;">		要求序列元素两两不同</span></span>
<span class="line"><span style="color:#24292e;">		如果有相同的，用不unique的离散化方法转成两两不同的</span></span>
<span class="line"><span style="color:#24292e;">		性质非常丰富，但一般做题比较鸡肋，可能比直接做更难做</span></span>
<span class="line"><span style="color:#24292e;">		性质：（以小根为例）</span></span>
<span class="line"><span style="color:#24292e;">			堆性质</span></span>
<span class="line"><span style="color:#24292e;">			二叉查找树性质</span></span>
<span class="line"><span style="color:#24292e;">			任意两点之间的最小值在两点的lca处</span></span>
<span class="line"><span style="color:#24292e;">				这启示我们在lca处处理跨过左右两个子树的询问</span></span>
<span class="line"><span style="color:#24292e;">			每个点能覆盖的范围就是自己的子树</span></span>
<span class="line"><span style="color:#24292e;">		为数不多的运用：</span></span>
<span class="line"><span style="color:#24292e;">			四毛子算法</span></span>
<span class="line"><span style="color:#24292e;">			有时可以多叉转二叉</span></span>
<span class="line"><span style="color:#24292e;">	多叉：</span></span>
<span class="line"><span style="color:#24292e;">		比较常用，可以将一般问题的分析转化到树上分析</span></span>
<span class="line"><span style="color:#24292e;">		对性质分析帮助很大</span></span>
<span class="line"><span style="color:#24292e;">		自己本身没什么性质</span></span>
<span class="line"><span style="color:#24292e;">刻画排列的常见办法：</span></span>
<span class="line"><span style="color:#24292e;">	排列环：</span></span>
<span class="line"><span style="color:#24292e;">		对于排列a，将i向a[i]连边，这会形成若干个环</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			该建模和原排列一一对应</span></span>
<span class="line"><span style="color:#24292e;">			假如每次可以交换两个数，那么还原该排列的必要操作次数是n-排列环个数</span></span>
<span class="line"><span style="color:#24292e;">	棋盘：</span></span>
<span class="line"><span style="color:#24292e;">		对于排列a，每一个(i,a[i])看作棋盘上的一个点，限制是两两点不在同一行或列</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			任何一个棋盘和排列一一对应</span></span>
<span class="line"><span style="color:#24292e;">			刻画大小关系非常方便</span></span>
<span class="line"><span style="color:#24292e;">		例题：CF1909F2</span></span>
<span class="line"><span style="color:#24292e;">欧拉路径：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		构造方案</span></span>
<span class="line"><span style="color:#24292e;">		常见的方案满足的限制：</span></span>
<span class="line"><span style="color:#24292e;">			“数量相等”</span></span>
<span class="line"><span style="color:#24292e;">			“数量相差最多1”</span></span>
<span class="line"><span style="color:#24292e;">			“划分成两个数量相差1的集合”</span></span>
<span class="line"><span style="color:#24292e;">			“满足至少m/2个条件”	</span></span>
<span class="line"><span style="color:#24292e;">	常见引理：</span></span>
<span class="line"><span style="color:#24292e;">		任何一张无向图所有节点度数和为偶数</span></span>
<span class="line"><span style="color:#24292e;">		（自环看作两条度）</span></span>
<span class="line"><span style="color:#24292e;">		所以，奇度点必然成对出现</span></span>
<span class="line"><span style="color:#24292e;">	欧拉路径存在的条件：</span></span>
<span class="line"><span style="color:#24292e;">		有向图：</span></span>
<span class="line"><span style="color:#24292e;">			变成无向图后连通</span></span>
<span class="line"><span style="color:#24292e;">			两个点不满足入度数等于出度数，或都满足</span></span>
<span class="line"><span style="color:#24292e;">		无向图：</span></span>
<span class="line"><span style="color:#24292e;">			连通</span></span>
<span class="line"><span style="color:#24292e;">			最多两个点度数为奇数，或都为偶数</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		总的来说：连通性，奇偶性</span></span>
<span class="line"><span style="color:#24292e;">	常见trick：</span></span>
<span class="line"><span style="color:#24292e;">		有起终点和无起终点可以互相转化：</span></span>
<span class="line"><span style="color:#24292e;">			有-&gt;无：将欧拉路径的起点和终点连一条边</span></span>
<span class="line"><span style="color:#24292e;">			无-&gt;有：删掉欧拉回路的一条边即可</span></span>
<span class="line"><span style="color:#24292e;">		无向图和有向图路径的转化：</span></span>
<span class="line"><span style="color:#24292e;">			无向图欧拉路径本质上是给每条边定向</span></span>
<span class="line"><span style="color:#24292e;">			将有向图变成无向图，那么已有路径就是一个解</span></span>
<span class="line"><span style="color:#24292e;">		无向图定向：</span></span>
<span class="line"><span style="color:#24292e;">			任何一张无向图都能存在一种定向成有向图的方法，使 出入度数量差&lt;=1</span></span>
<span class="line"><span style="color:#24292e;">			proof:</span></span>
<span class="line"><span style="color:#24292e;">				将奇度点两两连边，必然存在欧拉回路，根据路径方向定向即可</span></span>
<span class="line"><span style="color:#24292e;">		混合图欧拉回路：</span></span>
<span class="line"><span style="color:#24292e;">			无向图欧拉路径本质上是给每条边定向</span></span>
<span class="line"><span style="color:#24292e;">			我们已知已经定下的有向边，解个方程可以得到还需要的出入度数</span></span>
<span class="line"><span style="color:#24292e;">			设一个点的权值为入度数-出度数</span></span>
<span class="line"><span style="color:#24292e;">			一条无向边定向的影响等价于起点--，终点++</span></span>
<span class="line"><span style="color:#24292e;">			如果直接建网络流就没法保证每条无向边都定向，所以将点的权值先减掉无向边的数量再除以2</span></span>
<span class="line"><span style="color:#24292e;">			每次定向的影响就是给两个点之一的点权++，这样就好流了</span></span>
<span class="line"><span style="color:#24292e;">		边黑白染色：</span></span>
<span class="line"><span style="color:#24292e;">			实现：沿着欧拉路径交替黑白染色</span></span>
<span class="line"><span style="color:#24292e;">			性质：</span></span>
<span class="line"><span style="color:#24292e;">				可以将除了起终点以外的所有点的度划分成两个大小相同的集合</span></span>
<span class="line"><span style="color:#24292e;">				对于起终点，根据无向图边数分析其染色情况</span></span>
<span class="line"><span style="color:#24292e;">		调节无向图节点度数奇偶性的方法：</span></span>
<span class="line"><span style="color:#24292e;">			法一：将没选的边建成图，原来的奇度点两两配对，然后每次找一条连接两点的一条路径，上面的每一条边状态都取反</span></span>
<span class="line"><span style="color:#24292e;">			法二：将没选的边建成图，取一棵生成树，然后从底向上处理</span></span>
<span class="line"><span style="color:#24292e;">	例题：</span></span>
<span class="line"><span style="color:#24292e;">		CF547D Mike and Fish：套路的将行列看成点，将平面上的点看作无向边，染色就是定向，先调整奇偶性，然后跑完删掉额外边即可</span></span>
<span class="line"><span style="color:#24292e;">		P6628 丁香之路：传奇题目。先补连通性，再调整奇偶性，贪心智慧大集合</span></span>
<span class="line"><span style="color:#24292e;">		CF429E 据说很像，懒的做了</span></span>
<span class="line"><span style="color:#24292e;">		经典题：a序列经过多少次交换形成b序列</span></span>
<span class="line"><span style="color:#24292e;">		Gym 102893G：利用无向图定向的结论，可以暴力枚举入边的所有可能</span></span>
<span class="line"><span style="color:#24292e;">		COCI2021-2022 fliper</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">自动机（DFA）：</span></span>
<span class="line"><span style="color:#24292e;">	形象化定义：</span></span>
<span class="line"><span style="color:#24292e;">		一个DAG，每条边代表一个转移，有若干终止节点</span></span>
<span class="line"><span style="color:#24292e;">		一条能到终止节点的路径对应一种合法方案</span></span>
<span class="line"><span style="color:#24292e;">	作用：</span></span>
<span class="line"><span style="color:#24292e;">		设计出复杂度可以接受的自动机，可以方便地去掉一些条件</span></span>
<span class="line"><span style="color:#24292e;">		从而让问题转化成DAG上的问题</span></span>
<span class="line"><span style="color:#24292e;">	常见自动机：</span></span>
<span class="line"><span style="color:#24292e;">		kmp，AC自动机</span></span>
<span class="line"><span style="color:#24292e;">		SAM</span></span>
<span class="line"><span style="color:#24292e;">		DP转移DAG，最短路径DAG，DP套DP</span></span>
<span class="line"><span style="color:#24292e;">	基本性质：从任何一个入度为0的点走到一个出度为0的点，都是一种合法方案</span></span>
<span class="line"><span style="color:#24292e;">	应用：</span></span>
<span class="line"><span style="color:#24292e;">		正反向转化：可以实现解的拼接或用于终状态更好求的情况</span></span>
<span class="line"><span style="color:#24292e;">			特别的：在转移相同的情况下，要分别求多个起始状态对应的终状态的DP值，可以反向DP</span></span>
<span class="line"><span style="color:#24292e;">		合法解的必经点和可行点：可以利用方案数统计实现</span></span>
<span class="line"><span style="color:#24292e;">			具体的：考虑拼接正向方案数和反向方案数</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">	网络流24题 P2766 最长不下降子序列问题：</span></span>
<span class="line"><span style="color:#24292e;">		要求最优的基础上选最多，看到很小的值域范围，可以直接建出DAG，那么问题就转化成了DAG最小路径覆盖</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">状态树：</span></span>
<span class="line"><span style="color:#24292e;">	定义</span></span>
<span class="line"><span style="color:#24292e;">	状态树是一种特殊的关系，适用于刻画如下这类问题：</span></span>
<span class="line"><span style="color:#24292e;">		给定一个有限状态集合以及单目运算，任何一个状态在运算后会变成集合中的另一个状态（每个状态有一个后继）</span></span>
<span class="line"><span style="color:#24292e;">	此时，将每个状态指向其会变成的状态，就成了内向基环树森林，即为状态树，称指向的状态为后继状态</span></span>
<span class="line"><span style="color:#24292e;">	特殊的，此运算若有不动点，就一定是基环树的长度为1的自环（根部）</span></span>
<span class="line"><span style="color:#24292e;">	特殊的，有时运算具有偏序关系，且某些状态没有后继状态，那就应该是内向树森林</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	经典例子</span></span>
<span class="line"><span style="color:#24292e;">	给定数组a[1~n]，其值域在[1,n]之间，多组询问，每次问对于一个在[1,n]的整数x，其变换k次的结果。此处，变换指x=a[x]</span></span>
<span class="line"><span style="color:#24292e;">	AT上有原题，忘了题号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	这里，状态就是当前的数，形成内向基环树，变换k次就是k级祖先，倍增求K级祖先</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	[NOIP2012 提高组] 开车旅行</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	这里，状态就是当前的位置，倍增求K级祖先</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	2024“钉耙编程”中国大学生算法设计超级联赛（10） J 题 Forced Online Query Master II </span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	这里，我们把变换看作一个数经过了一个序列的操作，然后找不动点</span></span>
<span class="line"><span style="color:#24292e;">	但是状态集过大，没法用常规算法</span></span>
<span class="line"><span style="color:#24292e;">	猜想答案唯一，树高不高，直接暴力跳</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	CF2007F Eri and Expanded Sets</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	这里状态就是整个集合，变换就是题目的变换，要分析不动点是否满足公差为1</span></span>
<span class="line"><span style="color:#24292e;">	考虑不动点是什么样的，显然应该是公差为奇数的等差数列</span></span>
<span class="line"><span style="color:#24292e;">	那再考虑公差和这些初始的数有什么关系</span></span>
<span class="line"><span style="color:#24292e;">	先把初始的数排个序，显然数的相对位置更重要，所以可以把第一个数设成0</span></span>
<span class="line"><span style="color:#24292e;">	操作就是插入两个数的平均数，而我们只关心差值，发现这其实就是将两个数的差不断除以2的结果和其他的数做一做差</span></span>
<span class="line"><span style="color:#24292e;">	那这种加加减减的东西肯定结果就是gcd的倍数</span></span>
<span class="line"><span style="color:#24292e;">	我们感觉一下，就是其差分的gcd，然后把2都除掉</span></span>
<span class="line"><span style="color:#24292e;">	然后问题就变成了询问有多少个子段满足gcd==1||gcd==0</span></span>
<span class="line"><span style="color:#24292e;">	不删除双指针/ST表 即可</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	总结</span></span>
<span class="line"><span style="color:#24292e;">	这个模型的适用范围：</span></span>
<span class="line"><span style="color:#24292e;">		只要有单元操作且是有限集合就可以</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		最常见的就是描述“走”的过程</span></span>
<span class="line"><span style="color:#24292e;">	不动点：</span></span>
<span class="line"><span style="color:#24292e;">		常见表现：操作后不变/无法操作</span></span>
<span class="line"><span style="color:#24292e;">		基环树退化成了树</span></span>
<span class="line"><span style="color:#24292e;">		可以利用不动点分析性质，进而得到整棵树的性质（终态分析法）</span></span>
<span class="line"><span style="color:#24292e;">	集合很大：</span></span>
<span class="line"><span style="color:#24292e;">		可以只关注不动点/lca</span></span>
<span class="line"><span style="color:#24292e;">		可能树高不高</span></span>
<span class="line"><span style="color:#24292e;">		可以用虚树</span></span>
<span class="line"><span style="color:#24292e;">	进行k次操作（k级祖先）：</span></span>
<span class="line"><span style="color:#24292e;">		集合不大时可以用倍增</span></span>
<span class="line"><span style="color:#24292e;">		否则，看一看能不能快速幂	</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">	solution:将x和y连边，答案就是2的(连通块的点数-1)次幂的乘积</span></span>
<span class="line"><span style="color:#24292e;">一个神奇的事：</span></span>
<span class="line"><span style="color:#24292e;">	问题：给定01数组，有若干操作(x,y)，每次可以给a[x]和a[y]异或1</span></span>
<span class="line"><span style="color:#24292e;">	刻画：对于每个操作，将x和y连边</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		不妨假设a数组初始都是0，目标数组是b数组，建出图。</span></span>
<span class="line"><span style="color:#24292e;">		不妨假设图中只有一个连通块</span></span>
<span class="line"><span style="color:#24292e;">		性质1：操作一次边不会改变数组的异或和</span></span>
<span class="line"><span style="color:#24292e;">		proof：显然</span></span>
<span class="line"><span style="color:#24292e;">		性质2：b能被a得到当且仅当a的异或和等于b的异或和</span></span>
<span class="line"><span style="color:#24292e;">			（特别注意这里的构造办法）</span></span>
<span class="line"><span style="color:#24292e;">		proof:</span></span>
<span class="line"><span style="color:#24292e;">			对于当前连通块，拿出任一个生成树，从底向上考虑：</span></span>
<span class="line"><span style="color:#24292e;">				if(a[x]!=b[x]) 将x对应的父边操作</span></span>
<span class="line"><span style="color:#24292e;">			对于根节点，其他的点已经到了b，而操作不改变数组的异或和，所以也到了b</span></span>
<span class="line"><span style="color:#24292e;">			所以最终总是能调整成功</span></span>
<span class="line"><span style="color:#24292e;">		性质3：边的操作方案 和 得到的数组 一一对应</span></span>
<span class="line"><span style="color:#24292e;">		proof:</span></span>
<span class="line"><span style="color:#24292e;">			首先，每个数组都是可以被映射到的（满射）</span></span>
<span class="line"><span style="color:#24292e;">			而对于两个不同的操作方案，我们取出在遍历生成树时第一个不同操作的边，</span></span>
<span class="line"><span style="color:#24292e;">			那么其下端点必然不同（单射）</span></span>
<span class="line"><span style="color:#24292e;">			所以有双射</span></span>
<span class="line"><span style="color:#24292e;">		性质4：将取出的生成树的边当成向量，则这些向量线性无关</span></span>
<span class="line"><span style="color:#24292e;">			其他的每条边对应的向量都可以被这些向量表示出来</span></span>
<span class="line"><span style="color:#24292e;">		proof：由性质2,3显然</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		值得一提的是，这个东西也可以用线性基来理解，运用了经典结论：</span></span>
<span class="line"><span style="color:#24292e;">			能表示出的数的个数等于线性无关的数的个数的2的次幂</span></span>
<span class="line"><span style="color:#24292e;">		需要注意的是，如果是一般的图，一定要对于每个连通块单独考虑</span></span>
<span class="line"><span style="color:#24292e;">			在处理一个块时，不要忘了其他的块</span></span>
<span class="line"><span style="color:#24292e;">	一些应用：</span></span>
<span class="line"><span style="color:#24292e;">		调节节点度数奇偶性：注意到初始所有点的度数都是0，然后就是板子</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		给定若干个数，每个数形如0000...011111..100000，给定了前缀0和中间1的个数，问这些数能异或出多少种数？</span></span>
<span class="line"><span style="color:#24292e;">		solution：首先将区间操作通过前缀和（差分）转成边操作，然后就是板子</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		当然，也可以把这个作为背景，出一些关于生成树的问题</span></span></code></pre></div>`,2),t=[l];function o(c,i,r,y,d,D){return n(),a("div",null,t)}const x=s(p,[["render",o]]);export{P as __pageData,x as default};
