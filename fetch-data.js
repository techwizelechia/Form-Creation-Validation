document.addEventListener("DOMContentLoaded", () => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch user data from API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the "Loading user data..." message
            dataContainer.innerHTML = '';

            // Create a <ul> element
            const userList = document.createElement('ul');

            // Loop through the user data and display each name in a <li> element
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the user list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors by displaying a message
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke the fetchUserData function after the DOM is fully loaded
    fetchUserData();
});
