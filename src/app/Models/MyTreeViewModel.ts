export class MyTreeViewModel {
    id: string = "";
    text: string = "";
    isChecked:boolean=false;
    nodes: Array<MyTreeViewModel> = [];
  
    constructor(text: string, id: string,isChecked:boolean, nodes: Array<MyTreeViewModel>) {
      this.text = text;
      this.id = id;
      this.isChecked=isChecked;
      this.nodes = nodes;
    }
  }