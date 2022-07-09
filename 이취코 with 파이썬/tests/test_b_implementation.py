from b_implementation import (part3_a_lucky_straight, part3_b_resort_string,
                              part3_c_compress_string, part3_d_lock_and_key)


def test_part3_a_lucky_straight():
    assert part3_a_lucky_straight(123402) == 'LUCKY'
    assert part3_a_lucky_straight(7755) == 'READY'


def test_part3_b_resort_string():
    assert part3_b_resort_string('K1KA5CB7') == 'ABCKK13'
    assert part3_b_resort_string('AJKDLSI412K4JSJ9D') == 'ADDIJJJKKLSS20'


def test_part3_c_compress_string():
    assert part3_c_compress_string('aabbaccc') == 7
    assert part3_c_compress_string('ababcdcdababcdcd') == 9
    assert part3_c_compress_string('abcabcdede') == 8
    assert part3_c_compress_string('abcabcabcabcdededededede') == 14
    assert part3_c_compress_string('xababcdcdababcdcd') == 17


def test_part3_d_lock_and_key():
    assert part3_d_lock_and_key([
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 1]
    ], [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1]
    ]) == True
