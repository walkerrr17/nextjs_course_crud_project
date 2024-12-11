interface InputProps {
  text: string
  type?: "text" | "number"
  value: any
  readOnly?: boolean
  onChange?: (value: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className="mb-4">
        {props.text}
      </label>
      <input onChange={event => props.onChange?.(event.target.value)} className={`border border-purple-500 rounded-lg focus:outline-none bg-gray-50  px-4 py-2 ${props.readOnly ? '' : 'focus:bg-white'} `}type={props.type ?? "text"} value={props.value} readOnly={props.readOnly} />
    </div>
  );
}