// @ts-ignore
import domToImage from "dom-to-image";
// @ts-ignore
import { saveAs } from "file-saver";

export function downloadImage() {
  domToImage
    .toJpeg(document.getElementById("frameImg")!, {
      width: document.getElementById("frameImg")!.clientWidth * 2,
      height: document.getElementById("frameImg")!.clientHeight * 2,
      style: { transform: "scale(" + 2 + ")", transformOrigin: "top left", fontFamily: 'K2D' },
    })
    .then(function (dataURL: any) {
      let link = document.createElement("a");
      link.download = "bridge.jpeg";
      link.href = dataURL;
      link.click();
    });
}