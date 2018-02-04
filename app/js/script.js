window.addEventListener('DOMContentLoaded', init);

function init() {
    var d = document,
        html = d.documentElement,
        widthScreen = html.clientWidth,
        links = d.querySelector('.navigation__links-list');

    
    /** autoloader off **/
    setInterval( function() {
        var modal = d.querySelector('.modal__wrap');
        modal.style.display = 'none';
        html.style.overflowY = 'visible';
    },3000);
    /** switch links **/

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

    /** menu open button **/
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

//////////////////////////////////////////////////////////////////
var blockNegot = d.querySelector('#negotiations');
var blockDevelop = d.querySelector('#develop');
var blockManag = d.querySelector('#manag');
var blockDocuments = d.querySelector('#documents');
var blockCouns = d.querySelector('#counsel');

////////////////////////////////////////////////////////////

function myMoveServiceAll(block, value, xPosition, posIncrement) {
    var id = setInterval(function() {
        if (xPosition == value) {
            clearInterval(id);
        } else {
            xPosition+=posIncrement;
            block.style.transform = 'translateX(' + xPosition + 'px)'; 
        }
    }, 1);
}

function myOpacityService(block, value) {
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
///////////////////////////////////////////////////////////////////




    /** animation service **/    

    /** animation our-offer title **/        
    function myMoveOffer() {
        var blockOfferTit = d.querySelector('#offerTit');
        var xPosition = 0;
        var opacit = 0;
        var id = setInterval(action, 1);
        function action() {
            if (xPosition == 500) {
                clearInterval(id);
            } else {
                xPosition+=5;
                opacit+=0.01;
                blockOfferTit.style.opacity = opacit;
                blockOfferTit.style.transform = 'translateY(' + -(xPosition) + 'px)';
            }
        }
    }
    /** animation our-offer blocks **/
    function myMoveBlocks() {
        var clearBlock = d.querySelector('#clear');
        var searchinBlock = d.querySelector('#searchin');
        var xPosition = 0;
        var id = setInterval(action, 1);
        function action() {
            if(xPosition == 720) {
                clearInterval(id);
            } else {
                xPosition+=5;
                clearBlock.style.transform = 'rotateY(' + xPosition + 'deg)';
                searchinBlock.style.transform = 'rotateY(' + -(xPosition) + 'deg)';
            }
        }

    }
    function myMoveBlocksPN() {
        var professBlock = d.querySelector('#profess');
        var negotBlock = d.querySelector('#negot');
        var xPosition = 0;
        var id = setInterval(action, 1);
        function action() {
            if (xPosition == 900) {
                clearInterval(id);
            } else {
                xPosition+=9;
                professBlock.style.transform = 'translateX(' + xPosition + 'px)'; 
                negotBlock.style.transform = 'translateX(' + -(xPosition) + 'px)';
            }
        }
    }
    function myMoveBlocksCG() {
        var confidentBlock = d.querySelector('#confident');
        var guarantBlock = d.querySelector('#guarant');
        var xPosition = 0;
        var id = setInterval(action, 1);
        function action() {
            if (xPosition == 500) {
                clearInterval(id);
            } else {
                xPosition+=5;
                confidentBlock.style.transform = 'translateY(' + -(xPosition) + 'px)'; 
                guarantBlock.style.transform = 'translateY(' + -(xPosition) + 'px)';
            }
        }
    }    
    function myMoveBlocksLast() {
        var supportBlock = d.querySelector('#support');
        var opacit = 0;
        var id = setInterval(action, 1);
        function action() {
            if (opacit == 1) {
                clearInterval(id);
            } else {
                opacit+=0.01;
                supportBlock.style.opacity = opacit; 
            }
        }
    }
    
    /** event scroll **/
    if(widthScreen > 1250 && widthScreen < 2000) {
        
        var k = 0;
        
        window.addEventListener('scroll', function() {
            var pageY = window.pageYOffset || html.scrollTop;
            if(pageY > 600 && k < 1) {
                myMoveServiceAll(blockNegot, 500, 0, 5);
                myMoveServiceAll(blockDevelop, -500, 0, -5);
                myOpacityService(blockManag, 1);
                myOpacityService(blockDocuments, 1);
                myOpacityService(blockCouns, 1);



                k=1;
            } 
            if (pageY > 1000 && k < 2) {
                myMoveOffer();
                k=2;
            }
            if (pageY > 1200 && k < 3) {
                myMoveBlocks();
                k = 3;
            }
            if(pageY > 1600 && k < 4) {
                myMoveBlocksPN();
                k = 4;
            }
            if(pageY > 1900 && k < 5) {
                myMoveBlocksCG();
                k = 5;
            }
            if(pageY > 2000 && k < 6) {
                myMoveBlocksLast();
                k = 6;
            }
        });

    };
}