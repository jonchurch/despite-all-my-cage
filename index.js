import { readFile, writeFile } from "fs/promises";
import neatCsv from "neat-csv";

(async () => {
  const csvContent = await neatCsv(await readFile("./cage.csv"));
  console.log(csvContent[0]);

  const movies = csvContent
    .map(({ Movie }) => Movie)
    .filter((value, index, self) => self.indexOf(value) === index);

  await writeFile("./titles.json", JSON.stringify(movies, null, 2));

  const sentences = new Array(10)
    .fill()
    .map(() => buildRandomSentence(movies, 3).join(" "));
  console.log(sentences);
})();

function getRandoIndex(length) {
  return Math.floor(Math.random() * length);
}

function buildRandomSentence(cages, numTitles = 3) {
  const list = cages.slice();
  const acc = [];
  for (let i = 0; i < numTitles; i += 1) {
    const cageIdx = getRandoIndex(list.length);
    const candidate = list[cageIdx];

    acc.push(candidate);
    list.splice(cageIdx, 1);
  }
  return acc;
}
