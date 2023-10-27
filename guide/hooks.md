# Hooks

## usePrevious

The `usePrevious` hook is a custom React hook that allows you to keep track of the previous value of a variable or state within a functional component. It is particularly useful when you need to compare the current value of a variable to its previous value, such as when detecting changes in a prop or state.

### Parameteres

`value` (optional): The `value` you want to keep track of its previous value.

### Returns

The previous value of the `value` provided as the `value` parameter.

### Usage Example

```javascript
import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  useEffect(() => {
    console.log(`Count: ${count}`);
    console.log(`Previous Count: ${previousCount}`);
  }, [count, previousCount]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
