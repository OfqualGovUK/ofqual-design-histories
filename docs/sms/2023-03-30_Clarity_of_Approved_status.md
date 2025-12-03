---
  layout: post
  title: Clarity of approved status
  date: 2023-03-30
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

In the prototype when any of the subject specialisms were approved (even if it was only 1 out of 10), the application status showed as Approved. This was all that was shown on the Home page. In UR this created a lot of confusion and disappointment. The user initially thought they had been approved but then after clicking through to the breakdown page realised they were not approved for everything. 

**On Home page** 
> "I'm assuming that says, all good you're on the list"

> "I've been approved. So basically I wouldn't do anything. I don't think I would have checked further."

> "To me this is a rubber stamp, I wouldn't feel the need to select or do anything else."

> User wants to know approved for which subject

**On the subject breakdown page**

> "I don't think you should say Approved"

> "oh I've been rejected but approved on those areas"

> "I'd be a little bit confused if the overall thing says approved and I click through and it says rejected"

> "ok so now I'm confused because I wouldn't have clicked through"

> "Would it be better or fairer to say something like 'decision made'"

**Design change** 

We have updated the status on the Home so the user can see how many they've been approved for and see that they are not approved for everything. 

**Before:** 

![Screenshot of home page](1.png)

![Screenshot of outcomes](2.png)

**After:** 

![Screenshot of home page with addition of number of specialisms approved](3.png)

![Screenshot of outcomes with addition of number of specialisms approved](4.png)