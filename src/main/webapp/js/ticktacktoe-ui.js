$(function() {
    $('td').bind('click', function(event) {
        var id = event.target.id;
        var coords = id.split('-');
        Games.TickTackToe.play(coords[0], coords[1]);
        var player = Games.TickTackToe.getPlayer(coords[0], coords[1]);

        $('#' + id).text(player);
        var result = Games.TickTackToe.hasWinner();
        if(result) {
            ids = [result.path[0][0] + '-' + result.path[0][1],
                    result.path[1][0] + '-' + result.path[1][1],
                    result.path[2][0] + '-' + result.path[2][1]]
            for (var i = 0; i < ids.length; i++) {
                var id = ids[i];
                $('#' + id).addClass('winning-cell');
            }
        }
    })
});