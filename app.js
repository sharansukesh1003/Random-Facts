fetch('https://uselessfacts.jsph.pl/random.json?language=en')
  .then(response => response.json())
  .then(data => 
    {const facts = data.text;
     const randomFacts = document.getElementById('randomFacts');
     const hide = document.getElementById('hide');
     const unHide = document.getElementById('unHide');
     const hideDivider = document.getElementById('hideDivider');
     hideDivider.classList.remove('hide');
     unHide.classList.remove('hide');
     hide.classList.add('hide');
     randomFacts.innerHTML = facts;
    });