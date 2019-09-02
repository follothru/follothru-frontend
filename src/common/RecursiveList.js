export default class RecursiveList {
  constructor(title = '', content = []) {
    this.title = title;
    this.content = content;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }
}
