# Color Swatch

## Functionality
The Color Swatch component displays a single color swatch.

## Usage

### Props
<color-swatch> supports the following props:

| attribute    | type    | mandatory | default | description                        |
| ------------ | ------- | --------- | ------- | ---------------------------------- |
| colorName    | String  | false     | n/a     | The name of the color to describe  |
| hexCode      | String  | true      | n/a     | The hex code of the color          |
| isBase       | Boolean | false     | false   | Is the color a base color?         |
| isDarkColor  | Boolean | false     | false   | Is the color a dark color?  If so then the text on it will need to be light  |
| isLightColor | Boolean | false     | false   | Is the color a light color?  If so then the swatch will need a border around it so it can be seen  |

### Slots
<color-swatch> supports the following slots:
None
