const shipHome = {};

shipHome.answers = {
    nostromo: 0,
    milano: 0,
    millfalc: 0, 
    enterprise: 0,
    bsg: 0,
    serenity: 0,
    eaglefive: 0,
    rocinante: 0
}

shipHome.events = function () {
    $('form').on('submit', function(event){
        // This is where question 1 starts
        const shipValQ1 = $('input[name="q1"]:checked').attr('class');
        const shipArrayQ1 = shipValQ1.split(" ");
        for(let key in shipHome.answers) {
            shipArrayQ1.forEach(function(item){
                if(item === key) {
                    shipHome.answers[key] = shipHome.answers[key] + 1
                }
            });
        };
        // This is whee question 2 starts
        const shipValQ2 = $('input[name="q2"]:checked').attr('class');
        // console.log(shipValQ2);
        const shipArrayQ2 = shipValQ2.split(" ");
        for (let key in shipHome.answers) {
            shipArrayQ2.forEach(function (item) {
                if (item === key) {
                    shipHome.answers[key] = shipHome.answers[key] + 1
                }
            });
        };
        // This is whee question 3 starts
        const shipValQ3 = $('input[name="q3"]:checked').attr('class');
        // console.log(shipValQ3);
        const shipArrayQ3 = shipValQ3.split(" ");
        for (let key in shipHome.answers) {
            shipArrayQ3.forEach(function (item) {
                if (item === key) {
                    shipHome.answers[key] = shipHome.answers[key] + 1
                }
            });
        };
        // This is where question 4 starts
        const shipValQ4 = $('input[name="q4"]:checked').attr('class');
        // console.log(shipValQ4);
        const shipArrayQ4 = shipValQ4.split(" ");
        for (let key in shipHome.answers) {
            shipArrayQ4.forEach(function (item) {
                if (item === key) {
                    shipHome.answers[key] = shipHome.answers[key] + 1
                }
            });
        };
        // This is where question 5 starts
        const shipValQ5 = $('input[name="q5"]:checked').attr('class');
        const shipArrayQ5 = shipValQ5.split(" ");
        for (let key in shipHome.answers) {
            shipArrayQ5.forEach(function (item) {
                if (item === key) {
                    shipHome.answers[key] = shipHome.answers[key] + 1
                }
            });
        };        

        console.log(shipHome.answers);
        const finalAnswerArray = $.map(shipHome.answers, function(index, value){
            return [[value,index]];
        });
        console.log(finalAnswerArray);

        const final = _.max(finalAnswerArray, function(finalAnswer){
            return finalAnswer[1];
        });

        console.log(final);

        const finalDisplay = final[0];

        console.log(finalDisplay);

        if (finalDisplay === "nostromo"){
            console.log("nostromo!");
            $('.result_nostromo').show();
            event.preventDefault();
        }
        else if (finalDisplay === "milano"){
            console.log("milano!");
        }
        else if (finalDisplay === "millfalc") {
            console.log("millfalc!");
        }
        else if (finalDisplay === "enterprise") {
            console.log("enterprise!");
        }
        else if (finalDisplay === "bsg") {
            console.log("bsg!");
        }
        else if (finalDisplay === "serenity") {
            console.log("serenity!");
        }
        else if (finalDisplay === "eaglefive") {
            console.log("eaglefive!");
        }
        else if (finalDisplay === "rocinante") {
            console.log("rocinante!");
        }
        else {
            console.log("something went wrong!");
        }

    });
}

shipHome.init = function () {
    shipHome.events();
    $('input').prop('checked', false);
    // $('.answer_box').hide();
}

$(function(){
    shipHome.init();
});

// Need to allow user to only select one answer to each question - Done
// On submit, need add +1 to each property in shipHome where the answer was ticked - Done
// Need to evaluate totals for each ship - Done
// Need to determine which ship is the highest number - Done
// Need to display only the ship that is the answer on submit, the rest are always hidden
// Need to also determine what happens if there is a tie (random?)
// Need to display ship/answer