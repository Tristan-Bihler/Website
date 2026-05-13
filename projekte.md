---
layout: default
title: "Projekte"
permalink: /projekte/
---

<div class="container">

  <section class="section">
    <h1 class="section-title">Projekte</h1>
    <p>
      Hier findest du eine Übersicht meiner Projekte – von kleinen Experimenten bis zu
      größeren Anwendungen. Jedes Projekt hat seinen eigenen Eintrag mit Details,
      Technologien und Lernerkenntnissen.
    </p>

    <div class="card-grid">
      {% assign projects = site.projects | sort: 'date' | reverse %}
      {% for project in projects %}
      <div class="card">
        <div class="card-image-placeholder">{{ project.icon | default: '🛠️' }}</div>
        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-meta">
            {{ project.date | date: "%B %Y" }}
            {% if project.status %} · <strong>{{ project.status }}</strong>{% endif %}
          </p>
          <p class="card-excerpt">{{ project.excerpt | strip_html | truncate: 120 }}</p>
          <div class="card-tags">
            {% for t in project.tech limit:4 %}
            <span class="tag">{{ t }}</span>
            {% endfor %}
          </div>
          <a href="{{ project.url | relative_url }}" class="btn btn-outline" style="font-size:0.85rem;padding:0.4em 1em;">Details ansehen</a>
        </div>
      </div>
      {% endfor %}
    </div>

    {% if site.projects.size == 0 %}
    <p style="color: var(--text-muted); font-style: italic;">
      Noch keine Projekte vorhanden. Lege eine neue Datei in <code>_projects/</code> an!
    </p>
    {% endif %}
  </section>

</div>
