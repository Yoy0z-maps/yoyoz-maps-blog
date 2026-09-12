import {
  AppPrivacyPage,
  privacyMetadata,
} from "@/components/apps/AppPrivacyPage";
import { apps } from "@/constant/apps";

const app = apps.find((app) => app.slug === "daily-english-sentence")!;
export const metadata = privacyMetadata(app);

const services = [
  ["Kakao — 카카오 로그인", "https://www.kakao.com/policy/privacy"],
  ["Google — 구글 로그인", "https://policies.google.com/privacy"],
  ["Apple — 애플 로그인", "https://www.apple.com/legal/privacy/"],
  ["Supabase — 인증 및 학습 기록 저장", "https://supabase.com/privacy"],
  [
    "Google AdMob — 광고 제공",
    "https://support.google.com/admob/answer/6128543?hl=ko",
  ],
];

export default function PrivacyPage() {
  return (
    <AppPrivacyPage app={app} effectiveDate="2026-09-12">
      <p>
        YOHAN HAN (Yoy0z-maps, 이하 “운영자”)은 오늘의 문장 (실생활 회화 배우기)
        앱에서 로그인한 이용자가 자신의 학습 현황을 저장하고 확인할 수 있도록
        서비스를 제공합니다. 이 방침은 앱 이용 중 처리하는 정보와 이용자의
        선택에 대해 설명합니다.
      </p>

      <h2>1. 처리하는 정보와 이용 목적</h2>
      <p>
        앱은 별도의 개인정보 입력을 요구하기 위한 목적으로 로그인을 사용하지
        않습니다. 이용자를 식별하고 각자의 학습 기록을 연결하기 위해 인증 및
        데이터베이스 서비스를 사용합니다.
      </p>
      <ul>
        <li>
          <strong>계정 정보:</strong> 카카오·구글·애플 로그인과 Supabase 인증을
          통해 이용자 식별자 및 로그인 상태를 처리합니다. 선택한 로그인 방식과
          동의한 권한에 따라 이메일, 이름 또는 프로필 정보가 인증 서비스에
          전달될 수 있습니다. 소셜 계정의 비밀번호는 해당 로그인 제공자가
          처리합니다.
        </li>
        <li>
          <strong>학습 기록:</strong> 학습 완료 내역, 저장한 문장, 복습 결과와
          오답, 연속 학습 등 학습 현황을 계정에 연결해 저장하고 조회합니다.
        </li>
        <li>
          <strong>문의 정보:</strong> 이메일로 문의하면 회신 주소와 이용자가
          보낸 내용을 문의 해결 및 개인정보 관련 요청 처리에 사용합니다.
        </li>
      </ul>

      <h2>2. 광고와 자동으로 처리되는 정보</h2>
      <p>
        앱은 Google AdMob을 사용하여 광고를 제공합니다. Google Mobile Ads SDK는
        광고 제공·측정, 부정 이용 방지 및 성능 개선을 위해 IP 주소, 기기 또는
        광고 식별자, 광고 노출 및 상호작용 정보, 진단·성능 데이터를 처리할 수
        있습니다. IP 주소로 대략적인 위치가 추정될 수 있으며, 실제 처리 범위는
        SDK 설정과 이용자의 동의 및 기기 설정에 따라 달라집니다.
      </p>
      <p>
        iOS 설정의 개인정보 보호 및 보안 &gt; 추적에서 앱 추적 허용 여부를
        관리할 수 있습니다. 추적 허용을 해제하거나 앱을 삭제하더라도 이미 저장된
        계정과 학습 기록이 자동으로 삭제되는 것은 아닙니다.
      </p>

      <h2>3. 외부 서비스 이용</h2>
      <p>
        로그인 제공자는 인증을, Supabase는 인증과 계정에 연결된 학습 기록의
        저장을, AdMob은 광고 제공을 위해 사용됩니다. 각 서비스의 개인정보 처리에
        관한 자세한 내용은 다음 문서에서 확인할 수 있습니다.
      </p>
      <ul>
        {services.map(([name, url]) => (
          <li key={name}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name} ↗
            </a>
          </li>
        ))}
      </ul>
      <p>
        외부 서비스 이용 과정에서 정보는 해당 서비스의 서버에서 처리될 수
        있으며, 서버 위치 및 서비스 운영 방식에 따라 국외에서 처리될 수
        있습니다.
      </p>

      <h2>4. 정보 보관과 삭제</h2>
      <p>
        계정 식별 정보와 학습 기록은 이용자가 계정을 유지하며 학습 현황을
        확인하는 동안 보관합니다. 회원탈퇴 또는 삭제 요청 시 계정과 연결된 학습
        기록을 삭제하며, 법령상 보존 의무가 있는 정보는 해당 의무에 필요한 기간
        동안 보관합니다. 외부 서비스가 자체적으로 처리하는 정보의 보관은 각
        서비스의 정책이 적용됩니다.
      </p>
      <p>
        앱의 설정 &gt; 회원탈퇴하기에서 계정 삭제를 진행할 수 있습니다. 앱을
        이용하기 어렵거나 삭제에 문제가 있으면{" "}
        <a href="mailto:work.johnhan@gmail.com">work.johnhan@gmail.com</a>으로
        요청해 주세요. 요청자의 계정을 확인하는 데 필요한 최소한의 정보를 확인한
        뒤 처리합니다. 앱 삭제나 소셜 로그인 연결 해제만으로 앱의 데이터베이스에
        저장된 기록이 삭제되지는 않습니다.
      </p>

      <h2>5. 이용자의 권리와 선택</h2>
      <p>
        이용자는 자신의 개인정보에 대한 열람, 정정, 삭제 또는 처리 정지를 문의
        이메일로 요청할 수 있습니다. 로그인 제공자의 계정 설정에서 앱에 제공하는
        권한을 관리할 수 있습니다. 로그인을 중단하거나 계정을 삭제하면 계정에
        연결된 학습 현황 저장·조회 기능의 이용이 제한될 수 있습니다.
      </p>

      <h2>6. 개인정보 보호</h2>
      <p>
        운영자는 개인정보 보호를 위해 합리적인 관리적·기술적 보호 조치를
        적용합니다. 인터넷을 통한 전송이나 전자적 저장 방식의 절대적인 안전을
        보장할 수는 없습니다. 계정이나 개인정보와 관련된 문제를 발견한 경우 문의
        이메일로 알려주세요.
      </p>

      <h2>7. 아동의 개인정보</h2>
      <p>
        보호자가 아동의 개인정보 처리나 계정 삭제에 관해 문의하는 경우 아래
        연락처로 요청할 수 있습니다. 운영자는 요청 내용과 필요한 보호 조치를
        확인하여 처리합니다.
      </p>

      <h2>8. 방침의 변경</h2>
      <p>
        서비스 또는 개인정보 처리 방식이 변경되면 이 페이지의 내용과 시행일을
        갱신합니다. 관련 법령에 따라 별도 안내나 동의가 필요한 변경은 해당
        절차를 따릅니다.
      </p>

      <h2>9. 문의처</h2>
      <p>
        운영자: YOHAN HAN (Yoy0z-maps)
        <br />
        이메일:{" "}
        <a href="mailto:work.johnhan@gmail.com">work.johnhan@gmail.com</a>
      </p>
      <hr />
      <p>
        이 방침은{" "}
        <a
          href="https://app-privacy-policy-generator.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Privacy Policy Generator
        </a>
        의 구성과 앱의 서비스 이용 정보를 참고하여 작성했습니다.
      </p>
    </AppPrivacyPage>
  );
}
