var main = function () {
  "use strict";
$("a").on("click", function(){
     $("li").removeClass("selecteer");
     $(this).closest("li").addClass("selecteer");

     $("p").addClass("verborgen")
     var showparagraaf = $(this).closest("li").data("par");
     $(showparagraaf).removeClass("verborgen");

    });
};

$("document").ready(main);