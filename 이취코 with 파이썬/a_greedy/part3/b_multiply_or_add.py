'''
p312. 곱하기 혹은 더하기
'''


def b_multiply_or_add(number_str: str) -> int:
    total = 0
    for digit_str in number_str:
        digit = int(digit_str)
        if digit in {0, 1} or total in {0, 1}:
            total += digit
        else:
            total *= digit
    return total


if __name__ == '__main__':
    def main():
        number_str = input()
        print(b_multiply_or_add(number_str))

    main()
