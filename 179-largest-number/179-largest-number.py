class Solution:
  def compare(self, n1: int, n2: int) -> bool:
    return str(n1) + str(n2) < str(n2) + str(n1)

  def my_sort(self, nums: List[int]) -> List[int]:
    for i in range(len(nums)):
      j = i
      for j in range(i, 0, -1):
        if not self.compare(nums[j - 1], nums[j]):
          break
        nums[j], nums[j - 1] = nums[j - 1], nums[j]

    return nums
    
  def largestNumber(self, nums: List[int]) -> str:
    return str(int(''.join(map(str, self.my_sort(nums)))))
