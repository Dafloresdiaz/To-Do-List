import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import './myStyle.css'
import {
    ChakraProvider,
    Box,
    OrderedList,
    ListItem,
    Checkbox,
    Button,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react';
import { SmallAddIcon } from '@chakra-ui/icons'


const App = () => {
    const [list, setList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
      if (newTask.trim() !== '') {
        const newTaskObj = {
          id: list.length + 1,
          content: newTask,
        };
        setList([...list, newTaskObj]);
        setNewTask('');
      }
    };

    return (
        <ChakraProvider>
            <Box className="BoxList" borderWidth='1px' rounded='lg' p='50' boxShadow='base'>
                <div >To-Do List:
                <InputGroup size='md'>
                    <Input pr='4.5rem' placeholder='What needs to be done?' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                    <InputRightElement width='7.5rem'>
                        <Button
                            h='1.75rem'
                            size='sm'
                            rightIcon={< SmallAddIcon/>}
                            colorScheme='blue'
                            onClick={addTask}>
                                Add task
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                    <OrderedList>
                        {list.map((task) => (
                        <ListItem key={task.id}>
                            <Checkbox size="md" colorScheme="green">
                            {task.content}
                            </Checkbox>
                        </ListItem>
                        ))}
                    </OrderedList>
                </div>
            </Box>
        </ChakraProvider>
      );
 }
ReactDOM.render(<App />, document.getElementById('app'));