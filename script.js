let questions = document.querySelectorAll(".accordion-question");


questions.forEach(question => question.addEventListener("click", changeBoldClass));



function changeBoldClass(e) {
    questions.forEach(item => {
        item.classList.remove("bold")
        
        
    })
    e.target.classList.add("bold")
  }



