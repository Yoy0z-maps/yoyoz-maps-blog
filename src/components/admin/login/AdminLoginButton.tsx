interface AdminLoginButtonProps {
  text: string;
  handleSubmit: () => void;
}

export default function AdminLoginButton({
  text,
  handleSubmit,
}: AdminLoginButtonProps) {
  return (
    <button
      onClick={handleSubmit}
      type="submit"
      className="bg-blue-600 text-white rounded-xs p-2 w-full font-pretendard"
    >
      {text}
    </button>
  );
}
