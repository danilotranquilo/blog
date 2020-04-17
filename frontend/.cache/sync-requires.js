const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/Users/danilosalazar/Documents/Coding/Projects/blog-strapi/frontend/src/templates/article.js"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/danilosalazar/Documents/Coding/Projects/blog-strapi/frontend/src/templates/category.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danilosalazar/Documents/Coding/Projects/blog-strapi/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danilosalazar/Documents/Coding/Projects/blog-strapi/frontend/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danilosalazar/Documents/Coding/Projects/blog-strapi/frontend/src/pages/index.js")))
}

