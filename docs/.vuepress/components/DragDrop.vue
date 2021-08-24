<template>
  <p>{{ message }} </p>
  <draggable class="drag-area" :list="list" @change="log">
  <div
    class="list-styles"
    v-for="element in list"
    :key="element.name"
  >
    {{ element.name }}
  </div>
</draggable>
</template>

<script>
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  name: 'DragDrop',
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      message: 'Good day, vuers. Here is a list todo.',
      enabled: true,
      list: [
        { name: 'Add Sass', id: 1 },
        { name: 'Change the data source for this component', id: 2 },
        { name: 'Have a coffee', id: 3 },
        { name: 'Configure markdown linting to stop complining about inline html', id: 4 },
      ],
      dragging: false
    }
  }
}
</script>
