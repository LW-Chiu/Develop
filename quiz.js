const start = document.getElementById("start");
const description = document.getElementById("description");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "請問這項作品是由哪位大師創作?",
        imgSrc : "https://collections.culture.tw/ShowGALImage.aspx?FROM=OPENDATA&SYSUID=18&IMG1=0x01000000629a07e6a6b83aa16d6d828311f7a10d52d7abb943bc4fca0199ea0109f1ea6143ed104dcb921a4a9a9117781cd86cff",
        choiceA : "秦裕芳",
        choiceB : "吳偉烈",
        choiceC : "李汝匡",
        choiceD : "馬叔禮",
        correct : "C"
    },{
        question : "請問這項作品為何種分類的創作?",
        imgSrc : "https://collections.culture.tw/ShowGALImage.aspx?FROM=OPENDATA&SYSUID=18&IMG1=0x01000000629a07e6a6b83aa16d6d828311f7a10d52d7abb943bc4fca0199ea0109f1ea6143ed104dcb921a4a9a9117781cd86cff",
        choiceA : "總統府移交類",
        choiceB : "工藝文物類",
        choiceC : "攝影印刷類",
        choiceD : "平面書畫類",
        correct : "D"
    },{
        question : "請問這幅作品的作者籍貫?",
        imgSrc : "https://collections.culture.tw/ShowGALImage.aspx?FROM=OPENDATA&SYSUID=18&IMG1=0x01000000629a07e6a6b83aa16d6d828311f7a10d52d7abb943bc4fca0199ea0109f1ea6143ed104dcb921a4a9a9117781cd86cff",
        choiceA : "浙江",
        choiceB : "廣東",
        choiceC : "湖南",
        choiceD : "河南",
        correct : "B"
    },{
        question : "請問創造出這項藏品的大師自命為?",
        imgSrc : "https://collections.culture.tw/ShowGALImage.aspx?FROM=OPENDATA&SYSUID=18&IMG1=0x01000000629a07e6a6b83aa16d6d828311f7a10d52d7abb943bc4fca0199ea0109f1ea6143ed104dcb921a4a9a9117781cd86cff",
        choiceA : "嶺南傳人",
        choiceB : "作育英才",
        choiceC : "中國名家",
        choiceD : "無所不能",
        correct : "A"
    }
];

// create some variables
let runningQuestion = Math.floor(Math.random()*4);

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    description.style.display = "none";
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    let qIndex = runningQuestion
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
}

// checkAnwer
function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // change progress color to green
        answerIsCorrect();
        CorrectRender()
        setTimeout(function() { 
            window.close();
        }, 1000);
    }else{
        // change progress color to red
        answerIsWrong();
        WrongRender();
    }
    setTimeout(function() { 
        window.location.reload(1); 
    }, 1500);

}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function WrongRender(){
    scoreDiv.style.display = "block";
    // choose the image based on the scorePerCent
    scoreDiv.innerHTML += "<p>"+"答案錯誤"+"<br>"+"請等待題目產生再挑戰一次"+ "</p>";
}

function CorrectRender(){
    scoreDiv.style.display = "block";
    // choose the image based on the scorePerCent
    scoreDiv.innerHTML += "<p>"+"恭喜正確"+"<br>"+"請等待頁面跳轉"+ "</p>";
}