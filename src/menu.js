const loadMenu=()=>{
    const mainContainer=document.querySelector('.mainContainer');
    mainContainer.innerHTML="";
    const menuu=document.createElement('div');
    menuu.classList.add('menuu');
    const menuu2=document.createElement('div');
    menuu2.classList.add('menuu2');
    menuu2.textContent="Al trendy dishes available From Indian,Chinese, as well as traditional items.";
    mainContainer.appendChild(menuu);
    mainContainer.appendChild(menuu2);

}
export {loadMenu};