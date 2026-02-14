const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // Fecha outros
    document.querySelectorAll(".faq-answer").forEach(item => {
      if (item !== answer) {
        item.style.maxHeight = null;
      }
    });

    document.querySelectorAll(".faq-question").forEach(btn => {
      if (btn !== question) {
        btn.classList.remove("active");
      }
    });

    // Toggle
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      question.classList.remove("active");
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      question.classList.add("active");
    }
  });
});
