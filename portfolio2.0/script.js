/*======About Section Variables=====*/
const aboutTitle = document.getElementById("abTit") 
const aboutSubTitle = document.getElementById("subTit")
const aboutImage = document.getElementById("abIMg") 
const aboutContent = document.getElementById("abCont")
const aboutYear = document.getElementById("abYear")
const aboutProjects = document.getElementById("abProj")
const aboutCompanies = document.getElementById("abComp")
const aboutButton = document.getElementById("abBtn")


/*======Services Section Variables ====*/
const serviceTitle = document.getElementById("serTit")
const serviceSubtitle = document.getElementById("serSubTit")
const serviceContent = document.getElementById("serDiv")
const serviceContent2 = document.getElementById("serDiv2")
const serviceContent3 = document.getElementById("serDiv3")

/*=======Skills Section Variables======= */
const skillsTitle = document.getElementById("skillTit")
const skillsSubTitle = document.getElementById("skillSubTit")
const skilsColTilte = document.getElementById("colTit")
const skilsColTilte1 = document.getElementById("colTit2")
const skillsHtmlTitle = document.getElementById("htmlTit")
const skillsHtml = document.getElementById("html")
const skillsCssTitle = document.getElementById("cssTitle")
const skillsCss = document.getElementById("css")
const skillsJsTitle = document.getElementById("jsTitle")
const skillsJs = document.getElementById("js")
const skillsPhpTitle = document.getElementById("phpTitle")
const skillsPhp = document.getElementById("php")

const skillsWordPressTtitle = document.getElementById("wordTit")
const skillsWordPress = document.getElementById("word")
const skillsAdobeTitle = document.getElementById("photTit")
const skillsAdobe = document.getElementById("phot")
const skillsFigmaTitle = document.getElementById("figmaTit")
const skillsFigma = document.getElementById("figma")
const skillsSketchTitle = document.getElementById("sketchTit")
const skillsSketch = document.getElementById("sketch")


//========My Team Section Variables===========
const teamTitle = document.getElementById("teamTitle")
const teamSubTitle = document.getElementById("teamSubTitle")
const teamSlideCarusel = document.getElementById("slide")


//========Contacts Section Variables==========
const contactsTitle = document.getElementById("contTitle")
const contactsSubTitle = document.getElementById("contSubTitle")
const contentTitle = document.getElementById("contentTitle")
const contentSubTitle = document.getElementById("contentSubTitle")
const instaIcons = document.getElementById("insta")
const upWorkIcon = document.getElementById("upWork")
const gitHubIcons = document.getElementById("git")
const mesTitle = document.getElementById("mesTitle")
const mesSubTitle1 = document.getElementById("mesSubTitle1")
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const mesSubTitle2 = document.getElementById("mesSubTitle2")
const input3 = document.getElementById("input3")
const mesSubTitle3 = document.getElementById("mesSubTitle3")
const mesBtn = document.getElementById("mesBtn")
//========About Section Animation===========
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutTitle.classList.add("about__title-animation");
        
    } 
    console.log(scrollPos);
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutSubTitle.classList.add("about__title-animation");
       
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutImage.classList.add("about__img-animation");
       
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutContent.classList.add("about__cont-animation");
       
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutYear.classList.add("about__cont-animation");
       
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutProjects.classList.add("about__cont-animation");
       
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutCompanies.classList.add("about__cont-animation");
       
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 412) {
        aboutButton.classList.add("about__title-animation");
        
    }
    console.log(scrollPos);
});
//=========Services Section Animation========
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1120) {
        serviceTitle.classList.add("about__title-animation");
       
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1120) {
        serviceSubtitle.classList.add("about__title-animation");
       
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1120) {
        serviceContent.classList.add("about__img-animation");
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1120) {
        serviceContent2.classList.add("about__title-animation");
    } 
    
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1120) {
        serviceContent3.classList.add("about__cont-animation");
    } 
    
});
/*=======Skills Section Animation=======*/
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsSubTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skilsColTilte.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skilsColTilte1.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsHtmlTitle.classList.add("skills__animation");
    } 
});


window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsHtml.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsCss.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsCssTitle.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsJsTitle.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsJs.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsPhpTitle.classList.add("skills__animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsPhp.classList.add("skills__animation");
    } 
});



window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsWordPressTtitle.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsWordPress.classList.add("skills__animation1");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsAdobeTitle.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsAdobe.classList.add("skills__animation1");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsFigmaTitle.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsFigma.classList.add("skills__animation1");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsSketchTitle.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 1620) {
        skillsSketch.classList.add("skills__animation1");
    } 
});

/*=======Team Srection Animtion=======*/

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2220) {
        teamTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2220) {
        teamSubTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2220) {
        teamSlideCarusel.classList.add("about__title-animation");
    } 
});
/*=========Contacts Section Animation======== */
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        contactsTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        contactsSubTitle.classList.add("about__title-animation");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        contentTitle.classList.add("about__title-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        contentSubTitle.classList.add("about__title-animation");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        instaIcons.classList.add("about__cont-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        gitHubIcons.classList.add("about__cont-animation");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        upWorkIcon.classList.add("about__cont-animation");
    } 
});

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        mesTitle.classList.add("about__title-animation");
    } 
});


window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        mesSubTitle1.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        input1.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        mesSubTitle2.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        input2.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        mesSubTitle3.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        input3.classList.add("skills__animation1");
    } 
});
window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    if (scrollPos > 2920) {
        mesBtn.classList.add("about__title-animation");
    } 
})







