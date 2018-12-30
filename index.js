function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  
}

function increaseRankBy(n) {
  const rls = document.querySelectorAll('.ranked-list li');

  for(let i = 0; i < rls.length; i++) {
    rls[i].innerHTML += 1;
  }
}