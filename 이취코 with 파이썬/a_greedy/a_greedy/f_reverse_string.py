'''
313p. 문자열 뒤집기
'''


def f_reverse_string(binary_str: str) -> int:
    zero_count = 0
    one_count = 0
    prev_binary_char = None

    for binary_char in binary_str:
        prev_is_zero = prev_binary_char == '0'
        prev_is_one = prev_binary_char == '1'

        if binary_char == '0' and not prev_is_zero:
            zero_count += 1
        elif binary_char == '1' and not prev_is_one:
            one_count += 1
        prev_binary_char = binary_char

    return min(zero_count, one_count)


if __name__ == '__main__':
    def main():
        binary_str = input()
        print(f_reverse_string(binary_str))

    main()
