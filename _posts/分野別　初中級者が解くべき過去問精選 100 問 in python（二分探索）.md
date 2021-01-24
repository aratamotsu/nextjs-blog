---
title: '分野別　初中級者が解くべき過去問精選 100 問 in python（二分探索）'
excerpt: 'レッドコーダーが教える、競プロ・AtCoder上達のガイドライン【中級編：目指せ水色コーダー！】]という記事にある、分野別　初中級者が解くべき過去問精選 100 問をpython解いている。今回は、二分探索の6問！'
coverImage: ''
date: '2020-01-12'
author:
  name: ''
  picture: ''
ogImage:
  url: ''
tag: [test, test2]
---

[レッドコーダーが教える、競プロ・AtCoder上達のガイドライン【中級編：目指せ水色コーダー！】](https://qiita.com/e869120/items/eb50fdaece12be418faa)という記事にある、**分野別　初中級者が解くべき過去問精選 100 問**をpython解いている。

今回は、二分探索の6問！

Google Colabに置いたのは[こちら](https://colab.research.google.com/drive/1onrtz7pAD5LMaJEgvrkPnTWSJZuZfrF4?usp=sharing)

## 18. ALDS_4_B - 二分探索
問題は[ここ](http://judge.u-aizu.ac.jp/onlinejudge/description.jsp?id=ALDS1_4_B&lang=ja)

### 考えたこと
特にない。実際ならsetを使うのだろうけど、復習がてら二分探索を実装してみる。


```python
import sys
n = int(sys.stdin.readline().strip())
q = list(map(int, sys.stdin.readline().split()))
s = int(sys.stdin.readline().strip())
t = list(map(int, sys.stdin.readline().split()))

def binary_search(lis, x):
    left = 0
    right = len(lis)-1
    while right >= left:
        mid = int((left + right)/2)
        if x == lis[mid]:
            return mid
        elif x > lis[mid]:
            left = mid+1
        else:
            right = mid-1
    
    # 見つからなければ-1を返す
    return -1

count = 0
for x in t:
    if binary_search(q, x) > -1:
        count += 1

print(count)
```


## JOI 2009 本選 2 - ピザ
問題は[ここ](https://atcoder.jp/contests/joi2009ho/tasks/joi2009ho_b)

### 19. 考えたこと
初見で全然わからんからとりあえず飛ばして次の問題に行った。分からなさ度合いからして、問題の捉え方がズレていると思われる。

あー、1つの店舗は何枚でもピザを届けていいのか。1つの店舗はピザを届けていい配達先は、1つだけかと思ってしまっていた。それなら、それぞれの注文に対して最寄りの店舗が注文を受ければいい。ソートして二分探索を繰り返すだけ。

勘違いしている最中は、2つの店舗の中間地点から注文があったときに愛どちらの店舗がその注文を受けたら全体として移動距離が最短になるのかとか考えていて、見通しすらできていなかった。


```python
import sys

d = int(sys.stdin.readline().strip())
n = int(sys.stdin.readline().strip())
m = int(sys.stdin.readline().strip())
D = [0]
for _ in range(n-1):
    D.append(int(sys.stdin.readline().strip()))
D.append(d)
D.sort()
k = [int(sys.stdin.readline().strip()) for _ in range(m)]
k.sort()

dist = 0

for x in k:
    left = 0
    right = n
    while right - left > 1:
        mid = int((left + right)/2)
        if x >= D[mid]:
            left = mid
        else:
            right = mid
    dist += min(abs(x-D[left]), abs(x-D[right]))

print(dist)    
```


## 20. ABC 077 C - Snuke Festival
問題は[ここ](https://atcoder.jp/contests/abc077/tasks/arc084_a)

### 考えたこと
- $A_i$の下になることのできる$B$のindexを求める
- $B_i$の下になることのできる$C$の数を求める
- それぞれ掛けて足し上げる

このやり方でやると、結構ギリギリでTLEした。$B$を基準として二分探索をしていくとより見通しが良くなるので変更する。


```python
import sys
import bisect
from collections import Counter

N = int(sys.stdin.readline().strip())
A = sorted(list(map(int, sys.stdin.readline().split())))
B = sorted(list(map(int, sys.stdin.readline().split())))
C = sorted(list(map(int, sys.stdin.readline().split())))
count = 0

for i in range(N):
    a_res = bisect.bisect_left(A, B[i])
    c_res = N - bisect.bisect_right(C, B[i])
    count += a_res * c_res

print(count)
```


## 21. ABC 023 D - 射撃王　
問題は[ここ](https://atcoder.jp/contests/abc023/tasks/abc023_d)

### 考えたこと
[問題解決力を鍛える！アルゴリズムとデータ構造]()のp103に出てきていた。判定問題として捉えて二分探索によって範囲を狭めていく。


```python
import sys

N = int(sys.stdin.readline().strip())
hs = [map(int, sys.stdin.readline().split()) for _ in range(N)]
h, s = [list(i) for i in zip(*hs)]

def shoot_king(s, h):
    N = len(s)
    INF = 10**20
    bottom = 0
    top = INF

    while(top - bottom > 1):
        mid = int((top + bottom) / 2)
        ok = True
        time = [0]*N

        for i in range(N):
            if mid < h[i]:
                ok = False
            else:
                time[i] = (mid - h[i]) / s[i]

        time.sort()

        for i in range(N):
            if time[i] < i:
                ok = False

        if ok:
            top = mid
        else:
            bottom = mid
    return(top)

print(shoot_king(s, h))
```


## 22. ABC 054 B - ムーアの法則
問題は[ここ](https://atcoder.jp/contests/arc054/tasks/arc054_b)

### 考えたこと
微分すれば求まるよね。微分した式=0となる$x$を二分探索していくということだろうか。$p$が小さいときは、$x=0$すなわち、コンピューターの発展を待たずに即計算開始をした方がいいはず。その条件を忘れずに。


```python
import sys
from math import log

p = float(sys.stdin.readline().strip())

# 計算終了までの時間を求める関数
def cal_time(x, p):
    return x + p * 2**(-2*x/3)

# 微分したもの
def der(x, p):
    return 1 - 2/3 * p * log(2) * 2**(-2*x/3)


if p <= 3 / 2 / log(2):
    print(cal_time(0, p))
else:
    left = 0
    right = 10**20
    eps = 10**(-8)

    while right - left > eps:
        mid = (left + right) / 2.
        if der(mid, p) > 0:
            right = mid
        else:
            left = mid

    print(cal_time(left, p))
```


## 23. JOI 2008 本選 3 - ダーツ
問題は[ここ](https://atcoder.jp/contests/joi2008ho/tasks/joi2008ho_c)

### 考えたこと
うーんわからん。JOIの問題難しいな。頭が固いのかしら。全ての取りうる点数のリストを作りソートして二分探索では間に合わない。

問題の内容を勘違いしていたのを除いて、初めて（求められている計算量での）実装方法が思いつかなったので、解説を見てしまった。この工夫は、なるほど、解説を読んだあとには、「なんか思いつけた気がする！」と感じるけど、類似の方法を見たことがない限り思いつくのはなかなか難しいのではないだろうか。一回知れば、似たような状況でも次は思いつけそうなので、教育的な問題。


```python
import sys
from itertools import combinations_with_replacement
from bisect import bisect_right

N, M = map(int, sys.stdin.readline().split())
p = [int(sys.stdin.readline().strip()) for _ in range(N)]

pairs = [sum(i) for i in combinations_with_replacement(p, 2)]
pairs.extend(p)
pairs.append(0)
pairs = list(set(pairs))
pairs.sort()

# M以下のpairsのみを調べたい
res = 0
for i in range(len(pairs)):
    if M > pairs[i]:
        tmp = bisect_right(pairs, M - pairs[i])-1
        res = max(res, pairs[tmp] + pairs[i])
    else:
        break

print(res)
```


### 解いたあと
`bisect_right `と`bisect_left`のどちらを使うべきか、もう少し早く判断できるようになりたいものです。