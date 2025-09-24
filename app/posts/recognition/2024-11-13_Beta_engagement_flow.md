---
  title: Beta - Pre-application engagement user journey
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

The pre-application engagement stage of the process is to help organisations understand what is needed and to prepare their applications. 
Current (as-is) stages to the process:

 1. Account creation
 2. Message sent by Strategic Relationships (SR) team to complete a questionnaire word document
 3. PAO returns form and is contacted to attend a webinar
 4. PAO attends webinar and is contacted to arrange a one to one meeting with an engagement lead
 5. Once meeting has taken place PAO requests SR to release the application form and allow them to start

At various points in the as-is user journey, documents and information to help them is sent via message to the PAO.

The account creation journey is interwoven with the pre-application journey as all communications and management of the engagement process is currently handled in-service.

## Things we observed in Discovery and Alpha

- The current account creation process causes duplication and account recovery problems.
- Users find application content by search, once found they remember search terms and continue to locate via search.
- Users struggle to understand the criteria vs conditions (content).
- Some users prepared applications then found the application was different to what they expected.
- Some users struggled to know what to expect, or to ask in meetings when they haven’t seen the application.
- There’s duplication of information gathering at different stages in the wider process.
- It takes a significant amount of time to schedule webinars and meetings for the Strategic Relationships team, going back and forth with messages.
- Whilst engagement is encouraged, we can not prevent an organisation from applying without engagement with SR if they want to.

## Questions to address

- How do we provide access to the application but encourage engagement before an organisation applies?
- At what point in the journey do we help users to book webinars and meetings?
- Where does this content fit into the wider content journey?
- What information do Ofqual users need at point of webinars/meetings?
- How do we minimise administrative burden for PAO and Ofqual users?


## Hypotheses

- Providing earlier access to the application will improve the quality of the engagement process for PAOs.
- Using automated booking services will reduce the burden on both PAO users and SR users when organising webinars and meetings.
- Users could get lost in the service when using automated booking services, and may find it difficult to navigate back to the service.


## Options

1. Manage the engagement process offline, taking organisations to the booking service after the eligibility check, then handle the flow through email notifications automated using Notify. Ofqual will release the full application on completion or at request.
2. A flow, which asks users if they want engagement after eligibility checking, if yes, then offline flow to book webinar etc., if no, then proceed to application
3. Add engagement as a task in the task list, allowing users to go to book a webinar or meeting if they want to, whilst also allowing them to continue to use and explore the full application

## Design

After working through he various scenarios using low fidelity wireframes for scenario analysis, we decided to test option 3 as our preferred user journey. 

The task uses a content page which allows the user to navigate to a booking system, or to decline engagement. The option to book their engagement uses a primary call to action to whilst the option to decline is a text link provided under the primary call to action in order to encourage organisation down the engagement route. 

This tested well in usability with most users ignoring the decline option completely, and all users successfully navigated to the booking system.   

The design allows organisations to continue to navigate around and use the application whilst going through the engagement process. Users we tested with remarked that this would be very helpful for them to prepare their application and any questions they need to ask through engagement. 

## Next steps

- Full content design of the engagement flow across in-service, booking pages and email notifications.
- Monitor usage and performance metrics (to be set) in Beta.
- More work on what to do with the status tag of the engagement tag in the task list. Should
- Ofqual users change the status upon PAO attendance or should we ask the PAO user to complete the task pre-submission, or not have a status for the engagement task at all.

## Screenshots

![A screenshot showing a task list pattern with the pre-application engagment task as the first task](picture1.jpeg)
![A screenshot showing a content page with a primary call to action to book engagement and content if the user chooses not to](picture2.jpeg)
![A screenshot showing a page confirming the engagament information and booking link has been sent to their email address](picture4.jpeg)
![A screenshot showing an example email which contains a link for the user to sign up to a webinar](picture3.jpeg)
![A screenshot showing Microsoft bookings page used for testing the webinar booking automation](Examplebooking.jpeg)
![A screenshot showing a task list pattern with the pre-application engagment task status set as in progress](picture5.jpeg)
![A screenshot showing a page asking if the user has completed the engagement, with radio buttons for yes or no](picture6.jpeg)
![A screenshot showing a task list pattern with the pre-application engagment task status set as completed](picture7.jpeg)