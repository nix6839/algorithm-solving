const { readFileSync } = require('node:fs');

const input = readFileSync('/dev/stdin', 'utf-8');

const [T, ...STR_K_N_LIST] = input.trim().split('\n');

const K_N_LIST = [];
for (let i = 0; i < STR_K_N_LIST.length; i += 2) {
  const K_N = [STR_K_N_LIST[i], STR_K_N_LIST[i + 1]].map((str) =>
    parseInt(str, 10),
  );
  K_N_LIST.push(K_N);
}

K_N_LIST.forEach(([K, N]) => {
  const apart = Array.from({ length: K }, () => []);
  for (let i = 0; i < K; i += 1) {
    const iFloor = apart[i];
    const belowFloor = apart[i - 1];
    for (let j = 0; j < N; j += 1) {
      const leftRoom = iFloor[j - 1];
      const belowRoom = belowFloor?.[j];
      iFloor[j] = (belowRoom ?? j + 1) + (leftRoom ?? 0);
    }
    if (i + 1 === K) {
      console.log(iFloor[N - 1]);
    }
  }
});
