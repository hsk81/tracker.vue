<template>
  <div class="table">
    <div class="row">
      <div class="cell">{{ message }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tracker', props: {
    message: String
  }
}
</script>

<style lang="scss" scoped>
div.table {
  div.row {
    div.cell {
      display: table-cell;
    }
    display: table-row;
  }
  display: table;
}
</style>

<style lang="scss" scoped>
div.table {
  div.row {
    div.cell {
      text-align: center;
      vertical-align: middle;
    }
  }
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
div.table {
  div.row {
    div.cell {
      color: yellow;
      font-weight: bold;
      font-size: xx-large;
      font-family: monospace;
    }
  }
  background-color: black;
}
</style>
