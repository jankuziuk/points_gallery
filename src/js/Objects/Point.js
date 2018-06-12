class Point {
    constructor (_id, _x, _y, _productId){
        this.id = _id;
        this.x = _x;
        this.y = _y;
        this.productId = _productId;
    }

    getId () {
        return this.id;
    }

    getX() {
        return this.x;
    }

    setX(value) {
        this.x = value;
    }

    getY() {
        return this.y;
    }

    setY(value) {
        this.y = value;
    }

    getProductId() {
        return this.productId;
    }

    setProductId(value) {
        this.productId = value;
    }
}