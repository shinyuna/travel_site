
let count = 0;

let length = $(".img_box div").length;

let slide = () => {
	console.log(count)
    let target = $(".img_box div").eq(count);
    target.fadeIn(500);    
    target.siblings().fadeOut(500);    

    count++;
    if(count >= length){
        count = 0;
    }
    
}
slide();
setInterval(slide,2000);



$(document)
	.on("mouseenter",".pk_list > ul > li",PackInfoUp)
	.on("mouseleave",".pk_list > ul > li",PackInfoDown)
	.on("click",".pack_list > ul > li",menuOn)


function PackInfoUp(){
	$(this).children(".info_wrap").stop().animate({"top":"70px"},200)
}
function PackInfoDown(){
	$(this).children(".info_wrap").stop().animate({"top":"180px"},200)
}
function menuOn () {
	
	let target = $(this);

		let index = target.index();

		$(".pack_list > ul > li").removeClass('on');
		target.addClass('on');


		$(".pk_list").hide();
		$(".pk_list").eq(index).show();
}
$(".pack_list > ul > li").first().click();
