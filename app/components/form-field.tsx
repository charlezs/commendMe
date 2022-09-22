// app/components/form-field.tsx
interface FormFieldProps {
    id: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
  }
  
  export function FormField({ id, label, type = 'text', value, onChange = () => {} }: FormFieldProps) {
    return (
      <>
        <label id={id} className="text-blue-600 font-semibold">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id={id}
          name={id}
          className="w-full p-2 rounded-xl my-2"
          value={value}
        />
      </>
    )
  }