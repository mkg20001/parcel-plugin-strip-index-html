# parcel-plugin-strip-index-html

Strips /index.html from URLs in parcel builds

```html
<a href="/my-page/index.html">
```
=>
```html
<a href="/my-page/">
```

## Usage

### parcel

```sh
$ npm i -D parcel-plugin-strip-index-html
```

And that should do it!

### other

```sh
$ npm i -g parcel-plugin-strip-index-html
$ strip-index-html /path/to/outputDir
```
