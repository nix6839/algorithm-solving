from sort import (part2_a_top_to_down, part2_b_low_score_student,
                  part2_c_exchange_element)


def test_part2_a_top_down():
    assert part2_a_top_to_down([8, 1, 5, 2]) == [8, 5, 2, 1]
    assert part2_a_top_to_down([15, 27, 12]) == [27, 15, 12]
    assert part2_a_top_to_down([-4, 0, 8, -2]) == [8, 0, -2, -4]


def test_part2_b_low_score_student():
    assert part2_b_low_score_student(
        [('홍길동', 95), ('이순신', 77)]
    ) == ['이순신', '홍길동']
    assert part2_b_low_score_student(
        [('홍길동', 5), ('이순신', 99), ('잡스', 82)]
    ) == ['홍길동', '잡스', '이순신']


def test_part2_c_exchange_element():
    assert part2_c_exchange_element([1, 2, 5, 4, 3], [5, 5, 6, 6, 5], 3) == 26
    assert part2_c_exchange_element([3, 6, 1, 9, 2], [2, 6, 1, 6, 10], 2) == 34
