const _galleries =  new Galleries('.pointsGallery', {
    galleryIDAttr: 'data-gallery-id',
    galleryItemSelector: '.pointsGallery-image',
    galleryItemIDAttr: 'data-item-id',
    galleryPointSelector: '.pointsGallery-point',
    galleryPointIDAttr: 'data-point-id',
    galleryPointXAttr: 'data-x',
    galleryPointYAttr: 'data-y',
    galleryPointProductIdAttr: 'data-product-id',
});
console.log(_galleries.getGallery('1'));
console.log(_galleries.getGallery('1').getId());
console.log(_galleries.getGallery('1').getItems());
console.log(_galleries.getGallery('1').getItem("1__1"));
console.log(_galleries.getGallery('1').getItem('1__1').getPoints());
console.log(_galleries.getGallery('1').getItem('1__1').getPoint('1__1__5'));

_galleries.getGallery('1').getItem('1__1').getPoint('1__1__5').setY('100%');

console.log(_galleries.getGallery('1').getItem('1__1').getPoint('1__1__5'));