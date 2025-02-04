import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e7363dcb.js";const m=JSON.parse('{"title":"number theory","description":"","frontmatter":{},"headers":[],"relativePath":"Math/number_theory.md","filePath":"Math/number_theory.md","lastUpdated":1738591681000}'),p={name:"Math/number_theory.md"},e=l(`<h1 id="number-theory" tabindex="-1">number theory <a class="header-anchor" href="#number-theory" aria-label="Permalink to &quot;number theory&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">经典结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">	A的质因数个数（相同都算）有log2(A)个 （可以取满）</span></span>
<span class="line"><span style="color:#e1e4e8;">		取满条件：是2的整数次幂</span></span>
<span class="line"><span style="color:#e1e4e8;">	A的不同质因数个数 有O(log(A))个，但实际上远远达不到</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如，1e16的不同质因数只有13个</span></span>
<span class="line"><span style="color:#e1e4e8;">	A的质因数中，大于sqrt(A)的至多一个</span></span>
<span class="line"><span style="color:#e1e4e8;">		这常常用来处理质因数的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">	A的因数有O(sqrt(A))个，但实际上远远达不到</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如，1e18的因数个数大概才1e5</span></span>
<span class="line"><span style="color:#e1e4e8;">	长为n的环上，从一个点开始每次走k步，周期是n/gcd(n,k)，不同的子环个数是gcd(n,k)</span></span>
<span class="line"><span style="color:#e1e4e8;">		将节点从[0,n-1]标号，则所有模gcd(n,k)相同的都在同一个环上，走一个循环的总步长是lcm(n,k)</span></span>
<span class="line"><span style="color:#e1e4e8;">	若干数相乘的约数个数等于 每个数任取一个因数且两两取的因数互质的合法组数</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof:</span></span>
<span class="line"><span style="color:#e1e4e8;">			先考虑只有两个数a,b的情况，对于一个质因数p，假设a最多含有x个，b最多有y个</span></span>
<span class="line"><span style="color:#e1e4e8;">			两个数的约数的组数为(x+1)*(y+1)=xy+x+y+1，而合法的是x+y+1，恰满足互质</span></span>
<span class="line"><span style="color:#e1e4e8;">			归纳证明即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">			P3327 [SDOI2015] 约数个数和 </span></span>
<span class="line"><span style="color:#e1e4e8;">			[ARC182C] Sum of Number of Divisors of Product </span></span>
<span class="line"><span style="color:#e1e4e8;">	给定多项式组A[0~n]，其中A[i]表示最高次数为i的任意一个多项式，那么：</span></span>
<span class="line"><span style="color:#e1e4e8;">		任何一个n次多项式都可以被表示成a[0]*A[0]+a[1]*A[1]+...+a[n]*A[n]的形式</span></span>
<span class="line"><span style="color:#e1e4e8;">		两者是一一对应的</span></span>
<span class="line"><span style="color:#e1e4e8;">		一些应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以通过对多项式进行赋特殊值，从而得到系数a的一些性质（形如加和的东西）</span></span>
<span class="line"><span style="color:#e1e4e8;">				特别的，在A[i]都是同一个多项式（二项式定理形式）的时候，可以得到很多关于二项式系数的结论</span></span>
<span class="line"><span style="color:#e1e4e8;">					进一步的，可以得到许多有关同级组合数求和的性质</span></span>
<span class="line"><span style="color:#e1e4e8;">			p进制分解（A[i]=p^i）</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">求逆元的方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	在线：</span></span>
<span class="line"><span style="color:#e1e4e8;">		模数是质数：费马小定理，exgcd</span></span>
<span class="line"><span style="color:#e1e4e8;">		一般模数：exgcd</span></span>
<span class="line"><span style="color:#e1e4e8;">	离线：</span></span>
<span class="line"><span style="color:#e1e4e8;">		线性求逆元</span></span>
<span class="line"><span style="color:#e1e4e8;">求组合数的方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	模数很大：</span></span>
<span class="line"><span style="color:#e1e4e8;">		上下都不大：线性预处理阶乘及其逆元</span></span>
<span class="line"><span style="color:#e1e4e8;">		上面不大，下面很大：根据定义暴力求</span></span>
<span class="line"><span style="color:#e1e4e8;">	模数不大：lucas定理+线性预处理</span></span>
<span class="line"><span style="color:#e1e4e8;">	模数不定时要分类讨论</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">gcd常见处理方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		与min的相似性-&gt;可加性，单调性</span></span>
<span class="line"><span style="color:#e1e4e8;">		gcd(a,b)=gcd(a-b,b) -&gt; gcd(a,b) &lt;= |a-b|</span></span>
<span class="line"><span style="color:#e1e4e8;">		gcd(a,b)=gcd(a%b,b)</span></span>
<span class="line"><span style="color:#e1e4e8;">		logn结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">			结论1：辗转相除法求gcd复杂度log</span></span>
<span class="line"><span style="color:#e1e4e8;">			结论2：连续gcd本质不同的值只有log个</span></span>
<span class="line"><span style="color:#e1e4e8;">			结论3：求连续gcd的复杂度是log而非log^2</span></span>
<span class="line"><span style="color:#e1e4e8;">				例如：st表预处理gcd，求连续gcd</span></span>
<span class="line"><span style="color:#e1e4e8;">		值一般挺小（状态数很小）</span></span>
<span class="line"><span style="color:#e1e4e8;">	转化条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">		质因数分解</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义法：枚举gcd，考虑如何产生贡献</span></span>
<span class="line"><span style="color:#e1e4e8;">			有时可以从必要性出发，只取某个数的因数来作为gcd</span></span>
<span class="line"><span style="color:#e1e4e8;">		莫比乌斯反演，欧拉反演：解决gcd=k的限制</span></span>
<span class="line"><span style="color:#e1e4e8;">lcm常见处理方法：</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		与max的相似性</span></span>
<span class="line"><span style="color:#e1e4e8;">		值一般挺大</span></span>
<span class="line"><span style="color:#e1e4e8;">	转化条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">		质因数分解：可能结合状压</span></span>
<span class="line"><span style="color:#e1e4e8;">		转化为gcd：枚举gcd，考虑其倍数</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义法：枚举lcm</span></span>
<span class="line"><span style="color:#e1e4e8;">			有时可以从必要性出发，lcm必然是倍数</span></span>
<span class="line"><span style="color:#e1e4e8;">整除（约数，因数）条件的处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">	O(√n)枚举因数</span></span>
<span class="line"><span style="color:#e1e4e8;">	调和级数</span></span>
<span class="line"><span style="color:#e1e4e8;">	高维前缀和</span></span>
<span class="line"><span style="color:#e1e4e8;">处理除法结果：</span></span>
<span class="line"><span style="color:#e1e4e8;">	调和级数</span></span>
<span class="line"><span style="color:#e1e4e8;">	整除分块</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">刷题：</span></span>
<span class="line"><span style="color:#e1e4e8;">UVA12716：打表找结论+调和级数处理整除</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1513D：完全图MST，发现每次是区间连起来，直接模拟kruskal，然后结合st表找合并的边界；</span></span>
<span class="line"><span style="color:#e1e4e8;">CF632D：利用定义法，但注意并不需要真的枚举lcm，只需要结合调和级数实现即可</span></span>
<span class="line"><span style="color:#e1e4e8;">P6217：处理gcd和二元lcm的一般性思路就是质因数分解，这里可以用主席树或离线扫描实现</span></span>
<span class="line"><span style="color:#e1e4e8;">	PS：上树以后就成了清澄的一道题</span></span>
<span class="line"><span style="color:#e1e4e8;">P5502：</span></span>
<span class="line"><span style="color:#e1e4e8;">	利用gcd经典结论，有两种做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		st表预处理gcd，然后结合二分实现分段处理，log^3</span></span>
<span class="line"><span style="color:#e1e4e8;">		单调栈维护分段，每次新加数，就将gcd相同的段合并，log</span></span>
<span class="line"><span style="color:#e1e4e8;">P1306：利用斐波那契数列经典结论，结合辗转相除法可发现结论</span></span>
<span class="line"><span style="color:#e1e4e8;">P8670：莫反/欧拉反演/容斥</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC191F：结合gcd与min的相似性，能删完的结果必然是小于a序列最小值的。然后只需要满足能用若干数的gcd表示出来即可，用定义法结合必要性剪枝，然后判一下等不等于实际gcd</span></span>
<span class="line"><span style="color:#e1e4e8;">ARC023D：与P5502完全一样</span></span>
<span class="line"><span style="color:#e1e4e8;">P2568：与P8670相似</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1493D：O(logn)分解质因数后用DS维护一下即可</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1762D：抽象交互，非常难想。考虑到gcd(x,y)&lt;=min(x,y)，若不取等，就可以判定x,y都不是0。但x,y并不好知道。但假如让其和gcd(x,z)比较大小，发现即可判定x,y,z中的一个不为0，然后不断缩小集合即可。</span></span>
<span class="line"><span style="color:#e1e4e8;">P4108：先根据gcd的logn结论，可以分成若干段。然后用分块维护一下即可</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1973F：定义法加上必要性剪枝，枚举gcd。发现不交换和交换的条件都是整除条件，因为此题值域大，所以只能SOSDP，维护一下对于某对约数来说，合法的能有多少对(a[i],b[i])（用于判定正确性），然后维护一下代价和。对于询问，可以离线也可以在线，都是结合二分。</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1986G：首先可以发现i和p[i]可以约分，然后转化成两个整除条件。显然要用SOSDP。注意到是不完全调和，只能枚举因数，需要预处理一下。但是nlogn的规模接近5e6，hash_table时空常数会接受不了，应该要想办法从二维降成一维。考虑枚举其中一维，开个桶动态计算另一维的限制即可。</span></span>
<span class="line"><span style="color:#e1e4e8;">此题的难点在于弄清楚不完全调和的处理办法，以及如何谨慎地枚举来保证复杂度。如果实现不仔细，很容易变成枚举倍数。这需要我们多去尝试怎样枚举。</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC349F,CF449D,P6442：直接质因数分解，1e16以内只有13个不同的质因数，然后就可以状压了。又发现数的位置不影响答案，而且有用的本质不同的数只有2^13个，所以直接暴力dp即可。</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1166E：挺不错的思维题。直接做不太好做，考虑找结论。从必要性出发，要让一个集合和先前的集合产生矛盾，必然利用大小关系。考虑两个不交的集合，显然会有矛盾，这可以用lcm的max性质证明。考虑其充分性，直接用质数构造即可。（自己没有看出结论，看了题解）</span></span>
<span class="line"><span style="color:#e1e4e8;">P8207：最小公倍树，显然得转化成枚举gcd判定，根据最优性加连通性的原则，直接取最小的倍数和其他的倍数连起来，然后就行了。</span></span>
<span class="line"><span style="color:#e1e4e8;">原创题：最大公约树</span></span>
<span class="line"><span style="color:#e1e4e8;">	V=[L,R],E={(i,j,gcd(i,j))|L&lt;=i,j&lt;=R}，求最大生成树边权和</span></span>
<span class="line"><span style="color:#e1e4e8;">	lim:L,R&lt;=1e18,R-L&lt;=1e5</span></span>
<span class="line"><span style="color:#e1e4e8;">	solution：从大到小枚举gcd，再枚举其倍数，遇到没有连通的就连起来，并ans+=gcd</span></span>
<span class="line"><span style="color:#e1e4e8;">			注意gcd的范围，是[1,R-L+1]，因为如果要有贡献，就必须得有至少两个点在[L,R]内</span></span>
<span class="line"><span style="color:#e1e4e8;">			时间复杂度O(nlog^2(n))</span></span>
<span class="line"><span style="color:#e1e4e8;">P1072：可以直接必要性出发，枚举lcm的因数，然后判定。质因数分解也是可以的，先分解lcm的质因数，然后用之去分解其他的几个数，考虑一下上下界即可。</span></span>
<span class="line"><span style="color:#e1e4e8;">CF1712E2：因为lcm的增长比较快，所以正反转换一下，把性质突出一下。那么有一个松的上界，lcm&lt;3*k，分类一下：lcm=k显然可以，lcm=2*k就要i+j&gt;k。第一个好做，第二个可以双指针。具体实现用扫描线即可。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">crt相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	引理：若x整除y，则 r mod x = r mod y mod x</span></span>
<span class="line"><span style="color:#e1e4e8;">	crt重要结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		模数两两互质的线性同余方程组必然有解</span></span>
<span class="line"><span style="color:#e1e4e8;">		通常，模数都是形如p^k的形式，其中p是质数</span></span>
<span class="line"><span style="color:#e1e4e8;">	一般性模数的推论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		假设方程形如x mod b[i]=a[i]，t(x,y)表示最大的k使y^k整除x</span></span>
<span class="line"><span style="color:#e1e4e8;">		方程有解当且仅当对于每个质数p，任意两个方程满足</span></span>
<span class="line"><span style="color:#e1e4e8;">			a[i] mod p^t(b[j],p) = a[j] mod p^t(b[j],p)</span></span>
<span class="line"><span style="color:#e1e4e8;">			其中,t(b[i],p)&gt;=t(b[j],p)</span></span>
<span class="line"><span style="color:#e1e4e8;">		本质上就是模数分解质因数后，可以对于每个质数p，开一个方程，模数是t(lcm,p)，然后用crt</span></span>
<span class="line"><span style="color:#e1e4e8;">	总结：</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理线性同余方程组有两种办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		分解质因数后用crt</span></span>
<span class="line"><span style="color:#e1e4e8;">		直接使用excrt（具体实现常用）</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC371G：很不错的一道题</span></span>
<span class="line"><span style="color:#e1e4e8;">	首先问题会转化成每次添加一个同余方程，考虑整个方程组是否有解</span></span>
<span class="line"><span style="color:#e1e4e8;">	直接使用excrt会因为模数太大炸掉</span></span>
<span class="line"><span style="color:#e1e4e8;">	用crt的方法，需要模数分解质因数，然后形成了若干同余方程组，在枚举跳的步数时判定即可，直接实现是可以的。</span></span>
<span class="line"><span style="color:#e1e4e8;">	进一步的，我们考虑如何表示出通解的形式，其实就是将我们之前得到的若干限制方程做crt即可表示通解，复杂度更优</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意，我们在考虑通解时，只会考虑小于环长的情况，不考虑取模，因为合并完限制后的限制方程的模数是当前环长的因数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">离散对数问题：</span></span>
<span class="line"><span style="color:#e1e4e8;">	阶：</span></span>
<span class="line"><span style="color:#e1e4e8;">	 	定义：使x^k mod p =1 的最小的k</span></span>
<span class="line"><span style="color:#e1e4e8;">		存在的充要条件：x和p互质</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			若x^k mod p=1，则x的阶整除k</span></span>
<span class="line"><span style="color:#e1e4e8;">				x的阶整除phi[p]</span></span>
<span class="line"><span style="color:#e1e4e8;">		求解：</span></span>
<span class="line"><span style="color:#e1e4e8;">			BSGS：单次sqrt(p)</span></span>
<span class="line"><span style="color:#e1e4e8;">			试除法：单次(sqrt(p)+log^2(p))，可以预处理phi</span></span>
<span class="line"><span style="color:#e1e4e8;">	原根：</span></span>
<span class="line"><span style="color:#e1e4e8;">		定义：x的阶=phi[p]，则x是模p的原根</span></span>
<span class="line"><span style="color:#e1e4e8;">		存在的条件：模数为2,4,p^k,2*p^k</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">			任意一个数都能被唯一表示成原根的若干次方</span></span>
<span class="line"><span style="color:#e1e4e8;">			以此处理指数问题更方便</span></span>
<span class="line"><span style="color:#e1e4e8;">	阶与原根的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		阶(x)=phi[p]/gcd(phi[p],log(x))</span></span>
<span class="line"><span style="color:#e1e4e8;">题：</span></span>
<span class="line"><span style="color:#e1e4e8;">ABC335G：</span></span>
<span class="line"><span style="color:#e1e4e8;">	用原根表示以后，条件等价与log1=klog2 mod (p-1)，即gcd(log2,p-1)整除log1		</span></span>
<span class="line"><span style="color:#e1e4e8;">	但这里不能用bsgs，太慢了，考虑将其换成阶</span></span>
<span class="line"><span style="color:#e1e4e8;">	gcd(log2,p-1)好表示，而log1其实也可以用gcd(log1,p-1)替换</span></span>
<span class="line"><span style="color:#e1e4e8;">	那么就转化成了对因数的考虑，显然可以预处理出要用的因数，复杂度O(能过)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">扩展欧拉定理相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	递归处理幂次</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本原理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		基于结论：for all 1&lt;a&lt;p,there exist: a^phi[p]&gt;=p</span></span>
<span class="line"><span style="color:#e1e4e8;">		证明可以分奇偶讨论放缩</span></span>
<span class="line"><span style="color:#e1e4e8;">		也就是说，在非平凡情况下，只要幂次&gt;=phi[p]，那么整个值必然&gt;=p</span></span>
<span class="line"><span style="color:#e1e4e8;">		这将成为我们判断幂次是否需要加上phi[p]的依据</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">		Node solve(int l,int r,int p){</span></span>
<span class="line"><span style="color:#e1e4e8;">			if(l&gt;r) return mk(1,0);</span></span>
<span class="line"><span style="color:#e1e4e8;">			ll x=t.ask(l);</span></span>
<span class="line"><span style="color:#e1e4e8;">			bool tg=(x&gt;=p);</span></span>
<span class="line"><span style="color:#e1e4e8;">			x%=p;</span></span>
<span class="line"><span style="color:#e1e4e8;">			if(x&lt;=1) return mk(x,tg);</span></span>
<span class="line"><span style="color:#e1e4e8;">			Node dd=solve(l+1,r,phi[p]);</span></span>
<span class="line"><span style="color:#e1e4e8;">			ll y=dd.fi+dd.se*phi[p],res=1;</span></span>
<span class="line"><span style="color:#e1e4e8;">			tg|=dd.se;</span></span>
<span class="line"><span style="color:#e1e4e8;">			for(;y;y&gt;&gt;=1){</span></span>
<span class="line"><span style="color:#e1e4e8;">				if(y&amp;1){</span></span>
<span class="line"><span style="color:#e1e4e8;">					res=res*x;</span></span>
<span class="line"><span style="color:#e1e4e8;">					if(res&gt;=p) tg=1,res%=p;</span></span>
<span class="line"><span style="color:#e1e4e8;">				}</span></span>
<span class="line"><span style="color:#e1e4e8;">				x=x*x;</span></span>
<span class="line"><span style="color:#e1e4e8;">				if(x&gt;=p) tg=1,x%=p;</span></span>
<span class="line"><span style="color:#e1e4e8;">			}</span></span>
<span class="line"><span style="color:#e1e4e8;">			return mk(res,tg);</span></span>
<span class="line"><span style="color:#e1e4e8;">		}</span></span>
<span class="line"><span style="color:#e1e4e8;">题：</span></span>
<span class="line"><span style="color:#e1e4e8;">P4139 上帝与集合的正确用法：比较水</span></span>
<span class="line"><span style="color:#e1e4e8;">CF906D Power Tower：比较完整的例题</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">经典结论：</span></span>
<span class="line"><span style="color:#24292e;">	A的质因数个数（相同都算）有log2(A)个 （可以取满）</span></span>
<span class="line"><span style="color:#24292e;">		取满条件：是2的整数次幂</span></span>
<span class="line"><span style="color:#24292e;">	A的不同质因数个数 有O(log(A))个，但实际上远远达不到</span></span>
<span class="line"><span style="color:#24292e;">		例如，1e16的不同质因数只有13个</span></span>
<span class="line"><span style="color:#24292e;">	A的质因数中，大于sqrt(A)的至多一个</span></span>
<span class="line"><span style="color:#24292e;">		这常常用来处理质因数的问题</span></span>
<span class="line"><span style="color:#24292e;">	A的因数有O(sqrt(A))个，但实际上远远达不到</span></span>
<span class="line"><span style="color:#24292e;">		例如，1e18的因数个数大概才1e5</span></span>
<span class="line"><span style="color:#24292e;">	长为n的环上，从一个点开始每次走k步，周期是n/gcd(n,k)，不同的子环个数是gcd(n,k)</span></span>
<span class="line"><span style="color:#24292e;">		将节点从[0,n-1]标号，则所有模gcd(n,k)相同的都在同一个环上，走一个循环的总步长是lcm(n,k)</span></span>
<span class="line"><span style="color:#24292e;">	若干数相乘的约数个数等于 每个数任取一个因数且两两取的因数互质的合法组数</span></span>
<span class="line"><span style="color:#24292e;">		proof:</span></span>
<span class="line"><span style="color:#24292e;">			先考虑只有两个数a,b的情况，对于一个质因数p，假设a最多含有x个，b最多有y个</span></span>
<span class="line"><span style="color:#24292e;">			两个数的约数的组数为(x+1)*(y+1)=xy+x+y+1，而合法的是x+y+1，恰满足互质</span></span>
<span class="line"><span style="color:#24292e;">			归纳证明即可</span></span>
<span class="line"><span style="color:#24292e;">		例题：</span></span>
<span class="line"><span style="color:#24292e;">			P3327 [SDOI2015] 约数个数和 </span></span>
<span class="line"><span style="color:#24292e;">			[ARC182C] Sum of Number of Divisors of Product </span></span>
<span class="line"><span style="color:#24292e;">	给定多项式组A[0~n]，其中A[i]表示最高次数为i的任意一个多项式，那么：</span></span>
<span class="line"><span style="color:#24292e;">		任何一个n次多项式都可以被表示成a[0]*A[0]+a[1]*A[1]+...+a[n]*A[n]的形式</span></span>
<span class="line"><span style="color:#24292e;">		两者是一一对应的</span></span>
<span class="line"><span style="color:#24292e;">		一些应用：</span></span>
<span class="line"><span style="color:#24292e;">			可以通过对多项式进行赋特殊值，从而得到系数a的一些性质（形如加和的东西）</span></span>
<span class="line"><span style="color:#24292e;">				特别的，在A[i]都是同一个多项式（二项式定理形式）的时候，可以得到很多关于二项式系数的结论</span></span>
<span class="line"><span style="color:#24292e;">					进一步的，可以得到许多有关同级组合数求和的性质</span></span>
<span class="line"><span style="color:#24292e;">			p进制分解（A[i]=p^i）</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">求逆元的方法：</span></span>
<span class="line"><span style="color:#24292e;">	在线：</span></span>
<span class="line"><span style="color:#24292e;">		模数是质数：费马小定理，exgcd</span></span>
<span class="line"><span style="color:#24292e;">		一般模数：exgcd</span></span>
<span class="line"><span style="color:#24292e;">	离线：</span></span>
<span class="line"><span style="color:#24292e;">		线性求逆元</span></span>
<span class="line"><span style="color:#24292e;">求组合数的方法：</span></span>
<span class="line"><span style="color:#24292e;">	模数很大：</span></span>
<span class="line"><span style="color:#24292e;">		上下都不大：线性预处理阶乘及其逆元</span></span>
<span class="line"><span style="color:#24292e;">		上面不大，下面很大：根据定义暴力求</span></span>
<span class="line"><span style="color:#24292e;">	模数不大：lucas定理+线性预处理</span></span>
<span class="line"><span style="color:#24292e;">	模数不定时要分类讨论</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">gcd常见处理方法：</span></span>
<span class="line"><span style="color:#24292e;">	常见性质：</span></span>
<span class="line"><span style="color:#24292e;">		与min的相似性-&gt;可加性，单调性</span></span>
<span class="line"><span style="color:#24292e;">		gcd(a,b)=gcd(a-b,b) -&gt; gcd(a,b) &lt;= |a-b|</span></span>
<span class="line"><span style="color:#24292e;">		gcd(a,b)=gcd(a%b,b)</span></span>
<span class="line"><span style="color:#24292e;">		logn结论：</span></span>
<span class="line"><span style="color:#24292e;">			结论1：辗转相除法求gcd复杂度log</span></span>
<span class="line"><span style="color:#24292e;">			结论2：连续gcd本质不同的值只有log个</span></span>
<span class="line"><span style="color:#24292e;">			结论3：求连续gcd的复杂度是log而非log^2</span></span>
<span class="line"><span style="color:#24292e;">				例如：st表预处理gcd，求连续gcd</span></span>
<span class="line"><span style="color:#24292e;">		值一般挺小（状态数很小）</span></span>
<span class="line"><span style="color:#24292e;">	转化条件：</span></span>
<span class="line"><span style="color:#24292e;">		质因数分解</span></span>
<span class="line"><span style="color:#24292e;">		定义法：枚举gcd，考虑如何产生贡献</span></span>
<span class="line"><span style="color:#24292e;">			有时可以从必要性出发，只取某个数的因数来作为gcd</span></span>
<span class="line"><span style="color:#24292e;">		莫比乌斯反演，欧拉反演：解决gcd=k的限制</span></span>
<span class="line"><span style="color:#24292e;">lcm常见处理方法：</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		与max的相似性</span></span>
<span class="line"><span style="color:#24292e;">		值一般挺大</span></span>
<span class="line"><span style="color:#24292e;">	转化条件：</span></span>
<span class="line"><span style="color:#24292e;">		质因数分解：可能结合状压</span></span>
<span class="line"><span style="color:#24292e;">		转化为gcd：枚举gcd，考虑其倍数</span></span>
<span class="line"><span style="color:#24292e;">		定义法：枚举lcm</span></span>
<span class="line"><span style="color:#24292e;">			有时可以从必要性出发，lcm必然是倍数</span></span>
<span class="line"><span style="color:#24292e;">整除（约数，因数）条件的处理：</span></span>
<span class="line"><span style="color:#24292e;">	O(√n)枚举因数</span></span>
<span class="line"><span style="color:#24292e;">	调和级数</span></span>
<span class="line"><span style="color:#24292e;">	高维前缀和</span></span>
<span class="line"><span style="color:#24292e;">处理除法结果：</span></span>
<span class="line"><span style="color:#24292e;">	调和级数</span></span>
<span class="line"><span style="color:#24292e;">	整除分块</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">刷题：</span></span>
<span class="line"><span style="color:#24292e;">UVA12716：打表找结论+调和级数处理整除</span></span>
<span class="line"><span style="color:#24292e;">CF1513D：完全图MST，发现每次是区间连起来，直接模拟kruskal，然后结合st表找合并的边界；</span></span>
<span class="line"><span style="color:#24292e;">CF632D：利用定义法，但注意并不需要真的枚举lcm，只需要结合调和级数实现即可</span></span>
<span class="line"><span style="color:#24292e;">P6217：处理gcd和二元lcm的一般性思路就是质因数分解，这里可以用主席树或离线扫描实现</span></span>
<span class="line"><span style="color:#24292e;">	PS：上树以后就成了清澄的一道题</span></span>
<span class="line"><span style="color:#24292e;">P5502：</span></span>
<span class="line"><span style="color:#24292e;">	利用gcd经典结论，有两种做法：</span></span>
<span class="line"><span style="color:#24292e;">		st表预处理gcd，然后结合二分实现分段处理，log^3</span></span>
<span class="line"><span style="color:#24292e;">		单调栈维护分段，每次新加数，就将gcd相同的段合并，log</span></span>
<span class="line"><span style="color:#24292e;">P1306：利用斐波那契数列经典结论，结合辗转相除法可发现结论</span></span>
<span class="line"><span style="color:#24292e;">P8670：莫反/欧拉反演/容斥</span></span>
<span class="line"><span style="color:#24292e;">ABC191F：结合gcd与min的相似性，能删完的结果必然是小于a序列最小值的。然后只需要满足能用若干数的gcd表示出来即可，用定义法结合必要性剪枝，然后判一下等不等于实际gcd</span></span>
<span class="line"><span style="color:#24292e;">ARC023D：与P5502完全一样</span></span>
<span class="line"><span style="color:#24292e;">P2568：与P8670相似</span></span>
<span class="line"><span style="color:#24292e;">CF1493D：O(logn)分解质因数后用DS维护一下即可</span></span>
<span class="line"><span style="color:#24292e;">CF1762D：抽象交互，非常难想。考虑到gcd(x,y)&lt;=min(x,y)，若不取等，就可以判定x,y都不是0。但x,y并不好知道。但假如让其和gcd(x,z)比较大小，发现即可判定x,y,z中的一个不为0，然后不断缩小集合即可。</span></span>
<span class="line"><span style="color:#24292e;">P4108：先根据gcd的logn结论，可以分成若干段。然后用分块维护一下即可</span></span>
<span class="line"><span style="color:#24292e;">CF1973F：定义法加上必要性剪枝，枚举gcd。发现不交换和交换的条件都是整除条件，因为此题值域大，所以只能SOSDP，维护一下对于某对约数来说，合法的能有多少对(a[i],b[i])（用于判定正确性），然后维护一下代价和。对于询问，可以离线也可以在线，都是结合二分。</span></span>
<span class="line"><span style="color:#24292e;">CF1986G：首先可以发现i和p[i]可以约分，然后转化成两个整除条件。显然要用SOSDP。注意到是不完全调和，只能枚举因数，需要预处理一下。但是nlogn的规模接近5e6，hash_table时空常数会接受不了，应该要想办法从二维降成一维。考虑枚举其中一维，开个桶动态计算另一维的限制即可。</span></span>
<span class="line"><span style="color:#24292e;">此题的难点在于弄清楚不完全调和的处理办法，以及如何谨慎地枚举来保证复杂度。如果实现不仔细，很容易变成枚举倍数。这需要我们多去尝试怎样枚举。</span></span>
<span class="line"><span style="color:#24292e;">ABC349F,CF449D,P6442：直接质因数分解，1e16以内只有13个不同的质因数，然后就可以状压了。又发现数的位置不影响答案，而且有用的本质不同的数只有2^13个，所以直接暴力dp即可。</span></span>
<span class="line"><span style="color:#24292e;">CF1166E：挺不错的思维题。直接做不太好做，考虑找结论。从必要性出发，要让一个集合和先前的集合产生矛盾，必然利用大小关系。考虑两个不交的集合，显然会有矛盾，这可以用lcm的max性质证明。考虑其充分性，直接用质数构造即可。（自己没有看出结论，看了题解）</span></span>
<span class="line"><span style="color:#24292e;">P8207：最小公倍树，显然得转化成枚举gcd判定，根据最优性加连通性的原则，直接取最小的倍数和其他的倍数连起来，然后就行了。</span></span>
<span class="line"><span style="color:#24292e;">原创题：最大公约树</span></span>
<span class="line"><span style="color:#24292e;">	V=[L,R],E={(i,j,gcd(i,j))|L&lt;=i,j&lt;=R}，求最大生成树边权和</span></span>
<span class="line"><span style="color:#24292e;">	lim:L,R&lt;=1e18,R-L&lt;=1e5</span></span>
<span class="line"><span style="color:#24292e;">	solution：从大到小枚举gcd，再枚举其倍数，遇到没有连通的就连起来，并ans+=gcd</span></span>
<span class="line"><span style="color:#24292e;">			注意gcd的范围，是[1,R-L+1]，因为如果要有贡献，就必须得有至少两个点在[L,R]内</span></span>
<span class="line"><span style="color:#24292e;">			时间复杂度O(nlog^2(n))</span></span>
<span class="line"><span style="color:#24292e;">P1072：可以直接必要性出发，枚举lcm的因数，然后判定。质因数分解也是可以的，先分解lcm的质因数，然后用之去分解其他的几个数，考虑一下上下界即可。</span></span>
<span class="line"><span style="color:#24292e;">CF1712E2：因为lcm的增长比较快，所以正反转换一下，把性质突出一下。那么有一个松的上界，lcm&lt;3*k，分类一下：lcm=k显然可以，lcm=2*k就要i+j&gt;k。第一个好做，第二个可以双指针。具体实现用扫描线即可。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">crt相关：</span></span>
<span class="line"><span style="color:#24292e;">	引理：若x整除y，则 r mod x = r mod y mod x</span></span>
<span class="line"><span style="color:#24292e;">	crt重要结论：</span></span>
<span class="line"><span style="color:#24292e;">		模数两两互质的线性同余方程组必然有解</span></span>
<span class="line"><span style="color:#24292e;">		通常，模数都是形如p^k的形式，其中p是质数</span></span>
<span class="line"><span style="color:#24292e;">	一般性模数的推论：</span></span>
<span class="line"><span style="color:#24292e;">		假设方程形如x mod b[i]=a[i]，t(x,y)表示最大的k使y^k整除x</span></span>
<span class="line"><span style="color:#24292e;">		方程有解当且仅当对于每个质数p，任意两个方程满足</span></span>
<span class="line"><span style="color:#24292e;">			a[i] mod p^t(b[j],p) = a[j] mod p^t(b[j],p)</span></span>
<span class="line"><span style="color:#24292e;">			其中,t(b[i],p)&gt;=t(b[j],p)</span></span>
<span class="line"><span style="color:#24292e;">		本质上就是模数分解质因数后，可以对于每个质数p，开一个方程，模数是t(lcm,p)，然后用crt</span></span>
<span class="line"><span style="color:#24292e;">	总结：</span></span>
<span class="line"><span style="color:#24292e;">		处理线性同余方程组有两种办法：</span></span>
<span class="line"><span style="color:#24292e;">		分解质因数后用crt</span></span>
<span class="line"><span style="color:#24292e;">		直接使用excrt（具体实现常用）</span></span>
<span class="line"><span style="color:#24292e;">ABC371G：很不错的一道题</span></span>
<span class="line"><span style="color:#24292e;">	首先问题会转化成每次添加一个同余方程，考虑整个方程组是否有解</span></span>
<span class="line"><span style="color:#24292e;">	直接使用excrt会因为模数太大炸掉</span></span>
<span class="line"><span style="color:#24292e;">	用crt的方法，需要模数分解质因数，然后形成了若干同余方程组，在枚举跳的步数时判定即可，直接实现是可以的。</span></span>
<span class="line"><span style="color:#24292e;">	进一步的，我们考虑如何表示出通解的形式，其实就是将我们之前得到的若干限制方程做crt即可表示通解，复杂度更优</span></span>
<span class="line"><span style="color:#24292e;">	注意，我们在考虑通解时，只会考虑小于环长的情况，不考虑取模，因为合并完限制后的限制方程的模数是当前环长的因数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">离散对数问题：</span></span>
<span class="line"><span style="color:#24292e;">	阶：</span></span>
<span class="line"><span style="color:#24292e;">	 	定义：使x^k mod p =1 的最小的k</span></span>
<span class="line"><span style="color:#24292e;">		存在的充要条件：x和p互质</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			若x^k mod p=1，则x的阶整除k</span></span>
<span class="line"><span style="color:#24292e;">				x的阶整除phi[p]</span></span>
<span class="line"><span style="color:#24292e;">		求解：</span></span>
<span class="line"><span style="color:#24292e;">			BSGS：单次sqrt(p)</span></span>
<span class="line"><span style="color:#24292e;">			试除法：单次(sqrt(p)+log^2(p))，可以预处理phi</span></span>
<span class="line"><span style="color:#24292e;">	原根：</span></span>
<span class="line"><span style="color:#24292e;">		定义：x的阶=phi[p]，则x是模p的原根</span></span>
<span class="line"><span style="color:#24292e;">		存在的条件：模数为2,4,p^k,2*p^k</span></span>
<span class="line"><span style="color:#24292e;">		性质：</span></span>
<span class="line"><span style="color:#24292e;">			任意一个数都能被唯一表示成原根的若干次方</span></span>
<span class="line"><span style="color:#24292e;">			以此处理指数问题更方便</span></span>
<span class="line"><span style="color:#24292e;">	阶与原根的关系：</span></span>
<span class="line"><span style="color:#24292e;">		阶(x)=phi[p]/gcd(phi[p],log(x))</span></span>
<span class="line"><span style="color:#24292e;">题：</span></span>
<span class="line"><span style="color:#24292e;">ABC335G：</span></span>
<span class="line"><span style="color:#24292e;">	用原根表示以后，条件等价与log1=klog2 mod (p-1)，即gcd(log2,p-1)整除log1		</span></span>
<span class="line"><span style="color:#24292e;">	但这里不能用bsgs，太慢了，考虑将其换成阶</span></span>
<span class="line"><span style="color:#24292e;">	gcd(log2,p-1)好表示，而log1其实也可以用gcd(log1,p-1)替换</span></span>
<span class="line"><span style="color:#24292e;">	那么就转化成了对因数的考虑，显然可以预处理出要用的因数，复杂度O(能过)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">扩展欧拉定理相关：</span></span>
<span class="line"><span style="color:#24292e;">	递归处理幂次</span></span>
<span class="line"><span style="color:#24292e;">	基本原理：</span></span>
<span class="line"><span style="color:#24292e;">		基于结论：for all 1&lt;a&lt;p,there exist: a^phi[p]&gt;=p</span></span>
<span class="line"><span style="color:#24292e;">		证明可以分奇偶讨论放缩</span></span>
<span class="line"><span style="color:#24292e;">		也就是说，在非平凡情况下，只要幂次&gt;=phi[p]，那么整个值必然&gt;=p</span></span>
<span class="line"><span style="color:#24292e;">		这将成为我们判断幂次是否需要加上phi[p]的依据</span></span>
<span class="line"><span style="color:#24292e;">	具体实现：</span></span>
<span class="line"><span style="color:#24292e;">		Node solve(int l,int r,int p){</span></span>
<span class="line"><span style="color:#24292e;">			if(l&gt;r) return mk(1,0);</span></span>
<span class="line"><span style="color:#24292e;">			ll x=t.ask(l);</span></span>
<span class="line"><span style="color:#24292e;">			bool tg=(x&gt;=p);</span></span>
<span class="line"><span style="color:#24292e;">			x%=p;</span></span>
<span class="line"><span style="color:#24292e;">			if(x&lt;=1) return mk(x,tg);</span></span>
<span class="line"><span style="color:#24292e;">			Node dd=solve(l+1,r,phi[p]);</span></span>
<span class="line"><span style="color:#24292e;">			ll y=dd.fi+dd.se*phi[p],res=1;</span></span>
<span class="line"><span style="color:#24292e;">			tg|=dd.se;</span></span>
<span class="line"><span style="color:#24292e;">			for(;y;y&gt;&gt;=1){</span></span>
<span class="line"><span style="color:#24292e;">				if(y&amp;1){</span></span>
<span class="line"><span style="color:#24292e;">					res=res*x;</span></span>
<span class="line"><span style="color:#24292e;">					if(res&gt;=p) tg=1,res%=p;</span></span>
<span class="line"><span style="color:#24292e;">				}</span></span>
<span class="line"><span style="color:#24292e;">				x=x*x;</span></span>
<span class="line"><span style="color:#24292e;">				if(x&gt;=p) tg=1,x%=p;</span></span>
<span class="line"><span style="color:#24292e;">			}</span></span>
<span class="line"><span style="color:#24292e;">			return mk(res,tg);</span></span>
<span class="line"><span style="color:#24292e;">		}</span></span>
<span class="line"><span style="color:#24292e;">题：</span></span>
<span class="line"><span style="color:#24292e;">P4139 上帝与集合的正确用法：比较水</span></span>
<span class="line"><span style="color:#24292e;">CF906D Power Tower：比较完整的例题</span></span></code></pre></div>`,2),t=[e];function c(o,r,i,y,g,d){return n(),a("div",null,t)}const k=s(p,[["render",c]]);export{m as __pageData,k as default};
