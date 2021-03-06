/* JS for WATS 3020 Text Adventure */
let playerName = "";
let choiceList = [];
let currentPage = null;

// Prompt for player's name

playerName = window.prompt("Please enter your name: ", "Shannon");

// Find current page needed, return page object
function getCurrentPage(slug) {
    return storyData[slug];
}
// Record current page choice.
function recordChoice(slug){
    choiceList.push(slug);
}

// Allow user to move back one page
function undoChoice() {
    choiceList.pop();
   if (choiceList.length === 0) {
        choiceList.push('p1');
   }
    return choiceList[choiceList.length-1];
}
// Change page to represent page chosen
function changePage(slug) {
    recordChoice(slug);
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
}

///////////////////////////////////////////////////
//////// Story Data //////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Only edit this data to change/enhance the story. Be sure to watch for how  //
// changes to the story data might affect the mechanisms that output the      //
// story.                                                                     //
////////////////////////////////////////////////////////////////////////////////
// NOTE: The data below is organized as a JS Object. The content for each     //
// page is stored using a "slug" -- a short alphanumeric identifier (for      //
// example, "p1", "p2", "homeEnd", etc.). Each page contains a `text`         //
// property and a `choices` property. The `choices` property is an Array that //
// contains all of the choices, including the slug that each choice should    //
// link to.                                                                   //
////////////////////////////////////////////////////////////////////////////////

var storyData = {
    title: "The Crow and the Fox",
    p1: {
        image: {
            url: 'crow-with-key.png',
            alttext: `Picture of a crow with a key in its beak.`
        },

        text: `You are a crow named ${playerName}. You are flying high above the
                countryside. You see a farm off to the West, and your home forest
                off to the East.`,

        choices: [
            {
                text: `Fly over the farm to the West.`,
                link: 'p2'
            }, {
                text: `Fly back home to your nest in the forest.`,
                link: 'homeEnd'
            }
        ]
    },
    homeEnd : {
        image: {
            url: 'cup-of-tea.png',
            alttext: `Picture of a cup of tea.`
        },

        text: `You return home to your comfy roost in the forest canopy and
                enjoy a hot cup of tea!
                <br><br>
                The End.`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    },
    p2 : {
        image: {
            url: 'piece-of-cheese.png',
            alttext: `Picture of cheese.`
        },
        text: `You fly over the Farm and see a piece of cheese lying on the
                picnic table. There are no people around that you can see. The
                cheese looks very tasty, but you are worried there might be a
                person or, even worse, a CAT lurking somewhere you can't see.`,
        choices: [
            {
                text: `Go for the cheese!`,
                link: 'p3'
            }, {
                text: `Decide it's not worth the risk and fly back to the forest.`,
                link: 'homeEnd'
            }
        ]
    },
    p3 : {
        image: {
            url: 'black-cat.jpeg',
            alttext: `Picture of a cat.`
        },
        text: `You swoop down and pluck the cheese from the table. Just as you
                grab hold of the cheese, the farmer's cat leaps onto the table
                ahead of you!`,
        choices: [
            {
                text: `Veer off to the left trying to avoid the cat.`,
                link: 'basketEnd'
            }, {
                text: `Fly directly at the cat, full steam ahead!`,
                link: 'p4'
            }
        ]
    },
    basketEnd : {
        image: {
            url: 'crow-with-key.png',
            alttext: `Picture of a crow with a key in its beak.`
        },
        text: `You fly directly into a picnic basket, which slams shut behind you.
                You are stuck until some kind human comes to open the basket.
                But at least the cat didn't eat you!
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p4 : {
        image: {
            url: 'oak-tree.png',
            alttext: `Picture of an oak tree.`
        },
        text: `You zoom towards the cat, who is surprised by the direct approach
                and leaps off the table. You pull up sharply and make it over the
                big oak tree to a safe cruising altitude. The sun is shining,
                the wind is beneath your wings, and you have a beak full of
                cheese.`,
        choices: [
            {
                text: `Find somewhere nice to eat your cheese.`,
                link: 'p5'
            }
        ]
    },
    p5 : {
        image: {
            url: 'Fox.jpg',
            alttext: `Picture of a fox.`
        },
        text: `You find a secluded fence post in the middle of a large field
                full of wildflowers. You decide this will be a wonderful place
                to have a snack.
                <br><br>
                Just as you settle down you see Mr. Fox strolling down the path
                towards your fence post.`,
        choices: [
            {
                text: `Say, "Hello Mr. Fox! Join me for cheese."`,
                link: 'shareCheese'
            }, {
                text: `Keep a wary eye on Mr. Fox.`,
                link: 'p6'
            }
        ]
    },
    shareCheese : {
        image: {
            url: 'blue-ribbon.jpeg',
            alttext: `Picture of a blue ribbon.`
        },
        text: `You hop down to the ground and Mr. Fox helps you break the cheese
                in half. He is very grateful to you for sharing your cheese, and
                he gives you a lovely ribbon for your nest.
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p6 : {
        image: {
            url: 'crow-singing.jpeg',
            alttext: `Picture of a crow singing.`
        },
        text: `Mr. Fox approaches and says, "Hello ${playerName}! It's been so
                long since we've seen each other. I've missed hearing your
                lovely singing voice. Won't you sing me a tune before I go?`,
        choices: [
            {
                text: `Sing a song for Mr. Fox.`,
                link: 'dropCheeseEnd'
            }, {
                text: `Remain silent.`,
                link: 'p7'
            }
        ]
    },
    dropCheeseEnd : {
        image: {
            url: 'crow-singing.jpeg',
            alttext: `Picture of a crow singing.`
        },
        text: `You open your beak to sing a lovely song, and your cheese comes
                tumbling out. Mr. Fox quickly snaps the cheese out of the air
                as it falls and gobbles it up!
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p7 : {
        image: {
            url: 'crow-with-key.png',
            alttext: `Picture of a crow with a key in its beak.`
        },
        text: `You remain silent through all of Mr. Fox's flattery. In the end,
                he knows you won't fall for his tricks, and he leaves you alone.
                <br><br>
                Finally able to relax in quiet, you enjoy your well-earned
                cheese.
                <br><br>
                The End`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    }
};



///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the game. You should only edit it if you are attempting a //
// stretch goal. Otherwise, this script calls the functions that you have     //
// created above.                                                             //
////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector('#story-title');
title.innerHTML = storyData.title;

let pageContent = document.querySelector('#story-text');
let pageImageParagraph = document.querySelector('#story-image-paragraph');
let choicesUL = document.querySelector('#choices');

function updatePage(page) {
    pageContent.innerHTML = page.text;
    pageImageParagraph.innerHTML = '';
    if (page.image !== undefined && page.image !== null) {
        let pageImage = document.createElement('img');
        pageImage.src = `/wats3020-text-adventure/images/${page.image.url}`;
        pageImageParagraph.appendChild(pageImage);
    }
    choicesUL.innerHTML = '';
    for (choice of page.choices){
        let newLI = document.createElement('li');
        newLI.innerHTML = choice.text;
        newLI.setAttribute('data-slug', choice.link);
        choicesUL.appendChild(newLI);
    }
    addEventListeners();
}

function addEventListeners(){
    let choices = document.querySelectorAll('#choices li');
    for (choice of choices){
        choice.addEventListener('click', function(e){
            console.log(`Moving to page: ${e.target.dataset.slug}`);
            changePage(e.target.dataset.slug);
        })
    }
}


let undo = document.querySelector('#undo');
undo.addEventListener('click', function(e){
    console.log('Undoing last choice.');
    let slug = undoChoice();
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
})

currentPage = storyData.p1;
updatePage(currentPage);

