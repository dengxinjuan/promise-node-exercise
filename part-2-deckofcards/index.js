

let baseURL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

let deckId = null;
let $btn =$('button');

axios
.get(`${baseURL}`)
.then(
    data =>{
        console.log(data);
        $('body').append(`<p>Deck Id is :${data.data.deck_id}</p>`);
        deckId = data.data.deck_id;
        $btn.show();
     
    })


function getAcard(){
    $('div').show();
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
    .then(
        data =>{
            console.log(data);
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;
            $('#card').append( 
                $('<img>',{
                    src:`${data.data.cards[0].image}`,
                    css: {
                        transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                    }
                }));
 
            $('#left').text(data.data.remaining);
        
        }
        
    )
};









