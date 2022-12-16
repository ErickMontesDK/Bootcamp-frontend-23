class HttpError extends Error {
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError'
        this.response = response;
    }
}


async function loadJson(url){
    const response = await fetch(url)
    if(response.status === 200) {
        return response.json();
    } else{
        throw new HttpError(response)
    }
}

async function demoGithubUser(){
    let name = "ErickMontesD"
    
    try{
        const user = await loadJson(`https://api.github.com/users/${name}`)
        console.log(`Full name: ${user.name}`)
        return user
    }catch(err){
        if(err instanceof HttpError && err.response.status == 404){
            console.log(`No such user, please reenter`)
        }else {
            console.log(err) 
        }
    }
}
demoGithubUser()