<script>
  import dragBehavior from './utils/drag.js';

  export let node;
  export let isSelected;
  export let isTransitive;
  export let onSelect;
  export let onDragStart;
  export let onDragEnd;

  function getDragOptions(node) {
    return {
      start() {
        onDragStart();
        node.fx = node.x;
        node.fy = node.y;
      },
      move({ x, y }) {
        node.fx = x;
        node.fy = y;
      },
      end() {
        onDragEnd();
        node.fx = null;
        node.fy = null;
      }
    };
  }
</script>

<style>
  .chart-node {
    fill: #687078;
    /*stroke: #aab7b8;*/
  }

  .chart-node-complex {
    fill: #ec7211;
  }

  .chart-node-selected {
    fill: #0073bb;
  }

  .chart-node-transitive {
    fill: #00a1c9;
  }
</style>

<circle
  on:click={onSelect}
  use:dragBehavior={getDragOptions(node)}
  class="chart-node"
  class:chart-node-complex={node.deps.length > 0}
  class:chart-node-selected={isSelected}
  class:chart-node-transitive={isTransitive}
  r="7"
  cx={node.x}
  cy={node.y} />
