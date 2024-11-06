const scores = [98, 85, 91, 78, 87, 96, 72];

const sortedScores = scores.sort((a, b) => b - a);

const [top1, top2, top3, ...otherScores] = sortedScores;

console.log("Top scores:", top1, top2, top3);
console.log("Other scores:", otherScores);
