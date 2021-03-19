const editForm = document.querySelector('#editForm');

if (editForm) {
  editForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formFields = Object.fromEntries((new FormData(editForm)).entries());
    formFields._id = e.target.dataset.clientid;

    console.log(e.target.dataset.clientid);

    const response = await fetch(`/card/${e.target.dataset.clientid}/edit`, {
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


const deleteButton = document.querySelector('[data-delete]')

if (deleteButton){

deleteButton.addEventListener('click', async (event) => {
  event.preventDefault()
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', event.target);
  const deleteId = event.target.dataset.delete
  console.log(deleteId);
  const response = await fetch(`/card/${deleteId}`, {
    method: "DELETE"
  })

  if (response.status === 200) {
    window.location.replace('/clients')
  } else {
    console.log('ERROR');
  }
})
}


const buttonSortCreate = document.querySelector('[data-sort-create]');

// console.log(buttonSortCreate);
if (buttonSortCreate) {
  buttonSortCreate.addEventListener('click', async (e) => {
    console.log('======Сортировка');
  
    const isSortCreate = true;
  
    const response = await fetch('/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(isSortCreate),
    });
  
    if (response.status !== 200) {
      // errorDiv.innerText = 'Не удалось изменить данные клиента.';
      return;
    }
  
  })
}

