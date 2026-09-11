# 여행 사진 Storage 설정

1. Supabase 프로젝트의 Project URL, publishable key, secret key를 `.env.example`을 참고하여 `.env`에 설정합니다. Secret key와 업로드 비밀번호는 NEXT_PUBLIC 변수로 만들지 않습니다.
2. `npx tsx scripts/setup-trip-storage.ts`를 실행합니다. 이 스크립트는 `trip-photos` 비공개 버킷을 만들고 장당 20MB 및 이미지 MIME 제한을 설정합니다. 기존 같은 이름의 버킷은 비공개로 설정됩니다.
3. 배포 환경에도 SUPABASE_URL, SUPABASE_SECRET_KEY, TRIP_UPLOAD_PASSWORD를 등록합니다.
4. `/trip/upload`에서 지역과 일자를 선택하고 최대 6장을 업로드합니다.

경로 예시: `trip-photos/ICN/2026-09/03/<uuid>.jpg`
지역 아래 연월 폴더, 그 아래 2자리 일 폴더가 첫 사진 저장 시 자동으로 나타납니다. Storage에서 이름 오름차순으로 정렬하면 날짜순입니다. 한 번의 업로드는 동일 지역/일자를 사용하며 UUID로 파일명 충돌을 방지합니다.

서버에서 비밀번호를 확인한 뒤 서명 업로드 URL을 발급합니다. 파일은 브라우저에서 Storage로 직접 전송하므로 배포 서버의 요청 본문 크기 제한을 피합니다. 공개 쓰기 RLS 정책은 추가하지 않습니다. 현재 사진 저장에는 별도 DB 테이블이 필요하지 않습니다.

완료된 사진은 유지하고 실패한 사진만 재시도합니다. 부분 완료 상태에서는 지역/날짜를 잠급니다. 페이지 새로고침 시에는 선택 상태가 보존되지 않습니다. HEIC/HEIF 원본 저장은 가능하지만 브라우저에 따라 미리보기가 지원되지 않을 수 있습니다. 여행 지도는 `/api/trip/photos`를 통해 실제 사진을 조회합니다. 티켓에는 최근 업로드 4장을 표시하고 사진 모달에서는 연도를 선택한 뒤 월별로 조회합니다. 한 구간은 최대 8개 월 정거장을 표시합니다. 월 안의 사진은 촬영일 오름차순입니다. 읽기 URL은 1시간 만료이며 열린 화면은 45분마다 갱신합니다.

`/trip/manage`에서는 지역·연월별 필터, 사진 원본 조회, 지역·날짜 변경 및 삭제가 가능합니다. 편집과 삭제에는 업로드 비밀번호가 필요합니다. 변경은 Storage 경로 이동으로 반영합니다. 모바일 허용 경로는 기존 요구대로 `/trip/upload` 하나입니다. 날짜는 한국 시간 기준 오늘까지만 프론트와 API에서 허용합니다.

검증: `npx tsx scripts/trip-storage.test.ts`, `npx tsc --noEmit`, `npm run lint`.
