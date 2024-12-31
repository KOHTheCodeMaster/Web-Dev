var existingKeys = new Set(); // Track keys to prevent duplicates

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    initializeApp();
});


/**
 * Main entry point for DOM-related setup
 */
function initializeApp() {
    // Set up event listeners for input and submit button
    const submitBtn1 = document.getElementById('submitBtn1');
    submitBtn1.addEventListener('click', handleFormSubmit);

    const submitBtn2 = document.getElementById('submitBtn2');
    submitBtn2.addEventListener('click', handleFormSubmitApi);

    // Populate initial data
    populateInitialData();
}

/**
 * Stub method to generate dummy data
 * @returns {Array} Array of objects with key-value pairs
 */
function getStubData() {
    return [
        {key: 'Alpha', value: 'Value 1'},
        {key: 'Beta', value: 'Value 2'},
    ];
}

/**
 * Populates the initial data into the data container
 */
function populateInitialData() {
    const data = getStubData();
    const container = document.getElementById('dataContainer');

    data.forEach((item) => {
        if (!existingKeys.has(item.key)) {
            existingKeys.add(item.key);
            addRow(container.children.length + 1, item.key, item.value);
        }
    });
}

/**
 * Handles the form submission process
 */
function handleFormSubmit() {
    const inputText = document.getElementById('inputText').value.trim();
    const statusIndicator = document.getElementById('statusIndicator');

    if (!inputText) {
        statusIndicator.textContent = 'Status: Please enter a key!';
        statusIndicator.classList.add('text-red-500');
        return;
    }

    if (existingKeys.has(inputText)) {
        statusIndicator.textContent = 'Status: Key already exists!';
        statusIndicator.classList.add('text-yellow-400');
        return;
    }

    statusIndicator.textContent = 'Status: Processing in Background...';
    statusIndicator.classList.remove('text-red-500', 'text-green-500');
    statusIndicator.classList.add('text-yellow-400');

    // Simulate backend processing and update UI
    setTimeout(() => {
        const container = document.getElementById('dataContainer');
        addRow(container.children.length + 1, inputText, `Processed Value for ${inputText}`);
        existingKeys.add(inputText);
        statusIndicator.textContent = 'Status: Process Completed!';
        statusIndicator.classList.remove('text-yellow-400');
        statusIndicator.classList.add('text-green-500');
    }, 2000);
}


/**
 * Handles the row color change action
 * @param {HTMLElement} row The row element to change color
 */
function handleChangeRowColor(row) {
    row.classList.toggle('bg-green-700');
}

/**
 * Handles row deletion
 * @param {HTMLElement} row The row element to be removed
 * @param {string} key The key associated with the row
 */
function handleDeleteRow(row, key) {
    const container = document.getElementById('dataContainer');
    container.removeChild(row);
    existingKeys.delete(key);

    // Update serial numbers
    Array.from(container.children).forEach((child, index) => {
        child.querySelector('span').textContent = index + 1;
    });
}

/**
 * Adds a new row to the data container
 * @param {number} serial Serial number for the row
 * @param {string} key Key value
 * @param {string} value Corresponding value
 */
function addRow(serial, key, value) {
    const container = document.getElementById('dataContainer');
    const row = document.createElement('div');
    row.className = 'flex justify-between items-center p-2 border-b border-gray-700 rounded bg-gray-800';

    row.innerHTML = `
      <span>${serial}</span>
      <span>${key}</span>
      <span>${value}</span>
      <button class="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">Change Color</button>
      <button class="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
    `;

    const changeColorButton = row.querySelector('button:nth-child(4)');
    changeColorButton.addEventListener('click', () => handleChangeRowColor(row));

    const deleteButton = row.querySelector('button:nth-child(5)');
    deleteButton.addEventListener('click', () => handleDeleteRow(row, key));

    container.appendChild(row);
}

function handleFormSubmitApi() {
    const inputText = document.getElementById('inputText').value.trim();
    const statusIndicator = document.getElementById('statusIndicator');

    if (!inputText) {
        statusIndicator.textContent = 'Status: Please enter a key!';
        statusIndicator.classList.add('text-red-500');
        return;
    }

    if (existingKeys.has(inputText)) {
        statusIndicator.textContent = 'Status: Key already exists!';
        statusIndicator.classList.add('text-yellow-400');
        return;
    }

    statusIndicator.textContent = 'Status: Processing in Background...';
    statusIndicator.classList.remove('text-red-500', 'text-green-500');
    statusIndicator.classList.add('text-yellow-400');

    checkProcessingStatus(inputText);

}

function checkProcessingStatus(inputText) {
    const statusIndicator = document.getElementById('statusIndicator');
    fetch(`http://localhost:8080/api/process3?name=${inputText}`, {method: 'GET'})
        .then((response) => response.text())
        .then((message) => {
            console.log(message);
            pollStatus(inputText); // Start polling for status
        })
        .catch((error) => {
            console.error('Error:', error);
            statusIndicator.textContent = 'Status: Failed to start processing!';
            statusIndicator.classList.add('text-red-500');
        });
}


function pollStatus(name) {
    const statusIndicator = document.getElementById('statusIndicator');

    const intervalId = setInterval(() => {
        fetch(`http://localhost:8080/api/status?name=${name}`, { method: 'GET' })
            .then((response) => response.text())
            .then((status) => {
                console.log(status);
                if (status.includes('Completed')) {
                    clearInterval(intervalId); // Stop polling
                    const container = document.getElementById('dataContainer');
                    addRow(container.children.length + 1, name, `Processed Value for ${name}`);
                    existingKeys.add(name);
                    statusIndicator.textContent = 'Status: Process Completed!';
                    statusIndicator.classList.remove('text-yellow-400');
                    statusIndicator.classList.add('text-green-500');
                } else if (status.includes('Failed')) {
                    clearInterval(intervalId); // Stop polling
                    statusIndicator.textContent = 'Status: Processing Failed!';
                    statusIndicator.classList.add('text-red-500');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                clearInterval(intervalId);
                statusIndicator.textContent = 'Status: Error fetching status!';
                statusIndicator.classList.add('text-red-500');
            });
    }, 1000); // Poll every second
}
