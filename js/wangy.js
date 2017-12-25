;(function ($) {
    var count = 0;
    $('.ol a').each(function () {
        count += $(this).innerWidth();
    });
    $('.ol li').width(count + 'px');
    // 导航滚动条
    var scroll = new IScroll('.ol', {
        scrollY: false,
        scrollX: true,
        scrollbars: true,
        fadeScrollbars: true
    });
    $('.person').on('click', function () {
        $('.form').addClass('cur');
    });
    $('.form').on('click', function () {
        $(this).removeClass('cur');
    });
    $('.up').on('click', function () {
        if ($('.cont').hasClass('cur')) {
            $('.cont').removeClass('cur');
        } else {
            $('.cont').addClass('cur');
        }
    });
    // 轮播
    new Swiper('.banner', {
        autoplay: 1000,
        loop: true,
        pagination: '.index',
        paginationType: 'fraction'
    });
    // 渲染
    var data = null;
    $.ajax({
        url: 'data.json',
        success: function (json) {
            data = json;
            init(data);
        }
    });
    function init (data) {
        $.each(data, function (i, obj) {
            var html = `<dl class="con">
                            <dt>
                                <img src="${obj.img[0]}" alt="">
                            </dt>
                            <dd>
                                <h5>${obj.p}</h5>
                                <span>${obj.sp}</span>
                            </dd>
                        </dl>`;
            $('.aside').append(html);
        });
    }
    $('.main').on('scroll', function () {
        if (this.scrollTop > 0) {
            $('.nav').addClass('cur');
        } else {
            $('.nav').removeClass('cur');
        }
    });
})(jQuery);