
const componentDidMount = () => {
    if(typeof window !== 'undefined') {
        window.WOW = require('wowjs');
      }
      new WOW.WOW().init();
}

export default componentDidMount
