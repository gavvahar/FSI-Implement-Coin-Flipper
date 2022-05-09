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
    function setUpEventListeners()
    {
        for(let i = 0; i < querySelectorArr.length; i++)
        {
            switch(i)
            {
                case 0:
                    querySelectorArr[i].addEventListener('click', function(){
                        console.log('you clicked flip');
                    });
                    break;
                case 1:
                    querySelectorArr[i].addEventListener('click', function(){
                        console.log('you clicked clear');
                    });
            }
        }
    }
    function init()
    {
        setUpEventListeners();
    }
    init();
})();