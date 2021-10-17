#!/usr/bin/env node

const Client = require("./ClientCommand");
const Star = require("./star");
const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");

async function main() {
  const client = new Client();
  const body = await client.getStar(argv._);

  const star = new Star();

  if (argv["a"]) {
    const stars = await star.getAllStar(body);
    console.log("You have " + stars + " stars");
  } else if (argv["c"]) {
    const color = argv.c;
    const chalkColor = chalk.keyword(color);
    const colorStars = await star.getColorStar(body, color);
    console.log("You have " + chalkColor(colorStars) + " " + color + " stars");
  } else {
    const stars = await star.getAllStar(body);
    console.log("You have " + stars + " stars");
  }
}

main();
