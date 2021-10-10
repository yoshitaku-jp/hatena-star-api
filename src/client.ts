import got from "got";

class Client {
  static readonly URL: string = "http://s.hatena.ne.jp/blog.json?uri=";

  /**
   * name
   *
   */
  public async getStar(targetURL: string): Promise<string> {
    const res = await got.get(Client.URL + targetURL);
    return res.body.toString();
  }
}
export { Client };
