import { useEffect, useState } from "react";
import styles from "./companyList.module.scss";
import CompanyCard from "./CompanyCard";
import { Link } from "react-router-dom";

export type CompanyType = {
	id: number;
	companyImg: string;
	companyName: string;
	description: string;
	companyType: string;
	adress: string;
	numOfEmployee: number;
	homepageUrl: string;
	benefits: string;
};

const dummyCompanies: CompanyType[] = [
	{
		id: 1,
		companyImg:
			"https://i.namu.wiki/i/p7ICSvVBDzGoGG9yCV9mZa243b2IqqMz11S_KXlen-cPyG1d_qNc4BMYMl9naMXh8upt2nwYaD-xoG6JynOiPOpYJoHxlxLHYWEF1-MT-HRUNoe7RRwT71_jvR62BtkTU_xljwPkpKhgaH_hFCjSyA.svg",
		companyName: "무신사",
		description: "국내 1위 온라인 패션 플랫폼",
		companyType: "쇼핑몰/오픈마켓",
		adress: "서울 성동구 성수동 2가",
		numOfEmployee: 510,
		homepageUrl: "https://www.musinsa.com",
		benefits:
			"무신사는 직원들이 창의력을 발휘할 수 있도록 다양한 복지 혜택을 제공합니다. 무료 커피, 편안한 휴게실, 유연 근무제, 그리고 충분한 연차가 마련되어 있어 모두가 만족할 수 있는 환경을 조성하고 있습니다.",
	},
	{
		id: 2,
		companyImg:
			"https://i.namu.wiki/i/WZWuAmRA0g7T8xgI1WvW8bXK-_C1nZBD2PovBWAkZpaBBws3PjyVRhBc__WgaaBgVCdQ9lnoDDzPMMQR233UknsOGmV0gendoFEV5ehubAM7ApTkq0wijN5N2C-zS0kmzTrvxe2_XJip66nt538rSA.svg",
		companyName: "쿠팡",
		description: "빠른 배송과 다양한 상품을 제공하는 이커머스 기업",
		companyType: "이커머스",
		adress: "서울 강남구",
		numOfEmployee: 10000,
		homepageUrl: "https://www.coupang.com",
		benefits:
			"쿠팡은 직원들이 안정적이고 효율적으로 일할 수 있도록 성과급, 유연 근무제, 식대 지원 등 다양한 복지 혜택을 제공하며, 최고의 업무 환경을 보장합니다.",
	},
	{
		id: 3,
		companyImg:
			"https://i.namu.wiki/i/0m35bbWaD8TsU9vI2xO0-6hto0WSt8iifxcx92SnPBRxgEiU7tP5OghUbJQwMDebhk7nySVb7Z1ASXWXESZ4UfzfEXM2k0o_x8by7V-qUhg-IFcuA21laPVUDftwCUxC_FUOazcKIRmPTti0KW8cKA.svg",
		companyName: "네이버",
		description: "한국 대표 인터넷 서비스 및 검색 포털",
		companyType: "인터넷 서비스",
		adress: "경기 성남시 분당구",
		numOfEmployee: 9000,
		homepageUrl: "https://www.naver.com",
		benefits:
			"네이버는 정기 건강검진, 주택자금 지원, 문화생활비 지원 등 다양한 복지 제도를 운영하여 직원들이 안정적이고 창의적인 환경에서 일할 수 있도록 지원합니다.",
	},
	{
		id: 4,
		companyImg:
			"https://i.namu.wiki/i/kPm_uFuE90D0n0qKkFnKCETkBVcjlycCwF_2DcScTDKNuDszvdgFejMK6w5bOEK_Qx7SKmL1duV-izYbhpiWYM_YXXbA4rdDBlqIrzJq-pB-oa9kyvOhTkiATV3VQuOtIrgbMm-CVUmfmQAIw3fqbw.svg",
		companyName: "카카오",
		description: "다양한 모바일 플랫폼과 콘텐츠를 제공하는 IT 기업",
		companyType: "IT/모바일",
		adress: "경기 판교",
		numOfEmployee: 8000,
		homepageUrl: "https://www.kakao.com",
		benefits:
			"카카오는 자유로운 근무 문화와 창의적인 업무 환경을 위해 자율 근무제, 사내 카페, 체력단련실 등 다양한 복지 혜택을 제공하며, 직원들의 만족도를 높이고 있습니다.",
	},
	{
		id: 5,
		companyImg:
			"https://i.namu.wiki/i/DoA1-oodYPOGQ0mAd4VTJBEspHVLkmi5AyQ0bYkWnK6GGMzhP-szrUxW9n_3yhbAbX6Yciyd-kN3us069Uktng.svg",
		companyName: "배달의민족",
		description: "국내 대표 배달 주문 플랫폼",
		companyType: "배달/푸드테크",
		adress: "서울 마포구",
		numOfEmployee: 1200,
		homepageUrl: "https://www.baedalminjok.com",
		benefits:
			"배달의민족은 실용적인 복지 혜택으로 식대 지원, 자율 복장, 휴식실 제공 등을 통해 직원들이 편안하게 근무할 수 있는 환경을 조성하고 있습니다.",
	},
	{
		id: 6,
		companyImg:
			"https://i.namu.wiki/i/Z3SrqmdLLgH5ohB21Bbp_rD8VAWkWPyxWsSrbSl9S1GHI74qRzyP8QzYXVL9ujg5yyLLL1xb8gDtVMNkIioZ56WFHPz3pE9Qa4WWyy9dFq04Nc8urriqMlFUwRph-Da4XiIfjr6qavpOk_sBSKn8FQ.svg",
		companyName: "토스",
		description: "간편 송금 및 금융 서비스를 제공하는 핀테크 기업",
		companyType: "핀테크",
		adress: "서울 강남구",
		numOfEmployee: 1500,
		homepageUrl: "https://www.toss.im",
		benefits:
			"토스는 유연 근무제, 스톡옵션, 건강검진 등 경쟁력 있는 복지 혜택을 제공하여 직원들이 혁신적인 아이디어를 실현할 수 있는 안정적인 환경을 지원합니다.",
	},
	{
		id: 7,
		companyImg:
			"https://i.namu.wiki/i/ff8vrMGfhAOtr2BIjv3aCXG9opdvn64rtbZElJ3ZzBMSauOtfBgmxheEt0laRfPSlubJlhVm2E-NQdiohzNekrHb2ZZZBHmY_XCduvTKxLzXajf_Z4NZPdNXgCVys3HJn6bUuHYDBnw6eTebR0vwbQ.svg",
		companyName: "삼성전자",
		description: "글로벌 전자제품 및 IT 솔루션 제공 기업",
		companyType: "전자/가전",
		adress: "경기 수원",
		numOfEmployee: 320000,
		homepageUrl: "https://www.samsung.com",
		benefits:
			"삼성전자는 연봉 인상, 스톡옵션, 보너스 등 다양한 복지 제도를 통해 전 세계 직원들이 최고의 성과를 낼 수 있는 환경을 제공하고 있습니다.",
	},
	{
		id: 8,
		companyImg:
			"https://i.namu.wiki/i/jn72nUkKNUzZ81plHXnJarzdBWQV807BCEXSeq3B4EmDrf2lwGskpA7G12-kvG482CZoclUxiWRIPtNh0cyTQXGYrQNC3St7pj9UaZOaGg2y5P0liSwfB45CNFAevTe3Wj_IGhC9nTK-vqrBnh3V1g.svg",
		companyName: "LG전자",
		description: "혁신적인 가전제품과 디스플레이 기술을 선도하는 기업",
		companyType: "전자/가전",
		adress: "서울 영등포구",
		numOfEmployee: 70000,
		homepageUrl: "https://www.lg.com",
		benefits:
			"LG전자는 자기개발 지원, 복지포인트, 휴가 지원 등 다양한 복지 혜택을 제공하여 직원들이 건강하고 만족스러운 근무 환경에서 일할 수 있도록 돕습니다.",
	},
	{
		id: 9,
		companyImg:
			"https://i.namu.wiki/i/Uz1i8FGNqLLoc_bVKHHzPcosKRFBn01pfBrwJ8SJVpu5qK6_-tchCrC3eJ-2_EESrOzz7t51XWw_Y-EL2bV7BdC_guYJqD2DAhsK03jsj78ZCIqNEElqbMxqDxHZ795dXfPmz9iaOTomwKOjD5C8Cg.svg",
		companyName: "현대자동차",
		description: "국내 대표 자동차 제조 및 글로벌 모빌리티 솔루션 기업",
		companyType: "자동차",
		adress: "서울 서초구",
		numOfEmployee: 500000,
		homepageUrl: "https://www.hyundai.com",
		benefits:
			"현대자동차는 연차, 건강검진, 자체 식당 등의 복지 혜택을 통해 직원들이 안정적이고 효율적인 환경에서 최고의 성과를 낼 수 있도록 지원합니다.",
	},
	{
		id: 10,
		companyImg:
			"https://i.namu.wiki/i/VwEtJqn1eGrDn0cgmeTQIwdxm6nX_GKK1dgO7W-oVFxL4tiXpxnBAcfq7t8hxWeuL-x8NOzsVGr669KEq0rYX7rGqp1FtIIVh2sVVNHfgEI_HVQsD5eLX0X0TTn6ClD_EneRqW3S6whL39eSYzW6_w.svg",
		companyName: "기아",
		description: "디자인과 기술이 결합된 글로벌 자동차 브랜드",
		companyType: "자동차",
		adress: "서울 서초구",
		numOfEmployee: 300000,
		homepageUrl: "https://www.kia.com",
		benefits:
			"기아는 자유로운 근무 환경, 스톡옵션, 연말 보너스 등 다양한 복지 혜택을 제공하여 직원들이 창의적으로 일할 수 있는 환경을 마련하고 있습니다.",
	},
	{
		id: 11,
		companyImg:
			"https://i.namu.wiki/i/8ixwdjoWPjv2LNqq_kZgqQN5WFd1_gYgb4vDG5Mf54RbniWg5VV0XNFvNmc-Ef2BE_xXEa_BiMuaTu8BoLl2z0ikrNXCcna2ry1Mkbj36Nu35lajBvmIZLM4pwb_YeXUosEytRLTFi6a_je_MTusmQ.svg",
		companyName: "카카오게임즈",
		description: "모바일 및 PC 게임 퍼블리싱과 개발에 주력하는 게임 기업",
		companyType: "게임/엔터테인먼트",
		adress: "서울 강남구",
		numOfEmployee: 500,
		homepageUrl: "https://www.kakaogames.com",
		benefits:
			"카카오게임즈는 게임 산업의 선두주자로서 게임 관련 혜택, 자율 근무, 연차 등 다양한 복지 제도를 통해 직원들이 창의적이고 즐겁게 일할 수 있는 분위기를 조성하고 있습니다.",
	},
	{
		id: 12,
		companyImg:
			"https://i.namu.wiki/i/sCBKVBJGP4vWF9Y6y2PfLOWPOyW5wgYbh6StrRygTXzjFL8bICLTKqzyL2e0pMMKqCrRer_HyglYGRIq_wr5Mr2z4RXkcvb7h1Np7Y29eSJP8v9EYo-DnYw9WQVaNmoIBS6obr7iN0r9IyKWol5-gQ.svg",
		companyName: "스마일게이트",
		description: "대표 FPS 게임과 다양한 온라인 콘텐츠를 개발하는 기업",
		companyType: "게임/엔터테인먼트",
		adress: "서울 송파구",
		numOfEmployee: 1000,
		homepageUrl: "https://www.smilegate.com",
		benefits:
			"스마일게이트는 성과급, 스톡옵션, 건강검진 등 다양한 복지 혜택을 제공하여 직원들이 안정적으로 업무에 집중할 수 있도록 돕습니다.",
	},
	{
		id: 13,
		companyImg:
			"https://i.namu.wiki/i/gbp05OsHn0FfzikvEe8N6Mqeoed1c9DRZQMXX4zx7t95hXXtBry6KqnAYcwNsaeUm1ZvNrZYZoULePgCBjx4xIzqPfi7vAxpI7tX-u4aV629h8f587AyNczBYxHAfxtJ6WtFFXSHUsAAvwp7PlNUdw.svg",
		companyName: "넷마블",
		description: "모바일 게임 시장을 선도하는 글로벌 게임 퍼블리셔",
		companyType: "게임/엔터테인먼트",
		adress: "서울 중구",
		numOfEmployee: 2000,
		homepageUrl: "https://www.netmarble.com",
		benefits:
			"넷마블은 자율 근무제, 문화비 지원, 연차 등 다양한 복지 혜택을 통해 창의적인 업무 환경을 조성하고 직원들의 만족도를 높이고 있습니다.",
	},
	{
		id: 14,
		companyImg:
			"https://i.namu.wiki/i/UV7xnx6UetURI5fOPrxzyeKpUF-3jm_o0dD7NgkgoDKHsfqy8YxXBC_NdNRc37f-Moe-dX5IEyGAm9oP3ktPGKXzPbdhY-5Z9rxbXVmzbo15Fz0mTIU5Mhv2tdrVbdgqeoZxhLScMLuSFZBtWpRIvQ.svg",
		companyName: "NCSoft",
		description: "온라인 게임 및 MMORPG 전문 개발사",
		companyType: "게임/엔터테인먼트",
		adress: "경기 성남시",
		numOfEmployee: 8000,
		homepageUrl: "https://www.ncsoft.com",
		benefits:
			"NCSoft는 연차, 건강검진, 자유로운 복장 등의 복지 혜택을 통해 직원들이 창의적이고 효율적으로 업무를 수행할 수 있도록 지원합니다.",
	},
	{
		id: 15,
		companyImg:
			"https://i.namu.wiki/i/k97s5MdxIHDp75igGAZIdrawJOEXkKLdCBtxtJH32aZiWeXK05A3JQbxhmg2EKkqXZ__tP4K-f5nBfjSfUvMI5-FJ06RVphBmU_UJgZ3-X61F1rCXGV1fb_1faADOHZ8MsIVq3aQdYmzmpadVbzBHA.svg",
		companyName: "크래프톤",
		description: "배틀그라운드 등 히트 게임을 보유한 게임 개발사",
		companyType: "게임/엔터테인먼트",
		adress: "서울 서대문구",
		numOfEmployee: 1500,
		homepageUrl: "https://www.krafton.com",
		benefits:
			"크래프톤은 주식매수선택권, 보너스, 자율 복장 등 다양한 복지 혜택을 통해 직원들이 창의적인 아이디어를 실현할 수 있는 환경을 제공합니다.",
	},
	{
		id: 16,
		companyImg:
			"https://i.namu.wiki/i/SnXn_sOOeLfMbxPH4XQI0ZV82p_Fp6IA128yh9ZEg3EE65DhLyL6tST24KxR1KaTl6HxGgY7GSn6Mx5uYuHhqSbdrJDA9-g_fVHMIOnqlKxF0wcUIFT302Vn-XBDlMFfl1FVL84UPY_KGuGVNqQJ-A.webp",
		companyName: "펄어비스",
		description: "검은사막 등 대표 MMORPG를 개발하는 게임 기업",
		companyType: "게임/엔터테인먼트",
		adress: "서울 강북구",
		numOfEmployee: 600,
		homepageUrl: "https://www.pearlabyss.com",
		benefits:
			"펄어비스는 자유로운 근무 환경, 건강검진, 식대 지원 등 다양한 복지 혜택을 통해 직원들이 안정적으로 업무에 집중할 수 있는 환경을 제공합니다.",
	},
	{
		id: 17,
		companyImg:
			"https://i.namu.wiki/i/y5yrQEq0Cw5HfZGTQ1L8LzcnvxiKLoMjHPFNKJdIAm08g0cHC_KzKisBVNT9wd2mEsUhTSHaCn9v28dXM7ZjOPSEPlK_FPLZctYaNmphZPnKWc-JObARFooMgFsqgmq-ZMW2ISVgQSl42EAmdgT7nQ.webp",
		companyName: "더블유게임즈",
		description: "모바일 및 온라인 게임 개발에 주력하는 신생 게임 회사",
		companyType: "게임/엔터테인먼트",
		adress: "서울 강남구",
		numOfEmployee: 400,
		homepageUrl: "https://www.wgame.com",
		benefits:
			"더블유게임즈는 성과급, 자율 근무, 문화비 지원 등 다양한 복지 혜택을 통해 직원들이 창의적이고 즐겁게 일할 수 있는 분위기를 조성하고 있습니다.",
	},
	{
		id: 18,
		companyImg:
			"https://i.namu.wiki/i/jP2rnG01atRKDo8m8l3HicK-m8RnQlU3w_yqh1gczmt80F8QQvuyHRnuK94SB1IPAHnotmuA61wEx1RT_oPp5zqtpSuVB8aDIjm8sZYmZCekjRCN0QN2nmtouEDqeD9pJ6DVMn2LMbB7HyDNuzTNWQ.svg",
		companyName: "한화",
		description: "제조, 금융 등 다양한 산업 분야를 아우르는 대기업",
		companyType: "제조/금융",
		adress: "서울 종로구",
		numOfEmployee: 100000,
		homepageUrl: "https://www.hanwha.com",
		benefits:
			"한화는 연봉 인상, 복지 포인트, 자율복장 등 폭넓은 복지 혜택을 제공하여 직원들의 만족도와 업무 효율성을 극대화하고 있습니다.",
	},
];

const CompanyLists = () => {
	const [companies, setCompanies] = useState<CompanyType[]>();
	useEffect(() => {
		setCompanies(dummyCompanies);
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.title}>검색된 기업</div>
			<div className={styles.companyList}>
				{companies?.map((ele) => (
					<Link to={`/companies/${ele.id}`} key={ele.id} state={ele}>
						<CompanyCard key={ele.id} {...ele} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default CompanyLists;
