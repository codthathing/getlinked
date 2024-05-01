let showTaskDiv = document.getElementById("showTaskDiv")
const checkTask = false
// window.addEventListener("load", () => {
//     setTimeout(() => {
//         if (!checkTask) {
//             showTaskDiv.innerHTML = `
//                 <svg id="showTasks" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.71967 1.53033C0.426777 1.23744 0.426777 0.762563 0.71967 0.46967Z" fill="black"/>
//                 </svg>`
//         }
//         setTimeout(() => {
//             if (!checkTask) {
//                 showTaskDiv.innerHTML = `
//                 <svg id="showTasks" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.46967C1.01256 0.176777 1.48744 0.176777 1.78033 0.46967L5.25 3.93934L8.71967 0.46967C9.01256 0.176777 9.48744 0.176777 9.78033 0.46967C10.0732 0.762563 10.0732 1.23744 9.78033 1.53033L5.78033 5.53033C5.48744 5.82322 5.01256 5.82322 4.71967 5.53033L0.71967 1.53033C0.426777 1.23744 0.426777 0.762563 0.71967 0.46967Z" fill="black"/>
//             </svg>`
//             }
//         }, 4000)
//     }, 2000)
// })
document.getElementById("showTaskDiv").addEventListener("click", () => {
    document.getElementById("cusSec").classList.toggle("toggleCusSec")
    if (!checkTask) {
        checkTask = true
        document.getElementById("showTasksTwo").style.display = "none"
        document.getElementById("showTasksOne").style.display = "block"
    } else if (checkTask) {
        checkTask = false
        document.getElementById("showTasksTwo").style.display = "block"
        document.getElementById("showTasksOne").style.display = "none"
    } 
})