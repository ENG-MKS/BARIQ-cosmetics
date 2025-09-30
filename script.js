function toggleAdmin() {
  const panel = document.getElementById('adminPanel');
  panel.classList.toggle('hidden');
}

function addProduct() {
  const name = document.getElementById('productName').value;
  const image = document.getElementById('productImage').value;

  if (!name || !image) return alert('Please fill all fields');

  const card = document.createElement('div');
  card.className = 'card glass';
  card.innerHTML = `<img src="${image}" alt="${name}" /><h2>${name}</h2>`;

  document.querySelector('.gallery').appendChild(card);

  document.getElementById('productName').value = '';
  document.getElementById('productImage').value = '';
}
