---
  title: Task-based user interface
  date: 2025-10-09
  related:
    sections:
      - title: Related content
        items:
          - text: Prototype
            href: https://case-mgt-2ece7938ecbf.herokuapp.com/
          - text: GOV.UK Design System - Help users to complete multiple tasks
            href: https://design-system.service.gov.uk/patterns/complete-multiple-tasks/
          - text: Carbon design system - Contained list component
            href: https://carbondesignsystem.com/components/contained-list/usage/
---

## Context

The legacy case management system uses a module‑based CRUD interface. CRUD stands for Create, Read, Update and Delete. Cases are managed using large forms, with inconsistent input controls, and mostly fields are grouped based on similarity rather than users' needs. This increases the effort needed to complete a step and makes it difficult to see case progress.

We intend to redesign the structure of the user interface to centre it on the work that case workers actually do. The aim is to reduce cognitive effort, make progress clear, and create a consistent way to move through a case. This also aligns to techniques we've used in other citizen facing services to split complex interactions into smaller steps and use patterns that users recognise.

Why this matters:
- long, monolithic forms add unnecessary mental effort, which slows people down and increases mistakes, as explained by Cognitive Load Theory (keep working memory demands low)
- unclear status and progress reduce confidence and make it harder for colleagues to report on progress and continue each other’s work. A clear, consistent structure supports learnability, cross-case-type working and onboarding.
- chunking work into smaller steps and using familiar patterns reduces the effort needed to understand what to do next and increases motivation. Applying the Goal Gradient Effect (people are more motivated to complete tasks as they progress closer to the end), Zeigarnik effect (people remember uncompleted tasks better) and the Fogg Behaviour Model (behaviour happens when motivation, ability and a prompt occur at the same time).

## Options

We considered two structural options.

### Vertical progress indicator

The original concept used a vertical progress indicator from Carbon design system to show tasks in a case on the left hand side of the screen, with the task related content area on the right (Figure 1).

![Wireframe showing the vertical progress indicator pattern with task list on the left and content area on the right](wireframe1.png)
*Figure 1: Wireframe showing the vertical progress indicator pattern with task list on the left and content area on the right*

This approach was avoided following a design crit because:
- the vertical progress indicator is designed for linear processes, whereas case work is often non-linear and iterative
- we wanted to include a higher level progress indicator to show stages in a case, which would add complexity to the interface
- the column layout reduced the available width for content, which is often information dense
- including the tasks in the left column and the content in the right column created a split attention effect, potentially increasing cognitive load

### Task list

After various stages of ideation, the next workable concept used a task list pattern to show stages and tasks in a case, with the task content surfaced in a dedicated page. More aligned to a one thing per page approach (Figure 2). However, this pattern would require other patterns to support data entry and review. 

This pattern also carries the risk of making case data less visible from a holistic perspective, although by grouping required inputs into tasks and stages, we can make it easier to find and review specific data by improving information scent (a users ability to find the location of the information they need). We could explore ways to show a holistic view of case data in future iterations if research suggests it is needed.

![Wireframe showing the task list pattern with stages and tasks](wireframe2.png)
*Figure 2: Wireframe showing the task list pattern with stages and tasks*

## Proposed solution

### Task list pattern (navigation and structure)

The task list shows the stages in a case and the tasks in each stage. Each task line shows a status is clickable to start, continue or review a task with hover and focus states as signifiers. Closely aligned to the GOV.UK Design System task list pattern. The task list has been implemented using a Carbon design system Contained list component with the Tag component slotted in the second column of the list to show task status (Figure 3).

![Screenshot of coded prototype showing the task list pattern with stages and tasks](picture1.jpeg)
*Figure 3: Screenshot of coded prototype showing the task list pattern with stages and tasks*

How it helps:
- users can see what to do next and choose the order to complete tasks when appropriate
- stage and task progress indicators make progress visible, useful for checking progress at a glance whilst also potentially increasing effort as people get closer to completion (the goal‑gradient effect)
- a consistent structure supports learnability, cross-case-type working and onboarding
- breaking work into smaller steps reduces cognitive load and makes it easier to focus on one thing at a time (Cognitive Load Theory, chunking)


### Task templating

We use a single page template for data entry pages and configure its content using the case ID and task ID. This keeps the layout, controls and validation consistent across tasks and case types. It helps teams maintain standards and avoid divergence over time. It also makes it easy to maintain, iterate and add new case types, stages and tasks easily.

![Screenshot of coded prototype showing an example task page, in this case for assigning a case worker in a recognition application](picture2.png)
*Figure 4: Screenshot of coded prototype showing an example task page, in this case for assigning a case worker in a recognition application*

### Check answers pattern (data integrity and case momentum)

We added a check answers step for each task, so users can review and correct data before moving on. This pattern is used to reduce errors, increase confidence and to encourage case progression (Figure 5).

The pattern leverages some behavioural effects, to encourage users to start tasks and save their progress even if they don't have all the required information. By not signifying mandatory data entry in the form itself (see Figure 4), users are encouraged to enter what they know now and to save and come back later, increasing engagement and hopefully improving the accuracy of case progression for reporting. 

The check answers page then uses different visual cues to help users identify what data is missing. Mandatory fields ask the user to enter the information, and non-mandatory fields display "Not provided" with a link to edit their answer should they wish to (Figure 6).

![Screenshot of coded prototype showing an example check answers page for a task](picture3.jpeg)
*Figure 5: Screenshot of coded prototype showing an example check answers page for a task*

![Screenshot of coded prototype showing an example check answers page with missing mandatory and non-mandatory data](picture4.png)
*Figure 6: Screenshot of coded prototype showing an example check answers page with missing mandatory and non-mandatory data*

## Research

What we tested and observed:
- participants found it easy to identify case status and what to do next
- stage and task statuses made it easier to pause and resume and for colleagues to continue work with confidence
- the task list, question pages and check answers were recognisable and required little instruction
- "Save" vs "Save and Continue" wasn't always clear what the difference was
- asterisks for mandatory fields on check answers page weren’t always understood or recognised often associated with descriptive small print instead

## Next steps

We will:
- remove the save button favouring a single save and continue button to reduce confusion
- explore alternative ways to signify mandatory fields on the check answers page
- test with more case types and users to validate the approach
- explore ways to show a holistic view of case data if research suggests it is needed
- refine the visual design of the task list to fix alignment issues
- refine the visual design of the task pages
- begin design on consistent approaches to input control types for similar data types across case types
- work on data validation, error message and error prevention design

## Screenshots

![Screenshot of coded prototype showing the task list pattern with stages and tasks](picture1.jpeg)

![Screenshot of coded prototype showing an example task page, in this case for assigning a case worker in a recognition application](picture2.png)

![Screenshot of coded prototype showing an example check answers page for a task](picture3.jpeg)

![Screenshot of coded prototype showing an example check answers page with missing mandatory and non-mandatory data](picture4.png)

![Screenshot of coded prototype showing an example check answers page with an error state](picture6.png)

![Screenshot of coded prototype showing the task list pattern with all stages and tasks completed](picture5.jpeg)
