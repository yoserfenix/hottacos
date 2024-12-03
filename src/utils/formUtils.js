export const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
  };
  
  export const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    callback();
  };
  