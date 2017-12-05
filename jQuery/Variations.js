
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
    	alert("\"" + originaltext + "\"" + " " + "will be translated now!");
    	$("#wdt").val(originaltext);
        $("#wdt").css("font-family", "Wingdings");
    });

    $("#input-font").change(function () {
  		console.log(this.value);

        if(this.value == "Wingdings") {
  		    /*$(".output-text").css("font-family", this.value);*/
            $(".output-text").css("color", "Purple");
        }

        if(this.value == "Wingdings 2") {
            $(".output-text").css("color", "Blue");
        }

        if(this.value == "Wingdings 3") {
            $(".output-text").css("color", "Red");
        }
    });
});

