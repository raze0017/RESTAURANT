import { loadContact } from './contact ';
import {loadHome} from './home';
import {loadMenu} from './menu';
function commonItems(){
    console.log("HEKLLO");
    const content=document.querySelector('#content');        
    const header=document.createElement('div');
    header.classList.add('header');
    header.textContent='Restaurant name';
    content.appendChild(header);
    const links=document.createElement('div');
    links.classList.add('links');
    content.appendChild(links);
    const links2=document.querySelector('.links');
    const home=document.createElement('button');
    home.classList.add('home');
    home.textContent='Home';
    const menu=document.createElement('button');
    menu.classList.add('menu');
    menu.textContent='Menu';
    const contact=document.createElement('button');
    contact.classList.add('home');
    contact.textContent='contact';
    links2.appendChild(home);
    links2.appendChild(menu);
    links2.appendChild(contact);
    const mainContainer= document.createElement('div');
    mainContainer.classList.add('mainContainer');

    content.appendChild(mainContainer);
    const footer=document.createElement('div');                   
    footer.classList.add('footer');
    footer.textContent="Credits @The internet"
    content.appendChild(footer);
    loadHome();
    home.addEventListener("click",loadHome);
    menu.addEventListener("click",loadMenu);
    contact.addEventListener("click",loadContact);
    
}

document.addEventListener('DOMContentLoaded', function () {
    commonItems();
});
