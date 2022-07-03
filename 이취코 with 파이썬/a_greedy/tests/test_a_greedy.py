from a_greedy import (a_law_of_large_numbers, b_number_card_game,
                      c_to_one_number)
from a_greedy.d_adventurer_guild import d_adventurer_guild
from a_greedy.e_multiply_or_add import e_multiply_or_add


def test_a_law_of_large_numbers():
    assert a_law_of_large_numbers(8, 3, [2, 4, 5, 4, 6]) == 46
    assert a_law_of_large_numbers(7, 2, [3, 4, 3, 4, 3]) == 28


def test_b_number_card_game():
    assert b_number_card_game([
        [3, 1, 2],
        [4, 1, 4],
        [2, 2, 2],
    ]) == 2
    assert b_number_card_game([
        [7, 3, 1, 8],
        [3, 3, 3, 4],
    ]) == 3


def test_c_to_one_number():
    assert c_to_one_number(25, 5) == 2
    assert c_to_one_number(25, 3) == 6


def test_d_adventurer_guild():
    assert d_adventurer_guild([2, 3, 1, 2, 2]) == 2
    assert d_adventurer_guild([1, 1, 1, 3]) == 3
    assert d_adventurer_guild([5, 5, 5, 5, 5]) == 1
    assert d_adventurer_guild([1, 1, 1, 4]) == 3
    assert d_adventurer_guild([3, 3, 3, 4]) == 1
    assert d_adventurer_guild([4, 1, 2, 3]) == 1


def test_e_multiply_or_add():
    assert e_multiply_or_add('02984') == 576
    assert e_multiply_or_add('567') == 210
    assert e_multiply_or_add('10516100') == 37
