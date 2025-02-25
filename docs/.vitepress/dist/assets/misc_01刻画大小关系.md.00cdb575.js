import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.e7363dcb.js";const h=JSON.parse('{"title":"01刻画大小关系","description":"","frontmatter":{},"headers":[],"relativePath":"misc/01刻画大小关系.md","filePath":"misc/01刻画大小关系.md","lastUpdated":1738666900000}'),l={name:"misc/01刻画大小关系.md"},p=e(`<p>把这些转为markdown源码给我：</p><h1 id="_01刻画大小关系" tabindex="-1">01刻画大小关系 <a class="header-anchor" href="#_01刻画大小关系" aria-label="Permalink to &quot;01刻画大小关系&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">实现：</span></span>
<span class="line"><span style="color:#e1e4e8;">	二分mid，将大于等于数mid的设为1，否则为0，判断目标位置是0还是1</span></span>
<span class="line"><span style="color:#e1e4e8;">适用条件：</span></span>
<span class="line"><span style="color:#e1e4e8;">	处理涉及到大小关系（排序）的操作</span></span>
<span class="line"><span style="color:#e1e4e8;">		例如：中位数，取最值，第k小</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">事实上，在有些题目中，我们不一定会二分mid，而是直接考虑利用01刻画大小关系</span></span>
<span class="line"><span style="color:#e1e4e8;">此时，这更多像是研究问题的一种手段</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">例题：</span></span>
<span class="line"><span style="color:#e1e4e8;">[HEOI2016/TJOI2016] 排序</span></span>
<span class="line"><span style="color:#e1e4e8;">[AGC006D] Median Pyramid Hard </span></span>
<span class="line"><span style="color:#e1e4e8;">联考题：</span></span>
<span class="line"><span style="color:#e1e4e8;">萨雷格兹的网是一颗由 nn 窝卵和 n−1n−1 条蛛丝形成的有根树，树根为编号为 11，且 11 号点在第一层，每窝卵有一个数量。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">萨雷格兹会进行两种操作：</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">0、萨雷格兹排出一批巨型蜘蛛抵御利尼维亚，让所有位于第 xx 层的卵的数量都变成其子树中的最小值。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1、萨雷格兹下了一批卵，让所有位于第 xx 层的卵的数量都变成其子树中的最大值。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">萨雷格兹疲于防守，无力统计她的巢穴的状况，所以最后她需要你告诉她的树根中卵的数量。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">CF2003E2 Turtle and Inversions (Hard Version)</span></span>
<span class="line"><span style="color:#e1e4e8;">solution:</span></span>
<span class="line"><span style="color:#e1e4e8;">	我们将max部分（左边）看作0，min部分（右边）看作1</span></span>
<span class="line"><span style="color:#e1e4e8;">	发现答案的求解强相关与01的分界点，所以枚举之</span></span>
<span class="line"><span style="color:#e1e4e8;">	显然0内部一定降序，1内部同理，而我们要尽量把1往前放，增加10的逆序对</span></span>
<span class="line"><span style="color:#e1e4e8;">	而我们只要考虑那些还没确定的点，那些点就是前面放1，后面放0</span></span>
<span class="line"><span style="color:#e1e4e8;">	这非常好处理，简单分类计算即可</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">实现：</span></span>
<span class="line"><span style="color:#24292e;">	二分mid，将大于等于数mid的设为1，否则为0，判断目标位置是0还是1</span></span>
<span class="line"><span style="color:#24292e;">适用条件：</span></span>
<span class="line"><span style="color:#24292e;">	处理涉及到大小关系（排序）的操作</span></span>
<span class="line"><span style="color:#24292e;">		例如：中位数，取最值，第k小</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">事实上，在有些题目中，我们不一定会二分mid，而是直接考虑利用01刻画大小关系</span></span>
<span class="line"><span style="color:#24292e;">此时，这更多像是研究问题的一种手段</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">例题：</span></span>
<span class="line"><span style="color:#24292e;">[HEOI2016/TJOI2016] 排序</span></span>
<span class="line"><span style="color:#24292e;">[AGC006D] Median Pyramid Hard </span></span>
<span class="line"><span style="color:#24292e;">联考题：</span></span>
<span class="line"><span style="color:#24292e;">萨雷格兹的网是一颗由 nn 窝卵和 n−1n−1 条蛛丝形成的有根树，树根为编号为 11，且 11 号点在第一层，每窝卵有一个数量。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">萨雷格兹会进行两种操作：</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">0、萨雷格兹排出一批巨型蜘蛛抵御利尼维亚，让所有位于第 xx 层的卵的数量都变成其子树中的最小值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1、萨雷格兹下了一批卵，让所有位于第 xx 层的卵的数量都变成其子树中的最大值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">萨雷格兹疲于防守，无力统计她的巢穴的状况，所以最后她需要你告诉她的树根中卵的数量。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">CF2003E2 Turtle and Inversions (Hard Version)</span></span>
<span class="line"><span style="color:#24292e;">solution:</span></span>
<span class="line"><span style="color:#24292e;">	我们将max部分（左边）看作0，min部分（右边）看作1</span></span>
<span class="line"><span style="color:#24292e;">	发现答案的求解强相关与01的分界点，所以枚举之</span></span>
<span class="line"><span style="color:#24292e;">	显然0内部一定降序，1内部同理，而我们要尽量把1往前放，增加10的逆序对</span></span>
<span class="line"><span style="color:#24292e;">	而我们只要考虑那些还没确定的点，那些点就是前面放1，后面放0</span></span>
<span class="line"><span style="color:#24292e;">	这非常好处理，简单分类计算即可</span></span></code></pre></div>`,3),o=[p];function c(t,i,r,y,d,_){return n(),a("div",null,o)}const u=s(l,[["render",c]]);export{h as __pageData,u as default};
