namespace Endabgabe {
    export async function Dorf(): fS.SceneReturn {

        let text = {
            Narrator: {
              T0000: "Gucken sie mal Frau Doktor, das muss das Dorf sein.",
              T0001: "Schnell! Verteilen sie die Medizin an die armen Bewohner.",
              T0002: "Danke so sehr, das ist garnicht nötig.",
              T0003: "Aber wo soll uns RockLee wieder abholen?",
              T0004: "Sollen wir wieder zurück, da wo er mich abgesetzt hat?",
              T0005: "Oder lieber doch eine andere Abholstelle kommunizieren?"
            },
            Dorfbewohner: {
                T0000: "Wir danken ihnen so sehr, dass sie uns vor dieser Plage befreit haben. Als Geschenk, werden wir eine Statue von ihnen errichten Frau Doktor und Herr " + userName,
                T0002: "Ich sehe hier, ihr Versuch-O-Meter zeigt an, dass sie mit nur einem Versuch durch dieses Spiel sind. Dafür gebe ich ihnen einen Orden."
            }
          };

          await fS.Location.show(location.Dorf);
          console.log("Location shown");
          fS.Sound.fade(sound.jungle, 0, 0);
          fS.Sound.fade(sound.dorf, 0.3, 0.15);
          await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          await fS.update();
          console.log("FS Updated");

          await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0001);
          await fS.update();
          await fS.Character.hide(characters.Narrator);
          await fS.Character.show(characters.Dorfbewohner, characters.Dorfbewohner.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          if ((<HTMLInputElement>document.getElementById("bar")).value == "10") {
            await fS.Speech.tell(characters.Dorfbewohner, text.Dorfbewohner.T0002);
            await fS.update();
            orden = true;
          }
          await fS.Speech.tell(characters.Dorfbewohner, text.Dorfbewohner.T0000);
          await fS.update();
          await fS.Character.hide(characters.Dorfbewohner);
          await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0002);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0003);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0004);
          await fS.update();
          await fS.Speech.tell(characters.Narrator, text.Narrator.T0005);
          await fS.update();

          let choose = {
            C0001: "Alte Stelle",
            C0002: "Neue Abholstelle"
          }

          let userInput = await fS.Menu.getInput(choose, "selectBtn");

          switch (userInput) {
            case choose.C0001:
                fS.Sound.play(sound.click, 0.3, false);
                fS.Text.close();
                fS.Speech.clear();
                fS.Character.hideAll();
                fS.Sound.play(sound.tot, 0.3, false);
                await fS.Text.print("Ihr seid in eine Hinterhalt der böse Ureinwohner geraten. Sie sind zu viele, ihr könnt sie nicht aufhalten. Ihr werdet umgebracht.");
                return FlugZeug();
            
            case choose.C0002:
                fS.Sound.play(sound.click, 0.3, false);
                fS.Text.close();
                fS.Speech.clear();
                fS.Character.hideAll();
                return Ende();
          }


    }
}