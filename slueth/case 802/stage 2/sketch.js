/*
802 - The case of Monte Carlo
Stage 2 - King of Cards


Officer: 6012708
CaseNum: 802-1-21278456-6012708

You aren’t going to look like much of a Poker player unless you can do a good shuffle. We’ll need to be able to do this with one hand tied behind our back if we are going to pose as pros at the big game.

* Write a function called build_shuffle_array.

* Declare an empty array in the function.
* Using a for loop fill the array with 52 random integers between 5 and 86.
* Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
* Return the array at the end of the function.
* Call build_shuffle_array in setup.
* Call Shuffle deck using the return value from build_shuffle_array as the argument.

*/

var deck = [{"card_suit":"Spades","value":"A"},{"card_suit":"Spades","value":"2"},{"card_suit":"Spades","value":"3"},{"card_suit":"Spades","value":"4"},{"card_suit":"Spades","value":"5"},{"card_suit":"Spades","value":"6"},{"card_suit":"Spades","value":"7"},{"card_suit":"Spades","value":"8"},{"card_suit":"Spades","value":"9"},{"card_suit":"Spades","value":"10"},{"card_suit":"Spades","value":"J"},{"card_suit":"Spades","value":"Q"},{"card_suit":"Spades","value":"K"},{"card_suit":"Clubs","value":"A"},{"card_suit":"Clubs","value":"2"},{"card_suit":"Clubs","value":"3"},{"card_suit":"Clubs","value":"4"},{"card_suit":"Clubs","value":"5"},{"card_suit":"Clubs","value":"6"},{"card_suit":"Clubs","value":"7"},{"card_suit":"Clubs","value":"8"},{"card_suit":"Clubs","value":"9"},{"card_suit":"Clubs","value":"10"},{"card_suit":"Clubs","value":"J"},{"card_suit":"Clubs","value":"Q"},{"card_suit":"Clubs","value":"K"},{"card_suit":"Hearts","value":"A"},{"card_suit":"Hearts","value":"2"},{"card_suit":"Hearts","value":"3"},{"card_suit":"Hearts","value":"4"},{"card_suit":"Hearts","value":"5"},{"card_suit":"Hearts","value":"6"},{"card_suit":"Hearts","value":"7"},{"card_suit":"Hearts","value":"8"},{"card_suit":"Hearts","value":"9"},{"card_suit":"Hearts","value":"10"},{"card_suit":"Hearts","value":"J"},{"card_suit":"Hearts","value":"Q"},{"card_suit":"Hearts","value":"K"},{"card_suit":"Diamonds","value":"A"},{"card_suit":"Diamonds","value":"2"},{"card_suit":"Diamonds","value":"3"},{"card_suit":"Diamonds","value":"4"},{"card_suit":"Diamonds","value":"5"},{"card_suit":"Diamonds","value":"6"},{"card_suit":"Diamonds","value":"7"},{"card_suit":"Diamonds","value":"8"},{"card_suit":"Diamonds","value":"9"},{"card_suit":"Diamonds","value":"10"},{"card_suit":"Diamonds","value":"J"},{"card_suit":"Diamonds","value":"Q"},{"card_suit":"Diamonds","value":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your build_shuffle_array function here. Followed by a call to shuffleDeck with the return value of build_shuffle_array as an argument.
	build_shuffle_array();
	shuffleDeck(build_shuffle_array());
}

//write your build_shuffle_array function here
function build_shuffle_array(){
	var cards = [];
	for(var i = 0; i < 52; i++){
		cards.push(round(random(5,86)));
	}
	return cards;
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
		if (drawCounter == 52)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if (deck[i].marked)
		{
			drawCard(deck[i], 400 + i * 18, 230);
		}
		else
		{
			drawCard(deck[i], 400 + i * 18, 250);
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
			if (card.value == values[j] && card.card_suit == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
