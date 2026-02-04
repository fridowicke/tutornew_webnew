module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("common.js");
  eleventyConfig.addPassthroughCopy("i18n.js");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("llms.txt");
  
  // Copy images and assets
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.jpeg");
  eleventyConfig.addPassthroughCopy("*.svg");
  eleventyConfig.addPassthroughCopy("*.webp");
  eleventyConfig.addPassthroughCopy("*.mp4");
  
  // Copy directories
  eleventyConfig.addPassthroughCopy("media-outlets");
  eleventyConfig.addPassthroughCopy("tutors");
  eleventyConfig.addPassthroughCopy("didactics_assets");
  eleventyConfig.addPassthroughCopy("rewards");
  eleventyConfig.addPassthroughCopy("ugc"); // Keep for assets (videos, images)
  eleventyConfig.addPassthroughCopy("blog"); // Keep for blog posts (to be migrated)
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    // Use HTML as template engine
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};

