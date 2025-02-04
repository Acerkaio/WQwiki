import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const P=JSON.parse('{"title":"背包与背包型DP","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/DP/背包与背包型DP.md","filePath":"Mad/DP/背包与背包型DP.md","lastUpdated":1738666900000}'),l={name:"Mad/DP/背包与背包型DP.md"},p=e(`<h1 id="背包与背包型dp" tabindex="-1">背包与背包型DP <a class="header-anchor" href="#背包与背包型dp" aria-label="Permalink to &quot;背包与背包型DP&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">	狭义的背包问题是常见的选物品</span></span>
<span class="line"><span style="color:#e1e4e8;">	广义的背包问题指一种特殊DP状态设计：</span></span>
<span class="line"><span style="color:#e1e4e8;">		DP状态的一维表示选择的量</span></span>
<span class="line"><span style="color:#e1e4e8;">		而题目对量有限制</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如，常见的量有：</span></span>
<span class="line"><span style="color:#e1e4e8;">			已经选了的东西个数</span></span>
<span class="line"><span style="color:#e1e4e8;">			已经进行操作的代价</span></span>
<span class="line"><span style="color:#e1e4e8;">常见背包类型：</span></span>
<span class="line"><span style="color:#e1e4e8;">	01背包</span></span>
<span class="line"><span style="color:#e1e4e8;">	完全背包</span></span>
<span class="line"><span style="color:#e1e4e8;">	多重背包</span></span>
<span class="line"><span style="color:#e1e4e8;">	树上背包</span></span>
<span class="line"><span style="color:#e1e4e8;">常见处理方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	通用技巧：</span></span>
<span class="line"><span style="color:#e1e4e8;">		一些剪枝：</span></span>
<span class="line"><span style="color:#e1e4e8;">			1.将一定不选的物品直接去掉（价值关于体积必须递增）</span></span>
<span class="line"><span style="color:#e1e4e8;">			2.将DP状态设成“恰好”，用vector存状态，将不优的状态去掉（dp值关于体积必须递增）</span></span>
<span class="line"><span style="color:#e1e4e8;">				绝大多数题目出题人都不会卡（卡不掉）这个做法，可以放心大胆使用</span></span>
<span class="line"><span style="color:#e1e4e8;">			3.将体积相同的合并处理，可能是直接删掉，或是排序处理（因为转移其实只与体积有关）</span></span>
<span class="line"><span style="color:#e1e4e8;">		二进制分组：</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以将物品数量降为log个</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理多重背包或完全背包</span></span>
<span class="line"><span style="color:#e1e4e8;">		折半搜索：</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理n在30~40左右的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		合并和插入的转化（可以优化状态或转移）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			插入转合并（较常用）：</span></span>
<span class="line"><span style="color:#e1e4e8;">				条件：合并复杂度更优</span></span>
<span class="line"><span style="color:#e1e4e8;">				处理：结合分治/倍增实现</span></span>
<span class="line"><span style="color:#e1e4e8;">				例子：</span></span>
<span class="line"><span style="color:#e1e4e8;">					倍增FFT</span></span>
<span class="line"><span style="color:#e1e4e8;">					分治+闵可夫斯基和</span></span>
<span class="line"><span style="color:#e1e4e8;">			合并转插入：</span></span>
<span class="line"><span style="color:#e1e4e8;">				条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">					插入复杂度更优</span></span>
<span class="line"><span style="color:#e1e4e8;">					特别注意插入顺序的影响</span></span>
<span class="line"><span style="color:#e1e4e8;">				处理：可能结合启发式实现</span></span>
<span class="line"><span style="color:#e1e4e8;">				例子：树上连通块DP的启发式做法</span></span>
<span class="line"><span style="color:#e1e4e8;">	性价比背包：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将物品按价值与体积的比排序后选择</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以保证总体积为某个前缀和时，其价值和最优</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理存在性背包：</span></span>
<span class="line"><span style="color:#e1e4e8;">		存在性完全背包（同余最短路）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			实现：转圈实现</span></span>
<span class="line"><span style="color:#e1e4e8;">			复杂度：最小的物品体积*体积种数</span></span>
<span class="line"><span style="color:#e1e4e8;">		存在性多重背包（bitset）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			复杂度：本质不同的转移数*背包容量</span></span>
<span class="line"><span style="color:#e1e4e8;">		进制分解的结论（特殊存在性01背包）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			在按体积从小到大排序后，满足 任何一个物品的体积小于等于其前面物品的体积和减1</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么在上下界之间的任何一个容量，都能被用类似进制分解的方法构造出解</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">			例题：ARC LIS on tree 2</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理计数背包：</span></span>
<span class="line"><span style="color:#e1e4e8;">		背包合并：</span></span>
<span class="line"><span style="color:#e1e4e8;">			多项式卷积fft/ntt</span></span>
<span class="line"><span style="color:#e1e4e8;">		可删除背包（回退背包）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			适用范围：类似高维前缀和/01背包方案数那样的数值DP转移（最优化不行）</span></span>
<span class="line"><span style="color:#e1e4e8;">			经典例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">				消失之物：带回退的01背包</span></span>
<span class="line"><span style="color:#e1e4e8;">				solution：略</span></span>
<span class="line"><span style="color:#e1e4e8;">				</span></span>
<span class="line"><span style="color:#e1e4e8;">				给定数组a[1~n]，每次询问给定l,r，问a[l~r]中选k个数的乘积期望是多少</span></span>
<span class="line"><span style="color:#e1e4e8;">					两个方案不同当且仅当k个数的下标组成的集合不同</span></span>
<span class="line"><span style="color:#e1e4e8;">					n,q&lt;=1000</span></span>
<span class="line"><span style="color:#e1e4e8;">				solution：莫队加上回退背包即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理最优化背包：</span></span>
<span class="line"><span style="color:#e1e4e8;">		体积小的多重背包处理（普通増函数和凸包合并）:</span></span>
<span class="line"><span style="color:#e1e4e8;">			按体积分组以后，在同一体积内就是1D/1D问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以发现按照总体积对当前体积的余数，转移可以分成若干类，每类互不干扰</span></span>
<span class="line"><span style="color:#e1e4e8;">			然后观察价值函数，有比较明显的凸性，所以直接猜一个决策单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意，DP数组是没有凸性的</span></span>
<span class="line"><span style="color:#e1e4e8;">			例题：Jewel Thief</span></span>
<span class="line"><span style="color:#e1e4e8;">		带凸性的背包合并（凸包合并）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			闵可夫斯基和</span></span>
<span class="line"><span style="color:#e1e4e8;">		带凸性的背包求恰k个物品：</span></span>
<span class="line"><span style="color:#e1e4e8;">			wqs二分</span></span>
<span class="line"><span style="color:#e1e4e8;">		体积小的多重背包问题通法(复杂度和背包容量无关）</span></span>
<span class="line"><span style="color:#e1e4e8;">			贪心+小范围dp</span></span>
<span class="line"><span style="color:#e1e4e8;">			适用范围：任意背包，m,vi,wi 可负。</span></span>
<span class="line"><span style="color:#e1e4e8;">			具体做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">				先将体积为负的默认选上，然后将其体积和价值取反，那么体积都是正的了</span></span>
<span class="line"><span style="color:#e1e4e8;">				然后先用性价比背包尽量接近到限制容量</span></span>
<span class="line"><span style="color:#e1e4e8;">				接下来我们只需要删一些已经选了的物品并加上一些未选的物品</span></span>
<span class="line"><span style="color:#e1e4e8;">				用多重背包实现即可，背包容量为w^2，其中w是最大的体积</span></span>
<span class="line"><span style="color:#e1e4e8;">			对背包容量的证明：</span></span>
<span class="line"><span style="color:#e1e4e8;">				首先，尽量接近后的体积与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#e1e4e8;">				而且，最终的背包体积与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#e1e4e8;">				中间的调整过程一定存在一种方案，使得当前体积一直与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#e1e4e8;">				而任何一种总体积都只会在调整过程中被遍历最多一次</span></span>
<span class="line"><span style="color:#e1e4e8;">				（依据性价比背包的最优性，否则当前调整作用上去以后就更优了）</span></span>
<span class="line"><span style="color:#e1e4e8;">				所以最多选w个加，w个减，背包容量为w^2</span></span>
<span class="line"><span style="color:#e1e4e8;">			例题：Uplifting Excursion</span></span>
<span class="line"><span style="color:#e1e4e8;">		体积小但容量较大的完全背包处理：（不是通解，对容量下界有限制）</span></span>
<span class="line"><span style="color:#e1e4e8;">			P9140 [THUPC 2023 初赛] 背包 </span></span>
<span class="line"><span style="color:#e1e4e8;">			通解：</span></span>
<span class="line"><span style="color:#e1e4e8;">				和普通完全背包拼一起可以实现总复杂度：O(n*maxv^2)</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">可能用到的结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">	总体积一定时，不同的体积数是根号的</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:利用根号分治可证</span></span>
<span class="line"><span style="color:#e1e4e8;">		这提示我们，有容量限制（和限制）时一般已经满足了根号分治的前提条件，难点只是在设计算法</span></span>
<span class="line"><span style="color:#e1e4e8;">	物品体积正负都有时，总体积恰好是sum，绝对值最大的物品体积为maxv</span></span>
<span class="line"><span style="color:#e1e4e8;">		则存在一种调整物品放置顺序的办法，使任何时候的体积都在[l,r]中，其中l,r满足r-l+1&gt;=2*mxv,且0,sum均在[l,r]中 </span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:对于当前的体积nw，若下一个体积使nw越过范围，不妨假设nw超过下界l(nw-maxv&lt;l)，此时其必然存在一个正的体积，用那个物品即可，nw-&gt;nw+maxv&lt;=r</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		特别注意这不能直接由朴素的背包DP实现，因为这要求了某种顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">	物品体积有正负，物品价值均为正时，最优解不会重复经过同一个总体积</span></span>
<span class="line"><span style="color:#e1e4e8;">		特别的，如果是多重背包，可以将负价值先钦定必选从而转成正价值</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:显然</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，同余最短路、最优化多重背包的做法都用到了这个结论的变体</span></span>
<span class="line"><span style="color:#e1e4e8;">	物品体积有正负，最终体积和为恰0的01背包：</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以在过程中取背包最大容量为</span></span>
<span class="line"><span style="color:#e1e4e8;">			[-maxv*sqrt(maxv),maxv*sqrt(maxv)]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">定义：</span></span>
<span class="line"><span style="color:#24292e;">	狭义的背包问题是常见的选物品</span></span>
<span class="line"><span style="color:#24292e;">	广义的背包问题指一种特殊DP状态设计：</span></span>
<span class="line"><span style="color:#24292e;">		DP状态的一维表示选择的量</span></span>
<span class="line"><span style="color:#24292e;">		而题目对量有限制</span></span>
<span class="line"><span style="color:#24292e;">		例如，常见的量有：</span></span>
<span class="line"><span style="color:#24292e;">			已经选了的东西个数</span></span>
<span class="line"><span style="color:#24292e;">			已经进行操作的代价</span></span>
<span class="line"><span style="color:#24292e;">常见背包类型：</span></span>
<span class="line"><span style="color:#24292e;">	01背包</span></span>
<span class="line"><span style="color:#24292e;">	完全背包</span></span>
<span class="line"><span style="color:#24292e;">	多重背包</span></span>
<span class="line"><span style="color:#24292e;">	树上背包</span></span>
<span class="line"><span style="color:#24292e;">常见处理方法：</span></span>
<span class="line"><span style="color:#24292e;">	通用技巧：</span></span>
<span class="line"><span style="color:#24292e;">		一些剪枝：</span></span>
<span class="line"><span style="color:#24292e;">			1.将一定不选的物品直接去掉（价值关于体积必须递增）</span></span>
<span class="line"><span style="color:#24292e;">			2.将DP状态设成“恰好”，用vector存状态，将不优的状态去掉（dp值关于体积必须递增）</span></span>
<span class="line"><span style="color:#24292e;">				绝大多数题目出题人都不会卡（卡不掉）这个做法，可以放心大胆使用</span></span>
<span class="line"><span style="color:#24292e;">			3.将体积相同的合并处理，可能是直接删掉，或是排序处理（因为转移其实只与体积有关）</span></span>
<span class="line"><span style="color:#24292e;">		二进制分组：</span></span>
<span class="line"><span style="color:#24292e;">			可以将物品数量降为log个</span></span>
<span class="line"><span style="color:#24292e;">			处理多重背包或完全背包</span></span>
<span class="line"><span style="color:#24292e;">		折半搜索：</span></span>
<span class="line"><span style="color:#24292e;">			处理n在30~40左右的问题</span></span>
<span class="line"><span style="color:#24292e;">		合并和插入的转化（可以优化状态或转移）：</span></span>
<span class="line"><span style="color:#24292e;">			插入转合并（较常用）：</span></span>
<span class="line"><span style="color:#24292e;">				条件：合并复杂度更优</span></span>
<span class="line"><span style="color:#24292e;">				处理：结合分治/倍增实现</span></span>
<span class="line"><span style="color:#24292e;">				例子：</span></span>
<span class="line"><span style="color:#24292e;">					倍增FFT</span></span>
<span class="line"><span style="color:#24292e;">					分治+闵可夫斯基和</span></span>
<span class="line"><span style="color:#24292e;">			合并转插入：</span></span>
<span class="line"><span style="color:#24292e;">				条件：</span></span>
<span class="line"><span style="color:#24292e;">					插入复杂度更优</span></span>
<span class="line"><span style="color:#24292e;">					特别注意插入顺序的影响</span></span>
<span class="line"><span style="color:#24292e;">				处理：可能结合启发式实现</span></span>
<span class="line"><span style="color:#24292e;">				例子：树上连通块DP的启发式做法</span></span>
<span class="line"><span style="color:#24292e;">	性价比背包：</span></span>
<span class="line"><span style="color:#24292e;">		将物品按价值与体积的比排序后选择</span></span>
<span class="line"><span style="color:#24292e;">		可以保证总体积为某个前缀和时，其价值和最优</span></span>
<span class="line"><span style="color:#24292e;">	处理存在性背包：</span></span>
<span class="line"><span style="color:#24292e;">		存在性完全背包（同余最短路）：</span></span>
<span class="line"><span style="color:#24292e;">			实现：转圈实现</span></span>
<span class="line"><span style="color:#24292e;">			复杂度：最小的物品体积*体积种数</span></span>
<span class="line"><span style="color:#24292e;">		存在性多重背包（bitset）：</span></span>
<span class="line"><span style="color:#24292e;">			复杂度：本质不同的转移数*背包容量</span></span>
<span class="line"><span style="color:#24292e;">		进制分解的结论（特殊存在性01背包）：</span></span>
<span class="line"><span style="color:#24292e;">			在按体积从小到大排序后，满足 任何一个物品的体积小于等于其前面物品的体积和减1</span></span>
<span class="line"><span style="color:#24292e;">			那么在上下界之间的任何一个容量，都能被用类似进制分解的方法构造出解</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">			例题：ARC LIS on tree 2</span></span>
<span class="line"><span style="color:#24292e;">	处理计数背包：</span></span>
<span class="line"><span style="color:#24292e;">		背包合并：</span></span>
<span class="line"><span style="color:#24292e;">			多项式卷积fft/ntt</span></span>
<span class="line"><span style="color:#24292e;">		可删除背包（回退背包）：</span></span>
<span class="line"><span style="color:#24292e;">			适用范围：类似高维前缀和/01背包方案数那样的数值DP转移（最优化不行）</span></span>
<span class="line"><span style="color:#24292e;">			经典例题：</span></span>
<span class="line"><span style="color:#24292e;">				消失之物：带回退的01背包</span></span>
<span class="line"><span style="color:#24292e;">				solution：略</span></span>
<span class="line"><span style="color:#24292e;">				</span></span>
<span class="line"><span style="color:#24292e;">				给定数组a[1~n]，每次询问给定l,r，问a[l~r]中选k个数的乘积期望是多少</span></span>
<span class="line"><span style="color:#24292e;">					两个方案不同当且仅当k个数的下标组成的集合不同</span></span>
<span class="line"><span style="color:#24292e;">					n,q&lt;=1000</span></span>
<span class="line"><span style="color:#24292e;">				solution：莫队加上回退背包即可</span></span>
<span class="line"><span style="color:#24292e;">	处理最优化背包：</span></span>
<span class="line"><span style="color:#24292e;">		体积小的多重背包处理（普通増函数和凸包合并）:</span></span>
<span class="line"><span style="color:#24292e;">			按体积分组以后，在同一体积内就是1D/1D问题</span></span>
<span class="line"><span style="color:#24292e;">			可以发现按照总体积对当前体积的余数，转移可以分成若干类，每类互不干扰</span></span>
<span class="line"><span style="color:#24292e;">			然后观察价值函数，有比较明显的凸性，所以直接猜一个决策单调性</span></span>
<span class="line"><span style="color:#24292e;">			注意，DP数组是没有凸性的</span></span>
<span class="line"><span style="color:#24292e;">			例题：Jewel Thief</span></span>
<span class="line"><span style="color:#24292e;">		带凸性的背包合并（凸包合并）：</span></span>
<span class="line"><span style="color:#24292e;">			闵可夫斯基和</span></span>
<span class="line"><span style="color:#24292e;">		带凸性的背包求恰k个物品：</span></span>
<span class="line"><span style="color:#24292e;">			wqs二分</span></span>
<span class="line"><span style="color:#24292e;">		体积小的多重背包问题通法(复杂度和背包容量无关）</span></span>
<span class="line"><span style="color:#24292e;">			贪心+小范围dp</span></span>
<span class="line"><span style="color:#24292e;">			适用范围：任意背包，m,vi,wi 可负。</span></span>
<span class="line"><span style="color:#24292e;">			具体做法：</span></span>
<span class="line"><span style="color:#24292e;">				先将体积为负的默认选上，然后将其体积和价值取反，那么体积都是正的了</span></span>
<span class="line"><span style="color:#24292e;">				然后先用性价比背包尽量接近到限制容量</span></span>
<span class="line"><span style="color:#24292e;">				接下来我们只需要删一些已经选了的物品并加上一些未选的物品</span></span>
<span class="line"><span style="color:#24292e;">				用多重背包实现即可，背包容量为w^2，其中w是最大的体积</span></span>
<span class="line"><span style="color:#24292e;">			对背包容量的证明：</span></span>
<span class="line"><span style="color:#24292e;">				首先，尽量接近后的体积与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#24292e;">				而且，最终的背包体积与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#24292e;">				中间的调整过程一定存在一种方案，使得当前体积一直与限制容量的差&lt;w</span></span>
<span class="line"><span style="color:#24292e;">				而任何一种总体积都只会在调整过程中被遍历最多一次</span></span>
<span class="line"><span style="color:#24292e;">				（依据性价比背包的最优性，否则当前调整作用上去以后就更优了）</span></span>
<span class="line"><span style="color:#24292e;">				所以最多选w个加，w个减，背包容量为w^2</span></span>
<span class="line"><span style="color:#24292e;">			例题：Uplifting Excursion</span></span>
<span class="line"><span style="color:#24292e;">		体积小但容量较大的完全背包处理：（不是通解，对容量下界有限制）</span></span>
<span class="line"><span style="color:#24292e;">			P9140 [THUPC 2023 初赛] 背包 </span></span>
<span class="line"><span style="color:#24292e;">			通解：</span></span>
<span class="line"><span style="color:#24292e;">				和普通完全背包拼一起可以实现总复杂度：O(n*maxv^2)</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">可能用到的结论：</span></span>
<span class="line"><span style="color:#24292e;">	总体积一定时，不同的体积数是根号的</span></span>
<span class="line"><span style="color:#24292e;">		proof:利用根号分治可证</span></span>
<span class="line"><span style="color:#24292e;">		这提示我们，有容量限制（和限制）时一般已经满足了根号分治的前提条件，难点只是在设计算法</span></span>
<span class="line"><span style="color:#24292e;">	物品体积正负都有时，总体积恰好是sum，绝对值最大的物品体积为maxv</span></span>
<span class="line"><span style="color:#24292e;">		则存在一种调整物品放置顺序的办法，使任何时候的体积都在[l,r]中，其中l,r满足r-l+1&gt;=2*mxv,且0,sum均在[l,r]中 </span></span>
<span class="line"><span style="color:#24292e;">		proof:对于当前的体积nw，若下一个体积使nw越过范围，不妨假设nw超过下界l(nw-maxv&lt;l)，此时其必然存在一个正的体积，用那个物品即可，nw-&gt;nw+maxv&lt;=r</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		特别注意这不能直接由朴素的背包DP实现，因为这要求了某种顺序</span></span>
<span class="line"><span style="color:#24292e;">	物品体积有正负，物品价值均为正时，最优解不会重复经过同一个总体积</span></span>
<span class="line"><span style="color:#24292e;">		特别的，如果是多重背包，可以将负价值先钦定必选从而转成正价值</span></span>
<span class="line"><span style="color:#24292e;">		proof:显然</span></span>
<span class="line"><span style="color:#24292e;">		注意，同余最短路、最优化多重背包的做法都用到了这个结论的变体</span></span>
<span class="line"><span style="color:#24292e;">	物品体积有正负，最终体积和为恰0的01背包：</span></span>
<span class="line"><span style="color:#24292e;">		可以在过程中取背包最大容量为</span></span>
<span class="line"><span style="color:#24292e;">			[-maxv*sqrt(maxv),maxv*sqrt(maxv)]</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,d,m){return n(),a("div",null,t)}const _=s(l,[["render",o]]);export{P as __pageData,_ as default};
