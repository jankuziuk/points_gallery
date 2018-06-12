'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function () {
    function Gallery(_id) {
        var _items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Gallery);

        this.id = _id;
        this.items = _items;
    }

    Gallery.prototype.getId = function getId() {
        return this.id;
    };

    Gallery.prototype.getItems = function getItems() {
        return this.items;
    };

    Gallery.prototype.setItems = function setItems(value) {
        this.items = value;
    };

    Gallery.prototype.getItem = function getItem(id) {
        return this.items[id];
    };

    Gallery.prototype.setItem = function setItem(id, value) {
        this.items[id] = value;
    };

    Gallery.prototype.deleteItem = function deleteItem(id) {
        this.items.delete(id);
    };

    Gallery.prototype.clearItems = function clearItems() {
        this.items = {};
    };

    return Gallery;
}();

var Item = function () {
    function Item(_id) {
        var _points = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Item);

        this.id = _id;
        this.points = _points;
    }

    Item.prototype.getId = function getId() {
        return this.id;
    };

    Item.prototype.getPoints = function getPoints(index) {
        return this.points;
    };

    Item.prototype.setPoints = function setPoints(value) {
        this.points = value;
    };

    Item.prototype.getPoint = function getPoint(id) {
        return this.points[id];
    };

    Item.prototype.setPoint = function setPoint(id, value) {
        this.points[id] = value;
    };

    Item.prototype.deletePoint = function deletePoint(id) {
        this.points.delete(id);
    };

    Item.prototype.clearPoints = function clearPoints() {
        this.points = {};
    };

    return Item;
}();

var Point = function () {
    function Point(_id, _x, _y, _productId) {
        _classCallCheck(this, Point);

        this.id = _id;
        this.x = _x;
        this.y = _y;
        this.productId = _productId;
    }

    Point.prototype.getId = function getId() {
        return this.id;
    };

    Point.prototype.getX = function getX() {
        return this.x;
    };

    Point.prototype.setX = function setX(value) {
        this.x = value;
    };

    Point.prototype.getY = function getY() {
        return this.y;
    };

    Point.prototype.setY = function setY(value) {
        this.y = value;
    };

    Point.prototype.getProductId = function getProductId() {
        return this.productId;
    };

    Point.prototype.setProductId = function setProductId(value) {
        this.productId = value;
    };

    return Point;
}();

var GalleryController = function () {
    function GalleryController() {
        var _gallerySelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.pointsGallery';

        var _properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var _galleries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        _classCallCheck(this, GalleryController);

        this.gallerySelector = _gallerySelector;
        this.properties = _properties;
        this.galleries = _galleries;

        this.initAction();
    }

    GalleryController.prototype.initAction = function initAction() {
        this.getGalleries();
        return this.galleries;
    };

    GalleryController.prototype.getGalleries = function getGalleries() {
        var galleries = document.querySelectorAll(this.gallerySelector);

        if (galleries.length === 0) {
            return {};
        } else {
            for (var _iterator = galleries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var _gallery = _ref;

                var _galleryId = _gallery.getAttribute(this.properties.galleryIDAttr);
                var gallery = new Gallery(_galleryId);

                for (var _iterator2 = _gallery.querySelectorAll(this.properties.galleryItemSelector), _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                    var _ref2;

                    if (_isArray2) {
                        if (_i2 >= _iterator2.length) break;
                        _ref2 = _iterator2[_i2++];
                    } else {
                        _i2 = _iterator2.next();
                        if (_i2.done) break;
                        _ref2 = _i2.value;
                    }

                    var _item = _ref2;

                    var _itemId = _item.getAttribute(this.properties.galleryItemIDAttr);
                    var item = new Item(_itemId);

                    for (var _iterator3 = _item.querySelectorAll(this.properties.galleryPointSelector), _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
                        var _ref3;

                        if (_isArray3) {
                            if (_i3 >= _iterator3.length) break;
                            _ref3 = _iterator3[_i3++];
                        } else {
                            _i3 = _iterator3.next();
                            if (_i3.done) break;
                            _ref3 = _i3.value;
                        }

                        var _point = _ref3;

                        var _pointId = _point.getAttribute(this.properties.galleryPointIDAttr);
                        var _x = _point.getAttribute(this.properties.galleryPointXAttr);
                        var _y = _point.getAttribute(this.properties.galleryPointYAttr);
                        var _productId = _point.getAttribute(this.properties.galleryPointProductIdAttr);

                        var point = new Point(_pointId, _x, _y, _productId);
                        item.setPoint(_pointId, point);
                    }
                    gallery.setItem(_itemId, item);
                }
                this.galleries[_galleryId] = gallery;
            }
        }
    };

    return GalleryController;
}();

var _galleryController = new GalleryController('.pointsGallery', {
    galleryIDAttr: 'data-gallery-id',
    galleryItemSelector: '.pointsGallery-image',
    galleryItemIDAttr: 'data-item-id',
    galleryPointSelector: '.pointsGallery-point',
    galleryPointIDAttr: 'data-point-id',
    galleryPointXAttr: 'data-x',
    galleryPointYAttr: 'data-y',
    galleryPointProductIdAttr: 'data-product-id'
});

console.log(_galleryController);