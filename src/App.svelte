<script>
  import Table from './Table.svelte';
  import Graph from './Graph.svelte';
  import Preview from './Preview.svelte';
  import allData from './data/components.js';
  import { findTransitiveDeps } from './utils/data.js';

  const itemTickDuration = 30;

  // D3 force layout fails when connecting node is not found. Remove links to not yet existing nodes
  function cleanUpDependencies(data) {
    data.forEach(d => {
      d.deps = d.deps.filter(dep => data.find(d => d.name === dep));
    });
  }

  let data = [];
  let selectedItem = null;
  let selectedTransitive = [];
  let operationTimeout;

  addItems();

  function addItems() {
    if (operationTimeout) {
      clearTimeout(operationTimeout);
    }
    data = allData.slice(0, data.length + 1).map(item => ({ ...item }));
    cleanUpDependencies(data);
    if (data.length < allData.length) {
      operationTimeout = setTimeout(addItems, itemTickDuration);
    }
  }

  function removeItems() {
    if (operationTimeout) {
      clearTimeout(operationTimeout);
    }
    data = data.slice(0, -1);
    cleanUpDependencies(data);

    if (data.length) {
      operationTimeout = setTimeout(removeItems, itemTickDuration);
    }
  }

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
  <div>
    {#if data.length > 0}
      <button on:click={removeItems}>Remove items</button>
    {:else}
      <button on:click={addItems}>Add items</button>
    {/if}
    {#if selectedItem}
      <Preview {selectedItem} {selectedTransitive} />
    {:else}
      <Table {data} />
    {/if}
  </div>
  <Graph {data} {selectedItem} {selectedTransitive} onSelect={handleSelection} />
</main>
