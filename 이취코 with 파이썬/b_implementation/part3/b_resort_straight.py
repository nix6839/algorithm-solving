'''
p322. 문자열 재정렬
'''


from functools import reduce
from typing import Tuple


def sum_digits(n: int) -> int:
    return reduce(lambda sum, digit: sum + int(digit), str(n), 0)


def split_number(string: str) -> Tuple[str, str]:
    number_str = ''
    other_str = ''

    for char in string:
        if char.isdecimal():
            number_str += char
        else:
            other_str += char

    return (number_str, other_str)


def b_resort_string(string: str) -> str:
    number_str, other_str = split_number(string)

    return "".join(sorted(other_str)) + str(sum_digits(int(number_str)))


if __name__ == '__main__':
    def main():
        string = input()
        print(b_resort_string(string))

    main()
