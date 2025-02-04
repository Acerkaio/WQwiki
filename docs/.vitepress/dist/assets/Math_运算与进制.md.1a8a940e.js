import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const k=JSON.parse('{"title":"运算与进制","description":"","frontmatter":{},"headers":[],"relativePath":"Math/运算与进制.md","filePath":"Math/运算与进制.md","lastUpdated":1738591681000}'),l={name:"Math/运算与进制.md"},p=e(`<h1 id="运算与进制" tabindex="-1">运算与进制 <a class="header-anchor" href="#运算与进制" aria-label="Permalink to &quot;运算与进制&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">逻辑运算（只有01的运算）：</span></span>
<span class="line"><span style="color:#e1e4e8;">	逻辑运算是所有运算的基础，可以实现所有的运算</span></span>
<span class="line"><span style="color:#e1e4e8;">	逻辑运算的基本运算符：与，非</span></span>
<span class="line"><span style="color:#e1e4e8;">	逻辑运算的重要运算符：或，异或</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心性质：所有逻辑运算符都可由核心运算符（与，非）表达</span></span>
<span class="line"><span style="color:#e1e4e8;">	和其他高级运算的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		逻辑运算可以看作在取模2的意义下的一般整数运算</span></span>
<span class="line"><span style="color:#e1e4e8;">		拥有一般整数运算的所有性质</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体的，加/减 对应 异或，乘 对应 与</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		推广结论：异或的结果的奇偶性和加法结果的奇偶性相同</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	这是位运算的基础，分析位运算的性质通常都可以通过按位分解转换成逻辑运算的分析</span></span>
<span class="line"><span style="color:#e1e4e8;">处理位运算的常见办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	01trie：分析性质常用</span></span>
<span class="line"><span style="color:#e1e4e8;">	按位分解：分析性质或计算答案</span></span>
<span class="line"><span style="color:#e1e4e8;">		此时只需考虑01的贡献，可以利用逻辑运算的性质</span></span>
<span class="line"><span style="color:#e1e4e8;">	高维前缀和，fwt：允许状压时的常见办法</span></span>
<span class="line"><span style="color:#e1e4e8;">	线性基：</span></span>
<span class="line"><span style="color:#e1e4e8;">		1.判断一个数能否被一个集合中的数异或出来</span></span>
<span class="line"><span style="color:#e1e4e8;">		2.得到整个集合能异或出多少个数</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	二进制位互相不独立的处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		不等号：</span></span>
<span class="line"><span style="color:#e1e4e8;">			钦定前k位都取等，然后考虑k+1位不取等</span></span>
<span class="line"><span style="color:#e1e4e8;">			将不取等的情况去掉，然后继续递归</span></span>
<span class="line"><span style="color:#e1e4e8;">		加减法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			加法可以看成异或+进位，不同位之间的影响只有进位</span></span>
<span class="line"><span style="color:#e1e4e8;">			分析进位的条件，一般情况是有大小限制</span></span>
<span class="line"><span style="color:#e1e4e8;">			分类考虑是否进位，从而实现拆位考虑</span></span>
<span class="line"><span style="color:#e1e4e8;">			减法分析退位即可，是相似的</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			具体实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">				对于第k位考虑时，一种较通用办法是将所有运算都放在模2^(k+1)下考虑，这样容易刻画进位</span></span>
<span class="line"><span style="color:#e1e4e8;">				否则，需要具体问题具体分析</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">位运算的常见性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	位运算与集合的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		x&amp;y==y || x|y==x -&gt; y是x的子集</span></span>
<span class="line"><span style="color:#e1e4e8;">		ful^x -&gt; x的补集</span></span>
<span class="line"><span style="color:#e1e4e8;">	各个位运算的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		!(x&amp;y)=(!x)|(!y)</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用补集（非），与和或可以互相转化</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		xor可以被补集 和 与（或）表示出来</span></span>
<span class="line"><span style="color:#e1e4e8;">		但是，xor不能表示其他任何运算</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		综上，所有位运算只需要保留 非 与</span></span>
<span class="line"><span style="color:#e1e4e8;">		这可以用来考虑有多种位运算结合的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	位运算和高级运算的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对应关系-相似性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			加/减 对应 异或，乘 对应 与</span></span>
<span class="line"><span style="color:#e1e4e8;">			证明考虑用逻辑运算性质分析（模2意义下）</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么 加法 乘法 的运算关系可以完全和 异或 与 等价</span></span>
<span class="line"><span style="color:#e1e4e8;">			经典的：</span></span>
<span class="line"><span style="color:#e1e4e8;">				乘法相对于加法的分配律：与相对于异或的分配律</span></span>
<span class="line"><span style="color:#e1e4e8;">				加乘矩阵的结合律：异或-与矩阵的结合律</span></span>
<span class="line"><span style="color:#e1e4e8;">		异或和加法的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">			异或等价于不进位加法</span></span>
<span class="line"><span style="color:#e1e4e8;">			加法和异或转换时核心在于分析是否进位</span></span>
<span class="line"><span style="color:#e1e4e8;">		异或和加减法的不等关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">			x-y&lt;= x xor y &lt;=x+y</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">			x-y==x xor y 当且仅当y是x的子集</span></span>
<span class="line"><span style="color:#e1e4e8;">			x+y==x xor y 当且仅当y和x互补</span></span>
<span class="line"><span style="color:#e1e4e8;">	异或的常见性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		自反性，交换律（无序性），可减性</span></span>
<span class="line"><span style="color:#e1e4e8;">		一个集合的必然存在最小异或点对在值域上相邻</span></span>
<span class="line"><span style="color:#e1e4e8;">		xor变换性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			形象化的讲，是一条双向边，两两配对</span></span>
<span class="line"><span style="color:#e1e4e8;">			集合{1~(2^k-1)}中的每个元素异或上x(0&lt;=x&lt;2^k)后集合不变</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">原码和补码：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		原码就是有符号二进制数</span></span>
<span class="line"><span style="color:#e1e4e8;">		补码就是有符号二进制数在模2^k的意义下对应的非负数</span></span>
<span class="line"><span style="color:#e1e4e8;">			其中，k是根据变量存储类型决定的</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		x的补码和-x的补码的最低位相同</span></span>
<span class="line"><span style="color:#e1e4e8;">			因为相加和为0，所以自然相同</span></span>
<span class="line"><span style="color:#e1e4e8;">		非负数的补码必然最高位是0，负数的补码必然最高位是1</span></span>
<span class="line"><span style="color:#e1e4e8;">	作用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用补码，我们不用考虑减法和加法的差异，可以一律使用加法考虑问题</span></span>
<span class="line"><span style="color:#e1e4e8;">		这对于我们上述二进制加减法的分析有所裨益</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">任意进制下的规律：</span></span>
<span class="line"><span style="color:#e1e4e8;">	数的表示：</span></span>
<span class="line"><span style="color:#e1e4e8;">		x=a0*p^0+a1*p^1+a2*p^2+...</span></span>
<span class="line"><span style="color:#e1e4e8;">		其中，a0,a1,a2,...范围是[0,p-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以发现，这是一个条件更强的多项式</span></span>
<span class="line"><span style="color:#e1e4e8;">		所以数的运算可以看作由两部分组成：</span></span>
<span class="line"><span style="color:#e1e4e8;">			多项式运算（加法、卷积）</span></span>
<span class="line"><span style="color:#e1e4e8;">			保证系数范围限制的进退位</span></span>
<span class="line"><span style="color:#e1e4e8;">	加减法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对应的多项式运算是多项式加法</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何进制下，两个数相加的进位最多是1</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何进制下，两个数相减的退位最多是1</span></span>
<span class="line"><span style="color:#e1e4e8;">	乘法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对应的多项式运算是卷积</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何进制下，两个数相乘的位数（从1开始）最多x+y</span></span>
<span class="line"><span style="color:#e1e4e8;">		卷积过后，多项式系数的最大值为 (p-1)^2*(较小的数的位数）</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体实现：复杂度瓶颈在卷积，可以用NTT优化</span></span>
<span class="line"><span style="color:#e1e4e8;">	除法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对应的多项式运算是多项式除法</span></span>
<span class="line"><span style="color:#e1e4e8;">		实际实现可以模拟竖式除法</span></span>
<span class="line"><span style="color:#e1e4e8;">			竖式除法正确性可以利用反证法证明</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	利用以上分析，容易实现朴素的高精度</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	YNOI fusion tree：</span></span>
<span class="line"><span style="color:#e1e4e8;">		难点在+1，考虑到进位的条件是低位前缀都是1，所以要特别处理这种情况</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然可以从低向高建trie树，每次处理从上到下递归即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	自己想的题：</span></span>
<span class="line"><span style="color:#e1e4e8;">		全局加：a[i]+=x</span></span>
<span class="line"><span style="color:#e1e4e8;">		插入数</span></span>
<span class="line"><span style="color:#e1e4e8;">		删除数</span></span>
<span class="line"><span style="color:#e1e4e8;">		求全局异或和</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">			对于每一位分别考虑，将操作置于模意义下</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以通过记全局tag实现全局加</span></span>
<span class="line"><span style="color:#e1e4e8;">				那减完tag出现负数怎么办？利用补码考虑即可</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么查询可以列出范围，然后BIT求解即可</span></span>
<span class="line"><span style="color:#e1e4e8;">求集合最大按位与（或）点对：高维前缀和</span></span>
<span class="line"><span style="color:#e1e4e8;">求集合最大异或点对：trie树</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">联考题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	给定若干数，每个数形如若干段1和0拼起来的，</span></span>
<span class="line"><span style="color:#e1e4e8;">	操作可以将集合中的任意两个数做 与，或，异或，或是 取反</span></span>
<span class="line"><span style="color:#e1e4e8;">	问有多少个2的非负整数次幂能表示出来</span></span>
<span class="line"><span style="color:#e1e4e8;">	</span></span>
<span class="line"><span style="color:#e1e4e8;">	solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">	显然，只有与和非有用</span></span>
<span class="line"><span style="color:#e1e4e8;">	过程太难分析，直接考虑找必要条件</span></span>
<span class="line"><span style="color:#e1e4e8;">	不合法的时候，必然有两个点的覆盖的样子一样</span></span>
<span class="line"><span style="color:#e1e4e8;">	那么显然覆盖样子不同是必要的</span></span>
<span class="line"><span style="color:#e1e4e8;">	感觉也很有充分性，看看怎么构造</span></span>
<span class="line"><span style="color:#e1e4e8;">	（有难度）将没有覆盖的取反，然后将所有都取交，易证合法</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">逻辑运算（只有01的运算）：</span></span>
<span class="line"><span style="color:#24292e;">	逻辑运算是所有运算的基础，可以实现所有的运算</span></span>
<span class="line"><span style="color:#24292e;">	逻辑运算的基本运算符：与，非</span></span>
<span class="line"><span style="color:#24292e;">	逻辑运算的重要运算符：或，异或</span></span>
<span class="line"><span style="color:#24292e;">	核心性质：所有逻辑运算符都可由核心运算符（与，非）表达</span></span>
<span class="line"><span style="color:#24292e;">	和其他高级运算的关系：</span></span>
<span class="line"><span style="color:#24292e;">		逻辑运算可以看作在取模2的意义下的一般整数运算</span></span>
<span class="line"><span style="color:#24292e;">		拥有一般整数运算的所有性质</span></span>
<span class="line"><span style="color:#24292e;">		具体的，加/减 对应 异或，乘 对应 与</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		推广结论：异或的结果的奇偶性和加法结果的奇偶性相同</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	这是位运算的基础，分析位运算的性质通常都可以通过按位分解转换成逻辑运算的分析</span></span>
<span class="line"><span style="color:#24292e;">处理位运算的常见办法：</span></span>
<span class="line"><span style="color:#24292e;">	01trie：分析性质常用</span></span>
<span class="line"><span style="color:#24292e;">	按位分解：分析性质或计算答案</span></span>
<span class="line"><span style="color:#24292e;">		此时只需考虑01的贡献，可以利用逻辑运算的性质</span></span>
<span class="line"><span style="color:#24292e;">	高维前缀和，fwt：允许状压时的常见办法</span></span>
<span class="line"><span style="color:#24292e;">	线性基：</span></span>
<span class="line"><span style="color:#24292e;">		1.判断一个数能否被一个集合中的数异或出来</span></span>
<span class="line"><span style="color:#24292e;">		2.得到整个集合能异或出多少个数</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	二进制位互相不独立的处理：</span></span>
<span class="line"><span style="color:#24292e;">		不等号：</span></span>
<span class="line"><span style="color:#24292e;">			钦定前k位都取等，然后考虑k+1位不取等</span></span>
<span class="line"><span style="color:#24292e;">			将不取等的情况去掉，然后继续递归</span></span>
<span class="line"><span style="color:#24292e;">		加减法：</span></span>
<span class="line"><span style="color:#24292e;">			加法可以看成异或+进位，不同位之间的影响只有进位</span></span>
<span class="line"><span style="color:#24292e;">			分析进位的条件，一般情况是有大小限制</span></span>
<span class="line"><span style="color:#24292e;">			分类考虑是否进位，从而实现拆位考虑</span></span>
<span class="line"><span style="color:#24292e;">			减法分析退位即可，是相似的</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			具体实现：</span></span>
<span class="line"><span style="color:#24292e;">				对于第k位考虑时，一种较通用办法是将所有运算都放在模2^(k+1)下考虑，这样容易刻画进位</span></span>
<span class="line"><span style="color:#24292e;">				否则，需要具体问题具体分析</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">位运算的常见性质：</span></span>
<span class="line"><span style="color:#24292e;">	位运算与集合的关系：</span></span>
<span class="line"><span style="color:#24292e;">		x&amp;y==y || x|y==x -&gt; y是x的子集</span></span>
<span class="line"><span style="color:#24292e;">		ful^x -&gt; x的补集</span></span>
<span class="line"><span style="color:#24292e;">	各个位运算的关系：</span></span>
<span class="line"><span style="color:#24292e;">		!(x&amp;y)=(!x)|(!y)</span></span>
<span class="line"><span style="color:#24292e;">		利用补集（非），与和或可以互相转化</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		xor可以被补集 和 与（或）表示出来</span></span>
<span class="line"><span style="color:#24292e;">		但是，xor不能表示其他任何运算</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		综上，所有位运算只需要保留 非 与</span></span>
<span class="line"><span style="color:#24292e;">		这可以用来考虑有多种位运算结合的问题</span></span>
<span class="line"><span style="color:#24292e;">	位运算和高级运算的关系：</span></span>
<span class="line"><span style="color:#24292e;">		对应关系-相似性质：</span></span>
<span class="line"><span style="color:#24292e;">			加/减 对应 异或，乘 对应 与</span></span>
<span class="line"><span style="color:#24292e;">			证明考虑用逻辑运算性质分析（模2意义下）</span></span>
<span class="line"><span style="color:#24292e;">			那么 加法 乘法 的运算关系可以完全和 异或 与 等价</span></span>
<span class="line"><span style="color:#24292e;">			经典的：</span></span>
<span class="line"><span style="color:#24292e;">				乘法相对于加法的分配律：与相对于异或的分配律</span></span>
<span class="line"><span style="color:#24292e;">				加乘矩阵的结合律：异或-与矩阵的结合律</span></span>
<span class="line"><span style="color:#24292e;">		异或和加法的关系：</span></span>
<span class="line"><span style="color:#24292e;">			异或等价于不进位加法</span></span>
<span class="line"><span style="color:#24292e;">			加法和异或转换时核心在于分析是否进位</span></span>
<span class="line"><span style="color:#24292e;">		异或和加减法的不等关系：</span></span>
<span class="line"><span style="color:#24292e;">			x-y&lt;= x xor y &lt;=x+y</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">			x-y==x xor y 当且仅当y是x的子集</span></span>
<span class="line"><span style="color:#24292e;">			x+y==x xor y 当且仅当y和x互补</span></span>
<span class="line"><span style="color:#24292e;">	异或的常见性质：</span></span>
<span class="line"><span style="color:#24292e;">		自反性，交换律（无序性），可减性</span></span>
<span class="line"><span style="color:#24292e;">		一个集合的必然存在最小异或点对在值域上相邻</span></span>
<span class="line"><span style="color:#24292e;">		xor变换性质：</span></span>
<span class="line"><span style="color:#24292e;">			形象化的讲，是一条双向边，两两配对</span></span>
<span class="line"><span style="color:#24292e;">			集合{1~(2^k-1)}中的每个元素异或上x(0&lt;=x&lt;2^k)后集合不变</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">原码和补码：</span></span>
<span class="line"><span style="color:#24292e;">	定义：</span></span>
<span class="line"><span style="color:#24292e;">		原码就是有符号二进制数</span></span>
<span class="line"><span style="color:#24292e;">		补码就是有符号二进制数在模2^k的意义下对应的非负数</span></span>
<span class="line"><span style="color:#24292e;">			其中，k是根据变量存储类型决定的</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		x的补码和-x的补码的最低位相同</span></span>
<span class="line"><span style="color:#24292e;">			因为相加和为0，所以自然相同</span></span>
<span class="line"><span style="color:#24292e;">		非负数的补码必然最高位是0，负数的补码必然最高位是1</span></span>
<span class="line"><span style="color:#24292e;">	作用：</span></span>
<span class="line"><span style="color:#24292e;">		利用补码，我们不用考虑减法和加法的差异，可以一律使用加法考虑问题</span></span>
<span class="line"><span style="color:#24292e;">		这对于我们上述二进制加减法的分析有所裨益</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">任意进制下的规律：</span></span>
<span class="line"><span style="color:#24292e;">	数的表示：</span></span>
<span class="line"><span style="color:#24292e;">		x=a0*p^0+a1*p^1+a2*p^2+...</span></span>
<span class="line"><span style="color:#24292e;">		其中，a0,a1,a2,...范围是[0,p-1]</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		可以发现，这是一个条件更强的多项式</span></span>
<span class="line"><span style="color:#24292e;">		所以数的运算可以看作由两部分组成：</span></span>
<span class="line"><span style="color:#24292e;">			多项式运算（加法、卷积）</span></span>
<span class="line"><span style="color:#24292e;">			保证系数范围限制的进退位</span></span>
<span class="line"><span style="color:#24292e;">	加减法：</span></span>
<span class="line"><span style="color:#24292e;">		对应的多项式运算是多项式加法</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		任何进制下，两个数相加的进位最多是1</span></span>
<span class="line"><span style="color:#24292e;">		任何进制下，两个数相减的退位最多是1</span></span>
<span class="line"><span style="color:#24292e;">	乘法：</span></span>
<span class="line"><span style="color:#24292e;">		对应的多项式运算是卷积</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		任何进制下，两个数相乘的位数（从1开始）最多x+y</span></span>
<span class="line"><span style="color:#24292e;">		卷积过后，多项式系数的最大值为 (p-1)^2*(较小的数的位数）</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		具体实现：复杂度瓶颈在卷积，可以用NTT优化</span></span>
<span class="line"><span style="color:#24292e;">	除法：</span></span>
<span class="line"><span style="color:#24292e;">		对应的多项式运算是多项式除法</span></span>
<span class="line"><span style="color:#24292e;">		实际实现可以模拟竖式除法</span></span>
<span class="line"><span style="color:#24292e;">			竖式除法正确性可以利用反证法证明</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	利用以上分析，容易实现朴素的高精度</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">	YNOI fusion tree：</span></span>
<span class="line"><span style="color:#24292e;">		难点在+1，考虑到进位的条件是低位前缀都是1，所以要特别处理这种情况</span></span>
<span class="line"><span style="color:#24292e;">		显然可以从低向高建trie树，每次处理从上到下递归即可</span></span>
<span class="line"><span style="color:#24292e;">	自己想的题：</span></span>
<span class="line"><span style="color:#24292e;">		全局加：a[i]+=x</span></span>
<span class="line"><span style="color:#24292e;">		插入数</span></span>
<span class="line"><span style="color:#24292e;">		删除数</span></span>
<span class="line"><span style="color:#24292e;">		求全局异或和</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		solution:</span></span>
<span class="line"><span style="color:#24292e;">			对于每一位分别考虑，将操作置于模意义下</span></span>
<span class="line"><span style="color:#24292e;">			可以通过记全局tag实现全局加</span></span>
<span class="line"><span style="color:#24292e;">				那减完tag出现负数怎么办？利用补码考虑即可</span></span>
<span class="line"><span style="color:#24292e;">			那么查询可以列出范围，然后BIT求解即可</span></span>
<span class="line"><span style="color:#24292e;">求集合最大按位与（或）点对：高维前缀和</span></span>
<span class="line"><span style="color:#24292e;">求集合最大异或点对：trie树</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">联考题：</span></span>
<span class="line"><span style="color:#24292e;">	给定若干数，每个数形如若干段1和0拼起来的，</span></span>
<span class="line"><span style="color:#24292e;">	操作可以将集合中的任意两个数做 与，或，异或，或是 取反</span></span>
<span class="line"><span style="color:#24292e;">	问有多少个2的非负整数次幂能表示出来</span></span>
<span class="line"><span style="color:#24292e;">	</span></span>
<span class="line"><span style="color:#24292e;">	solution:</span></span>
<span class="line"><span style="color:#24292e;">	显然，只有与和非有用</span></span>
<span class="line"><span style="color:#24292e;">	过程太难分析，直接考虑找必要条件</span></span>
<span class="line"><span style="color:#24292e;">	不合法的时候，必然有两个点的覆盖的样子一样</span></span>
<span class="line"><span style="color:#24292e;">	那么显然覆盖样子不同是必要的</span></span>
<span class="line"><span style="color:#24292e;">	感觉也很有充分性，看看怎么构造</span></span>
<span class="line"><span style="color:#24292e;">	（有难度）将没有覆盖的取反，然后将所有都取交，易证合法</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,x,_){return n(),a("div",null,t)}const h=s(l,[["render",o]]);export{k as __pageData,h as default};
