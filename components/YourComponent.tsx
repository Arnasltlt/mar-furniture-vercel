// YourComponent.tsx

import { createUzklausimai } from '../lib/airtableForm';

// ...

const someFunction = async () => {
  // ...
  await createUzklausimai('John', 'Hello, I have a question', 'john@example.com');
  // ...
}
