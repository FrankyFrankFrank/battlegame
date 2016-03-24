$('document').ready(function(){
	$('body').append("<div>Battle Game</div>");

	var battlegame = {

	Warrior : function ( name, hp, dmg, block ) {
		this.name = name;
		this.health = hp;
		this.damage = dmg;
		this.block = block;
		this.update = function (){
			if (this.health <= 0) {
				$('#attackbuttons').html('<div id="startover">Start Over</div>');
				return "Dead";
			} else {
				return this.health;
			}
		}

	},


	// INITIALIZE
	init : function(){

		player1 = new battlegame.Warrior("Adam", 100, 65, 4);
		player2 = new battlegame.Warrior("Kathleen", 100, 30, 20);

		//Set up battle
		$('body').append("<div id='player1'></div><div id='player2'></div>");

		//Display Health
			$('#player1').html( player1.name + " - HP:" + player1.health );
			$('#player2').html( player2.name + " - HP:" + player2.health );

		// Display Attack Buttons
		$('body').append("<div id='attackbuttons'><div id='p1attack'>P1 attack</div><div id='p2attack'>P2 attack</div></div>");

	},

	listeners : function(){

		$('#p1attack').click(function(){
			battlegame.attack(player1,player2);
		});

		$('#p2attack').click(function(){
			battlegame.attack(player2,player1);
		});

		$('#startover').click(function(){
			battlegame.init();
		})
	},

	attack : function( attacker , defender ){

		defender.health = defender.health - (attacker.damage - defender.block);

		battlegame.update();
	},

	update : function(){

		$('#player1').html( player1.name + " - HP:" + player1.update() );
		$('#player2').html( player2.name + " - HP:" + player2.update() );

	}

	}
	//END APP

	battlegame.init();
	battlegame.listeners();

});