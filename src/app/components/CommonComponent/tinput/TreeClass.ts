export class TreeClass {
  id: string = "";
  text: string = "";
  isChecked:boolean=false;
  nodes: Array<TreeClass> = [];

  constructor(text: string, id: string,isChecked:boolean, nodes: Array<TreeClass>) {
    this.text = text;
    this.id = id;
    this.isChecked=isChecked;
    this.nodes = nodes;
  }

}


// export class TreeClassASList {
//   id: string = "";
//   text: string = "";
//   isChecked:boolean=false;
 
//   constructor(text: string, id: string,isChecked:boolean) {
//     this.text = text;
//     this.id = id;
//     this.isChecked=isChecked;
//    }

// }

