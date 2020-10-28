$(document).ready(function() {

	//mask bg 없는 팝업
	$('.no_modal').click(function(e){
		e.preventDefault();
		var target = $(this).data('target');
			$(target).addClass('is-visible');
	
	});
	
	$('.cd-panel-close').click(function() {
		$(this).parents('.cd-panel').removeClass('is-visible')
	});	
	
	//mask bg 있는 팝업
	$('.modal').click(function(e){
		
		//달력기능오픈후 all_menu 닫기
		$('.pc_header .inner a').removeClass("on");
		$(".pc_header .inner .all_menu").css("display","none");

		e.preventDefault();
		
		var target = $(this).data('target');
	 	$(target).addClass('is-visible')

		$('#mask').show();
		$('body').css({'overflow-y': 'hidden', 'padding-right': '17px', 'box-sizing':'border-box'})

		
	});


	$('.close').click(function() {
		$(this).parents().removeClass('is-visible')
		$('#mask').hide();
		$('body').css({'overflow-y': 'auto', 'padding-right': '0', 'box-sizing':'content-box'})

	});


	
	$('.PopMask').click(function(e){
		
		e.preventDefault();
		$('#mask').hide();
		$(this).removeClass('is-visible')
		$('body').css({'overflow-y': 'auto', 'padding-right': '0', 'box-sizing':'content-box'})
	})
  
	$('.PopMaskInner').click(function(e){
		e.stopPropagation();
	})

	$('.tourPlaceList .txt label').click(function(){
		if(!$(this).hasClass('on')){
			$(this).prev().prop('checked', 'checked');
			$(this).addClass('on')
		} else {
			$(this).prev().prop('checked', '');
			$(this).removeClass('on')					
		}

		return false;
	})

	
});
