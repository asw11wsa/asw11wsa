(() => {

  const actions = {
    birdFlies(key){
      if(key){
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(${window.innerWidth}px)`;
      }else{
        document.querySelector('[data-index="2"] .bird').style.transform = `translateX(-100%)`;
      }
    },
    birdFlies2(key){
      if(key){
        document.querySelector('[data-index="5"] .bird').style.transform = `translate(${window.innerWidth}px, ${-window.innerHeight * 0.7}px)`;
      }else{
        document.querySelector('[data-index="5"] .bird').style.transform = `translateX(-100%)`;
      }
    }
  }

  const stapElems = document.querySelectorAll('.step');
  const graphicElems = document.querySelectorAll('.graphic-item');
  let currentItme = graphicElems[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
      ioIndex = entries[0].target.dataset.index * 1;
  });

  for(let i = 0; i < stapElems.length; i++){
    io.observe(stapElems[i]);
    // stapElems[i].setAttribute('data-index',i);
    stapElems[i].dataset.index = i;
    graphicElems[i].dataset.index = i;
  }

  function activate(action) {
    currentItme.classList.add('visible');
    if(action){
      actions[action](true);
    }
  }

  function inactivate(action) {
    currentItme.classList.remove('visible');
    if(action){
      actions[action](false);
    }
  }

  window.addEventListener('scroll',() => {
    let step;
    let boundingRect;

    // for(let i = 0; i <stapElems.length; i++){
    for(let i = ioIndex - 1; i < ioIndex + 2; i++){
      step = stapElems[i];
      if(!step) continue;
      boundingRect = step.getBoundingClientRect();

      if(boundingRect.top > window.innerHeight * 0.1 && boundingRect.top < window.innerHeight * 0.8 ){
        inactivate(currentItme.dataset.action);
        currentItme = graphicElems[step.dataset.index];
        activate(currentItme.dataset.action);
      }
    }
  });

  window.addEventListener('load', () => {
    setTimeout(() => scrollTo(0, 0), 10);
  });

  activate();
})();
