---
  title: Beta - Sharing and printing the application
  date: 2024-11-13
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Prototype
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/proto-7/start
---

In the latest round of usability testing, it became clear that the need to share the application was quite prevalent across PAO users in a number of contexts. 

This previously formed part of the hypothesis around multiple user accounts solutions, but our research suggests that the need to collaborate is better handled by the PAO users in their own digital workspaces and have established channels in which they prefer to work. 

Research suggests in some cases users are taking multiple screenshots in order to try and fill this need.

## User needs highlighted

The latest round of testing highlighted needs that almost all of the users showed some requirement of:

 - Getting a copy of, and sharing their completed application form before final submission
 - Getting and sharing confirmation of submission
 - Sometimes, sharing their progress with the application

## Options

 1. Multiple user accounts to allow different people to get the information from the service
 2. Sharing read-only versions of the application (likely a version of the review application screen) via magic-link sent by the PAO user
 3. Make it easy for the PAO user to print or save their application in easily sharable format(s).
 4. Send a copy of their application in an email.

## Current thinking

We think the option for multiple accounts is challenging and doesn't align to the needs we have previously explored. Also, sending the application in an email could be difficult, as the application and evidence can become extremely lengthy. The other two options remain interesting.

Our preference is to explore allowing the PAO users to save/print/export the application easily, as this gives the greatest flexibility, is the least technically demanding for MVP, and allows PAO users to continue to work in their own digital workspaces for approvals and sign off processes.

Furthermore, the review application page and the task list page, using the GOV.UK design system are already well set up for exporting via print or webpage saving. 

## Next steps

We will design a Save/Print interaction to be included in three places in the journey:

 1. On the task list page - to help users quickly and visually show their progress through the form.
 2. On the review application page, to allow users to quickly export a copy of their application prior to submission.
 3. Post submission, on a confirmation page.

More work is required to design the post-submission user journeys which may impact how we serve these needs in the post submission phase. 

## Screenshots
![A screenshot showing a print this page feature on a HMRC tax service](picture1.jpg)
![A screenshot showing a print this page and save this page feature from ONS design manual](picture2.jpg)
![A screenshot of the task list where a print feature will be useful](picture3.jpeg)
![A screenshot A screenshot of the application review page where a print feature will be useful](picture4.jpeg)


