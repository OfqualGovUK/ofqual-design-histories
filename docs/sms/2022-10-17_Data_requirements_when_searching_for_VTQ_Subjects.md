---
  layout: post
  title: Data requirements when searching for VTQ subjects
  date: 2022-10-17
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

We're considering increasing the number of qualifications a user can select in the "Areas that you can provide expertise on" section. 

We currently offer approximately 800 qualifications to select from.

The full list is closer to 15,000. 

Is that too many? 

At what point does adding more options become problematic? That is A LOT of options to choose from.

------

It has been an ongoing requirement (nice to have) from the VTQ team for the application form to derive a lower level of qualification name/ subject name in regards to vocational subjects. The GQ subjects list and apprenticeships/ T levels list alone are not broad enough for the qualification reviews that the VTQ team are required to carry out next year.
 
Therefore, the solution we proposed was to provide the industry/ sector list for a user to select from as a high level/ broad area that they have expertise in. We knew that this would not be the most perfect solution and we would need to provide some extra functionality, possibly after the application has been accepted, to derive exactly what qualifications the applicant can support Ofqual with.
 
Accepting this sector alone would create issues when it comes to finding an expert suitable for each qualification, for example if you were to search for an engineering expert, you could be given people that have Aeronautical Engineering, Computer Systems Engineering, Transport Engineering or Welding Engineering skills - and there would not be a way to distinguish between these individuals without reading through every single profile one by one. (We could possibly have 100s of engineering experts applying to us with varying types of expertise).
 
There is not a list that exists (to my knowledge) that contains all of these subjects at enough detail - therefore, the Ofqual Register is our only option for this lower level detail. However, this list is at around 14k entries (quals that are available to learners, are not GCSEs/ A Levels/ Apprenticeships/ T levels) and is specific to each AO and level and qual type.
 
In an ideal world, we would be able to derive the qual title from the full title on the register, however, Data team has kindly attempted this for me by using some code from the SVR team (removing the AO name, qual type, qual level from the full title) and unfortunately, the results are not as accurate as we would need them to be. (Because the data is based on what AOs have inputted, there are spelling mistakes, grammatical issues etc that means the data to start with is not perfect, and then once the code had ran, there were some quals that were missing words, brackets, and one qualification that was left titled 'in' ) 
 
Following a chat with DM (and many chats with the rest of the team) I've come up with the following possible steps for handling this situation:
	
For MVP release in February 2023 - Keep the industry select as it stands in the prototype,  it works, it's been tested, users are happy with it
	
Before commissioning goes live in June 2023 - develop a much lower level list of qualifications, possibly a manual task, to group qualifications from the register into a VTQ Subject: For example - 'Pearson BTEC Level 5 Higher National Diploma in Computer Systems Engineering' would become 'Computer Systems Engineering' 
	
Any user that has selected an industry/ sector will be requested to select a subject (and qual type and qual level) from the new list of subjects and update their profile
	
Commissioning managers will be then able to filter by the new VTQ subjects list, or by the industry when searching for experts

Possible issues with this option:
	
- How would we maintain this list? 	
- How long would this task take/ who would be able to do this?	
- Would users want to update their profile? If they do not do this in time they may miss out on commissions?	
- Evaluators would need to review these choices after they've already evaluated their profile	
- Do we have any immediate thoughts on this as a proposed way of handling this?

To do:

Document the "searching for qualifications/sectors" flows 