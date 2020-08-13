$('h1').css('color', 'purple');

$(document).ready(function() {

    var bx1 = $('#box1');
    var bx2 = $('#box2');
    var bx3 = $('#box3');
    var bx4 = $('#box4');
    var bx5 = $('#box5');
    var bx6 = $('#box6');
    var bx7 = $('#box7');
    var bx8 = $('#box8');
    var bx9 = $('#box9');
    
    
    var playLetter = false;
    var win = false;
    // var player1 = X;
    // var player2 = O;

    var message = $("itsalerttime").css("alert alert-danger");
    
    
    
    function validatePlay(boxPlayed) {
        if ( $(boxPlayed).hasClass('free') ) {
            playLetter = true;
        } else {
            playLetter = false;
            return false;
        }
    }
    
    function clearBoard() {
        $('.tile').removeClass('played');
        $('.tile').removeClass('O-play');
        $('.tile').removeClass('X-play');
        $('.tile').html('');
        $('.tile').addClass('free');
    }
    
    function winAlert(player) {
        win = true;
    
        if (player === "X") {
            message()
        } else {
            message()
        }
        clearBoard();
    }
    
    function checkWin() {
    
        if ( bx1.hasClass('X-play') && bx2.hasClass('X-play') && bx3.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx1.hasClass('O-play') && bx2.hasClass('O-play') && bx3.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx4.hasClass('X-play') && bx5.hasClass('X-play') && bx6.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx4.hasClass('O-play') && bx5.hasClass('O-play') && bx6.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx7.hasClass('X-play') && sbx.hasClass('X-play') && bx9.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx7.hasClass('O-play') && bx8.hasClass('O-play') && bx9.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx1.hasClass('X-play') && bx4.hasClass('X-play') && bx7.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx1.hasClass('O-play') && bx4.hasClass('O-play') && bx7.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx5.hasClass('X-play') && bx2.hasClass('X-play') && bx8.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx5.hasClass('O-play') && bx2.hasClass('O-play') && bx8.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx6.hasClass('X-play') && bx9.hasClass('X-play') && bx3.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx6.hasClass('O-play') && bx9.hasClass('O-play') && bx3.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx1.hasClass('X-play') && bx5.hasClass('X-play') && bx9.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx1.hasClass('O-play') && bx5.hasClass('O-play') && bx9.hasClass('O-play') ) {
            winAlert("O");
        }
    
        else if ( bx5.hasClass('X-play') && bx7.hasClass('X-play') && bx3.hasClass('X-play') ) {
            winAlert("X");
        } else if ( bx5.hasClass('O-play') && bx7.hasClass('O-play') && bx3.hasClass('O-play') ) {
            winAlert("O");
        }
    }
    
    function checkDraw() {
    
        if ( !($('.tile').hasClass('free')) ) {
            alert("Draw! Try playing again!");
            clearBoard();
        }
    }
    
    
    
    
    function Oplay() {
    
        // Function for when O plays tactically
        function Oplaying(box) {
    
            validatePlay(box)
    
            if (playLetter) {
                box.removeClass('free');
                box.addClass('played');
                box.addClass('O-play');
                box.html("O");
            } else {
                Orandomplay()
            }
    
        }
    
        // Function for when O plays randomly
        function Orandomplay() {
            for (var i = 0; i < 10; i++) {
            // Loop to find a valid play
            
                var randomNumber = Math.floor((Math.random() * 9) + 1);
                var randomBox = $('#box'+randomNumber);
                validatePlay(randomBox);
    
                if (playLetter) {
    
                    randomBox.removeClass('free');
                    randomBox.addClass('played');
                    randomBox.addClass('O-play');
                    randomBox.html("O");
                    break;
                } 
            }
        }
    
    
        // Tactical Plays
    
        // win123_sq3 = ( sq1.hasClass('X-play') && sq2.hasClass('X-play') || sq1.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq3.hasClass('played'))
        // win123_sq2 = ( sq1.hasClass('X-play') && sq3.hasClass('X-play') || sq1.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq2.hasClass('played'))
        // win123_sq1 = ( sq3.hasClass('X-play') && sq2.hasClass('X-play') || sq3.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq1.hasClass('played'))
    
        // win456_sq6 = ( sq4.hasClass('X-play') && sq5.hasClass('X-play') || sq4.hasClass('O-play') && sq5.hasClass('O-play') ) && !(sq6.hasClass('played'))
        // win456_sq5 = ( sq4.hasClass('X-play') && sq6.hasClass('X-play') || sq4.hasClass('O-play') && sq6.hasClass('O-play') ) && !(sq5.hasClass('played'))
        // win456_sq4 = ( sq5.hasClass('X-play') && sq6.hasClass('X-play') || sq5.hasClass('O-play') && sq6.hasClass('O-play') ) && !(sq4.hasClass('played'))
    
        // win789_sq9 = ( sq7.hasClass('X-play') && sq8.hasClass('X-play') || sq7.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq9.hasClass('played'))
        // win789_sq8 = ( sq7.hasClass('X-play') && sq9.hasClass('X-play') || sq7.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq8.hasClass('played'))
        // win789_sq7 = ( sq8.hasClass('X-play') && sq9.hasClass('X-play') || sq8.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq7.hasClass('played'))
    
        // win147_sq7 = ( sq1.hasClass('X-play') && sq4.hasClass('X-play') || sq1.hasClass('O-play') && sq4.hasClass('O-play') ) && !(sq7.hasClass('played'))
        // win147_sq4 = ( sq1.hasClass('X-play') && sq7.hasClass('X-play') || sq1.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq4.hasClass('played'))
        // win147_sq1 = ( sq4.hasClass('X-play') && sq7.hasClass('X-play') || sq4.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq1.hasClass('played'))
    
        // win528_sq8 = ( sq5.hasClass('X-play') && sq2.hasClass('X-play') || sq5.hasClass('O-play') && sq2.hasClass('O-play') ) && !(sq8.hasClass('played'))
        // win528_sq2 = ( sq5.hasClass('X-play') && sq8.hasClass('X-play') || sq5.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq2.hasClass('played'))
        // win528_sq5 = ( sq2.hasClass('X-play') && sq8.hasClass('X-play') || sq2.hasClass('O-play') && sq8.hasClass('O-play') ) && !(sq5.hasClass('played'))
    
        // win693_sq3 = ( sq6.hasClass('X-play') && sq9.hasClass('X-play') || sq6.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq3.hasClass('played'))
        // win693_sq9 = ( sq6.hasClass('X-play') && sq3.hasClass('X-play') || sq6.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq9.hasClass('played'))
        // win693_sq6 = ( sq9.hasClass('X-play') && sq3.hasClass('X-play') || sq9.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq6.hasClass('played'))
    
        // win159_sq9 = ( sq1.hasClass('X-play') && sq5.hasClass('X-play') || sq1.hasClass('O-play') && sq5.hasClass('O-play') ) && !(sq9.hasClass('played'))
        // win159_sq5 = ( sq1.hasClass('X-play') && sq9.hasClass('X-play') || sq1.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq5.hasClass('played'))
        // win159_sq1 = ( sq5.hasClass('X-play') && sq9.hasClass('X-play') || sq5.hasClass('O-play') && sq9.hasClass('O-play') ) && !(sq1.hasClass('played'))
    
        // win573_sq3 = ( sq5.hasClass('X-play') && sq7.hasClass('X-play') || sq5.hasClass('O-play') && sq7.hasClass('O-play') ) && !(sq3.hasClass('played'))
        // win573_sq5 = ( sq5.hasClass('X-play') && sq3.hasClass('X-play') || sq5.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq5.hasClass('played'))
        // win573_sq7 = ( sq7.hasClass('X-play') && sq3.hasClass('X-play') || sq7.hasClass('O-play') && sq3.hasClass('O-play') ) && !(sq7.hasClass('played'))
    
    
    
        // Win 1 2 3
        if ( win123_sq3 ) {
            Oplaying(sq3)
        } else if ( win123_sq2 ) {
            Oplaying(sq2)
        } else if ( win123_sq1 )  {
            Oplaying(sq1)
        } 
        
        // Win 4 5 6
        else if ( win456_sq6 ) {
            Oplaying(sq6)
        } else if ( win456_sq5 ) {
            Oplaying(sq5)
        } else if ( win456_sq4 ) {
            Oplaying(sq4)
        } 
    
        // Win 7 8 9 
        else if ( win789_sq9 ) {
            Oplaying(sq9)
        } else if ( win789_sq8 ) {
            Oplaying(sq8)
        } else if ( win789_sq7 ) {
            Oplaying(sq7)
        }
    
        // Win 1 4 7
        else if ( win147_sq7 ) {
            Oplaying(sq7)
        } else if ( win147_sq4 ) {
            Oplaying(sq4)
        } else if ( win147_sq1 ) {
            Oplaying(sq1)
        }
    
        // Win 5 2 8
        else if ( win528_sq8 ) {
            Oplaying(sq8)
        } else if ( win528_sq2 ) {
            Oplaying(sq2)
        } else if ( win528_sq5 ) {
            Oplaying(sq5)
        } 
    
        // Win 6 9 3
        else if ( win693_sq3 ) {
            Oplaying(sq3)
        } else if ( win693_sq9 ) {
            Oplaying(sq9)
        } else if ( win693_sq6 ) {
            Oplaying(sq6)
        }
    
        // Win 1 5 9
        else if ( win159_sq9 ) {
            Oplaying(sq9)
        } else if ( win159_sq5 ) {
            Oplaying(sq5)
        } else if ( win159_sq1 ) {
            Oplaying(sq1)
        } 
    
        // Win 5 7 3
        else if ( win573_sq3 ) {
            Oplaying(sq3)
        } else if ( win573_sq7 ) {
            Oplaying(sq7)
        } else if ( win573_sq5 ) {
            Oplaying(sq5)
        } 
    
    
        else {
            Orandomplay();
        }
        checkDraw();
        checkWin();
    }
    
    
    
    
    
    $('.tile').on('click', function Xplay() {
    
        validatePlay(this);
    
        if (playLetter) {
            $(this).removeClass('free');
            $(this).addClass('played');
            $(this).addClass('X-play');
            $(this).html("X");
    
            checkDraw();
            checkWin();
            Oplay();
    
        } else {
            alert("That box has already been played. Please choose another box");
        }
        
    })
    
    $('#reset-button').on('click', function() {
        clearBoard();
    })
    
    
    });