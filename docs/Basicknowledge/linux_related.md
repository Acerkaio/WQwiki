# linux_related
```
编译命令：g++ dd.cpp -o dd -O2 -std=c++14 -static 
文本比较：diff dd.out dd.ans -b
复制文件：cp dd$1.in dd.in
查看时间使用：time ./dd
查看峰值动态空间：/usr/bin/time -v ./dd
查看静态空间：size dd 其中的data+bss是单位为B的静态空间
将命令输出的结果放进某个文件里：
	直接输出结果：./checker > dd.out
	输出调试结果：./checker 2>dd.out
显示目标文件的若干行：awk "NR>=1&&NR<=4" dd.out
扩大栈空间：ulimit -s unlimited 
使某个可执行程序有权限：chmod 777 checker

```