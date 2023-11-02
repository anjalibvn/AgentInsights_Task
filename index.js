



const quizData = [ 
    {
    question: "What is the capital of France?",
     options: ["New York", "London", "Paris", "Dublin"],
    correct: 2,
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo Da Vinci", "Claude Monet"],
        correct: 2,
    
    },
    {
    question:"Which CSS property is used to control the spacing between elements?",
     options: [
        "margin",
       " padding",
       "spacing", 
       "border-spacing"],
    correct: 1,
    },
    {
    question:
     "What is the JavaScript function used to select an HTML element by its id?",
    
    options: [
    "document.query",
    "getElementById",
    "selectElement",
    "findElementById"],
    
    },
];
    
//Step 2::Javascript Initialization
const quiz = document.querySelector("#quiz");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
 document.querySelectorAll(" #question, .option_1 , .option_2, .option_3, .option_4");

const submitBtn = document.querySelector("#submit");

let currentQuiz =0;
let score = 0;


//Step 3: Load Quiz Function
const loadQuiz =()=>{
  const {question, options} = quizData[currentQuiz];
  //console.log(question);
  questionElm.innerText = ` ${currentQuiz+1 }: ${question}`;
  options.forEach(
    (curOption, index)=> window[`option_${index+1}`].innerText=curOption  );

};

loadQuiz();

//Step-4 Get Selected Answer Function on button click

const getSelectedOption=()=>{
    let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem)=> curElem.checked);
};

const deselectedAnswers=()=>{
    answerElm.forEach((curElem)=> curElem.checked=false);
}

submitBtn.addEventListener('click', ()=>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
    if(selectedOptionIndex==quizData[currentQuiz].correct){
       score= score+1; 
    }
    currentQuiz++;
    if(currentQuiz< quizData.length ){
        deselectedAnswers();
        loadQuiz();  
    }
    else{
        quiz.innerHTML =`
        <div class="result"> 
        <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completion of quiz! </p>
        <button class="reload-button" onclick="location.reload()> Play Again </button>
        </div>  `;
    }

} )


