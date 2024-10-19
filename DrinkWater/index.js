const glassGroup = document.querySelector(".glass-group");
const yetToStart = document.querySelector(".yet-to-start");
const bucket = document.querySelector(".bucket");
const bucketFiller = document.querySelector(".bucket-filler");
const glasses = Array.from(glassGroup.children);

const handleOnGlassClick = (ev) => {
  const { height } = bucket.getBoundingClientRect();
  const bucketStepSize = height / glasses.length;

  const glassIndex = glasses.indexOf(ev.target);

  glasses.forEach((glass, index) => {
    const isGlassFull = glass.classList.contains("fill");

    if (index <= glassIndex && !isGlassFull) {
      glass.classList.add("fill");
    }

    if (index > glassIndex && isGlassFull) {
      glass.classList.remove("fill");
    }
  });

  bucketFiller.style.height = `${bucketStepSize * (glassIndex + 1)}px`;
};

glassGroup.addEventListener("click", handleOnGlassClick);

const handleOnEmptyGlass = () => {
  bucketFiller.style.height = "0px";
  glasses.forEach((glass) => {
    const isGlassFull = glass.classList.contains("fill");
    if (isGlassFull) {
      glass.classList.remove("fill");
    }
  });
};

yetToStart.addEventListener("click", handleOnEmptyGlass);
