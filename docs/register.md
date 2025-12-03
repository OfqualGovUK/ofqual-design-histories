---
   layout: collection
   order: 2
   title: Register
   description: Finding details of regulated qualifications and organisations
   pagination:
     data: collections.register
     reverse: true
     size: 50
   permalink: "register/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
   related:
     sections:
       - title: Related content
         items:
           - text: Register service prototype
             href: https://ofqual-register.herokuapp.com/
           - text: GitHub - Register prototype
             href: https://github.com/OfqualGovUK/ofqual-register-prototype           
           - text: Legacy Register service
             href: https://register.ofqual.gov.uk
---
