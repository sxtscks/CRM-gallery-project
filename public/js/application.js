const deleteButton = document.querySelector('[data-delete]')


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
