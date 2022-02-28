// Java and javascript have no relation to each other 
// Allows us to perform event driven actions


const darkModeButton = document.getElementById("dark-mode-button")

const main_header = document.getElementById("main-header")

const nav_bar = document.getElementsByClassName("nav-bar")

darkModeButton.addEventListener("click", ()=>{

    if (darkModeButton.innerText === "🌒"){
        darkModeButton.innerText = "🌞";
        document.body.style.backgroundColor = "#091d1e";
        document.body.style.color = "rgb(0,135,246)";
        main_header.style.color = "rgb(0,135,246)";
    }else{
        darkModeButton.innerText = "🌒";
        document.body.style.backgroundColor = "rgb(155,192,219)";
        document.body.style.color = "white";
        main_header.style.color = "white";
        nav_bar.style.color = "green"
    }
})


const submitFormButton = document.getElementById("submit-form")

handleFormSubmission = function(){
    
}



submitFormButton.addEventListener("click", )
