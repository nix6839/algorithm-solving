class Solution:
    def merge(self, intervals: List[tuple[int, int]]) -> List[tuple[int, int]]:
      ret = []
      for interval in sorted(intervals, key=lambda interval: interval[0]):
        if len(ret) > 0 and interval[0] <= ret[-1][1]:
          ret[-1][1] = max(ret[-1][1], interval[1])
        else:
          ret.append(interval)
      return ret 