import { Client } from "./client";
import { Star } from "./star";

export { Client };

async function main() {
  const client = new Client();
  const body = await client.getStar();

  const star = new Star();
  const stars = await star.getAllStar(body);
  console.log(stars);
  const redStars = await star.getColorStar(body);
  console.log(redStars);
}

main();
