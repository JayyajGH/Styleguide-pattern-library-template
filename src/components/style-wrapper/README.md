# Style Wrapper

## Functionality
The style wrapper component provides a common container to display component examples with the associated HTML required to create the component.

## Usage

### Props
<style-wrapper> supports the following custom component attributes:

| attribute   | type   | mandatory | description                                |
| ----------- | ------ | --------- | ------------------------------------------ |
| header      | String | true      | The text to display in the section heading |
| description | String | false     | The description of the section. A more detailed description can be provided using the descriptionSlot  |

### Slots
<code-snippet> supports the following slots:

| slot name        | description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| descriptionSlot  |  Holds a description of the section. A simple description can be provided using the description property |
| exampleSlot      |  Holds HTML containing the details of the section                    |
| codeSlot         |  Holds the contents to be passed to the Code Snippet component       |
