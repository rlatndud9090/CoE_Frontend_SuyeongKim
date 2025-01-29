import styles from './FAQFooter.module.scss';

const FAQFooter: React.FC = () => {
  return (
    <>
      <h2 className={styles.infoText}>서비스 문의</h2>
      <div className={styles.inquiryInfo}>
        <a>
          <span>상품제안서 다운로드</span>
        </a>
        <a>
          <span>상담문의 등록하기</span>
        </a>
        <a>
          <p>
            카톡으로 문의하기 <br />
            <span className={styles.talkIdText}>ID: Wible Biz(위블 비즈)</span>
          </p>
        </a>
      </div>
      <h2 className={styles.infoText}>이용 프로세스 안내</h2>
      <ol className={styles.processInfo}>
        <li>
          <p>
            <strong>문의 등록</strong>
            <span>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</span>
          </p>
        </li>
        <li>
          <p>
            <strong>관리자 설정</strong>
            <span>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</span>
          </p>
        </li>
        <li>
          <p>
            <strong>임직원 가입</strong>
            <span>사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</span>
          </p>
        </li>
        <li>
          <p>
            <strong>서비스 이용</strong>
            <span>사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!</span>
          </p>
        </li>
      </ol>
    </>
  );
};

export default FAQFooter;
