export default {
  methods: {
    returnFormattedCodeString: function (snippetList, additionalClasses) {
      let templateString = ``;

      if (snippetList) {
        snippetList.forEach(value => {
          let styling = `${value.style}${additionalClasses ? ' ' + additionalClasses : ''}`;

          templateString += `&lt;${value.element}${styling ? ` class="${styling}"` : ''}&gt;${value.content}&lt;/${value.element}&gt;\n`;
        });
      }

      return templateString;
    }
  }
};
