function addToBox(itemName, itemImage) {
    const selectedItems = document.getElementById('selected-items');

    const newItem = document.createElement('div');
    newItem.className = 'selected-item';
    newItem.innerHTML = `
        <img src="${itemImage}" alt="${itemName}">
        <span>${itemName}</span>
    `;

    selectedItems.appendChild(newItem);
}
