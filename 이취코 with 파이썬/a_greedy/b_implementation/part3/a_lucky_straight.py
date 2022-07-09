'''
p321. 럭키 스트레이트
'''


from functools import reduce
from typing import Literal


def sum_digits(n: int) -> int:
    return reduce(lambda sum, digit: sum + int(digit), str(n), 0)


def a_lucky_straight(N: int) -> Literal['LUCKY', 'READY']:
    str_n = str(N)
    half_len = len(str_n) // 2

    front_sum = sum_digits(int(str_n[:half_len]))
    rear_sum = sum_digits(int(str_n[half_len:]))

    return 'LUCKY' if front_sum == rear_sum else 'READY'


if __name__ == '__main__':
    def main():
        N = int(input())
        print(a_lucky_straight(N))

    main()
