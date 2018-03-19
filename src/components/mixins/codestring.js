
// Construct the elements class definition if required.
// This can be a combination of the style passed in with the element and also any common styles
function generateRequiredClasses (style, additionalClasses) {
  let styling = style;

  if (additionalClasses) {
    styling += styling ? ` ${additionalClasses}` : `${additionalClasses}`;
  }

  return styling;
}

export default {
  methods: {
    returnFormattedCodeString (snippetList, additionalClasses, elementPrefix) {
      let codeSnippetList = [];
      let codeSnippetString = ``;

      if (snippetList) {
        snippetList.forEach(value => {
          let styling = generateRequiredClasses(value.style, additionalClasses);
          let classDefinition = styling ? ` class="${styling}"` : ``;

          const {element} = value;

          codeSnippetList.push(`${elementPrefix || ''}&lt;${element}${classDefinition}&gt;${value.content}&lt;/${element}&gt;`);
        });

        codeSnippetString = codeSnippetList.join('\n');
      }

      return codeSnippetString;
    }
  }
};
