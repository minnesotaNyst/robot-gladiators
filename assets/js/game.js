//propmt our user to name their robot
var playerName = window.prompt("What is your robot's name?");
//default the players health to 100 and assign it to a variable that we can call later in the js file
var playerHealth = 100;
// check to see if the value of the playerHealth variable is greater than 0
if (playerHealth > 0) {
    console.log("Your player is still alive!");
  }
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
//assign player money to buy back points
var playerMoney = 10;

//create a function with an assigned varialbe to call later in the js file
var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    //Create a prompt that asks the user if they want to skip the battle or fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        console.log(promptFight);//NOTE: This can be removed, it is simply used to see the value in the console that the end user typed in.
    //if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"){
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " has now " + enemyHealth + " health remaining. "
    );
    // check enemy's health      
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    //remove players health by subtracting the amount set in enemyAttack
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      ); 
        
  // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        } 
        
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?"); //NOTE: provides a yes/no type option for the end user
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            console.log(playerMoney); //NOTE: verify in the console that the playermoney was subracted two points
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    }
  };

  //IMPORTANT: Need to execute the function
  fight();