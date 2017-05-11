"use strict";

console.log("ShitDamn You Code Like A Pro");

let Handlebars = require('hbsfy/runtime'),
    cakeInventory = require('./bakery.js'),
    cakeTemplate = require('../templates/cake-grid.hbs'),
    eventStuff = require('./events.js'),
    welcomeTemplate = require('../templates/welcome.hbs'),
    welcomeData = require('../javascripts/welcome-data.js');

Handlebars.registerHelper("increment", (value) => parseInt(value) + 1);
$("#welcome").append(welcomeTemplate(welcomeData));

function populatePage(stuff) {
    // MAKE A DIV TO HOLD REDERED HTML
    let newDiv = document.createElement('div');
    newDiv.innerHTML = cakeTemplate(stuff);
    $('#cake-cards').append(newDiv);
}


cakeInventory.loadInventory()
.then(
    (data) => {populatePage(data);},
    console.error('suuuuuuucks')
);
