

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
