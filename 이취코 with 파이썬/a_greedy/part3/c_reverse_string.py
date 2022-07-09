'''
p313. 문자열 뒤집기
'''


def c_reverse_string(binary_str: str) -> int:
    zero_count = 0
    one_count = 0
    prev_binary_char = None

    for binary_char in binary_str:
        if binary_char == '0' and prev_binary_char != '0':
            zero_count += 1
        elif binary_char == '1' and prev_binary_char != '1':
            one_count += 1
        prev_binary_char = binary_char

    return min(zero_count, one_count)


if __name__ == '__main__':
    def main():
        binary_str = input()
        print(c_reverse_string(binary_str))

    main()
