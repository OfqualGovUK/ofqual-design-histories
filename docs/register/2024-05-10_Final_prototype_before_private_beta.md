---
  layout: post
  title: Final prototype before private beta
  date: 2024-05-10
  screenshots:
    items:
      - text: "Service start page: find a qualification"
        src: 01-Find-a-regulated-qualification.png
      - text: "Search qualifications"
        src: 02-Search-qualifications.png
      - text: "Qualification search results"
        src: 03-Search-results.png
      - text: "Qualification details"
        src: 04-Qualification-details.png
      - text: "Compare selected qualifications"
        src: 05-Compare-qualifications.png
      - text: "Change compared qualifications"
        src: 06-Change-qualification.png
      - text: "No results found: search qualifications"
        src: 07-No-results.png
      - text: "Warning: Javascript not enabled: search qualifications"
        src: 08-No-JS-Search-results.png
      - text: "Error: Select 2 items to compare"
        src: 09-Select-2-Search-results.png
      - text: "Qualification details (full fieldset)"
        src: 10-Qualification-details-full-fieldset.png
      - text: "Service start page: find an organisation"
        src: 11-Find-a-regulated-awarding-organisation.png
      - text: "Search organisations"
        src: 12-Search-organisations.png
      - text: "Organisation search results"
        src: 13-Search-results.png
      - text: "Organisation details"
        src: 14-Organisation-details.png
      - text: "Cookie banner example"
        src: 15-Cookie-banner.png
      - text: "Cookie preferences"
        src: 16-Cookie-preferences.png
      - text: "Error: page not found"
        src: 17-Page-not-found.png
      - text: "Error: application error"
        src: 18-Application-error.png
---

Following on from the user research undertaken during February 2024, the prototype was refined into a final design that would then be used to build the functioning version of the services.

## User research

User research from February 2024 made the following recommendations:

* for the scope of recognition, the CSV download should be tabulated data with the option to sort and filter the data
* some of the wording needs further consideration
* merge the qualification sub-level into qualification level within the filter options
* consider again the naming of the category ‘other’ in the scope of recognition
* refine the design for changing qualification within the ‘compare qualifications’ journey
* ensure that error pages are clear

These recommendations were considered during the prototype refinement, along with user comments from the testing and further recommendations from the project team.

## Design notes

### Service start pages

While in beta, the previous version of the service will still be available as a fallback for users, so a notice was added to the service start pages to notify users.

### Qualification search results

1. The 'compare selected' and 'download selected as CSV'[^1] buttons are greyed out and disabled unless the appropriate number of qualifications are selected.
1. If JavaScript is not available:
    * should the user click the button to compare while having selected fewer than 2 qualifications, they will receive an error
    * the user is only able to compare qualifications from a single page of search results; inset text was added to inform the user of this
1. A paragraph of text was added at the top of the search results listing to show the user how many qualifications they have selected, and give them the option to clear their selection.
1. When a user starts a new search, their previous qualification selections are cleared.
1. The filter for 'qualification sub-level', used only for entry-level qualifications, was removed and merged into the 'qualification level' filter.

### Qualification details page

The folowing changes were made: [^2]

1. 'Qualification sub-level' was removed and merged into 'qualification level'; this only affects entry-level qualifications.
1. The 'funding details' link for England now links directly to the qualification on DfE's service, if it exists.

### Compare qualifications

We noted the difficulty some users had in locating the method by which to change the qualifications compared. This is now done via a button at the top of each column, rather than by link text. [^3]

### Error pages

A consistent, single design was chosen for search results pages which return no results. After comparing similar services in the GOV.UK estate, and the feedback from users, we settled on the design without the red error text.

### Scope of recognition

1. The explanatory text was amended.
1. Information on an organisation's unregulated qualifications was added.
1. The CSV download now also included unregulated qualification types.

### Cookies

1. The cookie banner was added to the prototype as an example, along with footer links to change cookie preferences.
1. The cookie preferences page was created.

## Other considerations

We took into consideration the unprompted feedback from user testing sessions. While the following points were considered, they did not result in any changes to the design at this stage.

### Last date for new starts

> “Information I’d expect to see under ‘regulatory’ is [the] last date for new starters.”
>
> "It would be helpful to have information on [the] last date for new starts for qualifications that are currently available."

This information is optionally provided by awarding organisations and is only displayed if it is available. It is listed as the 'operational end date'. We may consider testing this language in future user-testing with awarding organisations and end-users. 

### Funding information, OCC maps

This information isn't currently available in the dataset that powers the Register, however, feature requests such as this will be considered for future prototyping and testing.

### Highlighting of differing information when comparing qualifications

Some users suggested that highlighting differences in a different colour would be preferable to putting the differing information at the top of the page. We did use this method in a previous prototype. We moved away from doing so as this method did not provide a good solution for users with access needs or who are using accessibility software. 

### Qualification titles as differing information

One user said that the fact that the qualification titles were different yet not included as part of the ‘differing information’ section was odd.

We decided not to present the qualification title in the differing information section. We believe it is widely understood that qualification titles are unique and will therefore always be different. In interface design terms, the qualification title functions as a heading to guide users to the information; moving it to within the differing information would likely make it harder to see which qualification is in which column. Repeating the information would fail accessibility standards.

### Scope of recognition: information architecture and naming

> “‘Other’ are vocational qualifications. Would be better titled as ‘VQs’.”
>
> “‘Other’ suggests that it is lesser but there are lots of qualifications that will sit in there but could be missed, especially by those who do not use the register regularly e.g. curriculum managers may not know where to find these qualifications quickly nor may they expect to find them in other.”

Within the database for the Register of Regulated Qualifications, each qualification is listed alongside a 'qualification type'. For most qualifications these are well-recognised terms, such as 'Functional skills' and 'A level (GCE)'. There is, however, a qualification type of 'not applicable' which captures qualifications which are regulated, but which don't fit into the more commonly-known regulated qualification types.

We decided to list these qualifications as 'Other' in this list for the following reasons:

* the term 'not applicable' would not be useful information to the user
* 'not applicable' might imply that these qualifications were not regulated
* using the term 'vocational qualifications' might risk suggesting that some of the other qualification types are not vocational

We will monitor user feedback of the beta version of the service and revisit this naming decision if needed.

> “Why is ‘Entry level’ in ‘Other’, it seems like kids doing entry level [qualifications] are shoved down at the bottom.”

Entry level qualifications are available for different qualification types, for example Functional skills, ESOL and Essential digital skills qualifications. They just also happen to be a qualification level for the qualification type of 'other' which is listed at the bottom of the list.

## Next steps

Development of the actual services and private beta with Ofqual staff during spring & summer 2024.

## Footnotes

[^1]: After completion of the prototype, technical restrictions forced us to change the 'download results as CSV' button to a more limited 'download selected results as CSV'. This change will be tested with users in future research
[^2]: Before private beta, any fields, text and functionality relating to qualification fees was removed owing to the data not being available yet.
[^3]: Before private beta, any fields, text and functionality relating to qualification fees was removed owing to the data not being available yet.