// start zeyad
let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let link = document.getElementById("cssTheme");


theme2.addEventListener('click', function(){
    link.href = "css/theme1.css"
    theme2.classList.add('active');
    theme1.classList.remove('active');
})

theme1.addEventListener('click', function(){
   link.href = "css/theme2.css"
   theme1.classList.add('active');
    theme2.classList.remove('active');
})

////


//zeyad settings validation strt

let user;
let userName;
let Email;
let Password;

let headerName = document.getElementById("profile-change");

let userData = localStorage.getItem('Data');
    if(userData != null){
        let data = JSON.parse(userData);
        if(data.length > 0){
            user = data[0];                 //the first object set (first user details)
            userName = user.username;       //getting the username
            Email = user.email;
            Password = user.password;
            headerName.innerHTML = `What's Flyin, ${userName}`;
        }
}

let nameInput = document.getElementById("name");
let emailInput = document.getElementById("mail");
let saveBtn = document.getElementById("submit")

let lgpop = document.getElementById("lgpop-up");
let ok = document.getElementById("ok");

submit.onclick = function(){
        event.preventDefault();
        if(nameInput.value !== "" && userData != null){
            let newName = nameInput.value;
            let newEmail = emailInput.value;
            let userData = localStorage.getItem('Data');
            if(userData != null){
                let data = JSON.parse(userData);
                if(data.length > 0){
                    data[0].username = newName;
                    data[0].email = newEmail;
                    localStorage.setItem('Data', JSON.stringify(data))            //updating the data to localStorage
                    headerName.innerHTML = `What's Flyin, ${newName}`
                }
            }
        }
        else{
            lgpop.style.transform = 'translate(-50%, -50%) scale(1)';
            ok.onclick = function() {
            lgpop.style.transform = 'translate(-500%, -50%) scale(0)';
            }
        }

}





//zeyad settings validation end

let changePfp = document.getElementById("upload");
let uploadBtn = document.getElementById("chose"); //input the file
let image = document.getElementById("profile"); //pfp pic
let remove = document.getElementById("remove");



window.addEventListener('load', function(){
    let displayImg = localStorage.getItem("newImg");
    if (displayImg) {
        image.src = displayImg;
    }
})

changePfp.addEventListener('click', function(){
    if(userData != null){
        uploadBtn.click();
    }
    else{
        lgpop.style.transform = 'translate(-50%, -50%) scale(1)';
        ok.onclick = function() {
        lgpop.style.transform = 'translate(-500%, -50%) scale(0)';
        }
    }
})

uploadBtn.onchange = function(){  //means when we change the image
    let newImg = URL.createObjectURL(uploadBtn.files[0])
    localStorage.setItem("newImg", newImg)
    image.src=newImg;
    remove.style.display = "block";
}


remove.onclick = function(){
    
    if(localStorage.getItem("newImg") == null){
        alert("Please choose an image first!");
    }
    else{
        localStorage.removeItem("newImg")
        image.src = "images/no-profile-picture-icon.png";
    }
}


let range = document.getElementById("range");
let ps = document.querySelectorAll("p");
let change = document.getElementById("change");


change.onclick = function(){
    if(isNaN(range.value)){
        alert("Please Enter An Integer Value");
    }
    else{
        ps.forEach((p)=>{
        p.style.fontSize = range.value + 'px';
   })
    }
}

let reset = document.getElementById("reset");

reset.onclick = function(){
    ps.forEach((p)=>{
        p.style.fontSize = '16px';
   })
   link.href = "css/theme2.css"
   window.scrollTo(0,0)
}

let scroll = document.getElementById('scroll');

scroll.onclick = function(){
    window.scrollTo(0,0);
}

window.addEventListener('scroll', (e) => {
    let y = this.scrollY;
    // console.log(y);
    if(y>2630){
        scroll.style.opacity= '1'
    }
    else{
        scroll.style.opacity = '0'
    }
})


//better alert pop up here
let deletAcct = document.getElementById("delete-account");
let pop = document.getElementById("pop-up");
let no = document.getElementById("no");
let yes = document.getElementById("yes");

deletAcct.onclick = function(){
    pop.style.transform = 'translate(-50%, -50%) scale(1)';
}

no.onclick = function() {
    pop.style.transform = 'translate(-500%, -50%) scale(0)';
}

yes.addEventListener('click', function(e){
    localStorage.clear()
    pop.style.transform = 'translate(-500%, -50%) scale(0)';
    window.location.reload();
})