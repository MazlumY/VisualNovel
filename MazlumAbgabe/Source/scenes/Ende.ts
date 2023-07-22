namespace Endabgabe {
    export async function Ende(): fS.SceneReturn {
        let text = {
            RockLee: {
              T0000: "Gut gemacht Kollegen!",
              T0001: "Dank ihnen, kann ein Dorf wort-wörtlich 'wieder atmen'.",
              T0002: "Sie haben heute viel Mut und Tapferkeit erwiesen.",
              T0003: "Dafür kriegen sie einen Orden vom Minister höhstpersönlich."
            },
          };

          await fS.Location.show(location.InselAnfang);
          console.log("Location shown");
          await fS.Character.show(characters.RockLee, characters.RockLee.pose.neutral, fS.positions.bottomcenter);
          console.log("Character shown");
          await fS.update();
          console.log("FS Updated");

          await fS.Speech.tell(characters.RockLee, text.RockLee.T0000);
          await fS.update();
          await fS.Speech.tell(characters.RockLee, text.RockLee.T0001);
          await fS.update();
          await fS.Speech.tell(characters.RockLee, text.RockLee.T0002);
          await fS.update();
          await fS.Speech.tell(characters.RockLee, text.RockLee.T0003);
          await fS.update();

          let endCredits =
          `
          <div class="endCredits">
          <h3 style="color: red">Du hast ` + versuche + ` Versuche gebraucht, um das Spiel abzuschließen.</h3>
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
               <td>Dschungel Musik: https://www.youtube.com/watch?v=WbWYdDCh6GI&feature=youtu.be</td>\
               <td>Dorf Musik: https://www.youtube.com/watch?v=jZ7a1yPaJh0</td>\
             </tr>\
           </table>\
           <h2> Charaktere </h2>
           <p>Alle charaktere mit Hilfe von <a href="https://charactercreator.org/">https://charactercreator.org/</a> erstellt.</p>\
         </table>\
           <h2>Genutzte Software</h2>\
           <em>Engine: <a href="https://github.com/JirkaDellOro/FUDGE_Story">FUDGE_Story</a></em>
           </div>
           `;
         fS.Text.print(endCredits);
         await fS.update();
         return FlugZeug();
    }
}