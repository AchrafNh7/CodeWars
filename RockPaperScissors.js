//Let's play! You have to return which player won! 
//In case of a draw return Draw!.
//assuming the input is always gonna be paper or rock or scissors


//My solution


const rps = (p1, p2) => {
    if(p1==='scissors' && p2==='paper'){
      return 'Player 1 won!'
    }else if(p1==='paper' && p2==='rock'){
      return 'Player 1 won!'
    }else if(p1==='rock' && p2==='scissors'){
      return 'Player 1 won!'
    }else if(p1===p2){
      return 'Draw!'
    }else{
      return 'Player 2 won!'
    }
  };