
let questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Management Language",
      "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What was Universiti Malaysia Terengganu (UMT) formerly known as before 2007?",
    options: ["Kolej Universiti Sains dan Teknologi Malaysia (KUSTEM)",
      "Universiti Sultan Zainal Abidin (UniSZA)",
      "Universiti Malaysia Pahang (UMP)",
      "Universiti Teknologi MARA (UiTM)"],
    answer: "Kolej Universiti Sains dan Teknologi Malaysia (KUSTEM)"
  },
  {
    question: "Where is the main campus of Universiti Malaysia Terengganu (UMT) located?",
    options: ["Kuala Nerus, Terengganu",
      "Kemaman, Terengganu",
      "Dungun, Terengganu",
      "Besut, Terengganu"],
    answer: "Kuala Nerus, Terengganu"
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: ["text-color", "font-color", "color", "background-color"],
    answer: "color"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["script", "javascript", "js", "scripting"],
    answer: "script"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 15;
let timer;


function shuffleQuestions() {
  questions.sort(function () {
    return Math.random() - 0.5;
  });
}


function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";

  timer = setInterval(function () {
    timeLeft--;
    document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(timer);
      document.getElementById("feedback").innerText =
        "Time's up! The correct answer was: " + questions[currentQuestion].answer;
      document.getElementById("feedback").style.color = "red";
      document.getElementById("submit-btn").style.display = "none";
      document.getElementById("next-btn").style.display = "inline-block";
    }
  }, 1000);
}

function displayQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question").innerText =
    (currentQuestion + 1) + ". " + q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (let i = 0; i < q.options.length; i++) {
    let label = document.createElement("label");
    label.className = "option-item";

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = q.options[i];

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + q.options[i]));
    optionsDiv.appendChild(label);
  }

  document.getElementById("feedback").innerText = "";
  document.getElementById("submit-btn").style.display = "inline-block";
  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer() {
  let radios = document.getElementsByName("option");
  let selectedAnswer = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedAnswer = radios[i].value;
    }
  }

  if (selectedAnswer === "") {
    alert("Please select an answer first!");
    return;
  }

  clearInterval(timer);


  for (let i = 0; i < radios.length; i++) {
    radios[i].disabled = true;
  }

  let feedback = document.getElementById("feedback");
  if (selectedAnswer === questions[currentQuestion].answer) {
    score++;
    feedback.innerText = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.innerText =
      "Incorrect! The correct answer is: " + questions[currentQuestion].answer;
    feedback.style.color = "red";
  }

  document.getElementById("submit-btn").style.display = "none";
  document.getElementById("next-btn").style.display = "inline-block";
}


function nextQuestion() {
  document.getElementById("score").innerText =
    "Current Score: " + score + " / " + questions.length;

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
    startTimer();
  } else {
    clearInterval(timer);
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("feedback-section").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("restart-btn").style.display = "inline-block";
    document.getElementById("score").innerText =
      "Quiz Completed! Final Score: " + score + " / " + questions.length;
  }
}


function startQuiz() {
  currentQuestion = 0;
  score = 0;

  document.getElementById("quiz-section").style.display = "block";
  document.getElementById("feedback-section").style.display = "block";
  document.getElementById("restart-btn").style.display = "none";
  document.getElementById("score").innerText = "";

  shuffleQuestions();
  displayQuestion();
  startTimer();
}

startQuiz();