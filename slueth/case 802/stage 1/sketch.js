/*
802 - The case of Monte Carlo
Stage 1 - Card sharks

Officer: 6012708
CaseNum: 802-0-80285314-6012708

Time to pull on your best threads kid, grab a martini prepare for an evening at the Monte Carlo casino.

Our targets for this op are a gang of high rolling statisticians. They maintain an air of respectability as the board of Rossling Polling, a company used by the shady politicians of Console City to make them seem more popular than they really are. They’re prepared to give up the dirt on their techniques if we can beat them in a game of 5 card stud poker. We can’t go in and gamble away Sleuth & Co’s cash reserves. There isn’t that much green in the evidence room to compete with these card sharks. Let’s stack the odds in our favour. First let’s learn how to mark cards.

* Write a function called  selectCards.
* Using a for loop to set the marked property of the deck array elements to true when the suit is Clubs or the value is 9
* Call the function from within setup

*/

var deck = [{"marked":false,"s":"Spades","no":"A"},{"marked":false,"s":"Spades","no":"2"},{"marked":false,"s":"Spades","no":"3"},{"marked":false,"s":"Spades","no":"4"},{"marked":false,"s":"Spades","no":"5"},{"marked":false,"s":"Spades","no":"6"},{"marked":false,"s":"Spades","no":"7"},{"marked":false,"s":"Spades","no":"8"},{"marked":false,"s":"Spades","no":"9"},{"marked":false,"s":"Spades","no":"10"},{"marked":false,"s":"Spades","no":"J"},{"marked":false,"s":"Spades","no":"Q"},{"marked":false,"s":"Spades","no":"K"},{"marked":false,"s":"Clubs","no":"A"},{"marked":false,"s":"Clubs","no":"2"},{"marked":false,"s":"Clubs","no":"3"},{"marked":false,"s":"Clubs","no":"4"},{"marked":false,"s":"Clubs","no":"5"},{"marked":false,"s":"Clubs","no":"6"},{"marked":false,"s":"Clubs","no":"7"},{"marked":false,"s":"Clubs","no":"8"},{"marked":false,"s":"Clubs","no":"9"},{"marked":false,"s":"Clubs","no":"10"},{"marked":false,"s":"Clubs","no":"J"},{"marked":false,"s":"Clubs","no":"Q"},{"marked":false,"s":"Clubs","no":"K"},{"marked":false,"s":"Hearts","no":"A"},{"marked":false,"s":"Hearts","no":"2"},{"marked":false,"s":"Hearts","no":"3"},{"marked":false,"s":"Hearts","no":"4"},{"marked":false,"s":"Hearts","no":"5"},{"marked":false,"s":"Hearts","no":"6"},{"marked":false,"s":"Hearts","no":"7"},{"marked":false,"s":"Hearts","no":"8"},{"marked":false,"s":"Hearts","no":"9"},{"marked":false,"s":"Hearts","no":"10"},{"marked":false,"s":"Hearts","no":"J"},{"marked":false,"s":"Hearts","no":"Q"},{"marked":false,"s":"Hearts","no":"K"},{"marked":false,"s":"Diamonds","no":"A"},{"marked":false,"s":"Diamonds","no":"2"},{"marked":false,"s":"Diamonds","no":"3"},{"marked":false,"s":"Diamonds","no":"4"},{"marked":false,"s":"Diamonds","no":"5"},{"marked":false,"s":"Diamonds","no":"6"},{"marked":false,"s":"Diamonds","no":"7"},{"marked":false,"s":"Diamonds","no":"8"},{"marked":false,"s":"Diamonds","no":"9"},{"marked":false,"s":"Diamonds","no":"10"},{"marked":false,"s":"Diamonds","no":"J"},{"marked":false,"s":"Diamonds","no":"Q"},{"marked":false,"s":"Diamonds","no":"K"}];
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


	//call your selectCards function here
	selectCards();
}

//write your selectCards function here
function selectCards(){
	for(var i=0 ; i<deck.length ; i++){
	if(deck[i].s == "Clubs" || deck[i].no == "9"){
		deck[i].marked = true;
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
			if (card.no == values[j] && card.s == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
