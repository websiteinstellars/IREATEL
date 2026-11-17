(function () {
  var D = window.DATA, C = window.COPY;
  var BVW = { Engage: 100, Nurture: 90, Retain: 85, Acquire: 70 };
  var P = {
    "M": { x: "M0 0" }
  };
  var ICONS = {
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    sim: '<path d="M8 2h6l4 4v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/><rect x="9" y="11" width="6" height="6" rx="1"/>',
    wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0"/><circle cx="12" cy="19.5" r=".6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    router: '<rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 17h.01M11 17h.01M8 10a6 6 0 0 1 8 0M10.5 7a3 3 0 0 1 3 0"/>',
    gift: '<rect x="3" y="8" width="18" height="4"/><path d="M12 8v13M19 12v9H5v-9M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    tag: '<path d="M20 12l-8 8-9-9V3h8z"/><circle cx="7.5" cy="7.5" r="1"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    bolt: '<path d="M13 2L3 14h9l-1 8 10-12h-9z"/>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/>',
    star: '<path d="M12 2l3 7 7 .6-5.3 4.7 1.6 7.2L12 17.8 5.7 21.5l1.6-7.2L2 9.6 9 9z"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/>',
    building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/>',
    heart: '<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
    film: '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 8h5M2 12h5M2 16h5M17 8h5M17 12h5M17 16h5"/>',
    cart: '<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M1 2h4l2.7 13.4a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L22 7H6"/>',
    plane: '<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
    utensils: '<path d="M5 2v8a2 2 0 0 0 2 2v10M9 2v8M7 2v8M17 2c-2 2-3 5-3 8h3v12"/>',
    cake: '<path d="M4 20h16v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zM4 16c2 1.5 4 1.5 6 0s4-1.5 6 0 3 1 4 0M12 10V6M12 3v1"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M10 21a2 2 0 0 0 4 0"/>',
    lock: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    chart: '<path d="M3 3v18h18M7 15l4-4 3 3 5-6"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2 21a7 7 0 0 1 14 0M17 4.5a3.5 3.5 0 0 1 0 7M22 21a7 7 0 0 0-4-6.3"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M3 21v-5h5M21 3v5h-5"/>',
    ticket: '<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M13 7v10" stroke-dasharray="2 2"/>',
    wallet: '<path d="M3 7a2 2 0 0 1 2-2h14v4"/><rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="16.5" cy="13.5" r="1"/>',
    tools: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.5 2.5-2.2-.5-.5-2.2z"/>',
    alert: '<path d="M12 3L2 21h20z"/><path d="M12 10v5M12 18h.01"/>',
    signal: '<path d="M7 20v-4M12 20V10M17 20V4M22 20V8M2 20h.01"/>',
    doc: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M8 13h8M8 17h8"/>',
    percent: '<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>',
    lifebuoy: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.9 4.9l4.3 4.3M14.8 14.8l4.3 4.3M19.1 4.9l-4.3 4.3M9.2 14.8l-4.3 4.3"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    home: '<path d="M3 11l9-8 9 8v10H3z"/><path d="M9 21v-7h6v7"/>'
  };
  function ico(n) { return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[n] || ICONS.star) + "</svg>"; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function slug(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  var JN = {}, JI = {};
  D.journeys.forEach(function (j, i) { JN[j.id] = j.name; JI[j.id] = i + 1; });
  var JPAGE = { "onboarding-mobile": "plans", prepaid: "plans", device: "devices", deals: "deals", usage: "deals", loyalty: "rewards", retention: "rewards", "digital-deepening": "digital", "digital-support": "support", resilience: "support", proactive: "support", fraud: "security", "onboarding-sme": "business" };
  var byName = {}; D.actions.forEach(function (a) { byName[a.name] = a; });

  var NAV = [["plans", "Plans & Broadband"], ["devices", "Devices"], ["deals", "Deals & Perks"], ["rewards", "Rewards"], ["digital", "Digital"], ["support", "Support"], ["security", "Security"], ["business", "Business"]];

  var PAGES = {
    plans: { t: "Plans & Broadband", s: "Mobile, home internet, roaming and prepaid, all on one network.", i: "phone", bg: "linear-gradient(115deg,#0e1430 10%,#3b2ea6 100%)", secs: [
      { t: "Mobile plans", s: "Pick the plan that fits how you use your phone.", v: "plan", f: function (a) { return a.journey === "onboarding-mobile" && a.group === "Mobile Plan"; } },
      { t: "Home broadband", s: "Fibre or 5G, whichever suits your home.", v: "plan", f: function (a) { return a.journey === "onboarding-mobile" && a.group === "Broadband Plan"; } },
      { t: "Roaming, add-ons & switching offers", s: "Travel, top up your data or move your number over.", f: function (a) { return a.journey === "onboarding-mobile" && (a.group === "Add-On" || a.group === "Promotions"); } },
      { t: "Prepaid", s: "Load, promos and top-ups for prepaid customers.", alt: 1, f: function (a) { return a.journey === "prepaid"; } }
    ] },
    devices: { t: "Devices & Accessories", s: "The latest phones, trade-in offers and accessories chosen for you.", i: "phone", bg: "linear-gradient(115deg,#0e1430 10%,#0b8a7f 100%)", secs: [
      { t: "Phones, trade-in & accessories", s: "Add a device to your plan and save.", f: function (a) { return a.journey === "device"; } }
    ] },
    deals: { t: "Deals & Perks", s: "Partner discounts, celebrations and extras that come with being a subscriber.", i: "tag", bg: "linear-gradient(115deg,#1e2761 10%,#c42a3a 100%)", secs: [
      { t: "Partner deals", s: "Shopping, dining, fuel, gift cards and more.", f: function (a) { return a.journey === "deals" && a.group === "Deals & Discounts"; } },
      { t: "Celebrations & feedback", s: "Birthdays, anniversaries and a chance to tell us how we are doing.", alt: 1, f: function (a) { return a.journey === "deals" && a.group === "Celebrate"; } },
      { t: "Value perks", s: "Get more out of the plan you already have.", f: function (a) { return a.journey === "usage"; } }
    ] },
    rewards: { t: "Rewards & Loyalty", s: "Because staying with us should pay off.", i: "trophy", bg: "linear-gradient(115deg,#0e1430 10%,#a56d00 100%)", secs: [
      { t: "Loyalty rewards", s: "Thank-yous for subscribers who stay.", f: function (a) { return a.journey === "loyalty"; } },
      { t: "Stay with Instellars", s: "Offers for when you are thinking about moving on.", alt: 1, f: function (a) { return a.journey === "retention" && a.group === "Churn"; } },
      { t: "Welcome back", s: "If you have left, we would love to have you back.", f: function (a) { return a.journey === "retention" && a.group === "Win-Back"; } }
    ] },
    digital: { t: "Upgrade & Go Digital", s: "Get more from your plan and manage everything in the app.", i: "bolt", bg: "linear-gradient(115deg,#1e2761 10%,#2b57c4 100%)", secs: [
      { t: "Upgrade your plan", s: "More data, more lines and better prices.", f: function (a) { return a.journey === "digital-deepening" && a.group === "Upgrade"; } },
      { t: "Go digital", s: "eSIM, Wi-Fi Calling and other ways to do more in the app.", alt: 1, f: function (a) { return a.journey === "digital-deepening" && a.group === "Digital Adoption"; } }
    ] },
    support: { t: "Help & Support", s: "Billing, payments and technical help, when you need it.", i: "headset", bg: "linear-gradient(115deg,#0e1430 10%,#34408a 100%)", secs: [
      { t: "Billing & payments", s: "Pay on time, save money and avoid bill shock.", f: function (a) { return a.journey === "digital-support" && a.group === "Payment Support"; } },
      { t: "Network & technical help", s: "Fix problems fast, and get something back when we get it wrong.", alt: 1, f: function (a) { return a.journey === "digital-support" && a.group === "Technical Support"; } },
      { t: "Here for you", s: "Support for tough times, and proactive care that reaches you first.", f: function (a) { return a.journey === "resilience" || a.journey === "proactive"; } }
    ] },
    security: { t: "Security & Scam Awareness", s: "Know the signs of fraud, check your account and keep your number safe.", i: "shield", bg: "linear-gradient(115deg,#0a0f26 10%,#1e2761 55%,#0b8a7f 100%)", secs: [
      { t: "Protect your account", s: "Alerts, checks and settings that keep scammers out.", f: function (a) { return a.journey === "fraud"; } }
    ] },
    business: { t: "Instellars Business", s: "5G plans, data and connectivity for SMEs and growing teams.", i: "building", bg: "linear-gradient(115deg,#0e1430 10%,#5b3fd1 100%)", secs: [
      { t: "Business plans & add-ons", s: "Equip your team with the right plans.", v: "plan", f: function (a) { return a.journey === "onboarding-sme"; } }
    ] }
  };

  function cdhStrip(a) {
    return '<div class="cdh"><b>CDH journey view</b>Journey ' + String(JI[a.journey]).padStart(2, "0") + " · " + esc(JN[a.journey]) +
      '<div class="row"><span class="pill ' + a.pillar + '">' + a.pillar + '</span><span class="pill ' + (a.phase === "MVP" ? "mvp" : "") + '">' + a.phase + '</span><span class="pill">' + esc(a.channel) + '</span><span class="pill">' + esc(a.group) + "</span></div></div>";
  }
  var seen = {};
  function card(a, forcePlan) {
    var c = C[a.name]; if (!c) return "";
    var soon = a.phase !== "MVP" || a.tbc;
    var idx = Math.abs(slug(a.name).split("").reduce(function (h, ch) { return (h * 31 + ch.charCodeAt(0)) | 0; }, 7)) % 6;
    var plan = c[3] && forcePlan !== false;
    var anchor = "";
    if (!seen[a.journey]) { seen[a.journey] = 1; anchor = '<i class="anchor" id="j-' + a.journey + '"></i>'; }
    var h = '<article class="card' + (plan ? " plan" : "") + (soon ? " soon" : "") + '" id="a-' + slug(a.name) + '">' + anchor +
      '<div class="art g' + idx + '">' + (soon ? '<span class="ribbon">' + (a.tbc ? "Details soon" : "Coming soon") + "</span>" : "") + ico(c[2]) + "</div>" +
      '<div class="cbody"><span class="cat">' + esc(a.group) + "</span><h3>" + esc(a.name.replace(" (TBC)", "")) + "</h3>";
    if (plan) h += '<div class="price"><i>from</i><b>' + c[3] + "</b><small>" + c[4] + '</small></div><ul class="feat">' + c[5].map(function (f) { return "<li>" + ico("check") + f + "</li>"; }).join("") + "</ul>";
    else h += "<p>" + esc(c[0]) + "</p>";
    if (plan) h += "<p>" + esc(c[0]) + "</p>";
    h += '<button class="btn sm' + (soon ? " soon" : "") + '"' + (soon ? " disabled" : "") + ">" + esc(soon ? (a.tbc ? "Coming soon" : "Notify me") : c[1]) + "</button></div>" + cdhStrip(a) + "</article>";
    return h;
  }
  function sortLive(l) { return l.slice().sort(function (x, y) { return (x.phase === "MVP" ? 0 : 1) - (y.phase === "MVP" ? 0 : 1); }); }

  function hero(pg, key) {
    return '<div class="phero" style="background:' + pg.bg + '"><div class="wrap"><div><div class="crumbs"><a href="index.html">Home</a> / ' + esc(pg.t) + '</div><span class="kick" style="display:block;margin-top:16px">Instellars Telco</span><h1>' + esc(pg.t) + "</h1><p>" + esc(pg.s) + '</p></div><div class="bigico" style="font-size:150px;display:flex">' + ico(pg.i).replace('class="ico"', 'class="ico" style="width:150px;height:150px"') + "</div></div></div>";
  }
  function categoryPage(key) {
    var pg = PAGES[key]; seen = {};
    var out = hero(pg, key);
    pg.secs.forEach(function (s) {
      var l = sortLive(D.actions.filter(s.f));
      out += '<section class="sec' + (s.alt ? " alt" : "") + '"><div class="wrap"><div class="sec-head"><div><h2>' + esc(s.t) + "</h2><p>" + esc(s.s) + '</p></div></div><div class="grid' + (s.v === "plan" ? " p" : "") + '">' + l.map(function (a) { return card(a); }).join("") + "</div></div></section>";
    });
    return out;
  }

  /* ---- live Pega decisions (real call, no backend) ---- */
  var PEGA_URL = "https://instellars04.pegalabs.io/prweb/api/PegaMKTContainer/v4/container";
  function normName(s) { return String(s).toLowerCase().replace(/[^a-z0-9]/g, ""); }
  var byNorm = {}; D.actions.forEach(function (a) { byNorm[normName(a.name)] = a; });
  function pegaDecision(sid) {
    return fetch(PEGA_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ SubjectID: sid, ContainerName: "NextBestAction", Channel: "Web", Direction: "Inbound", AppID: "IREATEL" }) })
      .then(function (r) { if (!r.ok) throw new Error("Pega answered HTTP " + r.status); return r.json(); })
      .then(function (j) {
        if (j.Status !== "OK") throw new Error(j.Message || "Pega returned status " + j.Status);
        var res = ((j.ContainerList && j.ContainerList[0] && j.ContainerList[0].RankedResults) || []).slice().sort(function (x, y) { return x.Rank - y.Rank; });
        var items = [], other = [];
        res.forEach(function (x) { var a = byNorm[normName(x.Label)]; if (a) items.push({ a: a, rank: x.Rank, p: x.Propensity, raw: x }); else other.push(String(x.Label).replace(/​/g, "").trim()); });
        return { sid: sid, items: items, other: other, total: res.length };
      });
  }

  /* ---- home ---- */
  var SLIDES = [
    { n: "Postpaid Mobile Plan", k: "Mobile", h: "Unlimited 5G, your way", cta: "Choose a plan", link: "plans.html#a-postpaid-mobile-plan", ic: "phone" },
    { n: "Flagship Device Discount", k: "Devices", h: "The latest flagship, for less", cta: "See the offer", link: "devices.html#a-flagship-device-discount", ic: "tag" },
    { n: "Home 5G Plan", k: "Home internet", h: "Fast Wi-Fi without a fixed line", cta: "Check coverage", link: "plans.html#a-home-5g-plan", ic: "router" }
  ];
  function home() {
    seen = {};
    function row(names, plan) { return names.map(function (n) { return card(byName[n], plan); }).join(""); }
    var out = '<div class="carousel" id="car">' + SLIDES.map(function (s, i) {
      var a = byName[s.n], c = C[s.n];
      return '<div class="slide s' + i + (i ? "" : " on") + '"><div class="wrap"><div><span class="kick">' + s.k + "</span><h1>" + s.h + "</h1><p>" + esc(c[0]) + '</p><div class="btns"><a class="btn" href="' + s.link + '">' + s.cta + '</a><a class="btn ghost" href="plans.html">Explore plans</a></div>' +
        cdhStrip(a) + '</div><div class="hero-art"><div class="orb">' + ico(s.ic) + "</div></div></div></div>";
    }).join("") + '<div class="dots">' + SLIDES.map(function (s, i) { return '<button aria-label="Slide ' + (i + 1) + '"' + (i ? "" : ' class="on"') + "></button>"; }).join("") + "</div></div>";
    out += '<div class="wrap"><div class="tiles">' + [["plans", "Plans", "phone"], ["devices", "Devices", "tag"], ["deals", "Deals & Perks", "gift"], ["rewards", "Rewards", "trophy"], ["support", "Support", "headset"], ["security", "Security", "shield"]].map(function (t) { return '<a class="tile" href="' + t[0] + '.html">' + ico(t[2]) + t[1] + "</a>"; }).join("") + "</div></div>";
    out += '<section class="sec"><div class="wrap"><div class="nba" id="nba"><div><span class="kick">Picked for you</span><h2>The right offer, at the right moment</h2><p>Pick a customer to see the offers the Pega NextBestAction container returns for them, in real time.</p><div class="persona" id="persona"></div><small>Live call to Pega (NextBestAction, Web, Inbound). Customer IDs S1 to S6 are the sample customers of this site.</small></div><div class="ranked" id="ranked" aria-live="polite"></div></div></div></section>';
    out += '<section class="sec alt"><div class="wrap"><div class="sec-head"><div><h2>Plans for every way you connect</h2><p>Mobile and home internet, all on one network.</p></div><a class="more" href="plans.html">See all plans →</a></div><div class="grid p">' + row(["Postpaid Mobile Plan", "Prepaid Bundle Plan", "Fiber Plan"]) + "</div></div></section>";
    out += '<section class="sec"><div class="wrap"><div class="sec-head"><div><h2>Phones, accessories & trade-in</h2><p>Add a device to your plan and save.</p></div><a class="more" href="devices.html">See all devices →</a></div><div class="grid">' + row(["Flagship Device Discount", "Accessory Bundle Recommendation", "Device Trade in Offers", "Add a line Device Discount"]) + "</div></div></section>";
    out += '<section class="sec alt"><div class="wrap"><div class="sec-head"><div><h2>Deals & perks</h2><p>Everyday savings for Instellars subscribers.</p></div><a class="more" href="deals.html">See all deals →</a></div><div class="grid">' + row(["Ecommerce Discounts", "Dining and Fuel Discounts", "Discounts on Adidas Products", "Gift cards and Vouchers"]) + "</div></div></section>";
    function banner(n, bg, ic, h, cta, link) { var c = C[n], a = byName[n]; return '<div class="banner" style="background:' + bg + '">' + ico(ic) + "<h3>" + h + "</h3><p>" + esc(c[0]) + '</p><a class="btn" href="' + link + '">' + cta + "</a>" + cdhStrip(a) + "</div>"; }
    out += '<section class="sec"><div class="wrap"><div class="banners">' +
      banner("Long-Tenure Thank-You", "linear-gradient(135deg,#a56d00,#e0a800)", "heart", "Rewards for staying", "See my thank-you", "rewards.html#a-long-tenure-thank-you") +
      banner("Stealth Call Forwarding Hijacking", "linear-gradient(135deg,#0e1430,#0b8a7f)", "shield", "Stay safe from scams", "Check my number", "security.html#a-stealth-call-forwarding-hijacking") +
      banner("Enterprise 5G Sim Only Plan", "linear-gradient(135deg,#1e2761,#5b3fd1)", "building", "Built for business", "Talk to sales", "business.html#a-enterprise-5g-sim-only-plan") + "</div></div></section>";
    out += '<section class="sec alt"><div class="wrap"><div class="sec-head"><div><h2>Help with billing & your phone</h2><p>Set it up once and stay in control.</p></div><a class="more" href="support.html">Visit support →</a></div><div class="grid">' + row(["Auto Pay Discount", "Bill Pay Reminder & Setup", "Wi-Fi Calling Activation", "eSIM migration Nudge"]) + "</div></div></section>";
    return out;
  }
  function initHome() {
    var car = document.getElementById("car"); if (car) {
      var sl = car.querySelectorAll(".slide"), dt = car.querySelectorAll(".dots button"), cur = 0, tm;
      function go(n) { cur = (n + sl.length) % sl.length; sl.forEach(function (s, i) { s.classList.toggle("on", i === cur); }); dt.forEach(function (d, i) { d.classList.toggle("on", i === cur); }); }
      dt.forEach(function (d, i) { d.onclick = function () { go(i); start(); }; });
      function start() { clearInterval(tm); if (!matchMedia("(prefers-reduced-motion: reduce)").matches) tm = setInterval(function () { go(cur + 1); }, 6500); }
      car.onmouseenter = function () { clearInterval(tm); }; car.onmouseleave = start; start();
    }
    var pe = document.getElementById("persona"); if (!pe) return;
    var out = document.getElementById("ranked"), seq = 0;
    PROFILES.forEach(function (p, i) {
      var b = document.createElement("button"); b.textContent = p.id + " · " + p.short; b.onclick = function () { show(i); }; pe.appendChild(b);
    });
    function show(i) {
      var p = PROFILES[i], mine = ++seq;
      [].forEach.call(pe.children, function (b, k) { b.classList.toggle("on", k === i); });
      out.innerHTML = '<p class="loading" style="color:#c5cff0">Asking Pega for customer ' + p.id + "…</p>";
      pegaDecision(p.id).then(function (d) {
        if (mine !== seq) return;
        var rk = d.items.slice(0, 3);
        var max = Math.max.apply(null, rk.map(function (r) { return r.p; })) || 1;
        out.innerHTML = '<p style="color:#c5cff0;margin-bottom:2px">Live from Pega for customer ' + p.id + " (" + esc(p.name) + (p.type ? ", " + p.type.toLowerCase() : "") + "): " + d.total + " offers returned, top 3 shown.</p>" + rk.map(function (r, k) {
          return '<div class="rk' + (k ? "" : " top") + '"><span class="n">' + r.rank + "</span><h4>" + esc(r.a.name.replace(" (TBC)", "")) + '</h4><span class="meta">' + r.a.pillar + " · Pega rank " + r.rank + " · propensity " + r.p.toFixed(3) +
            '</span><div class="meter"><i style="width:' + (r.p / max * 100) + '%"></i></div><a href="' + JPAGE[r.a.journey] + ".html#a-" + slug(r.a.name) + '" style="grid-column:2">View offer →</a></div>';
        }).join("");
      }).catch(function (e) {
        if (mine !== seq) return;
        out.innerHTML = '<div class="errbox"><b>Could not reach Pega</b><span>' + esc(e.message) + '</span><button class="btn ghost sm" id="retry" type="button">Try again</button></div>';
        document.getElementById("retry").onclick = function () { show(i); };
      });
    }
    show(0);
  }

  /* ---- journeys index ---- */
  function journeysPage() {
    var out = '<div class="phero" style="background:linear-gradient(115deg,#0a0f26 10%,#1e2761 100%)"><div class="wrap"><div><div class="crumbs"><a href="index.html">Home</a> / CDH journeys</div><span class="kick" style="display:block;margin-top:16px">Pega CDH MLP Package for Telecom</span><h1>13 customer journeys</h1><p>Every journey from the MLP document, and where each one shows up on this site.</p></div></div></div>';
    out += '<section class="sec"><div class="wrap"><div class="legend-note">87 actions in total: 48 in the MVP (live in the 10-week delivery) and 39 post-MVP (shown as "Coming soon"). Use the CDH journey view switch at the top of any page to see the journey, pillar and channel behind each offer.</div><div class="jlist">';
    D.journeys.forEach(function (j, i) {
      var l = sortLive(D.actions.filter(function (a) { return a.journey === j.id; }));
      var pillars = []; l.forEach(function (a) { if (pillars.indexOf(a.pillar) < 0) pillars.push(a.pillar); });
      out += '<div class="jitem"><span class="num">JOURNEY ' + String(i + 1).padStart(2, "0") + "</span><h3>" + esc(j.name) + '</h3><div class="row">' + pillars.map(function (p) { return '<span class="pill ' + p + '">' + p + "</span>"; }).join("") +
        '</div><div class="row">' + l.map(function (a) { return '<a class="pill' + (a.phase === "MVP" ? " mvp" : "") + '" href="' + JPAGE[j.id] + ".html#a-" + slug(a.name) + '">' + esc(a.name.replace(" (TBC)", "")) + "</a>"; }).join("") +
        '</div><div class="foot"><span><b>' + j.mvp + "</b> MVP · <b>" + j.post + '</b> post-MVP</span><a class="go" href="' + JPAGE[j.id] + ".html#j-" + j.id + '">View on site →</a></div></div>';
    });
    return out + "</div></div></section>";
  }

  /* ---- demo sign-in (no backend: sample customers only) ---- */
  var PROFILES = [
    { name: "Jordan Lee", bg: "linear-gradient(115deg,#0e1430 10%,#3b2ea6 100%)" },
    { name: "Sam Rivera", bg: "linear-gradient(115deg,#0e1430 10%,#a56d00 100%)" },
    { name: "Taylor Brooks", bg: "linear-gradient(115deg,#1e2761 10%,#c42a3a 100%)" },
    { name: "Casey Nguyen", bg: "linear-gradient(115deg,#0e1430 10%,#34408a 100%)" },
    { name: "Riley Patel", bg: "linear-gradient(115deg,#0e1430 10%,#0b8a7f 100%)" },
    { name: "Morgan Ellis", bg: "linear-gradient(115deg,#0a0f26 10%,#1e2761 55%,#0b8a7f 100%)" }
  ];
  var TYPES = { S1: "Postpaid customer", S2: "Prepaid customer", S3: "Business customer", S4: "Loyal, long-tenure customer", S5: "Churn-risk customer", S6: "Lapsed customer" };
  var SHORT = { S1: "Postpaid", S2: "Prepaid", S3: "Business", S4: "Loyal", S5: "Churn-risk", S6: "Lapsed" };
  /* Ordered journey path per customer type: the customer steps through these, showing only offers Pega returned */
  var PATHS = {
    S1: ["onboarding-mobile", "digital-deepening", "deals", "usage", "loyalty", "retention", "digital-support", "fraud"],
    S2: ["prepaid", "onboarding-mobile", "deals", "usage", "digital-deepening", "digital-support"],
    S3: ["onboarding-sme", "digital-deepening", "usage", "digital-support", "fraud"],
    S4: ["loyalty", "usage", "deals", "digital-deepening", "device"],
    S5: ["retention", "digital-support", "loyalty", "deals", "usage"],
    S6: ["retention", "onboarding-mobile", "deals", "device", "digital-deepening"]
  };
  PROFILES.forEach(function (p, i) { p.id = "S" + (i + 1); p.type = TYPES[p.id] || ""; p.short = SHORT[p.id] || p.name.split(" ")[0]; });
  function getSession() {
    var m = location.search.match(/[?&]p=(\d)/); if (m && PROFILES[+m[1]]) return +m[1];
    try { var v = localStorage.getItem("telcoUser"); if (v !== null && PROFILES[+v]) return +v; } catch (e) {}
    return null;
  }
  function signIn(i) { try { localStorage.setItem("telcoUser", String(i)); } catch (e) {} location.href = "account.html?p=" + i; }
  function signOut() { try { localStorage.removeItem("telcoUser"); } catch (e) {} location.href = "index.html"; }

  function loginPage() {
    return '<section class="login"><div class="wrap lgrid"><div class="lcard"><h1>Sign in to My Instellars</h1><p class="lsub">Manage your plan, pay your bill and see offers picked for you.</p>' +
      '<form id="lf" novalidate><label for="lu">Mobile number or email</label><input id="lu" name="u" autocomplete="username" inputmode="email"><label for="lp">Password</label><input id="lp" name="p" type="password" autocomplete="current-password">' +
      '<div class="lerr" id="le" role="alert"></div><button class="btn" type="submit">Sign in</button></form>' +
      '<p class="lsmall"><a href="support.html">Need help signing in?</a> · <a href="plans.html">New here? Get a plan</a></p></div>' +
      '<div class="lside"><span class="kick">Demo site</span><h2>Try a sample customer</h2><p>There is no real account system here. Pick a sample customer. Each one is a real Pega customer ID (S1 to S6), and My Instellars shows the offers Pega returns for them live. Entering anything in the form signs you in as ' + PROFILES[1].name + " (" + PROFILES[1].id + ").</p>" +
      '<div class="demo">' + PROFILES.map(function (p, i) { return '<button type="button" data-i="' + i + '"><b>' + esc(p.name) + "</b><span>Customer ID " + p.id + (p.type ? " · " + p.type : "") + "</span></button>"; }).join("") + "</div></div></div></section>";
  }
  function initLogin() {
    document.getElementById("lf").onsubmit = function (e) {
      e.preventDefault();
      if (!document.getElementById("lu").value.trim() || !document.getElementById("lp").value) { document.getElementById("le").textContent = "Enter your mobile number or email and your password."; return; }
      signIn(1);
    };
    [].forEach.call(document.querySelectorAll(".demo button"), function (b) { b.onclick = function () { signIn(+b.getAttribute("data-i")); }; });
  }
  function accountPage() {
    var i = getSession(); if (i === null) { location.replace("login.html"); return ""; }
    var pr = PROFILES[i], first = esc(pr.name.split(" ")[0]);
    var out = '<div class="phero" style="background:' + pr.bg + '"><div class="wrap"><div><div class="crumbs"><a href="index.html">Home</a> / My Instellars</div><span class="kick" style="display:block;margin-top:16px">My Instellars</span><h1>Hi, ' + first + "</h1><p>Customer ID " + pr.id + (pr.type ? " · " + pr.type : "") + '</p></div><button class="btn ghost" id="so" type="button">Sign out</button></div></div>';
    out += '<section class="sec" style="padding-bottom:30px"><div class="wrap" id="jbox"></div></section>';
    out += '<section class="sec alt"><div class="wrap"><div class="sec-head"><div><h2>Top picks right now</h2><p>The offers Pega ranks highest for ' + first + ' at this moment, whatever the journey.</p></div></div><div id="live"></div></div></section>';
    out += '<section class="sec"><div class="wrap"><div class="stats4">' +
      '<div class="st"><small>Customer ID</small><b>' + pr.id + "</b><span>" + esc(pr.type || "Sample customer") + " · " + esc(pr.name) + '</span></div>' +
      '<div class="st"><small>Channel</small><b>Web</b><span>Inbound</span></div>' +
      '<div class="st"><small>Container</small><b>NextBestAction</b><span>App IREATEL</span></div>' +
      '<div class="st"><small>Offers from Pega</small><b id="cnt">…</b><span id="cnts">Asking Pega</span></div></div>' +
      '<div class="qa">' + [["Pay my bill", "card", "support.html#a-bill-pay-reminder-setup"], ["Change plan", "phone", "plans.html"], ["Get help", "headset", "support.html"], ["Security", "shield", "security.html"]].map(function (q) { return '<a class="tile" href="' + q[2] + '">' + ico(q[1]) + q[0] + "</a>"; }).join("") + "</div></div></section>";
    return out;
  }
  /* ---- tell Pega an offer was accepted ---- */
  var CAPTURE_URL = "https://instellars04.pegalabs.io/prweb/api/PegaMKTContainer/v4/capture_response";
  function captureAccept(sid, r) {
    var x = r.raw || {};
    var body = {
      CustomerID: sid, SubjectID: sid, ContextName: "Subscription", ContainerName: "NextBestAction", Channel: "Web", Direction: "Inbound",
      RankedResults: [{
        Issue: x.Issue || r.a.pillar || "General", Group: x.Group || r.a.group || "General", Name: x.Name || r.a.name,
        Outcome: "Accepted", Behavior: "Positive",
        InteractionID: x.InteractionID || String(Date.now()) + Math.floor(Math.random() * 1e6),
        CampaignID: "CC_Web_TopBanner", TreatmentName: x.Treatment || "Web_Hero_Banner_v2", Rank: r.rank
      }]
    };
    return fetch(CAPTURE_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) })
      .then(function (res) { if (!res.ok) throw new Error("HTTP " + res.status); return res.text(); })
      .then(function (txt) { try { var j = JSON.parse(txt); if (j && j.Status && j.Status !== "OK") throw new Error(j.Message || j.Status); } catch (e) { if (e instanceof SyntaxError) return; throw e; } });
  }

  /* ---- journey stages, taken from the Pega journey boards ---- */
  var STAGE_LABEL = ["Awareness", "Consideration", "Decision"];
  var STAGE_OF = {}, BOARD = {};
  [
    ["Fiber Plan", "Postpaid Mobile Plan", "Prepaid Bundle Plan", "Wi-Fi Calling Activation", "Dining and Fuel Discounts", "Free high-end Smartphones", "Bill Pay Reminder & Setup", "Stealth Call Forwarding Hijacking", "Enterprise 5G Sim Only Plan", "Bill Shock Early Warning Alert", "Self-Serve Payment Plan Setup", "Digital Channel Nudge", "Next-Best Promo Recommendation"],
    ["Home 5G Plan", "Postpaid Roaming Plan", "Add a line Device Discount", "Birthday Greeting", "Ecommerce Discounts", "Netflix Perk", "Off-Peak Usage Reward", "Free Movie Tickets", "High end Tech Discount", "Free Netflix", "Auto Pay Discount", "Gift Voucher on Network Issues", "Unusual Activity Alert", "Device Trade in Offers", "Flagship Device Discount", "Self-Service Deflection Prompt", "Proactive Rate Plan Recommendation", "Load Expiry Reminder"],
    ["Roaming Pack Activation", "Add a Line Plan Discount", "eSIM migration Nudge", "Account Anniversary", "Discounts on Adidas Products", "Gift cards and Vouchers", "Tenure Loyalty Discount", "Long-Tenure Thank-You", "10$ per Line Monthly Discount", "Win-Back After Inactivity", "Service Recovery Offer", "Data Booster", "Accessory Bundle Recommendation", "Financial Hardship Outreach", "Regulatory Notice Alert", "E-Wallet Top-Up Incentive"]
  ].forEach(function (names, k) { names.forEach(function (n) { STAGE_OF[n] = k; }); });
  ["onboarding-mobile", "digital-deepening", "deals", "usage", "loyalty", "retention", "digital-support", "fraud", "onboarding-sme", "device", "resilience", "proactive", "prepaid"].forEach(function (j) { BOARD[j] = 1; });
  function stageOf(a) { if (!BOARD[a.journey]) return 0; return STAGE_OF.hasOwnProperty(a.name) ? STAGE_OF[a.name] : 1; }
  function stageLabel(j, k) { return BOARD[j] ? STAGE_LABEL[k] : "All offers"; }

  function initAccount() {
    var i = getSession(); if (i === null) return;
    var pr = PROFILES[i], first = esc(pr.name.split(" ")[0]), jbox = document.getElementById("jbox"), live = document.getElementById("live");
    var KEY = "telcoJourney_" + pr.id;
    function loadAcc() { try { var v = JSON.parse(localStorage.getItem(KEY) || "null"); return v && typeof v === "object" && v.acc && typeof v.acc === "object" ? v.acc : {}; } catch (e) { return {}; } }
    var acc = loadAcc();
    function saveAcc() { try { localStorage.setItem(KEY, JSON.stringify({ acc: acc })); } catch (e) {} }
    function load() {
      jbox.innerHTML = '<p class="loading">Starting your journey. Asking Pega for customer ' + pr.id + "…</p>"; live.innerHTML = "";
      pegaDecision(pr.id).then(function (d) {
        seen = {};
        function pick(r, extra) { return '<div class="pick"><span class="rank">' + r.rank + '</span><div class="why">Pega rank ' + r.rank + " · propensity " + r.p.toFixed(3) + "</div>" + card(r.a) + (extra || "") + "</div>"; }
        function dupSafe(html) { return html.replace(' id="a-', ' data-a="a-').replace(' id="j-', ' data-j="j-'); }
        var path = PATHS[pr.id] || [], steps = [];
        path.forEach(function (j) { [0, 1, 2].forEach(function (k) { var o = d.items.filter(function (x) { return x.a.journey === j && stageOf(x.a) === k; }); if (o.length) steps.push({ j: j, k: k, o: o }); }); });
        var skipped = path.filter(function (j) { return !steps.some(function (s) { return s.j === j; }); });
        live.innerHTML = '<div class="live"><span class="ld"></span>Live from Pega · NextBestAction · customer ' + pr.id + " · " + d.total + " results, " + d.items.length + ' in the catalog</div><div class="grid">' + d.items.slice(0, 3).map(function (r) { return pick(r); }).join("") + "</div>" +
          (d.other.length ? '<p class="why" style="margin-top:18px">Returned by Pega but not in the catalog: ' + esc(d.other.join(", ")) + "</p>" : "");
        document.getElementById("cnt").textContent = d.total;
        document.getElementById("cnts").textContent = d.items.length + " in the catalog";
        if (!steps.length) { jbox.innerHTML = '<div class="errbox"><b>No journey for you right now</b><span>Pega returned no offers on your path. See the top picks below.</span></div>'; return; }

        function isDone(s) { return s.o.every(function (r) { return acc[r.a.name]; }); }
        function cnt(s) { return s.o.filter(function (r) { return acc[r.a.name]; }).length; }
        function firstOpen() { for (var n = 0; n < steps.length; n++) if (!isDone(steps[n])) return n; return steps.length; }
        var cap = {}, moveFrom = -1, view = firstOpen(), resumed = view > 0 || steps.some(function (s) { return cnt(s) > 0; });
        if (view >= steps.length) resumed = false;
        var js = []; steps.forEach(function (s) { if (js.indexOf(s.j) < 0) js.push(s.j); });

        function capText(s) { return s === "ok" ? "Sent to Pega" : s === "fail" ? "Not recorded in Pega" : s === "wait" ? "Telling Pega…" : ""; }
        function sendCap(r) {
          var n = r.a.name; cap[n] = "wait"; setCap(n);
          captureAccept(pr.id, r).then(function () { cap[n] = "ok"; setCap(n); }).catch(function () { cap[n] = "fail"; setCap(n); });
        }
        function setCap(n) { [].forEach.call(jbox.querySelectorAll("[data-cn]"), function (e) { if (e.getAttribute("data-cn") === n) { e.className = "cap " + (cap[n] || ""); e.textContent = capText(cap[n]); } }); }
        function draw() {
          var y = window.scrollY, fo = firstOpen(); if (view > fo) view = fo;
          var done = fo >= steps.length, cs = steps[Math.min(view, steps.length - 1)], tot = 0, ok = 0;
          steps.forEach(function (s) { tot += s.o.length; ok += cnt(s); });
          var pct = Math.round(ok / tot * 100);
          var h = '<div class="jstart"><span class="ld"></span><div><b>' + (done ? "Journey complete" : resumed ? "Welcome back, " + first + ". Picking up your journey." : "Your journey has started") + "</b><span>" +
            (done ? "You have accepted every offer on your path." : "A guided path for a " + esc(pr.type.toLowerCase() || "valued customer") + ". Accept the offers in each stage to move on to the next.") + '</span></div><div class="prog" title="' + ok + " of " + tot + ' offers accepted"><i style="width:' + pct + '%"></i></div></div>';
          h += '<div class="steps" id="steps">' + js.map(function (j, n) {
            var idx = steps.findIndex(function (s) { return s.j === j; }), all = steps.every(function (s) { return s.j !== j || isDone(s); }), lock = idx > fo;
            return '<button type="button" class="step' + (j === cs.j && !done ? " on" : all ? " done" : lock ? " lock" : "") + '" data-v="' + idx + '"' + (lock ? " disabled" : "") + '><i>' + (all ? "✓" : n + 1) + "</i><span>" + esc(JN[j]) + "</span></button>";
          }).join("") + "</div>";
          h += '<div class="stages" id="stages">' + steps.map(function (s, n) { return [s, n]; }).filter(function (x) { return x[0].j === cs.j; }).map(function (x) {
            var s = x[0], n = x[1], lock = n > fo;
            return '<button type="button" class="stg' + (n === view && !done ? " on" : isDone(s) ? " done" : lock ? " lock" : "") + '" data-v="' + n + '"' + (lock ? " disabled" : "") + "><b>" + (isDone(s) ? "✓ " : "") + stageLabel(s.j, s.k) + "</b><small>" + cnt(s) + " of " + s.o.length + " accepted</small></button>";
          }).join("") + "</div>";
          if (done) {
            h += '<div class="jdone"><h3>All done, ' + first + '</h3><p>You have accepted every offer on your journey. Come back any time. We will keep it up to date.</p><div class="jnav" style="justify-content:flex-start"><button class="btn" id="again" type="button">Start again</button><a class="btn line" href="plans.html">Browse all plans</a></div></div>';
          } else {
            var st = steps[view], okS = isDone(st), nx = steps[view + 1];
            var nlabel = !nx ? "Finish journey" : nx.j === st.j ? "Next stage: " + stageLabel(nx.j, nx.k) : "Next journey: " + JN[nx.j];
            h += '<div class="jhead"><span class="kick">Journey ' + (js.indexOf(st.j) + 1) + " of " + js.length + " · " + stageLabel(st.j, st.k) + "</span><h3>" + esc(JN[st.j]) + "</h3><p>" + st.o.length + " offer" + (st.o.length > 1 ? "s" : "") + " in this stage, best match first. Accept " + (st.o.length > 1 ? "all of them" : "it") + " to move on.</p></div>" +
              '<div class="grid">' + st.o.map(function (r, k) {
                var yes = acc[r.a.name];
                return dupSafe(pick(r, '<div class="accept' + (yes ? " yes" : "") + '">' + (yes ? '<span class="okmsg">✓ Accepted</span><span class="cap ' + (cap[r.a.name] || "") + '" data-cn="' + esc(r.a.name) + '">' + capText(cap[r.a.name]) + '</span><button type="button" class="lnk" data-und="' + k + '">Undo</button>' : '<button type="button" class="btn" data-acc="' + k + '">Accept offer</button>') + "</div>"));
              }).join("") + "</div>" +
              '<div class="jnav"><button class="btn line" id="prev" type="button"' + (view === 0 ? " disabled" : "") + '>← Back</button><div class="jnext">' + (okS ? (moveFrom === view ? '<span class="need ok">✓ Stage complete · moving on…</span>' : "") : '<span class="need">Accept all ' + st.o.length + " to continue · " + cnt(st) + " of " + st.o.length + " accepted</span>") + '<button class="btn" id="next" type="button"' + (okS ? "" : " disabled") + ">" + esc(nlabel) + " →</button></div></div>";
          }
          if (skipped.length) h += '<p class="why" style="margin-top:18px">Journeys on this path with no offers from Pega right now: ' + esc(skipped.map(function (j) { return JN[j]; }).join(", ")) + "</p>";
          jbox.innerHTML = h;
          [].forEach.call(jbox.querySelectorAll("[data-v]"), function (b) { b.onclick = function () { view = +b.getAttribute("data-v"); resumed = false; draw(); }; });
          [].forEach.call(jbox.querySelectorAll("[data-acc]"), function (b) { b.onclick = function () {
            var v0 = view, st0 = steps[v0], off = st0.o[+b.getAttribute("data-acc")]; acc[off.a.name] = 1; saveAcc(); resumed = false; cap[off.a.name] = "wait"; sendCap(off);
            var moving = isDone(st0) && v0 < steps.length - 1; moveFrom = moving ? v0 : -1; draw();
            if (moving) setTimeout(function () { if (view === v0 && isDone(steps[v0])) { moveFrom = -1; view = v0 + 1; draw(); window.scrollTo(0, Math.max(0, document.getElementById("steps").getBoundingClientRect().top + window.scrollY - 90)); } }, 900);
          }; });
          [].forEach.call(jbox.querySelectorAll("[data-und]"), function (b) { b.onclick = function () { delete acc[steps[view].o[+b.getAttribute("data-und")].a.name]; saveAcc(); resumed = false; draw(); }; });
          var pv = document.getElementById("prev"), nb = document.getElementById("next"), ag = document.getElementById("again");
          if (pv) pv.onclick = function () { view--; resumed = false; draw(); };
          if (nb) nb.onclick = function () { view++; resumed = false; draw(); };
          if (ag) ag.onclick = function () { acc = {}; saveAcc(); view = 0; resumed = false; draw(); };
          window.scrollTo(0, y);
        }
        draw();
      }).catch(function (e) {
        jbox.innerHTML = '<div class="errbox"><b>Could not reach Pega</b><span>' + esc(e.message) + '</span><button class="btn line sm" id="retry" type="button">Try again</button></div>';
        document.getElementById("cnt").textContent = "–"; document.getElementById("cnts").textContent = "Pega call failed";
        document.getElementById("retry").onclick = load;
      });
    }
    load();
  }

  /* ---- shell ---- */
  var page = document.body.getAttribute("data-page");
  var on = true; try { if (localStorage.getItem("cdhView") === "0") on = false; } catch (e) {}
  function applyToggle() { document.body.classList.toggle("cdh-on", on); var t = document.getElementById("cdhT"); if (t) t.setAttribute("aria-pressed", on); }
  var util = '<div class="util"><div class="wrap"><nav><a class="on" href="index.html">Personal</a><a href="business.html">Business</a><a href="support.html">Support</a><a href="login.html">Sign in</a><a href="journeys.html"' + (page === "journeys" ? ' style="color:#fff;font-weight:600"' : "") + '>CDH journeys</a></nav><button class="toggle" id="cdhT" aria-pressed="true"><span>CDH journey view</span><span class="sw"></span></button></div></div>';
  var head = '<header class="head"><div class="wrap"><a class="brand" href="index.html"><img src="assets/logo-white.png" alt="Instellars"><b>Telco</b></a><ul class="menu">' +
    NAV.map(function (n) { return '<li><a href="' + n[0] + '.html"' + (n[0] === page ? ' class="on"' : "") + ">" + n[1] + "</a></li>"; }).join("") + '</ul><div class="acts"><a class="btn sm ghost" id="signin" href="login.html">Sign in</a><a class="btn sm" href="plans.html">Get a plan</a></div></div></header>';
  var foot = '<footer><div class="wrap"><div class="fgrid"><div><img src="assets/logo-white.png" alt="Instellars"><p>Instellars Telco is a demonstration site for the Pega CDH MLP package for telecom. Offers and prices shown are illustrative.</p></div>' +
    '<div><h4>Shop</h4><ul><li><a href="plans.html">Plans &amp; Broadband</a></li><li><a href="devices.html">Devices</a></li><li><a href="deals.html">Deals &amp; Perks</a></li></ul></div>' +
    '<div><h4>My account</h4><ul><li><a href="rewards.html">Rewards</a></li><li><a href="digital.html">Upgrade &amp; Digital</a></li><li><a href="support.html">Help &amp; Support</a></li><li><a href="login.html">Sign in</a></li></ul></div>' +
    '<div><h4>More</h4><ul><li><a href="security.html">Security</a></li><li><a href="business.html">Business</a></li><li><a href="journeys.html">CDH journeys</a></li></ul></div></div>' +
    '<div class="fbase"><span>©Copyright 2026 Instellars</span><span>Confidential | July 2026</span></div></div></footer>';
  var body = page === "home" ? home() : page === "journeys" ? journeysPage() : page === "login" ? loginPage() : page === "account" ? accountPage() : categoryPage(page);
  document.getElementById("app").innerHTML = util + head + "<main>" + body + "</main>" + foot;
  var T = page === "home" ? "Instellars Telco · Mobile, broadband and devices" : page === "journeys" ? "CDH journeys · Instellars Telco" : page === "login" ? "Sign in · Instellars Telco" : page === "account" ? "My Instellars · Instellars Telco" : PAGES[page].t + " · Instellars Telco";
  document.title = T;
  var sess = getSession(), si = document.getElementById("signin");
  if (sess !== null) { si.textContent = "Hi, " + PROFILES[sess].name.split(" ")[0]; si.href = "account.html?p=" + sess; si.className = "btn sm"; si.style.background = "#fff"; si.style.color = "#0e1430"; si.style.borderColor = "#fff"; }
  if (page === "login") initLogin();
  if (page === "account") { var so = document.getElementById("so"); if (so) so.onclick = signOut; }
  if (page === "account") initAccount();
  applyToggle();
  document.getElementById("cdhT").onclick = function () { on = !on; try { localStorage.setItem("cdhView", on ? "1" : "0"); } catch (e) {} applyToggle(); };
  if (page === "home") initHome();
  if (location.hash) { var el = document.getElementById(location.hash.slice(1)); if (el) setTimeout(function () { el.scrollIntoView(); }, 50); }
})();
