class Solution:
    @staticmethod
    def remove_non_alphanumeric(s: str) -> str:
      return re.sub(r'[^a-zA-Z0-9]', '', s)
    
    @staticmethod
    def cut_half_str(s: str) -> tuple[str, str]:
      half_len = len(s) // 2
      if (len(s) % 2 == 0):
        return (s[:half_len], s[half_len:])
      return (s[:half_len], s[half_len + 1:])

    def isPalindrome(self, s: str) -> bool:
        s = Solution.remove_non_alphanumeric(s).lower()
        front, rear = Solution.cut_half_str(s)
        return front == rear[::-1]
