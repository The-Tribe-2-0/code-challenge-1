const form = document.querySelector('form');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const marksInput = document.querySelector('#marks');
  const marks = Number(marksInput.value);
  let grade;

  if (marks >= 80) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }
  resultDiv.textContent = `Grade: ${grade}`;
});