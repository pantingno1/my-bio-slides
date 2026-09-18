import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import digestiveSystemImg from './assets/digestive-system.jpg';
import enzymeCharacteristicsImg from './assets/enzyme-characteristics.jpg';
import enzymeFactorsImg from './assets/enzyme-factors.jpg';
import intestinalVilliImg from './assets/intestinal-villi.jpg';
import labFoodTestsImg from './assets/lab-food-tests.jpg';
import labSalivaTemperatureImg from './assets/lab-saliva-temperature.jpg';
import labStarchSugarTestImg from './assets/lab-starch-sugar-test.jpg';
import metabolismImg from './assets/metabolism.jpg';
import photosynthesisProcessImg from './assets/photosynthesis-process.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#f8fafc',
    text: '#0f172a',
    accent: '#0d9488',
  },
  fonts: {
    display:
      'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
    body: 'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: {
    hero: 108,
    body: 26,
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
  bg: '#f8fafc',
  surface: '#ffffff',
  surfaceSubtle: '#f1f5f9',
  border: '#e2e8f0',
  text: '#0f172a',
  muted: '#64748b',
  faint: '#94a3b8',
  teal: '#0d9488',
  tealLight: '#f0fdfa',
  tealBorder: '#99f6e4',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  blue: '#0284c7',
  blueLight: '#f0f9ff',
  blueBorder: '#bae6fd',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  indigo: '#4f46e5',
  indigoLight: '#eef2ff',
  indigoBorder: '#c7d2fe',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
  purpleBorder: '#ddd6fe',
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
  category = '國中自然科學 · 生物（一上）單元 3',
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
        padding: '4px 14px',
        borderRadius: 999,
        background: palette.tealLight,
        border: `1px solid ${palette.tealBorder}`,
        color: palette.teal,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 20 }}>●</span>
      <span>{category}</span>
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: '50px',
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
      <div style={{ fontSize: '26px', color: palette.muted, marginTop: 6, lineHeight: 1.3 }}>
        {subtitle}
      </div>
    )}
  </div>
);

const PageFooter = ({ tip }: { tip?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: `1px solid ${palette.border}`,
        fontSize: 21,
        color: palette.faint,
        flexShrink: 0,
      }}
    >
      <span>{tip ? `💡 重點提示：${tip}` : '國中自然科學 · 酵素與代謝作用'}</span>
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

/* ────────────────────────── Page 1: 封面 ────────────────────────── */
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 100px',
      background: 'radial-gradient(circle at 18% 25%, #f0fdfa 0%, #f8fafc 55%, #eef2ff 100%)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        background: 'linear-gradient(90deg, #0d9488 0%, #0284c7 50%, #4f46e5 100%)',
      }}
    />

    <div
      style={{
        maxWidth: 1440,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 28,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          borderRadius: 999,
          background: palette.tealLight,
          border: `1px solid ${palette.tealBorder}`,
          color: palette.teal,
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: palette.teal,
          }}
        />
        國中自然科學 · 生物
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: '96px',
          fontWeight: 900,
          color: palette.text,
          margin: '0 0 12px 0',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
        }}
      >
        <span>生命運轉的生物催化劑</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 50%, #4f46e5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '96px',
          }}
        >
          酵素與代謝作用
        </span>
      </h1>

      <p
        style={{
          fontSize: '32px',
          color: palette.muted,
          margin: 0,
          maxWidth: 980,
          lineHeight: 1.6,
        }}
      >
        從細胞內的化學反應、酵素的受質專一性與影響因素，到人體消化分解與會考關鍵實驗全解析
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          width: '100%',
          marginTop: 20,
        }}
      >
        {[
          { icon: '🔄', tag: '代謝作用', desc: '同化合成 vs 異化分解' },
          { icon: '🔑', tag: '專一性', desc: '鎖與鑰匙的完美契合' },
          { icon: '🌡️', tag: '活性因素', desc: '溫度與 pH 值的精密調控' },
          { icon: '🧪', tag: '實驗探究', desc: '唾液澱粉酶與檢測試劑' },
        ].map((item) => (
          <div
            key={item.tag}
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 18,
              padding: '22px 24px',
              boxShadow: '0 10px 25px -5px rgba(15, 23, 42, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: '38px' }}>{item.icon}</div>
            <div
              style={{
                fontSize: '28px',
                fontWeight: 800,
                color: palette.teal,
              }}
            >
              {item.tag}
            </div>
            <div style={{ fontSize: '24px', color: palette.muted, lineHeight: 1.4 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ────────────────────────── Page 2: 代謝作用 ────────────────────────── */
const MetabolismPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="代謝作用——同化作用 vs 異化作用"
      subtitle="生物體內所有化學變化的總稱，維持生命的動態平衡"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.tealLight,
                color: palette.teal,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              核心定義
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              什麼是代謝作用？
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            生物體內進行的<strong>所有化學反應</strong>統稱為代謝作用。代謝過程必須有
            <strong>酵素</strong>參與催化，並伴隨<strong>能量的轉移或轉換</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.emeraldLight,
                color: palette.emerald,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              同化作用 (Anabolism)
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              小分子合成大分子（吸收能量）
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>特徵：</strong>由簡單小分子物質結合為複雜大分子，過程通常
            <strong>吸收並儲存能量</strong>。<br />• <strong>經典實例：</strong>植物進行
            <strong>光合作用</strong>（水+二氧化碳 ➔ 葡萄糖）、動物利用胺基酸合成肌肉蛋白質。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.rose}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.roseLight,
                color: palette.rose,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              異化作用 (Catabolism)
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              大分子分解為小分子（釋出能量）
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>特徵：</strong>將複雜大分子物質分解為簡單小分子，過程通常
            <strong>釋放能量</strong>以供生物活動。
            <br />• <strong>經典實例：</strong>細胞<strong>呼吸作用</strong>（葡萄糖氧化產生能量
            ATP）、人體<strong>消化作用</strong>（蛋白質分解為胺基酸）。
          </div>
        </div>

        <div
          style={{
            background: palette.tealLight,
            border: `1px solid ${palette.tealBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>💡</span>
          <div style={{ fontSize: 22, color: palette.teal, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>速記口訣：</strong>
            「合同吸、分離釋」——同化作用為合成且吸能；異化作用為分解且釋能！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={metabolismImg}
          alt="酵素的代謝作用掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="不論是同化作用還是異化作用，生物體內的化學反應都需要酵素參與催化！" />
  </div>
);

/* ────────────────────────── Page 3: 酵素的特性 ────────────────────────── */
const EnzymeCharacteristicsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="酵素的本質與三大關鍵特性"
      subtitle="生物體內的超級催化劑，具備高度精密的化學專一性"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.indigo}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.indigoLight,
                color: palette.indigo,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              本質組成
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              主要成分為蛋白質
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            酵素又稱<strong>酶</strong>，絕大多數由<strong>蛋白質</strong>
            折疊構成特定的立體構造。因為是蛋白質，酵素對外在環境（特別是高溫與強酸強鹼）非常敏感。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              特性一 · 專一性
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              鑰匙與鎖的專屬契合
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            一種酵素<strong>只能催化一種或一類特定的化學反應</strong>
            。就像一把鑰匙只能開一把鎖，例如唾液澱粉酶只能催化分解澱粉，無法分解蛋白質或脂質。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.blueLight,
                color: palette.blue,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              特性二 · 重複利用性
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              催化前後自身不消耗、質與量不變
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            反應過程中酵素暫時與受質結合，反應結束後產物脫離，酵素恢復原貌，
            <strong>可反覆重複催化新的受質</strong>，因此細胞內少量酵素即可應付大量代謝。
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>⚡</span>
          <div style={{ fontSize: 22, color: palette.emerald, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>催化原理：</strong>酵素透過<strong>降低反應所需的活化能</strong>
            來加快反應速度，但<strong>不提供能量</strong>，也不改變反應的最終生成物！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={enzymeCharacteristicsImg}
          alt="酵素的特性掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="酵素是生物催化劑：反應前後質與量不變、具專一性、能重複使用！" />
  </div>
);

/* ────────────────────────── Page 4: 影響酵素活性的因素 ────────────────────────── */
const EnzymeFactorsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="影響酵素活性的關鍵因素：溫度與酸鹼度"
      subtitle="立體蛋白質結構的環境敏感性——最適條件與不可逆變性"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              溫度 (Temperature)
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              最適溫度 vs 高溫變性（鐘形曲線）
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>低溫環境：</strong>酵素分子運動變慢，活性降低但
            <strong>結構未破壞（可逆）</strong>，回溫後活性可恢復（例如冰箱保鮮）。
            <br />• <strong>最適溫度：</strong>人體酵素多在 <strong>37°C</strong> 左右活性最高。
            <br />• <strong>高溫環境：</strong>超過 60°C 蛋白質發生
            <strong>變性 (Denaturation)</strong>，立體形狀永久破壞，
            <strong>失去活性且不可逆</strong>（煮沸後無法復原）。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.purple}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.purpleLight,
                color: palette.purple,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              酸鹼度 (pH 值)
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              各器官酵素有其專屬最適酸鹼值
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>胃蛋白酶：</strong>最適 pH 約 <strong>1.5 ~ 2（強酸）</strong>
            ，依賴胃酸活化與環境。
            <br />• <strong>唾液澱粉酶：</strong>最適 pH 約 <strong>7.0（中性）</strong>
            ，隨食團吞入胃中遇強酸便失去活性。
            <br />• <strong>胰蛋白酶與小腸酵素：</strong>最適 pH 約{' '}
            <strong>8.0 ~ 8.5（弱鹼性）</strong>，仰賴膽汁與胰液中和胃酸。
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>⚠️</span>
          <div style={{ fontSize: 22, color: palette.rose, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>常考陷阱：</strong>
            低溫「降低」活性但「未變性」（可逆）；過高溫度或過酸過鹼則導致蛋白質「變性破壞」（不可逆）！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={enzymeFactorsImg}
          alt="酵素活性與酸鹼性溫度的關係掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="不同器官的酵素最適 pH 大不相同；胃蛋白酶在強酸下最活躍，唾液與胰液則在中性至弱鹼！" />
  </div>
);

/* ────────────────────────── Page 5: 實驗 3-1 澱粉與糖分的測定 ────────────────────────── */
const StarchSugarTestPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究基礎：實驗 3-1 澱粉與糖分的測定"
      subtitle="認識檢測試劑與呈色反應，作為驗證酵素水解作用的標準工具"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              試劑一 · 碘液
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              專門檢驗「澱粉」的存在
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>初始原色：</strong>黃褐色。
            <br />• <strong>陽性反應（含澱粉）：</strong>瞬間轉變為<strong>藍黑色</strong>。<br />•{' '}
            <strong>操作注意：</strong>室溫下直接滴加即可反應，<strong>不需加熱</strong>
            ！若加熱反而會使藍黑色褪色。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.blueLight,
                color: palette.blue,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              試劑二 · 本氏液
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              檢驗「葡萄糖/麥芽糖（還原糖）」
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>初始原色：</strong>淡藍色。
            <br />• <strong>陽性反應（含糖）：</strong>依糖濃度由低至高呈現：
            <strong>綠 ➔ 黃 ➔ 橙 ➔ 紅色</strong>（沉澱）。
            <br />• <strong>操作注意：</strong>加入本氏液後<strong>必須隔水加熱</strong>
            才會顯色！不加熱則無反應。
          </div>
        </div>

        <div
          style={{
            background: palette.tealLight,
            border: `1px solid ${palette.tealBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>💡</span>
          <div style={{ fontSize: 22, color: palette.teal, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>速記口訣：</strong>
            「碘澱藍黑不加熱，本糖彩虹要隔水」——碘液檢驗澱粉不加熱；本氏液驗糖需隔水加熱！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={labStarchSugarTestImg}
          alt="實驗 3-1 澱粉與糖分的測定掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="本氏液測定還原糖時必須隔水加熱；顏色由綠到紅代表糖濃度逐漸增加！" />
  </div>
);

/* ────────────────────────── Page 6: 實驗 3-2 溫度對唾液澱粉酶的影響 ────────────────────────── */
const SalivaTemperatureLabPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗：實驗 3-2 溫度對唾液分解澱粉的影響"
      subtitle="以科學方法探究變因——操作變因、控制變因與應變變因嚴謹設計"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            🔬 科學探究變因設計
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>操作變因（唯一不同）：</strong>反應溫度（37°C 溫水、0°C 冰水、100°C 煮沸）。
            <br />• <strong>控制變因（保持相同）：</strong>
            澱粉液濃度與體積、唾液用量、反應作用時間。
            <br />• <strong>應變變因（實驗結果）：</strong>
            澱粉是否被分解（碘液呈色）及糖分是否生成（本氏液呈色）。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            📊 各組試管實驗結果對照
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>甲管（37°C 正常唾液）：</strong>酵素活力最強！澱粉被完全分解為麥芽糖 ➔{' '}
            <strong>碘液維持黃褐色（無澱粉）</strong>；<strong>本氏液呈橙/紅色（有糖）</strong>。
            <br />• <strong>乙管（100°C 煮沸唾液）：</strong>酵素高溫變性破壞！無法分解澱粉 ➔{' '}
            <strong>碘液變藍黑色（澱粉仍在）</strong>；<strong>本氏液維持藍色（無糖）</strong>。
            <br />• <strong>丙管（0°C 冰水唾液）：</strong>低溫抑制酵素分子運動 ➔
            澱粉分解極慢，若移回 37°C 溫水則可重新恢復催化！
            <br />• <strong>對照管（水代替唾液）：</strong>確認無唾液存在時，澱粉不會自行水解。
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            border: `1px solid ${palette.amberBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>🎯</span>
          <div style={{ fontSize: 22, color: palette.amber, fontWeight: 700, lineHeight: 1.45 }}>
            會考關鍵：甲管「碘液不變色、本氏液變色」代表酵素反應完全；乙管煮沸變性後不可逆！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={labSalivaTemperatureImg}
          alt="實驗 3-2 溫度對唾液分解澱粉的影響掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="唾液澱粉酶最適溫度約 37°C；煮沸會使酵素蛋白質變性，降溫後依然失去活性！" />
  </div>
);

/* ────────────────────────── Page 7: 食物測定與生活中的酵素 ────────────────────────── */
const FoodEnzymeAppsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="生活中的酵素應用與常見食物養分測定"
      subtitle="從廚房嫩精、加酶洗衣精到生技醫療，酵素與日常生活息息相關"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            🥣 日常食物養分測定實例
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>米飯、麵包、馬鈴薯：</strong>滴加碘液呈現藍黑色，含豐富澱粉。
            <br />• <strong>甘蔗汁、成熟香蕉、蘋果：</strong>
            加入本氏液隔水加熱呈黃/橙/紅色，含大量單醣與雙醣。
            <br />• <strong>洋蔥表皮：</strong>
            滴加碘液為染細胞核，洋蔥儲存的是糖分而非澱粉（不變藍黑）！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.indigo}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            🧺 生活中的酵素神奇應用
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>嫩精（鳳梨/木瓜酵素）：</strong>
            含蛋白酶，烹調前醃肉可分解肌肉纖維蛋白質，使肉質軟嫩。
            <br />• <strong>加酶洗衣粉：</strong>
            加入脂肪酶與蛋白酶，可在較低溫下高效分解汗漬與油污（不可用沸水洗滌！）。
            <br />• <strong>隱形眼鏡去蛋白片：</strong>利用蛋白酶去除鏡片表面沈積的淚液蛋白質。
            <br />• <strong>生質能源與發酵：</strong>酵母菌內的酵素將糖分發酵轉化為酒精與二氧化碳。
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>🍍</span>
          <div style={{ fontSize: 22, color: palette.emerald, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>生活小思考：</strong>
            吃新鮮鳳梨舌頭有「咬舌感」，是因為鳳梨蛋白酶在分解口腔黏膜蛋白質！煮熟的鳳梨則因酵素受熱變性而不再咬舌。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={labFoodTestsImg}
          alt="食物中所含澱粉與糖分的測定掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="加酶洗衣精與嫩精皆含特定蛋白酶或脂酶，切記水溫過高會使酵素變性失效！" />
  </div>
);

/* ────────────────────────── Page 8: 人體消化系統與消化酵素 ────────────────────────── */
const DigestiveSystemPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體消化系統與消化酵素全覽地圖"
      subtitle="從口腔到小腸的精密接力分解——消化道與消化腺之酵素分工"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
            1. 口腔（唾液腺 · 唾液）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.45 }}>
            含<strong>唾液澱粉酶</strong>，在近中性環境下將澱粉初步分解為較小分子的麥芽糖。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.purple}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
            2. 胃（胃腺 · 胃液）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.45 }}>
            含<strong>鹽酸</strong>（殺菌並營造強酸環境 pH 2）與<strong>胃蛋白酶</strong>
            ，初步將大分子蛋白質分解為多胜肽。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
            3. 肝臟與膽囊（膽汁）—— ⚠️ 大考必考焦點！
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.45 }}>
            <strong>肝臟分泌膽汁、儲存於膽囊。膽汁「完全不含消化酵素」！</strong>功能為
            <strong>乳化脂肪</strong>（物理消化：大油滴變微細油滴），以利脂酶接觸。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
            4. 胰臟（胰液）＆ 小腸（腸液）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.45 }}>
            • <strong>胰液（全能消化液）：</strong>
            含胰澱粉酶、胰蛋白酶、胰脂酶，呈弱鹼性注入十二指腸。
            <br />• <strong>腸液：</strong>含雙醣酶、腸胜肽酶，在小腸內完成三大養分的最終分解！
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 12,
            padding: '10px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 26 }}>⚠️</span>
          <div style={{ fontSize: 21, color: palette.rose, fontWeight: 700, lineHeight: 1.4 }}>
            膽汁由肝臟製造、膽囊儲存；膽汁不含任何酵素，切除膽囊者仍可消化脂肪但需減少油脂攝取！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={digestiveSystemImg}
          alt="人體的消化系統掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="胰液是人體最全能的消化液，能同時分解醣類、蛋白質與脂質三大營養素！" />
  </div>
);

/* ────────────────────────── Page 9: 養分分解終點與小腸吸收 ────────────────────────── */
const IntestinalVilliPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="養分消化的終點與小腸絨毛的吸收構造"
      subtitle="大分子被酵素完全水解為小分子，經由數百萬絨毛高效率吸收進入血液循環"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            🍬 三大營養素的酵素分解終點產物
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>醣類（澱粉）：</strong>經唾液/胰澱粉酶與腸雙醣酶 ➔ <strong>葡萄糖</strong>
            （可直接吸收）。
            <br />• <strong>蛋白質：</strong>經胃蛋白酶、胰蛋白酶與腸胜肽酶 ➔{' '}
            <strong>胺基酸</strong>。<br />• <strong>脂質（三酸甘油酯）：</strong>
            經膽汁乳化、胰脂酶催化 ➔ <strong>脂肪酸與甘油</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            🌱 小腸絨毛與微絨毛的特化適應
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>表面積極大化：</strong>小腸內壁有無數環狀皺襞，皺襞上有無數指狀
            <strong>絨毛 (Villi)</strong>，絨毛上皮細胞表面更有<strong>微絨毛</strong>
            ，將吸收表面積放大數百倍（展開約有網球場大！）。
            <br />• <strong>單層細胞薄壁：</strong>絨毛壁僅由一層上皮細胞構成，養分極易穿透。
            <br />• <strong>豐富管路：</strong>內部有密集的<strong>微血管網</strong>
            （吸收葡萄糖、胺基酸、水溶性養分）與<strong>乳糜管</strong>（吸收脂溶性養分）。
          </div>
        </div>

        <div
          style={{
            background: palette.indigoLight,
            border: `1px solid ${palette.indigoBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>💡</span>
          <div style={{ fontSize: 22, color: palette.indigo, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>大考觀念：</strong>
            食物在小腸完成所有的化學消化；大腸則不再分泌酵素，主要功能為吸收水分與形成糞便。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={intestinalVilliImg}
          alt="小腸內的絨毛掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="小腸是人體吸收養分的主要場所；微血管吸收水溶性養分，乳糜管吸收脂溶性養分！" />
  </div>
);

/* ────────────────────────── Page 10: 光合作用與酵素 ────────────────────────── */
const PhotosynthesisPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="植物體內的酵素同化合成：光合作用"
      subtitle="光反應裂解水分子釋出氧氣，碳反應在基質中藉酵素催化固定二氧化碳合成葡萄糖"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              第一階段 · 光反應
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              吸收光能分解水，釋放氧氣
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>場所：</strong>葉綠體囊狀膜（含葉綠素）。
            <br />• <strong>原料與產物：</strong>葉綠素吸收太陽光能，將<strong>水 (H₂O)</strong>{' '}
            裂解，釋放出<strong>氧氣 (O₂)</strong>，並產生供第二階段使用的能量物質。
            <strong>本階段主要由光能驅動</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span
              style={{
                background: palette.emeraldLight,
                color: palette.emerald,
                padding: '2px 10px',
                borderRadius: 6,
                fontWeight: 700,
                fontSize: 21,
              }}
            >
              第二階段 · 碳反應（暗反應）
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              酵素催化固定 CO₂ 合成葡萄糖
            </span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>場所：</strong>葉綠體基質。
            <br />• <strong>核心特點：</strong>不需光照直接驅動，但
            <strong>極度依賴多種酵素的催化作用</strong>！利用第一階段的能量，將
            <strong>二氧化碳 (CO₂)</strong> 還原固定合成<strong>葡萄糖 (C₆H₁₂O₆)</strong> 與水。
          </div>
        </div>

        <div
          style={{
            background: palette.tealLight,
            border: `1px solid ${palette.tealBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>🌿</span>
          <div style={{ fontSize: 22, color: palette.teal, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>會考連結：</strong>碳反應雖然不需要光，但因為依賴酵素催化，所以反應速率會深受
            <strong>環境溫度</strong>的顯著影響！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 14,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 765,
        }}
      >
        <ZoomableImage
          src={photosynthesisProcessImg}
          alt="光合作用的過程掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="光反應釋放的氧氣來自於『水』的分解，而非二氧化碳！碳反應則高度依賴酵素催化。" />
  </div>
);

/* ────────────────────────── Page 11: 酵素常見易錯陷阱 ────────────────────────── */
const MisconceptionsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考必避！酵素四大常考觀念與易錯陷阱"
      subtitle="釐清歷年基測與會考高頻失分點，掌握精準科學定義"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 22,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
      }}
    >
      {[
        {
          num: '01',
          trap: '膽汁裡面含有消化脂質的酵素？',
          correct: '❌ 絕對錯誤！膽汁完全不含任何酵素！',
          explain:
            '膽汁由肝臟製造、膽囊儲存，主要成分為膽鹽。膽汁的作用只是將大脂肪滴「乳化」成分散的微細脂肪滴（物理消化），並沒有切斷化學鍵。真正分解脂肪的是胰液中的胰脂酶！',
          color: palette.rose,
          light: palette.roseLight,
        },
        {
          num: '02',
          trap: '把食物放進冰箱，裡面的酵素就會被破壞死掉？',
          correct: '❌ 錯誤！低溫只是抑制活性，結構未被破壞！',
          explain:
            '低溫環境下分子運動緩慢，酵素活性大幅降低，但蛋白質立體構型完好（未變性）。當溫度回升至最適溫度時，酵素活性立刻恢復。只有高溫（超過 60°C）或極端酸鹼才會永久變性！',
          color: palette.amber,
          light: palette.amberLight,
        },
        {
          num: '03',
          trap: '酵素就像燃料一樣，會為化學反應提供能量？',
          correct: '❌ 錯誤！酵素不提供能量，也不改變能量差！',
          explain:
            '酵素是催化劑，它加快反應速度的唯一手段是「降低反應所需的活化能障壁」。反應物與生成物之間的能量差（放熱或吸能總值）完全不因酵素而改變，酵素本身也不會被消耗。',
          color: palette.blue,
          light: palette.blueLight,
        },
        {
          num: '04',
          trap: '胃酸的主要功能是直接消化蛋白質？',
          correct: '❌ 觀念偏差！胃酸本身不是酵素，主要功能為環境調控！',
          explain:
            '胃酸是強酸性鹽酸 (HCl)。胃酸的功能是：1. 殺死食物中的細菌；2. 提供強酸環境（pH 1.5~2）以活化胃蛋白酶。真正剪斷蛋白質化學鍵進行消化的是「胃蛋白酶」，而非胃酸本身！',
          color: palette.purple,
          light: palette.purpleLight,
        },
      ].map((item) => (
        <div
          key={item.num}
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '24px 26px',
            border: `1px solid ${palette.border}`,
            borderTop: `5px solid ${item.color}`,
            boxShadow: '0 6px 20px -3px rgba(15, 23, 42, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 900,
                color: item.color,
                background: item.light,
                padding: '3px 10px',
                borderRadius: 999,
              }}
            >
              陷阱 {item.num}
            </span>
            <span style={{ fontSize: '21px', color: palette.muted, fontWeight: 700 }}>
              {item.correct}
            </span>
          </div>

          <div style={{ fontSize: '26px', fontWeight: 800, color: palette.text, lineHeight: 1.3 }}>
            {item.trap}
          </div>

          <div
            style={{
              fontSize: '22px',
              color: palette.muted,
              lineHeight: 1.55,
              marginTop: 'auto',
            }}
          >
            {item.explain}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="考試看到『膽汁含酵素』或『低溫破壞酵素』直接劃叉！這是歷屆最經典考題陷阱！" />
  </div>
);

/* ────────────────────────── Page 12: 滿分速記與總結 ────────────────────────── */
const SummaryPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="滿分速記心法：酵素與代謝單元精華總整理"
      subtitle="四大黃金速記口訣，考前 3 分鐘快速回顧全單元知識架構"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 22,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
      }}
    >
      {[
        {
          tag: '口訣一',
          title: '代謝方向：合同吸、分離釋',
          items: [
            '同化作用：由小分子合成大分子，過程吸收並儲存能量（例：光合作用合成葡萄糖）。',
            '異化作用：由大分子分解為小分子，過程釋出能量供細胞使用（例：呼吸作用分解葡萄糖）。',
            '生物體內一切代謝作用皆仰賴酵素催化維持生命。',
          ],
          color: palette.teal,
          light: palette.tealLight,
        },
        {
          tag: '口訣二',
          title: '酵素特性：蛋催專一不消耗',
          items: [
            '主要成分是蛋白質，對溫度與 pH 極度敏感。',
            '催化劑角色：藉由降低活化能加速反應，本身不消耗、質與量不變，可重複使用。',
            '具高度受質專一性（一鎖一鑰），不提供反應能量，也不改變平衡終點。',
          ],
          color: palette.indigo,
          light: palette.indigoLight,
        },
        {
          tag: '口訣三',
          title: '試劑檢驗：碘澱藍黑、本糖隔水',
          items: [
            '碘液：檢驗澱粉，室溫滴加即刻反應（黃褐色 ➔ 藍黑色），加熱反而褪色。',
            '本氏液：檢驗還原糖，必須「隔水加熱」顯色（藍 ➔ 綠 ➔ 黃 ➔ 橙 ➔ 紅色沉澱）。',
            '唾液澱粉酶作用完全時：碘液呈黃褐（無澱粉），本氏液呈橙紅（有糖）。',
          ],
          color: palette.amber,
          light: palette.amberLight,
        },
        {
          tag: '口訣四',
          title: '消化分工：胃酸強、胰全能、膽無酶',
          items: [
            '胃蛋白酶在強酸（pH 2）下運作；唾液在中性；胰液與小腸在弱鹼性（pH 8）。',
            '胰液是全能消化液，可同時分解醣類、蛋白質與脂質。',
            '肝臟製造、膽囊儲存的「膽汁」不含酵素，純粹乳化脂肪；小腸絨毛為最終吸收主力！',
          ],
          color: palette.emerald,
          light: palette.emeraldLight,
        },
      ].map((card) => (
        <div
          key={card.tag}
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '24px 26px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${card.color}`,
            boxShadow: '0 6px 20px -3px rgba(15, 23, 42, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: card.light,
                color: card.color,
                padding: '3px 10px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              {card.tag}
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: palette.text }}>{card.title}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
            {card.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: 22,
                  color: palette.muted,
                  lineHeight: 1.55,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                }}
              >
                <span style={{ color: card.color, fontWeight: 800 }}>•</span>
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="掌握三大特性、兩大環境變因與消化吸收地圖，酵素與代謝單元輕鬆拿滿分！" />
  </div>
);

/* ────────────────────────── 演講者備忘稿 (Notes) ────────────────────────── */
export const notes: (string | undefined)[] = [
  '封面頁：引導學生進入國一上生物單元3，開宗明義點出酵素是生命化學反應的核心催化劑。',
  '代謝作用：重點在區分同化（合成、吸能）與異化（分解、釋能），請同學舉呼吸作用與光合作用為例。',
  '酵素特性：強調蛋白質本質、受質專一性（鎖與鑰匙）與重複利用性，點出降低活化能的物理意義。',
  '影響因素：說明溫度與pH曲線。強調低溫是抑制（可逆）、高溫是變性破壞（不可逆），並對比胃、唾液、胰液最適pH。',
  '實驗3-1：說明碘液與本氏液的呈色與操作細節。特別提醒本氏液需要隔水加熱，顏色由綠到紅代表糖濃度遞增。',
  '實驗3-2：帶領學生拆解操作變因、控制變因與應變變因。分析甲管（37度反應完全）與乙管（煮沸失活）的呈色差異。',
  '生活應用：連結生活情境，介紹加酶洗衣粉、嫩精與吃鳳梨咬舌頭的生物學機制。',
  '消化系統：盤點各消化器官與消化腺。強烈提醒會考第一大陷阱：膽汁不含酵素，只有乳化脂肪的物理消化！',
  '小腸絨毛：說明三大養分分解後的最終產物，以及小腸皺襞、絨毛、微絨毛如何將吸收表面積放大至網球場大。',
  '光合作用：說明光反應（水分解產生氧氣）與碳反應（利用酵素固定二氧化碳產生葡萄糖），點出碳反應易受溫度影響。',
  '常見陷阱：逐一破解4大歷屆會考高頻失分題，加深學生觀念防禦。',
  '總結頁：帶領全班齊讀4大黃金速記口訣，完成單元知識閉環。',
];

export const meta: SlideMeta = {
  title: '酵素與代謝作用',
  createdAt: '2026-09-18T00:08:28.062Z',
};

export default [
  Cover,
  MetabolismPage,
  EnzymeCharacteristicsPage,
  EnzymeFactorsPage,
  StarchSugarTestPage,
  SalivaTemperatureLabPage,
  FoodEnzymeAppsPage,
  DigestiveSystemPage,
  IntestinalVilliPage,
  PhotosynthesisPage,
  MisconceptionsPage,
  SummaryPage,
] satisfies Page[];
