import React   from 'react';
import marked from  'marked';
console.log(marked('I am using __markdown__.'));

class Marked extends React.Component {
  render () {
    let content = marked('# ferferf')
    return(
      <div dangerouslySetInnerHTML={{__html:content}}>

      </div>
    )

  }
}

export default Marked;
