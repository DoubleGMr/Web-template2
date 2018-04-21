$(function(){
	$('.search-button').click(function(){
		$(this).css('display','none');
		$('.search-box').slideToggle(500);
	});
	$('.second-button').click(function(){
		$('.second-list').slideToggle(500);
	});
	$('document,html').click(function(e){
		let c = $(e.target);
		if($('.search-box').css('display')=='block'){
			if(c.attr("class") !='search-box' && c.attr("class") !='search-button'){
				$('.search-box').css('display','none');
				$('.search-button').css('display','block');
			}
		}
		if($('.second-list').css('display')=='block'){
			if(!c.hasClass('second-list') && !c.parents().is('.second-button') ){
				$('.second-list').slideUp(500);
			}
		}
	});
});