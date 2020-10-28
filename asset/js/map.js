"use_strict"

var maploaded = false;
var map;
var markers = [];
var locations;
var marks = [];
var infow = [];
var marks2 = [];
var infow2 = [];
var currentmarker;
var infoopenw = [];
var marker;
var ac_lat,ac_lng,zoom_size;
var infoWindow;
var infowindow;
var fn_pre_item_check = function(itemidx){
			 var ret = null;
			 var tblComponets = document.getElementById("tblComponents");
			 var divs2 = tblComponets.getElementsByClassName('redips-mark');

			  $(divs2).each(function(i){
					if(itemidx.toString() == $('.itemid', divs2[i]).text())ret=1;return;
			  });

			 return ret;
 };
var fn_pre_marker_check = function(markid){
  for (var i = 0, l = marks.length; i < l; i++) {
	//console.log("marks.getid=>" + marks[i].get("id") + " |  markid => " +  markid);
	if (marks[i].get("id")==markid) {

	  return false;
    }
  }
  return true;
}
var fn_pre_cart_check = function(markid){
  var tblComponets = document.getElementById("tblComponents");
  var divs2 = tblComponets.getElementsByClassName('redips-mark');
  var ret = 0;
  $(divs2).each(function(i){
					//console.log("a => " + markid.toString() + "b => " + $('.itemid', divs2[i]).text());
					if(markid.toString() == $('.itemid', divs2[i]).text()){
					          ret = 1;
					}
			  });
  return ret;
}
var fn_max_number_check = function(){
			 var maxnum = 0;
			 var tblComponets = document.getElementById("tblComponents");
			 var divs2 = tblComponets.getElementsByClassName('redips-mark');

			  $(divs2).each(function(i){
					if(parseInt($('.rlabel', divs2[i]).text()) > maxnum)maxnum=parseInt($('.rlabel', divs2[i]).text());
			  });

			 return maxnum+1;
 };
 var fn_timetable_check = function(cont_id){
			                 var check_cnt=0;
							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');

                               $(divs3).each(function(i){
									//if($('.cont_id', divs3[i]).text().toString())arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
									if(parseInt(cont_id)== parseInt($('.cont_id', divs3[i]).text().toString())){
									//	console.log(parseInt(cont_id) + "|" +  parseInt($('.cont_id', divs3[i]).text().toString()));
										check_cnt = check_cnt+1;
									//console.log("fetch_id =>" + $('.cont_id', divs3[i]).text().toString());
									}
                              });

			 return check_cnt;
 };
var fn_map_pre_check = function(idx){
			 var ret= "";
			 var tblComponets = document.getElementById("tblComponents");
			 var divs2 = tblComponets.getElementsByClassName('redips-mark');

			  $(divs2).each(function(i){
					//if(parseInt($('.itemid', divs2[i]).text())==parseInt(idx))return $('.rlabel', divs2[i]).text();
                    //console.log("이전값 체크:" + $('.itemid', divs2[i]).text() + ":" + idx);
				   	if($('.itemid', divs2[i]).text()==idx)ret = $('.rlabel', divs2[i]).text();



			  });

			 return ret;
 };
var infow_all_close = function(){
     for(var i=0;i=infow.length;i++){
         if(infow[i]) infow[i].close();
	 }
};

function mark_info_close(seq){
	/*
	 var match_id;
     for (var i = 0, l = marks.length; i < l; i++) {
           if(marks[i].get("id")==seq){
                  infow[i].close();
		   }
	 }
	 */
	 $( infow ).each(function( index ) {
									   infow[index].close();

									});

}
function mark_info_close2(seq){
	 var match_id;
     //console.log("marks_length => " + marks2.length + " | infow_length => " + infow2.length);

	$( infow2 ).each(function( index ) {
									   infow2[index].close();

									});
   /*
	 for (var i = 0, l = marks2.length; i < l; i++) {


		   if(marks2[i].get("id")==seq){
                 console.log("info =>" + i);
				 infow2[i].close();
		   }

	 }
	 */


}
function map_set_null(){
		if(arguments.length==0){
			for (var i = 0; i < marks.length; i++) {
					marks[i].setMap(null);
					marks[i].setLabel(null);
				}
		}else{
                //console.log("log marks :" + marks.length);
				for(var i = 0; i < marks.length; i++) {
				  marks[i].setMap(null);
				  marks[i].setLabel(null);
				//  console.log(marks[i].get("id") + ":" + $("#fix_mapid").text());
				 //if(marks[i].get("id") == $("#fix_mapid").text()){}
				  //else  marks[i].setMap(null);
				}
		}
   }
function map_set_null2(){
		if(arguments.length==0){
			for (var i = 0; i < marks2.length; i++) {
					marks2[i].setMap(null);

				}
		}else{
              //  console.log("log marks :" + marks.length);
				for(var i = 0; i < marks2.length; i++) {
				  marks2[i].setMap(null);
				  //console.log(marks2[i].get("id") + ":" + $("#fix_mapid").text());
				 //if(marks[i].get("id") == $("#fix_mapid").text()){}
				  //else  marks[i].setMap(null);
				}
		}
   }
function map_frame_set(country){
           var zoom_size;
		   var ac_lat,ac_lng;
           var arr_pos=[[ "태국",15.803459180317562, 101.05224609375,6]
						,["중국",39.9013086,106.6291809,6]
						,["베트남",10.8225153, 108.3251953125,6]
						,["하와이",21.3047285,157.8570557,6]
						,["일본",37.667472751450724, 140.3173828125,5]
						,["대만",24.10193383783937, 121.2451171875,7]
						,["캄보디아",11.5448729,104.8921668,6]];

					for(i=0;i<=arr_pos.length;i++){
                        if(arr_pos[i][0]==country){
						   ac_lat = arr_pos[i][1];
						   ac_lng = arr_pos[i][2];
						   zoom_size = arr_pos[i][3];
						    break;
						}

					}



					if(!zoom_size)zoom_size=5;

					 map = new google.maps.Map(document.getElementById('map'),
					{
						scrollwheel: true,
						zoom: zoom_size,
						center:new google.maps.LatLng(ac_lat, ac_lng),
						mapTypeId: google.maps.MapTypeId.ROADMAP

					});
					maploaded = true;
					var center = new google.maps.LatLng(ac_lat,ac_lng);

					map.panTo(center);


   }

var common_cart_add_point_load = function(){
					   try{
							//log.info( 'this is an info message' );
							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');


							 var arr_cart_idx = "";
							 var arr_cart_idx3 = "";


							  $(divs2).each(function(i){
									//alert(i + ':' + $('.itemid', divs2[i]).text());
									$('.rlabel', divs2[i]).text(i);
									//arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + "@" + i + ",";
									if($('.itemid', divs2[i]).text().toString() && $('.itemid', divs2[i]).text().toString()!="1673")arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
							  });

							  $(divs3).each(function(i){
									if($('.cont_id', divs3[i]).text().toString())arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
                              });
							  arr_cart_idx += arr_cart_idx3;

						   	//	console.log("arr_cart_idx : " + arr_cart_idx );

						   // init_cart_map_pos(''+ arr_cart_idx.slice(0,-1)+'',country);

							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1)
							},
							complete : function(r){
							  // console.log(r.responseText);
							},

							success: function(JSONObject) {
								var ax_locations = new Array();
								var i = 0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     i++;
									}
							}

							//console.log("ax_locations_initialize : " + ax_locations);

							initialize_load_add_cart_point(ax_locations);
							//_display_reload(country);
							}
							}
							);
							}catch(e){
							}
};
var delete_after_do = function(){

		   var ax_locations = new Array();

		  try{

							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var arr_cart_idx = "";

							// console.log("marks length==>"+ marks.length + " | " + "marks2 length ==>" + marks2.length);

							//console.log("current marker==>" + currentmarker);

						//	console.log("c marker==>" + marker);


							  for(i=0;i<marks.length;i++){
								  //console.log(" marks[i]==>" + marks[i].get("id"));
								    marks[i].setMap(null);
								 	marks[i].setLabel(null);

            	              }

							  marks.length=0;
							  infow.length=0;

							/*

                              $(divs2).each(function(i){
									$('.rlabel', divs2[i]).text(i);
									if($('.itemid', divs2[i]).text().toString() && $('.itemid', divs2[i]).text().toString()!="1673")arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
							  });

							 common_cart_point_load();
							 redips.init();
							 */
							 common_cart_point_load();

		  } catch(e){}

};
var delete_after_do_n = function(){
	       arround_get_bound_n($("#sel_cate").text(),$("#tr_country").val());

}
var call_itemidx_tmpidx_all = function(itemidx){
     var tmpidx = "";
	 var tblComponets = document.getElementById("tblComponents");
	 var divs2 = tblComponets.getElementsByClassName('redips-mark');
	 var arr_cart_idx = "";

	  $(divs2).each(function(i){
			if($('.itemid', divs2[i]).text()==itemidx){
			       tmpidx =  $('.rlabel', divs2[i]).text();
				   return false;
			}
	  });
	  if(tmpidx=="")tmpidx="00";
     return tmpidx;
};
var arround_get_bound_n = function(category,country){
//console.log("category => " + category + " | " + "country=>" +  country);
  var sel_id = $("#fix_mapid").text();
		  if(!sel_id)sel_id='';
		   $("#sel_cate").text(category);
		  var ax_locations = new Array();
        		  try{
							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');

     						 var arr_cart_idx = "";
							 var arr_cart_idx3 = "";
            				  for(i=0;i<marks.length;i++){
                                  marks[i].setMap(null);
								  marks[i].setLabel(null);
	                          }
							  marks = [];
							  infow = [];

							  $(divs2).each(function(i){
									$('.rlabel', divs2[i]).text(i);
									if($('.itemid', divs2[i]).text().toString() && $('.itemid', divs2[i]).text().toString()!="1673")arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
							  });

							 /*
							  $(divs3).each(function(i){
									if($('.cont_id', divs3[i]).text().toString() && $('.cont_id', divs3[i]).text().toString() !="1673")arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
                              });
							  */
							// arr_cart_idx += arr_cart_idx3;
                          /*
							console.log(
								"idx:"+arr_cart_idx.slice(0,-1),
							    "country:"+country,
								"category:"+category,
								 "minlat:" +  map.getBounds().getSouthWest().lat(),
								 "maxlat:"+ map.getBounds().getNorthEast().lat(),
								 "minlng:"+ map.getBounds().getSouthWest().lng(),
								 "maxlng:"+ map.getBounds().getNorthEast().lng(),
								"sel_id:"+ sel_id
								);
								*/
                            if(arr_cart_idx=="")arr_cart_idx="1673,";
							$.ajax({
								charset:"utf-8",
								url:"tour_list_google_all.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1),
							    "country":country,
								"category":category,
								 "minlat":  map.getBounds().getSouthWest().lat(),
								 "maxlat": map.getBounds().getNorthEast().lat(),
								 "minlng": map.getBounds().getSouthWest().lng(),
								 "maxlng": map.getBounds().getNorthEast().lng(),
								"sel_id": sel_id
							},
							complete : function(r){
									//console.log("reponseText :" + r.responseText);
								},
							success: function(JSONObject) {
												var j = 0;
												var json_obj =  jQuery.parseJSON(JSON.stringify(JSONObject));
												//var json_obj = $.parseJSON(JSONObject);//parse JSON
												var j = ax_locations.length;
												var c = 0;
                                               //console.log("access_log");
												//console.log("json_obj==>" + json_obj.length);

											    if(json_obj.length>0){
															for (var key in json_obj) {
																if(json_obj.hasOwnProperty(key)){
																	//console.log("idx : " + json_obj[key]["idx"] + "\n");

																//	if(fn_pre_cart_check(json_obj[key]["idx"])==0){
																		 ax_locations[j]=[''+json_obj[key]["sname"]+ '',''
																		 +json_obj[key]["r_lat"]+'',json_obj[key]["r_lng"],''
																		 +json_obj[key]["smark"]+'',json_obj[key]["idx"],call_itemidx_tmpidx_all(JSONObject[key]["idx"]),j,json_obj[key]["t_img"],json_obj[key]["cnt"],json_obj[key]["ppu_cnt"],json_obj[key]["mtitle"]];
																		 j++;
																	// }
																	// else{
                                                                         c++;
																	 //}

																}
														   }

															ninitialize_load(ax_locations);

															}
														  else{ helpalert("주변지역에 "+category+"정보가 없습니다. 지도를 이동하여 다른 지역선택후  카테고리버튼을 클릭하세요."); }

														}
														}
														);

							}catch(e){  }
}
var arround_get_bound = function(category,country){

		  var sel_id = $("#fix_mapid").text();
		  if(!sel_id)sel_id='';

          var ax_locations = new Array();
		  //marks.length=0;
		  //infow.length=0;

		  try{
							//log.info( 'this is an info message' );
							 //map_set_null();
							 //console.clear();
							 //console.log("garbage marks=>" + marks.length);
							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');


							 var arr_cart_idx = "";
							 var arr_cart_idx3 = "";
                              //console.log("marks arround length==>" + marks.length);
							  for(i=0;i<marks.length;i++){
                                  marks[i].setMap(null);
				              }

							  marks.length=0;
							  infow.length=0;

							  $(divs2).each(function(i){
									//alert(i + ':' + $('.itemid', divs2[i]).text());
									$('.rlabel', divs2[i]).text(i);
									//arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + "@" + i + ",";
									if($('.itemid', divs2[i]).text().toString() && $('.itemid', divs2[i]).text().toString()!="1673")arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
							  });

							  $(divs3).each(function(i){
									if($('.cont_id', divs3[i]).text().toString() && $('.cont_id', divs3[i]).text().toString() !="1673")arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
                              });
							  arr_cart_idx += arr_cart_idx3;

						   	//	console.log("arr_cart_idx : " + arr_cart_idx );

						   // init_cart_map_pos(''+ arr_cart_idx.slice(0,-1)+'',country);

							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1)
							},
							complete : function(r){
							  $.ajax({
								   charset: "utf-8",
								   url: "arround_bound_get.php",
								   type:"POST",
								   datType: "json",
								   data:{   "country":country,
											"category":category,
											"minlat":map.getBounds().getSouthWest().lat(),
											"maxlat":map.getBounds().getNorthEast().lat(),
											"minlng":map.getBounds().getSouthWest().lng(),
											"maxlng":map.getBounds().getNorthEast().lng(),
											"sel_id": sel_id
												},
								   complete :function(r){
									// alery("query => " + r.responseText);
								   },
								   success: function(JSONObject) {

													var j = 0;
													var json_obj = $.parseJSON(JSONObject);//parse JSON

															//console.log("ax_locations_length2 + :" + ax_locations.length);

														//	console.log("marks_length + :" + marks.length);
															var j = ax_locations.length;
															var c = 0;
															//console.log("ax_locations_length_new => " + json_obj.length);
															if(json_obj.length>0){
															for (var key in json_obj) {
																if(json_obj.hasOwnProperty(key)){
																	// console.log("idx:" + json_obj[key]["idx"]);
																	// if(fn_pre_marker_check(json_obj[key]["idx"])==true){
																	if(fn_pre_cart_check(json_obj[key]["idx"])==0){
																		 ax_locations[j]=[''+json_obj[key]["sname"]+ '',''
																		 +json_obj[key]["r_lat"]+'',json_obj[key]["r_lng"],''
																		 +json_obj[key]["smark"]+'',json_obj[key]["idx"],'00',j,json_obj[key]["t_img"],json_obj[key]["cnt"],json_obj[key]["ppu_cnt"],json_obj[key]["mtitle"]];
																		 j++;
																		// console.log(json_obj[key]["sname"]);
																	 }
																	 else{
                                                                         c++;
																	 }
																}
														   }
															//console.log("ax_locations_length_c => " + c);
															//console.log("ax_locations_length3 + :" + ax_locations.length);

															//console.log(ax_locations);
															ninitialize_load(ax_locations);

															}
														  else{ helpalert("주변지역에 "+category+"정보가 없습니다. 지도를 이동하여 다른 지역선택후  카테고리버튼을 클릭하세요."); }

														}

								}
							);
							},

							success: function(JSONObject) {
								var i = 0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     i++;
									}
									//console.log("ax_locations_length1 + :" + ax_locations.length);
							  }



							//_display_reload(country);
							}
							}
							);
							}catch(e){
							}

}
/*
var arround_get_bound = function(category,country){
		   var sel_id = $("#fix_mapid").text();

		   if(!sel_id)sel_id='';
		   console.clear();
		   $.ajax({
				   charset: "utf-8",
				   url: "arround_bound_get.php",
				   type:"POST",
				   datType: "json",
				   data:{   "country":country,
					        "category":category,
							"minlat":map.getBounds().getSouthWest().lat(),
							"maxlat":map.getBounds().getNorthEast().lat(),
							"minlng":map.getBounds().getSouthWest().lng(),
							"maxlng":map.getBounds().getNorthEast().lng(),
							"sel_id": sel_id
								},
                   complete :function(r){
					  console.log("query => " + r.responseText);
				   },
				   success: function(JSONObject) {
							var ax_locations = new Array();
									var i = 0;
									var json_obj = $.parseJSON(JSONObject);//parse JSON
									var ax_locations = new Array();
											var i = 0;
											if(json_obj.length>0){
											for (var key in json_obj) {
												if(json_obj.hasOwnProperty(key)){
													 if(fn_pre_marker_check(json_obj[key]["idx"])==true){
														 ax_locations[i]=[''+json_obj[key]["sname"]+ '',''
														 +json_obj[key]["r_lat"]+'',json_obj[key]["r_lng"],''
														 +json_obj[key]["smark"]+'',json_obj[key]["idx"],'',i,json_obj[key]["t_img"],json_obj[key]["cnt"],json_obj[key]["ppu_cnt"],json_obj[key]["mtitle"]];
														 i++;
													 }
												}
										   }
										    arround_common_map_load(ax_locations);

											}
										  else{ helpalert("주변지역에 "+category+"정보가 없습니다. 지도를 이동하여 다른 지역선택후  카테고리버튼을 클릭하세요."); }
										}
			    }
			);
};
*/
var common_cart_point_load_t= function(idx){
					   try{

							$.ajax({
								charset:"utf-8",
								url:"tour_plan_list.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": idx
							},
							beforeSend : function (){
                                  $("#loading").show();
								},
							complete : function(r){
							   //console.log("r query => " + r.responseText);
							   $("#loading").hide();
							},

							success: function(JSONObject) {
								var ax_locations = new Array();
								var i = 0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     i++;
									}

							}
							initialize_load(ax_locations);
							//console.log("ax_locatons = > " + ax_locations);
							}
							}
							);
							}catch(e){
							}

};

//#debug
var cart_set = function(){
							 var tblComponets = document.getElementById("tblComponents");
							 var divs = tblComponets.getElementsByClassName('redips-mark');

							 var arr_cart_idx ="";

							 $(divs).each(function(i){
									$('.rlabel', divs[i]).text(i);
									if($('.itemid', divs[i]).text().toString()){
								       if($('.itemid', divs[i]).text().toString()!="1673"){
									    arr_cart_idx  += $('.itemid', divs[i]).text().toString() + ",";
									                                                       }
										}
							  });
							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1)
							},
							beforeSend : function (){
                              //    $("#loading").show();
								},
							complete : function(r){
							    //  $("#loading").hide();
							},
							success: function(JSONObject) {
							var ax_locations = new Array();
								var i = 0,j=0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     //console.log("ax_locations[i] ==>" + ax_locations[i]);
										 i++;

									}
							       }
	   					 if(maploaded==false) map_frame_set($("#tr_country").val());
                           var ibOptions = {
									disableAutoPan: false
									,maxWidth: 0
									,pixelOffset: new google.maps.Size(-140, 0)
									,zIndex: null
									,boxStyle: {
								  padding: "0px 0px 0px 0px",
								  width: "252px",
								  height: "40px"
								},
								closeBoxURL : "",
								infoBoxClearance: new google.maps.Size(1, 1),
									isHidden: false,
									pane: "floatPane",
									enableEventPropagation: false
								};
						  var mark_length =0;
						  mark_length = marks.length;
						  for(i=0;i<marks.length;i++){
                                marks[i].setMap(null);
						  }
						  marks = new Array();
						  infow = new Array();

						  for (i = 0,l=ax_locations.length;i < l; i++) {

						  // 	   bound.extend( new google.maps.LatLng(ax_locations[i][1], ax_locations[i][2]) );
							   var markerIcon = {
								  url: ax_locations[i][3],
								  scaledSize: new google.maps.Size(30, 33),
								  origin: new google.maps.Point(0, 0),
								  labelOrigin: new google.maps.Point(18,20)
							                   };
							 var marker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(ax_locations[i][1],ax_locations[i][2]),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
							  label: {
								text: ax_locations[i][5] ,
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  },
                              id : ax_locations[i][4],
                              infoWindowIndex : i,
						      zIndex: null
							});
                            infowindow = new google.maps.InfoWindow({
									content: 'default'
								  });
							   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {

									//console.log("marker.getid => " + marker.get("id"));
									//ViewPopInfomap(this,marker.get("id"));
									//console.log("infowindow => " + infow.length);
									for(var k=0;k<infow.length;k++){
                                                    infow[k].close();
									}
                                    var marinfo_pop    = '';
									markinfo_pop   =  '<div class="tip" style="z-index:' + google.maps.Marker.MAX_ZINDEX + 1 + ';">';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+ax_locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+ax_locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+ax_locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+ax_locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+ax_locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+ax_locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfo(this,\''+ax_locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';


                                    marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 99999 );

									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());

									//console.log("zIndex Click : " + google.maps.Marker.MAX_ZINDEX + 1 );
                                  //  infow[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  99999);

									infowindow.setContent(markinfo_pop);
                            		infowindow.open(map, marker);

									marks[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  1);

									}
						  })(marker, i));

							 marks.push(marker);
							 infow[i]  = new google.maps.InfoWindow({pixelOffset: new google.maps.Size(0,3),zIndex:null});


                          }
							}});


};
var init_marker_load  = function(){
	//console.log("marks length==>" + marks.length);

	//if(marks.length>0){
		//for(int i=0;i<marks.length;i++){
				 //marks[i].setMap(null);
				 //marks[i].setLabel(null);

		//}
	//marks = [];
	//infow = [];
//	}

};
//#debug
var common_cart_point_load = function(){
					   //map_set_null();
					   try{
							//log.info( 'this is an info message' );
							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');


							 var arr_cart_idx = "";
							 var arr_cart_idx3 = "";


							 $(divs2).each(function(i){
									//alert(i + ':' + $('.itemid', divs2[i]).text());
									$('.rlabel', divs2[i]).text(i);
									//arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + "@" + i + ",";
									if($('.itemid', divs2[i]).text().toString()){
								       if($('.itemid', divs2[i]).text().toString() !="1673"){
									    arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
									                                                       }
										}
							  });

							  $(divs3).each(function(i){
									if($('.cont_id', divs3[i]).text().toString()){
										if($('.cont_id', divs3[i]).text().toString() !="1673"){
										arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
										}
									}
                              });
							  arr_cart_idx += arr_cart_idx3;

						   //	console.log("arr_cart_idx : " + arr_cart_idx );

						   // init_cart_map_pos(''+ arr_cart_idx.slice(0,-1)+'',country);
						   //console.log("cart_log => " + arr_cart_idx);

							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1)
							},
							beforeSend : function (){
                                  $("#loading").show();
								},
							complete : function(r){
							   //console.log(r.responseText);
							   $("#loading").hide();
							},

							success: function(JSONObject) {
								var ax_locations = new Array();
								var i = 0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     i++;
									}

							}
							initialize_load(ax_locations);
							}
							}
							);
							}catch(e){
							}
};

var common_cart_point_load_center = function(country){
					   try{
							//log.info( 'this is an info message' );
							 var tblComponets = document.getElementById("tblComponents");
							 var divs2 = tblComponets.getElementsByClassName('redips-mark');

							 var tblEditor =   document.getElementById("tblEditor");
							 var divs3 = tblEditor.getElementsByClassName('front-pro');


							 var arr_cart_idx = "";
							 var arr_cart_idx3 = "";


							  $(divs2).each(function(i){
									//alert(i + ':' + $('.itemid', divs2[i]).text());
									$('.rlabel', divs2[i]).text(i);
									//arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + "@" + i + ",";
									if($('.itemid', divs2[i]).text().toString() && $('.itemid', divs2[i]).text().toString()!="1673")arr_cart_idx  += $('.itemid', divs2[i]).text().toString() + ",";
							  });

							  $(divs3).each(function(i){
									if($('.cont_id', divs3[i]).text().toString())arr_cart_idx3 +=$('.cont_id', divs3[i]).text().toString() + ",";
                              });
							  arr_cart_idx += arr_cart_idx3;

						   	//console.log("arr_cart_idx : " + arr_cart_idx );

						   // init_cart_map_pos(''+ arr_cart_idx.slice(0,-1)+'',country);

							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": arr_cart_idx.slice(0,-1)
							},
							complete : function(r){
							   //console.log(r.responseText);
							},

							success: function(JSONObject) {
								var ax_locations = new Array();
								var i = 0;
								for (var key in JSONObject) {
									if(JSONObject.hasOwnProperty(key)){
										 ax_locations[i]=[''+JSONObject[key]["sname"]+ '',''
										 +JSONObject[key]["r_lat"]+'',JSONObject[key]["r_lng"],''
										 +JSONObject[key]["smark"]+'',JSONObject[key]["idx"],call_itemidx_tmpidx(JSONObject[key]["idx"]),i,JSONObject[key]["t_img"],JSONObject[key]["cnt"],JSONObject[key]["ppu_cnt"],JSONObject[key]["mtitle"]];
									     i++;
									}
							}

							//console.log("ax_locations_initialize : " + ax_locations);

							initialize_load(ax_locations);
							//_display_reload(country);
							}
							}
							);
							}catch(e){
							}
};





//Click arround point
var arround_common_map_load  = function(locations) {

				   var lat,lng;
				   var  i;
				   var str_info="";
				   var str_popinfo = "";
				   try
					 {
						//console.log("locations:clear" + locations);
						//setMapOnAll(null);
						//infow = new Array();

						if(maploaded==false)map_frame_set($("#country_txt").text());

						map_set_null2();

					    for (i = 0; i < locations.length; i++) {
                          //console.log("반환값:" +  fn_map_pre_check(locations[i][4]));

						   infow2[i]  = new google.maps.InfoWindow();

						   if(parseInt(fn_map_pre_check(locations[i][4]))>0){
                               marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : fn_icontocate(locations[i][3]),
									   scaledSize: new google.maps.Size(37,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
                               labelContent: fn_map_pre_check(locations[i][4]),
							   labelAnchor: new google.maps.Point(3, 30),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id: locations[i][4],
							   infoWindowIndex : i
							 });


						   }else{
						   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : locations[i][3],
									   scaledSize: new google.maps.Size(37,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
                               labelContent: locations[i][5],
							   labelAnchor: new google.maps.Point(3, 30),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id: locations[i][4],
                               infoWindowIndex : i
							 });
						   }
                         // console.log("marks exists check:" + fn_pre_marker_check(locations[i][4]));

						 // if(fn_pre_marker_check(locations[i][4]))
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									//console.log("marker get_id => " + marker.get("id"));


									mark_info_close(1);
									mark_info_close2(1);

									for(var i=0;i<marks2.length;i++){
												marks2[i].setZIndex(100);

										}


									//$("#fix_mapid").text(locations[i][4]);
									//str_info  = '<div class="scrollFix_o">';
									//str_info += locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');"><div class="cbtn cbwrite"><span>여행카트로보내기</span></div></a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+',this,\''+locations[i][0]+'\');">[여행후기보기]</a></div>';
									//주변여행지

									str_info   = '<div class="tip">   ';
									str_info += '		';
									str_info += '		<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" alt="" width="100%" height="100%" /></div>';
									str_info += '		<div class="txt">';
									str_info += '		<p class="tit">'+ locations[i][0] + '</p>';
									str_info += '		<p class="subtit">'+ locations[i][10] + '</p>';
									str_info += '		<ul class="num">';
									str_info += '			<li class="popular">인기도 '+locations[i][9]+'</li>';
									str_info += '					<li class="post">포스트 '+locations[i][8]+'</li></ul>';
									str_info += '						<ul class="btn">';
									str_info += '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									str_info += '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									str_info += '						</ul>';
									str_info += '					</div>';
									str_info += '				</div>';

									infow2[i].setContent(str_info);
                            		infow2[i].open(map, marker);
									marker.setAnimation(null);
									marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);
								    map.panTo(marks2[i].getPosition());
                                    pViewPopInfo(this,marker.get("id"));


									}
						  })(marker, i));

                       //  infow.push(infoWindow);
						 marks2.push(marker);


						/*
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);

									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'</div><a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a>');
                            		infow[i].open(map, marker);
									marker.setAnimation(null);

									}
						  })(marker, i));



						   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function() {
										// console.log(map.getBounds().getNorthEast().lat()); //lng
										$("#fix_mapid").text(marker.get("id"));

									}
						  })(marker, i));
						  */

						  google.maps.event.addListener(marker, 'bounds_changed', (function(marker, i) {
									return function() {
									// console.log("bound_changed");
									//console.log("bounds_changed");
									}
						  })(marker, i));

                           google.maps.event.addListener(marker, 'dragend', (function(marker, i) {
									return function() {
									alert('dragend');
									}
						  })(marker, i));


						//   }

							}


					 }
					 catch (e){ alert(e); }
					 finally{
							//setTimeout(function() { $("#cart_loader").hide();}, 1000);
						 }


					 google.maps.event.addListenerOnce(map, 'idle', function () {
							//setTimeout(function() { $("#cart_loader").hide();}, 1000);
						   });

};

function fn_icontocate(str_icon){
       var str;
     // console.log(str_icon.replace("mpoint","mmpoint"));
       str = str_icon.replace("mmpoint","mpoint");
	   //console.log(str);
	   return str;
}
function setMapOnAll(map) {
        for (var i = 0; i < marks.length; i++) {
          marks[i].setMap(map);
        }
      }
var common_map_load  = function(locations) {

				   var lat,lng;
				   var  i;
				   var str_info="";
				   var str_popinfo = "";
				   try
					 {
						//console.log("locations:clear" + locations);
						//setMapOnAll(null);
						//infow = new Array();

						if(maploaded==false)map_frame_set($("#country_txt").text());
						//$("#cart_loader").show();
						map_set_null();

					    for (i = 0; i < locations.length; i++) {
                          //console.log("반환값:" +  fn_map_pre_check(locations[i][4]));

						   infow[i]  = new google.maps.InfoWindow();

						   if(parseInt(fn_map_pre_check(locations[i][4]))>0){
                               marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : fn_icontocate(locations[i][3]),
									   scaledSize: new google.maps.Size(37,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
                               labelContent: fn_map_pre_check(locations[i][4]),
							   labelAnchor: new google.maps.Point(3, 30),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id: locations[i][4],
							   infoWindowIndex : i
							 });


						   }else{
						   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : locations[i][3],
									   scaledSize: new google.maps.Size(37,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
                               labelContent: locations[i][5],
							   labelAnchor: new google.maps.Point(3, 30),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id: locations[i][4],
                               infoWindowIndex : i
							 });
						   }
                         // console.log("marks exists check:" + fn_pre_marker_check(locations[i][4]));

						 // if(fn_pre_marker_check(locations[i][4]))
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									/*
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);
									*/
									mark_info_close(1);
                                    mark_info_close2(1);


									$("#fix_mapid").text(locations[i][4]);
									//str_info  = '<div class="scrollFix_o">';
									//str_info += locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');"><div class="cbtn cbwrite"><span>여행카트로보내기</span></div></a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+',this,\''+locations[i][0]+'\');">[여행후기보기]</a></div>';
									//주변여행지

									str_info   = '<div class="tip">   ';
									str_info += '		';
									str_info += '		<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" alt="" width="100%" height="100%" /></div>';
									str_info += '		<div class="txt">';
									str_info += '		<p class="tit">'+ locations[i][0] + '</p>';
									str_info += '		<p class="subtit">'+ locations[i][10] + '</p>';
									str_info += '		<ul class="num">';
									str_info += '			<li class="popular">인기도 '+locations[i][9]+'</li>';
									str_info += '					<li class="post">포스트 '+locations[i][8]+'</li></ul>';
									str_info += '						<ul class="btn">';
									str_info += '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									str_info += '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									str_info += '						</ul>';
									str_info += '					</div>';
									str_info += '				</div>';

								    infow[i].setContent(str_info);
                            		infow[i].open(map, marker);
									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());

									}
						  })(marker, i));

                       //  infow.push(infoWindow);
						 marks.push(marker);


						/*
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);

									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'</div><a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a>');
                            		infow[i].open(map, marker);
									marker.setAnimation(null);

									}
						  })(marker, i));



						   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function() {
										// console.log(map.getBounds().getNorthEast().lat()); //lng
										$("#fix_mapid").text(marker.get("id"));

									}
						  })(marker, i));
						  */

						  google.maps.event.addListener(marker, 'bounds_changed', (function(marker, i) {
									return function() {
									// console.log("bound_changed");
									//console.log("bounds_changed");
									}
						  })(marker, i));

                           google.maps.event.addListener(marker, 'dragend', (function(marker, i) {
									return function() {
								//	alert('dragend');
									}
						  })(marker, i));


						//   }

							}


					 }
					 catch (e){ alert(e); }
					 finally{
							//setTimeout(function() { $("#cart_loader").hide();}, 1000);
						 }


					 google.maps.event.addListenerOnce(map, 'idle', function () {
							//setTimeout(function() { $("#cart_loader").hide();}, 1000);
						   });

};

var initialize_load_add_cart_point  = function(locations) {

				   var lat,lng;
				   var markinfo_pop = "";
				   map_set_null();
				   infow = new Array();

				 if(maploaded==false){
					// map_frame_set($("#tr_country").val());


				 }
                 	  try{
						//$("#cart_loader").show();
						var bound = new google.maps.LatLngBounds();

					    for (var i = 0,l=locations.length;i < l; i++) {
						  infow[i]  = new google.maps.InfoWindow();

						  // bound.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );
						  /*
						   if (장바구니index에 있으면)
						   {
							   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(lat, lng),
							   map: map,
                               icon: { url : icon,
									   scaledSize: new google.maps.Size(32,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
							   labelContent: num,
							   labelAnchor: new google.maps.Point(15, 45),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id : idx
							 });
						   }
						   */
						   var markerIcon = {
							  url: locations[i][3],
							  scaledSize: new google.maps.Size(30, 33),
							  origin: new google.maps.Point(0, 0),
							  anchor: new google.maps.Point(18,55),
							  labelOrigin: new google.maps.Point(18,20)
							};


							var marker = new google.maps.Marker({
							  map: map,
							  animation: google.maps.Animation.DROP,
							  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  icon: markerIcon,
							  label: {
								text: locations[i][5],
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  }
							  ,
							  id : locations[i][4],
                              infoWindowIndex : i
							});

						   /*
						   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : locations[i][3],
									   scaledSize: new google.maps.Size(38,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
							   labelContent: locations[i][5],
                               labelClass: "labels",
							   labelStyle: {opacity: 1.0},
							   labelAnchor: new google.maps.Point(6,40),
                               labelInBackground: false,
							   id : locations[i][4],
                               infoWindowIndex : i
							 });
							 */


						/*
							google.maps.event.addListener(marker, 'click', function(event)
								{
									//map.panTo(event.latLng);

									$("#fix_mapid").text(marks[this.infoWindowIndex].get("id"));
									infow[this.infoWindowIndex].open(map, this);


								}
							);

						   var content = '<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>';
						   var infoWindow = new google.maps.InfoWindow({
								content : content
							});

                         infow.push(infoWindow);
						 */


						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {


									/*
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);
									*/
									//$("#fix_mapid").text(locations[i][4]);
									mark_info_close(locations[i][4]);
									mark_info_close2(locations[i][4]);


									markinfo_pop   =  '<div class="tip" >';
									markinfo_pop  +=  '					';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';

									marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);
									infow[i].setContent(markinfo_pop);
                            		infow[i].open(map, marker);
									marker.setAnimation(null);

									//map.panTo(marks[i].getPosition());



									}
						  })(marker, i));

							 marks.push(marker);

						}
                        /* 초기화로딩시 바운더리중앙에 20170718  */
						//map.setCenter(bound.getCenter());

						google.maps.event.addListener(map, 'click', function(event){

								$("#map_click_pos").text(event.latLng);
								});

						  /*

						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									//거리계산정보 기준점에서 주변 관광,숙박,맛집,교통
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);
									}
						  })(marker, i));



						   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function() {
										// console.log(map.getBounds().getNorthEast().lat()); //lng

										$("#fix_mapid").text(marker.get("id"));

									}
						  })(marker, i));

						  google.maps.event.addListener(marker, 'bounds_changed', (function(marker, i) {
									return function() {
									// console.log("bound_changed");
									console.log("bounds_changed");
									}
						  })(marker, i));

                           google.maps.event.addListener(marker, 'dragend', (function(marker, i) {
									return function() {
									alert('dragend');
									}
						  })(marker, i));

					        }
							google.maps.event.addListener(map, 'bounds_changed', (function () {
								var timer;
								return function() {

								}
							}()));
							*/


					 }
					 catch (e){ alert(e); }
					 finally{setTimeout(function() { $("#cart_loader").hide();}, 1000); }

					 google.maps.event.addListenerOnce(map, 'idle', function (){   });

};

var initialize_load_cart_point  = function(locations) {

				   var lat,lng;
				   var markinfo_pop = "";
				   map_set_null();
				   infow = new Array();

				 if(maploaded==false){
					 map_frame_set($("#tr_country").val());
				 }
                 	  try{
						//$("#cart_loader").show();
						var bound = new google.maps.LatLngBounds();

					    for (var i = 0,l=locations.length;i < l; i++) {
						   infow[i]  = new google.maps.InfoWindow();
						   bound.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );

						   var markerIcon = {
							  url: locations[i][3],
							  scaledSize: new google.maps.Size(30, 33),
							  origin: new google.maps.Point(0, 0),
							  labelOrigin: new google.maps.Point(18,20)
							};


							var marker = new google.maps.Marker({
							  map: map,
							  animation: google.maps.Animation.DROP,
							  position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  icon: markerIcon,
							  label: {
								text: locations[i][5],
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  }
							  ,
							  id : locations[i][4],
                              infoWindowIndex : i
							});

						   var zIndex = 99999;
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {

									mark_info_close(locations[i][4]);
									mark_info_close2(locations[i][4]);

									markinfo_pop   =  '<div class="tip" >';
									markinfo_pop  +=  '					';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';

									/*
                                    infow[i].setZIndex(zIndex++);
									infow[i].setContent(markinfo_pop);
                            		infow[i].open(map, marker);
                                    marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);
									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());
                                      */

									infow[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  1);
									infow[i].setContent(markinfo_pop);
                            		marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);

									infow[i].open(map, marker);
									marker.setAnimation(null);

									map.panTo(marks[i].getPosition());



									}
						  })(marker, i));

							 marks.push(marker);

						}
                        /* 초기화로딩시 바운더리중앙에 20170718  */
						map.setCenter(bound.getCenter());

						google.maps.event.addListener(map, 'click', function(event){
								$("#map_click_pos").text(event.latLng);
								});

						  /*

						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									//거리계산정보 기준점에서 주변 관광,숙박,맛집,교통
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);
									}
						  })(marker, i));



						   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function() {
										// console.log(map.getBounds().getNorthEast().lat()); //lng

										$("#fix_mapid").text(marker.get("id"));

									}
						  })(marker, i));

						  google.maps.event.addListener(marker, 'bounds_changed', (function(marker, i) {
									return function() {
									// console.log("bound_changed");
									//console.log("bounds_changed");
									}
						  })(marker, i));

                           google.maps.event.addListener(marker, 'dragend', (function(marker, i) {
									return function() {
									alert('dragend');
									}
						  })(marker, i));

					        }
							google.maps.event.addListener(map, 'bounds_changed', (function () {
								var timer;
								return function() {

								}
							}()));
							*/


					 }
					 catch (e){ alert(e); }
					 finally{setTimeout(function() { $("#cart_loader").hide();}, 1000); }

					 google.maps.event.addListenerOnce(map, 'idle', function (){   });

};

//시작시 지도데이타
var ninitialize_load  = function(locations) {
				   var lat,lng;
				   var sum_lat,sum_lng;
				   var markinfo_pop = "";

                   //alert(locations.length);

				   /*
				   for(i=0;i<marks.length;i++){
                         marks[i].setMap(null);
				   }
				   */


				 if(maploaded==false){
					 map_frame_set($("#tr_country").val());
				 }

                 	  try{
						//$("#cart_loader").show();
						var bound = new google.maps.LatLngBounds();

					    for (var i = 0,l=locations.length;i < l; i++) {
						   var ibOptions = {
									disableAutoPan: false
									,maxWidth: 0
									,pixelOffset: new google.maps.Size(-140, 0)
									,zIndex: null
									,boxStyle: {
								  padding: "0px 0px 0px 0px",
								  width: "252px",
								  height: "40px"
								},
								closeBoxURL : "",
								infoBoxClearance: new google.maps.Size(1, 1),
									isHidden: false,
									pane: "floatPane",
									enableEventPropagation: false
								};
						   infow[i]  = new google.maps.InfoWindow({pixelOffset: new google.maps.Size(0,3),zIndex:null});

						   bound.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );
						var markerIcon = {
								  url: locations[i][3],
								  scaledSize: new google.maps.Size(30, 33),
								  origin: new google.maps.Point(0, 0),
								  labelOrigin: new google.maps.Point(18,20)
							};

                            if(locations[i][5]=="00"){
							var marker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
                              id : locations[i][4],
                              infoWindowIndex : i,
						      zIndex: null
							});
							}else{
							var marker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
							  label: {
								text: locations[i][5] ,
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  },
                              id : locations[i][4],
                              infoWindowIndex : i,
						      zIndex: null
							});
						    }


						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									ViewPopInfomap(this,marker.get("id"));
									//console.log("marker.getid => " + marker.get("id"));
									/*
									mark_info_close(locations[i][4]);
									mark_info_close2(locations[i][4]);


                                    var marinfo_pop    = '';
									markinfo_pop   =  '<div class="tip" style="z-index:' + google.maps.Marker.MAX_ZINDEX + 1 + ';">';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfo(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';


                                    marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 99999 );

									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());

									console.log("zIndex Click : " + google.maps.Marker.MAX_ZINDEX + 1 );
                                    infow[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  99999);
									infow[i].setContent(markinfo_pop);
                            		infow[i].open(map, marker);
									*/
									marks[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  1);

									}
						  })(marker, i));

							 marks.push(marker);
                            // bound.extend(marks[i].getPosition());
							// console.log("marks getPosition => " + marks[i].getPosition());
						}
                      //   map.fitBounds(bound);
						 //marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 99999 );

                        /* 초기화로딩시 바운더리중앙에 20170718  */
						 //map.setCenter(bound.getCenter());
						/*
						var bounds = new google.maps.LatLngBounds();
						for (var i = 0; i < marks.length; i++) {
						 bounds.extend(maks[i].getPosition());
						}
						map.fitBounds(bounds);
						*/
						//console.log("sum.. log => " + sum_lat/locations.length+":"+sum_lng/locations.length);
						//map.setCenter(new google.maps.LatLng(sum_lat/locations.length,sum_lng/locations.length));
						/*
						google.maps.event.addListener(map, 'click', function(event){
								$("#map_click_pos").text(event.latLng);
								});
                         */
					 }
					 catch (e){ alert(e); }
					 finally{

						 //setTimeout(function() { }, 1000);

						 }

					 google.maps.event.addListenerOnce(map, 'idle', function (){  $("#loading").hide(); });

};

//시작시 지도데이타
var initialize_load  = function(locations) {
				   var lat,lng;
				   var sum_lat,sum_lng;
				   var markinfo_pop = "";

                   //alert(locations.length);

				   /*
				   for(i=0;i<marks.length;i++){
                         marks[i].setMap(null);
				   }
				   */


				 if(maploaded==false){
					 map_frame_set($("#tr_country").val());
				 }

                 	  try{
						//$("#cart_loader").show();
						var bound = new google.maps.LatLngBounds();
                        var l=0;
					    for (var i = 0,l=locations.length;i < l; i++) {
						   var ibOptions = {
									disableAutoPan: false
									,maxWidth: 0
									,pixelOffset: new google.maps.Size(-140, 0)
									,zIndex: null
									,boxStyle: {
								  padding: "0px 0px 0px 0px",
								  width: "252px",
								  height: "40px"
								},
								closeBoxURL : "",
								infoBoxClearance: new google.maps.Size(1, 1),
									isHidden: false,
									pane: "floatPane",
									enableEventPropagation: false
								};
						   infow[i]  = new google.maps.InfoWindow({pixelOffset: new google.maps.Size(0,3),zIndex:null});

						   bound.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );
						var markerIcon = {
								  url: locations[i][3],
								  scaledSize: new google.maps.Size(30, 33),
								  origin: new google.maps.Point(0, 0),
								  labelOrigin: new google.maps.Point(18,20)
							};

                            if(locations[i][5]=="00"){
							var currentmarker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
                              id : locations[i][4],
                              infoWindowIndex : i,
						      zIndex: null
							});
							}else{
				             try{
							var currentmarker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
							  label: {
								text: locations[i][5] ,
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  },
                              id : locations[i][4],
                              infoWindowIndex : i,
						      zIndex: null
							});
							  //console.log("mark push id=" + locations[i][4]);

							 }catch(e){}
						    }

                         //console.log("mark push id2=" + locations[i][4]);
						  google.maps.event.addListener(currentmarker, 'click', (function(marker, i) {
									return function(e) {
									ViewPopInfomap(this,marker.get("id"));


									//console.log("marker.getid => " + marker.get("id"));
									/*
									mark_info_close(locations[i][4]);
									mark_info_close2(locations[i][4]);


                                    var marinfo_pop    = '';
									markinfo_pop   =  '<div class="tip" style="z-index:' + google.maps.Marker.MAX_ZINDEX + 1 + ';">';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfo(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';


                                    marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 99999 );

									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());

									//console.log("zIndex Click : " + google.maps.Marker.MAX_ZINDEX + 1 );
                                    infow[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  99999);
									infow[i].setContent(markinfo_pop);
                            		infow[i].open(map, marker);
									*/
									marks[i].setZIndex(google.maps.Marker.MAX_ZINDEX +  1);

									}
						  })(currentmarker, i));

							 marks.push(currentmarker);
                             bound.extend(marks[i].getPosition());
							// console.log("marks getPosition => " + marks[i].getPosition());
						}
                         map.fitBounds(bound);
						 //marker.setZIndex(google.maps.Marker.MAX_ZINDEX + 99999 );

                        /* 초기화로딩시 바운더리중앙에 20170718  */
						 map.setCenter(bound.getCenter());
						/*
						var bounds = new google.maps.LatLngBounds();
						for (var i = 0; i < marks.length; i++) {
						 bounds.extend(maks[i].getPosition());
						}
						map.fitBounds(bounds);
						*/
						//console.log("sum.. log => " + sum_lat/locations.length+":"+sum_lng/locations.length);
						//map.setCenter(new google.maps.LatLng(sum_lat/locations.length,sum_lng/locations.length));
						/*
						google.maps.event.addListener(map, 'click', function(event){
								$("#map_click_pos").text(event.latLng);
								});
                         */
					 }
					 catch (e){ alert(e); }
					 finally{

						 //setTimeout(function() { }, 1000);

						 }

					 google.maps.event.addListenerOnce(map, 'idle', function (){  $("#loading").hide(); });

};


//시작시 지도데이타
var initialize_load_center_change  = function(locations,cpi) {

				   var lat,lng;
				   var markinfo_pop = "";
				   map_set_null();
				   infow = new Array();

				 if(maploaded==false){
					 map_frame_set($("#tr_country").val());
				 }
                 	  try{
						//$("#cart_loader").show();
						var bound = new google.maps.LatLngBounds();

					    for (var i = 0,l=locations.length;i < l; i++) {
						   infow[i]  = new google.maps.InfoWindow();
						   bound.extend( new google.maps.LatLng(locations[i][1], locations[i][2]) );

							var markerIcon = {
								  url: locations[i][3],
								  scaledSize: new google.maps.Size(30, 33),
								  origin: new google.maps.Point(0, 0),
								  labelOrigin: new google.maps.Point(18,20)
							};


							var marker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							  animation: google.maps.Animation.DROP,
							  icon: markerIcon,
							  label: {
								text: locations[i][5],
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  }
							  ,
							  id : locations[i][4],
                              infoWindowIndex : i
							});



                          var zIndex = 99999;
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									/*
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[i].setContent('<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>');
									infow[i].open(map, marker);
									marker.setAnimation(null);
									*/
									//$("#fix_mapid").text(locations[i][4]);

									mark_info_close(locations[i][4]);
									mark_info_close2(locations[i][4]);


									markinfo_pop   =  '<div class="tip" style="z-index:99999;">';
									markinfo_pop  +=  '					';
									markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+locations[i][7]+'" width="106" height="106" alt="" /></div>';
									markinfo_pop  +=  '					<div class="txt">';
									markinfo_pop  +=  '						<p class="tit">'+locations[i][0]+'</p>';
									markinfo_pop  +=  '						<p class="subtit">'+locations[i][10]+'</p>';
									markinfo_pop  +=  '						<ul class="num">';
									markinfo_pop  +=  '							<li class="popular">인기도 '+locations[i][9]+'</li>';
									markinfo_pop  +=  '							<li class="post">포스트 '+locations[i][8]+'</li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '						<ul class="btn">';
									markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+locations[i][4]+');">카트담기</a></li>';
									markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+locations[i][4]+'\');">여행후기</a></li>';
									markinfo_pop  +=  '						</ul>';
									markinfo_pop  +=  '					</div>';
									markinfo_pop  +=  '				</div>';




                                    infow[i].setZIndex(zIndex++);
									infow[i].setContent(markinfo_pop);
                            		infow[i].open(map, marker);
                                    marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);
									marker.setAnimation(null);
									map.panTo(marks[i].getPosition());

									}
						  })(marker, i));

							 marks.push(marker);

						}
                        /* 초기화로딩시 바운더리중앙에 20170718  */
						//map.setCenter(bound.getCenter());
                        map.setCenter(marks[cpi].getPosition());


						google.maps.event.addListener(map, 'click', function(event){
								$("#map_click_pos").text(event.latLng);
								});
					 }
					 catch (e){ alert(e); }
					 finally{setTimeout(function() { $("#cart_loader").hide();}, 1000); }

					 google.maps.event.addListenerOnce(map, 'idle', function (){   });

};

var one_add_mark = function(idx,item_name,icon,lat,lng,num,first_img){



}

//여행카트 클릭시
var add_mark_idx = function(idx,item_name,icon,lat,lng,num,first_img){
      var pci;
      var str_popinfo = "";
	  var lat,lng;
	  var item_name,icon,num,idx;

	  if(maploaded==false)map_frame_set($("#country_txt").text());
      //console.log(idx,item_name,icon,lat,lng,num);

	   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(lat, lng),
							   map: map,
                               icon: { url : icon,
									   scaledSize: new google.maps.Size(37,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
							   labelContent: num,
							   labelAnchor: new google.maps.Point(15, 45),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id : idx,
							   infoWindowIndex:1
							 });




							for(var i=0,l=marks.length;i<l;i++){
								if(idx==marks[i].get("id"))pci=i;

							}



                          // console.log("id:" + pci);


							$("#fix_mapid").text(idx);
                            var infowindow = new google.maps.InfoWindow();

							//map.setCenter(marks[pci].getPosition());

							//google.maps.event.trigger(map, "click");
							/*
							str_info  = '<div class="scrollFix_o">';
							str_info += '<div class="map-info-box">';
							str_info += '	<div class="info-pic">';
							str_info += '<img src="'+first_img+'" width="100%" height="100%">';
							str_info += '	</div>';
							str_info += '	<div class="info-txt-box">';
							str_info += '		<p class="pos-txt">'+ item_name + '</p>';
							str_info += '		<p class="clear"></p>';
							str_info += '		<div class="btn-box">';
							str_info += '<a href="javascript:tourcart_add_idx(\''+idx+'\');">';
							str_info += '<div class="btn-cart"><span>카트담기</span></div></a>';
							str_info += '<a href="javascript:go_detail_tourlist_idx('+idx+',this,\''+item_name+'\');">';
							str_info += '<div class="btn-after"><span>여행후기</span></div></a>';
							str_info += '</div>';
							str_info += '	</div>';
							str_info += '	</div>';
							str_info += ' </div>';
							*/
							$.ajax({
								charset:"utf-8",
								url:"tour_list_google.php",
								type: "POST",
								dataType: "json",
								data: {
								"idx": idx
							},
							complete : function(r){
								//console.log(r.responseText);
							},

							success: function(JSONObject) {
								var i = 0;
								for (var key in JSONObject) {
									str_popinfo   = '  <div class="tip">   ';
									str_popinfo  += '					';
									str_popinfo  += '					<div class="img"><img src="'+JSONObject[key]["first_img"]+'" alt="" width="100%" height="100%" /></div>';
									str_popinfo  += '					<div class="txt">';
									str_popinfo  += '						<p class="tit">'+ JSONObject[key]["sname"] + '</p>';
									str_popinfo  += '						<p class="subtit">'+ JSONObject[key]["mtitle"] + '</p>';
									str_popinfo  += '						<ul class="num">';
									str_popinfo  += '							<li class="popular">인기도 '+JSONObject[key]["ppu_cnt"]+'</li>';
									str_popinfo  += '							<li class="post">포스트 '+JSONObject[key]["cnt"]+'</li>';
									str_popinfo  += '						</ul>';
									str_popinfo  += '						<ul class="btn">';
									str_popinfo  += '							<li class="cart"><a href="javascript:tourcart_add_idx('+JSONObject[key]["idx"]+');">카트담기</a></li>';
									str_popinfo  += '							<li class="postscript"><a href="javascript:go_detail_tourlist_idx('+JSONObject[key]["idx"]+',this,\''+JSONObject[key]["sname"]+'\');">여행후기</a></li>';
									str_popinfo  += '						</ul>';
									str_popinfo  += '					</div>';
									str_popinfo  += '				</div>';

									infowindow.setContent(str_popinfo);
								}
							}
							}

							);



							map.panTo(marks[pci].getPosition());
						    infowindow.open(map, marks[pci]);

	                        marks.push(marker);
							google.maps.event.addListener(marker, 'click', function(event)
								{
									//map.panTo(event.latLng);
									infowindow.open(map, this);
									$("#fix_mapid").text(idx);
								}
							);




}
var cart_load_pos  = function(locations,obj,cid) {
				   var lat,lng;
				   var str_info = "";
				   var str_info2 = "";
				   var first_img = "";
				   map_set_null();
				   //infow = new Array();
				   //console.log(locations);
				   if(maploaded==false)map_frame_set($("#country_txt").text());
				      marks = new Array();
					  infow = new Array();
                 	  try{
						$("#cart_loader").show();
					    for (var i = 0,l=locations.length; i < l; i++) {
						   infow[i]  = new google.maps.InfoWindow();
						   marker = new MarkerWithLabel({
							   position: new google.maps.LatLng(locations[i][1], locations[i][2]),
							   map: map,
                               icon: { url : locations[i][3],
									   scaledSize: new google.maps.Size(32,48)
									    },
							   draggable: false,
							   raiseOnDrag: false,
							   labelContent: locations[i][5],
							   labelAnchor: new google.maps.Point(15, 45),
							   labelClass: "labels", // the CSS class for the label
							   labelInBackground: false,
							   id : locations[i][4],
                               infoWindowIndex : i
							 });

						/*
						   var content = '<div class="scrollFix_o">'+locations[i][0]+'<a href="javascript:tourcart_add_idx('+locations[i][4]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+locations[i][4]+');">[여행후기보기]</a></div>';
						   var infoWindow = new google.maps.InfoWindow({
								content : content
							});

                        // infow.push(infoWindow);

						*/
						  google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									mark_info_close(1);
									mark_info_close2(1);


									/*
									str_info  = '<div class="scrollFix_o">';
									str_info += '<div class="map-info-box">';
									str_info += '	<div class="info-pic">';
                                    str_info += '<img src="'+locations[i][7]+'" width="100%" height="100%">';
									str_info += '	</div>';
									str_info += '	<div class="info-txt-box">';
									str_info += '		<p class="pos-txt">'+ locations[i][0] + '</p>';
									str_info += '		<p class="clear"></p>';
									str_info += '		<div class="btn-box">';
									str_info += '<a href="javascript:tourcart_add_idx('+locations[i][4]+');">';
									str_info += '<div class="btn-cart"><span>카트담기</span></div></a>';
									str_info += '<a href="javascript:go_detail_tourlist_idx('+locations[i][4]+',this,\''+locations[i][0]+'\');">';
                                    str_info += '<div class="btn-after"><span>여행후기</span></div></a>';
									str_info += '</div>';
									str_info += '	</div>';
									str_info += '	</div>';
									str_info += ' </div>';
									*/
									str_info  = '<div class="scrollFix_o">';
									str_info += '<div class="map-info-box">';
									str_info += '	<div class="info-pic">';
									str_info += '<img src="'+locations[i][7]+'" width="100%" height="100%">';
									str_info += ' ';
									str_info += '	</div>';
									str_info += '	<div class="info-txt-box">';
									str_info += '		<p class="pos-txt">'+ locations[i][0] + '</p>';
									str_info += '		<p class="pos-title">'+ locations[i][10] + '</p>';
									str_info += '<div class="map-popular-box">';
									str_info += '<p><span class="vlike"></span><span class="fl ml2 cn_date" style="line-height: 30px;">인기도<span class="ml5">'+locations[i][9]+'</span>';
									str_info += '</span></p>';
									str_info += '<p style="margin-left: 10px; display: inline-block;"><span class="vpost"></span>';
									str_info += '<span class="fl ml2 cn_date" style="line-height: 30px;">포스트<span class="ml5">'+locations[i][8]+'</span></span></p>';
									str_info += '</div>';
									str_info += '		<p class="clear"></p>';
									str_info += '		<div class="btn-box">';
									str_info += '<a href="javascript:tourcart_add_idx('+locations[i][4]+');">';
									str_info += '<div class="btn-cart"><span>카트담기</span></div></a>';
									str_info += '<a href="javascript:go_detail_tourlist_idx('+locations[i][4]+',this,\''+locations[i][0]+'\');">';
									str_info += '<div class="btn-after"><span>여행후기</span></div></a>';
									str_info += '</div>';
									str_info += '	</div>';
									str_info += '	</div>';
									str_info += ' </div>';

									infow[i].setContent(str_info);
                            		infow[i].open(map, marker);
									marker.setAnimation(null);


									}
						  })(marker, i));

						 marks.push(marker);

						/*
							google.maps.event.addListener(marker, 'click', function(event)
								{

									map.panTo(event.latLng);
									infow[this.infoWindowIndex].open(map, this);
								}
							);
                         */

						/*
						 google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
									lat = e.latLng.lat();
									lng = e.latLng.lng();
									infow[this.infoWindowIndex].open(map, this);
                                    marker.setAnimation(null);


									}
						  })(marker, i));



						   google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function() {
										// console.log(map.getBounds().getNorthEast().lat()); //lng

										$("#fix_mapid").text(marker.get("id"));

									}
						  })(marker, i));
						  */

						  google.maps.event.addListener(marker, 'bounds_changed', (function(marker, i) {
									return function() {
									// console.log("bound_changed");
									//console.log("bounds_changed");
									}
						  })(marker, i));

                           google.maps.event.addListener(marker, 'dragend', (function(marker, i) {
									return function() {
									alert('dragend');
									}
						  })(marker, i));

					        }

						try{
							var arr_cid = cid.split('@');
							var latitude = arr_cid[1];
							var longitude = arr_cid[2];
							var item_name = "";
							var first_img = "";
							var pci;

							for(var i=0,l=marks.length;i<l;i++){
								if(arr_cid[0]==marks[i].get("id"))pci=i;

							}



                          // console.log("id:" + pci);

							if($(obj).find(".item_title").text().toString()==""){
							  item_name = $(obj).find(".cart_item_title").text().toString();
							}else{ item_name = $(obj).find(".item_title").text().toString();
							}
                            first_img = $(obj).find("#fimg").attr("src");
                            //console.log("first_img is " + first_img);
							$("#fix_mapid").text(arr_cid[0]);
                            var infowindow = new google.maps.InfoWindow();

							//map.setCenter(marks[pci].getPosition());

							//google.maps.event.trigger(map, "click");
							/*
							str_info2  = '<div class="scrollFix_o">';
							str_info2 += '<div class="map-info-box">';
							str_info2 += '	<div class="info-pic">';
							str_info2 += '<img src="'+locations[pci][7]+'" width="100%" height="100%">';
							str_info2 += '	</div>';
							str_info2 += '	<div class="info-txt-box">';
							str_info2 += '		<p class="pos-txt">'+ item_name + '</p>';
							str_info2 += '		<p class="clear"></p>';
							str_info2 += '		<div class="btn-box">';
							str_info2 += '<a href="javascript:tourcart_add_idx('+arr_cid[0]+');">';
							str_info2 += '<div class="btn-cart"><span>카트담기</span></div></a>';
							str_info2 += '<a href="javascript:go_detail_tourlist_idx('+arr_cid[0]+',this,\''+item_name+'\');">';
							str_info2 += '<div class="btn-after"><span>여행후기</span></div></a>';
							str_info2 += '</div>';
							str_info2 += '	</div>';
							str_info2 += '	</div>';
							str_info2 += ' </div>';
                             */
							str_info2  = '<div class="scrollFix_o">';
							str_info2 += '<div class="map-info-box">';
							str_info2 += '	<div class="info-pic">';
							str_info2 += '<img src="'+locations[i][7]+'" width="100%" height="100%">';
							str_info2 += ' ';
							str_info2 += '	</div>';
							str_info2 += '	<div class="info-txt-box">';
							str_info2 += '		<p class="pos-txt">'+ locations[i][0] + '</p>';
							str_info2 += '		<p class="pos-title">'+ locations[i][10] + '</p>';
							str_info2 += '<div class="map-popular-box">';
							str_info2 += '<p><span class="vlike"></span><span class="fl ml2 cn_date" style="line-height: 30px;">인기도<span class="ml5">'+locations[i][9]+'</span>';
							str_info2 += '</span></p>';
							str_info2 += '<p style="margin-left: 10px; display: inline-block;"><span class="vpost"></span>';
							str_info2 += '<span class="fl ml2 cn_date" style="line-height: 30px;">포스트<span class="ml5">'+locations[i][8]+'</span></span></p>';
							str_info2 += '</div>';
							str_info2 += '		<p class="clear"></p>';
							str_info2 += '		<div class="btn-box">';
							str_info2 += '<a href="javascript:tourcart_add_idx('+locations[i][4]+');">';
							str_info2 += '<div class="btn-cart"><span>카트담기</span></div></a>';
							str_info2 += '<a href="javascript:go_detail_tourlist_idx('+locations[i][4]+',this,\''+locations[i][0]+'\');">';
							str_info2 += '<div class="btn-after"><span>여행후기</span></div></a>';
							str_info2 += '</div>';
							str_info2 += '	</div>';
							str_info2 += '	</div>';
							str_info2 += ' </div>';

							$("#pos-title").text(item_name);

							infowindow.setContent(str_info2);
							map.panTo(marks[pci].getPosition());
						    infowindow.open(map, marks[pci]);




							//infowindow.setContent('<div class="scrollFix_o">'+item_name+'</div><a href="javascript:tourcart_add_idx('+arr_cid[0]+');">[여행카트로보내기]</a><a href="javascript:go_detail_tourlist_idx('+arr_cid[0]+');">[여행후기보기]</a>');
							//infowindow.open(map,marks[pci]);
						 }catch(e){}


							google.maps.event.addListener(map, 'bounds_changed', (function () {
								var timer;
								return function() {

								}
							}()));


					 }
					 catch (e){ alert(e); }
					 finally{
							setTimeout(function() { $("#cart_loader").hide();}, 1000);
						 }

					 google.maps.event.addListenerOnce(map, 'idle', function () {


						   });

};


 function tourcart_add_idx(idx){

	/*
	var tblComponets = document.getElementById("tblComponents");
	var divs2 = tblComponets.getElementsByClassName('redips-mark');
	var component2,JSONobj2=[],json2;

	for(j=0;j<divs2.length;j++){
	div2 = divs2[j];
	component2 = {};
	component2.idx = $('.itemid', div2).text();
		JSONobj2.push(component2);
	}
	if (JSONobj2.length > 0) {
		json2 = JSON.stringify(JSONobj2);
	}
	*/

	$.ajax({
		type: "POST",
		data: {
		"arr_idx": idx
		},
		url: "sel_data_call.php",
		dataType: "json",
		success: function(JSONObject) {
				var PlanCartHtml = "";
				var j = 0;
				var str_icn = "";
				var str_gubun = "";
				var call_j = 0;
				var num_call_max_auto = 0;
				var idx,icon,lat,lng,item_name,first_img;

				for (var key in JSONObject) {

				if (JSONObject.hasOwnProperty(key)) {
						if( (j%1)==0) { }
						//장바구니와 같이 맞추기

						// alert(fn_pre_item_check(JSONObject[key]["idx"]));
						//중복제거
						if(fn_pre_item_check(JSONObject[key]["idx"])==null){
							num_call_max_auto = parseInt(fn_max_number_check()) + parseInt(call_j);
							idx = JSONObject[key]["idx"];
							icon = '../asset/images/common/ico_plan_count0'+JSONObject[key]["cn_icn"]+'.png';

							lat  =  JSONObject[key]["r_lat"];
							lng  =  JSONObject[key]["r_lng"];
							first_img = JSONObject[key]["img"];
							item_name = JSONObject[key]["s_name"];
							PlanCartHtml  += '<tr>';
							PlanCartHtml  += '<td class="redips-mark" style="height:0px;">';
							PlanCartHtml  += '<div  ';
							PlanCartHtml  += ' class="redips-drag  cart cart-redips-clone " style="max-width:100%;max-height: 65px; height:65px;border:0px;background: #fcfaf5;font-size:14px;z-index:9999;"';
							PlanCartHtml  += ' id="'+JSONObject[key]["idx"]+'@'+ JSONObject[key]["r_lat"]+ '@' + JSONObject[key]["r_lng"]+'@">';
							PlanCartHtml  += '									  <table  class="redips-nolayout">';
							PlanCartHtml  += '											<tr>';
							PlanCartHtml  += '												<td class="img">';
							PlanCartHtml  += '													<img src="/manager/restaurant/scfile/thumnail/' + JSONObject[key]["img"] + '" alt="" id="fimg">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="icon tour">';
							PlanCartHtml  += '   <img src="/asset/images/sub/estimate/ico_round_map'+JSONObject[key]["c_icn"]+'.png"  align=absmiddle width="30">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="tit">';
							PlanCartHtml  += '													<div class="srctitle hide">' + JSONObject[key]["s_name"] + '</div> ';
							PlanCartHtml  += '													<p class="s_position hide">1,01</p>';
							PlanCartHtml  += '													<p class="r_lat hide">' + JSONObject[key]["r_lat"] + '</p>';
							PlanCartHtml  += '													<p class="r_lng hide">' + JSONObject[key]["r_lng"] + '</p>';
							PlanCartHtml  += '													<p class="category hide">' + JSONObject[key]["cate"] + '</p>';
							PlanCartHtml  += '													<p class="itemid hide">' + JSONObject[key]["idx"] + '</p>';
							PlanCartHtml  += '													<p class="city hide">' + JSONObject[key]["city"] + '</p>';
							PlanCartHtml  += '													<span class="cart_item_title">'+ JSONObject[key]["s_name"] + '</span>';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="utill">';
							PlanCartHtml  += '													<span class="rlabel">'+num_call_max_auto+'</span>';
							PlanCartHtml  += '<span class="close ignore"  onclick="javascript:CellDeletec(this,\''+JSONObject[key]["s_name"] +'\',\'c\');"><img src="/asset/images/sub/estimate/plan_close.png" alt="" /></span>';

							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '											</tr>';
							PlanCartHtml  += '									  </table>	';
							PlanCartHtml  += '									</div>';
							PlanCartHtml  += '									</td>';
							PlanCartHtml  += '									</tr>';

							call_j++;

							}
							j++;
							}
				}





				try{
				     if($("#tblComponents tbody tr:last").parents('tr').length>0){
						   	$("#tblComponents tbody tr:last").parents('tr').after(PlanCartHtml);
						  }else{
							$("#tblComponents tbody ").after(PlanCartHtml);
						  }
					arround_get_bound_n($("#sel_cate").text(),$("#tr_country").val());
					redips.init();
				}catch(e){}

				}


						 });

		     }
/*
 function mtourcart_add_idx(idx){
	$.ajax({
		async: false,
		type: "POST",
		data: {
		"arr_idx": idx
		},
		url: "sel_data_call.php",
		dataType: "json",
		success: function(JSONObject) {
				var PlanCartHtml = "";
				var j = 0;
				var str_icn = "";
				var str_gubun = "";
				var call_j = 0;
				var num_call_max_auto = 0;
				var idx,icon,lat,lng,item_name,first_img;

				for (var key in JSONObject) {

				if (JSONObject.hasOwnProperty(key)) {
						if( (j%1)==0) { }
						//장바구니와 같이 맞추기

						// alert(fn_pre_item_check(JSONObject[key]["idx"]));
						//중복제거
						if(fn_pre_item_check(JSONObject[key]["idx"])==null){
							num_call_max_auto = parseInt(fn_max_number_check()) + parseInt(call_j);
							idx = JSONObject[key]["idx"];
							icon = '../asset/images/common/ico_plan_count0'+JSONObject[key]["cn_icn"]+'.png';

							lat  =  JSONObject[key]["r_lat"];
							lng  =  JSONObject[key]["r_lng"];
							first_img = JSONObject[key]["img"];
							item_name = JSONObject[key]["s_name"];
							PlanCartHtml  += '<tr>';
							PlanCartHtml  += '<td class="redips-mark" style="height:0px;">';
							PlanCartHtml  += '<div  ';
							PlanCartHtml  += ' class="redips-drag  cart cart-redips-clone " style="max-width:100%;max-height: 60px; height:60px;border:0px;background: #fcfaf5;font-size:14px;z-index:9999;"';
							PlanCartHtml  += ' id="'+JSONObject[key]["idx"]+'@'+ JSONObject[key]["r_lat"]+ '@' + JSONObject[key]["r_lng"]+'@">';
							PlanCartHtml  += '									  <table  class="redips-nolayout">';
							PlanCartHtml  += '											<tr>';
							PlanCartHtml  += '												<td class="img">';
							PlanCartHtml  += '													<img src="/manager/restaurant/scfile/thumnail/' + JSONObject[key]["img"] + '" alt="" id="fimg">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="icon tour">';
							PlanCartHtml  += '   <img src="/asset/images/sub/estimate/ico_round_map'+JSONObject[key]["c_icn"]+'.png"  align=absmiddle width="30">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="tit">';
							PlanCartHtml  += '													<div class="srctitle hide">' + JSONObject[key]["s_name"] + '</div> ';
							PlanCartHtml  += '													<p class="s_position hide">1,01</p>';
							PlanCartHtml  += '													<p class="r_lat hide">' + JSONObject[key]["r_lat"] + '</p>';
							PlanCartHtml  += '													<p class="r_lng hide">' + JSONObject[key]["r_lng"] + '</p>';
							PlanCartHtml  += '													<p class="category hide">' + JSONObject[key]["cate"] + '</p>';
							PlanCartHtml  += '													<p class="itemid hide">' + JSONObject[key]["idx"] + '</p>';
							PlanCartHtml  += '													<p class="city hide">' + JSONObject[key]["city"] + '</p>';
							PlanCartHtml  += '													<span class="cart_item_title">'+ JSONObject[key]["s_name"] + '</span>';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="utill">';
							PlanCartHtml  += '													<span class="rlabel">'+num_call_max_auto+'</span>';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '											</tr>';
							PlanCartHtml  += '									  </table>	';
							PlanCartHtml  += '									</div>';
							PlanCartHtml  += '									</td>';
							PlanCartHtml  += '									</tr>';




							call_j++;

							}
							j++;
							}
				}


					  if($("#tblComponents tbody tr:last").parents('tr').length>0){
									//$("#tblComponents tbody tr:last").parents('tr').parents('tr').after(planHTML);
								    	$("#tblComponents tbody tr:last").parents('tr').after(PlanCartHtml);

									   // table = $('#tblComponents tbody tr:last').clone();
									//	table.attr('id','');
									//	document.write(PlanCartHtml);`


							  }else{
									$("#tblComponents tbody ").after(PlanCartHtml);
							  }

				//common_cart_point_load('<?=$tr_country?>');
				redips.init();

				if(num_call_max_auto>0){
					//해당마크삭제후 넘버링번호 마크를 찍어준다.
					 var matchi;
					 var markerIcon = {
								  url: icon,
								  scaledSize: new google.maps.Size(30, 33),
								  origin: new google.maps.Point(0, 0),
								  labelOrigin: new google.maps.Point(18,20)
							};

                      var arr_index = marks.length+1;
					  var marker = new google.maps.Marker({
							  map: map,
                              position: new google.maps.LatLng(lat, lng),
							  //animation: google.maps.Animation.DROP,
							  icon: markerIcon,
							  label: {
								text: num_call_max_auto.toString(),
								color: "#004080",
								fontSize: "15px",
								fontWeight: "bold"
							  }
							  ,
                              id : idx,
                              infoWindowIndex : arr_index
							});


                        markinfo_pop   =  '<div class="tip" style="z-index:99999;">';
						markinfo_pop  +=  '					<div class="img"><img src="/manager/restaurant/scfile/thumnail/'+first_img+'" width="106" height="106" alt="" /></div>';
						markinfo_pop  +=  '					<div class="txt">';
						markinfo_pop  +=  '						<p class="tit">'+item_name+'</p>';
						markinfo_pop  +=  '						<p class="subtit">'+item_name+'</p>';
						markinfo_pop  +=  '						<ul class="num">';
						markinfo_pop  +=  '							<li class="popular">인기도 0</li>';
						markinfo_pop  +=  '							<li class="post">포스트 0</li>';
						markinfo_pop  +=  '						</ul>';
						markinfo_pop  +=  '						<ul class="btn">';
						markinfo_pop  +=  '							<li class="cart"><a href="javascript:tourcart_add_idx('+idx+');">카트담기</a></li>';
						markinfo_pop  +=  '							<li class="postscript"><a href="javascript:ViewPopInfopop(this,\''+idx+'\');">여행후기</a></li>';
						markinfo_pop  +=  '						</ul>';
						markinfo_pop  +=  '					</div>';
						markinfo_pop  +=  '				</div>';

                        marker.setZIndex(google.maps.Marker.MAX_ZINDEX +  1);


						var infowindow = new google.maps.InfoWindow({
						  content: markinfo_pop
						});


						mark_info_close(1);
						mark_info_close2(1);


						 google.maps.event.addListener(marker, 'click', (function(marker, i) {
									return function(e) {
										 infowindow.open(map, marker);
									}

							 })(marker, i));



				}


				try{
				    redips.init();
				}catch(e){}

				}
						 });

		     }
			 */
 var  mtourcart_add_idx = function(idx){
	$.ajax({
		async: false,
		type: "POST",
		data: {
		"arr_idx": idx
		},
		url: "sel_data_call.php",
		dataType: "json",
		success: function(JSONObject) {
				var PlanCartHtml = "";
				var j = 0;
				var str_icn = "";
				var str_gubun = "";
				var call_j = 0;
				var num_call_max_auto = 0;
				var idx,icon,lat,lng,item_name,first_img;

				for (var key in JSONObject) {

				if (JSONObject.hasOwnProperty(key)) {
						if( (j%1)==0) { }
						//장바구니와 같이 맞추기

						// alert(fn_pre_item_check(JSONObject[key]["idx"]));
						//중복제거
						if(fn_pre_item_check(JSONObject[key]["idx"])==null){
							num_call_max_auto = parseInt(fn_max_number_check()) + parseInt(call_j);
							idx = JSONObject[key]["idx"];
							icon = '../asset/images/common/ico_plan_count0'+JSONObject[key]["cn_icn"]+'.png';

							lat  =  JSONObject[key]["r_lat"];
							lng  =  JSONObject[key]["r_lng"];
							first_img = JSONObject[key]["img"];
							item_name = JSONObject[key]["s_name"];
							PlanCartHtml  += '<tr>';
							PlanCartHtml  += '<td class="redips-mark" style="height:0px;">';
							PlanCartHtml  += '<div  ';
							PlanCartHtml  += ' class="redips-drag  cart cart-redips-clone " style="max-width:100%;max-height: 60px; height:60px;border:0px;background: #fcfaf5;font-size:14px;z-index:9999;"';
							PlanCartHtml  += ' id="'+JSONObject[key]["idx"]+'@'+ JSONObject[key]["r_lat"]+ '@' + JSONObject[key]["r_lng"]+'@">';
							PlanCartHtml  += '									  <table  class="redips-nolayout">';
							PlanCartHtml  += '											<tr>';
							PlanCartHtml  += '												<td class="img">';
							PlanCartHtml  += '													<img src="/manager/restaurant/scfile/thumnail/' + JSONObject[key]["img"] + '" alt="" id="fimg">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="icon tour">';
							PlanCartHtml  += '   <img src="/asset/images/sub/estimate/ico_round_map'+JSONObject[key]["c_icn"]+'.png"  align=absmiddle width="30">';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="tit">';
							PlanCartHtml  += '													<div class="srctitle hide">' + JSONObject[key]["s_name"] + '</div> ';
							PlanCartHtml  += '													<p class="s_position hide">1,01</p>';
							PlanCartHtml  += '													<p class="r_lat hide">' + JSONObject[key]["r_lat"] + '</p>';
							PlanCartHtml  += '													<p class="r_lng hide">' + JSONObject[key]["r_lng"] + '</p>';
							PlanCartHtml  += '													<p class="category hide">' + JSONObject[key]["cate"] + '</p>';
							PlanCartHtml  += '													<p class="itemid hide">' + JSONObject[key]["idx"] + '</p>';
							PlanCartHtml  += '													<p class="city hide">' + JSONObject[key]["city"] + '</p>';
							PlanCartHtml  += '													<span class="cart_item_title">'+ JSONObject[key]["s_name"] + '</span>';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '												<td class="utill">';
							PlanCartHtml  += '													<span class="rlabel">'+num_call_max_auto+'</span>';
							PlanCartHtml  += '												</td>';
							PlanCartHtml  += '											</tr>';
							PlanCartHtml  += '									  </table>	';
							PlanCartHtml  += '									</div>';
							PlanCartHtml  += '									</td>';
							PlanCartHtml  += '									</tr>';




							call_j++;

							}
							j++;
							}
				}


					  if($("#tblComponents tbody tr:last").parents('tr').length>0){
									//$("#tblComponents tbody tr:last").parents('tr').parents('tr').after(planHTML);
								    	$("#tblComponents tbody tr:last").parents('tr').after(PlanCartHtml);

									   // table = $('#tblComponents tbody tr:last').clone();
									//	table.attr('id','');
									//	document.write(PlanCartHtml);`


							  }else{
									$("#tblComponents tbody ").after(PlanCartHtml);
							  }



				try{
				    arround_get_bound_n($("#sel_cate").text(),$("#tr_country").val());
				   redips.init();

				}catch(e){}

				}
						 });

		     };
