'''
p178. 위에서 아래로
'''


from typing import List


def a_top_to_down(N: List[int]) -> List[int]:
    return sorted(N, reverse=True)


if __name__ == '__main__':
    def main():
        N = int(input())
        numbers = [int(input(N)) for _ in range(N)]
        answer = ' '.join(map(str, a_top_to_down(numbers)))
        print(answer)

    main()
