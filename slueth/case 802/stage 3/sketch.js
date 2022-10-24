/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 6012708
CaseNum: 802-2-56637653-6012708

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in hand_to_win from the deck and store it in the hand array.

*Write a function called setWinningHand and call it from setup.
*We need to be quick so our ruse isn’t spotted. Make sure you use a nested for loop and the break statement in the inner loop when you find a match in the deck.
*When you find a card in the deck that matches one in hand_to_win add it to the handArray. Then break and search for the next card.

*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 4 and end at 87.
*Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var deck = [{"s":"Spades","number":"A"},{"s":"Spades","number":"2"},{"s":"Spades","number":"3"},{"s":"Spades","number":"4"},{"s":"Spades","number":"5"},{"s":"Spades","number":"6"},{"s":"Spades","number":"7"},{"s":"Spades","number":"8"},{"s":"Spades","number":"9"},{"s":"Spades","number":"10"},{"s":"Spades","number":"J"},{"s":"Spades","number":"Q"},{"s":"Spades","number":"K"},{"s":"Clubs","number":"A"},{"s":"Clubs","number":"2"},{"s":"Clubs","number":"3"},{"s":"Clubs","number":"4"},{"s":"Clubs","number":"5"},{"s":"Clubs","number":"6"},{"s":"Clubs","number":"7"},{"s":"Clubs","number":"8"},{"s":"Clubs","number":"9"},{"s":"Clubs","number":"10"},{"s":"Clubs","number":"J"},{"s":"Clubs","number":"Q"},{"s":"Clubs","number":"K"},{"s":"Hearts","number":"A"},{"s":"Hearts","number":"2"},{"s":"Hearts","number":"3"},{"s":"Hearts","number":"4"},{"s":"Hearts","number":"5"},{"s":"Hearts","number":"6"},{"s":"Hearts","number":"7"},{"s":"Hearts","number":"8"},{"s":"Hearts","number":"9"},{"s":"Hearts","number":"10"},{"s":"Hearts","number":"J"},{"s":"Hearts","number":"Q"},{"s":"Hearts","number":"K"},{"s":"Diamonds","number":"A"},{"s":"Diamonds","number":"2"},{"s":"Diamonds","number":"3"},{"s":"Diamonds","number":"4"},{"s":"Diamonds","number":"5"},{"s":"Diamonds","number":"6"},{"s":"Diamonds","number":"7"},{"s":"Diamonds","number":"8"},{"s":"Diamonds","number":"9"},{"s":"Diamonds","number":"10"},{"s":"Diamonds","number":"J"},{"s":"Diamonds","number":"Q"},{"s":"Diamonds","number":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var hand_to_win = [{"cardSuit":"Clubs","no":"J"},{"cardSuit":"Hearts","no":"K"},{"cardSuit":"Clubs","no":"10"},{"cardSuit":"Spades","no":"K"},{"cardSuit":"Diamonds","no":"Q"}];
var hand =[];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
	shuffleSeed();
	shuffleDeck(shuffleSeed());
	//call your setWinningHand function here
	setWinningHand();
}

//write your setWinningHand function here
function setWinningHand(){
	for(var i = 0 ; i<deck.length; i++){
		for(var j = 0; j<hand_to_win.length; j++){
			if(deck[i].number == hand_to_win[j].no && deck[i].s == hand_to_win[j].cardSuit){
				hand.push(deck[i]);
				break;
			}
		}
	}
}
//write your shuffleSeed() function here.
function shuffleSeed(){
	var integers = [];
	
	for (var i = 0; i < 52; i++){
		integers.push(round(random(4, 87)));
	}
	console.log(integers);
	return integers;
}
/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < deck.length; j++)
	   {
		  var tempCard = deck.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          deck.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if( i < hand.length)
		{
			drawCard(hand[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.number == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
