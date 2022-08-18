from b_implementation import (part3_a_lucky_straight, part3_b_resort_string,
                              part3_c_compress_string, part3_d_lock_and_key)
from sort import part2_a_top_to_down


def test_part2_a_top_down():
    assert part2_a_top_to_down([8, 1, 5, 2]) == [8, 5, 2, 1]
    assert part2_a_top_to_down([15, 27, 12]) == [27, 15, 12]
    assert part2_a_top_to_down([-4, 0, 8, -2]) == [8, 0, -2, -4]
