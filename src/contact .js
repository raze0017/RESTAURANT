const loadContact=()=>{
    const mainContainer=document.querySelector('.mainContainer');
    mainContainer.innerHTML="";
    const main=document.createElement('div');
    const address=document.createElement('div');
    address.classList.add('address');
    address.innerHTML='For bookings:<br>John Wick<br> 9837257327<br><br> For Feedback:<br> restaurantname@gmail.com';
    main.classList.add('contact');
    mainContainer.appendChild(main);
    mainContainer.appendChild(address);
    contact.style

}
export {loadContact};