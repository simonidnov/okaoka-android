// existingImages.js
// =================

/* Copyright  2015 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

define([
  'core/utils',
  'core/AnimatedGIF',
  'core/getBase64GIF',
  'core/error'
], function(utils, AnimatedGIF, getBase64GIF, error) {
  return function(obj) {
    var images = obj.images,
      imagesLength = obj.imagesLength,
      callback = obj.callback,
      options = obj.options,
      skipObj = {
        'getUserMedia': true,
        'window.URL': true
      },
      errorObj = error.validate(skipObj),
      loadedImages = [ ],
      loadedImagesLength = 0,
      tempImage,
      ag;

    if (errorObj.error) {
      return callback(errorObj);
    }

    // change workerPath to point to where Animated_GIF.worker.js is
    ag = new AnimatedGIF(options);

    utils.each(images, function(index, currentImage) {
      if (utils.isElement(currentImage)) {
        if (options.crossOrigin) {
          currentImage.crossOrigin = options.crossOrigin;
        }
        loadedImages[index] = currentImage;
        loadedImagesLength += 1;
        
        if (loadedImagesLength === imagesLength) {
          addLoadedImagesToGif();
        }
      } else if (utils.isString(currentImage)) {
        tempImage = document.createElement('img');
        if (options.crossOrigin) {
          tempImage.crossOrigin = options.crossOrigin;
        }
        tempImage.onerror = function(e) {
          // If there is an error, ignore the image
          if (loadedImages.length > index) {
            loadedImages[index] = undefined;
          }
        }

        (function(tempImage) {
          tempImage.onload = function() {
            loadedImages[index] = tempImage;
            loadedImagesLength += 1;

            if (loadedImagesLength === imagesLength) {
              addLoadedImagesToGif();
            }
            utils.removeElement(tempImage);
          };
        }(tempImage));

        tempImage.src = currentImage;

        utils.setCSSAttr(tempImage, {
          'position': 'fixed',
          'opacity': '0'
        });

        document.body.appendChild(tempImage);
      }
    });

    function addLoadedImagesToGif () {
      utils.each(loadedImages, function(index, loadedImage) {
        if (loadedImage) {
          ag.addFrame(loadedImage, options);
        }
      });
      getBase64GIF(ag, callback);
    }
  };
});
