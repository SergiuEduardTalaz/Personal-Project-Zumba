document.addEventListener('DOMContentLoaded', () => {
  const chatButton = document.getElementById('chat-button');
  const chatModal = document.getElementById('chat-modal');
  const closeChatModal = document.getElementById('close-chat-modal');

  chatButton.addEventListener('click', () => {
    chatModal.style.display = 'block';
  });

  closeChatModal.addEventListener('click', () => {
    chatModal.style.display = 'none';
  });
});
function generateRandomMathQuestion() {
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;

  if (operator === '-' && num2 > num1) {
    [num1, num2] = [num2, num1];
  } else if (operator === '/' && num1 % num2 !== 0) {
    [num1, num2] = [num2, num1];
  }

  const question = `${num1} ${operator} ${num2}`;
  const answer = eval(question).toString();
  return { question, answer };
};

function displayMathQuestion() {
  const mathQuestion = generateRandomMathQuestion();
  sessionStorage.setItem('answer', mathQuestion.answer);
  document.getElementById('math-question-label').textContent = `What is ${mathQuestion.question}?`;
  document.getElementById('math-question').value = '';
};

const header = document.querySelector('header');
const submitButton = document.getElementById('submit-button');
const newMathQuestionButton = document.getElementById('new-math-question');
header.classList.add('custom-header');
submitButton.classList.add('custom-submit-button');

const form = document.getElementById('contact-form');
const modal = document.createElement('div');
modal.classList.add('modal');
const modalContent = document.createElement('div');
modalContent.classList.add('modal-content');
modalContent.textContent = 'Thank you for your message!';

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const mathAnswer = parseInt(document.getElementById('math-question').value);
  const correctAnswer = parseInt(sessionStorage.getItem('answer'));

  if (mathAnswer !== correctAnswer) {
    alert('Please solve the math question correctly.');
    return;
  }

  const confirmed = confirm('Are you sure you want to submit the form?');

  if (confirmed) {
    submitForm();
  }
});

modal.addEventListener('click', function () {
  modal.style.display = 'none';
});

displayMathQuestion();

function showMessage() {
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  modal.style.display = 'flex';

  setTimeout(function () {
    modal.style.display = 'none';
  }, 3000);
}

function submitForm() {
  const formElements = form.elements;
  const formData = {};

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.type !== 'submit') {
      formData[element.name] = element.value;
    }
  }

  showMessage();

  setTimeout(displayMathQuestion, 3000);
}

newMathQuestionButton.addEventListener('click', function () {
  displayMathQuestion();
  document.getElementById('math-question').focus();
});
