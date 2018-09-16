class GitHub {
  constructor(){
    this.client_id = "8638d6f3997cba9a99ad";
    this.client_secret = "acd16f375fef1bd6285934f7057f621d9e3f9b8a";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
    &sort=${this.repos_count}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile, // moze i profile kod asynca
      repos
    }
  }

}