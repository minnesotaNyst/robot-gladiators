//propmt our user to name their robot
var playerName = window.prompt("What is your robot's name?");
//default the players health to 100 and assign it to a variable that we can call later in the js file
var playerHealth = 100;
//default the player to have ten attack points and assign it to a variable that we can call later in the js file
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

//get it? robo...rto
var enemyName = "Roborto";
//assign enemy health level to 50 and give it a variable to call later in the js file
var enemyHealth = 50;
//assign eny attack poitns and give it a variable to call later in the js file
var enemyAttack = 12;

//create a function with an assigned varialbe to call later in the js file
var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " has now " + enemyHealth + " health remaining. "
    );
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

  };

  //IMPORTANT: Need to execute the function
  fight();