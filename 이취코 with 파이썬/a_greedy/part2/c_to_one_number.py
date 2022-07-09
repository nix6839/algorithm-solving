'''
p99. 1이 될 때까지
'''


def c_to_one_number(N: int, K: int) -> int:
    '''
    N >= K

    N:
    K:
    '''
    count = 0
    while N != 1:
        count += 1
        if N % K == 0:
            N //= K
        else:
            N -= 1
    return count


if __name__ == '__main__':
    def main():
        N, K = map(int, input().split())
        print(c_to_one_number(N, K))

    main()
