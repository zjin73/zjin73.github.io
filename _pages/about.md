---
layout: researcher
title: Home
permalink: /
description: "Zhiheng Jin — system identification, multi-agent systems, agent + control, and complex systems."
redirect_from:
  - /about/
  - /about.html
---
<section class="profile" aria-labelledby="profile-name">
<div class="profile-copy"><h1 id="profile-name">Zhiheng Jin <span lang="zh">靳志衡</span></h1>
<p class="profile-role">Master's student · Control Science and Engineering<br>Nanjing University of Aeronautics and Astronautics</p>
<p>I study system identification, multi-agent systems, and the connection between intelligent agents and control. My research includes manipulator motion planning and model predictive control, supervised by Dan Yu.</p>
<div class="profile-contact"><a href="mailto:zjin73@nuaa.edu.cn">zjin73@nuaa.edu.cn</a><span>Nanjing, China</span></div>
<div class="social-links" aria-label="Social profiles"><a href="https://www.youtube.com/@zjin73">YouTube</a><a href="https://x.com/zjin73">X</a><a href="https://www.linkedin.com/in/zjin73">LinkedIn</a><a href="https://github.com/zjin73">GitHub</a></div></div>
<img class="profile-photo" src="{{ '/assets/images/zhiheng-portrait.jpg' | relative_url }}" alt="Zhiheng Jin — photograph from his Google Sites homepage" width="1080" height="891">
</section>
<section class="interests" aria-labelledby="interests-title"><h2 id="interests-title">Research interests</h2><ul><li>System Identification</li><li>Multi-Agent Systems</li><li>Agent + Control</li><li>Complex Systems</li></ul></section>
<div class="home-overview">
<section class="home-section news-column" aria-labelledby="news-title"><div class="section-title"><h2 id="news-title">News</h2><a href="{{ '/news/' | relative_url }}">All news</a></div>
{% assign news_items = site.data.news | sort: 'date' | reverse %}
{% for item in news_items limit:3 %}
<article class="news-item"><time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%Y.%m.%d' }}</time><p lang="{{ item.lang | default: 'en' }}">{{ item.text | escape }}</p></article>
{% endfor %}
</section>
<div class="background-column">
<section class="home-section" aria-labelledby="education-title"><h2 id="education-title">Education</h2>
<article class="record"><p class="record-meta">2024.09–Present</p><h3>Nanjing University of Aeronautics and Astronautics</h3><p>Master of Research in Control Science and Engineering</p><p class="record-meta">GPA: 85/100 · Supervisor: Dan Yu</p></article>
<article class="record"><p class="record-meta">2021.02–2023.06</p><h3>Shenyang Aerospace University</h3><p>BEng in Aircraft Design and Engineering</p><p class="record-meta">GPA: 82/100 · Supervisor: <a href="https://yjs.sau.edu.cn/info/1030/1233.htm">Yiming Du</a></p></article>
<article class="record"><p class="record-meta">2019.09–2021.02</p><h3>Shenyang Aerospace University</h3><p>Mechanical Engineering.</p></article>
</section>
<section class="home-section" aria-labelledby="internships-title"><h2 id="internships-title">Internships</h2>
<article class="record"><p class="record-meta">2025–Present</p><h3>Jiangsu Industrial Technology Research Institute</h3><p>Control Engineer</p></article>
<article class="record"><p class="record-meta">2021</p><h3>Liaoning General Aviation Research Institute</h3><p>Research Assistant</p></article>
</section>
</div>
</div>
<div class="cv-reference"><a href="{{ '/cv/' | relative_url }}">CV</a><span>Full academic and professional record · PDF</span></div>
