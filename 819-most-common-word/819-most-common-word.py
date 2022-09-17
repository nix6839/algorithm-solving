from collections import Counter

class Solution:
    @staticmethod
    def non_smallnumeric_to_space(s: str) -> str:
      return re.sub(r'[^a-z0-9 ]', ' ', s)

    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        most_commons = Counter(
          Solution.non_smallnumeric_to_space(paragraph.lower()).split()
        ).most_common()
        for word, _ in most_commons:
          if word not in banned:
            return word
        return ''
