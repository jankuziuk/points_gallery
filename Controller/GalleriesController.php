<?php

namespace Controller;

class GalleriesController {

    public function getGalleries(){
        return json_decode(file_get_contents('Test/galleries.json'), 1);
    }

    public function getImages(){
        return json_decode(file_get_contents('Test/images.json'), 1);
    }
}