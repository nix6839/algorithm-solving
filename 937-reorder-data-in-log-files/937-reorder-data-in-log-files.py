class Solution:
    @staticmethod
    def separate_letter_digit_log(logs: List[str]) -> tuple[List[str], List[str]]:
      letter_logs, digit_logs = [], []
      for log in logs:
        if log.split()[1].isdigit():
          digit_logs.append(log)
        else:
          letter_logs.append(log)
      return letter_logs, digit_logs
    
    @staticmethod
    def sorted_letter_logs(logs: List[str]) -> List[str]:
      return sorted(logs, key=lambda log: (log.split()[1:], log.split()[0]))

    def reorderLogFiles(self, logs: List[str]) -> List[str]:
      letter_logs, digit_logs = Solution.separate_letter_digit_log(logs)
      return Solution.sorted_letter_logs(letter_logs) + digit_logs
        