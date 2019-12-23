<script>
  import { findTransitiveDeps } from './utils/data.js';

  export let data;
</script>

<style>
  .table {
    border-spacing: 0;
  }

  .table th {
    padding: 5px 10px;
    border-bottom: 1px solid #777;
  }

  .table td {
    padding: 5px 10px;
    border-right: 1px solid #eee;
  }

  .number-cell {
    text-align: right;
  }
</style>

<table class="table">
  <tr>
    <th>Component</th>
    <th width="40px">Direct deps</th>
    <th width="40px">Transitive deps</th>
  </tr>
  {#each data as item}
    <tr>
      <td>{item.name}</td>
      <td class="number-cell">{item.deps.length}</td>
      <td class="number-cell">{findTransitiveDeps(item, data).length}</td>
    </tr>
  {/each}
</table>
