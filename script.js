const themeButton = document.getElementById('toggle-theme');
const body = document.getElementById('theme');

// Alternar entre temas
themeButton.addEventListener('click', () => {
  if (body.classList.contains('bg-white')) {
    body.classList.remove('bg-white', 'text-gray-800');
    body.classList.add('bg-gray-900', 'text-white');
  } else {
    body.classList.remove('bg-gray-900', 'text-white');
    body.classList.add('bg-white', 'text-gray-800');
  }
});

//alterar cor da fonte no clique
const changeColorButton = document.getElementById('change-color');
const textExample = document.getElementById('text-example');

changeColorButton.addEventListener('click', () => {
  textExample.classList.toggle('text-rosart-dark'); // Troca para o tom escuro da paleta personalizada
  textExample.classList.toggle('text-rosart-light'); // Troca para o tom claro
});

//alterção do banner
const bannerText = document.getElementById('banner-text');
const updateBannerButton = document.getElementById('update-banner');

// Array com promoções
const promotions = [
  'Promoção: 20% OFF em todos os produtos!',
  'Compre 2 e leve 3 bordados personalizados!',
  'Frete grátis nas compras acima de R$100!',
];

let currentPromotion = 0;

updateBannerButton.addEventListener('click', () => {
  currentPromotion = (currentPromotion + 1) % promotions.length; // Alterna entre as promoções
  bannerText.textContent = promotions[currentPromotion];
});
