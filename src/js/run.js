const _galleryController =  new GalleryController('.pointsGallery', {
    galleryIDAttr: 'data-gallery-id',
    galleryItemSelector: '.pointsGallery-image',
    galleryItemIDAttr: 'data-item-id',
    galleryPointSelector: '.pointsGallery-point',
    galleryPointIDAttr: 'data-point-id',
    galleryPointXAttr: 'data-x',
    galleryPointYAttr: 'data-y',
    galleryPointProductIdAttr: 'data-product-id',
});

console.log(_galleryController);