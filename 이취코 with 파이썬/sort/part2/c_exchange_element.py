'''
p182. 두 배열의 원소 교체
'''


from typing import List


def c_exchange_element(target_numbers: List[int], numbers: List[int], max_exchange: int) -> int:
    target_numbers = sorted(target_numbers)
    numbers = sorted(numbers, reverse=True)

    for i in range(max_exchange):
        target_numbers[i] = numbers[i]

    return sum(target_numbers)


if __name__ == '__main__':
    def main():
        _N, K = map(int, input().split())
        A, B = [list(map(int, input().split())) for _ in range(2)]
        print(c_exchange_element(A, B, K))

    main()
