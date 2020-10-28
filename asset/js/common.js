$(document).ready(function(){
	
	

	if($(window).width() > 640){
		$(".datepicker").datepicker({
			changeYear: true, 
			changeMonth: true, 
			dateFormat: "yy-mm-dd",
			showButtonPanel: true,
			showMonthAfterYear: true ,
			currentText: "오늘날짜",
			closeText: "닫기" ,
			monthSuffix: "년" ,
			dayNames: ['일요일','월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일','월', '화', '수', '목', '금', '토'], 
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			numberOfMonths: [1,2],
            minDate: 0,    

		})
	
         
	} else {	
		  
		$(".datepicker").datepicker({
			changeYear: true, 
			changeMonth: true, 
			dateFormat: "yy-mm-dd",
			showButtonPanel: true,
			showMonthAfterYear: true ,
			currentText: "오늘날짜",
			closeText: "닫기" ,
			monthSuffix: "년" ,
			dayNames: ['일요일','월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
			dayNamesMin: ['일','월', '화', '수', '목', '금', '토'],  
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			numberOfMonths: [1,1],
			minDate: 0,  
			beforeShow: function(input) {
				var i_offset= $(input).offset() +'50px';
				setTimeout(function(){
				   $('#ui-datepicker-div').css({'margin-top':'70px', 'bottom':'', 'left':'', 'right':'10px'})
				})
			}
		})	
	}
	//pc_header
	$('.pc_header .header .gnb > li > a').mouseenter(function(){
		$('.pc_header .header .gnb .sub_menu').hide()
		$(this).next('.sub_menu').show()
	})
	$('.pc_header .header .gnb').mouseleave(function(){
		$('.pc_header .header .gnb .sub_menu').hide()
	})
	var p_header = $('.pc_header .header')
	var offset = p_header.offset().top

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll>offset){
			p_header.addClass('on');
			$('.nation_info_wrap').css('top', '88px')
		} else{
			p_header.removeClass('on');
			$('.nation_info_wrap').css('top', '159px')
		}
		var bottom = $(document).height() - $(window).height() - $(document).scrollTop();

		if($(window).width()>1219){

			if (bottom <= 239){
				$(".footer .btn_wrap").addClass("off");
			} else {
				$(".footer .btn_wrap").removeClass("off");
			}
		}

		if($(window).width()>767){

			if (bottom <= 212){
				$(".footer .btn_wrap").addClass("off");
			} else {
				$(".footer .btn_wrap").removeClass("off");
			}
		}

	})
	$(window).trigger('scroll')



	//pc_header
	var gnb_target = $('body').data('target')
	$('.pc_header .header .gnb > li').find('> a'+'.'+gnb_target).addClass('on')
	

	//header 알림창
/*	$('.pc_header .gnb_notice a, .m_header .gnb_notice a').click(function(){
		$(this).next('.gnb_notice_open').toggle()
		return false;	
	})*/

	//m_header
	$( '.btn_menu' ).on('click', function() {
		$( '.navi' ).addClass('on');
		$( '.bg' ).show();
		$('body').addClass('on');
	});
	
	$( '.m_header .btn_close, .m_header .bg' ).on('click', function() {
		$( '.navi' ).removeClass('on');
		$( '.bg' ).hide();
		$('body').removeClass('on');
	});

   $( '.sub_menu li a.modal' ).on('click', function() {
		$( '.navi' ).removeClass('on');
		$( '.bg' ).hide();
		$('body').removeClass('on');
	});


	$(".m_header #m_gnb h2").click(function() {
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$(this).next('.sub_menu').stop().slideUp();
		} else{
			$(this).addClass("on");
			$(this).next('.sub_menu').stop().slideDown();
			$(this).parent().siblings().find('h2.on+.sub_menu').stop().slideUp();
			$(this).parent().siblings().find('h2.on').removeClass('on')
		}
	});	
 


$("#lssu1").click(function(e) {

		var count1 =0;var count2=0;var count3=0;
		var total = 0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
       count1 = count1-1;
       if(count1<0){
           count1=0;
		}
       total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#su_val1").val(count1);
                $("#wtr_su1").val(count1);
				
				
		}
	   $("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#rssu1").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		var total = 0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
        count1 = count1+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#su_val1").val(count1);		
				$("#wtr_su1").val(count1);
			
		}
	
		$("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	

$("#elssu1").click(function(e) {

		var count1 =0;var count2=0;var count3=0;
		var total = 0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
       count1 = count1-1;
       if(count1<0){
           count1=0;
		}
       total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#esu_val1").val(count1);
				$("#etr_su1").val(count1);
				
		}
	   $("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#erssu1").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		var total = 0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
        count1 = count1+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#esu_val1").val(count1);
				$("#etr_su1").val(count1);
				
				
		}
	
		$("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


$("#relssu1").click(function(e) {

		var count1 =0;var count2=0;var count3=0;
		var total = 0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
       count1 = count1-1;
       if(count1<0){
           count1=0;
		}
       total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#resu_val1").val(count1);
				$("#retr_su1").val(count1);
				
		}
	   $("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#rerssu1").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		var total = 0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
        count1 = count1+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#resu_val1").val(count1);
				$("#retr_su1").val(count1);
				
				
		}
	
		$("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	



$("#lssu2").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
        count2 = count2-1;

		if(count2<0){
           count2=0;
		}
		total = count1+count2+count3;
        
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#su_val2").val(count2);
				$("#wtr_su2").val(count2);
		}

       	$("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#rssu2").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
        count2 = count2+1;
        
       total = count1+count2+count3;
        
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#su_val2").val(count2);
				$("#wtr_su2").val(count2);
		}
	    $("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	

$("#elssu2").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
        count2 = count2-1;

		if(count2<0){
           count2=0;
		}
		total = count1+count2+count3;
        
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#esu_val2").val(count2);
				$("#etr_su2").val(count2);
		}
       	$("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#erssu2").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
        count2 = count2+1;
        
       total = count1+count2+count3;
        
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#esu_val2").val(count2);
				$("#etr_su2").val(count2);
		}
	    $("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	

$("#relssu2").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
        count2 = count2-1;

		if(count2<0){
           count2=0;
		}
		total = count1+count2+count3;
        
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#resu_val2").val(count2);
				$("#retr_su2").val(count2);
		}
       	$("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


	$("#rerssu2").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
        count2 = count2+1;
        
       total = count1+count2+count3;
        
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#resu_val2").val(count2);
				$("#retr_su2").val(count2);
		}
	    $("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	


$("#lssu3").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
        count3 = count3-1;
       
        if(count3<0){
           count3=0;
		}
        total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#su_val3").val(count3);
				$("#wtr_su3").val(count3);
				
		}
        $("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	



	$("#rssu3").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#su_val1").val());
		count2 = parseInt($("#su_val2").val());
		count3 = parseInt($("#su_val3").val());
        
        count3 = count3+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#su_val3").val(count3);
				$("#wtr_su3").val(count3);
		}
		$("#su_display").val("승객 :" +total);
		e.stopPropagation();
	});	

	$("#elssu3").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
        count3 = count3-1;
       
        if(count3<0){
           count3=0;
		}
        total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#esu_val3").val(count3);
				$("#etr_su3").val(count3);
				
		}
        $("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	



	$("#erssu3").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#esu_val1").val());
		count2 = parseInt($("#esu_val2").val());
		count3 = parseInt($("#esu_val3").val());
        
        count3 = count3+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#esu_val3").val(count3);
				$("#etr_su3").val(count3);
		}
		$("#esu_display").val("승객 :" +total);
		e.stopPropagation();
	});	

	$("#relssu3").click(function(e) {
		
		var count1 =0;var count2=0;var count3=0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
        count3 = count3-1;
       
        if(count3<0){
           count3=0;
		}
        total = count1+count2+count3;
	    if(total<1){
		     alert("한명이상선택해야합니다");	
			 return;
			 
		}else{
				$("#resu_val3").val(count3);
				$("#retr_su3").val(count3);
				
		}
        $("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	



	$("#rerssu3").click(function(e) {
		var count1 =0;
		var count2=0;
		var count3=0;
		count1 = parseInt($("#resu_val1").val());
		count2 = parseInt($("#resu_val2").val());
		count3 = parseInt($("#resu_val3").val());
        
        count3 = count3+1;
        total = count1+count2+count3;
	    if(total>9){
		     alert("9명을 초과할 수 없습니다.");	
			 return;
		}else{
				$("#resu_val3").val(count3);
				$("#retr_su3").val(count3);
		}
		$("#resu_display").val("승객 :" +total);
		e.stopPropagation();
	});	



	$("#su_display").click(function(e) {
          if($(".su-box").hasClass("on")){ $(".su-box").removeClass("on")             }
		  else{ $(".su-box").addClass("on")             }
		  var count1 =0;
		 var count2=0;
		 var count3=0;
		 var total = 0;

		 count1 = parseInt($("#su_val1").val());
		 count2 = parseInt($("#su_val2").val());
		 count3 = parseInt($("#su_val3").val());
		  total = count1+count2+count3;
        $("#su_display").val("승객 :" +total);  
		e.stopPropagation();
	});
	$("#esu_display").click(function(e) {
          if($(".su-box").hasClass("on")){ $(".su-box").removeClass("on")             }
		  else{ $(".su-box").addClass("on")             }
		  var count1 =0;
		 var count2=0;
		 var count3=0;
		 var total = 0;

		 count1 = parseInt($("#esu_val1").val());
		 count2 = parseInt($("#esu_val2").val());
		 count3 = parseInt($("#esu_val3").val());
		  total = count1+count2+count3;
        $("#esu_display").val("승객 :" +total);  
		e.stopPropagation();
	});
	$("#resu_display").click(function(e) {
          if($(".su-box").hasClass("on")){ $(".su-box").removeClass("on")             }
		  else{ $(".su-box").addClass("on")             }
		  var count1 =0;
		 var count2=0;
		 var count3=0;
		 var total = 0;
          console.log("resu_val1 => " + $("#resu_val2").val());
		 count1 = parseInt($("#resu_val1").val());
		 count2 = parseInt($("#resu_val2").val());
		 count3 = parseInt($("#resu_val3").val());
		  total = count1+count2+count3;
        $("#resu_display").val("승객 :" +total);  
		e.stopPropagation();
	});
	$(".su-box").click(function(e) {
          if($(".su-box").hasClass("on")){ $(".su-box").removeClass("on")             }
		  else{ $(".su-box").addClass("on")             }
	});
	//전체메뉴
	$('.btn_all_menu').click(function(){
		$(this).toggleClass('on');
		if($(this).hasClass('on')){
			$(this).next('.all_menu').stop().show()
		} else{
			$(this).next('.all_menu').stop().hide()
		}
		return false;
	})


	//즐겨찾기
	$('.bookmark').on('click', function(e) { 
		var bookmarkURL = window.location.href; 
		var bookmarkTitle = document.title;
		var triggerDefault = false; 
		if (window.sidebar && window.sidebar.addPanel) { 
			window.sidebar.addPanel(bookmarkTitle, bookmarkURL, ''); 
		} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) { 
			var $this = $(this); 
			$this.attr('href', bookmarkURL); 
			$this.attr('title', bookmarkTitle);
			$this.attr('rel', 'sidebar'); 
			$this.off(e); 
			triggerDefault = true; 

		} else if (window.external && ('AddFavorite' in window.external)) { 
			window.external.AddFavorite(bookmarkURL, bookmarkTitle); 
		} else { 
			alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.'); 
		} 
		return triggerDefault; 
	});

	
	//
	var offset_lnb = $('.lnb').offset();
    /*
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll>offset_lnb.top -80){
			$('.lnb').addClass('fixed')
		} else{
			$('.lnb').removeClass('fixed')
		}
	})
	*/
	
	
	// 메인비쥬얼
	$('.main_slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		dots: true,
		infinite: true,
		fade: true
	});

	//추천여행 - 슬라이드
	$('.recommend_slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		slidesToShow: 5,
		slidesToScroll: 1,
		slickSetOption: true,
		prevArrow: '.recommend-slick-prev', 
		nextArrow: '.recommend-slick-next',
		responsive: [
			{
				breakpoint: 4000,
				settings: {
				slidesToShow: 6,
				slidesToScroll: 1,

				}
			},
			{
				breakpoint: 1921,
				settings: {
				slidesToShow: 5,
				slidesToScroll: 1,

				}
			},

			{
				breakpoint: 1450,
				settings: {
				slidesToShow: 4,
				slidesToScroll: 1,

				}
			},
			{
				breakpoint: 800,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 640,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1
				}
			}
		]
	});

	//추천여행 - 마우스 오버시
	if($(window).width() > 1200){
		$('.recommend_slider .slick-slide').hover(function(){
			$(this).find('.pc_link').stop().animate({opacity: 1}, 300)
			$(this).find('.info').stop().animate({bottom: '-105px'}, 300)
		},function(){
			$(this).find('.pc_link').stop().animate({opacity: 0}, 100)
			$(this).find('.info').stop().animate({bottom: '0px'}, 300)
		})
	}

	//tab
	$("#m_tab_btn li:first-child a,#m_btn_spot li:first-child a ,.tab_cont_wrap .tab_cont:first-child").addClass('on')
	$(".tab_btn a").on("click", function(e){
		e.preventDefault();
		activeTab = $(this).attr("rel")

		$(this).parent('li').siblings().find('a').removeClass("on");
		$(this).addClass("on");

		$(this).parent('li').parent('.tab_btn').siblings('.tab_cont_wrap').find('.tab_cont').removeClass("on")
	  	$("#"+activeTab).addClass("on")
        //show_mypage_plan_list(1);
	});
	

	$(".tab_base_btn a").on("click", function(e){
		e.preventDefault();
		activeTab = $(this).attr("rel")

		$(this).parent('li').siblings().find('a').removeClass("on");
		$(this).addClass("on");

		$(this).parent('li').parent('.tab_btn').siblings('.tab_cont_wrap').find('.tab_cont').removeClass("on")
	  	$("#"+activeTab).addClass("on")
         fn_list_common_bbs();
	});

   
	//$(".tab_base_btn li:first-child a, .tour_list_wrap .tour_cont:first-child,.mypage_list_wrap .tour_cont:first-child").addClass('on')
	$(".tour_list_wrap .tour_cont:first-child,.mypage_list_wrap .tour_cont:first-child").addClass('on')

	$("ul#tab_zzim_cate li a").on("click", function(e){
		e.preventDefault();
		show_zzim_list(1);
	});

	/*
	$(".tab_btn a").on("click", function(e){
		e.preventDefault();
		activeTab = $(this).attr("rel")

		$(this).parent('li').siblings().find('a').removeClass("on");
		$(this).addClass("on");

		$(this).parent('li').parent('.tab_btn').siblings('.tour_list_wrap, .mypage_list_wrap').find('.tour_cont').removeClass("on")
		$("#"+activeTab).addClass("on")
        alert('2')
       
	});
	*/
	
    /*
	$(".m_lnb_dep2 .tab_btn a").on("click", function(e){
		e.preventDefault();
		activeTab = $(this).attr("rel")

		$(this).parent('li').siblings().find('a').removeClass("on");
		$(this).addClass("on");

		$(this).parents('.m_lnb').siblings('.sub_content').find('.tour_cont').removeClass("on")
		$("#"+activeTab).addClass("on")
        alert('3')

			
	});
	*/

	//TOP버튼
	$('.btn_top').click(function(){
		$('html, body').animate({scrollTop:0}, 500);
		return false;
	})

	$(window).resize(function(){
		if($('.content').hasClass('info')){
			if($(window).width()>1199){
				$('.btn_top').css('top','-50px')
			}
			if($(window).width()<1200){
				$('.btn_top').css('top','-226px')
			}
			if($(window).width()<768){
				$('.btn_top').css('top','-203px')
			}
		}	
	})

	$(window).trigger('resize')

	//스크롤바
	$(window).resize(function(){
		if($(window).width() > 1200){
			$('.overlay, #tourafter_snap_list, .boxScroll, .PopComment .comment_wrap, .more_wrap').slimScroll();
			$('.cd-panel-content .slimScrollDiv, .cd-panel-content .slimScrollDiv > div, .PopComment .slimeScrollDIv').css('height', '100%')
			$('.boxScroll').css('height', '1284px')
			$('.boxScroll').parent().css('height', '1284px')
			$('.PopComment .comment_wrap').css('height', '700px')
			$('.PopComment .comment_wrap').parent().css('height', '700px')
		} 
	})
	
	$(window).trigger('resize')
	
	
	//추천여행 cont_detail img_area
	 $('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: false,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 5 ,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  arrows: true,
	  focusOnSelect: true

	});

	//m_lnb
	$('.m_lnb > div.m_lnb_dep1 > a, .m_lnb > div.m_lnb_dep2:first-child > a').click(function(){
		if(!$(this).hasClass('active')){
			$(this).next('ul').stop().slideDown()
			$(this).addClass('active')
		} else{
			$(this).next('ul').stop().slideUp()
			$(this).removeClass('active')				
		}
		
		return false;
	})

	$('.m_lnb > div.m_lnb_dep2.v2 > a').click(function(){
		if(!$(this).hasClass('active')){
			$(this).next('ul').stop().slideDown()
			$(this).addClass('active')
		} else{
			$(this).next('ul').stop().slideUp()
			$(this).removeClass('active')				
		}
		return false
	})

	$('.m_lnb > div.m_lnb_dep2.v2 > ul > li > a').click(function(){
		var tname = $(this).text()
		$(this).parents('.m_lnb_dep2.v2').find('ul').stop().slideUp();
		$(this).parents('.m_lnb_dep2.v2').find('> a').removeClass('active')
		$(this).parents('.m_lnb_dep2.v2').find('> a').text(tname)
	})

	//이미지맵 리사이즈
    $('img[usemap]').rwdImageMaps();

	//마이페이지 - 포인트 보상내역
	$(".point_table > tbody > tr:nth-child(2) td").on("click", function(){
		activeTab = $(this).attr("rel")

		$(this).siblings('td').removeClass("on");
		$(this).addClass("on");

		$('.gift_wrap').find('.gift').removeClass("on")
		$("#"+activeTab).addClass("on")
	});

	$(document).on('click', 'div[class^="info-icon"]', function(){
		hide_icon(this);
		if ($(this).hasClass('reset-footer') === true) {
			$('.footer .btn_wrap').addClass('btn_wrap_reset');
		}
	});	
})

function hide_icon(t) {
	$(t).hide();
	var className = $(t).attr('class').split(' ');
	$.cookie(className[0], 'y', {expires: 30*12});
}


function confirmation(question,headtitle) {
    
	var defer = $.Deferred();
    $('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
             title: headtitle,
            buttons: {
                "예": function () {
                    $(this).dialog("close");
                    defer.resolve("true");//this text 'true' can be anything. But for this usage, it should be true or false.

                },
                "아니오": function () {
                    $(this).dialog("close");
                    defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.

                }
            },
            close: function () {
                $(this).remove();

            }
        });
		
    return defer.promise();
	
}

function es_confirmation(question,headtitle) {
	var defer = $.Deferred();
    // x= $(this).position().left - document.scrollLeft;
    //y= $(this).position().top - document.scrollTop;

	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
			position: {
			   my: 'center',
               at: "-120",
              of: $( 'html, body' )
			},
            title: headtitle,
            buttons: {
                "예": function () {
                    $(this).dialog("close");
                    defer.resolve("true");//this text 'true' can be anything. But for this usage, it should be true or false.

                },
                "아니오": function () {
                    $(this).dialog("close");
                    defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.

                }
            },
            close: function () {
                $(this).remove();

            }
        });
		
    return defer.promise();
	
}

function confirmation_day(question,headtitle) {
     var returnValue = null;
    var defer = $.Deferred();
   
	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: headtitle,
            buttons: {
                "예": function () {
                   $(this).dialog("close");
                   $("#question").val("y");


                },
                "아니오": function () {
                    $(this).dialog("close");
					  $("#question").val("n");

                   
                }
            },
            close: function () {
                $(this).remove();

            }
        });
		
    //return returnValue;
	//$(this).preventDefault();
}

function alarmconfirmation(question,headtitle) {
    var defer = $.Deferred();
    $('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: headtitle,
            buttons: {
               
                "확인": function () {
                    $(this).dialog("close");
                    defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.

                }
            },
            close: function () {
                $(this).remove();
            }
        });
    return defer.promise();
}

function helpalert(question) {
    var defer = $.Deferred();
	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: '확인',
           buttons: {
                "예": function () {
                    $(this).dialog("close");
                     defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.
                    $(this).find('select, input, textarea').first().blur();
                    
                }
            },
            close: function () {
                $(this).remove();
            }
        });
    //return defer.promise();
}

function nohelpalert(question) {
    var defer = $.Deferred();
	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: '확인',
            close: function () {
                $(this).remove();
            }
        });
    //return defer.promise();
}
function helpalertservice(question) {
    var defer = $.Deferred();
	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: 'Service Preparation',
            buttons: {
                "예": function () {
                    $(this).dialog("close");
                     defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.
                    $(this).find('select, input, textarea').first().blur();
                    
                }
            },
            close: function () {
                $(this).remove();
            }
        });
    //return defer.promise();
}


function helpalertloc(question,varlocation) {
    var defer = $.Deferred();
	$('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: '확인',
            buttons: {
               
                "예": function () {
                    $(this).dialog("close");
                     defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.
                    $(this).find('select, input, textarea').first().blur();
                    location.href=varlocation;   
                    
                }
            },
            close: function () {
                $(this).remove();
            }
        });
    //return defer.promise();
}


function fhelpalert(question,focusid) {
    var defer = $.Deferred();
    $('<div></div>')
        .html(question)
        .dialog({
            autoOpen: true,
            modal: true,
            title: '확인',
            buttons: {
                "예": function () {
                    $(this).dialog("close");
                     defer.resolve("false");//this text 'false' can be anything. But for this usage, it should be true or false.
					$(this).find('select, input, textarea').first().blur();
                }
            },
            close: function () {
				
                $(this).remove();
				$('#'+focusid).focus();
				
				
            }
        });
	//	console.log(defer.promise());
    //return defer.promise();
}


function go_login_url(url) { top.location.href= "/member/?act=login&request_url="+encodeURIComponent(url); }


