$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itembox').show('1000');
        }
        else{
            $('.itembox').not('.'+value).hide('1000');
            $('.itembox').filter('.'+value).show('1000');

        }
    })
    // add active class on selected item

    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})