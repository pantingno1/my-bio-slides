import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import enzymeFactorsImg from './assets/enzyme-factors.jpg';
import labPhotosynthesisLightImg from './assets/lab-photosynthesis-light.jpg';
import leafStructureDiagramImg from './assets/leaf-structure-diagram.jpg';
import leafStructurePhotoImg from './assets/leaf-structure-photo.jpg';
import photosynthesisNutrientsImg from './assets/photosynthesis-nutrients.jpg';
import photosynthesisProcessImg from './assets/photosynthesis-process.jpg';

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
  green: '#16a34a',
  greenLight: '#f0fdf4',
  greenBorder: '#bbf7d0',
  blue: '#0284c7',
  blueLight: '#f0f9ff',
  blueBorder: '#bae6fd',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
  purpleBorder: '#ddd6fe',
  orange: '#ea580c',
  orangeLight: '#fff7ed',
  orangeBorder: '#fed7aa',
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
  category = '國中自然科學 · 生物（一上）單元 3-3',
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
        background: palette.emeraldLight,
        border: `1px solid ${palette.emeraldBorder}`,
        color: palette.emerald,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 20 }}>●國中自然科學 · 生物</span>
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
      <span>{tip ? `💡 重點提示：${tip}` : '國中自然科學 · 植物如何製造養分'}</span>
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
      background: 'radial-gradient(circle at 18% 25%, #ecfdf5 0%, #f8fafc 55%, #f0fdf4 100%)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        background: 'linear-gradient(90deg, #059669 0%, #10b981 50%, #0284c7 100%)',
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
          background: palette.emeraldLight,
          border: `1px solid ${palette.emeraldBorder}`,
          color: palette.emerald,
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
            background: palette.emerald,
          }}
        />國中自然科學 · 生物</div>

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
        <span>綠色大地的光能奇蹟</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #0284c7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '96px',
          }}
        >
          植物如何製造養分
        </span>
      </h1>

      <p
        style={{
          fontSize: '32px',
          color: palette.muted,
          margin: 0,
          maxWidth: 1020,
          lineHeight: 1.6,
        }}
      >
        深度解析葉片微細構造、光合作用兩階段反應（光反應 vs
        碳反應）、天竺葵光合作用檢驗實驗，以及養分合成、運輸與儲存全貌
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
          { icon: '🍃', tag: '葉片微細構造', desc: '表皮、葉肉、葉脈與氣孔' },
          { icon: '☀️', tag: '光反應歷程', desc: '水分子光解產生氧氣與能量' },
          { icon: '🔄', tag: '碳反應合成', desc: '酵素催化 CO2 固定生成葡萄糖' },
          { icon: '🧪', tag: '探究驗證實驗', desc: '天竺葵遮光隔水加熱脫色' },
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
                color: palette.emerald,
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

/* ────────────────────────── Page 2: 綠色工廠——葉片外部與內部組織 ────────────────────────── */
const LeafOverviewPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="綠色光能工廠——葉片的宏觀特徵與分工"
      subtitle="植物體主要的光合作用器官，演化出極致的透光、通氣與運輸架構"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
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
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            外部特徵
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>
            最大化截光與氣體交換
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {[
            {
              title: '扁平展延的葉身',
              desc: '擴大接受陽光照射的表面積，同時減少內部組織到表面的距離，利於氣體擴散。',
            },
            {
              title: '互不遮蔽的葉序排列',
              desc: '植物各節的葉片常以互生、對生、輪生等方式生長，盡量錯開角度以避免彼此遮擋陽光。',
            },
            {
              title: '透明角質層覆蓋',
              desc: '上、下表皮表面分泌不透水的臘質角質層，既能阻絕水分過度蒸散，又允許陽光穿透直達葉肉。',
            },
          ].map((it) => (
            <div
              key={it.title}
              style={{
                background: palette.emeraldLight,
                borderRadius: 14,
                padding: '14px 18px',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div
                style={{ fontSize: 23, fontWeight: 800, color: palette.emerald, marginBottom: 4 }}
              >
                {it.title}
              </div>
              <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.5 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.blueBorder}`,
          padding: '24px 28px',
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
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            四大組織
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>
            葉片橫切面分工體系
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            {
              part: '表皮組織 (Epidermis)',
              duty: '排列緊密、透明無色（無葉綠體），具保護與透光作用。',
              badge: '保護透光',
              color: palette.teal,
            },
            {
              part: '保衛細胞 (Guard cells)',
              duty: '成對半月形，含葉綠體，能控制氣孔開閉調節氣體與水分蒸散。',
              badge: '氣門開關',
              color: palette.emerald,
            },
            {
              part: '葉肉組織 (Mesophyll)',
              duty: '細胞排列豐富，含大量葉綠體，為光合作用進行的最核心場域。',
              badge: '製糖主力',
              color: palette.green,
            },
            {
              part: '葉脈（輸導組織）',
              duty: '木質部運送水分與礦物質；韌皮部運送光合作用製造的有機養分。',
              badge: '物流管道',
              color: palette.blue,
            },
          ].map((row) => (
            <div
              key={row.part}
              style={{
                background: palette.surfaceSubtle,
                borderRadius: 12,
                padding: '12px 16px',
                borderLeft: `4px solid ${row.color}`,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
                  {row.part}
                </span>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: row.color,
                    background: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  {row.badge}
                </span>
              </div>
              <div style={{ fontSize: 20, color: palette.muted, marginTop: 4, lineHeight: 1.4 }}>
                {row.duty}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="會考必考盲點：表皮細胞無葉綠體！只有保衛細胞與葉肉細胞才含有葉綠體！" />
  </div>
);

/* ────────────────────────── Page 3: 葉片的構造示意圖 ────────────────────────── */
const LeafStructureDiagramPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="葉片構造示意圖——各部組織位置與功能拆解"
      subtitle="課本核心圖解：上表皮、柵狀組織、海綿組織、葉脈與下表皮氣孔"
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
            border: `1px solid ${palette.emeraldBorder}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            構造層級解析（由上至下）：
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>
            1. <strong>角質層：</strong>蠟質薄膜，防水蒸散。
            <br />
            2. <strong>上表皮：</strong>單層排列緊密，無葉綠體。
            <br />
            3. <strong>葉肉細胞：</strong>光合作用主要場所，富含葉綠體。
            <br />
            4. <strong>葉脈：</strong>上方為<strong>木質部</strong>（運水），下方為
            <strong>韌皮部</strong>（運養分）。
            <br />
            5. <strong>下表皮與氣孔：</strong>下表皮氣孔數目通常多於上表皮（防曬保水）。
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            borderRadius: 14,
            padding: '16px 20px',
            border: `1px solid ${palette.amberBorder}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.amber, marginBottom: 6 }}>
            🔑 會考圖表判讀金鑰：
          </div>
          <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.55 }}>
            • <strong>葉脈木質部在上方、韌皮部在下方</strong>（背法：木在內/上、韌在外/下）。
            <br />• 陸生植物氣孔多分布於<strong>下表皮</strong>，可避免陽光直射造成水分快速流失。
            <br />• 氣孔由<strong>兩個半月形保衛細胞</strong>
            包夾形成，吸水膨脹時氣孔張開，失水萎縮時氣孔關閉。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={leafStructureDiagramImg}
            alt="葉片的構造示意圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 23-1：葉片橫切面構造示意圖（點擊圖片可全螢幕放大檢視標籤）
        </div>
      </div>
    </div>

    <PageFooter tip="葉脈方向定位：葉肉上方靠近上表皮的是木質部，靠近下表皮的是韌皮部！" />
  </div>
);

/* ────────────────────────── Page 4: 葉片的構造實照圖 ────────────────────────── */
const LeafStructurePhotoPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="顯微鏡下的真實世界——葉片橫切實照觀察"
      subtitle="將模式圖與真實生物顯微切片標本對照，強化辨識能力"
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
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            實體顯微切片組織特徵速查：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              {
                name: '上表皮細胞',
                desc: '緊密排列成單層，透明透光，無綠色葉綠體顆粒。',
                color: palette.teal,
              },
              {
                name: '柵狀葉肉層',
                desc: '緊靠上表皮，細胞呈長柱狀垂直排列，充滿密集深綠色葉綠體，截光效率極高。',
                color: palette.emerald,
              },
              {
                name: '海綿葉肉層',
                desc: '靠近下表皮，細胞形狀不規則，排列疏鬆且氣室孔隙大，利於二氧化碳與氧氣在內部擴散。',
                color: palette.green,
              },
              {
                name: '葉脈維管束',
                desc: '圓形或橢圓形包覆構造，清晰可見管徑較大且厚壁的木質部導管。',
                color: palette.blue,
              },
            ].map((it) => (
              <div
                key={it.name}
                style={{
                  background: palette.surfaceSubtle,
                  borderRadius: 10,
                  padding: '10px 14px',
                  borderLeft: `4px solid ${it.color}`,
                }}
              >
                <div style={{ fontSize: 21, fontWeight: 800, color: palette.text }}>{it.name}</div>
                <div style={{ fontSize: 20, color: palette.muted, marginTop: 2 }}>{it.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            borderRadius: 14,
            padding: '14px 18px',
            border: `1px solid ${palette.emeraldBorder}`,
            fontSize: 21,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          💡 <strong>為什麼葉子正面通常比背面更深綠？</strong>
          <br />
          因為靠近正面的「柵狀組織」細胞排列緊密且含有高密度的葉綠體；而靠近背面的「海綿組織」排列疏鬆、葉綠體較少，故葉背呈較淡的淺綠色！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={leafStructurePhotoImg}
            alt="葉片的構造實照圖"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 25-1：光學顯微鏡下的葉片橫切實照（點擊圖片可全螢幕放大查看細胞細節）
        </div>
      </div>
    </div>

    <PageFooter tip="葉片正面顏色深綠、背面顏色較淺，原因是正面下方的柵狀組織葉綠體密度遠高於海綿組織！" />
  </div>
);

/* ────────────────────────── Page 5: 光合作用總反應方程式與核心要素 ────────────────────────── */
const PhotosynthesisEquationPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="光合作用的原料、場所、動力與產物"
      subtitle="將無機物轉化為高能有機物的能量工廠——化學反應總式全解析"
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
      }}
    >
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
          padding: '24px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
          boxShadow: '0 8px 24px -6px rgba(5, 150, 105, 0.08)',
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: palette.emerald,
            background: palette.emeraldLight,
            padding: '3px 14px',
            borderRadius: 999,
          }}
        >
          光合作用總化學反應式 (Overall Equation)
        </div>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: '40px',
            fontWeight: 900,
            color: palette.text,
            letterSpacing: '0.02em',
            textAlign: 'center',
          }}
        >
          <span style={{ color: palette.blue }}>水 (H₂O)</span>
          {' + '}
          <span style={{ color: palette.purple }}>二氧化碳 (CO₂)</span>{' '}
          <span style={{ color: palette.amber }}>──[ 光能 / 葉綠體 · 酵素 ]──➔</span>{' '}
          <span style={{ color: palette.orange }}>葡萄糖 (C₆H₁₂O₆)</span>
          {' + '}
          <span style={{ color: palette.emerald }}>氧氣 (O₂)</span>
          {' + '}
          <span style={{ color: palette.blue }}>水 (H₂O)</span>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          flex: 1,
        }}
      >
        {[
          {
            tag: '原料來源',
            title: '水 ＋ 二氧化碳',
            icon: '💧🌱',
            color: palette.blue,
            light: palette.blueLight,
            desc: '• 水：由根毛吸收，經莖的木質部向上運送至葉片。\n• CO₂：由空氣中經由葉表皮氣孔擴散進入葉肉組織。',
          },
          {
            tag: '反應場所',
            title: '葉綠體 (Chloroplast)',
            icon: '🟢',
            color: palette.emerald,
            light: palette.emeraldLight,
            desc: '• 雙層膜胞器，內部含有吸收光能的葉綠素色素群與多種催化碳反應的合成酵素。',
          },
          {
            tag: '能量動力',
            title: '太陽光能 (Solar)',
            icon: '☀️',
            color: palette.amber,
            light: palette.amberLight,
            desc: '• 葉綠素主要吸收紅光與藍紫光，反射綠光（故植物呈綠色）；光能激發電子啟動能量轉換。',
          },
          {
            tag: '產物去向',
            title: '葡萄糖 ＋ 氧氣 ＋ 水',
            icon: '🍞💨',
            color: palette.orange,
            light: palette.orangeLight,
            desc: '• 葡萄糖：提供能量或轉化儲存。\n• 氧氣：供自身呼吸或由氣孔釋放。\n• 水：在碳反應階段重新生成。',
          },
        ].map((col) => (
          <div
            key={col.tag}
            style={{
              background: palette.surface,
              borderRadius: 18,
              border: `1px solid ${palette.border}`,
              borderTop: `5px solid ${col.color}`,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ fontSize: '32px' }}>{col.icon}</div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: col.color,
                background: col.light,
                padding: '2px 8px',
                borderRadius: 6,
                alignSelf: 'flex-start',
              }}
            >
              {col.tag}
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>{col.title}</div>
            <div
              style={{
                fontSize: 20,
                color: palette.muted,
                lineHeight: 1.5,
                whiteSpace: 'pre-line',
              }}
            >
              {col.desc}
            </div>
          </div>
        ))}
      </div>
    </div>

    <PageFooter tip="會考第一考點：光合作用釋出的「氧氣」，其氧原子完全來自於「水」的分解，而不是來自二氧化碳！" />
  </div>
);

/* ────────────────────────── Page 6: 光合作用的兩階段歷程 ────────────────────────── */
const PhotosynthesisProcessPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="光合作用的兩階段歷程——光反應 vs 碳反應"
      subtitle="光能捕獲與能量化學固定的精準接力：光解水釋氧 ➔ 酵素催化固碳製糖"
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
            border: `1px solid ${palette.amberBorder}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 25, fontWeight: 800, color: palette.text }}>
              第一階段：光反應（需光反應）
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                background: palette.amberLight,
                color: palette.amber,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              依賴光能
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, marginTop: 6, lineHeight: 1.55 }}>
            • <strong>場所：</strong>葉綠體囊狀膜（葉綠餅）。
            <br />• <strong>過程：</strong>葉綠素吸收太陽光能，將<strong>水 (H₂O) 分解</strong>
            成氫離子、高能電子與<strong>氧氣 (O₂)</strong>。<br />• <strong>產物：</strong>
            <strong>氧氣釋出</strong>，並產生高能量分子（ATP 及 NADPH）提供給下一階段使用。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.emeraldBorder}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 25, fontWeight: 800, color: palette.text }}>
              第二階段：碳反應（舊稱暗反應）
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                background: palette.emeraldLight,
                color: palette.emerald,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              需酵素參與 · 受溫度影響
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, marginTop: 6, lineHeight: 1.55 }}>
            • <strong>場所：</strong>葉綠體基質。
            <br />• <strong>過程：</strong>
            <strong>不直接需要光</strong>，在<strong>酵素</strong>催化下，利用光反應產生的高能量，將
            <strong>二氧化碳 (CO₂)</strong> 還原固定。
            <br />• <strong>產物：</strong>合成<strong>葡萄糖 (C₆H₁₂O₆)</strong>{' '}
            並生成水。碳反應速率高度受<strong>溫度</strong>影響！
          </div>
        </div>

        <div
          style={{
            background: palette.purpleLight,
            borderRadius: 12,
            padding: '12px 16px',
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            border: `1px solid ${palette.purpleBorder}`,
          }}
        >
          💡 <strong>觀念澄清：</strong>
          「碳反應」雖然不直接需光，但其所需的高能量來自於「光反應」。因此在持續黑暗無光環境中，碳反應很快也會因能量耗盡而停擺！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={photosynthesisProcessImg}
            alt="光合作用的過程"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 24-1：光反應與碳反應的能量與物質接力圖（點擊圖片可全螢幕放大）
        </div>
      </div>
    </div>

    <PageFooter tip="記住兩階段分工：光反應拆水產氧；碳反應吃 CO2 靠酵素造葡萄糖！" />
  </div>
);

/* ────────────────────────── Page 7: 探究實驗 3-3 光與光合作用 ────────────────────────── */
const LabPhotosynthesisLightPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 3-3：光與光合作用——天竺葵遮光實驗"
      subtitle="透過鋁箔局部遮光對照，驗證光照為光合作用合成澱粉的必要條件"
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
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ fontSize: 25, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            實驗目的與變因設計：
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>
            • <strong>探究問題：</strong>植物光合作用是否一定要有光才能製造澱粉？
            <br />• <strong>操作變因 (Independent variable)：</strong>
            <strong>有無光照</strong>（照光區 vs 鋁箔遮光區）。
            <br />• <strong>控制變因 (Controlled variables)：</strong>
            同一片葉子、相同水分、相同溫度與空氣流通。
            <br />• <strong>應變變因 (Dependent variable)：</strong>滴加碘液後的顏色變化（
            <strong>是否產生澱粉</strong>）。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            實驗結果判定：
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div
              style={{
                background: palette.blueLight,
                borderRadius: 12,
                padding: '12px 14px',
                border: `1px solid ${palette.blueBorder}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue }}>
                照光區域 (未遮光)
              </div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 4, lineHeight: 1.4 }}>
                滴加碘液後呈 <strong>藍黑色</strong>
                <br />👉 <strong>有製造出澱粉！</strong>
              </div>
            </div>

            <div
              style={{
                background: palette.amberLight,
                borderRadius: 12,
                padding: '12px 14px',
                border: `1px solid ${palette.amberBorder}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber }}>
                遮光區域 (貼鋁箔)
              </div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 4, lineHeight: 1.4 }}>
                滴加碘液維持 <strong>黃褐色</strong>
                <br />👉 <strong>沒有製造出澱粉！</strong>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            borderRadius: 12,
            padding: '12px 16px',
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            border: `1px solid ${palette.emeraldBorder}`,
          }}
        >
          🌿 <strong>前置步驟重點：</strong>實驗前必須先將天竺葵置於<strong>暗室中 2~3 天</strong>
          （稱為「飢餓處理」），消耗葉片中原先殘留的澱粉，確保實驗呈色的澱粉完全是實驗期間光照製造的！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={labPhotosynthesisLightImg}
            alt="光與光合作用實驗"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 75-1：光與光合作用實驗裝置與檢測流程（點擊圖片可全螢幕放大）
        </div>
      </div>
    </div>

    <PageFooter tip="會考名題：實驗前先放暗室暗處理 48 小時，目的是消耗葉片中原先儲存的澱粉！" />
  </div>
);

/* ────────────────────────── Page 8: 實驗 3-3 四大關鍵步驟原理與安全 ────────────────────────── */
const LabProcedureDeepDivePage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="實驗 3-3 步驟原理與實驗室安全細節"
      subtitle="會考超高頻細節題：沸水殺青 ➔ 隔水加熱脫色 ➔ 熱水漂洗 ➔ 碘液顯色"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          step: '第一步',
          action: '沸水煮葉片（約 2 分鐘）',
          purpose: '殺青 · 破壞細胞',
          color: palette.rose,
          light: palette.roseLight,
          border: palette.roseBorder,
          details: [
            '以沸水破壞葉片細胞的角質層與細胞膜。',
            '高溫使酵素永久變性失活，終止葉片內的化學反應。',
            '破壞細胞屏障，方便後續試劑滲透進出。',
          ],
        },
        {
          step: '第二步',
          action: '酒精隔水加熱（約 5~10 分鐘）',
          purpose: '脫色 · 溶出葉綠素',
          color: palette.amber,
          light: palette.amberLight,
          border: palette.amberBorder,
          details: [
            '葉綠素難溶於水，但易溶於有機溶劑（酒精）。',
            '葉片由綠色漸漸變為黃白色（脫色完成）。',
            '⚠️ 酒精易燃！嚴禁直接用火加熱，必須「隔水加熱」！',
          ],
        },
        {
          step: '第三步',
          action: '熱水漂洗葉片',
          purpose: '軟化 · 洗去殘留酒精',
          color: palette.blue,
          light: palette.blueLight,
          border: palette.blueBorder,
          details: [
            '浸入酒精後的葉片質地會變得硬而脆。',
            '以溫熱水浸泡清洗，能洗去殘留酒精並使葉片重新軟化平展。',
            '便於放置於培養皿中均勻滴加碘液。',
          ],
        },
        {
          step: '第四步',
          action: '滴加碘液檢驗',
          purpose: '顯色 · 判定澱粉存在',
          color: palette.emerald,
          light: palette.emeraldLight,
          border: palette.emeraldBorder,
          details: [
            '滴加黃褐色碘液於展開的葉片表面。',
            '照光部分呈「藍黑色」（含有澱粉）。',
            '遮光部分維持碘液的「黃褐色」（無澱粉）。',
            '若未先脫去綠色，藍黑色將被原綠色掩蓋難以辨識！',
          ],
        },
      ].map((card) => (
        <div
          key={card.step}
          style={{
            background: palette.surface,
            borderRadius: 18,
            border: `1px solid ${card.border}`,
            borderTop: `6px solid ${card.color}`,
            padding: '22px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: card.color,
                background: card.light,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              {card.step}
            </span>
          </div>

          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, lineHeight: 1.3 }}>
            {card.action}
          </div>

          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: card.color,
              background: card.light,
              padding: '4px 10px',
              borderRadius: 6,
            }}
          >
            🎯 目的：{card.purpose}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
            {card.details.map((dt, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: 20,
                  color: palette.muted,
                  lineHeight: 1.45,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 6,
                }}
              >
                <span style={{ color: card.color, fontWeight: 800 }}>•</span>
                <span>{dt}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="實驗室安全大考必問：酒精沸點低且易燃，絕對不能以酒精燈直接加熱，必須隔水加熱！" />
  </div>
);

/* ────────────────────────── Page 9: 養分的利用、運輸與儲存 ────────────────────────── */
const NutrientUtilizationAndTransportPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="光合作用產物的轉變、運輸與儲存"
      subtitle="葡萄糖的多元轉化路徑——澱粉、蛋白質、脂質與維管束長程物流"
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
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            養分轉換與運輸機制：
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>
            1. <strong>白天製造：</strong>
            葉肉細胞製造出葡萄糖，過多時暫時聚合為不溶性澱粉粒儲存於葉綠體。
            <br />
            2. <strong>夜間轉化：</strong>澱粉水解為<strong>可溶性雙醣（蔗糖）</strong>
            ，便於溶於水進行長程運送。
            <br />
            3. <strong>運送管道：</strong>溶解於水中的有機養分經由葉脈與莖的<strong>韌皮部</strong>
            篩管運送至全株。
            <br />
            4. <strong>終端儲存：</strong>
            運至根、莖、果實或種子，重新合成多醣或轉換為脂質、蛋白質儲備。
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            {
              type: '轉為澱粉儲存',
              crop: '甘藷（塊根）、馬鈴薯（塊莖）、稻米、玉米、小麥',
              color: palette.amber,
              bg: palette.amberLight,
            },
            {
              type: '轉為蛋白質儲存',
              crop: '大豆（黃豆）、黑豆、毛豆、花生等豆類種子',
              color: palette.emerald,
              bg: palette.emeraldLight,
            },
            {
              type: '轉為脂質儲存',
              crop: '花生、芝麻、葵花籽、橄欖、油菜籽',
              color: palette.rose,
              bg: palette.roseLight,
            },
          ].map((box) => (
            <div
              key={box.type}
              style={{
                background: box.bg,
                borderRadius: 12,
                padding: '12px 14px',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: box.color, marginBottom: 4 }}>
                {box.type}
              </div>
              <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>{box.crop}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={photosynthesisNutrientsImg}
            alt="光合作用的養分利用"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 26-1：光合作用產物的轉變與利用路徑（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="植物養分運送管道是「韌皮部」，運送水分與礦物質的是「木質部」，方向可由葉向下或向儲存器官運送！" />
  </div>
);

/* ────────────────────────── Page 10: 影響光合作用速率的環境因素 ────────────────────────── */
const EnvironmentalFactorsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="影響光合作用速率的環境關鍵因子"
      subtitle="光照強度、二氧化碳濃度與溫度——生物圈的動態平衡調控"
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
            border: `1px solid ${palette.amberBorder}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 光照強度 (Light Intensity)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            在一定範圍內，光照越強，光反應產能越多，光合作用速率越快。但達到
            <strong>光飽和點</strong>後，受限於葉綠體數量與碳反應酵素處理速度，速率不再上升。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.blueBorder}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 二氧化碳濃度 (CO₂ Concentration)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            大氣中 CO₂ 濃度約 0.04%。適度提高溫室內的 CO₂
            濃度可顯著提升碳反應產糖速率；但濃度過高時，其他酵素受質已飽和，產率趨於平緩。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.roseBorder}`,
            borderLeft: `5px solid ${palette.rose}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 溫度 (Temperature) 與酵素活性
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            <strong>碳反應完全由酵素催化！</strong>
            因此光合作用具有鐘形溫度曲線：低溫活性低；最適溫（約 25~35℃）速率最高；超過 45℃
            高溫會導致酵素<strong>變性破壞</strong>，光合作用急速崩跌！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(15, 23, 42, 0.06)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <ZoomableImage
            src={enzymeFactorsImg}
            alt="酵素活性與溫度的關係"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 20,
            color: palette.muted,
            marginTop: 8,
            textAlign: 'center',
            flexShrink: 0,
          }}
        >
          🔍 課本教材圖 22-1：溫度對酵素活性與碳反應速率的影響曲線（點擊圖片可全螢幕放大）
        </div>
      </div>
    </div>

    <PageFooter tip="高溫烈日時光合作用反而下降的兩大主因：氣孔關閉阻絕 CO2 進入、高溫造成碳反應酵素變性！" />
  </div>
);

/* ────────────────────────── Page 11: 會考常見易錯陷阱與盲點剖析 ────────────────────────── */
const ExamPitfallsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考必避！光合作用四大常考盲點與易錯陷阱"
      subtitle="歷屆大考最高頻失分題型診斷，建立精準解題反射"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          no: '陷阱 01',
          question: '光合作用釋出的「氧氣」是來自二氧化碳 (CO₂) 嗎？',
          wrong: '看化學式以為 CO2 丟掉碳就變成 O2 釋放。',
          correct:
            '【觀念矯正】錯！科學家利用同位素追蹤證實，光反應所釋放的「氧氣 (O₂)」完全來自於「水 (H₂O)」的光解！二氧化碳中的氧原子最終是進入「葡萄糖」與「生成水」中。',
          color: palette.rose,
          light: palette.roseLight,
        },
        {
          no: '陷阱 02',
          question: '暗反應（碳反應）一定是在「晚上或無光處」進行嗎？',
          wrong: '望文生義，誤以為「暗反應」就像老鼠一樣只在黑暗中工作。',
          correct:
            '【觀念矯正】錯！「碳反應」是指反應過程「不直接需要光能」，但主要仍發生在「白天」！因為碳反應所需的 ATP 與高能物質隨時依賴光反應補充，到了夜晚能量耗盡即停止。',
          color: palette.amber,
          light: palette.amberLight,
        },
        {
          no: '陷阱 03',
          question: '植物白天只行光合作用，到了晚上才進行呼吸作用？',
          wrong: '誤以為植物光合作用與呼吸作用是輪流上下班的。',
          correct:
            '【觀念矯正】錯！呼吸作用是細胞維持活命的基本生理活動，植物體「24 小時無時無刻都在進行呼吸作用」！白天只是因為光合作用製造氧氣的速率遠大於呼吸消耗，故整體表現為吸收 CO₂ 釋出 O₂。',
          color: palette.blue,
          light: palette.blueLight,
        },
        {
          no: '陷阱 04',
          question: '天竺葵實驗中，直接用酒精燈加熱裝酒精的燒杯？',
          wrong: '貪圖加熱速度，忽略有機溶劑的揮發與燃燒危險。',
          correct:
            '【觀念矯正】大忌！酒精沸點約 78℃，易揮發且燃點極低，直接加熱極易引發暴沸與火災！實驗室規定必須在大燒杯盛水，以「隔水加熱」方式安全進行脫色。',
          color: palette.purple,
          light: palette.purpleLight,
        },
      ].map((card) => (
        <div
          key={card.no}
          style={{
            background: palette.surface,
            borderRadius: 18,
            border: `1px solid ${palette.border}`,
            borderTop: `6px solid ${card.color}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            boxShadow: '0 6px 18px -4px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: card.color,
                background: card.light,
                padding: '2px 10px',
                borderRadius: 6,
              }}
            >
              {card.no}
            </span>
          </div>

          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, lineHeight: 1.35 }}>
            ❓ {card.question}
          </div>

          <div
            style={{
              fontSize: 20,
              color: palette.rose,
              background: '#fff1f2',
              padding: '6px 12px',
              borderRadius: 8,
              lineHeight: 1.4,
            }}
          >
            ❌ 常見迷思：{card.wrong}
          </div>

          <div
            style={{
              fontSize: 21,
              color: palette.text,
              background: palette.surfaceSubtle,
              padding: '10px 14px',
              borderRadius: 10,
              lineHeight: 1.5,
              marginTop: 'auto',
            }}
          >
            {card.correct}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="大考重點記憶：呼吸作用 24 小時不打烊；光反應水產氧；酒精脫色務必隔水加熱！" />
  </div>
);

/* ────────────────────────── Page 12: 滿分速記心法總整理 ────────────────────────── */
const SummaryPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="滿分速記心法——光合作用黃金口訣精華"
      subtitle="融會貫通葉片構造、兩階段反應與實驗步驟，掌握大考必勝關鍵"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          tag: '構造口訣',
          title: '表皮無綠角質防，保衛成對氣孔張',
          color: palette.teal,
          light: palette.tealLight,
          border: palette.tealBorder,
          items: [
            '表皮細胞單層透明無葉綠體，角質層防水蒸散',
            '成對半月形保衛細胞含葉綠體，控制氣孔開閉',
            '葉肉組織（柵狀緊密、海綿疏鬆）含大量葉綠體',
            '葉脈木質部在上運水、韌皮部在下運養分',
          ],
        },
        {
          tag: '兩階口訣',
          title: '光解水分子釋氧氣，碳靠酵素定二氧化碳',
          color: palette.emerald,
          light: palette.emeraldLight,
          border: palette.emeraldBorder,
          items: [
            '光反應：吸收光能分解水，釋出氧氣並產生能量',
            '碳反應：不直接需光，利用能量在酵素催化下合成葡萄糖',
            '氧氣源自水；葡萄糖源自二氧化碳',
            '碳反應具備酵素特性，極易受溫度高低影響',
          ],
        },
        {
          tag: '實驗口訣',
          title: '暗室飢餓水殺青，隔水酒精熱漂洗',
          color: palette.amber,
          light: palette.amberLight,
          border: palette.amberBorder,
          items: [
            '暗室飢餓處理 48 小時：消耗原儲存澱粉',
            '沸水煮葉：破壞角質層與細胞膜，停止反應',
            '酒精隔水加熱：溶出葉綠素脫色（防燃燒暴沸）',
            '溫水漂洗軟化葉片；碘液檢驗照光藍黑、遮光黃褐',
          ],
        },
        {
          tag: '去向口訣',
          title: '葡萄糖多轉澱粉，韌皮運送儲滿倉',
          color: palette.blue,
          light: palette.blueLight,
          border: palette.blueBorder,
          items: [
            '白天合成之葡萄糖暫轉為澱粉粒儲存於葉肉',
            '夜間轉化為蔗糖溶於水，經「韌皮部」運至全株',
            '儲存器官重新轉化為澱粉（甘藷）、蛋白質（大豆）或脂質（花生）',
            '部分聚合為纖維素構成植物細胞壁支持體軀',
          ],
        },
      ].map((card) => (
        <div
          key={card.tag}
          style={{
            background: palette.surface,
            borderRadius: 20,
            border: `1px solid ${card.border}`,
            padding: '24px 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: card.light,
                color: card.color,
                padding: '4px 12px',
                borderRadius: 6,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              {card.tag}
            </span>
            <span style={{ fontSize: 27, fontWeight: 800, color: palette.text }}>{card.title}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 4 }}>
            {card.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: 21,
                  color: palette.muted,
                  lineHeight: 1.5,
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

    <PageFooter tip="熟讀四大口訣，葉片構造、光碳兩階段、天竺葵實驗與養分利用全部融會貫通！" />
  </div>
);

/* ────────────────────────── 演講者備忘稿 (Notes) ────────────────────────── */
export const notes: (string | undefined)[] = [
  '封面頁：引言介紹地球生態系中最龐大的能量入口——光合作用。說明萬物生長靠太陽，植物如何扮演初級生產者的神奇角色。',
  '葉片宏觀分工：強調葉片扁平展延以增加受光面積，並介紹角質層、表皮、保衛細胞、葉肉與葉脈的整體配置。',
  '葉片構造圖：帶領學生從上到下辨識各層細胞。強調木質部在上、韌皮部在下；陸生植物下表皮氣孔較多。',
  '葉片實照圖：對比顯微實片與示意圖。指出柵狀組織排列緊密、葉綠體密集，海綿組織排列疏鬆、孔隙較大。',
  '總反應方程式：解析水與二氧化碳如何經光能轉化為葡萄糖、氧氣與水。特別提醒氧氣的氧原子完全來自水。',
  '兩階段歷程：區分光反應（光解水、產氧釋能）與碳反應（利用酵素固定二氧化碳生成葡萄糖）。強調碳反應主要仍在白天發生。',
  '實驗3-3原理：解說天竺葵遮光實驗的變因設定。強調實驗前暗室飢餓處理 48 小時的必要性。',
  '實驗3-3步驟細節：逐一步驟講解沸水殺青、酒精隔水加熱脫色、溫水漂洗與碘液檢驗，強烈提醒酒精隔水加熱之安全防護。',
  '養分利用與運送：說明葡萄糖如何轉化為澱粉儲存，夜間轉為蔗糖由韌皮部運送至儲存器官，以及合成大豆蛋白質與花生脂質。',
  '環境影響因子：分析光照強度飽和點、二氧化碳濃度與溫度曲線，連結上一單元酵素高溫變性之概念。',
  '會考陷阱辨析：深入破解氧氣來源、暗反應時間、植物24小時呼吸作用與酒精加熱四個經典易錯觀念。',
  '總結頁：帶領全班齊聲朗誦四大黃金速記口訣，完成單元核心心法整合。',
];

export const meta: SlideMeta = {
  title: '植物如何製造養分',
  createdAt: '2026-09-18T06:40:00.000Z',
};

export default [
  Cover,
  LeafOverviewPage,
  LeafStructureDiagramPage,
  LeafStructurePhotoPage,
  PhotosynthesisEquationPage,
  PhotosynthesisProcessPage,
  LabPhotosynthesisLightPage,
  LabProcedureDeepDivePage,
  NutrientUtilizationAndTransportPage,
  EnvironmentalFactorsPage,
  ExamPitfallsPage,
  SummaryPage,
] satisfies Page[];
