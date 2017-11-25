export default {
  methods: {
    returnFormattedCodeString: function (styleList, additionalClasses) {
      let templateString = ``;

      if (styleList) {
        styleList.forEach(value => {
          templateString += `&lt;div class="${value.style} ${additionalClasses}"&gt;${value.name}&lt;/div&gt;\n`;
        });
      }

      return templateString;
    }
  }
};
