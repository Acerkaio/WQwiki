import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const _=JSON.parse('{"title":"一些DP相关","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/DP/一些DP相关.md","filePath":"Mad/DP/一些DP相关.md","lastUpdated":1738666900000}'),p={name:"Mad/DP/一些DP相关.md"},l=e(`<h1 id="一些dp相关" tabindex="-1">一些DP相关 <a class="header-anchor" href="#一些dp相关" aria-label="Permalink to &quot;一些DP相关&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">换根DP：</span></span>
<span class="line"><span style="color:#e1e4e8;">	计数DP：直接容斥法</span></span>
<span class="line"><span style="color:#e1e4e8;">	最值DP：维护最大次大值法，前后缀合并法</span></span>
<span class="line"><span style="color:#e1e4e8;">树上连通块DP：</span></span>
<span class="line"><span style="color:#e1e4e8;">		法一：直接DP，在过程中钦定当前点为最浅点</span></span>
<span class="line"><span style="color:#e1e4e8;">		法二：基于DP插入复杂度小于合并复杂度：类似shopping的做法</span></span>
<span class="line"><span style="color:#e1e4e8;">		例题：shopping</span></span>
<span class="line"><span style="color:#e1e4e8;">划分型DP：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理问题：将一个序列分成两个子序列（染两种颜色），然后要满足某些限制</span></span>
<span class="line"><span style="color:#e1e4e8;">	DP式通常形如：</span></span>
<span class="line"><span style="color:#e1e4e8;">		dp[i][j] &lt;- dp[i-1][j]</span></span>
<span class="line"><span style="color:#e1e4e8;">		dp[i][i-1] &lt;- dp[i-1][j]</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意：应熟知此类DP是很好优化的</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	CF1849F</span></span>
<span class="line"><span style="color:#e1e4e8;">	P11233</span></span>
<span class="line"><span style="color:#e1e4e8;">	CF1647F</span></span>
<span class="line"><span style="color:#e1e4e8;">min(f(l,i),f(i,r))的处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先，f应该有不严格单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">	然后常见的，有两种处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		双指针：钦定左边大于右边，然后答案必然只从两分界点中取</span></span>
<span class="line"><span style="color:#e1e4e8;">		二分：</span></span>
<span class="line"><span style="color:#e1e4e8;">			根据左边和右边的大小做二分</span></span>
<span class="line"><span style="color:#e1e4e8;">			当左右相等时必然最优（剪枝）</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以用不常用写法</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：太多了，懒得找</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">处理DP的二维价值：</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		把一维价值也设入状态中，转换成背包问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见剪枝：</span></span>
<span class="line"><span style="color:#e1e4e8;">		只存下有值的状态，在转移完做一下单调性剪枝</span></span>
<span class="line"><span style="color:#e1e4e8;">			相关研究：</span></span>
<span class="line"><span style="color:#e1e4e8;">				其不能直接降低复杂度（基本量级不变）</span></span>
<span class="line"><span style="color:#e1e4e8;">				但是，转移次数越多，转移越复杂，可以除以的常数越大</span></span>
<span class="line"><span style="color:#e1e4e8;">				其算法瓶颈通常在枚举状态进行转移，以及后续的剪枝（考虑算法时间时主要考虑这一点）</span></span>
<span class="line"><span style="color:#e1e4e8;">	特别的优化办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		分析DP性质，去掉一维价值</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接贪心，考虑怎么选</span></span>
<span class="line"><span style="color:#e1e4e8;">		换做法</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	AGC035D</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">P9051：</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先二分转判定</span></span>
<span class="line"><span style="color:#e1e4e8;">	朴素的DP有两维价值，但注意到DP的第一维价值后面都不会用到</span></span>
<span class="line"><span style="color:#e1e4e8;">	那么，我们可以直接在求出第一维价值时就判定是否大于mid</span></span>
<span class="line"><span style="color:#e1e4e8;">	这样只用保留一维价值</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">值域定义域互换：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用范围：最优化DP状态的优化，DP值有单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意点：</span></span>
<span class="line"><span style="color:#e1e4e8;">		在互换后，一般状态都不能设“恰好”</span></span>
<span class="line"><span style="color:#e1e4e8;">		保证得到的DP值是当前答案等于或劣于状态中的答案</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">LIS：</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以直接设dpi表示LIS长度为i的最小的结尾值，dp初始为inf</span></span>
<span class="line"><span style="color:#e1e4e8;">	然后每次扫进新数x，就在dp数组里找到&gt;=x的第一个位置，chkmi(dp,x)即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以发现，某种程度上这避免了离散化</span></span>
<span class="line"><span style="color:#e1e4e8;">	practice: [ABC360G] Suitable Edit for LIS </span></span>
<span class="line"><span style="color:#e1e4e8;">ABC364E  Maximum Glutton</span></span>
<span class="line"><span style="color:#e1e4e8;">	观察到N很小，但是对于搜索剪枝来说又不够小（一般应该是30~40,40~50可能是折半）</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接做，显然是二维的背包，但是状态太大了，显得很冗余</span></span>
<span class="line"><span style="color:#e1e4e8;">	因为此题是经典DP题（显然不能贪心），所以仍考虑优化DP</span></span>
<span class="line"><span style="color:#e1e4e8;">	观察到值域其实只有N的，而且有单调性，所以值域定义域互换即可</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1D/1D：</span></span>
<span class="line"><span style="color:#e1e4e8;">自己规定了在线转移和非在线转移两个概念</span></span>
<span class="line"><span style="color:#e1e4e8;">简化DP转移：</span></span>
<span class="line"><span style="color:#e1e4e8;">	给DP分层，或给DP的转移分类</span></span>
<span class="line"><span style="color:#e1e4e8;">	从而转化成1D/1D问题</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">决策单调性：</span></span>
<span class="line"><span style="color:#e1e4e8;">	适用场景：没有其他思路，只有一个DP，而且没法用其他优化</span></span>
<span class="line"><span style="color:#e1e4e8;">	验证方法：暴力跑随机数据看决策点是否单调</span></span>
<span class="line"><span style="color:#e1e4e8;">	实现方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		决策栈+二分：处理在线转移</span></span>
<span class="line"><span style="color:#e1e4e8;">		分治：处理非在线转移</span></span>
<span class="line"><span style="color:#e1e4e8;">	PS：</span></span>
<span class="line"><span style="color:#e1e4e8;">		有的斜率优化可能表现出了决策单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">		有的决策单调性是因为有凸性，此时也可以用下述的优化</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">凸性相关：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">前置知识：</span></span>
<span class="line"><span style="color:#e1e4e8;">	如何发现DP的凸性：</span></span>
<span class="line"><span style="color:#e1e4e8;">		满足四边形不等式的序列划分问题的答案（一定是）</span></span>
<span class="line"><span style="color:#e1e4e8;">		转移每次加上一个凸函数（较有可能是）</span></span>
<span class="line"><span style="color:#e1e4e8;">		直观理解很凸（较可能是）</span></span>
<span class="line"><span style="color:#e1e4e8;">		费用流建模（一定是）</span></span>
<span class="line"><span style="color:#e1e4e8;">	其他验证方法：暴力跑随机数据验证</span></span>
<span class="line"><span style="color:#e1e4e8;">常见算法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	闵可夫斯基和： </span></span>
<span class="line"><span style="color:#e1e4e8;">		转移是(max,+)卷积</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体而言，要求DP是非在线转移</span></span>
<span class="line"><span style="color:#e1e4e8;">		经典的，其可以优化背包合并</span></span>
<span class="line"><span style="color:#e1e4e8;">	wqs二分：</span></span>
<span class="line"><span style="color:#e1e4e8;">		答案求“恰k个”</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以直接去掉表示选多少个的那一维（背包DP）</span></span>
<span class="line"><span style="color:#e1e4e8;">	slope trick：</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心：利用凸性动态维护DP数组</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理过程：</span></span>
<span class="line"><span style="color:#e1e4e8;">			1.将DP数组转换成单调的，方便维护</span></span>
<span class="line"><span style="color:#e1e4e8;">				（差分数组单调且均非负）</span></span>
<span class="line"><span style="color:#e1e4e8;">			2.使用DS维护对DP数组的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">				通常维护的是差分数组和其首项（或某一项）</span></span>
<span class="line"><span style="color:#e1e4e8;">				</span></span>
<span class="line"><span style="color:#e1e4e8;">一些要分析DP数组形态的题：</span></span>
<span class="line"><span style="color:#e1e4e8;">Sonya and Problem Wihtout a Legend：</span></span>
<span class="line"><span style="color:#e1e4e8;">solution1:</span></span>
<span class="line"><span style="color:#e1e4e8;">有暴力DP，没什么贪心的思路，可以继续优化DP</span></span>
<span class="line"><span style="color:#e1e4e8;">DP形如凸函数加起来，猜一个凸</span></span>
<span class="line"><span style="color:#e1e4e8;">确实，所以维护一下差分，注意修改时保证始终&gt;=0</span></span>
<span class="line"><span style="color:#e1e4e8;">最后要维护一个实际DP值才能用差分推出答案，随便取一个即可</span></span>
<span class="line"><span style="color:#e1e4e8;">solution2:</span></span>
<span class="line"><span style="color:#e1e4e8;">序列递增，直接差分，发现就是要让差分数组全变成&gt;0</span></span>
<span class="line"><span style="color:#e1e4e8;">操作每次会将差分的一个数++,下一个数--，或是相反</span></span>
<span class="line"><span style="color:#e1e4e8;">很流，可以费用流，竟然过了</span></span>
<span class="line"><span style="color:#e1e4e8;">P9051：</span></span>
<span class="line"><span style="color:#e1e4e8;">	经典凸性转移形式：网格图两种走法求最短路</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑直接维护差分数组及首项</span></span>
<span class="line"><span style="color:#e1e4e8;">		首项是好处理的</span></span>
<span class="line"><span style="color:#e1e4e8;">		差分数组每次直接插入一个数就可以了</span></span>
<span class="line"><span style="color:#e1e4e8;">	剩下的一些细节就特殊处理</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">换根DP：</span></span>
<span class="line"><span style="color:#24292e;">	计数DP：直接容斥法</span></span>
<span class="line"><span style="color:#24292e;">	最值DP：维护最大次大值法，前后缀合并法</span></span>
<span class="line"><span style="color:#24292e;">树上连通块DP：</span></span>
<span class="line"><span style="color:#24292e;">		法一：直接DP，在过程中钦定当前点为最浅点</span></span>
<span class="line"><span style="color:#24292e;">		法二：基于DP插入复杂度小于合并复杂度：类似shopping的做法</span></span>
<span class="line"><span style="color:#24292e;">		例题：shopping</span></span>
<span class="line"><span style="color:#24292e;">划分型DP：</span></span>
<span class="line"><span style="color:#24292e;">	处理问题：将一个序列分成两个子序列（染两种颜色），然后要满足某些限制</span></span>
<span class="line"><span style="color:#24292e;">	DP式通常形如：</span></span>
<span class="line"><span style="color:#24292e;">		dp[i][j] &lt;- dp[i-1][j]</span></span>
<span class="line"><span style="color:#24292e;">		dp[i][i-1] &lt;- dp[i-1][j]</span></span>
<span class="line"><span style="color:#24292e;">	注意：应熟知此类DP是很好优化的</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">	CF1849F</span></span>
<span class="line"><span style="color:#24292e;">	P11233</span></span>
<span class="line"><span style="color:#24292e;">	CF1647F</span></span>
<span class="line"><span style="color:#24292e;">min(f(l,i),f(i,r))的处理：</span></span>
<span class="line"><span style="color:#24292e;">	首先，f应该有不严格单调性</span></span>
<span class="line"><span style="color:#24292e;">	然后常见的，有两种处理办法：</span></span>
<span class="line"><span style="color:#24292e;">		双指针：钦定左边大于右边，然后答案必然只从两分界点中取</span></span>
<span class="line"><span style="color:#24292e;">		二分：</span></span>
<span class="line"><span style="color:#24292e;">			根据左边和右边的大小做二分</span></span>
<span class="line"><span style="color:#24292e;">			当左右相等时必然最优（剪枝）</span></span>
<span class="line"><span style="color:#24292e;">			可以用不常用写法</span></span>
<span class="line"><span style="color:#24292e;">例题：太多了，懒得找</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">处理DP的二维价值：</span></span>
<span class="line"><span style="color:#24292e;">	基本处理办法：</span></span>
<span class="line"><span style="color:#24292e;">		把一维价值也设入状态中，转换成背包问题</span></span>
<span class="line"><span style="color:#24292e;">	常见剪枝：</span></span>
<span class="line"><span style="color:#24292e;">		只存下有值的状态，在转移完做一下单调性剪枝</span></span>
<span class="line"><span style="color:#24292e;">			相关研究：</span></span>
<span class="line"><span style="color:#24292e;">				其不能直接降低复杂度（基本量级不变）</span></span>
<span class="line"><span style="color:#24292e;">				但是，转移次数越多，转移越复杂，可以除以的常数越大</span></span>
<span class="line"><span style="color:#24292e;">				其算法瓶颈通常在枚举状态进行转移，以及后续的剪枝（考虑算法时间时主要考虑这一点）</span></span>
<span class="line"><span style="color:#24292e;">	特别的优化办法：</span></span>
<span class="line"><span style="color:#24292e;">		分析DP性质，去掉一维价值</span></span>
<span class="line"><span style="color:#24292e;">		直接贪心，考虑怎么选</span></span>
<span class="line"><span style="color:#24292e;">		换做法</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">	AGC035D</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">P9051：</span></span>
<span class="line"><span style="color:#24292e;">	首先二分转判定</span></span>
<span class="line"><span style="color:#24292e;">	朴素的DP有两维价值，但注意到DP的第一维价值后面都不会用到</span></span>
<span class="line"><span style="color:#24292e;">	那么，我们可以直接在求出第一维价值时就判定是否大于mid</span></span>
<span class="line"><span style="color:#24292e;">	这样只用保留一维价值</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">值域定义域互换：</span></span>
<span class="line"><span style="color:#24292e;">	适用范围：最优化DP状态的优化，DP值有单调性</span></span>
<span class="line"><span style="color:#24292e;">	注意点：</span></span>
<span class="line"><span style="color:#24292e;">		在互换后，一般状态都不能设“恰好”</span></span>
<span class="line"><span style="color:#24292e;">		保证得到的DP值是当前答案等于或劣于状态中的答案</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">LIS：</span></span>
<span class="line"><span style="color:#24292e;">	可以直接设dpi表示LIS长度为i的最小的结尾值，dp初始为inf</span></span>
<span class="line"><span style="color:#24292e;">	然后每次扫进新数x，就在dp数组里找到&gt;=x的第一个位置，chkmi(dp,x)即可</span></span>
<span class="line"><span style="color:#24292e;">	可以发现，某种程度上这避免了离散化</span></span>
<span class="line"><span style="color:#24292e;">	practice: [ABC360G] Suitable Edit for LIS </span></span>
<span class="line"><span style="color:#24292e;">ABC364E  Maximum Glutton</span></span>
<span class="line"><span style="color:#24292e;">	观察到N很小，但是对于搜索剪枝来说又不够小（一般应该是30~40,40~50可能是折半）</span></span>
<span class="line"><span style="color:#24292e;">	直接做，显然是二维的背包，但是状态太大了，显得很冗余</span></span>
<span class="line"><span style="color:#24292e;">	因为此题是经典DP题（显然不能贪心），所以仍考虑优化DP</span></span>
<span class="line"><span style="color:#24292e;">	观察到值域其实只有N的，而且有单调性，所以值域定义域互换即可</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1D/1D：</span></span>
<span class="line"><span style="color:#24292e;">自己规定了在线转移和非在线转移两个概念</span></span>
<span class="line"><span style="color:#24292e;">简化DP转移：</span></span>
<span class="line"><span style="color:#24292e;">	给DP分层，或给DP的转移分类</span></span>
<span class="line"><span style="color:#24292e;">	从而转化成1D/1D问题</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">决策单调性：</span></span>
<span class="line"><span style="color:#24292e;">	适用场景：没有其他思路，只有一个DP，而且没法用其他优化</span></span>
<span class="line"><span style="color:#24292e;">	验证方法：暴力跑随机数据看决策点是否单调</span></span>
<span class="line"><span style="color:#24292e;">	实现方法：</span></span>
<span class="line"><span style="color:#24292e;">		决策栈+二分：处理在线转移</span></span>
<span class="line"><span style="color:#24292e;">		分治：处理非在线转移</span></span>
<span class="line"><span style="color:#24292e;">	PS：</span></span>
<span class="line"><span style="color:#24292e;">		有的斜率优化可能表现出了决策单调性</span></span>
<span class="line"><span style="color:#24292e;">		有的决策单调性是因为有凸性，此时也可以用下述的优化</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">凸性相关：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">前置知识：</span></span>
<span class="line"><span style="color:#24292e;">	如何发现DP的凸性：</span></span>
<span class="line"><span style="color:#24292e;">		满足四边形不等式的序列划分问题的答案（一定是）</span></span>
<span class="line"><span style="color:#24292e;">		转移每次加上一个凸函数（较有可能是）</span></span>
<span class="line"><span style="color:#24292e;">		直观理解很凸（较可能是）</span></span>
<span class="line"><span style="color:#24292e;">		费用流建模（一定是）</span></span>
<span class="line"><span style="color:#24292e;">	其他验证方法：暴力跑随机数据验证</span></span>
<span class="line"><span style="color:#24292e;">常见算法：</span></span>
<span class="line"><span style="color:#24292e;">	闵可夫斯基和： </span></span>
<span class="line"><span style="color:#24292e;">		转移是(max,+)卷积</span></span>
<span class="line"><span style="color:#24292e;">		具体而言，要求DP是非在线转移</span></span>
<span class="line"><span style="color:#24292e;">		经典的，其可以优化背包合并</span></span>
<span class="line"><span style="color:#24292e;">	wqs二分：</span></span>
<span class="line"><span style="color:#24292e;">		答案求“恰k个”</span></span>
<span class="line"><span style="color:#24292e;">		可以直接去掉表示选多少个的那一维（背包DP）</span></span>
<span class="line"><span style="color:#24292e;">	slope trick：</span></span>
<span class="line"><span style="color:#24292e;">		核心：利用凸性动态维护DP数组</span></span>
<span class="line"><span style="color:#24292e;">		处理过程：</span></span>
<span class="line"><span style="color:#24292e;">			1.将DP数组转换成单调的，方便维护</span></span>
<span class="line"><span style="color:#24292e;">				（差分数组单调且均非负）</span></span>
<span class="line"><span style="color:#24292e;">			2.使用DS维护对DP数组的操作</span></span>
<span class="line"><span style="color:#24292e;">				通常维护的是差分数组和其首项（或某一项）</span></span>
<span class="line"><span style="color:#24292e;">				</span></span>
<span class="line"><span style="color:#24292e;">一些要分析DP数组形态的题：</span></span>
<span class="line"><span style="color:#24292e;">Sonya and Problem Wihtout a Legend：</span></span>
<span class="line"><span style="color:#24292e;">solution1:</span></span>
<span class="line"><span style="color:#24292e;">有暴力DP，没什么贪心的思路，可以继续优化DP</span></span>
<span class="line"><span style="color:#24292e;">DP形如凸函数加起来，猜一个凸</span></span>
<span class="line"><span style="color:#24292e;">确实，所以维护一下差分，注意修改时保证始终&gt;=0</span></span>
<span class="line"><span style="color:#24292e;">最后要维护一个实际DP值才能用差分推出答案，随便取一个即可</span></span>
<span class="line"><span style="color:#24292e;">solution2:</span></span>
<span class="line"><span style="color:#24292e;">序列递增，直接差分，发现就是要让差分数组全变成&gt;0</span></span>
<span class="line"><span style="color:#24292e;">操作每次会将差分的一个数++,下一个数--，或是相反</span></span>
<span class="line"><span style="color:#24292e;">很流，可以费用流，竟然过了</span></span>
<span class="line"><span style="color:#24292e;">P9051：</span></span>
<span class="line"><span style="color:#24292e;">	经典凸性转移形式：网格图两种走法求最短路</span></span>
<span class="line"><span style="color:#24292e;">	处理：</span></span>
<span class="line"><span style="color:#24292e;">		考虑直接维护差分数组及首项</span></span>
<span class="line"><span style="color:#24292e;">		首项是好处理的</span></span>
<span class="line"><span style="color:#24292e;">		差分数组每次直接插入一个数就可以了</span></span>
<span class="line"><span style="color:#24292e;">	剩下的一些细节就特殊处理</span></span></code></pre></div>`,2),t=[l];function o(c,i,r,y,P,D){return n(),a("div",null,t)}const h=s(p,[["render",o]]);export{_ as __pageData,h as default};
