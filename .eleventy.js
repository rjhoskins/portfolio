module.exports = function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("img");
   eleventyConfig.addPassthroughCopy("favicon.ico");
   eleventyConfig.addPassthroughCopy("browserconfig.xml"); 
   eleventyConfig.addPassthroughCopy("site.webmanifest"); 
   eleventyConfig.addPassthroughCopy("main.css"); 

 };