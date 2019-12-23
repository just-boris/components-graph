function limit(from, value, to) {
  const pushback = (0.3 * from) / from ** 2;
  if (value < from) {
    return pushback * (value - from) ** 2;
  }
  if (value > to) {
    return -pushback * (value - to) ** 2;
  }
  return 0;
}

export default function forceBorders(width, height, padding = 80) {
  let nodes;

  function force() {
    for (const node of nodes) {
      node.vx += limit(padding, node.x, width - padding);
      node.vy += limit(padding, node.y, height - padding);
    }
  }

  force.initialize = value => {
    nodes = value;
  };

  return force;
}
