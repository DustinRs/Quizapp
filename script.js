let questions = [
  {
    question:
      "Wie heißt die Schicht der Atmosphäre, die der Erde am nächsten ist?",
    answer_1: "Stratosphäre",
    answer_2: "Mesosphäre",
    answer_3: "Troposphäre",
    answer_4: "Thermosphäre",
    right_answer: 3,
  },
  {
    question: "Wie hoch ist der Eiffelturm?",
    answer_1: "150m",
    answer_2: "176m",
    answer_3: "220m",
    answer_4: "300m",
    right_answer: 4,
  },
  {
    question: "In welchem Jahr wurde Michael Jackson geboren?",
    answer_1: "1958",
    answer_2: "1959",
    answer_3: "1965",
    answer_4: "1934",
    right_answer: 1,
  },
];

let rightQuestions = 0;
let currentQuestion = 0;

function init() {
  document.getElementById("all-Questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) { //Show endscreen
    document.getElementById('endScreen').style = '';
    document.getElementById('QuestionBody').style = 'Display: none';
    document.getElementById('ofAllQuestions').innerHTML = questions.length;
    document.getElementById('rightQuestions').innerHTML = rightQuestions;
    document.getElementById('header-image').src = './img/cup.png';
  } else { //Show question
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent*100);
    document.getElementById('percentProgressBar').innerHTML = `${percent}%`;
    document.getElementById('percentProgressBar').style.width = `${percent}%`;
    let question = questions[currentQuestion];

    document.getElementById("Current-Question").innerHTML = currentQuestion + 1;
    document.getElementById("Question").innerHTML = question["question"];
    document.getElementById("answer1").innerHTML = question["answer_1"];
    document.getElementById("answer2").innerHTML = question["answer_2"];
    document.getElementById("answer3").innerHTML = question["answer_3"];
    document.getElementById("answer4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);

  let idOfRightAnswer = `answer${question["right_answer"]}`;

  if (selectedQuestionNumber == question["right_answer"]) {
    document
      .getElementById(selection)
      .parentNode.classList.add("bg-success", "text-light");
      rightQuestions++;
  } else {
    document
      .getElementById(selection)
      .parentNode.classList.add("bg-danger", "text-light");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success", "text-light");
  }
  document.getElementById("next-Button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-Button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document
    .getElementById("answer1")
    .parentNode.classList.remove("bg-danger", "text-light");
  document
    .getElementById("answer1")
    .parentNode.classList.remove("bg-success", "text-light");
  document
    .getElementById("answer2")
    .parentNode.classList.remove("bg-danger", "text-light");
  document
    .getElementById("answer2")
    .parentNode.classList.remove("bg-success", "text-light");
  document
    .getElementById("answer3")
    .parentNode.classList.remove("bg-danger", "text-light");
  document
    .getElementById("answer3")
    .parentNode.classList.remove("bg-success", "text-light");
  document
    .getElementById("answer4")
    .parentNode.classList.remove("bg-danger", "text-light");
  document
    .getElementById("answer4")
    .parentNode.classList.remove("bg-success", "text-light");
}

function restartGame() {
    document.getElementById('header-image').src = './img/quiz.jpg';
    document.getElementById('endScreen').style = 'Display: none';
    document.getElementById('QuestionBody').style = '';
    
    rightQuestions = 0;
    currentQuestion = 0;
    init();
    
}