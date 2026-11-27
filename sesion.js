/* =====================================================================
   XLATIERRA · SESIÓN ESPECIAL «Lo que siembras hoy crece»
   Los textos de ¡Adivina! y ¿Mito o dato? vienen tal cual del Módulo 1
   publicado (contenido.js). Para cambiarlos, edita solo lo que está
   entre comillas.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- ENCUESTA FINAL ----------
     Cuando el QR de la encuesta esté en img/qr-encuesta.svg, cambia esto a true. */
  var ENCUESTA_LISTA = true;

  /* ---------- EL ÁRBOL: las tres preguntas, en orden ---------- */
  var TREE = [
    {part: "roots", label: "🌱 Raíz · Lo que me sostiene", q: "¿Qué o quién te impulsa a seguir estudiando?"},
    {part: "trunk", label: "🪵 Tronco · Mi superpoder", q: "¿Qué sabes hacer bien? Cocinar, escuchar, organizar, arreglar cosas, hacer reír…"},
    {part: "leaves", label: "🍃 Hoja · Lo que quiero sembrar", q: "¿Qué quieres sembrar con lo que estudias?"}
  ];

  /* ---------- ¡Adivina! (Módulo 1, lecciones 2, 8 y 13) ---------- */
  var GUESSES = [
    {q: "¿México se calienta más rápido o más lento que el promedio mundial?",
     o: ["Más lento", "Igual", "Más rápido"], a: 2,
     e: "Más rápido. Por eso este no es un tema lejano «de los polos»: está pasando aquí.",
     s: "NDC 3.0 México"},
    {q: "En junio de 2024, ¿qué porcentaje de los municipios de México tenía algún grado de sequía?",
     o: ["Alrededor de 15%", "Alrededor de 45%", "Alrededor de 86%"], a: 2,
     e: "<strong>86%</strong>. La sequía es un fenómeno lento: avanza poco a poco y por eso a veces no la notamos hasta que falta el agua.",
     s: "NDC 3.0 México, p. 92"},
    {q: "¿Qué significa el famoso límite de «1.5 °C»?",
     o: ["La temperatura de un día caluroso", "El aumento del promedio global de temperatura respecto a 1850–1900", "La temperatura máxima permitida en México"], a: 1,
     e: "Es el aumento del promedio del planeta respecto a la época preindustrial. Como ya vamos en 1.1 °C, el margen que queda es de unos 0.4 °C. Limitarlo a 1.5 °C en lugar de 2 °C reduce la proporción de personas expuestas a olas de calor extremo de 37% a 14%.",
     s: "Módulo 1, lección 13 (IPCC)"}
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

  /* ---------- ¿Tiempo o clima? (Módulo 1, lección 2) ---------- */
  var SORT_CLIMA = {labels: ["🌦️ Tiempo", "📊 Clima"],
    done: "Truco para no confundirte: si la frase habla de hoy, ayer, mañana o «este» invierno, es tiempo. Si habla de lo que «suele» pasar o de tendencias de muchos años, es clima.",
    items: [
      {n: "«Mañana va a llover en Monterrey.»", a: 0, e: "Es un pronóstico de un día: tiempo."},
      {n: "«En la Ciudad de México, la temporada de lluvias suele ir de mayo a octubre.»", a: 1, e: "Describe lo que pasa normalmente año con año: clima."},
      {n: "«Este invierno fue muy frío en Chihuahua.»", a: 0, e: "Una sola temporada es tiempo. Por eso un invierno frío no desmiente el calentamiento."},
      {n: "«La temperatura promedio de México ha aumentado desde inicios del siglo XX.»", a: 1, e: "Es una tendencia de más de un siglo: clima."},
      {n: "«Hoy hay una ola de calor en Hermosillo.»", a: 0, e: "Es lo que pasa hoy: tiempo. (Que las olas de calor sean más frecuentes con los años sí sería clima.)"},
      {n: "«Los veranos en Mérida suelen ser calurosos y húmedos.»", a: 1, e: "«Suelen» es la palabra clave: lo típico es clima."}
    ]};

  /* ---------- ¿Mitigar o adaptarnos? (Módulo 1, lección 14) ---------- */
  var SORT_MITIGA = {labels: ["🔻 Mitigación", "🛡️ Adaptación"],
    done: "Necesitamos las dos: mitigar para que el problema no crezca y adaptarnos a lo que ya está pasando. Algunas soluciones, como los manglares, hacen las dos cosas.",
    items: [
      {n: "☀️ Instalar paneles solares en una escuela", a: 0, e: "Produce electricidad sin quemar combustibles fósiles: reduce emisiones."},
      {n: "🌊 Un plan escolar ante inundaciones", a: 1, e: "Prepara a la comunidad para un impacto: adaptación."},
      {n: "🌿 Proteger y restaurar manglares", a: 0, e: "Guardan mucho carbono (carbono azul), así que es mitigación. ¡Y además protegen la costa de tormentas, que es adaptación! Hace las dos cosas."},
      {n: "📢 Sistemas de alerta ante olas de calor", a: 1, e: "Avisan a tiempo para protegernos de un impacto: adaptación."},
      {n: "♻️ Economía circular: reparar, reusar y reciclar materiales", a: 0, e: "Fabricar menos materiales nuevos evita emisiones."},
      {n: "🚰 Cuidar y manejar mejor el agua ante sequías", a: 1, e: "Nos prepara para tener agua aunque llueva menos: adaptación."}
    ]};

  /* ---------- La cobija del planeta (Módulo 1, lección 3) ---------- */
  var GH = [
    {short: "Sin gases", name: "Sin cobija", temp: "−18 °C", band: 0, back: 0, out: 3, text: "Sin efecto invernadero, casi todo el calor se escaparía al espacio. La Tierra sería un planeta helado de unos −18 °C en promedio."},
    {short: "Natural", name: "La cobija natural", temp: "≈ 15 °C", band: 18, back: 1, out: 2, text: "El efecto invernadero natural mantiene la Tierra unos 33 °C más caliente que sin él. Gracias a esta cobija existe la vida como la conocemos."},
    {short: "Hoy", name: "Hoy: una cobija más gruesa", temp: "+1.1 °C", band: 34, back: 2, out: 2, text: "Desde el siglo XIX hemos agregado gases. Entra la misma energía del Sol, pero sale menos: el planeta ya está 1.1 °C más caliente que en la época preindustrial."},
    {short: "Más gases", name: "Si seguimos emitiendo", temp: "sube…", band: 52, back: 3, out: 1, text: "Cada tonelada de CO₂ engrosa la cobija y se queda ahí durante siglos. Mientras sigamos sumando emisiones, la temperatura seguirá subiendo. Por eso hay que llegar a cero emisiones netas."}
  ];

  /* ---------- ¿De dónde salen las emisiones? (Módulo 1, lección 6) ---------- */
  var SECTOR = {q: "A nivel mundial, ¿qué sector produce más gases de efecto invernadero?",
    o: ["Agricultura", "Energía", "Basura y residuos", "Procesos industriales"], a: 1,
    e: "La energía. Incluye producir electricidad y calor, el transporte, la energía que usan fábricas y edificios, y las fugas de gas y petróleo." +
       "<table class='cmp mini'><thead><tr><th>Sector</th><th>Qué incluye</th><th>Parte de las emisiones globales (2019)</th></tr></thead><tbody>" +
       "<tr><td>Energía</td><td>Electricidad, calor, transporte, edificios, industria que quema combustibles, fugas</td><td>~76%</td></tr>" +
       "<tr><td>Agricultura y uso del suelo</td><td>Ganado, fertilizantes, arrozales, deforestación</td><td>~12%</td></tr>" +
       "<tr><td>Procesos industriales</td><td>Reacciones químicas al fabricar cemento, químicos y otros materiales</td><td>~6%</td></tr>" +
       "<tr><td>Residuos</td><td>Basureros y aguas residuales (sobre todo metano)</td><td>~3%</td></tr></tbody></table>",
    s: "Climate Watch / WRI (2019), en el Módulo 1, lección 6"};

  function $(id) { return document.getElementById(id); }
  function safe(fn) { try { fn(); } catch (e) { if (window.console) console.error("Xlatierra:", e); } }

  /* ---------- El árbol: una pregunta a la vez + temporizador ---------- */
  var ti = 0, TSEC = 90, tLeft = TSEC, tInt = null;
  function fmt(s) { return Math.floor(s / 60) + ":" + ("0" + (s % 60)).slice(-2); }
  function stopTimer() { if (tInt) { clearInterval(tInt); tInt = null; } }
  function drawTree() {
    var t = TREE[ti];
    $("treeQ").innerHTML = "<div class='tq-n'>Pregunta " + (ti + 1) + " de 3</div><div class='tq-l'>" + t.label + "</div><div class='tq-q'>" + t.q + "</div>";
    ["tRoots", "tTrunk", "tLeaves"].forEach(function (id) { $(id).classList.remove("on"); });
    $({roots: "tRoots", trunk: "tTrunk", leaves: "tLeaves"}[t.part]).classList.add("on");
    stopTimer(); tLeft = TSEC; $("tTimer").textContent = fmt(tLeft); $("tTimer").classList.remove("end");
    $("tNext").textContent = ti < TREE.length - 1 ? "Siguiente pregunta →" : "↺ Volver a la primera";
  }
  $("tStart").onclick = function () {
    stopTimer(); tLeft = TSEC; $("tTimer").classList.remove("end");
    tInt = setInterval(function () {
      tLeft--; $("tTimer").textContent = fmt(Math.max(tLeft, 0));
      if (tLeft <= 0) { stopTimer(); $("tTimer").classList.add("end"); }
    }, 1000);
  };
  $("tNext").onclick = function () { ti = (ti + 1) % TREE.length; drawTree(); };
  safe(drawTree);

  safe(function () { if (ENCUESTA_LISTA) $("qrForm").hidden = false; });

  /* ---------- Levanta la mano: una frase a la vez ---------- */
  var hands = $("hands").children, hi = 0;
  hands[0].classList.add("on");
  $("handsNext").onclick = function () {
    hi++;
    if (hi < hands.length) hands[hi].classList.add("on");
    if (hi >= hands.length - 1) this.style.display = "none";
  };

  /* ---------- ¡Adivina! (y la pregunta de sectores) ---------- */
  function makeGuess(g, num, wrap) {
    var box = document.createElement("div");
    box.className = "guess";
    box.innerHTML = "<h3>" + (num ? num + ". " : "") + g.q + "</h3><div class='opts'>" +
      g.o.map(function (o, i) { return "<button type='button' data-i='" + i + "'>" + o + "</button>"; }).join("") +
      "</div><button type='button' class='btn btn-ghost btn-sm show'>Ver respuesta</button>" +
      "<div class='reveal'><div class='expl'>" + g.e + "</div><p class='src'>Fuente: " + g.s + "</p></div>";
    function reveal() {
      box.classList.add("done");
      box.querySelectorAll(".opts button").forEach(function (b, i) { b.classList.add(i === g.a ? "ok" : "no"); });
      box.querySelector(".show").style.display = "none";
    }
    box.querySelectorAll(".opts button").forEach(function (b) { b.onclick = reveal; });
    box.querySelector(".show").onclick = reveal;
    wrap.appendChild(box);
  }

  /* ---------- Juegos de clasificar: una frase a la vez, con explicación ---------- */
  function makeSorter(cfg, wrap) {
    var k = 0;
    function draw() {
      if (k >= cfg.items.length) {
        wrap.innerHTML = "<div class='card-m'><div class='claim small-c'>¡Listo!</div><p>" + cfg.done + "</p>" +
          "<button type='button' class='btn btn-ghost btn-sm again'>↺ Empezar de nuevo</button></div>";
        wrap.querySelector(".again").onclick = function () { k = 0; draw(); };
        return;
      }
      var it = cfg.items[k];
      wrap.innerHTML = "<div class='card-m'><div class='count'>" + (k + 1) + " de " + cfg.items.length + "</div>" +
        "<div class='claim'>" + it.n + "</div><div class='vote'>" +
        "<button type='button' class='btn btn-primary' data-v='0'>" + cfg.labels[0] + "</button>" +
        "<button type='button' class='btn btn-gold' data-v='1'>" + cfg.labels[1] + "</button></div>" +
        "<div class='verdict'><b>" + cfg.labels[it.a] + "</b>" + it.e + "</div>" +
        "<button type='button' class='btn btn-ghost next'>Siguiente →</button></div>";
      var card = wrap.firstChild, nx = card.querySelector(".next");
      nx.style.display = "none";
      card.querySelectorAll(".vote button").forEach(function (b) {
        b.onclick = function () { card.classList.add("done"); nx.style.display = ""; };
      });
      nx.onclick = function () { k++; draw(); };
    }
    draw();
  }
  safe(function () { makeSorter(SORT_CLIMA, $("sortClima")); });
  safe(function () { makeSorter(SORT_MITIGA, $("sortMitiga")); });

  /* ---------- La cobija del planeta ---------- */
  var NS = "http://www.w3.org/2000/svg";
  function line(g, x1, y1, x2, y2) {
    var l = document.createElementNS(NS, "line");
    l.setAttribute("x1", x1); l.setAttribute("y1", y1); l.setAttribute("x2", x2); l.setAttribute("y2", y2);
    g.appendChild(l);
  }
  function drawGH(i) {
    var L = GH[i], band = $("ghBand"), out = $("ghOut"), back = $("ghBack");
    band.setAttribute("height", L.band); band.setAttribute("y", 106 - L.band / 2);
    band.style.opacity = L.band ? 0.85 : 0;
    out.innerHTML = ""; back.innerHTML = "";
    for (var o = 0; o < L.out; o++) line(out, 360 + o * 70, 205, 400 + o * 70, 20);
    for (var b = 0; b < L.back; b++) line(back, 240 + b * 70, 110, 260 + b * 70, 200);
    $("ghText").innerHTML = "<b>" + L.name + " · " + L.temp + "</b>" + L.text;
    document.querySelectorAll("#ghCtrl button").forEach(function (bt, j) { bt.classList.toggle("on", j === i); });
  }
  $("ghCtrl").innerHTML = GH.map(function (L, i) { return "<button type='button' data-i='" + i + "'>" + L.short + "</button>"; }).join("");
  document.querySelectorAll("#ghCtrl button").forEach(function (bt) { bt.onclick = function () { drawGH(+bt.dataset.i); }; });
  safe(function () { drawGH(1); });

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
  safe(drawCard);

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
      if (url) { cv.hidden = true; }
      $("pDl").innerHTML = (url ? "<img class='card-img' alt='Tu tarjeta Lo que siembro hoy' src='" + url + "'>" : "") +
        "<div class='dl'>" + (url ? "<a class='btn btn-primary' download='Lo_que_siembro_hoy_Xlatierra.png' href='" + url + "'>Descargar mi tarjeta</a>" : "") +
        "</div><p class='muted small center'>¿No se descarga? Mantén presionada la imagen y elige «Guardar imagen». Úsala de fondo de pantalla o súbela a tus historias y etiqueta a @x.latierra.</p>";
      $("pDl").scrollIntoView({behavior: "smooth", block: "center"});
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
