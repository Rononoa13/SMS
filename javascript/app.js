

$(document).ready( function () {
  $('#example').DataTable();
});


$("#confirm_click").on("click",function(){

  console.log("click");

});

$('.fj-date').datepicker({
  format: "dd/mm/yyyy"
});
