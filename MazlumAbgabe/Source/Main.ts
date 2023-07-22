namespace Endabgabe {
  export import ƒ = FudgeCore;
  export import fS = FudgeStory;
  export let userName = "";
  export let versuche = -1;

  console.log("FudgeStory template starting");

  window.addEventListener("load", start);
  function start(_event: Event): void {
    fS.Speech.hide();
    let scenes: fS.Scenes = [
      { scene: FlugZeug, name: "Flugzeug" },
      { scene: InselAnfang, name: "InselAnfang" },
      { scene: AufBerg, name: "AufBerg" },
      { scene: Dorf, name: "Dorf" },
      { scene: Ende, name: "Ende" }
    ];

    // start the sequence
    fS.Progress.go(scenes);
  }

  // VERY SIMPLE "INVENTORY" SYSTEM
  // 0 == Nichts | 1 == Enterhaken | 2 == Steinschleuder
  export let tookItem = 0;
  export let orden = false;

  export let sound = {
    click: "./Sounds/click.mp3",
    tot: "./Sounds/tot.mp3",
    jungle: "./Sounds/jungle.mp3",
    dorf: "./Sounds/dorf.mp3"
  };

  export let characters = {
    Narrator: {
      name: "Ich",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Protagonist.png"
      }
    },

    RockLee: {
      name: "RockLee",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/RockLee.png"
      }
    },
    Ärztin: {
      name: "Ärztin",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Ärztin.png"
      }
    },
    Ureinwohner: {
      name: "Ureinwohner",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/UrEinWohner.png"
      }
    },
    Dorfbewohner: {
      name: "Dorfbewohner",
      origin: fS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Dorfeinwohner.png"
      }
    },
  };

  export let location = {
    Flugzeug: {
      name: "Flugzeug",
      background: "./Images/locations/flugzeug.jpg"
    },
    InselAnfang: {
      name: "InselAnfang",
      background: "./Images/locations/InselAnfang.jpg"
    },
    AufBerg: {
      name: "AufBerg",
      background: "./Images/locations/AufBerg.jpg"
    },
    Dorf: {
      name: "Dorf",
      background: "./Images/locations/dorf.jpg"
    }
  };

}