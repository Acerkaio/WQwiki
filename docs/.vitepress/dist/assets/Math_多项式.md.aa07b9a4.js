import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const d=JSON.parse('{"title":"多项式","description":"","frontmatter":{},"headers":[],"relativePath":"Math/多项式.md","filePath":"Math/多项式.md","lastUpdated":1740448168000}'),l={name:"Math/多项式.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="多项式" tabindex="-1">多项式 <a class="header-anchor" href="#多项式" aria-label="Permalink to &quot;多项式&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">基础知识：</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本结论1：n次多项式的系数可以由n+1个两两不同的点确定</span></span>
<span class="line"><span style="color:#e1e4e8;">	基本结论2：范德蒙德方阵*系数矩阵=点值矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		推广：</span></span>
<span class="line"><span style="color:#e1e4e8;">			范德蒙德方阵有逆当且仅当没有两行相同</span></span>
<span class="line"><span style="color:#e1e4e8;">			就是没有两个相同的点值，这和结论1符合</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么，有了点值，就能推出系数</span></span>
<span class="line"><span style="color:#e1e4e8;">			有了系数，就能推出点值</span></span>
<span class="line"><span style="color:#e1e4e8;">拉格朗日插值</span></span>
<span class="line"><span style="color:#e1e4e8;">	作用：点值得系数</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		假设已有n+1个点值是(xi,yi)，我们要使得f(xi)=yi</span></span>
<span class="line"><span style="color:#e1e4e8;">		类似CRT，我们可以对于i，构造：</span></span>
<span class="line"><span style="color:#e1e4e8;">			yi*(x-x1)*(x-x2)*...*(x-x(i-1))*(x-x(i+1))*...*(x-xn)/(xi-x1)*(xi-x2)*...</span></span>
<span class="line"><span style="color:#e1e4e8;">		这样，就构造出了对应的多项式</span></span>
<span class="line"><span style="color:#e1e4e8;">	应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		可以O(n^2)求出多项式的点值</span></span>
<span class="line"><span style="color:#e1e4e8;">		在xi连续时，有线性做法</span></span>
<span class="line"><span style="color:#e1e4e8;">快速傅里叶（逆）变换</span></span>
<span class="line"><span style="color:#e1e4e8;">	作用：快速实现系数和点值的互相转化</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意：</span></span>
<span class="line"><span style="color:#e1e4e8;">		FFT的本质是对于范德蒙德矩阵乘上系数矩阵的求解</span></span>
<span class="line"><span style="color:#e1e4e8;">		DFT的本质是对于范德蒙德逆矩阵乘上点值矩阵的求解</span></span>
<span class="line"><span style="color:#e1e4e8;">		所以两者的实现过程非常相似</span></span>
<span class="line"><span style="color:#e1e4e8;">	FFT应用的性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质1：</span></span>
<span class="line"><span style="color:#e1e4e8;">			f(x)=f1(x^2)+xf2(x^2)</span></span>
<span class="line"><span style="color:#e1e4e8;">			f(-x)=f1(x^2)-xf2(x^2)</span></span>
<span class="line"><span style="color:#e1e4e8;">			其中，f1是f偶项,f2是f奇项</span></span>
<span class="line"><span style="color:#e1e4e8;">			利用这个，我们可以递归快速得到点值</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质2：</span></span>
<span class="line"><span style="color:#e1e4e8;">			根据我们递归的函数划分方法，容易发现最终系数的位置有：</span></span>
<span class="line"><span style="color:#e1e4e8;">			蝴蝶变换：将一个数在[0,2^l-1]的二进制反转</span></span>
<span class="line"><span style="color:#e1e4e8;">			这样，我们可以实现非递归</span></span>
<span class="line"><span style="color:#e1e4e8;">		性质3：</span></span>
<span class="line"><span style="color:#e1e4e8;">			因为DFT的需要，我们代入单位根作为点</span></span>
<span class="line"><span style="color:#e1e4e8;">			w[2l][i+l]=-w[2l][i]</span></span>
<span class="line"><span style="color:#e1e4e8;">			w[2l][i]^2=w[l][i]</span></span>
<span class="line"><span style="color:#e1e4e8;">			f(w[2l][i])=f1(w[l][i])+w[2l][i]*f2(w[l][i])</span></span>
<span class="line"><span style="color:#e1e4e8;">			f[w[2l][i+l])=f1(w[l][i])-w[2l][i]*f2(w[l][i])</span></span>
<span class="line"><span style="color:#e1e4e8;">	DFT的推导：</span></span>
<span class="line"><span style="color:#e1e4e8;">		核心：(x-w0)*(x-w1)*...*(x-w(n-1))=x^n-1</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用拉格朗日插值，结合这个进行一定的多项式推导，可以得到范德蒙德的左逆矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		即原矩阵的每一位取倒数并乘1/n</span></span>
<span class="line"><span style="color:#e1e4e8;">快速数论变换</span></span>
<span class="line"><span style="color:#e1e4e8;">	原根和单位根是同构的，所以直接代替即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	常数优化：16次循环取模</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">快速沃尔什变换</span></span>
<span class="line"><span style="color:#e1e4e8;">	与卷积（或卷积同理）：</span></span>
<span class="line"><span style="color:#e1e4e8;">		前置知识：高维前缀和及其逆变换</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">			对于A*B=C的与卷积</span></span>
<span class="line"><span style="color:#e1e4e8;">			我们现对A,B求高维前缀和，将其对应下标乘起来</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么这就是C的高维前缀和，然后做逆变换即可还原C</span></span>
<span class="line"><span style="color:#e1e4e8;">	异或卷积：</span></span>
<span class="line"><span style="color:#e1e4e8;">		首先应该明确我们要构造fwt[A][i]*fwt[B][i]=fwt[C][i]</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后我们套用范德蒙德矩阵的形式，考虑还是将fwt[i]表示成各项系数的和</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么经过推导，可以得到c(i,j)*c(i,k)=c(i,j^k)</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后因为是位运算，而且我们的目的是构造解，所以考虑特解-按位分解</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么利用每一位的限制，可以推导得到c(0/1,0/1)</span></span>
<span class="line"><span style="color:#e1e4e8;">		或及与的不再赘述，异或的矩阵是{{1,1},{1,-1}}，逆是全乘1/2</span></span>
<span class="line"><span style="color:#e1e4e8;">		那么，我们可以写出范德蒙德矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		然后，你会发现FWT和FFT的惊人的相似性，只能说比较凑巧</span></span>
<span class="line"><span style="color:#e1e4e8;">		事实上，其本质是每次新考虑一个位，然后分类处理</span></span>
<span class="line"><span style="color:#e1e4e8;">		求逆可以最后乘上1/2^n</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">重要结论：</span></span>
<span class="line"><span style="color:#e1e4e8;">    在fft和fwt中，本质上我们将多项式转化成了 点值表示法</span></span>
<span class="line"><span style="color:#e1e4e8;">    那么：</span></span>
<span class="line"><span style="color:#e1e4e8;">    	多项式加法可以转化成点值的加法</span></span>
<span class="line"><span style="color:#e1e4e8;">    	多项式卷积可以转化成点值的乘法</span></span>
<span class="line"><span style="color:#e1e4e8;">	所以，多项式的常见两个操作都是复杂度线性的（除去变换复杂度）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">{max,+}卷积：</span></span>
<span class="line"><span style="color:#e1e4e8;">	加法对应了max，乘法对应了加法</span></span>
<span class="line"><span style="color:#e1e4e8;">	注意，这仍然是有结合律和分配律的</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见是凸函数的卷积</span></span>
<span class="line"><span style="color:#e1e4e8;">	具体实现见闵可夫斯基和</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">基础知识：</span></span>
<span class="line"><span style="color:#24292e;">	基本结论1：n次多项式的系数可以由n+1个两两不同的点确定</span></span>
<span class="line"><span style="color:#24292e;">	基本结论2：范德蒙德方阵*系数矩阵=点值矩阵</span></span>
<span class="line"><span style="color:#24292e;">		推广：</span></span>
<span class="line"><span style="color:#24292e;">			范德蒙德方阵有逆当且仅当没有两行相同</span></span>
<span class="line"><span style="color:#24292e;">			就是没有两个相同的点值，这和结论1符合</span></span>
<span class="line"><span style="color:#24292e;">			那么，有了点值，就能推出系数</span></span>
<span class="line"><span style="color:#24292e;">			有了系数，就能推出点值</span></span>
<span class="line"><span style="color:#24292e;">拉格朗日插值</span></span>
<span class="line"><span style="color:#24292e;">	作用：点值得系数</span></span>
<span class="line"><span style="color:#24292e;">	具体处理：</span></span>
<span class="line"><span style="color:#24292e;">		假设已有n+1个点值是(xi,yi)，我们要使得f(xi)=yi</span></span>
<span class="line"><span style="color:#24292e;">		类似CRT，我们可以对于i，构造：</span></span>
<span class="line"><span style="color:#24292e;">			yi*(x-x1)*(x-x2)*...*(x-x(i-1))*(x-x(i+1))*...*(x-xn)/(xi-x1)*(xi-x2)*...</span></span>
<span class="line"><span style="color:#24292e;">		这样，就构造出了对应的多项式</span></span>
<span class="line"><span style="color:#24292e;">	应用：</span></span>
<span class="line"><span style="color:#24292e;">		可以O(n^2)求出多项式的点值</span></span>
<span class="line"><span style="color:#24292e;">		在xi连续时，有线性做法</span></span>
<span class="line"><span style="color:#24292e;">快速傅里叶（逆）变换</span></span>
<span class="line"><span style="color:#24292e;">	作用：快速实现系数和点值的互相转化</span></span>
<span class="line"><span style="color:#24292e;">	注意：</span></span>
<span class="line"><span style="color:#24292e;">		FFT的本质是对于范德蒙德矩阵乘上系数矩阵的求解</span></span>
<span class="line"><span style="color:#24292e;">		DFT的本质是对于范德蒙德逆矩阵乘上点值矩阵的求解</span></span>
<span class="line"><span style="color:#24292e;">		所以两者的实现过程非常相似</span></span>
<span class="line"><span style="color:#24292e;">	FFT应用的性质：</span></span>
<span class="line"><span style="color:#24292e;">		性质1：</span></span>
<span class="line"><span style="color:#24292e;">			f(x)=f1(x^2)+xf2(x^2)</span></span>
<span class="line"><span style="color:#24292e;">			f(-x)=f1(x^2)-xf2(x^2)</span></span>
<span class="line"><span style="color:#24292e;">			其中，f1是f偶项,f2是f奇项</span></span>
<span class="line"><span style="color:#24292e;">			利用这个，我们可以递归快速得到点值</span></span>
<span class="line"><span style="color:#24292e;">		性质2：</span></span>
<span class="line"><span style="color:#24292e;">			根据我们递归的函数划分方法，容易发现最终系数的位置有：</span></span>
<span class="line"><span style="color:#24292e;">			蝴蝶变换：将一个数在[0,2^l-1]的二进制反转</span></span>
<span class="line"><span style="color:#24292e;">			这样，我们可以实现非递归</span></span>
<span class="line"><span style="color:#24292e;">		性质3：</span></span>
<span class="line"><span style="color:#24292e;">			因为DFT的需要，我们代入单位根作为点</span></span>
<span class="line"><span style="color:#24292e;">			w[2l][i+l]=-w[2l][i]</span></span>
<span class="line"><span style="color:#24292e;">			w[2l][i]^2=w[l][i]</span></span>
<span class="line"><span style="color:#24292e;">			f(w[2l][i])=f1(w[l][i])+w[2l][i]*f2(w[l][i])</span></span>
<span class="line"><span style="color:#24292e;">			f[w[2l][i+l])=f1(w[l][i])-w[2l][i]*f2(w[l][i])</span></span>
<span class="line"><span style="color:#24292e;">	DFT的推导：</span></span>
<span class="line"><span style="color:#24292e;">		核心：(x-w0)*(x-w1)*...*(x-w(n-1))=x^n-1</span></span>
<span class="line"><span style="color:#24292e;">		利用拉格朗日插值，结合这个进行一定的多项式推导，可以得到范德蒙德的左逆矩阵</span></span>
<span class="line"><span style="color:#24292e;">		即原矩阵的每一位取倒数并乘1/n</span></span>
<span class="line"><span style="color:#24292e;">快速数论变换</span></span>
<span class="line"><span style="color:#24292e;">	原根和单位根是同构的，所以直接代替即可</span></span>
<span class="line"><span style="color:#24292e;">	常数优化：16次循环取模</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">快速沃尔什变换</span></span>
<span class="line"><span style="color:#24292e;">	与卷积（或卷积同理）：</span></span>
<span class="line"><span style="color:#24292e;">		前置知识：高维前缀和及其逆变换</span></span>
<span class="line"><span style="color:#24292e;">		具体处理：</span></span>
<span class="line"><span style="color:#24292e;">			对于A*B=C的与卷积</span></span>
<span class="line"><span style="color:#24292e;">			我们现对A,B求高维前缀和，将其对应下标乘起来</span></span>
<span class="line"><span style="color:#24292e;">			那么这就是C的高维前缀和，然后做逆变换即可还原C</span></span>
<span class="line"><span style="color:#24292e;">	异或卷积：</span></span>
<span class="line"><span style="color:#24292e;">		首先应该明确我们要构造fwt[A][i]*fwt[B][i]=fwt[C][i]</span></span>
<span class="line"><span style="color:#24292e;">		然后我们套用范德蒙德矩阵的形式，考虑还是将fwt[i]表示成各项系数的和</span></span>
<span class="line"><span style="color:#24292e;">		那么经过推导，可以得到c(i,j)*c(i,k)=c(i,j^k)</span></span>
<span class="line"><span style="color:#24292e;">		然后因为是位运算，而且我们的目的是构造解，所以考虑特解-按位分解</span></span>
<span class="line"><span style="color:#24292e;">		那么利用每一位的限制，可以推导得到c(0/1,0/1)</span></span>
<span class="line"><span style="color:#24292e;">		或及与的不再赘述，异或的矩阵是{{1,1},{1,-1}}，逆是全乘1/2</span></span>
<span class="line"><span style="color:#24292e;">		那么，我们可以写出范德蒙德矩阵</span></span>
<span class="line"><span style="color:#24292e;">		然后，你会发现FWT和FFT的惊人的相似性，只能说比较凑巧</span></span>
<span class="line"><span style="color:#24292e;">		事实上，其本质是每次新考虑一个位，然后分类处理</span></span>
<span class="line"><span style="color:#24292e;">		求逆可以最后乘上1/2^n</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">重要结论：</span></span>
<span class="line"><span style="color:#24292e;">    在fft和fwt中，本质上我们将多项式转化成了 点值表示法</span></span>
<span class="line"><span style="color:#24292e;">    那么：</span></span>
<span class="line"><span style="color:#24292e;">    	多项式加法可以转化成点值的加法</span></span>
<span class="line"><span style="color:#24292e;">    	多项式卷积可以转化成点值的乘法</span></span>
<span class="line"><span style="color:#24292e;">	所以，多项式的常见两个操作都是复杂度线性的（除去变换复杂度）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">{max,+}卷积：</span></span>
<span class="line"><span style="color:#24292e;">	加法对应了max，乘法对应了加法</span></span>
<span class="line"><span style="color:#24292e;">	注意，这仍然是有结合律和分配律的</span></span>
<span class="line"><span style="color:#24292e;">	常见是凸函数的卷积</span></span>
<span class="line"><span style="color:#24292e;">	具体实现见闵可夫斯基和</span></span></code></pre></div>`,3),t=[p];function c(o,i,r,y,x,f){return n(),a("div",null,t)}const _=s(l,[["render",c]]);export{d as __pageData,_ as default};
