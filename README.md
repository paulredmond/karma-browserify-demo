# karma-browserify-demo
A sandbox demo for using Karma and browserify with mocha tests.

## Running Tests

The commands provide a few karma flags for getting familiar. Run `karam start --help` to see them all. View [package.json](package.json) for the full list of commands (the `"scripts"` property).

#### Commands

```shell
npm install
npm test # run tests with PhantomJS and exit
npm tdd # listens for file changes and re-runs tests.
```

Recommend installing karma globally:

```shell
npm install -g karma
```

#### Coverage

You can view code coverage reports at `tests/coverage/`
