
        var startGameEl = document.querySelector("#start-game");
        var questions = document.querySelector("#questions");
        var intro = document.querySelector("#intro");
        var questionEl = document.querySelector("#question");
        var choicesEl = document.querySelector("#choices");
        var resultEl = document.querySelector("#result");
        var timerEl = document.querySelector("#timer");
        var scoreEl = document.querySelector("#score");;
        var timer = 120;
        var score = 0;
        var question = [
            {
                question: "How many continents are there in th world?",
                choices: ["1", "2", "3", "7"],
                answer: "7",
            },
            {
                question: "Which one is not a mammal?",
                choices: ["Cow", "Bear", "Whale", "Chicken"],
                answer: "Chicken",
            },
            {
                question: "How many colors are there in the USA flag?",
                choices: ["8", "2", "3", "7"],
                answer: "3",
            },
            {
                question: "This is not a character in Harry Potter",
                choices: ["Harry", "Hermione", "Ron", "Bugs Bunny"],
                answer: "Bugs Bunny",
            },
            {
                question: "How many Harry Potter movies are there?",
                choices: ["1", "2", "3", "8"],
                answer: "8",
            },
            
        ];
        var questionIndex = 0;

        function startTimer() {
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    timerEl.textContent = timer;
                } else {
                    endGame();
                }
            }, 1000);
        }

        function startGame() {
            intro.setAttribute("class", "hide");
            updateQuestion();
            questions.setAttribute("class", "show");
            timerEl.setAttribute("class", "show");

            scoreEl.setAttribute("class","show")
            startTimer();
            scoreEl.textContent = score;
        }

        function updateQuestion() {
            if (questionIndex === question.length) {
                setTimeout(endGame, 1500);
                return;
            }

            questionEl.textContent = question[questionIndex].question;
            choicesEl.innerHTML = "";
            resultEl.innerHTML = "";

            for (var i = 0; i < question[questionIndex].choices.length; i++) {
                var element = document.createElement("li");
                element.textContent = question[questionIndex].choices[i];
                choicesEl.appendChild(element);
            }
        }

        function endGame() {
            questions.setAttribute("class", "hide");
            resultEl.textContent = "Game Over";
            timerEl.setAttribute("class", "hide");
        }

        choicesEl.addEventListener("click", function (event) {
            var target = event.target;
            
            if (target.matches("li")) {
                
                if (target.textContent === question[questionIndex].answer) {
                    resultEl.textContent = "Correct";
                    score++;
                    scoreEl.textContent = score;

                } else {
                    resultEl.textContent = "Incorrect";
                    timer = timer - 2;
                }

                questionIndex++;
                setTimeout(updateQuestion, 1500);
            }
        });

        startGameEl.addEventListener("click", startGame);
    
