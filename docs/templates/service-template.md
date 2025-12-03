---
   layout: collection
   order: 1
   title: Human readable title # e.g. Jam Factory
   description: Service description # e.g. Turning raw fruit into tasty preserves
   pagination:
     data: collections.service-name # e.g. collections.jam-factory
     reverse: true
     size: 10
   permalink: "service-name{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/" # e.g. "jam-factory{%..."
   related:
     sections:
       - title: Related content
         items:
           - text: Related content 1
             href: https://link.here
           - text: Related content 2
             href: https://link.here
           - text: Related content 3
             href: https://link.here
---