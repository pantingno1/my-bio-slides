import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import humanBreathingMovementImg from './assets/human-breathing-movement.jpg';
import humanOrganSystemsCoordinationImg from './assets/human-organ-systems-coordination.jpg';
import humanRespiratorySystemImg from './assets/human-respiratory-system.jpg';
import labHumanExhaledGasImg from './assets/lab-human-exhaled-gas.jpg';
import labPlantRespirationImg from './assets/lab-plant-respiration.jpg';

export const meta: SlideMeta = {
  title: '呼吸與氣體的恆定',
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
      <span>{tip || '國中自然科學 · 生物（一上）單元 6-1 呼吸與氣體的恆定'}</span>
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
      background: 'radial-gradient(circle at 10% 20%, #eff6ff 0%, #ffffff 60%, #ecfeff 100%)',
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
          color: palette.cyan,
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
        呼吸與氣體的恆定
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
        細胞呼吸釋放生命能量 · 呼吸運動胸腔物理機制 · 肺泡微血管氣體擴散 · 腦幹調節與探究實驗
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
            title: '呼吸作用 vs 呼吸運動',
            desc: '細胞粒線體氧化葡萄糖釋放 ATP vs 肋骨與橫膈運動驅動氣體進出肺臟。',
            color: palette.cyan,
            bg: palette.cyanLight,
            border: palette.cyanBorder,
          },
          {
            no: '02',
            title: '人體呼吸系統與擴散',
            desc: '鼻腔加溫過濾、氣管纖毛排痰、肺泡薄壁大表面積微血管氣體擴散。',
            color: palette.blue,
            bg: palette.blueLight,
            border: palette.blueBorder,
          },
          {
            no: '03',
            title: '胸腔模型與氣壓連動',
            desc: '吸氣肋起膈降容積大壓小、呼氣肋降膈起容積小壓大、寶特瓶實驗解析。',
            color: palette.indigo,
            bg: palette.indigoLight,
            border: palette.indigoBorder,
          },
          {
            no: '04',
            title: '腦幹調節與探究實驗',
            desc: 'CO₂ 濃度刺激腦幹呼吸中樞回饋調節、石灰水與氯化亞鈷試紙雙重檢測。',
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

const SlideRespirationVsBreathing: Page = () => (
  <div style={fill}>
    <PageHeader
      title="核心概念釐清：呼吸作用 vs 呼吸運動"
      subtitle="微觀細胞生化釋能 vs 宏觀個體物理換氣"
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
          border: `2px solid ${palette.cyanBorder}`,
          borderRadius: 20,
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 14px',
              borderRadius: 8,
            }}
          >
            細胞層次
          </span>
          <h3 style={{ fontSize: 32, fontWeight: 800, margin: 0, color: palette.cyan }}>
            呼吸作用 (Cellular Respiration)
          </h3>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            padding: '18px 24px',
            borderRadius: 14,
            border: `1.5px solid ${palette.cyanBorder}`,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.cyan, marginBottom: 8 }}>
            呼吸作用化學反應總式 (Overall Equation)：
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: palette.text,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 8,
            }}
          >
            <span style={{ color: palette.amber }}>葡萄糖 (C₆H₁₂O₆)</span>
            <span>+</span>
            <span style={{ color: palette.blue }}>氧氣 (O₂)</span>
            <span style={{ color: palette.cyan, fontWeight: 800 }}>──[ 粒線體 · 酵素 ]──➔</span>
            <span style={{ color: palette.rose }}>二氧化碳 (CO₂)</span>
            <span>+</span>
            <span style={{ color: palette.blue }}>水 (H₂O)</span>
            <span>+</span>
            <span style={{ color: palette.emerald }}>能量 (ATP)</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>進行場所：</strong>細胞內的<strong>粒線體 (Mitochondria)</strong> 與細胞質。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>核心目的：</strong>分解有機養分（葡萄糖），將化學能轉換為細胞可直接利用的能量。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>進行時間：</strong>
            <strong>全天候 24 小時無休</strong>（動物與植物活細胞均需持續呼吸）。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>本質屬性：</strong>酵素參與的<strong>放能化學代謝反應</strong>。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `2px solid ${palette.blueBorder}`,
          borderRadius: 20,
          padding: '28px 32px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.blue,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 14px',
              borderRadius: 8,
            }}
          >
            個體層次
          </span>
          <h3 style={{ fontSize: 32, fontWeight: 800, margin: 0, color: palette.blue }}>
            呼吸運動 (Breathing / Ventilation)
          </h3>
        </div>

        <div
          style={{
            background: palette.blueLight,
            padding: '16px 20px',
            borderRadius: 14,
            fontSize: 22,
            fontWeight: 700,
            color: palette.text,
            lineHeight: 1.6,
          }}
        >
          <strong>物理運動機制：</strong>
          <br />
          肋骨與橫膈肌肉協同運動 ➔ 胸腔容積改變 ➔ 產生壓力差驅動氣體進出肺臟
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>器官構造：</strong>呼吸道（鼻、咽、喉、氣管、支氣管）與<strong>肺臟</strong>。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>核心目的：</strong>提供呼吸作用所需的 O₂，並排出其代謝副產物 CO₂。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>呼吸三部曲：</strong>
            外呼吸（肺泡氣體交換） ➔ 氣體運輸（血液循環攜帶） ➔ 內呼吸（微血管與組織細胞擴散）。
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>本質屬性：</strong>胸腔肌肉收縮與舒張帶動的<strong>物理機械運動</strong>。
          </div>
        </div>
      </div>
    </div>
    <PageFooter tip="牢記區別：植物沒有呼吸器官與呼吸運動，但活細胞每分每秒都在進行呼吸作用！" />
  </div>
);

const SlideHumanRespiratorySystem: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體呼吸系統的構造與功能途徑"
      subtitle="氣體進出的人體通道網絡與肺臟防護過濾機制"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <ZoomableImage
          src={humanRespiratorySystemImg}
          alt="人體的呼吸系統解剖圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, fontWeight: 600 }}>
          圖 6-1 人體的呼吸系統解剖構造（點擊圖片可全螢幕放大查看）
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          overflowY: 'auto',
        }}
      >
        {[
          {
            part: '① 鼻腔 (Nose / Nasal cavity)',
            desc: '氣體主要入口。內襯黏膜含微血管網可加溫冷空氣，黏液濕潤空氣，纖毛過濾吸附灰塵病原體。',
            badge: '加溫 · 濕潤 · 過濾',
            color: palette.cyan,
            bg: palette.cyanLight,
          },
          {
            part: '② 咽與喉 (Pharynx & Larynx)',
            desc: '消化道與呼吸道交會處。喉部含聲帶能發聲；上方有會厭軟骨，吞嚥時下蓋氣管口防止食物嗆入。',
            badge: '聲帶發聲 · 會厭防嗆',
            color: palette.blue,
            bg: palette.blueLight,
          },
          {
            part: '③ 氣管與支氣管 (Trachea & Bronchi)',
            desc: '由 C 型軟骨環支撐維持管腔暢通不扁塌。管壁內層纖毛上皮細胞分泌黏液，朝向咽喉方向擺動排出痰液。',
            badge: '軟骨支撐 · 纖毛排痰',
            color: palette.indigo,
            bg: palette.indigoLight,
          },
          {
            part: '④ 肺臟 (Lungs)',
            desc: '位於胸腔內，左右各一（右肺 3 葉、左肺 2 葉）。由數億個微小肺泡組成，質地富彈性海綿狀，但肺本身無肌肉！',
            badge: '數億肺泡 · 無肌肉組織',
            color: palette.emerald,
            bg: palette.emeraldLight,
          },
        ].map((item) => (
          <div
            key={item.part}
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.border}`,
              padding: '16px 20px',
              borderLeft: `6px solid ${item.color}`,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 6,
              }}
            >
              <h4 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: palette.text }}>
                {item.part}
              </h4>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: item.color,
                  background: item.bg,
                  padding: '2px 10px',
                  borderRadius: 6,
                }}
              >
                {item.badge}
              </span>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
    <PageFooter tip="會考重中之重：氣管由軟骨支撐保持暢通；肺臟本身完全沒有肌肉，不能自己收縮！" />
  </div>
);

const SlideAlveoliGasExchange: Page = () => (
  <div style={fill}>
    <PageHeader
      title="肺泡與微血管的氣體交換機制"
      subtitle="擴大表面積極限、薄層擴散屏障與雙向濃度差驅動"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            構造適應
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            肺泡利於氣體交換的四大關鍵特徵
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {[
            {
              title: '超大表面積',
              desc: '兩肺約有 3~5 億個肺泡，展開總表面積達 70~100 平方公尺（相當於半個網球場），大幅提升氣體交換效率。',
              color: palette.cyan,
              bg: palette.cyanLight,
            },
            {
              title: '極薄細胞壁',
              desc: '肺泡壁與微血管壁均僅由「單層扁平上皮細胞」構成，氣體擴散距離小於 1 微米（μm）。',
              color: palette.blue,
              bg: palette.blueLight,
            },
            {
              title: '內表面濕潤',
              desc: '肺泡內表面覆有極薄液膜，氣體分子先溶於液膜中，再快速向微血管擴散滲透。',
              color: palette.indigo,
              bg: palette.indigoLight,
            },
            {
              title: '密集微血管網',
              desc: '微血管網如緊密篩網包裹每個肺泡，紅血球排成單行緩慢通過，換氣接觸時間充足。',
              color: palette.emerald,
              bg: palette.emeraldLight,
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: item.bg,
                border: `1.5px solid ${palette.border}`,
                borderRadius: 14,
                padding: '16px 18px',
              }}
            >
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: item.color,
                  marginBottom: 6,
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.rose,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            擴散原理
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            氣體分壓差驅動物理擴散（不耗能！）
          </h3>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 14,
            padding: '18px 20px',
            border: `1px solid ${palette.roseBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: palette.rose,
              marginBottom: 8,
            }}
          >
            💨 氧氣 (O₂) 擴散途徑
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.6 }}>
            肺泡中 O₂ 濃度高 ➔ 擴散進入肺微血管（低濃度） ➔ 與紅血球內的
            <strong>血紅素</strong>結合 ➔ 缺氧血轉變為<strong>充氧血</strong> ➔ 經肺靜脈回流左心房。
          </div>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            borderRadius: 14,
            padding: '18px 20px',
            border: `1px solid ${palette.cyanBorder}`,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 800,
              color: palette.cyan,
              marginBottom: 8,
            }}
          >
            💨 二氧化碳 (CO₂) 擴散途徑
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.6 }}>
            全身帶回肺部的血液 CO₂ 濃度高 ➔ 自血漿擴散進入肺泡（低濃度） ➔ 隨呼氣動作排出體外。
          </div>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            borderRadius: 12,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.muted,
            lineHeight: 1.5,
          }}
        >
          ⚡ <strong>內外呼吸對比：</strong>肺泡與微血管交換為「外呼吸」；組織微血管將 O₂
          釋給組織細胞並接收其代謝 CO₂ 為「內呼吸」。
        </div>
      </div>
    </div>
    <PageFooter tip="擴散作用鐵律：氣體移動完全順著濃度梯度（分壓差），不需要消耗細胞能量 (ATP)！" />
  </div>
);

const SlideBreathingMechanics: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體的呼吸運動機制：吸氣 vs 呼氣"
      subtitle="肋骨與橫膈肌肉協同帶動胸腔容積與氣壓的連鎖物理反應"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <ZoomableImage
          src={humanBreathingMovementImg}
          alt="人體的呼吸運動比較圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, fontWeight: 600 }}>
          圖 6-2 人體吸氣與呼氣時肋骨與橫膈運動示意圖
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateRows: '1fr 1fr',
          gap: 16,
        }}
      >
        <div
          style={{
            background: palette.surface,
            border: `2px solid ${palette.blueBorder}`,
            borderRadius: 18,
            padding: '20px 24px',
            borderLeft: `8px solid ${palette.blue}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <h4 style={{ fontSize: 28, fontWeight: 900, margin: 0, color: palette.blue }}>
              🔵 吸氣運動 (Inhalation / 主動)
            </h4>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: palette.blue,
                background: palette.blueLight,
                padding: '2px 10px',
                borderRadius: 6,
              }}
            >
              肌肉主動收縮
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 20 }}>
            <div>
              <strong>① 肋間肌收縮：</strong>肋骨<strong>向上、向外移動</strong>（胸膛挺起抬高）。
            </div>
            <div>
              <strong>② 橫膈肌收縮：</strong>橫膈<strong>收縮向下移動</strong>（位置下降變平坦）。
            </div>
            <div>
              <strong>③ 胸腔容積：</strong>上下左右同步擴張，<strong>胸腔體積增大</strong>。
            </div>
            <div>
              <strong>④ 肺內氣壓：</strong>胸腔及肺內壓力<strong>小於外界大氣壓</strong>。
            </div>
            <div>
              <strong>⑤ 氣流方向：</strong>外界空氣經由大氣壓<strong>壓入肺泡</strong>
              （氣球被吹脹）。
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `2px solid ${palette.roseBorder}`,
            borderRadius: 18,
            padding: '20px 24px',
            borderLeft: `8px solid ${palette.rose}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <h4 style={{ fontSize: 28, fontWeight: 900, margin: 0, color: palette.rose }}>
              🔴 呼氣運動 (Exhalation / 被動)
            </h4>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: palette.rose,
                background: palette.roseLight,
                padding: '2px 10px',
                borderRadius: 6,
              }}
            >
              肌肉自然舒張
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 20 }}>
            <div>
              <strong>① 肋間肌舒張：</strong>肋骨<strong>向下、向內復位</strong>（胸膛下沉）。
            </div>
            <div>
              <strong>② 橫膈肌舒張：</strong>橫膈<strong>放鬆向上凸起</strong>（呈圓頂狀拱起）。
            </div>
            <div>
              <strong>③ 胸腔容積：</strong>被動彈性回縮，<strong>胸腔體積縮小</strong>。
            </div>
            <div>
              <strong>④ 肺內氣壓：</strong>胸腔及肺內壓力<strong>大於外界大氣壓</strong>。
            </div>
            <div>
              <strong>⑤ 氣流方向：</strong>肺內氣體順利被<strong>擠壓排出體外</strong>。
            </div>
          </div>
        </div>
      </div>
    </div>
    <PageFooter tip="會考速記口訣：吸氣＝肋起膈降容積大壓小；呼氣＝肋降膈起容積小壓大！" />
  </div>
);

const SlideBottleLungModel: Page = () => (
  <div style={fill}>
    <PageHeader
      title="經典會考實驗：寶特瓶肺模型與胸腔物理模擬"
      subtitle="人體構造與實驗器材各部件的精確對應關係與操作推理"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.indigo,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            構造對應
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            寶特瓶肺模型組件與人體解剖對照
          </h3>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 20,
            lineHeight: 1.5,
          }}
        >
          <thead>
            <tr style={{ background: palette.indigoLight, color: palette.indigo }}>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.indigoBorder}`,
                }}
              >
                模型實驗器材
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.indigoBorder}`,
                }}
              >
                對應人體器官構造
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.indigoBorder}`,
                }}
              >
                功能意義與特性說明
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                tool: '玻璃 Y 型管',
                body: '氣管與左、右支氣管',
                note: '連通外界大氣與肺泡的進出管道',
              },
              {
                tool: '內部小氣球',
                body: '肺臟 (Lungs)',
                note: '薄膜彈性構造，靠外在壓力差充氣或被動排氣',
              },
              {
                tool: '寶特瓶身',
                body: '胸壁與胸腔 (Chest cavity)',
                note: '提供密閉空間，包覆保護內部呼吸器官',
              },
              {
                tool: '底部橡皮膜 (氣球皮)',
                body: '橫膈 (Diaphragm)',
                note: '主動牽引改變瓶內（胸腔）容積與氣壓的主要動力源',
              },
            ].map((row, idx) => (
              <tr
                key={row.tool}
                style={{
                  background: idx % 2 === 0 ? palette.surface : palette.surfaceSubtle,
                  borderBottom: `1px solid ${palette.border}`,
                }}
              >
                <td style={{ padding: '12px 16px', fontWeight: 800, color: palette.indigo }}>
                  {row.tool}
                </td>
                <td style={{ padding: '12px 16px', fontWeight: 700, color: palette.text }}>
                  {row.body}
                </td>
                <td style={{ padding: '12px 16px', color: palette.muted }}>{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            background: palette.amberLight,
            border: `1.5px solid ${palette.amberBorder}`,
            borderRadius: 14,
            padding: '14px 18px',
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.55,
          }}
        >
          ⚠️ <strong>模型的重要限制（會考常考陷阱）：</strong>
          寶特瓶為硬質塑膠瓶身，<strong>無法模擬人體肋骨的上下起伏與胸廓前後徑改變</strong>
          ，只能單純模擬橫膈升降對胸腔容積的影響！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            動態模擬
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            操作步驟與物理現象推理
          </h3>
        </div>

        <div
          style={{
            background: palette.blueLight,
            borderRadius: 16,
            padding: '18px 20px',
            border: `1.5px solid ${palette.blueBorder}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 8 }}>
            🔽 動作一：將底部橡皮膜向下拉
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.6 }}>
            <strong>模擬狀態：</strong>模擬人體<strong>橫膈收縮下降（吸氣）</strong>。
            <br />
            <strong>物理連鎖：</strong>寶特瓶內部容積變大 ➔ 瓶內氣壓小於大氣壓 ➔ 外界空氣經 Y
            型管被大氣壓壓入內部小氣球 ➔ <strong>小氣球充氣膨脹脹大</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 16,
            padding: '18px 20px',
            border: `1.5px solid ${palette.roseBorder}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose, marginBottom: 8 }}>
            🔼 動作二：將底部橡皮膜放鬆或向上推
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.6 }}>
            <strong>模擬狀態：</strong>模擬人體<strong>橫膈舒張上升（呼氣）</strong>。
            <br />
            <strong>物理連鎖：</strong>寶特瓶內部容積縮小 ➔ 瓶內氣壓大於大氣壓 ➔ 內部高壓擠壓小氣球
            ➔ 氣球內氣體被擠出 Y 型管 ➔ <strong>小氣球變扁縮小</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            borderRadius: 12,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.muted,
            lineHeight: 1.5,
          }}
        >
          💡 <strong>瓶身破損問題：</strong>
          若寶特瓶身有破洞，向下拉橡皮膜時氣體直接由破洞進入瓶身，瓶內無法產生壓力差，小氣球將無法脹大（模擬胸壁穿孔氣胸）。
        </div>
      </div>
    </div>
    <PageFooter tip="會考精要：橡皮膜下拉＝橫膈下降＝吸氣＝氣球脹大；橡皮膜上推＝橫膈上升＝呼氣＝氣球縮小！" />
  </div>
);

const SlideBreathingRegulation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="呼吸頻率的調節中樞：腦幹與二氧化碳恆定"
      subtitle="為什麼運動後會劇烈喘氣？人體精密的化學感受回饋機制"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `2px solid ${palette.cyanBorder}`,
          borderRadius: 20,
          padding: '26px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            神經中樞
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            呼吸調節的總指揮官：腦幹 (Brainstem)
          </h3>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            fontSize: 20,
            lineHeight: 1.6,
          }}
        >
          <div style={{ background: palette.cyanLight, padding: '14px 18px', borderRadius: 12 }}>
            <strong>腦幹的主導角色：</strong>
            呼吸中樞位於腦幹（延腦與橋腦），負責不自主的自律節律控制。人無法僅靠意志力長時間閉氣自殺，當血液中
            CO₂ 累積到閾值，腦幹會強行啟動呼吸動作。
          </div>
          <div>
            <strong>大腦意識的有限調控：</strong>
            大腦皮質可以在一定限度內主動控制呼吸（如唱歌、演講、潛水閉氣），但最終仍受腦幹強制覆蓋控制。
          </div>
          <div>
            <strong>血液刺激訊號的主角：</strong>
            刺激腦幹呼吸中樞的最主要物質是<strong>血液中的二氧化碳 (CO₂) 濃度</strong>
            （及其引發的氫離子濃度/酸鹼度下降），<strong>並不是氧氣 (O₂) 缺乏</strong>！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `2px solid ${palette.blueBorder}`,
          borderRadius: 20,
          padding: '26px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.blue,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            回饋路徑
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            劇烈運動時呼吸調節的連鎖回饋循環
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              step: '① 肌肉劇烈運動',
              desc: '肌肉細胞劇烈進行呼吸作用消耗大量葡萄糖與氧氣，產生大量副產物二氧化碳 (CO₂)。',
              color: palette.cyan,
            },
            {
              step: '② 血液 CO₂ 濃度升高',
              desc: '過量 CO₂ 溶於血漿生成碳酸，血液呈微酸性，化學感受器精準捕捉訊號。',
              color: palette.blue,
            },
            {
              step: '③ 刺激腦幹呼吸中樞',
              desc: '腦幹接收高濃度 CO₂ 刺激，神經衝動發放頻率顯著加快加強。',
              color: palette.indigo,
            },
            {
              step: '④ 呼吸運動加快加深',
              desc: '神經傳導促使肋間肌與橫膈加快收縮，每分鐘呼吸次數增加，換氣量劇增。',
              color: palette.rose,
            },
            {
              step: '⑤ 恢復體內氣體恆定',
              desc: '肺臟迅速排出過量 CO₂ 並補足 O₂，血液氣體濃度重回平衡設定點。',
              color: palette.emerald,
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                background: palette.surfaceSubtle,
                padding: '10px 14px',
                borderRadius: 10,
                borderLeft: `5px solid ${item.color}`,
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 800, color: item.color, flexShrink: 0 }}>
                {item.step}
              </span>
              <span style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <PageFooter tip="會考易錯陷阱：運動後喘氣是為了「排除過量的二氧化碳」，刺激呼吸中樞的主角是 CO₂ 而非缺乏 O₂！" />
  </div>
);

const SlideLabExhaledGas: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗：人體呼出氣體的成分檢測"
      subtitle="以澄清石灰水與氯化亞鈷試紙驗證呼吸排出的二氧化碳與水氣"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <ZoomableImage
          src={labHumanExhaledGasImg}
          alt="實驗6-1 人體呼出的氣體檢測"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, fontWeight: 600 }}>
          圖 6-3 實驗 6-1 檢測人體呼出氣體的二氧化碳與水氣
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
            borderLeft: `6px solid ${palette.cyan}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 6,
            }}
          >
            <h4 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: palette.cyan }}>
              實驗一：澄清石灰水檢測二氧化碳 (CO₂)
            </h4>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: palette.cyan,
                background: palette.cyanLight,
                padding: '2px 10px',
                borderRadius: 6,
              }}
            >
              白色沉澱反應
            </span>
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>實驗步驟：</strong>用吸管將呼出的氣體徐徐吹入裝有
            <strong>澄清石灰水 [Ca(OH)₂]</strong> 的試管中。
            <br />
            <strong>觀察現象：</strong>石灰水由原本的透明澄清轉變為<strong>白色混濁</strong>
            （生成不溶於水的碳酸鈣 CaCO₃ 白色沉澱）。
            <br />
            <strong>吸入 vs 呼出對比：</strong>吸入大氣中 CO₂ 僅 0.04%，無法使石灰水變混濁；呼出氣體
            CO₂ 高達 4%，能迅速產生白色沉澱。
            <div
              style={{
                background: palette.cyanLight,
                padding: '10px 14px',
                borderRadius: 10,
                marginTop: 8,
                fontSize: 20,
                fontWeight: 800,
                color: palette.cyan,
              }}
            >
              反應方程式：Ca(OH)₂ (澄清石灰水) + CO₂ ➔ CaCO₃↓ (白色沉澱) + H₂O
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
            borderLeft: `6px solid ${palette.rose}`,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 6,
            }}
          >
            <h4 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: palette.rose }}>
              實驗二：氯化亞鈷試紙檢測水氣 (H₂O)
            </h4>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: palette.rose,
                background: palette.roseLight,
                padding: '2px 10px',
                borderRadius: 6,
              }}
            >
              藍變粉紅
            </span>
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>實驗步驟：</strong>對著乾燥的<strong>藍色氯化亞鈷試紙</strong>吐氣或呵氣。
            <br />
            <strong>觀察現象：</strong>試紙迅速由<strong>藍色轉變成粉紅色</strong>。
            <br />
            <strong>實驗結論：</strong>
            證實人體呼出的氣體中含有飽和水蒸氣（呼吸作用的另一代謝副產物）。
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            borderRadius: 14,
            padding: '14px 18px',
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          💡 <strong>持續吹氣的過度反應（延伸思考）：</strong>
          若對已混濁的石灰水長時間持續吹氣，碳酸鈣會轉變為可溶於水的碳酸氫鈣 [Ca(HCO₃)₂]，液體會
          <strong>重新由混濁變回澄清</strong>！
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.amber, marginTop: 4 }}>
            過量溶解反應式：CaCO₃ + H₂O + CO₂ ➔ Ca(HCO₃)₂ (可溶透明)
          </div>
        </div>
      </div>
    </div>
    <PageFooter tip="試劑口訣：澄清石灰水驗 CO₂（變混濁）；氯化亞鈷試紙驗水氣（藍色變粉紅）！" />
  </div>
);

const SlideLabPlantRespiration: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗：植物種子的呼吸作用檢測"
      subtitle="萌芽綠豆與乾燥綠豆的對照實驗設計及暗室操作關鍵"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <ZoomableImage
          src={labPlantRespirationImg}
          alt="實驗6-1 植物的呼吸作用檢測"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, fontWeight: 600 }}>
          圖 6-4 實驗 6-1 以萌芽綠豆檢測植物呼吸作用釋放二氧化碳
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.emerald}`,
          }}
        >
          <h4
            style={{ fontSize: 24, fontWeight: 800, margin: '0 0 6px 0', color: palette.emerald }}
          >
            對照實驗設計：甲瓶（萌芽） vs 乙瓶（乾燥）
          </h4>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            <strong>甲瓶（實驗組）：</strong>
            置入已浸水萌芽的綠豆。種子萌發期間細胞旺盛分裂與生長，需要大量 ATP，因此
            <strong>呼吸作用極為劇烈</strong>。
            <br />
            <strong>乙瓶（對照組）：</strong>
            置入乾燥未萌芽的綠豆。種子處於休眠狀態，呼吸代謝極度微弱。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.blue}`,
          }}
        >
          <h4 style={{ fontSize: 24, fontWeight: 800, margin: '0 0 6px 0', color: palette.blue }}>
            操作原理：排水排氣法推擠氣體
          </h4>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            密封靜置數小時後，透過薊頭漏斗注入清水，將錐形瓶內的氣體經導管壓入裝有
            <strong>澄清石灰水</strong>的試管中。
            <br />
            <strong>實驗結果：</strong>甲瓶（萌芽綠豆）氣體使石灰水
            <strong>迅速產生大量白色混濁沉澱</strong>；乙瓶石灰水無明顯變化。
          </div>
        </div>

        <div
          style={{
            background: palette.indigoLight,
            borderRadius: 14,
            padding: '14px 18px',
            border: `1.5px solid ${palette.indigoBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.55,
          }}
        >
          🔒 <strong>會考關鍵注意（實驗操作設計考點）：</strong>
          綠豆<strong>不可長出綠葉，或全程置於暗室進行</strong>！因為一旦長出綠葉並照光，綠葉會進行
          <strong>光合作用吸收二氧化碳</strong>，將掩蓋並干擾呼吸作用釋出 CO₂ 的測定結果！
        </div>
      </div>
    </div>
    <PageFooter tip="會考核心：萌芽種子代謝旺盛呼吸作用強烈；避免長出綠葉或照光以防止光合作用干擾實驗！" />
  </div>
);

const SlidePlantGasExchange: Page = () => (
  <div style={fill}>
    <PageHeader
      title="植物的氣體交換器官與日夜生理平衡"
      subtitle="植物沒有呼吸器官與循環血液，依賴氣孔、皮孔與根部擴散換氣"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.emerald,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            構造途徑
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            植物三大氣體進出部位
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: palette.emeraldLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.emeraldBorder}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.emerald, marginBottom: 4 }}>
              🌿 葉片與草本莖：氣孔 (Stomata)
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              由成對的保衛細胞調控開閉。白天受光照保衛細胞吸水膨脹氣孔開，利於光合作用吸收 CO₂
              與釋放 O₂；同時調節蒸散作用。
            </div>
          </div>

          <div
            style={{
              background: palette.amberLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.amberBorder}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 4 }}>
              🪵 木本植物莖：皮孔 (Lenticels)
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              木質莖表面木栓層局部破裂形成的孔隙，排列鬆散，
              <strong>全天候常開不具調節保衛細胞</strong>，提供活的形成層與薄壁細胞進行氣體交換。
            </div>
          </div>

          <div
            style={{
              background: palette.blueLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.blueBorder}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 4 }}>
              🌱 根部表皮與根毛 (Root hairs)
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              根細胞直接自土壤顆粒間隙吸收溶存氧氣進行呼吸作用。若土壤長期積水淹水缺氧，根部無法正常呼吸將導致爛根萎凋死亡！
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            晝夜平衡
          </span>
          <h3 style={{ fontSize: 28, fontWeight: 800, margin: 0, color: palette.text }}>
            光合作用 vs 呼吸作用的日夜氣體淨進出
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: palette.surfaceSubtle,
              border: `1.5px solid ${palette.border}`,
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan, marginBottom: 4 }}>
              ☀️ 白天（光照充足環境）
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              <strong>光合作用速率 ＞ 呼吸作用速率</strong>
              <br />
              植物呼吸作用釋出的 CO₂ 全部被光合作用利用仍不足，必須自外界
              <strong>淨吸收 CO₂</strong>；同時<strong>淨釋放 O₂</strong> 補充大氣。
            </div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              border: `1.5px solid ${palette.border}`,
              borderRadius: 14,
              padding: '16px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo, marginBottom: 4 }}>
              🌙 夜晚（無光照環境）
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              <strong>光合作用停止，僅進行呼吸作用</strong>
              <br />
              植物細胞持續消耗氧氣釋放二氧化碳，因此外界測得表現為<strong>淨吸收 O₂</strong>、
              <strong>淨釋放 CO₂</strong>。
            </div>
          </div>

          <div
            style={{
              background: palette.purpleLight,
              border: `1.5px solid ${palette.purpleBorder}`,
              borderRadius: 14,
              padding: '14px 18px',
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.5,
            }}
          >
            ⚖️ <strong>補償點 (Compensation Point)：</strong>
            清晨或黃昏微弱光照下，光合作用速率剛好等於呼吸作用速率，外界測不到氣體的淨進出！
          </div>
        </div>
      </div>
    </div>
    <PageFooter tip="植物日夜鐵律：光合作用只在有光時進行；但呼吸作用全天 24 小時不分晝夜持續進行！" />
  </div>
);

const SlideAnimalRespiratoryAdaptations: Page = () => (
  <div style={fill}>
    <PageHeader
      title="動物呼吸器官的演化與環境適應多樣性"
      subtitle="擴大表面積、維持濕潤薄壁與微血管密布之共同物理適應原則"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        flex: 1,
        minHeight: 0,
      }}
    >
      {[
        {
          group: '體表擴散呼吸',
          animals: '草履蟲、水螅、蚯蚓、蛙類（輔助）',
          feature:
            '無特化呼吸器官。蚯蚓需分泌黏液保持體表濕潤，雨天土壤積水缺氧會爬出地面，乾涸環境則因體表乾燥窒息。',
          organ: '濕潤體表微血管',
          color: palette.cyan,
          bg: palette.cyanLight,
        },
        {
          group: '水生呼吸：鰓 (Gills)',
          animals: '魚類、蝦、蟹、貝類、兩生類蝌蚪',
          feature:
            '鰓絲絲狀分支極多，展開表面積極大；富含微血管網。水中溶氧量僅空氣的 1/30，魚類藉由口與鰓蓋交替張合維持水流單向通過。',
          organ: '絲狀鰓與微血管網',
          color: palette.blue,
          bg: palette.blueLight,
        },
        {
          group: '氣管系統 (Tracheal System)',
          animals: '昆蟲（蝗蟲、蜜蜂、螞蟻）、蜘蛛',
          feature:
            '腹部具氣孔，連接分支繁複的微氣管直接深入組織細胞。血液完全不負責運送氣體（無血紅素），直接氣體交換極高效！',
          organ: '腹部氣孔與微氣管',
          color: palette.indigo,
          bg: palette.indigoLight,
        },
        {
          group: '兩生類呼吸：皮膚 + 肺',
          animals: '青蛙、蟾蜍、蠑螈',
          feature:
            '成體肺構造簡單（囊狀薄壁無複雜肺泡），必須仰賴濕潤皮膚與口腔黏膜微血管輔助氣體交換（皮膚呼吸佔 50% 以上）。',
          organ: '囊狀肺 + 濕潤皮膚',
          color: palette.emerald,
          bg: palette.emeraldLight,
        },
        {
          group: '鳥類呼吸：肺 + 氣囊',
          animals: '鳥類（鴿子、麻雀、老鷹）',
          feature:
            '具特化氣囊系統。吸氣與呼氣時肺部均有新鮮空氣單向流過（雙重呼吸），適應高空飛行與劇烈代謝的高耗氧需求。',
          organ: '雙重呼吸 (肺 + 氣囊)',
          color: palette.purple,
          bg: palette.purpleLight,
        },
        {
          group: '哺乳類呼吸：發達肺 + 橫膈',
          animals: '人類、鯨豚、狗、貓、蝙蝠',
          feature:
            '肺泡數以億計，胸腔與腹腔由橫膈肌肉完整隔開，由肋骨與橫膈運動精密帶動負壓通氣，換氣效率極高。',
          organ: '肺泡海綿組織 + 橫膈',
          color: palette.rose,
          bg: palette.roseLight,
        },
      ].map((item) => (
        <div
          key={item.group}
          style={{
            background: palette.surface,
            borderRadius: 18,
            border: `1.5px solid ${palette.border}`,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            borderTop: `6px solid ${item.color}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h4 style={{ fontSize: 24, fontWeight: 800, margin: 0, color: item.color }}>
              {item.group}
            </h4>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: item.color,
                background: item.bg,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              {item.organ}
            </span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: palette.text }}>
            代表生物：{item.animals}
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5, marginTop: 'auto' }}>
            {item.feature}
          </div>
        </div>
      ))}
    </div>
    <PageFooter tip="會考大陷阱：昆蟲的血液不具血紅素、不負責運送氧氣；體內細胞靠氣管系統直接供氧！" />
  </div>
);

const SlideOrganSystemsCoordination: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體各大器官系統協同與氣體恆定整合"
      subtitle="循環、消化、呼吸與排泄系統的協作交通網，全力維持內環境穩定"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
        }}
      >
        <ZoomableImage
          src={humanOrganSystemsCoordinationImg}
          alt="人體器官系統協同作用圖"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <div style={{ fontSize: 20, color: palette.muted, marginTop: 8, fontWeight: 600 }}>
          圖 6-5 人體各器官系統在物質運輸與氣體恆定中的協同合作
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.cyan}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan, marginBottom: 4 }}>
            🫁 呼吸系統 (Respiratory System)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            自外界攝取氧氣 (O₂) 擴散入血，並將細胞代謝產生的二氧化碳 (CO₂)
            排出體外，是體內氣體恆定的第一線閘口。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 4 }}>
            🍞 消化系統 (Digestive System)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            消化分解食物並由小腸絨毛吸收葡萄糖、胺基酸等養分，提供細胞呼吸作用所需的能量原料。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.rose}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 4 }}>
            ❤️ 循環系統 (Circulatory System)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            以心臟為動力、血液為介質，充當全身體內的高速運輸物流網，將氧氣與養分送達組織，並將 CO₂
            與廢物載運至排泄器官。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1.5px solid ${palette.border}`,
            borderRadius: 16,
            padding: '16px 20px',
            borderLeft: `6px solid ${palette.emerald}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.emerald, marginBottom: 4 }}>
            ⚡ 組織細胞 (Body Cells)
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            粒線體結合養分與氧氣進行呼吸作用生成 ATP，支持生長、修補、運動、神經傳導等一切生命現象！
          </div>
        </div>
      </div>
    </div>
    <PageFooter tip="恆定全貌：各器官系統互為依存，共同確保細胞內液與組織液中氧氣與二氧化碳的動態恆定！" />
  </div>
);

const SlideGasHomeostasisMatrix: Page = () => (
  <div style={fill}>
    <PageHeader
      title="吸入 vs 呼出氣體成分比例與呼吸全機制對照矩陣"
      subtitle="數據實證、物理參數與生化能量轉化全方位總對照"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1.05fr 1.15fr',
        gap: 28,
        flex: 1,
        minHeight: 0,
      }}
    >
      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              background: palette.cyan,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            數據分析
          </span>
          <h3 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: palette.text }}>
            吸入氣體 vs 呼出氣體成分比例對照
          </h3>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 20,
            lineHeight: 1.5,
          }}
        >
          <thead>
            <tr style={{ background: palette.cyanLight, color: palette.cyan }}>
              <th
                style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.cyanBorder}`,
                }}
              >
                氣體種類
              </th>
              <th
                style={{
                  padding: '10px 14px',
                  textAlign: 'center',
                  borderBottom: `2px solid ${palette.cyanBorder}`,
                }}
              >
                吸入氣體 (大氣)
              </th>
              <th
                style={{
                  padding: '10px 14px',
                  textAlign: 'center',
                  borderBottom: `2px solid ${palette.cyanBorder}`,
                }}
              >
                呼出氣體
              </th>
              <th
                style={{
                  padding: '10px 14px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.cyanBorder}`,
                }}
              >
                變化原因解析
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                gas: '氮氣 (N₂)',
                in: '78 %',
                out: '78 %',
                reason: '不參與代謝，比例維持第一！',
                highlight: true,
              },
              {
                gas: '氧氣 (O₂)',
                in: '21 %',
                out: '16 %',
                reason: '部分被肺泡微血管吸收供細胞利用',
                highlight: false,
              },
              {
                gas: '二氧化碳 (CO₂)',
                in: '0.04 %',
                out: '4 %',
                reason: '細胞呼吸代謝產物，暴增 100 倍！',
                highlight: true,
              },
              {
                gas: '水氣 (H₂O)',
                in: '較少 (隨氣候變動)',
                out: '飽和增多',
                reason: '呼吸道濕潤且為呼吸代謝產物',
                highlight: false,
              },
            ].map((row, idx) => (
              <tr
                key={row.gas}
                style={{
                  background: idx % 2 === 0 ? palette.surface : palette.surfaceSubtle,
                  borderBottom: `1px solid ${palette.border}`,
                }}
              >
                <td
                  style={{
                    padding: '10px 14px',
                    fontWeight: 800,
                    color: row.highlight ? palette.rose : palette.text,
                  }}
                >
                  {row.gas}
                </td>
                <td style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 700 }}>
                  {row.in}
                </td>
                <td
                  style={{
                    padding: '10px 14px',
                    textAlign: 'center',
                    fontWeight: 800,
                    color: row.highlight ? palette.rose : palette.text,
                  }}
                >
                  {row.out}
                </td>
                <td style={{ padding: '10px 14px', color: palette.muted }}>{row.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 12,
            padding: '12px 16px',
            fontSize: 20,
            color: palette.rose,
            lineHeight: 1.5,
          }}
        >
          🚨 <strong>超高頻必考陷阱：</strong>呼出氣體中
          <strong>含量最多的依然是「氮氣 (78%)」</strong>，第二名是「氧氣
          (16%)」，第三名才是「二氧化碳 (4%)」！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          border: `1.5px solid ${palette.border}`,
          borderRadius: 20,
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              background: palette.blue,
              color: '#ffffff',
              fontSize: 22,
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: 8,
            }}
          >
            機制矩陣
          </span>
          <h3 style={{ fontSize: 26, fontWeight: 800, margin: 0, color: palette.text }}>
            吸氣 vs 呼氣全方位狀態比對
          </h3>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 20,
            lineHeight: 1.45,
          }}
        >
          <thead>
            <tr style={{ background: palette.blueLight, color: palette.blue }}>
              <th
                style={{
                  padding: '8px 12px',
                  textAlign: 'left',
                  borderBottom: `2px solid ${palette.blueBorder}`,
                }}
              >
                比較項目
              </th>
              <th
                style={{
                  padding: '8px 12px',
                  textAlign: 'center',
                  borderBottom: `2px solid ${palette.blueBorder}`,
                }}
              >
                吸氣運動 (Inhalation)
              </th>
              <th
                style={{
                  padding: '8px 12px',
                  textAlign: 'center',
                  borderBottom: `2px solid ${palette.blueBorder}`,
                }}
              >
                呼氣運動 (Exhalation)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { item: '肋間肌狀態', inh: '收縮', exh: '舒張' },
              { item: '肋骨位置', inh: '向上、向外移動', exh: '向下、向內移動' },
              { item: '橫膈肌肉', inh: '收縮、位置下降變平', exh: '舒張、位置上升呈拱頂' },
              { item: '胸腔容積', inh: '擴大增大', exh: '縮小變小' },
              { item: '胸內氣壓', inh: '小於外界大氣壓 (負壓)', exh: '大於外界大氣壓 (正壓)' },
              { item: '肺臟狀態', inh: '被動膨脹擴大', exh: '被動回縮變小' },
              { item: '氣體流向', inh: '大氣壓壓入肺臟', exh: '高壓壓出外界' },
            ].map((row, idx) => (
              <tr
                key={row.item}
                style={{
                  background: idx % 2 === 0 ? palette.surface : palette.surfaceSubtle,
                  borderBottom: `1px solid ${palette.border}`,
                }}
              >
                <td style={{ padding: '8px 12px', fontWeight: 800, color: palette.text }}>
                  {row.item}
                </td>
                <td
                  style={{
                    padding: '8px 12px',
                    textAlign: 'center',
                    fontWeight: 700,
                    color: palette.blue,
                  }}
                >
                  {row.inh}
                </td>
                <td
                  style={{
                    padding: '8px 12px',
                    textAlign: 'center',
                    fontWeight: 700,
                    color: palette.rose,
                  }}
                >
                  {row.exh}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <PageFooter tip="考前必背：呼出氣體比例由大到小：氮氣 (78%) ＞ 氧氣 (16%) ＞ 二氧化碳 (4%)！" />
  </div>
);

const SlideExamPitfalls: Page = () => (
  <div style={fill}>
    <PageHeader
      title="國中會考經典題型與易錯陷阱深度解析"
      subtitle="歷屆高頻失分熱點、文字遊戲與觀念混淆全面擊破"
    />
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        flex: 1,
        minHeight: 0,
      }}
    >
      {[
        {
          tag: '陷阱 01',
          title: '呼出氣體最多的是 CO₂？',
          mistake: '誤以為呼氣主要排出二氧化碳，所以呼出氣體中二氧化碳含量最多。',
          correct:
            '大錯特錯！呼出氣體中含量冠軍依然是「氮氣 (78%)」，亞軍是「氧氣 (16%)」，二氧化碳僅佔「4%」！',
          color: palette.rose,
          bg: palette.roseLight,
        },
        {
          tag: '陷阱 02',
          title: '植物白天只做光合作用？',
          mistake: '誤以為植物白天進行光合作用，夜晚才進行呼吸作用。',
          correct:
            '嚴重錯誤！活細胞只要活著，呼吸作用「24 小時無時無刻」都在進行。白天光合速率大於呼吸速率，才呈現淨吸 CO₂ 淨釋 O₂。',
          color: palette.amber,
          bg: palette.amberLight,
        },
        {
          tag: '陷阱 03',
          title: '肺臟本身能主動收縮舒張？',
          mistake: '以為吸氣是肺部肌肉主動用力脹大，呼氣是肺肌放鬆。',
          correct:
            '完全錯誤！肺臟本身由上億肺泡與微血管組成，完全沒有肌肉組織！肺是靠胸壁肋骨與橫膈運動改變胸腔容積而被動變大縮小的。',
          color: palette.cyan,
          bg: palette.cyanLight,
        },
        {
          tag: '陷阱 04',
          title: '喘氣是為了補充缺乏的氧？',
          mistake: '運動後大口喘氣，直覺以為是大腦偵測到血液缺氧。',
          correct:
            '生理真相：刺激腦幹呼吸中樞的最強誘因是「血液中二氧化碳濃度過高（pH 下降）」，不是缺氧！',
          color: palette.blue,
          bg: palette.blueLight,
        },
        {
          tag: '陷阱 05',
          title: '昆蟲血液顏色透明因為氧多？',
          mistake: '以為昆蟲血液沒有血紅素所以呈淡黃綠色，是運送氧氣效率極高。',
          correct:
            '致命觀念！昆蟲血液完全不負責運送氣體，靠腹部氣孔分支的氣管系統直接將空氣送達組織細胞！',
          color: palette.purple,
          bg: palette.purpleLight,
        },
        {
          tag: '陷阱 06',
          title: '綠豆呼吸實驗能照光嗎？',
          mistake: '以為綠豆萌芽實驗隨便在實驗桌日光燈下進行都沒關係。',
          correct:
            '關鍵細節：綠豆若長出綠葉並照光，光合作用會吸收二氧化碳，導致石灰水無法混濁，使實驗完全失真失敗！',
          color: palette.emerald,
          bg: palette.emeraldLight,
        },
      ].map((card) => (
        <div
          key={card.tag}
          style={{
            background: palette.surface,
            borderRadius: 18,
            border: `1.5px solid ${palette.border}`,
            padding: '20px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            borderTop: `6px solid ${card.color}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: card.color,
                background: card.bg,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              {card.tag}
            </span>
            <h4 style={{ fontSize: 22, fontWeight: 800, margin: 0, color: palette.text }}>
              {card.title}
            </h4>
          </div>

          <div
            style={{
              fontSize: 20,
              color: palette.rose,
              background: palette.roseLight,
              padding: '8px 12px',
              borderRadius: 8,
              lineHeight: 1.45,
            }}
          >
            ❌ <strong>常見迷思：</strong>
            {card.mistake}
          </div>

          <div
            style={{
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.5,
              marginTop: 'auto',
            }}
          >
            ✅ <strong>正解心法：</strong>
            {card.correct}
          </div>
        </div>
      ))}
    </div>
    <PageFooter tip="會考心法：只要題目出現「呼出氣體最多的是 CO₂」、「植物白天不做呼吸」、「肺肌收縮」，一律秒選錯誤！" />
  </div>
);

const SlideSummary: Page = () => (
  <div style={fill}>
    <PageHeader
      title="單元重點總結與會考滿分知識心智圖"
      subtitle="融會貫通四大知識模組，輕鬆掌握呼吸與氣體恆定所有必考點"
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
      {[
        {
          title: '一、呼吸作用本質',
          points: [
            '場所：細胞粒線體。',
            '原料與產物：葡萄糖 + O₂ ➔ CO₂ + H₂O + ATP。',
            '時間：全天候 24 小時。',
            '動植物活細胞無一例外。',
          ],
          color: palette.cyan,
          bg: palette.cyanLight,
          border: palette.cyanBorder,
        },
        {
          title: '二、人體呼吸運動',
          points: [
            '肺臟本身沒有肌肉組織。',
            '吸氣：肋起膈降容積大壓小。',
            '呼氣：肋降膈起容積小壓大。',
            '肺泡微血管擴散換氣（不耗能）。',
          ],
          color: palette.blue,
          bg: palette.blueLight,
          border: palette.blueBorder,
        },
        {
          title: '三、中樞與探究實驗',
          points: [
            '調節中樞：腦幹（生命中樞）。',
            '刺激因子：血液 CO₂ 濃度。',
            '石灰水驗 CO₂ 變白色混濁。',
            '氯化亞鈷試紙驗水氣藍變粉紅。',
          ],
          color: palette.indigo,
          bg: palette.indigoLight,
          border: palette.indigoBorder,
        },
        {
          title: '四、演化與植物適應',
          points: [
            '植物氣孔、皮孔、根部交換。',
            '植物日夜平衡與光補償點。',
            '昆蟲氣管系統血液不運氧。',
            '呼出氣體 N₂ (78%) 仍佔最高！',
          ],
          color: palette.emerald,
          bg: palette.emeraldLight,
          border: palette.emeraldBorder,
        },
      ].map((card) => (
        <div
          key={card.title}
          style={{
            background: palette.surface,
            borderRadius: 18,
            border: `1.5px solid ${card.border}`,
            padding: '22px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            borderTop: `6px solid ${card.color}`,
          }}
        >
          <h3 style={{ fontSize: 26, fontWeight: 900, color: card.color, margin: 0 }}>
            {card.title}
          </h3>
          <ul
            style={{
              margin: 0,
              paddingLeft: 22,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.6,
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            {card.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <PageFooter tip="恭喜完成「單元 6-1 呼吸與氣體的恆定」全部學習！掌握核心機轉與實驗，會考拿滿分！" />
  </div>
);

export default [
  Cover,
  SlideRespirationVsBreathing,
  SlideHumanRespiratorySystem,
  SlideAlveoliGasExchange,
  SlideBreathingMechanics,
  SlideBottleLungModel,
  SlideBreathingRegulation,
  SlideLabExhaledGas,
  SlideLabPlantRespiration,
  SlidePlantGasExchange,
  SlideAnimalRespiratoryAdaptations,
  SlideOrganSystemsCoordination,
  SlideGasHomeostasisMatrix,
  SlideExamPitfalls,
  SlideSummary,
] satisfies Page[];
