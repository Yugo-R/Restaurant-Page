//Mobile navbutton on click

//create navpage and delete
document.querySelector('.nav-button').addEventListener('click', ()=>{
    let overlay = document.querySelector('.navbarOverlay');
    overlay.classList.add('active');
    let ul = document.createElement('ul');
    let navlist = ['Home', 'Menu', 'Contact']

    for(let i = 0; i < navlist.length; i++){
        let li = document.createElement('li');
        let anchr = document.createElement('a');
        anchr.innerText = navlist[i];
        li.appendChild(anchr);
        ul.appendChild(li);
    }
    let closeButton = document.createElement('button');
    closeButton.innerText = 'x';
    closeButton.className = 'overlayClose';
    closeButton.dataset.overlayclose = '.navbarOverlay';

    overlay.appendChild(ul);
    overlay.appendChild(closeButton);


    document.querySelector('.overlayClose').addEventListener('click', (e)=>{
        overlay.classList.remove('active');

        while(overlay.firstChild){
            overlay.removeChild(overlay.firstChild);
        }
    })
    
})

