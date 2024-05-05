let showTask = document.getElementById("showTask");
let cusSec = document.getElementById("cusSec");
let checkTask = false;

window.addEventListener(("load"), () => {
    showTask.src = "./Icons/showTaskDown.jpg";
})

const mainDetails = [
    {id: 0, innerHeadText: "Customize your online store", innerSecText: "Choose a theme and add your logo, colours, and images to reflect your brand.", innerBtnDivId: "", innerBtnText: "Customize theme", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc: "./Icons/cusImgOne.svg"},
    {id: 1, innerHeadText: "Add your first project", innerSecText: "Write a description, add photos,and set pricing for the products you plan to sell.", innerBtnDivId: "innerBtnDiv", innerBtnText: "Add product", innerDivSpanId: "innerDivSpan", innerDivSpanText: "Import product", cusImgSrc:"./Icons/cusImgTwo.svg"},
    {id: 2, innerHeadText: "Add a custom domain", innerSecText: "Your current domain is 222219.myshopify.com butyou can add a custom domain to help customers find your onlinr store. ", innerBtnDivId: "", innerBtnText: "Add domain", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc:"./Icons/cusImgThree.svg"},
    {id: 3, innerHeadText: "Name your store", innerSecText: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.", innerBtnDivId: "", innerBtnText: "Name store", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc:"./Icons/cusImgFour.svg"},
    {id: 4, innerHeadText: "Set up a payment method", innerSecText: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.", innerBtnDivId: "", innerBtnText: "Set up payment", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc:"./Icons/cusImgFive.svg"}
]

mainDetails.map(({ innerHeadText, innerSecText, innerBtnDivId, innerBtnText, innerDivSpanId, innerDivSpanText, cusImgSrc }) => {
    cusSec.innerHTML += `
        <main class="cusMain">
            <div class="cusMainDiv">
                <img src="./Icons/cusIcon.svg" alt="" class="cusIcon">
                <div class="cusMainInner">
                    <div id="innerDiv">
                        <h1 class="innerHead">${innerHeadText}</h1>
                        <section class="innerSection">
                            <p class="innerText">${innerSecText}
                                <span class="innerSpan">Learn more</span>
                              </p>
                            <div id=${innerBtnDivId}>
                                <button class="innerBtn">${innerBtnText}</button>
                                <span id=${innerDivSpanId}>${innerDivSpanText}</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <img src=${cusImgSrc} class="cusImg" alt="">
        </main>
    `    
})

function togglePage(taskCheck, taskIcon, impDivWidth, dcDisplay) {
    checkTask = taskCheck;
    showTask.src = taskIcon;
    document.getElementById("impDivMob").style.width = impDivWidth;
    document.getElementById("dcIconTextMob").style.display = dcDisplay;
};

document.getElementById("showTaskDiv").addEventListener("click", () => {
    if (checkTask) {
        togglePage(false, "./Icons/showTaskDown.jpg", "34.5%", "flex");
        cusSec.classList.remove("toggleCusSec");
    } else {
        togglePage(true, "./Icons/showTaskUp.jpg", "67%", "none");
        cusSec.classList.add("toggleCusSec");
    }
})

let innerHead = document.getElementsByClassName("innerHead");
let innerSection = document.getElementsByClassName("innerSection");
let cusImg = document.getElementsByClassName("cusImg");
let cusMain = document.getElementsByClassName("cusMain");

function togTextImg(classes, classAdded, compare) {
    for (let x = 0; x < classes.length; x++) {
        if (compare == x) {
            classes[x].classList.toggle(classAdded);
            break;
        };
    };
};

for (let i = 0; i < innerHead.length; i++) {
    innerHead[i].addEventListener("click", () => {
        togTextImg(innerSection, "openInnerSection", i);
        togTextImg(cusImg, "openCusImg", i);
        togTextImg(cusMain, "cusMainAddColor", i)
    });
};