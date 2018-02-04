window.addEventListener('DOMContentLoaded', init);

function init() {

    /** autoloader off **/
    setInterval( function() {
        var modal = d.querySelector('.modal__wrap');
        modal.style.display = 'none';
        html.style.overflowY = 'visible';
    },3000);

    var d = document,
        html = d.documentElement,
        widthScreen = html.clientWidth,
        links = d.querySelector('.navigation__links-list');

    /** animation blocks **/
    var blockNegot = d.querySelector('#negotiations'),
        blockDevelop = d.querySelector('#develop'),
        blockManag = d.querySelector('#manag'),
        blockDocuments = d.querySelector('#documents'),
        blockCouns = d.querySelector('#counsel'),
        blockOfferTit = d.querySelector('#offerTit'),
        clearBlock = d.querySelector('#clear'),
        searchinBlock = d.querySelector('#searchin'),
        professBlock = d.querySelector('#profess'),
        negotBlock = d.querySelector('#negot'),
        confidentBlock = d.querySelector('#confident'),
        guarantBlock = d.querySelector('#guarant'),
        supportBlock = d.querySelector('#support');
    
    /** switch links -- tabs **/
    function tabs (links) {
        links.addEventListener('click', function(event) {
            event.preventDefault();
            if(event.target.tagName === 'A') {
                var link = event.target;
                var activeLink = d.querySelector('.navigation__links-link-item-current');
                activeLink.classList.remove('navigation__links-link-item-current');
                link.classList.add('navigation__links-link-item-current');
            }
        });
    };
    tabs(links);

    /** menu open button on telephone **/
    var btnMenuMob = d.querySelector('.navigation__links-list-btn');
    btnMenuMob.addEventListener('click', function(event) {
        event.preventDefault();
        var mainMenuTab = d.querySelector('.navigation__links-list');
        if(mainMenuTab.style.display === 'none') {
            mainMenuTab.style.display = 'flex';
        } else {
            mainMenuTab.style.display = 'none';
        }
    });

    /** functions for animation */
    function myMoveBlocks(block, value, posIncrement) {
        var xPosition = 0;
        var id = setInterval(function() {
            if (xPosition == value) {
                clearInterval(id);
            } else {
                xPosition+=posIncrement;
                block.style.transform = 'translateX(' + xPosition + 'px)'; 
            }
        }, 1);
    }
    function myOpacityBlocks(block, value) {
        var opacity = 0;
        var id = setInterval(function() {
            if (opacity == value) {
                clearInterval(id);
            } else {
                opacity+=0.01;
                block.style.opacity = opacity; 
            }
        }, 1);
    }
    function myRotateBlocks(block) {
        var yPostion = 0;
        var id = setInterval(function() {
            if (yPostion == 720) {
                clearInterval(id);
            } else {
                yPostion+=5;
                block.style.transform = 'rotateY(' + yPostion + 'deg)'; 
            }
        }, 1);
    }
    function myUpBlocks(block) {
        var yPostion = 0;
        var id = setInterval(function() {
            if (yPostion == -500) {
                clearInterval(id);
            } else {
                yPostion+=-5;
                block.style.transform = 'translateY(' + yPostion + 'px)'; 
            }
        }, 1);
    }

    /** event scroll **/
    if(widthScreen > 1250 && widthScreen < 2000) {
        
        var k = 0;
        
        window.addEventListener('scroll', function() {
            var pageY = window.pageYOffset || html.scrollTop;
            if(pageY > 600 && k < 1) {
                myMoveBlocks(blockNegot, 500, 5);
                myMoveBlocks(blockDevelop, -500, -5);
                myOpacityBlocks(blockManag, 1);
                myOpacityBlocks(blockDocuments, 1);
                myOpacityBlocks(blockCouns, 1);
                k++;
            } 
            if (pageY > 1000 && k < 2) {
                myOpacityBlocks(blockOfferTit, 1);
                k++;
            }
            if (pageY > 1200 && k < 3) {
                myRotateBlocks(clearBlock);
                myRotateBlocks(searchinBlock);
                myOpacityBlocks(clearBlock, 1);
                myOpacityBlocks(searchinBlock, 1);
                k++;
            }
            if(pageY > 1600 && k < 4) {
                myMoveBlocks(professBlock, 900, 9);
                myMoveBlocks(negotBlock, -900, -9);
                k++;
            }
            if(pageY > 1900 && k < 5) {
                myUpBlocks(confidentBlock);
                myUpBlocks(guarantBlock);
                k++;
            }
            if(pageY > 2000 && k < 6) {
                myOpacityBlocks(supportBlock, 1);
                k++;
            }
        });

    };
}