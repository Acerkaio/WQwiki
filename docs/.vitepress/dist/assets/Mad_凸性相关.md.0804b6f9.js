import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"凸性相关","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/凸性相关.md","filePath":"Mad/凸性相关.md","lastUpdated":1738666900000}'),p={name:"Mad/凸性相关.md"},l=e(`<h1 id="凸性相关" tabindex="-1">凸性相关 <a class="header-anchor" href="#凸性相关" aria-label="Permalink to &quot;凸性相关&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">	凸包：平面上包含所有点的最小多边形</span></span>
<span class="line"><span style="color:#e1e4e8;">	上凸壳、下凸壳：凸包的上下两部分</span></span>
<span class="line"><span style="color:#e1e4e8;">	离散函数的凸性：函数图像是个凸壳</span></span>
<span class="line"><span style="color:#e1e4e8;">凸包性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	上下凸壳的边具有斜率单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">	任意两点的连线上的所有点都不在凸包外</span></span>
<span class="line"><span style="color:#e1e4e8;">	任意一条经过某个点、斜率固定的直线要斜率最大（小），其必经过凸包上的点</span></span>
<span class="line"><span style="color:#e1e4e8;">		进一步的，其斜率必然在其邻边范围内（针对凸壳而言）</span></span>
<span class="line"><span style="color:#e1e4e8;">函数凸性性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于满足四边形不等式的序列划分问题，其答案关于段数必然有凸性</span></span>
<span class="line"><span style="color:#e1e4e8;">	凸性函数做前缀max/min仍然有凸性</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如，若恰好有凸性，那么至少一定有凸性，但反之并不一定（虽然没见过实际反例）</span></span>
<span class="line"><span style="color:#e1e4e8;">	费用流中最小费用关于流量有凸性</span></span>
<span class="line"><span style="color:#e1e4e8;">		若要钦定某物必选，那么就将其费用设成-inf即可，亦可证明凸性</span></span>
<span class="line"><span style="color:#e1e4e8;">联想点：</span></span>
<span class="line"><span style="color:#e1e4e8;">	当题目出现了比值、乘积（实数意义上）等形式时，就要联想到凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">	通常可以解决一些非常特殊的最优化问题</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">建立凸包：</span></span>
<span class="line"><span style="color:#e1e4e8;">	下面考虑建立凸壳</span></span>
<span class="line"><span style="color:#e1e4e8;">	线性扫描法（离线做法）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将点按照横坐标排序，然后增量法构造凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">		假设现在已经构造好i-1的凸包，加入点i，考虑凸包形态变化</span></span>
<span class="line"><span style="color:#e1e4e8;">		根据凸包定义，我们将末尾的、凹进去的点删掉，容易得到剩下的还是凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">	插入法（在线凸包）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次插入一个点，就找到其横坐标被凸包的哪条边跨过</span></span>
<span class="line"><span style="color:#e1e4e8;">		加入当前点不优，那直接结束</span></span>
<span class="line"><span style="color:#e1e4e8;">		否则，将左右两边凹进去的点删掉</span></span>
<span class="line"><span style="color:#e1e4e8;">		正确性类似上述做法</span></span>
<span class="line"><span style="color:#e1e4e8;">旋转卡壳：</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见用途：求解平面最远点对</span></span>
<span class="line"><span style="color:#e1e4e8;">	引理：任何一个点的最远点一定在凸包上</span></span>
<span class="line"><span style="color:#e1e4e8;">	流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">		基于凸包的边的单调性，我们顺时针枚举边，然后考虑其对应的最远点</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然，最远点也是顺时针转动的</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次更新边两端点和最远点作为答案</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然，任何一个不劣解都被考虑到了</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">闵科夫斯基和：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义：任意两个图形内的点加起来组成的新图形</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本结论：两个凸包的闵可夫斯基和还是一个凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见用途：凸包合并，{max,+}卷积</span></span>
<span class="line"><span style="color:#e1e4e8;">	下面主要考虑凸壳的合并</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">		每次将两个凸壳的边拿出来，根据斜率贪心，做归并排序即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		新凸壳的起始点是原凸壳起始点之和</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	感性理解：</span></span>
<span class="line"><span style="color:#e1e4e8;">		因为为了让凸包尽可能大，才能把所有能产生的点都包括进来</span></span>
<span class="line"><span style="color:#e1e4e8;">	对{max,+}卷积的理解：</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以将两个多项式看成两个点集</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于一个固定的横坐标，其卷积就是所有满足横坐标和等于该坐标的点的纵坐标和的max</span></span>
<span class="line"><span style="color:#e1e4e8;">		这恰好就是闵可夫斯基和的定义</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wqs二分：</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见用途：给定x，求解凸函数f的某个f(x)的值</span></span>
<span class="line"><span style="color:#e1e4e8;">	流程：</span></span>
<span class="line"><span style="color:#e1e4e8;">		二分斜率k，考虑斜率为k的直线的切点的横坐标</span></span>
<span class="line"><span style="color:#e1e4e8;">		根据凸性，横坐标关于k有单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么核心在于求切点，就是求f(x)-k*x最大的点的横坐标x</span></span>
<span class="line"><span style="color:#e1e4e8;">	细节：</span></span>
<span class="line"><span style="color:#e1e4e8;">		二分的值域：</span></span>
<span class="line"><span style="color:#e1e4e8;">			需要分析凸壳上的边的斜率的值域范围</span></span>
<span class="line"><span style="color:#e1e4e8;">			通常只要考虑凸壳上第一条边和最后一条边即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		二分的是整数还是实数？</span></span>
<span class="line"><span style="color:#e1e4e8;">			首先，如果是离散凸函数，那么每一条边的斜率都是整数</span></span>
<span class="line"><span style="color:#e1e4e8;">			但是，注意到会有共线的点，所以可能有问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			这里不建议二分实数，还是应二分整数</span></span>
<span class="line"><span style="color:#e1e4e8;">			为了处理共线的情况，应当钦定x最大或最小，从而可以二分判定</span></span>
<span class="line"><span style="color:#e1e4e8;">		构造解：</span></span>
<span class="line"><span style="color:#e1e4e8;">			朴素的wqs二分可以容易地得到f(x)，但是求解会受到共线的影响</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			待填，暂时不太会，网上也没有非常正确的</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">wqs二分和闵可夫斯基和的联系：</span></span>
<span class="line"><span style="color:#e1e4e8;">	对于一个确定斜率的直线，两个凸壳的切点对应的截距和 恰等于</span></span>
<span class="line"><span style="color:#e1e4e8;">		两个凸壳做闵可夫斯基和之后的凸壳的切点的截距</span></span>
<span class="line"><span style="color:#e1e4e8;">	这启示我们，wqs二分和闵可夫斯基和是有具体联系的</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	这主要是因为具有凸性的问题通常都可以被划分成若干子问题，最后合并子问题的解</span></span>
<span class="line"><span style="color:#e1e4e8;">	而如果用闵可夫斯基和就是在维护所有情况的解（凸壳），而wqs二分是维护一个特解（点）</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	有时，我们可以预处理出闵可夫斯基和的结果，再结合wqs二分解决一些多次询问问题</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">斜率优化：</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心：</span></span>
<span class="line"><span style="color:#e1e4e8;">		分析凸包形态，考虑最优点怎么取</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			dp式应该形如dp[i]=max(dp[j]+A+B*i*j)</span></span>
<span class="line"><span style="color:#e1e4e8;">			而注意到经过点(x,y)的斜率为k的直线的截距是y-kx</span></span>
<span class="line"><span style="color:#e1e4e8;">			所以钦定每个点形如(j,dp[j]+A)</span></span>
<span class="line"><span style="color:#e1e4e8;">			我们要找斜率为-B的经过某个点的直线的最大截距</span></span>
<span class="line"><span style="color:#e1e4e8;">			因此必然保留的是个上凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见算法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		一般来说，非在线转移就算是离线问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		在线转移需要同时维护插入直线和查询最优点</span></span>
<span class="line"><span style="color:#e1e4e8;">		建立凸包：</span></span>
<span class="line"><span style="color:#e1e4e8;">			在线且横坐标没有单调性：李超线段树</span></span>
<span class="line"><span style="color:#e1e4e8;">			否则：直接线性建凸包</span></span>
<span class="line"><span style="color:#e1e4e8;">		找最优点：</span></span>
<span class="line"><span style="color:#e1e4e8;">			在线且查询斜率没有单调性：二分凸包或李超线段树上直接查</span></span>
<span class="line"><span style="color:#e1e4e8;">			否则：指针直接扫</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">[ABC356G] Freestyle ：</span></span>
<span class="line"><span style="color:#e1e4e8;">	判定可行性是简单的，重点在处理最优性</span></span>
<span class="line"><span style="color:#e1e4e8;">	贪心和DP都不太能冲，没什么突破口</span></span>
<span class="line"><span style="color:#e1e4e8;">	流也不太行</span></span>
<span class="line"><span style="color:#e1e4e8;">	我们假设只用了两种style，那么将式子列出来</span></span>
<span class="line"><span style="color:#e1e4e8;">	那个不超过C很蠢，在实数意义下，这很大概率可以取等</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以发现这就是向量的等和线</span></span>
<span class="line"><span style="color:#e1e4e8;">	那么我们就要让整体尽量取小，所以求凸包，在上面二分即可</span></span>
<span class="line"><span style="color:#e1e4e8;">[JOISC2022] 京都观光 ：</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接做不太可做</span></span>
<span class="line"><span style="color:#e1e4e8;">	将拐点的式子写一下，可以发现是凸包</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">定义：</span></span>
<span class="line"><span style="color:#24292e;">	凸包：平面上包含所有点的最小多边形</span></span>
<span class="line"><span style="color:#24292e;">	上凸壳、下凸壳：凸包的上下两部分</span></span>
<span class="line"><span style="color:#24292e;">	离散函数的凸性：函数图像是个凸壳</span></span>
<span class="line"><span style="color:#24292e;">凸包性质：</span></span>
<span class="line"><span style="color:#24292e;">	上下凸壳的边具有斜率单调性</span></span>
<span class="line"><span style="color:#24292e;">	任意两点的连线上的所有点都不在凸包外</span></span>
<span class="line"><span style="color:#24292e;">	任意一条经过某个点、斜率固定的直线要斜率最大（小），其必经过凸包上的点</span></span>
<span class="line"><span style="color:#24292e;">		进一步的，其斜率必然在其邻边范围内（针对凸壳而言）</span></span>
<span class="line"><span style="color:#24292e;">函数凸性性质：</span></span>
<span class="line"><span style="color:#24292e;">	对于满足四边形不等式的序列划分问题，其答案关于段数必然有凸性</span></span>
<span class="line"><span style="color:#24292e;">	凸性函数做前缀max/min仍然有凸性</span></span>
<span class="line"><span style="color:#24292e;">		例如，若恰好有凸性，那么至少一定有凸性，但反之并不一定（虽然没见过实际反例）</span></span>
<span class="line"><span style="color:#24292e;">	费用流中最小费用关于流量有凸性</span></span>
<span class="line"><span style="color:#24292e;">		若要钦定某物必选，那么就将其费用设成-inf即可，亦可证明凸性</span></span>
<span class="line"><span style="color:#24292e;">联想点：</span></span>
<span class="line"><span style="color:#24292e;">	当题目出现了比值、乘积（实数意义上）等形式时，就要联想到凸包</span></span>
<span class="line"><span style="color:#24292e;">	通常可以解决一些非常特殊的最优化问题</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">建立凸包：</span></span>
<span class="line"><span style="color:#24292e;">	下面考虑建立凸壳</span></span>
<span class="line"><span style="color:#24292e;">	线性扫描法（离线做法）：</span></span>
<span class="line"><span style="color:#24292e;">		将点按照横坐标排序，然后增量法构造凸包</span></span>
<span class="line"><span style="color:#24292e;">		假设现在已经构造好i-1的凸包，加入点i，考虑凸包形态变化</span></span>
<span class="line"><span style="color:#24292e;">		根据凸包定义，我们将末尾的、凹进去的点删掉，容易得到剩下的还是凸包</span></span>
<span class="line"><span style="color:#24292e;">	插入法（在线凸包）：</span></span>
<span class="line"><span style="color:#24292e;">		每次插入一个点，就找到其横坐标被凸包的哪条边跨过</span></span>
<span class="line"><span style="color:#24292e;">		加入当前点不优，那直接结束</span></span>
<span class="line"><span style="color:#24292e;">		否则，将左右两边凹进去的点删掉</span></span>
<span class="line"><span style="color:#24292e;">		正确性类似上述做法</span></span>
<span class="line"><span style="color:#24292e;">旋转卡壳：</span></span>
<span class="line"><span style="color:#24292e;">	常见用途：求解平面最远点对</span></span>
<span class="line"><span style="color:#24292e;">	引理：任何一个点的最远点一定在凸包上</span></span>
<span class="line"><span style="color:#24292e;">	流程：</span></span>
<span class="line"><span style="color:#24292e;">		基于凸包的边的单调性，我们顺时针枚举边，然后考虑其对应的最远点</span></span>
<span class="line"><span style="color:#24292e;">		显然，最远点也是顺时针转动的</span></span>
<span class="line"><span style="color:#24292e;">		每次更新边两端点和最远点作为答案</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		显然，任何一个不劣解都被考虑到了</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">闵科夫斯基和：</span></span>
<span class="line"><span style="color:#24292e;">	定义：任意两个图形内的点加起来组成的新图形</span></span>
<span class="line"><span style="color:#24292e;">	基本结论：两个凸包的闵可夫斯基和还是一个凸包</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	常见用途：凸包合并，{max,+}卷积</span></span>
<span class="line"><span style="color:#24292e;">	下面主要考虑凸壳的合并</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	流程：</span></span>
<span class="line"><span style="color:#24292e;">		每次将两个凸壳的边拿出来，根据斜率贪心，做归并排序即可</span></span>
<span class="line"><span style="color:#24292e;">		新凸壳的起始点是原凸壳起始点之和</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	感性理解：</span></span>
<span class="line"><span style="color:#24292e;">		因为为了让凸包尽可能大，才能把所有能产生的点都包括进来</span></span>
<span class="line"><span style="color:#24292e;">	对{max,+}卷积的理解：</span></span>
<span class="line"><span style="color:#24292e;">		可以将两个多项式看成两个点集</span></span>
<span class="line"><span style="color:#24292e;">		对于一个固定的横坐标，其卷积就是所有满足横坐标和等于该坐标的点的纵坐标和的max</span></span>
<span class="line"><span style="color:#24292e;">		这恰好就是闵可夫斯基和的定义</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wqs二分：</span></span>
<span class="line"><span style="color:#24292e;">	常见用途：给定x，求解凸函数f的某个f(x)的值</span></span>
<span class="line"><span style="color:#24292e;">	流程：</span></span>
<span class="line"><span style="color:#24292e;">		二分斜率k，考虑斜率为k的直线的切点的横坐标</span></span>
<span class="line"><span style="color:#24292e;">		根据凸性，横坐标关于k有单调性</span></span>
<span class="line"><span style="color:#24292e;">		那么核心在于求切点，就是求f(x)-k*x最大的点的横坐标x</span></span>
<span class="line"><span style="color:#24292e;">	细节：</span></span>
<span class="line"><span style="color:#24292e;">		二分的值域：</span></span>
<span class="line"><span style="color:#24292e;">			需要分析凸壳上的边的斜率的值域范围</span></span>
<span class="line"><span style="color:#24292e;">			通常只要考虑凸壳上第一条边和最后一条边即可</span></span>
<span class="line"><span style="color:#24292e;">		二分的是整数还是实数？</span></span>
<span class="line"><span style="color:#24292e;">			首先，如果是离散凸函数，那么每一条边的斜率都是整数</span></span>
<span class="line"><span style="color:#24292e;">			但是，注意到会有共线的点，所以可能有问题</span></span>
<span class="line"><span style="color:#24292e;">			这里不建议二分实数，还是应二分整数</span></span>
<span class="line"><span style="color:#24292e;">			为了处理共线的情况，应当钦定x最大或最小，从而可以二分判定</span></span>
<span class="line"><span style="color:#24292e;">		构造解：</span></span>
<span class="line"><span style="color:#24292e;">			朴素的wqs二分可以容易地得到f(x)，但是求解会受到共线的影响</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			待填，暂时不太会，网上也没有非常正确的</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">wqs二分和闵可夫斯基和的联系：</span></span>
<span class="line"><span style="color:#24292e;">	对于一个确定斜率的直线，两个凸壳的切点对应的截距和 恰等于</span></span>
<span class="line"><span style="color:#24292e;">		两个凸壳做闵可夫斯基和之后的凸壳的切点的截距</span></span>
<span class="line"><span style="color:#24292e;">	这启示我们，wqs二分和闵可夫斯基和是有具体联系的</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	这主要是因为具有凸性的问题通常都可以被划分成若干子问题，最后合并子问题的解</span></span>
<span class="line"><span style="color:#24292e;">	而如果用闵可夫斯基和就是在维护所有情况的解（凸壳），而wqs二分是维护一个特解（点）</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	有时，我们可以预处理出闵可夫斯基和的结果，再结合wqs二分解决一些多次询问问题</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">斜率优化：</span></span>
<span class="line"><span style="color:#24292e;">	核心：</span></span>
<span class="line"><span style="color:#24292e;">		分析凸包形态，考虑最优点怎么取</span></span>
<span class="line"><span style="color:#24292e;">		具体做法：</span></span>
<span class="line"><span style="color:#24292e;">			dp式应该形如dp[i]=max(dp[j]+A+B*i*j)</span></span>
<span class="line"><span style="color:#24292e;">			而注意到经过点(x,y)的斜率为k的直线的截距是y-kx</span></span>
<span class="line"><span style="color:#24292e;">			所以钦定每个点形如(j,dp[j]+A)</span></span>
<span class="line"><span style="color:#24292e;">			我们要找斜率为-B的经过某个点的直线的最大截距</span></span>
<span class="line"><span style="color:#24292e;">			因此必然保留的是个上凸包</span></span>
<span class="line"><span style="color:#24292e;">	常见算法：</span></span>
<span class="line"><span style="color:#24292e;">		一般来说，非在线转移就算是离线问题</span></span>
<span class="line"><span style="color:#24292e;">		在线转移需要同时维护插入直线和查询最优点</span></span>
<span class="line"><span style="color:#24292e;">		建立凸包：</span></span>
<span class="line"><span style="color:#24292e;">			在线且横坐标没有单调性：李超线段树</span></span>
<span class="line"><span style="color:#24292e;">			否则：直接线性建凸包</span></span>
<span class="line"><span style="color:#24292e;">		找最优点：</span></span>
<span class="line"><span style="color:#24292e;">			在线且查询斜率没有单调性：二分凸包或李超线段树上直接查</span></span>
<span class="line"><span style="color:#24292e;">			否则：指针直接扫</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">[ABC356G] Freestyle ：</span></span>
<span class="line"><span style="color:#24292e;">	判定可行性是简单的，重点在处理最优性</span></span>
<span class="line"><span style="color:#24292e;">	贪心和DP都不太能冲，没什么突破口</span></span>
<span class="line"><span style="color:#24292e;">	流也不太行</span></span>
<span class="line"><span style="color:#24292e;">	我们假设只用了两种style，那么将式子列出来</span></span>
<span class="line"><span style="color:#24292e;">	那个不超过C很蠢，在实数意义下，这很大概率可以取等</span></span>
<span class="line"><span style="color:#24292e;">	可以发现这就是向量的等和线</span></span>
<span class="line"><span style="color:#24292e;">	那么我们就要让整体尽量取小，所以求凸包，在上面二分即可</span></span>
<span class="line"><span style="color:#24292e;">[JOISC2022] 京都观光 ：</span></span>
<span class="line"><span style="color:#24292e;">	直接做不太可做</span></span>
<span class="line"><span style="color:#24292e;">	将拐点的式子写一下，可以发现是凸包</span></span></code></pre></div>`,2),t=[l];function o(c,i,r,y,d,x){return n(),a("div",null,t)}const f=s(p,[["render",o]]);export{m as __pageData,f as default};
