<script>
  export let selectedItem;
  export let selectedTransitive;
  let onlyTransitive;

  $: onlyTransitive = selectedTransitive.filter(dep => !selectedItem.deps.includes(dep));
</script>

<div>
  <h2>{selectedItem.name}</h2>

  {#if selectedItem.deps.length > 0}
    <p>This component has the following dependencies</p>
    <h3>Direct</h3>
    <ul>
      {#each selectedItem.deps as dep}
        <li>{dep}</li>
      {/each}
    </ul>
    <h3>Transitive</h3>
    {#if onlyTransitive.length > 0}
      <ul>
        {#each onlyTransitive as dep}
          <li>{dep}</li>
        {/each}
      </ul>
    {:else}
      <i>No transitive dependencies</i>
    {/if}
  {:else}
    <i>This component has no dependencies</i>
  {/if}
</div>
