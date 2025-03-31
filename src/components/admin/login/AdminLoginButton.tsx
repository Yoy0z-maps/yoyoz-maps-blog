interface AdminLoginButtonProps {
  text: string;
  onClick: (event: React.FormEvent) => void;
}

export default function AdminLoginButton({
  text,
  onClick,
}: AdminLoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 text-white rounded-xs p-2 w-full font-pretendard"
    >
      {text}
    </button>
  );
}
