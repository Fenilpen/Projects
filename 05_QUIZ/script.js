let start = document.getElementById('Start-quiz')
let Qusbox = document.getElementById('Qustions')

let Qustions = {
    
    first: "What is the capital of Bharat",
    Optionone: ["Delhi","Indraprastha","B","none of above"],
    Answerone: "B",

    second: "total alphabets in ABCD",
    Options: ["26","32","4","3"],
    Answer: "4"

}

start.addEventListener("click",()=>{
    let First = document.createElement("div")
    First.classList.add("first")
    First.innerHTML = `${Qustions.first} <br>
    <input type="radio" name="" value="${Qustions.Optionone[0]}"> ${Qustions.Optionone[0]}
    <input type="radio" name="" value="${Qustions.Optionone[1]}"> ${Qustions.Optionone[1]} 
    <input type="radio" name="" value="${Qustions.Optionone[2]}"> ${Qustions.Optionone[2]}
    <input type="radio" name="" value="${Qustions.Optionone[3]}"> ${Qustions.Optionone[3]} 
    <br>
    <button data-id="answer-id">Submit</button>
    `
    Qusbox.appendChild(First)
})

Qusbox.addEventListener("click",(e)=>{    
    if(e.target.tagName === "BUTTON"){
        let find = e.target.parentElement.children
        
        for(let i = 0; i <= find.length; i++){
            if(find[i].checked){
            
                if(find[i].value === "Delhi"){
                    console.log("true");
                    
                }
                // console.log(find[i].value);
            }
        }
        console.log(e);
        
        
    }
})
