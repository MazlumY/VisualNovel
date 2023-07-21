namespace Endabgabe {
    export async function AufBerg(): fS.SceneReturn {

        let text = {
            Narrator: {
              // MIT ENTERHAKEN  
              T0000: "Alter war das ein steiler Berg.",
              T0001: "Zum glück hatte ich den Enterhaken dabei.",           
              // MIT STEINSCHLEUDER
              T0002: "Das waren aber viele Treppen. Jetzt bin ich echt erschöpft.",
              // ALLES ANDERE
              T0003: "Da ist ja eine Höhle",
              T0004: "Soll ich da rein schauen? Oder ist das zu gefährlich?",
              T0005: "Sollen wir lieber der Karte folgen? Oder einen Umweg durch den Dschungel nehmen?"
            },
            Ärztin: {
                // GEHST IN HÖHLE
                T0000: "Danke, dass du mich gefunden hast. Du bist bestimmt " + userName + ", richtig?",
                T0001: "Ich dachte schon ich verhungere hier.",
                T0002: "Lass uns schnell die Dorfeinwohner finden, um ihnen die Medizin zu geben.",
                T0003: "Hier ist eine Karte mit der ich mich bis jetzt navigiert habe, aber ich hab gehört, dass böse Ureinwohner da draußen sind.",
                T0004: "Deswegen war ich hier versteckt.",
                // LÄUFST WEITER
                T0005: "Oh nein, hier hat sich ein Tor geschlossen!",
                T0006: "Ich komm nicht mehr heraus!"
            }
          };

          await fS.Location.show(location.AufBerg);
          console.log("Location shown");
          await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          await fS.update();
          console.log("FS Updated");

          switch (tookItem) {
            // ENTERHAKEN
            case 1:
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
                await fS.update();
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0001);
                await fS.update();
            // STEINSCHLEUDER
            case 2:
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0002);
                await fS.update();
          }

          await fS.Speech.tell(characters.Narrator, text.Narrator.T0003);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0004);
          await fS.update();

          let choose = {
            C0001: "Höhle betreten",
            C0002: "Weiter laufen"
          }

          let userInput = await fS.Menu.getInput(choose, "selectBtn");

          switch (userInput) {
            case choose.C0001:
                fS.Sound.play(sound.click, 0.3, false);
                await fS.Character.hide(characters.Narrator);
                await fS.Character.show(characters.Ärztin, characters.Ärztin.pose.neutral, fS.positions.bottomcenter);
                console.log("Character shown");
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0000);
                await fS.update();
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0001);
                await fS.update();
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0002);
                await fS.update();
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0003);
                await fS.update();
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0004);
                await fS.update();

                let choose2 = {
                    C0001: "Karte befolgen",
                    C0002: "Durch den Dschungel laufen"
                }

                userInput = await fS.Menu.getInput(choose2, "selectBtn");

                switch (userInput) {
                    case choose2.C0001:
                        fS.Sound.play(sound.click, 0.3, false);
                        fS.Sound.play(sound.tot, 0.3, false);
                        fS.Text.close();
                        fS.Speech.clear();
                        fS.Character.hideAll();
                        await fS.Text.print("Ihr seid in eine Hinterhalt der böse Ureinwohner geraten. Sie sind zu viele, ihr könnt sie nicht aufhalten. Ihr werdet umgebracht.");
                        return FlugZeug();
                    
                    case choose2.C0002:
                        fS.Sound.play(sound.click, 0.3, false);
                        fS.Text.close();
                        fS.Speech.clear();
                        fS.Character.hideAll();
                        return Dorf();
                }

            case choose.C0002:
                fS.Sound.play(sound.click, 0.3, false);
                await fS.Character.hide(characters.Narrator);
                await fS.Character.show(characters.Ärztin, characters.Ärztin.pose.neutral, fS.positions.bottomcenter);
                console.log("Character shown");
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0005);
                await fS.update();
                await fS.Speech.tell(characters.Ärztin, text.Ärztin.T0006);
                await fS.update(); 
                fS.Sound.play(sound.tot, 0.3, false);
                fS.Text.close();
                fS.Speech.clear();
                fS.Character.hideAll();
                await fS.Text.print("Die Ärztin verhungert, da du das Tor nicht aufbekommen konntest. Mission fehlgeschlagen.");
                return FlugZeug();
          }

    }
}