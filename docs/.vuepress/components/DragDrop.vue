<template>
  <p>{{ message }} </p>
  <draggable class="drag-area" ghost-class="ghost" :list="list" @change="log">
  <div
    class="list-styles"
    v-for="element in list"
    :key="element.name"
  >
    <strong>{{ element.name }}</strong>

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
      hover: false,
      list: [
        { name: 'Add Sass', id: 1 },
        { name: 'Change the data source for this component', id: 2 },
        { name: 'Have a coffee', id: 3 },
        { name: 'Configure markdown linting to stop complining about inline html', id: 4 },
        { name: 'Fix the colour contrast on this element when being dragged in dark :moon: mode', id: 5 },
        { name: 'Add dynamic routes because manully adding pages to the nav is tedious', id: 3 },

      ],
      dragging: false
    }
  }
}
</script>

<style lang="sass">
.drag-area{
  cursor: move;
}

.list-styles {
  padding: 1.5rem;
  margin: 0.5rem 0;
  border: solid 2px orange;
  font-weight: 600;
  letter-spacing: .1em;
  transition: text-shadow .3s;
  & :hover {
    text-shadow: 0 0 .65px #333, 0 0 .65px #333;
  }
}
.ghost {
  background-color: plum;
}
</style>
