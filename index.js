function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return const grandNode = document.querySelector('div#grand-node');
}

function increaseRankBy(n) {
  const rls = document.querySelectorAll('.ranked-list li');

  for(let i = 0; i < rls.length; i++) {
    const currentRank = parseInt(rls[i].innerHTML, 10);
    rls[i].innerHTML = `${currentRank + n}`;
  }
}
