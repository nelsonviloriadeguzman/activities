function goBack() {
    window.location.href = '../../index.html'
}

let playerImage = 1
let score = 0;
let best = 0;

function previous(){
    removeStuffs();
    if (playerImage === 1){
        playerImage = 3
        document.getElementById('player').style.backgroundImage = "url('img/scissors.png')";
    } else if (playerImage === 2){
        playerImage = 1
        document.getElementById('player').style.backgroundImage = "url('img/paper.png')";
    } else if (playerImage === 3){
        playerImage = 2
        document.getElementById('player').style.backgroundImage = "url('img/rock.png')";
    } 

}

function forward(){
    removeStuffs();
    if (playerImage === 1){
        playerImage = 2
        document.getElementById('player').style.backgroundImage = "url('img/rock.png')";
    } else if (playerImage === 2){
        playerImage = 3
        document.getElementById('player').style.backgroundImage = "url('img/scissors.png')";
    } else if (playerImage === 3){
        playerImage = 1
        document.getElementById('player').style.backgroundImage = "url('img/paper.png')";
    } 
}

function generateRandomImage(){
    let opponentImage = Math.floor(Math.random() * 3) + 1 

    if (opponentImage === 1){
        document.getElementById('opponent').style.backgroundImage = "url('img/rock.png')";
        opponentImage = 2
    } else if (opponentImage === 2){
        document.getElementById('opponent').style.backgroundImage = "url('img/scissors.png')";
        opponentImage = 3
    } else if (opponentImage === 3){
        document.getElementById('opponent').style.backgroundImage = "url('img/paper.png')";
        opponentImage = 1
    } 
    return opponentImage
}

function myFunction(){
   removeStuffs();
   let opponentImage =  generateRandomImage();

    if ( (playerImage === 1 && opponentImage ==2) || (playerImage === 2 && opponentImage ==3) || (playerImage === 3 && opponentImage ==1) ){
        score++
        best = score > best ? score : best
        document.getElementById('score').innerHTML = score
        document.getElementById('best').innerHTML = best
        document.getElementById('message').innerHTML = 'You Win!'
    } else if ( (playerImage === 1 && opponentImage ==3) || (playerImage === 2 && opponentImage == 1) || (playerImage === 3 && opponentImage ==2) ){
        document.getElementById('message').innerHTML = 'You Lose!'
        score=0
        document.getElementById('score').innerHTML = score
    } else{
        document.getElementById('message').innerHTML = `It's a Draw!`
    }

}

function removeStuffs() {
    document.getElementById('message').innerHTML = 'Good Luck!'
    document.getElementById('opponent').style.backgroundImage = "url()";
}


  