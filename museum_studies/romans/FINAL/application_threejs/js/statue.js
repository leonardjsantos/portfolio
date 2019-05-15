/*
3DHOP - 3D Heritage Online Presenter
Copyright (c) 2014, Marco Callieri - Visual Computing Lab, ISTI - CNR
All rights reserved.    

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

function initPanels() {
	$('.close').hover(
	  function() {
		$('#help_close, #info_v_close, #info_h_close').css("display", "none");
		$('#help_close_on, #info_v_close_on, #info_h_close_on').css("display", "inline");
	  }, function() {
		$('#help_close_on, #info_v_close_on, #info_h_close_on').css("display", "none");
		$('#help_close, #info_v_close, #info_h_close').css("display", "inline");
	  }
	);
} 

function helpSwitch() {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#info_pane_vertical').css("display", "none");
    $('#info_pane_horizontal').css("display", "none");
    $('#help_pane').css("display", "table");
    $('#help').css("visibility", "hidden");
    $('#help_on').css("visibility", "visible");
  }
  else{
    $('#cover').css("display", "none");
    $('#help_on').css("visibility", "hidden");
    $('#help').css("visibility", "visible");
  }
} 

function infoSwitch(type) {
  if($('#cover').css("display")=='none') {
    $('#cover').css("display", "table");
    $('#help_pane').css("display", "none");
    $('#info_pane_vertical').css("display", "none");
    $('#info_pane_horizontal').css("display", "none");
    $('#info_pane_' + type).css("display", "table");
  }
  else{
    $('#cover').css("display", "none");
  }
} 

function setInfo(hotspot){
	var txt;

	$('#hs1_img').css("display", "none");
	$('#hs2_img').css("display", "none");

	switch (hotspot){
		case "spot1":
			$('.hs_sub').text("The Young Pharaoh");
			$('#hs1_img').css("display", "table");
			$('.hs_text').html("Tutankhamun was an Egyptian pharaoh of the 18th dynasty (ruled ca. 1332 BC - 1323 BC in the conventional chronology), during the period of Egyptian history known as the New Kingdom.<br/><br/>The 1922 discovery by Howard Carter and George Herbert of Tutankhamun's nearly intact tomb received worldwide press coverage. It sparked a renewed public interest in ancient Egypt, for which Tutankhamun's burial mask, now in Cairo Museum, remains the popular symbol. Exhibits of artifacts from his tomb have toured the world.In February 2010, the results of DNA tests confirmed that&hellip;<br/><br/><center><a href='http://en.wikipedia.org/wiki/Tutankhamun' target='_blank'><i>...continue reading...</i></a></center>");
            break;
            
		case "spot2":
			$('.hs_sub').text("The Tomb");
			$('#hs2_img').css("display", "table");
			$('.hs_text').html("The tomb of the young pharaoh Tutankhamon was discovered in 1922 by Howard Carter in the Valley of the Kings.<br/><br/>The tomb was densely packed with items in great disarray. Carter was able to photograph garlands of flowers, which disintegrated when touched. Due to the state of the tomb, and to Carter's meticulous recording technique, the tomb&hellip;<br/><br/><center><a href='http://en.wikipedia.org/wiki/KV62' target='_blank'><i>...continue reading...</i></a></center>");
            break;

    case "spot3":
            $('.hs_sub').text("test");
            $('#hs3_img').css("display", "table");
            $('.hs_text').html("The tomb of the young pharaoh Tutankhamon was discovered in 1922 by Howard Carter in the Valley of the Kings.<br/><br/>The tomb was densely packed with items in great disarray. Carter was able to photograph garlands of flowers, which disintegrated when touched. Due to the state of the tomb, and to Carter's meticulous recording technique, the tomb&hellip;<br/><br/><center><a href='http://en.wikipedia.org/wiki/KV62' target='_blank'><i>...continue reading...</i></a></center>");
            break;
        
		default:
			$('.hs_sub').text("Hotspot Subtitle");
			$('.hs_text').html("Hotspot Text");
			break;
	}
}