// Init GitHub
const github = new GitHub;
const ui = new UI;

// Search Input
const userSearch = document.getElementById('searchUser');

// Search Input Listener
userSearch.addEventListener('keyup', (e) => {
  // Get value from user (from input)
  const searchText = e.target.value;

  if(searchText !== ''){
    // Make HTTP Call
    github.getUser(searchText)
    .then(data => {
      if(data.profile.message === 'Not Found'){
        // Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      }else{
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  }else{
    // Clear Fields
    ui.clearFields();
  }

})