export default function elementDraggable(el: any) {
  let elPos = { x: el.offsetLeft, y: el.offsetTop };
  let mousePos = { x: 0, y: 0 };

  el.addEventListener("mousedown", (e: any) => {
    mousePos = { x: e.clientX, y: e.clientY };
    el.addEventListener("mousemove", move);
  });

  el.addEventListener("mouseup", () => {
    el.removeEventListener("mousemove", move);
  });

  function move(e: any) {
    elPos = {
      x: elPos.x + (e.clientX - mousePos.x),
      y: elPos.y + (e.clientY - mousePos.y),
    };
    el.style.left = `${elPos.x}px`;
    el.style.top = `${elPos.y}px`;
    mousePos = { x: e.clientX, y: e.clientY };
  }
}