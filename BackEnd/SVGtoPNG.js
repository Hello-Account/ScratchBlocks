const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const svg = document.querySelector(".scratchblocks-style-scratch3");
const xml = new XMLSerializer().serializeToString(svg);
const svg64 = btoa(xml);
const b64start = "data:image/svg+xml;base64,";
const base64Svg = b64start + svg64;

// Decode the Base64 string to get the SVG content
const decodedSvg = atob(base64Svg.split(",")[1]);

// Add the styles to the SVG
const styledSvg = decodedSvg.replace(
   "</svg>",
   `<style><![CDATA[
.sb3-label {
  font: 500 12pt Helvetica Neue, Helvetica, sans-serif;
  word-spacing: +1pt;
}

.sb3-literal-number,
.sb3-literal-string,
.sb3-literal-number-dropdown,
.sb3-literal-dropdown {
  word-spacing: 0;
}

.sb3-diff {
  fill: none;
  stroke: #000;
}
.sb3-diff-ins {
  stroke-width: 2px;
}
.sb3-diff-del {
  stroke-width: 3px;
}


svg .sb3-motion {
  fill: #4c97ff;
  stroke: #3373cc;
}
svg .sb3-motion-alt {
  fill: #4280d7;
}
svg .sb3-motion-dark {
  fill: #3373cc;
}


svg .sb3-looks {
  fill: #9966ff;
  stroke: #774dcb;
}
svg .sb3-looks-alt {
  fill: #855cd6;
}
svg .sb3-looks-dark {
  fill: #774dcb;
}


svg .sb3-sound {
  fill: #cf63cf;
  stroke: #bd42bd;
}
svg .sb3-sound-alt {
  fill: #c94fc9;
}
svg .sb3-sound-dark {
  fill: #bd42bd;
}


svg .sb3-control {
  fill: #ffab19;
  stroke: #cf8b17;
}
svg .sb3-control-alt {
  fill: #ec9c13;
}
svg .sb3-control-dark {
  fill: #cf8b17;
}


svg .sb3-events {
  fill: #ffbf00;
  stroke: #cc9900;
}
svg .sb3-events-alt {
  fill: #e6ac00;
}
svg .sb3-events-dark {
  fill: #cc9900;
}


svg .sb3-sensing {
  fill: #5cb1d6;
  stroke: #2e8eb8;
}
svg .sb3-sensing-alt {
  fill: #47a8d1;
}
svg .sb3-sensing-dark {
  fill: #2e8eb8;
}


svg .sb3-operators {
  fill: #59c059;
  stroke: #389438;
}
svg .sb3-operators-alt {
  fill: #46b946;
}
svg .sb3-operators-dark {
  fill: #389438;
}


svg .sb3-variables {
  fill: #ff8c1a;
  stroke: #db6e00;
}
svg .sb3-variables-alt {
  fill: #ff8000;
}
svg .sb3-variables-dark {
  fill: #db6e00;
}


svg .sb3-list {
  fill: #ff661a;
  stroke: #e64d00;
}
svg .sb3-list-alt {
  fill: #ff5500;
}
svg .sb3-list-dark {
  fill: #e64d00;
}


svg .sb3-custom {
  fill: #ff6680;
  stroke: #ff3355;
}
svg .sb3-custom-alt {
  fill: #ff4d6a;
}
svg .sb3-custom-dark {
  fill: #ff3355;
}


svg .sb3-extension {
  fill: #0fbd8c;
  stroke: #0b8e69;
}
svg .sb3-extension-alt {
  fill: #0da57a;
}
svg .sb3-extension-dark {
  fill: #0b8e69;
}


svg .sb3-obsolete {
  fill: #ed4242;
  stroke: #ca2b2b;
}
svg .sb3-obsolete-alt {
  fill: #db3333;
}
svg .sb3-obsolete-dark {
  fill: #ca2b2b;
}


svg .sb3-grey {
  fill: #bfbfbf;
  stroke: #909090;
}
svg .sb3-grey-alt {
  fill: #b2b2b2;
}
svg .sb3-grey-dark {
  fill: #909090;
}


svg .sb3-label {
  fill: #fff;
}

svg .sb3-input-color {
  stroke: #fff;
}

svg .sb3-input-number,
svg .sb3-input-string {
  fill: #fff;
}
svg .sb3-literal-number,
svg .sb3-literal-string {
  fill: #575e75;
}

svg .sb3-custom-arg {
  fill: #ff6680;
  stroke: #ff3355;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-motion {
  fill: #80b5ff;
  stroke: #3373cc;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-alt {
  fill: #b3d2ff;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-motion-dark {
  fill: #3373cc;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-looks {
  fill: #ccb3ff;
  stroke: #774dcb;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-alt {
  fill: #ddccff;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-looks-dark {
  fill: #774dcb;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-sound {
  fill: #e19de1;
  stroke: #bd42bd;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-alt {
  fill: #ffb3ff;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-sound-dark {
  fill: #bd42bd;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-control {
  fill: #ffbe4c;
  stroke: #cf8b17;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-control-alt {
  fill: #ffda99;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-control-dark {
  fill: #cf8b17;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-events {
  fill: #ffd966;
  stroke: #cc9900;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-events-alt {
  fill: #ffecb3;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-events-dark {
  fill: #cc9900;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing {
  fill: #85c4e0;
  stroke: #2e8eb8;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-alt {
  fill: #aed8ea;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-sensing-dark {
  fill: #2e8eb8;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-operators {
  fill: #7ece7e;
  stroke: #389438;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-alt {
  fill: #b5e3b5;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-operators-dark {
  fill: #389438;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-variables {
  fill: #ffa54c;
  stroke: #db6e00;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-alt {
  fill: #ffcc99;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-variables-dark {
  fill: #db6e00;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-list {
  fill: #ff9966;
  stroke: #e64d00;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-list-alt {
  fill: #ffcab0;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-list-dark {
  fill: #e64d00;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-custom {
  fill: #ff99aa;
  stroke: #e64d00;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-alt {
  fill: #ffccd5;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-dark {
  fill: #e64d00;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-extension {
  fill: #13ecaf;
  stroke: #0b8e69;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-alt {
  fill: #75f0cd;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-extension-dark {
  fill: #0b8e69;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete {
  fill: #fc6666;
  stroke: #d32121;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-alt {
  fill: #fcb0b0;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-obsolete-dark {
  fill: #d32121;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-grey {
  fill: #bfbfbf;
  stroke: #959595;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-alt {
  fill: #b2b2b2;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-grey-dark {
  fill: #959595;
}


svg.scratchblocks-style-scratch3-high-contrast .sb3-label {
  fill: #000;
}

svg.scratchblocks-style-scratch3-high-contrast .sb3-input-color {
  stroke: #fff;
}

svg.scratchblocks-style-scratch3-high-contrast .sb3-input-number,
svg.scratchblocks-style-scratch3-high-contrast .sb3-input-string {
  fill: #fff;
}
svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-number,
svg.scratchblocks-style-scratch3-high-contrast .sb3-literal-string {
  fill: #000;
}

svg.scratchblocks-style-scratch3-high-contrast .sb3-custom-arg {
  fill: #ff99aa;
  stroke: #e64d00;
}

/* Note: comment colors are different from Scratch. */

.sb3-comment {
  fill: #ffffa5;
  stroke: #d0d1d2;
  stroke-width: 1;
}
.sb3-comment-line {
  fill: #ffff80;
}
/* specificity */
.sb3-comment-label, .sb3-label.sb3-comment-label {
  font: 400 12pt Helvetica Neue, Helvetica, sans-serif;
  fill: #000;
  word-spacing: 0;
}]]></style></svg>`
);

// Encode the modified SVG back to Base64
const updatedBase64Svg = `data:image/svg+xml;base64,${btoa(styledSvg)}`;

// Create an Image element
const img = new Image();
img.onload = () => {
   // Draw the image onto the canvas
   const canvas = document.createElement("canvas");
   const svgWidth = svg.viewBox.baseVal.width || svg.width.baseVal.value;
   const svgHeight = svg.viewBox.baseVal.height || svg.height.baseVal.value;
   canvas.width = svgWidth;
   canvas.height = svgHeight;
   const ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0, svgWidth, svgHeight);
   console.log(canvas.toDataURL("image/png"));

   console.log("Styled SVG rendered successfully!");
};

// Set the image source to the updated Base64 string
img.src = updatedBase64Svg;
