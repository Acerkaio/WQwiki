import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const _=JSON.parse('{"title":"hash","description":"","frontmatter":{},"headers":[],"relativePath":"SearchRandom/hash.md","filePath":"SearchRandom/hash.md","lastUpdated":1738592860000}'),l={name:"SearchRandom/hash.md"},p=e(`<h1 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Hash算法的本质：</span></span>
<span class="line"><span style="color:#e1e4e8;">	将信息映射到一个d维向量上（哈希值），通过判定向量的相等，从而判定信息的相等</span></span>
<span class="line"><span style="color:#e1e4e8;">	最为常见的，d=1，此时哈希值就是一个数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">数值映射hash：</span></span>
<span class="line"><span style="color:#e1e4e8;">	在理想概率均匀的情况下，可以认为冲突概率是1/p</span></span>
<span class="line"><span style="color:#e1e4e8;">	法一：模质数</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将特别大的整数（需要用高精度存储的）映射成小整数</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			判断大整数是否相等</span></span>
<span class="line"><span style="color:#e1e4e8;">			可以方便的处理+,-,*,/等计算式的结果</span></span>
<span class="line"><span style="color:#e1e4e8;">			是绝大多数hash的基础</span></span>
<span class="line"><span style="color:#e1e4e8;">	法二：xorshift</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将任意正常大小的整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#e1e4e8;">		标准实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">			ull shift(ull x){</span></span>
<span class="line"><span style="color:#e1e4e8;">				x=x*rnd1+rnd2;</span></span>
<span class="line"><span style="color:#e1e4e8;">				x^=x&lt;&lt;13;</span></span>
<span class="line"><span style="color:#e1e4e8;">				x^=x&gt;&gt;17;</span></span>
<span class="line"><span style="color:#e1e4e8;">				x^=x&lt;&lt;5;</span></span>
<span class="line"><span style="color:#e1e4e8;">				return x;</span></span>
<span class="line"><span style="color:#e1e4e8;">　　}</span></span>
<span class="line"><span style="color:#e1e4e8;">	法三：多项式函数映射</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将任意正常大小的整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#e1e4e8;">		运用：一般可以和xorshift、自然溢出一起使用，效率都比较高，且冲突概率非常小</span></span>
<span class="line"><span style="color:#e1e4e8;">　　法四：赋rand值</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将小整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#e1e4e8;">集合映射hash：</span></span>
<span class="line"><span style="color:#e1e4e8;">	法一：xor hash</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将集合里的数用数值映射hash以后再xor起来</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见运用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理涉及到出现次数奇偶性的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理差分更方便：树上路径，或是序列的子段</span></span>
<span class="line"><span style="color:#e1e4e8;">	法二：加法hash</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">			将集合里的数用数值映射hash以后再加起来</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见运用：</span></span>
<span class="line"><span style="color:#e1e4e8;">			处理涉及到出现次数是倍数的问题</span></span>
<span class="line"><span style="color:#e1e4e8;">			同样可以处理差分，略麻烦一些</span></span>
<span class="line"><span style="color:#e1e4e8;">字符串hash/多项式hash：</span></span>
<span class="line"><span style="color:#e1e4e8;">	核心思想：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将其看作一个P进制数，进行数值映射</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，必须保证数的每一位值是正整数</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，应保证P大于每一位上取的数值</span></span>
<span class="line"><span style="color:#e1e4e8;">		注意，如果是考虑子串的话，一定要用自然溢出或双模</span></span>
<span class="line"><span style="color:#e1e4e8;">	冲突概率：</span></span>
<span class="line"><span style="color:#e1e4e8;">		两个长为n的串冲突概率：n/p</span></span>
<span class="line"><span style="color:#e1e4e8;">		x个长为n的串不冲突概率：(1-n/p)^(x*(x-1)/2)</span></span>
<span class="line"><span style="color:#e1e4e8;">树hash：</span></span>
<span class="line"><span style="color:#e1e4e8;">	树hash都是针对有根树的hash</span></span>
<span class="line"><span style="color:#e1e4e8;">	一个点的hash值等于1+子结点hash值组成的集合hash</span></span>
<span class="line"><span style="color:#e1e4e8;">	可以利用换根实现无根树hash</span></span>
<span class="line"><span style="color:#e1e4e8;">矩阵hash：</span></span>
<span class="line"><span style="color:#e1e4e8;">	利用向量乘矩阵加速的性质，随机一个向量即可</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">P2312：大整数映射</span></span>
<span class="line"><span style="color:#e1e4e8;">P1224：比较难想，尤其是k=3的情况</span></span>
<span class="line"><span style="color:#e1e4e8;">P8819</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Hash算法的本质：</span></span>
<span class="line"><span style="color:#24292e;">	将信息映射到一个d维向量上（哈希值），通过判定向量的相等，从而判定信息的相等</span></span>
<span class="line"><span style="color:#24292e;">	最为常见的，d=1，此时哈希值就是一个数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">数值映射hash：</span></span>
<span class="line"><span style="color:#24292e;">	在理想概率均匀的情况下，可以认为冲突概率是1/p</span></span>
<span class="line"><span style="color:#24292e;">	法一：模质数</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将特别大的整数（需要用高精度存储的）映射成小整数</span></span>
<span class="line"><span style="color:#24292e;">		常见应用：</span></span>
<span class="line"><span style="color:#24292e;">			判断大整数是否相等</span></span>
<span class="line"><span style="color:#24292e;">			可以方便的处理+,-,*,/等计算式的结果</span></span>
<span class="line"><span style="color:#24292e;">			是绝大多数hash的基础</span></span>
<span class="line"><span style="color:#24292e;">	法二：xorshift</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将任意正常大小的整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#24292e;">		标准实现：</span></span>
<span class="line"><span style="color:#24292e;">			ull shift(ull x){</span></span>
<span class="line"><span style="color:#24292e;">				x=x*rnd1+rnd2;</span></span>
<span class="line"><span style="color:#24292e;">				x^=x&lt;&lt;13;</span></span>
<span class="line"><span style="color:#24292e;">				x^=x&gt;&gt;17;</span></span>
<span class="line"><span style="color:#24292e;">				x^=x&lt;&lt;5;</span></span>
<span class="line"><span style="color:#24292e;">				return x;</span></span>
<span class="line"><span style="color:#24292e;">　　}</span></span>
<span class="line"><span style="color:#24292e;">	法三：多项式函数映射</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将任意正常大小的整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#24292e;">		运用：一般可以和xorshift、自然溢出一起使用，效率都比较高，且冲突概率非常小</span></span>
<span class="line"><span style="color:#24292e;">　　法四：赋rand值</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将小整数映射成较大整数（通常是ull）</span></span>
<span class="line"><span style="color:#24292e;">集合映射hash：</span></span>
<span class="line"><span style="color:#24292e;">	法一：xor hash</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将集合里的数用数值映射hash以后再xor起来</span></span>
<span class="line"><span style="color:#24292e;">		常见运用：</span></span>
<span class="line"><span style="color:#24292e;">			处理涉及到出现次数奇偶性的问题</span></span>
<span class="line"><span style="color:#24292e;">			处理差分更方便：树上路径，或是序列的子段</span></span>
<span class="line"><span style="color:#24292e;">	法二：加法hash</span></span>
<span class="line"><span style="color:#24292e;">		核心思想：</span></span>
<span class="line"><span style="color:#24292e;">			将集合里的数用数值映射hash以后再加起来</span></span>
<span class="line"><span style="color:#24292e;">		常见运用：</span></span>
<span class="line"><span style="color:#24292e;">			处理涉及到出现次数是倍数的问题</span></span>
<span class="line"><span style="color:#24292e;">			同样可以处理差分，略麻烦一些</span></span>
<span class="line"><span style="color:#24292e;">字符串hash/多项式hash：</span></span>
<span class="line"><span style="color:#24292e;">	核心思想：</span></span>
<span class="line"><span style="color:#24292e;">		将其看作一个P进制数，进行数值映射</span></span>
<span class="line"><span style="color:#24292e;">		注意，必须保证数的每一位值是正整数</span></span>
<span class="line"><span style="color:#24292e;">		注意，应保证P大于每一位上取的数值</span></span>
<span class="line"><span style="color:#24292e;">		注意，如果是考虑子串的话，一定要用自然溢出或双模</span></span>
<span class="line"><span style="color:#24292e;">	冲突概率：</span></span>
<span class="line"><span style="color:#24292e;">		两个长为n的串冲突概率：n/p</span></span>
<span class="line"><span style="color:#24292e;">		x个长为n的串不冲突概率：(1-n/p)^(x*(x-1)/2)</span></span>
<span class="line"><span style="color:#24292e;">树hash：</span></span>
<span class="line"><span style="color:#24292e;">	树hash都是针对有根树的hash</span></span>
<span class="line"><span style="color:#24292e;">	一个点的hash值等于1+子结点hash值组成的集合hash</span></span>
<span class="line"><span style="color:#24292e;">	可以利用换根实现无根树hash</span></span>
<span class="line"><span style="color:#24292e;">矩阵hash：</span></span>
<span class="line"><span style="color:#24292e;">	利用向量乘矩阵加速的性质，随机一个向量即可</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">P2312：大整数映射</span></span>
<span class="line"><span style="color:#24292e;">P1224：比较难想，尤其是k=3的情况</span></span>
<span class="line"><span style="color:#24292e;">P8819</span></span></code></pre></div>`,2),t=[p];function o(c,r,i,y,h,d){return n(),a("div",null,t)}const u=s(l,[["render",o]]);export{_ as __pageData,u as default};
