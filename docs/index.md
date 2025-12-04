---
homepage: true
layout: product
title: Ofqual Design Histories
description: A permanent record of user research and design decisions across our services
startButton:
  href: "https://github.com/OfqualGovUK/ofqual-design-histories/blob/main/CONTRIBUTING.md"
  text: "How to contribute"
sections:
  title: Services
# hide duplicate title in page title
options:
  header:
    productName: 'Ofqual Design Histories'
---
<div class="govuk-grid-row">
{% for item in homepageLinks %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body">
      <a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url }}">
        Read our {{ item.data.title | lower }}
      </a>
    </p>
  </section>
{% endfor %}
</div>