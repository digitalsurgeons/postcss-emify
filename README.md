# PostCSS Emify [![Build Status][ci-img]][ci]

[PostCSS] to transform all em( px ); declarations into its em equivalent.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/ads1018/postcss-emify.svg?branch=master
[ci]:      https://travis-ci.org/ads1018/postcss-emify

```css
.foo {
  font-size: em(16);
}
```

```css
.foo {
  font-size: 1em;
}
```

## Usage

```js
postcss([ require('postcss-emify') ])
```

See [PostCSS] docs for examples for your environment.
