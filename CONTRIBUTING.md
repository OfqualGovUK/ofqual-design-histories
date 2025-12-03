# Contributing

This is the contribution guide for Ofqual's design histories. This guide will cover how we expect contributions to be made.

## Permissions

You must be a member of the the Ofqual organisation on GitHub. If you are not, you will not be able to contribute.

## Creating an entry

__For the purposes of an example, we will assume we are working on a service called 'Jam Factory'.__

1.	Every new post needs its own issue and its own branch
1.	Go to the GitHub issues page and create a new issue by clicking on the green, `New Issue` button on the right-hand side of the Github repository
1.	Fill out the template form that pops up. Keep the title of the issue short and descriptive of the post you are creating. Make sure to put an `x` in the square checkboxes at the end to show that you have carried out the considerations listed, then click `Create`
1.	Add labels to your issue to show which service or product this post is applicable to. If not already open, click on `Issues` then on the name of the issue you just created
1.	Add a type by clicking on the cog icon next to type, choose feature then click outside the box to save 
1.	All work on your post should be performed in a new branch named for your service and the feature being written about. If your post is for user testing of error pages in the 'Jam Factory' project, then your branch name should be `user-test-jam-factory-error-pages`
1.	Click on `ofqual-design-histories` at the top of the page then click on `Branches`, underneath the page heading, next to where it says main
1.	On the top-right of this page, click `New branch`
1.	Fill in your branch name, as described previously, and click `Create new branch`
1.	We now need to link the issue to the branch. Click on `issues` then on the name of the issue you created
1.	Click on the cog icon next to `Development` on the right-hand side, then select the name of the branch you just created and click outside the box to save
1.	Once again, click on `ofqual-design-histories` at the top of the page then click `main` and select the name of the branch you just created – this ensures that we are working in our own branch and not affecting anyone else's work
1.	Create your new post. Posts live in `docs/` then in a folder named after the service they relate to. For example, posts relating to subject matter specialists go in `docs/sms/`.

### If your service doesn't yet have its own folder

__For the purposes of an example, we will assume we are working on a service called 'Jam Factory'.__

1. Create a folder underneath `docs/` corresponding to the name of the service; it must be lowercase, only consist of letters, numbers or the `-` character, no spaces allowed
1. Copy the file `docs/templates/service-template.json` [see service-template.json in GitHub](https://github.com/OfqualGovUK/ofqual-design-histories/blob/main/docs/templates/service-template.json) into this new folder and rename it so that the filename is the same as your new folder, but with `.json` on the end of it, for example, if your new folder is `jam-factory/` then your file should be named `jam-factory.json`
1. in the file `_data/homepageLinks.js`, in the section at the bottom, add an entry under the existing ones that looks like:  
```javascript
await fromPage('[service-name]'),
```  

for example, `await fromPage('jam-factory'),`
1. Edit `eleventy.js` – find the section near the bottom with a number of code blocks that contain `eleventyConfig.addCollection(...`, add a block at the bottom of the existing ones, replacing `[service-name]` with the name of your directory from earlier:  
```javascript
eleventyConfig.addCollection("[service-name]", function(collectionApi) {
  return collectionApi.getFilteredByGlob("**/[service-name]]/*.md").sort(function(a, b) {
    return a.data.title.localeCompare(b.data.title); // sort by title ascending
  });
});
```
1. Copy the file `docs/templates/service-template.md` [see service-template.md in GitHub](https://github.com/OfqualGovUK/ofqual-design-histories/blob/main/docs/templates/service-template.md) into the `docs/` folder and rename it to the name of your folder but with `.md` at the end, for example `jam-factory.md`
1. Edit this file, replacing the indicated parts.

### If the service has a folder already

__For the purposes of an example, we will assume we are working on a service called 'Jam Factory'.__

1. On GitHub, in the file list on the main part of this page, click on the docs folder, then on the name of your service. You will see a number of existing posts.
1. Create your new post by clicking the `Add file` button towards the top-right of the page, then selecting `Create new file`
1. On the next page, give your file a name. It must start with the date of the post, in `yyyy-mm-dd` format. It should be the same name as your branch with `.md` appended. It should not contain spaces. In the case of our existing example, we would name the file, `2025-12-03-user-test-jam-factory-error-pages.md`
1. In a separate browser tab, open up either the the example template for a user testing post, or the example for a design decision post, then click on the button titled `Raw` towards the right-hand side (see [templates](#templates))
1. Copy the entire contents of this page and then paste into the main body of the file you created in steps 3 of this section
1. Follow the instructions in the page itself, adding in your contant as well as any images or links to other resources
1. Regularly save your work by clicking the `Commit` button on the page where you edit your file – make sure you fill in details about the changes you have made with each commit – when coming back to edit your post after having browsed away from it, make sure that you are working in the correct branch
1. When your work is complete, you must create a pull request in order to publish your post to the site – click on `Pull requests` near the top of the page and, making sure the text next to it contains the correct name of your branch, click the `Compare and pull request` button
1. The next page will bring up a template that you should complete before clicking `Create pull request`
1. Finally, you will need someone else with access to this repository to review your post before it is merged in

### Including images

All images live in `docs/assets/images/` then in the folder corresponding to the service, then in a folder matching the name of the filename you gave your post, for example `docs/assets/images/2025-12-03-user-test-jam-factory-error-pages/`.

To reference these images in your post, you do not need to use a path, just use the name of the image. For example, if you have an image `docs/assets/images/2025-12-03-user-test-jam-factory-error-pages/404-not-found.png`, then you would reference the image in the post by using:

```markdown
![Example of a 404 page, as described in the post](404-not-found.png)
```

## Make changes locally

If the change is more substantial, then you may want to get the code and run it locally. If you don't know how to do this, ask one of the Digital developers.

Make sure you switch to your new branch to do these changes.

### How to create a PR

Find some helpful information on how to create [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).

### Who can merge your PR

Any other member of the Ofqual organisation can review your PR; once they have done so, you have permission to then merge in your PR yourself, so long as the pipeline checks also pass. If they do not, seek the assistance of a developer to investigate.

## Templates

You can use the following templates when creating content:
- [Design decisions template](https://github.com/OfqualGovUK/ofqual-design-histories/blob/main/docs/templates/design-decisions-template.md)
- [User research template](https://github.com/OfqualGovUK/ofqual-design-histories/blob/main/docs/templates/design-decisions-template.md)
