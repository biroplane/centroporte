---
id: {{id}}
title: '{{{title.rendered}}}'
subtitle: '{{wps_subtitle}}'
occhiello: '{{acf.occhiello}}'
author:
  {{#_embedded.author}}
  - id: {{id}}
    name: {{name}}
  {{/_embedded.author}}
date: {{date}}
event_date: {{acf.event_date}}
address:
  {{#acf.indirizzo}}
  - lat: {{lat}}
    lng: {{lng}}
    zoom: {{zoom}}
  {{/acf.indirizzo}}
    name: '{{acf.indirizzo.address}}'
markers:
  {{#acf.indirizzo.markers}}
  - label: '{{label}}'
    lat: {{lat}}
    lng: {{lng}}
    {{/acf.indirizzo.markers}}
menu: '{{{acf.menu}}}'
website: {{{acf.sito_web}}}
working_hour: '{{{acf.orari}}}'
price: {{acf.prezzo}}
modified: {{modified}}
slug: {{slug}}
type: {{type}}
featured: {{sticky}}
format: {{format}}
preview: '{{{excerpt.rendered}}}'
categories: 
  {{#categories.categories}}
  - id: {{term_id}}
    name: {{{name}}}
    slug: {{slug}}
  {{/categories.categories}} 
tags: 
  {{#pure_taxonomies.tags}}
  - id: {{term_id}}
    name: {{name}}
    slug: {{slug}}
  {{/pure_taxonomies.tags}}
featured_image: {{{better_featured_image.media_details.sizes.medium_large.source_url}}}

---

{{{content.rendered}}}
