import { useState } from "react";
import { Box, Input, Button, List, ListItem, ListIcon, IconButton, Heading, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Box p={8}>
      <Heading mb={6}>Todo List</Heading>
      <Box mb={4}>
        <Input placeholder="Add a new task" value={input} onChange={handleInputChange} onKeyPress={handleKeyPress} size="lg" mr={2} />
        <Button onClick={handleAddTodo} colorScheme="blue" px={8} leftIcon={<FaPlus />}>
          Add
        </Button>
      </Box>
      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index} d="flex" alignItems="center" justifyContent="space-between">
            <Text fontSize="lg">{todo}</Text>
            <IconButton icon={<FaTrash />} aria-label="Delete todo" onClick={() => handleRemoveTodo(index)} colorScheme="red" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
