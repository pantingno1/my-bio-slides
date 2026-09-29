import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import bloodFlowExchangeImg from './assets/blood-flow-exchange.jpg';
import bloodVesselsImg from './assets/blood-vessels.jpg';
import heartContractionCycleImg from './assets/heart-contraction-cycle.jpg';
import heartStructureImg from './assets/heart-structure.jpg';
import immuneDefenseMechanismsImg from './assets/immune-defense-mechanisms.jpg';
import labHeartSoundPulseImg from './assets/lab-heart-sound-pulse.jpg';
import lymphaticCapillariesTissueFluidImg from './assets/lymphatic-capillaries-tissue-fluid.jpg';
import lymphaticCirculationCycleImg from './assets/lymphatic-circulation-cycle.jpg';
import lymphaticOrgansOverviewImg from './assets/lymphatic-organs-overview.jpg';
import pulmonaryCirculationImg from './assets/pulmonary-circulation.jpg';
import systemicCirculationImg from './assets/systemic-circulation.jpg';
import whiteBloodCellsCapillaryImg from './assets/white-blood-cells-capillary.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fcfbfa',
    text: '#1c1917',
    accent: '#e11d48',
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
  bg: '#fcfbfa',
  surface: '#ffffff',
  surfaceSubtle: '#f5f5f4',
  border: '#e7e5e4',
  text: '#1c1917',
  muted: '#78716c',
  faint: '#a8a29e',
  crimson: '#e11d48',
  crimsonLight: '#fff1f2',
  crimsonBorder: '#fecdd3',
  rose: '#be123c',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  blue: '#0284c7',
  blueLight: '#f0f9ff',
  blueBorder: '#bae6fd',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  amber: '#b45309',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
  purpleBorder: '#ddd6fe',
  indigo: '#4338ca',
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
        padding: '4px 14px',
        borderRadius: 999,
        background: palette.crimsonLight,
        border: `1px solid ${palette.crimsonBorder}`,
        color: palette.crimson,
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 6,
      }}
    >
      <span style={{ fontSize: 20 }}>●</span>
      <span>{category}</span>
    </div>
    <h2
      style={{
        fontFamily: 'var(--osd-font-display)',
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
      <div style={{ fontSize: 24, color: palette.muted, marginTop: 4, lineHeight: 1.3 }}>
        {subtitle}
      </div>
    )}
  </div>
);

const PageFooter = ({ note = '國中生物教學投影片 · 人體的循環與防禦系統' }: { note?: string }) => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        marginTop: 'auto',
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 20,
        color: palette.faint,
        borderTop: `1px solid ${palette.border}`,
        flexShrink: 0,
      }}
    >
      <span>{note}</span>
      <span
        style={{
          fontWeight: 600,
          color: palette.muted,
          fontVariantNumeric: 'tabular-nums',
          fontSize: 20,
        }}
      >
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const Cover: Page = () => (
  <div style={fill}>
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        maxWidth: 1600,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '6px 18px',
          borderRadius: 999,
          background: palette.crimsonLight,
          border: `1px solid ${palette.crimsonBorder}`,
          color: palette.crimson,
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '0.04em',
          marginBottom: 20,
        }}
      >
        <span>●</span>
        <span>國中自然科學 生物</span>
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: 88,
          fontWeight: 900,
          color: palette.text,
          margin: '0 0 16px 0',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
        }}
      >
        人體的循環與防禦系統
      </h1>

      <p
        style={{
          fontSize: 28,
          color: palette.muted,
          margin: '0 0 40px 0',
          lineHeight: 1.4,
          maxWidth: 1300,
        }}
      >
        心臟幫浦動力、血管運輸網絡、體肺雙循環氣體交換，以及淋巴體液平衡與免疫防禦
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          width: '100%',
        }}
      >
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 20,
            padding: '24px 28px',
            borderTop: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 8,
            }}
          >
            01 · 心血管循環系統
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
            心臟四腔室解剖位置、心室壁厚度比較、房室瓣與半月瓣防止逆流、三大血管結構與機能。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 20,
            padding: '24px 28px',
            borderTop: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 8,
            }}
          >
            02 · 體循環與肺循環
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
            充氧血與缺氧血轉換旅程、組織與肺泡微血管氣體擴散、探測心音與脈搏的成因異同。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 20,
            padding: '24px 28px',
            borderTop: `6px solid ${palette.emerald}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.emerald,
              marginBottom: 8,
            }}
          >
            03 · 淋巴系統與防禦
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
            體液平衡（血漿➔組織液➔淋巴液）、盲端淋巴管、淋巴器官，以及非專一性與專一性防線。
          </div>
        </div>
      </div>
    </div>
    <PageFooter note="國中自然科學 · 生物（一上）單元 4-3 ~ 4-4 全單元精要" />
  </div>
);

const SlideHeartStructure: Page = () => (
  <div style={fill}>
    <PageHeader
      title="心臟的位置與內部構造"
      subtitle="肌肉質的強大幫浦，掌握全身血液循環的動力中樞"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🫀 四腔室構造與「左右相反」原則
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>解剖方位：</strong>以受檢者自身為基準，<strong>圖左側為右心</strong>、
            <strong>圖右側為左心</strong>。
            <br />• <strong>上房下室：</strong>
            心房（上方，接收靜脈回心血，壁薄）；心室（下方，將血壓入動脈，壁厚）。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 6,
            }}
          >
            💪 心室壁厚度比較：左心室最厚
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>左心室壁最厚：</strong>需收縮產生巨大壓力，將血液搏出推動至
            <strong>全身各器官</strong>（體循環）。
            <br />• <strong>右心室壁較薄：</strong>只需將血液推送至鄰近的<strong>雙肺</strong>
            進行氣體交換（肺循環）。
          </div>
        </div>

        <div
          style={{
            background: palette.crimsonLight,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.crimsonBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🚪 瓣膜：血液單向流動的防逆流門戶
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>房室瓣：</strong>位於心房與心室之間，防止血液由心室逆流回心房。
            <br />• <strong>半月瓣：</strong>位於心室與出心動脈交界處，防止動脈血液逆流回心室。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={heartStructureImg}
          alt="心臟的位置與內部構造"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-3 心臟的位置與構造（點擊可全螢幕放大檢視各腔室與血管連接）
        </div>
      </div>
    </div>

    <PageFooter note="心臟內部具有瓣膜構造，確保血液只能單向流動，絕不倒流。" />
  </div>
);

const SlideHeartContraction: Page = () => (
  <div style={fill}>
    <PageHeader title="心臟的收縮與舒張" subtitle="節律性搏動推進血液，單向循環不走回頭路" />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 6,
            }}
          >
            ① 心房收縮，心室舒張（充血期）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>瓣膜狀態：</strong>房室瓣開啟，動脈入口的半月瓣關閉。
            <br />• <strong>血流方向：</strong>
            心房收縮將血液擠入心室，左心房血入左心室，右心房血入右心室。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            ② 心室收縮，心房舒張（射血期）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>瓣膜狀態：</strong>房室瓣迅速閉合防逆流，半月瓣被高壓推開。
            <br />• <strong>血流方向：</strong>
            左心室血液衝入主動脈，右心室血液衝入肺動脈；靜脈血同時回流進心房。
          </div>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          <strong>💡 血液流動恆定金律：</strong>
          <br />
          血液永遠依循<strong>「靜脈 ➔ 心房 ➔ 心室 ➔ 動脈」</strong>
          的方向流動，絕不可能由心房直接進入動脈！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={heartContractionCycleImg}
          alt="心臟的收縮與舒張"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-3 心臟收縮與舒張週期（點擊放大觀察血液流動與瓣膜開閉）
        </div>
      </div>
    </div>

    <PageFooter note="心臟收縮舒張交替進行，推動血液週而復始地在血管內流動。" />
  </div>
);

const SlideBloodVessels: Page = () => (
  <div style={fill}>
    <PageHeader
      title="動脈、微血管與靜脈之比較"
      subtitle="不同血管構造精準適應血壓環境與物質交換機能"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 4,
            }}
          >
            🔴 動脈 (Artery) · 導血離心
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>特徵：</strong>管壁最厚、彈性最大、管腔較小、承受最高血壓。
            <br />• <strong>功能：</strong>引導血液離開心臟，多埋藏於身體深處受骨骼肌肉保護。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 4,
            }}
          >
            🟣 微血管 (Capillary) · 物質交換
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>特徵：</strong>僅由<strong>單層內皮細胞</strong>
            組成，管徑極窄（僅容單顆紅血球通過）。
            <br />• <strong>功能：</strong>血液與組織細胞間進行氣體、養分與代謝廢物交換的
            <strong>唯一場所</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 4,
            }}
          >
            🔵 靜脈 (Vein) · 導血回心
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>特徵：</strong>管壁較薄、彈性較小、管腔最大、管內具備<strong>瓣膜</strong>
            防血液倒流。
            <br />• <strong>功能：</strong>引導血液返回心臟；體表青筋即為皮下靜脈。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={bloodVesselsImg}
          alt="三大血管橫切面與管壁構造比較"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-3 三大血管構造橫切面（點擊放大比對管壁厚度與靜脈瓣膜）
        </div>
      </div>
    </div>

    <PageFooter note="三大血管中，只有微血管能進行物質交換；只有靜脈管腔內具有瓣膜。" />
  </div>
);

const SlideBloodFlowExchange: Page = () => (
  <div style={fill}>
    <PageHeader title="血液流動規律與物質交換" subtitle="血壓梯度、流速調節與微血管擴散作用機制" />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.amber}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.amber,
              marginBottom: 6,
            }}
          >
            📊 血管流動重要物理參數比較
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            • <strong>血流方向：</strong>動脈 ➔ 微血管 ➔ 靜脈（不可逆）
            <br />• <strong>血壓高低：</strong>
            <strong>動脈 ＞ 微血管 ＞ 靜脈</strong>（靜脈血壓近乎為零）
            <br />• <strong>流速快慢：</strong>
            <strong>動脈 ＞ 靜脈 ＞ 微血管</strong>
          </div>
        </div>

        <div
          style={{
            background: palette.blueLight,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.blueBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 6,
            }}
          >
            🌊 為何微血管血流速度最慢？
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            全身微血管分支極為細密，其<strong>總管腔截面積最大</strong>
            ，使得血流緩慢通過，爭取最充足的時間讓物質進行<strong>擴散作用</strong>！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🔄 微血管物質交換方向
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>進入組織：</strong>血液中的氧氣、葡萄糖、胺基酸擴散進入細胞。
            <br />• <strong>進入血液：</strong>細胞代謝產生的二氧化碳、含氮廢物擴散進入血液。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={bloodFlowExchangeImg}
          alt="血液如何流動與微血管物質交換"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-3 血液流動與物質交換路徑（點擊放大檢視氣體與養分擴散）
        </div>
      </div>
    </div>

    <PageFooter note="微血管流速最慢、管壁最薄，是人體進行物質交換的專屬場所。" />
  </div>
);

const SlideLabHeartSoundPulse: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 4-2：探測心音與脈搏"
      subtitle="同頻率的生理律動，迥異的物理成因與量測原理"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 6,
            }}
          >
            🎧 心音 (Heart Sound) · 瓣膜閉合震動
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>物理成因：</strong>心臟<strong>瓣膜瞬間關閉</strong>引起的血液與心室壁震動。
            <br />• <strong>第一心音（低而長）：</strong>心室收縮，<strong>房室瓣關閉</strong>
            所發出。
            <br />• <strong>第二心音（高而短）：</strong>心室舒張，<strong>半月瓣關閉</strong>
            所發出。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🖐️ 脈搏 (Pulse) · 動脈管壁波動
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>物理成因：</strong>心室收縮射血，血液衝擊引起
            <strong>動脈管壁彈性擴張搏動</strong>。
            <br />• <strong>測量位置：</strong>體表淺層動脈處（如手腕大拇指側的
            <strong>橈動脈</strong>、頸動脈）。
          </div>
        </div>

        <div
          style={{
            background: palette.crimsonLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.crimsonBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          <strong>⚡ 核心結論：</strong>正常狀態下，每分鐘
          <strong>心跳次數 ＝ 心音次數 ＝ 脈搏次數</strong>！運動後代謝需求增加，三者同步等速加快。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={labHeartSoundPulseImg}
          alt="實驗 4-2 探測心音與脈搏操作方式"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 實驗 4-2 探測心音（聽診器）與量測脈搏（手腕橈動脈）操作
        </div>
      </div>
    </div>

    <PageFooter note="心音來自瓣膜關閉聲；脈搏來自心室射血引起的動脈管壁跳動。" />
  </div>
);

const SlideSystemicCirculation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="體循環：全身物質的分配與代謝"
      subtitle="大循環途徑，將充氧血輸往全身組織細胞並帶走代謝廢物"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🚀 體循環標準路徑（左出右回）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            <strong>左心室</strong>（收縮加壓）
            <br />➔ <strong>主動脈</strong> ➔ 各級動脈
            <br />➔ <strong>全身各器官微血管</strong>（物質交換）
            <br />➔ 各級靜脈 ➔ <strong>上、下大靜脈</strong>
            <br />➔ <strong>右心房</strong>（回心終點）
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 6,
            }}
          >
            🩸 血液特質轉變：充氧血 ➔ 缺氧血
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>出發時：</strong>左心室搏出鮮紅色的<strong>充氧血</strong>（富含氧氣與養分）。
            <br />• <strong>微血管交換：</strong>釋出氧與葡萄糖，吸收二氧化碳與代謝廢物。
            <br />• <strong>返心時：</strong>回流大靜脈變為暗紅色的<strong>缺氧血</strong>。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={systemicCirculationImg}
          alt="體循環全景示意圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 體循環路線（點擊放大檢視主動脈分支與上下大靜脈回流）
        </div>
      </div>
    </div>

    <PageFooter note="體循環由左心室出發，經過全身物質交換後，缺氧血返回右心房。" />
  </div>
);

const SlidePulmonaryCirculation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="肺循環：氣體交換與血液充氧"
      subtitle="小循環途徑，前往肺泡微血管排出二氧化碳並補充新鮮氧氣"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 6,
            }}
          >
            🫁 肺循環標準路徑（右出左回）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            <strong>右心室</strong>（收縮推動）
            <br />➔ <strong>肺動脈</strong>（流缺氧血！）
            <br />➔ <strong>肺泡微血管</strong>（排出 CO₂，吸收 O₂）
            <br />➔ <strong>肺靜脈</strong>（流充氧血！）
            <br />➔ <strong>左心房</strong>（充氧血抵達）
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            💨 肺泡氣體交換與顏色變化
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>氣體擴散：</strong>血液中的 CO₂ 擴散進肺泡（隨呼吸呼出），肺泡中高濃度的 O₂
            擴散進入血液。
            <br />• <strong>色彩轉變：</strong>暗紅色的<strong>缺氧血</strong>重新轉變為鮮紅色的
            <strong>充氧血</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.amberBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          ⚠️ <strong>會考常考陷阱辨析：</strong>
          動脈／靜脈命名是看<strong>「血流方向」</strong>
          （離心為動脈、回心為靜脈），絕非看含氧量！因此<strong>肺動脈流缺氧血</strong>、
          <strong>肺靜脈流充氧血</strong>。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={pulmonaryCirculationImg}
          alt="肺循環示意圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 肺循環路線（點擊放大比對肺動脈與肺靜脈氣體交換過程）
        </div>
      </div>
    </div>

    <PageFooter note="肺循環使缺氧血重新充氧，回歸左心房後銜接體循環。" />
  </div>
);

const SlideTissueFluidCapillaries: Page = () => (
  <div style={fill}>
    <PageHeader
      title="體液平衡：組織液與淋巴微管"
      subtitle="微血管滲透、細胞浸潤與盲端淋巴微管的液體回收機制"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.emerald}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.emerald,
              marginBottom: 6,
            }}
          >
            💧 體液「三兄弟」的轉換關係
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            • <strong>血漿 (Plasma)：</strong>微血管內流動的淡黃色液體。
            <br />• <strong>組織液 (Tissue Fluid)：</strong>部分血漿受壓
            <strong>滲出微血管壁</strong>進入細胞間隙，浸潤細胞。
            <br />• <strong>淋巴液 (Lymph)：</strong>約 10% 組織液滲入<strong>盲端淋巴微管</strong>
            ，稱為淋巴液。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.blue,
              marginBottom: 6,
            }}
          >
            🌿 盲端淋巴微管的構造特色
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>起點為盲端：</strong>一端封閉於組織間隙中，如同漏斗單向收集過多組織液。
            <br />• <strong>管壁單層通透：</strong>細胞間有微小重疊縫隙，液體只能流入、無法回流。
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.emeraldBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          <strong>⚖️ 維持體液平衡的重要使命：</strong>
          若淋巴管受阻或寄生蟲感染（如絲蟲病），組織液無法順利回收累積在組織間隙中，就會導致局部嚴重
          <strong>水腫 (Edema)</strong>！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={lymphaticCapillariesTissueFluidImg}
          alt="淋巴管收集組織液示意圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 淋巴管收集組織液示意圖（點擊放大觀察盲端淋巴管與微血管關係）
        </div>
      </div>
    </div>

    <PageFooter note="血漿滲出成組織液，組織液滲入盲端淋巴微管轉化為淋巴液。" />
  </div>
);

const SlideLymphaticCirculation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="淋巴循環途徑與防禦過濾"
      subtitle="單向流動的淋巴網絡、瓣膜防逆流機制與淋巴結過濾屏障"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.emerald}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.emerald,
              marginBottom: 6,
            }}
          >
            🗺️ 淋巴循環全程路徑（重返靜脈）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            <strong>盲端淋巴微管</strong>（收集組織液）
            <br />➔ <strong>淋巴管</strong>（管內具瓣膜）
            <br />➔ <strong>淋巴結</strong>（過濾清除病原體）
            <br />➔ <strong>淋巴總管</strong>（胸管與右淋巴導管）
            <br />➔ <strong>鎖骨下靜脈</strong>（匯入靜脈血，回流上大靜脈）
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 6,
            }}
          >
            🌊 淋巴液流動動力與瓣膜保證
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>流動動力：</strong>淋巴系統無心臟直接加壓，依賴周圍<strong>骨骼肌收縮</strong>
            與呼吸運動擠壓。
            <br />• <strong>瓣膜防逆流：</strong>淋巴管內富含<strong>密集瓣膜</strong>
            ，確保淋巴液朝向心臟單向推進。
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.emeraldBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          <strong>🛡️ 淋巴結的戰略哨站地位：</strong>
          淋巴結內含有豐富的<strong>淋巴球</strong>與<strong>吞噬細胞</strong>
          。當淋巴液流經時，病原體被濾除消滅，避免感染擴散至全身血液！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={lymphaticCirculationCycleImg}
          alt="人體淋巴系統循環途徑"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 人體淋巴系統循環（點擊放大觀察淋巴結與靜脈交會回流處）
        </div>
      </div>
    </div>

    <PageFooter note="淋巴液最終匯入鎖骨下靜脈，重返血液循環，維持循環血量。" />
  </div>
);

const SlideLymphaticOrgans: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體的淋巴器官與免疫屏障"
      subtitle="淋巴結、脾臟、扁桃腺與胸腺的全身戰略分佈"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.emerald}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.emerald,
              marginBottom: 4,
            }}
          >
            ① 淋巴結 (Lymph Nodes) · 防禦檢查哨
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            密集分佈於<strong>頸部、腋下、鼠蹊部</strong>
            。受到感染時，淋巴球大量增殖吞噬病菌，常出現腫脹與壓痛感。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 4,
            }}
          >
            ② 脾臟 (Spleen) · 最大淋巴器官
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            位於人體<strong>左上腹部</strong>；負責儲存血液、過濾清除血液中的病原體，並分解
            <strong>衰老退化的紅血球</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 4,
            }}
          >
            ③ 扁桃腺 (Tonsils) & ④ 胸腺 (Thymus)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>扁桃腺：</strong>位於咽門兩側，阻擋呼吸道與消化道入侵的病原體。
            <br />• <strong>胸腺：</strong>位於胸骨後方，是 <strong>T 淋巴球</strong>
            培育成熟與分化的關鍵中樞。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={lymphaticOrgansOverviewImg}
          alt="人體淋巴系統與器官分佈"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 人體淋巴系統全景（點擊放大檢視淋巴結、脾臟、扁桃腺與胸腺）
        </div>
      </div>
    </div>

    <PageFooter note="人體淋巴器官共同構築嚴密的免疫防禦網，保衛機體免受感染。" />
  </div>
);

const SlideWhiteBloodCells: Page = () => (
  <div style={fill}>
    <PageHeader
      title="白血球的變形蟲運動與吞噬作用"
      subtitle="穿透微血管壁抵達感染部位，人體內部的守護衛士"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 6,
            }}
          >
            🦠 變形蟲運動 (Amoeboid Movement)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>運動型態：</strong>伸出偽足改變細胞外形，可自主在血管與組織中移動。
            <br />• <strong>穿越血管壁：</strong>直接<strong>穿透微血管壁的內皮細胞間隙</strong>
            ，進入受感染的組織間隙。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 6,
            }}
          >
            🛡️ 吞噬作用與膿液形成
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
            • <strong>吞噬清除：</strong>包圍、吞入並分解病原菌及受損細胞碎片。
            <br />• <strong>膿液 (Pus)：</strong>
            大量白血球與細菌激烈交戰後，殉職的白血球遺體與壞死組織混合而成。
          </div>
        </div>

        <div
          style={{
            background: palette.crimsonLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.crimsonBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
          }}
        >
          <strong>🔥 發炎反應 (Inflammation)：</strong>
          感染部位微血管擴張、通透性大幅增加，使更多白血球與抗體滲出，局部呈現
          <strong>「紅、腫、熱、痛」</strong>現象。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={whiteBloodCellsCapillaryImg}
          alt="白血球穿透微血管壁進行吞噬"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-3 白血球穿過微血管壁進行吞噬作用（點擊可全螢幕放大檢視）
        </div>
      </div>
    </div>

    <PageFooter note="白血球可藉變形蟲運動穿透微血管壁，前往組織清除病原菌。" />
  </div>
);

const SlideImmuneDefense: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體防禦機制：三道防線全景"
      subtitle="皮膜物理屏障、非專一性發炎與專一性淋巴球抗體防護"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          overflowY: 'auto',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.amber}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.amber,
              marginBottom: 4,
            }}
          >
            🛡️ 第一道防線（皮膜物理與化學屏障 · 非專一性）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>外層防禦：</strong>皮膚角質層阻擋外界病菌。
            <br />• <strong>黏膜分泌：</strong>
            呼吸道黏液與纖毛掃除異物；胃液強酸（pH≈2）殺死食物中的微生物。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.crimson}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.crimson,
              marginBottom: 4,
            }}
          >
            ⚔️ 第二道防線（內部非專一性吞噬與發炎）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>吞噬防禦：</strong>白血球吞噬任何入侵異物，不分對象。
            <br />• <strong>生理機制：</strong>發炎反應加速免疫物資輸送；發燒提升體溫抑制病菌繁殖。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            borderLeft: `6px solid ${palette.purple}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: palette.purple,
              marginBottom: 4,
            }}
          >
            🎯 第三道防線（專一性免疫反應 · 淋巴球）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
            • <strong>B 淋巴球：</strong>產生<strong>特異性抗體</strong>專門中和特定病原抗原。
            <br />• <strong>T 淋巴球：</strong>毒殺被感染細胞；具有<strong>免疫記憶</strong>
            （疫苗預防接種原理）。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          border: `1px solid ${palette.border}`,
          padding: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <ZoomableImage
          src={immuneDefenseMechanismsImg}
          alt="人體防禦作用全景機制"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
          }}
        >
          ▲ 圖 4-4 人體的防禦作用（點擊可全螢幕放大檢視三道防線運作）
        </div>
      </div>
    </div>

    <PageFooter note="人體透過皮膜屏障、白血球吞噬與淋巴球專一免疫三道防線維持健康。" />
  </div>
);

const SlideExamTraps: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考常考四大易錯盲點辨析"
      subtitle="精準釐清生理盲點，避開歷屆會考高頻失分地雷"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.crimson}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: palette.crimson,
            marginBottom: 8,
          }}
        >
          ⚠️ 陷阱一：心臟左右方位不可混淆
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          • <strong>常見盲點：</strong>很多同學用自己的左右手看考卷上的心臟圖。
          <br />• <strong>正確觀念：</strong>心臟解剖圖是以<strong>受檢者身體方位</strong>
          為準（想像病人面朝向你），因此<strong>圖左側是右心</strong>、<strong>圖右側是左心</strong>
          ！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.blue}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: palette.blue,
            marginBottom: 8,
          }}
        >
          ⚠️ 陷阱二：動脈不等於充氧血
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          • <strong>常見盲點：</strong>誤以為「動脈必流充氧血、靜脈必流缺氧血」。
          <br />• <strong>正確觀念：</strong>命名僅看<strong>「血流離心或回心」</strong>。
          <strong>肺動脈流的是缺氧血</strong>（剛出右心室前往肺部），
          <strong>肺靜脈流的是充氧血</strong>（剛離開肺泡回左心房）。
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.purple}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: palette.purple,
            marginBottom: 8,
          }}
        >
          ⚠️ 陷阱三：心音與脈搏成因不同
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          • <strong>常見盲點：</strong>誤以為心音是心肌收縮聲，或以為靜脈摸得到脈搏。
          <br />• <strong>正確觀念：</strong>心音是<strong>瓣膜瞬間關閉</strong>
          引起的震動聲；脈搏是心室收縮衝擊<strong>動脈管壁</strong>的波動。
          <strong>靜脈絕無脈搏</strong>！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 18,
          padding: '20px 24px',
          border: `1px solid ${palette.border}`,
          borderTop: `6px solid ${palette.emerald}`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: palette.emerald,
            marginBottom: 8,
          }}
        >
          ⚠️ 陷阱四：體液三態不可逆流向
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
            flex: 1,
          }}
        >
          • <strong>常見盲點：</strong>誤以為淋巴液會直接倒流回組織間隙。
          <br />• <strong>正確觀念：</strong>微血管（血漿）➔ 細胞間隙（組織液）➔
          盲端淋巴微管（淋巴液）。淋巴液只能<strong>單向朝靜脈流動</strong>
          ，經由大靜脈匯入重返血液循環！
        </div>
      </div>
    </div>

    <PageFooter note="會考高頻盲點：心臟左右相反、肺動脈流缺氧血、心音聽瓣膜脈摸動脈。" />
  </div>
);

const SlideMnemonics: Page = () => (
  <div style={fill}>
    <PageHeader
      title="循環與防禦滿分四大口訣"
      subtitle="核心觀念化繁為簡，秒殺會考題目的記憶神兵"
    />

    <div
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 22,
        alignItems: 'stretch',
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.crimsonLight,
          borderRadius: 18,
          padding: '22px 26px',
          border: `1px solid ${palette.crimsonBorder}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: palette.crimson,
            marginBottom: 10,
          }}
        >
          🔑 口訣一：右缺左充心相反，室出房進莫混亂
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          • 右心房右心室運送暗紅<strong>缺氧血</strong>；左心房左心室運送鮮紅<strong>充氧血</strong>
          。
          <br />• 血液離開心臟必走<strong>心室出動脈</strong>；血液重返心臟必由
          <strong>靜脈入心房</strong>。
        </div>
      </div>

      <div
        style={{
          background: palette.blueLight,
          borderRadius: 18,
          padding: '22px 26px',
          border: `1px solid ${palette.blueBorder}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: palette.blue,
            marginBottom: 10,
          }}
        >
          🔑 口訣二：動脈壁厚耐高壓，微管單層換物佳
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          • 動脈管壁最厚、富含彈性，承受最高血壓。
          <br />• 微血管僅單層細胞、血流最慢，是<strong>唯一進行物質交換</strong>
          場所；靜脈管腔大且有瓣膜。
        </div>
      </div>

      <div
        style={{
          background: palette.purpleLight,
          borderRadius: 18,
          padding: '22px 26px',
          border: `1px solid ${palette.purpleBorder}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: palette.purple,
            marginBottom: 10,
          }}
        >
          🔑 口訣三：音聽瓣膜蹦答響，脈摸動脈彈性浪
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          • 心音是<strong>瓣膜關閉</strong>的撞擊聲音（一關房室、二關半月）。
          <br />• 脈搏是心室收縮衝擊<strong>動脈管壁</strong>
          產生的彈性波動，正常人兩者頻率完全相同。
        </div>
      </div>

      <div
        style={{
          background: palette.emeraldLight,
          borderRadius: 18,
          padding: '22px 26px',
          border: `1px solid ${palette.emeraldBorder}`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 800,
            color: palette.emerald,
            marginBottom: 10,
          }}
        >
          🔑 口訣四：漿出成液液入淋，淋巴匯靜回歸心
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          • 血漿滲出微血管成<strong>組織液</strong>，組織液滲入盲端微管成<strong>淋巴液</strong>。
          <br />• 淋巴管具瓣膜防止逆流，經<strong>淋巴結過濾</strong>後匯入鎖骨下大靜脈重返血液！
        </div>
      </div>
    </div>

    <PageFooter note="牢記四大速記口訣，輕鬆掌握人體循環與防禦系統核心考點！" />
  </div>
);

export default [
  Cover,
  SlideHeartStructure,
  SlideHeartContraction,
  SlideBloodVessels,
  SlideBloodFlowExchange,
  SlideLabHeartSoundPulse,
  SlideSystemicCirculation,
  SlidePulmonaryCirculation,
  SlideTissueFluidCapillaries,
  SlideLymphaticCirculation,
  SlideLymphaticOrgans,
  SlideWhiteBloodCells,
  SlideImmuneDefense,
  SlideExamTraps,
  SlideMnemonics,
] satisfies Page[];

export const meta: SlideMeta = {
  title: '人體的循環與防禦系統',
  theme: 'rose',
  createdAt: '2026-09-29',
};
