# parcel-plugin-strip-index-html

Strips /index.html from URLs in parcel builds

<table>
  <tr>
    <td>
```html
<a href="/my-page/index.html">
```
    </td>
    <td>
      =>
    </td>
    <td>
```html
<a href="/my-page/">
```
    </td>
  </tr>
</table>

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
