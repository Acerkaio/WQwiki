import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const _=JSON.parse('{"title":"kth问题总结","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/kth问题总结.md","filePath":"Mad/kth问题总结.md","lastUpdated":1738666900000}'),l={name:"Mad/kth问题总结.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="kth问题总结" tabindex="-1">kth问题总结 <a class="header-anchor" href="#kth问题总结" aria-label="Permalink to &quot;kth问题总结&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">	所谓Kth问题，就是给定了一个集合，让你从中选出价值第k大/小的元素来，可以分为输出方案型和输出价值型</span></span>
<span class="line"><span style="color:#e1e4e8;">处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	法一：二分价值，可以处理任意大小K的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		两种处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			法一：转化成离线DS问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			法二：利用构造解的O(K)做法</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.涉及字典序的，一般都是逐位考虑，然后结合二分（或者均摊）确定该位的值</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.如果价值不好算、只有偏序关系的话，可以随机n个元素来二分，然后用法二</span></span>
<span class="line"><span style="color:#e1e4e8;">	法二：结合堆进行贪心构造，处理k比较小的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		优点：</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理二分处理不了的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			复杂度可能更优</span></span>
<span class="line"><span style="color:#e1e4e8;">		构造注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.确保每个解都能被构造到（最好是唯一被构造到）</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.确保对于每个解，比其更优的解都先被构造了</span></span>
<span class="line"><span style="color:#e1e4e8;">			（每个解都对应了若干后继，且后继不优于当前解）</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		其实，解的构造关系构成了一棵树（堆）</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		Alex_Wei的阐述：</span></span>
<span class="line"><span style="color:#e1e4e8;">		这类 “不断扩展结构，取出权值前k小” 的问题非常经典，其解法如下：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对每个除了权值最小的结构，为其钦定一个权值不比它大的前驱，满足前驱关系不成环。</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样，任何结构都可以从唯一的无前驱的权值最小的前驱开始扩展得到，满足每次扩展一个前驱为当前结构的结构，即每次扩展一个后继。</span></span>
<span class="line"><span style="color:#e1e4e8;">		用优先队列维护所有被扩展但未被考虑的结构，第k次取出队列中权值最小的结构即权值第k小的结构，然后将其所有后继加入优先队列。</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意：不要思维固化，认为k小一定是调整，有的时候调整比二分更难写</span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">区间kth问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	如果是法二，一般都是定右端点考虑左端点怎么保证单调性（即注意2）</span></span>
<span class="line"><span style="color:#e1e4e8;">	P2048，P5283：两个方法都能用</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以发现，法一会比法二复杂度多一个log</span></span>
<span class="line"><span style="color:#e1e4e8;">		P2048的法一需要用到主席树，好像没什么人写</span></span>
<span class="line"><span style="color:#e1e4e8;">	OIFC&#39;s problem:</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义可重集 A 比可重集 B 小，当且仅当对于 在两个可重集中出现次数不同的最小元素 x ，元素 x 在 A 中出现次数更多。</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定一个序列 a1∼n​ 。对于每一个 1≤l≤r≤n，可以对应一个可重集 al,al+1,…,ar。</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样可以生成 n(n+1)/2 个可重集。</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定正整数 k 。问在这些可重集中，第 k 小的是哪个。</span></span>
<span class="line"><span style="color:#e1e4e8;">		lim:n&lt;=1e5,k&lt;=n*(n-1)/2</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">			先考虑偏序怎么确定，这可以主席树</span></span>
<span class="line"><span style="color:#e1e4e8;">			直接二分没法做，因为权值不确定，所以随机n个区间，然后二分</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么考虑法二怎么做，可以发现有包含关系的区间就有偏序关系，那就做完了</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意在二分判定时可以直接双指针，去掉一个log</span></span>
<span class="line"><span style="color:#e1e4e8;">字典序kth问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	简单题：字典序第K小排列</span></span>
<span class="line"><span style="color:#e1e4e8;">	联合省选2024 DAY2 T1</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	自造题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		给定一棵带标号无根树，求第k小的先序遍历序列。lim:n&lt;=5e5,k&lt;=1e18</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">		先考虑确定出发点。考虑以i为根，那么可行的序列数是所有非叶节点的儿子数的阶乘的乘积，记作f[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然这东西非常大，在n&gt;=100的时候肯定只能从1出发</span></span>
<span class="line"><span style="color:#e1e4e8;">		所以我们直接暴力从小到大枚举根节点，然后跑一遍树形DP算一下可行解，就可以知道目标序列的第一个点的标号</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意这里不能换根，因为答案太大了</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑现在要从根开始，我走了其中某个儿子i，那么对应的序列数量是f[rt]/sons</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么从小到大枚举一下儿子，找到第K大序列的第二个点的标号</span></span>
<span class="line"><span style="color:#e1e4e8;">		类似的，我们可以一直递归做下去</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后考虑回溯以后怎么办，把已经递归了的部分的f的贡献直接除掉，执行刚才的步骤即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		复杂度O(n*(logV+logn)+100*100)</span></span>
<span class="line"><span style="color:#e1e4e8;">		详见Problem3</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	发现的题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		有一棵包含N个节点的二叉树，节点编号是1~N。</span></span>
<span class="line"><span style="color:#e1e4e8;">		现在我们知道它的中序遍历结果A1, A2, ... AN。</span></span>
<span class="line"><span style="color:#e1e4e8;">		问先序遍历字典序第K小的二叉树</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">	模拟赛题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		平面内曼哈顿距离前K小距离</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		曼哈顿距离转切比雪夫距离，发现有一个很傻的处理办法，就是直接维护出每个点在下面的情况能贡献的最小点对，可以用树套树结合二分进行调整（确实是可行的）</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑怎样更好写，显然树套树应该要用离线弄掉去，但这根本没法离线</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑二分，那么就可以用扫描线替换树套树。这里要用不unique的离散化，结合BIT即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后，我们得到了第K小距离，那怎么得到最后的具体输出呢？</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑到第k小距离可能对应了很多点对，所以我们取其减一的值，再跑一遍二分时的check，然后将剩下的随便填上即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		此时check的实现应该可以暴力一点，用set代替BIT</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">选数kth问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	tsingcheng&#39;s problem:</span></span>
<span class="line"><span style="color:#e1e4e8;">		从n个数中选若干（至少1）个数求和，求所有方案中第k小的和（和相同但取法不同的视为不同方案）</span></span>
<span class="line"><span style="color:#e1e4e8;">		lim:n&lt;=1e5,k&lt;=5e5</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接考虑法二，发现可以直接每次把最后一个值往后移一位，或是在最后一个值后面再加一个，那么就做完了</span></span>
<span class="line"><span style="color:#e1e4e8;">	P2483 k短路：</span></span>
<span class="line"><span style="color:#e1e4e8;">		首先考虑如何调整，可以发现必然是从最短路的末尾一段分叉，走向另一条最短路，发现这就是最短路树选非树边的过程</span></span>
<span class="line"><span style="color:#e1e4e8;">		看一下怎么暴力实现调整，最短路长度不太好算，考虑直接将非树边的权值重新赋一下</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么就转化成选若干非树边，使其和第k小，这就是选数kth问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		但注意到非树边之间有一些祖先关系，所以以此为顺序调整，可以把当前的最后一条边调整成次短边，或是直接新选一条边</span></span>
<span class="line"><span style="color:#e1e4e8;">		这需要我们维护后继，可以用可持久化实现，例如主席树结合二分</span></span>
<span class="line"><span style="color:#e1e4e8;">		特别注意，这里有重复元素，而我们要维护后继，可以用不unique的离散化实现钦定相等元素之间的顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">	题意：给 n 个数，每次选出一个大小在 [L,R] 之间的子集，求前 k 大的子集和的和. n,k≤2×10^5.</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">		从小到大排序，先考虑大小为len的集合</span></span>
<span class="line"><span style="color:#e1e4e8;">		调整应该是选出一段后缀向右平移一格</span></span>
<span class="line"><span style="color:#e1e4e8;">		多种大小分别维护即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		结合堆实现即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		类似题：CF1250I，P6646</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">定义：</span></span>
<span class="line"><span style="color:#24292e;">	所谓Kth问题，就是给定了一个集合，让你从中选出价值第k大/小的元素来，可以分为输出方案型和输出价值型</span></span>
<span class="line"><span style="color:#24292e;">处理办法：</span></span>
<span class="line"><span style="color:#24292e;">	法一：二分价值，可以处理任意大小K的情况</span></span>
<span class="line"><span style="color:#24292e;">		两种处理办法：</span></span>
<span class="line"><span style="color:#24292e;">			法一：转化成离线DS问题</span></span>
<span class="line"><span style="color:#24292e;">			法二：利用构造解的O(K)做法</span></span>
<span class="line"><span style="color:#24292e;">		注意：</span></span>
<span class="line"><span style="color:#24292e;">		1.涉及字典序的，一般都是逐位考虑，然后结合二分（或者均摊）确定该位的值</span></span>
<span class="line"><span style="color:#24292e;">		2.如果价值不好算、只有偏序关系的话，可以随机n个元素来二分，然后用法二</span></span>
<span class="line"><span style="color:#24292e;">	法二：结合堆进行贪心构造，处理k比较小的情况</span></span>
<span class="line"><span style="color:#24292e;">		优点：</span></span>
<span class="line"><span style="color:#24292e;">			处理二分处理不了的问题</span></span>
<span class="line"><span style="color:#24292e;">			复杂度可能更优</span></span>
<span class="line"><span style="color:#24292e;">		构造注意：</span></span>
<span class="line"><span style="color:#24292e;">		1.确保每个解都能被构造到（最好是唯一被构造到）</span></span>
<span class="line"><span style="color:#24292e;">		2.确保对于每个解，比其更优的解都先被构造了</span></span>
<span class="line"><span style="color:#24292e;">			（每个解都对应了若干后继，且后继不优于当前解）</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		其实，解的构造关系构成了一棵树（堆）</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		Alex_Wei的阐述：</span></span>
<span class="line"><span style="color:#24292e;">		这类 “不断扩展结构，取出权值前k小” 的问题非常经典，其解法如下：</span></span>
<span class="line"><span style="color:#24292e;">		对每个除了权值最小的结构，为其钦定一个权值不比它大的前驱，满足前驱关系不成环。</span></span>
<span class="line"><span style="color:#24292e;">		这样，任何结构都可以从唯一的无前驱的权值最小的前驱开始扩展得到，满足每次扩展一个前驱为当前结构的结构，即每次扩展一个后继。</span></span>
<span class="line"><span style="color:#24292e;">		用优先队列维护所有被扩展但未被考虑的结构，第k次取出队列中权值最小的结构即权值第k小的结构，然后将其所有后继加入优先队列。</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	注意：不要思维固化，认为k小一定是调整，有的时候调整比二分更难写</span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">区间kth问题：</span></span>
<span class="line"><span style="color:#24292e;">	如果是法二，一般都是定右端点考虑左端点怎么保证单调性（即注意2）</span></span>
<span class="line"><span style="color:#24292e;">	P2048，P5283：两个方法都能用</span></span>
<span class="line"><span style="color:#24292e;">		可以发现，法一会比法二复杂度多一个log</span></span>
<span class="line"><span style="color:#24292e;">		P2048的法一需要用到主席树，好像没什么人写</span></span>
<span class="line"><span style="color:#24292e;">	OIFC&#39;s problem:</span></span>
<span class="line"><span style="color:#24292e;">		定义可重集 A 比可重集 B 小，当且仅当对于 在两个可重集中出现次数不同的最小元素 x ，元素 x 在 A 中出现次数更多。</span></span>
<span class="line"><span style="color:#24292e;">		给定一个序列 a1∼n​ 。对于每一个 1≤l≤r≤n，可以对应一个可重集 al,al+1,…,ar。</span></span>
<span class="line"><span style="color:#24292e;">		这样可以生成 n(n+1)/2 个可重集。</span></span>
<span class="line"><span style="color:#24292e;">		给定正整数 k 。问在这些可重集中，第 k 小的是哪个。</span></span>
<span class="line"><span style="color:#24292e;">		lim:n&lt;=1e5,k&lt;=n*(n-1)/2</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">			先考虑偏序怎么确定，这可以主席树</span></span>
<span class="line"><span style="color:#24292e;">			直接二分没法做，因为权值不确定，所以随机n个区间，然后二分</span></span>
<span class="line"><span style="color:#24292e;">			那么考虑法二怎么做，可以发现有包含关系的区间就有偏序关系，那就做完了</span></span>
<span class="line"><span style="color:#24292e;">			注意在二分判定时可以直接双指针，去掉一个log</span></span>
<span class="line"><span style="color:#24292e;">字典序kth问题：</span></span>
<span class="line"><span style="color:#24292e;">	简单题：字典序第K小排列</span></span>
<span class="line"><span style="color:#24292e;">	联合省选2024 DAY2 T1</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	自造题：</span></span>
<span class="line"><span style="color:#24292e;">		给定一棵带标号无根树，求第k小的先序遍历序列。lim:n&lt;=5e5,k&lt;=1e18</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">		先考虑确定出发点。考虑以i为根，那么可行的序列数是所有非叶节点的儿子数的阶乘的乘积，记作f[i]</span></span>
<span class="line"><span style="color:#24292e;">		显然这东西非常大，在n&gt;=100的时候肯定只能从1出发</span></span>
<span class="line"><span style="color:#24292e;">		所以我们直接暴力从小到大枚举根节点，然后跑一遍树形DP算一下可行解，就可以知道目标序列的第一个点的标号</span></span>
<span class="line"><span style="color:#24292e;">		注意这里不能换根，因为答案太大了</span></span>
<span class="line"><span style="color:#24292e;">		考虑现在要从根开始，我走了其中某个儿子i，那么对应的序列数量是f[rt]/sons</span></span>
<span class="line"><span style="color:#24292e;">		那么从小到大枚举一下儿子，找到第K大序列的第二个点的标号</span></span>
<span class="line"><span style="color:#24292e;">		类似的，我们可以一直递归做下去</span></span>
<span class="line"><span style="color:#24292e;">		然后考虑回溯以后怎么办，把已经递归了的部分的f的贡献直接除掉，执行刚才的步骤即可</span></span>
<span class="line"><span style="color:#24292e;">		复杂度O(n*(logV+logn)+100*100)</span></span>
<span class="line"><span style="color:#24292e;">		详见Problem3</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	发现的题：</span></span>
<span class="line"><span style="color:#24292e;">		有一棵包含N个节点的二叉树，节点编号是1~N。</span></span>
<span class="line"><span style="color:#24292e;">		现在我们知道它的中序遍历结果A1, A2, ... AN。</span></span>
<span class="line"><span style="color:#24292e;">		问先序遍历字典序第K小的二叉树</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">	模拟赛题：</span></span>
<span class="line"><span style="color:#24292e;">		平面内曼哈顿距离前K小距离</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		曼哈顿距离转切比雪夫距离，发现有一个很傻的处理办法，就是直接维护出每个点在下面的情况能贡献的最小点对，可以用树套树结合二分进行调整（确实是可行的）</span></span>
<span class="line"><span style="color:#24292e;">		考虑怎样更好写，显然树套树应该要用离线弄掉去，但这根本没法离线</span></span>
<span class="line"><span style="color:#24292e;">		考虑二分，那么就可以用扫描线替换树套树。这里要用不unique的离散化，结合BIT即可</span></span>
<span class="line"><span style="color:#24292e;">		然后，我们得到了第K小距离，那怎么得到最后的具体输出呢？</span></span>
<span class="line"><span style="color:#24292e;">		考虑到第k小距离可能对应了很多点对，所以我们取其减一的值，再跑一遍二分时的check，然后将剩下的随便填上即可</span></span>
<span class="line"><span style="color:#24292e;">		此时check的实现应该可以暴力一点，用set代替BIT</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">选数kth问题：</span></span>
<span class="line"><span style="color:#24292e;">	tsingcheng&#39;s problem:</span></span>
<span class="line"><span style="color:#24292e;">		从n个数中选若干（至少1）个数求和，求所有方案中第k小的和（和相同但取法不同的视为不同方案）</span></span>
<span class="line"><span style="color:#24292e;">		lim:n&lt;=1e5,k&lt;=5e5</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">		直接考虑法二，发现可以直接每次把最后一个值往后移一位，或是在最后一个值后面再加一个，那么就做完了</span></span>
<span class="line"><span style="color:#24292e;">	P2483 k短路：</span></span>
<span class="line"><span style="color:#24292e;">		首先考虑如何调整，可以发现必然是从最短路的末尾一段分叉，走向另一条最短路，发现这就是最短路树选非树边的过程</span></span>
<span class="line"><span style="color:#24292e;">		看一下怎么暴力实现调整，最短路长度不太好算，考虑直接将非树边的权值重新赋一下</span></span>
<span class="line"><span style="color:#24292e;">		那么就转化成选若干非树边，使其和第k小，这就是选数kth问题</span></span>
<span class="line"><span style="color:#24292e;">		但注意到非树边之间有一些祖先关系，所以以此为顺序调整，可以把当前的最后一条边调整成次短边，或是直接新选一条边</span></span>
<span class="line"><span style="color:#24292e;">		这需要我们维护后继，可以用可持久化实现，例如主席树结合二分</span></span>
<span class="line"><span style="color:#24292e;">		特别注意，这里有重复元素，而我们要维护后继，可以用不unique的离散化实现钦定相等元素之间的顺序</span></span>
<span class="line"><span style="color:#24292e;">	题意：给 n 个数，每次选出一个大小在 [L,R] 之间的子集，求前 k 大的子集和的和. n,k≤2×10^5.</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">		从小到大排序，先考虑大小为len的集合</span></span>
<span class="line"><span style="color:#24292e;">		调整应该是选出一段后缀向右平移一格</span></span>
<span class="line"><span style="color:#24292e;">		多种大小分别维护即可</span></span>
<span class="line"><span style="color:#24292e;">		结合堆实现即可</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		类似题：CF1250I，P6646</span></span></code></pre></div>`,3),t=[p];function o(c,i,r,y,k,h){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{_ as __pageData,u as default};
