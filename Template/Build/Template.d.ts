declare namespace Endabgabe {
    export import ƒ = FudgeCore;
    export import fS = FudgeStory;
    let userName: string;
    let versuche: number;
    let tookItem: number;
    let orden: boolean;
    let sound: {
        click: string;
        tot: string;
    };
    let characters: {
        Narrator: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        RockLee: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Ärztin: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Ureinwohner: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        Dorfbewohner: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
    let location: {
        Flugzeug: {
            name: string;
            background: string;
        };
        InselAnfang: {
            name: string;
            background: string;
        };
        AufBerg: {
            name: string;
            background: string;
        };
        Dorf: {
            name: string;
            background: string;
        };
    };
}
declare namespace Endabgabe {
    function slideInAnimation(): fS.AnimationDefinition;
    function slideOutAnimation(): fS.AnimationDefinition;
    function fromOutofCanvasToRight(): fS.AnimationDefinition;
}
declare namespace Endabgabe {
    function AufBerg(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function Dorf(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function Ende(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function FlugZeug(): fS.SceneReturn;
}
declare namespace Endabgabe {
    function InselAnfang(): fS.SceneReturn;
}
