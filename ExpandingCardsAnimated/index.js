const ROOT_ID = "root";
const rootElement = document.getElementById(ROOT_ID);
const cards = Array.from(rootElement.children);

const handleOnRootClick = (event) => {
  cards.forEach((card) => {
    const isCardExpanded = card.classList.contains("expand");
    if (event.target.id === ROOT_ID && isCardExpanded) {
      card.classList.remove("expand");
    }

    if (event.target === card && !isCardExpanded) {
      card.classList.add("expand");
    }

    if (event.target !== card && isCardExpanded) {
      card.classList.remove("expand");
      card.classList.add("collapse");
    }
  });
};

rootElement.addEventListener("click", handleOnRootClick);
