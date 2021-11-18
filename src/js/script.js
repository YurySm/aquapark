document.addEventListener('DOMContentLoaded', () => {
    //animaton
    const animation = (selector, startPosX = 1) => {
        const el = document.querySelector(selector);
        let posX = startPosX;
        let posY = 1;
    
        function myAnimation() {   
            el.style.top = posY + "px";
            el.style.left = posX + 'px';
    
            if (posX <= document.documentElement.clientWidth + 300) {
                posX += 0.5;
                if (posX > 0) {
                    el.style.opacity = '1';
                }
                requestAnimationFrame(myAnimation);
            } else {
                posX = -700;
                el.style.opacity = '0';
                requestAnimationFrame(myAnimation);
            }
        }
        let id = requestAnimationFrame(myAnimation);
    }
    animation('.fish');
    animation('.big-fish', 450);


    //плавность перехода
    const anchors = document.querySelectorAll('a[href*="#"');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href');
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    const listItems = document.querySelectorAll('.zones__nav_item');

    listItems.forEach((item, i) => {
        item.classList.remove('zones__nav_item-active');
        item.addEventListener('click', () => {
            listItems.forEach(item => {
                item.classList.remove('zones__nav_item-active');
            });
            item.classList.add('zones__nav_item-active');
        });
    });
    listItems[0].click();

    //slider
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    $('.slider-for').on('beforeChange', function(){
        $('.my_video')[0].pause();
        $('.video_wrapper').removeClass('video-is-playing');
        $('.my_video')[0].load();
    });

    $(function () {
        const $videoContainer = $('.video_wrapper'),
          $videoControls = $('.video-controls'),
          $video = $('.my_video')[0];
      
        $videoControls.click(function () {
          if ($video.paused) {
            $video.play();
            $videoContainer.addClass('video-is-playing');
          } else {
            $video.pause();
            $videoContainer.removeClass('video-is-playing');
            $video.load();
          }
        });
      });


    

});