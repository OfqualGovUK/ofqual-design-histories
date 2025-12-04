---
  layout: post
  title: Private beta prototype
  date: 2024-02-16
  screenshots:
    items:
      - text: "Service start page: find a qualification"
        src: 001-start-find-a-qualification.png
      - text: "Search page: find a qualification"
        src: 002-find-a-qualification-search.png
      - text: "Search results: find a qualification"
        src: 003-find-a-qualification-results.png
      - text: "Qualification details: find a qualification"
        src: 004-qualification-details.png
      - text: "Compare qualifications: find a qualification"
        src: 005-compare-qualifications.png
      - text: "Change compared qualification: find a qualification"
        src: 006-change-qualification.png
      - text: "Qualification details, full field set to show ordering and grouping: find a qualification"
        src: 007-qualification-details-full-field-set.png
      - text: "Error page, design A: find a qualification"
        src: 008-quals-error-design-a.png
      - text: "Error page, design B: find a qualification"
        src: 009-quals-error-design-b.png
      - text: "Service start page: find an awarding organisation"
        src: 010-start-find-organisation.png
      - text: "Search page: find an awarding organisation"
        src: 011-find-organisation-search.png
      - text: "Search results: find an awarding organisation"
        src: 012-find-organisation-results.png
      - text: "Organisation details: find an awarding organisation"
        src: 013-organisation-details.png
      - text: "Error page, design A: find an awarding organisation"
        src: 014-org-error-design-a.png
      - text: "Error page, design B: find an awarding organisation"
        src: 015-org-error-design-b.png
      - text: "Page not found error: general service page"
        src: 016-general-error-page-not-found.png
      - text: "Service error: general service page"
        src: 017-general-error-service-error.png
---

Following on from the user research undertaken on the alpha prototype of the Register of Regulated Qualifications between September and November 2023, the prototype was further developed.

## User research

User research from November 2023 found the following points which needed to be resolved in this round of prototyping:

* autocomplete on the search boxes for both user journeys was confusing and unhelpful to users
* grouping and ordering of fields for qualification details page had been determined
* some acronyms remained in the interface which proved confusing
* some language used was not clear to users
* it was not obvious to a small number of users that they could drill-down into the scope of recognition data
* when comparing qualifications, the qualification titles were too long for users to be able to know which qualifications they were selecting for comparison

## Design notes

### Compare qualifications

2 designs were tested in private alpha for comparison of qualifications:

1. A horizontally scrolling table of all qualifications the user had chosen to compare.
1. A table showing only 2 qualifications side-by-side, but with the option to swap which qualifications were being compared.

It was clear from the user research sessions that the preferred oiption was to display only 2 qualifications at a time for comparison, however, both the interface used to select the qualifications to compare and the display of the information for comparison were in need of a design overhaul.

### Scope of recognition

While the display of this information was well received, a small number of users didn't know how to drill-down into the displayed data. The presentation also did not offer a way to display those types of qualification which the awarding organisation did not offer as regulated qualifications. Minor design changes were needed here to cater for these issues.

### Service start pages

The legacy version of the Register of Regulated Qualifications does not really make use of start pages for its user journeys, although they do exist. The redesigned version relies on the start pages as the entry point into each user journey. As such, the start pages were redesigned for the new service.


## Changes from previous version

### Service start pages

1. Minor wording changes were made to the existing page.
1. Links to the equivalent services for Wales and Scotland were updated to point to the best available resources.
1. A section was added to allow users to directly download CSV files of pre-determined cuts of the dataset – this existed on the main search page for the incumbent service.

### Find a regulated qualification: search page

1. Autocomplete was removed from the search input field.

### Find a regulated qualification: search results

1. Search bar was removed from the filter side-panel and located to the top of the page.
1. Filters within the filter side-panel were redesigned with accordion actions – to view the filter options, the user clicks to expand the filter first.
1. The results list was redesigned to remove the table and present it in a more user-friendly manner.
1. Availability information colour-coded with a label to make it more usable.
1. Hit-area for the checkbox expanded to incorporate the qualification title, making it more usable on mobile devices.
1. Separate link to view details of each qualification.

### Find a regulated qualification: qualification details

1. Grouping and ordering of fields was updated to match the findings of November's user research.
1. A note on fees information was added the the bottom of the page and linked to from next to the fee data.
1. The link to check funding in England was linked to the Department for Education's '[List of qualifications approved for funding](https://www.qualifications.education.gov.uk/Search?Num=61031859&Status=All)' service. It links through to the search results for the specific qualification number.

### Find a regulated qualification: compare qualifications

1. The side-by-side comparison was completely redesigned to use a card-based design.
1. Rather than highlighting differences where they occur within the details, differences between qualifications are brought to the top of the page so that users can quickly and easily compare the differences between any 2 qualifications.
1. The mechanism to change the qualifications being compared was moved to a separate page to allow the user to view the full qualification title when selecting a new qualification to compare.
1. A note on fees information was added the the bottom of the page and linked to from next to the fee data.

### Find an awarding organisation: search page

1. Autocomplete was removed from the search input field.

### Find an awarding organisation: search results

1. The display of the title and search field were altered slightly.
1. An option to download the results as a CSV file was added.

### Find an awarding organisation: organisation details

1. A description was added to the scope of recognition explaining what it shows.
1. Cursor changes to a hand when the user hovers over an expandable item in the scope of recognition list
1. An expandable list of qualifications the organisation offers as unregulated qualifications was added.
1. A button was added for the user to download a CSV file of the scope of recognition.

## Next steps

Further user-testing through January and February 2024 to verify the changes and pick up any remaining issues.