'''
p314. 만들 수 없는 금액
TODO: 재풀이 필요
'''

from typing import List


def d_cannot_be_made_amount(coins: List[int]) -> int:
    min_amount = 1

    for coin in sorted(coins):
        if min_amount < coin:
            break
        min_amount += coin

    return min_amount


if __name__ == '__main__':
    def main():
        _N = int(input())
        coins = list(map(int, input().split()))
        print(d_cannot_be_made_amount(coins))

    main()

# 이전 풀이
'''
import itertools
from typing import List

def can_be_made_amount(amount: int, coins: List[int]) -> bool:
    if len(coins) == 0:
        return False

    for i, coin in enumerate(coins):
        if coin > amount:
            continue
        if coin == amount:
            return True
        if can_be_made_amount(amount - coin, coins[i + 1:]):
            return True
    return False

def g_cannot_be_made_amount(coins: List[int]) -> int:
for amount in itertools.count(1):
    if not can_be_made_amount(amount, coins):
        return amount
    return 0
'''
