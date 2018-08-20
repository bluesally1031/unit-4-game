// * The player wins if their total score matches the random number from the beginning of the game.
// * The player loses if their score goes above the random number.
// * The game restarts whenever the player wins or loses.

// ##### Option 1 Game design notes

// * Each crystal should have a random hidden value between 1 - 12.

$(".crystals").on("click", ".crystal", function(){
    // add a specific amount of points to the player's total score.
    // update the player's score counter.
})

function startGame () {
    // new random number
    randomNum = getRandomNum(19, 120);
    // reset user's score will to zero.

    // all the crystals will have four new hidden values
    for (let i = 0; i < images.length; i++) {
        var imageButton = getImageButton(images[i])
        // push to array of imageButtons and append after the loop.
        // append imageButton in loop right here
    }
}

function getImageButton (URL) {
//use jQuery to make and return image
// use jquery to add data-value attribute and make equasl to getRandomNum function

}

function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var wins=0;
var losses=0;

var randomNum;

var scoreCounter;

//4 URLs for crystals
var images = ["URL", "URL", "URL", "URL"];
