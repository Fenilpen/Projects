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

  startBtn.addEventListener('click',startQuiz)

    function startQuiz() {
        startBtn.classList.add('hidden');
        resultContainer.classList.add('hidden')
        questionContainer.classList.remove('hidden')
        showQuestion()
    }
  
}
