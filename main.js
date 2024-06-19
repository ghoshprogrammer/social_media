var settingsMenu=document.querySelector('.settings-menu')
let darkBtn=document.querySelector('.dark-btn')

function settingsMenuToggle(){
   settingsMenu.classList.toggle('settings-menu-height')
}
function bal(){
    console.log('bal')
}
// const darkMode=()=>{
//     console.log('its working')
// }
// darkBtn.addEventListener('click',()=>{
//     console.log('it is working ')
// })

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark-btn-on")
}