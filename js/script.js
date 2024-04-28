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
    uploadBtn.click();
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


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField=>{
        const tableRows = document.querySelectorAll("tbody tr");
        const headerCell = inputField.closest("th");     //dtermine the column index of search
        const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell); //turning into array first rather than a NodeList so we can use the indexOf method.
        console.log(columnIndex);
        const searchableCells = Array.from(tableRows)
        .map(row => row.querySelectorAll("td")[columnIndex]); 

        console.log(searchableCells);
    
        inputField.addEventListener("input", ()=>{
            const searchQuery = inputField.value.toLowerCase();

            for(const tableCell of searchableCells){
                const row = tableCell.closest("tr");   //gets the whole row of the current cell
                const value = tableCell.textContent   //the value of the table cell
                        .toLowerCase()
                        .replace(",", "");  // Remove commas to allow searching by number
                
                row.style.visibility = null;     //to show all the rows after search

                if(value.search(searchQuery) === -1){
                    row.style.visibility = "collapse";
                }
            }
        })
    })
})

// end zeyad