export default function CommentContainer() {
  return (
    <>
      <div className="space-y-4 font-pretendard mb-6">
        <div className="p-4 border rounded-md bg-gray-50">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-sm">스파게티에 닭가슴살</span>
            <span className="text-xs text-gray-500">2시간 전 · 삭제</span>
          </div>
          <p className="mt-2 text-sm text-gray-800">
            찾아주셔서 감사합니당. 댓글 달기 기능과 좋아요 및 공유하기 기능은
            추후 추가 예정입니다.
          </p>
          <button className="mt-2 text-xs text-blue-500 hover:underline">
            답글 달기
          </button>

          <div className="mt-4 space-y-3 pl-4 border-l">
            <div className="p-3 bg-white border rounded-md">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">후라이팬</span>
                <span className="text-xs text-gray-500">1시간 전 · 삭제</span>
              </div>
              <p className="mt-1 text-sm text-gray-800">
                최대한 신속하고 빠르게 기능 개발해보겠습니다. 이거 말구도 할게
                많네요ㅜㅜ
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="닉네임"
                  className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="비밀번호"
                  className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                rows={2}
                placeholder="답글을 입력하세요..."
                className="w-full border rounded-md px-2 py-1 text-sm resize-none outline-none"
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
      <div className="flex flex-col gap-6 p-4 border rounded-md shadow-sm bg-white mb-24 font-pretendard">
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="닉네임"
            className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="flex-1 border rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <textarea
            rows={4}
            placeholder="댓글을 입력하세요..."
            className="w-full border rounded-md px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-blue-500"
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
