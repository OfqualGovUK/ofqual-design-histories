---
  title: Beta - File upload task list ordering
  date: 2024-11-13
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/apply-to-have-your-qualifications-regulated
          - text: Prototype
            href: https://ofqual-recognition-c2182fd4130c.herokuapp.com/proto-7/start
---

As explained in previous design histories posts, the file upload pattern will be broken down from one large file upload at the end of the application, to four tasks, aligned to the criteria, which is how the majority of our users are working. 

But we wanted to explore whether the file upload task for each criteria should come before, or after the other tasks in the application form. 

## Hypothesis

Our hypothesis was that by placing the file upload task as the first task in the section, users would not feel the need to repeat any information they had provided as attached evidence in the contextual text fields that form the other part of the application content.

## Design

Each criteria section of the task list had a file upload task at the beginning of the section. With the exception of criteria B, which has two radio choice declarations, so it made sense to include file upload before the question task.

## Testing

As part of usability testing in the latest round, we observed users initial reactions to the architecture and asked users what their thoughts were.

## Results

Inconclusive. Results were mixed, but the general feedback was positive. 

However, in observation and when understanding the why through direct questioning, it seems that in some cases the file upload at the beginning of the section was not aligned to users mental models. 

The most common model was - provide answer > upload the evidence. As opposed to upload evidence > provide context. 

The nature of the testing round, the user sample and the inclusion of amended questions in the application may have impacted our confidence in the results, so further exploration and testing needs to be done alongside question page content design work.

## Screenshots
 
![A screenshot showing the task list with a file upload task as the first task in each criteria section](picture1.jpeg)