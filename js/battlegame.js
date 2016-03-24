$('document').ready(function(){
	$('body').append("<div>Battle Game</div>");

	var battlegame = {

	Warrior : function ( name, hp, dmg, block ) {
		this.name = name;
		this.health = hp;
		this.damage = dmg;
		this.block = block;
	},

	// INITIALIZE
	init : function(){

		//Set up battle
		$('body').append("<div id='player1'></div><div id='player2'></div>");

		//Display Health
		$('#player1').html( player1.name + " - HP:" + player1.health );
		$('#player2').html( player2.name + " - HP:" + player2.health );

		// Display Attack Buttons
		$('body').append("<div id='p1attack'>P1 attack</div><div id='p2attack'>P2 attack</div>");

	},

	listeners : function(){
		$('#start').click(function(){
			
		});

		$('#p1attack').click(function(){
			battlegame.attack(player1,player2);
		});

		$('#p2attack').click(function(){
			battlegame.attack(player2,player1);
		});
	},

	attack : function( attacker , defender ){

		defender.health = defender.health - (attacker.damage - defender.block);

		console.log(defender.health);
		battlegame.update();
	},

	update : function(){

		if ( player1.health <= 0 ){

			$('#player1').html('DEAD');

		} else if ( player2.health <= 0 ) {

			$('#player2').html('DEAD');

		} else {

			$('#player1').html( player1.name + " - HP:" + player1.health );
			$('#player2').html( player2.name + " - HP:" + player2.health );
		}
		
	}

	}
	//END APP

	var player1 = new battlegame.Warrior("Adam", 100, 65, 4);
	var player2 = new battlegame.Warrior("Kathleen", 100, 30, 20);

	battlegame.init();
	battlegame.listeners();

});