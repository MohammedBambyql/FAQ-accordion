const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  const toggleButton = question.querySelector('.toggle-button');
  const answer = question.nextElementSibling;

  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';

    toggleButton.setAttribute('aria-expanded', !expanded);
    toggleButton.textContent = expanded ? '+' : '-';
    answer.style.display = expanded ? 'none' : 'block';
  });

  toggleButton.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      const expanded = toggleButton.getAttribute('aria-expanded') === 'true';

      toggleButton.setAttribute('aria-expanded', !expanded);
      toggleButton.textContent = expanded ? '+' : '-';
      answer.style.display = expanded ? 'none' : 'block';
    }
  });
});