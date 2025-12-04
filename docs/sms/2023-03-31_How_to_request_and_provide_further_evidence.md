---
  layout: post
  title: How to request and provide further evidence
  date: 2023-03-31
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

## Initial design 
Currently, the action required scenario that is shown in the prototype is when the user needs to provide additional information about 2 of the subjects they have applied for, in order for the evaluator to decide on an outcome. This was shown as one message for all additional information required. This appears as a single item in the status boxes. To complete the action they need to reply to the message. 

## UR findings
After reading the message, some users used the link at the bottom to view their application. Others went straight to reply. In both circumstances users struggled to recall the information shown in the message and commented they want to split their message up by the different things they need to provide. 

> "Each requirement into a separate box - it would be better"

> "I'd make a word doc with inserts, headings of the bits to add and upload with a simple message"

> "I'd cut and paste the message and put that in the message box" or maybe have the headings and add my information"

For those who used the link to view their application they jumped back and forth between this message and the application trying to match up what they had provided with what was being asked for. It was clearly challenging for them to remember everything being asked for. 

> "I'm finding it very hard to remember what it is [the teaching part]". 

> "I can't remember now what I had to provide and I'm trying to find it on the application, I would expect to see this".

## Post UR conversations

Since this UR round the application form has now been live for several weeks and evaluation of real applications has started. We are now able to access the types of things that evaluators need more information for. For subjects, these can range from no evidence being provided for a subject to a specific piece of context missing e.g the awarding body or years of experience. This information needed to be stored with the application and be easy to find when someone was reviewing a specialists profile, e.g. when considering them for a commission. The solution using messages would not allow this to happen. 

We had technical discussions about different ways to approach this user need, including how the data could be structured and not made overly complex.

We didn't want the answer they had already provided in the application to be edited because it ran the risk of information that was required being removed. The evidence box is for all subjects they apply for whereas this request for more information may only be for one subject. This could create confusion for the user if they are shown their previous answer and allowed to edit it. 

## What we needed to achieve 
- Splitting messages into smaller actionable chunks
- Replaying a users previous answer 
- Collecting the data in a way so it could be associated to the relevant place in the internal system 
- Ability for Ofqual to either request general or specific information
- To retain their previous answer and what the updated information was so the evaluator did not need to start the review again
 
## Changes made 
To help users complete the action required, we have now split the messages, so we send a message for each specialism they need to supply for evidence for. e.g. currently there are 2 within the same message (Making assessment judgements for Asbestos Analyst and Surveyor and Teacher training for Building control surveyor). This is now 1 message for Making assessment judgements for Asbestos Analyst and Surveyor and 1 message for Teacher training for Building control surveyor.

This also splits into 2 different actions required, and are shown in the status boxes. This acts like a checklist for the user to complete, allowing them to work through each individual task before moving on to the next. 

The page showing the breakdown of statuses by specialism has been updated to only have the Action required status next to the specific specialism that needs more information provided. 

The way the user provides this information has changed to be a form page, which contains the message of what they need to do, what they've previously provided and a text box to provide the new evidence (so we have the evidence as text and not in an uploaded document). After completing the text box they see a review screen, in the same way as the application form works giving them the opportunity to update before sending. Once sent they can no longer edit. The evidence is added to their application under the 'further supporting evidence' section. 

## To consider later
Needs tech discussion but something to consider is whether the action of 'sending' the evidence should close the action required task. If so the application status box would need updating:
- if they still have outstanding actions, reduce the number of actions required
- if all actions completed, change the status to 'awaiting decision'

----

### List of changes: 
- split actions required by individual specialism 
- send one message per action required 
- the action required title is less generalised
- show each action required in the status boxes 
- show the action required only next to the specific specialism it refers to (when viewing the subjects page)
- show number of actions to complete under the application status 
- changing how a user supplied further evidence for subjects. It now works as a form rather than a message
- text after sending updated to 'sent' instead of 'reply'
- after sending evidence it then shows under the 'further supporting evidence' section on the application page
- the examples for further evidence have been updated, to have 1 that is generic (e.g for teacher training the person hasn't written about that subject so evidence is being requested) and 1 that is specific and has a custom block of text in the message and form page which would be written by an Ofqual admin (e.g. the making assessment judgements needs specific information adding to their answer).
- success banner for these as 'evidence sent' instead of 'message sent'

----

### **Before:** 

![Screenshot of home page](1.png)

![Screenshot of further evidence request](2.png)

### **After:**
![Screenshot of home page with number of actions content](3.png)

![Screenshot of home page with number of actions required and actions in accordion component](4.png)

![Screenshot of further evidence message](5.png)

![Screenshot of replying to further evidence](6.png)

![Screenshot of guidance content in further evidence message](7.png)

![Screenshot of review your evidence screen](8.png)

![Screenshot of evidence successfully sent screen](9.png)

![Screenshot of evidence request message with content to say they have replied already](10.png)

![Screenshot of home page with number of actions required and actions in accordion component](11.png)

![Screenshot of subjects page with actions required and actions in accordion component](12.png)

![Screenshot of applications page with actions required and actions in accordion component](13.png)

![Screenshot of replying to further evidence](14.png)

![Screenshot of further evidence message](15.png)

![Screenshot of review your evidence screen](16.png)

![Screenshot of evidence successfully sent screen](17.png)

![Screenshot of evidence request message with content to say they have replied already](18.png)

![Screenshot of home page with number of actions required and actions in accordion component with copy to confirm they have completed the evidence](19.png)
