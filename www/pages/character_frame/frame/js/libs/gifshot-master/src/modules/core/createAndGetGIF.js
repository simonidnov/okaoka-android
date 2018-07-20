// createAndGetGIF.js
// ==================

/* Copyright  2015 Yahoo Inc.
 * Copyrights licensed under the MIT License. See the accompanying LICENSE file for terms.
 */

define([
  'core/utils',
  'core/screenShot',
  'API/stopVideoStreaming'
], function(utils, screenShot, stopVideoStreaming) {
  return function(obj, callback) {
    var options = obj.options || {},
      images = options.images,
      video = options.video,
      numFrames = +options.numFrames,
      cameraStream = obj.cameraStream,
      videoElement = obj.videoElement,
      videoWidth = obj.videoWidth,
      videoHeight = obj.videoHeight,
      gifWidth = +options.gifWidth,
      gifHeight = +options.gifHeight,
      cropDimensions = screenShot.getCropDimensions({
        'videoWidth': videoWidth,
        'videoHeight': videoHeight,
        'gifHeight': gifHeight,
        'gifWidth': gifWidth
      }),
      completeCallback = callback;

    options.crop = cropDimensions;
    options.videoElement = videoElement;
    options.videoWidth = videoWidth;
    options.videoHeight = videoHeight;
    options.cameraStream = cameraStream;

    if (!utils.isElement(videoElement)) {
      return;
    }

    videoElement.width = gifWidth + cropDimensions.width;
    videoElement.height = gifHeight + cropDimensions.height;

    if (!options.webcamVideoElement) {
      utils.setCSSAttr(videoElement, {
        'position': 'fixed',
        'opacity': '0'
      });

      document.body.appendChild(videoElement);
    }

    // Firefox doesn't seem to obey autoplay if the element is not in the DOM when the content
    // is loaded, so we must manually trigger play after adding it, or the video will be frozen
    videoElement.play();

    screenShot.getGIF(options, function(obj) {
      if ((!images || !images.length) && (!video || !video.length)) {
        stopVideoStreaming(obj);
      }
      completeCallback(obj);
    });
  };
});