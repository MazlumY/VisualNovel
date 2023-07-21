namespace Endabgabe {
    export function slideInAnimation(): fS.AnimationDefinition {
        return {
            start: { translation: fS.positions.bottomright},
            end: { translation: fS.positions.bottomleft},
            duration: 1,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    export function slideOutAnimation(): fS.AnimationDefinition {
        return {
            start: { translation: fS.positions.bottomleft},
            end: { translation: fS.positions.bottomright},
            duration: 1,
            playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        }
    }

    export function fromOutofCanvasToRight(): fS.AnimationDefinition {
        return {
          start: { translation: fS.positionPercent(110, 100) },
          end: { translation: fS.positionPercent(70, 100) },
          duration: 1,
          playmode: fS.ANIMATION_PLAYMODE.PLAYONCE
        };
      }
}