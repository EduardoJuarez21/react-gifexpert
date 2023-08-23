import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onsubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={ onsubmit }>
      <input
          type= "text"
          placeholder= "Buscar gifs"
          value = { inputValue }
          onChange={onInputChange}
      />
    </form>
  

  )
}
