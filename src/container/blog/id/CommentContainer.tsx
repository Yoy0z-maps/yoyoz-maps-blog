export default function CommentContainer({ postId }: { postId: string }) {
  return (
    <>
      <div className="space-y-4 font-pretendard mb-6">
        <div className="p-4 border rounded-md bg-gray-50 dark:bg-neutral-800">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm">스파게티에 닭가슴살</span>
            <span className="text-xs text-gray-500">2시간 전 · 삭제</span>
          </div>
          <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
            찾아주셔서 감사합니당. 댓글 달기 기능은 추후 추가 예정입니다.
          </p>
          <button className="mt-2 text-xs text-blue-500 hover:underline">
            답글 달기
          </button>

          <div className="mt-4 space-y-3 pl-4 border-l">
            <div className="p-3 bg-white border rounded-md dark:bg-neutral-800">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">후라이팬</span>
                <span className="text-xs text-gray-500">1시간 전 · 삭제</span>
              </div>
              <p className="mt-1 text-sm text-gray-800 dark:text-neutral-200">
                최대한 신속하고 빠르게 기능 개발해보겠습니다. 이거 말구도 할게
                많네요ㅜㅜ
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="닉네임"
                  className="border w-40 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
                />
              </div>
              <textarea
                rows={3}
                placeholder="답글을 입력하세요..."
                className="w-full border rounded-md px-2 py-2 text-sm resize-none outline-none dark:bg-neutral-800 dark:text-neutral-200"
              />
              <div className="flex justify-end">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm">
                  올리기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 border rounded-md shadow-sm bg-white mb-24 font-pretendard dark:bg-neutral-800">
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="닉네임"
            className="border rounded-md px-3 w-40 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
          />
        </div>
        <div className="mb-1">
          <textarea
            rows={4}
            placeholder="댓글을 입력하세요..."
            className="w-full border rounded-md px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-200"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 text-sm">
            올리기
          </button>
        </div>
      </div>
    </>
  );
}
