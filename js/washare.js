var directionsService = new google.maps.DirectionsService();
var Distance;

function calcRoute() {
    var source = document.getElementById("txtSource").value;
    var destination = document.getElementById("txtDestination").value;
    var distanceInput = document.getElementById("distance");

    var request = {
        origin: source,
        destination: destination,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            Distance = response.routes[0].legs[0].distance.value / 1000;
            shareRide(Distance);
        } else {
            alert("Unable to find the distance via road.");
        }
    });


}

function shareRide(km) {

    var CalDistance = km;
    var JourneyPlan = $("input[name='selector1']:checked").val();
    var SourceLocation = $("#txtSource").val();
    var DestLocation = $("#txtDestination").val();
    var StartDate = $("#datepicker").val();
    var StartTime = $("#timepicker").val();
    var SeatNumb = $("#country1 option:selected").text();
    var JourneyType = $("#country").val();
    var ReturnDate = $("#datepicker1").val();
    var ReturnTime = $("#timepicker1").val();
    var VehicleNumb = $("#vehicleno").val();
    var VehicleModel = $("#vehiclemodel").val();
    var UserMessage = $("#userMessage").val();
    var pName = $("#pname").val();
    var PhoneNumber = $("#phnumber").val();
    if (SourceLocation != "" && DestLocation != "" && StartDate != "" && StartTime != "" && SeatNumb != "" && JourneyType != "" && PhoneNumber != "" && pName != "") {
        console.log("Sharing...");
        if (JourneyPlan == '1') {
            if (JourneyType == '1') {
                var Journey = " One Way"
            } else {
                var Journey = "Two Way (Return)"
            }
            var Request = "_*Request For CarPool*_"
            var contactDetails = "*Contact Details-*";
            var sMsg1 = encodeURIComponent(Request) + " %0A " +
                " %0A " + encodeURIComponent("*Journey Type:* " + (Journey)) +
                " %0A " + encodeURIComponent("*From:* " + (SourceLocation)) +
                " %0A " + encodeURIComponent("*To:* " + (DestLocation)) +
                " %0A " + encodeURIComponent("*Distance(One Side):* " + (CalDistance) + "Km") +
                " %0A " + encodeURIComponent("*Start Date:* " + (StartDate)) +
                " %0A " + encodeURIComponent("*Start Time:* " + (StartTime)) +
                " %0A " + encodeURIComponent("*Return Date:* " + (ReturnDate)) +
                " %0A " + encodeURIComponent("*Return Time:* " + (ReturnTime)) +
                " %0A " + encodeURIComponent("*Seats Required:* " + (SeatNumb)) +
                " %0A " + " %0A " + encodeURIComponent(contactDetails) + " %0A " +
                " %0A " + encodeURIComponent("*Name:* " + (pName)) +
                " %0A " + encodeURIComponent("*Contact No:* " + (PhoneNumber));

            var whatsapp_url = "https://api.whatsapp.com/send?text=" + sMsg1;
            window.location.href = whatsapp_url;

        }
        if (JourneyPlan == '2') {
            if (JourneyType == '1') {
                var Journey = " One Way"
            } else {
                var Journey = "Two Way (Return)"
            }
            var Offer = "*Offer For CarPool*";
            var contactDetails = "*Contact Details-*";
            var vehicleDetails = "*Vehicle Details-* (If any)";
            var sMsg2 = encodeURIComponent(Offer) + " %0A " +
                " %0A " + encodeURIComponent("*Journey Type:* " + (Journey)) +
                " %0A " + encodeURIComponent("*From:* " + (SourceLocation)) +
                " %0A " + encodeURIComponent("*To:* " + (DestLocation)) +
                " %0A " + encodeURIComponent("*Distance(One Side):* " + (CalDistance) + "Km") +
                " %0A " + encodeURIComponent("*Start Date:* " + (StartDate)) +
                " %0A " + encodeURIComponent("*Start Time:* " + (StartTime)) +
                " %0A " + encodeURIComponent("*Return Date:* " + (ReturnDate)) +
                " %0A " + encodeURIComponent("*Return Time:* " + (ReturnTime)) +
                " %0A " + encodeURIComponent("*Seats Available:* " + (SeatNumb)) +
                " %0A " + " %0A " + encodeURIComponent(vehicleDetails) + " %0A " +
                " %0A " + encodeURIComponent("*Vehicle Number:* " + (VehicleNumb)) +
                " %0A " + encodeURIComponent("*Model:* " + (VehicleModel)) +
                " %0A " + encodeURIComponent("*Remarks:* " + (UserMessage)) +
                " %0A " + " %0A " + encodeURIComponent(contactDetails) + " %0A " +
                " %0A " + encodeURIComponent("*Name:* " + (pName)) +
                " %0A " + encodeURIComponent("*Contact No:* " + (PhoneNumber));

            var whatsapp_url = "https://api.whatsapp.com/send?text=" + sMsg2;
            window.location.href = whatsapp_url;

        }

        $('#rideform')[0].reset();
        //window.location.href = '/index.html'; //relative to domain		
    }
}