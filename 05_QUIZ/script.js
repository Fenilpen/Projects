document.addEventListener("DOMContentLoaded",()=>{

  const startBtn = document.getElementById("start-btn")
  const nextBtn = document.getElementById("next-btn")
  const restartBtn = document.getElementById("restart-btn")
  const questionContainer = document.getElementById("question-container")
  const questiontext = document.getElementById("question-text")
  const choicesList = document.getElementById("choices-list")
  const resultContainer = document.getElementById("result-container") 
  const scoreDisplay = document.getElementById('score')


  const questions = [

    {
      question: "what is the capital of Paris?",
      choices: ["paris","london","Berlin","Madrid"],
      answer: "Paris"
    },
    {
      question: "Which planet is known as the red planet?",
      choices: ["Mars","Venus","Jupiter","Saturn"],
      answer: "Mars"
    },
    {
      question: "Who wrote 'Hemlet'?",
      choices: ["charles dickens","Jane Austen","William Shakespeare","Mark Twain"],
      answer: "William Shakespeare"
    }
  ] 


    let currentQustionIndex = 0
    let score = 0
    let answered = false 

  startBtn.addEventListener('click',startQuiz)

  nextBtn.addEventListener('click',()=> {
        currentQustionIndex++
        if(currentQustionIndex < questions.length){
            showQuestion()
        }else {
            showResult()
        }
    })

  restartBtn.addEventListener("click",()=>{
        currentQustionIndex = 0
        score = 0
        resultContainer.classList.add('hidden')
        startQuiz()
    })

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }

  function showQuestion(){
        nextBtn.classList.add('hidden')
        questiontext.textContent = questions[currentQustionIndex].question;
        choicesList.innerHTML = ""; // clear previous choices
        answered = false;
        questions[currentQustionIndex].choices.forEach( choice => {
            const li = document.createElement('li')
            li.textContent = choice
            li.addEventListener('click',() => selectAnswer(choice))
            choicesList.appendChild(li)
        })
    }

  function selectAnswer(choice) {
    if (answered) return;
        answered = true;
    
        const correctAnswer = questions[currentQustionIndex].answer
        if(choice === correctAnswer){
            score++
        }
        
        nextBtn.classList.remove('hidden');
    }

  function showResult() {
        questionContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
        scoreDisplay.textContent = `${score} out of ${questions.length}` 
    }
}
