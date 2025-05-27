const imagens = [
<<<<<<< HEAD
  "imagem/1679662998_en-idei-club-p-pc-gamer-setup-dizain-pinterest-2.jpg",
  "imagem/computador-pc-gamer.jpeg",
  "imagem/custom-built-gaming-pcs-norse-inspired-power-and-performance-regen-computers.webp",
=======
    'imagem/1679662998_en-idei-club-p-pc-gamer-setup-dizain-pinterest-2.jpg',
    'imagem/computador-pc-gamer.jpeg',
    'imagem/custom-built-gaming-pcs-norse-inspired-power-and-performance-regen-computers.webp'   
>>>>>>> 3d286d13abbed057fa02741cfd0e015fe9300c21
];

let indice = 0;

function trocarImagem() {
<<<<<<< HEAD
  indice = (indice + 1) % imagens.length;
  const imagemElement = document.getElementById("imagem");
  if (imagemElement) {
    imagemElement.src = imagens[indice];
  }
=======
    indice = (indice + 1) % imagens.length;
    const imagemElement = document.getElementById('imagem');
    if (imagemElement) {
        imagemElement.src = imagens[indice];
    }
>>>>>>> 3d286d13abbed057fa02741cfd0e015fe9300c21
}

setInterval(trocarImagem, 3000);
