//your code here
const input = document.getElementById('input');
  
  // Handle numbers and operators
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.innerText;
      if (btn.id.startsWith('block') || btn.id === 'dot') {
        input.value += val;
      } else if (['plus', 'minus', 'multiply', 'divide'].includes(btn.id)) {
        const op = {plus: '+', minus: '-', multiply: '*', divide: '/'}[btn.id];
        input.value += op;
      }
    });
  });

  // Calculate
  document.getElementById('ans').addEventListener('click', () => {
    try {
      let result = eval(input.value);
      input.value = result;
    } catch {
      input.value = 'Error';
    }
  });

  // Reset
  document.getElementById('clr').addEventListener('click', () => {
    input.value = '';
  });
