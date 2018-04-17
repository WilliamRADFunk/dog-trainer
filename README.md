# dog-trainer
An npm package that watches pug files for change, and compiling only those that do.

## Credit
Most of the magic is done by:

[Pug](https://www.npmjs.com/package/pug)

[Glob](https://www.npmjs.com/package/glob)

[Filewatcher](https://www.npmjs.com/package/filewatcher)

A more efficient way to watch and compile pug 2 html on an individual basis. Great for Angular 2 through 5 projects.

I just brought the three together to solve a problem of mine.

If it helps you to solve a problem, too, then all the better.

## To Use:
~~ Create an npm script with one of the following choices:

~~ `dog-trainer` ~~  watches all pugs starting at root level, compiling each (only the altered file) to html upon detected change.

~~ `dog-trainer --source=<your-starting-folder>` ~~ watches all pugs starting at `<your-starting-folder>`, compiling each (only the altered file) to html upon detected change.

## Contact

If you discover any bugs or limitations to this library, feel free to let me know. I'll update when I can.