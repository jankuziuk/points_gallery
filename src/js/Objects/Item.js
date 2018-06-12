class Item {
    constructor (_id, _points = {}){
        this.id = _id;
        this.points = _points;
    }

    getId () {
        return this.id;
    }

    getPoints (index) {
        return this.points;
    }

    setPoints (value) {
        this.points = value;
    }

    getPoint (id) {
        return this.points[id];
    }

    setPoint (id, value) {
        this.points[id] = value;
    }

    deletePoint (id) {
        this.points.delete(id);
    }

    clearPoints () {
        this.points = {};
    }
}