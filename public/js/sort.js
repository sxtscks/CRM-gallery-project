const buttonSortCreate = document.querySelector('[data-sort-create]');

// console.log(buttonSortCreate);

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
