'''
p311. 모험가 길드
'''


from typing import List


def d_adventurer_guild(adventurers: List[int]) -> int:
    sorted_adventurers = sorted(adventurers)
    group_count = 0

    adventurer_count = 0
    max_fear = 0
    for adventurer in sorted_adventurers:
        max_fear = max(adventurer, max_fear)
        adventurer_count += 1
        if adventurer_count == max_fear:
            group_count += 1
            adventurer_count = 0
            max_fear = 0

    return group_count


if __name__ == '__main__':
    def main():
        _N = int(input())
        adventurers = list(map(int, input().split()))
        print(d_adventurer_guild(adventurers))

    main()
