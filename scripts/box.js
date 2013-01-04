$(document).ready(function() {
    $('.box').hover(function(){
        $(this).stop(true,true).animate({'height':'250','width':'250'},500);
    },
    function(){
        $(this).stop(true,true).animate({'height':'500','width':'500'},500);
    });
});