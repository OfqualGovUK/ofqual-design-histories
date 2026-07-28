import fs from 'node:fs/promises'

import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

export default function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://govuk-eleventy-plugin.x-govuk.org/get-started/options/
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      productName: 'User-Centred Design Histories',
      search: {
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    markdown: {
      headingPermalinks: true,
    },
    stylesheets: [
      '/styles/application.css'
    ],
    templates: {
      searchIndex: true,
      tags: true
    }
  })

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Override plugin sitemap collection
  eleventyConfig.addCollection('sitemap', (collection) => {
    return collection.getAllSorted().filter((item) => {
      const extension = item.inputPath.split('.').pop()

      return (
        extension === 'md' &&
        item.data.excludeFromSearch !== true
      )
    })
  })

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

  // Reset contents of output directory before each build
  eleventyConfig.on('eleventy.before', async ({ directories, runMode }) => {
    if (runMode === 'build') {
      await fs.rm(directories.output, {
        force: true,
        recursive: true
      })
    }
  })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
