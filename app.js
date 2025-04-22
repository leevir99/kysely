document.addEventListener("DOMContentLoaded", () => {
  const kysymykset = [];

  const vaihtoehdot = [
    { teksti: "Kyllä", oikein: true },
    { teksti: "Ei", oikein: false }
  ];

  kysymykset.push({
    teksti: "Siistiä?",
    vaihtoehdot: vaihtoehdot
  });

  kysymykset.push({
    teksti: "Toimiiko?",
    vaihtoehdot: vaihtoehdot
  });

  document.querySelector('#seuraava').addEventListener('click', () => {
    shuffleArray(kysymykset);
    asetaKysymys(kysymykset[0]);
  });
});

function asetaKysymys(kysymys) {
  asetaKysymysteksti(kysymys.teksti);
  asetaVastausvaihtoehdot(kysymys.vaihtoehdot);
}

function asetaKysymysteksti(teksti) {
  document.querySelector('#kysymys').textContent = teksti;
}

function asetaVastausvaihtoehdot(vaihtoehdot) {
  const container = document.querySelector('#vastaukset');
  container.innerHTML = '';

  for (let i = 0; i < vaihtoehdot.length; i++) {
    lisaaVastausvaihtoehto(vaihtoehdot[i]);
  }
}

function lisaaVastausvaihtoehto(vaihtoehto) {
  const elementti = document.createElement('div');
  elementti.className = 'vaihtoehto';
  elementti.textContent = vaihtoehto.teksti;

  elementti.addEventListener('click', () => {
    elementti.textContent = vaihtoehto.oikein ? 'oikein!' : 'väärin!';
  });

  document.querySelector('#vastaukset').appendChild(elementti);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
