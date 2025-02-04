import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const h=JSON.parse('{"title":"线性代数","description":"","frontmatter":{},"headers":[],"relativePath":"Math/线性代数.md","filePath":"Math/线性代数.md","lastUpdated":1738591681000}'),p={name:"Math/线性代数.md"},l=e(`<h1 id="线性代数" tabindex="-1">线性代数 <a class="header-anchor" href="#线性代数" aria-label="Permalink to &quot;线性代数&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">向量的线性无关：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义：任何一个向量都不能被其他的向量通过初等变换表示出来</span></span>
<span class="line"><span style="color:#e1e4e8;">	结论：若有n个元，那么必须有恰n个线性无关的方程，才能解出n个元的值	</span></span>
<span class="line"><span style="color:#e1e4e8;">解方程组：</span></span>
<span class="line"><span style="color:#e1e4e8;">	做法：</span></span>
<span class="line"><span style="color:#e1e4e8;">		法一：高斯消元法：上三角+回代</span></span>
<span class="line"><span style="color:#e1e4e8;">		法二：高斯-约旦消元法：直接成对角</span></span>
<span class="line"><span style="color:#e1e4e8;">	本质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将每一个元都只保留在一个方程中</span></span>
<span class="line"><span style="color:#e1e4e8;">		将其他出现的元都消去</span></span>
<span class="line"><span style="color:#e1e4e8;">		所以，其实每次随便找一个没有被选过的元处理即可</span></span>
<span class="line"><span style="color:#e1e4e8;">		并不一定是变成对角矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">	特别的，在模p意义下的消元：</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果p是质数，可以直接取逆元</span></span>
<span class="line"><span style="color:#e1e4e8;">		如果p不是质数（一般做法)：</span></span>
<span class="line"><span style="color:#e1e4e8;">			类似辗转相除法处理</span></span>
<span class="line"><span style="color:#e1e4e8;">			复杂度利用势能分析可以得到是O(n^3+n^2logP)</span></span>
<span class="line"><span style="color:#e1e4e8;">行列式：</span></span>
<span class="line"><span style="color:#e1e4e8;">	定义：</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于一个n阶方阵A，对于所有长度为n的排列p，(-1)^(p的逆序对数)*a[1][p1]*a[2][p2]*...*a[n][pn] 的和就是其行列式，记为det(A)</span></span>
<span class="line"><span style="color:#e1e4e8;">	性质：</span></span>
<span class="line"><span style="color:#e1e4e8;">		上三角矩阵的行列式为其对角线乘积</span></span>
<span class="line"><span style="color:#e1e4e8;">		交换矩阵的两行，行列式*=-1</span></span>
<span class="line"><span style="color:#e1e4e8;">		有两行相同的矩阵的行列式=0</span></span>
<span class="line"><span style="color:#e1e4e8;">		一行*=k，那么行列式*=k</span></span>
<span class="line"><span style="color:#e1e4e8;">		矩阵的一行加上另一行，矩阵的行列式不变</span></span>
<span class="line"><span style="color:#e1e4e8;">		行列式=0等价于矩阵有两个行向量线性相关</span></span>
<span class="line"><span style="color:#e1e4e8;">	求解：</span></span>
<span class="line"><span style="color:#e1e4e8;">		利用高斯消元法将矩阵变成上三角矩阵求其对角线乘积即可</span></span>
<span class="line"><span style="color:#e1e4e8;">矩阵求逆：</span></span>
<span class="line"><span style="color:#e1e4e8;">	矩阵的逆：矩阵A*B=E，那么B是A的逆</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理：</span></span>
<span class="line"><span style="color:#e1e4e8;">		将一个单位矩阵放在A左边然后做高斯-约旦消元使A变成单位矩阵（而不是对角矩阵）</span></span>
<span class="line"><span style="color:#e1e4e8;">		此时，右边的矩阵就是A的逆</span></span>
<span class="line"><span style="color:#e1e4e8;">	proof：</span></span>
<span class="line"><span style="color:#e1e4e8;">		考虑对于B的一个列向量{x1,x2,...,xn}</span></span>
<span class="line"><span style="color:#e1e4e8;">		对于A的每一行，我们可以得到一个方程（因为最终得到是单位矩阵）</span></span>
<span class="line"><span style="color:#e1e4e8;">		一个朴素的做法是对于每一列都做一次消元，复杂度O(n^4)</span></span>
<span class="line"><span style="color:#e1e4e8;">		但是注意到，我们每次消元都只有=右边的列向量改变了</span></span>
<span class="line"><span style="color:#e1e4e8;">		而消元的本质是将左边的矩阵变成单位矩阵，所以可以一起消</span></span>
<span class="line"><span style="color:#e1e4e8;">	扩展：</span></span>
<span class="line"><span style="color:#e1e4e8;">		显然，对于任意的A,C，我们都有办法找到A*B=C（在B存在的情况下）</span></span>
<span class="line"><span style="color:#e1e4e8;">		因为我们的做法和单位矩阵没有任何联系</span></span>
<span class="line"><span style="color:#e1e4e8;">fun fact：</span></span>
<span class="line"><span style="color:#e1e4e8;">	以下等价：</span></span>
<span class="line"><span style="color:#e1e4e8;">		矩阵中存在两向量线性相关</span></span>
<span class="line"><span style="color:#e1e4e8;">		行列式=0</span></span>
<span class="line"><span style="color:#e1e4e8;">		高斯消元消出空向量</span></span>
<span class="line"><span style="color:#e1e4e8;">		矩阵没有逆</span></span>
<span class="line"><span style="color:#e1e4e8;">		方程组无解或有无数解</span></span>
<span class="line"><span style="color:#e1e4e8;">矩阵树定理：</span></span>
<span class="line"><span style="color:#e1e4e8;">	无向图：</span></span>
<span class="line"><span style="color:#e1e4e8;">		度数矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		随便去掉第k行k列后求值</span></span>
<span class="line"><span style="color:#e1e4e8;">	有向图：</span></span>
<span class="line"><span style="color:#e1e4e8;">		外向树：入度矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		内向树：出度矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#e1e4e8;">		若k为根，则去掉第k行第k列求值</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">向量的线性无关：</span></span>
<span class="line"><span style="color:#24292e;">	定义：任何一个向量都不能被其他的向量通过初等变换表示出来</span></span>
<span class="line"><span style="color:#24292e;">	结论：若有n个元，那么必须有恰n个线性无关的方程，才能解出n个元的值	</span></span>
<span class="line"><span style="color:#24292e;">解方程组：</span></span>
<span class="line"><span style="color:#24292e;">	做法：</span></span>
<span class="line"><span style="color:#24292e;">		法一：高斯消元法：上三角+回代</span></span>
<span class="line"><span style="color:#24292e;">		法二：高斯-约旦消元法：直接成对角</span></span>
<span class="line"><span style="color:#24292e;">	本质：</span></span>
<span class="line"><span style="color:#24292e;">		将每一个元都只保留在一个方程中</span></span>
<span class="line"><span style="color:#24292e;">		将其他出现的元都消去</span></span>
<span class="line"><span style="color:#24292e;">		所以，其实每次随便找一个没有被选过的元处理即可</span></span>
<span class="line"><span style="color:#24292e;">		并不一定是变成对角矩阵</span></span>
<span class="line"><span style="color:#24292e;">	特别的，在模p意义下的消元：</span></span>
<span class="line"><span style="color:#24292e;">		如果p是质数，可以直接取逆元</span></span>
<span class="line"><span style="color:#24292e;">		如果p不是质数（一般做法)：</span></span>
<span class="line"><span style="color:#24292e;">			类似辗转相除法处理</span></span>
<span class="line"><span style="color:#24292e;">			复杂度利用势能分析可以得到是O(n^3+n^2logP)</span></span>
<span class="line"><span style="color:#24292e;">行列式：</span></span>
<span class="line"><span style="color:#24292e;">	定义：</span></span>
<span class="line"><span style="color:#24292e;">		对于一个n阶方阵A，对于所有长度为n的排列p，(-1)^(p的逆序对数)*a[1][p1]*a[2][p2]*...*a[n][pn] 的和就是其行列式，记为det(A)</span></span>
<span class="line"><span style="color:#24292e;">	性质：</span></span>
<span class="line"><span style="color:#24292e;">		上三角矩阵的行列式为其对角线乘积</span></span>
<span class="line"><span style="color:#24292e;">		交换矩阵的两行，行列式*=-1</span></span>
<span class="line"><span style="color:#24292e;">		有两行相同的矩阵的行列式=0</span></span>
<span class="line"><span style="color:#24292e;">		一行*=k，那么行列式*=k</span></span>
<span class="line"><span style="color:#24292e;">		矩阵的一行加上另一行，矩阵的行列式不变</span></span>
<span class="line"><span style="color:#24292e;">		行列式=0等价于矩阵有两个行向量线性相关</span></span>
<span class="line"><span style="color:#24292e;">	求解：</span></span>
<span class="line"><span style="color:#24292e;">		利用高斯消元法将矩阵变成上三角矩阵求其对角线乘积即可</span></span>
<span class="line"><span style="color:#24292e;">矩阵求逆：</span></span>
<span class="line"><span style="color:#24292e;">	矩阵的逆：矩阵A*B=E，那么B是A的逆</span></span>
<span class="line"><span style="color:#24292e;">	处理：</span></span>
<span class="line"><span style="color:#24292e;">		将一个单位矩阵放在A左边然后做高斯-约旦消元使A变成单位矩阵（而不是对角矩阵）</span></span>
<span class="line"><span style="color:#24292e;">		此时，右边的矩阵就是A的逆</span></span>
<span class="line"><span style="color:#24292e;">	proof：</span></span>
<span class="line"><span style="color:#24292e;">		考虑对于B的一个列向量{x1,x2,...,xn}</span></span>
<span class="line"><span style="color:#24292e;">		对于A的每一行，我们可以得到一个方程（因为最终得到是单位矩阵）</span></span>
<span class="line"><span style="color:#24292e;">		一个朴素的做法是对于每一列都做一次消元，复杂度O(n^4)</span></span>
<span class="line"><span style="color:#24292e;">		但是注意到，我们每次消元都只有=右边的列向量改变了</span></span>
<span class="line"><span style="color:#24292e;">		而消元的本质是将左边的矩阵变成单位矩阵，所以可以一起消</span></span>
<span class="line"><span style="color:#24292e;">	扩展：</span></span>
<span class="line"><span style="color:#24292e;">		显然，对于任意的A,C，我们都有办法找到A*B=C（在B存在的情况下）</span></span>
<span class="line"><span style="color:#24292e;">		因为我们的做法和单位矩阵没有任何联系</span></span>
<span class="line"><span style="color:#24292e;">fun fact：</span></span>
<span class="line"><span style="color:#24292e;">	以下等价：</span></span>
<span class="line"><span style="color:#24292e;">		矩阵中存在两向量线性相关</span></span>
<span class="line"><span style="color:#24292e;">		行列式=0</span></span>
<span class="line"><span style="color:#24292e;">		高斯消元消出空向量</span></span>
<span class="line"><span style="color:#24292e;">		矩阵没有逆</span></span>
<span class="line"><span style="color:#24292e;">		方程组无解或有无数解</span></span>
<span class="line"><span style="color:#24292e;">矩阵树定理：</span></span>
<span class="line"><span style="color:#24292e;">	无向图：</span></span>
<span class="line"><span style="color:#24292e;">		度数矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#24292e;">		随便去掉第k行k列后求值</span></span>
<span class="line"><span style="color:#24292e;">	有向图：</span></span>
<span class="line"><span style="color:#24292e;">		外向树：入度矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#24292e;">		内向树：出度矩阵-邻接矩阵</span></span>
<span class="line"><span style="color:#24292e;">		若k为根，则去掉第k行第k列求值</span></span></code></pre></div>`,2),t=[l];function o(c,r,i,y,d,_){return n(),a("div",null,t)}const k=s(p,[["render",o]]);export{h as __pageData,k as default};
