const GH = "https://github.com/Guilherme-Firmino/";

const projetos = [
  {
    id: "olhos",
    titulo: "Olhos Digitais · Rastreamento Visual",
    resumo: "Olhos 3D que seguem meus movimentos em tempo real pela câmera. Meu primeiro projeto com visão computacional.",
    descricao: "Comecei sabendo muito pouco sobre visão computacional, rastreamento facial e gráficos 3D. Fui estudando, pesquisando e testando até cada parte funcionar. O resultado é um par de olhos digitais que acompanha o rosto e o olhar de quem está na frente da câmera.",
    feitos: [
      "Rastreamento do rosto pela câmera",
      "Detecção dos olhos e da íris",
      "Olhos acompanhando a direção do olhar",
      "Detecção de piscadas, com pálpebras que acompanham a abertura dos olhos",
      "Íris, pupila e córnea em 3D, com reflexos na córnea",
      "Movimento dos olhos de acordo com o rosto",
    ],
    techs: ["Python", "OpenCV", "MediaPipe", "Pyglet", "OpenGL"],
    tags: ["python", "visao"],
    repo: GH + "Rastreamento-visual",
    visual: "eyes",
    destaque: true,
  },
  {
    id: "pin",
    titulo: "PinTester",
    resumo: "Script de QA que automatiza tentativas de códigos de 6 dígitos para testar a proteção de um campo de autenticação.",
    descricao: "Criado numa aula prática de Segurança de Sistemas de Informação. O script digita e envia códigos numéricos em sequência para simular um ataque de força bruta e observar como o sistema reage: se existe limite de tentativas ou bloqueio temporário.",
    feitos: [
      "Automação de digitação e envio com PyAutoGUI",
      "Simulação de tentativas sequenciais de força bruta",
      "Observação do comportamento do sistema (limites e bloqueios)",
      "Aprendizado: automatizar é só uma etapa, o importante é analisar as respostas e coletar evidências, sempre dentro do escopo e com autorização",
    ],
    techs: ["Python", "PyAutoGUI", "QA", "Segurança"],
    tags: ["python", "seguranca"],
    repo: GH + "PinTester",
    visual: "pin",
  },
  {
    id: "org",
    titulo: "Organizador de Arquivos",
    resumo: "Identifica o tipo de cada arquivo e move tudo para a pasta certa, automaticamente.",
    descricao: "Um programa para acabar com a pasta de Downloads bagunçada. Ele lê os arquivos de uma pasta, descobre o tipo de cada um pela extensão e organiza em subpastas como Imagens, Documentos, Vídeos e Músicas.",
    feitos: [
      "Manipulação de arquivos com Python",
      "Uso das bibliotecas os e shutil",
      "Automação de uma tarefa do dia a dia",
      "Código organizado e com boas práticas",
    ],
    techs: ["Python", "os", "shutil", "Automação"],
    tags: ["python"],
    repo: GH + "Organizador-de-Arquivos-em-Python",
    visual: "files",
  },
  {
    id: "web",
    titulo: "Site Institucional · Universidade Fictícia",
    resumo: "Página web completa para uma universidade fictícia, feita inteiramente em HTML.",
    descricao: "O objetivo foi estruturar um site institucional organizado e com cara profissional, simulando um ambiente acadêmico real. Planejei a hierarquia das informações, a navegação entre páginas e a organização dos arquivos.",
    feitos: [
      "Páginas Início, Quem Somos e Contato interligadas",
      "HTML semântico e organizado",
      "Navegação clara e intuitiva",
      "Versionamento com Git e GitHub",
    ],
    techs: ["HTML", "Git", "GitHub"],
    tags: ["web"],
    repo: GH + "Pagina-Web-HTML-Universidade-Fictcia",
    visual: "web",
  },
  {
    id: "app",
    titulo: "Aplicativo Básico",
    resumo: "Programa de terminal que junta calculadora, data e hora, lista de tarefas e sistema de biblioteca.",
    descricao: "Feito para praticar lógica de programação, manipulação de listas e interação com o usuário, criando uma experiência completa no terminal. Você pode testar uma versão dele aqui no site, na seção Terminal.",
    feitos: [
      "Calculadora básica para operações rápidas",
      "Data e hora sempre atualizadas",
      "Lista de tarefas para organizar o dia",
      "Sistema de biblioteca: cadastrar, listar e gerenciar livros",
    ],
    techs: ["Python", "CLI", "Licença MIT"],
    tags: ["python"],
    repo: GH + "Aplicativo-Basico",
    visual: "term",
    demo: "#terminal",
  },
];

const skills = ["Python", "OpenCV", "MediaPipe", "OpenGL", "Pyglet", "PyAutoGUI", "HTML", "Git", "GitHub", "Testes de software", "Segurança da informação", "Automação", "Lógica de programação", "Informática"];

/* ---------- visuais ---------- */
const eyeHTML = `<div class="eye"><div class="iris"><div class="pupil"></div><div class="glint"></div></div><div class="lid top"></div><div class="lid bottom"></div></div>`;

const visuais = {
  eyes: (el) => { el.innerHTML = `<div class="v-eyes face"><div class="mesh"></div>${eyeHTML}${eyeHTML}</div>`; },

  pin: (el) => {
    el.innerHTML = `<div class="v-pin"><div class="digits">${"<b>0</b>".repeat(6)}</div><div class="status">aguardando</div></div>`;
    const ds = el.querySelectorAll("b"), st = el.querySelector(".status");
    let n = Math.floor(Math.random() * 400000), tent = 0;
    return setInterval(() => {
      if (!el.isConnected) return;
      n = (n + 1) % 1e6; tent++;
      String(n).padStart(6, "0").split("").forEach((d, i) => (ds[i].textContent = d));
      if (tent % 12 === 0) { st.textContent = "limite de tentativas? registrando evidência"; st.classList.add("ok"); }
      else { st.textContent = `tentativa #${tent} · código recusado`; st.classList.remove("ok"); }
    }, 180);
  },

  files: (el) => {
    const pastas = ["Imagens", "Docs", "Vídeos", "Músicas"];
    const arquivos = [["foto.png", 0], ["trabalho.pdf", 1], ["aula.mp4", 2], ["som.mp3", 3], ["meme.jpg", 0], ["notas.txt", 1]];
    el.innerHTML = `<div class="v-files">${pastas.map((p, i) => `<div class="folder" style="left:${4 + i * 24.5}%">${p}</div>`).join("")}
      ${arquivos.map(([f]) => `<span class="file">${f}</span>`).join("")}</div>`;
    const fs = el.querySelectorAll(".file");
    let arrumado = false;
    const layout = () => {
      fs.forEach((f, i) => {
        if (arrumado) {
          const p = arquivos[i][1], pilha = arquivos.slice(0, i).filter((a) => a[1] === p).length;
          f.style.left = `${6 + p * 24.5}%`; f.style.top = `${92 - pilha * 22}px`; f.style.transform = "scale(.85) rotate(0)";
          f.style.opacity = 1;
        } else {
          f.style.left = `${8 + ((i * 37) % 70)}%`; f.style.top = `${14 + ((i * 23) % 60)}px`;
          f.style.transform = `rotate(${(i % 2 ? 1 : -1) * (6 + i * 3)}deg)`;
        }
      });
      arrumado = !arrumado;
    };
    layout();
    return setInterval(() => el.isConnected && layout(), 2200);
  },

  web: (el) => {
    el.innerHTML = `<div class="v-web"><div class="browser"><div class="bar"><i></i><i></i><i></i></div><div class="page">
      <div class="nav-l"><span></span><span></span><span></span></div>
      <div class="heroblk">UNIVERSIDADE FICTÍCIA</div>
      <div class="row"><span></span><span></span><span></span></div>
      <div class="lines"><span style="width:90%"></span><span style="width:75%"></span><span style="width:82%"></span></div>
      <div class="row"><span></span><span></span><span></span></div></div></div></div>`;
  },

  term: (el) => {
    const linhas = [">>> python app.py", "", "=== APLICATIVO BÁSICO ===", "1 · Calculadora", "2 · Data e hora", "3 · Lista de tarefas", "4 · Biblioteca", "", "Escolha uma opção: 3", "+ tarefa adicionada: estudar OpenCV"];
    el.innerHTML = `<div class="v-term"></div>`;
    const box = el.firstChild;
    let i = 0;
    return setInterval(() => {
      if (!el.isConnected) return;
      if (i >= linhas.length + 6) { box.innerHTML = ""; i = 0; }
      if (i < linhas.length) {
        const l = linhas[i];
        box.innerHTML += (l.startsWith(">>>") || l.startsWith("+") || l.startsWith("===") ? `<span class="g">${l}</span>` : l) + "\n";
      }
      i++;
    }, 380);
  },
};

/* ---------- cards ---------- */
const grid = document.getElementById("grid");
projetos.forEach((p) => {
  const card = document.createElement("button");
  card.className = "card reveal" + (p.destaque ? " featured" : "");
  card.dataset.tags = p.tags.join(" ");
  card.innerHTML = `<div class="visual"></div><div class="info"><h3>${p.titulo}</h3><p>${p.resumo}</p>
    <div class="badges">${p.techs.map((t) => `<span class="badge">${t}</span>`).join("")}</div>
    <span class="more">ver detalhes →</span></div>`;
  visuais[p.visual](card.querySelector(".visual"));
  card.addEventListener("click", () => abrir(p));
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave", () => (card.style.transform = ""));
  grid.appendChild(card);
});

document.querySelectorAll(".chip").forEach((c) =>
  c.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach((x) => x.classList.toggle("active", x === c));
    const f = c.dataset.filter;
    grid.querySelectorAll(".card").forEach((card) =>
      card.classList.toggle("hide", f !== "todos" && !card.dataset.tags.split(" ").includes(f)));
  }));

/* ---------- modal ---------- */
const modal = document.getElementById("modal"), modalBody = document.getElementById("modalBody");
let modalTimer;
function abrir(p) {
  modalBody.innerHTML = `<div class="visual"></div><div class="content">
    <h3>${p.titulo}</h3><p>${p.descricao}</p>
    <ul>${p.feitos.map((f) => `<li>${f}</li>`).join("")}</ul>
    <div class="badges">${p.techs.map((t) => `<span class="badge">${t}</span>`).join("")}</div>
    <div class="cta"><a class="btn primary" href="${p.repo}" target="_blank" rel="noopener">Ver código no GitHub</a>
    ${p.demo ? `<a class="btn" href="${p.demo}" data-close>Testar no site</a>` : ""}</div></div>`;
  clearInterval(modalTimer);
  modalTimer = visuais[p.visual](modalBody.querySelector(".visual"));
  modal.showModal();
}
modal.addEventListener("click", (e) => {
  if (e.target === modal || e.target.closest(".close") || e.target.closest("[data-close]")) modal.close();
});
modal.addEventListener("close", () => clearInterval(modalTimer));

/* ---------- olhos seguem o mouse ---------- */
let mx = innerWidth / 2, my = innerHeight / 3;
function moverOlhos() {
  document.querySelectorAll(".eye").forEach((eye) => {
    const r = eye.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const dx = mx - cx, dy = my - cy, dist = Math.hypot(dx, dy);
    const max = r.width * 0.26, k = Math.min(1, dist / 300);
    const a = Math.atan2(dy, dx);
    eye.querySelector(".iris").style.transform =
      `translate(-50%, -50%) translate(${Math.cos(a) * max * k}px, ${Math.sin(a) * max * k}px)`;
  });
}
function onPointer(x, y) {
  mx = x; my = y;
  document.documentElement.style.setProperty("--mx", x + "px");
  document.documentElement.style.setProperty("--my", y + "px");
  requestAnimationFrame(moverOlhos);
}
addEventListener("pointermove", (e) => onPointer(e.clientX, e.clientY));
addEventListener("touchmove", (e) => onPointer(e.touches[0].clientX, e.touches[0].clientY), { passive: true });
addEventListener("scroll", () => requestAnimationFrame(moverOlhos), { passive: true });

function piscar(face) {
  face.classList.add("blink");
  setTimeout(() => face.classList.remove("blink"), 150);
}
(function piscarSozinho() {
  document.querySelectorAll(".face").forEach(piscar);
  setTimeout(piscarSozinho, 2500 + Math.random() * 3500);
})();
const heroFace = document.querySelector(".hero-eyes .face");
document.querySelector(".hero-eyes").addEventListener("click", () => {
  piscar(heroFace);
  heroFace.classList.add("dilate");
  setTimeout(() => heroFace.classList.remove("dilate"), 600);
});

/* ---------- texto digitando ---------- */
const papeis = ["desenvolvedor Python em formação", "visão computacional com OpenCV", "testes de QA e segurança", "automação de tarefas", "monitor de laboratório"];
const typed = document.getElementById("typed");
(async function digitar() {
  const espera = (ms) => new Promise((r) => setTimeout(r, ms));
  for (let i = 0; ; i = (i + 1) % papeis.length) {
    for (const ch of papeis[i]) { typed.textContent += ch; await espera(45); }
    await espera(1600);
    while (typed.textContent) { typed.textContent = typed.textContent.slice(0, -1); await espera(22); }
    await espera(250);
  }
})();

/* ---------- aparecer ao rolar + contadores ---------- */
document.querySelectorAll(".section-head, .timeline li, .skills, .term, .stat, .contact").forEach((el) => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  const n = en.target.querySelector("[data-count]");
  if (n && !n.dataset.done) {
    n.dataset.done = 1;
    const alvo = +n.dataset.count, t0 = performance.now();
    const passo = (t) => {
      const p = Math.min(1, (t - t0) / 1200), v = Math.round(alvo * (1 - Math.pow(1 - p, 3)));
      n.textContent = (n.dataset.prefix || "") + v + (n.dataset.suffix || "");
      if (p < 1) requestAnimationFrame(passo);
    };
    requestAnimationFrame(passo);
  }
  io.unobserve(en.target);
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

document.getElementById("skills").innerHTML = skills.map((s) => `<li>${s}</li>`).join("");
document.getElementById("ano").textContent = new Date().getFullYear();

/* ---------- terminal do Aplicativo Básico ---------- */
const out = document.getElementById("termOut"), form = document.getElementById("termForm"), inp = document.getElementById("termIn");
const tarefas = [], livros = ["Dom Casmurro", "O Pequeno Príncipe"], hist = [];
let hi = 0;
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function escrever(txt, cls = "out") { out.innerHTML += `<span class="${cls}">${txt}</span>\n`; out.scrollTop = out.scrollHeight; }

const comandos = {
  ajuda: () => escrever(
    `<span class="hi">comandos disponíveis</span>
  calc 2+3*4        calculadora
  data              data e hora atuais
  tarefa estudar    adiciona uma tarefa
  tarefas           lista as tarefas
  feito 1           marca a tarefa 1 como feita
  livro Título      cadastra um livro
  livros            lista a biblioteca
  remover 1         remove o livro 1
  projetos          meus projetos
  sobre             quem sou eu
  limpar            limpa a tela`),
  calc: (a) => {
    if (!a || !/^[\d\s+\-*/().,%]+$/.test(a)) return escrever("use números e + - * / ( ) · ex: calc 10/4", "err");
    try {
      const r = Function(`"use strict";return (${a.replace(/,/g, ".")})`)();
      if (!isFinite(r)) throw 0;
      escrever(`= <span class="hi">${+r.toFixed(10)}</span>`);
    } catch { escrever("não consegui calcular isso", "err"); }
  },
  data: () => escrever(new Date().toLocaleString("pt-BR", { dateStyle: "full", timeStyle: "medium" })),
  tarefa: (a) => {
    if (!a) return escrever("escreva a tarefa · ex: tarefa revisar código", "err");
    tarefas.push({ t: a, ok: false }); escrever(`+ tarefa adicionada: ${esc(a)}`, "hi");
  },
  tarefas: () => escrever(tarefas.length ? tarefas.map((x, i) => `${i + 1}. [${x.ok ? "x" : " "}] ${esc(x.t)}`).join("\n") : "nenhuma tarefa ainda · use: tarefa <texto>"),
  feito: (a) => {
    const t = tarefas[+a - 1];
    if (!t) return escrever("tarefa não encontrada", "err");
    t.ok = true; escrever(`✓ concluída: ${esc(t.t)}`, "hi");
  },
  livro: (a) => {
    if (!a) return escrever("escreva o título · ex: livro Clean Code", "err");
    livros.push(a); escrever(`+ livro cadastrado: ${esc(a)}`, "hi");
  },
  livros: () => escrever(livros.length ? livros.map((l, i) => `${i + 1}. ${esc(l)}`).join("\n") : "biblioteca vazia"),
  remover: (a) => {
    const i = +a - 1;
    if (!livros[i]) return escrever("livro não encontrado", "err");
    escrever(`- removido: ${esc(livros.splice(i, 1)[0])}`);
  },
  projetos: () => escrever(projetos.map((p) => `• ${p.titulo}`).join("\n")),
  sobre: () => escrever("Guilherme Firmino · estudante de Desenvolvimento de Sistemas em Pereiro-CE.\nGosto de aprender construindo coisas que funcionam de verdade."),
  limpar: () => (out.innerHTML = ""),
};

escrever(`<span class="hi">=== APLICATIVO BÁSICO · versão web ===</span>\ndigite "ajuda" para ver os comandos`);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const linha = inp.value.trim();
  inp.value = "";
  if (!linha) return;
  hist.push(linha); hi = hist.length;
  escrever(`>>> ${esc(linha)}`, "cmd");
  const [cmd, ...resto] = linha.split(" ");
  const fn = comandos[cmd.toLowerCase()];
  fn ? fn(resto.join(" ").trim()) : escrever(`comando "${esc(cmd)}" não existe · digite ajuda`, "err");
});
inp.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && hi > 0) { inp.value = hist[--hi]; e.preventDefault(); }
  if (e.key === "ArrowDown") { hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] || ""; }
});
document.getElementById("term").addEventListener("click", () => inp.focus({ preventScroll: true }));
