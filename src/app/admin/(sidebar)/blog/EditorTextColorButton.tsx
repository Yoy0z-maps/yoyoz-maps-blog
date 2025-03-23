export default function EditorTextColorButton({
  onClick,
  disabled,
  label,
}: {
  onClick: () => void;
  disabled: boolean;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-gray-100 rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-blue-500 hover:text-white font-pretendard`}
    >
      {label}
    </button>
  );
}
