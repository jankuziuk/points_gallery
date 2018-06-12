class Gallery {
    constructor(_id, _items = {}) {
        this.id = _id;
        this.items = _items;
    }

    getId () {
        return this.id;
    }

    getItems () {
        return this.items;
    }

    setItems (value) {
        this.items = value;
    }

    getItem (id) {
        return this.items[id];
    }

    setItem (id, value) {
        this.items[id] = value;
    }

    deleteItem (id) {
        this.items.delete(id);
    }

    clearItems () {
        this.items = {};
    }
}