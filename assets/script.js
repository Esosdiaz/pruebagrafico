$(document).ready(function() {
    $(".my-progress-bar").circularProgress({
        line_width:20,
        color: "#A64477",
        starting_position: 25, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        //percentage: 13,
        text: "13"
    }).circularProgress('animate', 39, 1500);

    $(".my-progress-bar2").circularProgress({
        line_width:20,
        color: "#A64477",
        starting_position: 12, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        //percentage: 13,
        text: "20"
    }).circularProgress('animate', 60, 1500);
});
