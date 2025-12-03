---
  layout: post
  title: Filtering the case list
  date: 2025-10-08
  related:
    sections:
      - title: Related content
        items:
          - text: Carbon design system - Filtering pattern
            href: https://www.carbondesignsystem.com/patterns/filtering
          - text: Carbon design system - Filterable multi-select component
            href: https://carbondesignsystem.com/components/dropdown/usage/#multiselect        
---

## Context

Filters in the legacy CMS are inconsistent and hard to use, leading to reliance on external tooling and guidance to find cases. Each module had its own filters, layouts, metadata, status labels and business vocabulary. This makes it harder for staff to work across different case types requiring memory of working with different cases instead of recognition of a consistent pattern. It also makes it more difficult for new staff to learn how to use the system. 

## Options

The first concept used the Carbon design system's filterable data table variant that uses an icon in the toolbar to open a filter modal (Figure 1 and Figure 2).

![Wireframe showing the initial case list concept with filtering data table variant from Carbon design system](wireframe1.png)
*Figure 1: Wireframe showing the initial case list concept with filtering data table variant from Carbon design system*

![Screenshot showing the filter modal accessed from the data table toolbar](picture1.png)
*Figure 2: Filter modal accessed from the data table toolbar*

This approach was avoided following a design crit because:
- it hides the filters behind an icon, making them less visible and harder to discover
- it requires more clicks to access the filters, increasing interaction cost
- it uses a modal which can be disruptive to the user's workflow and is contrary to our design principles
- it does not meet WCAG 2.2 criterion to level AAA 2.4.11 Focus Not Obscured as the modal obscures the data table when open. However with focus constrained to the modal it would pass Level AA
- it requires users to remember their filter selections when the modal is closed, increasing cognitive load.
- it constrained the available space for filters, making it harder to include all necessary filter options.

The second concept used on-page filters that are always visible, and updated automatically upon selection. This concept was further refined in version 3 to use a batch updating pattern (Figure 3), to avoid slips or errors when users might have applied multiple filters but the page was still loading results from the first selection and it would not be clear to the user the other selections had not been applied.

## Proposed solution

Version 3 was chosen as the proposed solution to take forward to testing because:
- it makes filters more visible and easier to discover
- it reduces interaction cost by allowing users to see and change filters without opening a modal
- it helps avoid slips or errors by using a batch updating pattern
- it provides more space for filters, allowing for all necessary options to be included
- it meets WCAG 2.2 criterion 2.4.11 Focus Not Obscured as the filters do not obscure the data table when open.
- it reduces cognitive load by allowing users to see their filter selections at all times.

The proposed solution uses:
- on-page filters that are always visible to the left of the case list  
- a batch updating pattern to apply multiple filter selections at once
- a clear all filters button to reset all selections
- individual clear controls to remove specific filters
- a filterable multi-select component for filters with many options (Submitted by)
- date range picker for date filters (Received date)
- checkboxes for filters with few options (Status, Case type)

![Screenshot showing on-page filters with batch updating pattern, no filters selected](picture2.png)
*Figure 3: On-page filters with batch updating pattern - no filters selected*

![Screenshot showing on-page filters with batch updating pattern, filters selected but not yet applied](picture3.jpeg)
*Figure 4: On-page filters with batch updating pattern - filters selected but not yet applied*

![Screenshot showing on-page filters with batch updating pattern, all filters types applied](picture4.jpeg)
*Figure 5: On-page filters with batch updating pattern - all filters types applied*

## Research

Testing showed the new design was easy to use. Some improvements could be made such as:
- making “Apply” and “Clear” buttons more readily visible for users using smaller screens
- adding a “case lead” filter to help team leads find cases assigned to their themselves or their team members
- showing the values (names) in the filterable multi-select for the "submitted by" filter when one option is selected, rather than just the number of selected options to improve visibility of system status

## Next steps

We plan to:
- explore the button placement for apply and clear, or explore collapsing filter sections, or some other signifier to improve visibility on smaller screens
- add a "case lead" filter to the design
- consider use of the filterable multi-select component when javascript is not available
- test with more teams and case types, and with users of assistive technologies
- consider if date range filters are needed at all

## Screenshots

![Screenshot showing on-page filters with batch updating pattern, no filters selected](picture2.png)

![Screenshot showing on-page filters with batch updating pattern, filters selected but not yet applied](picture3.jpeg)

![Screenshot showing on-page filters with batch updating pattern, all filters types applied](picture4.jpeg)