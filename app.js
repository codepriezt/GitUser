// init github class 
const github = new Github;
const ui = new UI;

const searchuser = document.getElementById('searchUser');

searchuser.addEventListener('keyup' ,  (e) =>{
    // get input 
    const userText = e.target.value

    if(userText != ''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
               ui.showAlert('User Not Found' ,'alert alert-danger') 
            } else{
                ui.displayUser(data.profile)
              
                ui.showRepos(data.repos)
            }
  
        })
     } else{
            //clear profile
            ui.clearProfile();
        } 
                  
    
});
    