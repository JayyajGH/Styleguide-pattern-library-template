export default {
  methods: {
    returnFormattedCodeString: function (styleList, additionalClasses) {
      let templateString = ``;

      if (styleList) {
        styleList.forEach(value => {
          var styling = `${value.style}${additionalClasses ? ' ' + additionalClasses : ''}`;

          templateString += `&lt;${value.element}${styling ? ` class="${styling}"` : ''}&gt;${value.content}&lt;/${value.element}&gt;\n`;
        });
      }

      return templateString;
    }
  }
};
