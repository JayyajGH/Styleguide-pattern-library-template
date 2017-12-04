export default {
  methods: {
    returnFormattedCodeString: function (snippetList, additionalClasses) {
      let templateString = ``;

      if (snippetList) {
        snippetList.forEach(value => {
          // Construct the elements class definition if required
          let styling = `${value.style}${additionalClasses ? (' ' + additionalClasses) : ''}`;
          let classDefinition = `${styling ? ` class="${styling}"` : ``}`;

          const {element} = value;

          templateString += `&lt;${element}${classDefinition}&gt;${value.content}&lt;/${element}&gt;\n`;
        });
      }

      return templateString;
    }
  }
};
