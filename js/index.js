"use strict"

// knowledge, skills, abilities array
// Eventually migrate to MySQL database, when course gets to MySQL material

let projects = [
    {id: 0, name: "Welcome.html", KSAs: [{name:"html", type:"language"}, {name:"css", type:"language"}], description : "Recreate a webpage in html from an image, add external css", url:"html/welcome.html"},
    {id: 1, name: "Github.html", KSAs: [{name:"html", type:"language"}], description : "Recreate Github's teams page layout in a file named github.html", url:"html/github.html"},
    {id: 2, name: "Forms.html", KSAs: [{name:"html", type:"language"}, {name: "forms", type: "skill"}], description : "Create html form according to specs provided by CodeUp", url:"html/forms.html"},
    {id: 3, name: "CSS Selectors", KSAs: [{name: "css", type: "language"}], description : "Use external css to style a provided html", url:"html/css_selectors.html"},
    {id: 4, name: "Login Form", KSAs: [{name: "css", type: "language"}, {name: "forms", type: "skill"}], description : "Use external css to style a provided login form html", url:"html/login-form.html"},
    {id: 5, name: "Twitter Clone", KSAs: [{name: "css", type: "language"}], description : "Use external css to style a provided twitter html", url:"html/twitter.html"},
    {id: 6, name: "Flexbox Fundamentals", KSAs: [{name: "css", type: "language"}, {name: "flexbox", type:"skill"}], description : "edit existing CSS to match a wireframe for a card component", url:"html/flexbox-fundamentals-exercise.html"},
    {id: 7, name: "Flexbox Form Practice", KSAs: [{name:"html", type:"language"}, {name: "forms", type: "skill"}, {name: "css", type: "language"}, {name: "flexbox", type:"skill"}], description : "Create a centered form using flex box from wireframe", url:"html/flex-form.html"},
    {id: 8, name: "Flexbox Cards", KSAs: [{name: "css", type: "language"}, {name: "flexbox", type:"skill"}], description : "Read through comments at the end of css file and add the appropriate flex properties to it.", url:"html/flexbox-cards.html"},
    {id: 9, name: "Flexbox Navbar", KSAs: [{name:"html", type:"language"}, {name:"google-fonts", type:"api"}, {name:"font-awesome", type:"api"}, {name: "css", type: "language"}, {name: "flexbox", type:"skill"}], description : "Create NavBar and Footer from provided wireframe.", url:"html/flexbox-nav-exercise.html"},
    {id: 10, name: "Media Queries", KSAs: [{name:"responsive", type:"skill"}, {name:"font-awesome", type:"api"}, {name: "css", type: "language"}, {name: "flexbox", type:"skill"}], description : "Use media Queries to make a basic webpage responsive.", url:"html/media-queries.html"},
    {id: 11, name: "Pizza Order", KSAs: [{name:"javascript", type:"language"}, {name:"responsive", type:"skill"}, {name:"font-awesome", type:"api"}, {name: "bootstrap", type: "api"}], description : "Design a Pizza Ordering webpage using bootstrap.", url:"html/order-pizza.html"},
    {id: 12, name: "T-Block Resume", KSAs: [{name:"responsive", type:"skill"}, {name: "bootstrap", type: "api"}, {name: "css", type: "language"}], description : "Design a resume according to a given wireframe using bootstrap.", url:"html/T-Resume.html"},
    {id: 13, name: "Paired Programming 1", KSAs: [{name:"html", type:"language"}, {name:"paired-programming", type:"skill"}, {name:"responsive", type:"skill"}, {name: "bootstrap", type: "api"}, {name: "css", type: "language"}, ], description : "Create a responsive website for the fictional company Codeup Design through paired programming. My partner was Josef Fussel", url:"html/codeupDesign.html"},
    {id: 14, name: "Hello, JavaScript", KSAs: [{name:"javascript", type:"language"} ], description : "Introduction to JavaScript, using external .js files, console.log(), and alert(), confirm(), prompt()", url:"html/external_js.html"},
    {id: 15, name: "JavaScript Functions", KSAs: [{name:"javascript", type:"language"}, {name:"functions", type:"skill"} ], description : "Introduction to JavaScript functions", url:"html/functions_js.html"},
    {id: 16, name: "JavaScript Conditionals", KSAs: [{name:"javascript", type:"language"}, {name:"conditionals", type:"skill"} ], description : "Introduction to JavaScript conditionals", url:"html/conditionals.html"},
    {id: 17, name: "JavaScript Unit Testing", KSAs: [{name:"javascript", type:"language"}, {name:"unit-testing", type:"skill"} ], description : "Introduction to JavaScript Unit Testing", url:"html/unitTesting.html"},
    {id: 18, name: "JavaScript Loops", KSAs: [{name:"javascript", type:"language"}, {name:"loops", type:"skill"} ], description : "Introduction to JavaScript loops", url:"html/loops.html"},
    {id: 19, name: "JavaScript Iterating Arrays", KSAs: [{name:"javascript", type:"language"}, {name:"arrays", type:"skill"} ], description : "Introduction to JavaScript arrays", url:"html/iterating_arrays_js.html"},
    {id: 20, name: "JavaScript String Manipulation", KSAs: [{name:"javascript", type:"language"}, {name:"strings", type:"skill"} ], description : "Introduction to JavaScript strings", url:"html/planets-js.html"},
    {id: 21, name: "JavaScript Objects", KSAs: [{name:"javascript", type:"language"}, {name:"objects", type:"skill"} ], description : "Introduction to JavaScript objects", url:"html/objects.html"},
    {id: 22, name: "JavaScript Math Object", KSAs: [{name:"javascript", type:"language"}, {name:"Math object", type:"skill"} ], description : "Introduction to JavaScript Math object", url:"html/math-js.html"},
    {id: 23, name: "JavaScript BOM", KSAs: [{name:"javascript", type:"language"}, {name:"BOM", type:"skill"} ], description : "Introduction to JavaScript BOM", url:"html/defuse-the-bom.html"},
    {id: 24, name: "JavaScript DOM", KSAs: [{name:"javascript", type:"language"}, {name:"DOM", type:"skill"} ], description : "Introduction to JavaScript DOM", url:"html/dom-query-js.html"},
    {id: 25, name: "JQuery Selectors and Events", KSAs: [{name:"javascript", type:"language"}, {name:"JQuery", type:"api"} ], description : "Introduction to JQuery selectors and events", url:"html/jquery_exercises.html"},
    {id: 26, name: "JQuery FAQ", KSAs: [{name:"javascript", type:"language"}, {name:"JQuery", type:"api"} ], description : "JQuery methods", url:"html/jquery_faq.html"},
    {id: 27, name: "Ajax Request Introduction", KSAs: [{name:"javascript", type:"language"}, {name:"ajax", type:"api"} ], description : "Introduction to Ajax", url:"html/ajax-store.html"},
    {id: 28, name: "Ajax Blog", KSAs: [{name:"javascript", type:"language"}, {name:"ajax", type:"api"} ], description : "Load blog posts from external JSON file", url:"html/ajax-blog.html"},
    {id: 29, name: "Mapbox API with Ajax", KSAs: [{name:"javascript", type:"language"}, {name:"ajax", type:"api"}, {name:"mapbox", type:"api"} ], description : "Use MapboxGL api to complete exercises", url:"html/mapbox_maps_api.html"},
    {id: 30, name: "Personal Portfolio", KSAs: [{name:"wireframe", type:"skill"}, {name:"css", type:"language"}, {name:"html", type:"language"}, {name:"javascript", type:"language"}, {name:"JQuery", type:"api"}, {name:"bootstrap", type:"api"} ], description : "Create a website that presents work from Codeup to potential employers. You are currently viewing and using this project.", url:"index.html"},

]
// desiredKSAs are chosen by the user, then used to sort projects displayed
let desiredKSAs = [];
let sortedProjects = [];


/**
 * Returns html of single KSA
 * @param {KSA} KSA be rendered
 * @return {string} html of input KSA*/
function renderKSA(KSA){
    let html = "";
    html += `<input class="form-check-input, KSA-check" type="checkbox" data-name="${KSA.name}" data-type="${KSA.type}" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      ${KSA.name}
    </label>`

    return html;
}

/**
 * returns html of all KSAs present in projects array
 * @return {array} [htmlLanguage, htmlAPI] where each element is html*/
function renderKSAs(){
    let htmlLanguage = "";
    let htmlAPI = "";
    let htmlSkills ="";
    let KSAsArray = [];

    projects.forEach(function(project){
        project.KSAs.forEach(function(KSA){
            // .includes only works for primitives
            // refactor to findIndex(matchingFunction());
            // findIndex's matching function, if element.name === KSA.name, ect
            if(KSAsArray.findIndex(function(element){return (element.name === KSA.name) && (element.type === KSA.type)}) < 0){
                KSAsArray.push(KSA);
            }
        })


    })
    KSAsArray.forEach(function(KSA){
        if(KSA.type === "language") {
            htmlLanguage += renderKSA(KSA);
        } else if(KSA.type === "api"){
            htmlAPI += renderKSA(KSA);
        } else if(KSA.type === "skill"){
            htmlSkills += renderKSA(KSA);
        }
    })

    return [htmlLanguage, htmlAPI, htmlSkills];
}

// initial load KSAs
let renderedHtml = renderKSAs();
$(`#KSA-language`).html(renderedHtml[0]);
$(`#KSA-API`).html(renderedHtml[1]);
$(`#KSA-skill`).html(renderedHtml[2]);
sortProjects();

// Project Search Feature
/* search schemes:
* tic desired KSAs
* active filtering of projects
* KSA list and project list on same page at larger screens
*
* at smaller screens search feature waits for button press,
* then displays relevant projects after clearing KSA screen
* include a back-to-search button
*
* */


$(`.KSA-check`).change(toggleDesiredKSA);

/**
 * updates desiredKSAs array depending on which KSA box is
 * ticked or unticked
 * @param {object}  e checkbox element on change
 * */
function toggleDesiredKSA(e){

    let KSA = {name: e.target.dataset.name, type: e.target.dataset.type}
    if(e.target.checked){
        if(!desiredKSAs.includes(KSA)){
            desiredKSAs.push(KSA);
        }
    } else {
        let index = desiredKSAs.findIndex( (desiredKSA) => {
            return desiredKSA.name === KSA.name && desiredKSA.type === KSA.type;
        });
        if(index > -1){
            desiredKSAs.splice(index, 1);
        }
    }

    sortProjects();
}

/**
 * updates sortedProjects array
 * call everytime desiredKSAs array changes*/
function sortProjects(){
    // if a project includes a desiredKSA, then include it in sortedProjects
    // clear sortedProjects on each call. Build it fresh
    sortedProjects = []
     {
        projects.forEach(function (project) {
            // if zero dKSAs, push every project
            if(desiredKSAs.length === 0){
                sortedProjects.push(project);
            }
            // else if the project KSAs includes all desiredKSAs
            else if(matchingKSAs(project, desiredKSAs)) {
                sortedProjects.push(project);
            }
        })
    }
    renderProjects();
}

/**
 * helper for sortProjects() if statement
 * @param {object} project project object
 * @param {array} KSAList array of KSA objects
 * @return {boolean} if project KSAs includes all KSAs in KSAList*/
function matchingKSAs(project, KSAList){
    let match = true;

    KSAList.forEach(function(dKSA){
        if(project.KSAs.findIndex((element) => element.name === dKSA.name && element.type === dKSA.type) < 0){
            match = false;
        }
    })
    return match;
}

/**
 * builds html for each project and updates innerHTML of projects div
 * @return {void} no return*/
function renderProjects(){
    let html = "";

    sortedProjects.forEach(function(project){
        html += renderProject(project);
    })

    $(`#project-container`).html(html);
}

/**
 * creates proper html for one project
 * @param {object} project project object
 * @return {string} html of input object*/
function renderProject(project){
    let html = "";
    html += `
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            <p class="card-text">Link to: <a href="${project.url}">${project.name}</a></p>
        </div>
    </div>`

    return html;
}