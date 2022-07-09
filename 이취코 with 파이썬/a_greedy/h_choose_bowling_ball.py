'''
p315. 볼링공 고르기
TODO: 재풀이 필요
'''

from typing import Dict, List


def h_choose_bowling_ball(weights: List[int]) -> int:
    '''
    M: 공의 최대 무게 (1 <= M <= 10)
    '''
    count_per_weight: Dict[int, int] = {}

    for weight in weights:
        if weight not in count_per_weight:
            count_per_weight[weight] = 1
        else:
            count_per_weight[weight] += 1

    bowling_ball_count = len(weights)
    number_of_cases = 0

    for _, count in count_per_weight.items():
        bowling_ball_count -= count
        number_of_cases += (bowling_ball_count * count)

    return number_of_cases


if __name__ == '__main__':
    def main():
        _N, _M = map(int, input().split())
        weights = list(map(int, input().split()))
        print(h_choose_bowling_ball(weights))

    main()
