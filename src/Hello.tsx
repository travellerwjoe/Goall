import * as React from 'react';
import { connect } from 'react-redux'

export interface IAppProps {
  text: string
}

class IApp extends React.Component<IAppProps, any> {
  public render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

const mapState2Props = (state: any) => ({
  // return 
  text:'xxxx'
})

export default connect(mapState2Props)(IApp);
