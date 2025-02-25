import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.e7363dcb.js";const d=JSON.parse('{"title":"数学杂项","description":"","frontmatter":{},"headers":[],"relativePath":"Math/数学杂项.md","filePath":"Math/数学杂项.md","lastUpdated":1740448168000}'),e={name:"Math/数学杂项.md"},p=l(`<p>把这些转为markdown源码给我：</p><h1 id="数学杂项" tabindex="-1">数学杂项 <a class="header-anchor" href="#数学杂项" aria-label="Permalink to &quot;数学杂项&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">取整函数相关</span></span>
<span class="line"><span style="color:#e1e4e8;">	和c++语言的关系：</span></span>
<span class="line"><span style="color:#e1e4e8;">		floor 下取整</span></span>
<span class="line"><span style="color:#e1e4e8;">		ceil 上取整</span></span>
<span class="line"><span style="color:#e1e4e8;">		整数之间除法 向0取整</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义（性质）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		floor(x)=x-r,0&lt;=r&lt;1</span></span>
<span class="line"><span style="color:#e1e4e8;">		ceil(x)=x+r,0&lt;=r&lt;1</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		推论：</span></span>
<span class="line"><span style="color:#e1e4e8;">			floor(x/y) 不同的r的数量恰y个</span></span>
<span class="line"><span style="color:#e1e4e8;">	上取整和下取整的转换：</span></span>
<span class="line"><span style="color:#e1e4e8;">		ceil(x/y)=floor((x-1)/y)+1</span></span>
<span class="line"><span style="color:#e1e4e8;">		在c++中实现时，如果用整数除法，一定要考虑正负性和0</span></span>
<span class="line"><span style="color:#e1e4e8;">	连除的合并：</span></span>
<span class="line"><span style="color:#e1e4e8;">		floor(floor(x/y)/z)=floor(x/(y*z))</span></span>
<span class="line"><span style="color:#e1e4e8;">	加法进出取整函数：</span></span>
<span class="line"><span style="color:#e1e4e8;">		floor(x/y)+z=floor( (x+y*z)/y)</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		特别注意，乘法不能进出取整函数</span></span>
<span class="line"><span style="color:#e1e4e8;">	取整函数不等式的处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		floor(x/y)&gt;=z -&gt; x&gt;=y*z</span></span>
<span class="line"><span style="color:#e1e4e8;">		ceil(x/y)&lt;=z -&gt; x&lt;=y*z</span></span>
<span class="line"><span style="color:#e1e4e8;">		其他形式的不等式通过变换转换成上述两种处理</span></span>
<span class="line"><span style="color:#e1e4e8;">	数论分块</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心结论1：</span></span>
<span class="line"><span style="color:#e1e4e8;">			若floor(n/i)=k，则max{i}=floor(n/k)</span></span>
<span class="line"><span style="color:#e1e4e8;">			即：floor(n/i)=k -&gt; floor(n/k)&gt;=i</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心结论2：</span></span>
<span class="line"><span style="color:#e1e4e8;">			floor(n/i)的不同的取值最多O(sqrt(n))个</span></span>
<span class="line"><span style="color:#e1e4e8;">		一维数论分块及高维数论分块</span></span>
<span class="line"><span style="color:#e1e4e8;">	带取整的函数最值：</span></span>
<span class="line"><span style="color:#e1e4e8;">		常见处理办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">			整除分块（数量等于被除数的根号）</span></span>
<span class="line"><span style="color:#e1e4e8;">			暴力枚举余数（数量等于除数大小）</span></span>
<span class="line"><span style="color:#e1e4e8;">		题：</span></span>
<span class="line"><span style="color:#e1e4e8;">			abc374_e Sensor Optimization Dilemma 2</span></span>
<span class="line"><span style="color:#e1e4e8;">			</span></span>
<span class="line"><span style="color:#e1e4e8;">斐波纳契数列：</span></span>
<span class="line"><span style="color:#e1e4e8;">	此处的定义：f[0]=f[1]=1,f[n]=f[n-1]+f[n-2]</span></span>
<span class="line"><span style="color:#e1e4e8;">	组合意义：f[n+1]表示满足两两1不相邻的长为n的01串个数</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见恒等式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		合成与分解：f[n]=f[m]*f[n-m]+f[m-1]*f[n-m-1]</span></span>
<span class="line"><span style="color:#e1e4e8;">		前缀和：sum[n]=f[n+2]-1</span></span>
<span class="line"><span style="color:#e1e4e8;">		前缀平方和：sum_2[n]=f[n]*f[n+1]</span></span>
<span class="line"><span style="color:#e1e4e8;">	和数论的结合：</span></span>
<span class="line"><span style="color:#e1e4e8;">		f[n]和f[n-1]互质</span></span>
<span class="line"><span style="color:#e1e4e8;">		gcd(f[n],f[m])=f[gcd(n,m)]</span></span>
<span class="line"><span style="color:#e1e4e8;">	组合意义扩展：</span></span>
<span class="line"><span style="color:#e1e4e8;">		f[n+1]=C(n+1,0)+C(n,1)+C(n-1,2)+...</span></span>
<span class="line"><span style="color:#e1e4e8;">		其中，组合数C(n+1-i,i)的含义是将i个点放进n个位置且两两不相邻的方案数</span></span>
<span class="line"><span style="color:#e1e4e8;">		即 杨辉三角对角和</span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">CF316E3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">取整函数相关</span></span>
<span class="line"><span style="color:#24292e;">	和c++语言的关系：</span></span>
<span class="line"><span style="color:#24292e;">		floor 下取整</span></span>
<span class="line"><span style="color:#24292e;">		ceil 上取整</span></span>
<span class="line"><span style="color:#24292e;">		整数之间除法 向0取整</span></span>
<span class="line"><span style="color:#24292e;">	定义（性质）：</span></span>
<span class="line"><span style="color:#24292e;">		floor(x)=x-r,0&lt;=r&lt;1</span></span>
<span class="line"><span style="color:#24292e;">		ceil(x)=x+r,0&lt;=r&lt;1</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		推论：</span></span>
<span class="line"><span style="color:#24292e;">			floor(x/y) 不同的r的数量恰y个</span></span>
<span class="line"><span style="color:#24292e;">	上取整和下取整的转换：</span></span>
<span class="line"><span style="color:#24292e;">		ceil(x/y)=floor((x-1)/y)+1</span></span>
<span class="line"><span style="color:#24292e;">		在c++中实现时，如果用整数除法，一定要考虑正负性和0</span></span>
<span class="line"><span style="color:#24292e;">	连除的合并：</span></span>
<span class="line"><span style="color:#24292e;">		floor(floor(x/y)/z)=floor(x/(y*z))</span></span>
<span class="line"><span style="color:#24292e;">	加法进出取整函数：</span></span>
<span class="line"><span style="color:#24292e;">		floor(x/y)+z=floor( (x+y*z)/y)</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		特别注意，乘法不能进出取整函数</span></span>
<span class="line"><span style="color:#24292e;">	取整函数不等式的处理：</span></span>
<span class="line"><span style="color:#24292e;">		floor(x/y)&gt;=z -&gt; x&gt;=y*z</span></span>
<span class="line"><span style="color:#24292e;">		ceil(x/y)&lt;=z -&gt; x&lt;=y*z</span></span>
<span class="line"><span style="color:#24292e;">		其他形式的不等式通过变换转换成上述两种处理</span></span>
<span class="line"><span style="color:#24292e;">	数论分块</span></span>
<span class="line"><span style="color:#24292e;">		核心结论1：</span></span>
<span class="line"><span style="color:#24292e;">			若floor(n/i)=k，则max{i}=floor(n/k)</span></span>
<span class="line"><span style="color:#24292e;">			即：floor(n/i)=k -&gt; floor(n/k)&gt;=i</span></span>
<span class="line"><span style="color:#24292e;">		核心结论2：</span></span>
<span class="line"><span style="color:#24292e;">			floor(n/i)的不同的取值最多O(sqrt(n))个</span></span>
<span class="line"><span style="color:#24292e;">		一维数论分块及高维数论分块</span></span>
<span class="line"><span style="color:#24292e;">	带取整的函数最值：</span></span>
<span class="line"><span style="color:#24292e;">		常见处理办法：</span></span>
<span class="line"><span style="color:#24292e;">			整除分块（数量等于被除数的根号）</span></span>
<span class="line"><span style="color:#24292e;">			暴力枚举余数（数量等于除数大小）</span></span>
<span class="line"><span style="color:#24292e;">		题：</span></span>
<span class="line"><span style="color:#24292e;">			abc374_e Sensor Optimization Dilemma 2</span></span>
<span class="line"><span style="color:#24292e;">			</span></span>
<span class="line"><span style="color:#24292e;">斐波纳契数列：</span></span>
<span class="line"><span style="color:#24292e;">	此处的定义：f[0]=f[1]=1,f[n]=f[n-1]+f[n-2]</span></span>
<span class="line"><span style="color:#24292e;">	组合意义：f[n+1]表示满足两两1不相邻的长为n的01串个数</span></span>
<span class="line"><span style="color:#24292e;">	常见恒等式：</span></span>
<span class="line"><span style="color:#24292e;">		合成与分解：f[n]=f[m]*f[n-m]+f[m-1]*f[n-m-1]</span></span>
<span class="line"><span style="color:#24292e;">		前缀和：sum[n]=f[n+2]-1</span></span>
<span class="line"><span style="color:#24292e;">		前缀平方和：sum_2[n]=f[n]*f[n+1]</span></span>
<span class="line"><span style="color:#24292e;">	和数论的结合：</span></span>
<span class="line"><span style="color:#24292e;">		f[n]和f[n-1]互质</span></span>
<span class="line"><span style="color:#24292e;">		gcd(f[n],f[m])=f[gcd(n,m)]</span></span>
<span class="line"><span style="color:#24292e;">	组合意义扩展：</span></span>
<span class="line"><span style="color:#24292e;">		f[n+1]=C(n+1,0)+C(n,1)+C(n-1,2)+...</span></span>
<span class="line"><span style="color:#24292e;">		其中，组合数C(n+1-i,i)的含义是将i个点放进n个位置且两两不相邻的方案数</span></span>
<span class="line"><span style="color:#24292e;">		即 杨辉三角对角和</span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">CF316E3</span></span></code></pre></div>`,3),t=[p];function o(c,r,i,y,f,m){return n(),a("div",null,t)}const _=s(e,[["render",o]]);export{d as __pageData,_ as default};
