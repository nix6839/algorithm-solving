'''
2. 큰 수의 법칙
'''


from typing import List


def a_law_of_large_numbers(M: int, K: int, nums: List[int]) -> int:
    '''
    M (1 <= M <= 10,000): 숫자가 더해지는 횟수
    K (1 <= K <= 10,000): 똑같은 인덱스가 연속으로 K번까지만 더해질 수 있다.
    nums: 숫자들이 담겨있는 배열 (2 <= len(nums) <= 1000)
    '''
    max_num, second_num, *_ = sorted(nums, reverse=True)

    second_num_count = M // K

    total_max_num = (M - second_num_count) * max_num
    total_second_num = second_num_count * second_num

    return total_max_num + total_second_num


if __name__ == '__main__':
    def main():
        _N, M, K = map(int, input().split())
        nums = list(map(int, input().split()))
        print(a_law_of_large_numbers(M, K, nums))

    main()
