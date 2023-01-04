game = function() {
    playerPT = 0;
    systemPT = 0;

    startGame = function() {
        startBTN = document.querySelector('.start button');
        startSCN = document.querySelector('.start');
        vs = document.querySelector('.vs');

        startBTN.addEventListener('click' , function() {
            startSCN.classList.add('gameout');
            vs.classList.add('gamein');
            vs.classList.remove('gameout');
        });
    };

    playvs = function() {
        check = document.querySelectorAll('.check button');
        launch = document.querySelectorAll('.launch img');
        playerhand = document.querySelector('.player_game');
        systemhand = document.querySelector('.system_game');

        systemcheck = ['rock','paper','scissors'];

        check.forEach((opt1) => {
            opt1.addEventListener('click', function() {
                systemNumber = Math.floor(Math.random()*3);
                systemChoice = systemcheck[systemNumber];

                setTimeout(() => {
                    compareLaunch(this.textContent, systemChoice); 

                    playerhand.src = `${this.textContent}.png`;  // backtic ALT + 96
                    systemhand.src = `${systemChoice}.png`;
                }, 2000);
            });
        });

    };

    compareLaunch = (playerChoice, systemChoice) =>{
        ps_win = document.querySelector('.ps_win');

        if (playerChoice === systemChoice) {
            ps_wind.textContent = 'Draw';
            return;
        }

        if (playerChoice === 'rock') {
            if(systemChoice === 'scissors'){
                ps_win.textContent = 'Player Wins';
                playerPT++;
                endGame();
                updatescore();
                return;
            } else {
                ps_win.textContent = 'System Wins';
                systemPT++;
                endGame();
                updatescore();
                return;
            }
        }

        if (playerChoice === 'paper') {
            if(systemChoice === 'scissors'){
                ps_win.textContent = 'System Wins';
                systemPT++;
                endGame();
                updatescore();
                return;
            } else {
                ps_win.textContent = 'Player Wins';
                playerPT++;
                endGame();
                updatescore();
                return;
            }
        }

        if (playerChoice === 'scissors') {
            if(systemChoice === 'rock'){
                ps_win.textContent = 'System Wins';
                systemPT++;
                endGame();
                updatescore();
                return;
            } else {
                ps_win.textContent = 'Player Wins';
                playerPT++;
                endGame();
                updatescore();
                return;
            }
        }
    }

    updatescore = function () {
        playerScore = document.querySelector('.player_pt p');
        systemScore = document.querySelector('.system_pt p');
        playerScore.textContent = playerPT;
        systemScore.textContent = systemPT;
    };

    restartGame = () => {
        reStart = document.querySelector('.ps_winend button');
        reStart.addEventListener('click' , () => {
            window.location.reload();
        });
    };

    restartGame();

    endGame = () => {
        ps_winend = document.querySelector('.ps_winend');
        vs = document.querySelector('.vs');
        ps_win_stop = document.querySelector('.ps_win_stop');

        if(playerPT === 5) {
            vs.classList.remove('gamein');
            vs.classList.add('gameout');
            setTimeout( () => {
                ps_winend.classList.add('gamein');
                ps_winend.classList.remove('gameout');
                ps_win_stop.textContent = 'Player won the game!';
            }, 500);
        } else if (systemPT === 5) {
            vs.classList.remove('gamein');
            vs.classList.add('gameout');
            setTimeout( () => {
                ps_winend.classList.add('gamein');
                ps_winend.classList.remove('gameout');
                ps_win_stop.textContent = 'System won the game!';
            }, 500);
    }
};

    startGame();
    playvs();
};

game();