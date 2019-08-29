let question = 0;
let rightScore = 0;
let wrongScore = 0;

/*-----------------------------------------Handles the first Ready button----------------------*/
function handleReadyButton(event){
    $('.greetingMain').on('click','.greetingSubmitButton', function(event){
        event.preventDefault();
        renderPage();
        console.log("Test");
});
}
/*---------------------------------------------------------------------------------------------*/
/*--------This will render the question page everytime a button is selected *******PLEASE HELP ON THIS FORM*****--------------------*/
function renderPage(){
    console.log(STORE);
    console.log(question);
        $('.newPage').remove();
        $('body').attr('class', 'OpeningPage');
        $('.OpeningPage').append('<div class = newPage><header class="header">' +
        '<h1 class="questionTitle"><img class="logo left" src="https://www.destructoid.com//ul/262753-destiny.jpg" alt="Destiny 1 Box Art">Destiny Quiz<img class="logo right" src="https://i.redd.it/qchrru6vt7dz.jpg" alt="Destiny 2 Logo"></h1>' +
    '</header>' +
    '<main class="main">' +
        '<div class="quizCounter">' +
            '<p class="questionCounter">Question ' + (question + 1)  + ' of 10</p>' +
            '<p class="scoreCounter">Score ' + rightScore + ' out of 10</p>' +
        '</div>' +      
        '<form id="questionAndAnswer">' +
                '<fieldset>' +
                        '<legend class="currentQuestion">' + STORE[question].prompt + '</legend>' +
                            '<div class = "answers">' +
                                '<label for="possibleAnswers1"><input id= "possibleAnswers1" type="radio" name="question1" value="0" required/>' + STORE[question].answers[0] + '</label><br>' +
                                '<label for="possibleAnswers2"><input id= "possibleAnswers2" type="radio" name="question1" value="1" required/>' + STORE[question].answers[1] +  '</label><br>' +
                                '<label for="possibleAnswers3"><input id= "possibleAnswers3" type="radio" name="question1" value="2" required/>' + STORE[question].answers[2] + '</label><br>' +
                                '<label for="possibleAnswers4"><input id= "possibleAnswers4" type="radio" name="question1" value="3" required/>' + STORE[question].answers[3] + '</label><br>' +
                            
                            '</div>' +
                            '<input class="questionsubmitButton" type="submit" value="Submit">' +
                            '<div class="questions"></div>' +
                                    
                '</fieldset>' +
        '</form></div>')
        
    };



/*---------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------Renders Correct Page---------------------------------------------------*/
function correctAnswer(){
    console.log(STORE[question-1]);
    $('.newPage').remove();
    $('.OpeningPage').append('<div class ="newPage"><header class="header">' +
    '<h1 class="correctTitle"><img class="logo left" src="https://pwntastic-avatar-production.s3.amazonaws.com/uploads/user/avatar/264188/main_Cayde_6.png" alt="Cayde Thumbs Up">Correct!!!!!!<img class="logo right" src="https://i.imgur.com/qlTdyrR.jpg" alt="Happy Zavala"></h1>' +
'</header>' +
'<main class="correctMain">' +
    '<div class="correctCounter">' +
        '<p class="correctScore">' + rightScore + ' of 10 correct</p>' +
        '<p class="wrong">' + wrongScore + ' of 10 incorrect </p>' +
        '<p class="lore">' + STORE[question-1].extraLore + '</p>' +
    '</div>' +      
    '<input class="submitButton" type="submit" value="Next Question">' +        
'</main></div>');
$('body').attr('class', 'correct');
}
/*--------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------Render Incorrect Page ----------------------------------------------------*/
function wrongAnswer(){
    $('.newPage').remove();
    let showAnswer = STORE[question-1].correctIndx;
    console.log(showAnswer);
    $('.OpeningPage').append('<div class = "newPage"><header class="header">' +
    '<h1 class="incorrectTitle"><img class="incorrectLogoLeft" src="https://img05.deviantart.net/201c/i/2015/166/8/5/oryx__the_taken_king_by_b1izzardhawkfa-d8xhffu.png" alt="Oryx">***Incorrect***<img class="incorrectLogoRight" src="https://cdn.vox-cdn.com/thumbor/xDzUsp6lU_D6tVJaZjpKxwjuiKg=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/64702054/calus.0.png" alt="Emperor Calus"></h1>' +
'</header>' +
'<main class="correctMain">' +
    '<div class="incorrectCounter">' +
        '<p class="correctScore">' + rightScore + ' of 10 correct</p>' +
        '<p class="wrong">' + wrongScore + ' of 10 incorrect </p>' +
        '<p class="givenAnswer"> The correct answer was: ' + STORE[question-1].answers[showAnswer] + '</p>' +
    '</div>' +      
'<input class="submitButton" type="submit" value="Next Question">' +        
'</main></div>');
$('body').attr('class', 'incorrect');
}

/*---------------------------------------------------------------------------------------------------------------------*/
/*----------------------This will render the end game Screen with Final Score-----------------------------------------*/
function renderEndGame(){
    $('.newPage').remove();
    $('body').attr('class', 'OpeningPage');
    $('.OpeningPage').append('<div class = newPage><header class="header">' +
    '<h1 class="greeting"><img class="logo left" src="https://cdn.images.express.co.uk/img/dynamic/143/590x/Destiny-s-Iron-Banner-returns-for-Rise-of-Iron-717946.jpg" alt="Guardians Assembled">All questions completed<img class="logo right" src="https://i0.wp.com/metro.co.uk/wp-content/uploads/2017/07/d2_pvp_heroic_02_1500378118.jpg?quality=90&strip=all&zoom=1&resize=644%2C362&ssl=1" alt="Destiny Logo"></h1>' +
'</header>'+
    '<main class="greetingMain">' +
        '<div class="ready">' +
            '<h2 class="endGame">Your score is:<br>' + rightScore + ' out of 10 correct<br>' + wrongScore + ' out of 10 incorrect</h2>' +
            '<h2 class="endGame">Would you like to play again?</h2>' +
        '</div>' +      
    '<input class="resetButton" type="submit" value="Reset Game">' +        
'</main></div>')
};
/*-------------------------------------------------------------------------------------------------------------------*/
/*-----This will listen for a Submit Selection on the question page and react accordingly if its correct of not-----*/

function rightOrWrong(){
    $('.OpeningPage').on('click','.questionsubmitButton', function(event){
        event.preventDefault();
        let playerSelects = $('input:checked');
        let valueSelects = playerSelects.val();
        console.log(valueSelects);
        let rightIndex = STORE[question].correctIndx;

            if(valueSelects == rightIndex){
                questionCounter();
                rightScoreCounter();
                correctAnswer();
            }else if(valueSelects == null){
                alert("Please Select an answer.")
            }
            else{
                questionCounter();
                wrongScoreCounter();
                wrongAnswer();
            }
    });   
}
/*----------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Call the next Question------------------------------------------------*/
function nextQuestion(){
    $('.OpeningPage').on('click','.submitButton', function(event){
        event.preventDefault();
        console.log(question);
        if (question + 1 <= 10){
            renderPage();
        }else{
            renderEndGame();
        }
        
    });
}
/*---------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------This will listen for the reset button and reset the game-------------------------*/
function reset(){
    $('.OpeningPage').on('click','.resetButton', function(event){
        console.log("Reset Button");
        location.reload();
        
    });
}
/*----------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------This will keep track of the question you on----------------------------------------*/
function questionCounter(){
    question++;
};
/*----------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------This will keep track of the amt correct--------------------------------------------*/
function rightScoreCounter(){
    rightScore++;
};
/*-----------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------This will keep track of the amt incorrect--------------------------------------------*/
function wrongScoreCounter(){
    wrongScore++;
};



function createQuiz() {
    handleReadyButton();
    rightOrWrong();
    nextQuestion();
    reset();
    
}

$(createQuiz);