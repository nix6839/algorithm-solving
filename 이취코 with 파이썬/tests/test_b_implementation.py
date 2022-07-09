from b_implementation import part3_a_lucky_straight, part3_b_resort_string


def test_part3_a_lucky_straight():
    assert part3_a_lucky_straight(123402) == 'LUCKY'
    assert part3_a_lucky_straight(7755) == 'READY'


def test_part3_b_resort_string():
    assert part3_b_resort_string('K1KA5CB7') == 'ABCKK13'
    assert part3_b_resort_string('AJKDLSI412K4JSJ9D') == 'ADDIJJJKKLSS20'
