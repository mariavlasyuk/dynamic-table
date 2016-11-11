$(document).ready(function() {
    $.getJSON('seriea.json', function(data) {
        var table = document.getElementById('main-table');
        //Forming a table and adding all necessary classes to the elements 
        for (var item in data.teams) {
            var row = table.tBodies[0].insertRow(-1);
            row.insertCell(-1).innerHTML = data.teams[item].place;
            row.insertCell(-1).innerHTML = "<a href="+data.teams[item].tag_url+">"+data.teams[item].name+"</a>";
            row.insertCell(-1).innerHTML = data.teams[item].matches;
            row.insertCell(-1).innerHTML = data.teams[item].win;
            row.insertCell(-1).innerHTML = data.teams[item].draw;
            row.insertCell(-1).innerHTML = data.teams[item].lose;
            row.insertCell(-1).innerHTML = data.teams[item].goals;
            row.insertCell(-1).innerHTML = data.teams[item].conceded_goals;
            row.insertCell(-1).innerHTML = data.teams[item].score;
            $(row.cells[0]).addClass("main-table__col_place");
            if (data.teams[item].color == 1) $(row.cells[0]).addClass("main-table__col_place-green");
            if (data.teams[item].color == 2) $(row.cells[0]).addClass("main-table__col_place-light-green");
            if (data.teams[item].color == 4) $(row.cells[0]).addClass("main-table__col_place-red");
            $(row.cells[1]).addClass("main-table__col_name");
            $(row.cells[1]).prepend("<img src='italy_flag.png' alt='' class='main-table__img_flag'>");
            $(row.cells[2]).addClass("main-table__col_matches");
            $(row.cells[3]).addClass("main-table__col_win");
            $(row.cells[4]).addClass("main-table__col_draw");
            $(row.cells[5]).addClass("main-table__col_lose");
            $(row.cells[6]).addClass("main-table__col_goals");
            $(row.cells[7]).addClass("main-table__col_conceded_goals");
            $(row.cells[8]).addClass("main-table__col_score");
        }
    });
});
