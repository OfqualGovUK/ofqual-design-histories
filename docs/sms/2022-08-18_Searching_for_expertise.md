---
  layout: post
  title: Searching for expertise
  date: 2022-08-18
  related:
    sections:
      - title: Related content
        items:
          - text: Guidance page
            href: https://www.gov.uk/guidance/subject-matter-specialists-for-ofqual
          - text: Prototype (pre-Nov 2023)
            href: https://experts-prototype.herokuapp.com/
          - text: Prototype (post-Nov 2023)
            href: https://ofqual-sms-prototype-8ab8fed9b8d9.herokuapp.com/
---

Potential experts will need to tell us which qualifications they are comfortable reviewing for Ofqual.

## Challenges with data

A current challenge is how to facilitate their search for these qualifications. A single data set of UK qualifications does not currently exist. 

The [Institute for Apprenticeships and Technical Education provide apprenticeships standards (IfATE)](https://www.instituteforapprenticeships.org/apprenticeship-standards/?includeApprovedForDelivery=true) which cover the majority of the vocational qualifications. There is no non-vocational list of qualifications. A team within Ofqual are attempting to consolidate these.

## Terminology

We anticipate experts will come from a range of backgrounds, from a purely academic context (eg Professor) to subject matters experts in occupational contexts (eg Plumber). For this reason the language we use needs to be inclusive. 

While it is a qualification that the experts will eventually help review, we assume that asking some experts to select 'qualifications' will be confusing. Instead we are considering referring to them them as 'subjects' or 'areas of expertise' in the hope that they will understand what we are asking them to do. 

## Initial attempts at searching for a subject

Our initial attempt was to create a branching flow that allowed users to first decide if their expertise was either an academic subject or a Vocational, sector or industry one.

![Screenshot of question page asking type of expertise](picture1.png)

If the area was academic we asked them to first choose a subject.

![Screenshot of subject search page](picture2.png)

They select the qualifications they have expertise in for this subject.

![Screenshot of qualification type selection](picture3.png)

They select the qualification levels they have expertise in for this subject.

![Screenshot of selecting a qualification level](picture4.png)

Alternatively, to find a vocational subject, we ask them to first select a route. 'Route' being terminology that IfATE use to categorise apprenticeships.

![Screenshot of select a route page](picture5.png)

Each route is divided into occupational standards, another IfATE term.

![Screenshot of occupation search](/picture6.png)

Our assumptions around this search pattern were that users:

- might not know if their are of expertise is vocational or academic
- might not know their qualifications and levels for a subject (academic flow)
- might not know which route their occupation is in. For example is the occupation 'Digital Engineering Technician' in the 'Digital' or 'Engineering' route? (vocational flow)

**Pros**
- This approach is fast/cheap to build and is not dependant on there being a single source of data for all qualifications
- Our assumption is that if the user gets to their correct category, having all available options visible will help the user scan and select the right one 

**Cons** 
- If a user goes down a wrong branch, it is hard to get them back to where they need to be.
- It is slow way to find an option

### Research findings

todo!

## Considering a global search 

Another method we are considering is to provide a global search using the [GOV.UK Accessible Autocomplete](https://github.com/alphagov/accessible-autocomplete).

![Screenshot of accessible autocomplete component](picture7.png)

![Screenshot of user journey from search to subject information](picture8.png)

Where a subject could be taught at multiple levels and multiple qualification types (eg Engineering) - we would still need users to specify the qualification type and level.

**Pros** 

- This implementation removes the potential for users to go down the wrong branching path as all options will always be available to all users 
- Fast to view search results
- Ability to scan multiple results which contain limited additional metadata  

**Cons** 

- It requires a single data set which we do not yet have 
- There is a concern about users won't know what to search for. For example the a user is looking for "waste management" but is searching for "rubbish" instead. We may need to identify and include common synonyms to further support searches
- A concern that each result won't show enough information to help the user select the correct option 

## Expanding on the global search for qualifications

The DfE have a [service for finding an apprenticeships](https://findapprenticeshiptraining.apprenticeships.education.gov.uk/courses?keyword=).

![Screenshot of the find an apprenticship service search page](picture9.png)

![Screenshot of the find an apprenticeship service details page](picture10.png)

We are considering exploring this pattern to help users find their areas of expertise.

**Pros**
- This implementation removes the potential for users to go down the wrong path, all options will always be available to all users 
- Fast to view search results
- Powerful filtering on search results against criteria we can specify
- Ability to scan multiple results which contain detailed metadata  

**Cons**
- It requires a single data set which we do not yet have  
- Slow and expensive to prototype and build
- There may still be a need for synonyms
- A concern that this pattern feels more like a dashboard, and may be disorientating or overwhelming to encounter mid-flow

## Next steps

Prototype a search approach and test with users.  