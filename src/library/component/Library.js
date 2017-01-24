import React, { Component } from 'react'
import { ListView } from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class Library extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource: this.ds.cloneWithRows(props.library)
    };
  }

  componentWillMount() {
    if (this.props.onLoad) {
      this.props.onLoad();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.library)
    });
  }

  renderRow (rowData, sectionId, rowId) {
    return (
      <ListItem
        key={rowId}
        title={rowData.title}
      />
    )
  }

  render() {
    return (
      <List style={{ marginTop: 43 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </List>
    );
  }
}

Library.propTypes = {
  library: React.PropTypes.array.isRequired,
  onLoad: React.PropTypes.func
};
