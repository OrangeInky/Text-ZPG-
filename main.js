function loop() {
  if (isLooping) {
    loopId = setInterval(function iteration() {
      attack();
    }, framerate * (0.994649571761**Upgrades.frameRate*sliderValue)); // Set the interval to the specified framerate
  } else {
    // Stop the loop
    clearInterval(loopId);
    console.log("Loop stopped");
  }
}

function startGame() {
  document.getElementById("output").innerHTML = "Welcome to the Text RPG!<br>";
  document.getElementById("beginButton").style.display = "none";
  displayStats();
  isLooping = true;
  player.level = 1;
  fakeStat.maxHealth = 5+Upgrades.baseStat*1.5;
  fakeStat.attack = 2+Upgrades.baseStat*0.5;
  player.maxHealth = (5+Upgrades.baseStat*3) * (1+(Upgrades.statMul)/100);
  player.attack = (2+Upgrades.baseStat) * (1+(Upgrades.statMul)/100);
  player.currentHealth = player.maxHealth;
  generateNewEnemy();
  loop();
}
    function generateNewEnemy() {
	let hpMod = Math.floor(defeatCount * 3)*((1.06**defeatCount))
	let atkMod = Math.floor(defeatCount * 1)*(1.05**defeatCount)
	let bossID = 1
	if (defeatCount % 50 === 0) {hpMod = Math.pow(hpMod,1+defeatCount/250); atkMod = Math.pow(atkMod,1+defeatCount/250); bossID+=1;}
	let hp = Math.floor(hpMod*((Math.random() * 2)+1))
	if (defeatCount % 50 === 0 && defeatCount > 1) {
	enemy = {
        name: cosmeticNames(),
        maxHealth: 3+hp,
        currentHealth: 3+hp,
        attack: Math.floor((1 + atkMod)*((Math.random() * 2)+1)),
	id: bossID,}
	if (combatLogSettings.battleLog === true) {	addToCombatLog(`${enemy.name} appears!`);}}
	else {
     	enemy = {
        name: "Enemy",
        maxHealth: 3+hp,
        currentHealth: 3+hp,
        attack: Math.floor((1 + atkMod)*((Math.random() * 2)+1)),
	id: defeatCount,
      };
	  if (combatLogSettings.battleLog === true) {addToCombatLog(`${enemy.name} appears!`);}
}
	    	displayStats();
    }

    function displayStats() {
	let displayLevel = format(player.level);
	sliderValue = 100/parseInt(slider.value)
	document.getElementById("output").innerHTML = `Action happens every ${(sliderValue* framerate * (0.994649571761**Upgrades.frameRate)/1000).toFixed(3)} seconds.`
      document.getElementById("output").innerHTML += "<br> " + player.name + "<br>"  + " Level " + displayLevel + "<br>";
      document.getElementById("output").innerHTML += "<img src='Assets/heart.png' width='25' height='25' title='heart'> " + format(player.currentHealth)+ "/" + format(player.maxHealth) + "<br>";
      document.getElementById("output").innerHTML += "<img src='Assets/attack.png' width='25' height='25' title='attack'> " + format(player.attack) + "<br>";
	  document.getElementById("output").innerHTML += "<img src='Assets/coin.png' width='25' height='25' title='coins'> " + format(player.coin) + "<br>";
	  document.getElementById("output").innerHTML += "Exp: " + format(player.exp) + "/" + format(getExpReq(player.level)) + "<br><br>";

      document.getElementById("output").innerHTML += `${enemy.name} # ${enemy.id}<br>`;
      document.getElementById("output").innerHTML += "<img src='Assets/heart.png' width='25' height='25' title='heart'> " + format(Math.floor(enemy.currentHealth))+ "/" + format(Math.floor(enemy.maxHealth)) + "<br>";
      document.getElementById("output").innerHTML += "<img src='Assets/attack.png' width='25' height='25' title='attack'> " + format(Math.floor(enemy.attack)) + "<br><br>";
    }

    function attack() {
	  let calcCrit = calculateCrit()
      let playerDamage = (Math.floor(Math.random() * (1+Math.floor(player.attack/2))) + Math.floor(Math.random() * player.attack)/2 + 1)*calcCrit[0];
      enemy.currentHealth -= playerDamage;
	  if (combatLogSettings.battleLog === true) {
	  if (calcCrit[1] === true)
	  addToCombatLog(player.name + " dealt a successful level " + (getCritLevel()) + " crit! Dealing " + format(playerDamage) + " damage to " + enemy.name + "!");
	  else {
	  addToCombatLog(player.name + " dealt a level " + (getCritLevel()-1) + " crit! Dealing " + format(playerDamage) + " damage to " + enemy.name + "!");	  
	  }
	  }
	  if (Upgrades.lifeSteal > 0) {
	let healAmt = ((Upgrades.lifeSteal*0.5)/100 * playerDamage);
	  if (player.currentHealth < player.maxHealth) {
	  if ((player.currentHealth +  healAmt)> player.maxHealth) {player.currentHealth = player.maxHealth;} else {	  player.currentHealth += healAmt;}
	  if (combatLogSettings.skills === true) {addToCombatLog(player.name + " steals " + format(healAmt) + " HP!")}
	  } else {player.maxHealth += Math.sqrt(healAmt);  fakeStat.maxHealth  +=Math.sqrt(healAmt)}
	  if (combatLogSettings.skills === true) {addToCombatLog(player.name + " gained "  + format(Math.sqrt(healAmt)) + " as max health due to health steal!")}
	  }
      if (enemy.currentHealth <= 0) {
	  levelUp();
      } else {
        let enemyDamage = Math.floor(Math.random() * (1+Math.floor(enemy.attack/2))) + Math.floor(Math.random() * enemy.attack)/2 + 1;
        player.currentHealth -= enemyDamage;
		if (combatLogSettings.battleLog === true) {addToCombatLog(enemy.name + " dealt " + format(enemyDamage) + " damage to " + player.name + "!");}
        if (player.currentHealth <= 0) {playerDeath();}
      }
          displayStats();}
		  
	function playerDeath() {
	  player.currentHealth = 0;
	  addToCombatLog(player.name + " is defeated. Game over! But " + player.name + " earned " + format(getCoin(player.level)) +  "<img src='Assets/coin.png' width='25' height='25'>!");
	  isLooping = false;
	  loop();
	  player.exp = 0;
	  player.coin += getCoin(player.level)
	  document.getElementById("beginButton").style.display = "inline";
	  displayStats()
	  defeatCount = 0;
	  if (autoFight === true) {
	  startGame();
	  }
	}

	function levelUp() {
			let levelUpCount = 0;
			if (combatLogSettings.battleLog === true) {addToCombatLog(`${enemy.name} is defeated!`)}
			if (combatLogSettings.expGain === true) {addToCombatLog(player.name + " gained " + format(getExpGain()) + " exps!");}
			defeatCount++;
			player.exp+=getExpGain();
			fakeStat.maxHealth += (enemy.maxHealth*Upgrades.statSteal/500);
			fakeStat.attack += (enemy.attack*Upgrades.statSteal/500);
			if (combatLogSettings.skills === true) {addToCombatLog(player.name + " steals " + format(enemy.maxHealth*Upgrades.statSteal/500) + " max health and " + format(enemy.attack*Upgrades.statSteal/500) + " attack!")}
			while(player.exp>=getExpReq(player.level)) {player.exp -= getExpReq(player.level); player.level++; fakeStat.maxHealth += baseStatsGain[0]*((Upgrades.statGainOnLvUp)/2+1); fakeStat.attack += baseStatsGain[1]*((Upgrades.statGainOnLvUp)/2+1); levelUpCount++;}
			if(levelUpCount>0 && combatLogSettings.expGain === true){addToCombatLog(`${player.name} gained ${levelUpCount} levels!`);}
			player.maxHealth = fakeStat.maxHealth * 1+(Upgrades.statMul)/100;
			player.attack = fakeStat.attack * 1+(Upgrades.statMul)/100;
			player.currentHealth = player.maxHealth;
			generateNewEnemy();}

	function getCoin(level) {
	  // Generate a random factor between 1 and 2
	  const randomFactor = 1 + Math.random()*randRange;

	  return Math.floor(1 + (level ** 1.5) * randomFactor)*(1+(Upgrades.coinMult)/5);
	}

	function getExpGain() {const randomFactor = 1 + Math.random()*randRange; return Math.floor(((enemy.maxHealth+enemy.attack)/2)*randomFactor)*(1+(Upgrades.expMult)/5)}

	function getExpReq(level) {return expReq*(level**1.5)}