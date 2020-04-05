import React, { FunctionComponent } from 'react';
import { TextInput, View, Button } from 'react-native';
import styles from '../styles/styles';

interface Props {
  search: Function;
}

const SearchBar: FunctionComponent<Props> = (props) => {
  const { search } = props
  return (
    <View style={styles.searchBar}>
      <TextInput placeholder={'Search'} 
      onSubmitEditing={(event) => search(event.nativeEvent.text)}
      clearButtonMode='always'
      />
      <Button title='Submit' color='#841584'></Button>
    </View>
  );
};

export default SearchBar;