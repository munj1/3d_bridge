import { Mesh } from "three";
import { cm1, geo, mat, cm2 } from "./common";

export class SideLight {
  constructor(info) {
    const container = info.container || cm1.scene;
    this.name = info.name || "";
    this.x = info.x || 0;
    this.y = info.y || 0;
    this.z = info.z || 0;

    this.geometry = geo.sidelight;
    this.material = mat.sidelight;
    this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.position.set(this.x, this.y, this.z); //super에서 했음

    container.add(this.mesh);
  }

  turnOff() {
    this.mesh.material.color.set(cm2.lightOffColor);
  }
}
