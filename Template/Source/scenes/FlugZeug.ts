namespace Endabgabe {
  export async function FlugZeug(): fS.SceneReturn {

    tookItem = 0;
    versuche++;
    document.getElementById("tries").innerText = "Versuche: " + versuche;
    if (versuche > 0) (<HTMLInputElement>document.getElementById("bar")).value = (Number((<HTMLInputElement>document.getElementById("bar")).value) - 1) + "";

    await fS.Character.hideAll();
    await fS.Speech.hide();

    let text = {
      RockLee: {
        T0000: "Ich bin Rock Lee und du wirst mich auf einer wichtigen Mission begleiten.",
        T0001: "Unter mir liegt einer der unberührtesten und gefährlichsten Dschungel der Welt.",
        T0002: "Eine Ärztin ist bei der Lieferung von Medikamenten an ein abgelegenes Dorf verschollen. Es ist unsere Aufgabe, diese Ärztin zu finden und die Medikamente in das Dorf zu bringen.",
        T0003: "Die letzte bekannte Position der Ärztin liegt etwa 50 Kilometer nördlich, Tief im Herzen dieses Dschungels.",
        T0004: "Vor uns liegen gefährliche Flüsse mit Strömungen und massive Felsschluchten aus Vulkangestein. Es gibt sogar Geschichten über eine verlassene Ruine irgendwo da draußen, tief in diesem Dschungel.",
        T0005: "Vergiss nicht, auf dieser Mission hast du das Kommando. Und es ist bereits Zeit für deine erste Entscheidung, bist du bereit?",
        T0006: "Hey du! Du bist eine Legende!"
      },
      Narrator: {
        T0000: "Ich kann noch einen weiteren Gegenstand in meinen Rucksack packen.",
        T0001: "Entweder einen Enterhaken oder eine Steinschleuder.",
        T0002: "Was nehm ich mit?"
      }
    };

    await fS.Location.show(location.Flugzeug);
    console.log("Location shown");

    await fS.Character.show(characters.RockLee, characters.RockLee.pose.neutral, fS.positions.bottomright)
    await fS.Character.animate(characters.RockLee, characters.RockLee.pose.neutral, slideInAnimation());
    console.log("Character shown");
    await fS.update(2);
    console.log("FS Updated");
    
    // Rock lee spricht
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0000);
    await fS.update();
    await fS.Speech.tell(characters.RockLee, "Wie heißt du eigentlich mein Junge?");
    userName = await fS.Speech.getInput();
    console.log(userName);
    // SEHR SELTENER SPRUCH
    if (orden == true) {
      await fS.Speech.tell(characters.RockLee, text.RockLee.T0006);
      await fS.update();
    }
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0001);
    await fS.update();
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0002);
    await fS.update();
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0003);
    await fS.update();
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0004);
    await fS.update();
    await fS.Speech.tell(characters.RockLee, text.RockLee.T0005);
    await fS.update();
    // Narrator spricht
    await fS.Character.animate(characters.RockLee, characters.RockLee.pose.neutral, slideOutAnimation());
    await fS.Character.hide(characters.RockLee);
    await fS.Character.show(characters.Narrator, characters.Narrator.pose.neutral, fS.positions.bottomcenter);
    console.log("Character shown");
    await fS.update();
    await fS.Speech.tell(characters.Narrator, text.Narrator.T0000);
    await fS.update();
    await fS.Speech.tell(characters.Narrator, text.Narrator.T0001);
    await fS.update();
    await fS.Speech.tell(characters.Narrator, text.Narrator.T0002);
    await fS.update();
    
    let chooseItem = {
      C0001: "Den Enterhaken mitnehmen",
      C0002: "Die Steinschleuder mitnehmen"
    }

    let userInput = await fS.Menu.getInput(chooseItem, "selectBtn");

    switch (userInput) {
      case chooseItem.C0001:
        fS.Sound.play(sound.click, 0.3, false);
        tookItem = 1;
        setTimeout(() => {
          fS.Text.print("Du hast einen Enterhaken bekommen.");
        }, 1000);
        fS.Text.close();
        fS.Speech.clear();
        fS.Character.hideAll();
        await fS.update(1).then(() => {
          return InselAnfang();
        });
      
      case chooseItem.C0002:
        fS.Sound.play(sound.click, 0.3, false);
        tookItem = 2;
        setTimeout(() => {
          fS.Text.print("Du hast eine Steinschleuder bekommen.");
        }, 1000);
        fS.Text.close();
        fS.Speech.clear();
        fS.Character.hideAll();
        await fS.update(1).then(() => {
          return InselAnfang();
        });
        
    }

    return InselAnfang();
  }
}