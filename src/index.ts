#!/usr/bin/env node

const Client = require("./ClientCommand");
const Star = require("./star");
const argv = require("minimist")(process.argv.slice(2));
const chalk = require("chalk");

async function main() {
  if (argv._.length == 0) {
    console.log(
      "The argument does not exist. Please specify the URL of the Hatena blog you want to check."
    );
    return;
  }

  const client = new Client();
  const body = await client.getStar(argv._);

  const star = new Star();

  if (argv["a"]) {
    const stars = await star.getAllStar(body);
    console.log("You have " + stars + " stars");
  } else if (argv["c"]) {
    if (argv["c"] == true) {
      console.log(
        "-c option does not specify a color. Please specify yellow, green, red, or blue in the -c option."
      );
      return;
    }
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
