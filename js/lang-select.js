let dataReload = document.querySelectorAll(["data-reload"])
console.log(dataReload)

// to minimize code, data is imported from json file
import language from './dict.json' assert {type: 'json'};

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
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
    agree.textContent = language.eng.agree;
    // zzz.textContent = language.eng.zzz;
    
}
}

     
    for (let i=0; i<=dataReload.length; i++) {
        console.log (i)
        dataReload[i].onclick = function () {
            location.reload(true)
        }
    };
