export interface Stars {
  red: string;
  yellow: string;
  green: string;
  blue: string;
}

export interface HatenaStarResponse {
  uri: string;
  title: string;
  star_count: number;
  count: Stars;
}
