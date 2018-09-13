import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import RecommendCard from './RecommendCard'
import { times } from 'lodash/fp'

export interface IRecommendListProps {
}

export interface IRecommendListState {
}

export default class RecommendList extends React.Component<IRecommendListProps, IRecommendListState> {
  constructor(props: IRecommendListProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <Grid container spacing={16}>
          {times(() => (
            <Grid item xs={3}>
              <RecommendCard />
            </Grid>
          ), 5)}
        </Grid>
      </div>
    );
  }
}
