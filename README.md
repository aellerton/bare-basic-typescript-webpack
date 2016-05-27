# Bare typescript + webpack starter

A basic and bare example of webpack packaging typescript into a js bundle.

Built by Reading:

- https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.yufx8fnrv
- http://www.jbrantly.com/typescript-and-webpack/
- https://webpack.github.io/docs/configuration.html
- https://github.com/webpack/docs/wiki/configuration
- http://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder


## Preparing

- ensure node is installed
- install typescript globally

    npm install typescript -g 

- install this (not in ``package.json`` by design):

    npm install webpack-dev-server   # then...

- install local modules

    npm install


## Building and Running: The direct CTL way

Plain commands like:

    ./node_modules/.bin/webpack  # TODO: need?

    ./node_modules/.bin/webpack-dev-server -dev-server --content-base=./dist --inline

Then load http://localhost:8080/


## Building and Running: The ``npm`` way

    npm run start  # runs webpack-dev-server and watches for changes



## Building and Running: The ``devd`` way

Install ``devd`` and ``modd``. Then:

    modd

That will run through the initial setup and run devd. If ``modd.conf``
runs ``devd`` with the ``-o`` flag, the browser will automatically be opened.
If that's annoying, remove the ``-o`` flag from the config file.

If you don't want ``devd`` to run automatically, remove the entry from
the config file and run in another shell:

    devd -l ./dist

Then load http://devd.io:8000/


## Cleanup

If you don't want any use of ``devd`` remove the ``modd.conf`` file.

If you don't want to use the ``webpack-dev-server`` there's no need to ``npm install`` it.

Once you've cloned the repo, remove this file and the ``.git`` directory and start fresh:

    rm -rf README.md .git 
    git init


*end*

