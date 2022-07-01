from a_greedy import a_law_of_large_numbers


def test_a_law_of_large_numbers():
    assert a_law_of_large_numbers(8, 3, [2, 4, 5, 4, 6]) == 46
    assert a_law_of_large_numbers(7, 2, [3, 4, 3, 4, 3]) == 28
