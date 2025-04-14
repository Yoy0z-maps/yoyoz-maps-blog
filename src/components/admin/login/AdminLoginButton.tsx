interface AdminLoginButtonProps {
  text: string;
  onClick: (event: React.FormEvent) => void;
  isLoading: boolean;
}

export default function AdminLoginButton({
  text,
  onClick,
  isLoading,
}: AdminLoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white rounded-xs p-2 w-full font-pretendard ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : text}
    </button>
  );
}
