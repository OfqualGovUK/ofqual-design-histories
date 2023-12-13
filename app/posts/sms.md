---
   layout: collection
   title: Subject Matter Specialists
   description: Design history for the Subject Matter Specialists service
   pagination:
     data: collections.sms
     reverse: true
     size: 50
   permalink: "sms{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
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
