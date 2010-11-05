(function(namespace) {
    function _newGame() {
        with(Games.TickTackToe) {
            for(var i = 0; i < _board.length; i++) {
                for(var j = 0; j < _board[i].length; j++) {
                    _board[i][j] = null;
                }
            }
            _turn= 0;
        }
    }

    function _play(x, y) {
        with(Games.TickTackToe) {
            _board[x][y] = _player[_turn%2];
            _turn++;
        }
    }

    function _hasWinner() {
        var result = verticalWin();
        if(!result) {
            result = horizontalWin();
            if(!result) {
                result = diagWin();
                return result;
            }
        }
        return result;

        function verticalWin() {
            with(Games.TickTackToe) {
                for (var x = 0; x < 3; x++) {
                    if (getPlayer(x, 0) && getPlayer(x, 0) == getPlayer(x, 1) && getPlayer(x, 1) == getPlayer(x, 2)) {
                        return {
                            player: getPlayer(x, 0),
                            path: [[x,0], [x,1], [x,2]]
                        }
                    }
                }
            }
            return false;
        }

        function horizontalWin() {
            with(Games.TickTackToe) {
                for (var y = 0; y < 3; y++) {
                    if (getPlayer(0, y) && getPlayer(0, y) == getPlayer(1, y) && getPlayer(1, y) == getPlayer(2, y)) {
                        return {
                            player: getPlayer(0, y),
                            path: [[0,y], [1,y], [2,y]]
                        }
                    }
                }
            }
            return false;
        }

        function diagWin() {
            with(Games.TickTackToe) {
                if (getPlayer(0, 0) && getPlayer(0, 0) == getPlayer(1, 1) && getPlayer(1, 1) == getPlayer(2, 2)) {
                    return {
                        player: getPlayer(1,1),
                        path: [[0, 0], [1,1], [2,2]]
                    }
                }
                if (getPlayer(0, 2) && getPlayer(0, 2) == getPlayer(1, 1) && getPlayer(1, 1) == getPlayer(2, 0)) {
                    return {
                        player: getPlayer(1, 1),
                        path: [[0,2], [1,1], [2,0]]
                    }
                }
            }
            return false;
        }
    }

    function _getPlayer(x, y) {
        with(Games.TickTackToe) {
            return _board[x][y];
        }
    }

    namespace.TickTackToe = {
        newGame: _newGame,
        play: _play,
        getPlayer: _getPlayer,
        hasWinner: _hasWinner,
        _player: ['X','O'],
        _turn: 0,
        _board: [[null, null, null], [null, null, null], [null, null, null]]
    };
})(Games);
