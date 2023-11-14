import ReactDOM from 'react-dom';
import React from 'react';
import './myStyle.css'
import {
    ChakraProvider,
    Box,
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react';
const App = () => {
    return (
        <ChakraProvider>
            <Box className="BoxList" borderWidth='1px' rounded='lg' p='50' boxShadow='base'>
                <div >To-Do List:
                    <UnorderedList id="list">
                        <ListItem>Lorem ipsum dolor sit</ListItem>
                    </UnorderedList>
                </div>
            </Box>
        </ChakraProvider>
      );
 }
ReactDOM.render(<App />, document.getElementById('app'));