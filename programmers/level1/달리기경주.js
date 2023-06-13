// 해쉬 테이블
function solution(players, callings) {
  return changeRank(players, callings);
}

function changeRank(players, callings) {
  const playerInfo = makeTable(players);

  callings.forEach((call) => {
    const callIndex = playerInfo[call];
    const frontName = players[callIndex - 1];

    players[callIndex] = frontName;
    players[callIndex - 1] = call;

    playerInfo[call] = callIndex - 1;
    playerInfo[frontName] = callIndex;
  });

  return players;
}

function makeTable(players) {
  const playerInfo = {};

  players.forEach((player, index) => {
    playerInfo[player] = index;
  });

  return playerInfo;
}
