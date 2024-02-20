function initialize() {
player = {
      name: "Player",
      level: 1,
      maxHealth: 5,
      currentHealth: 5,
      attack: 2,
      coin: 0,
	  exp: 0,
    };
fakeStat = {
      maxHealth: 5,
      attack: 2,
    };
Upgrades = {coinMult: 0, baseStat: 0, statSteal: 0, statMul: 0, frameRate: 0, expMult: 0, statGainOnLvUp: 0, lifeSteal: 0, critChance: 0, critMult: 0};
saveGame();
}

	  
function format(x) {
    let power = Math.floor(Math.log10(x))
    let matissa = x / Math.pow(10, power)
    if (power < 5) {
        return x.toFixed(2);
    } else {
        return matissa.toFixed(2) + "e" + power;
    }
}	  


function addToCombatLog(message) {
  const combatLog = document.getElementById("combat-log");
  const maxMessages = 100;

  // Create a new div for the message
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = message;

  // Add the new message div
  combatLog.appendChild(messageDiv);

  // Remove the top-most message if the cap is reached
  const messages = combatLog.children;
  if (messages.length > maxMessages) {
    combatLog.removeChild(messages[0]);
  }

  // Scroll to the bottom
  combatLog.scrollTop = combatLog.scrollHeight;
}

function cosmeticNames() {
const names = [ "Morsius", "Acheron", "Nocturna", "Malumus", "Luciferius", "Obsidianus", "Vespera", "Maleficus", "Umbrae", "Belialus", "Carceris", "Nefarius", "Stygius", "Caliginis", "Morbidius", "Damnatio", "Veneficus", "Sinistra", "Abaddonis", "Mortifex", "Tenebris", "Lethargus", "Serpentinus", "Infernalis", "Vanthius", "Diabolus", "Luxuria", "Orcus", "Desolatus", "Abominus", "Vestigia", "Malevolus", "Cadaveris", "Exanimus", "Obscurus", "Avaritia", "Ignobilis", "Noctis", "Sinistralis", "Nigredus", "Vorago", "Exsecratio", "Mortiferus", "Calvaria", "Perfidia", "Decadentia", "Luctus", "Voluptas", "Serpentis", "Maledictus", "Perditus", "Phobos", "Malificus", "Sanguis", "Ferox", "Nihilus", "Invidius", "Devorator", "Atra", "Aberratio", "Pestilentia", "Amplus", "Sordidus", "Cruentus", "Furtivus", "Exanimo", "Macabrus", "Turbidus", "Ruina", "Cessatio", "Vorax", "Exsanguis", "Exsequor", "Sibilus", "Luctuosus", "Letum", "Ulciscor", "Taeter", "Periculum", "Abstrusus", "Obumbratio", "Lucustus", "Nefandus", "Aberratio", "Sempiternus", "Abnegatio", "Devoratrix", "Trepidus", "Palantia", "Insidiosus", "Venenatus", "Cognatus", "Letifer", "Adflictio", "Exulatus", "Pavor", "Extero", "Crepusculum", "Tormentum", "Fatum"]
const suffix = ["the Destroyer of Worlds","the Unyielding","the Magnificent","the Enigma","the Relentless","the Wise","the Fearless","the Conqueror","the Mystic","the Indomitable","the Great","the Invincible","the Slayer","the Mighty","the Eternal","the Swift","the Benevolent","the Fierce","the Untamed","the Champion","the Phoenix","the Specter","the Immortal","the Shadow","the Avenger","the Resilient","the Dragonborn","the Wanderer","the Endless","the Guardian","the Valiant","the Vanquisher","the Watcher","the Redeemer","the Stormbringer","the Silent","the Celestial","the Crimson","the Inferno","the Ironclad","the Serpent","the Herald","the Warlord","the Sentinel","the Arbiter","the Savage","the Merciless","the Stalwart","the Wanderlust","the Shadowhunter","the Thunderer","the Thunderbolt","the Visionary","the Juggernaut","the Whisperer","the Phoenixborn","the Ascendant","the Paragon","the Nightfall","the Nightshade","the Everlasting","the Behemoth","the Archmage","the Enforcer","the Arcane","the Alchemist","the Spellbinder","the Lorekeeper","the Mythic","the Sentinel","the Dreadnought","the Berserker","the Stormborn","the Warbringer","the Reaper","the Battlemage","the Guardian","the Paladin","the Tempest","the Thunder","the Frostborn","the Flamewalker","the Lightbringer","the Starborn","the Astral","the Radiant","the Darkstar","the Magus","the Illusionist","the Battlemaster","the Trickster","the Warlock","the Shadowblade","the Sunwalker","the Dreamwalker","the Bloodhound","the Crusader","the Swiftblade","the Stormcaller","the Moonwalker" ]
let a = Math.floor(Math.random()*100)
let b = Math.floor(Math.random()*100)
return names[a] + " " + suffix[b]
}

	
	function sliderFunc() {
	  isLooping = false;
      loop();
	if (player.currentHealth === 0) {
	  isLooping = false;
      loop();
	} else {
	  isLooping = true;
      loop();
	}
		displayUpgrade();
		displayStats();
	}
	
	function tab (tab) {
	document.getElementById("container").style.display = "none"
	document.getElementById("container-simul").style.display = "none"
	if (tab === "container") {
	document.getElementById("container").style.display = "inline-block"
	document.getElementById("container-simul").style.display = "grid"
	} else {
    document.getElementById(tab).style.display = "inline-block"		
	}
	}