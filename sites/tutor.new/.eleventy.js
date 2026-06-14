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
    "../../shared/assets/llms.txt": "llms.txt",
  });

  // Copy shared asset directories
  eleventyConfig.addPassthroughCopy({
    "../../shared/assets/media-outlets": "media-outlets",
    "../../shared/assets/tutors": "tutors",
    "../../shared/assets/quack": "quack",
    "../../shared/assets/didactics_assets": "didactics_assets",
    "../../shared/assets/materials": "materials",
    "../../shared/assets/rewards": "rewards",
    "../../shared/assets/ugc": "ugc",
    "../../shared/assets/blog": "blog",
  });

  // Copy root-level images from repository root
  eleventyConfig.addPassthroughCopy({
    "../../lesson_physics.png": "lesson_physics.png",
    "../../lesson.png": "lesson.png",
    "../../stroke.png": "stroke.png",
    "../../circling.png": "circling.png",
    "../../guf.png": "guf.png",
    "../../guf.jpeg": "guf.jpeg",
    "../../exam.jpeg": "exam.jpeg",
    "../../explain.jpeg": "explain.jpeg",
    "../../homework.jpeg": "homework.jpeg",
    "../../language.jpeg": "language.jpeg",
  });

  // Copy CNAME for custom domain
  eleventyConfig.addPassthroughCopy("CNAME");

  // Shared design-system stylesheet for q-pages (preview)
  eleventyConfig.addPassthroughCopy("q.css");

  // Add filter for URL handling
  eleventyConfig.addFilter("url", function(value) {
    return value;
  });

  // Set input and output directories
  // When running from sites/tutor.new directory, paths are relative to that
  return {
    dir: {
      input: ".",
      output: "../../_site-tutor-new",
      includes: "_includes",
      // layouts is relative to includes, but we can also omit it and Eleventy will look in _includes/layouts by default
      data: "_data",
    },
    templateFormats: ["html", "njk", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
