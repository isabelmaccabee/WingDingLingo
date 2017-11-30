
$(document).ready(function() {
    var $chk = $("#grpChkBox input:checkbox"); 
    var $tbl = $("#someTable");
    var $tblhead = $("#someTable th");
 
    $chk.prop('checked', true); 
 
    $chk.click(function () {
        var colToHide = $tblhead.filter("." + $(this).attr("name"));
        var index = $(colToHide).index();
        $tbl.find('tr :nth-child(' + (index + 1) + ')').toggle();
    });

    $("#original").change(function() {
    	var originaltext=$(this).val();
    	alert("\"" + "originaltext" + "\"" + " " + "WILL BE TRANSLATED");
    	$("#wdt").val(originaltext);
    });
});

