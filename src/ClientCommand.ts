const got = require("got");

class ClientCommand {
  static readonly URL: string = "http://s.hatena.ne.jp/blog.json?uri=";

  public async getStar(targetURL: string): Promise<string> {
    const res = await got.get(ClientCommand.URL + targetURL);
    return res.body.toString();
  }
}

module.exports = ClientCommand;
