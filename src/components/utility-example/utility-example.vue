
<script>
  export default {
    render (createElement) {
      return createElement(this.element, {'class': this.styling}, this.title);
    },
    name: 'UtilityExample',
    props: {
      title: String,
      styling: [String, Array],
      element: {
        type: String,
        required: true
      }
    }
  };
</script>
