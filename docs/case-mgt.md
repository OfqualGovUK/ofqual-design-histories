---
   layout: collection
   order: 4
   title: Case management
   description: An internal system for managing regulatory casework
   pagination:
     data: collections.case-mgt
     reverse: true
     size: 50
   permalink: "case-mgt/{% if pagination.pageNumber > 0 %}page/{{ pagination.pageNumber + 1 }}{% endif %}/"
---
