const questionSet = [
    {
        number: 1,
        question: 'Which Bravolebrity has not had a recorded hit?',
        answer1:'Bethenny Frankel',
        answer2:'Melissa Gorga',
        answer3:'Luann De Lesseps',
        answer4:'Kim Zolciak',
        correct: 'Bethenny Frankel'
    },
    {
        number:2,
        question:'Which Bravolebrity duo opened a new restaurant in West Hollywood?',
        answer1:'Shep Rose and Craig Canover',
        answer2:'Nene Leakes and Cynthia Bailey',
        answer3:'Tom Schwartz and Tom Sandoval',
        answer4: 'Vicki Gunvalson and Tamra Judge',
        correct: 'Tom Schwartz and Tom Sandoval'
    },
    {
        number:3,
        question: 'Which Bravolebrity does the splits any chance she gets?',
        answer1:'Karin Huger',
        answer2:'Kyle Richards',
        answer3:'Lisa Vanderpump',
        answer4:'Patricia Altschul',
        correct:'Kyle Richards',
    },
    {
        number: 4,
        question: 'Which Bravolebrity loves wine and “Turtle Time”?',
        answer1:'Cameron Eubanks',
        answer2:'Brittany Cartwright',
        answer3:'Dorit Kemsley',
        answer4:'Ramona Singer',
        correct:'Ramona Singer'
    },
    {
        number: 5,
        question:'Which Bravolebrity is the Stud of the Sea?',
        answer1: 'Lee Rosbach',
        answer2: 'Jax Taylor',
        answer3: 'Mauricio Umansky',
        answer4: 'Ken Todd',
        correct: 'Lee Rosbach'
    },
    {
        number: 6,
        question:'Which Bravolebrity is the ex wife of Charlie Sheen and newest member of Beverly Hills?',
        answer1: 'Erika Jayne',
        answer2: 'Stassi Schoeder',
        answer3: 'Denise Richards',
        answer4: 'Sonja Morgan',
        correct: 'Denise Richards'
    },

    {
        number:7,
        question: 'Which Bravolebrity starred in Glee as swim coach Roz Washington?',
        answer1:'Lisa Rinna',
        answer2:'Nene Leakes',
        answer3:'Kandi Burruss',
        answer4:'Camille Grammar',
        correct:'Nene Leakes'
    },
    {
        number: 8,
        question: 'Which Bravolebrity “Made it Nice”?',
        answer1:'Dorinda Medley',
        answer2:'Caroline Manzo',
        answer3:'Kate Chastain',
        answer4:'Tinsley Mortimer',
        correct:'Dorinda Medley'
    },
    {
        number: 9,
        question:'Which Bravolebrity is most famous for flipping a table in a rage?',
        answer1:'Brandi Redmond',
        answer2:'Lala Kent',
        answer3:'Shannon Bedor',
        answer4:'Teresa Guidice',
        correct:'Teresa Guidice'
    },
    {
        number: 10,
        question:'Which Bravolebrity is Gone with the Wind fablous?',
        answer1: 'LeAnne Locken',
        answer2: 'Danielle Staub',
        answer3: 'Kim Richards',
        answer4: 'Kenya Moore',
        correct: 'Kenya Moore'
    }
];


// //User selects button to start quiz
let questionNumber = 0;
let score = 0;
function questionForm (){
    if (questionNumber < questionSet.length){

        return `<form>
          <fieldset>
            <legend class="question">
              <h2>${questionSet[questionNumber].question}</h2>
            </legend>
            <input type="radio" name="character" id="answer1" class="answer">
            <label for="answer1">${questionSet[questionNumber].answer1}</label>
            <br>
            <input type="radio" name="character" id="answer2" class="answer">
            <label for="answer2">${questionSet[questionNumber].answer2}</label>
            <br>
            <input type="radio" name="character" id="answer3" class="answer">
            <label for="answer3">${questionSet[questionNumber].answer3}</label>
            <br>
            <input type="radio" name="character" id="answer4" class="answer">
            <label for="answer4">${questionSet[questionNumber].answer4}</label>
          </fieldset>
          <button id="js-submit-button" class="button-style">submit</button>
        </form>`}
}

function questionCounter(){
    questionNumber++;
    let questionTotal = questionNumber;
    $('.questionOutOf').text('question ' + questionTotal +'/10');
}

function startQuiz() {
    $(".js-startQuestion").on("click", '.js-startButton', function(){
            $('.js-startQuestion').remove();
            questionCounter();
        }
    )
}

function displayQuiz(){
    $('.mainContainer').html(questionForm());
}


function answerSelect (){
    $('form').on('#js-next-button', function (event){
        event.preventdefault();
        let correctAnswer = `${questionSet[questionNumber].correct}`;
        let checked = $('input:checked');
        let userAnswer = checked.val();
        if (correctAnswer === userAnswer){
            checked.parent().addClass('.correct');
        } else {
            checked.parent().addClass('.incorrect');
        }
    });
}

startQuiz();
displayQuiz();
