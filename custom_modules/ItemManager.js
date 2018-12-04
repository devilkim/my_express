class ItemManager {
  constructor() {
    this.items = [];
    this.createSampleData();
  }
  createSampleData() {
    this.items.push({no: this.items.length + 1, name: 'one', isEnabled: true});
    this.items.push({no: this.items.length + 1, name: 'two', isEnabled: true});
    this.items.push({no: this.items.length + 1, name: 'three', isEnabled: true});
  }
  getItem(no) {
    const target = this.items.filter(item => item.no === no && item.isEnabled);
    return target.length === 1 ? target[0] : null;
  }
  getItems() {
    return this.items.filter(item => item.isEnabled);
  }
  addItem(name) {
    try {
      this.items.push({no: this.items.length + 1, name: name, isEnabled: true});
      return true;
    } catch (e) {
      return false;
    }
  }
  editItem(no, name) {
    const target = this.items.filter(item => item.no === no && item.isEnabled);
    const isSuccess = target.length === 1;
    if (isSuccess) target[0].name = name;
    return isSuccess;
  }
  removeItem(no) {
    const target = this.items.filter(item => item.no === no && item.isEnabled);
    const isSuccess = target.length === 1;
    if (isSuccess) target[0].isEnabled = false;
    return isSuccess;
  }
}

module.exports = new ItemManager();
