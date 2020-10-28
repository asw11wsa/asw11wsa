var go_submit = function(){ 
	var f = document.frm1;
	var oContent = oEditors.getById["ir1"].getIR();
		f.contents.value = oContent;
		if(f.title.value.length==0){
             alert("제목을 입력하세요.");
			 f.title.focus();
		     return;
		}
		if(f.contents.value.length==0 || f.contents.value=="<br>" ||  f.contents.value=="<p><br></p>"){
             alert("내용을 입력하세요.");
			 oEditors.getById["ir1"].exec("FOCUS");
		     return;
		}
        
		f.act = "index.htm";
		f.submit();
};