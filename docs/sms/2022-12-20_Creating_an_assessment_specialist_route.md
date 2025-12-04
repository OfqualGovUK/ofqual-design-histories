---
  layout: post
  title: Creating an assessment specialist route
  date: 2022-12-20
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual
          - text: Prototype (pre-Nov 2023)
            href: https://experts-prototype.herokuapp.com/
          - text: Prototype (post-Nov 2023)
            href: https://ofqual-sms-prototype-8ab8fed9b8d9.herokuapp.com/
---


Research uncovered a need for users to be able to apply when they don't have a subject they specialise in. Some people are assessment specialists, not linked to any subject in particular. Therefore a route needed to be created to bypass the subject selection. This was done with a details accordion on the subject search page: 

![Screenshot of details component](picture1.png)

This takes users through a different set of questions. If yes was answered, they are taken to that part of the subject selection. If no to both questions, they go to the assessment activities question. And then complete the section. 

![screenshot of first question page](picture2.png)

![screenshot of second question page](picture3.png)

![Screenshot of activity selection page](picture4.png)

The Assessment experience section is added under the Evidence of experience heading on the application task list: 

![Screenshot of evidence section](picture5.png)


**Please note** this is not currently properly working in the prototype. And it hasn't been tested with users. 
