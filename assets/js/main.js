//SideBar

// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft = "0";
// }

////=================////

//===Checkbox==//
$(document).on('change', '.hideCheckbox', function () {
    if ($(this).is(':checked')) {
        $(this).next().css({ 'background': '#42A4DF', 'color': 'white', 'border': '1px solid #42A4DF' });
    } else {
        $(this).next().css({ 'background': 'white', 'color': '#A3A3A3', 'border': '1px solid #E0E0E0' });
    }
});

$(document).on('click', '.labelSelectAll', function () {

    $('.hideCheckbox').each(function () {
        $('.hideCheckbox').prop('checked', true);
        $('.daysCheckbox').css({ 'background': '#42A4DF', 'color': 'white', 'border': '1px solid #42A4DF' });
    });
})

//===Show Image Name and Size on Upload in Add Journey Planner Modal===//
function readURL(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#uploadText').text(filename);
        $('#uploadSize').text(filesize + "Kb");
        $('.uploadFile').css('display', 'flex');
    }
}
$(".mediaInput").change(function () {
    readURL(this);
});
$("#crossImg").click(function () {
    $(".mediaInput").val("");
    $(".uploadFile").hide(200);
});

//===Show Image Name and Size on Upload in Add Destination Modal===//
function readURL(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#uploadTextDestination').text(filename);
        $('#uploadSizeDestination').text(filesize + "Kb");
        $('.uploadFileDestination').css('display', 'flex');
    }
}
$(".mediaInputDestination").change(function () {
    readURL(this);
});
$("#crossImgDestination").click(function () {
    $(".mediaInputDestination").val("");
    $(".uploadFileDestination").hide(200);
});

//===Keep Image Save on Press Cancel===//
var debug = true;
var evenMoreListeners = true;
if (evenMoreListeners) {
    var allFleChoosers = $("input[type='file']");
    addEventListenersTo(allFleChoosers);
    function addEventListenersTo(fileChooser) {
        fileChooser.change(function (event) { console.log("file( #" + event.target.id + " ) : " + event.target.value.split("\\").pop()) });
        fileChooser.click(function (event) { console.log("open( #" + event.target.id + " )") });
    }
}
var clone = {};
$(document).on('click', "input[type='file']", function () {
    var fileElement = event.target;
    if (fileElement.value != "") {
        if (debug) { console.log("Clone( #" + fileElement.id + " ) : " + fileElement.value.split("\\").pop()) }
        clone[fileElement.id] = $(fileElement).clone();
    }
});
$(document).on('change', "input[type='file']", function () {
    var fileElement = event.target;
    if (fileElement.value == "") {
        if (debug) { console.log("Restore( #" + fileElement.id + " ) : " + clone[fileElement.id].val().split("\\").pop()) }
        clone[fileElement.id].insertBefore(fileElement);
        $(fileElement).remove();
        if (evenMoreListeners) { addEventListenersTo(clone[fileElement.id]) }
    }
});

//===Show Destination Del Icon on Check===//
function del_Destination_Checkbox() {
    if ($('#delDestinationCheckbox:checked').length > 0) {
        $(".delDestination").show()
    } else {
        $(".delDestination").hide()
    }
}

$(document).on('change', '#delDestinationCheckbox', function (e) {
    del_Destination_Checkbox();
});

//================//
function del_Destination_Today() {
    if ($('#delDestinationTodayCheckbox:checked').length > 0) {
        $(".delDestinationToday").show()
    } else {
        $(".delDestinationToday").hide()
    }
}

$(document).on('change', '#delDestinationTodayCheckbox', function (e) {
    del_Destination_Today();
});

//================//
function del_Destination_Tomorrow() {
    if ($('#delDestinationTomorrowCheckbox:checked').length > 0) {
        $(".delDestinationTomorrow").show()
    } else {
        $(".delDestinationTomorrow").hide()
    }
}

$(document).on('change', '#delDestinationTomorrowCheckbox', function (e) {
    del_Destination_Tomorrow();
});

//================//
function del_Destination_Duesoon() {
    if ($('#delDestinationDuesoonCheckbox:checked').length > 0) {
        $(".delDestinationDuesoon").show()
    } else {
        $(".delDestinationDuesoon").hide()
    }
}

$(document).on('change', '#delDestinationDuesoonCheckbox', function (e) {
    del_Destination_Duesoon();
});

//================//
function del_Destination_Upcoming() {
    if ($('#delDestinationUpcomingCheckbox:checked').length > 0) {
        $(".delDestinationUpcoming").show()
    } else {
        $(".delDestinationUpcoming").hide()
    }
}

$(document).on('change', '#delDestinationUpcomingCheckbox', function (e) {
    del_Destination_Upcoming();
});

//================//
function del_Destination_Completed() {
    if ($('#delDestinationCompletedCheckbox:checked').length > 0) {
        $(".delDestinationCompleted").show()
    } else {
        $(".delDestinationCompleted").hide()
    }
}

$(document).on('change', '#delDestinationCompletedCheckbox', function (e) {
    del_Destination_Completed();
});

//================//
function del_Destination_Missed() {
    if ($('#delDestinationMissedCheckbox:checked').length > 0) {
        $(".delDestinationMissed").show()
    } else {
        $(".delDestinationMissed").hide()
    }
}

$(document).on('change', '#delDestinationMissedCheckbox', function (e) {
    del_Destination_Missed();
});

//===Ad Background Backdrop Modal in Modal===//
$(document).on('click', ".modalInModal", function () {
    var bd = $('<div class="modal-backdrop" style="opacity: 0.5;"></div>');
    bd.appendTo("#addJourneyModal");
    $(document).on('click', '.removeDropOff', function () {
        $(bd).remove();
    });
});
$(document).on('click', ".modalInModal", function () {
    var bd = $('<div class="modal-backdrop" style="opacity: 0.5;"></div>');
    bd.appendTo("#destinationsWithMapModal");
    $(document).on('click', '.removeDropOff', function () {
        $(bd).remove();
    });
});

//===Add Destinations Google Map===//
function initialize() {
    var markers = [];
    var map = new google.maps.Map(document.getElementById('addDestinationMap'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-33.8902, 151.1759),
        new google.maps.LatLng(-33.8474, 151.2631));
    map.fitBounds(defaultBounds);

    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('mapSearchInput'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} */(input));
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        // For each place, get the icon, place name, and location.
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);
    });
    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
    });
}
// google.maps.event.addDomListener(window, 'load', initialize);

//===Show Destinations Google Map===//
function initialize() {
    var markers = [];
    var map = new google.maps.Map(document.getElementById('showDestinationMap'), {
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(-33.8902, 151.1759),
        new google.maps.LatLng(-33.8474, 151.2631));
    map.fitBounds(defaultBounds);

    // Create the search box and link it to the UI element.
    var input = (
        document.getElementById('mapSearch'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
        (input));
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        // For each place, get the icon, place name, and location.
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });

            markers.push(marker);

            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);
    });
    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
    });
}

//===Date Range Picker===//
$(function () {
    var current_date = moment(new Date()).format("MMM DD Y");
    var date = new Date();
    var d = new Date(date),
        month = '' + (12),
        day = '' + d.getDate(),
        year = d.getFullYear();
    year = year - 1;
    if (month.length < 2)
        month = '0' + month + 1;
    if (day.length < 2)
        day = '0' + day;
    var previous_date = [month, day, year].join('/');
    previous_date = moment(previous_date).format("MMM DD Y");

    $('.multiselectCalender').daterangepicker({
        timePicker: true,
        startDate: moment(previous_date).format("MMM DD Y"),
        endDate: moment(new Date()).format("MMM DD Y"),
        locale: {
            format: 'MMM DD Y'
        }
    });
});

//===Table Rows Hide based on Checkboxes===//
$(document).ready(function () {
    var $chk = $("#tableItemsCheckbox input:checkbox");
    var $tbl = $("#journeysTable");
    $chk.prop('checked', true);
    $chk.click(function () {
        var colToHide = $tbl.find("." + $(this).attr("name"));
        $(colToHide).toggle();
    });
});



//===Donut Chart===//
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    var options = {
        'title': '',
        'width': 400,
        'height': 300,
        pieHole: 0.3,

        legend: {
            alignment: 'center',
            position: 'top',
            maxLines: 1,
            position: 'center',
            textStyle: {
                fontSize: 12
            }
        },
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutChartJourneyDashboard'));
    chart.draw(data, options);
}

//===Toggle Destinations on Dashboard===//
$(document).on('click', '.clicktoShowDestinations', function () {
    $(".toggleDestinations").toggle();
});