const gulp = require("gulp");
const del = require("del");

gulp.task("clean:docs", function() {
    return del("./docs/");
});
