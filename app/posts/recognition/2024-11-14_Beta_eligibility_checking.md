---
  title: Beta - Eligibility checking
  date: 2024-11-14
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Prototype
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/proto-7/start
---

From discovery and alpha research, it was clear that many organisations sign up to the Recognition Gateway, that are either in the wrong place (looking for APAR or similar) or are not aware of what Ofqual does or who and what we regulate. 

This causes a fairly large administrative burden on the teams and also has implications on data management and reporting. 

## Hypothesis

Our hypothesis is that following an established pattern across GOV.UK for checking eligibility before organisations create an account and go on to apply, will help save time and reduce administration burden. It will also save needless time spent by PAO users waiting for engagement meetings before they discover they are likely ineligible or not suitable. 

## Considerations

 - We can not prevent an organisation from applying even if they may not be eligible based on their answers to the eligibility questions. Therefore, the pattern needs to allow organisations to continue if they wish to. 
 - The criteria is already somewhat an eligibility test. But it is focused on their eligibility to comply with our rules, whereas this check will be to ensure they are at least eligible to apply. 

## Design

Using documentation reviews, interviews with stakeholders and engagement with legal and operational teams, we picked out three key questions to determine if an organisation can or should apply. 

 1. They have to have "substantial presence" in the UK (or some other jurisdictions not covered int his post for brevity).
 2. They need to have learners, or an expectation to have learners in England
 3. The qualifications they intend to offer as regulated qualifications must suitably assess a learners attainment.

The user is directed into the question journey directly from the start button on the start page, where this eligibility is also written (evidence shows it is largely not understood or ignored). 

At the end of the flow, if they answered no to any of the three questions, they are presented with the "Not eligible" screen, else they are presented with the "Eligible" screen. 

## Testing

The flow was tested with users in the latest round of research. the key findings were:

 1. Users found the flow simple, and thought it would be helpful for some organisations who may not be eligible.
 2. Users were not sure how many questions there were, or how long it would take.
 3. When the "Not eligible" page was presented, it wasn't clear why they were not eligible.
 4. Some of the questions are hard to understand due to their complexity.

## Next steps

 - Content design work on the questions, and hint text.
 - Explore the implementation of question numbering or a stepper, to signify progress.
 - Explore how to present the non-eligibility reasoning, and the potential affect that may have on the flow.
 - Finalise plans for early release of this flow, before the release of the new service, to start to measure it's effectiveness. 

## Screenshots

![A screenshot showing a content page describing the eligibility question flow](picture1.jpeg)
![A screenshot showing a question page asking users about their presence in the UK](picture2.jpeg)
![A screenshot showing a question page asking users if they will have learners in England](picture3.jpeg)
![A screenshot showing a question page asking users if their qualifications suitable assess a learners attainment](picture4.jpeg)
![A screenshot showing the eligibility page with a call to action button to continue to create an account](picture5.jpeg)
![A screenshot showing the ineligible page that also allows users to continue if they want to](picture6.jpeg)