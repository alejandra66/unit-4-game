$(document).ready(function () {

    // Global variables
    
    var randomNumber;
    var num1;
    var num2;
    var num3;
    var num4;
    var userTotal = 0;
    var wins = 0;
    var losses = 0

    // Functions

    function reset() {
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        randomNumber = Math.floor(Math.random() * 101 + 19);
        userTotal = 0;
        $("#total-score").text(userTotal);
        $("#random-number").text(randomNumber);
    }

    function initialize() {
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        randomNumber = Math.floor(Math.random() * 101 + 19);
        $("#random-number").text(randomNumber);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#total-score").text(userTotal);
    }
    function logic() {
        if (userTotal === randomNumber) {
            alert("You Win!");
            reset();
            wins++;
            $("#wins").text(wins);
        }
        else if (userTotal > randomNumber) {
            alert("You lose!");
            reset();
            losses++;
            $("#losses").text(losses);
        }
    }

    initialize();

    $("#red").on("click", function () {
        userTotal = userTotal + num1;
        $("#total-score").text(userTotal);
        console.log(userTotal);
        logic();
    })

    $("#green").on("click", function () {
        userTotal = userTotal + num2;
        $("#total-score").text(userTotal);
        console.log(userTotal);
        logic();
    })

    $("#blue").on("click", function () {
        userTotal = userTotal + num3;
        $("#total-score").text(userTotal);
        console.log(userTotal);
        logic();
    })

    $("#purple").on("click", function () {
        userTotal = userTotal + num4;
        $("#total-score").text(userTotal);
        console.log(userTotal);
        logic();
    })
});
