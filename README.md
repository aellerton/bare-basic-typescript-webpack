# Bare typescript + webpack starter

## Preparing

- ensure node is installed
- install typescript globally

    npm install typescript -g 

- install this (not in ``package.json`` by design):

    npm install webpack-dev-server   # then...

- install local modules

    npm install


## Building and Running: The Node way

Plain commands like:

    ./node_modules/.bin/webpack  # TODO: need?

    ./node_modules/.bin/webpack-dev-server -dev-server --content-base=./dist --inline

Then load http://localhost:8080/


Or run via ``npm``:

    npm run start  # runs webpack-dev-server and watches for changes



## Building and Running: The ``devd`` way

Install ``devd`` and ``modd``.

In one shell:

    modd

In another shell

    devd -l ./dist

Then load http://devd.io:8000/


# Built by Reading

- https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.yufx8fnrv
- http://www.jbrantly.com/typescript-and-webpack/
- https://webpack.github.io/docs/configuration.html
- https://github.com/webpack/docs/wiki/configuration
- http://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder

