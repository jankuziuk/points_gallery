class GalleryController {
    constructor (_gallerySelector = '.pointsGallery', _properties = {}, _galleries = {}){
        this.gallerySelector = _gallerySelector;
        this.properties = _properties;
        this.galleries = _galleries;

        this.initAction();
    }

    initAction () {
        this.getGalleries();
        return this.galleries;
    }

    getGalleries () {
        let galleries = document.querySelectorAll(this.gallerySelector);

        if (galleries.length === 0){
            return {};
        } else {
            for (let _gallery of galleries){
                let _galleryId = _gallery.getAttribute(this.properties.galleryIDAttr);
                let gallery = new Gallery(_galleryId);

                for (let _item of _gallery.querySelectorAll(this.properties.galleryItemSelector)){
                    let _itemId = _item.getAttribute(this.properties.galleryItemIDAttr);
                    let item = new Item(_itemId);

                    for (let _point of _item.querySelectorAll(this.properties.galleryPointSelector)){
                        let _pointId = _point.getAttribute(this.properties.galleryPointIDAttr);
                        let _x = _point.getAttribute(this.properties.galleryPointXAttr);
                        let _y = _point.getAttribute(this.properties.galleryPointYAttr);
                        let _productId = _point.getAttribute(this.properties.galleryPointProductIdAttr);

                        let point = new Point(_pointId, _x, _y, _productId);
                        item.setPoint(_pointId, point);
                    }
                    gallery.setItem(_itemId, item);
                }
                this.galleries[_galleryId] = gallery;
            }
        }
    }
}
