import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import dissectingImg from './assets/dissecting-microscope.jpg';
import scaleImg from './assets/microscope-scale.jpg';
import stepsImg from './assets/microscope-steps.jpg';
import structureImg from './assets/microscope-structure.jpg';

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
  borderHover: '#cbd5e1',
  text: '#0f172a',
  muted: '#64748b',
  faint: '#94a3b8',
  teal: '#0d9488',
  tealLight: '#f0fdfa',
  tealBorder: '#99f6e4',
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
  padding: '38px 68px',
  boxSizing: 'border-box',
} as const;

const PageHeader = ({
  category = '國中自然科學 · 生物（一上）',
  title,
  subtitle,
}: {
  category?: string;
  title: string;
  subtitle?: string;
}) => (
  <div style={{ marginBottom: 28 }}>
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
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 10,
      }}
    >
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: palette.teal }} />
      {category}
    </div>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <h2
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 50,
          fontWeight: 800,
          color: palette.text,
          margin: 0,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <span style={{ fontSize: 28, color: palette.muted, fontWeight: 500 }}>{subtitle}</span>
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTop: `1px solid ${palette.border}`,
        paddingTop: 16,
        fontSize: 24,
        color: palette.muted,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontWeight: 700,
            color: palette.teal,
            background: palette.tealLight,
            padding: '3px 10px',
            borderRadius: 6,
          }}
        >
          重點掌握
        </span>
        <span>{tip || '配合國中生物課本單元 1-3 與 實驗 1-1'}</span>
      </div>
      <div style={{ fontVariantNumeric: 'tabular-nums', fontWeight: 600, color: palette.faint }}>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>
    </div>
  );
};

/* ────────────────────────── Page 1: 封面 ────────────────────────── */
const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '80px 120px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdfa 100%)',
    }}
  >
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1600 }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 12,
          padding: '8px 20px',
          borderRadius: 999,
          background: palette.tealLight,
          border: `1.5px solid ${palette.tealBorder}`,
          color: palette.teal,
          fontSize: '36px',
          fontWeight: 700,
          marginBottom: 36,
          width: 'fit-content',
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: palette.teal }} />
        國中自然科學 · 生物
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 96,
          fontWeight: 900,
          color: palette.text,
          margin: 0,
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
        }}
      >
        複式顯微鏡構造與操作指引
      </h1>

      <p
        style={{
          fontSize: 38,
          color: palette.muted,
          margin: '24px 0 54px 0',
          lineHeight: 1.5,
          maxWidth: 1280,
        }}
      >
        走進微觀世界 — 從光學構造認識、標準八步操作法，到成像特性解析與實驗疑難排除全攻略。
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: 24,
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ fontSize: 38, marginBottom: 8 }}>🔬</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: palette.text, marginBottom: 6 }}>
            微觀尺度與光學
          </div>
          <div style={{ fontSize: 24, color: palette.muted, lineHeight: 1.5 }}>
            放大 40X ~ 1000X，樣本須薄而透光
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: 24,
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ fontSize: 38, marginBottom: 8 }}>⚙️</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: palette.text, marginBottom: 6 }}>
            三大構造系統
          </div>
          <div style={{ fontSize: 24, color: palette.muted, lineHeight: 1.5 }}>
            光學放大、聚光照明與調焦載物機構
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: 24,
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ fontSize: 38, marginBottom: 8 }}>🎯</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: palette.text, marginBottom: 6 }}>
            標準操作流程
          </div>
          <div style={{ fontSize: 24, color: palette.muted, lineHeight: 1.5 }}>
            側面升臺防撞擊、反向調焦尋影像
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: 24,
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ fontSize: 38, marginBottom: 8 }}>🔄</div>
          <div style={{ fontSize: '32px', fontWeight: 700, color: palette.text, marginBottom: 6 }}>
            成像與同向移動
          </div>
          <div style={{ fontSize: 24, color: palette.muted, lineHeight: 1.5 }}>
            倒立放大虛像，像在何處玻片往哪推
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ────────────────────────── Page 2: 尺度與原理 ────────────────────────── */
const Scale: Page = () => (
  <div style={fill}>
    <PageHeader
      title="微觀世界的尺度：顯微鏡的觀察範圍"
      subtitle="肉眼、光學顯微鏡與電子顯微鏡的能力界限"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '740px 1fr', gap: 40, flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '24px 28px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.teal}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>🔬</span>
            <span style={{ fontSize: 30, fontWeight: 700, color: palette.text }}>
              複式光學顯微鏡的範圍
            </span>
          </div>
          <div style={{ fontSize: '30px', color: palette.muted, lineHeight: 1.6 }}>
            可解析範圍約在{' '}
            <strong style={{ color: palette.teal }}>0.2 微米（μm）至 1 毫米（mm）</strong>{' '}
            之間，放大倍率約為 40 倍至 1000
            倍。可清楚觀察動植物細胞、單細胞原生生物（如草履蟲、變形蟲）、葉綠體與大多數細菌。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '24px 28px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>💡</span>
            <span style={{ fontSize: 30, fontWeight: 700, color: palette.text }}>
              標本製作關鍵：薄而透光
            </span>
          </div>
          <div style={{ fontSize: '30px', color: palette.muted, lineHeight: 1.6 }}>
            複式顯微鏡採<strong>穿透式光路</strong>
            ，光線必須能直接穿透標本進入物鏡。因此觀察物體必須切成薄片或取單層細胞（如洋蔥表皮），過厚不透光的物體在視野中只會呈現一片漆黑。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '24px 28px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.indigo}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 32 }}>📏</span>
            <span style={{ fontSize: 30, fontWeight: 700, color: palette.text }}>
              尺度層級對比速記
            </span>
          </div>
          <div style={{ fontSize: '32px', color: palette.muted, lineHeight: 1.6 }}>
            • <strong>肉眼極限</strong>：約 0.1 mm（100 μm，如跳蚤、人體卵細胞）
            <br />• <strong>光學顯微鏡</strong>：細胞、大型胞器、細菌（病毒不可見！）
            <br />• <strong>電子顯微鏡</strong>：0.2 nm ~ 100 nm（可看見病毒、蛋白質分子與DNA結構）
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 16,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZoomableImage
          src={scaleImg}
          alt="顯微鏡的觀察範圍"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="光學顯微鏡以可見光為光源，極限受限於光波波長（約0.2微米），無法看見病毒！" />
  </div>
);

/* ────────────────────────── Page 3: 構造詳解 ────────────────────────── */
const Structure: Page = () => (
  <div style={fill}>
    <PageHeader
      title="機械與光學：複式顯微鏡構造解析"
      subtitle="光學放大、聚光照明與載物調焦三大系統"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 36,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
              fontSize: '24px',
            }}
          >
            <span
              style={{
                background: palette.tealLight,
                color: palette.teal,
                padding: '3px 10px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 21,
              }}
            >
              系統<span style={{ fontSize: '27px' }}>一</span>
            </span>
            <span style={{ fontSize: '27px', fontWeight: 700, color: palette.text }}>
              光學放大系統（目鏡與物鏡）
            </span>
          </div>
          <div style={{ fontSize: '36px', color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '25px' }}>
              <span style={{ fontSize: '30px' }}>•</span>
              <span style={{ fontSize: '30px' }}> </span>
            </span>
            <strong style={{ fontSize: '30px' }}>目鏡</strong>
            <span style={{ fontSize: '30px' }}>：無螺紋直接插於鏡筒，</span>
            <strong style={{ fontSize: '30px' }}>鏡身短者倍率大，鏡身長者倍率小</strong>
            <span style={{ fontSize: '30px' }}>。</span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>物鏡</strong>
            <span style={{ fontSize: '30px' }}>：螺紋旋於旋轉盤，</span>
            <strong style={{ fontSize: '26px' }}>
              <span style={{ fontWeight: '700', fontSize: '30px' }}>
                鏡身長者倍率大（高倍），鏡身短者倍率小（低
              </span>
              <span style={{ fontSize: '30px', fontWeight: '700' }}>倍）</span>
            </strong>
            <span style={{ fontSize: '30px' }}>。</span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>旋轉盤</strong>
            <span style={{ fontSize: '30px' }}>：轉動以切換不同倍率的物鏡。</span>
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
                padding: '3px 10px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 21,
              }}
            >
              系統二
            </span>
            <span style={{ fontSize: 26, fontWeight: 700, color: palette.text }}>
              調焦與載物系統（調焦輪與載物臺）
            </span>
          </div>
          <div style={{ fontSize: '34px', color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>載物臺與玻片夾</strong>
            <span style={{ fontSize: '30px' }}>：放置固定載玻片，中央圓孔供光線穿透。</span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>粗調節輪</strong>
            <span style={{ fontSize: '30px' }}>：使載物臺大幅度上下移動，</span>
            <strong style={{ fontSize: '30px' }}>僅限低倍鏡尋找初焦</strong>
            <span style={{ fontSize: '30px' }}>。</span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>細調節輪</strong>
            <span style={{ fontSize: '30px' }}>：使載物臺微幅移動，</span>
            <strong style={{ fontSize: '30px' }}>高倍鏡下專用微調清晰度</strong>
            <span style={{ fontSize: '30px' }}>。</span>
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
                padding: '3px 10px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 21,
              }}
            >
              系統三
            </span>
            <span style={{ fontSize: 26, fontWeight: 700, color: palette.text }}>
              聚光照明系統（光源與光圈）
            </span>
          </div>
          <div style={{ fontSize: '34px', color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '34px' }}>{'• '}</span>
            <strong style={{ fontSize: '34px' }}>光圈（遮光器）</strong>
            <span style={{ fontSize: '34px' }}>：盤狀圓孔，調節通過玻片標本的進光量大小。</span>
            <br />
            <span style={{ fontSize: '34px' }}>{'• '}</span>
            <strong style={{ fontSize: '34px' }}>反光鏡 / 光源</strong>
            <span style={{ fontSize: '34px' }}>：電燈光源；反光鏡中</span>
            <strong style={{ fontSize: '34px' }}>平面鏡適用強光，凹面鏡具聚光功能適用弱光</strong>
            <span style={{ fontSize: '34px' }}>。</span>
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
          <div style={{ fontSize: 21, color: palette.teal, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>速記口訣：</strong>
            「目短物長倍率大，目長物短倍率小」；高倍觀察時絕不可轉動粗調節輪！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 12,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 720,
          lineHeight: '1.25',
          fontSize: '20px',
        }}
      >
        <ZoomableImage
          src={structureImg}
          alt="複式顯微鏡構造掛圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: 12,
            objectPosition: '50% 50%',
          }}
        />
      </div>
    </div>

    <PageFooter tip="牢記物鏡與目鏡長度口訣：『目短物長倍率大，目長物短倍率小』！" />
  </div>
);

/* ────────────────────────── Page 4: 倍率與低高倍比較 ────────────────────────── */
const ComparisonRow = ({
  feature,
  low,
  high,
  highlight = false,
}: {
  feature: string;
  low: string;
  high: string;
  highlight?: boolean;
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '260px 1fr 1fr',
      padding: '16px 24px',
      background: highlight ? palette.roseLight : palette.surface,
      borderBottom: `1px solid ${palette.border}`,
      alignItems: 'center',
      fontSize: 26,
    }}
  >
    <div style={{ fontWeight: 700, color: highlight ? palette.rose : palette.text }}>{feature}</div>
    <div style={{ color: palette.muted, paddingRight: 20 }}>{low}</div>
    <div
      style={{ color: highlight ? palette.rose : palette.teal, fontWeight: highlight ? 700 : 600 }}
    >
      {high}
    </div>
  </div>
);

const Magnification: Page = () => (
  <div style={fill}>
    <PageHeader title="放大倍率計算與視野特性對照" subtitle="低倍鏡 vs 高倍鏡之核心考點全覽" />

    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
      <div
        style={{
          background: 'linear-gradient(90deg, #f0fdfa 0%, #f0f9ff 100%)',
          borderRadius: 16,
          padding: '20px 32px',
          border: `1.5px solid ${palette.tealBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: palette.teal, marginBottom: 4 }}>
            核心計算公式
          </div>
          <div style={{ fontSize: 38, fontWeight: 900, color: palette.text }}>
            總放大倍率 ＝ 目鏡放大倍率 × 物鏡放大倍率
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 25, color: palette.muted, lineHeight: 1.5 }}>
          例：目鏡標示 <span style={{ color: palette.teal, fontWeight: 700 }}>10X</span>，物鏡標示{' '}
          <span style={{ color: palette.blue, fontWeight: 700 }}>40X</span>
          <br />
          總放大倍率為 10 × 40 ＝{' '}
          <strong style={{ color: palette.teal, fontSize: 28 }}>400 倍</strong>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 16,
          border: `1px solid ${palette.border}`,
          overflow: 'hidden',
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr 1fr',
            padding: '16px 24px',
            background: palette.surfaceSubtle,
            borderBottom: `2px solid ${palette.border}`,
            fontSize: 26,
            fontWeight: 800,
            color: palette.text,
          }}
        >
          <div>比較項目</div>
          <div style={{ color: palette.teal }}>低倍鏡（例如 10X × 4X ＝ 40X）</div>
          <div style={{ color: palette.blue }}>高倍鏡（例如 10X × 40X ＝ 400X）</div>
        </div>

        <ComparisonRow
          feature="視野範圍（可見面積）"
          low="大（容易找尋觀察目標）"
          high="小（僅可見目標局部微細結構）"
        />
        <ComparisonRow
          feature="視野亮度"
          low="較明亮（光線通量密度高）"
          high="較暗（光線被分散，需換大光圈/增光）"
        />
        <ComparisonRow
          feature="看見的細胞數目"
          low="較多（視野寬廣）"
          high="較少（局部特寫，個數大幅減少）"
        />
        <ComparisonRow
          feature="單一細胞影像大小"
          low="較小（縮小概觀）"
          high="較大（放大清晰細節）"
        />
        <ComparisonRow
          feature="物鏡與玻片工作距離"
          low="較長（離玻片遠，安全不碰撞）"
          high="極短（物鏡幾乎緊貼蓋玻片）"
        />
        <ComparisonRow
          feature="對焦旋鈕使用規範"
          low="粗調節輪 + 細調節輪 皆可使用"
          high="⚠️ 絕對嚴禁使用粗調節輪！僅能使用細調節輪微調"
          highlight={true}
        />
      </div>
    </div>

    <PageFooter tip="高倍鏡下物鏡鏡頭極靠近玻片，轉動粗調節輪極易壓碎蓋玻片並刮傷昂貴物鏡鏡頭！" />
  </div>
);

/* ────────────────────────── Page 5: 實驗前置準備 ────────────────────────── */
const PrepCard = ({
  step,
  icon,
  title,
  desc,
  alert,
}: {
  step: string;
  icon: string;
  title: string;
  desc: string;
  alert?: string;
}) => (
  <div
    style={{
      background: palette.surface,
      borderRadius: 16,
      padding: '24px 26px',
      border: `1px solid ${palette.border}`,
      boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
      }}
    >
      <span style={{ fontSize: 38 }}>{icon}</span>
      <span
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: palette.teal,
          background: palette.tealLight,
          padding: '4px 10px',
          borderRadius: 8,
        }}
      >
        {step}
      </span>
    </div>
    <div style={{ fontSize: 28, fontWeight: 800, color: palette.text, marginBottom: 10 }}>
      {title}
    </div>
    <div style={{ fontSize: '36px', color: palette.muted, lineHeight: 1.6, flex: 1 }}>{desc}</div>
    {alert && (
      <div
        style={{
          marginTop: 14,
          padding: '8px 12px',
          borderRadius: 8,
          background: palette.roseLight,
          border: `1px solid ${palette.roseBorder}`,
          color: palette.rose,
          fontSize: 21,
          fontWeight: 700,
        }}
      >
        {alert}
      </div>
    )}
  </div>
);

const PrepSafety: Page = () => (
  <div style={fill}>
    <PageHeader
      title="操作前置守則：安全端持與玻片製作"
      subtitle="進實驗室的第一步 — 規範動作確保儀器安全與觀察品質"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, flex: 1 }}>
      <PrepCard
        step="原則 01"
        icon="🤲"
        title="雙手端持取鏡"
        desc="一手（通常為右手）緊握鏡臂，另一手（左手）平托鏡座。雙手平穩端於胸前，嚴禁單手提晃，避免反光鏡或目鏡震動滑落。"
        alert="嚴禁單手手提鏡臂晃動行走！"
      />
      <PrepCard
        step="原則 02"
        icon="📐"
        title="平穩置鏡位置"
        desc="將顯微鏡輕放於實驗桌前方偏左側，距桌緣約一個拳頭寬（約 8~10 公分）。偏左放置便於左眼注視目鏡，同時保留右側空間給右手記錄繪圖。"
        alert="距桌緣至少 8~10 cm 避免翻落"
      />
      <PrepCard
        step="原則 03"
        icon="🧻"
        title="專用拭鏡紙清潔"
        desc="若鏡頭表面有灰塵或水氣，僅能使用專用『拭鏡紙』朝同一方向輕輕擦拭。一般面紙或衣角纖維粗糙且易脫絮，會刮損光學鍍膜。"
        alert="嚴禁使用面紙、衛生紙或衣角！"
      />
      <PrepCard
        step="原則 04"
        icon="🔬"
        title="45° 蓋玻片製作"
        desc="於載玻片中央滴一滴清水或染劑，放置標本後，以鑷子夾取蓋玻片呈 45° 傾斜接觸水滴邊緣，待液體均勻散開後再緩緩蓋下，以防產生氣泡。"
        alert="45度輕緩放下，杜絕視野氣泡"
      />
    </div>

    <PageFooter tip="洋蔥表皮撕取單層薄膜，葉綠體取水蘊草嫩葉，口腔皮膜以牙籤鈍端輕刮！" />
  </div>
);

/* ────────────────────────── Page 6: 標準操作流程（一） ────────────────────────── */
const OperationSteps1: Page = () => (
  <div style={fill}>
    <PageHeader
      title="標準操作流程（一）：低倍對光與尋焦"
      subtitle="實驗 1-1 步驟 1 ~ 4 — 奠定清晰視野的基礎"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '820px 1fr', gap: 40, flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.tealLight,
              color: palette.teal,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            1
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>製作標本並固定載玻片</span>
            </div>
            <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              剪取字母標本（如
              "bdp"）製成暫時玻片。將玻片平放於載物臺上，以玻片夾固定，使標本精確對準載物臺中央圓形通光孔。
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.blueLight,
              color: palette.blue,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            2
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>轉動旋轉盤切至低倍物鏡並對光</span>
            </div>
            <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              旋轉旋轉盤，讓最低倍物鏡卡入光路中央（聽見『喀嗒』定位聲）。開啟光源或轉動反光鏡與光圈，由目鏡觀察直至看到均勻明亮的圓形視野。
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1.5px solid ${palette.amberBorder}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.amber,
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            3
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>側面注視！轉動粗調節輪升至最高點</span>
            </div>
            <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              <strong>眼睛務必從側面注視物鏡與玻片</strong>
              ，轉動粗調節輪使載物臺上升到最接近物鏡的位置。<strong>切忌看著目鏡上升載物臺</strong>
              ，以免物鏡壓破玻片！
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.tealLight,
              color: palette.teal,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            4
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>雙眼睜開注視目鏡，反向緩慢降臺尋焦</span>
            </div>
            <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              單眼注視目鏡（雙眼同時睜開保持放鬆），緩慢
              <strong>反向轉動粗調節輪使載物臺下降</strong>
              ，直到視野中出現模糊影像，再以細調節輪微調清晰。
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 16,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZoomableImage
          src={stepsImg}
          alt="複式顯微鏡操作步驟"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="黃金鐵律：『側面注視載物臺上升，目鏡注視載物臺下降尋焦』！" />
  </div>
);

/* ────────────────────────── Page 7: 標準操作流程（二） ────────────────────────── */
const OperationSteps2: Page = () => (
  <div style={fill}>
    <PageHeader
      title="標準操作流程（二）：換高倍與細微調焦"
      subtitle="實驗 1-1 步驟 5 ~ 8 — 邁入微細結構觀察"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '820px 1fr', gap: 40, flex: 1 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.tealLight,
              color: palette.teal,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            5
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>將欲觀察目標移動至視野正中央</span>
            </div>
            <div style={{ fontSize: '30px', color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              <span style={{ fontSize: '24px' }}>
                高倍鏡的視野範圍極小，僅能看到低倍鏡中央的局部。因此換高倍鏡前，
              </span>
              <strong style={{ fontSize: '24px' }}>
                必須先手動移動玻片，將欲放大的目標移到視野正中心
              </strong>
              <span style={{ fontSize: '24px' }}>，否則切換後目標將跑出視野外！</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.blueLight,
              color: palette.blue,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            6
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>轉動旋轉盤切換至高倍物鏡</span>
            </div>
            <div style={{ fontSize: '34px', color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              <span style={{ fontSize: '24px' }}>
                手指輕扶旋轉盤外緣轉動，切換至高倍物鏡並確認卡緊。
              </span>
              <strong style={{ fontSize: '24px' }}>嚴禁手握物鏡鏡身施力扳轉</strong>
              <span style={{ fontSize: '24px' }}>，避免螺牙偏斜損壞鏡頭對焦光軸。</span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.amberLight,
              color: palette.amber,
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            7
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              <span style={{ fontSize: '34px' }}>調大光圈或增強光源以彌補亮度</span>
            </div>
            <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.5, marginTop: 4 }}>
              <span style={{ fontSize: '34px' }}>
                切換至高倍鏡後，單位面積進光量大幅銳減，視野會明顯變暗。此時應轉動光圈盤換用較大孔徑，或將電光源調亮，使視野明亮均勻。
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1.5px solid ${palette.roseBorder}`,
            display: 'flex',
            gap: 18,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: palette.rose,
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 800,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            8
          </div>
          <div>
            <div style={{ fontSize: 26, fontWeight: 800, color: palette.rose }}>
              【極致禁忌】高倍鏡下只動細調節輪！
            </div>
            <div style={{ fontSize: 23, color: palette.text, lineHeight: 1.5, marginTop: 4 }}>
              高倍物鏡鏡頭與蓋玻片之間距離極微小。
              <strong>在高倍鏡下絕對嚴禁轉動粗調節輪！僅能微幅轉動細調節輪</strong>
              ，直至影像最銳利清晰。
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 16,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ZoomableImage
          src={stepsImg}
          alt="複式顯微鏡操作步驟"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 12,
          }}
        />
      </div>
    </div>

    <PageFooter tip="高倍鏡找不到影像時，切忌直接盲轉調節輪！應立即切回低倍鏡重新置中對焦。" />
  </div>
);

/* ────────────────────────── Page 8: 成像與同向移動法則 ────────────────────────── */
const Optics: Page = () => (
  <div style={fill}>
    <PageHeader
      title="核心光學特性：倒立虛像與同向移動法則"
      subtitle="上下顛倒、左右相反 — 理解光路幾何成像原理"
    />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, flex: 1 }}>
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 32,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 38 }}>🔄</span>
          <h3 style={{ fontSize: 32, fontWeight: 800, color: palette.text, margin: 0 }}>
            特性一：上下顛倒、左右相反（倒立虛像）
          </h3>
        </div>

        <p style={{ fontSize: 25, color: palette.muted, lineHeight: 1.6, margin: 0 }}>
          複式顯微鏡由物鏡形成『倒立放大實像』，再經目鏡形成『正立放大虛像』，最終肉眼看見的是相對於實物
          <strong>旋轉 180 度的倒立放大虛像</strong>。
        </p>

        <div
          style={{
            marginTop: 24,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              padding: '18px 16px',
              textAlign: 'center',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 21, color: palette.muted, marginBottom: 8 }}>實物字母</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.text }}>e</div>
            <div style={{ fontSize: 20, color: palette.faint, margin: '6px 0' }}>轉 180° 變成</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.teal }}>ə</div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              padding: '18px 16px',
              textAlign: 'center',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 21, color: palette.muted, marginBottom: 8 }}>實物字母</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.text }}>p</div>
            <div style={{ fontSize: 20, color: palette.faint, margin: '6px 0' }}>轉 180° 變成</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.teal }}>d</div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              padding: '18px 16px',
              textAlign: 'center',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 21, color: palette.muted, marginBottom: 8 }}>實物字母</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.text }}>b</div>
            <div style={{ fontSize: 20, color: palette.faint, margin: '6px 0' }}>轉 180° 變成</div>
            <div style={{ fontSize: 42, fontWeight: 900, color: palette.teal }}>q</div>
          </div>
        </div>

        <div
          style={{
            marginTop: 20,
            background: palette.tealLight,
            border: `1px solid ${palette.tealBorder}`,
            borderRadius: 10,
            padding: '12px 18px',
            fontSize: 22,
            color: palette.teal,
            fontWeight: 600,
          }}
        >
          💡 考試解題絕招：將考卷倒轉 180 度觀看，就是顯微鏡中所看到的實際影像！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 32,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 38 }}>🎯</span>
          <h3 style={{ fontSize: 32, fontWeight: 800, color: palette.text, margin: 0 }}>
            特性二：玻片同向移動口訣
          </h3>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)',
            borderRadius: 14,
            padding: '18px 24px',
            border: `1.5px solid ${palette.tealBorder}`,
            marginBottom: 14,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 700, color: palette.teal, marginBottom: 4 }}>
            必背黃金移動法則
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, color: palette.text }}>
            『物像偏在何方，玻片就往何方推』
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
          <div
            style={{
              padding: '14px 18px',
              borderRadius: 10,
              background: palette.surfaceSubtle,
              border: `1px solid ${palette.border}`,
              fontSize: 24,
              color: palette.text,
            }}
          >
            <strong>情境 1：草履蟲游向視野左上方 ↖</strong>
            <div style={{ fontSize: 22, color: palette.muted, marginTop: 4 }}>
              欲將草履蟲移回中央，玻片必須<strong>往左上方 ↖ 推動</strong>。
            </div>
          </div>

          <div
            style={{
              padding: '14px 18px',
              borderRadius: 10,
              background: palette.surfaceSubtle,
              border: `1px solid ${palette.border}`,
              fontSize: 24,
              color: palette.text,
            }}
          >
            <strong>情境 2：細胞位於視野右下方 ↘</strong>
            <div style={{ fontSize: 22, color: palette.muted, marginTop: 4 }}>
              欲換高倍鏡觀察，必須先將玻片<strong>往右下方 ↘ 移動</strong>使目標置中。
            </div>
          </div>

          <div
            style={{
              padding: '12px 18px',
              borderRadius: 10,
              background: palette.blueLight,
              border: `1px solid ${palette.blueBorder}`,
              fontSize: 22,
              color: palette.blue,
              fontWeight: 600,
            }}
          >
            背後原理解析：因為鏡中為倒像，視野中的『左上』實際在載物臺的『右下』。要把右下的實物往中間推，動作正好就是朝向鏡中的左上！
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="複式顯微鏡成像為『倒立平面虛像』，移動方向為『同向補償』！" />
  </div>
);

/* ────────────────────────── Page 9: 實驗常犯錯誤與疑難排除 ────────────────────────── */
const TroubleCard = ({
  qNum,
  symptom,
  causes,
  solution,
}: {
  qNum: string;
  symptom: string;
  causes: string;
  solution: string;
}) => (
  <div
    style={{
      background: palette.surface,
      borderRadius: 16,
      padding: '22px 24px',
      border: `1px solid ${palette.border}`,
      boxShadow: '0 4px 16px -2px rgba(15, 23, 42, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
      <span
        style={{
          background: palette.roseLight,
          color: palette.rose,
          fontWeight: 800,
          fontSize: 21,
          padding: '3px 9px',
          borderRadius: 6,
        }}
      >
        {qNum}
      </span>
      <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>{symptom}</span>
    </div>

    <div style={{ fontSize: '32px', color: palette.muted, marginBottom: 8, lineHeight: 1.5 }}>
      <strong>常見成因：</strong> {causes}
    </div>

    <div
      style={{
        marginTop: 'auto',
        background: palette.tealLight,
        borderRadius: 8,
        padding: '10px 14px',
        border: `1px solid ${palette.tealBorder}`,
        fontSize: 22,
        color: palette.teal,
        fontWeight: 700,
        lineHeight: 1.45,
      }}
    >
      ✅ 對策：{solution}
    </div>
  </div>
);

const Troubleshoot: Page = () => (
  <div style={fill}>
    <PageHeader
      title="顯微鏡實驗常犯錯誤與疑難排除"
      subtitle="實驗課 Q&A — 掌握排查技巧，不再手忙腳亂"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, flex: 1 }}>
      <TroubleCard
        qNum="狀況 01"
        symptom="視野完全一片漆黑，看不到光線？"
        causes="物鏡未定位卡入光軸、光圈孔未對準（或關閉）、電源未開啟、反光鏡角度不對或被手遮蔽。"
        solution="轉動旋轉盤聽見『喀嗒』定位聲，開啟電源並旋轉光圈盤確保通光。"
      />

      <TroubleCard
        qNum="狀況 02"
        symptom="視野中看見粗黑圓圈，且內部透光？"
        causes="這是『氣泡』！常見於製作標本時蓋玻片蓋得太急促，空氣被包裹在液體中。"
        solution="用吸水紙在蓋玻片一側吸水引流排出氣泡；若過多則重新以 45 度慢蓋製作。"
      />

      <TroubleCard
        qNum="狀況 03"
        symptom="換高倍物鏡後，原本的物體完全消失？"
        causes="在低倍鏡下沒有先將目標移到視野正中央。高倍鏡範圍很小，邊緣物體換鏡後會落到視野外。"
        solution="切忌直接轉動調節輪尋找！請立即切回低倍鏡，將目標置中後再換高倍。"
      />

      <TroubleCard
        qNum="狀況 04"
        symptom="視野中有黑點污漬，如何查明在哪個零件？"
        causes="灰塵污垢可能落在：目鏡、物鏡或載玻片標本三處之一。"
        solution="① 轉動目鏡：污點跟著轉 → 在目鏡；② 移動玻片：污點跟著動 → 在玻片；③ 兩者皆不動 → 在物鏡！"
      />
    </div>

    <PageFooter tip="三大清潔準則：只用拭鏡紙、只朝同一方向擦、絕不使用任何化學溶劑直接噴鏡頭！" />
  </div>
);

/* ────────────────────────── Page 10: 複式 vs 解剖顯微鏡 ────────────────────────── */
const Compare: Page = () => (
  <div style={fill}>
    <PageHeader
      title="雙鏡對照：複式顯微鏡 vs 解剖顯微鏡"
      subtitle="光路、成像原理、倍率與觀察對象完整比較"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 500px',
        gap: 36,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            <span style={{ fontSize: '34px' }}>1. 標本特性與光路形式</span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>複式顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>：穿透式光路為主，標本必須</span>
            <strong style={{ fontSize: '30px' }}>薄而能透光</strong>
            <span style={{ fontSize: '30px' }}>（需切片或染色製作玻片標本）。</span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>解剖顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>：反射式光路為主（亦具透射），可直接觀察</span>
            <strong style={{ fontSize: '30px' }}>實體不透光標本</strong>
            <span style={{ fontSize: '30px' }}>（如昆蟲觸角、花藥、礦石結晶）。</span>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            <span style={{ fontSize: '34px' }}>2. 成像特性與操作協調</span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>複式顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>：</span>
            <strong style={{ fontSize: '30px' }}>倒立平面虛像</strong>
            <span style={{ fontSize: '30px' }}>
              （上下顛倒、左右相反），手移動玻片之方向與視野中像移動方向相反。
            </span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>解剖顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>：</span>
            <strong style={{ fontSize: '30px' }}>正立立體實像</strong>
            <span style={{ fontSize: '30px' }}>
              （具雙眼立體感），手操作解剖方向與視野中像完全一致，便於鑷子精細解剖。
            </span>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 24px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            <span style={{ fontSize: '34px' }}>3. 倍率範圍與調焦機構</span>
          </div>
          <div style={{ fontSize: 23, color: palette.muted, lineHeight: 1.55 }}>
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>複式顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>
              ：倍率較高（約 40X ~ 1000X），具粗、細兩組調節輪。
            </span>
            <br />
            <span style={{ fontSize: '30px' }}>{'• '}</span>
            <strong style={{ fontSize: '30px' }}>解剖顯微鏡</strong>
            <span style={{ fontSize: '30px' }}>
              ：倍率較低（通常約 10X ~ 40X），通常僅具一組粗調節輪，另配有眼距與眼焦微調器。
            </span>
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
          <span style={{ fontSize: 28 }}>🔬</span>
          <div style={{ fontSize: '25px', color: palette.teal, fontWeight: 600, lineHeight: 1.45 }}>
            <strong>選擇準則：</strong>
            觀察微小細胞內部構造選「複式顯微鏡」；解剖小型動植物、觀察立體表面選「解剖顯微鏡」。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: 12,
          border: `1px solid ${palette.border}`,
          boxShadow: '0 8px 30px -4px rgba(15, 23, 42, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          minHeight: 0,
          height: '100%',
          maxHeight: 720,
        }}
      >
        <ZoomableImage
          src={dissectingImg}
          alt="解剖顯微鏡構造掛圖"
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

    <PageFooter tip="解剖顯微鏡用於立體解剖與表面觀察（正立像）；複式顯微鏡用於細胞內部觀察（倒立像）！" />
  </div>
);

/* ────────────────────────── Page 11: 總結回顧與收鏡口訣 ────────────────────────── */
const SummaryCard = ({
  num,
  title,
  content,
  highlight = false,
}: {
  num: string;
  title: string;
  content: string;
  highlight?: boolean;
}) => (
  <div
    style={{
      background: highlight ? 'linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 100%)' : palette.surface,
      borderRadius: 16,
      padding: '24px 28px',
      border: highlight ? `2px solid ${palette.tealBorder}` : `1px solid ${palette.border}`,
      boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.05)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span
        style={{
          background: highlight ? palette.teal : palette.surfaceSubtle,
          color: highlight ? '#ffffff' : palette.text,
          fontWeight: 900,
          fontSize: 22,
          padding: '4px 10px',
          borderRadius: 8,
        }}
      >
        {num}
      </span>
      <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>{title}</span>
    </div>
    <div style={{ fontSize: '30px', color: palette.muted, lineHeight: 1.6 }}>{content}</div>
  </div>
);

const Summary: Page = () => (
  <div style={fill}>
    <PageHeader
      title="核心回顧：顯微鏡實驗四大黃金口訣"
      subtitle="融會貫通生物實驗精髓，安全與精準兼備"
    />

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, flex: 1 }}>
      <SummaryCard
        num="口訣 01"
        title="右手握臂左手托，偏左放置離桌沿"
        content="取鏡雙手平端於胸前防掉落；置於實驗桌前方偏左側（距桌緣約8~10公分），左眼觀察、右眼繪圖記錄。"
      />

      <SummaryCard
        num="口訣 02"
        title="先低後高側看升，單眼注視下移尋"
        content="永遠由低倍鏡開始；側面注視載物臺上升至最高點防止碰撞；單眼注視目鏡，反向緩慢下降載物臺尋找初焦。"
      />

      <SummaryCard
        num="口訣 03"
        title="目標置中轉轉盤，高倍鏡下只動細"
        content="換高倍鏡前必須將目標移至視野正中央；轉動物鏡旋轉盤切換；高倍鏡下絕對嚴禁動粗調節輪，僅能微調細調節輪。"
        highlight={true}
      />

      <SummaryCard
        num="口訣 04"
        title="像在何方玻片往哪推，專用拭鏡單向擦"
        content="倒立放大虛像，物體偏哪玻片就往哪移；鏡頭髒污僅能使用專用拭鏡紙朝單一方向輕拭，杜絕刮傷鍍膜。"
      />
    </div>

    <div
      style={{
        marginTop: 20,
        background: palette.surfaceSubtle,
        borderRadius: 12,
        padding: '16px 24px',
        border: `1px solid ${palette.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>
        📋 實驗完畢「收鏡五部曲」：
      </div>
      <div style={{ fontSize: 23, color: palette.muted, display: 'flex', gap: 20 }}>
        <span>① 取下並清洗玻片</span>
        <span>② 轉至最低倍物鏡或無鏡孔</span>
        <span>③ 載物臺降至最低點</span>
        <span>④ 關閉電源並拔插頭</span>
        <span>⑤ 罩上防塵套歸位</span>
      </div>
    </div>

    <PageFooter tip="保持嚴謹的實驗態度，細心探索奇妙的生命科學世界！" />
  </div>
);

export const notes: (string | undefined)[] = [
  '各位老師、同學大家好，今天我們要介紹的是國中生物實驗最重要的核心工具——複式顯微鏡的構造與標準操作步驟。',
  '首先我們來認識顯微鏡的觀察範圍。肉眼可見的極限大約在100微米，而光學顯微鏡能將視野延伸到0.2微米至1毫米，正好能看清動植物細胞與細菌。請特別注意：光學顯微鏡標本必須「薄而透光」，否則光線無法穿透。',
  '接著來看顯微鏡的構造：主要分為光學放大系統、調焦載物系統與聚光照明系統。請同學特別背熟口訣：「目短物長倍率大」，目鏡越短倍率越高，物鏡則是越長倍率越高。',
  '計算總放大倍率是用「目鏡倍率 × 物鏡倍率」。在考試中，低倍鏡與高倍鏡的對比是必考題：低倍視野廣、亮度高、細胞多；高倍則是視野窄、亮度暗、細胞大。且高倍鏡下絕對不能使用粗調節輪！',
  '操作前置準備有四大原則：右手握臂、左手托座雙手取鏡；置於桌前偏左；只能用專用拭鏡紙單向輕拭；製作玻片時蓋玻片要呈45度角輕輕放下避免產生氣泡。',
  '標準操作前四步：固定玻片、低倍對光、側面注視將載物臺升至最高點（防撞破玻片），然後單眼注視目鏡，反向緩慢下降載物臺尋找初焦。',
  '換高倍鏡的核心步驟：一定要先在低倍鏡下將目標移至「視野正中央」，再轉動物鏡旋轉盤。切換後視野會變暗，請調大光圈，而且切記——只能動細調節輪！',
  '光學成像特性是上下顛倒、左右相反的倒立虛像。當題目問字母成像時，把考卷轉180度看就是答案。玻片移動口訣則是「像偏在哪裡，玻片就往哪裡推」。',
  '在實驗中若遇到問題：視野漆黑通常是物鏡沒轉到位或光圈關閉；視野有黑粗圓圈是氣泡；換高倍找不到是低倍未置中；判斷污點位置可分別旋轉目鏡與移動玻片來排查。',
  '將複式顯微鏡與解剖顯微鏡對比：解剖顯微鏡看的是立體不透光實物，成像是正立立體實像，操作方向與手眼一致，倍率較低（10到40倍）。',
  '最後複習四大黃金口訣，並請同學在實驗結束後務必落實收鏡五部曲：取下玻片、轉到最低倍、降至最低、關閉電源、套上防塵套！',
];

export const meta: SlideMeta = {
  title: '國中生物：複式顯微鏡構造與操作指引',
  createdAt: '2026-09-14T02:06:05.500Z',
};

export default [
  Cover,
  Scale,
  Structure,
  Magnification,
  PrepSafety,
  OperationSteps1,
  OperationSteps2,
  Optics,
  Troubleshoot,
  Compare,
  Summary,
] satisfies Page[];
