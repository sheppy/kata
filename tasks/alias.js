/*eslint-env node */

import gulp from "gulp";


gulp.task("test", ["js-lint", "js-test"]);

gulp.task("default", ["watch"]);
