export class TreeClass {
  id: string = "";
  text: string = "";
  nodes: Array<TreeClass> = [];

  constructor(text: string, id: string, nodes: Array<TreeClass>) {
    this.text = text;
    this.id = id;
    this.nodes = nodes;
  }

}
