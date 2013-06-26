var fs = require('fs');

function revisionCode() {
  var revisionMatcher = /bcm2708.boardrev=(0x[0123456789abcdef]*) /;
  var cmdline = fs.readFileSync('/proc/cmdline', "utf8");
  var matches = cmdline.match(revisionMatcher);
  if (matches.length > 0) {
    return matches[1];
  } else {
    return null;
  }
}

function revisionNumFromCode(code) {
  return (0x2 <= code && code <= 0x3) ? 1 : 2;
}

function revisionNum() {
  return revisionNumFromCode(revisionCode());
}

exports.revisionNum  = revisionNum;
exports.revisionCode = revisionCode;