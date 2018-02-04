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
var blockOfferTit = d.querySelector('#offerTit');
var clearBlock = d.querySelector('#clear');
var searchinBlock = d.querySelector('#searchin');

////////////////////////////////////////////////////////////

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
///////////////////////////////////////////////////////////////////
    /** animation service **/    

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
                myMoveBlocksPN();
                k++;
            }
            if(pageY > 1900 && k < 5) {
                myMoveBlocksCG();
                k++;
            }
            if(pageY > 2000 && k < 6) {
                myMoveBlocksLast();
                k++;
            }
        });

    };
}