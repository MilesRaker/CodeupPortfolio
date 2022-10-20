"use strict"

// knowledge, skills, abilities array
// Eventually migrate to MySQL database, when course gets to MySQL material

let projects = [
    {id: 0, name: "Welcome.html", KSAs: [{name:"html", type:"language"}], description : "recreate a webpage in html from an image", url:"../html/welcome.html"},
]
let sortedProjects = [];
// desiredKSAs are chosen by the user, then used to sort projects displayed
let desiredKSAs = [];

/*let KSAs = [
    {id: 1, name: "html", type:"language"},
    {id: 2, name: "css", type:"language"},
    {id: 3, name: "JavaScript", type:"language"},
    {id: 4, name: "Java", type:"language"},
    {id: 5, name: "C#", type:"language"},
    {id: 6, name: "Python", type:"language"},
    {id: 7, name: "Bootstrap", type:"api"},
    {id: 8, name: "JQuery", type:"api"},
    {id: 9, name: "Mapbox", type:"api"}
]*/

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
/*    html += `<div class="KSA, ${KSA.type}, btn, btn-primary">`;
    html += `<input class="form-check-input" id="check-${KSA.name}" value=${KSA}>
<label for="check-${KSA.name}">${KSA.name}</label></div>`;
    html += `</div>`;*/

    return html;
}

/**
 * returns html of all KSAs present in projects array
 * @return {array} [htmlLanguage, htmlAPI] where each element is html*/
function renderKSAs(){
    let htmlLanguage = "";
    let htmlAPI = "";
    let KSAsArray = [];

    projects.forEach(function(project){
        project.KSAs.forEach(function(KSA){
            if(!KSAsArray.includes(KSA)){
                KSAsArray.push(KSA);
            }
        })


    })
    KSAsArray.forEach(function(KSA){
        if(KSA.type === "language") {
            htmlLanguage += renderKSA(KSA);
        } else if(KSA.type === "api"){
            htmlAPI += renderKSA(KSA);
        }
    })

    return [htmlLanguage, htmlAPI];
}

// initial load KSAs
let renderedHtml = renderKSAs();
$(`#KSA-language`).html(renderedHtml[0]);
$(`#KSA-API`).html(renderedHtml[1]);


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

function testLogging(){
    console.log(`desired KSA list:`);
    desiredKSAs.forEach(function(KSA){
        console.log(KSA);
    })
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
            if(desiredKSAs.length !== 0){
                sortedProjects.push(project);
            }
            // else if the project KSAs includes all desiredKSAs
            else if(matchingKSAs(project)) {
                sortedProjects.push(project);
            }
        })
    }
    renderProjects();
}

/**
 * helper for sortProjects() if statement
 * @return {boolean} if project KSAs match desiredKSAs*/
function matchingKSAs(project){
    let match = true;

    desiredKSAs.forEach(function(dKSA){
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