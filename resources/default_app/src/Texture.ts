module Egg {
    export class Texture {
        innerTexture: PIXI.Texture;

        constructor(path) {
            this.innerTexture = PIXI.Texture.fromImage(Egg.projectFilePath(path));
        }
    }
}