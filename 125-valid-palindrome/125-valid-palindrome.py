class Solution:
    @staticmethod
    def remove_non_alphanumeric(s: str) -> str:
      return re.sub(r'[^a-zA-Z0-9]', '', s)

    def isPalindrome(self, s: str) -> bool:
        s = Solution.remove_non_alphanumeric(s).lower()
        return s == s[::-1]
