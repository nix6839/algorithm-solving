from a_greedy import a_law_of_large_numbers, b_number_card_game


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
