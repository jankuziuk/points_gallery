<!DOCTYPE html>
<html lang="en">
<?php $date = new DateTime(); ?>
<head>
    <meta charset="UTF-8">
    <title>IK Products Gallery</title>
    <meta name="viewport" content="width=device-width,user-scalable=no">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="/dist/css/style.css?v=<?php echo $date->getTimestamp(); ?>">
</head>
<body>

    <?php
        include "Controller/GalleriesController.php";

        $galleries_service = new \Controller\GalleriesController();

        $galleriesList = $galleries_service->getGalleries();
        $galleriesImages = $galleries_service->getImages();
    ?>

    <?php foreach ($galleriesList as $gallery): ?>
        <div class="pointsGallery" data-gallery-id="<?php echo $gallery['gallery_id']; ?>">
            <?php foreach ($gallery['items'] as $item): ?>
                <div class="pointsGallery-image" data-item-id="<?php echo $item['item_id'];?>">
                    <img src="<?php echo $galleriesImages[$item['item_id']]; ?>" alt="" />
                    <?php if (isset($item['points']) && !empty($item['points'])): ?>
                        <div class="pointsGallery-points">
                            <?php foreach ($item['points'] as $point): ?>
                                <div class="pointsGallery-point"
                                     data-point-id="<?php echo $point['point_id']; ?>"
                                     data-x="<?php echo $point['x']; ?>"
                                     data-y="<?php echo $point['y']; ?>"
                                     data-product-id="<?php echo $point['product_id']; ?>"
                                     style="top: <?php echo $point['y']; ?>; left: <?php echo $point['x']; ?>;"
                                ></div>
                            <?php endforeach; ?>
                        </div>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>
        </div>
    <?php endforeach; ?>

    <script type="text/javascript" src="/dist/js/theme.min.js?v=<?php echo $date->getTimestamp(); ?>"></script>

</body>
</html>