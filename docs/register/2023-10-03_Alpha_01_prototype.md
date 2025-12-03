---
  layout: post
  title: Completion of Alpha01 prototype
  date: 2023-10-03
  screenshots:
    items:
      - text: "Find qualification"
        src: 01-find-qualification.png
      - text: "Qualification search results (no filter)"
        src: 02-search-results-no-filter.png
      - text: "Qualification search results (filter)"
        src: 03-search-results-filter.png
      - text: "Qualification details"
        src: 04-qualification-details.png
      - text: "Find organisation"
        src: 05-find-organisation.png
      - text: "Organisation search results (no filter)"
        src: 06-org-search-nofilter.png
      - text: "Organisation details"
        src: 07-org-details.png
      - text: "Expanded scope of recognition"
        src: 08-scope.png
      - text: "Select qualifications to compare"
        src: 09-select-to-compare.png
      - text: "Compare qualifications (option 1)"
        src: 10-compare-quals-1.png
      - text: "Compare qualifications (option 2)"
        src: 11-compare-quals-2.png
---

The first Alpha version of the Register is delivery of basic API functionality, however it is not easy for stakeholders to visualise.

It was decided that as part of this alpha, prototypes for the 3 major user journeys would be produced:

- find a regulated qualification
- find a recognised awarding organisation
- compare qualifications (proof-of-concept)

## Design notes

Some parameters for the design were set out at the start:

1. The new design could not offer less functionality than the currently live service
1. The new interface had to be designed using the GOV.UK Design System
1. The interface needs to be accessible to WCAG 2.1 (or 2.2) AA from the outset

What was designed retains much of the same, base functionality as the currently-live service. What has changed is how that information and those user journeys are presented.

Part of the process of making the redesign more usable and accessible was cutting the pages within the journey back to their bare essentials – the page should do what it needs to do and nothing more.

We were asked to test the usability of an autocomplete function on both the qualification and organisation search pages, so this was implemented in the prototype.

One additional piece of functionality was to incorporate the ‘Scope of Recognition’ or ‘Recognition permissions’ into the organisation details page. This was previously only available as a 46,689-line CSV file and was next to impossible to use for its intended purpose.


## User research

User research found the following broad issues among the user groups we tested with:

1. The autocomplete functionality on the search boxes was confusing and unhelpful, users struggled to understand what to do.
2. The Scope of Recognition component still needs some work to make clear to users that it is interactive.
3. Users liked the idea of being able to compare multiple qualifications side-by-side and some were confused when only 2 were compared side-by-side.
4. There was confusion when trying to determine funding information for a qualification not funded in England – the link goes to a page on a third-party service that doesn't make it clear that the qualification is unfunded.
5. Users would like progression information available for each qualification.
6. Users definitely wanted the ability to download their search results to use offline.

## Next steps

1. Re-design and re-engineer the 'compare qualifications' journey so it fits better with the GOV.UK Design System and takes into account the feedback of users.
2. Remove the autocomplete from the search boxes.
3. Ensure there is a download button available for results.
4. Take another look at the Scope of Recognition component.
5. Tidy up the filters on the search results page.