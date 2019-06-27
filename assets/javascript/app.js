$(document).ready(function() {

    // Array of questions & answers in object form

    let questions = [
        {
            question: "Which famous Marvel character made his first appearance in Amazing Fantasy #15 in 1962?",
            choices: ["The Human Torch", "Spider-Man", "Thor", "Professor X"],
            correctAnswer: "Spider-Man",
            answer: "Spider-Man made his first appearance in Amazing Fantasy #15 back in the summer of 1962. The Amazing Fantasy book was cancelled after that issue but the sales for that single issue were so great that the Marvel publisher agreed to print The Amazing Spider-Man the following year.",
            image: "<img src='assets/images/Spider-Man.png' class=''>"
        },
        {
            question: "Which well-known comic writer wrote the Watchmen for DC in 1986?",
            choices: ["Alan Moore", "Frank Miller", "Grant Morrison", "Garth Ennis"],
            correctAnswer: "Alan Moore",
            answer: "Alan Moore wrote the Watchmen originally as a 12-issue series that was collected into a trade paperback and which was then recognized in Time's List of 100 Best Novels.",
            image: "<img src='assets/images/Watchmen.jpg' class=''>"
        },
        {
            question: "Which Marvel character first appeared in Journey into Mystery #83 in 1962?",
            choices: ["Doctor Strange", "Daredevil", "Thor", "Hulk"],
            correctAnswer: "Thor",
            answer: "Thor became a mainstay in Journey into Mystery starting with issue #97 until eventually the title was changed to The Mighty Thor with issue #126 in 1966.",
            image: "<img src='assets/images/Thor.jpg' class=''>"
        },
        {
            question: "Which character was NOT a part of the original X-Men from Marvel?",
            choices: ["Iceman", "Cyclops", "Wolverine", "Beast"],
            correctAnswer: "Wolverine",
            answer: "Wolverine didn't first appear until The Incredible Hulk #181 in 1974 while the the X-Men was released in 1963. He didn't join the X-Men until 1975.",
            image: "<img src='assets/images/X-Men.jpg' class=''>"
        },
        {
            question: "Speedy is the sidekick of which DC character?",
            choices: ["Batman", "The Flash", "Superman", "Green Arrow"],
            correctAnswer: "Green Arrow",
            answer: "Even though the name would lead you to think he would be the sidekick for the Flash, Speedy (aka Roy Harper) is actually the sidekick of Green Arrow. The Flash's sidekick is actually Kid Flash. The misleading name was actually a punchline in the anmiated series Young Justice about the sidekicks of the DC characters forming their own team where both Speedy and Kid Flash appeared.",
            image: "<img src='assets/images/Speedy_Harper.jpg' class=''>"
        },
        {
            question: "What was the color the Hulk when he first appeared in 1962?",
            choices: ["Grey", "Green", "Black", "Red"],
            correctAnswer: "Grey",
            answer: "The Hulk was actually grey in his first appearance at Stan Lee's request but due to the issue with the printing company keeping the grey color consistent throughout the issue Stan decided to change the color to green in later issues.",
            image: "<img src='assets/images/Hulk.jpg' class=''>"
        },
        {
            question: "Which writer wrote for both DC and Marvel and released popular storylines for similar charaters in 1986?",
            choices: ["Alan Moore", "Todd McFarlane", "Frank Miller", "Grant Morrison"],
            correctAnswer: "Frank Miller",
            answer: "Frank Miller wrote the popular Dark Knight Returns for DC and the Born Again storyline for Marvel's Daredevil. Both were released in that year.",
            image: "<img src='assets/images/Dark_knight_returns.jpg' class=''>"
        },
        {
            question: "Which villain was NOT originally a part of Batman's rogues gallery of villains?",
            choices: ["Clayface", "Poison Ivy", "Two-Face", "Harley Quinn"],
            correctAnswer: "Harley Quinn",
            answer: "Harley Quinn was not one of Batman's rogues in the comics. The character was created specifically for the Batman: The Animated Series in 1992 but the character proved to be very popular that her character was introduced the following year in The Batman Adventures #12.",
            image: "<img src='assets/images/Harley_Quinn_and_Joker.png' class=''>"
        },
        {
            question: "Who has NOT been the Green Lantern of Earth?",
            choices: ["Hal Jordan", "Guy Gardner", "Alec Holland", "John Stewart"],
            correctAnswer: "Alec Holland",
            answer: "Dr. Alec Holland was not a Green Lantern though he turned green when he became Swamp Thing.",
            image: "<img src='assets/images/Swamp_Thing.png' class=''>"
        },
        {
            question: "Which graphic novel has characters from classic science fiction and horror novels from the 1800's team up to save the world?",
            choices: ["From Hell", "League of Extraordinary Gentlemen", "V for Vendetta", "Saga"],
            correctAnswer: "League of Extraordinary Gentlemen",
            answer: "The League of Extraordinary Gentlemen was written by Alan Moore and stars characters like Allan Quatermain, Captain Nemo, Dr. Jekyll/Mr. Hyde, and the Invisible Man fighting to stop a war between Fu Manchu and Professor Moriarty and prevent an invasion from the aliens from H.G. Wells War of the Worlds.",
            image: "<img src='assets/images/League_of_Extraordinary_Gentlemen.jpg' class=''>"
        }
    ];

    // VARIABLES
    // This var keeps track which question user is on
    let questionCounter = 0;

    // These vars initialize the scores for how many answers user got right or wrong or just timed out
    let correctScore = 0;
    let incorrectScore = 0;
    let unansweredScore = 0;

    // This var sets the time for each question to 15 seconds
    let time = 15;


    // FUNCTIONS
    // Function the generates the questions and choices
    function renderQuestion() {
        // Writes the question to the #quiz div 
        let q = questions[questionCounter];
        $("#quiz").append(q.question);
        // generate an OL element to list all the choices for each question
        //let choicesList = $("<ol>");
        // Loop to generate all the choices and add them to the OL element
        for (let i = 0; i < q.choices.length; i++) {
            $("#quiz").append($("<div class='choices mx-auto'>").text(q.choices[i]));
        }
        // questionDiv.append(choicesList, choice1, choice2, choice3, choice4);
        //$("#quiz").append(choicesList);
    }
    // Function to start the timer at 15 seconds & count down. If time runs out, the timer stops and triggers the userTimeout function
    function timer() {
        clock = setInterval(countDown, 1000);
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                userTimeout();
            } else if (time > 0) {
                time--;
            }
            $("#timer").html("<b>" + time + "</b>");
        }
    }

    // Function to move to the next question or to the quiz score
    function nextQuestion() {
        // Checks to see if reached the end of the questions array
        if (questionCounter < questions.length) {
            // Places the count down timer above the questions & run the renderQuestion, timer & (if necessary) userTimeout functions
            time = 15;
            $("#quiz").html("<p>You have <span id='timer'>" + time + "</span> seconds left</p>");
            renderQuestion();
            timer();
            userTimeout();
        }
        // If at the end of the array, generate the quiz score
        else {
            scoreRender();
        }
        console.log(questionCounter);
        //console.log(questions[questionCounter].correctAnswer);
    }

    // Function that triggers when the user gets the correct answer
    function userWins() {
        $("#quiz").html("<p>Correct!</p>");
        correctScore++;
        console.log(correctScore);
        let answer = questions[questionCounter].answer;
        let image = questions[questionCounter].image;
        $("#quiz").append("<p>" + answer + "</p>" + image);
        setTimeout(nextQuestion, 3000);
        questionCounter++;
        console.log(questionCounter);
    }

    // Function that triggers when the user gets the answer wrong
    function userLoss() {
        $("#quiz").html("<p>Nope!</p>");
        incorrectScore++;
        console.log(incorrectScore);
        let answer = questions[questionCounter].answer;
        let image = questions[questionCounter].image;
        $("#quiz").append("<p>" + answer + "</p>" + image);
        setTimeout(nextQuestion, 3000);
        questionCounter++;
        console.log(questionCounter);
    }

    // Function that triggers when the user times out
    function userTimeout() {
        if (time === 0) {
            $("#quiz").html("<p>You ran out of time!</p>");
            unansweredScore++;
            console.log(unansweredScore);
            let answer = questions[questionCounter].answer;
            let image = questions[questionCounter].image;
            $("#quiz").append("<p>" + answer + "</p>" + image);
            setTimeout(nextQuestion, 3000);
            questionCounter++;
            console.log(questionCounter);
        }
    }

    // Function that starts the game
    function startQuiz() {
        $("#quiz").html("<p>You have <span id='timer'>" + time + "</span> seconds left</p>");
        $("#start").hide();
        renderQuestion();
        timer();
        userTimeout();
    }

    // Function that restarts the game and resets all counters to 0
    function restartQuiz() {
        questionCounter = 0;
        correctScore = 0;
        incorrectScore = 0;
        unansweredScore = 0;
        startQuiz();
    }

    function scoreRender() {
        //$("#quiz").hide();
        //let scoreDiv = $("<div id='score'>");
        $("#quiz").html($("<h3>Correct Answers: " + correctScore + "</h3"));
        $("#quiz").append($("<h3>Incorrect Answers: " + incorrectScore + "</h3"));
        $("#quiz").append($("<h3>Unanswered Questions: " + unansweredScore + "</h3"));
        $("#quiz").append($("<p><button type='button' class='btn btn-dark btn-lg' id='start'>Restart Quiz</button></p>"));
        //$("#quiz").append(correctAnswer, incorrectAnswer, unAnswer, startOver);
        //$("#quiz").append(correctAnswer);//   , incorrectAnswer, unAnswer, startOver);
        //restartQuiz();
        $("#start").click(restartQuiz);
    }

    // Click Event to start the game
    $("#start").click(startQuiz);

    // Click event triggered on the right or wrong answer
    $("#quiz").on("click", ".choices", (function() {
        // alert(.choices);
        var userGuess = $(this).text();
        if (userGuess === questions[questionCounter].correctAnswer) {
            clearInterval(clock);
            userWins();
        } else {
            clearInterval(clock);
            userLoss();
        }
    }));

});