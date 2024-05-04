let showTaskDiv = document.getElementById("showTaskDiv");
let showTask = document.getElementById("showTask");
let impDivMob = document.getElementById("impDivMob");
let dcIconTextMob = document.getElementById("dcIconTextMob");
let cusSec = document.getElementById("cusSec");
let checkTask = false;

window.addEventListener(("load"), () => {
    showTask.src = "./Icons/showTaskDown.jpg";
})

showTaskDiv.addEventListener("click", () => {
    // document.getElementById("cusSec").classList.toggle("toggleCusSec");
    if (checkTask) {
        checkTask = false;
        showTask.src = "./Icons/showTaskDown.jpg";
        if (window.width < 767) {
            impDivMob.style.width = "34.5%";
            dcIconTextMob.style.display = "flex"   
        }
        cusSec.classList.remove("toggleCusSec");
    } else {
        checkTask = true;
        showTask.src = "./Icons/showTaskUp.jpg";
        if (window.width < 767) {
            impDivMob.style.width = "67%";
            dcIconTextMob.style.display = "none";   
        }
        cusSec.classList.add("toggleCusSec");
    }
})