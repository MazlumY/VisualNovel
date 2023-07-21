"use strict";
var Endabgabe;
(function (Endabgabe) {
    Endabgabe.ƒ = FudgeCore;
    Endabgabe.fS = FudgeStory;
    Endabgabe.userName = "";
    Endabgabe.versuche = -1;
    console.log("FudgeStory template starting");
    window.addEventListener("load", start);
    function start(_event) {
        Endabgabe.fS.Speech.hide();
        let scenes = [
            { scene: Endabgabe.FlugZeug, name: "Flugzeug" },
            { scene: Endabgabe.InselAnfang, name: "InselAnfang" },
            { scene: Endabgabe.AufBerg, name: "AufBerg" },
            { scene: Endabgabe.Dorf, name: "Dorf" },
            { scene: Endabgabe.Ende, name: "Ende" }
        ];
        // start the sequence
        Endabgabe.fS.Progress.go(scenes);
    }
    // VERY SIMPLE "INVENTORY" SYSTEM
    // 0 == Nichts | 1 == Enterhaken | 2 == Steinschleuder
    Endabgabe.tookItem = 0;
    Endabgabe.orden = false;
    Endabgabe.sound = {
        click: "./Sounds/click.mp3",
        tot: "./Sounds/tot.mp3"
    };
    Endabgabe.characters = {
        Narrator: {
            name: "Ich",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Protagonist.png"
            }
        },
        RockLee: {
            name: "RockLee",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/RockLee.png"
            }
        },
        Ärztin: {
            name: "Ärztin",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Ärztin.png"
            }
        },
        Ureinwohner: {
            name: "Ureinwohner",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/UrEinWohner.png"
            }
        },
        Dorfbewohner: {
            name: "Dorfbewohner",
            origin: Endabgabe.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Dorfeinwohner.png"
            }
        },
    };
    Endabgabe.location = {
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
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    function slideInAnimation() {
        return {
            start: { translation: Endabgabe.fS.positions.bottomright },
            end: { translation: Endabgabe.fS.positions.bottomleft },
            duration: 1,
            playmode: Endabgabe.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Endabgabe.slideInAnimation = slideInAnimation;
    function slideOutAnimation() {
        return {
            start: { translation: Endabgabe.fS.positions.bottomleft },
            end: { translation: Endabgabe.fS.positions.bottomright },
            duration: 1,
            playmode: Endabgabe.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Endabgabe.slideOutAnimation = slideOutAnimation;
    function fromOutofCanvasToRight() {
        return {
            start: { translation: Endabgabe.fS.positionPercent(110, 100) },
            end: { translation: Endabgabe.fS.positionPercent(70, 100) },
            duration: 1,
            playmode: Endabgabe.fS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    Endabgabe.fromOutofCanvasToRight = fromOutofCanvasToRight;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function AufBerg() {
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
                T0000: "Danke, dass du mich gefunden hast. Du bist bestimmt " + Endabgabe.userName + ", richtig?",
                T0001: "Ich dachte schon ich verhungere hier.",
                T0002: "Lass uns schnell die Dorfeinwohner finden, um ihnen die Medizin zu geben.",
                T0003: "Hier ist eine Karte mit der ich mich bis jetzt navigiert habe, aber ich hab gehört, dass böse Ureinwohner da draußen sind.",
                T0004: "Deswegen war ich hier versteckt.",
                // LÄUFST WEITER
                T0005: "Oh nein, hier hat sich ein Tor geschlossen!",
                T0006: "Ich komm nicht mehr heraus!"
            }
        };
        await Endabgabe.fS.Location.show(Endabgabe.location.AufBerg);
        console.log("Location shown");
        await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.update();
        console.log("FS Updated");
        switch (Endabgabe.tookItem) {
            // ENTERHAKEN
            case 1:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0001);
                await Endabgabe.fS.update();
            // STEINSCHLEUDER
            case 2:
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0002);
                await Endabgabe.fS.update();
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0003);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0004);
        await Endabgabe.fS.update();
        let choose = {
            C0001: "Höhle betreten",
            C0002: "Weiter laufen"
        };
        let userInput = await Endabgabe.fS.Menu.getInput(choose, "selectBtn");
        switch (userInput) {
            case choose.C0001:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Narrator);
                await Endabgabe.fS.Character.show(Endabgabe.characters.Ärztin, Endabgabe.characters.Ärztin.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                console.log("Character shown");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0000);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0001);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0002);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0003);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0004);
                await Endabgabe.fS.update();
                let choose2 = {
                    C0001: "Karte befolgen",
                    C0002: "Durch den Dschungel laufen"
                };
                userInput = await Endabgabe.fS.Menu.getInput(choose2, "selectBtn");
                switch (userInput) {
                    case choose2.C0001:
                        Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                        Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                        Endabgabe.fS.Text.close();
                        Endabgabe.fS.Speech.clear();
                        Endabgabe.fS.Character.hideAll();
                        await Endabgabe.fS.Text.print("Ihr seid in eine Hinterhalt der böse Ureinwohner geraten. Sie sind zu viele, ihr könnt sie nicht aufhalten. Ihr werdet umgebracht.");
                        return Endabgabe.FlugZeug();
                    case choose2.C0002:
                        Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                        Endabgabe.fS.Text.close();
                        Endabgabe.fS.Speech.clear();
                        Endabgabe.fS.Character.hideAll();
                        return Endabgabe.Dorf();
                }
            case choose.C0002:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                await Endabgabe.fS.Character.hide(Endabgabe.characters.Narrator);
                await Endabgabe.fS.Character.show(Endabgabe.characters.Ärztin, Endabgabe.characters.Ärztin.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                console.log("Character shown");
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0005);
                await Endabgabe.fS.update();
                await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ärztin, text.Ärztin.T0006);
                await Endabgabe.fS.update();
                Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                Endabgabe.fS.Text.close();
                Endabgabe.fS.Speech.clear();
                Endabgabe.fS.Character.hideAll();
                await Endabgabe.fS.Text.print("Die Ärztin verhungert, da du das Tor nicht aufbekommen konntest. Mission fehlgeschlagen.");
                return Endabgabe.FlugZeug();
        }
    }
    Endabgabe.AufBerg = AufBerg;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Dorf() {
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
                T0000: "Wir danken ihnen so sehr, dass sie uns vor dieser Plage befreit haben. Als Geschenk, werden wir eine Statue von ihnen errichten Frau Doktor und Herr " + Endabgabe.userName,
                T0002: "Ich sehe hier, ihr Versuch-O-Meter zeigt an, dass sie mit nur einem Versuch durch dieses Spiel sind. Dafür gebe ich ihnen einen Orden."
            }
        };
        await Endabgabe.fS.Location.show(Endabgabe.location.Dorf);
        console.log("Location shown");
        await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.update();
        console.log("FS Updated");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0001);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Narrator);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Dorfbewohner, Endabgabe.characters.Dorfbewohner.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        if (document.getElementById("bar").value == "10") {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Dorfbewohner, text.Dorfbewohner.T0002);
            await Endabgabe.fS.update();
            Endabgabe.orden = true;
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Dorfbewohner, text.Dorfbewohner.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Character.hide(Endabgabe.characters.Dorfbewohner);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0002);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0003);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0004);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0005);
        await Endabgabe.fS.update();
        let choose = {
            C0001: "Alte Stelle",
            C0002: "Neue Abholstelle"
        };
        let userInput = await Endabgabe.fS.Menu.getInput(choose, "selectBtn");
        switch (userInput) {
            case choose.C0001:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                Endabgabe.fS.Text.close();
                Endabgabe.fS.Speech.clear();
                Endabgabe.fS.Character.hideAll();
                Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                await Endabgabe.fS.Text.print("Ihr seid in eine Hinterhalt der böse Ureinwohner geraten. Sie sind zu viele, ihr könnt sie nicht aufhalten. Ihr werdet umgebracht.");
                return Endabgabe.FlugZeug();
            case choose.C0002:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                Endabgabe.fS.Text.close();
                Endabgabe.fS.Speech.clear();
                Endabgabe.fS.Character.hideAll();
                return Endabgabe.Ende();
        }
    }
    Endabgabe.Dorf = Dorf;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function Ende() {
        let text = {
            RockLee: {
                T0000: "Gut gemacht Kollegen!",
                T0001: "Dank ihnen, kann ein Dorf wort-wörtlich 'wieder atmen'.",
                T0002: "Sie haben heute viel Mut und Tapferkeit erwiesen.",
                T0003: "Dafür kriegen sie einen Orden vom Minister höhstpersönlich."
            },
        };
        await Endabgabe.fS.Location.show(Endabgabe.location.InselAnfang);
        console.log("Location shown");
        await Endabgabe.fS.Character.show(Endabgabe.characters.RockLee, Endabgabe.characters.RockLee.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.update();
        console.log("FS Updated");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0001);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0002);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0003);
        await Endabgabe.fS.update();
        let endCredits = `
          <div class="endCredits">
          <h3 style="color: red">Du hast ` + Endabgabe.versuche + ` Versuche gebraucht, um das Spiel abzuschließen.</h3>
          <h1>CREDITS</h1>\
           <table>\
             <tr>\
               <td>Story</td>\
               <td>Mazlum Yesin</td>\
             </tr>\
             <tr>\
               <td>Programmierung</td>\
               <td>Mazlum Yesin</td>\
             </tr>\
           </table>\
           <h2>Sound Effekte</h2>\
           <table>\
             <tr>\
               <td>Alle Soundeffekte wurden von <a href="https://pixabay.com/" target="blank">pixabay</a> gedownloaded.</td>\
             </tr>\
           </table>\
           <h2> Charaktere </h2>
           <p>Alle charaktere mit Hilfe von <a href="https://charactercreator.org/">https://charactercreator.org/</a> erstellt.</p>\
         </table>\
           <h2>Genutzte Software</h2>\
           <em>Engine: <a href="https://github.com/JirkaDellOro/FUDGE_Story">FUDGE_Story</a></em>
           </div>
           `;
        Endabgabe.fS.Text.print(endCredits);
        await Endabgabe.fS.update();
        return Endabgabe.FlugZeug();
    }
    Endabgabe.Ende = Ende;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function FlugZeug() {
        Endabgabe.tookItem = 0;
        Endabgabe.versuche++;
        document.getElementById("tries").innerText = "Versuche: " + Endabgabe.versuche;
        if (Endabgabe.versuche > 0)
            document.getElementById("bar").value = (Number(document.getElementById("bar").value) - 1) + "";
        await Endabgabe.fS.Character.hideAll();
        await Endabgabe.fS.Speech.hide();
        let text = {
            RockLee: {
                T0000: "Ich bin Rock Lee und du wirst mich auf einer wichtigen Mission begleiten.",
                T0001: "Unter mir liegt einer der unberührtesten und gefährlichsten Dschungel der Welt.",
                T0002: "Eine Ärztin ist bei der Lieferung von Medikamenten an ein abgelegenes Dorf verschollen. Es its unsere Aufgabe, diese Ärztin zu finden und die Medikamente in das Dorf zu bringen.",
                T0003: "Die letzte bekannte Position der Ärztin liegt etwa 50 Kilometer nördlich, Tief im Herzen dieses Dschungels.",
                T0004: "Vor uns liegen gefährliche Flüsse mit Strömungen und massive Felsschluchten aus Vulkangestein. Es gibt sogar Geschichten über eine verlassene Ruine irgendwo da draußen, tief in diesem Dschungel.",
                T0005: "Vergiss nicht, auf dieser Mission hast du das Kommando. Und es ist bereits Zeit für deine erste Entscheidung, bist du bereit?",
                T0006: "Hey du! Du bist eine Legende!"
            },
            Narrator: {
                T0000: "Ich kann noch einen weiteren Gegenstand in meinen Rucksack packen.",
                T0001: "Entweder eine Machete oder eine Steinschleuder.",
                T0002: "Was nehm ich mit?"
            }
        };
        await Endabgabe.fS.Location.show(Endabgabe.location.Flugzeug);
        console.log("Location shown");
        await Endabgabe.fS.Character.show(Endabgabe.characters.RockLee, Endabgabe.characters.RockLee.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        await Endabgabe.fS.Character.animate(Endabgabe.characters.RockLee, Endabgabe.characters.RockLee.pose.neutral, Endabgabe.slideInAnimation());
        console.log("Character shown");
        await Endabgabe.fS.update(2);
        console.log("FS Updated");
        // Rock lee spricht
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, "Wie heißt du eigentlich mein Junge?");
        Endabgabe.userName = await Endabgabe.fS.Speech.getInput();
        console.log(Endabgabe.userName);
        // SEHR SELTENER SPRUCH
        if (Endabgabe.orden == true) {
            await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0006);
            await Endabgabe.fS.update();
        }
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0001);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0002);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0003);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0004);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.RockLee, text.RockLee.T0005);
        await Endabgabe.fS.update();
        // Narrator spricht
        await Endabgabe.fS.Character.animate(Endabgabe.characters.RockLee, Endabgabe.characters.RockLee.pose.neutral, Endabgabe.slideOutAnimation());
        await Endabgabe.fS.Character.hide(Endabgabe.characters.RockLee);
        await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0001);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0002);
        await Endabgabe.fS.update();
        let chooseItem = {
            C0001: "Enterhaken",
            C0002: "Steinschleuder"
        };
        let userInput = await Endabgabe.fS.Menu.getInput(chooseItem, "selectBtn");
        switch (userInput) {
            case chooseItem.C0001:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                Endabgabe.tookItem = 1;
                setTimeout(() => {
                    Endabgabe.fS.Text.print("Du hast einen Enterhaken bekommen.");
                }, 1000);
                Endabgabe.fS.Text.close();
                Endabgabe.fS.Speech.clear();
                Endabgabe.fS.Character.hideAll();
                await Endabgabe.fS.update(1).then(() => {
                    return Endabgabe.InselAnfang();
                });
            case chooseItem.C0002:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                Endabgabe.tookItem = 2;
                setTimeout(() => {
                    Endabgabe.fS.Text.print("Du hast eine Steinschleuder bekommen.");
                }, 1000);
                Endabgabe.fS.Text.close();
                Endabgabe.fS.Speech.clear();
                Endabgabe.fS.Character.hideAll();
                await Endabgabe.fS.update(1).then(() => {
                    return Endabgabe.InselAnfang();
                });
        }
        return Endabgabe.InselAnfang();
    }
    Endabgabe.FlugZeug = FlugZeug;
})(Endabgabe || (Endabgabe = {}));
var Endabgabe;
(function (Endabgabe) {
    async function InselAnfang() {
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
        await Endabgabe.fS.Location.show(Endabgabe.location.InselAnfang);
        console.log("Location shown");
        await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
        console.log("Character shown");
        await Endabgabe.fS.update();
        console.log("FS Updated");
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0000);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0001);
        await Endabgabe.fS.update();
        await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0002);
        await Endabgabe.fS.update();
        let choose = {
            C0001: "Feldweg",
            C0002: "Dschungel"
        };
        let userInput = await Endabgabe.fS.Menu.getInput(choose, "selectBtn");
        switch (userInput) {
            case choose.C0001:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                if (Endabgabe.tookItem == 1) {
                    setTimeout(() => {
                        Endabgabe.fS.Text.print("Böse Ureinwohner haben dich gefunden und dich getötet.");
                    }, 1000);
                    Endabgabe.fS.Text.close();
                    Endabgabe.fS.Speech.clear();
                    Endabgabe.fS.Character.hideAll();
                    Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                    return Endabgabe.FlugZeug();
                }
                else {
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Ureinwohner, Endabgabe.characters.Ureinwohner.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Ureinwohner, text.UrEinWohner.T0000);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Character.show(Endabgabe.characters.Narrator, Endabgabe.characters.Narrator.pose.neutral, Endabgabe.fS.positions.bottomcenter);
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0003);
                    await Endabgabe.fS.update();
                    Endabgabe.fS.Text.print("Du hast den Ureinwohner besiegt.");
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0004);
                    await Endabgabe.fS.update();
                    await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0005);
                    await Endabgabe.fS.update();
                    let choose2 = {
                        C0001: "Treppen steigen",
                        C0002: "Höhle betreten."
                    };
                    userInput = await Endabgabe.fS.Menu.getInput(choose2, "selectBtn");
                    switch (userInput) {
                        case choose2.C0001:
                            Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                            Endabgabe.fS.Text.close();
                            Endabgabe.fS.Speech.clear();
                            Endabgabe.fS.Character.hideAll();
                            return Endabgabe.AufBerg();
                        case choose2.C0002:
                            Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                            await Endabgabe.fS.Speech.tell(Endabgabe.characters.Narrator, text.Narrator.T0006);
                            await Endabgabe.fS.update();
                            Endabgabe.fS.Text.print("Du wurdest von einem Tiger gefressen.");
                            Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                            return Endabgabe.FlugZeug();
                    }
                }
            case choose.C0002:
                Endabgabe.fS.Sound.play(Endabgabe.sound.click, 0.3, false);
                if (Endabgabe.tookItem == 1) {
                    Endabgabe.fS.Text.close();
                    Endabgabe.fS.Speech.clear();
                    Endabgabe.fS.Character.hideAll();
                    return Endabgabe.AufBerg();
                }
                else {
                    setTimeout(() => {
                        Endabgabe.fS.Text.print("Du kommst ohne den Enterhaken den Berg nicht hoch, wilde Tiere finden dich und fressen dich.");
                    }, 1000);
                    Endabgabe.fS.Text.close();
                    Endabgabe.fS.Speech.clear();
                    Endabgabe.fS.Character.hideAll();
                    Endabgabe.fS.Sound.play(Endabgabe.sound.tot, 0.3, false);
                    return Endabgabe.FlugZeug();
                }
        }
    }
    Endabgabe.InselAnfang = InselAnfang;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Template.js.map