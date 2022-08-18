from sort import part2_a_top_to_down, part2_b_low_score_student


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
