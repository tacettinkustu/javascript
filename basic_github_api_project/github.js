class Github{
    constructor(){
        this.url = "https://api.github.com/users/"
    }

    async getFromGithub(user){

        const userInformation = await fetch(this.url+user)
        const userRepo = await fetch(this.url+user+"/repos")
        
        const userInformationJson = await userInformation.json();
        const userRepoJson = await userRepo.json();

        return {
            user : userInformationJson,
            repo : userRepoJson
        }
    }

}