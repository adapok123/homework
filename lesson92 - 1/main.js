const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const overlay = document.getElementById('overlay');
    const form = document.getElementById('myForm');

    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault(); 

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      console.log('Имя:', name);
      console.log('Email:', email);

    });
