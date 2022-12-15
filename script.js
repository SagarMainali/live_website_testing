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

// function preFill() {
//      const vehicles = ["autofill_car", "autofill_jeep", "autofill_van", "autofill_hiace", "autofill_coaster", "autofill_bus"];
//      for (let i = 0; i < vehicles.length; i++) {
//           console.log(vehicles[i]);
//      }
// }

// using only if else statement
// function preFill(selected) {
//      var id_that_called_function = selected.id;
//      if (id_that_called_function = "car") {
//           document.getElementById("vehicletype").value = 1;
//      }
//      else if (id_that_called_function = "jeep") {
//           document.getElementById("vehicletype").value = 2;
//      }
// }

// using loop instead of for loops (more convenient)
function preFillVehicle(selected) {
     var id_that_called_the_function = selected.id;
     const vehiclelist = ["Car", "Jeep", "Van", "Hiace", "Coaster", "Bus"];
     for (let i = 0; i < vehiclelist.length; i++) {
          if (id_that_called_the_function == vehiclelist[i]) {
               document.getElementById("LEADCF6").value = vehiclelist[i];
               break;
          }
     }
}

function preFillService(selected) {
     var id_that_called_the_function = selected.id;
     const servicelist = ["Pick up/Drop off", "Sightseeing(Half day/Full day)", "Overnight Stays", "Disposal(Half day/Full day)", "Wedding and other ceremonies"];
     for (let i = 0; i < servicelist.length; i++) {
          if (id_that_called_the_function == servicelist[i]) {
               document.getElementById("LEADCF5").value = servicelist[i];
               break;
          }
     }
}