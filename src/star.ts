import { HatenaStarResponse, Stars } from "./HatenaStarResponse";

class Star {
  public getAllStar(body: string): number {
    const bodyJson: HatenaStarResponse = JSON.parse(body);
    const star_count = bodyJson.star_count;
    return star_count;
  }
  public getColorStar(body: string, targetColor: keyof Stars): number {
    const bodyJson: HatenaStarResponse = JSON.parse(body);
    const count: Stars = bodyJson.count;
    const colorStartCount: number = Number(count[targetColor]);
    return colorStartCount;
  }
}
module.exports = Star;
