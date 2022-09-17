from collections import Counter

class Solution:
    @staticmethod
    def non_alphanumeric_to_space(s: str) -> str:
      return re.sub(r'[^a-zA-Z0-9 ]', ' ', s)

    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        non_banned_words = [word
                            for word in Solution.non_alphanumeric_to_space(paragraph)
                            .lower().split()
                            if word not in banned]
        most_common_word, _ = Counter(non_banned_words).most_common(1)[0]
        return most_common_word
