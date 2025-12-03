---
  layout: post
  title: Alpha - Handling duplicate files
  date: 2024-06-03
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Prototype V1
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/
---

By breaking down the file upload user journey by criteria we create a problem where the same file could be used across multiple criteria. Our discovery reserach and research with PAOs in Alpha suggests that this is very common and highly likely in most applications. 

We must conform to [WCAG 2.2 Success Criterion 3.3.7: Redundant Entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry) and also make it easier for reviewers by removing the risk of multiple duplicate documents being submitted, whilst helping users to continue to reference their files by criteria and therefore make the application easier to process.

## Potential solutions

We created low-fidelity wireframes for a number of different flows to support users. The flows mainly centred around two main ideas:
1. Detect duplicates and use the originally uploaded file
2. Allow users to select from a list of files they've already uploaded.

Working through the flows in an asynchronous crit, we decided the the detection and use of previosuly uploaded files was the simplest to implement and most straight forward user journey. So pending usability testing this will likely be the approach we take.

## Screenshots

![A screenshot showing wireframes of multiple options for a duplicate file pattern](picture1.png)
------
![A screenshot showing a wireframe of a duplicate detction and reuse file pattern](picture2.png)
------
![A screenshot showing a wireframe of a pattern allowing a user to select previously used files](picture3.png)
------
![A screenshot showing a wireframe of a pattern allowing the user to select previosuly used files and upload more](picture4.png)

