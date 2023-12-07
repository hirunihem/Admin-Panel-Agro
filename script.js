// Get a reference to the Firestore database
const db = firebase.firestore();

// Get a reference to the "users" collection
const usersCollection = db.collection('user_details');

// Get a reference to the HTML element where you want to display the number of users
const currentUsersElement = document.getElementById('totalUsersCount');

// Listen for changes in the "users" collection
usersCollection.onSnapshot((snapshot) => {
  const numberOfUsers = snapshot.size;
  currentUsersElement.textContent = numberOfUsers;
});



