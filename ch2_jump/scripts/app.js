var max_discount = 10
function get_random(num){
    return Math.floor(Math.random()*num);
}

function gen_code(){
    var num_rand  = get_random($(".click_box").length);
    $(".click_box").each(function(index, value){
        if(num_rand == index){
            $(this).append("<span id = 'has_discount'></span>");
            return false;
        }
    })
}

function check_code(){
    var discount;
    if($.contains(this, document.getElementById("has_discount"))){
        discount = "<p>Your Discount is " + (get_random(max_discount) +1) + "%</p>";
    }else{
        discount = "<p>Sorry, no discount this time QQ </p>";
    }

    $(this).append(discount);
    $(this).unbind('click');
}

$(document).ready(function(){
    $(".click_box").click(check_code);

    gen_code();
    $(".click_box").hover(
        function(){
            $(this).addClass("my_hover");
        },
        function(){
            $(this).removeClass("my_hover");
        }
    );
    
});