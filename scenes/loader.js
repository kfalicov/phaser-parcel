// asset import syntax for parcel
// import image from "url:../assets/.../image.png";

export class Loader extends Phaser.Scene {
  constructor() {
    super("Loader");
  }
  preload() {
    /**
     * put all of the loading scripts here
     */
  }
  create() {
    //start the next scene (usually the main menu) after preloading is completed
    this.scene.manager.scenes[1].scene.start();
  }
}
