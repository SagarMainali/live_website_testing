// toogle background color of navbar of homepage 
function changeBg() {
     var element = document.getElementById("hp-navbar");
     element.classList.toggle("change-bg");
}

// jquery for table search in pricing.html
$(document).ready(function () {
     $("#myInput").on("keyup", function () {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function () {
               $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
     });
});
