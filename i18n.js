(function () {
  var storageKey = "ksa-lang";
  var defaultLang = "en";
  var htmlLang = { en: "en", zh: "zh-Hans", ko: "ko" };
  var fontHref = {
    zh: "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600&display=swap",
    ko: "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600&display=swap"
  };
  var strings = {
    en: {
      "doc.title": "K Beauty Clinic | Greater Vancouver",
      "doc.description": "K-beauty aesthetics clinic in Greater Vancouver. Korean expertise. Confident results. Not a spa or physiotherapy clinic.",
      "meta.location": "Greater Vancouver · Coquitlam and the Tri-Cities",
      "meta.book": "Book a consultation",
      "nav.label": "Primary",
      "lang.label": "Language",
      "nav.home": "Home",
      "nav.injectables": "Injectables",
      "nav.lasers": "Lasers and Light",
      "nav.skincare": "Medical Skincare",
      "nav.rejuvenation": "Skin Rejuvenation",
      "nav.programs": "Signature Programs",
      "nav.founder": "Founder",
      "nav.advantages": "Advantage",
      "nav.process": "Process",
      "nav.faq": "FAQ",
      "nav.guideline": "Brand Guideline",
      "hero.tagline": "Korean Expertise. Confident Results.",
      "hero.title": "Medical Confidence with Korean Refinement.",
      "hero.line": "Advanced Korean Aesthetics for Every Woman.",
      "cta.book": "Book a consultation",
      "founder.kicker": "Founder",
      "founder.title": "South Korean clinical experience, close at hand",
      "founder.p1": "The clinic is led by a practitioner with professional cosmetic experience in South Korea and an extensive history with injectables. That background shapes how we assess skin, recommend treatment and talk about results.",
      "founder.p2": "Care in Greater Vancouver stays personal: a clear consult, a plan that fits the concern, and honest expectations—not a spa menu or a sales script.",
      "founder.point1": "Korean doctor experience, shaped by professional practice in South Korea.",
      "founder.point2": "Canadian doctor experience, caring for patients in Greater Vancouver.",
      "founder.point3": "Advanced equipment, including Onda, for skincare and tightening.",
      "founder.alt": "Dr. Jasmine Yang, founder of K Beauty Clinic",
      "treat.kicker": "Treatments",
      "treat.title": "Care shaped around your concern",
      "treat.lede": "Communication stays focused on injectables, advanced lasers, medical skincare and facial aesthetic treatments—not spa menus, physiotherapy or wellness programmes.",
      "card.injectables.title": "Injectables",
      "card.injectables.body": "Botox and filler, planned after assessment, with honest expectations.",
      "card.lasers.title": "Lasers and Light",
      "card.lasers.body": "Laser and light protocols for pigment, texture and skin quality.",
      "card.skincare.title": "Medical Skincare",
      "card.skincare.body": "Clinical skincare that supports in-clinic treatment over time.",
      "card.rejuvenation.title": "Skin Rejuvenation",
      "card.rejuvenation.body": "Measured care for aging, pores, scarring and skin quality.",
      "card.programs.title": "Signature Programs",
      "card.programs.body": "Combined plans around one concern, such as pigmentation or refinement.",
      "cta.consult": "Book a consult",
      "concern.title": "Start with the concern",
      "concern.lede": "Lead with what you want to improve, then receive a professional recommendation—not a one-size treatment list.",
      "concern.pigment.title": "Pigmentation",
      "concern.pigment.body": "Uneven tone, sun spots and stubborn discoloration.",
      "concern.aging.title": "Aging and Wrinkles",
      "concern.aging.body": "Lines, movement and changes in skin firmness.",
      "concern.volume.title": "Volume Loss",
      "concern.volume.body": "Facial volume and contour that have softened over time.",
      "concern.acne.title": "Acne and Scarring",
      "concern.acne.body": "Texture, marks and scarring after breakouts.",
      "concern.texture.title": "Texture and Pores",
      "concern.texture.body": "Roughness, enlarged pores and uneven skin quality.",
      "concern.contour.title": "Facial Contouring",
      "concern.contour.body": "Refinement of facial shape with a considered clinical approach.",
      "advantage.kicker": "Advantage",
      "advantage.title": "The clinical advantage",
      "advantage.lede": "Korean expertise, delivered with safety, honest plans and care that fits your concern—not a spa menu or a one-size protocol.",
      "advantage.1.title": "Safety first",
      "advantage.1.body": "Clinical responsibility comes before sales or trends. Suitability is explained before any treatment is offered.",
      "advantage.2.title": "Korean expertise",
      "advantage.2.body": "Professional cosmetic experience in South Korea is a clinical advantage, not a decorative theme.",
      "advantage.3.title": "Personalized plans",
      "advantage.3.body": "Recommendations follow your concern, history and goals—not a fixed menu of packages.",
      "advantage.4.title": "Honest expectations",
      "advantage.4.body": "Results are discussed as a path to improvement. We do not make miracle claims.",
      "advantage.6.title": "Advanced equipment",
      "advantage.6.body": "Medical-grade technology, including Onda, supports skincare, tightening and measured contouring.",
      "process.kicker": "Care path",
      "process.title": "Our clinical process",
      "process.lede": "A structured path from assessment to follow-up, explained in plain language, with honest expectations at every step.",
      "process.1.title": "Consultation",
      "process.1.body": "We start with a professional assessment of your concern, history and goals. Suitability is explained clearly, with no pressure to book a treatment.",
      "process.2.title": "Personalized plan",
      "process.2.body": "You receive a recommended path: what, why, recovery and realistic expectations. Combined programmes are only suggested when they serve the concern.",
      "process.3.title": "Treatment",
      "process.3.body": "The agreed protocol is delivered with clinical care—injectables, laser and light, medical skincare or rejuvenation as planned.",
      "process.4.title": "Aftercare",
      "process.4.body": "You leave with clear aftercare so recovery stays measured. We do not skip instructions or over-promise downtime.",
      "process.5.title": "Review",
      "process.5.body": "Follow-up checks progress and decides the next step. Results are assessed honestly, including when more time or a different approach is needed.",
      "faq.kicker": "FAQ",
      "faq.title": "Questions we hear first",
      "faq.lede": "Clear answers before a consult: who we are, who we treat, and how recommendations are made.",
      "faq.1.q": "Is this a spa?",
      "faq.1.a": "No. K Beauty Clinic is a K-beauty aesthetics clinic. We do not offer spa menus, physiotherapy, wellness programmes, naturopathic care or IV therapy.",
      "faq.2.q": "Who is the clinic for?",
      "faq.2.a": "Women across Greater Vancouver who appreciate Korean aesthetics and culture, typically 35–60+. Care is offered to Korean, Chinese, other Asian and Caucasian clients.",
      "faq.3.q": "What happens in a consultation?",
      "faq.3.a": "A professional assessment comes first. We explain suitability, process and recovery in plain language, then build a personalized plan with realistic expectations. There is no pressure selling.",
      "faq.4.q": "Do you only treat Asian skin?",
      "faq.4.a": "Korean clinical knowledge of Asian skin is a centre of authority, but treatment is inclusive. We see women of all backgrounds who value Korean aesthetic techniques.",
      "faq.5.q": "Which treatments do you offer?",
      "faq.5.a": "Injectables, advanced lasers and light, medical skincare, skin rejuvenation, and signature programmes built around one concern—not a salon menu.",
      "faq.6.q": "How do you talk about results?",
      "faq.6.a": "We show realistic outcomes and the path to improvement. We do not make miracle claims or promise a single-session transformation.",
      "faq.7.q": "Where is the clinic?",
      "faq.7.a": "Greater Vancouver, beginning with Coquitlam, the Tri-Cities and nearby communities.",
      "consult.kicker": "Consultation",
      "consult.title": "Feel informed, safe and confident",
      "consult.body": "A professional assessment comes first. We explain suitability, process and recovery in plain language, then build a personalized plan with realistic treatment expectations.",
      "cta.request": "Request a consultation",
      "footer.blurb": "K-beauty aesthetics in Greater Vancouver"
    },
    zh: {
      "doc.title": "K Beauty Clinic | 大温哥华",
      "doc.description": "大温哥华韩式医美诊所。韩国专业经验，可信结果。不是水疗、理疗或养生馆。",
      "meta.location": "大温哥华 · 高贵林与三城市",
      "meta.book": "预约咨询",
      "nav.label": "主导航",
      "lang.label": "语言",
      "nav.home": "首页",
      "nav.injectables": "注射类",
      "nav.lasers": "激光与光电",
      "nav.skincare": "医学护肤",
      "nav.rejuvenation": "皮肤年轻化",
      "nav.programs": "特色疗程",
      "nav.founder": "创始人",
      "nav.advantages": "优势",
      "nav.process": "诊疗流程",
      "nav.faq": "常见问题",
      "nav.guideline": "品牌手册",
      "hero.tagline": "韩国专业 · 可信效果",
      "hero.title": "医疗级信任，韩国式精致。",
      "hero.line": "面向每一位女性的进阶韩式医美。",
      "cta.book": "预约咨询",
      "founder.kicker": "创始人",
      "founder.title": "韩国临床经验，近在身边",
      "founder.p1": "诊所由具备韩国专业美容临床经验、注射类治疗经历丰富的医生主持。这一背景决定我们如何评估皮肤、建议治疗，以及如何谈论效果。",
      "founder.p2": "在大温哥华，诊疗保持一对一：清晰咨询、针对问题的方案，以及诚实预期——不是水疗菜单，也不是推销话术。",
      "founder.point1": "韩国医生经验，来自韩国专业临床实践。",
      "founder.point2": "加拿大医生经验，服务大温哥华求美者。",
      "founder.point3": "先进设备，包括 Onda，用于护肤与紧致。",
      "founder.alt": "K Beauty Clinic 创始人杨医生 Dr. Jasmine Yang",
      "treat.kicker": "项目",
      "treat.title": "围绕您的诉求制定方案",
      "treat.lede": "沟通聚焦注射、进阶激光、医学护肤与面部医美——不是水疗菜单、理疗或养生项目。",
      "card.injectables.title": "注射类",
      "card.injectables.body": "肉毒与填充，评估后再规划，预期坦诚说明。",
      "card.lasers.title": "激光与光电",
      "card.lasers.body": "针对色斑、质地与肤质的激光与光电方案。",
      "card.skincare.title": "医学护肤",
      "card.skincare.body": "配合院内治疗、可长期坚持的医学护肤。",
      "card.rejuvenation.title": "皮肤年轻化",
      "card.rejuvenation.body": "针对松弛、毛孔、疤痕与肤质的克制护理。",
      "card.programs.title": "特色疗程",
      "card.programs.body": "围绕单一诉求组合方案，例如色斑或精细调整。",
      "cta.consult": "预约咨询",
      "concern.title": "从诉求开始",
      "concern.lede": "先说您想改善什么，再获得专业建议——不是一套通用项目表。",
      "concern.pigment.title": "色斑与色素",
      "concern.pigment.body": "肤色不均、晒斑与顽固色素。",
      "concern.aging.title": "老化与皱纹",
      "concern.aging.body": "动态纹、静态纹与皮肤紧致度变化。",
      "concern.volume.title": "容量流失",
      "concern.volume.body": "随时间变软的面部容量与轮廓。",
      "concern.acne.title": "痘印与疤痕",
      "concern.acne.body": "痘后质地、印记与疤痕。",
      "concern.texture.title": "质地与毛孔",
      "concern.texture.body": "粗糙、粗大毛孔与不均肤质。",
      "concern.contour.title": "面部轮廓",
      "concern.contour.body": "以审慎临床方式调整面部形态。",
      "advantage.kicker": "优势",
      "advantage.title": "临床优势",
      "advantage.lede": "韩国专业，配合安全、诚实方案，以及针对您诉求的护理——不是水疗菜单，也不是一套通用方案。",
      "advantage.1.title": "安全优先",
      "advantage.1.body": "临床责任优先于销售或潮流。是否适合会在提出任何治疗前说明。",
      "advantage.2.title": "韩国专业",
      "advantage.2.body": "韩国专业美容临床经验是临床优势，而不是装饰性主题。",
      "advantage.3.title": "个性化方案",
      "advantage.3.body": "建议跟随您的诉求、病史与目标——不是固定套餐菜单。",
      "advantage.4.title": "诚实预期",
      "advantage.4.body": "效果作为改善路径来讨论。我们不做奇迹承诺。",
      "advantage.6.title": "先进设备",
      "advantage.6.body": "医学级设备，包括 Onda，用于护肤、紧致与克制的轮廓调整。",
      "process.kicker": "诊疗路径",
      "process.title": "我们的临床流程",
      "process.lede": "从评估到复诊的结构化路径，用明白的语言说明，每一步都给出诚实预期。",
      "process.1.title": "咨询",
      "process.1.body": "从专业评估开始：了解诉求、病史与目标。是否适合会清楚说明，不会施压预约治疗。",
      "process.2.title": "个性化方案",
      "process.2.body": "您会收到建议路径：做什么、为什么、恢复期与现实预期。联合疗程仅在真正有助于该诉求时提出。",
      "process.3.title": "治疗",
      "process.3.body": "按约定方案实施临床治疗——注射、激光与光电、医学护肤或年轻化，以计划为准。",
      "process.4.title": "术后护理",
      "process.4.body": "离院时获得清晰护理说明，恢复过程可预期。我们不会省略医嘱，也不会夸大恢复时间。",
      "process.5.title": "复诊",
      "process.5.body": "随访查看进展并决定下一步。效果会诚实评估，包括是否需要更多时间或调整方案。",
      "faq.kicker": "常见问题",
      "faq.title": "我们最先被问到的问题",
      "faq.lede": "咨询前先说清楚：我们是谁、为谁服务、如何给出建议。",
      "faq.1.q": "这是水疗馆吗？",
      "faq.1.a": "不是。K Beauty Clinic 是韩式医美诊所。我们不提供水疗套餐、理疗、养生项目、自然疗法或输液。",
      "faq.2.q": "诊所服务谁？",
      "faq.2.a": "大温哥华欣赏韩式美学与文化的女性，多为 35–60 岁。服务韩裔、华裔、其他亚裔及白人求美者。",
      "faq.3.q": "咨询时会发生什么？",
      "faq.3.a": "先做专业评估。我们用明白的语言说明是否适合、流程与恢复，再制定个性化方案与现实预期。没有推销压力。",
      "faq.4.q": "只做亚洲皮肤吗？",
      "faq.4.a": "对亚洲皮肤的韩国临床认知是权威核心，但治疗是包容的。我们接待重视韩式医美技术的不同背景女性。",
      "faq.5.q": "提供哪些项目？",
      "faq.5.a": "注射、进阶激光与光电、医学护肤、皮肤年轻化，以及围绕单一诉求的特色疗程——不是沙龙菜单。",
      "faq.6.q": "你们如何谈论效果？",
      "faq.6.a": "我们展示现实结果与改善路径。不做奇迹承诺，也不保证一次见效。",
      "faq.7.q": "诊所在哪里？",
      "faq.7.a": "大温哥华，从高贵林、三城市及邻近社区开始。",
      "consult.kicker": "咨询",
      "consult.title": "知情、安全、有信心",
      "consult.body": "先做专业评估。我们用明白的语言说明是否适合、流程与恢复，再制定个性化方案与现实治疗预期。",
      "cta.request": "申请咨询",
      "footer.blurb": "大温哥华韩式医美"
    },
    ko: {
      "doc.title": "K Beauty Clinic | 그레이터 밴쿠버",
      "doc.description": "그레이터 밴쿠버 케이뷰티 에스테틱 클리닉. 한국 전문성, 신뢰할 수 있는 결과. 스파·물리치료·웰니스 시설이 아닙니다.",
      "meta.location": "그레이터 밴쿠버 · 코퀴틀람과 트라이시티",
      "meta.book": "상담 예약",
      "nav.label": "주요 메뉴",
      "lang.label": "언어",
      "nav.home": "홈",
      "nav.injectables": "주사 시술",
      "nav.lasers": "레이저·라이트",
      "nav.skincare": "메디컬 스킨케어",
      "nav.rejuvenation": "피부 재생",
      "nav.programs": "시그니처 프로그램",
      "nav.founder": "원장 소개",
      "nav.advantages": "강점",
      "nav.process": "진료 과정",
      "nav.faq": "자주 묻는 질문",
      "nav.guideline": "브랜드 가이드",
      "hero.tagline": "한국 전문성. 확신 있는 결과.",
      "hero.title": "메디컬 신뢰와 한국적 세련미.",
      "hero.line": "모든 여성을 위한 어드밴스드 한국 에스테틱.",
      "cta.book": "상담 예약",
      "founder.kicker": "원장 소개",
      "founder.title": "한국의 임상 경험, 가까이에서",
      "founder.p1": "클리닉은 한국에서의 전문 미용 임상 경험과 풍부한 주사 시술 이력을 가진 의사가 이끕니다. 이 배경이 피부 평가, 시술 권고, 결과 설명을 결정합니다.",
      "founder.p2": "그레이터 밴쿠버에서의 진료는 개인적입니다. 분명한 상담, 고민에 맞는 계획, 솔직한 기대치—스파 메뉴나 판매 대본이 아닙니다.",
      "founder.point1": "한국 의사 경험, 한국의 전문 임상 진료에서 형성되었습니다.",
      "founder.point2": "캐나다 의사 경험, 그레이터 밴쿠버 환자를 돌봅니다.",
      "founder.point3": "Onda를 포함한 첨단 장비로 스킨케어와 타이트닝을 진행합니다.",
      "founder.alt": "K Beauty Clinic 원장 Dr. Jasmine Yang",
      "treat.kicker": "시술",
      "treat.title": "고민에 맞춘 진료",
      "treat.lede": "소통은 주사, 어드밴스드 레이저, 메디컬 스킨케어, 페이셜 에스테틱에 집중합니다. 스파 메뉴, 물리치료, 웰니스 프로그램이 아닙니다.",
      "card.injectables.title": "주사 시술",
      "card.injectables.body": "보톡스와 필러, 평가 후 계획하며 기대를 솔직히 설명합니다.",
      "card.lasers.title": "레이저·라이트",
      "card.lasers.body": "색소, 결, 피부 퀄리티를 위한 레이저·라이트 프로토콜.",
      "card.skincare.title": "메디컬 스킨케어",
      "card.skincare.body": "원내 시술을 장기적으로 뒷받침하는 임상 스킨케어.",
      "card.rejuvenation.title": "피부 재생",
      "card.rejuvenation.body": "노화, 모공, 흉터, 피부 퀄리티를 위한 절제된 케어.",
      "card.programs.title": "시그니처 프로그램",
      "card.programs.body": "색소나 정교화처럼 하나의 고민을 중심으로 한 복합 계획.",
      "cta.consult": "상담 예약",
      "concern.title": "고민에서 시작합니다",
      "concern.lede": "개선하고 싶은 점을 먼저 말씀하시면, 일률적인 시술 목록이 아닌 전문 권고를 드립니다.",
      "concern.pigment.title": "색소",
      "concern.pigment.body": "톤 불균일, 잡티, 잘 빠지지 않는 색소.",
      "concern.aging.title": "노화와 주름",
      "concern.aging.body": "표정 주름, 고정 주름, 피부 탄력 변화.",
      "concern.volume.title": "볼륨 감소",
      "concern.volume.body": "시간이 지나며 부드러워진 얼굴 볼륨과 윤곽.",
      "concern.acne.title": "여드름과 흉터",
      "concern.acne.body": "여드름 후 결, 자국, 흉터.",
      "concern.texture.title": "피부결과 모공",
      "concern.texture.body": "거침, 넓어진 모공, 불균일한 피부 퀄리티.",
      "concern.contour.title": "페이셜 컨투어링",
      "concern.contour.body": "신중한 임상 접근으로 얼굴 형태를 다듬습니다.",
      "advantage.kicker": "강점",
      "advantage.title": "임상적 이점",
      "advantage.lede": "한국 전문성을, 안전과 솔직한 계획, 고민에 맞는 진료로 전달합니다. 스파 메뉴나 일률적인 프로토콜이 아닙니다.",
      "advantage.1.title": "안전 우선",
      "advantage.1.body": "임상 책임이 판매나 유행보다 앞섭니다. 적합 여부는 시술을 제안하기 전에 설명합니다.",
      "advantage.2.title": "한국 전문성",
      "advantage.2.body": "한국의 전문 미용 임상 경험은 장식이 아닌 임상적 이점입니다.",
      "advantage.3.title": "맞춤 계획",
      "advantage.3.body": "권고는 고민, 병력, 목표를 따릅니다. 고정된 패키지 메뉴가 아닙니다.",
      "advantage.4.title": "솔직한 기대",
      "advantage.4.body": "결과는 개선의 경로로 이야기합니다. 기적 같은 주장을 하지 않습니다.",
      "advantage.6.title": "첨단 장비",
      "advantage.6.body": "Onda를 포함한 메디컬 그레이드 장비가 스킨케어, 타이트닝, 절제된 컨투어링을 뒷받침합니다.",
      "process.kicker": "진료 경로",
      "process.title": "임상 프로세스",
      "process.lede": "평가부터 경과 확인까지 구조화된 경로를, 쉬운 말로, 매 단계에서 솔직한 기대치와 함께 설명합니다.",
      "process.1.title": "상담",
      "process.1.body": "고민, 병력, 목표에 대한 전문 평가로 시작합니다. 적합 여부를 분명히 설명하며, 시술 예약을 강요하지 않습니다.",
      "process.2.title": "맞춤 계획",
      "process.2.body": "무엇을, 왜, 회복은 어떻게, 현실적 기대는 무엇인지 권고합니다. 복합 프로그램은 그 고민에 도움이 될 때만 제안합니다.",
      "process.3.title": "시술",
      "process.3.body": "합의된 프로토콜을 임상적으로 시행합니다. 주사, 레이저·라이트, 메디컬 스킨케어 또는 재생 시술.",
      "process.4.title": "애프터케어",
      "process.4.body": "회복이 예측 가능하도록 명확한 주의사항을 드립니다. 안내를 생략하거나 다운타임을 과장하지 않습니다.",
      "process.5.title": "경과 확인",
      "process.5.body": "경과를 확인하고 다음 단계를 결정합니다. 더 시간이 필요하거나 다른 접근이 필요할 때도 결과를 솔직히 평가합니다.",
      "faq.kicker": "자주 묻는 질문",
      "faq.title": "가장 먼저 받는 질문",
      "faq.lede": "상담 전에 분명히: 우리는 누구인지, 누구를 진료하는지, 권고는 어떻게 이루어지는지.",
      "faq.1.q": "스파인가요?",
      "faq.1.a": "아닙니다. K Beauty Clinic은 케이뷰티 에스테틱 클리닉입니다. 스파 메뉴, 물리치료, 웰니스, 자연요법, 수액 치료는 하지 않습니다.",
      "faq.2.q": "누구를 위한 클리닉인가요?",
      "faq.2.a": "한국 미학과 문화를 중시하는 그레이터 밴쿠버 여성, 주로 35–60세. 한국, 중국, 그 외 아시아, 백인 고객을 진료합니다.",
      "faq.3.q": "상담에서는 무엇을 하나요?",
      "faq.3.a": "전문 평가가 먼저입니다. 적합 여부, 과정, 회복을 쉬운 말로 설명한 뒤 현실적인 기대와 함께 맞춤 계획을 만듭니다. 강요 판매는 없습니다.",
      "faq.4.q": "아시아 피부만 진료하나요?",
      "faq.4.a": "아시아 피부에 대한 한국 임상 지식은 권위의 중심이지만, 진료는 포용적입니다. 한국 에스테틱 테크닉을 중시하는 다양한 배경의 여성을 봅니다.",
      "faq.5.q": "어떤 시술을 하나요?",
      "faq.5.a": "주사, 어드밴스드 레이저·라이트, 메디컬 스킨케어, 피부 재생, 그리고 한 가지 고민을 중심으로 한 시그니처 프로그램—살롱 메뉴가 아닙니다.",
      "faq.6.q": "결과는 어떻게 말하나요?",
      "faq.6.a": "현실적인 결과와 개선 경로를 보여 드립니다. 기적 같은 주장이나 한 번의 변신을 약속하지 않습니다.",
      "faq.7.q": "클리닉은 어디에 있나요?",
      "faq.7.a": "그레이터 밴쿠버, 코퀴틀람과 트라이시티 및 인근 지역부터입니다.",
      "consult.kicker": "상담",
      "consult.title": "충분히 알고, 안전하고, 자신 있게",
      "consult.body": "전문 평가가 먼저입니다. 적합 여부, 과정, 회복을 쉬운 말로 설명한 뒤 현실적인 시술 기대와 함께 맞춤 계획을 만듭니다.",
      "cta.request": "상담 신청",
      "footer.blurb": "그레이터 밴쿠버 케이뷰티 에스테틱"
    }
  };

  function currentLang() {
    var saved = localStorage.getItem(storageKey);
    return strings[saved] ? saved : defaultLang;
  }

  function loadFont(lang) {
    if (!fontHref[lang]) return;
    var id = "ksa-font-" + lang;
    if (document.getElementById(id)) return;
    var link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = fontHref[lang];
    document.head.appendChild(link);
  }

  function applyLang(lang) {
    if (!strings[lang]) lang = defaultLang;
    var dict = strings[lang];
    document.documentElement.lang = htmlLang[lang];
    document.documentElement.setAttribute("data-lang", lang);
    localStorage.setItem(storageKey, lang);
    loadFont(lang);

    var titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      var titleKey = titleEl.getAttribute("data-i18n");
      if (dict[titleKey]) document.title = dict[titleKey];
    }
    var meta = document.querySelector('meta[name="description"][data-i18n]');
    if (meta) {
      var metaKey = meta.getAttribute("data-i18n");
      if (dict[metaKey]) meta.setAttribute("content", dict[metaKey]);
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key]) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });

    window.dispatchEvent(new Event("resize"));
  }

  applyLang(currentLang());

  document.querySelectorAll(".lang-switch [data-lang]").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLang(button.getAttribute("data-lang"));
    });
  });
})();
