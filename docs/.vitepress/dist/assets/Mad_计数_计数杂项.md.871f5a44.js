import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const d=JSON.parse('{"title":"计数杂项","description":"","frontmatter":{},"headers":[],"relativePath":"Mad/计数/计数杂项.md","filePath":"Mad/计数/计数杂项.md","lastUpdated":1738666900000}'),l={name:"Mad/计数/计数杂项.md"},p=e(`<h1 id="计数杂项" tabindex="-1">计数杂项 <a class="header-anchor" href="#计数杂项" aria-label="Permalink to &quot;计数杂项&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">组合恒等式：</span></span>
<span class="line"><span style="color:#e1e4e8;">	推导组合恒等式的常见办法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		组合意义：一般更方便</span></span>
<span class="line"><span style="color:#e1e4e8;">		二项式定理：处理行的和</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用已有恒等式推导</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见式子：</span></span>
<span class="line"><span style="color:#e1e4e8;">		基本定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">			A(n,i)即n的下降幂</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,j)=A(n,j)/A(j,j)=n!/(j!(n-j)!)</span></span>
<span class="line"><span style="color:#e1e4e8;">		对称性：</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,i)=C(n,n-i)</span></span>
<span class="line"><span style="color:#e1e4e8;">		加法分解：</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,i)=C(n-1,i-1)+C(n-1,i)</span></span>
<span class="line"><span style="color:#e1e4e8;">			A(n,i)=A(n-1,i)+i*A(n-1,i-1)</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,i)=Σ C(j,i-1) i-1&lt;=j&lt;=n-1</span></span>
<span class="line"><span style="color:#e1e4e8;">		乘法转换：</span></span>
<span class="line"><span style="color:#e1e4e8;">			A(n,i)=A(n,j)*A(n-j,i-j)</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,i)*A(i,j)=C(n-j,i-j)*A(n,j)</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,i)*C(i,j)=C(n,j)*C(n-j,i-j)</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用二项式定理巧妙赋值：</span></span>
<span class="line"><span style="color:#e1e4e8;">			C(n,奇)=C(n,偶)</span></span>
<span class="line"><span style="color:#e1e4e8;">			Σ C(n,i)=2^n</span></span>
<span class="line"><span style="color:#e1e4e8;">二项式反演：</span></span>
<span class="line"><span style="color:#e1e4e8;">	原理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		若 f[n]=Σ C(i,n)*g[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">		则 g[n]=Σ (-1)^(i-n)*C(i,n)*f[i]</span></span>
<span class="line"><span style="color:#e1e4e8;">	判断正确性的依据：“至少”是否满足和“恰好”的关系，满足就可以用</span></span>
<span class="line"><span style="color:#e1e4e8;">	实现相关：</span></span>
<span class="line"><span style="color:#e1e4e8;">		法一：</span></span>
<span class="line"><span style="color:#e1e4e8;">			已经得到g的情况下，可以利用卷积实现二项式反演</span></span>
<span class="line"><span style="color:#e1e4e8;">			直接暴力卷积是平方的，利用ntt是线性对数的</span></span>
<span class="line"><span style="color:#e1e4e8;">		法二（一般模数）：</span></span>
<span class="line"><span style="color:#e1e4e8;">			需要将答案式写出，进行进一步的推式子和优化</span></span>
<span class="line"><span style="color:#e1e4e8;">	k维二项式反演：</span></span>
<span class="line"><span style="color:#e1e4e8;">		类比理解：高维前缀和与其逆变换</span></span>
<span class="line"><span style="color:#e1e4e8;">		具体处理：对每一维分别做二项式反演即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		复杂度：k*单次二项式反演复杂度</span></span>
<span class="line"><span style="color:#e1e4e8;">	常见应用：</span></span>
<span class="line"><span style="color:#e1e4e8;">		（容斥）去掉一个条件</span></span>
<span class="line"><span style="color:#e1e4e8;">		处理恰好k个的条件</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">斯特林数：</span></span>
<span class="line"><span style="color:#e1e4e8;">	以下记第二类斯特林数为S</span></span>
<span class="line"><span style="color:#e1e4e8;">	S(n,k)的组合意义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将n个不同的球恰分成k组的方案数</span></span>
<span class="line"><span style="color:#e1e4e8;">		其中，两个方案不同当且仅当存在两个球在其中一个方案中在同一个组中，在另一个方案中不在同一个组中</span></span>
<span class="line"><span style="color:#e1e4e8;">	辨：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将n个不同的球放进k个不同盘子（允许防空）的方案数是k^n</span></span>
<span class="line"><span style="color:#e1e4e8;">		将n个不同的球放进k个相同盘子（不允许防空）的方案数是S(n,k)</span></span>
<span class="line"><span style="color:#e1e4e8;">	递推公式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		S(n,k)= S(n-1,k-1)+S(n-1,k)*k</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：考虑S(n,k)的所有方案中第n个球的情况，是否是自己一个组，证明双射即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	通项公式：</span></span>
<span class="line"><span style="color:#e1e4e8;">		S(n,k)=Σ (-1)^(k-i) * (i^n) / ( k! * (k-i)! )</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		proof：发现无标号可放空是好算的，直接容斥即可</span></span>
<span class="line"><span style="color:#e1e4e8;">	普通幂转下降幂：</span></span>
<span class="line"><span style="color:#e1e4e8;">		k^n=Σ A(k,i)*S(n,i)</span></span>
<span class="line"><span style="color:#e1e4e8;">prufer序列：</span></span>
<span class="line"><span style="color:#e1e4e8;">	构造：每次选出编号最小的度数为1的节点，将其删去，并将其父节点加入序列</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		序列和有标号有根树一一对应</span></span>
<span class="line"><span style="color:#e1e4e8;">		点i的出现次数等于其度数减1</span></span>
<span class="line"><span style="color:#e1e4e8;">		构造时最终剩下的两个节点有一个是n</span></span>
<span class="line"><span style="color:#e1e4e8;">	重要推论：</span></span>
<span class="line"><span style="color:#e1e4e8;">		图中有k个连通块，其大小分别为a[1~k],添加k-1条边将其连成一个连通图的方案数为</span></span>
<span class="line"><span style="color:#e1e4e8;">			n^(k-2) * (a[1]*a[2]*..*a[k])</span></span>
<span class="line"><span style="color:#e1e4e8;">		</span></span>
<span class="line"><span style="color:#e1e4e8;">		理性理解：</span></span>
<span class="line"><span style="color:#e1e4e8;">			不妨先统计有根树的数量，最后除以n即可</span></span>
<span class="line"><span style="color:#e1e4e8;">			将prufer序列改一下变成每次删的对应的具体连的父亲节点</span></span>
<span class="line"><span style="color:#e1e4e8;">			然后再钦定一下删除当前块连给父亲的是哪个点，钦定最后一个删除块钦定的点就是根</span></span>
<span class="line"><span style="color:#e1e4e8;">			那么发现这应该可以一一对应，就证完了</span></span>
<span class="line"><span style="color:#e1e4e8;">生成函数简陋知识：</span></span>
<span class="line"><span style="color:#e1e4e8;">	1/((1-x)^k)=Σ C(i+k-1,k-1)*x^i</span></span>
<span class="line"><span style="color:#e1e4e8;">	x^n/(1-x)=Σ x^i (0&lt;=i&lt;=n-1)</span></span>
<span class="line"><span style="color:#e1e4e8;">	e^x=Σ x^i/i!</span></span>
<span class="line"><span style="color:#e1e4e8;">	OGF和EGF的卷积</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">组合恒等式：</span></span>
<span class="line"><span style="color:#24292e;">	推导组合恒等式的常见办法：</span></span>
<span class="line"><span style="color:#24292e;">		组合意义：一般更方便</span></span>
<span class="line"><span style="color:#24292e;">		二项式定理：处理行的和</span></span>
<span class="line"><span style="color:#24292e;">		利用已有恒等式推导</span></span>
<span class="line"><span style="color:#24292e;">	常见式子：</span></span>
<span class="line"><span style="color:#24292e;">		基本定义：</span></span>
<span class="line"><span style="color:#24292e;">			A(n,i)即n的下降幂</span></span>
<span class="line"><span style="color:#24292e;">			C(n,j)=A(n,j)/A(j,j)=n!/(j!(n-j)!)</span></span>
<span class="line"><span style="color:#24292e;">		对称性：</span></span>
<span class="line"><span style="color:#24292e;">			C(n,i)=C(n,n-i)</span></span>
<span class="line"><span style="color:#24292e;">		加法分解：</span></span>
<span class="line"><span style="color:#24292e;">			C(n,i)=C(n-1,i-1)+C(n-1,i)</span></span>
<span class="line"><span style="color:#24292e;">			A(n,i)=A(n-1,i)+i*A(n-1,i-1)</span></span>
<span class="line"><span style="color:#24292e;">			C(n,i)=Σ C(j,i-1) i-1&lt;=j&lt;=n-1</span></span>
<span class="line"><span style="color:#24292e;">		乘法转换：</span></span>
<span class="line"><span style="color:#24292e;">			A(n,i)=A(n,j)*A(n-j,i-j)</span></span>
<span class="line"><span style="color:#24292e;">			C(n,i)*A(i,j)=C(n-j,i-j)*A(n,j)</span></span>
<span class="line"><span style="color:#24292e;">			C(n,i)*C(i,j)=C(n,j)*C(n-j,i-j)</span></span>
<span class="line"><span style="color:#24292e;">		利用二项式定理巧妙赋值：</span></span>
<span class="line"><span style="color:#24292e;">			C(n,奇)=C(n,偶)</span></span>
<span class="line"><span style="color:#24292e;">			Σ C(n,i)=2^n</span></span>
<span class="line"><span style="color:#24292e;">二项式反演：</span></span>
<span class="line"><span style="color:#24292e;">	原理：</span></span>
<span class="line"><span style="color:#24292e;">		若 f[n]=Σ C(i,n)*g[i]</span></span>
<span class="line"><span style="color:#24292e;">		则 g[n]=Σ (-1)^(i-n)*C(i,n)*f[i]</span></span>
<span class="line"><span style="color:#24292e;">	判断正确性的依据：“至少”是否满足和“恰好”的关系，满足就可以用</span></span>
<span class="line"><span style="color:#24292e;">	实现相关：</span></span>
<span class="line"><span style="color:#24292e;">		法一：</span></span>
<span class="line"><span style="color:#24292e;">			已经得到g的情况下，可以利用卷积实现二项式反演</span></span>
<span class="line"><span style="color:#24292e;">			直接暴力卷积是平方的，利用ntt是线性对数的</span></span>
<span class="line"><span style="color:#24292e;">		法二（一般模数）：</span></span>
<span class="line"><span style="color:#24292e;">			需要将答案式写出，进行进一步的推式子和优化</span></span>
<span class="line"><span style="color:#24292e;">	k维二项式反演：</span></span>
<span class="line"><span style="color:#24292e;">		类比理解：高维前缀和与其逆变换</span></span>
<span class="line"><span style="color:#24292e;">		具体处理：对每一维分别做二项式反演即可</span></span>
<span class="line"><span style="color:#24292e;">		复杂度：k*单次二项式反演复杂度</span></span>
<span class="line"><span style="color:#24292e;">	常见应用：</span></span>
<span class="line"><span style="color:#24292e;">		（容斥）去掉一个条件</span></span>
<span class="line"><span style="color:#24292e;">		处理恰好k个的条件</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">斯特林数：</span></span>
<span class="line"><span style="color:#24292e;">	以下记第二类斯特林数为S</span></span>
<span class="line"><span style="color:#24292e;">	S(n,k)的组合意义：</span></span>
<span class="line"><span style="color:#24292e;">		将n个不同的球恰分成k组的方案数</span></span>
<span class="line"><span style="color:#24292e;">		其中，两个方案不同当且仅当存在两个球在其中一个方案中在同一个组中，在另一个方案中不在同一个组中</span></span>
<span class="line"><span style="color:#24292e;">	辨：</span></span>
<span class="line"><span style="color:#24292e;">		将n个不同的球放进k个不同盘子（允许防空）的方案数是k^n</span></span>
<span class="line"><span style="color:#24292e;">		将n个不同的球放进k个相同盘子（不允许防空）的方案数是S(n,k)</span></span>
<span class="line"><span style="color:#24292e;">	递推公式：</span></span>
<span class="line"><span style="color:#24292e;">		S(n,k)= S(n-1,k-1)+S(n-1,k)*k</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		proof：考虑S(n,k)的所有方案中第n个球的情况，是否是自己一个组，证明双射即可</span></span>
<span class="line"><span style="color:#24292e;">	通项公式：</span></span>
<span class="line"><span style="color:#24292e;">		S(n,k)=Σ (-1)^(k-i) * (i^n) / ( k! * (k-i)! )</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		proof：发现无标号可放空是好算的，直接容斥即可</span></span>
<span class="line"><span style="color:#24292e;">	普通幂转下降幂：</span></span>
<span class="line"><span style="color:#24292e;">		k^n=Σ A(k,i)*S(n,i)</span></span>
<span class="line"><span style="color:#24292e;">prufer序列：</span></span>
<span class="line"><span style="color:#24292e;">	构造：每次选出编号最小的度数为1的节点，将其删去，并将其父节点加入序列</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		序列和有标号有根树一一对应</span></span>
<span class="line"><span style="color:#24292e;">		点i的出现次数等于其度数减1</span></span>
<span class="line"><span style="color:#24292e;">		构造时最终剩下的两个节点有一个是n</span></span>
<span class="line"><span style="color:#24292e;">	重要推论：</span></span>
<span class="line"><span style="color:#24292e;">		图中有k个连通块，其大小分别为a[1~k],添加k-1条边将其连成一个连通图的方案数为</span></span>
<span class="line"><span style="color:#24292e;">			n^(k-2) * (a[1]*a[2]*..*a[k])</span></span>
<span class="line"><span style="color:#24292e;">		</span></span>
<span class="line"><span style="color:#24292e;">		理性理解：</span></span>
<span class="line"><span style="color:#24292e;">			不妨先统计有根树的数量，最后除以n即可</span></span>
<span class="line"><span style="color:#24292e;">			将prufer序列改一下变成每次删的对应的具体连的父亲节点</span></span>
<span class="line"><span style="color:#24292e;">			然后再钦定一下删除当前块连给父亲的是哪个点，钦定最后一个删除块钦定的点就是根</span></span>
<span class="line"><span style="color:#24292e;">			那么发现这应该可以一一对应，就证完了</span></span>
<span class="line"><span style="color:#24292e;">生成函数简陋知识：</span></span>
<span class="line"><span style="color:#24292e;">	1/((1-x)^k)=Σ C(i+k-1,k-1)*x^i</span></span>
<span class="line"><span style="color:#24292e;">	x^n/(1-x)=Σ x^i (0&lt;=i&lt;=n-1)</span></span>
<span class="line"><span style="color:#24292e;">	e^x=Σ x^i/i!</span></span>
<span class="line"><span style="color:#24292e;">	OGF和EGF的卷积</span></span></code></pre></div>`,2),t=[p];function o(c,i,r,y,k,C){return n(),a("div",null,t)}const _=s(l,[["render",o]]);export{d as __pageData,_ as default};
