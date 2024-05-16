let showTask = document.getElementById("showTask");
let cusSec = document.getElementById("cusSec");
let personalDetails = document.getElementById("personalDetails");
let alertAside = document.getElementById("alertAside");
let checkTask = false;
let checkCollector = false;
let checkAlert = false;

// This javascript functionality is to load the initial source link of the toggling arrow
window.addEventListener(("load"), () => {
    showTask.src = "./Icons/showTaskDown.jpg";
})

// This maps through the array of services the shopify website renders and displays it on the static page
const mainDetails = [
    { id: 0, innerHeadText: "Customize your online store", innerSecText: "Choose a theme and add your logo, colours, and images to reflect your brand.", innerBtnDivId: "", innerBtnText: "Customize theme", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc: "./Icons/cusImgOne.svg" },
    { id: 1, innerHeadText: "Add your first project", innerSecText: "Write a description, add photos,and set pricing for the products you plan to sell.", innerBtnDivId: "innerBtnDiv", innerBtnText: "Add product", innerDivSpanId: "innerDivSpan", innerDivSpanText: "Import product", cusImgSrc: "./Icons/cusImgTwo.svg" },
    { id: 2, innerHeadText: "Add a custom domain", innerSecText: "Your current domain is 222219.myshopify.com butyou can add a custom domain to help customers find your onlinr store. ", innerBtnDivId: "", innerBtnText: "Add domain", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc: "./Icons/cusImgThree.svg" },
    { id: 3, innerHeadText: "Name your store", innerSecText: "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.", innerBtnDivId: "", innerBtnText: "Name store", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc: "./Icons/cusImgFour.svg" },
    { id: 4, innerHeadText: "Set up a payment method", innerSecText: "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store.", innerBtnDivId: "", innerBtnText: "Set up payment", innerDivSpanId: "", innerDivSpanText: "", cusImgSrc: "./Icons/cusImgFive.svg" }
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

// The function adds different styling to the front page when the toggle arrow is clicked and it changes 
// the toggle arrow source link after every click
function togglePage(impDivWidth, dcDisplay, taskIcon) {
    showTask.src = taskIcon;
    document.getElementById("impDiv").classList.toggle(impDivWidth);
    document.getElementById("dcIconText").classList.toggle(dcDisplay);
};

function clickToggleButton(btnId, taskShown, divToggled, styleToggled, styleDcDisplayBackground, taskIconOne = "./Icons/showTaskDown.jpg", taskIconTwo = "./Icons/showTaskDown.jpg") {
    document.getElementById(btnId).addEventListener("click", () => {
        if (taskShown) {
            taskShown = false;
            togglePage("impDivWidth", styleDcDisplayBackground, taskIconOne);
            divToggled.classList.remove(styleToggled);
        } else {
            taskShown = true;
            togglePage("impDivWidth", styleDcDisplayBackground, taskIconTwo);
            divToggled.classList.add(styleToggled);
        }
    })
}

const callToggleButton = [
    { id: 0, btnId: "showTaskDiv", taskShown: checkTask, divToggled: cusSec, styleToggled: "toggleCusSec", styleDcDisplayBackground: "styleDcIconTextDisplay", taskIconOne: "./Icons/showTaskDown.jpg", taskIconTwo: "./Icons/showTaskUp.jpg" },
    { id: 0, btnId: "dcIcon", taskShown: checkCollector, divToggled: personalDetails, styleToggled: "toggleDetails", styleDcDisplayBackground: "styleDcIconTextBackground" },
    { id: 0, btnId: "notIcon", taskShown: checkAlert, divToggled: alertAside, styleToggled: "toggleAlertAside", styleDcDisplayBackground: "styleDcIconTextDisplay" }
]

for (let i = 0; i < callToggleButton.length; i++) {
    clickToggleButton(callToggleButton[i].btnId, callToggleButton[i].taskShown, callToggleButton[i].divToggled, callToggleButton[i].styleToggled, callToggleButton[i].styleDcDisplayBackground, callToggleButton[i].taskIconOne, callToggleButton[i].taskIconTwo, callToggleButton[i].styleDcBackground)
}



// clickToggleButton("showTaskDiv", checkTask, cusSec, "toggleCusSec", "./Icons/showTaskDown.jpg", "./Icons/showTaskUp.jpg");
// clickToggleButton("dcIcon", checkCollector, personalDetails, "toggleDetails");
// clickToggleButton("notIcon", checkAlert, alertAside, "toggleAlertAside");

// This functionality is used to display and hide some text
let innerHead = document.getElementsByClassName("innerHead");
let innerSection = document.getElementsByClassName("innerSection");
let cusImg = document.getElementsByClassName("cusImg");
let cusMain = document.getElementsByClassName("cusMain");

function togTextImg(classes, classAdded, compare) {
    for (let x = 0; x < classes.length; x++) {
        if (compare == x) {
            classes[x].classList.toggle(classAdded);
        } else {
            classes[x].classList.remove(classAdded);
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

let listItem = document.getElementsByClassName("listItems");
for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", () => {
        togTextImg(listItem, "focusedListItem", i)
    });
};