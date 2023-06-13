// 등차수열
function solution(num, total) {
  const average = (2 * total) / num;
  let lastNum = (average + num - 1) / 2;
  let answer = [];

  for (let i = 0; i < num; i += 1) {
    answer.unshift(lastNum);
    lastNum -= 1;
  }

  return answer;
}
