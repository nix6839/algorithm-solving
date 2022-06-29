'''
2. 큰 수의 법칙
'''


def law_of_large_numbers():
    '''
    asdf
    '''


if __name__ == '__main__':
    # N (2 <= N <= 1,000) : 배열의 크기
    # M (1 <= M <= 10,000): 숫자가 더해지는 횟수
    # K (1 <= K <= 10,000): 똑같은 인덱스가 연속으로 K번까지만 더해질 수 있다.
    N, M, K = map(int, input().split())
    max_num, second_max_num, *_ = sorted(
        list(map(int, input().split())), reverse=True)

    print(max_num, second_max_num)
