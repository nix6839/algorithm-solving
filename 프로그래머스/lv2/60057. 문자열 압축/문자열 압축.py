from functools import reduce


def compressed_len(to_compress: str, unit_len: int) -> int:
    unit = ''
    count = 1
    ret = 0

    for i in range(0, len(to_compress), unit_len):
        temp = to_compress[i:i + unit_len]
        if unit == temp:
            count += 1
        elif unit != temp:
            ret += len(temp)
            if count > 1:
                ret += len(str(count))
                count = 1
            unit = temp

    if count > 1:
        ret += len(str(count))

    return ret


def solution(string: str) -> int:
    return reduce(
        lambda min_len, unit: min(min_len, compressed_len(string, unit)),
        range(1, 1 + (len(string) // 2)),
        len(string)
    )
