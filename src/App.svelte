<script>
  import Table from './Table.svelte';
  import Graph from './Graph.svelte';
  import Preview from './Preview.svelte';
  import data from './data/components.js';
  import { findTransitiveDeps } from './utils/data.js';

  // remove missing dependencies
  data.forEach(d => {
    d.deps = d.deps.filter(dep => data.find(d => d.name === dep));
  });

  let selectedItem = null;
  let selectedTransitive = [];

  function handleSelection(item) {
    selectedItem = item;
    selectedTransitive = selectedItem ? findTransitiveDeps(selectedItem, data) : [];
  }
</script>

<style>
  main {
    font: 14px sans-serif;
  }

  .grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-gap: 20px;
  }
</style>

<main class="grid">
  {#if selectedItem}
    <Preview {selectedItem} {selectedTransitive} />
  {:else}
    <Table {data} />
  {/if}
  <Graph {data} {selectedItem} {selectedTransitive} onSelect={handleSelection} />
</main>
