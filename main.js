fetch("faq.json")
  .then((response) => response.json())
  .then((data) => {
    //check whether data from json shown or not
    console.log(data);

    //show ques and and in console log
    data.faqs.map((sv) => {
      console.log(sv.ques);
      console.log(sv.ans);
    });

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

// Slider UI slides

const sliders = document.querySelectorAll(".carouselbox");

sliders.forEach((slider) => {
  const switchLeft = slider.parentElement.querySelector(".switchLeft");
  const switchRight = slider.parentElement.querySelector(".switchRight");

  slider.addEventListener("scroll", function () {
    if (slider.scrollLeft === 0) {
      switchLeft.style.display = "none";
    } else {
      switchLeft.style.display = "block";
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      switchRight.style.display = "none";
    } else {
      switchRight.style.display = "block";
    }
  });

  // slider.addEventListener("mouseenter", () => {
  //   switchLeft.style.opacity = "1";
  //   switchRight.style.opacity = "1";
  // });

  // slider.addEventListener("mouseleave", () => {
  //   switchLeft.style.opacity = "0";
  //   switchRight.style.opacity = "0";
  // });

  // switchLeft.addEventListener("mouseenter", () => {
  //   switchLeft.style.opacity = "1";
  //   switchRight.style.opacity = "1";
  // });

  // switchLeft.addEventListener("mouseleave", () => {
  //   switchLeft.style.opacity = "0";
  //   switchRight.style.opacity = "0";
  // });

  // switchRight.addEventListener("mouseenter", () => {
  //   switchLeft.style.opacity = "1";
  //   switchRight.style.opacity = "1";
  // });

  // switchRight.addEventListener("mouseleave", () => {
  //   switchLeft.style.opacity = "0";
  //   switchRight.style.opacity = "0";
  // });

  switchLeft.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  });

  switchRight.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  });
});
