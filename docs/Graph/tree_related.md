# tree_related

## 树的各种序列

### dfs序1（最常见的dfs序）
#### 定义
当且仅当递归进入一个节点时加入序列。

#### 性质
1. **性质1**：$lca(dfn[i], dfn[i + 1]) = fa[i + 1]$ ，这是充要条件，可以用来判断其是否是dfs序。
2. **性质2**：点 $x$ 子树对应的序列就是 $[dfn[x], dfn[x]+sz[x] - 1]$，该性质用来处理涉及子树的操作。
3. **性质3**：任何一个点有且仅有一个位置，序列长度为 $n$，这是一个一一对应。
4. **性质4**：对于点 $x, y(dfn[y]>dfn[x])$，$dfn[y]$ 越大，$dep[lca(x, y)]$ 越小。这就是说，对于同一个左端点，右端点向右移动，$lca'$ 必然是 $lca$ 的祖先。进一步的有，区间 $[x, y]$ 的子区间的 $lca$ 必然是 $lca(x, y)$ 的孙子，这就是单调性。
5. **性质5**：dfs序上任何一个区间 $[x, y]$ 的 $lca(x, y)$ 必然等于区间内的某个相邻点对的 $lca$。

#### 应用
1. 处理对子树的操作。
2. 处理 链加 等能差分操作的单点查询。
3. $O(1)$ 在线求 $lca$。

### dfs序2
#### 定义
递归进入 $x$ 和回溯出 $x$ 时加入 $x$。

#### 性质
1. 记 $x$ 第一次出现是 $ld[x]$，第二次是 $rd[x]$，那么 $x$ 子树对应序列中 $[ld[x], rd[x]]$。
2. 给 $ld[x]$ 加点权，$rd[x]$ 减点权，那么到 $ld[x]$ 的前缀和就是 $x$ 到根节点的路径上的点权和。
3. 任何一个点只有两次出现，序列长度 $2 * n$。

#### 应用
1. 查询到根节点的路径点权和。
2. 处理点的树上莫队。

### dfs序3
#### 定义
每次经过一条边就加入此边的终点（将树看作有向图）。

#### 性质
1. $|dep[dfn[i]] - dep[dfn[i + 1]]| = 1$。
2. 任意两点的 $lca$ 一定会出现在两点之间。
3. 一个点的出现次数等于它的儿子数 + 1，序列长度 $2 * n - 1$。

#### 应用
1. 可以维护有关树链的最优性问题。
2. 处理边的树上莫队。
3. $O(1)$ 在线求 $lca$（时代的眼泪，被dfs序1代替了）。

### 刷题
- CF2002D：对dfs序的性质作了详细的分析。
- CF1192B：就是要找一条边权和最大的链，直接用dfs序3即可。

## 树的(带权）重心
### 定义
1. **定义1**：删去该点后各连通块点权和都小于等于 $\lfloor\frac{总点权和}{2}\rfloor$。
2. **定义2**：到所有点距离乘点权的和最小的点。
3. **定义3**：删去该点后各连通块点权和最大值最小的点。

以上各定义完全等价，可以用调整法证明：考虑一条边左右两个连通块，分析移动重心的影响。

### 注意
1. 树的重心只与树的形态相关，与树的边权无关。
2. 改变边权可以改变边权和，但不能改变重心。

### 性质
1. **性质1**：树的重心最多两个 。具体的，当且仅当存在一条边平分了该树时，该树有两个重心，且就是该边的两个端点。
2. **性质2**：两棵树连起来以后，新的重心必在两原重心的路径上。
3. **性质3**：增添一个节点，树的重心最多移动一位。具体的，对于增操作，可以快速判断重心如何移动。在一般的树上，树的重心在严格虚树上最多移动一位。
4. **性质4**：树上任意一个点权和 $\geq\frac{总点权和}{2}$ 的连通块必然经过重心。

### 特别说明
序列完全可以套用上述所有性质。

### 扩展
处理树上距离和的最优化问题，经典的：处理形如 $\min(sz, n - sz)$ 的式子，通常用重心定根，那么每一条边的方向都确定了。

### 刷题
#### ABC362F
题目要求两两配对使距离和最大，考虑分离贡献，发现一条边的贡献形如 $\min(sz, n - sz)$。观察到这个形式，联想到重心，发现这等价于各子树的点都要往外配对，根据定义1，这理论上是可行的。考虑怎么构造，每次将最大的连通块和最小的连通块配对，每次配对完动态维护大小。而官方题解比较厉害，直接在dfs序列上将 $a[i]$ 和 $a[i + (n / 2)]$ 配对，这充分利用了定义1。

## 树的直径与中心
### 直径定义
树上最远点对之间的路径。

### 中心定义
到最远点最近的点。

### 求法
1. **求直径**：两次dfs（边权为正），DP求（没有要求）。
2. **求中心**：换根DP。

### 以下性质基于边权为正
1. **性质1**：任何一个点在树上的最远点是直径的端点。
2. **性质2**：两个点集合并成一个点集，新点集必存在一条直径满足以下两者之一：是其中一个点集的直径；两端点分别是两个点集的直径端点。
3. **性质3**：任何一个点到距其最远点的路径一定会过中心。特别的，所有直径都经过中心，且中心会尽量的平分直径。
4. **性质4**：以所有直径上的点建出虚树，虚树只有两种形态：扫帚形，菊花形。

### 刷题
#### 题目1
给定一棵树，称一个长为 $k$ 的序列是好的，当且仅当对于所有 $1\leq i < k$，$a[i + 1]$ 是 $a[i]$ 在树上最远的点之一。求所有长为 $k$ 的好的序列的数量。$k\leq 1e9$，$n\leq 1e4$。
##### solution
显然矩阵加速。直接暴力是三次方的。根据性质4，以中心为根，其必然是从一颗子树到另一子树。直接做还是三次方，但是感觉到这些路径都是一样的，只是有子树内数量的限制。直接利用经典结论，按子树内路径数量对子树分类，不同的类只有根号级别，那么就行了。

#### 题目2
P2056：给定一棵树，初始节点颜色都是黑色。每次操作可以将某点的颜色反转，或是询问当前黑点集的直径长。$\lim: n\leq 1e5, m\leq 1e5$。
##### solution
线段树维护最远点对即可，复杂度 $O(n\log^2(n))$，也有点分树的做法。

#### 题目3
CF1192B：动态直径。操作是修改边权，强制在线。
##### solution
首先注意到边权始终为正数，那么就能套用上述性质。注意到距离在动态变化，那线段树上维护的信息也可能会变化。但观察到会变的只有从子树内到子树外的，所以可以用类似于一个“假区间修改”的东西让子树那一片的dfs序列的东西重新pushup。至于距离的动态维护，当然不用树剖，只需要动态维护一下 $dis$ 数组即可，可以用树状数组结合dfs序实现子树加，单点查询。

#### 题目4
P1099 树网的核：略。

#### 题目5
[AGC001C] Shorten Diameter：分析了边权为1的特殊情况，因为考虑直径问题，所以想办法确定中心，在边权为1时，分直径长奇偶性考虑即可。

## lca的性质
$lca$ 具有单调性，可以类比 $gcd$ 和 $Min$。$lca(a[l], a[l + 1], \cdots, a[r])$ 必定是 $lca(a[l], a[l + 1]), lca(a[l + 1], a[l + 2]), \cdots, lca(a[r - 1], a[r])$ 之一。

## 虚树
### 定义
只包含关键点集合和必要的交点的树。

### 建虚树
线性对数建。

### 性质（以下基于上述建虚树的办法）
1. 建出的树很可能有一些没什么用的点（即和上述定义略有不同）。例如根节点，大概率不是别的点的 $lca$，但还是存在。只有在关键点中有根节点时，建出的才是严格意义上的虚树。
2. 虚树的结点集合的组成：关键点集合、相邻关键点 $lca$ 的集合。参考 $lca$ 的性质。
3. 虚树的总结点数至多 $2 * n - 1$ 个，其中 $n$ 是关键点数量。

## 树链剖分
### 本质
求出了一个性质极强的dfs序。

### 性质
1. 本身是dfs序，拥有dfs序的所有性质（详见上）。
2. 每条重链对应dfs序上的一个区间。
3. 重链的终结点必是叶节点。
4. 重链只有 $\log$ 条（常数是1）。
5. 任何一条链都可以被表示成序列上 $\log$ 个区间的连续拼接（只会经过 $\log$ 个轻边）。
6. 除了 $lca$ 处的重链，其他重链都会经过其前缀。

### 常见问题
#### 求解的答案只和询问的链有关的
利用性质5，只需要考虑以下核心点：
1. 能快速回答序列上的区间询问。
2. 能快速合并答案（拼接）。

通常，如果线段树实现了序列上的问题，那么快速合并答案就是好做的。一般来说，此类问题难点都在于序列上的区间询问。时刻铭记链查询等价于dfs序上的若干区间拼接查询。

#### 依赖树形态的快速操作问题
利用性质5，只需要考虑以下核心点：
1. 如何快速维护重链上的区间查询。
2. 如何快速维护轻儿子的贡献。

常见的做法：
1. 将轻儿子的贡献放在重链上维护。
2. 每次修改考虑轻儿子贡献的变化。

经典问题：动态DP。