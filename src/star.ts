import { HatenaStarResponse } from "./HatenaStarResponse";

class Star {
  public getAllStar(body: string): number {
    const body_json: HatenaStarResponse = JSON.parse(body);
    const star_count = body_json.star_count;
    return star_count;
  }
  public getColorStar(body: string): number {
    const body_json: HatenaStarResponse = JSON.parse(body);
    const color = body_json.count.red;
    return color;
  }
}
export { Star };
