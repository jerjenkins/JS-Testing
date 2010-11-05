describe("Games.TickTackToe", function() {
    beforeEach(function() {
        Games.TickTackToe.newGame();
    });

    describe("Given an empty board, ", function() {
        it("the first player is always 'X'", function() {
            Games.TickTackToe.play(0,0);
            expect(Games.TickTackToe.getPlayer(0,0)).toEqual('X');
        });

        it("the second player should always be 'O'", function() {
            Games.TickTackToe.play(0,0);
            Games.TickTackToe.play(1,1);
            expect(Games.TickTackToe.getPlayer(1,1)).toEqual('O');
        });

    });

    describe("Given a board where X can win horizontally, ", function() {
        beforeEach(function() {
            Games.TickTackToe.play(2,2);
            Games.TickTackToe.play(1,2);
            Games.TickTackToe.play(2,1);
            Games.TickTackToe.play(1,1);
        });

        it("a winning 'X' move should win the game", function() {
            Games.TickTackToe.play(2,0);
            expect(Games.TickTackToe.hasWinner().player).toEqual('X');
        });
    });
});