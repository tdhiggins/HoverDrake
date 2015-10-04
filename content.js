(function() {

    (function repeat(){

        $("head").append('<style>.worstClass { color: gold; background-color: black } .startedClass { color: gold; background-color: black }</style>');

        var bod = $("body");

        var text = bod.html().split(' '),
            len = text.length,
            result = [];

        for( var i = 0; i < len; i++ ) {
            //console.log(text[i]);
            if (text[i].toLowerCase() == 'worst') {
                result[i] = '<span class="worstClass">' + text[i].toUpperCase() + '</span>';
                console.log('did');
            } else if (text[i].toLowerCase() == 'started'){
                result[i] = '<span class="startedClass">' + text[i].toUpperCase() + '</span>';
                console.log('did');
            } else {
                result[i] = text[i];
            }
        }

        bod.html(result.join(' '));

        var worstAudio = new Audio("http://media.soundcloud.com/stream/IQJ2usxDgTz5.mp3");
        var startedAudio = new Audio("http://media.soundcloud.com/stream/ITA6EVxs9YYF.mp3");

        $(".worstClass").hover(function(){
            console.log('here');
            worstAudio.play();
        }, function(){
            console.log('gone');
            worstAudio.pause();
        });

        $(".startedClass").hover(function(){
            console.log('here');
            startedAudio.play();
        }, function(){
            console.log('gone');
            startedAudio.pause();
        });

    })();

    setInterval(repeat, 2000);

})();