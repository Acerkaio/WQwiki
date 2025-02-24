import{_ as l,o as i,c as t,Q as o}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"背包与背包型DP","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/DP/背包与背包型DP.md","filePath":"Mad/DP/背包与背包型DP.md","lastUpdated":1738666900000}'),r={name:"Mad/DP/背包与背包型DP.md"},n=o('<h1 id="背包与背包型dp" tabindex="-1">背包与背包型DP <a class="header-anchor" href="#背包与背包型dp" aria-label="Permalink to &quot;背包与背包型DP&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><ul><li>狭义的背包问题是常见的选物品。</li><li>广义的背包问题指一种特殊DP状态设计： <ul><li>DP状态的一维表示选择的量。</li><li>题目对该量有限制。例如，常见的量有： <ul><li>已选物品的个数。</li><li>已进行操作的代价。</li></ul></li></ul></li></ul><h2 id="常见背包类型" tabindex="-1">常见背包类型 <a class="header-anchor" href="#常见背包类型" aria-label="Permalink to &quot;常见背包类型&quot;">​</a></h2><ul><li>01背包</li><li>完全背包</li><li>多重背包</li><li>树上背包</li></ul><h2 id="常见处理方法" tabindex="-1">常见处理方法 <a class="header-anchor" href="#常见处理方法" aria-label="Permalink to &quot;常见处理方法&quot;">​</a></h2><h3 id="通用技巧" tabindex="-1">通用技巧 <a class="header-anchor" href="#通用技巧" aria-label="Permalink to &quot;通用技巧&quot;">​</a></h3><ol><li><strong>一些剪枝</strong>： <ul><li>将一定不选的物品直接去掉（价值关于体积必须递增）。即若对于物品 $i$ 和 $j$（$i$ 的体积 $v_i$ 小于 $j$ 的体积 $v_j$），且 $\\frac{w_i}{v_i} \\leq \\frac{w_j}{v_j}$（$w$ 表示价值），则物品 $i$ 可直接去掉。</li><li>将DP状态设成“恰好”，用 <code>vector</code> 存状态，将不优的状态去掉（dp值关于体积必须递增）。绝大多数题目出题人都不会卡（卡不掉）这个做法，可以放心使用。</li><li>将体积相同的物品合并处理，可能是直接删掉，或是排序处理（因为转移只与体积有关）。</li></ul></li><li><strong>二进制分组</strong>： <ul><li>可将物品数量降为 $\\log$ 个。</li><li>用于处理多重背包或完全背包。</li></ul></li><li><strong>折半搜索</strong>：处理 $n$ 在 $30 - 40$ 左右的问题。</li><li><strong>合并和插入的转化（优化状态或转移）</strong>： <ul><li><strong>插入转合并（较常用）</strong>： <ul><li><strong>条件</strong>：合并复杂度更优。</li><li><strong>处理</strong>：结合分治/倍增实现。</li><li><strong>例子</strong>： <ul><li>倍增FFT。</li><li>分治 + 闵可夫斯基和。</li></ul></li></ul></li><li><strong>合并转插入</strong>： <ul><li><strong>条件</strong>： <ul><li>插入复杂度更优。</li><li>需特别注意插入顺序的影响。</li></ul></li><li><strong>处理</strong>：可能结合启发式实现。</li><li><strong>例子</strong>：树上连通块DP的启发式做法。</li></ul></li></ul></li><li><strong>性价比背包</strong>： <ul><li>将物品按价值与体积的比 $\\frac{w}{v}$ 排序后选择。</li><li>可保证总体积为某个前缀和时，其价值和最优。</li></ul></li><li><strong>处理存在性背包</strong>： <ul><li><strong>存在性完全背包（同余最短路）</strong>： <ul><li><strong>实现</strong>：转圈实现。</li><li><strong>复杂度</strong>：最小的物品体积 $v_{min}$ * 体积种数 $m$，即 $O(v_{min} \\cdot m)$。</li></ul></li><li><strong>存在性多重背包（bitset）</strong>： <ul><li><strong>复杂度</strong>：本质不同的转移数 $t$ * 背包容量 $V$，即 $O(t \\cdot V)$。</li></ul></li><li><strong>进制分解的结论（特殊存在性01背包）</strong>： <ul><li>物品按体积 $v$ 从小到大排序后，满足 $v_i \\leq \\sum_{j = 1}^{i - 1} v_j - 1$。</li><li>那么在上下界之间的任何一个容量 $C$，都能通过类似进制分解的方法构造出解。</li><li><strong>例题</strong>：ARC LIS on tree 2。</li></ul></li></ul></li><li><strong>处理计数背包</strong>： <ul><li><strong>背包合并</strong>：利用多项式卷积FFT/NTT，即通过计算两个多项式的卷积来合并背包。设两个背包对应的多项式为 $A(x) = \\sum_{i = 0}^{n} a_i x^i$ 和 $B(x) = \\sum_{j = 0}^{m} b_j x^j$，则它们的卷积 $C(x) = A(x) \\cdot B(x) = \\sum_{k = 0}^{n + m} (\\sum_{i + j = k} a_i b_j) x^k$。</li><li><strong>可删除背包（回退背包）</strong>： <ul><li><strong>适用范围</strong>：类似高维前缀和/01背包方案数那样的数值DP转移（最优化不行）。</li><li><strong>经典例题</strong>： <ul><li><strong>消失之物</strong>：带回退的01背包。</li><li><strong>solution</strong>：略。</li><li><strong>题目</strong>：给定数组 $a[1 \\sim n]$，每次询问给定 $l, r$，问 $a[l \\sim r]$ 中选 $k$ 个数的乘积期望是多少。两个方案不同当且仅当 $k$ 个数的下标组成的集合不同，$n, q \\leq 1000$。</li><li><strong>solution</strong>：莫队加上回退背包即可。</li></ul></li></ul></li></ul></li><li><strong>处理最优化背包</strong>： <ul><li><strong>体积小的多重背包处理（普通增函数和凸包合并）</strong>： <ul><li>按体积分组后，同一体积内为 $1D/1D$ 问题。</li><li>按总体积对当前体积的余数，转移可分成若干类，每类互不干扰。</li><li>观察价值函数，有明显凸性，可猜测具有决策单调性。注意，DP数组本身无凸性。</li><li><strong>例题</strong>：Jewel Thief。</li></ul></li><li><strong>带凸性的背包合并（凸包合并）</strong>：利用闵可夫斯基和。对于两个凸多边形 $P$ 和 $Q$，它们的闵可夫斯基和 $P + Q = {p + q : p \\in P, q \\in Q}$。</li><li><strong>带凸性的背包求恰 $k$ 个物品</strong>：使用wqs二分。</li><li><strong>体积小的多重背包问题通法(复杂度与背包容量无关）</strong>： <ul><li><strong>贪心 + 小范围dp</strong>： <ul><li><strong>适用范围</strong>：任意背包，$m$（物品数量），$v_i$（物品体积），$w_i$（物品价值）可负。</li><li><strong>具体做法</strong>： <ul><li>先将体积为负的物品默认选上，然后将其体积和价值取反，使所有体积变为正。</li><li>先用性价比背包尽量接近限制容量 $C$。</li><li>之后需删一些已选物品并添加一些未选物品，用多重背包实现，背包容量为 $w^2$，其中 $w$ 是最大的体积。</li></ul></li><li><strong>对背包容量的证明</strong>： <ul><li>首先，尽量接近后的体积与限制容量的差 $ \\lt w$。</li><li>最终的背包体积与限制容量的差也 $ \\lt w$。</li><li>中间调整过程存在一种方案，使当前体积与限制容量的差始终 $ \\lt w$。</li><li>由于性价比背包的最优性，任何一种总体积在调整过程中最多被遍历一次（否则调整后会更优）。</li><li>所以最多选 $w$ 个物品增加体积，$w$ 个物品减少体积，背包容量为 $w^2$。</li></ul></li><li><strong>例题</strong>：Uplifting Excursion。</li></ul></li></ul></li><li><strong>体积小但容量较大的完全背包处理</strong>：（不是通解，对容量下界有限制） <ul><li><strong>P9140 [THUPC 2023 初赛] 背包</strong></li><li><strong>通解</strong>：与普通完全背包结合，可实现总复杂度 $O(n \\cdot \\max v^2)$。</li></ul></li></ul></li></ol><h2 id="可能用到的结论" tabindex="-1">可能用到的结论 <a class="header-anchor" href="#可能用到的结论" aria-label="Permalink to &quot;可能用到的结论&quot;">​</a></h2><ol><li><strong>总体积一定时，不同的体积数是根号级别的</strong>： <ul><li><strong>proof</strong>：利用根号分治可证。</li><li>这表明，有容量限制（和限制）时通常满足根号分治的前提条件，难点在于设计算法。</li></ul></li><li><strong>物品体积正负都有，总体积恰好是 $sum$，绝对值最大的物品体积为 $maxv$</strong>： <ul><li>存在一种调整物品放置顺序的方法，使任何时候的体积都在 $[l, r]$ 中，其中 $l, r$ 满足 $r - l + 1 \\geq 2 \\cdot maxv$，且 $0$，$sum$ 均在 $[l, r]$ 中 。</li><li><strong>proof</strong>：对于当前体积 $nw$，若下一个体积使 $nw$ 越过范围，不妨设 $nw - maxv \\lt l$（超过下界 $l$），此时必然存在一个正体积的物品，使用该物品可使 $nw \\to nw + maxv \\leq r$。</li><li>需注意，这不能直接通过朴素的背包DP实现，因为要求特定顺序。</li></ul></li><li><strong>物品体积有正负，物品价值均为正时，最优解不会重复经过同一个总体积</strong>： <ul><li>特别地，若是多重背包，可将负价值物品先钦定必选从而转成正价值。</li><li><strong>proof</strong>：显然。</li><li>注意，同余最短路、最优化多重背包的做法都用到了这个结论的变体。</li></ul></li><li><strong>物品体积有正负，最终体积和为恰 $0$ 的01背包</strong>： <ul><li>过程中可取背包最大容量为 $[-maxv \\cdot \\sqrt{maxv}, maxv \\cdot \\sqrt{maxv}]$。</li></ul></li></ol>',10),s=[n];function $(g,a,u,e,_,d){return i(),t("div",null,s)}const h=l(r,[["render",$]]);export{m as __pageData,h as default};
