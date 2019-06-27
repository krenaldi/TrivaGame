$(document).ready(function() {

// Array of questions & answers in object form

let questions = [
    {
        question: "Which famous Marvel character made his first appearance in Amazing Fantasy #15 in 1962?",
        choices: ["The Human Torch", "Spider-Man", "Thor", "Professor X"],
        correct: "Spider-Man",
        answer: "Spider-Man made his first appearance in Amazing Fantasy #15 back in the summer of 1962. The Amazing Fantasy book was cancelled after that issue but the sales for that single issue were so great that the Marvel publisher agreed to print The Amazing Spider-Man the following year.",
        image: "<img src='assets/images/Spider-Man.png' class=''>"
    },
    {
        question: "Which well-known comic writer wrote the Watchmen for DC in 1986?",
        choices: ["Alan Moore", "Frank Miller", "Grant Morrison", "Garth Ennis"],
        correct: "Alan Moore",
        answer: "Alan Moore wrote the Watchmen originally as a 12-issue series that was collected into a trade paperback and which was then recognized in Time's List of 100 Best Novels.",
        image: "<img src='assets/images/Watchmen.jpg' class=''>"
    },
    {
        question: "Which Marvel chcaracter first appeared in Journey into Mystery #83 in 1962?",
        choices: ["Doctor Strange", "Daredevil", "Thor", "Hulk"], 
        correct: "Thor",
        answer: "Thor became a mainstay in Journey into Mystery starting with issue #97 until eventually the title was changed to The Mighty Thor with issue #126 in 1966.",
        image: "<img src='assets/images/Thor.jpg' class=''>"
    },
    {
        question: "Which character was NOT a part of the original X-Men from Marvel?",
        choices: ["Iceman", "Cyclops", "Wolverine", "Beast"], 
        correct: "Wolverine",
        answer: "Wolverine didn't first appear until The Incredible Hulk #181 in 1974 while the the X-Men was released in 1963. He didn't join the X-Men until 1975.",
        image: "<img src='assets/images/X-Men.jpg' class=''>"
    },
    {
        question: "Speedy is the sidekick of which DC character?",
        choices: ["Batman", "The Flash", "Superman", "Green Arrow"], 
        correct: "Green Arrow",
        answer: "Even though the name would lead you to think he would be the sidekick for the Flash, Speedy (aka Roy Harper) is actually the sidekick of Green Arrow. The Flash's sidekick is actually Kid Flash. The misleading name was actually a punchline in the anmiated series Young Justice about the sidekicks of the DC characters forming their own team where both Speedy and Kid Flash appeared.",
        image: "<img src='assets/images/Speedy_Harper.jpg' class=''>"
    },
    {
        question: "What was the color the Hulk when he first appeared in 1962?",
        choices: ["Grey", "Green", "Black", "Red"],
        correct: "Grey",
        answer: "The Hulk was actually grey in his first appearance at Stan Lee's request but due to the issue with the printing company keeping the grey color consistent throughout the issue Stan decided to change the color to green in later issues.",
        image: "<img src='assets/images/Hulk.jpg' class=''>"
    },
    {
        question: "Which writer wrote for both DC and Marvel and released popular storylines for similar charaters in 1986?",
        choices: ["Alan Moore", "Todd McFarlane", "Frank Miller", "Grant Morrison"],
        correct: "Frank Miller",
        answer: "Frank Miller wrote the popular Dark Knight Returns for DC and the Born Again storyline for Marvel's Daredevil. Both were released in that year.",
        image: "<img src='assets/images/Dark_knight_returns.jpg' class=''>"
    },
    {
        question: "Which villain was NOT originally a part of Batman's rogues gallery of villains?",
        choices: ["Clayface", "Poison Ivy", "Two-Face", "Harley Quinn"],
        correct: "Harley Quinn",
        answer: "Harley Quinn was not one of Batman's rogues in the comics. The character was created specifically for the Batman: The Animated Series in 1992 but the character proved to be very popular that her character was introduced the following year in the The Batman Adventures #12.",
        image: "<img src='assets/images/Harley_Quinn_and_Joker.png' class=''>"
    },
    {
        question: "Who has NOT been the Green Lantern of Earth?",
        choices: ["Hal Jordan", "Guy Gardner", "Alec Holland", "John Stewart"],
        correct: "Alec Holland",
        answer: "Dr. Alec Holland was not a Green Lantern though he turned green when he became Swamp Thing.",
        image: "<img src='assets/images/Swamp_Thing.png' class=''>"
    },
    {
        question: "Which graphic novel has characters from classic science fiction and horror novels from the 1800's team up to save the world?",
        choices: ["From Hell", "League of Extraordinary Gentlemen", "V for Vendetta", "Saga"],
        correct: "League of Extraordinary Gentlemen",
        answer: "The League of Extraordinary Gentlemen was written by Alan Moore and stars characters like Allan Quatermain, Captain Nemo, Dr. Jekyll/Mr. Hyde, and the Invisible Man fighting to stop a war between Fu Manchu and Professor Moriarty and prevent an invasion from the aliens from H.G. Wells War of the Worlds.",
        image: "<img src='assets/images/League_of_Extraordinary_Gentlemen.jpg' class=''>"
    }
];

// GLOBAL VARIABLES
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let correctScore = 0;
let incorrectScore = 0;
let unansweredScore = 0;
let timer;
let count = 0;


// FUNCTIONS

function renderQuestion() {
    let q = questions[runningQuestion];
    let questionDiv = $("<div id='question'>").text(q.question);
    let choicesList = $("<ol>");
    let choice1 = $("<li class='choices' [id='A'>").text(q.choices);[
    let choice2 = $("<li class='choiceB' id='B'>").text(q.choiceB);
    let choice3 = $("<li class='choiceC' id='C'>").text(q.choiceC);
    let choice4 = $("<li class='choiceD' id='D'>").text(q.choiceD);
    questionDiv.append(choicesList, choice1, choice2, choice3, choice4);
}

function renderCounter() {
    if(count <= questionTime){
        renderCounter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else {
        count=0;
    }
}

function startQuiz() {
    $("#start").hide();
    renderQuestion();
    renderCounter();
    timer = setInterval(renderCounter, 1000);
    console.log(renderQuestion);
}

function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        correctScore++;
        console.log(correctScore);
    }else if(count = 0){
        unansweredScore++;
        console.log(unansweredScore);
    } else {
        incorrectScore++;
        console.log(incorrectScore);
    }
}

function scoreRender(){
    let scoreDiv = $("#score");
    let correctAnswer = $("<h3>Correct Answers: " + correctScore + "</h3");
    let incorrectAnswer = $("<h3>Incorrect Answers: " + incorrectScore + "</h3");
    let unAnswer = $("<h3>Unanswered Questions: " + unansweredScore + "</h3");
    scoreDiv.append(correctAnswer, incorrectAnswer, unAnswer);
}
});