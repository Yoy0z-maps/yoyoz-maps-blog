interface AdminLoginInputFieldProps {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function AdminLoginInputField({
  type,
  placeholder,
  onChange,
}: AdminLoginInputFieldProps) {
  return (
    <input
      type={type}
      autoComplete="off"
      placeholder={placeholder}
      className="bg-white border-b border-neutral-400 p-1 font-pretendard text-md min-w-64 focus:border-blue-600 focus:outline-none text-logo-light"
      onChange={onChange}
    />
  );
}
