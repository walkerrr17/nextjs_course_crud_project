interface ButtonProps {
  color?: "green" | "blue" | "gray"
  children: any
  className?: string
  onClick?: () => void
}

export default function Button(props: ButtonProps) {
  const finalColor = props.color ?? "gray";
  return (
    <button onClick={props.onClick} className={`bg-gradient-to-r from-${finalColor}-400 to-${finalColor}-700 text-white px-4 py-2 rounded-md ${props.className}`}>{props.children}</button>
  );
}