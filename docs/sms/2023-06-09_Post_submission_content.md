---
  layout: post
  title: Post-submission content
  date: 2023-06-09
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

## User needs

- As a user I need to understand that I can work with Ofqual if I am approved for all or some types of experience
- As a user I need to clearly understand that I may be approved for some areas of expertise and rejected for other areas of expertise
- As a user, I need to understand the terminology that Ofqual use for the [status] of my application
- As a user I need to [know] if I can provide specialist advice to Ofqual
- As a user I need to understand the status Ofqual use on my SMS account

## UR analysis

![Screenshot of user quotes](1.jpg)

![Screenshot of user quotes](2.png)

[https://miro.com/app/board/uXjVPugcTl8=/?moveToWidget=3458764553241253880&cot=14](https://miro.com/app/board/uXjVPugcTl8=/?moveToWidget=3458764553241253880&cot=14) 

## Business requirements
- SMS user needs to complete a supplier maintenance form after they have been approved before they can work with us

## What users need to know about post-approval
- Complete and return SMF form
- How getting work from Ofqual works
- Their application outcome

## Current flow
![Screenshot of user journey](3.png)

The flow presented some challenges to meet the user needs around where is best to show the user the relevant content. The "Approved subjects" and "Detailed outcome" pages are fairly static, so including content about the SMF for or working with Ofqual felt like it would quickly be outdated after the form was completed/information understood.

## Options
![Screenshot of all the user journey options](4.png)
All options documented on Miro [https://miro.com/app/board/uXjVPugcTl8=/?moveToWidget=3458764555047454890&cot=14](https://miro.com/app/board/uXjVPugcTl8=/?moveToWidget=3458764555047454890&cot=14) 

1. Add content to outcome page and the initial application outcome message. This presented same challenges as the current flow, and relied on users refering back to the message or continually navigating back to the outcomes page. Also, content on the outcomes page for SMF and working with Ofqual would become out of date once read/completed.
2. The application outcome message contains all the "what next" information. This option presented challenge of user having to remember to go back to the message after reviewing their outcome to complete SMF and get details on working with Ofqual. 
3. Split each content requirement into 1 task/1 message (so 3 messages, Application outcome, SMF form, What next). This option allows us to deliver content to the user at the point of need and ensure we send one message for each task, reducing the chance of the user missing or forgetting to complete something. 
4. Create a dedicated information/guidance page. Creating a static page for more info/help could have benefits further down the line e.g. for guidance on commissions, document sharing, re-apply, apply for further areas etc. Can also then use long form content to talk about being an SMS and next steps etc. But would require a page of content and logical links to create the flows to that page if more info is needed.

## Decision

![Screenshot of chosen user journey](5.png)
Option 3. Break into 3 separate tasks, 3 separate messages.
- Application-outcome sent automated upon evaluator/admin decisions
- Supplier-form sent at the same time/just after
- What-next message sent after successful completion, return and processing of SMF

Content screenshots:
![Screenshot of new messages in message inbox](6.png)
![Screenshot of application outcome message](7.png)
![Screenshot of SMF form message](8.png)
![Screenshot of welcome message](9.png)


## What next

- Testing in UR round 9.
- We are keen to change the SMF return process to be more secure, more accessible and easier for our users. Plan to prototype an in-service form similar to adding a new conflict of interest.

