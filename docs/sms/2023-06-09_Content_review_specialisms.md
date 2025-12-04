---
  layout: post
  title: Content review - specialisms
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

Link to previous iteration design wiki: [Clarity of Approved status](/sms/2023-03-30_Clarity_of_Approved_status)

## User needs

-   [As a user I need to clearly understand that I may be approved for
    some areas of expertise and rejected for other areas of
    expertise](https://trello.com/c/OuRTcyrr/43-as-a-user-i-need-to-clearly-understand-that-i-may-be-approved-for-some-areas-of-expertise-and-rejected-for-other-areas-of-expert)

## Overview

Round 8 of user research highlighted the above user need that isn't
currently being met.

The research suggests that users do not understand the terminology
around "specialisms".

A review of the SMS application confirms that we do not use the term
"specialisms" in our interactions with applicants up until the point of
communicating the outcome of the evaluation.

We currently use the term to refer to the types of expertise that the
applicant has applied for and for which they have been approved or
rejected.

![Screenshot of home page using the term specialisms](1.png)

### Hypothesis, goals and research questions

|    <br>Hypothesis    	|    <br>Goals    	|    <br>Research Questions    	|
|---	|---	|---	|
|    <br>SMS users do not understand what we mean by the term “specialism”,   which means it is not clear to them that they can be (or have been) approved   for some parts of their application and not others.    	|    <br>Find a solution to make it clear of the outcome of the   application.<br>   <br>Use the language and terminology that users use, to make   it easy to understand.    	|    <br>What terminology have we used previously?<br>   <br>What language do our users prefer?<br>   <br>     	|

## Tools

-   Round 8 user research analysis
-   Review language in the SMS application

## Language Review

### What language do our users prefer?

#### User research data

-   User research from round 8 which focused on usability testing of the
    new SMS account designs suggested that most users did not understand
    what we meant by "specialism".
-   Some users didn't acknowledge the content "3 out of 13 specialisms".
-   Some users commented that they weren't sure what that content meant.
-   One user commented that specialism to them meant a particular aspect
    of their job or experience, "manual machining, CNC machining" etc.
    Showing that specialism means something else to them. (Industry
    persona).
-   Round 7 research also suggested that users understood that they
    would be evaluated by subject, but not necessarily into all the
    categories and sub-categories. Most users seem to have wanted to
    view their statuses by subject only.
-   Some users also mentioned that when they saw the approved status,
    they would assume they have been approved for everything and not
    take any further action to view outcomes by sub-category.

See UR analysis below:

![Screenshot of UR analysis](2.png)

![Screenshot of UR analysis](3.png)

The language that our users used in conversations with them was:

-   Subjects
-   Subjects and levels
-   Subject areas and levels
-   Areas
-   Experience
-   Subject experience
-   Expertise

### What language have we used previously?

#### SMS Application

In the application form, the categories within a subject/qualification
type/level are:

-   Assessment
-   Industry, occupational or professional
-   Teaching, lecturing or training

These are referred to as "types of experience". The sub-categories under
each are referred to as "activities or responsibilities":

![Screenshot of use of activities and responsibilities](4.png)

![Screenshot of using types of experience](5.png)

![Screenshot of use of activities and responsibilities](6.png)

![Screenshot of use of experience and areas](7.png)

#### Other sources

The [guidance page at the entrance point for the application
flow](https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual)
uses the following terms:

-   "Experience"
-   "Knowledge and skills"
-   "Skills and experience"
-   "areas"

## Analysis

Reviewing the evidence captured in user research rounds 7 and 8 it's
clear that the term specialism is not clear to our users. Causing some
confusion or lack of clarity around what they have been approved or
rejected for.

Importantly, the research suggests that our users are primarily looking
for the outcome of their application by the subjects that they applied
for, as opposed to by each type of experience and the subcategories
beneath that.

A historical language review shows that we have not used the term
"specialism" to describe an area that is being evaluated in the service
before.

Our working hypothesis is that using this term for the first time, at
this stage, causes more confusion than clarity.

The current content does not meet the users need to understand their
application outcomes.

## Recommendations

### Recommendation 1

Change font size from 14px to 19px -- this may be a bug in the gov.uk
prototype kit, but from a typography perspective it should match the
date fields and link text. From an accessibility perspective, 14px is
too small.

This may address to some of the user research points around users not
acknowledging the content. (Needs validation).

### Recommendation 2

Change the content to bring more clarity to approval/rejection status.
In language our users will understand and are expecting.

#### Option 1 (Progressing)

Change the level at which we display application outcomes to display by
subject instead of subcategory, which aligns to the user needs around
clarity and expectations.

Highlight where they have been approved for everything in that subject,
partially approved, or rejected to make it really clear that they should
navigate to view all of their application outcomes.

![Screenshot of home page using new copy](8.png)

#### Option 2
Change "specialism" to "types of experience" and include "that you
applied for" to add more clarity.

![Screenshot of replacing specialisms with type of experience](9.png)

#### Option 3

Change "specialism" to "area" and include "that you applied for" to
add more clarity.

![Screenshot of replacing specialisms with area](10.png)

## Next steps

We need more research around approval status, and making it clear to
users where they have been approved.

We plan to keep this change under review and monitor user behaviour in
the real world using analytics and other testing to validate our
assumptions.

We plan to utilise data from:

-   Usability testing and interviews in future research rounds
-   Session recordings (tbc)
-   Heatmaps (tbc)
-   Events tracking, pageviews and bounces
-   Support (when live)

## Resources

-   [User research round
    7](https://miro.com/app/board/uXjVPugcTl8=/?share_link_id=470550569447)
-   [User research round
    8](https://miro.com/app/board/uXjVPugcTl8=/?share_link_id=470550569447)
-   [Guidance page - Subject matter specialists for Ofqual
    (gov.uk)](https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual)
-   [SMS Prototype](https://experts-prototype.herokuapp.com/)
