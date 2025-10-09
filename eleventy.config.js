const path = require('path');
const fs = require('fs');

module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require('@x-govuk/govuk-eleventy-plugin'), {
    stylesheets: [
      '/styles/application.css'
    ],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      organisationName: 'Ofqual',
      productName: 'User-Centred Design Histories',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Add collection for each design histories project
  eleventyConfig.addCollection('register', collection => {
    return collection.getFilteredByGlob('app/posts/register/*.md')
  })

  eleventyConfig.addCollection('sms', collection => {
    return collection.getFilteredByGlob('app/posts/sms/*.md')
  })

  eleventyConfig.addCollection('recognition', collection => {
    return collection.getFilteredByGlob('app/posts/recognition/*.md')
  })

  eleventyConfig.addCollection('casemgt', collection => {
    return collection.getFilteredByGlob('app/posts/case-mgt/*.md')
  })

  // On site build, create any missing image folders that are needed
  eleventyConfig.on('eleventy.after', async ({ dir, results, runMode, outputMode }) => {
    // Create image folder if needed
    results.forEach(createImageFolder);
  });

  // On new or changed files, between rebuilds, create any missing image folders
  eleventyConfig.on('eleventy.beforeWatch', async (changedFiles) => {
    changedFiles.forEach(createImageFolder);
  });


  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }

}

// If it doesn't already exist, create an image folder for each post
function createImageFolder(item)
{
  // If object is string, deal with it one way. If it is an object, deal with it in another

let file_ext = '';
let file_name = '';
let file_path = '';
let bare_file_name = '';

  if ( typeof item == 'string') {
    // we have 1 item, deal accordingly

    file_ext = path.extname(item);
    file_name = path.basename(item);
    file_path = path.dirname(item);

  } else {

    file_ext = path.extname(item.inputPath);
    file_name = path.basename(item.inputPath);
    file_path = path.dirname(item.inputPath);
  }

  bare_file_name = file_name.replace(file_ext,'');

  // XXX LOGGING
  //console.log("Ext:  " + file_ext + "\nName: " + bare_file_name + "\nPath: "+ file_path);

  if (  file_ext == '.md' )
   {
    // If successfully replace 'post' in path, then try and create the image directory, if it exists
    const replaced_path = file_path.replace('/posts/', '/images/');
    
    if (replaced_path !== file_path) {
      // XXX LOGGING
      //console.log("[NEW PATH!! =>] " + replaced_path);

      const new_full_path = replaced_path + '/' + bare_file_name.replace(' ','-');

      // XXX LOGGING
      //console.log("[11ty] Creating image folder " + new_full_path);

      // Create the image folder if it doesn't exist
      if (!fs.existsSync(new_full_path)) {
        fs.mkdirSync(new_full_path, { recursive: true });
      }
    }
  }
};
