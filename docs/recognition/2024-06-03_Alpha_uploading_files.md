---
  layout: post
  title: Alpha - Uploading files
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
One of the largest problems identified in discovery was the user experience of uploading files as supporting evidence for the application. 
Files submitted by the PAO make up most of the content that is required by Ofqual to decide on whether to approve an application or not. It is therefore a fairly large risk to the whole service if we do not address the issues.

## Problems identified

- Internet connection speeds, volume and timeout issues mean that often users must upload no more than 10 files at a time.
- The average volume of files is around 70 individual files, but the highest ever submitted was 400. It is not uncommon to see 100+ files in most applications. 
- The biggest reason for application withdrawal is due to user error in file upload (missing information etc.)
- It is out of scope to reduce the number of files required, as the organisation needs to see a complete picture of how an organisation operates, is governed and how it develops qualifications across the four recognition criteria.
- Files uploaded have no particular order in the UI which makes it very hard for PAO users to check the correct files have uploaded.
- There is limited and often unhelpful error content.

## Hypothesis

Users probably prepare their applications and organise their files by criteria. We could reduce the volume and technical demand on the upload functionality by breaking it into chunks and allowing users to upload their files for each criteria.

## Research

Conducted a user research round of interviews with a variety of PAOs, recently regulated AOs and external consultants to understand how they gather, create and organise files in more detail.

## Summary

As a result of the user research, we are confident that most if not all organisations tend to organise their responses and evidence by criteria.

## Prototyping

After extensive desk-based research across public and private sector. Including meeting and reviewing code and prototypes from several other government departments it became clear that the volume of files required in this service is very rare, and no existing component or pattern that would work for this exists in the government design system or OGD design systems. 
We therefore began to design our own pattern that is based on the following principles:
- Accessible by design.
- Shows the user progress of their uploaded files.
- Checks file type and file size validation with appropriate error messaging.
- Allows for virus scanning with appropriate error messaging.
- Allows the user to check their uploaded files to ensure they have included everything.

## Next steps

- Manual accessibility testing of the pattern.
- Accessibility testing with users using our accessibility panel.
- Technical design and architectural decisions.
- Finalising plans for progressive enhancement with technical teams.
- Wider usability testing in private beta.
- Pattern for handling duplicate files
- Error message content design

## Screenshots

![A screenshot showing two different user flow ideas for uploading files](picture1.png)
------
![A screenshot of a high fidelity prototype screen for selecting files to upload](picture2.png)
------
![A screenshot of a high fidelity prototype screen showing a list of file names and file sizes that have been chosen by the user](picture3.png)
------
![A screenshot of a high fidelity prototype screen showing upload progress bars](picture4.png)
------
![A screenshot of a high fidelity prototype screen showing a check your answers page which lists the files successfully uploaded](picture5.png)
------
![A screenshot showing the user journey across the file upload pattern including comments where we would use error messaging components and what types of file validation we would do at each stage](picture6.png)


