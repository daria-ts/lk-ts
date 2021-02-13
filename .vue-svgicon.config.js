const path = require("path");
const svgFilePaths = [
  "src/assets/icons/Question.svg ",
  "src/assets/icons/accepted.svg ",
  " src/assets/icons/apps.svg ",
  " src/assets/icons/arrow-back-ios.svg ",
  " src/assets/icons/arrow-back.svg ",
  " src/assets/icons/arrow-downward.svg ",
  " src/assets/icons/arrow-downward.svg ",
  " src/assets/icons/arrow-drop-down-circle.svg ",
  " src/assets/icons/arrow-drop-down.svg ",
  " src/assets/icons/arrow-drop-up.svg src/assets/icons/arrow-drop-up.svg ",
  " src/assets/icons/arrow-drop-up.svg ",
  " src/assets/icons/arrow-drop-up.svg",
  " src/assets/icons/arrow-forward-ios.svg ",
  " src/assets/icons/arrow-forward.svg ",
  " src/assets/icons/arrow-left.svg ",
  " src/assets/icons/arrow-right.svg",
  " src/assets/icons/arrow-upward.svg ",
  " src/assets/icons/cancel.svg ",
  " src/assets/icons/check.svg ",
  " src/assets/icons/chevron-left.svg ",
  " src/assets/icons/chevron-right.svg",
  " src/assets/icons/close.svg ",
  " src/assets/icons/cloud-done.svg ",
  " src/assets/icons/cloud-download.svg ",
  " src/assets/icons/cloud-off.svg ",
  " src/assets/icons/double-arrow.svg ",
  " src/assets/icons/downloaded.svg ",
  " src/assets/icons/edit.svg ",
  " src/assets/icons/error-outline.svg ",
  "src/assets/icons/error.svg ",
  " src/assets/icons/expand-less.svg ",
  " src/assets/icons/expand-more.svg ",
  " src/assets/icons/eye-hide.svg ",
  " src/assets/icons/eye.svg ",
  " src/assets/icons/first-page.svg ",
  " src/assets/icons/fullscreen-exit.svg ",
  " src/assets/icons/fullscreen.svg ",
  " src/assets/icons/home-work.svg ",
  " src/assets/icons/insert-invitation.svg ",
  " src/assets/icons/last-page.svg ",
  " src/assets/icons/lock.svg ",
  " src/assets/icons/loupe.svg ",
  " src/assets/icons/menu-open.svg ",
  " src/assets/icons/menu.svg ",
  " src/assets/icons/minus.svg ",
  " src/assets/icons/mode-comment.svg ",
  "src/assets/icons/more-horiz.svg ",
  " src/assets/icons/more-vert.svg ",
  " src/assets/icons/not-listed-location.svg ",
  " src/assets/icons/open-in-new.svg ",
  " src/assets/icons/person-pin-circle.svg ",
  " src/assets/icons/pin-drop.svg ",
  " src/assets/icons/place.svg ",
  " src/assets/icons/plus.svg ",
  " src/assets/icons/refresh.svg ",
  " src/assets/icons/replay.svg ",
  " src/assets/icons/sms-failed.svg ",
  " src/assets/icons/sms.svg ",
  " src/assets/icons/subdirectory-arrow-left.svg ",
  " src/assets/icons/subdirectory-arrow-right.svg ",
  " src/assets/icons/sync.svg ",
  " src/assets/icons/unfold-less.svg ",
  " src/assets/icons/unfold-more.svg ",
  " src/assets/icons/warning.svg ",
  " src/assets/icons/logo-android.svg ",
  " src/assets/icons/logo-apple.svg"
].map(v => path.resolve(v));
const tagName = "icon-name";

module.exports = {
  tagName,
  svgFilePath: svgFilePaths,
  svgoConfig: {},
  pathAlias: {},
  transformAssetUrls: {}
};