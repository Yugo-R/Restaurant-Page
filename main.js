const content = document.querySelector('#content');


//on page loadup
// window.addEventListener('load', ()=>{
//     homePage();
// })


//create navpage and delete
document.querySelector('.nav-button').addEventListener('click', ()=>{
    let overlay = document.querySelector('.navbarOverlay');
    overlay.classList.add('active');
    let ul = document.createElement('ul');
    let navlist = ['Home', 'Menu', 'Contact']

    for(let i = 0; i < navlist.length; i++){
        let li = document.createElement('li');
        let btn = document.createElement('button');
        btn.className = 'navBtn';
        btn.innerText = navlist[i];
        li.appendChild(btn);
        ul.appendChild(li);
    }
    let closeButton = document.createElement('button');
    closeButton.innerText = 'x';
    closeButton.className = 'overlayClose';
    closeButton.dataset.overlayclose = '.navbarOverlay';

    overlay.appendChild(ul);
    overlay.appendChild(closeButton);
    
    //Close button on navigation for mobile
    document.querySelector('.overlayClose').addEventListener('click', (e)=>{
        closeOverlay(overlay);
    })
    

    //on nav btn click
    ul.onclick = function(event){
        let target = event.target;
        if(target.innerText == 'Home'){
            homePage();
            closeOverlay(overlay);
        }
    }
})

//Create home page
function homePage(){
    let sushiHome = document.createElement('div')
    sushiHome.className = 'sushiHome';

    let homeTitle = document.createElement('div');
    homeTitle.className = 'homeTitle';
    homeTitle.innerText = 'Fresh sushi roll';

    let homeBtn = document.createElement('button');
    homeBtn.className = 'menuBtn';
    homeBtn.innerText = 'Our Menu >';

    sushiHome.appendChild(homeTitle);
    sushiHome.appendChild(homeBtn);
    content.appendChild(sushiHome);
}

//Close overlay window for mobile navigation
function closeOverlay(overlay){
        overlay.classList.remove('active');

        while(overlay.firstChild){
            overlay.removeChild(overlay.firstChild);
        }
}