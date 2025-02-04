import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const S=JSON.parse('{"title":"博弈论","description":"","frontmatter":{},"headers":[],"relativePath":"misc/博弈论.md","filePath":"misc/博弈论.md","lastUpdated":null}'),l={name:"misc/博弈论.md"},p=e(`<h1 id="博弈论" tabindex="-1">博弈论 <a class="header-anchor" href="#博弈论" aria-label="Permalink to &quot;博弈论&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">以下讨论均基于两人轮流进行的游戏，如果不是的话，应该是套了博弈论皮的最优化问题（例如P9170）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">公平组合游戏（ICG）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	由两名玩家交替行动</span></span>
<span class="line"><span style="color:#e1e4e8;">	在游戏进行的任意时刻,可以执行的合法行动与轮到哪位玩家无关</span></span>
<span class="line"><span style="color:#e1e4e8;">	不能行动者输，没有平局</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">博弈图：将每个状态视为一个节点，再从每个状态向它的后继状态连边</span></span>
<span class="line"><span style="color:#e1e4e8;">必胜态：后继状态存在必败态</span></span>
<span class="line"><span style="color:#e1e4e8;">必败态：后继状态都是必胜态</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">有向图游戏：博弈图是有向无环图，且是公平组合游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">SG函数：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理有向图游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">	SG函数值为0则是必败态，否则为必胜态</span></span>
<span class="line"><span style="color:#e1e4e8;">	一个状态的SG函数值等于后继状态的SG函数值的mex</span></span>
<span class="line"><span style="color:#e1e4e8;">	公平组合游戏：整个游戏的SG函数值等于各子游戏的SG函数值的异或</span></span>
<span class="line"><span style="color:#e1e4e8;">证明结论正确性的方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	SG函数证明：略</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义证明：主要分三个步骤</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.终态（必败态）满足结论</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.必胜态一定能转移到必败态（构造）</span></span>
<span class="line"><span style="color:#e1e4e8;">		3.必败态不能转移到必败态（反证）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">经典游戏：</span></span>
<span class="line"><span style="color:#e1e4e8;">nim游戏：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：有若干堆石子，轮流取走任意一堆石子中的任意个，最后不能拿走的输</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：石子个数的异或值为0则先手必败</span></span>
<span class="line"><span style="color:#e1e4e8;">	证明1：</span></span>
<span class="line"><span style="color:#e1e4e8;">		引理：一堆数量为x的石子的SG函数值为x</span></span>
<span class="line"><span style="color:#e1e4e8;">		证明：归纳证明即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么就是公平组合游戏结论</span></span>
<span class="line"><span style="color:#e1e4e8;">	证明2：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.没有石子，即异或值为0，显然为必败态</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.异或值为0的状态不可能到异或值为0的状态，即必败态不会到必败态</span></span>
<span class="line"><span style="color:#e1e4e8;">		3.先手做了操作，假设某一堆由y变成了z，总异或值由0变成了y^z（记其最高位为k）</span></span>
<span class="line"><span style="color:#e1e4e8;">		必然存在一个数第k位为1，将其异或上y^z以后其必然变小，且回到了必败态</span></span>
<span class="line"><span style="color:#e1e4e8;">阶梯nim游戏：</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：有一根只有非负部分的数轴，每个点上有若干石子，每次可以选一个点上若干石子往原点移动一位，不能动的输</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：将奇数位上的石子数异或起来，为0则先手必胜，否则必败</span></span>
<span class="line"><span style="color:#e1e4e8;">	证明：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.终态显然满足</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.显然满足必败态不会到必败态</span></span>
<span class="line"><span style="color:#e1e4e8;">		3.先手移动了偶数位，后手相应移掉一样的数量即可；否则，类似nim游戏的构造方法</span></span>
<span class="line"><span style="color:#e1e4e8;">巴什博弈</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：多堆石子，两个人轮流从一堆物品中取物，规定每次至少取一个，最多取m个。最后取光者得胜。</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：sg[i]=i%(m+1)</span></span>
<span class="line"><span style="color:#e1e4e8;">	证明：太简单，略</span></span>
<span class="line"><span style="color:#e1e4e8;">斐波那其博弈（扩展）</span></span>
<span class="line"><span style="color:#e1e4e8;">	例题：UVA1567 A simple stone game </span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：给定n,k，表示最初时有n个石头，第一个人第一次可以取1～(n-1)个石头，后面每个人最多可以拿走前面一个人拿走的个数的k倍，不能拿的输</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：k=2时只有在n是斐波那其数时才会先手必输，剩下的不想管了，略</span></span>
<span class="line"><span style="color:#e1e4e8;">树上删边游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：每次可以删掉一棵子树，不能删的人输</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：父节点的SG等于子结点的SG+1的异或值</span></span>
<span class="line"><span style="color:#e1e4e8;">	证明：</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然各儿子互相独立，构成公平组合游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于一个儿子的情况，归纳证明即可</span></span>
<span class="line"><span style="color:#e1e4e8;">图上删边游戏</span></span>
<span class="line"><span style="color:#e1e4e8;">	内容：每次可以删掉一条边，与关键点不连通的块被删掉，不能删的输</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：将图中的任意一个偶环缩成一个新点，任意一个奇环缩成一个新点加一个新边；所有连到原先环上的边全部改为与新点相连。</span></span>
<span class="line"><span style="color:#e1e4e8;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">非有向图游戏：博弈图有环，结果可能有平局</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：P9169 [省选联考 2023] 过河卒 </span></span>
<span class="line"><span style="color:#e1e4e8;">处理胜负的办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	从必败态出发进行bfs，基于必败态和必胜态的判定方法做即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	基于这个做法，其实还可以处理步数最优性的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体而言：</span></span>
<span class="line"><span style="color:#e1e4e8;">	当前队首是必败态，那其前驱都是必胜态，将没标记过的放进队列</span></span>
<span class="line"><span style="color:#e1e4e8;">	当前队首是必胜态，将所有没标记过的前驱的出度数减1，如果其在操作后为0则将其标记为必败态，放入队列</span></span>
<span class="line"><span style="color:#e1e4e8;">处理平局的办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	显然没有被bfs遍历到的点即是平局</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体分析平局的情况：</span></span>
<span class="line"><span style="color:#e1e4e8;">		必然是在环上，而且从环出去的后继节点（如果有的话）都是必胜态，此时环上的点都是平局</span></span>
<span class="line"><span style="color:#e1e4e8;">		否则，环上的点都是有胜负态的</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">解决博弈问题的常见方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	计算SG函数：博弈图</span></span>
<span class="line"><span style="color:#e1e4e8;">	寻找SG函数的规律</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接找判定胜负的方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意分析终态，尤其注意奇偶性</span></span>
<span class="line"><span style="color:#e1e4e8;">杂题：</span></span>
<span class="line"><span style="color:#e1e4e8;">[ARC131C] Zero XOR ：</span></span>
<span class="line"><span style="color:#e1e4e8;">	显然结论题。考虑终态分析，剩余的数异或和为0。</span></span>
<span class="line"><span style="color:#e1e4e8;">	再考虑当前的异或和，结合奇偶性，假如为偶数，那后手肯定赢了，否则先手赢</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">以下讨论均基于两人轮流进行的游戏，如果不是的话，应该是套了博弈论皮的最优化问题（例如P9170）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">公平组合游戏（ICG）：</span></span>
<span class="line"><span style="color:#24292e;">	由两名玩家交替行动</span></span>
<span class="line"><span style="color:#24292e;">	在游戏进行的任意时刻,可以执行的合法行动与轮到哪位玩家无关</span></span>
<span class="line"><span style="color:#24292e;">	不能行动者输，没有平局</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">博弈图：将每个状态视为一个节点，再从每个状态向它的后继状态连边</span></span>
<span class="line"><span style="color:#24292e;">必胜态：后继状态存在必败态</span></span>
<span class="line"><span style="color:#24292e;">必败态：后继状态都是必胜态</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">有向图游戏：博弈图是有向无环图，且是公平组合游戏</span></span>
<span class="line"><span style="color:#24292e;">SG函数：</span></span>
<span class="line"><span style="color:#24292e;">	处理有向图游戏</span></span>
<span class="line"><span style="color:#24292e;">	SG函数值为0则是必败态，否则为必胜态</span></span>
<span class="line"><span style="color:#24292e;">	一个状态的SG函数值等于后继状态的SG函数值的mex</span></span>
<span class="line"><span style="color:#24292e;">	公平组合游戏：整个游戏的SG函数值等于各子游戏的SG函数值的异或</span></span>
<span class="line"><span style="color:#24292e;">证明结论正确性的方法：</span></span>
<span class="line"><span style="color:#24292e;">	SG函数证明：略</span></span>
<span class="line"><span style="color:#24292e;">	定义证明：主要分三个步骤</span></span>
<span class="line"><span style="color:#24292e;">		1.终态（必败态）满足结论</span></span>
<span class="line"><span style="color:#24292e;">		2.必胜态一定能转移到必败态（构造）</span></span>
<span class="line"><span style="color:#24292e;">		3.必败态不能转移到必败态（反证）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">经典游戏：</span></span>
<span class="line"><span style="color:#24292e;">nim游戏：</span></span>
<span class="line"><span style="color:#24292e;">	内容：有若干堆石子，轮流取走任意一堆石子中的任意个，最后不能拿走的输</span></span>
<span class="line"><span style="color:#24292e;">	结论：石子个数的异或值为0则先手必败</span></span>
<span class="line"><span style="color:#24292e;">	证明1：</span></span>
<span class="line"><span style="color:#24292e;">		引理：一堆数量为x的石子的SG函数值为x</span></span>
<span class="line"><span style="color:#24292e;">		证明：归纳证明即可</span></span>
<span class="line"><span style="color:#24292e;">		那么就是公平组合游戏结论</span></span>
<span class="line"><span style="color:#24292e;">	证明2：</span></span>
<span class="line"><span style="color:#24292e;">		1.没有石子，即异或值为0，显然为必败态</span></span>
<span class="line"><span style="color:#24292e;">		2.异或值为0的状态不可能到异或值为0的状态，即必败态不会到必败态</span></span>
<span class="line"><span style="color:#24292e;">		3.先手做了操作，假设某一堆由y变成了z，总异或值由0变成了y^z（记其最高位为k）</span></span>
<span class="line"><span style="color:#24292e;">		必然存在一个数第k位为1，将其异或上y^z以后其必然变小，且回到了必败态</span></span>
<span class="line"><span style="color:#24292e;">阶梯nim游戏：</span></span>
<span class="line"><span style="color:#24292e;">	内容：有一根只有非负部分的数轴，每个点上有若干石子，每次可以选一个点上若干石子往原点移动一位，不能动的输</span></span>
<span class="line"><span style="color:#24292e;">	结论：将奇数位上的石子数异或起来，为0则先手必胜，否则必败</span></span>
<span class="line"><span style="color:#24292e;">	证明：</span></span>
<span class="line"><span style="color:#24292e;">		1.终态显然满足</span></span>
<span class="line"><span style="color:#24292e;">		2.显然满足必败态不会到必败态</span></span>
<span class="line"><span style="color:#24292e;">		3.先手移动了偶数位，后手相应移掉一样的数量即可；否则，类似nim游戏的构造方法</span></span>
<span class="line"><span style="color:#24292e;">巴什博弈</span></span>
<span class="line"><span style="color:#24292e;">	内容：多堆石子，两个人轮流从一堆物品中取物，规定每次至少取一个，最多取m个。最后取光者得胜。</span></span>
<span class="line"><span style="color:#24292e;">	结论：sg[i]=i%(m+1)</span></span>
<span class="line"><span style="color:#24292e;">	证明：太简单，略</span></span>
<span class="line"><span style="color:#24292e;">斐波那其博弈（扩展）</span></span>
<span class="line"><span style="color:#24292e;">	例题：UVA1567 A simple stone game </span></span>
<span class="line"><span style="color:#24292e;">	内容：给定n,k，表示最初时有n个石头，第一个人第一次可以取1～(n-1)个石头，后面每个人最多可以拿走前面一个人拿走的个数的k倍，不能拿的输</span></span>
<span class="line"><span style="color:#24292e;">	结论：k=2时只有在n是斐波那其数时才会先手必输，剩下的不想管了，略</span></span>
<span class="line"><span style="color:#24292e;">树上删边游戏</span></span>
<span class="line"><span style="color:#24292e;">	内容：每次可以删掉一棵子树，不能删的人输</span></span>
<span class="line"><span style="color:#24292e;">	结论：父节点的SG等于子结点的SG+1的异或值</span></span>
<span class="line"><span style="color:#24292e;">	证明：</span></span>
<span class="line"><span style="color:#24292e;">		显然各儿子互相独立，构成公平组合游戏</span></span>
<span class="line"><span style="color:#24292e;">		对于一个儿子的情况，归纳证明即可</span></span>
<span class="line"><span style="color:#24292e;">图上删边游戏</span></span>
<span class="line"><span style="color:#24292e;">	内容：每次可以删掉一条边，与关键点不连通的块被删掉，不能删的输</span></span>
<span class="line"><span style="color:#24292e;">	结论：将图中的任意一个偶环缩成一个新点，任意一个奇环缩成一个新点加一个新边；所有连到原先环上的边全部改为与新点相连。</span></span>
<span class="line"><span style="color:#24292e;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">非有向图游戏：博弈图有环，结果可能有平局</span></span>
<span class="line"><span style="color:#24292e;">例题：P9169 [省选联考 2023] 过河卒 </span></span>
<span class="line"><span style="color:#24292e;">处理胜负的办法：</span></span>
<span class="line"><span style="color:#24292e;">	从必败态出发进行bfs，基于必败态和必胜态的判定方法做即可</span></span>
<span class="line"><span style="color:#24292e;">	基于这个做法，其实还可以处理步数最优性的问题</span></span>
<span class="line"><span style="color:#24292e;">	具体而言：</span></span>
<span class="line"><span style="color:#24292e;">	当前队首是必败态，那其前驱都是必胜态，将没标记过的放进队列</span></span>
<span class="line"><span style="color:#24292e;">	当前队首是必胜态，将所有没标记过的前驱的出度数减1，如果其在操作后为0则将其标记为必败态，放入队列</span></span>
<span class="line"><span style="color:#24292e;">处理平局的办法：</span></span>
<span class="line"><span style="color:#24292e;">	显然没有被bfs遍历到的点即是平局</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	具体分析平局的情况：</span></span>
<span class="line"><span style="color:#24292e;">		必然是在环上，而且从环出去的后继节点（如果有的话）都是必胜态，此时环上的点都是平局</span></span>
<span class="line"><span style="color:#24292e;">		否则，环上的点都是有胜负态的</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">//-----------------------------------------------------------------------------------------------------------------------------</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">解决博弈问题的常见方法：</span></span>
<span class="line"><span style="color:#24292e;">	计算SG函数：博弈图</span></span>
<span class="line"><span style="color:#24292e;">	寻找SG函数的规律</span></span>
<span class="line"><span style="color:#24292e;">	直接找判定胜负的方法：</span></span>
<span class="line"><span style="color:#24292e;">		注意分析终态，尤其注意奇偶性</span></span>
<span class="line"><span style="color:#24292e;">杂题：</span></span>
<span class="line"><span style="color:#24292e;">[ARC131C] Zero XOR ：</span></span>
<span class="line"><span style="color:#24292e;">	显然结论题。考虑终态分析，剩余的数异或和为0。</span></span>
<span class="line"><span style="color:#24292e;">	再考虑当前的异或和，结合奇偶性，假如为偶数，那后手肯定赢了，否则先手赢</span></span></code></pre></div>`,2),o=[p];function c(t,i,r,y,d,m){return n(),a("div",null,o)}const G=s(l,[["render",c]]);export{S as __pageData,G as default};
