---
  layout: post
  title: Changing details in their account
  date: 2023-03-24
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

In the initial prototype we had 'request changes' buttons on areas in the Your details section. These went to a send message screen with a pre-populated subject. This allowed users to message Ofqual to request any changes. Ofqual would then pick up this message and make the change in the portal which would then flow through to the users account. This meant a time lag would exist and users would not be able to instantly see what they had changed. The reason for designing this was to reduce development effort and still provide a route for users to do this.

Feedback in UR sessions highlighted that users found it unusual to not be able to edit their personal details within the account and see the change instantly. 

> "Request change – not sure if this would enable me to edit details? "There must be a reason why you don't allow that""

> "Why can't I do this in realtime as my details.  Otherwise I might then chase why you haven't updated it and we go round in circles with messages"

After a technical discussion with the development team we realised it would not be much more work to build in edit abilities. And as it was a much cleaner approach which would reduce effort from Ofqual staff this was prioritised for the first release. 

For the subjects and occupational areas this was a different case. As users will only be able to update those details when Ofqual requests more information during the evaluation. Therefore we have just removed the 'request changes' button on that page. 

Changing personal information differs slightly from the application form as the user at this stage is most likely only needing to edit one item. Therefore selecting 'change' on name, telephone or email goes to a screen just showing that field. The country and address are all associated together so they are still edited on the same page. The edit pages all have the 'Personal information' heading for signposting. The save or cancel links both return to the personal information summary page. Except when editing the Country, this goes to the address edit page. 

---

## List of changes
- Allowing users to edit their personal information directly in the account rather than send a message
- Allowing users to add another reference without needing to send a message
- Allowing users to add another conflict of interest without needing to send a message
- Removing 'request changes' button on subject and occupational areas page 

---

## Before

![Screenshot of personla details page which is not editable](picture1.png)

![Screenshot of sending a message requesting a details change](picture2).png)

## After 
![Screenshot of personal information page with change links](picture3.png)

![Screenshot of changing full name](picture4.png)

![Screenshot of changing telephone number](picture5.png)

![screenshot of changing email address](picture6.png)

![Screenshot of changing where they live](picture7.png)

![Screenshot of changing their address](picture8.png)