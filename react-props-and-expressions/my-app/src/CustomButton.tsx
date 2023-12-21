type Props = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Props) {
  return <button style={{ backgroundColor: color }}>{text}</button>;
}
