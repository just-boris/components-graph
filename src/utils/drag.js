// based on d3-drag implementation: https://github.com/d3/d3-drag
export default function drag(node, options) {
  const moveDistance = 7;

  let initialX;
  let initialY;

  function stopEvent(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
  }

  function mousedown(event) {
    initialX = event.clientX;
    initialY = event.clientY;
    event.stopImmediatePropagation();
    event.preventDefault();
    event.view.addEventListener('selectionstart', stopEvent);
    event.view.addEventListener('mousemove', mousemove);
    event.view.addEventListener('mouseup', mouseup);
    options.start();
  }

  function mousemove(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    if (Math.abs(event.clientX - initialX) > moveDistance || Math.abs(event.clientY - initialY) > moveDistance)
      event.view.addEventListener('click', stopEvent, {
        once: true,
        capture: true
      });
    const rect = node.ownerSVGElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    options.move({ x, y });
  }

  function mouseup(event) {
    event.stopImmediatePropagation();
    event.preventDefault();
    event.view.removeEventListener('selectionstart', stopEvent);
    event.view.removeEventListener('mousemove', mousemove);
    event.view.removeEventListener('mouseup', mouseup);
    options.end();
  }

  node.addEventListener('mousedown', mousedown);

  return {
    destroy() {
      node.removeEventListener('mousedown', mousedown);
    }
  };
}
