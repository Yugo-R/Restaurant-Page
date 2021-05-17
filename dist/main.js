const content = document.querySelector('#content');

//On page load up//
window.addEventListener('load', ()=>{
    // createHome();
    createMap();
})


//create navpage
document.querySelector('.nav-button').addEventListener('click', ()=>{
    let overlay = document.querySelector('.navbarOverlay');
    overlay.classList.add('active');
    let ul = document.createElement('ul');
    let navlist = ['Home', 'Menu', 'Contacts']

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
            clearContent();
            createHome();
            closeOverlay(overlay);
        }
        if(target.innerText == 'Menu'){
            clearContent();
            createMenu();
            closeOverlay(overlay);
        }
    }
})
//Create home page
function createHome(){
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

    let menuBtn = document.querySelector('.menuBtn')
    menuBtn.addEventListener('click', ()=>{
        clearContent();
        requestAnimationFrame(()=>{
            createMenu();
        })
});
}

//Create the menu page
function createMenu(){
    let sushiMenu = ['maguro','ikura', 'salmon', 'ika', 'ebi', 'hotate'];

    let menu = document.createElement('div');
    menu.className = 'menu';

    let menuTitle = document.createElement('div');
    menuTitle.className = 'menuTitle';
    menuTitle.innerText = '- Menu -';

    let menuDisplay = document.createElement('div');
    menuDisplay.className = 'menuDisplay';

    for(let i = 0; i < sushiMenu.length; i++){
        let grid = document.createElement('div')
        grid.className = 'grid';

        let img = document.createElement('img');
        img.src = `/img/${sushiMenu[i]}.png`;

        let sushiName = document.createElement('span')
        sushiName.className = `sushiPrice`;

        sushiName.innerText = `${sushiMenu[i][0].toUpperCase() + sushiMenu[i].slice(1)} 100 yen`;

        grid.appendChild(img);
        grid.appendChild(sushiName);
        menuDisplay.appendChild(grid);
    }

    menu.appendChild(menuTitle);
    menu.appendChild(menuDisplay);
    content.appendChild(menu);

    //animate dynamically created page
    requestAnimationFrame(()=>{
        menu.style.opacity = 1;
    })
    
}

//Create contact page
function createContact(){

}

function createMap(){
    let tokyo = {lat:35.68064724779705, lng:139.7672043445679};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: tokyo,
      });
    // The marker, positioned at Tokyo
    let marker = new google.maps.Marker({
        position: tokyo,
        map: map,
    });
}

//Close overlay window
function closeOverlay(overlay){
        overlay.classList.add('out');

        setTimeout(function(){ 
            overlay.classList.remove('active');
            overlay.classList.remove('out');

            while(overlay.firstChild){
                overlay.removeChild(overlay.firstChild);
        }
        }, 500);
        
}

function clearContent(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
}