import type { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    console.log('uncontrolled:', values);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <br />
        <input name="username" />
        <br />
      </label>
      <label>
        Password:
        <br />
        <input type="password" name="password" />
        <br />
      </label>
      <button>Submit</button>
    </form>
  );
}
