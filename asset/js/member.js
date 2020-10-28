 "use strict";

 var show_mypage_plan_list =  function(pageNo,myid){
					$.ajax({
							async: true,
							url:"/member/member_proc.php",
							method: "POST",
							data:{
								"fName" : "myPlanList",
								"myid"  : myid,
								"pageNo"  : pageNo,
								"searchType" : "",
								"searchKey" : ""
							},
							complete : function(r){
							var res = r.responseText;
							
							$("#divPlanLists").html(res);
							
						}
						}
					);
					
			};
var emailcheck = function(strValue){
	var regExp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
	//입력을 안했으면
	if(strValue.lenght == 0)
	{return false;}

	//이메일 형식에 맞지않으면
	if (!strValue.match(regExp))
	{return false;}
	return true;
}; 
function open_type(type){
    if(type=="1"){
	     helpalert("사용가능한 아이디입니다.");
		 document.UserInfoForm.hidden_validid.value="1";
    }else if(type=="2"){
         helpalert('사용하실 수 없는 아이디입니다.');
		 document.UserInfoForm.hidden_validid.value = "0";
		 document.UserInfoForm.loginid.value = "";
		 document.UserInfoForm.loginid.focus();
	}else if(type=="3"){
         helpalert('사용가능한 별명입니다.');
		 document.UserInfoForm.hidden_validnick.value = "1";
		 
	}else if(type=="4"){
         helpalert('사용하실 수 없는 별명입니다.');
		 document.UserInfoForm.hidden_validnick.value = "0";
		 document.UserInfoForm.nickname.value = "";
		 document.UserInfoForm.nickname.focus();
	}
}
var join_ok = function() {
	var f = document.UserInfoForm;
	if (f.tname.value=="") {
        fhelpalert("이름을 입력하세요.","tname");
        f.tname.focus();
		return;
    }
	if (f.loginid.value=="") {
        fhelpalert("아이디를 입력하세요.","loginid");
        floginid.focus();
		return;
    }
	if (f.hidden_validid.value=="0") {
        helpalert("아이디중복체크를 먼저해 주세요.");
        return;
    }
	if (f.hidden_validnick.value=="0") {
        helpalert("닉네임중복체크를 먼저해 주세요.");
		f.nickname.focus();
		return;
    }
	if (f.loginpwd.value=="") {
        fhelpalert("비밀번호를 입력하세요.","loginpwd");
        f.loginpwd.focus();
		return;
    }
	if (f.loginpwd.value !=f.cloginpwd.value) {
        fhelpalert("비밀번호는 일치해야합니다.","loginpwd");
        f.cloginpwd.focus();
		return;
    }
	if (f.email.value=="" || emailcheck(f.email.value)==false) {
        helpalert("수신가능한 이메일주소를 입력하세요.");
        f.email.focus();
		return;
    }
	f.action="index.htm";
	f.submit();
}

 var sns_join_ok = function() {
	 var f = document.UserInfoForm;
	 if (f.email.value=="" || emailcheck(f.email.value)==false) {
		 helpalert("수신가능한 이메일주소를 입력하세요.");
		 f.email.focus();
		 return;
	 }
	 if (f.hidden_validnick.value=="0") {
		 helpalert("닉네임중복체크를 먼저해 주세요.");
		 f.nickname.focus();
		 return;
	 }

	 f.action="index.htm";
	 f.submit();
 }


function OpenCheckIDWindow()
{
	
	var userid = UserInfoForm.loginid.value;
    var check = /^([a-zA-z]){1}([0-9a-zA-Z])+$/; 
	
	if (userid.length < 4 || userid.length > 12) {
        fhelpalert("아이디는 4자이상 12자이하로 입력해주세요.","loginid");
		document.UserInfoForm.loginid.focus();
        return;
    }
	window.open('/member/dup_id.php?memberid=' + userid,'hiddenframe','width=0,height=0,top=0,left=0,statusbar=no,scrollbars=no,toolbar=no');
	
}
function OpenCheckNickWindow()
{
	var nickname = UserInfoForm.nickname.value;
    var user_id  = $("#loginid").val(); 
	var flag  = $("#nickflag").val();

	
	if (nickname.length < 1 ) {
        fhelpalert("닉네임은 1자이상으로 입력해주세요.","nickname");
		document.UserInfoForm.nickname.focus();
        return;
    }
	
	window.open('/member/dup_nick.php?user_id=' + user_id + '&nickname=' + nickname + '&flag='+flag,'hiddenframe','width=0,height=0,top=0,left=0,statusbar=no,scrollbars=no,toolbar=no');
	
}

var memedit = function() {
	var f = document.UserInfoForm;

	console.log( f.login_type.value)
	
	if (f.loginpwd.value=="" && f.login_type.value == "basic") {
        helpalert("현재 비밀번호를 입력하세요.");
        f.loginpwd.focus();
		return;
    }
	if (f.cloginpwd.value=="" && f.login_type.value == "basic") {
		helpalert("새 비밀번호를 입력하세요.");
		f.loginpwd.focus();
		return;
	}


	/*	if (f.loginpwd.value!=f.cloginpwd.value)
        {
            helpalert("비밀번호는 일치해야합니다.");
            f.cloginpwd.focus();

            return;
        }
        if (f.loginpwd.value !=f.cloginpwd.value) {
            helpalert("비밀번호는 일치해야합니다.");
            f.cloginpwd.focus();
            return;
        }*/
	if (f.email.value=="" || emailcheck(f.email.value)==false ) {
        helpalert("수신가능한 이메일주소를 입력하세요.");
        f.email.focus();
		return;
    }
	if (f.nickname.value==" ") {
        helpalert("닉네임을 입력해 주세요.");
        return;
    }


	if(f.login_type.value == "basic"){ // 일반회원가입사용자만 비밀번호를 체크한다.
		$.ajax({
			async: true,
			url:"medit_login_check.php",
			method: "POST",
			data:{
				"loginid" : f.loginid.value,
				"loginpwd"  : f.loginpwd.value,
				"cloginpwd"  : f.cloginpwd.value,
				"type" : f.login_type.value
			},
			complete : function(r){
				var res = r.responseText;

				if(res == "success"){
					f.submit();
				}else if(res == "fail"){
					helpalert("현재 비밀번호가 맞지 않습니다.");
					return;
				}

			}
		});
	}else{
		f.submit();
	}



};

 var memdel = function() {
	 var f = document.UserInfoForm;
	 f.action = "?act=mdel_ok";

	 var txt01 =
		 "주의하세요!\n" +
		 "탈퇴 시 삭제되는 정보와 유지되는 정보는 아래를 참고해 주세요.\n" +
		 "한 번 삭제된 정보는 복구가 불가능 합니다.\n" +
		 "* 계정 및 프로필 정보 삭제\n" +
		 "* 포인트, 레벨, 각종 혜택 정보 삭제\n" +
		 "* 내 예약 정보 삭제\n" +
		 "* 내 여행 및 장소 저장 정보 삭제\n" +
		 "* 공유 일정 및 리뷰, 사진 유지\n" +
		 "탈퇴합니다.";
	 var txt02 = "버튼 클릭 시 비밀번호 한 번 더 확인 절차 필요!!";

	 var result01 = confirm(txt01);

	 if(result01){
		 if(confirm(txt02)){
			 if (f.loginpwd.value=="" && f.login_type.value == "basic") {
				 helpalert("현재 비밀번호를 입력하세요.");
				 f.loginpwd.focus();
				 return;
			 }
			 if(f.login_type.value == "basic"){ // 일반회원가입사용자만 비밀번호를 체크한다.
				 $.ajax({
					 async: true,
					 url:"medit_login_check.php",
					 method: "POST",
					 data:{
						 "loginid" : f.loginid.value,
						 "loginpwd"  : f.loginpwd.value,
						 "cloginpwd"  : f.cloginpwd.value,
						 "type" : f.login_type.value
					 },
					 complete : function(r){
						 var res = r.responseText;

						 if(res == "success"){
							 f.submit();
						 }else if(res == "fail"){
							 helpalert("현재 비밀번호가 맞지 않습니다.");
							 return;
						 }

					 }
				 });
			 }else{
				 f.submit();
			 }

		 }
	 }

 };