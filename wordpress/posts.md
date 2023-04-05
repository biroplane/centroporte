---
id: {{id}}
title: '{{{title.rendered}}}'

author:
  {{#_embedded.author}}
  - id: {{id}}
    name: {{name}}
  {{/_embedded.author}}
date: {{date}}
modified: {{modified}}
slug: {{slug}}
type: {{type}}
featured: {{sticky}}
format: {{format}}
preview: ' {{{excerpt.rendered}}} '
# categories: 
#   {{#pure_taxonomies.categories}}
#   - id: {{term_id}}
#     name: {{{name}}}
#     slug: {{slug}}
#     count: {{count}}
#   {{/pure_taxonomies.categories}} 
# categorylist: 
#   [{{#pure_taxonomies.categories}}{{slug}},{{/pure_taxonomies.categories}} ]
# tags: 
#   {{#pure_taxonomies.tags}}
#   - id: {{term_id}}
#     name: {{name}}
#     slug: {{slug}}
#     count: {{count}}
#   {{/pure_taxonomies.tags}}
# taglist: 
#     [{{#pure_taxonomies.tags}}
#     {{slug}},
#     {{/pure_taxonomies.tags}}]
# featured_image: {{{better_featured_image.media_details.sizes.medium_large.source_url}}}

---

{{{content.rendered}}}
