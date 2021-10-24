import { HatenaStarResponse, Stars } from "./HatenaStarResponse";

class Star {
  public getAllStar(body: string): number {
    const bodyJson: HatenaStarResponse = JSON.parse(body);
    return bodyJson.star_count;
  }
  public getColorStar(body: string, targetColor: keyof Stars): number {
    const bodyJson: HatenaStarResponse = JSON.parse(body);
    const count: Stars = bodyJson.count;
    return Number(count[targetColor]);
  }
}
module.exports = Star;
