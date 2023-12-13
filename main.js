fetch("faq.json")
.then((response) => response.json())
.then((data) => {
    //check whether data from json shown or not
    console.log(data);

    //show ques and and in console log
    data.faqs.map((sv) => {
        console.log(sv.ques);
        console.log(sv.ans);
    })

    //add question and answer in html 

    const faqContainer = document.querySelector(".faqContainer");
    faqContainer.innerHTML = "";

    data.faqs.map((suny) => {
        const html = `<div class="faqContainer">
        <div class="question">
          <button class="btn1">${suny.ques}
            <div class="faqIcons">
              <ion-icon name="add-outline" class="faqIcon"></ion-icon>
              <ion-icon name="close-outline" class="faqIcon"></ion-icon>
            </div>
          </button>
        </div>
        <div class="answer">
          <p>${suny.ans}</p>
        </div>
      </div>`;
      faqContainer.insertAdjacentHTML('beforebegin', html);
    });

});

// const btn = document.querySelector(".btn1");
// const answer = document.querySelector(".answer")

// btn.addEventListener("click", () => {
//     answer.classList.toggle("activeFAQ");
//     btn.classList.toggle("activeFAQ");
// })

$(document).ready(function(){

$(".faqContainer").click(function(){

$(this).toggleClass("activeFAQ");

})

})