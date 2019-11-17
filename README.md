# RNE Tooltip
Custom component based on Tooltip from react-native-elements to vary height based on tooltip's text length .

## Reason for doing this
[Tooltip in react-native-elements](https://react-native-elements.github.io/react-native-elements/docs/tooltip.html) does not vary the popover's height or width according to the text component passed via the `popover` prop.

<img src="https://drive.google.com/uc?export=view&id=16OnGpawJne4MB9NDrd14eQnEp6tykXME" width="360">

## How this custom component solves this
1. We assume a fixed width for the popover, so we only need to vary the height.
2. The custom component takes in the prop `tooltipText` and creates a `View`, containing `tooltipText`, which is hidden.
3. Using the [onLayout](https://facebook.github.io/react-native/docs/view#onlayout) prop, it stores the height of the View in the state.
4. Pass stored height as a prop to `Tooltip` component.

## Some issues
This will trigger a warning:
```
Failed prop type. Invalid prop `children` of type `array` supplied to `Tooltip`, expected a single `ReactElement`.
```

## Demo - Short Text
<img src="https://drive.google.com/uc?export=view&id=12IyoExpTEJrWJR-c-60kX9-wHW7DY8BZ" width="720">

## Demo - Long Text
<img src="https://drive.google.com/uc?export=view&id=1-OWUo6vMb_SWuhs3FsazSTpAe4z9BqKX" width="720">

## Demo - Very Long Text
<img src="https://drive.google.com/uc?export=view&id=1MCRdBGy-OWpT0OGXZ0fcBar_gv_QCUw-" width="720">
