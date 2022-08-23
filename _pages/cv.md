---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* B.S. in Physics, The University of Tokyo, 2020

Work experiencs
======
* Summer 2020: Teaching Assistant
  * fluid mechanics

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Contributed Talks
======
  <ul>{% for post in site.talks reversed %}
  {% endfor %}</ul>
  
Outreach
======
  <ul>{% for post in site.teaching %}
    #{% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Academic horors
======
* Fellowship, [The International Graduate Program for Excellence in Earth-Space Science (IGPEES)](https://www.s.u-tokyo.ac.jp/en/IGPEES/index.html)
  an international combined Master's/Doctoral program
