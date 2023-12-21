// I declared correctAnswer, correct, and incorrect which start out with 0
let correctAnswer;
let correct = 0;
let incorrect = 0;
// constructor function constructs a new object over and over again ** like a blueprint of a obj with the same keys each time**
function Question(q, a, c) {
  this.question = q,
    this.answer = a,
    this.correct = c;
}
//this is a newInstance I am using the key word new and invoking the constructor function and adding values to my keys.  whatever falls in the first slot will be my question and the key will be my question.  Even if I put the answer in first the key will still be question b/c its the first slot. questionOne will be a object with kys/values
let questionOne = new Question(`Do elephants really grieve like a human being?`, [`No, they don't!`, `Yes they do!`, `I'm not really sure`, `Not at all!`], 1);
let questionTwo = new Question(`What is an elephants favorite snack?`,
  [`lettuce`, `watermelon`, `peanuts`, `or straw`], 2);
let questionThree = new Question(`What is the thickest part on an elephant?`,
  [`their trunks`, `their ears`, `their tongue`, `or their skin`], 3);
let questionFour = new Question(`How long until a baby elephant can stand up after being born?`, [`20 minutes`, `30 minutes`, `15 minutes`, `or 25 minutes`], 0);
let questionFive = new Question(`How can you tell the 3 different species of elephants apart?`,
  [`their skin`, `their ears `, `their herd`, `or their trunks`], 1);
let questionSix = new Question(`What are elephants constantly doing?`, [`they're drinking`, `they're sleeping`, `they're eating`, `or they're wandering around`], 2);
let questionSeven = new Question(`How do elephants communicate to another elephant?`, [`by touching one another`, `through virbations`, `by stomping the ground`, `or by standing by one another`], 1);
let questionEight = new Question(`What is one thing an elephant does not do?`, [`never goes hungry`, `never takes care of their baby`, `never sleeps`, `or forgets like a women`], 3);
let questionNine = new Question(`An elephants tusk is actually ______?`, [`wood`, `stone`, `a tooth`, `or bark`], 2);
let questionTen = new Question(`Elephants are the worlds ______ land animal?`, [`largest`, `smallest`, `heaviest`, `or the oldest`], 0);
let questionBank = []; //empty array
questionBank.push(questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen);
// using the .push its an array method and pushing each new obj into my empty array that was declared above
console.log(questionBank); //console logged my questionBank here
// create my function for askedQuestion
function askedQuestion() {
  $(`#instructionsHome`).hide(); //this will hide the instructions that show up on the landing page
  $(`#addYourQuestion`).hide(); // this will hide my addYourQuestion form/buttom
  if (questionBank.length === 0) {
    //this is for once you completed the quiz and it will let you know that you have got this many right and this many wrong
    $('#askedQuestions').html(`<div class="container shadow">
  <h1 class=" h1ForEndOfGame text-center mt-4">Thank You For Playing My Super Quiz!</h1>
  <h3 class="text-center mt-3 mb-3 fontColorForAllText">Whooo Hoo! <span class="correctGreen">You got ${correct} right!</span>
  I'm sorry!<span class="incorrectRed"> You got ${incorrect} wrong.</span></h3>
  <a class="fontColorForAllText reload offset-md-5 offset-4 mb-5" href="#">Click To Play Again!!!</a>
  <hr>
  </div>`);
    $('.reload').click(() => { location.reload() }); //this makes it to where when I hit play again it will reload the page and I can indeed chose to play or add a question again
    $(`#seeAnswers`).html(`
  <a class="fontColorForAllText border-light offset-md-5 mb-5" href="#" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Click here for the correct answers</a>
  <div class="row shadow">
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body bgCollapse fontColorForAllText">
          1.Do elephants really grieve like a human being?
          <br>
          * Yes, they do!
          <br>
          2.What is an elephants favorite snack?
          <br>
          * peanuts
          <br>
          3.What is the thickest part on an elephant?
          <br>
          * their skin
          <br>
          4.How long until a baby elephant can stand up after being born?
          <br>
          * 20 mins
          <br>
          5.How can you tell the 3 different species of elephants apart?
          <br>
          * their ears
          <br>
          6.What are elephants constantly doing?
          <br>
          * they're eating
          <br>
          7.How do elephants communicate to another elephant?
          <br>
          * through vibrations
          <br>
          8.What is one thing an elephant does not do?
          <br>
          * forgets like a women
          <br>
          9.An elephants tusk is actually ______?
          <br>
          * a tooth
          <br>
         10.Elephants are the worlds ______ land animal?
         <br>
         * largest
         <br>
        </div>
      </div>
    </div>
    </div>
  </div>`)
  } else {
    let questionDiv = document.getElementById(`askedQuestions`); // I grabbed the element by Id
    let random = Math.floor(Math.random() * questionBank.length); // I used Math.random that way it will be a different question everytime I reload the page
    let question = questionBank[random]; // question will be questionBank.random meaning it will be any of the 10 questions
    $(`#play`).hide(); // hides the play button
    // this is the form that will put my questions and answers in on my HTML page
    questionDiv.innerHTML = `<form id="currentQuestion">
<div class="container">
<div class="row justify-content-space-between">
  <!--Start of h4 and this is going to display the my questions  -->
  <h4 class="text-center mt-5 offset-1 questionFont" id="h1ForQuestions">${question.question}</h4>
  <!--here are the 4 buttons that will display my answers -->
   <button class="btn border answers offset-1 mb-md-5 mt-4 col-md-5" value="0">${question.answer[0]}</button>
   <button class="btn border answers offset-1 mb-md-5 mt-4 col-md-5" value="1">${question.answer[1]}</button>
   <button class="btn border answers offset-1 mb-md-5 mt-4 col-md-5" value="2">${question.answer[2]}</button>
   <button class="btn border answers offset-1 mb-5 mt-4 col-md-5" value="3">${question.answer[3]}</button>
<div>
</div>
</div>
</form>
`;
    // this is for the answers so when you click the right one or the wrong one it will you know!
    $('.answers').click(function (e) {
      e.preventDefault();
      let answer = parseInt($(this).val()); //I'm using parseInt that way i will get the value of the correct answer
      $(`.answers`).hide()
      let correctA = question.correct; //declared correctA here and gave it the value of the correct answer
      // my if else statement with conditions
      if (answer === correctA) {
        correct++; //adds up the correct answers
        $(e.target).addClass(`rounded-circle`).addClass(`btn-success`).text(`👏Way To Go!!!👏`).addClass(`offset-md-5`).show();
        // so when i turned in the super quiz the grader wanted to try and break my code and what happen was when he clicked on an answer he was able to click on mulitple ones so when he brought that to my attention I changed it to where once you click your answer it is the only one that will show up. So I used the class `answers` that are on all the buttons and then i did $(`.answers`).hide() and then once it was clicked on it will $(`.answers`).show();
        //It is a button so once its clicked and its the correct one this will display
      } else {
        incorrect++; // adds up the incorrect answers
        $(e.target).addClass(`btn-danger`).text(`👎Ooppss! I'm sorry!👎`).addClass(`rounded-circle`).addClass(`offset-md-5`).show();// It is a button so once its clicked and its the incorrect one this will display. I also changed it and put another class of offset-md-5 on it and then used the show method that way it will be the only answer you have clicked on the screen before it goes to the next question
      }
      questionBank.splice(random, 1); //this splice is so that all 10 questions will only show once and not repeat their selves
      setTimeout(askedQuestion, 1500); //this is the timeout to where once you clicked the answer of the question it will be 1.5 min before the new question will appear
    });
    console.log(questionBank);
  }
}
// this is the function to add their question and answers to the Super Quiz
function addYourQuestion(e) {
  // e.preventDefault makes it stop doing what is was originally doing in the first place
  e.preventDefault();
  let question = $(`#yourQuestion`).val(); //I grabbed all these by their IDs and had the value empty that way it will grab what their answers are on the form will be and push them on to the html page
  let answerOne = $(`#answerOne`).val();
  let answerTwo = $(`#answerTwo`).val();
  let answerThree = $(`#answerThree`).val();
  let answerFour = $(`#answerFour`).val();
  let answers = []; //empty array
  answers.push(answerOne, answerTwo, answerThree, answerFour); // I used .push method once again to push their answers into that empty array and will display onto the landing page
  let correct = parseInt($(`#correct`).val()); // this will give their correct answer with the value being empty until they have inserted their answer
  questionBank.push(new Question(question, answers, correct)); // i pushed their question, their answers, and their correct answer for the question and pushed in up into the empty array i created up there
  console.log(questionBank);
  // this is where once you created you question and inserted your answers in the modal once you click submit this will appear alerting that you question has added
  $(`.modal-body`).html(`<h4 class="text-center h4ForModal mb-3">Your Question Has Been Added To The Super Quiz! Enjoy!!!</h4>
<button class="btn btn-secondary border offset-5" data-bs-dismiss="modal">Close</button>`);
  $(`#addYourQuestion`).hide(); // this hides my button to add their question once its submitted
  $(`#instructionsHome`).hide(); // this hides the instructions on the landing page
}
