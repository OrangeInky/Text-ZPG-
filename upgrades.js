function upgrade(handle) {
	  let cost = calculateUpgradeCost(handle);
	  let i = 0;
		if (buyMax===true) {
		while (player.coin >= cost && i<300) {player.coin -= cost;
			switch (handle) {
		  case 1:
			Upgrades.coinMult++;
			break;
		  case 2:
			Upgrades.baseStat++;
			break;
		  case 3:
			Upgrades.statSteal++;
			break;
		  case 4:
			Upgrades.statMul++;
			break;
		  case 5:
		if(Upgrades.frameRate<301){Upgrades.frameRate++;} else{alert("Max level reached"); i=300}
		break;
		  case 6:
			Upgrades.expMult++;
			break;
		  case 7:
			Upgrades.statGainOnLvUp++;
			break;
		  case 8:
			Upgrades.lifeSteal++;
			break;
		  case 9:
			Upgrades.critChance++;
			break;
		  case 10:
			Upgrades.critMult++;
			break;
		  default:
			console.error('Invalid upgrade handle');
			break;
		}
		cost = calculateUpgradeCost(handle);
		i++;
		}
		} 
		else{
		// Check if the player has enough coins to purchase the upgrade
		if (player.coin >= cost) {
		// Subtract the cost from player's coins
		player.coin -= cost;

		// Update the Upgrades object with new levels
		switch (handle) {
		  case 1:
			Upgrades.coinMult++;
			break;
		  case 2:
			Upgrades.baseStat++;
			break;
		  case 3:
			Upgrades.statSteal++;
			break;
		  case 4:
			Upgrades.statMul++;
			break;
		  case 5:
		if(Upgrades.frameRate<301){Upgrades.frameRate++;} else{alert("Max level reached")}
		break;
		  case 6:
			Upgrades.expMult++;
			break;
		  case 7:
			Upgrades.statGainOnLvUp++;
			break;
		  case 8:
			Upgrades.lifeSteal++;
			break;
		  case 9:
			Upgrades.critChance++;
			break;
		  case 10:
			Upgrades.critMult++;
			break;
		  default:
			console.error('Invalid upgrade handle');
			break;
		}
	  }
			}
		displayUpgrade();
		displayStats();
	}
	
		function calculateUpgradeCost(handle) {switch(handle) {case 1: return getcoinMult(2); case 2: return getbaseStat(2); case 3: return getstatsSteal(2); case 4: return getstatMul(2); case 5: return getframeRate(2); case 6: return getexpMult(2); case 7: return getstatGainOnLvUp(2); case 8: return getlifeSteal(2); case 9: return getcritChance(2); case 10: return getcritMult(2);}}

	function getcoinMult(n) {	
			if (n===1) { return Upgrades.coinMult}
			if (n===2) { return Math.floor((Upgrades.coinMult+1) * (1.0426 ** Upgrades.coinMult))}
			}
	function getbaseStat(n) {	
			if (n===1) { return Upgrades.baseStat}
			if (n===2) { return Math.floor((Upgrades.baseStat+5) * (Math.max(1,(Upgrades.baseStat-1000)/1000) ** Upgrades.baseStat))}
			}
	function getstatsSteal(n) {	
			if (n===1) { return Upgrades.statSteal}
			if (n===2) { return Math.floor((Upgrades.statSteal+20) * (1.122 ** Upgrades.statSteal))}
			}
	function getstatMul(n) {	
			if (n===1) { return Upgrades.statMul}
			if (n===2) { return Math.floor((Upgrades.statMul+30) * (1.047 ** Upgrades.statMul))}
			}
	function getframeRate(n) {	
			if (n===1) { return Upgrades.frameRate}
			if (n===2) { return Math.floor((Upgrades.frameRate+50) * (1.0188 ** Upgrades.frameRate))}
			}
	function getexpMult(n) {
			if (n===1) { return Upgrades.expMult}
			if (n===2) { return Math.floor((Upgrades.expMult+1) * (1.0426 ** Upgrades.expMult))}
			}
	function getstatGainOnLvUp(n) {
			if (n===1) { return Upgrades.statGainOnLvUp}
			if (n===2) { return Math.floor((Upgrades.statGainOnLvUp+120) * (1.0426 ** Upgrades.statGainOnLvUp))}
			}
	function getlifeSteal(n) {
			if (n===1) { return Upgrades.lifeSteal}
			if (n===2) { return Math.floor((Upgrades.lifeSteal+100) * (1.0526 ** Upgrades.lifeSteal))}
			}
	function getcritChance(n) {
			if (n===1) { return Upgrades.critChance}
			if (n===2) { return Math.floor((Upgrades.critChance+200) * (1.0726 ** Upgrades.critChance))}
			}
	function getcritMult(n) {
			if (n===1) { return Upgrades.critMult}
			if (n===2) { return Math.floor((Upgrades.critMult+200) * (1.0426 ** Upgrades.critMult))}
			}

    function displayUpgrade() {
      const b1 = document.getElementById("UP1");
	  const b2 = document.getElementById("UP2");
	  const b3 = document.getElementById("UP3");
	  const b4 = document.getElementById("UP4");
	  const b5 = document.getElementById("UP5");
	  const b6 = document.getElementById("UP6");
	  const b7 = document.getElementById("UP7");
	  const b8 = document.getElementById("UP8");
	  const b9 = document.getElementById("UP9");
	  const b10 = document.getElementById("UP10")
      const c1 = calculateUpgradeCost(1);
	  const c2 = calculateUpgradeCost(2);
	  const c3 = calculateUpgradeCost(3);
	  const c4 = calculateUpgradeCost(4);
	  const c5 = calculateUpgradeCost(5);
	  const c6 = calculateUpgradeCost(6);
	  const c7 = calculateUpgradeCost(7);
	  const c8 = calculateUpgradeCost(8);
	  const c9 = calculateUpgradeCost(9);
	  const c10 = calculateUpgradeCost(10);

      // Update button text with cost and level
      b1.innerHTML = "Upgrade 1 <br> Level: " + format(Upgrades.coinMult) + "<br> Cost: " + format(c1) +" <img src='Assets/coin.png' width='25' height='25'> <br> Description: Multiplies coin gain by " + format(((Upgrades.coinMult)/5+1));
	  b2.innerHTML = "Upgrade 2 <br> Level: " + format(Upgrades.baseStat) + "<br> Cost: "+ format(c2) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: add " + format(Upgrades.baseStat*1.5) + " base <img src='Assets/heart.png' width='25' height='25' title='heart'> and " + format(Upgrades.baseStat*0.5) + " base <img src='Assets/attack.png' width='25' height='25' title='attack'> <br> Hint: Triggers after player death, not immedieatly after purchase.";
	  b3.innerHTML = "Upgrade 3 <br> Level: "+ format(Upgrades.statSteal) + "<br> Cost: " +format(c3) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: steals " + format(Upgrades.statSteal/5) + "% of defeated enemy's stat";
	  b4.innerHTML = "Upgrade 4 <br> Level: " + format(Upgrades.statMul) + "<br> Cost: " + format(c4) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: Multiplies <img src='Assets/heart.png' width='25' height='25' title='heart'> and <img src='Assets/attack.png' width='25' height='25' title='attack'> by " + format(1+(Upgrades.statMul)/100) + "x";
	  b5.innerHTML = "Upgrade 5 <br> Level: " + Upgrades.frameRate + "<br> Cost: " + format(c5) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: Make things happen faster.";
	  b6.innerHTML = "Upgrade 6 <br> Level: " + format(Upgrades.expMult) + "<br> Cost: " + format(c6) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: Multiplies exp gain by " + format((Upgrades.expMult)/5+1);
	  b7.innerHTML = "Upgrade 7 <br> Level: " + format(Upgrades.statGainOnLvUp) + "<br> Cost: " + format(c7) +" <img src='Assets/coin.png' width='25' height='25'> <br> Description: Multiply stats gained on level up by " + format((Upgrades.statGainOnLvUp)/2+1);
	  b8.innerHTML = "Upgrade 8 <br> Level: "+ format(Upgrades.lifeSteal) + "<br> Cost: " +format(c8) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: steals " + format(Upgrades.lifeSteal*0.5) + "% of your damage dealt as <img src='Assets/heart.png' width='25' height='25' title='heart'> Excessive <img src='Assets/heart.png' width='25' height='25' title='heart'> get added to max health diminishingly.";
	  b9.innerHTML = "Upgrade 9 <br> Level: "+ format(Upgrades.critChance) + "<br> Cost: " +format(c9) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: gives you a " + format(1+Upgrades.critChance/2) + "% chance of dealing a crit. Crit chance above 100% allows for supercrits.";
	  b10.innerHTML = "Upgrade 10 <br> Level: "+ format(Upgrades.critMult) + "<br> Cost: " +format(c10) + " <img src='Assets/coin.png' width='25' height='25'> <br> Description: Your current crit damage multiplier " + format(150+Upgrades.critMult*5) + "%";
    }
		
	function getCritLevel() {
	return Math.floor((Upgrades.critChance+1)/200+1)
	}
	
	function calculateCrit() {
	let dmgMult = 1;
	let range = ((Upgrades.critChance+1)/200+1)%100*10
	let check = Math.floor(Math.random()*100)
	let succ = false;
	if (check<=range) {
		dmgMult *= (Upgrades.critMult/20+1.5)**getCritLevel()
		succ = true;
	}
	else {dmgMult *= (Upgrades.critMult/20+1.5)**(getCritLevel()-1)}
	return [dmgMult,succ]
	}
	