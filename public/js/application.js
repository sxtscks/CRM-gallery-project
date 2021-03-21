const editForm = document.querySelector('#editForm');

if (editForm) {
  editForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formFields = Object.fromEntries((new FormData(editForm)).entries());
    formFields._id = e.target.dataset.clientid;


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

    if (response.status === 200) window.location.replace(`/card/${e.target.dataset.clientid}`);
    errorDiv.innerText = '';

  })
} 


const deleteButton = document.querySelector('[data-delete]')

if (deleteButton){

deleteButton.addEventListener('click', async (event) => {
  event.preventDefault()
  const deleteId = event.target.dataset.delete
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

const search = document.querySelector('.form-select');
const inputData = document.querySelector('#form1');

search?.addEventListener('change', async (event) => {
  event.preventDefault()
  if (event.target.value === "createdAt") {
    inputData.type = "date"
    inputData.name = "date"
  } else {
    inputData.type = "search"
    inputData.name = "search"
  }
})
