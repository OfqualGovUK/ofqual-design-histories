---
  layout: post
  title: Placing rejection feedback where it refers to
  date: 2023-03-28
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

In the UR sessions users commented after seeing rejected for several subject specialisms and opening the feedback, that they expected the feedback to be the same/similar for all of them. When this is the case we should only show the feedback once for that subject. 

> "I assume these will all be the same kind of thing [the rejection feedback]"

> "The response would need to be itemised to each reject" as it might not be understood by Ofqual, "it would need to be item by item"

> "Good to say what areas they are missing so people can build up those skills"

Rejection feedback could be at any of these levels:

- whole application rejected - feedback given at the top level (feedback would be per subject but also displayed top-level)
- whole subject rejected - feedback given once for that subject
- a whole specialism within a subject rejected - feedback given once for that specialism e.g. Assessment 
- a sub-specialism rejected - feedback given for that specialism only

The status tag would still be shown against each sub-specialism, in all of the scenarios listed.

We believe the evaluation process will support this, as they record reasons for rejection at all of these levels to be accountable and for fairness. While a spreadsheet is being used for evaluation we will only be able to show feedback at the subject level, as it is too time consuming to do more but it will be available if an applicant requests it. Once evaluation is happening using the portal we should be able to show this in the users account. 

–

## Changes made:

- Feedback is no longer repeated across multiple specialisms.
- Prototype has an example of each level of feedback. 
- Use the full Rejected status to see the top-level feedback and subject level feedback 
- Use the mix of Accepted and Rejected to see the all except the top-level feedback. As that overall status is approved. 

---

## Before 

On status only one reason was showing for rejection, but there were multiple:

![Screenshot of one reason was showing](1.png)

Multiple feedback accordions shown when each part was rejected. e.g. here under Asbestos all Teaching were rejected and the whole Building control surveyor:

![one reason was showing Multiple feedback accordions](2.png)


The same feedback given for each sub-specialism for Building control surveyor:

![one reason was showing Multiple feedback accordions with same content inside](3.png)


## After 

Full rejection:

![Screenshot of feedback by subject](4.png)

![Screenshot of feedback by subject in the detailed outcomes section](5.png)

Mix of approved and rejected: 

![Screenshot of feedback by type of expertise](6.png)

![Screenshot of feedback by type of expertise with type of rejection](7.png)

