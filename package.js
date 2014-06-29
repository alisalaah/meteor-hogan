Package.describe({
    summary: "Hogan templating from Twitter (required by some frameworks/packages)"
});

Package.on_use(function (api) {
    api.use();
    api.add_files("hogan-3-0-1.js");
});
