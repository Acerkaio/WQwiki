# c++语法

## template相关：
### 用法1：
给函数内的变量类型赋值

例如：
```cpp
template<typename T>
ll plus(T x,T y){return x+y;}
```
那么，函数有两种调用方法：
```cpp
cout<<plus<ll>(1,2);//钦定T是ll
cout<<plus(1,2);//推导T是int，类似auto
```
### 用法2：
给函数内常量赋值

例如：
```cpp
const int mod1=998244353,mod2=1e9+7;
template<const int mod>
ll ksm(ll x,ll y){
	ll res=1;
	for(;y;y>>=1){
		if(y&1) res=res*x%mod;
		x=x*x%mod;
	}
	return res;
}
cout<<ksm<mod1>(4,1e9);
```
## lambda相关：
基本语法:

```cpp
[capture_list](parameters) ->return_type{function_body}
```
### capture_list:
类型：传值，引用

例如：
```cpp
[x,y,&z](int a){return a;}//传值x,y,引用z
[=,&x](int a){return a;}//传值除了x以外的所有东西，引用x
[&,x](int a){return a;}//引用除了x以外的所有东西，传值x
```
### return_type:
可以省略，让编译器自行推导

也可以钦定

注意，`lambda` 可以当做一个参数传递给函数，类型就是 `auto`

例如：
```cpp
sort(a+1,a+1+n,[](int x,int y){return x<y;});
```