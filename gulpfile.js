var gulp = require("gulp");
	concat = require("gulp-concat"),
	sass = require("gulp-sass"),
	del = require("del"),
	cssmin = require("gulp-cssmin"),
	uglify = require("gulp-uglify"),
	replace = require("gulp-string-replace"),
	noop = require("gulp-noop"),
	browserSync = require("browser-sync").create(),
	htmlmin   =  require('gulp-htmlmin'),
    ngHtml2Js = require("gulp-ng-html2js");

gulp.task("DEPLOY", deploy);

gulp.task("default", devDeploy);

gulp.task("html2js", compileNgComponents);

function deploy (done)
{

	//runSequence("CONCAT-JS", "CONCAT-INDEX-CSS", "CONCAT-LOGIN-CSS", "CLEAR-DIST", "MOVE-ASSETS-TO-DIST", "MOVE-VIEWS-TO-DIST", "MOVE-TEMPLATES-TO-DIST", "MOVE-IMAGES-TO-DIST"); //

	return gulp.series(
		clearDist,
		concatJs,
		compileNgComponents,
		newHelperSassCompile,
		newBootstrapSassCompile,
		moveAssetsToDist
	)(done);
}

function doneReload () {}

function devDeploy (done)
{
	var jsWatcher = gulp.watch(
		[
			"assets/js/*.js",
			"assets/ng/app/**/*.js",
			"assets/ng/app/app.js"
		]).on("change", function (path)
		{
			console.warn("\nJS: " + path + " was changed\n");
			watchJSAndReload();
		});

	var cssWatcher = gulp.watch(
		[
			"resources/bootstrap/*.scss",
			"resources/bootstrap/**/*.scss",
			"resources/bootstrap/**/**/*.scss"
		]).on("change", function (path)
		{
			console.warn("\nCSS: " + path + " was changed\n");
			watchCSSAndReload();
		});

	var viewWatcher = gulp.watch(
		[
			"views/*.html"
		]).on("change", function (path)
		{
			console.warn("\nHTML: " + path + " was changed\n");
			watchViewAndReload();
		});

	var componentViewWatcher = gulp.watch(
		[
			"assets/ng/app/*.view.html",
			"assets/ng/app/**/*.view.html",
			"assets/ng/app/*.layout.html",
			"assets/ng/app/**/*.layout.html"
		]).on("change", function (path)
		{
			console.warn("\nHTML: " + path + " was changed\n");
			compileNgComponents();
		});

	return gulp.series(
		concatJs,
		newHelperSassCompile,
		compileNgComponents,
		newBootstrapSassCompile
	)(done);
}

function clearDist ()
{
	var paths = [
		"assets/core.js",
		"assets/index.core.css",
		"assets/login.core.css",
		"dist/**"
	];
	return del(paths);
}

function concatJs ()
{
	return gulp.src(
			[
				"assets/thirdParty/js/jquery.3.4.1.js",
				"assets/thirdParty/js/angular.min.js",
				"assets/thirdParty/js/angular-ui-router.js",
				//"assets/thirdParty/js/*.js",
				"assets/thirdParty/js/!(angular.min.js,jquery.3.4.1.js,angular.min.js).js",

				"assets/js/*.js",
				"assets/ng/app/*.js",
				"assets/ng/app/components/root.component.js",
				"assets/ng/app/**/*.js",
				"assets/ng/app/app.js",
				//"assets/ng/app/pages/**/*.js"
			]
		)
/*		.pipe(doNoOpIfNotProd() || uglify(
		{
			mangle: false
		}))*/
		.pipe(concat("core.js"))
		.pipe(gulp.dest("assets/src"));
}

function moveAssetsToDist (done)
{
	function font ()
	{
		return gulp.src("assets/fonts/**/*").pipe(gulp.dest("dist/assets/fonts"));
	}

	function src ()
	{
		return gulp.src("assets/src/**/*").pipe(gulp.dest("dist/assets/src"));
	}

	function moveBootstrap ()//temporary 
	{
		return gulp.src("assets/thirdParty/js/bootstrap/**/*").pipe(gulp.dest("dist/assets/thirdParty/js/bootstrap")); //serviceWorker, local notification handler for mobile
	}

	return gulp.parallel(font, src, moveBootstrap)(done);
}

function watchJSAndReload ()
{
	function done ()
	{
		//console.log("js changed, reloading...");
	}

	gulp.series(
		concatJs		
	)(done);
}

function watchCSSAndReload ()
{
	function done ()
	{
		//console.log("css changed, reloading...");
	}

	gulp.series(
		newBootstrapSassCompile
	)(done);
}

//////  helper functions {

function doNoOpIfNotProd ()
{
	return null;
}

//////  helper functions  }

function newBootstrapSassCompile ()
{
	return gulp.src("resources/bootstrap/base.scss")
		.pipe(sass({ style: "expanded" }).on("error", sass.logError))
		.pipe(cssmin())
		.pipe(concat("core-compiled.css"))
		.pipe(gulp.dest("assets/src/new"));
}

function newHelperSassCompile ()
{
	return gulp.src("resources/bootstrap/helpers/bootstrap.scss")
		.pipe(sass({ style: "expanded" }).on("error", sass.logError))
		.pipe(cssmin())
		.pipe(concat("helper-compiled.css"))
		.pipe(gulp.dest("assets/src/new"));
}

function compileNgComponents(done) 
{
	function html2js()
	{
		return gulp.src([
			"assets/ng/app/components/*.view.html",
			"assets/ng/app/components/**/*.view.html",
			"assets/ng/app/components/*.layout.html",
			"assets/ng/app/components/**/*.layout.html"
		])
	/*	.pipe(htmlmin({
			collapseWhitespace: true
		}))  */
		.pipe(ngHtml2Js({
			moduleName: "componentPartials",
			rename:function (templateUrl, templateFile) 
			{
			  return templateUrl.replace('.view.html', '.html');
			}
		}))
		.pipe(concat("component-partials.js"))
		/*.pipe(uglify())*/
		.pipe(gulp.dest("assets/src/new"));
	}


	return gulp.series(html2js)(done);
}