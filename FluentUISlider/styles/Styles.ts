import { makeStyles } from '@fluentui/react-components';


 // https://react.fluentui.dev/?path=/docs/concepts-upgrading-from-v8-components-flex-stack--page
 // https://react.fluentui.dev/?path=/docs/concepts-upgrading-from-v8-components-flex-stack-item--page
 export const useStyles = makeStyles({
    stack: {  // must be merged with stackHorizontal or stackVertical
      display: 'flex',
      flexWrap: 'wrap-reverse',
      justifyContent: 'flex-start',
      width: 'fit-content',
      height: 'fit-content',
      boxSizing: 'border-box',
      '> *': {
        textOverflow: 'ellipsis',
      },
    },
    stackHorizontal: {  // overrides for horizontal stack
      flexDirection: 'row',
      marginLeft: '5px',
      '> :not(:last-child)': {
        marginRight: '12px',
      }
    },
    stackVertical: {  // overrides for vertical stack
      flexDirection: 'column',
      marginLeft: '5px',
      '> :not(:first-child)': {
        marginTop: '10px',
      }  
    },
    stackitem: {
      height: 'fit-content',
      width: 'fit-content',
      alignSelf: 'center',
      flexShrink: 1
    },
    stackitemSliderVertical: {
      alignSelf: 'left',
      marginLeft: '10px',
      flexShrink: 1
    },
    stackitemBadgeVertical: {
      alignSelf: 'left',
      marginLeft: '5px',
      flexShrink: 1
    },
    tooltip: {
      paddingLeft: '0px',
      paddingRight: '0px',
      paddingTop: '0px',
      paddingBottom: '0px'
    }
  })