const imagens = [
    'imagem/1679662998_en-idei-club-p-pc-gamer-setup-dizain-pinterest-2.jpg', // Caminho para a primeira imagem
    'imagem/computador-pc-gamer.jpeg', // Caminho para a segunda imagem
    'imagem/custom-built-gaming-pcs-norse-inspired-power-and-performance-regen-computers.webp', // Caminho para a terceira imagem
];

let indice = 0;

function trocarImagem() {
    indice = (indice + 1) % imagens.length; // Ciclo entre as imagens
    const imagemElement = document.getElementById('imagem');
    imagemElement.src = imagens[indice];
}

setInterval(trocarImagem, 3000); // Troca a imagem a cada 3 segundos