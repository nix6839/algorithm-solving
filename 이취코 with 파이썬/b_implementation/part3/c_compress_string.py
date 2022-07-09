'''
p323. 문자열 압축
https://school.programmers.co.kr/learn/courses/30/lessons/60057?language=python3
'''


from functools import reduce


def compressed_len(to_compress: str, unit_len: int) -> int:
    unit = to_compress[:unit_len]
    count = 1
    ret = 0

    i = unit_len
    while len(unit) != 0:
        next_unit = to_compress[i:i + unit_len]
        if unit != next_unit:
            ret += len(unit)
            if count > 1:
                ret += len(str(count))
                count = 1
            unit = next_unit
        else:
            count += 1
        i += unit_len

    return ret


def c_compress_string(string: str) -> int:
    return reduce(
        lambda min_len, unit: min(min_len, compressed_len(string, unit)),
        range(1, 1 + (len(string) // 2)),
        len(string)
    )


if __name__ == '__main__':
    def main():
        string = input()
        print(c_compress_string(string))

    main()
