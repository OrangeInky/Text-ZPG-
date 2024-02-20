	function saveGame () {
	let gameData = {player: player, fakeStat: fakeStat, Upgrades : Upgrades};
	gameData = JSON.stringify(gameData);
	localStorage.setItem("savedGame",gameData)
	console.log("saved")
}

	function loadGame () {
	let gameData = localStorage.getItem("savedGame")
	gameData = JSON.parse(gameData);
	if (gameData != null) {
	player.coin = gameData.player.coin;
	fakeStat = gameData.fakeStat;
	Upgrades = gameData.Upgrades;
	} else {initialize();}
	if (typeof gameData.Upgrades.expMult === "undefined" || typeof gameData.Upgrades.expMult === null) {Upgrades.expMult = 0;}
	if (typeof gameData.Upgrades.statGainOnLvUp === "undefined" || typeof gameData.Upgrades.statGainOnLvUp === null) {Upgrades.statGainOnLvUp = 0;}
	if (typeof gameData.Upgrades.critChance === "undefined" || typeof gameData.Upgrades.critChance === null) {Upgrades.critChance = 0;}
	if (typeof gameData.Upgrades.critMult === "undefined" || typeof gameData.Upgrades.critMult === null) {Upgrades.critMult = 0;}
	if (typeof gameData.Upgrades.lifeSteal === "undefined" || typeof gameData.Upgrades.lifeSteal === null) {Upgrades.lifeSteal = 0;}
	if (typeof gameData.player.coin === "undefined" || typeof gameData.player.coin === null) {player.coin = 0;}
	displayUpgrade();
}

	function saveLoop() {setInterval(function () {saveGame()},5000)}
	saveLoop();
	function resetGame() {
    var C = confirm("YOU ARE RESETING THE GAME, ARE YOU SURE YOU WANT TO DO THAT?")
    if (C == true) {
        initialize();
        loadGame()
        location.reload();
    }
}
	function startUp() {
	let gameData = localStorage.getItem("savedGame")
	if (gameData != null) {
	loadGame();
	displayUpgrade();
	displayStats();	
	}
	}
	function buyMaxMode() {if (buyMax === true) {buyMax=false;} else {buyMax=true}}
	function autoFightMode() {if (autoFight === true) {autoFight=false;} else {autoFight =true}}
	function changeMode(n) {
		switch (n) {
		case 1:
		if (combatLogSettings.battleLog === true) {combatLogSettings.battleLog = false;} else {combatLogSettings.battleLog =true}
		break;
		case 2:
		if (combatLogSettings.expGain === true) {combatLogSettings.expGain = false;} else {combatLogSettings.expGain = true;}
		break;
		case 3:
		if (combatLogSettings.skills === true) {combatLogSettings.skills = false;} else {combatLogSettings.skills = true;} 
		break;
		}

	}
	
	displayUpgrade()