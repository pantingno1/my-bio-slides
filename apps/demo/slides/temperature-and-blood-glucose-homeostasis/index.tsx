import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import bloodSugarBank64Img from './assets/64-1上6-2人體內的血糖銀行.jpg';
import bloodSugarFluctuation65Img from './assets/65-1上6-3人體的血糖濃度升降.jpg';
import organSystemsCoordination66Img from './assets/66-1上6-3人體的器官系統.jpg';
import birdFeatherImg from './assets/bird_feather.png';
import mammalFurImg from './assets/mammal_fur.png';
import polarBearImg from './assets/polar_bear.png';
import question112TempImg from './assets/question_112_temperature.png';
import question114GlucoseImg from './assets/question_114_blood_glucose.png';
import reptileLizardImg from './assets/reptile_lizard.png';
import sealBlubberImg from './assets/seal_blubber.jpeg';
import ectothermEndothermCompareImg from './assets/內溫外溫比較.jpg';
import bloodSugarRegulationImg from './assets/血糖調節.jpg';

export const meta: SlideMeta = {
  title: '體溫與血糖的恆定',
};

export const design: DesignSystem = {
  palette: {
    bg: '#f8fafc',
    text: '#0f172a',
    accent: '#0284c7',
  },
  fonts: {
    display:
      'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
    body: 'system-ui, -apple-system, "PingFang TC", "Noto Sans TC", "Microsoft JhengHei", sans-serif',
  },
  typeScale: {
    hero: 96,
    body: 22,
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
  surfaceSubtle: '#f0f9ff',
  border: '#e2e8f0',
  text: '#0f172a',
  muted: '#475569',
  faint: '#94a3b8',
  cyan: '#0891b2',
  cyanLight: '#ecfeff',
  cyanBorder: '#a5f3fc',
  blue: '#0284c7',
  blueLight: '#eff6ff',
  blueBorder: '#bae6fd',
  indigo: '#4f46e5',
  indigoLight: '#eef2ff',
  indigoBorder: '#c7d2fe',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  purple: '#9333ea',
  purpleLight: '#faf5ff',
  purpleBorder: '#f3e8ff',
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
        color: palette.cyan,
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
      <span>{tip || '國中自然科學 · 生物（一上）單元 6-3 體溫的恆定與血糖的恆定'}</span>
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
      background: 'radial-gradient(circle at 10% 20%, #eff6ff 0%, #ffffff 60%, #fff7ed 100%)',
    }}
  >
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: palette.surface,
          padding: '8px 18px',
          borderRadius: 999,
          border: `1px solid ${palette.amberBorder}`,
          width: 'fit-content',
          marginBottom: 20,
          boxShadow: '0 2px 8px rgba(217, 119, 6, 0.08)',
        }}
      >
        <span style={{ fontSize: 22, color: palette.amber }}>●</span>
        <span
          style={{ fontSize: 22, fontWeight: 700, color: palette.amber, letterSpacing: '0.04em' }}
        >
          國中自然科學 生物（一上）單元 6-3
        </span>
      </div>

      <h1
        style={{
          fontSize: 82,
          fontWeight: 900,
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          margin: '0 0 20px 0',
          color: palette.text,
        }}
      >
        體溫與血糖的恆定
      </h1>

      <p
        style={{
          fontSize: 26,
          color: palette.muted,
          margin: '0 0 36px 0',
          lineHeight: 1.5,
          maxWidth: 1100,
        }}
      >
        探究酵素活性最佳溫度與動物內外溫策略，解碼人體腦部體溫調控機制；
        掌握「血糖銀行」運作樞紐，深入胰島素、升糖素與腎上腺素的三大荷爾蒙協同調控。
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 18,
          marginBottom: 24,
        }}
      >
        {[
          {
            num: '01',
            title: '體溫恆定與分類',
            desc: '內溫動物 vs 外溫動物，熱量來源與環境適應',
            color: palette.rose,
            bg: palette.roseLight,
            border: palette.roseBorder,
          },
          {
            num: '02',
            title: '人體體溫調節',
            desc: '腦部體溫調節中樞，冷熱環境下的產熱與散熱反應',
            color: palette.amber,
            bg: palette.amberLight,
            border: palette.amberBorder,
          },
          {
            num: '03',
            title: '人體血糖銀行',
            desc: '葡萄糖與肝糖互相轉化，胰島素與升糖素拮抗平衡',
            color: palette.emerald,
            bg: palette.emeraldLight,
            border: palette.emeraldBorder,
          },
          {
            num: '04',
            title: '器官系統整合協同',
            desc: '神經、內分泌、循環、消化與排泄系統全面協調',
            color: palette.blue,
            bg: palette.blueLight,
            border: palette.blueBorder,
          },
        ].map((item) => (
          <div
            key={item.num}
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
              borderRadius: 16,
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.num}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>{item.title}</div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>

    <PageFooter tip="點擊投影片任意處或按方向鍵前進 · 圖片皆支援點擊全螢幕放大查看" />
  </div>
);

const SlideTemperatureImportance: Page = () => (
  <div style={fill}>
    <PageHeader
      title="體溫恆定的核心意義與生理限制"
      subtitle="酵素活性的最佳溫度區間 · 體溫過高變性、體溫過低活性低落"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '22px 26px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span
              style={{
                background: palette.roseLight,
                color: palette.rose,
                padding: '4px 14px',
                borderRadius: 8,
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              核心生命指標
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              為什麼體溫必須維持恆定？
            </span>
          </div>
          <p style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6, margin: 0 }}>
            人類正常體溫約維持在 <strong style={{ color: palette.rose }}>37℃</strong> 左右。
            生病發燒時，體溫僅升高 1∼2℃ 就會感到極度不適、頭暈無力； 體溫若超過 41℃ 或低於
            30℃，嚴重時會導致多重器官衰竭甚至死亡。 這是因為體內所有化學代謝反應皆需
            <strong style={{ color: palette.blue }}>酵素（蛋白質）</strong>催化！
          </p>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            border: `1px solid ${palette.blueBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 10 }}>
            體溫偏差對生物體內酵素的致命衝擊
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 12,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  background: palette.rose,
                  color: '#fff',
                  borderRadius: 10,
                  padding: '8px 16px',
                  fontSize: 20,
                  fontWeight: 800,
                  minWidth: 140,
                  textAlign: 'center',
                }}
              >
                溫度過高
                <br />
                (&gt; 40℃)
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 21, fontWeight: 700, color: palette.rose }}>
                  酵素蛋白質變性失活
                </div>
                <div style={{ fontSize: 20, color: palette.muted }}>
                  高溫使蛋白質立體結構破壞變性，催化活性永久喪失，細胞呼吸與新陳代謝完全停擺。
                </div>
              </div>
            </div>

            <div
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 12,
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  background: palette.blue,
                  color: '#fff',
                  borderRadius: 10,
                  padding: '8px 16px',
                  fontSize: 20,
                  fontWeight: 800,
                  minWidth: 140,
                  textAlign: 'center',
                }}
              >
                溫度過低
                <br />
                (&lt; 35℃)
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 21, fontWeight: 700, color: palette.blue }}>
                  分子運動緩慢、活性低落
                </div>
                <div style={{ fontSize: 20, color: palette.muted }}>
                  分子碰撞動能嚴重不足，代謝速率急遽下降，神經傳導遲緩、心跳微弱，陷入失溫休克。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.amberLight,
            border: `2px solid ${palette.amberBorder}`,
            borderRadius: 16,
            padding: '22px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span
              style={{
                background: palette.amber,
                color: '#fff',
                padding: '4px 12px',
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              本章兩大核心主軸
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: palette.amber }}>
              6-3 學習架構
            </span>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 12,
              padding: '16px 20px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
              1. 體溫的恆定 (Temperature Homeostasis)
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              ● 內溫動物（鳥類、哺乳類） vs 外溫動物（魚類、兩生類、爬蟲類、無脊椎動物）
              <br />● 腦部體溫調節中樞：寒冷與炎熱時的產熱與散熱精準天平
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 12,
              padding: '16px 20px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.emerald, marginBottom: 6 }}>
              2. 血糖的恆定 (Blood Glucose Homeostasis)
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              ● 血液中葡萄糖供給細胞呼吸作用產生能量
              <br />● 胰島素降血糖（合成肝糖） vs 升糖素、腎上腺素升血糖（分解肝糖）
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 32 }}>💡</div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            <strong>會考導向提點：</strong>
            維持體溫與血糖恆定，是人體神經系統與內分泌系統協同合作的最佳典範！
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="維持 37℃ 體溫是為了讓體內成千上萬種酵素維持在最理想催化效率" />
  </div>
);

const SlideEndoEctoComparison: Page = () => (
  <div style={fill}>
    <PageHeader
      title="動物體溫策略：內溫動物 vs 外溫動物"
      subtitle="根據體熱來源分類 · 體溫曲線與環境溫度的關係鑑別"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            動物體溫維持方式的兩大演化策略
          </div>
          <p style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5, margin: 0 }}>
            舊稱「恆溫動物 / 變溫動物」，現今國中生物課綱更嚴謹地依據
            <strong style={{ color: palette.rose }}>「體熱主要來源」</strong>
            分類為內溫動物與外溫動物。
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
            flex: 1,
          }}
        >
          <div
            style={{
              background: palette.roseLight,
              border: `2px solid ${palette.roseBorder}`,
              borderRadius: 14,
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
                🔥 內溫動物 (Endotherm)
              </div>
              <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
                <strong>熱能來源：</strong>體內代謝作用（呼吸作用）產生的熱能。
                <br />
                <strong>體溫特性：</strong>體溫保持恆定，不隨外界溫度大幅改變。
                <br />
                <strong>代表族群：</strong>
                <strong style={{ color: palette.rose }}>鳥類、哺乳類</strong>。
              </div>
            </div>
            <div
              style={{
                background: palette.surface,
                padding: '8px 12px',
                borderRadius: 8,
                fontSize: 19,
                color: palette.muted,
                marginTop: 8,
              }}
            >
              優勢：全天候活躍；代價：需大量攝食維持高代謝率。
            </div>
          </div>

          <div
            style={{
              background: palette.blueLight,
              border: `2px solid ${palette.blueBorder}`,
              borderRadius: 14,
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 6 }}>
                ❄️ 外溫動物 (Ectotherm)
              </div>
              <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
                <strong>熱能來源：</strong>主要吸收外在環境（如陽光、岩石）熱量。
                <br />
                <strong>體溫特性：</strong>體溫隨外界環境溫度改變而起伏。
                <br />
                <strong>代表族群：</strong>
                <strong style={{ color: palette.blue }}>魚類、兩生類、爬蟲類、昆蟲</strong>。
              </div>
            </div>
            <div
              style={{
                background: palette.surface,
                padding: '8px 12px',
                borderRadius: 8,
                fontSize: 19,
                color: palette.muted,
                marginTop: 8,
              }}
            >
              優勢：耗能量低、需食少；代價：低溫時活動力遲緩。
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本圖表：內溫與外溫動物體溫變化曲線
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={ectothermEndothermCompareImg}
              alt="內溫動物（狐狸）與外溫動物（蛇）體溫曲線對比圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲ 內溫動物（水平直線，體溫恆定）；外溫動物（斜線上升，隨環境起伏）
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            border: `1px solid ${palette.amberBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.amber,
            lineHeight: 1.4,
          }}
        >
          <strong>常考判圖密碼：</strong>X 軸為環境溫度、Y
          軸為體溫。呈水平線者必為「鳥類或哺乳類」；斜線上揚者必為「魚、兩生、爬蟲或無脊椎動物」！
        </div>
      </div>
    </div>

    <PageFooter tip="內溫動物只有鳥類與哺乳類；其餘動物（魚、兩生、爬蟲、昆蟲）皆為外溫動物" />
  </div>
);

const SlideEctothermBehavior: Page = () => (
  <div style={fill}>
    <PageHeader
      title="外溫動物的體溫調節：行為適應的智慧"
      subtitle="無法靠代謝自主產熱 · 透過曬太陽與躲陰涼處調控體溫"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '22px 24px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 10 }}>
            外溫動物不是「任由體溫失控」，而是靠行為主動調整！
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.6, margin: 0 }}>
            外溫動物本身產熱量極少，體溫隨環境而動態波動。為了讓體內酵素能夠在適當溫度下運作，外溫動物演化出高度靈活的
            <strong style={{ color: palette.blue }}>「環境微棲地選擇行為」</strong>。
          </p>
        </div>

        <div
          style={{
            background: palette.blueLight,
            border: `1px solid ${palette.blueBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 10 }}>
            兩大主要行為調節模式
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 6 }}>
              ☀️ 體溫偏低時 ➔ 尋找溫暖環境（曬太陽）
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              清晨或低溫時，蜥蜴、蛇、烏龜會趴在向陽處或吸熱後的深色岩石上，吸收太陽輻射與地表熱能，快速提升體溫至
              30℃ 以上，使活動力與消化機能迅速甦醒。
            </p>
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '16px 20px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan, marginBottom: 6 }}>
              🌴 體溫偏高時 ➔ 躲入陰涼處或地洞（避暑）
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              正午烈日當頭時，外溫動物會主動鑽入岩縫、樹蔭、洞穴或泥土中，避免體內酵素因高溫變性，將體溫穩定維持在安全範圍內。
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本生態圖：蜥蜴曬太陽吸熱與岩縫避暑
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 380,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={reptileLizardImg}
              alt="蜥蜴在岩石上曬太陽調節體溫生態圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲ 蜥蜴爬至岩石上趴臥曬太陽（提升體溫），過熱時則躲入石縫陰涼處
          </div>
        </div>

        <div
          style={{
            background: palette.indigoLight,
            border: `1px solid ${palette.indigoBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.indigo,
            lineHeight: 1.4,
          }}
        >
          <strong>冬眠與休眠現象：</strong>
          當寒冬環境溫度過低且無足夠陽光時，蛙類、蛇類會鑽入地底降低代謝進入「冬眠」狀態以度過嚴冬。
        </div>
      </div>
    </div>

    <PageFooter tip="外溫動物藉由「曬太陽獲取熱量」與「躲陰涼處避免過熱」等行為調節體溫" />
  </div>
);

const SlideEndothermInsulation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="內溫動物的保溫構造：羽毛、毛髮與脂肪"
      subtitle="減緩熱量散失的隔熱屏障 · 極地動物征服冰雪世界的演化奇蹟"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
            產熱不易，留住熱量才是關鍵！
          </div>
          <p style={{ fontSize: 20, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            內溫動物消耗大量食物養分進行呼吸作用產熱。若熱量輕易散逸至周遭空氣中，就必須不斷進食。
            因此鳥類與哺乳類演化出卓越的
            <strong style={{ color: palette.rose }}>「隔熱保溫構造」</strong>。
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
            flex: 1,
          }}
        >
          {[
            {
              title: '鳥類的羽毛 (Feather)',
              desc: '密生蓬鬆絨羽，能捕捉靜止空氣層（空氣是極佳的隔熱體），防止冷空氣接觸皮膚。',
              img: birdFeatherImg,
              color: palette.cyan,
            },
            {
              title: '哺乳類的毛髮 (Fur)',
              desc: '如北極熊、狐狸、狼具有緻密底毛與防水針毛，能抵禦暴風雪並牢牢鎖住體熱。',
              img: mammalFurImg,
              color: palette.amber,
            },
            {
              title: '海豹、鯨豚的皮下脂肪 (Blubber)',
              desc: '海洋導熱速率是空氣的 25 倍！極地水生哺乳類具有厚達數十公分的脂肪層隔絕酷寒海水。',
              img: sealBlubberImg,
              color: palette.blue,
            },
            {
              title: '北極熊的保溫綜效',
              desc: '厚實毛皮＋豐厚皮下脂肪雙重保護，在 -40℃ 極地環境中體溫仍能恆定在 37℃。',
              img: polarBearImg,
              color: palette.indigo,
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 12,
                padding: '12px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: 21, fontWeight: 800, color: card.color }}>{card.title}</div>
                <div style={{ fontSize: 19, color: palette.muted, marginTop: 4, lineHeight: 1.35 }}>
                  {card.desc}
                </div>
              </div>
              <div
                style={{
                  height: 105,
                  marginTop: 6,
                  background: '#f8fafc',
                  borderRadius: 8,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ZoomableImage
                  src={card.img}
                  alt={card.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.amberLight,
            border: `2px solid ${palette.amberBorder}`,
            borderRadius: 16,
            padding: '20px 22px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span
              style={{
                background: palette.amber,
                color: '#fff',
                padding: '4px 12px',
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 800,
              }}
            >
              生活中的科學
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: palette.amber }}>
              人類的「起雞皮疙瘩」原理
            </span>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 12,
              padding: '16px 20px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
              豎毛肌收縮 (Piloerection)
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              當天氣寒冷或受到驚嚇時，自律神經刺激毛囊旁的<strong>「立毛肌（豎毛肌）」收縮</strong>
              ，使毛髮直立，皮膚表面形成小顆粒突起（俗稱雞皮疙瘩）。
            </p>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 12,
              padding: '16px 20px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 21, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
              演化遺留痕跡 (Vestigial Structure)
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              在毛髮茂密的動物身上，毛髮直立能形成<strong>厚厚的空氣隔熱層</strong>
              來保溫；人類毛髮雖然已退化稀疏，但此防寒反射神經機制依然完整保留。
            </p>
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.rose,
            lineHeight: 1.4,
          }}
        >
          <strong>防寒三寶：</strong>
          鳥類靠「羽毛」、陸生哺乳類靠「毛髮」、海洋哺乳類靠「厚皮下脂肪」。
        </div>
      </div>
    </div>

    <PageFooter tip="空氣是絕佳的不良導熱體，羽毛與毛髮能留住一層靜止空氣層達到保溫效果" />
  </div>
);

const SlideHumanThermoRegulation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體體溫調節機制：腦部的動態天平"
      subtitle="調節中樞位於腦部 · 炎熱散熱 vs 寒冷產熱與保溫生理回饋"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div
        style={{
          background: palette.blueLight,
          border: `2px solid ${palette.blueBorder}`,
          borderRadius: 16,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span
            style={{
              background: palette.blue,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            情境 A
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.blue }}>
            天氣寒冷時（防失溫：增加產熱 ＋ 減少散熱）
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            background: palette.surface,
            borderRadius: 12,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>① 刺激</span>
            <span style={{ fontSize: 21, color: palette.text }}>環境氣溫降低 ➔ 體溫下降趨勢</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>② 感測</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              刺激<strong>腦部（下視丘體溫調節中樞）</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>③ 散熱↓</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              皮膚表面<strong style={{ color: palette.blue }}>微血管收縮</strong>
              （臉色蒼白，減少血液散熱）
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>④ 產熱↑</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              骨骼肌不由自主<strong style={{ color: palette.rose }}>顫抖</strong>
              產熱；甲狀腺素分泌促進代謝
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>⑤ 行為</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              <strong style={{ color: palette.amber }}>食慾增加</strong>
              （多吃高熱量食物補充燃料）、多穿衣服
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.emerald, fontWeight: 800 }}>⑥ 結果</span>
            <span style={{ fontSize: 21, color: palette.emerald, fontWeight: 700 }}>
              體溫回升至 37℃ 正常恆定範圍！
            </span>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 10,
            padding: '10px 16px',
            fontSize: 20,
            color: palette.muted,
          }}
        >
          💡 <strong>冬天打哆嗦：</strong>肌肉快速微幅收縮顫抖，每小時可增加數倍的體熱生成。
        </div>
      </div>

      <div
        style={{
          background: palette.roseLight,
          border: `2px solid ${palette.roseBorder}`,
          borderRadius: 16,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <span
            style={{
              background: palette.rose,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            情境 B
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
            天氣炎熱或劇烈運動後（防中暑：增加散熱 ＋ 減少產熱）
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            background: palette.surface,
            borderRadius: 12,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>① 刺激</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              環境氣溫高 / 運動產熱 ➔ 體溫上升趨勢
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>② 感測</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              刺激<strong>腦部（下視丘體溫調節中樞）</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>③ 散熱↑</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              皮膚表面<strong style={{ color: palette.rose }}>微血管擴張</strong>
              （面紅耳赤，血液向體表散熱）
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>④ 散熱↑</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              汗腺大量<strong style={{ color: palette.cyan }}>分泌汗液</strong>
              （汗水蒸發帶走大量汽化熱）
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>⑤ 行為</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              <strong style={{ color: palette.muted }}>食慾減退</strong>、活動量降低，減少代謝熱產生
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.emerald, fontWeight: 800 }}>⑥ 結果</span>
            <span style={{ fontSize: 21, color: palette.emerald, fontWeight: 700 }}>
              體溫下降至 37℃ 正常恆定範圍！
            </span>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 10,
            padding: '10px 16px',
            fontSize: 20,
            color: palette.muted,
          }}
        >
          💡 <strong>夏天運動後臉紅流汗：</strong>
          微血管擴張將熱血引至體表輻射散熱，汗水蒸發高效降溫。
        </div>
      </div>
    </div>

    <PageFooter tip="寒冷時：血管收縮、肌肉顫抖、食慾上升；炎熱時：血管擴張、流汗、食慾下降" />
  </div>
);

const SlideBloodSugarBankOverview: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體內的血糖銀行：葡萄糖與肝糖"
      subtitle="細胞能量的通用貨幣 · 肝臟扮演人體最大血糖調度金庫"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本高清原圖：64-1 人體內的血糖銀行
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 460,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={bloodSugarBank64Img}
              alt="人體內的血糖銀行概念掛圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲ 血液葡萄糖流通 vs 肝臟以肝糖形式存儲
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.emerald,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          正常空腹血糖濃度：約 70 ∼ 110 mg / 100 mL (dL)
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald, marginBottom: 6 }}>
            什麼是血糖？為什麼需要「血糖銀行」？
          </div>
          <p style={{ fontSize: 20, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            「血糖」專指血液中溶解的
            <strong style={{ color: palette.emerald }}>「葡萄糖 (Glucose)」</strong>。
            人體腦細胞完全依賴葡萄糖作為能量來源，且無法耐受缺糖。但人類進食是一陣一陣的，餐後大量葡萄糖湧入，空腹飢餓時又無糖補充，因此必須建立存提調度機制！
          </p>
        </div>

        {[
          {
            term: '血糖 (葡萄糖 Glucose)',
            role: '流通中的「活期現金」',
            feat: '單醣小分子，溶於血漿中隨血液循環運送全身，供細胞直接進行呼吸作用產生 ATP 能量。',
            color: palette.cyan,
            bg: palette.cyanLight,
            border: palette.cyanBorder,
          },
          {
            term: '肝糖 (Glycogen)',
            role: '存入金庫的「定期存款」',
            feat: '多醣大分子，由成千上萬個葡萄糖串聯而成，難溶於水，主要儲存在「肝臟」與「骨骼肌」中。',
            color: palette.purple,
            bg: palette.purpleLight,
            border: palette.purpleBorder,
          },
          {
            term: '血糖調控的核心器官：肝臟',
            role: '總行金庫 (The Central Bank)',
            feat: '飯後接收來自消化道充沛的葡萄糖合成肝糖儲存；飢餓或劇烈運動時，分解肝糖釋出葡萄糖進入血液。',
            color: palette.amber,
            bg: palette.amberLight,
            border: palette.amberBorder,
          },
        ].map((item) => (
          <div
            key={item.term}
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
              borderRadius: 14,
              padding: '14px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: item.color }}>{item.term}</span>
              <span
                style={{
                  fontSize: 19,
                  fontWeight: 700,
                  background: palette.surface,
                  padding: '2px 10px',
                  borderRadius: 6,
                  color: palette.muted,
                }}
              >
                {item.role}
              </span>
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>{item.feat}</div>
          </div>
        ))}
      </div>
    </div>

    <PageFooter tip="葡萄糖是小分子現金（流通血液）；肝糖是大分子存款（儲存於肝臟）" />
  </div>
);

const SlideHormoneBloodSugarControl: Page = () => (
  <div style={fill}>
    <PageHeader
      title="三大荷爾蒙的血糖調節機制"
      subtitle="胰島素 vs 升糖素拮抗平衡 · 腎上腺素緊急動員升血糖"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            體內唯一降血糖荷爾蒙 vs 多種升血糖荷爾蒙
          </div>
          <p style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5, margin: 0 }}>
            在漫長演化史上，人類經常面臨飢荒，因此體內演化出多種升血糖荷爾蒙保命，但
            <strong style={{ color: palette.emerald }}>
              降低血糖的荷爾蒙全身體內「只有胰島素一種」
            </strong>
            ！
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
          {[
            {
              name: '胰島素 (Insulin)',
              source: '胰臟（胰島細胞）',
              timing: '用餐後、飽食後血糖上升時',
              effect: '全身體內「唯一」能降低血糖的荷爾蒙！',
              action: '① 促進細胞加速吸收利用葡萄糖；② 促使肝臟與肌肉將葡萄糖轉化為「肝糖」儲存。',
              color: palette.emerald,
              bg: palette.emeraldLight,
              border: palette.emeraldBorder,
            },
            {
              name: '升糖素 (Glucagon)',
              source: '胰臟（胰島細胞）',
              timing: '空腹時、飢餓時、兩餐之間血糖偏低時',
              effect: '專門負責日常「升高血糖」穩定供應腦部。',
              action: '促使肝臟中的「肝糖分解為葡萄糖」，釋放進入血液中，使血糖濃度回升。',
              color: palette.blue,
              bg: palette.blueLight,
              border: palette.blueBorder,
            },
            {
              name: '腎上腺素 (Adrenaline)',
              source: '腎上腺（髓質）',
              timing: '劇烈運動、緊張、恐懼、面臨危急戰逃時',
              effect: '「爆發性升高血糖」供應肌肉瞬間迎敵逃跑。',
              action: '強力促使肝糖極速分解為葡萄糖，同時使心跳加快、血壓上升、呼吸加深。',
              color: palette.rose,
              bg: palette.roseLight,
              border: palette.roseBorder,
            },
          ].map((h) => (
            <div
              key={h.name}
              style={{
                background: h.bg,
                border: `1px solid ${h.border}`,
                borderRadius: 14,
                padding: '14px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 22, fontWeight: 800, color: h.color }}>{h.name}</span>
                <span
                  style={{
                    fontSize: 19,
                    fontWeight: 700,
                    background: palette.surface,
                    padding: '2px 10px',
                    borderRadius: 6,
                    color: palette.muted,
                  }}
                >
                  分泌處：{h.source}
                </span>
              </div>
              <div style={{ fontSize: 20, color: palette.text }}>
                <strong>時機：</strong>
                {h.timing} ➔ <strong style={{ color: h.color }}>{h.effect}</strong>
              </div>
              <div style={{ fontSize: 20, color: palette.muted }}>
                <strong>機制：</strong>
                {h.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本原圖：血糖調節流程與回饋示意圖
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 380,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={bloodSugarRegulationImg}
              alt="血糖調節迴路與胰島素升糖素流程圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲ 血糖高促進胰島素分泌；血糖低促進升糖素分泌
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.rose,
            lineHeight: 1.4,
          }}
        >
          <strong>口訣速記：</strong>
          「胰」想天開降血糖（胰島素）；升糖、腎上腺素齊心協力把糖「升」！
        </div>
      </div>
    </div>

    <PageFooter tip="降血糖只有「胰島素」；升血糖有「升糖素」與「腎上腺素」" />
  </div>
);

const SlideBloodSugarFluctuationCurve: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體進食與運動的血糖曲線剖析"
      subtitle="進食後血糖飆升 ➔ 胰島素發威降糖 ➔ 空腹飢餓 ➔ 升糖素出動"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本高清原圖：65-1 人體的血糖濃度升降動態圖
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 440,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={bloodSugarFluctuation65Img}
              alt="人體進食後與空腹時血糖濃度升降變化圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲
            甲階段（用餐後吸收上升）、乙階段（胰島素降糖）、丙階段（空腹降糖）、丁階段（升糖素回補）
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            四大階段關鍵生理過程解析
          </div>
          <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.4 }}>
            會考最愛考曲線各轉折點的荷爾蒙分泌與物質變化方向！
          </p>
        </div>

        {[
          {
            phase: '階段 1：進食後 30 ∼ 60 分鐘',
            trend: '血糖顯著上升 ↑',
            reason: '小腸絨毛大量吸收食物中的葡萄糖，經血液送入體內循環。',
            color: palette.rose,
            bg: palette.roseLight,
          },
          {
            phase: '階段 2：進食後 1 ∼ 2 小時',
            trend: '血糖迅速下降 ↓',
            reason: '高血糖刺激胰臟大量釋出「胰島素」，加速細胞利用並合成肝糖。',
            color: palette.emerald,
            bg: palette.emeraldLight,
          },
          {
            phase: '階段 3：兩餐之間或空腹運動',
            trend: '血糖緩慢偏低 ➔ 刺激回升',
            reason: '細胞持續消耗能量，血糖微降；刺激「升糖素」分泌，分解肝糖回補。',
            color: palette.blue,
            bg: palette.blueLight,
          },
          {
            phase: '階段 4：面臨突發危急事件',
            trend: '血糖急劇飆升 ↑↑',
            reason: '交感神經刺激「腎上腺素」爆發性分泌，強迫肝糖大量分解應戰！',
            color: palette.amber,
            bg: palette.amberLight,
          },
        ].map((item) => (
          <div
            key={item.phase}
            style={{
              background: item.bg,
              borderRadius: 12,
              padding: '12px 16px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: 21, color: palette.text }}>{item.phase}</strong>
              <span style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.trend}</span>
            </div>
            <div style={{ fontSize: 19, color: palette.muted, marginTop: 4, lineHeight: 1.35 }}>
              {item.reason}
            </div>
          </div>
        ))}

        <div
          style={{
            background: palette.purpleLight,
            border: `1px solid ${palette.purpleBorder}`,
            borderRadius: 12,
            padding: '10px 16px',
            fontSize: 20,
            color: palette.purple,
            fontWeight: 700,
          }}
        >
          糖尿病成因：胰島素分泌不足或細胞受體不敏感，導致血糖居高不下自尿中排出。
        </div>
      </div>
    </div>

    <PageFooter tip="飯後血糖上升促使胰島素分泌；空腹運動血糖偏低促使升糖素分泌" />
  </div>
);

const SlideOrganSystemsCoordination: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體各大器官系統的協同作用"
      subtitle="恆定性不是單一器官的獨角戲 · 多大系統環環相扣維持生命"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 8,
              alignSelf: 'flex-start',
            }}
          >
            課本全彩總結掛圖：66-1 人體的器官系統協調圖
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 460,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={organSystemsCoordination66Img}
              alt="人體各大器官系統相互協同維持恆定總結圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, textAlign: 'center' }}>
            ▲ 循環系統作為樞紐核心，連結消化、呼吸、排泄、神經與內分泌系統
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div
          style={{
            background: palette.indigoLight,
            border: `1px solid ${palette.indigoBorder}`,
            borderRadius: 14,
            padding: '14px 18px',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo, marginBottom: 4 }}>
            🩸 循環系統 (Circulatory System) —— 交通運輸中樞
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            心臟搏動推動血液，將消化系統吸收的養分、呼吸系統攝取的氧氣、內分泌釋放的荷爾蒙運送到全身；並將代謝廢物送往肺臟與腎臟。
          </div>
        </div>

        {[
          {
            sys: '消化系統',
            func: '將食物大分子分解為葡萄糖、胺基酸，由小腸絨毛吸收，提供能量燃料與原料。',
            color: palette.amber,
          },
          {
            sys: '呼吸系統',
            func: '吸入 O₂ 供細胞進行呼吸作用；排出呼吸作用產生的廢氣 CO₂，維持血液酸鹼平衡。',
            color: palette.cyan,
          },
          {
            sys: '泌尿與排泄系統',
            func: '腎臟過濾血液中尿素與多餘水分鹽類；皮膚排汗排熱；維持水分與電解質恆定。',
            color: palette.blue,
          },
          {
            sys: '神經與內分泌系統',
            func: '扮演總指揮部。腦部偵測血液狀態，神經快速傳導反射，荷爾蒙持久調控各器官運作。',
            color: palette.purple,
          },
        ].map((item) => (
          <div
            key={item.sys}
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '10px 16px',
            }}
          >
            <strong style={{ fontSize: 21, color: item.color }}>● {item.sys}：</strong>
            <span style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>{item.func}</span>
          </div>
        ))}
      </div>
    </div>

    <PageFooter tip="各器官系統相互協調配合，共同維持人體內部環境的動態平衡（恆定性）" />
  </div>
);

const SlideClassicQuestions: Page = () => (
  <div style={fill}>
    <PageHeader
      title="國中會考經典題型與易錯陷阱解析"
      subtitle="112 年會考體溫潛伏期真題 ＆ 114 年會考餐後血糖曲線真題"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1px solid ${palette.border}`,
          borderRadius: 16,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <span
            style={{
              background: palette.rose,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            112 會考真題
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>
            體溫恆定與微生物感染潛伏期
          </span>
        </div>

        <div
          style={{
            height: 190,
            background: '#f8fafc',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 6,
          }}
        >
          <ZoomableImage
            src={question112TempImg}
            alt="112 年會考體溫範圍與近十天體溫紀錄曲線"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
          <strong>題目：</strong>圖為小杉體溫恆定範圍及近十天體溫紀錄，感染微生物 X 的潛伏期為 1～3
          天，發病時體溫超過恆定範圍發燒。推測小杉最可能在第幾天感染？
          <br />
          (A) 第 1 天　(B) 第 3 天　(C) 第 6 天　(D) 第 8 天
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 20,
            color: palette.emerald,
            lineHeight: 1.4,
          }}
        >
          <strong>正確答案：(B)</strong>
          <br />
          <strong>解析：</strong>第 6 天早晨體溫明顯超出恆定範圍（發病）。潛伏期 1～3 天倒推：6 - 3
          = 3，6 - 1 = 5，故感染時間落在第 3～5 天，選項中僅 (B) 符合！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `1px solid ${palette.border}`,
          borderRadius: 16,
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <span
            style={{
              background: palette.blue,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            114 會考真題
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>
            進食不同食物的平均血糖變化
          </span>
        </div>

        <div
          style={{
            height: 190,
            background: '#f8fafc',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: 6,
          }}
        >
          <ZoomableImage
            src={question114GlucoseImg}
            alt="114 年會考進食甲乙食物餐後時間血糖濃度圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
          <strong>題目：</strong>
          健康成人吃了等量食物甲或乙後的平均血糖變化如圖。根據此圖推論，下列何者最合理？
          <br />
          (A) 甲比乙更早導致升糖素分泌增加
          <br />
          (B) 甲比乙更早導致胰島素分泌增加
          <br />
          (C) 乙比甲更早導致升糖素分泌增加
          <br />
          (D) 乙比甲更早導致胰島素分泌增加
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 10,
            padding: '12px 16px',
            fontSize: 20,
            color: palette.emerald,
            lineHeight: 1.4,
          }}
        >
          <strong>正確答案：(B)</strong>
          <br />
          <strong>解析：</strong>
          餐後血糖升高會刺激「胰島素」分泌。圖中甲曲線升糖速率遠比乙陡峭且更早達到高點，因此甲會更早刺激胰島素分泌，故選
          (B)。
        </div>
      </div>
    </div>

    <PageFooter tip="會考解題心法：審題抓緊發病起點倒推潛伏期；看清曲線斜率與荷爾蒙分泌連動邏輯" />
  </div>
);

const SlideMindMapSummary: Page = () => (
  <div style={fill}>
    <PageHeader
      title="單元重點總結與會考滿分心智圖"
      subtitle="體溫分類調節、人體天平回饋、血糖銀行運作與系統協調整合"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 16,
        minHeight: 0,
      }}
    >
      {[
        {
          sec: '1. 體溫策略分類',
          color: palette.rose,
          bg: palette.roseLight,
          border: palette.roseBorder,
          points: [
            '內溫動物：鳥類、哺乳類（代謝產熱、體溫恆定、羽毛毛髮保溫）。',
            '外溫動物：魚、兩生、爬蟲、昆蟲（吸收環境熱、曬太陽/躲陰涼）。',
            '繪圖鑑別：內溫呈水平直線，外溫呈隨環境上揚斜線。',
            '雞皮疙瘩：豎毛肌收縮，人類防寒演化遺跡。',
          ],
        },
        {
          sec: '2. 人體體溫調節',
          color: palette.amber,
          bg: palette.amberLight,
          border: palette.amberBorder,
          points: [
            '調控中樞：位於腦部（下視丘）。',
            '受寒：血管收縮（減散熱）、肌肉顫抖（增產熱）、食慾上升。',
            '過熱：血管擴張（臉紅增散熱）、汗腺排汗（蒸發帶走熱量）、食慾下降。',
            '散熱關鍵：汗水蒸發吸收體表汽化熱。',
          ],
        },
        {
          sec: '3. 人體血糖銀行',
          color: palette.emerald,
          bg: palette.emeraldLight,
          border: palette.emeraldBorder,
          points: [
            '流通現金：血液中葡萄糖（細胞呼吸作用能量來源）。',
            '存款金庫：肝臟與肌肉中儲存的肝糖。',
            '降血糖唯一王牌：胰島素（促進利用、合成肝糖）。',
            '升血糖日常與應急：升糖素（分解肝糖）、腎上腺素（危急大量升糖）。',
          ],
        },
        {
          sec: '4. 器官系統協同',
          color: palette.blue,
          bg: palette.blueLight,
          border: palette.blueBorder,
          points: [
            '循環系統：全身體內運輸物資核心紐帶。',
            '消化系統提供養分；呼吸系統提供 O₂ 並排 CO₂。',
            '排泄系統排除尿素與調節水分鹽類。',
            '神經與內分泌系統：聯合擔任指揮中樞，共創恆定性。',
          ],
        },
      ].map((card) => (
        <div
          key={card.sec}
          style={{
            background: card.bg,
            border: `2px solid ${card.border}`,
            borderRadius: 16,
            padding: '18px 18px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: card.color,
              marginBottom: 12,
              borderBottom: `2px solid ${card.border}`,
              paddingBottom: 8,
            }}
          >
            {card.sec}
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              flex: 1,
            }}
          >
            {card.points.map((pt, i) => (
              <li
                key={i}
                style={{
                  fontSize: 20,
                  color: palette.text,
                  lineHeight: 1.4,
                  display: 'flex',
                  gap: 8,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: card.color, fontWeight: 800, fontSize: 20 }}>●</span>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: 14,
        background: palette.surface,
        border: `1px solid ${palette.border}`,
        borderRadius: 12,
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 20,
        fontWeight: 700,
        color: palette.muted,
      }}
    >
      <span>
        🎯 滿分口訣：體溫看代謝與羽毛 · 寒冷抖肌肉熱排汗 · 降糖胰島升糖素 · 六大系統齊同心
      </span>
      <span style={{ color: palette.blue }}>國中生物第一冊（上）全課程圓滿完成！</span>
    </div>

    <PageFooter tip="恭喜學完全冊課程！掌握生物恆定性本質，會考自然科 A++ 勢在必得" />
  </div>
);

export default [
  Cover,
  SlideTemperatureImportance,
  SlideEndoEctoComparison,
  SlideEctothermBehavior,
  SlideEndothermInsulation,
  SlideHumanThermoRegulation,
  SlideBloodSugarBankOverview,
  SlideHormoneBloodSugarControl,
  SlideBloodSugarFluctuationCurve,
  SlideOrganSystemsCoordination,
  SlideClassicQuestions,
  SlideMindMapSummary,
];
