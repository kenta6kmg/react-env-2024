
import React, { useState } from 'react';

const TextInput = () => {
  const [text, setText] = useState('');
  return (
    <div>
      <input
        type="text"
        value={text}
        aria-label='Text Input'
        onChange={(e) => setText(e.target.value)}
      />
      <p>Entered Text:{text}</p>
    </div>
  );
};

export default TextInput;
