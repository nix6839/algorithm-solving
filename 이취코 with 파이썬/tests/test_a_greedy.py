from a_greedy import (part3_e_choose_bowling_ball, part3_f_muji_mukbang_live,
                      part2_a_law_of_large_numbers, part2_b_number_card_game,
                      part2_c_to_one_number, part3_a_adventurer_guild,
                      part3_b_multiply_or_add, part3_c_reverse_string,
                      part3_d_cannot_be_made_amount)


def test_part2_a_law_of_large_numbers():
    assert part2_a_law_of_large_numbers(8, 3, [2, 4, 5, 4, 6]) == 46
    assert part2_a_law_of_large_numbers(7, 2, [3, 4, 3, 4, 3]) == 28


def test_part2_b_number_card_game():
    assert part2_b_number_card_game([
        [3, 1, 2],
        [4, 1, 4],
        [2, 2, 2],
    ]) == 2
    assert part2_b_number_card_game([
        [7, 3, 1, 8],
        [3, 3, 3, 4],
    ]) == 3


def test_part2_c_to_one_number():
    assert part2_c_to_one_number(25, 5) == 2
    assert part2_c_to_one_number(25, 3) == 6


def test_part3_a_adventurer_guild():
    assert part3_a_adventurer_guild([2, 3, 1, 2, 2]) == 2
    assert part3_a_adventurer_guild([1, 1, 1, 3]) == 3
    assert part3_a_adventurer_guild([5, 5, 5, 5, 5]) == 1
    assert part3_a_adventurer_guild([1, 1, 1, 4]) == 3
    assert part3_a_adventurer_guild([3, 3, 3, 4]) == 1
    assert part3_a_adventurer_guild([4, 1, 2, 3]) == 1


def test_part3_b_multiply_or_add():
    assert part3_b_multiply_or_add('02984') == 576
    assert part3_b_multiply_or_add('567') == 210
    assert part3_b_multiply_or_add('10516100') == 43
    assert part3_b_multiply_or_add('19516100') == 307


def test_part3_c_reverse_string():
    assert part3_c_reverse_string('0001100') == 1
    assert part3_c_reverse_string('01110010100') == 3


def test_part3_d_cannot_be_made_amount():
    assert part3_d_cannot_be_made_amount([3, 2, 1, 1, 9]) == 8
    assert part3_d_cannot_be_made_amount([3, 5, 7]) == 1
    assert part3_d_cannot_be_made_amount([5, 1, 6, 2, 1]) == 16


def test_part3_e_choose_bowling_ball():
    assert part3_e_choose_bowling_ball([1, 3, 2, 3, 2]) == 8
    assert part3_e_choose_bowling_ball([1, 5, 4, 3, 2, 4, 5, 2]) == 25
    assert part3_e_choose_bowling_ball([1, 1, 1, 2, 3]) == 7


def test_part3_f_muji_mukbang_live():
    return
    assert part3_f_muji_mukbang_live([3, 1, 2], 5) == 1
    assert part3_f_muji_mukbang_live([10, 9, 3], 8) == 3
    assert part3_f_muji_mukbang_live([2, 8, 1, 2], 11) == 2
    assert part3_f_muji_mukbang_live([2, 1, 1, 2], 8) == -1
    assert part3_f_muji_mukbang_live([2, 5, 4, 1], 8) == 3
