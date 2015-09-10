function Deck()
{
	this.name = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	this.suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
	this.cards = [];
	for(var i=0; i<this.suit.length; i++)
	{
		for(var n=0; n<this.name.length; n++)
		{
			this.cards.push([n+1, this.name[n], this.suit[i]]);
		}
	}
	return this;
}
Deck.prototype.shuffle = function()
{
	for(var i=0; i<52; i++)
	{
		var random_num = Math.floor(Math.random()*(52-i));
		remove_card = this.cards.splice(random_num, 1);
		this.cards.push(remove_card);
	}
	return this;
}
Deck.prototype.reset = function()
{
	var reset_cards = new Deck();
	this.cards = reset_cards.cards;
	return this;
}
Deck.prototype.deal = function ()
{
	this.shuffle()
	return this.cards.pop();
}

function Player(name)
{
	this.deck = new Deck();
	this.cards = this.deck.cards;
	this.name = name;
	this.hand = [];
	return this;
}
Player.prototype.take_a_card = function()
{
	this.hand.push(this.deck.deal());
	return this;
}
Player.prototype.discard_a_card = function(idx)
{
	this.hand.splice(idx, 1);
	return this;
}
var Frank = new Player("franky");


