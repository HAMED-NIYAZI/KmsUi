export class TreeClass {
  text: string = "";
  id: string = "";
  nodes: Array<TreeClass> = [];

  constructor(text: string, id: string, nodes: Array<TreeClass>) {
    this.text = text;
    this.id = id;
    this.nodes = nodes;
  }

}
