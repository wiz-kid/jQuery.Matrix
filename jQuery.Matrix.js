$.fn.Matrix = function (options) {
    var container = $(this);
    container.addClass("matrix");
    container.children().each(function () {
        $(this).css("-webkit-animation-duration", Math.floor((Math.random() * 20) + 3) + "s").
    	css("animation-duration", Math.floor((Math.random() * 20) + 3) + "s").
        css("-ms-animation-duration", Math.floor((Math.random() * 20) + 3) + "s").
		css("-moz-animation-duration", Math.floor((Math.random() * 20) + 3) + "s").
        css("left", Math.floor((Math.random() * parseInt($(container).width())) + 10)).
        css("font-size", Math.floor((Math.random() * 20) + 10) + "px");
    });
};
