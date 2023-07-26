const paraSection = document.querySelector('.para-section');

const parallaxScroll = () => {
  const elementHeight = paraSection.offsetHeight;
  const increment = -1;

  let centerOffest = window.scrollY - paraSection.offsetTop;
  let yOffsetRatio = centerOffest / elementHeight;

  let yOffset = 50 + yOffsetRatio * 100 * increment;
  console.log(yOffset);

  paraSection.style.backgroundPositionY = `${yOffset}%`;
};

window.addEventListener('scroll', parallaxScroll);