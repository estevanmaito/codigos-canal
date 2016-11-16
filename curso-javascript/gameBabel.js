// Cria o canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Imagem de fundo
let bgReady = false;
const bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = 'images/background.png';

// Imagem do herói
let heroReady = false;
const heroImage = new Image();
heroImage.onload = function () {
  heroReady = true;
};
heroImage.src = 'images/bomb.png';

// Imagem do monstro
let monsterReady = false;
const monsterImage = new Image();
monsterImage.onload = function () {
  monsterReady = true;
};
monsterImage.src = 'images/ie.png';

// Objetos do jogo
const hero = {
  speed: 256 // movimento em pixels por segundo
};
const monster = {};
let monstersCaught = 0;

// Controle do teclado
const keysDown = {};

window.addEventListener('keydown', function (e) {
  keysDown[e.keyCode] = true;
}, false);

window.addEventListener('keyup', function (e) {
  delete keysDown[e.keyCode];
}, false);

// Reseta o jogo quando o jogador pega o monstro
const reset = function () {
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;

  // Posiciona o monstro randomicamente na tela
  monster.x = 32 + (Math.random() * (canvas.width - 64));
  monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Atualiza os objetos do jogo
const update = function (modifier) {
  if (38 in keysDown) { // Pressionando a seta pra cima
    hero.y -= hero.speed * modifier;
  }
  if (40 in keysDown) { // Pressionando a seta pra baixo
    hero.y += hero.speed * modifier;
  }
  if (37 in keysDown) { // Pressionando a seta pra esquerda
    hero.x -= hero.speed * modifier;
  }
  if (39 in keysDown) { // Pressionando a seta pra direita
    hero.x += hero.speed * modifier;
  }

  // Os personagens se encostaram?
  if (
    hero.x <= (monster.x + 32)
    && monster.x <= (hero.x + 32)
    && hero.y <= (monster.y + 32)
    && monster.y <= (hero.y + 32)
  ) {
    ++monstersCaught;
    reset();
  }
};

// Renderiza tudo
const render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }

  if (monsterReady) {
    ctx.drawImage(monsterImage, monster.x, monster.y);
  }

  // Pontuação
  ctx.fillStyle = 'rgb(250, 250, 250)';
  ctx.font = '24px Helvetica';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';
  ctx.fillText('Pessoas salvas: ' + monstersCaught, 32, 32);
};

// Controla o loop do jogo
const main = function () {
  const now = Date.now(); 
  const delta = now - then;

  update(delta / 1000);
  render();

  then = now;

  // Executa isso o mais breve possível
  requestAnimationFrame(main);
};

// Suporte cross-browser para requestAnimationFrame
const w = window;
const requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Que comece o jogo!
let then = Date.now();
reset();
main();