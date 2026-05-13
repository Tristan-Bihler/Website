---
layout: default
title: "Reisen"
permalink: /reisen/
---

<div class="container">

  <section class="section">
    <h1 class="section-title">Reisen</h1>
    <p>
      Die Welt ist groß – und ich versuche, so viel wie möglich davon zu sehen.
      Hier dokumentiere ich meine Reisen: Eindrücke, Tipps und unvergessliche Momente.
    </p>

    {% assign all_countries = site.travels | map: 'country' | uniq | compact %}
    {% if all_countries.size > 0 %}
    <div class="country-bar">
      {% for c in all_countries %}
      <span class="country-chip">{{ c }}</span>
      {% endfor %}
    </div>
    {% endif %}

    <div class="card-grid">
      {% assign travels = site.travels | sort: 'date' | reverse %}
      {% for trip in travels %}
      <div class="card">
        <div class="card-image-placeholder">{{ trip.icon | default: '✈️' }}</div>
        <div class="card-body">
          <h3 class="card-title">{{ trip.title }}</h3>
          <p class="card-meta">
            {{ trip.date | date: "%B %Y" }}
            {% if trip.country %} · {{ trip.country }}{% endif %}
            {% if trip.duration %} · {{ trip.duration }}{% endif %}
          </p>
          <p class="card-excerpt">{{ trip.excerpt | strip_html | truncate: 120 }}</p>
          <a href="{{ trip.url | relative_url }}" class="btn btn-outline" style="font-size:0.85rem;padding:0.4em 1em;">Reisebericht lesen</a>
        </div>
      </div>
      {% endfor %}
    </div>

    {% if site.travels.size == 0 %}
    <p style="color: var(--text-muted); font-style: italic;">
      Noch keine Reisen vorhanden. Lege eine neue Datei in <code>_travels/</code> an!
    </p>
    {% endif %}
  </section>

</div>
