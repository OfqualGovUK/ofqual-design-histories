---
  layout: post
  title: Adding better dummy content
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

Some scenarios couldn't be tested because we didn't have dummy content in the prototype. For example:
1. the action required message on the Home screen only contained one action. How would this display and would it be understood if there were a number of actions? 
2. after the application had been reviewed and there was an outcome (either approved, rejected or a mix) there was no message for this. 
3. we only had messages from Ofqual for a couple of situations (requesting proof of name change and requesting more evidence) but we could test other common situations. 

We also found some usability problems cropped up due to the dummy content we were using. For example:
- the submitted application contained text not from the perspective of the person applying but from an internal viewpoint. 
- the approved account had an unread message displayed which was asking for more information to be provided. But this would not be the case if they were approved. 
- the awaiting decision status had unread messages for action required. These now don't show. 

---
## New content

### 1. Action required list

![Screenshot of action required list](picture1.png)

### 2. Application outcome

![Screenshot of application outcome message in inbox](picture2.png)

![Screenshot of application outcome message](picture3.png)

![Screenshot of application rejected message](picture4.png)

### 3. Further examples of messages from Ofqual 

![Screenshot of identity verification message](picture5.png)