const documentWidth = window.innerWidth;
const navbarItems = document.getElementById('list');

if (documentWidth <= 770){
    navbarItems.classList.add('hidden');
}


