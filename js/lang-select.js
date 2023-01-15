// to minimize code, data is imported from json file
import language from './dict.json' assert {type: 'json'};


// All text is changed when location hash is set to English, page reloads on click, and vice versa. 
 
  if (location.hash.substring(1) === "ukr") {
  }
  else if (location.hash.substring(1) === "eng") {
    studio.textContent = language.eng.studio;
    portfolio.textContent = language.eng.portfolio;
    contacts.textContent = language.eng.contacts;
    mobileContacts.textContent = language.eng.mobileContacts;
    mobilePortfolio.textContent = language.eng.mobilePortfolio;
    mobileStudio.textContent = language.eng.mobileStudio;
    heroTitle.textContent = language.eng.heroTitle;
    orderService.textContent = language.eng.orderService;
    ourBenefits.textContent = language.eng.ourBenefits;
    attentionToDetails.textContent = language.eng.attentionToDetails;
    ideas.textContent = language.eng.ideas;
    punctuality.textContent = language.eng.punctuality;
    punctualityParagraph.textContent = language.eng.punctualityParagraph;
    planning.textContent = language.eng.planning;
    planningParagraph.textContent = language.eng.planningParagraph;
    technologies.textContent = language.eng.technologies;
    technologiesParagraph.textContent = language.eng.technologiesParagraph;
    whatAreWe.textContent = language.eng.whatAreWe;
    desktopApp.textContent = language.eng.desktopApp;
    mobileApp.textContent = language.eng.mobileApp;
    designs.textContent = language.eng.designs;
    team.textContent = language.eng.team;
    teamMember1.textContent = language.eng.teamMember1;
    teamMember2.textContent = language.eng.teamMember2;
    teamMember3.textContent = language.eng.teamMember3;
    teamMember4.textContent = language.eng.teamMember4;
    regularCustomers.textContent = language.eng.regularCustomers;
    address.textContent = language.eng.address;
    joinIn.textContent = language.eng.joinIn;
    subscribeTitle.textContent = language.eng.subscribeTitle;
    subButton.textContent = language.eng.subButton;
    modalTitle.textContent = language.eng.modalTitle;
    sendBtn.textContent = language.eng.sendBtn;
    commentar.textContent = language.eng.commentar;
    ePost.textContent = language.eng.ePost;
    phone.textContent = language.eng.phone;
    firstname.textContent = language.eng.firstname;
    conditions.textContent = language.eng.conditions;
    document.querySelector('#agree').firstChild.nodeValue = language.eng.agree;
    document.getElementById("comment").setAttribute("placeholder", language.eng.placeholder);
    document.querySelector("#portfolio").setAttribute("href", "./portfolio.html#eng");
    document.querySelector("#mobilePortfolio").setAttribute("href", "./portfolio.html#eng");
    
    document.querySelector("#studio").setAttribute("href", "./index.html#eng");
    document.querySelector("#mobileStudio").setAttribute("href", "./index.html#eng")
    
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



