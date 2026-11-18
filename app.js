(() => {
  const navigationEntry = performance.getEntriesByType("navigation")[0];
  if (navigationEntry && navigationEntry.type === "reload") {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    window.addEventListener("pageshow", () => window.scrollTo(0, 0), { once: true });
  }
  const assets = (name) => "assets/" + name;
  const path = {
    home: "index.html",
    about: "wie-is-agroland.html",
    services: "wat-we-doen.html",
    gallery: "fotogalerij.html",
    contact: "contact.html"
  };
  const navItems = [
    ["home", "Home"], ["about", "Wie is Agroland?"], ["services", "Wat we doen"], ["gallery", "Fotogalerij"], ["contact", "Contact"]
  ];
  const page = document.body.dataset.page || "home";
  const nav = '<header class="site-header"><a class="brand" href="index.html" aria-label="Agroland, home"><img src="' + assets("Logo_Agroland_Donker_CMYK.svg") + '" alt="Agroland - Werken aan groei"></a><button class="menu-toggle" type="button" aria-label="Menu openen" aria-expanded="false">☰</button><nav class="nav" aria-label="Hoofdnavigatie">' +
    navItems.map(([key,label]) => '<a href="' + path[key] + '"' + (page === key ? ' aria-current="page"' : '') + (key === "contact" ? ' class="nav-contact"' : '') + '>' + label + '</a>').join("") +
    '</nav></header>';
  const footer = '<footer class="site-footer"><a href="index.html" aria-label="Agroland, home"><img src="' + assets("Logo_Agroland_Wit_CMYK.svg") + '" alt="Agroland - Werken aan groei"></a><address><a href="https://maps.app.goo.gl/8qCasn4jPfLJa5pj9" target="_blank" rel="noopener noreferrer" aria-label="Open het adres van Agroland in Google Maps">Hoofdstraat 10<br>12-345 AB Żywocice, Polen</a></address><a href="tel:+4812345678">+48 123 456 78</a><a href="mailto:info@agroland.pl">info@agroland.pl</a></footer>';
  const hero = (cls,title,light) => '<section class="hero ' + cls + '" aria-label="' + title + '"><h1 class="hero-copy' + (light ? ' light' : '') + '">' + title + '</h1></section>';
  const pages = {
    home: '<main>' +
      '<section class="hero hero-home"><h1 class="hero-copy"><span class="hero-line hero-line-one">Werken</span><span class="hero-line hero-line-two">aan groei.</span></h1><a class="button hero-action" href="contact.html">Loonwerker nodig?</a></section>' +
      '<section class="section collab reveal-background"><div><h2>Samenwerken is belangrijk.<br>Samen kun je meer.</h2><p>Met kennis, ervaring en moderne machines<br class="desktop-break"> staat Agroland klaar voor iedere uitdaging.</p><a class="button" href="wie-is-agroland.html">Ontdek Agroland</a></div><img class="rounded-photo" src="' + assets("samenwerken.jpg") + '" alt="Tractor en aanhanger op het land"></section>' +
      '<section class="section why reveal reveal-late"><h2>Waarom Agroland?</h2><div class="why-grid">' +
      '<article class="why-item"><span class="quality-icon icon-betrouwbaar" aria-hidden="true"></span><h3>Betrouwbaar</h3><p>Afspraken na komen <br>op elk moment.</p></article>' +
      '<article class="why-item"><span class="quality-icon icon-professioneel" aria-hidden="true"></span><h3>Professioneel</h3><p>Kennis, ervaring en <br>moderne machines.</p></article>' +
      '<article class="why-item"><span class="quality-icon icon-flexibel" aria-hidden="true"></span><h3>Flexibel</h3><p>Meedenken, aanpassen, <br>samen groeien</p></article>' +
      '</div></section></main>',
    about: '<main>' +
      '<section class="hero hero-about" aria-label="Over Agroland"><h1 class="hero-copy light"><span class="hero-line hero-line-one">Geworteld in de landbouw.</span><span class="hero-line hero-line-two">Gericht op de toekomst.</span></h1></section>' +
      '<section class="section about-copy reveal"><h1>Gedreven door landbouw.<br>Gebouwd op vertrouwen.</h1><p>Agroland is een agrarisch bedrijf gevestigd in Ligota, Polen. Met een passie voor landbouw, praktijkervaring en moderne machines zetten wij ons dagelijks in voor ons eigen akkerbouwbedrijf en voor andere agrarische ondernemers.</p><p>Naast het verbouwen van gewassen zoals graan, maïs en koolzaad ondersteunen wij andere landbouwbedrijven met verschillende loonwerkzaamheden. Daarbij staan betrouwbaarheid, professionaliteit en flexibiliteit centraal. We denken mee met onze klanten, passen ons aan wanneer dat nodig is en streven naar een goede samenwerking.</p><p>Bij Agroland geloven we dat je samen verder komt. Door hard te werken, afspraken na te komen en te blijven ontwikkelen, bouwen we aan duurzame relaties en een sterke toekomst.</p><p><strong>Agroland. Werken aan groei.</strong></p><a class="button cta-reveal" href="wat-we-doen.html">Bekijk onze werkzaamheden</a></section></main>',
    services: '<main>' +
      '<section class="hero hero-services" aria-label="Werkzaamheden van Agroland"><h1 class="hero-copy"><span class="hero-line hero-line-one">Sterk op het land.</span><span class="hero-line hero-line-two">Betrokken bij elke klus.</span></h1></section>' +
      '<section class="section services-intro reveal"><h1>Thuis in akkerbouw.<br>Sterk in loonwerk.</h1><p>Bij Agroland draait alles om landbouw. Met praktijkervaring, moderne machines en een betrokken aanpak werken wij dagelijks aan ons eigen akkerbouwbedrijf en ondersteunen we andere agrarische ondernemers. Van werkzaamheden op onze eigen velden tot loonwerk voor klanten: we zetten ons in voor een goed resultaat.</p>' +
      '<div class="service-copy"><div class="reveal-child"><p><strong>Akkerbouw</strong>Landbouw vormt de basis van Agroland. Op onze eigen landbouwgrond verbouwen we verschillende gewassen, waaronder graan, maïs en koolzaad.</p><p>Door zelf actief te zijn in de akkerbouw weten we hoe belangrijk een goede planning, zorgvuldig werken en het juiste moment zijn. Die praktijkervaring nemen we mee in alles wat we doen.</p></div>' +
      '<div class="reveal-child"><p><strong>Loonwerk</strong>Naast onze eigen akkerbouw voeren we loonwerkzaamheden uit voor andere agrarische ondernemers. Met onze machines en praktijkkennis ondersteunen we klanten bij hun werkzaamheden op het land.</p><p>We begrijpen dat het werk in de landbouw afhankelijk is van het weer, de omstandigheden en het seizoen. Daarom vinden we het belangrijk om flexibel te zijn, mee te denken en afspraken na te komen.</p></div>' +
      '<div class="reveal-child"><p><strong>Samen werken aan resultaat</strong>Bij Agroland staan betrouwbaarheid, professionaliteit en flexibiliteit centraal. We geloven in duidelijke afspraken, goed contact en een praktische aanpak.</p><p>Of we nu op onze eigen velden werken of een andere ondernemer ondersteunen, ons doel blijft hetzelfde: zorgvuldig werk leveren en samen blijven groeien.</p></div></div></section>' +
      '<section class="section products"><img class="reveal-child" src="' + assets("wheat.jpg") + '" alt="Gouden graan op het veld"><div class="reveal-child"><h2>Onze landbouwproducten</h2><p>Van lokale afnemers tot grotere zakelijke partijen: Agroland biedt mogelijkheden voor de afname van landbouwproducten.</p><p>Wij richten ons voornamelijk op bedrijven die landbouwproducten inkopen voor verdere verwerking, handel of andere zakelijke doeleinden. Daarbij vinden wij langdurige samenwerkingen en heldere afspraken over afname en levering belangrijk.</p><p>Ook lokale ondernemers, horecabedrijven en particulieren kunnen bij ons informeren naar de mogelijkheden. De beschikbaarheid en afnamehoeveelheden zijn afhankelijk van het product en het seizoen.</p><p><strong>Interesse in onze landbouwproducten?</strong></p><a class="button" href="contact.html">Informeer naar de mogelijkheden</a></div></section>' +
      '<div class="farmer-banner"><img class="reveal-child" src="' + assets("farmer.jpg") + '" alt="Een agrarisch ondernemer op het groene veld"></div></main>',
    gallery: '<main>' +
      '<section class="hero hero-gallery" aria-label="Fotogalerij"><h1 class="hero-copy light"><span class="hero-line hero-line-one">Ons werk.</span><span class="hero-line hero-line-two">Ons verhaal.</span></h1></section>' +
      '<section class="gallery-motion" aria-label="Fotocarrousel"><div class="marquee reveal-child"><div class="marquee-track" data-gallery-row="one"></div></div><div class="marquee reveal-child"><div class="marquee-track" data-gallery-row="two"></div></div></section>' +
      '<section class="section gallery-copy reveal"><h1>Een kijkje in ons werk.</h1><p>Van het werk op het land tot het onderhoud van onze machines: bij Agroland is geen dag hetzelfde. In deze fotogalerij krijg je een indruk van onze dagelijkse werkzaamheden, de machines die we gebruiken en de mensen achter het werk.</p></section></main>',
    contact: '<main>' +
      '<section class="hero hero-contact" aria-label="Contact"><h1 class="hero-copy"><span class="hero-line hero-line-one">Korte lijnen.</span><span class="hero-line hero-line-two">Sterke samenwerking.</span></h1></section>' +
      '<section class="section contact-intro reveal"><h1>Neem contact met ons op.</h1><p>Heb je vragen over onze loonwerkzaamheden, wil je informeren naar onze landbouwproducten of de mogelijkheden voor een samenwerking bespreken? Neem gerust contact met ons op. We denken graag met je mee.</p></section>' +
      '<section class="section contact-details"><img class="reveal-child" src="' + assets("contact-location.jpg") + '" alt="Agroland en landbouwvoertuigen bij de bedrijfshal"><div class="reveal-child"><h2>Agroland</h2><p><a href="https://maps.app.goo.gl/8qCasn4jPfLJa5pj9" target="_blank" rel="noopener noreferrer">Hoofdstraat 10<br>12-345 AB Żywocice, Polen</a></p><p><a href="tel:+4812345678">+48 123 456 78</a><br><a href="mailto:info@agroland.pl">info@agroland.pl</a></p></div></section>' +
      '<section class="section contact-form-wrap reveal"><h2>Stuur ons een bericht.</h2><form class="contact-form" id="contact-form"><div class="form-field reveal-child"><label for="name">Naam</label><input id="name" name="Naam" placeholder="Je naam" required autocomplete="name"></div><div class="form-field reveal-child"><label for="email">E-mailadres</label><input id="email" name="E-mailadres" type="email" placeholder="Je e-mailadres" required autocomplete="email"></div><div class="form-field reveal-child"><label for="subject">Waar gaat je bericht over?</label><input id="subject" name="Onderwerp" placeholder="Bijv. loonwerk of landbouwproducten" required></div><div class="form-field reveal-child"><label for="message">Bericht</label><textarea id="message" name="Bericht" placeholder="Waarmee kunnen we je helpen?" required></textarea></div><button class="button" type="submit">Verstuur bericht</button><p class="form-note">Je e-mailprogramma opent om je bericht te versturen.</p></form></section></main>'
  };
  const site = document.getElementById("site");
  site.innerHTML = nav + pages[page] + footer;
  if (page === "about") {
    const aboutTitle = document.querySelector(".hero-about .hero-copy");
    const lowerLine = document.querySelector(".hero-about .hero-line-two");
    const setAboutAccentLength = () => {
      const text = lowerLine && lowerLine.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE || text.length < 5) return;
      const range = document.createRange();
      range.setStart(text, 4);
      range.setEnd(text, text.length);
      aboutTitle.style.setProperty("--about-accent-width", Math.ceil(range.getBoundingClientRect().width) + "px");
    };
    setAboutAccentLength();
    window.addEventListener("resize", setAboutAccentLength, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setAboutAccentLength);
  }
  if (page === "gallery") {
    const galleryTitle = document.querySelector(".hero-gallery .hero-copy");
    const upperLine = document.querySelector(".hero-gallery .hero-line-one");
    const setGalleryAccentLength = () => {
      const text = upperLine && upperLine.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE || text.length < 3) return;
      const line = document.createRange();
      line.selectNodeContents(upperLine);
      const letter = document.createRange();
      letter.setStart(text, 2);
      letter.setEnd(text, 3);
      const lineBox = line.getBoundingClientRect();
      const letterBox = letter.getBoundingClientRect();
      galleryTitle.style.setProperty("--gallery-accent-width", Math.ceil(lineBox.right - letterBox.left - letterBox.width / 2) + "px");
    };
    setGalleryAccentLength();
    window.addEventListener("resize", setGalleryAccentLength, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setGalleryAccentLength);
  }
  if (page === "contact") {
    const contactTitle = document.querySelector(".hero-contact .hero-copy");
    const contactLine = document.querySelector(".hero-contact .hero-line-two");
    const setContactAccentLength = () => {
      if (!contactTitle || !contactLine) return;
      const text = contactLine.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE) return;
      const range = document.createRange();
      range.setStart(text, Math.min(7, text.length));
      range.setEnd(text, text.length);
      contactTitle.style.setProperty("--contact-accent-width", Math.ceil(range.getBoundingClientRect().width) + "px");
    };
    setContactAccentLength();
    window.addEventListener("resize", setContactAccentLength, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setContactAccentLength);
  }
  if (page === "services") {
    const servicesTitle = document.querySelector(".hero-services .hero-copy");
    const lowerLine = document.querySelector(".hero-services .hero-line-two");
    const setServicesAccentLength = () => {
      const text = lowerLine && lowerLine.firstChild;
      if (!text || text.nodeType !== Node.TEXT_NODE) return;
      const firstK = text.textContent.toLowerCase().indexOf("k");
      if (firstK < 0) return;
      const range = document.createRange();
      range.setStart(text, firstK);
      range.setEnd(text, text.length);
      servicesTitle.style.setProperty("--services-accent-width", Math.ceil(range.getBoundingClientRect().width) + "px");
    };
    setServicesAccentLength();
    window.addEventListener("resize", setServicesAccentLength, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(setServicesAccentLength);
  }
  const menu = document.querySelector(".menu-toggle");
  const navEl = document.querySelector(".nav");
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
    navEl.classList.toggle("is-open", open);
  });
  const revealItems = document.querySelectorAll(".reveal:not(.reveal-late)");
  const lateRevealItems = document.querySelectorAll(".reveal-late");
  if ("IntersectionObserver" in window) {
    const observeOnce = (threshold, rootMargin, visibleClass = "is-visible") => {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add(visibleClass); observer.unobserve(entry.target); }
      }), { threshold, rootMargin });
      return observer;
    };
    const observer = observeOnce(.12, "0px");
    revealItems.forEach((item) => observer.observe(item));
    const backgroundObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("background-visible"); backgroundObserver.unobserve(entry.target); }
    }), { threshold: .12 });
    document.querySelectorAll(".reveal-background").forEach((item) => backgroundObserver.observe(item));
    const lateObserver = observeOnce(.55, "0px 0px -10% 0px");
    lateRevealItems.forEach((item) => lateObserver.observe(item));
    const ctaObserver = observeOnce(.35, "0px 0px -8% 0px");
    document.querySelectorAll(".cta-reveal").forEach((item) => ctaObserver.observe(item));
    const childObserver = observeOnce(.16, "0px 0px -8% 0px");
    document.querySelectorAll(".reveal-child").forEach((item) => childObserver.observe(item));
    const collabContentObserver = observeOnce(.55, "0px 0px -10% 0px", "content-visible");
    document.querySelectorAll(".collab").forEach((item) => collabContentObserver.observe(item));
  } else {
    document.querySelectorAll(".reveal, .cta-reveal, .reveal-child").forEach((item) => item.classList.add("is-visible"));
    document.querySelectorAll(".collab").forEach((item) => item.classList.add("background-visible", "content-visible"));
  }

  const galleryFiles = [
    ["gallery-mais-01.jpg","Mais – foto 1"],
    ["gallery-mais-02.jpg","Mais – foto 2"],
    ["gallery-mais-03.jpg","Mais – foto 3"],
    ["gallery-mais-04.jpg","Mais – foto 4"],
    ["gallery-mais-05.jpg","Mais – foto 5"],
    ["gallery-aardappels-01.jpg","Aardappels – foto 1"],
    ["gallery-aardappels-02.jpg","Aardappels – foto 2"],
    ["gallery-aardappels-03.jpg","Aardappels – foto 3"],
    ["gallery-aardappels-04.jpg","Aardappels – foto 4"],
    ["gallery-aardappels-05.jpg","Aardappels – foto 5"],
    ["gallery-aardappels-06.jpg","Aardappels – foto 6"],
    ["gallery-aardappels-07.jpg","Aardappels – foto 7"],
    ["gallery-aardappels-08.jpg","Aardappels – foto 8"],
    ["gallery-aardappels-09.jpg","Aardappels – foto 9"],
    ["gallery-pand-01.jpg","Pand – foto 1"],
    ["gallery-pand-02.jpg","Pand – foto 2"],
    ["gallery-pand-03.jpg","Pand – foto 3"],
    ["gallery-pand-04.jpg","Pand – foto 4"],
    ["gallery-pand-05.jpg","Pand – foto 5"],
    ["gallery-pand-06.jpg","Pand – foto 6"],
    ["gallery-pand-07.jpg","Pand – foto 7"],
    ["gallery-pand-08.jpg","Pand – foto 8"],
    ["gallery-pand-09.jpg","Pand – foto 9"],
    ["gallery-personen-01.jpg","Personen – foto 1"],
    ["gallery-personen-02.jpg","Personen – foto 2"],
    ["gallery-personen-03.jpg","Personen – foto 3"],
    ["gallery-personen-04.jpg","Personen – foto 4"]
  ];
  if (page === "gallery") {
    const rowOne = galleryFiles.map((_, index) => index), rowTwo = galleryFiles.map((_, index) => index);
    [[rowOne,"one"],[rowTwo,"two"]].forEach(([indices,row]) => {
      const track = document.querySelector('[data-gallery-row="' + row + '"]');
      const repeated = indices.concat(indices);
      track.innerHTML = repeated.map((idx,i) => '<button class="gallery-card" type="button" data-index="' + idx + '" aria-label="Foto openen: ' + galleryFiles[idx][1] + '"' + (i >= indices.length ? ' tabindex="-1"' : '') + '><img loading="lazy" src="' + assets(galleryFiles[idx][0]) + '" alt="' + galleryFiles[idx][1] + '"></button>').join("");
    });
    const dialog = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-image");
    const count = document.getElementById("lightbox-count");
    let current = 0;
    const show = (index) => {
      current = (index + galleryFiles.length) % galleryFiles.length;
      image.src = assets(galleryFiles[current][0]);
      image.alt = galleryFiles[current][1];
      count.textContent = (current + 1) + " / " + galleryFiles.length;
    };
    const next = (step) => show(current + step);
    document.querySelectorAll(".gallery-card").forEach((button) => button.addEventListener("click", () => {
      show(Number(button.dataset.index));
      dialog.showModal();
    }));
    dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
    dialog.querySelector(".lightbox-prev").addEventListener("click", () => next(-1));
    dialog.querySelector(".lightbox-next").addEventListener("click", () => next(1));
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    document.addEventListener("keydown", (event) => {
      if (!dialog.open) return;
      if (event.key === "ArrowLeft") { event.preventDefault(); next(-1); }
      if (event.key === "ArrowRight") { event.preventDefault(); next(1); }
    });
    let touchX = null;
    dialog.addEventListener("touchstart", (event) => { touchX = event.changedTouches[0].screenX; }, { passive: true });
    dialog.addEventListener("touchend", (event) => {
      if (touchX === null) return;
      const delta = event.changedTouches[0].screenX - touchX;
      if (Math.abs(delta) > 45) next(delta < 0 ? 1 : -1);
      touchX = null;
    }, { passive: true });
  }
  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(String(data.get("Onderwerp")));
    const body = encodeURIComponent("Naam: " + data.get("Naam") + "\nE-mailadres: " + data.get("E-mailadres") + "\n\n" + data.get("Bericht"));
    window.location.href = "mailto:info@agroland.pl?subject=" + subject + "&body=" + body;
  });
})();
