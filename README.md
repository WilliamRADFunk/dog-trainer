# dog-groomer
An npm package that extends pug-lint to handle multiple files at once.

## Credit
Most of the magic is done by:

[Pug-Lint](https://www.npmjs.com/package/pug-lint)
[Glob](https://www.npmjs.com/package/glob)

I just brought the two together to solve a problem of mine.
If it helps you to solve a problem, too, then all the better.

## To Use:
-- Create an npm script with one of the following choices:

-- `dog-groomer` --  lints all pugs starting at root level.

-- `dog-groomer --source=<your-starting-folder>` -- lints all pugs starting at `<your-starting-folder>`.

-- `dog-groomer --config=<config-file>` -- uses linting configuration found in provided config file (must be at root level).

If no config is provided, a default (aggressive) set is used.

## Contact

If you discover any bugs or limitations to this library, feel free to let me know. I'll update when I can.