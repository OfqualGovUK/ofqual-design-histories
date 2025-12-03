---
  layout: post
  title: Alpha - Reading an application for review
  date: 2024-06-04
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Prototype V1
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/
---
Another focus of Alpha was to better understand how reviewers are currently completing their reviews. We knew from discovery that there are some problems and challenges for reviewers, especially around finding and reading content in applications in the current service. This creates a lot of usability problems and causes a large amount of inefficiency in the business process.

## Problems
- The current view of the application is difficult to read as users have to scroll through text field form controls to read the submitted information. Users get around this by copy and pasting the information into a word document to make it easier to read.

- Alongside the text provided by the organisation, reviewers have to find all the relevent files which contain the information they need. This requires downloading all the files to their machine. No mean feat when the applications have on average c. 70 files and can be up to 400. 

- Reviewers work in different ways but many downlaod the files and then organise them into folders by criteria, using their expertise and usually file names to decide how they are organised. This means if files are not named conventially it can make it mnore difficult for reviewers.

- Some reviews can take from 4 hours to 2 days just to get akll the information into a format that they can then review. 

## Hypothesis

- Making applications more readable will reduce or remove completely, the administrative burden on reviewers and improve efficiency and effectiveness of the servcie and process.

- By organising files by criteria we can make it easier for reviewers to find the files they are looking for, and reduce the administration burden of reviewers having to categorise files by criteria.

- Making an online file previewer will remove the need for users to download files. Improving seciurity and usability of the service. 

- Removing free text from the application and asking PAOs to submit evidence for each section of the criteria e.g. Criteria A.1-3, Criteria A4, etc. will remove even more administrative burden whilst also making the application easier to use for PAOs. 

## Research

We will conduct a round of user reserach with reviewers to gain a deeper understanding of how they work and what their needs are. This round will incorporate a semi-structured interview followed by some usability testing of 3 prototypes, with different application data or application architectures. 

- Prototype 2 - full aplication, is a prototype which loads an application with full explanations and files by criteria (A, B, C, D).
- Prototype 2 - referenced application, has the same design and form architecture but similates where an organisation has provided little content, and used the free text fields to reference files only.
- Prototype 3 - A different style of application architecture where we do not ask for any free text input for criteria and ask for file uploads by sub-criteria / section.

All the prototypes have a link which opens a 'file viewer' in a new tab. This is to test our hypothesise on viewing rather than dowloading files and to gain more understanding on how different reviewers are working with files.

The full user reserach plan is available in the user research repository, as will the data when the round is complete. 

## Screenshots

### Prototype 2 - contextual application and files referenced by PAO

![A screenshot of an application review page in GDS design system - version 2 where the application contains contextual content and files by criteria](picture1.png)

### Protoype 2 - application with just files referenced by PAO

![A screenshot of an application review page in GDS design system - also version 2 where the application contains limited context and files referenced by criteria](picture2.png)

### Prototype 3 with files uploaded by sub-criteria

![A screenshot of an application review page in GDS design system - version 3 where the application contains no contextual content and files by section or sub-criteria](picture3.png)

### File viewer

![A screenshot of a file viewer in GDS design system - showing a file navigation section on the left and the file content on the right](picture4.png)
