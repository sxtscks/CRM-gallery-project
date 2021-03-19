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

    if (response.status === 200) window.location.replace('/clients');
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


const search = document.querySelector('#search');

// if (search) {
//   search.addEventListener('submit', async (event) => {
//     event.preventDefault()
//     const query = event.target.value
//     console.log(query);
//     const response = (`/clients`, {
//       method: "POST",
      // headers: {
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify(query),
    // })
    // const resBody = await response.json();
    // return res.sendStatus(200)
    // switch (select.value) {
    //   case 'People':
    //     myData = await satwet.searchAlalal(input.value)
    //     break;
    // }
//   } )
// }

// let select = event.target.select.value
// let query = req.query.select.value
// db.clients.find({ [`${select}`]: {$regex: query}})