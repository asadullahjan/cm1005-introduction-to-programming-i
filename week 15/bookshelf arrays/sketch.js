var bookShelf;
var a;
function setup()
{
	createCanvas(800, 600);
	bookShelf = 
	[
		['BookA1','BookA2','BookA3','BookA4','BookA5'],
		['BookB1','BookB2','BookB3','BookB4','BookB5'],
		['BookC1','BookC2','BookC3','BookC4','BookC5'],
		['BookD1','BookD2','BookD3','BookD4','BookD5'],
		['fadf']
	]

	// firstBookonEachShelf();
	// allBooks();
	totalNumberofBooks();
	particularBook(3,2);
	bookLocation('BookD2');
}

function firstBookonEachShelf()
{
	for(var i = 0 ; i<bookShelf.length ; i++)
	{
		console.log(bookShelf[i][0]);
	}
}

function allBooks()
{
	for(var i = 0 ; i<bookShelf.length ;i++)
	{
		for(var j=0 ; j<bookShelf[i].length;j++)
		{
			console.log(bookShelf[i][j]);
		}
	}
}

function totalNumberofBooks()
{
	a = 0;
	for(var i = 0 ; i<bookShelf.length ;i++)
	{
		
		a += bookShelf[i].length;
	}
	console.log(a);
}

function particularBook(row,column)
{
	console.log(bookShelf[row-1][column-1]);
}

function bookLocation(name)
{
	for(var i = 0 ; i<bookShelf.length ;i++)
	{
		for(var j=0 ; j<bookShelf[i].length;j++)
		{
			if(bookShelf[i][j]==name)
			{
				console.log('row = '+i,'column = '+j);
			}
		}
	}
}