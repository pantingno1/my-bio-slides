import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import animalCellImg from './assets/animal-cell.jpg';
import animalHierarchyImg from './assets/animal-hierarchy.jpg';
import cellDiscoveryImg from './assets/cell-discovery.jpg';
import guardCellImg from './assets/guard-cell.jpg';
import membraneTransportImg from './assets/membrane-transport.jpg';
import onionCellImg from './assets/onion-cell.jpg';
import oralCellImg from './assets/oral-cell.jpg';
import osmosisImg from './assets/osmosis.jpg';
import plantCellImg from './assets/plant-cell.jpg';
import plantHierarchyImg from './assets/plant-hierarchy.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#f8fafc',
    text: '#0f172a',
    accent: '#059669',
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
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
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
  category = '國中自然科學 · 生物（一上）單元 2',
  title,
  subtitle,
}: {
  category?: string;
  title: string;
  subtitle?: string;
}) => (
  <div style={{ marginBottom: 26, flexShrink: 0 }}>
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '4px 14px',
        borderRadius: 999,
        background: palette.emeraldLight,
        border: `1px solid ${palette.emeraldBorder}`,
        color: palette.emerald,
        fontSize: 23,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 8,
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: palette.emerald,
        }}
      />
      {category}
    </div>
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
      }}
    >
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
        flexShrink: 0,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span
          style={{
            fontWeight: 700,
            color: palette.emerald,
            background: palette.emeraldLight,
            padding: '3px 10px',
            borderRadius: 6,
          }}
        >
          核心考點牢記四大觀念：洋蔥表皮無葉綠體、植物也有粒線體、膜控進出壁支持、植物無器官系統！
        </span>
        <span>{tip || '配合國中生物課本單元 2-1 至 2-4 及實驗 2-1'}</span>
      </div>
      <div
        style={{
          fontVariantNumeric: 'tabular-nums',
          fontWeight: 600,
          color: palette.faint,
        }}
      >
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
      alignItems: 'center',
      textAlign: 'center',
      padding: '60px 100px',
      background: 'radial-gradient(circle at 50% 30%, #ecfdf5 0%, #f8fafc 70%)',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        padding: '6px 20px',
        borderRadius: 999,
        background: palette.emeraldLight,
        border: `1px solid ${palette.emeraldBorder}`,
        color: palette.emerald,
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: '0.06em',
        marginBottom: 28,
      }}
    >
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: palette.emerald,
        }}
      />
      國中自然科學 生物
    </div>

    <h1
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: '96px',
        fontWeight: 900,
        color: palette.text,
        margin: '0 0 20px 0',
        lineHeight: 1.15,
        letterSpacing: '-0.03em',
      }}
    >
      <span style={{ fontSize: '96px' }}>生命的基本單位</span>
      <br />
      <span
        style={{
          background: 'linear-gradient(135deg, #059669 0%, #0284c7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '96px',
        }}
      >
        細胞構造與生理功能
      </span>
    </h1>

    <p
      style={{
        fontSize: 30,
        color: palette.muted,
        maxWidth: 960,
        margin: '0 0 44px 0',
        lineHeight: 1.6,
      }}
    >
      從虎克的顯微發現到細胞學說 · 胞器微觀功能 · 物質跨膜運輸機制 · 生物組成層次與玻片實作
    </p>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 260px)',
        gap: 20,
        marginBottom: 40,
      }}
    >
      {[
        {
          tag: '01 歷史與學說',
          desc: '虎克命名 · 許旺許萊登細胞學說',
          color: palette.teal,
          bg: palette.tealLight,
        },
        {
          tag: '02 胞器解析',
          desc: '動植物細胞構造 · 能量工廠',
          color: palette.emerald,
          bg: palette.emeraldLight,
        },
        {
          tag: '03 物質進出',
          desc: '擴散作用 · 滲透壓 · 膜蛋白通道',
          color: palette.blue,
          bg: palette.blueLight,
        },
        {
          tag: '04 層次與實驗',
          desc: '動植物層次 · 洋蔥與口腔皮膜',
          color: palette.indigo,
          bg: palette.indigoLight,
        },
      ].map((item) => (
        <div
          key={item.tag}
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 20px',
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
            textAlign: 'left',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: item.bg,
              color: item.color,
              fontSize: 20,
              fontWeight: 800,
              padding: '3px 8px',
              borderRadius: 6,
              marginBottom: 8,
            }}
          >
            {item.tag}
          </div>
          <div style={{ fontSize: '30px', color: palette.text, fontWeight: 600, lineHeight: 1.4 }}>
            {item.desc}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        fontSize: 24,
        color: palette.muted,
      }}
    >
      <span>📖 國中生物科教學簡報</span>
      <span>•</span>
      <span>🔬 完整圖文詳解與會考重點</span>
      <span>•</span>
      <span>按空白鍵或方向鍵 ➔ 進入學習</span>
    </div>
  </div>
);

/* ────────────────────────── Page 2: 細胞的發現與細胞學說 ────────────────────────── */
const Discovery: Page = () => (
  <div style={fill}>
    <PageHeader
      title="細胞的發現與細胞學說的建立"
      subtitle="從虎克顯微鏡下的小格子，到奠定現代生物學的基石"
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          minHeight: 0,
        }}
      >
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
              17 世紀
            </span>
            <span style={{ fontSize: 26, fontWeight: 700, color: palette.text }}>
              虎克（Robert Hooke）與「Cell」的命名
            </span>
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.55 }}>
            • 1665 年，虎克利用自製複合顯微鏡觀察<strong>軟木塞薄片</strong>。<br />•
            觀察到蜂窩狀中空小格子，將其命名為 <strong>「Cell（細胞）」</strong>。<br />•{' '}
            <strong>關鍵考點：</strong>虎克看到的實際上是死細胞殘留的<strong>「細胞壁」</strong>
            ，並非完整活細胞！
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span
              style={{
                background: palette.emeraldLight,
                color: palette.emerald,
                padding: '3px 10px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 21,
              }}
            >
              19 世紀
            </span>
            <span style={{ fontSize: 26, fontWeight: 700, color: palette.text }}>
              許旺與許萊登：提出「細胞學說」
            </span>
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>許萊登（植物學家）</strong>：1838 年指出所有
            <strong>植物體皆由細胞構成</strong>。<br />• <strong>許旺（動物學家）</strong>：1839
            年提出所有<strong>動物體亦由細胞構成</strong>。<br />• <strong>細胞學說核心：</strong>
            生物體構造與生命功能的基本單位就是「細胞」。
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
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
              理論完備
            </span>
            <span style={{ fontSize: 26, fontWeight: 700, color: palette.text }}>
              魏修（Rudolf Virchow）的補充論點
            </span>
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.55 }}>
            • 1855 年提出名言：「所有的細胞皆來自既有細胞的增殖分裂」。
            <br />• 徹底打破古代「自然發生說」，確立生命連續性理論。
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
          <span style={{ fontSize: 28 }}>💡</span>
          <div
            style={{
              fontSize: 21,
              color: palette.emerald,
              fontWeight: 600,
              lineHeight: 1.45,
            }}
          >
            <strong>會考必背：</strong>
            細胞學說三大內涵——生物由細胞構成、細胞是生命基本單位、新細胞來自原有細胞分裂！
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
          src={cellDiscoveryImg}
          alt="細胞的發現與細胞學說歷史掛圖"
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

    <PageFooter tip="虎克以自製顯微鏡觀察軟木塞薄片（死細胞壁），許旺與許萊登確立細胞學說！" />
  </div>
);

/* ────────────────────────── Page 3: 動物細胞主要構造 ────────────────────────── */
const AnimalCell: Page = () => (
  <div style={fill}>
    <PageHeader
      title="微觀生命工廠：動物細胞的主要構造"
      subtitle="細胞膜、細胞核、細胞質、粒線體與液胞分工合作"
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 13,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.indigo}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.indigoLight,
                color: palette.indigo,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              生命中樞
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              細胞核（Nucleus）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 外有雙層<strong>核膜</strong>包裹，內含遺傳物質 <strong>DNA（染色質）</strong>。<br />
            • 掌控細胞的新陳代謝、生長發育與繁殖分裂，相當於細胞的「中央指揮部」。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.blueLight,
                color: palette.blue,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              物質守門員
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              細胞膜（Cell Membrane）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 主要由<strong>磷脂質雙層</strong>與<strong>膜蛋白</strong>組成。
            <br />• 具<strong>「選擇性通透」</strong>
            ，嚴格管制物質進出細胞，並維持細胞內部環境的相對恆定。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              反應場所
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              細胞質（Cytoplasm）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 為膠狀透明水溶液，內含多種酵素、營養物及懸浮各類胞器。
            <br />• 許多生化代謝反應（如物質合成、分解）在此進行。
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
            marginTop: 'auto',
          }}
        >
          <div
            style={{
              background: palette.roseLight,
              border: `1px solid ${palette.roseBorder}`,
              borderRadius: 14,
              padding: '14px 16px',
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 22,
                color: palette.rose,
                marginBottom: 4,
              }}
            >
              ⚡ 粒線體（能量工廠）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.45 }}>
              進行<strong>呼吸作用</strong>，將葡萄糖分解轉化為能量 ATP，供生命活動使用。
            </div>
          </div>

          <div
            style={{
              background: palette.tealLight,
              border: `1px solid ${palette.tealBorder}`,
              borderRadius: 14,
              padding: '14px 16px',
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 22,
                color: palette.teal,
                marginBottom: 4,
              }}
            >
              💧 液胞（小而多）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.45 }}>
              動物細胞通常具有<strong>多個小型液胞</strong>，負責儲存水分、養分與代謝廢物。
            </div>
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
          src={animalCellImg}
          alt="動物細胞的主要構造掛圖"
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

    <PageFooter tip="動物細胞具有細胞核、細胞膜、細胞質、粒線體與數個小型液胞，無細胞壁與葉綠體！" />
  </div>
);

/* ────────────────────────── Page 4: 植物細胞主要構造 ────────────────────────── */
const PlantCell: Page = () => (
  <div style={fill}>
    <PageHeader
      title="光合與支撐：植物細胞的主要構造"
      subtitle="細胞壁保護塑形、葉綠體製造養分、中央大液胞維持膨壓"
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 13,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              植物特有
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              細胞壁（Cell Wall）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 主要成分為<strong>纖維素</strong>，位於細胞膜外層。
            <br />• 提供支持與保護，使植物細胞具固定形狀（多為規則形狀）。
            <br />• <strong>易錯警訊：</strong>細胞壁為<strong>全透性</strong>，不能控制物質進出！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.emeraldLight,
                color: palette.emerald,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              綠色工廠
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              葉綠體（Chloroplast）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 內含<strong>葉綠素</strong>，吸收太陽能行<strong>光合作用</strong>製造葡萄糖。
            <br />• 主要分布於葉肉細胞與保衛細胞；<strong>洋蔥鱗葉表皮細胞無葉綠體</strong>！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.tealLight,
                color: palette.teal,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              水分膨壓
            </span>
            <span style={{ fontSize: 25, fontWeight: 700, color: palette.text }}>
              大型中央液胞（Vacuole）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 成熟植物細胞具<strong>單一巨大中央液胞</strong>，常佔據細胞 80% 以上體積。
            <br />• 儲存水分、養分與代謝物，充水時提供<strong>「膨壓」</strong>使草本植物挺拔。
          </div>
        </div>

        <div
          style={{
            background: palette.blueLight,
            border: `1px solid ${palette.blueBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: 28 }}>🌿</span>
          <div
            style={{
              fontSize: 21,
              color: palette.blue,
              fontWeight: 600,
              lineHeight: 1.45,
            }}
          >
            <strong>注意共有構造：</strong>植物同樣擁有「粒線體」，日夜皆持續進行呼吸作用分解養分！
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
          src={plantCellImg}
          alt="植物細胞的主要構造掛圖"
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

    <PageFooter tip="植物細胞特有：細胞壁（支持）、葉綠體（光合作用）；動植共有：核、膜、質、粒線體！" />
  </div>
);

/* ────────────────────────── Page 5: 動植物細胞構造全面對比 ────────────────────────── */
const CompareCells: Page = () => (
  <div style={fill}>
    <PageHeader
      title="動植物細胞構造大對照"
      subtitle="會考必考關鍵差異：構造清單、外觀形態與能量角色"
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          overflow: 'hidden',
          boxShadow: '0 6px 24px -4px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr 1fr 280px',
            background: palette.surfaceSubtle,
            borderBottom: `2px solid ${palette.border}`,
            padding: '16px 24px',
            fontWeight: 800,
            fontSize: 24,
            color: palette.text,
          }}
        >
          <div>比較項目</div>
          <div style={{ color: palette.blue }}>🐾 動物細胞</div>
          <div style={{ color: palette.emerald }}>🌱 植物細胞</div>
          <div>考點指引與說明</div>
        </div>

        {[
          {
            item: '外觀形狀',
            animal: '多不規則、圓形或隨功能變化',
            plant: '多呈規則形狀（如六角形、長方）',
            note: '植物因有細胞壁支撐而形狀固定',
          },
          {
            item: '細胞壁',
            animal: '❌ 無',
            plant: '✅ 有（主要成分為纖維素）',
            note: '保護與支持，為全透性',
          },
          {
            item: '葉綠體',
            animal: '❌ 無',
            plant: '✅ 綠色部位細胞有',
            note: '非所有植物細胞皆有（洋蔥表皮無）',
          },
          {
            item: '液胞特性',
            animal: '小而多個',
            plant: '單一大型中央液胞（常佔80%）',
            note: '植物大液胞提供膨壓支持植株',
          },
          {
            item: '粒線體',
            animal: '✅ 有（呼吸作用產能）',
            plant: '✅ 有（呼吸作用產能）',
            note: '動植物皆有！日夜持續產能',
          },
          {
            item: '細胞核 / 膜 / 質',
            animal: '✅ 皆具備',
            plant: '✅ 皆具備',
            note: '真核生物細胞共有之基本架構',
          },
        ].map((row, idx) => (
          <div
            key={row.item}
            style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr 1fr 280px',
              padding: '14px 24px',
              fontSize: 22,
              background: idx % 2 === 0 ? palette.surface : palette.surfaceSubtle,
              borderBottom: idx === 5 ? 'none' : `1px solid ${palette.border}`,
              alignItems: 'center',
            }}
          >
            <div style={{ fontWeight: 700, color: palette.text }}>{row.item}</div>
            <div style={{ color: palette.text, fontWeight: 500 }}>{row.animal}</div>
            <div style={{ color: palette.text, fontWeight: 500 }}>{row.plant}</div>
            <div style={{ color: palette.muted, fontSize: 21 }}>{row.note}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          marginTop: 'auto',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)',
            border: `1.5px solid ${palette.emeraldBorder}`,
            borderRadius: 16,
            padding: '18px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 30 }}>☀️</span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 800,
                color: palette.emerald,
              }}
            >
              葉綠體：能量製造廠
            </span>
          </div>
          <div style={{ fontSize: 22, color: palette.text, lineHeight: 1.55 }}>
            吸收<strong>太陽光能</strong>，利用水與二氧化碳合成 <strong>葡萄糖</strong>
            （化學能）並釋放氧氣。
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, #fff1f2 0%, #fff7ed 100%)',
            border: `1.5px solid ${palette.roseBorder}`,
            borderRadius: 16,
            padding: '18px 24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 30 }}>⚡</span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.rose }}>
              粒線體：能量轉換廠
            </span>
          </div>
          <div style={{ fontSize: 22, color: palette.text, lineHeight: 1.55 }}>
            利用氧氣分解<strong>葡萄糖</strong>，將化學能轉化為各項生理活動所需的{' '}
            <strong>ATP 能量</strong>。
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="口訣：『核膜質線兩家有，壁綠大胞植物留』；葉綠體製養分、粒線體釋能量！" />
  </div>
);

/* ────────────────────────── Page 6: 物質進出細胞的方式 ────────────────────────── */
const MembraneTransport: Page = () => (
  <div style={fill}>
    <PageHeader
      title="細胞膜的守門之道：物質進出細胞的方式"
      subtitle="脂雙層構造與特殊膜蛋白的選擇性通透調控"
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 13,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.teal}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.tealLight,
                color: palette.teal,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: '32px',
              }}
            >
              途徑一
            </span>
            <span style={{ fontSize: '32px', fontWeight: 700, color: palette.text }}>
              簡單擴散（直通脂雙層）
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>適用對象：</strong>氣體小分子（<strong>O₂、CO₂</strong>
            ）、脂溶性小<span style={{ fontSize: '26px' }}>分子</span>（甘油、脂肪酸）。
            <br />• <strong>機制：</strong>由高濃度向低濃度擴散，
            <strong>不需特殊蛋白質協助，不消耗細胞能量</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.indigo}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
              textAlign: 'center',
            }}
          >
            <span
              style={{
                background: palette.indigoLight,
                color: palette.indigo,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: '32px',
              }}
            >
              途徑二
            </span>
            <span style={{ fontSize: '32px', fontWeight: 700, color: palette.text }}>
              特殊蛋白質通道協助進出
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>適用對象：</strong>水溶性較大分子（<strong>葡萄糖、胺基酸</strong>
            ）及帶電離子（<strong>礦物質 Na⁺、K⁺</strong>）。
            <br />• <strong>機制：</strong>必須透過細胞膜上的<strong>專屬膜蛋白載體或通道</strong>
            ，具高度專一性。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 15,
            padding: '16px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 6,
            }}
          >
            <span
              style={{
                background: palette.blueLight,
                color: palette.blue,
                padding: '2px 8px',
                borderRadius: 5,
                fontWeight: 800,
                fontSize: '32px',
              }}
            >
              特殊雙道
            </span>
            <span style={{ fontSize: '32px', fontWeight: 700, color: palette.text }}>
              水分子的跨膜雙重管道
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            • 水分子極小，可直接<strong>微量穿透脂雙層</strong>。<br />• 細胞膜上具
            <strong>「水通道蛋白」</strong>，使水分子得以快速、大量通過（滲透作用）。
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
          <span style={{ fontSize: 28 }}>💡</span>
          <div
            style={{
              fontSize: 21,
              color: palette.emerald,
              fontWeight: 600,
              lineHeight: 1.45,
            }}
          >
            <strong>巨大分子警訊：</strong>
            澱粉、蛋白質等大分子「無法直接通過細胞膜」，需在消化道分解為葡萄糖、胺基酸才能進入細胞！
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
          src={membraneTransportImg}
          alt="物質進出細胞的方式掛圖"
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

    <PageFooter tip="氧氣、二氧化碳直通脂雙層；葡萄糖、胺基酸、礦物質需膜蛋白協助；水分子兩者皆可！" />
  </div>
);

/* ────────────────────────── Page 7: 擴散作用與滲透生理 ────────────────────────── */
const Osmosis: Page = () => (
  <div style={fill}>
    <PageHeader
      title="物理到生理：擴散作用與滲透現象"
      subtitle="動植物細胞置於不同濃度溶液中的體積與形態變化"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 36,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          minHeight: 0,
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 22px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 6,
            }}
          >
            🌊 擴散與滲透作用基本觀念
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>擴散作用：</strong>
            分子自高濃度向低濃度自由移動，最終達到均勻分佈的「動態平衡」。
            <br />• <strong>滲透作用：</strong>水分子專用的擴散作用，水分子經由半透膜自
            <strong>水多（低張）</strong>流向<strong>水少（高張）</strong>處。
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 12,
          }}
        >
          <div
            style={{
              background: palette.blueLight,
              borderRadius: 14,
              padding: '14px 18px',
              border: `1px solid ${palette.blueBorder}`,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 23,
                color: palette.blue,
                marginBottom: 4,
              }}
            >
              1. 置於低張溶液（如清水）
            </div>
            <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.5 }}>
              • <strong>動物紅血球：</strong>水大量滲入，細胞膨脹終致{' '}
              <strong style={{ color: palette.rose }}>破裂（溶血）</strong>。<br />•{' '}
              <strong>植物細胞：</strong>水滲入膨脹，但受{' '}
              <strong>細胞壁支撐抵抗膨壓，不會破裂</strong>！
            </div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 14,
              padding: '14px 18px',
              border: `1px solid ${palette.border}`,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 23,
                color: palette.text,
                marginBottom: 4,
              }}
            >
              2. 置於等張溶液（如 0.9% 生理食鹽水）
            </div>
            <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
              • 水分子進出細胞達到<strong>動態平衡</strong>，動物細胞維持凹盤狀、植物細胞維持原形。
            </div>
          </div>

          <div
            style={{
              background: palette.amberLight,
              borderRadius: 14,
              padding: '14px 18px',
              border: `1px solid ${palette.amberBorder}`,
            }}
          >
            <div
              style={{
                fontWeight: 800,
                fontSize: 23,
                color: palette.amber,
                marginBottom: 4,
              }}
            >
              3. 置於高張溶液（如濃食鹽水）
            </div>
            <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.5 }}>
              • <strong>動物紅血球：</strong>水大量滲出，細胞{' '}
              <strong style={{ color: palette.rose }}>萎縮皺縮</strong>。<br />•{' '}
              <strong>植物細胞：</strong>細胞質水分滲出萎縮，細胞膜脫離細胞壁（
              <strong>質壁分離</strong>）。
            </div>
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
          src={osmosisImg}
          alt="滲透作用掛圖"
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

    <PageFooter tip="清水中：動物紅血球膨脹破裂，植物細胞因細胞壁支持不破裂；濃鹽水中皆失水萎縮！" />
  </div>
);

/* ────────────────────────── Page 8: 生物體的組成層次 ────────────────────────── */
const Hierarchy: Page = () => (
  <div style={fill}>
    <PageHeader
      title="從微觀到巨觀：生物體的組成層次"
      subtitle="動物體五大層次 vs 植物體四大層次（植物無器官系統！）"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 36,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.blue}`,
          boxShadow: '0 6px 24px -4px rgba(15, 23, 42, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.blue }}>
            🐾 動物體的組成層次（5 層次）
          </span>
          <span
            style={{
              background: palette.blueLight,
              color: palette.blue,
              padding: '3px 10px',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            具器官系統
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: palette.surfaceSubtle,
            padding: '10px 14px',
            borderRadius: 10,
            fontSize: 21,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          <span>細胞</span>
          <span>➔</span>
          <span>組織</span>
          <span>➔</span>
          <span>器官</span>
          <span>➔</span>
          <span style={{ color: palette.blue }}>器官系統</span>
          <span>➔</span>
          <span>個體</span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            borderRadius: 12,
            padding: 8,
          }}
        >
          <ZoomableImage
            src={animalHierarchyImg}
            alt="動物體的組成層次掛圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 21,
            color: palette.muted,
            lineHeight: 1.5,
            marginTop: 'auto',
          }}
        >
          • <strong>實例解析：</strong>肌肉細胞 ➔ 肌肉組織 ➔ 胃 ➔ 消化系統（胃、小腸等器官分工） ➔
          人體。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.emerald}`,
          boxShadow: '0 6px 24px -4px rgba(15, 23, 42, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '26px',
          }}
        >
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.emerald }}>
            🌱 植物體的組成層次（4 層次）
          </span>
          <span
            style={{
              background: palette.roseLight,
              color: palette.rose,
              padding: '3px 10px',
              borderRadius: 6,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            ⚠️ 無器官系統！
          </span>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: palette.surfaceSubtle,
            padding: '10px 14px',
            borderRadius: 10,
            fontSize: 21,
            fontWeight: 700,
            color: palette.text,
          }}
        >
          <span>細胞</span>
          <span>➔</span>
          <span>組織</span>
          <span>➔</span>
          <span style={{ color: palette.emerald }}>六大器官</span>
          <span>➔</span>
          <span style={{ textDecoration: 'line-through', color: palette.faint }}>器官系統</span>
          <span>➔</span>
          <span>個體</span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            borderRadius: 12,
            padding: 8,
          }}
        >
          <ZoomableImage
            src={plantHierarchyImg}
            alt="植物體的組成層次掛圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 21,
            color: palette.muted,
            lineHeight: 1.5,
            marginTop: 'auto',
          }}
        >
          • <strong>營養器官：</strong>根、莖、葉（吸收運輸與養分製造）。
          <br />• <strong>繁殖器官：</strong>花、果實、種子（孕育下一代）。
        </div>
      </div>
    </div>

    <PageFooter tip="會考天王題：植物『沒有器官系統』！動物有五大層次，植物只有四大層次！" />
  </div>
);

/* ────────────────────────── Page 9: 實驗 2-1 顯微鏡下的細胞世界 ────────────────────────── */
const CellLab: Page = () => (
  <div style={fill}>
    <PageHeader
      title="實驗 2-1：顯微鏡下的動植物細胞觀察"
      subtitle="洋蔥表皮、風車草葉片與口腔皮膜細胞玻片製作與特徵"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 16,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              background: palette.amberLight,
              color: palette.amber,
              padding: '3px 8px',
              borderRadius: 5,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            標本一
          </span>
          <span style={{ fontSize: 25, fontWeight: 800, color: palette.text }}>
            洋蔥鱗葉表皮細胞
          </span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            borderRadius: 12,
            padding: 6,
          }}
        >
          <ZoomableImage
            src={onionCellImg}
            alt="洋蔥表皮細胞觀察掛圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 21,
            color: palette.muted,
            lineHeight: 1.5,
            marginTop: 'auto',
          }}
        >
          • <strong>染色劑：</strong>滴加<strong>碘液</strong>使細胞核染成黃褐色。
          <br />• <strong>外形：</strong>扁平長多角形，排列緊密如磚牆。
          <br />• <strong>致命陷阱：無葉綠體</strong>（生於地底不見光）！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 16,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              background: palette.emeraldLight,
              color: palette.emerald,
              padding: '3px 8px',
              borderRadius: 5,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            標本二
          </span>
          <span style={{ fontSize: 25, fontWeight: 800, color: palette.text }}>
            風車草保衛細胞與氣孔
          </span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            borderRadius: 12,
            padding: 6,
          }}
        >
          <ZoomableImage
            src={guardCellImg}
            alt="風車草下表皮細胞掛圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 21,
            color: palette.muted,
            lineHeight: 1.5,
            marginTop: 'auto',
          }}
        >
          • <strong>表皮細胞：</strong>扁平無色不規則，<strong>無葉綠體</strong>。<br />•{' '}
          <strong>保衛細胞：</strong>成對呈<strong>半月形</strong>，圍成<strong>氣孔</strong>。
          <br />• <strong>重點：保衛細胞內含葉綠體</strong>，可光合作用調節氣孔。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 16,
          boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              background: palette.blueLight,
              color: palette.blue,
              padding: '3px 8px',
              borderRadius: 5,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            標本三
          </span>
          <span style={{ fontSize: 25, fontWeight: 800, color: palette.text }}>
            人的口腔皮膜細胞
          </span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#fafafa',
            borderRadius: 12,
            padding: 6,
          }}
        >
          <ZoomableImage
            src={oralCellImg}
            alt="人的口腔皮膜細胞掛圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            fontSize: 21,
            color: palette.muted,
            lineHeight: 1.5,
            marginTop: 'auto',
          }}
        >
          • <strong>採樣染色：</strong>牙籤輕刮口腔內壁，滴加<strong>亞甲藍液</strong>使核染成深藍。
          <br />• <strong>特徵：</strong>形狀不規則且分散，邊緣略捲曲。
          <br />• <strong>差異：無細胞壁、無葉綠體</strong>。
        </div>
      </div>
    </div>

    <PageFooter tip="洋蔥表皮細胞無葉綠體（用碘液染核）；口腔皮膜用亞甲藍液；保衛細胞有葉綠體！" />
  </div>
);

/* ────────────────────────── Page 10: 會考衝刺：細胞單元常見迷思破解 ────────────────────────── */
const Myths: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考衝刺：細胞單元四大奪分迷思破解"
      subtitle="歷屆高頻陷阱題剖析，建立無懈可擊的生物核心概念"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
      }}
    >
      {[
        {
          num: '01',
          myth: '植物所有的細胞都含有葉綠體，能行光合作用？',
          reality:
            '只有綠色暴露於陽光的細胞（如葉肉細胞、幼莖、保衛細胞）才有葉綠體！洋蔥鱗葉表皮、植物根部細胞皆「沒有葉綠體」，不能行光合作用。',
          color: palette.emerald,
          bg: palette.emeraldLight,
        },
        {
          num: '02',
          myth: '植物白天有葉綠體行光合作用，所以不需要粒線體？',
          reality:
            '粒線體是真核細胞的能量轉換中心，動植物細胞「皆有粒線體」！植物日夜皆持續進行呼吸作用產生生命必需的 ATP 能量。',
          color: palette.rose,
          bg: palette.roseLight,
        },
        {
          num: '03',
          myth: '細胞壁質地堅韌保護細胞，因此能控制物質進出？',
          reality:
            '細胞壁主要由纖維素構成，屬於「全透性」，水與溶解物皆能自由穿透！真正具「選擇性通透」能控制物質進出的是「細胞膜」。',
          color: palette.blue,
          bg: palette.blueLight,
        },
        {
          num: '04',
          myth: '大樹的葉子被蟲咬掉，屬於大樹的「器官系統」受損？',
          reality:
            '植物體的組成層次只有「細胞 ➔ 組織 ➔ 器官 ➔ 個體」，根本「沒有器官系統」！葉子為植物的「營養器官」。',
          color: palette.indigo,
          bg: palette.indigoLight,
        },
      ].map((item) => (
        <div
          key={item.num}
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '24px 28px',
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                background: item.bg,
                color: item.color,
                fontWeight: 900,
                fontSize: 22,
                padding: '3px 10px',
                borderRadius: 8,
              }}
            >
              迷思 {item.num}
            </span>
            <span
              style={{
                fontSize: 25,
                fontWeight: 800,
                color: palette.rose,
              }}
            >
              ❌ {item.myth}
            </span>
          </div>
          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 22,
              color: palette.text,
              lineHeight: 1.6,
              marginTop: 'auto',
              borderLeft: `4px solid ${item.color}`,
            }}
          >
            <strong style={{ color: item.color }}>正確觀念：</strong>
            {item.reality}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="牢記四大觀念：洋蔥表皮無綠體、植物全天有粒線體、膜控進出壁支持、植物無器官系統！" />
  </div>
);

/* ────────────────────────── Page 11: 單元總結與四大核心口訣 ────────────────────────── */
const Summary: Page = () => (
  <div style={fill}>
    <PageHeader
      title="核心回顧：細胞單元四大黃金口訣"
      subtitle="統整胞器機能、跨膜路徑與組成層次，考前快速複習"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 720,
      }}
    >
      {[
        {
          num: '口訣一',
          title: '胞器四大分工角色',
          formula: '「核管遺傳膜守門，質裝代謝線產能；壁供支持塑形狀，綠製養分胞儲存。」',
          explanation:
            '細胞核掌管生命中樞，細胞膜選擇性通透，粒線體呼吸產能，植物特有壁支持、綠行光合、液胞儲存膨壓。',
          color: palette.emerald,
          bg: palette.emeraldLight,
        },
        {
          num: '口訣二',
          title: '動植物構造辨別',
          formula: '「核膜質線兩家有，壁綠大胞植物留；洋蔥表皮無葉綠，動植皆靠線度日。」',
          explanation:
            '真核四大共有件（核膜質線），植物三特（壁、綠、中央大液胞）。注意洋蔥鱗葉表皮細胞沒有葉綠體！',
          color: palette.teal,
          bg: palette.tealLight,
        },
        {
          num: '口訣三',
          title: '物質跨膜進出準則',
          formula: '「氣脂小分直穿膜，糖胺離子蛋白載；水走兩路皆暢通，澱粉蛋白大進不來。」',
          explanation:
            'O₂、CO₂ 脂溶性直接簡單擴散；葡萄糖、離子需通道蛋白；水分子雙重路徑；大分子必須消化分解。',
          color: palette.blue,
          bg: palette.blueLight,
        },
        {
          num: '口訣四',
          title: '組成層次與器官歸屬',
          formula: '「動物五層植四層，植物絕無器官系；根莖葉為營養器，花果種子傳子息。」',
          explanation:
            '動物具器官系統，植物無器官系統。植物六大器官中，根莖葉為營養器官，花果實種子為繁殖器官。',
          color: palette.indigo,
          bg: palette.indigoLight,
        },
      ].map((card) => (
        <div
          key={card.num}
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '24px 28px',
            border: `1px solid ${palette.border}`,
            boxShadow: '0 4px 18px -2px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 10,
            }}
          >
            <span
              style={{
                background: card.bg,
                color: card.color,
                fontWeight: 900,
                fontSize: 22,
                padding: '4px 10px',
                borderRadius: 8,
              }}
            >
              {card.num}
            </span>
            <span style={{ fontSize: 28, fontWeight: 800, color: palette.text }}>{card.title}</span>
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: card.color,
              background: card.bg,
              padding: '12px 16px',
              borderRadius: 10,
              marginBottom: 10,
              lineHeight: 1.5,
            }}
          >
            {card.formula}
          </div>
          <div
            style={{
              fontSize: 21,
              color: palette.muted,
              lineHeight: 1.55,
              marginTop: 'auto',
            }}
          >
            {card.explanation}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="複習完成！掌握四大口訣與實驗細節，生物細胞單元輕鬆得滿分！" />
  </div>
);

export const meta: SlideMeta = {
  title: '國中生物：細胞構造與生理功能',
};

export const notes: (string | undefined)[] = [
  '各位老師、同學大家好，今天我們要探討生命世界中最神奇微小而不可或缺的基本單位——細胞。',
  '首先介紹 17 世紀虎克命名 Cell 的歷史，以及 19 世紀許旺與許萊登建立的細胞學說。注意虎克看到的是死細胞壁。',
  '動物細胞由細胞膜、細胞核、細胞質、粒線體與數個小液胞組成。核為指揮中樞，粒線體為能量轉換工廠。',
  '植物細胞具有細胞壁與葉綠體，並擁有一個巨大的中央液胞提供膨壓。特別強調植物也有粒線體！',
  '動植物細胞構造大對照。記住洋蔥表皮無葉綠體，動植物皆有粒線體。',
  '物質進出細胞方式：氧氣二氧化碳簡單擴散；葡萄糖胺基酸需膜蛋白載體；水分子兩路皆通。',
  '滲透作用與動植物細胞在清水、食鹽水中的形態變化。紅血球清水破裂，植物細胞因細胞壁不破裂。',
  '生物體組成層次。動物有器官系統五大層次，植物只有四大層次（無器官系統）！',
  '實驗 2-1 觀察洋蔥表皮（碘液染核無綠體）、風車草保衛細胞（有綠體成對圍成氣孔）、口腔皮膜細胞（亞甲藍液染色）。',
  '會考常見四大陷阱迷思破解：洋蔥表皮無綠體、植物全天有粒線體、細胞壁為全透性、植物無器官系統。',
  '單元總結四大黃金口訣，幫助學生考前完整收斂記憶。',
];

export default [
  Cover,
  Discovery,
  AnimalCell,
  PlantCell,
  CompareCells,
  MembraneTransport,
  Osmosis,
  Hierarchy,
  CellLab,
  Myths,
  Summary,
] satisfies Page[];
