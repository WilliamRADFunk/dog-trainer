# dog-groomer
(In Progress) An npm package that extends pug-lint to handle multiple files at once.

WARNING: Not yet ready for public consumption.

## To Use:
-- Create an npm script with one of the following choices:

-- `dog-groomer` --  lints all pugs starting at root level.

-- `dog-groomer --source=<your-starting-folder>` -- lints all pugs starting at `<your-starting-folder>`.

-- `dog-groomer --config=<path-to-config-file>` -- uses linting configuration found in provided donfig file.

If no config is provided, a default set in used.
