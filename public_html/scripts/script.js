var buttonMenu = document.getElementById('toggle-menu');
var menu = document.getElementById('menu');
buttonMenu.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        document.getElementById('prev').style.top = '150px';
        document.getElementById('next').style.top = '150px';
        menu.style.display = '';
    } else {
        document.getElementById('prev').style.top = '300px';
        document.getElementById('next').style.top = '300px';
        menu.style.display = 'block';
    }
});

var buttonFooter = document.getElementById('toggle-footer-menu');
var footerMenu = document.getElementById('footer-menu');

buttonFooter.addEventListener('click', function () {
    if (footerMenu.style.display === '') {
        footerMenu.style.display = 'block';
    } else {
        footerMenu.style.display = '';
    }

});

function slider() {
    var $rightButton = $('#next');
    var $leftButton = $('#prev');


    $leftButton.hide();
    $('div#slides div.slide').hide();
    $('div#slides div#slide-1.slide').show();

    function onRightButtonClick() {
        var $currentSlide = $('div#slides div.slide:visible');
        if (!$currentSlide.hasClass('end-slide')) {
            $currentSlide.hide().next().show();
            $leftButton.show();
        }
        if ($currentSlide.next().hasClass('end-slide')) {
            $rightButton.hide();
        }
    }

    function onLeftButtonClick() {
        var $currentSlide = $('div#slides div.slide:visible');
        if ($currentSlide.attr('id') !== 'slide-1') {
            $currentSlide.hide().prev().show();
            $rightButton.show();
        }
        if ($currentSlide.prev().attr('id') === 'slide-1') {
            $leftButton.hide();
        }
    }

    $rightButton.on('click', onRightButtonClick);
    $leftButton.on('click', onLeftButtonClick);
}
slider();