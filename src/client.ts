import request from "request";

class Client {
  static readonly URL: string = "http://s.hatena.ne.jp/blog.json?uri=";

  /**
   * name
   *
   */
  public getStar(): void {
    request.get(
      Client.URL + "https://yoshitaku-jp.hatenablog.com/",
      function (err, res, body) {
        if (err) {
          console.log("Error: " + err.message);
          return;
        }
        console.log(body);
        return body;
      }
    );
  }
}
export { Client };
