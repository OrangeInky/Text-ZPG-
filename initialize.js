var slider = document.getElementById("percentage-slider");
var sliderValue = parseInt(slider.value)/100;
let framerate = 1000;
let player = {
      name: "Player",
      level: 1,
      maxHealth: 5,
      currentHealth: 5,
      attack: 2,
      coin: 0,
	  exp: 0,
    };
let fakeStat = {
      maxHealth: 5,
      attack: 2,
    };
let enemy = {name: "Dummy Doll", currentHealth: 1, maxHealth: 1, attack: 1, id: -1,};
let loopId;
let isLooping = false;
let Upgrades = {coinMult: 0, baseStat: 0, statSteal: 0, statMul: 0, frameRate: 0, expMult: 0, statGainOnLvUp: 0, lifeSteal: 0, critChance: 0, critMult: 0};
let defeatCount = 0;
let expReq = 10;
let randRange = 1;
let baseStatsGain = [3,1]
let buyMax = false;
let autoFight = false;
let combatLogSettings = {battleLog: true, expGain: true, skills: false}
