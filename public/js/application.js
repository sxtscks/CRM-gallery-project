const editForm = document.querySelector('#editForm');
// const id = document.dataset.clientid.value;
// console.log(id);


if (editForm) {
  editForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formFields = Object.fromEntries((new FormData(editForm)).entries());
    console.log(formFields);
    // console.log(editForm.parentNode);

    formFields._id = e.target.dataset.clientid;

    console.log(formFields._id)
    const response = await fetch(`http://localhost:3000/clients/${e.target.dataset.clientid}/edit`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formFields),
    });

    const errorDiv = document.querySelector('#errormessage');

    if (response.status !== 200) {
      errorDiv.innerText = 'Не удалось изменить данные клиента.';
      return;
    }

    if (response.status === 200) window.location.replace('/clients');
    errorDiv.innerText = '';

  })
} 
