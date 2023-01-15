// to minimize code, data is imported from json file
import language from './output.json' assert {type: 'json'};

// All text is changed when location hash is set to English, page reloads on click, and vice versa. 
 
  if (location.hash.substring(1) === "ukr") {
  }
  else if (location.hash.substring(1) === "eng") {
    var key, value; 
    const translation = Object.entries(language.translated)
    console.log(translation)
    for ([key, value] of translation) {
      var selector = "."+key 
      document.querySelector(selector).textContent = value}

    document.querySelector("#index").setAttribute("href", "./index.html#eng");
    document.querySelector("#indexMobile").setAttribute("href", "./index.html#eng");
    document.querySelector("#portfolio").setAttribute("href", "./portfolio.html#eng")
    document.querySelector("#portfolioMobile").setAttribute("href", "./portfolio.html#eng")
    
      
}

document.getElementById("ukr").addEventListener('click', function() {
  window.location.hash = "#ukr"
  location.reload(true);
});

document.getElementById("eng").addEventListener('click', function() {
  window.location.hash = "#eng"
  location.reload(true);
});

document.getElementById("ukrMob").addEventListener('click', function() {
  window.location.hash = "#ukr"
  location.reload(true);
});

document.getElementById("engMob").addEventListener('click', function() {
  window.location.hash = "#eng"
  location.reload(true);
});

