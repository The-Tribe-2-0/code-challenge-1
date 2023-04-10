const form = document.querySelector('form');
const speedInput = document.querySelector('#speed');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const speed = Number(speedInput.value);
  
  if (speed < 70) {
    alert('Ok');
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);
    
    if (demeritPoints >= 12) {
      alert('License suspended');
    } else {
      alert(`Demerit points: ${demeritPoints}`);
    }
  }
});