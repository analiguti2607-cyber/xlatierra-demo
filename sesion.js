/* =====================================================================
   XLATIERRA · SESIÓN ESPECIAL «Lo que siembras hoy crece»
   Los textos de ¡Adivina! y ¿Mito o dato? vienen tal cual del Módulo 1
   publicado (contenido.js). Para cambiarlos, edita solo lo que está
   entre comillas.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- SLIDO ----------
     Cuando crees tu slido, pega aquí el código (sin #) y el enlace.
     Mientras esté vacío, los recuadros de Slido no aparecen. */
  var SLIDO = { codigo: "", enlace: "" };

  /* ---------- EL ÁRBOL: las tres preguntas, en orden ---------- */
  var TREE = [
    {part: "roots", label: "🌱 Raíz · Lo que me sostiene", q: "¿Qué o quién te impulsa a seguir estudiando?"},
    {part: "trunk", label: "🪵 Tronco · Mi superpoder", q: "¿Qué sabes hacer bien? Cocinar, escuchar, organizar, arreglar cosas, hacer reír…"},
    {part: "leaves", label: "🍃 Hoja · Lo que quiero sembrar", q: "¿Qué quieres sembrar con lo que estudias?"}
  ];

  /* ---------- ¿QUÉ TE IMPORTA? ----------
     Cada dato viene del sitio de Xlatierra, con su fuente. */
  var CARES = [
    {i: "🏠", t: "Mi familia", b: "Cuidar a tu familia hoy también es protegerla del calor.",
     n: "45 M", d: "de niñas, niños y adolescentes en América Latina están expuestos a olas de calor extremas", s: "UNICEF"},
    {i: "🏘️", t: "Mi colonia", b: "Cuando falta el agua o se inunda la calle, lo vive primero la colonia.",
     n: "64%", d: "del territorio de México tuvo estrés hídrico en 2025; ahí vive cerca del 70% de la población", s: "NDC 3.0 de México"},
    {i: "🍲", t: "La comida", b: "Lo que comes depende de que llueva a tiempo en el campo.",
     n: "2.8 millones", d: "de hectáreas de cultivo se perdieron por sequía entre 2018 y 2023, sobre todo maíz y frijol", s: "NDC 3.0 de México, con datos del SIAP"},
    {i: "🩺", t: "La salud", b: "El calor y los cambios en las lluvias modifican dónde y cuándo pueden vivir los mosquitos que transmiten el dengue.",
     n: "115 M", d: "de niñas, niños y adolescentes en América Latina están expuestos al dengue", s: "UNICEF"},
    {i: "💰", t: "El dinero y el trabajo", b: "Los desastres y las sequías cuestan: a las familias, a los negocios y al país.",
     n: "25%", d: "del PIB de México de 2024: valor estimado de las pérdidas acumuladas por el clima entre 2024 y 2030", s: "NDC 3.0 de México"},
    {i: "🐾", t: "Los animales", b: "Cuando cambian el calor y el agua, cambian también los lugares donde los animales pueden vivir.",
     n: "", d: "", s: ""},
    {i: "🎓", t: "Mi futuro", b: "El clima ya está entrando a las escuelas.",
     n: "25.5%", d: "de las escuelas de media superior de México no tiene agua potable", s: "SEP, 2023, en UNICEF México y SEMARNAT, 2026"},
    {i: "🤔", t: "Todavía no sé", b: "Está bien no tenerlo claro. Escuchar qué le importa a los demás ya es un buen primer paso.",
     n: "", d: "", s: ""}
  ];

  /* ---------- ¡Adivina! (Módulo 1, lecciones 2, 8 y 11) ---------- */
  var GUESSES = [
    {q: "¿México se calienta más rápido o más lento que el promedio mundial?",
     o: ["Más lento", "Igual", "Más rápido"], a: 2,
     e: "Más rápido. Por eso este no es un tema lejano «de los polos»: está pasando aquí.",
     s: "NDC 3.0 México"},
    {q: "En junio de 2024, ¿qué porcentaje de los municipios de México tenía algún grado de sequía?",
     o: ["Alrededor de 15%", "Alrededor de 45%", "Alrededor de 86%"], a: 2,
     e: "<strong>86%</strong>. La sequía es un fenómeno lento: avanza poco a poco y por eso a veces no la notamos hasta que falta el agua.",
     s: "NDC 3.0 México, p. 92"},
    {q: "¿Qué porcentaje de las emisiones globales produce América Latina y el Caribe?",
     o: ["Entre 6.7% y 10%", "Alrededor de 25%", "Alrededor de 40%"], a: 0,
     e: "Menos de una décima parte: 6.7% de las emisiones de 2019 y 10% de las acumuladas en la historia. Y aun así es una de las regiones más golpeadas por desastres climáticos.",
     s: "OCDE, Environment at a Glance in Latin America and the Caribbean (6.7%, 2019); PNUMA FI (2025), Financiamiento para la transición justa en ALC, p. 4 (10% acumulado)"}
  ];

  /* ---------- ¿Mito o dato? (Módulo 1, lección 12) ---------- */
  var DECK = [
    {t: "El clima siempre ha cambiado, así que el calentamiento actual es natural.", a: 1,
     e: "Es cierto que el clima ha cambiado antes, pero el IPCC concluye que el calentamiento de 1.1 °C desde la era preindustrial se debe a la actividad humana."},
    {t: "Los océanos absorben alrededor del 91% del calor extra que hemos atrapado.", a: 0,
     e: "Según el IPCC, el océano guarda la mayor parte; la atmósfera, apenas cerca de 1%."},
    {t: "Un invierno muy frío demuestra que el calentamiento global se detuvo.", a: 1,
     e: "Un invierno es tiempo, no clima. Usar un dato corto para negar una tendencia de décadas es «escoger datos a modo»."},
    {t: "El agujero en la capa de ozono es lo que calienta al planeta.", a: 1,
     e: "El agujero de ozono deja pasar más radiación ultravioleta. El calentamiento lo causan los gases de efecto invernadero, que atrapan radiación infrarroja."},
    {t: "Alrededor del 97% de especialistas en clima coincide en que el calentamiento actual lo causamos los humanos.", a: 0,
     e: "Es el consenso científico, documentado en varios estudios."}
  ];

  function $(id) { return document.getElementById(id); }

  /* ---------- Recuadros de Slido ---------- */
  if (SLIDO.codigo) {
    document.querySelectorAll("[data-slido]").forEach(function (el) {
      var link = SLIDO.enlace ? " · <a href='" + SLIDO.enlace + "' target='_blank' rel='noopener'>abrir</a>" : "";
      el.innerHTML = "📱 Entra a <b>slido.com</b> con el código <b>#" + SLIDO.codigo + "</b>" + link;
      el.hidden = false;
    });
  }

  /* ---------- El árbol: una pregunta a la vez + temporizador ---------- */
  var ti = 0, tLeft = 120, tInt = null;
  function fmt(s) { return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function stopTimer() { if (tInt) { clearInterval(tInt); tInt = null; } }
  function drawTree() {
    var t = TREE[ti];
    $("treeQ").innerHTML = "<div class='tq-n'>Pregunta " + (ti + 1) + " de 3</div><div class='tq-l'>" + t.label + "</div><div class='tq-q'>" + t.q + "</div>";
    ["tRoots", "tTrunk", "tLeaves"].forEach(function (id) { $(id).classList.remove("on"); });
    $({roots: "tRoots", trunk: "tTrunk", leaves: "tLeaves"}[t.part]).classList.add("on");
    stopTimer(); tLeft = 120; $("tTimer").textContent = fmt(tLeft); $("tTimer").classList.remove("end");
    $("tNext").textContent = ti < TREE.length - 1 ? "Siguiente pregunta →" : "↺ Volver a la primera";
  }
  $("tStart").onclick = function () {
    stopTimer(); tLeft = 120; $("tTimer").classList.remove("end");
    tInt = setInterval(function () {
      tLeft--; $("tTimer").textContent = fmt(Math.max(tLeft, 0));
      if (tLeft <= 0) { stopTimer(); $("tTimer").classList.add("end"); }
    }, 1000);
  };
  $("tNext").onclick = function () { ti = (ti + 1) % TREE.length; drawTree(); };
  drawTree();

  /* ---------- ¿Qué te importa? ---------- */
  $("cares").innerHTML = CARES.map(function (c, i) {
    var dato = c.n ? "<div class='c-n'><b>" + c.n + "</b> " + c.d + "<i>" + c.s + "</i></div>" : "";
    return "<button type='button' class='care' data-i='" + i + "'><span class='c-i'>" + c.i + "</span><span class='c-t'>" + c.t + "</span>" +
      "<span class='c-b'>" + c.b + dato + "</span></button>";
  }).join("");
  document.querySelectorAll(".care").forEach(function (b) {
    b.onclick = function () { b.classList.toggle("open"); };
  });

  /* ---------- Levanta la mano: una frase a la vez ---------- */
  var hands = $("hands").children, hi = 0;
  hands[0].classList.add("on");
  $("handsNext").onclick = function () {
    hi++;
    if (hi < hands.length) hands[hi].classList.add("on");
    if (hi >= hands.length - 1) this.style.display = "none";
  };

  /* ---------- ¡Adivina! ---------- */
  var gWrap = $("guesses");
  GUESSES.forEach(function (g, gi) {
    var box = document.createElement("div");
    box.className = "guess";
    box.innerHTML = "<h3>" + (gi + 1) + ". " + g.q + "</h3><div class='opts'>" +
      g.o.map(function (o, i) { return "<button type='button' data-i='" + i + "'>" + o + "</button>"; }).join("") +
      "</div><button type='button' class='btn btn-ghost btn-sm show'>Ver respuesta</button>" +
      "<div class='reveal'><p>" + g.e + "</p><p class='src'>Fuente: " + g.s + "</p></div>";
    function reveal() {
      box.classList.add("done");
      box.querySelectorAll(".opts button").forEach(function (b, i) { b.classList.add(i === g.a ? "ok" : "no"); });
      box.querySelector(".show").style.display = "none";
    }
    box.querySelectorAll(".opts button").forEach(function (b) { b.onclick = reveal; });
    box.querySelector(".show").onclick = reveal;
    gWrap.appendChild(box);
  });

  /* ---------- ¿Mito o dato? ---------- */
  var di = 0, deck = $("deck");
  function drawCard() {
    var c = DECK[di];
    deck.innerHTML = "<div class='card-m'><div class='count'>Tarjeta " + (di + 1) + " de " + DECK.length + "</div>" +
      "<div class='claim'>«" + c.t + "»</div><div class='vote'>" +
      "<button type='button' class='btn btn-primary' data-v='0'>✅ Dato</button>" +
      "<button type='button' class='btn btn-gold' data-v='1'>❌ Mito</button></div>" +
      "<div class='verdict'><b>" + (c.a === 0 ? "✅ Es un dato" : "❌ Es un mito") + "</b>" + c.e + "</div>" +
      (di < DECK.length - 1 ? "<button type='button' class='btn btn-ghost next'>Siguiente tarjeta →</button>" : "") + "</div>";
    var card = deck.firstChild, nx = card.querySelector(".next");
    if (nx) nx.style.display = "none";
    card.querySelectorAll(".vote button").forEach(function (b) {
      b.onclick = function () { card.classList.add("done"); if (nx) nx.style.display = ""; };
    });
    if (nx) nx.onclick = function () { di++; drawCard(); };
  }
  drawCard();

  /* ---------- Respiración: tres ciclos de 4 s ---------- */
  var bBtn = $("bBtn"), bubble = $("bubble"), bLabel = $("bLabel"), running = false;
  bBtn.onclick = function () {
    if (running) return; running = true; bBtn.disabled = true;
    var n = 0;
    (function cycle() {
      if (n >= 3) { bLabel.textContent = "Bien hecho 💙"; bBtn.disabled = false; running = false; return; }
      n++; bLabel.textContent = "Inhala…"; bubble.classList.add("grow");
      setTimeout(function () {
        bLabel.textContent = "Suelta el aire despacio…"; bubble.classList.remove("grow");
        setTimeout(cycle, 4000);
      }, 4000);
    })();
  };

  /* ---------- Plan de acción: tarjeta descargable ---------- */
  function wrapLines(x, t, max, maxLines) {
    var words = String(t).split(/\s+/), line = "", lines = [];
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (x.measureText(test).width > max && line) { lines.push(line); line = w; } else line = test;
    });
    if (line) lines.push(line);
    if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] = lines[maxLines - 1].replace(/\s*\S*$/, "") + "…"; }
    return lines;
  }
  function draw(x, t, x0, y, max, lh, font, col, maxLines) {
    x.font = font; x.fillStyle = col; x.textAlign = "left";
    var ls = wrapLines(x, t, max, maxLines);
    ls.forEach(function (l, i) { x.fillText(l, x0, y + i * lh); });
    return y + ls.length * lh;
  }
  $("pMake").onclick = function () {
    var v = function (id) { return ($(id).value || "").trim(); };
    var meta = v("pMeta"), ayuda = v("pAyuda"), paso = v("pPaso"), quien = v("pQuien"), cuando = v("pCuando"), nombre = v("pNombre");
    if (!meta && !paso) { $("pHint").textContent = "Escribe por lo menos qué quieres lograr o tu primer paso."; return; }
    $("pHint").textContent = "";
    var cv = $("pCanvas"), x = cv.getContext("2d"), W = 1080, H = 1350;
    cv.hidden = false;
    x.fillStyle = "#125d55"; x.fillRect(0, 0, W, H);
    x.fillStyle = "#0c463f"; x.beginPath(); x.arc(W - 70, 70, 330, 0, Math.PI * 2); x.fill();
    var y = 150;
    x.font = "600 26px Poppins, sans-serif"; x.fillStyle = "#cfad30"; x.textAlign = "left";
    x.fillText("LO QUE SIEMBRO HOY", 80, y);
    if (nombre) y = draw(x, nombre + " quiere lograr:", 80, y + 56, 820, 40, "400 32px Poppins, sans-serif", "#e3eeec", 1) - 4;
    y = draw(x, meta || paso, 80, y + 72, 820, 64, "700 54px Caudex, serif", "#ffffff", 4);
    function field(lbl, val) {
      if (!val) return;
      x.font = "600 24px Poppins, sans-serif"; x.fillStyle = "#cfad30"; x.fillText(lbl, 80, y + 52);
      y = draw(x, val, 80, y + 96, 620, 42, "400 32px Poppins, sans-serif", "#ffffff", 2);
    }
    field("CÓMO AYUDA A MI COMUNIDAD O AL PLANETA", ayuda);
    field("MI PRIMER PASO", meta ? paso : "");
    field("CON QUIÉN", quien);
    field("CUÁNDO EMPIEZO", cuando);
    var img = new Image();
    img.onload = function () { var s = 300, hh = img.height * s / img.width; x.drawImage(img, W - s - 50, H - hh - 100, s, hh); end(); };
    img.onerror = end;
    img.src = "img/pose-nutria-feliz.png";
    function end() {
      x.font = "400 26px Poppins, sans-serif"; x.fillStyle = "#cfe0dc"; x.textAlign = "left";
      x.fillText("Firmado con Lontra · Saber, entender, actuar.", 80, H - 56);
      x.textAlign = "right"; x.font = "600 26px Poppins, sans-serif"; x.fillStyle = "#ffffff";
      x.fillText("@x.latierra", W - 60, H - 56);
      var url; try { url = cv.toDataURL("image/png"); } catch (e) { url = null; }
      $("pDl").innerHTML = "<div class='dl'>" + (url ? "<a class='btn btn-primary' download='Lo_que_siembro_hoy_Xlatierra.png' href='" + url + "'>Descargar mi tarjeta</a>" : "") +
        "</div><p class='muted small center'>Guárdala de fondo de pantalla o súbela a tus historias y etiqueta a @x.latierra.</p>";
      cv.scrollIntoView({behavior: "smooth", block: "center"});
    }
  };

  /* ---------- Modo presentación: pantalla completa + flechas ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  function current() {
    var mid = window.innerHeight / 3, idx = 0;
    slides.forEach(function (s, i) { if (s.getBoundingClientRect().top <= mid) idx = i; });
    return idx;
  }
  function go(i) { i = Math.max(0, Math.min(slides.length - 1, i)); slides[i].scrollIntoView({behavior: "smooth"}); }
  function updateProgress() { $("progress").textContent = (current() + 1) + " / " + slides.length; }
  window.addEventListener("scroll", updateProgress, {passive: true});
  updateProgress();
  $("presentBtn").onclick = function () {
    var on = document.body.classList.toggle("present");
    document.documentElement.classList.toggle("snap", on);
    this.textContent = on ? "✕ Salir" : "▶ Presentar";
    try {
      if (on && document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
      if (!on && document.fullscreenElement) document.exitFullscreen();
    } catch (e) {}
    setTimeout(function () { go(current()); }, 300);
  };
  document.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "iframe") return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); go(current() + 1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp" || e.key === "PageUp") { e.preventDefault(); go(current() - 1); }
  });
})();
