fetch("faq.json")
  .then((response) => response.json())
  .then((data) => {
    const faqContainer = document.querySelector(".faqContainer");
    // faqContainer.innerHTML = "";

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
      faqContainer.insertAdjacentHTML("beforebegin", html);
    });

    // Add event listener to toggle active class
    const faqButtons = document.querySelectorAll(".btn1");
    faqButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const answer = button.parentElement.nextElementSibling;
        answer.classList.toggle("activeFAQ");
        button.classList.toggle("activeFAQ");
      });
    });
  });

