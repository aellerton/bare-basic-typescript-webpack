# Bare typescript + webpack starter

A bare starter example using webpack to package typescript into a js bundle.

Built by Reading:

- https://medium.com/@dabit3/beginner-s-guide-to-webpack-b1f1a3638460#.yufx8fnrv
- http://www.jbrantly.com/typescript-and-webpack/
- https://webpack.github.io/docs/configuration.html
- https://github.com/webpack/docs/wiki/configuration
- http://stackoverflow.com/questions/32155154/webpack-config-how-to-just-copy-the-index-html-to-the-dist-folder
- https://github.com/sass/node-sass

## Preparing

- ensure node is installed
- install typescript globally

    npm install typescript -g 

- install this (not in ``package.json`` by design):

    npm install webpack-dev-server   # then...

- install local modules

    npm install


## Building and Running: The ``modd`` way

My personal favourite because it is the fastest and most reliable, at
least so far.

First, install ``devd`` and ``modd``. 

Then run:

    modd

This does everything - invokes webpack, copies HTML, starts ``devd``.

Additional tips...

- If ``modd.conf`` runs ``devd`` with the ``-o`` flag, the browser will 
  automatically be opened.  If that's annoying, remove the ``-o`` flag 
  from the config file.

- If you don't want ``devd`` to run automatically, remove the entry from
  the config file altogether and run in another shell:

    devd -l ./dist

  Then load http://devd.io:8000/



## Building and Running: The laborious CLI way

This will compile and package typescript - but won't copy HTML:

    ./node_modules/.bin/webpack

Copy the HTML manually (I know, ugly):

    cp src/*.html dist/

And run 

    ./node_modules/.bin/webpack-dev-server -dev-server --content-base=./dist

Then load [http://localhost:8080/webpack-dev-server/](http://localhost:8080/webpack-dev-server/)


## Building and Running: The less labourious CLI way

This runs the dev server and is meant to rebuild and reload on changes:

    ./node_modules/.bin/webpack-dev-server -dev-server --content-base=./dist --watch

Only thing is, I don't find it to be very reliable! It rebuilds and even
reloads - but has old content! Oops.


## Building and Running: The ``npm`` build-and-manually-reload way

Build with:

    npm run build   # runs webpack and copies HTML

Then start the dev server:

    npm run devserver   # runs webpack-dev-server



## Building and Running: The ``npm`` watch-and-live-reload way


    npm watch   # runs dev server with reload


## SASS

I'm not sure yet whether it's better to use the ruby version of SCSS or
the NPM-based version. They both work fine. If the ruby one was actually a
compiled binary I'd prefer that but it's not.

The code has ``node-sass`` but you could swap in ruby ``sass`` by 1) removing
the entry for ``node-sass`` in ``package.json`` and updating ``modd.conf``.


## Clean up the skeleton for a real project

If you don't want any use of ``devd`` remove the ``modd.conf`` file.

If you don't want to use the ``webpack-dev-server`` there's no need to ``npm install`` it.

Once you've cloned the repo, remove this file and the ``.git`` directory and start fresh:

    rm -rf README.md .git 
    git init


*end*

