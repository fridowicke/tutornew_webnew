const path = require('path');

module.exports = function(eleventyConfig) {
  // Note: Sites can use layouts from their own _includes/layouts or from shared/layouts
  // If a layout exists in _includes/layouts, it takes precedence
  // To use shared layouts, reference them as: layout: ../../shared/layouts/base.njk

  // Copy static assets from shared directory
  eleventyConfig.addPassthroughCopy({
    "../../shared/assets/styles.css": "styles.css",
    "../../shared/assets/common.js": "common.js",
    "../../shared/assets/i18n.js": "i18n.js",
    "../../shared/assets/favicon.ico": "favicon.ico",
    "../../shared/assets/robots.txt": "robots.txt",
  });

  // Copy shared asset directories (if needed for open site)
  eleventyConfig.addPassthroughCopy({
    "../../shared/assets/media-outlets": "media-outlets",
  });

  // Copy site-specific assets (logo, etc.)
  eleventyConfig.addPassthroughCopy({
    "assets": "assets",
  });

  // Copy CNAME for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  // Add filter for URL handling
  eleventyConfig.addFilter("url", function(value) {
    return value;
  });

  // Set input and output directories
  // When running from sites/open.tutor.new directory, paths are relative to that
  return {
    dir: {
      input: ".",
      output: "../../_site-open-tutor-new",
      includes: "_includes",
      // layouts defaults to _includes/layouts when not specified
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
  };
};

