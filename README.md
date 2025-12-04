
# Ofqual design histories
 
This is the home of design histories for Ofqual Digital and Data. 

It is built using Markdown, GOV.UK templates, Ofqual styles, the [x-gov Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/) and GitHub Actions.

## Requirements

- [Node.js](https://nodejs.org)
- [Eleventy](https://www.11ty.dev)
- [x-gov Eleventy Plugin](https://x-govuk.github.io/govuk-eleventy-plugin/)
- [Nunjucks](https://mozilla.github.io/nunjucks/) for the templating language

## Installation

```
git clone https://github.com/OfqualGovUK/ofqual-design-histories.git
cd ofqual-design-histories
npm install
```

This will copy the code repository to your local machine and install the dependencies needed to run the site.

## Preview your changes locally

Eleventy has the ability to serve the site in a hot reload environment.  You can call this from the npm scripts:

```
npm run serve
```

You can then [view the site on your local machine](http://localhost:8080).

### Alternative method for previewing changes locally

Alternatively, to run the site locally you can build the static html files and then deploy the _site folder to a http server.

Firstly you can run

```
npm run build
```

Which creates the static html. Then you can use a good very light weight http server to host them.

```
npm install -g http-server
```

Installs the server globally and then navigate to a terminal/cmd prompt to the _site directory and run: 

```
http-server -p 8080
```

Now you can preview the site on http://localhost:8080

