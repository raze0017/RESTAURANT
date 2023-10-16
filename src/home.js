const loadHome=()=>{
    const mainContainer=document.querySelector('.mainContainer');
    mainContainer.innerHTML="";
    const main=document.createElement('div');
    main.classList.add('main');
    const main2=document.createElement('div');
    main2.classList.add('main2');
    main2.textContent="Really awesome food provided, with affordable prices, nice vibe all over!";
    mainContainer.appendChild(main);
    mainContainer.appendChild(main2);

}
export {loadHome};