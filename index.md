---
layout: default
title: "Home"
---

<section class="hero">
  <h1>Hallo, ich bin <span>Tristan Bihler</span></h1>
  <p class="hero-subtitle">
    Entwickler, Entdecker und leidenschaftlicher Tüftler.
    Hier teile ich meine Projekte und Reiseerlebnisse.
  </p>
  <div class="hero-buttons">
    <a href="{{ '/projekte/' | relative_url }}" class="btn btn-primary">Projekte ansehen</a>
    <a href="{{ '/reisen/' | relative_url }}" class="btn btn-outline">Reisen entdecken</a>
  </div>
</section>

<div class="container">

  <!-- Über mich -->
  <section class="section">
    <h2 class="section-title">Über mich</h2>
    <div class="about-grid">
      <div class="avatar-placeholder">🧑</div>
      <div>
        <p>
          Willkommen auf meinem Portfolio! Ich bin <strong>Tristan Bihler</strong>, ein leidenschaftlicher
          Entwickler und Reisender aus Deutschland. Ich baue gerne Dinge – von kleinen
          Skripten bis hin zu vollständigen Web-Applikationen.
        </p>
        <p>
          Wenn ich nicht gerade code, erkunde ich neue Länder, lerne fremde Kulturen kennen
          und halte meine Abenteuer in Worten und Fotos fest.
        </p>
        <p>
          <strong>Interessen:</strong> Softwareentwicklung · Reisen · Fotografie · Open Source
        </p>
      </div>
    </div>
  </section>

  <!-- Neueste Projekte -->
  <section class="section">
    <h2 class="section-title">Neueste Projekte</h2>
    <div class="card-grid">
      {% if site.projects %}
        {% assign recent_projects = site.projects | sort: 'date' | reverse %}
        {% for project in recent_projects limit:3 %}
        <div class="card">
          <div class="card-image-placeholder">{{ project.icon | default: '🛠️' }}</div>
          <div class="card-body">
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-meta">{{ project.date | date: "%B %Y" }}{% if project.status %} · {{ project.status }}{% endif %}</p>
            <p class="card-excerpt">{{ project.excerpt | strip_html | truncate: 100 }}</p>
            <div class="card-tags">
              {% for t in project.tech limit:3 %}
              <span class="tag">{{ t }}</span>
              {% endfor %}
            </div>
            <a href="{{ project.url | relative_url }}" class="btn btn-outline" style="font-size:0.85rem;padding:0.4em 1em;">Mehr lesen</a>
          </div>
        </div>
        {% endfor %}
      {% endif %}
    </div>
    <p style="margin-top:1.5rem;"><a href="{{ '/projekte/' | relative_url }}">Alle Projekte ansehen &rarr;</a></p>
  </section>

  <!-- Letzte Reisen -->
  <section class="section">
    <h2 class="section-title">Letzte Reisen</h2>
    <div class="card-grid">
      {% if site.travels %}
        {% assign recent_travels = site.travels | sort: 'date' | reverse %}
        {% for trip in recent_travels limit:3 %}
        <div class="card">
          <div class="card-image-placeholder">{{ trip.icon | default: '✈️' }}</div>
          <div class="card-body">
            <h3 class="card-title">{{ trip.title }}</h3>
            <p class="card-meta">{{ trip.date | date: "%B %Y" }}{% if trip.country %} · {{ trip.country }}{% endif %}</p>
            <p class="card-excerpt">{{ trip.excerpt | strip_html | truncate: 100 }}</p>
            <a href="{{ trip.url | relative_url }}" class="btn btn-outline" style="font-size:0.85rem;padding:0.4em 1em;">Mehr lesen</a>
          </div>
        </div>
        {% endfor %}
      {% endif %}
    </div>
    <p style="margin-top:1.5rem;"><a href="{{ '/reisen/' | relative_url }}">Alle Reisen ansehen &rarr;</a></p>
  </section>

</div>
