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
function readURL1(input) {
    if (input.files && input.files[0]) {
        var filename = input.files[0].name;
        var filesize = (input.files[0].size / 1024).toFixed(0);
        $('#uploadTextDestination').text(filename);
        $('#uploadSizeDestination').text(filesize + "Kb");
        $('.uploadFileDestination').css('display', 'flex');
    }
}
$(".mediaInputDestination").change(function () {
    readURL1(this);
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

// let poly;
// let map;

$(function () {

    var map = new google.maps.Map(document.getElementById('showDestinationMap'), {
        center: {
            lat: 27.72,
            lng: 85.36
        },
        Zoom: 15
    });

    var map = new google.maps.Map(document.getElementById('showDestinationMapDashboard'), {
        center: {
            lat: 27.72,
            lng: 85.36
        },
        Zoom: 15
    });

    var map = new google.maps.Map(document.getElementById('addDestinationMap'), {
        center: {
            lat: 27.72,
            lng: 85.36
        },
        Zoom: 15
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 27.72,
            lng: 85.36
        },
        map: map,
        draggable: true,
        animation: google.maps.Animation.BOUNCE
    });

    ////////Polylines////////
    // poly = new google.maps.Polyline({
    //     strokeColor: "red",
    //     strokeOpacity: 1.0,
    //     strokeWeight: 3,
    // });
    // poly.setMap(map);
    // map.addListener("click", addLatLng);

    // function addLatLng(event) {
    //     const path = poly.getPath();
    //     path.push(event.latLng);
    //     new google.maps.Marker({
    //         position: event.latLng,
    //         title: "#" + path.getLength(),
    //         map: map,
    //     });
    // }
    ////////End Polylines/////////

    var searchBox = new google.maps.places.SearchBox(document.getElementById('mapSearchInput'));

    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for (i = 0; place = places[i]; i++) {
            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location); //set marker position new...
        }
        map.fitBounds(bounds);
        map.setZoom(15);
    });

    new google.maps.event.addListener(marker, 'position_changed', function () {
        var lat = marker.getPosition().lat();
        var lng = marker.getPosition().lng();
        $('#mapLat').val(lat);
        $('#mapLng').val(lng);
    });
});



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
Highcharts.chart('donutChartJourneyDashboard', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: '70%',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        itemMarginTop: 10,
        itemMarginBottom: 10
    },
    series: [{
        // dataLabels: {
        //     enabled: true,
        //     formatter: function () {
        //         return Math.round(this.percentage * 100) / 100 + ' %';
        //     },
        //     distance: 10,
        //     color: 'white'
        // },
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: false,
            selected: true
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }]
    }]
});

//===Toggle Destinations on Dashboard===//
$(document).on('click', '.clicktoShowDestinations', function () {
    $(".toggleDestinations").toggle();
});

//===Multi Select Dropdown==//
window.onload = (event) => {
    initMultiselect();
};

function initMultiselect() {
    checkboxStatusChange();

    document.addEventListener("click", function (evt) {
        var flyoutElement = document.getElementById('myMultiselect'),
            targetElement = evt.target;

        do {
            if (targetElement == flyoutElement) {
                return;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);

        toggleCheckboxArea(true);
    });
}

function checkboxStatusChange() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];

    var values = [];
    var checkboxes = document.getElementById("mySelectOptions");
    var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');

    for (const item of checkedCheckboxes) {
        var checkboxValue = item.getAttribute('value');
        values.push(checkboxValue);
    }

    var dropdownValue = "Select consultant";
    if (values.length > 0) {
        dropdownValue = values.join(', ');
    }

    multiselectOption.innerText = dropdownValue;
}

function toggleCheckboxArea(onlyHide = false) {
    var checkboxes = document.getElementById("mySelectOptions");
    var displayValue = checkboxes.style.display;

    if (displayValue != "block") {
        if (onlyHide == false) {
            checkboxes.style.display = "block";
        }
    } else {
        checkboxes.style.display = "none";
    }
}

//===Search in Multi Select Dropdown===//
$(document).on('click', '.searchMultiselectButton', function () {
    $('.searchDivs p').hide();
    var txt = $('.searchMultiselect').val();
    $('.searchDivs p').each(function () {
        if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1) {
            $(this).show();
        }
    });
});

//===Dragable Divs===//
$(function () {
    $(".droppable, .ui-sortable").sortable();
});