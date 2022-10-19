"use strict"

// knowledge, skills, abilities array
// Eventually migrate to MySQL database, when course gets to MySQL material
// ToDo: add relevant links
// ToDo: add more KSAs
// ToDo: add technical abilities
let KSAs = [
    {id: 1, name: "html", type:"language"},
    {id: 2, name: "css", type:"language"},
    {id: 3, name: "JavaScript", type:"language"},
    {id: 4, name: "Java", type:"language"},
    {id: 5, name: "C#", type:"language"},
    {id: 6, name: "Python", type:"language"},
    {id: 7, name: "Bootstrap", type:"api"},
    {id: 8, name: "JQuery", type:"api"},
    {id: 9, name: "Mapbox", type:"api"}
]

/**
 * Returns html of single KSA
 * @param {KSA} KSA be rendered
 * @return {string} html of input KSA*/
function renderKSA(KSA){
    let html = "";
    html += `<div class="KSA, ${KSA.type}">`;
    html += `<h5>${KSA.name}</h5>`;
    html += `</div>`;

    return html;
}

/**
 * returns html of all KSAs in input KSAs array
 * @param {array} KSAsArray an array of KSA objects
 * @return {array} [htmlLanguage, htmlAPI] where each element is html*/
function renderKSAs(KSAsArray){
    let htmlLanguage = "";
    let htmlAPI = "";

    KSAsArray.forEach(function(KSA){
        if(KSA.type === "language") {
            htmlLanguage += renderKSA(KSA);
        } else if(KSA.type === "api"){
            htmlAPI += renderKSA(KSA);
        }
    })

    return [htmlLanguage, htmlAPI];
}

// initial load KSA
let renderedHtml = renderKSAs(KSAs);
$(`#KSA-language`).html(renderedHtml[0]);
$(`#KSA-API`).html(renderedHtml[1]);
