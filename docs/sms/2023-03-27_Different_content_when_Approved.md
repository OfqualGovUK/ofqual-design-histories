---
  layout: post
  title: Different content when approved
  date: 2023-03-27
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

The prototype was using the same content and terminology when an application was approved and in any other status. 

Stakeholders picked up that this shouldn't be the case. Once a user is approved, the application becomes less relevant over time and this just becomes the users account. They need to be able to access the original application but it is no longer the focus.

----

## Changes made
In the application status box (appears on Home and Application pages):
- Show renewal date
- Show date approved
- Don’t show date submitted or last updated
- Change ‘subject status’ phrasing and link text
- Change ‘application’ to ‘account’

For all accounts with an application outcome:
- The subjects page only shows approved subject specialisms
- The outcome for all of the applied for subjects is shown on the Application page
- Text on subjects page is relevant to account status
- Text in the boxes on the Home page is relevant to account status

----

## Before 

![Screenshot of account home screen](1.png)

![screenshot of outcomes page](2.png)

![screenshot of application section](3.png)

## After

![Screenshot of account home screen](4.png)

![screenshot of approved subjects page](5.png)

![screenshot of outcomes in the applications page](6.png)