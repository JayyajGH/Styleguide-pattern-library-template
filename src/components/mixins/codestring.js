export default {
  methods: {
    returnFormattedCodeString: function (snippetList, additionalClasses) {
      let codeSnippetList = [];
      let codeSnippetString = ``;

      if (snippetList) {
        snippetList.forEach(value => {
          // Construct the elements class definition if required.
          // This can be a combination of the style passed in with the element and also any common styles
          let styling = `${value.style}${additionalClasses ? (' ' + additionalClasses) : ''}`;
          let classDefinition = styling ? ` class="${styling}"` : ``;

          const {element} = value;

          codeSnippetList.push(`&lt;${element}${classDefinition}&gt;${value.content}&lt;/${element}&gt;`);
        });

        codeSnippetString = codeSnippetList.join('\n');
      }

      return codeSnippetString;
    }
  }
};
