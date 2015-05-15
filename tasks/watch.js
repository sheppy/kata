/*eslint-env node */

import path from "path";
import gulp from "gulp";
import config from "./config";


gulp.task("watch", () => {
    gulp.watch([
        path.join(config.dir.src, config.glob.js),
        path.join(config.dir.tests, config.glob.js)
    ], ["js-lint", "js-test"]);
});
