function showOptions(foodType) {
    const popUpCard = document.getElementById('popUpCard');
    const popUpMessage = document.getElementById('popUpMessage');

    // Set the pop-up message
    popUpMessage.innerHTML = `Great choice! You ordered ${foodType}`;

    // Remove and add the 'hidden' class to trigger the animation
    popUpCard.style.display = 'block';
    popUpCard.classList.remove('hidden');
    console.log('Adding pop-up-animation class');
    popUpCard.classList.add('pop-up-animation');
    // Log the selected option to the console
    console.log(`User selected: ${foodType}`);

    // Store the selected option on the server
    storeSelectedOptionOnServer(foodType);

    setTimeout(() => {
        closePopUpCard();
    }, 8000); 
}

function closePopUpCard() {
    const popUpCard = document.getElementById('popUpCard');
    popUpCard.classList.add('hidden');
    popUpCard.classList.remove('pop-up-animation');
}

// Function to handle animation end event and reset the pop-up card
function animationEndHandler() {
    const popUpCard = document.getElementById('popUpCard');
    popUpCard.classList.remove('pop-up-animation');
}

function storeSelectedOptionOnServer(foodType) {
    // Send a POST request to the server
    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ selectedOption: foodType }),
    })
    .then(response => response.json())
    .then(data => console.log('Server response:', data))
    .catch(error => console.error('Error:', error));
}
