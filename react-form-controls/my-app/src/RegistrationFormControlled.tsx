import { type FormEvent, useState } from 'react';

type Props = {
  user?: string;
  pass?: string;
};

export function RegistrationFormControlled({ user, pass }: Props) {
  const [username, setUsername] = useState<string>(user ?? '');
  const [password, setPassword] = useState<string>(pass ?? '');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('controlled:', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <br />
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
      </label>
      <label>
        Password:
        <br />
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
      </label>
      <button>Submit</button>
    </form>
  );
}
