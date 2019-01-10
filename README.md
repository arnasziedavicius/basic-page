# Basic Page

A template for building basic single-page applications or SPA with Delayed Output strategy.

## Install
To install use:
```
$ npm install
```

## Build
Upon installation you should be able to use gulp for task automation:

Run all tasks:
```
$ gulp
```

Compile scripts in `/scripts` directory:
```
$ gulp scripts
```

Convert scss to css and compile styles in `/styles` directory:
```
$ gulp styles
```

See `gulpfile.js` for more.

## Production
Export all files except `/scripts`, `/styles` and all node related files.