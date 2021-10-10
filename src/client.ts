import got from "got";

class Client {
  static readonly URL: string = "http://s.hatena.ne.jp/blog.json?uri=";

  /**
   * name
   *
   */
  public async getStar(): Promise<string> {
    const res = await got.get(
      Client.URL + "https://yoshitaku-jp.hatenablog.com/"
    );
    return res.body.toString();
  }
}
export { Client };
