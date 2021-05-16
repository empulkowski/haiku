$(document).ready(function (){

    $("form").on("submit", addWord);
    $("button#generate").on("click", generateHaiku);
});

//Create a global two-dimensional array
let wordsBySyl = [
    [], // 0-character words (not possible)
    [["snooze"], ["wierd"]], // 1-character words
    [["tootsie"], ["happy"]],  // 2-character words
    [["banana"], ["bandanna"]], // 3-character words
    [["untangible"], ["fantastical"]],  // 4-character words
    [["superangelic"], ["momentarily"]],  // 5-character words
    [["extraterrestrial"], ["osteoporosis"]], // 6-character words
];

function addWord() {
    //get word from user
    let word = $("input#word").val();
    //count dashes to determine syllables
    let syllable = $("word");
    str.split("-").length;


    if (syllable < 6) {
        wordsBySyl[syllable].push(word);//somehow get rid of hyphens for push
    } else {
        $("p#output").text("Syllables must be between 1 and 7");//if word has more than 7 syllables return error message
    }
}

    function generateHaiku() {
        //pick random words from dictionary

        // let randomWord = wordsBySyl[(Math.random() * myArray.length) | 0];
        // myArray.push(randomWord);

        let random = Math.floor(Math.random() * wordsBySyl.length);

        wordArray = wordsBySyl[random];


                for (let wordArray of wordsBySyl) {
                for (let word of wordArray) {
                    $("p#output").append(word + " ");
                }

                // Break after each inner array
                $("p#output").append("<br>");

            }




        //build 3 lines of text

        //one with 5 syllbles, seven, 5

        //if line exceeds syllable accout choose another

        //diplay haiku
    }

