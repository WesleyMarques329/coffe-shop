function renderCards() {
    const menuSection = document.querySelector(".menu");
  
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
  
      const cardOption = document.createElement("div");
      cardOption.classList.add("menu-card-option");
  
      const eclipse = document.createElement("div");
      eclipse.classList.add("eclipse-menu");
  
      const img = document.createElement("img");
      img.src = card.image;
      img.alt = `img ${i}`;
  
      const name = document.createElement("h2");
      name.classList.add("name-2");
      name.textContent = card.name;
  
      const description = document.createElement("p");
      description.textContent = card.description;
  
      const btn = document.createElement("button");
      btn.classList.add("btn-option");
      btn.textContent = "MENU";
  
      eclipse.appendChild(img);
      eclipse.appendChild(name);
      eclipse.appendChild(description);
      eclipse.appendChild(btn);
      cardOption.appendChild(eclipse);
      menuSection.appendChild(cardOption);
    }
  }

  renderCards();

const menuLinks = document.querySelectorAll('nav ul li a');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {

    e.preventDefault();

    const targetEl = document.querySelector(link.getAttribute('href'));

    targetEl.scrollIntoView({behavior: 'smooth'});
  });
});

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
