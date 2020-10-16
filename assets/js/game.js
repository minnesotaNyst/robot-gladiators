//game states
//"WIN"- Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

//var playerInfo.name = 'Robo Jake';

//start game function
var startGame = function () {
	// reset player stats
	playerInfo.reset();

	for (var i = 0; i < enemyInfo.length; i++) {
		if (playerInfo.health > 0) {
			// let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
			window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

			// pick new enemy to fight based on the index of the enemy.names array
			var pickedEnemyObj = enemyInfo[i];
			pickedEnemyObj.health = randomNumber(40, 60);

			// use debugger to pause script from running and check what's going on at that moment in the code
			// debugger;

			// pass the pickedEnemyObj variable's value into the fight function, where it will assume the value of the enemy.name parameter
			fight(pickedEnemyObj);

			//if we are not at the last enemy in the array
			if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
				//^^this is just saying that as long as we are on enemy.name 0 or 1 that we allow the player to shop

				//ask the player if they want to visit the store before next round
				var storeConfirm = window.confirm(
					'The fight is over, visit the store before the next round?'
				);

				if (storeConfirm) {
					shop();
				}
			}
		}
		// in player isn't alive, stop the game
		else {
			break;
		}
	}
	// after the loop ends, player is either out of health or enemies to fight, so run the endGame function
	endGame();
};

//end game function
var endGame = function () {
	window.alert("The game has now ended. Let's see how you did!");
	if (playerInfo.health > 0) {
		window.alert(
			"Great job, you've survived the game! You now have a score of " +
				playerInfo.money +
				'.'
		);
	} else {
		window.alert("You've lost your robot in battle!");
	}
	// ask if they would like to play again
	var playAgainConfirm = window.confirm('Would you like to play again?');
	if (playAgainConfirm) {
		startGame();
	} else {
		window.alert('Thank you for playing Robot Gladiators! Come back soon!');
	}
};

// fight function
var fight = function (enemy) {
	// let user know they have begun the fight
	var isPlayerTurn = true;

	//randomly change turn order
	if (Math.random() > 0.5) {
		isPlayerTurn = false;
	}

	while (enemy.health > 0 && playerInfo.health > 0) {
		if (isPlayerTurn) {
			// ask user if they'd liked to fight or run
			if (fightOrSkip()) {
				//if true, leave fight by breaking loop
				break;
			}

			var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

			// remove enemy's health by subtracting the amount we set in the damage variable
			enemy.health = Math.max(0, enemy.health - damage);
			console.log(
				playerInfo.name +
					' attacked ' +
					enemy.name +
					'. ' +
					enemy.name +
					' now has ' +
					enemy.health +
					' health remaining.'
			);

			// check enemy's health
			if (enemy.health <= 0) {
				window.alert(enemy.name + ' has died!');

				// award player money for winning
				playerInfo.money = playerInfo.money + 20;

				//leave while loop since enemy is dead
				break;
			} else {
				window.alert(
					enemy.name + ' still has ' + enemy.health + ' health left.'
				);
			}
			// player gets attacked first
		} else {
			var damage = randomNumber(enemy.attack - 3, enemy.attack);

			playerInfo.health = Math.max(0, playerInfo.health - damage);
			console.log(
				enemy.name +
					' attacked ' +
					playerInfo.name +
					'. ' +
					playerInfo.name +
					' now has ' +
					playerInfo.health +
					' health remaining.'
			);

			// check player's health
			if (playerInfo.health <= 0) {
				window.alert(playerInfo.name + ' has died!');
				//leave the while loop if the player is dead
				break;
			} else {
				window.alert(
					playerInfo.name + ' still has ' + playerInfo.health + ' health left.'
				);
			}
		}
		//switch order for next round
		isPlayerTurn = !isPlayerTurn;
	}
};

//shop function
var shop = function () {
	//ask the player what they would like to do
	var shopOptionPrompt = window.prompt(
		'Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE.'
	);
	shopOptionPrompt = parseInt(shopOptionPrompt);
	//use swith to carry out the action
	switch (shopOptionPrompt) {
		case 1:
			playerInfo.refillHealth();
			break;
		case 2:
			playerInfo.upgradeAttack();
			break;
		case 3:
			window.alert('Leaving the store.');
			// do nothing, so function will end
			break;
		default:
			window.alert('You did not pick a valid option. Try again.');
			// call shop() again to force player to pick a valid option
			shop();
			break;
	}
};

var randomNumber = function (min, max) {
	var value = Math.floor(Math.random() * (max - min + 1) + min);

	return value;
};

var getPlayerName = function () {
	var name = '';

	while (name === '' || name === null) {
		name = prompt("What is your robot's name?");
	}
	console.log("Your robot's name is, " + name + '!');
	return name;
};

var fightOrSkip = function () {
	// ask player if they'd like to fight or skip using fightOrSkip function
	var promptFight = window.prompt(
		'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
	);
	// Conditional Recursive Function Call
	if (promptFight === '' || promptFight === null) {
		window.alert('You need to provide a valid answer! Please try again.');
		return fightOrSkip();
	}
	//assume a value is entered, make it all lower case
	promptFight = promptFight.toLowerCase();
	// if player picks "skip" confirm and then stop the loop
	if (promptFight === 'skip') {
		// confirm player wants to skip
		var confirmSkip = window.confirm("Are you sure you'd like to quit?");

		// if yes (true), leave fight
		if (confirmSkip) {
			window.alert(
				playerInfo.name + ' has decided to skip this fight. Goodbye!'
			);
			// subtract money from playerMoney for skipping
			playerInfo.playerMoney = playerInfo.money - 10;
			shop();
			return true;
		}
	}
	return false;
};

//player info default
var playerInfo = {
	name: getPlayerName(),
	health: 100,
	attack: 10,
	money: 10,
	reset: function () {
		this.health = 100;
		this.money = 10;
		this.attack = 10;
	},
	refillHealth: function () {
		if (this.money >= 7) {
			window.alert("Refilling player's health by 20 for 7 dollars.");
			this.health += 20;
			this.money -= 7;
		} else {
			window.alert("You don't have enough money!");
		}
	},
	upgradeAttack: function () {
		if (this.money >= 7) {
			window.alert("Upgrading player's attack by 6 for 7 dollars.");
			this.attack += 6;
			this.money -= 7;
		} else {
			window.alert("You don't have enough money!");
		}
	}
};

//enemy info default
var enemyInfo = [
	{
		name: 'Roborto',
		attack: randomNumber(10, 14)
	},
	{
		name: 'Amy Android',
		attack: randomNumber(10, 14)
	},
	{
		name: 'Robo Trumble',
		attack: randomNumber(10, 14)
	}
];

startGame();
