import { Mesh } from "three";
import { Stuff } from "./Stuff";
import { cm1, geo, mat } from "./common";

export class Floor extends Stuff {
  constructor(info) {
    super(info);

    this.geometry = geo.floor;
    this.material = mat.floor;

    this.width = this.geometry.parameters.width;
    this.height = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(this.x, this.y, this.z); //super에서 했음
    // this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    // this.mesh.d

    cm1.scene.add(this.mesh);

    this.setCannonBody();
  }
}
