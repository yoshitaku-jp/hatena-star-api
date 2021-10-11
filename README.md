# hatena-star-api

[Hatena Star Count API](http://developer.hatena.ne.jp/ja/documents/star/apis/count) wrapper for Node.js (unofficial)

You will get the number of stars on your Hatena blog. 
You can get the number of colored stars.

## Install

`npm install hatena-star-api`

## Usage

If you specify your Hatena blog URL after the command, you will get all the star counts.

```
hatena-star-api <YOUR HATENA BLOG URL>
```

Example
```
hatena-star-api https://yoshitaku-jp.hatenablog.com/
You have 1610 stars
```


If you specify a color with the `-c` option, you can get the number of stars for that color
```
hatena-star-api https://yoshitaku-jp.hatenablog.com/ -c yellow
You have 1605 yellow stars

hatena-star-api https://yoshitaku-jp.hatenablog.com/ -c green
You have 4 green stars
```

## Licence

[MIT](https://github.com/yoshitaku-jp/hatena-star-api/blob/main/LICENSE.txt)

## Author

[yoshitaku-jp](https://github.com/yoshitaku-jp)