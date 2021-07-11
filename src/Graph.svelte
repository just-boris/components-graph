<script>
  import { onMount, onDestroy } from 'svelte';
  import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force';

  import forceBorders from './utils/force-borders.js';
  import { arrayDifference } from './utils/data.js';
  import GraphNode from './GraphNode.svelte';

  export let data;
  let previousData;
  export let selectedItem;
  export let selectedTransitive;
  export let onSelect;

  let svg;
  let simulation;
  let selectedNode;
  let links = [];
  let nodes = [];

  function buildLinks(data) {
    return data.flatMap(d => d.deps.map(dep => ({ id: `${d.name}-${dep}`, source: d.name, target: dep })));
  }

  function buildNodes(data) {
    const { width, height } = svg.getBoundingClientRect();
    return data.map(d => ({ id: d.name, deps: d.deps, x: width / 2, y: height / 2 }));
  }

  function diffElements(newArray, oldArray) {
    const diffFn = item => item.id;
    const added = arrayDifference(newArray, oldArray, diffFn);
    const removedIds = arrayDifference(oldArray, newArray, diffFn).map(item => item.id);

    return oldArray.concat(added).filter(item => !removedIds.includes(item.id));
  }

  $: {
    if (svg && data !== previousData) {
      nodes = diffElements(buildNodes(data), nodes);
      links = diffElements(buildLinks(data), links);
      if (simulation) {
        simulation.nodes(nodes);
        simulation.force('link').links(links);
        resetSimulation();
      }
      previousData = data;
    }
  }

  $: selectedNode = selectedItem && nodes.find(node => node.id === selectedItem.name);

  function resetSimulation() {
    simulation.alphaTarget(0.3).restart();
  }

  function resumeSimulation() {
    simulation.alphaTarget(0);
  }

  function updateSimulation() {
    if (simulation) {
      simulation.stop();
    }
    const { width, height } = svg.getBoundingClientRect();

    simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(links)
          .id(d => d.id)
          .distance(80)
      )
      .force(
        'charge',
        forceManyBody()
          .strength(-60)
          .distanceMax(Math.min(width, height) * 0.7)
      )
      .force('borders', forceBorders(width, height))
      .force('center', forceCenter(width / 2, height / 2));

    simulation.on('tick', () => {
      nodes = nodes;
      links = links;
    });
  }

  onMount(() => {
    links = buildLinks(data);
    nodes = buildNodes(data);
    updateSimulation();
  });

  onDestroy(() => {
    if (simulation) {
      simulation.stop();
    }
  });

  function handleSelection(node) {
    if (selectedNode === node) {
      onSelect(null);
    } else {
      onSelect(data.find(d => d.name === node.id));
    }
  }
</script>

<style>
  svg {
    width: 100%;
    height: 100vh;
  }

  .chart-link {
    stroke: #aab7b8;
  }

  .chart-text {
    pointer-events: none;
    fill: #16191f;
    text-anchor: middle;
  }

  .chart-text-dimmed {
    fill: #879596;
  }

  .chart-arrow {
    fill: #aab7b8;
  }
</style>

<svelte:window on:resize={updateSimulation} />
<svg bind:this={svg}>
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 6 6"
      refX="12"
      refY="3"
      markerUnits="strokeWidth"
      markerWidth="6"
      markerHeight="6"
      orient="auto">
      <path d="M 0 0 L 6 3 L 0 6 z" class="chart-arrow" />
    </marker>
  </defs>
  <g>
    {#each links as link}
      <line
        class="chart-link"
        marker-end="url(#arrow)"
        x1={link.source.x}
        y1={link.source.y}
        x2={link.target.x}
        y2={link.target.y} />
    {/each}
  </g>
  <g>
    {#each nodes as node}
      <GraphNode
        {node}
        isSelected={node === selectedNode}
        isTransitive={selectedTransitive.includes(node.id)}
        onSelect={() => handleSelection(node)}
        onDragStart={resetSimulation}
        onDragEnd={resumeSimulation} />
    {/each}
  </g>
  <g>
    {#each nodes as node}
      <text
        class="chart-text"
        class:chart-text-dimmed={selectedNode && selectedNode !== node && !selectedTransitive.includes(node.id)}
        dy="-12"
        x={node.x}
        y={node.y}>
        {node.id}
      </text>
    {/each}
  </g>
</svg>
