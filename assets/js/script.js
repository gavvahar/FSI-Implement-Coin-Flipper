(function()
{
    const querySelectorArr = [
        document.querySelector('#flip'),
        document.querySelector('#clear'),
        document.querySelector('#penny-image'),
        document.querySelector('#message'),
        document.querySelector('#heads'),
        document.querySelector('#heads-percent'),
        document.querySelector('#tails'),
        document.querySelector('#tails-percent')
    ];
    let scoreBoard = {}
    scoreBoards();
    function handleFlipButton()
    {
        const headsOrTails = Math.random() < 0.5;
        scoreBoard.totalFlips += 1;
        //scoreBoards(scoreBoard.totalFlips) += 1;
        if(headsOrTails)
        {
            scoreBoard.heads += 1;
            querySelectorArr[2].setAttribute('src', 'assets/images/penny-heads.jpg');
            querySelectorArr[3].textContent = 'You Flipped Heads';
        } else
        {
            scoreBoard.tails += 1;
            querySelectorArr[2].setAttribute('src', 'assets/images/penny-tails.jpg');
            querySelectorArr[3].textContent = 'You Flipped Tails';
        }
        scoreBoard.percentageHeads = (scoreBoard.heads / scoreBoard.totalFlips) * 100;
        scoreBoard.percentageTails = (scoreBoard.tails / scoreBoard.totalFlips) * 100;
        querySelectorArr[4].textContent = `${scoreBoard.heads}`;
        querySelectorArr[5].textContent = `${Math.round(scoreBoard.percentageHeads)}%`;
        querySelectorArr[6].textContent = `${scoreBoard.tails}`;
        querySelectorArr[7].textContent = `${Math.round(scoreBoard.percentageTails)}%`;
    }
    function handleClearButton()
    {
            scoreBoards();
    }
    function setUpEventListeners()
    {
        querySelectorArr[0].addEventListener('click', function(){
            handleFlipButton();
        });
        querySelectorArr[1].addEventListener('click', function(){
            handleClearButton();
        });
    }
    function init()
    {
        setUpEventListeners();
    }
    init();
    function scoreBoards()
    {
        scoreBoard = {
            heads: 0,
            percentageHeads: 0,
            tails: 0,
            percentageTails: 0,
            totalFlips: 0,
        }
        //return scoreBoard;
    }
})();