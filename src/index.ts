import { Client } from "./client";
import { Star } from "./star";
const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");

console.log(argv);

async function main() {
  const client = new Client();
  const body = await client.getStar(argv._);

  const star = new Star();

  if (argv["a"]) {
    const stars = await star.getAllStar(body);
    console.log(stars);
  } else if (argv["d"]) {
    const starsDetail = await star.getAllStarDetail(body);
    console.log(starsDetail);
  } else if (argv["c"]) {
    const color = argv.c;
    const chalkColor = chalk.keyword(color);
    const colorStars = await star.getColorStar(body, color);
    console.log(chalkColor(colorStars));
  }
}

main();
