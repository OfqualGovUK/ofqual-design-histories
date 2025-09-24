---
  title: Beta - Account creation flow
  date: 2024-11-11
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Passwordless account flow
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/proto-7/start
---

Discovery and Alpha research shows that the account creation, and subsequent account management steps in the existing Gateway service cause users a number of problems. As part of moving to Beta, we assessed various account flows with the plan to forward to usability testing.

## Pain points

- Users interact with the service infrequently, over a long period of time, and therefore often forget login details and passwords. 
- As our users interact with us as a member of an organisation, often the user for the organisation can change, but the current service uses their email address as a UID, making it difficult if that person leaves the organisation. 
- These problems are the cause of multiple duplicate organisations being created, which in turn makes it difficult for the service team to see a source of truth in reporting and data.
- We also observed that there was an assumption that users needed multiple user accounts, but the user research appears to suggest that users actually need to handle communications when they are on leave, or to access an application when someone has left the organisation. Almost all participants we asked, wanted to maintain sole control over the input of information. 
- The application itself is also hidden behind an engagement process which requires the PAO to go through multiple stages of engagement including forms, a webinar and a meeting, before they actually get to see the application.
- In-service communication is currently used throughout the application journey and needs to be considered alongside account creation user journeys.

## Desk research


We conducted desk research with other government departments to assess existing solutions. These included:

- Register as a Childminder service
- DfE sign in
- GOV.UK OneLogin
- Apply to become an Academy service

## Options

We also wanted to find out when is the best time for an organisation to create an account. We had 3 potential user journeys:

 1. Account creation at the beginning after eligibility checking.
 2. Account creation after the engagement process.
 3. Account creation part way through the engagement process, for example after the webinar.

We also created user journeys of various types of account creation flows:

 - Email and password with MFA
 - Single Sign On (SSO)
 - Passwordless
 - Passwordless with MFA
 - Using GOV.UK OneLogin

## Hypothesis

 1. Providing access to and visibility of the application earlier will improve the applicants understanding of what they need to do and improve the quality of the engagement process by helping users to ask questions with context.
 2. Good support channels and well designed communication tools will better solve the user needs over multiple user accounts and associated account admin complexity.
 3. Duplicate organisations can be handled with a combination of data retention, email validation or other form of validation.
 4. Passwordless account creation may help users to sign in if they do not use the service frequently.

## Design

The team worked through the various scenarios and user journeys and agreed to take forward a test which keep the account creation at the start of the journey (after eligibility checking), primarily to facilitate access to the application early, and to create a "place" for users to come back to so they don't get lost through the engagement journey. 

We also decided to test a passwordless login flow with MFA, to see if users perceived it to be be more or less secure than they expect, and to check their understanding of receiving a sign in link and opening the service in a new browsing tab or window from the email. 

[A prototype was created](https://ofqual-recognition-c2182fd4130c.herokuapp.com/proto-7/start) using GOV.UK Prototyping Kit and GOV.UK Notify to test the flow in high interaction fidelity with users. 

## Usability test results

 1. All users found the passwordless flow to be intuitive and simple with most navigating through the pages quickly and efficiently.
 2. It was clear to users when the service had sent them an email and what they needed to do to log in.
 3. All users expected there to be MFA and found this straight forward.
 4. One user found the email in their junk mail, but was able to realise this and continue as normal.
 5. All users quickly navigated from the successful login page to application
 6. One user found that clicking the link in their email opened the service in a different browser (from chrome to edge) due to their default app settings.
 7. One user remarked that they don't always have their phone switched on (for MFA)
 8. Most users said they would bookmark the page, but other's were not sure where to go to log in again. 
 9. Most users would try to find an email to re-access.
 10. Users said that they thought accessing the application straight away would help them structure their work and share the application requirements with colleagues more easily. 

## Next steps

 - Consider sending an account creation success email to help users go back to the service later.
 - Design clear ways to log in from the start page and from the engagement sign up user journeys.
 - Explore the technical and architectural solutions for implementing a passwordless account service.
 - Testing with users with accessibility needs.
 - Plan support journeys for account recovery.
 - Content design for errors and unhappy paths (Forgot your email, email didn't arrive).
 - Deeper exploration into duplicate accounts and validation types, using email domain, organisation name, or registration numbers, for example bringing organisation details into the sign up flow. 

## Screenshots

![A screenshot showing a create account page with an email text field](picture1.jpeg)
![A screenshot showing a confirmation page explaining a link has been sent to the users email address](picture2.jpeg)
![A screenshot showing an example email which contains a link for the user to sign in to their account](picture3.png)
![A screenshot showing a page asking for the users phone number for multi-factor authentication](picture4.jpeg)
![A screenshot showing a page asking for the security code for multi-factor authentication](picture5.jpeg)
![A screenshot showing a page confirming the user's account has been created and a button to allow them to continue to the application](picture6.jpeg)