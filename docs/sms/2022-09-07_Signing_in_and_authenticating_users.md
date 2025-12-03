---
  layout: post
  title: Signing in and authenticating users
  date: 2022-09-07
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

We have opted to use GOV.UK sign in to authenticate users and have prototyped what is essentially the happy path through the sign flow for users who already have an account.

Test the flow: [https://experts-prototype.herokuapp.com/account](https://experts-prototype.herokuapp.com/account)

We would like users to land on our home page if they are either:
- new to the service
- signed out

View the home page: [https://experts-prototype.herokuapp.com/home](https://experts-prototype.herokuapp.com/home)

There are high level sign in flows designed for five scenarios:

1. First time user, needs to create an account to progress
2. Repeat sign in, application in progress (the user has been timed out since last session)
3. Repeat sign in, application submitted (the user has been timed out since last session)
4. Repeat sign in, application in progress (the user has accessed the service while still signed in)
5. Repeat sign in, application submitted (the user has accessed the service while still signed in)

View the flows: [https://miro.com/app/board/uXjVO7lK2KI=/?moveToWidget=3458764534740361478&cot=14](https://miro.com/app/board/uXjVO7lK2KI=/?moveToWidget=3458764534740361478&cot=14)
 