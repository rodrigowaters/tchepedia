$(document).ready(function () {
    var $girias = {};
    $.getJSON('girias.json', {}, function ($json) {
        var $item = [];
        $.each($json, function ($id, $giria) {
            $girias[$id] = $giria;
            var $template = '<li data-id_giria="' + $id + '"><a href="#"><p>' + ($giria.title).toUpperCase() + '</p></a></li>';
            $item.push($template);
        });
        $("<ul/>", {
            html: $item.join("")
        }).appendTo("section#main article div:first").find('li').click(function () {
            $("section#main").removeClass('current').addClass('left');
            $('section#view').removeClass('right').addClass('current');
            var $id = $(this).data('id_giria');
            var $giria = $girias[$id];

            $('section#view article #title').text($giria.title);
            $('section#view article #description').text($giria.description);
            $('section#view article ul li:not(:first)').remove();

            for (var $key in $giria.contribution) {
                var $contribution = $giria.contribution[$key];
                $.ajax({
                    url: $contribution + '?client_id=0f8fdbbaa21a9bd18210986a7dc2d72c&format=json',
                    success: function ($json) {
                        if ($.isPlainObject($json)) {
                            var $url = "http://w.soundcloud.com/player/?url=" + $json.uri + "&amp;show_artwork=false&amp;show_comments=false&amp;show_playcount=false&amp;sharing=false&amp;download=false&amp;liking=false&amp;buying=false";
                           $('section#view article ul').append('<li><iframe width="100%" height="160" scrolling="no" frameborder="no" src="' + $url+  '"></iframe></li>');
                        }
                    }
                });
            }
        });
    });
    $('section#view header #btn-view-back').click(function () {
        $("section#main").removeClass('left').addClass('current');
        $('section#view').removeClass('current').addClass('right');
    });
});