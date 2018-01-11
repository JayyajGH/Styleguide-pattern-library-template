
<script>
  export default {
    render: function (createElement) {
      return createElement(this.element, {'class': this.styling}, this.title);
    },
    name: 'UtilityExample',
    props: {
      title: String,
      styling: [String, Array],
      element: String
    }
  };
</script>
