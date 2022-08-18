'''
p180. 성적이 낮은 순서로 학생 출력하기
'''


from typing import List, Tuple

StudentAndScore = Tuple[str, int]


def parse_student_and_score(parsed: str) -> StudentAndScore:
    student, score = parsed.split()
    return (student, int(score))


def b_low_score_student(sc: List[StudentAndScore]) -> List[str]:
    return list(map(
        lambda sc: sc[0],
        sorted(sc, key=lambda sc: sc[1])
    ))


if __name__ == '__main__':
    def main():
        N = int(input())
        student_and_score_list = [
            parse_student_and_score(input()) for _ in range(N)
        ]
        answer = ' '.join(
            map(str, b_low_score_student(student_and_score_list))
        )
        print(answer)

    main()
