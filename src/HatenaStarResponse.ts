export interface color {
  red: number;
  yellow: number;
  green: number;
  blue: number;
}

export interface HatenaStarResponse {
  uri: string;
  title: string;
  star_count: number;
  count: color;
}
