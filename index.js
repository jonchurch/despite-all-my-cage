import titlesData from "./titles.json";

// (async () => {
//   const sentences = new Array(10)
//     .fill()
//     .map(() => buildRandomSentence(titlesData, 3).join(" "));
//   console.log(sentences);
// })();

function getRandoIndex(length) {
  return Math.floor(Math.random() * length);
}

export function buildRandomSentence(data, numTitles = 3) {
  const list = data.slice();
  const acc = [];
  for (let i = 0; i < numTitles; i += 1) {
    const cageIdx = getRandoIndex(list.length);
    const candidate = list[cageIdx];

    acc.push(candidate);
    list.splice(cageIdx, 1);
  }
  return acc;
}
