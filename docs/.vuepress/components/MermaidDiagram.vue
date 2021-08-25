<template>
  <div class="mermaid">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'MermaidDiagram',
    beforeMount() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });
  }
};
</script>