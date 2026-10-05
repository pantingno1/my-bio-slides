import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import endocrineSystemOverviewImg from './assets/endocrine-system-overview.jpg';
import hormoneVsNerveRegulationImg from './assets/hormone-vs-nerve-regulation.jpg';
import pancreasIsletsStructureImg from './assets/pancreas-islets-structure.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fafafa',
    text: '#0f172a',
    accent: '#d97706',
  },
  fonts: {
    display:
      'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
    body: 'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: {
    hero: 104,
    body: 24,
  },
  radius: 16,
};

export const transition: SlideTransition = {
  duration: 220,
  enter: {
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
    duration: 220,
    easing: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  exit: {
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    duration: 160,
    easing: 'cubic-bezier(0.4, 0, 1, 1)',
  },
};

const palette = {
  bg: '#fafafa',
  surface: '#ffffff',
  surfaceSubtle: '#f8fafc',
  border: '#e2e8f0',
  text: '#0f172a',
  muted: '#64748b',
  faint: '#94a3b8',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  indigo: '#4f46e5',
  indigoLight: '#eef2ff',
  indigoBorder: '#c7d2fe',
  violet: '#7c3aed',
  violetLight: '#f5f3ff',
  violetBorder: '#ddd6fe',
  cyan: '#0891b2',
  cyanLight: '#ecfeff',
  cyanBorder: '#a5f3fc',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  blue: '#2563eb',
  blueLight: '#eff6ff',
  blueBorder: '#bfdbfe',
};

const fill = {
  width: '100%',
  height: '100%',
  fontFamily: 'var(--osd-font-body)',
  color: 'var(--osd-text)',
  background: 'var(--osd-bg)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  padding: '36px 64px',
  boxSizing: 'border-box',
} as const;

const PageHeader = ({
  category = '國中自然科學 生物',
  title,
  subtitle,
}: {
  category?: string;
  title: string;
  subtitle?: string;
}) => (
  <div style={{ marginBottom: 14, flexShrink: 0 }}>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontSize: 20,
        fontWeight: 700,
        color: palette.amber,
        marginBottom: 8,
        letterSpacing: '0.04em',
      }}
    >
      <span style={{ fontSize: 20 }}>●</span>
      <span>{category}</span>
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 24,
      }}
    >
      <h2
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: palette.text,
          margin: 0,
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 22,
            color: palette.muted,
            margin: 0,
            fontWeight: 500,
            flexShrink: 1,
            textAlign: 'right',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

const PageFooter = ({ tip }: { tip?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: `1px solid ${palette.border}`,
        fontSize: 20,
        color: palette.faint,
        flexShrink: 0,
      }}
    >
      <span>{tip || '國中自然科學 · 生物（一上）單元 5-3 人體內分泌系統'}</span>
      <span
        style={{
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 600,
          background: palette.surfaceSubtle,
          padding: '2px 10px',
          borderRadius: 999,
          color: palette.muted,
        }}
      >
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '48px 88px 24px 88px',
      background: 'radial-gradient(circle at 10% 20%, #fffbeb 0%, #ffffff 60%, #fef3c7 100%)',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 22,
          fontWeight: 700,
          color: palette.amber,
          marginBottom: 20,
          letterSpacing: '0.04em',
        }}
      >
        <span style={{ fontSize: 22 }}>●</span>
        <span>國中自然科學 生物</span>
      </div>

      <h1
        style={{
          fontSize: 68,
          fontWeight: 900,
          color: palette.text,
          margin: '0 0 16px 0',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
        }}
      >
        人體的調節與內分泌系統
      </h1>

      <p
        style={{
          fontSize: 26,
          color: palette.muted,
          margin: '0 0 44px 0',
          lineHeight: 1.5,
          maxWidth: 1400,
        }}
      >
        無管腺體血液循環運輸、微量高效靶器官專一反應、各大腺體生理功能與回饋調節全景突破
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          maxWidth: 1720,
        }}
      >
        {[
          {
            no: '01',
            title: '內分泌腺本質特性',
            desc: '無導管直接進入微血管，血液運送、微量高效，專一性作用於特定標的細胞。',
            color: palette.amber,
            bg: palette.amberLight,
            border: palette.amberBorder,
          },
          {
            no: '02',
            title: '人體主要腺體總覽',
            desc: '腦垂腺總指揮、甲狀腺代謝、副甲狀腺血鈣、腎上腺應急、胰島與性腺分工。',
            color: palette.rose,
            bg: palette.roseLight,
            border: palette.roseBorder,
          },
          {
            no: '03',
            title: '血糖與恆定回饋',
            desc: '胰臟內外分泌兼具，胰島素與升糖素拮抗調控，負回饋抑制維護體內平衡。',
            color: palette.indigo,
            bg: palette.indigoLight,
            border: palette.indigoBorder,
          },
          {
            no: '04',
            title: '動植物調節機制對照',
            desc: '短時間神經快短準 vs 長時間內分泌慢長廣，植物生長素向光性應答。',
            color: palette.emerald,
            bg: palette.emeraldLight,
            border: palette.emeraldBorder,
          },
        ].map((card) => (
          <div
            key={card.no}
            style={{
              padding: '24px 24px',
              borderRadius: 16,
              background: card.bg,
              border: `1.5px solid ${card.border}`,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <span style={{ fontSize: 20, fontWeight: 800, color: card.color }}>{card.no}</span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              {card.title}
            </h3>
            <p
              style={{
                fontSize: 20,
                color: palette.muted,
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    <PageFooter />
  </div>
);

const SlideEndocrineConcept: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="什麼是內分泌腺？無管腺體與荷爾蒙"
        subtitle="血液循環為高速公路，微量分子精準啟動標的細胞反應"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.blueBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.blue,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 12px',
                }}
              >
                外分泌腺 (Exocrine)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                有導管傳送
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>構造特徵：</strong>具專屬分泌<strong>導管</strong>。
              </li>
              <li>
                <strong>分泌途徑：</strong>分泌物經由導管排放至體表或消化道內腔。
              </li>
              <li>
                <strong>典型實例：</strong>
                汗腺（排汗散熱）、唾液腺（分泌唾液澱粉酶）、淚腺（淚液）、皮脂腺、
                <strong>胰臟分泌胰液經胰管注入十二指腸</strong>。
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.amberBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.amber,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 12px',
                }}
              >
                內分泌腺 (Endocrine)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                無導管血液運送
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>構造特徵：</strong>
                <strong>沒有專屬導管</strong>（無管腺）。
              </li>
              <li>
                <strong>分泌途徑：</strong>細胞合成之<strong>激素（荷爾蒙 Hormone）</strong>
                直接釋入周圍微血管，藉由<strong>血液循環</strong>運送至全身。
              </li>
              <li>
                <strong>典型實例：</strong>腦垂腺、甲狀腺、副甲狀腺、腎上腺、胰島、性腺。
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              激素（荷爾蒙）的四大作用特點
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                style={{
                  background: palette.amberLight,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.amber }}>① 微量高效：</strong>
                極微小濃度（奈克至微克級）即可引發強烈的生理化學調節，過多或過少皆造成病態。
              </div>
              <div
                style={{
                  background: palette.indigoLight,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.indigo }}>② 血液長途運輸：</strong>
                藉由全身心血管網絡循環流動，作用時效通常較神經持久。
              </div>
              <div
                style={{
                  background: palette.emeraldLight,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.emerald }}>③ 靶器官專一性 (Target Organ)：</strong>
                激素隨血液流遍全身，但只有表面具有<strong>特異性受體</strong>
                的標的細胞才會發生反應。
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.roseLight,
              border: `1.5px solid ${palette.roseBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.rose,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            ★ 會考必考概念：胰臟是人體極少數
            <strong>兼具外分泌部（胰液）與內分泌部（胰島素、升糖素）</strong>
            的複合器官！
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideEndocrineOverview: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="人體主要內分泌腺分佈總覽"
        subtitle="由頭至腹部縱深分佈，調控人體生長、代謝與恆定"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            border: `1px solid ${palette.border}`,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={endocrineSystemOverviewImg}
            alt="人體的內分泌系統分佈圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              七大核心內分泌腺體位置與主控機能
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 10,
              }}
            >
              {[
                {
                  gland: '腦垂腺 (頭部腦底)',
                  role: '內分泌總指揮，分泌生長激素及各類促激素。',
                  c: palette.violet,
                  bg: palette.violetLight,
                },
                {
                  gland: '甲狀腺 (頸部氣管前)',
                  role: '調節全身細胞氧化代謝、產熱與神經發育。',
                  c: palette.amber,
                  bg: palette.amberLight,
                },
                {
                  gland: '副甲狀腺 (甲狀腺後)',
                  role: '分泌副甲狀腺素，專一調節血液中鈣離子濃度。',
                  c: palette.cyan,
                  bg: palette.cyanLight,
                },
                {
                  gland: '腎上腺 (腎臟上方)',
                  role: '分泌腎上腺素，引發應急戰鬥或逃跑生理反應。',
                  c: palette.rose,
                  bg: palette.roseLight,
                },
                {
                  gland: '胰島 (散佈胰臟內)',
                  role: '分泌胰島素（降糖）與升糖素（升糖）抗衡恆定。',
                  c: palette.indigo,
                  bg: palette.indigoLight,
                },
                {
                  gland: '性腺 (卵巢 / 睪丸)',
                  role: '分泌雌/雄性激素，促進生殖細胞成熟與第二性徵。',
                  c: palette.emerald,
                  bg: palette.emeraldLight,
                },
              ].map((g) => (
                <div
                  key={g.gland}
                  style={{
                    background: g.bg,
                    padding: '10px 14px',
                    borderRadius: 8,
                    fontSize: 20,
                    lineHeight: 1.45,
                  }}
                >
                  <strong style={{ color: g.c }}>{g.gland}</strong>
                  <div style={{ color: palette.text, marginTop: 4 }}>{g.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              border: `1px solid ${palette.border}`,
              padding: '14px 20px',
              fontSize: 20,
              color: palette.muted,
              lineHeight: 1.55,
            }}
          >
            💡 記憶心法：內分泌腺遍佈全身，但藉由<strong>綿密的血液微血管網</strong>
            連結彼此，形成高度精準的化學訊號通訊網路。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlidePituitaryGland: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="內分泌總司令：腦垂腺 (Pituitary Gland)"
        subtitle="分泌生長激素主導發育，釋放多種促激素指揮周圍腺體"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.violetBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.violet,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                解剖與職能
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                內分泌系統的「總指揮」
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>解剖位置：</strong>位於大腦下方蝶骨鞍內，上方直接與
                <strong>下視丘</strong>相連，受神經系統直接調控。
              </li>
              <li>
                <strong>生長激素 (GH)：</strong>直接促進<strong>骨骼與骨骼肌</strong>
                生長發育、加速蛋白質合成。
              </li>
              <li>
                <strong>多種促激素：</strong>分泌
                <strong>促甲狀腺素、促腎上腺皮質素、促性腺素</strong>
                ，能刺激並調節甲狀腺、腎上腺與性腺的分泌活性，故稱「總指揮」。
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.violetLight,
              border: `1.5px solid ${palette.violetBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.violet,
              lineHeight: 1.55,
            }}
          >
            <strong>🌟 樞紐關鍵：</strong>
            腦垂腺連接著神經系統（下視丘）與內分泌系統，是兩大調節體系的重要溝通橋樑。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              生長激素分泌異常疾病精析
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  background: palette.roseLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.roseBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose }}>
                  ① 巨人症 (Gigantism)
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  <strong>幼年發育期分泌過多</strong>，長骨骨骺尚未癒合，導致身材異常高大（可超過
                  200 公分以上）。
                </p>
              </div>

              <div
                style={{
                  background: palette.indigoLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.indigoBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo }}>
                  ② 侏儒症 (Dwarfism)
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  <strong>幼年發育期分泌不足</strong>，身材極度矮小，骨骼發育受阻，
                  <strong>但智力發育通常正常</strong>（此點與甲狀腺不足的呆小症截然不同！）。
                </p>
              </div>

              <div
                style={{
                  background: palette.amberLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.amberBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber }}>
                  ③ 肢端肥大症 (Acromegaly)
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  <strong>成年後分泌過多</strong>，此時長骨已閉合無法再增高，轉而引發
                  <strong>下顎、鼻樑、手骨、腳骨異常粗大肥厚</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideThyroidGland: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="代謝與產熱引擎：甲狀腺 (Thyroid Gland)"
        subtitle="甲狀腺素調節細胞呼吸氧化、維持體溫與神經發育"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.amberBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.amber,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                構造與激素
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                甲狀腺素 (Thyroxine)
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>解剖位置：</strong>位於喉部下方、氣管兩側，狀如展翅的蝴蝶。
              </li>
              <li>
                <strong>原料元素：</strong>合成需要微量元素<strong>碘 (Iodine)</strong>。
              </li>
              <li>
                <strong>生理功能：</strong>
                促進全身細胞<strong>呼吸作用代謝速率</strong>
                ，加速醣類分解產熱以維持體溫；在幼兒期亦主導<strong>骨骼與大腦神經發育</strong>。
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              border: `1px solid ${palette.border}`,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.6,
            }}
          >
            <strong>🍲 飲食健康：</strong>我國食鹽中常添加<strong>碘酸鉀</strong>
            ，確保全民攝取足夠的碘元素，預防地方性甲狀腺腫。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              甲狀腺功能異常病症辨析
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  background: palette.roseLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.roseBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose }}>
                  ① 呆小症 (Cretinism)
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  <strong>幼年期甲狀腺素分泌過少</strong>。特徵：
                  <strong>身材極矮小且智力發育嚴重遲緩</strong>（因腦部發育需要甲狀腺素）。
                </p>
              </div>

              <div
                style={{
                  background: palette.amberLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.amberBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber }}>
                  ② 甲狀腺機能亢進 (Hyperthyroidism)
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  <strong>分泌過多</strong>。特徵：細胞代謝過旺、體重消瘦、體溫偏高、心悸、手抖、
                  <strong>眼球突出</strong>、神經緊張失眠。
                </p>
              </div>

              <div
                style={{
                  background: palette.cyanLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.cyanBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan }}>
                  ③ 地方性甲狀腺腫（大脖子病）
                </div>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  飲食<strong>長期缺乏碘元素</strong>，無法合成甲狀腺素，促甲狀腺素過度刺激造成
                  <strong>甲狀腺代償性腫大</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideParathyroidGlands: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="血鈣調節衛士：副甲狀腺 (Parathyroid)"
        subtitle="分泌副甲狀腺素升高血鈣，骨骼、腎臟與腸道協同調控"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.cyanBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.cyan,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                位置與激素
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                副甲狀腺素 (PTH)
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>解剖位置：</strong>共有 <strong>4 顆微小腺體</strong>
                ，貼附在甲狀腺背面左右兩葉。
              </li>
              <li>
                <strong>核心功能：</strong>
                <strong>提高血液中的鈣離子 (Ca²⁺) 濃度</strong>。
              </li>
              <li>
                <strong>三大調控機制：</strong>
                <ol style={{ margin: '6px 0 0', paddingLeft: 20 }}>
                  <li>
                    促進<strong>骨骼</strong>釋出鈣質進入血液（蝕骨作用）。
                  </li>
                  <li>
                    促進<strong>腎臟</strong>減少尿鈣排出，增加鈣質再吸收。
                  </li>
                  <li>
                    活化維生素 D，促進<strong>小腸</strong>吸收食物中的鈣。
                  </li>
                </ol>
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.cyanLight,
              border: `1.5px solid ${palette.cyanBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.cyan,
              lineHeight: 1.55,
            }}
          >
            <strong>💡 鈣離子的生理角色：</strong>
            血鈣不僅構成骨骼牙齒，更維持<strong>肌肉正常收縮與神經訊號傳導</strong>
            ，其濃度必須受到極嚴格的恆定保護。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              副甲狀腺素分泌異常症狀
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div
                style={{
                  background: palette.roseLight,
                  padding: '16px 18px',
                  borderRadius: 10,
                  border: `1px solid ${palette.roseBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose }}>
                  ▲ 分泌過多（高血鈣）
                </div>
                <p
                  style={{ margin: '8px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.55 }}
                >
                  骨骼中的鈣質被大量抽取釋入血液，導致<strong>骨質疏鬆、骨骼脆弱易變形骨折</strong>
                  ；血液中高濃度的鈣質在腎臟沉積，容易引發<strong>腎結石</strong>。
                </p>
              </div>

              <div
                style={{
                  background: palette.amberLight,
                  padding: '16px 18px',
                  borderRadius: 10,
                  border: `1px solid ${palette.amberBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber }}>
                  ▼ 分泌不足（低血鈣）
                </div>
                <p
                  style={{ margin: '8px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.55 }}
                >
                  血液中鈣濃度過低，會造成神經與肌肉過度異常興奮，引起
                  <strong>肌肉抽搐、手足痙攣、抽筋</strong>，嚴重時呼吸肌痙攣可能窒息致命。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlidePancreasAndIslets: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="胰臟與胰島的雙重角色"
        subtitle="外分泌胰液助消化，內分泌胰島素與升糖素掌血糖"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '52% 48%',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            border: `1px solid ${palette.border}`,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={pancreasIsletsStructureImg}
            alt="胰臟和胰島的構造示意圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.blueLight,
                  color: palette.blue,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                外分泌部
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                胰腺泡與胰管（消化腺）
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.55 }}>
              大部分胰臟組織為外分泌腺，分泌含有多種消化酵素的<strong>胰液</strong>
              ，匯入胰管注入十二指腸分解醣、脂、蛋白質。
            </p>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.emeraldLight,
                  color: palette.emerald,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                內分泌部
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                胰島 (Islets of Langerhans)
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.55 }}>
              散佈於胰臟內如島嶼般的細胞群，微血管網極為緻密，分泌激素直接滲入血液運送：
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4 }}>
              <div
                style={{
                  background: palette.emeraldLight,
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: `1px solid ${palette.emeraldBorder}`,
                  fontSize: 20,
                }}
              >
                <strong style={{ color: palette.emerald }}>胰島素 (Insulin)：</strong>
                <div style={{ color: palette.text, marginTop: 4 }}>
                  促使細胞利用葡萄糖、合成肝糖，<strong>降低血糖</strong>。
                </div>
              </div>

              <div
                style={{
                  background: palette.amberLight,
                  padding: '10px 14px',
                  borderRadius: 8,
                  border: `1px solid ${palette.amberBorder}`,
                  fontSize: 20,
                }}
              >
                <strong style={{ color: palette.amber }}>升糖素 (Glucagon)：</strong>
                <div style={{ color: palette.text, marginTop: 4 }}>
                  促使肝臟肝糖分解釋出葡萄糖，<strong>提高血糖</strong>。
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.indigoLight,
              border: `1.5px solid ${palette.indigoBorder}`,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 20,
              color: palette.indigo,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            ✓ 會考重點：胰島素與升糖素互為<strong>拮抗作用 (Antagonism)</strong>
            ，彼此平衡維持血液中葡萄糖濃度的絕對恆定。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideBloodGlucoseHomeostasis: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="血糖恆定的動態回饋機制"
        subtitle="進食與飢餓交替波動，胰島素與升糖素雙向維持平衡"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.emeraldBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.emerald,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              情況 A：飯後飽食
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              血糖濃度升高 ➔ 降糖機制啟動
            </h3>
          </div>
          <div
            style={{
              background: palette.surfaceSubtle,
              padding: '14px 18px',
              borderRadius: 10,
              fontSize: 20,
              lineHeight: 1.65,
              color: palette.text,
            }}
          >
            <div>① 消化吸收後，血液葡萄糖濃度上升（超過正常值）。</div>
            <div>
              ② 刺激胰島細胞大量分泌<strong>胰島素 (Insulin)</strong>。
            </div>
            <div>
              ③ <strong>促進全身細胞</strong>加速攝取並氧化葡萄糖產生能量。
            </div>
            <div>
              ④ <strong>促進肝臟與骨骼肌</strong>將多餘的葡萄糖轉化為<strong>肝糖</strong>儲存。
            </div>
            <div>⑤ 促使過剩葡萄糖合成脂肪儲存。</div>
            <div style={{ marginTop: 6, fontWeight: 700, color: palette.emerald }}>
              ➔ 最終效果：血糖順利下降，平穩恢復至正常標準值（約 70~110 mg/dL）。
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.amberBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.amber,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              情況 B：空腹或劇烈運動
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              血糖濃度下降 ➔ 升糖機制啟動
            </h3>
          </div>
          <div
            style={{
              background: palette.surfaceSubtle,
              padding: '14px 18px',
              borderRadius: 10,
              fontSize: 20,
              lineHeight: 1.65,
              color: palette.text,
            }}
          >
            <div>① 長時間未進食或劇烈運動大量消耗葡萄糖，血糖偏低。</div>
            <div>
              ② 刺激胰島細胞分泌<strong>升糖素 (Glucagon)</strong>。
            </div>
            <div>
              ③ <strong>促使肝臟中的肝糖分解</strong>為葡萄糖，大量釋出進入血液。
            </div>
            <div>
              ④ 緊張運動時，<strong>腎上腺素</strong>亦同步分泌，強力加速肝糖分解升糖。
            </div>
            <div style={{ marginTop: 16, fontWeight: 700, color: palette.amber }}>
              ➔ 最終效果：血糖重新回升，保障大腦中樞神經細胞獲得足夠葡萄糖能量！
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideAdrenalGlands: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="應急警報器：腎上腺 (Adrenal Glands)"
        subtitle="腎上腺素瞬間激發「戰鬥或逃跑」應急生理狀態"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.roseBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.rose,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                解剖與分泌
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                腎上腺素 (Epinephrine / Adrenaline)
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>解剖位置：</strong>位於左右兩側腎臟的頂端，狀似小帽子。
              </li>
              <li>
                <strong>分泌時機：</strong>當個體面臨
                <strong>恐懼、驚嚇、憤怒、劇烈運動或緊急危難</strong>
                時，神經系統直接刺激腎上腺迅速釋放。
              </li>
              <li>
                <strong>雙重調控特質：</strong>
                腎上腺素的釋放直接受交感神經纖維支配，是<strong>神經與內分泌無縫接軌</strong>
                的典型典範。
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.roseLight,
              border: `1.5px solid ${palette.roseBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.rose,
              lineHeight: 1.55,
            }}
          >
            <strong>🎯 演化意義：</strong>
            迅速調動體內所有儲備能源與氧氣，為生死存亡的「戰鬥或逃跑 (Fight or
            Flight)」提供瞬間爆發力。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              應急時身體各大系統的劇烈變化
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.rose }}>循環系統：</strong>
                心跳加速、心肌收縮力增強、血壓顯著升高，冠狀動脈擴張。
              </div>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.indigo }}>呼吸系統：</strong>
                支氣管平滑肌舒張、氣道擴大，呼吸加深加快以攝取更多氧氣。
              </div>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.amber }}>代謝系統：</strong>
                促進肝糖迅速分解為葡萄糖，使血糖濃度飆升供骨骼肌爆發運動。
              </div>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '12px 16px',
                  borderRadius: 8,
                  fontSize: 20,
                  lineHeight: 1.5,
                }}
              >
                <strong style={{ color: palette.cyan }}>血液重新分配：</strong>
                骨骼肌、心臟、大腦血流大幅增加；消化道血管收縮，腸胃蠕動減緩受抑。
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideGonadsAndReproduction: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="生命的延續與成熟：性腺 (Gonads)"
        subtitle="兼具外分泌產生配子與內分泌激發第二性徵雙重使命"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.blueBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.blue,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              男性性腺
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              睪丸 (Testes) 與雄性激素
            </h3>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 24,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.6,
            }}
          >
            <li>
              <strong>外分泌功能：</strong>曲細精管內進行減數分裂，持續產出<strong>精子</strong>。
            </li>
            <li>
              <strong>內分泌功能：</strong>分泌以<strong>睪固酮 (Testosterone)</strong>
              為主的雄性激素。
            </li>
            <li>
              <strong>激發男性第二性徵：</strong>
              進入青春期後，刺激長出鬍鬚、陰毛、體毛發達；喉結突出、聲帶增厚、聲音轉為低沉；骨骼粗壯、肩膀變寬、骨骼肌大幅增長；促進生殖器官發育成熟。
            </li>
          </ul>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.roseBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.rose,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              女性性腺
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              卵巢 (Ovaries) 與雌性激素
            </h3>
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 24,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.6,
            }}
          >
            <li>
              <strong>外分泌功能：</strong>濾泡發育週期性排卵，產生<strong>卵細胞</strong>。
            </li>
            <li>
              <strong>內分泌功能：</strong>分泌<strong>動情素 (Estrogen)</strong> 與
              <strong>黃體素 (Progesterone)</strong>。
            </li>
            <li>
              <strong>激發女性第二性徵：</strong>
              進入青春期後，刺激乳房發育、骨盆腔變寬以利分娩；皮下脂肪增厚、身材圓潤；音調保持較高；出現陰毛與腋毛。
            </li>
            <li>
              <strong>週期性月經與受孕：</strong>
              調控子宮內膜週期性增厚與脫落（月經），為受精卵著床及胚胎發育奠定環境。
            </li>
          </ul>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideNegativeFeedback: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="體內恆定的核心法則：負回饋調節"
        subtitle="最終產物反向抑制前端分泌，維持動態精密微量平衡"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.indigoBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  background: palette.indigo,
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                調節原理
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                什麼是負回饋 (Negative Feedback)？
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              當系統下游產物濃度達到標準或過高時，該產物會<strong>回頭抑制上游中樞</strong>
              的促進活性，使其停止分泌；當產物濃度不足時，抑制解除，上游重新啟動生產。
            </p>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '14px 18px',
                borderRadius: 10,
                fontSize: 20,
                color: palette.muted,
                lineHeight: 1.5,
              }}
            >
              🌡️
              生活比喻：就像冷氣機的恆溫控制器，室溫達到設定溫度冷氣壓縮機便停止；室溫上升壓縮機又重新運轉。
            </div>
          </div>

          <div
            style={{
              background: palette.emeraldLight,
              border: `1.5px solid ${palette.emeraldBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.emerald,
              lineHeight: 1.55,
            }}
          >
            <strong>🎯 恆定目標：</strong>
            使人體內各種化學激素始終被約束在「微量而足夠」的最適生理範圍內，不致過多中毒或過少功能衰退。
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              經典實例：甲狀腺素的分級回饋軸線
            </h3>
            <div
              style={{
                background: palette.indigoLight,
                padding: '16px 18px',
                borderRadius: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <div>
                <strong>① 下視丘發號施令：</strong>分泌釋放激素刺激腦垂腺。
              </div>
              <div>
                <strong>② 腦垂腺分泌促激素：</strong>分泌<strong>促甲狀腺素 (TSH)</strong>
                進入血液循環。
              </div>
              <div>
                <strong>③ 甲狀腺產出激素：</strong>受到 TSH 刺激，甲狀腺大量合成並分泌
                <strong>甲狀腺素</strong>。
              </div>
              <div
                style={{
                  borderTop: `1px solid ${palette.indigoBorder}`,
                  paddingTop: 8,
                  color: palette.rose,
                  fontWeight: 700,
                }}
              >
                ④ 負回饋煞車：血液中甲狀腺素濃度升高後，直接反向抑制下視丘與腦垂腺，停止分泌
                TSH，防止甲狀腺素氾濫！
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideAnimalPlantRegulation: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="調節機制的對比：短時間 vs 長時間反應"
        subtitle="動物的神經與內分泌協同 vs 植物的激素向光性調節"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
          gap: 28,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            border: `1px solid ${palette.border}`,
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={hormoneVsNerveRegulationImg}
            alt="動物植物短時間與長時間反應比較圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.indigoLight,
                  color: palette.indigo,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                動物調節雙軌制
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                快短準的神經 vs 慢長廣的內分泌
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.55 }}>
              動物體內同時擁有<strong>神經系統（電訊號、毫秒級避險）</strong>與
              <strong>內分泌系統（血液化學訊號、持續性生長發育代謝）</strong>，兩者緊密交織互補。
            </p>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.emeraldLight,
                  color: palette.emerald,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                植物的感應本質
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                無神經系統，全賴植物激素調控
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>植物沒有神經系統：</strong>
                植物無法進行神經衝動傳導，其生長與感應全靠<strong>植物激素（如生長素）</strong>
                在體內緩慢運送擴散。
              </li>
              <li>
                <strong>莖的向光性機制：</strong>
                單側光照射下，莖尖合成的生長素移向<strong>背光側</strong>，使背光側生長素濃度高、
                <strong>細胞生長延長較快</strong>，因而向著光源方向彎曲生長！
              </li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.amberLight,
              border: `1.5px solid ${palette.amberBorder}`,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 20,
              color: palette.amber,
              lineHeight: 1.5,
            }}
          >
            ★ 概念整合：動物面對刺激能迅速位移逃跑；植物無法位移，透過激素生長調節改變姿態適應環境。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideEndocrineMatrix: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="內分泌腺體大閱兵與功能失調對決總表"
        subtitle="會考高頻腺體、分泌激素與異常病症全覽矩陣"
      />
      <div
        style={{
          background: palette.surface,
          borderRadius: 14,
          border: `1px solid ${palette.border}`,
          overflow: 'hidden',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '160px 180px 1fr 1fr',
            background: palette.surfaceSubtle,
            padding: '14px 20px',
            borderBottom: `1.5px solid ${palette.border}`,
            fontWeight: 800,
            fontSize: 20,
            color: palette.text,
          }}
        >
          <span>內分泌腺</span>
          <span>分泌主要激素</span>
          <span>正常生理功能</span>
          <span style={{ color: palette.rose }}>異常引發之病症</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {[
            {
              gland: '腦垂腺',
              hormone: '生長激素 (GH)',
              func: '刺激骨骼與骨骼肌發育、蛋白質合成',
              disease: '幼年過多：巨人症；幼年不足：侏儒症；成年過多：肢端肥大症',
            },
            {
              gland: '甲狀腺',
              hormone: '甲狀腺素 (含碘)',
              func: '促進細胞氧化呼吸代謝、產熱、幼兒神經發育',
              disease: '幼年不足：呆小症；過多：甲狀腺機能亢進；缺碘：大脖子病',
            },
            {
              gland: '副甲狀腺',
              hormone: '副甲狀腺素 (PTH)',
              func: '提升血液鈣離子濃度、促進骨鈣釋出',
              disease: '過多：骨質疏鬆、易骨折、腎結石；不足：血鈣低、肌肉抽搐抽筋',
            },
            {
              gland: '胰島 (胰臟)',
              hormone: '胰島素 / 升糖素',
              func: '胰島素降血糖（合成肝糖）；升糖素升血糖（分解肝糖）',
              disease: '胰島素不足：糖尿病（三多一少）；升糖素異常：低血糖昏迷',
            },
            {
              gland: '腎上腺',
              hormone: '腎上腺素',
              func: '應急反應：心跳血壓升、呼吸快、肝糖分解血糖飆升',
              disease: '長期過度分泌造成慢性高血壓、心血管與代謝負擔',
            },
            {
              gland: '性腺 (睪丸/卵巢)',
              hormone: '雄性 / 雌性激素',
              func: '刺激第二性徵發育成熟、維持生殖機能與週期',
              disease: '青春期分泌遲滯導致第二性徵發育不全或生殖不孕',
            },
          ].map((row, idx) => (
            <div
              key={row.gland}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 180px 1fr 1fr',
                padding: '12px 20px',
                borderBottom: `1px solid ${palette.border}`,
                background: idx % 2 === 1 ? palette.surfaceSubtle : '#ffffff',
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.indigo }}>{row.gland}</strong>
              <span style={{ color: palette.text, fontWeight: 600 }}>{row.hormone}</span>
              <span style={{ color: palette.text }}>{row.func}</span>
              <span style={{ color: palette.rose, fontWeight: 600 }}>{row.disease}</span>
            </div>
          ))}
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideExamPitfalls: Page = () => {
  return (
    <div style={fill}>
      <PageHeader title="會考陷阱與高頻考點精析" subtitle="歷屆試題四大高頻失分地雷點與概念辨析" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.indigoBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.indigo,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              陷阱 1
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              侏儒症 vs 呆小症之鑑別
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為身材矮小的內分泌疾病都一樣。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.indigo,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>
            <strong>侏儒症</strong>是幼年<strong>腦垂腺生長激素</strong>
            不足，<strong>智力發育正常</strong>；而<strong>呆小症</strong>是幼年
            <strong>甲狀腺素</strong>分泌缺乏，<strong>智力與骨骼發育均嚴重落後遲緩</strong>！
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.emeraldBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.emerald,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              陷阱 2
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              血糖調節的「唯一降糖」
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為體內有多種激素可以幫忙降低血糖。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.emerald,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>人體內<strong>唯一能降低血糖的激素只有「胰島素」</strong>
            ！而能提升血糖的激素有多種（升糖素、腎上腺素等），因此胰島素受損便無可替代，直接引發糖尿病。
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.roseBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.rose,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              陷阱 3
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              胰臟的「雙重身份」辨析
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>誤將胰島素歸類為由胰管運送的消化液。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.rose,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>胰液是<strong>外分泌</strong>（經胰管流入十二指腸）；胰島素是
            <strong>內分泌</strong>（由微血管吸收入血流至全身），兩者途徑不可混為一談！
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.amberBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.amber,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              陷阱 4
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              激素運送與標的受體辨識
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>誤以為激素只會流向特定器官。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.amber,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>血液循環無孔不入，激素<strong>隨血液流經全身所有細胞</strong>
            ，但只有具有<strong>專屬受體 (Receptor)</strong>
            的標的細胞才能辨識並產生生理反應！
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideSummary: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="人體內分泌系統：滿分衝刺四大速記心法"
        subtitle="核心概念結構化整合，會考考點秒速回顧"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.amberLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.amberBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.amber }}>心法一</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            七大腺體職能訣
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.amber,
              textAlign: 'center',
            }}
          >
            腦垂總指揮 · 甲狀管代謝
            <br />
            副甲提血鈣 · 腎上備應急
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.55,
            }}
          >
            <li>腦垂腺：GH 生長與促激素。</li>
            <li>甲狀腺：甲狀腺素調控代謝。</li>
            <li>副甲狀腺：提升血鈣釋骨鈣。</li>
            <li>腎上腺：戰鬥逃跑心跳升。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.indigoLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.indigoBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.indigo }}>心法二</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            血糖恆定升降口訣
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.indigo,
              textAlign: 'center',
            }}
          >
            飯後胰島素降糖存肝糖
            <br />
            飢餓升糖素腎上提血糖
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.55,
            }}
          >
            <li>胰島素唯一降糖防糖尿病。</li>
            <li>升糖素分解肝糖救急。</li>
            <li>腎上腺素助攻飆升糖。</li>
            <li>拮抗作用動態平衡。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.roseBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.rose }}>心法三</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            異常病症辨識訣
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.rose,
              textAlign: 'center',
            }}
          >
            侏儒智力好 · 呆小智力差
            <br />
            甲亢眼突瘦 · 副甲抽搐抽
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.55,
            }}
          >
            <li>侏儒症：幼年 GH 少智力優。</li>
            <li>呆小症：幼年甲狀腺少智力差。</li>
            <li>巨人症：幼年 GH 過盛。</li>
            <li>副甲過少低血鈣抽筋。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.emeraldBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.emerald }}>心法四</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            內分泌特性金箴
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.emerald,
              textAlign: 'center',
            }}
          >
            微量高效血液運
            <br />
            專一靶受負回饋
          </div>
          <ul
            style={{
              margin: 0,
              paddingLeft: 20,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.55,
            }}
          >
            <li>無導管直接進入微血管。</li>
            <li>血液長途循環流動。</li>
            <li>僅具受體靶細胞起作用。</li>
            <li>負回饋調節維護恆定。</li>
          </ul>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export const notes: (string | undefined)[] = [
  '各位同學大家好，今天我們探討人體的第二大調控系統——內分泌系統。它以血液為通道，靠微量的化學荷爾蒙默默守護體內各項恆定。',
  '內分泌腺與外分泌腺的根本差異在於導管。內分泌腺無導管，激素直接進入微血管，隨血液循環運送至全身標的細胞。',
  '從上到下盤點七大腺體：腦垂腺、甲狀腺、副甲狀腺、腎上腺、胰島以及性腺，各自職司重要的生理生長與代謝調節。',
  '腦垂腺是內分泌總司令。生長激素主導骨骼成長，分泌過多成巨人症，過少成侏儒症，注意侏儒症智力完全正常。',
  '甲狀腺素掌管全身代謝與產熱，幼年缺乏會導致呆小症（智力受損），成年過多則導致甲狀腺機能亢進。碘是合成關鍵。',
  '副甲狀腺分泌副甲狀腺素以提升血鈣濃度。分泌過多骨質疏鬆易骨折，過少血鈣過低導致肌肉強直抽搐。',
  '胰臟是兼具外分泌胰液與內分泌胰島的器官。胰島素負責降血糖，升糖素負責升血糖，維持精準的動態平衡。',
  '血糖恆定機制：飯後血糖高刺激胰島素合成肝糖儲存；飢餓或運動血糖低刺激升糖素分解肝糖回補。',
  '腎上腺素在遇險緊張時由交感神經刺激爆發分泌，使心跳加快、血壓升高、呼吸加深、血糖飆升，啟動戰鬥或逃跑狀態。',
  '性腺包括男性睪丸（分泌睪固酮）與女性卵巢（分泌動情素與黃體素），主導生殖細胞生成與第二性徵發育。',
  '負回饋調節如同冷氣機溫控，下游產物足夠時回頭抑制上游中樞，確保體內荷爾蒙不致過多或匱乏。',
  '動物調控雙軌制：神經短時間快短準，內分泌長時間慢長廣。植物無神經，全依賴生長素向光性等激素調節。',
  '綜合矩陣掌握六大腺體、激素、功能與失調疾病對照，這是會考最常出題的對比核心。',
  '會考四大陷阱：侏儒症與呆小症區別、唯一降糖激素為胰島素、胰臟雙重身份、激素隨血液運送但標的器官具專一受體。',
  '朗誦四大衝刺心法，整合腺體職能、血糖升降、異常病症與內分泌特性，徹底掌握單元精髓。',
];

export const meta: SlideMeta = {
  title: '人體內分泌系統',
  createdAt: '2026-10-05T03:50:00.000Z',
};

export default [
  Cover,
  SlideEndocrineConcept,
  SlideEndocrineOverview,
  SlidePituitaryGland,
  SlideThyroidGland,
  SlideParathyroidGlands,
  SlidePancreasAndIslets,
  SlideBloodGlucoseHomeostasis,
  SlideAdrenalGlands,
  SlideGonadsAndReproduction,
  SlideNegativeFeedback,
  SlideAnimalPlantRegulation,
  SlideEndocrineMatrix,
  SlideExamPitfalls,
  SlideSummary,
] satisfies Page[];
