playerX = [];
playerO = [];
playerTurn = 0;
winningValues = [
  ['#box1','#box2','#box3'],
  ['#box4','#box5','#box6'],
  ['#box7','#box8','#box9'],
  ['#box1','#box4','#box7'],
  ['#box2','#box5','#box8'],
  ['#box3','#box6','#box9'],
  ['#box1','#box5','#box9'],
  ['#box3','#box5','#box7']
];
$(document).ready(function(){


  $('.box').on('click', function(){
    var id = '#'+$(this).attr('id');
    playerTurn += 1
    var taken = $(id).hasClass('taken');
    if( playerTurn%2 != 0 && taken == false ) {
      $(id + ' span').html('X')
      $(id).addClass('taken');
      playerX.push(id)
      console.log(playerX);
    }
    else if (playerTurn%2 == 0 && taken == false) {
      $(id + ' span').html('O')
      $(id).addClass('taken');
      playerO.push(id);
      console.log(playerO);
    }
  })
})
