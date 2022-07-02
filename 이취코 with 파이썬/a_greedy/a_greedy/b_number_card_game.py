'''
3. 숫자 카드 게임
'''


from typing import List


def b_number_card_game(card_map: List[List[int]]) -> int:
    '''
    card_map: 숫자들이 담겨 있는 2차원 배열 각 숫자는 1 <= N <= 10,000
    '''
    ret = 0
    for cards in card_map:
        ret = max(ret, min(cards))

    return ret


if __name__ == '__main__':
    def main():
        N, _M = map(int, input().split())
        card_map: List[List[int]] = []
        for _ in range(N):
            card_map.append(list(map(int, input().split())))
        print(b_number_card_game(card_map))

    main()
