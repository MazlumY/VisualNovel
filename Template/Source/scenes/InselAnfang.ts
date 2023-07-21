namespace Endabgabe {
    export async function InselAnfang(): fS.SceneReturn {
        let text = {
            Narrator: {
              T0000: "Jetzt bin ich also alleine hier.",
              T0001: "Wohin geh ich denn nun?",
              T0002: "Folg ich den <span style='color:yellow'>Feldweg</span> oder laufe ich <span style='color:green'>durch den Dschungel</span>?",
              T0003: "Ah warte, ich hab doch die Steinschleuder!",
              T0004: "Da ist ja eine Treppe die den Berg hoch führt.",
              T0005: "Oh warte da ist ja sogar eine Höhle neben der Treppe, die sieht auch ziemlich interessant aus. Wo soll ich hin?",
              T0006: "Oh scheiße! Ist das ein Tiger? NEIN!!!"
            },
            UrEinWohner: {
                T0000: "Hey! Was machst du hier? Das ist unsere Insel!"
            }
          };

          await fS.Location.show(location.InselAnfang);
          console.log("Location shown");
          await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          await fS.update();
          console.log("FS Updated");

          await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0001);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0002);
          await fS.update();

          let choose = {
            C0001: "Feldweg",
            C0002: "Dschungel"
          }
      
          let userInput = await fS.Menu.getInput(choose, "selectBtn");
      
          switch (userInput) {
            case choose.C0001:
            fS.Sound.play(sound.click, 0.3, false);
              if (tookItem == 1) {
                setTimeout(() => {
                fS.Text.print("Böse Ureinwohner haben dich gefunden und dich getötet.");
                }, 1000);
                fS.Text.close();
                fS.Speech.clear();
                fS.Character.hideAll();
                fS.Sound.play(sound.tot, 0.3, false);
                return FlugZeug();
              } else {
                await fS.Character.show(characters.Ureinwohner, characters.Ureinwohner.pose.neutral, fS.positions.bottomcenter);
                await fS.Speech.tell(characters.Ureinwohner, text.UrEinWohner.T0000);
                await fS.update();
                await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0003);
                await fS.update();
                fS.Text.print("Du hast den Ureinwohner besiegt.");
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0004);
                await fS.update();
                await fS.Speech.tell(characters.Narrator, text.Narrator.T0005);
                await fS.update();

                let choose2 = {
                    C0001: "Treppen steigen",
                    C0002: "Höhle betreten."
                }

                userInput = await fS.Menu.getInput(choose2, "selectBtn");

                switch (userInput) {
                    case choose2.C0001:
                        fS.Sound.play(sound.click, 0.3, false);
                        fS.Text.close();
                        fS.Speech.clear();
                        fS.Character.hideAll();
                        return AufBerg();
                    
                    case choose2.C0002:
                        fS.Sound.play(sound.click, 0.3, false);
                        await fS.Speech.tell(characters.Narrator, text.Narrator.T0006);
                        await fS.update();
                        fS.Text.print("Du wurdest von einem Tiger gefressen.");
                        fS.Sound.play(sound.tot, 0.3, false);
                        return FlugZeug();
                }

              }
            
            case choose.C0002:
                fS.Sound.play(sound.click, 0.3, false);
                if (tookItem == 1) {
                    fS.Text.close();
                    fS.Speech.clear();
                    fS.Character.hideAll();
                    return AufBerg();
                } else {
                    setTimeout(() => {
                    fS.Text.print("Du kommst ohne den Enterhaken den Berg nicht hoch, wilde Tiere finden dich und fressen dich.");
                    }, 1000);
                    fS.Text.close();
                    fS.Speech.clear();
                    fS.Character.hideAll();
                    fS.Sound.play(sound.tot, 0.3, false);
                    return FlugZeug();
                }
              
          }

    }
}