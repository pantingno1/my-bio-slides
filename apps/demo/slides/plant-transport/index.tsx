import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import barkAndWoodImg from './assets/bark-and-wood.jpg';
import labCeleryTransportImg from './assets/lab-celery-transport.jpg';
import plantTransportOverviewImg from './assets/plant-transport-overview.jpg';
import ringVascularBundleImg from './assets/ring-vascular-bundle.jpg';
import rootHairsImg from './assets/root-hairs.jpg';
import scatteredVascularBundleImg from './assets/scattered-vascular-bundle.jpg';
import transpirationStomaImg from './assets/transpiration-stoma.jpg';
import treeGrowthRingsImg from './assets/tree-growth-rings.jpg';
import vascularBundleDistributionImg from './assets/vascular-bundle-distribution.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fcfbfa',
    text: '#1c1917',
    accent: '#15803d',
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
  forest: '#15803d',
  forestLight: '#f0fdf4',
  forestBorder: '#bbf7d0',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  amber: '#b45309',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  blue: '#0284c7',
  blueLight: '#f0f9ff',
  blueBorder: '#bae6fd',
  rose: '#be123c',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
  purpleBorder: '#ddd6fe',
  teal: '#0f766e',
  tealLight: '#f0fdfa',
  tealBorder: '#99f6e4',
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
        background: palette.forestLight,
        border: `1px solid ${palette.forestBorder}`,
        color: palette.forest,
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
        fontSize: '48px',
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
      <div style={{ fontSize: '24px', color: palette.muted, marginTop: 4, lineHeight: 1.3 }}>
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
      <span>{tip ? `💡 重點提示：${tip}` : '國中自然科學 · 植物體內物質的運輸'}</span>
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
      background: 'radial-gradient(circle at 18% 25%, #f0fdf4 0%, #fcfbfa 55%, #fefce8 100%)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        background: 'linear-gradient(90deg, #15803d 0%, #059669 40%, #0284c7 70%, #b45309 100%)',
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
          background: palette.forestLight,
          border: `1px solid ${palette.forestBorder}`,
          color: palette.forest,
          fontSize: 24,
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: palette.forest,
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
          margin: '0 0 12px 0',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
        }}
      >
        <span>綠色巨塔的無聲動脈</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #15803d 0%, #059669 50%, #0284c7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '96px',
          }}
        >
          植物體內物質的運輸
        </span>
      </h1>

      <p
        style={{
          fontSize: '28px',
          color: palette.muted,
          margin: 0,
          maxWidth: 1100,
          lineHeight: 1.6,
        }}
      >
        貫穿根、莖、葉的維管束網絡 · 木質部與水分蒸散拉力 · 韌皮部與有機養分雙向流動
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          width: '100%',
          marginTop: 18,
        }}
      >
        {[
          {
            icon: '🌿',
            title: '維管束分布',
            desc: '根、莖、葉連續通道，散生與環狀排列比較',
          },
          {
            icon: '🪵',
            title: '樹皮與年輪',
            desc: '形成層向內外分裂、木材死細胞與氣候年輪',
          },
          {
            icon: '💧',
            title: '水分蒸散作用',
            desc: '根毛主動吸收、氣孔蒸散產生巨大上升牽引力',
          },
          {
            icon: '🧪',
            title: '芹菜染色實驗',
            desc: '探究水分運輸途徑、橫縱切面紅墨水顯色驗證',
          },
        ].map((card) => (
          <div
            key={card.title}
            style={{
              background: palette.surface,
              borderRadius: 16,
              padding: '20px 24px',
              border: `1px solid ${palette.border}`,
              boxShadow: '0 4px 16px -2px rgba(28, 25, 23, 0.05)',
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 8 }}>{card.icon}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
              {card.title}
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.45 }}>{card.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ────────────────────────── Page 2: 維管束的分布 ────────────────────────── */
const VascularDistributionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="全身貫通的立體網絡：維管束在各器官的分布"
      subtitle="植物體內沒有心臟搏動，全靠貫穿根、莖、葉的連續管腔網絡完成運輸"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 根部 (Root)：水分與礦物質的入口
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            維管束集中於<strong>根的中央核心區域</strong>
            。由根毛自土壤吸收的水分與溶於水的無機鹽類，經皮層細胞橫向傳遞進入中央木質部，準備向上輸送。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 莖部 (Stem)：上下縱貫的物質交通主幹道
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            維管束縱向貫穿整根枝幹：<strong>木質部靠內側</strong>（運送水與礦物質）；
            <strong>韌皮部靠外側</strong>（運送有機養分）。形成一條條垂直的高速運輸通道。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 葉片 (Leaf)：葉脈即是展開的維管束網絡
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            葉脈是維管束在葉片內的延伸支流：<strong>上方（近上表皮）為木質部</strong>
            ，送來水份供光合作用；<strong>下方（近下表皮）為韌皮部</strong>
            ，將葉肉製造的醣類引出運往全身。
          </div>
        </div>

        <div
          style={{
            background: palette.forestLight,
            borderRadius: 14,
            padding: '12px 18px',
            border: `1px solid ${palette.forestBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            marginTop: 'auto',
          }}
        >
          <strong>📌 空間方位速記：</strong>
          莖部「內木外韌」；葉脈「上木下韌」——兩者在葉柄處自然銜接，彼此連貫通暢無阻！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={vascularBundleDistributionImg}
            alt="維管束的分布"
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
          🔍 課本教材圖 29-1：維管束貫穿根、莖、葉之立體架構圖（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="葉脈是葉片中的維管束，其「木質部在上、韌皮部在下」，對應莖部的「內木外韌」！" />
  </div>
);

/* ────────────────────────── Page 3: 散生維管束 ────────────────────────── */
const ScatteredVsRingPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="單子葉植物莖部：散生排列維管束"
      subtitle="如水稻、玉米、小麥、竹子等草本植物，莖內維管束雜亂分散且無形成層"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            ① 排列特徵：散漫散生 (Scattered)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            維管束一個個獨立分散在基本薄壁組織中，<strong>沒有同心圓排列</strong>
            。愈靠外圍的維管束通常愈密集細小，愈靠中央的維管束愈大但分布較疏。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.rose}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 關鍵構造：無形成層 (No Cambium)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            單個維管束內部：<strong>外側為韌皮部、內側為木質部</strong>。 木質部與韌皮部之間
            <strong>缺乏具分裂能力的形成層</strong>，因此莖部無法持續加粗生長。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 代表植物與生長型態
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            大多為<strong>單子葉草本植物</strong>
            （玉米、甘蔗、百合、稻米）。竹子雖質地堅硬，但無形成層加粗，筍子長出時直徑即大致底定，中央髓腔常退化為中空。
          </div>
        </div>

        <div
          style={{
            background: palette.tealLight,
            borderRadius: 14,
            padding: '12px 18px',
            border: `1px solid ${palette.tealBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            marginTop: 'auto',
          }}
        >
          <strong>💡 會考核心記憶點：</strong>
          「散生維管束 ➔ 單子葉 ➔ 無形成層 ➔ 莖不能逐年增粗，不具年輪」！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={scatteredVascularBundleImg}
            alt="散生排列維管束"
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
          🔍 課本教材圖 30-1：單子葉草本莖（如玉米）散生維管束橫切面圖（點擊可全螢幕放大）
        </div>
      </div>
    </div>

    <PageFooter tip="玉米、水稻等單子葉植物莖的維管束呈散生排列，無形成層，無法年年加粗！" />
  </div>
);

/* ────────────────────────── Page 4: 環狀排列維管束與形成層 ────────────────────────── */
const RingVascularCambiumPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="雙子葉與裸子植物莖：環狀排列與形成層"
      subtitle="向日葵、榕樹、松樹等植物維管束整齊排列成環狀，內具分生組織『形成層』"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 環狀排列三層次結構
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            維管束在莖內圍成一個完整的同心圓環：
            <br />• <strong>最外側：韌皮部 (Phloem)</strong>——運送有機養分。
            <br />• <strong>最內側：木質部 (Xylem)</strong>——運送水分與無機鹽。
            <br />• <strong>夾在中間：形成層 (Cambium)</strong>——具分裂能力的生長分生組織。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 形成層的分裂分裂方向（必考重點）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            形成層細胞具有旺盛的有絲分裂能力：
            <br />• <strong>向內分裂產生：新的木質部細胞</strong>（厚壁導管與管胞）。
            <br />• <strong>向外分裂產生：新的韌皮部細胞</strong>（篩管與伴細胞）。
            <br />👉 <strong>向內產生的木質部數量遠多於向外的韌皮部</strong>，因此木質部快速堆積！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 草本雙子葉 vs 木本雙子葉
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            向日葵、咸豐草等草本雙子葉，形成層分裂有限，壽命僅一至數年；榕樹、樟樹等木本植物，形成層持續分裂數十年至數百年，形成壯麗的木質部樹幹！
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            borderRadius: 14,
            padding: '12px 18px',
            border: `1px solid ${palette.amberBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            marginTop: 'auto',
          }}
        >
          <strong>口訣速記：</strong>
          「內木外韌中形成，向內長木向外韌」——形成層向內產生木質部，使樹幹年年向外膨大！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={ringVascularBundleImg}
            alt="環狀排列維管束"
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
          🔍 課本教材圖 31-1：雙子葉草本與木本植物環狀維管束結構放大圖（點擊圖片可放大）
        </div>
      </div>
    </div>

    <PageFooter tip="形成層向內分裂長出「木質部」，向外分裂長出「韌皮部」，向內產生的速度遠快於向外！" />
  </div>
);

/* ────────────────────────── Page 5: 樹皮與木材構造 ────────────────────────── */
const BarkAndWoodStructurePage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="木本植物莖橫切面深度解密：樹皮與木材"
      subtitle="形成層為分界線——形成層以內為木材，形成層以外統稱樹皮"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.amber, marginBottom: 6 }}>
            🌲 樹皮 (Bark)：形成層以外的全部構造
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            包含<strong>木栓層、木栓形成層、皮層與活的韌皮部</strong>。
            <br />• 活的韌皮部位於樹皮最內層，緊貼形成層外緣，負責<strong>運送有機養分</strong>。
            <br />• 外層為老死角質化的保護組織，具皮孔 (Lenticel) 供氣體交換。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.forest, marginBottom: 6 }}>
            🪵 木材 (Wood)：形成層以內的全部木質部
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            樹幹中央最堅硬厚實的部位，<strong>全部由木質部構成</strong>。
            <br />• <strong>邊材 (Sapwood)：</strong>近形成層的新生木質部，具運送水分功能。
            <br />• <strong>心材 (Heartwood)：</strong>
            中央老化的木質部導管已堵塞，無運水功能，專職支撐巨型樹冠。
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.roseBorder}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 4 }}>
            ⚠️ 經典會考探究：環狀剝皮 (Girdling) 為何致命？
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            將樹幹環狀剝去一圈樹皮 ➔ <strong>韌皮部被完全切斷</strong> ➔ 葉片製造的糖分
            <strong>無法向下運送到根部</strong> ➔ 根部細胞無養分行呼吸作用而
            <strong>活活餓死</strong> ➔ 根死後無法吸水 ➔ 整棵樹最後枯萎死亡！
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={barkAndWoodImg}
            alt="樹皮與木材構造"
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
          🔍 課本教材圖 32-1：木本莖形成層內外之樹皮與木材剖面示意圖（點擊圖片可放大）
        </div>
      </div>
    </div>

    <PageFooter tip="「樹皮」包含韌皮部；樹木被環狀剝皮會切斷韌皮部，導致養分無法下送而『根先死』！" />
  </div>
);

/* ────────────────────────── Page 6: 年輪的形成與環境印記 ────────────────────────── */
const TreeGrowthRingsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="大自然的歷史年鑑：年輪 (Annual Rings) 的成因"
      subtitle="氣候四季變化導致形成層生長速率差異，全在木質部烙印出一圈圈深淺年輪"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 早材 / 春材 (Early wood / Spring wood)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>生長氣候：</strong>溫暖濕潤、陽光充足、雨量豐沛（春夏季）。
            <br />• <strong>細胞特徵：</strong>形成層分裂極快，生成的木質部細胞
            <strong>大、細胞壁薄、排列疏鬆</strong>。
            <br />• <strong>肉眼觀察顏色：</strong>質地輕軟，呈<strong>較淺的淺色環帶</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 晚材 / 秋材 (Late wood / Autumn wood)
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>生長氣候：</strong>氣溫驟降、氣候乾旱寒冷（秋冬季）。
            <br />• <strong>細胞特徵：</strong>形成層分裂緩慢停滯，木質部細胞
            <strong>小、細胞壁厚、排列緊密</strong>。
            <br />• <strong>肉眼觀察顏色：</strong>質地緻密堅硬，呈<strong>深褐色的深色環帶</strong>
            。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 年齡計算與方位判讀原則
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>一深一淺合為一年：</strong>一個淺色早材加一個深色晚材代表經歷一年歲月。
            <br />• <strong>四季不明顯無年輪：</strong>
            熱帶雨林植物整年高溫多雨，形成層勻速分裂，無明顯年輪！
            <br />• <strong>向陽面較寬：</strong>朝南（北半球向陽側）生長旺盛，年輪環帶間距較寬。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={treeGrowthRingsImg}
            alt="樹木年輪成因"
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
          🔍 課本教材圖 33-1：顯微鏡下春材大細胞與秋材厚壁密細胞對照（點擊圖片可放大）
        </div>
      </div>
    </div>

    <PageFooter tip="年輪「全部都在木質部內部」！一深一淺代表一年；愈靠近樹皮外側的木質部年份愈年輕！" />
  </div>
);

/* ────────────────────────── Page 7: 水分吸收的起點——根毛 ────────────────────────── */
const RootHairsAbsorptionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="水分與礦物質的吸收門戶：根毛 (Root Hairs)"
      subtitle="根部表皮細胞向外延伸的細微突起，以超大表面積迅速吸收土壤水分"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            ① 根毛的細胞本質：單一表皮細胞的突起
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            根毛<strong>不是多細胞組織</strong>，而是由<strong>根部成熟區單一個表皮細胞</strong>
            的細胞壁與細胞膜向外延伸特化出的纖細管狀構造。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 生理功能：表面積效益最大化
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            數以億計的微細根毛鑽入土壤孔隙中，將根與土壤水分的接觸表面積
            <strong>擴大數十至上百倍</strong>
            ，能極其敏銳地捕捉土壤顆粒間微薄的水膜與溶解的無機鹽類。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 水分進入根部的滲透途徑
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            土壤水分 ➔ 根毛細胞 ➔ 皮層細胞 ➔ 內皮層 ➔ 進入<strong>根中央木質部導管</strong>
            。一旦進入木質部，便加入向上輸送的連續水柱行列。
          </div>
        </div>

        <div
          style={{
            background: palette.tealLight,
            borderRadius: 14,
            padding: '12px 18px',
            border: `1px solid ${palette.tealBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            marginTop: 'auto',
          }}
        >
          <strong>園藝生活應用：</strong>
          移栽花草樹木時必須「帶土球」，目的是避免扯斷脆弱的微細根毛導致植物吸水不足而萎凋！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={rootHairsImg}
            alt="根毛構造與吸收表面積"
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
          🔍 課本教材圖 35-1：幼根末端根毛分布顯微構造特寫（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="根毛是「單一表皮細胞向外突出」形成的構造，專職大幅增加吸收水分與無機鹽的表面積！" />
  </div>
);

/* ────────────────────────── Page 8: 水分上升的動力——蒸散作用 ────────────────────────── */
const TranspirationStomaPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="百米巨木如何吸水：蒸散作用 (Transpiration)"
      subtitle="氣孔水蒸氣蒸散產生強大負壓拉力，是水分抗重力向上運送的最主要動力"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 蒸散拉力：拉動萬噸水柱的火車頭
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            葉肉細胞的水分蒸發為水蒸氣由<strong>氣孔逸散</strong>至大氣中 ➔ 葉肉細胞水勢降低 ➔
            自葉脈木質部強烈抽水 ➔ 一路牽引木質部管腔內緊密相連的水分子柱向上攀升。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.forest}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ② 水分三大運送動力比對
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>蒸散拉力 (主要動力，佔 90% 以上)：</strong>葉片氣孔蒸散水氣產生的負壓拉力。
            <br />• <strong>水分子內聚力與毛細現象：</strong>水分子間氫鍵緊密拉扯，水柱不易斷裂。
            <br />• <strong>根壓 (次要微弱動力)：</strong>根部主動吸收離子累積的滲透推力。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ③ 保衛細胞與氣孔開閉調節
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>白天吸水膨脹：</strong>保衛細胞內壁厚外壁薄，吸水向外彎曲，氣孔打開蒸散旺盛。
            <br />• <strong>乾旱夜晚失水：</strong>
            保衛細胞失水萎縮變平直，氣孔關閉以保存體內珍貴水分。
          </div>
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={transpirationStomaImg}
            alt="蒸散作用與氣孔開閉調節"
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
          🔍 課本教材圖 36-1：葉片氣孔蒸散作用與連續水分子柱拉升動力示意圖（點擊可放大）
        </div>
      </div>
    </div>

    <PageFooter tip="水分在植物體內向上運輸的「最主要動力」是葉片的『蒸散作用』，絕非根壓！" />
  </div>
);

/* ────────────────────────── Page 9: 實驗 4-1 芹菜紅墨水實驗 ────────────────────────── */
const LabCeleryTransportPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 4-1：植物體內水分運輸路徑"
      subtitle="以紅墨水追蹤芹菜葉柄水分走向，驗證木質部功能與葉片蒸散拉力對照"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
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
            borderLeft: `5px solid ${palette.rose}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
            ① 染色觀察結果：橫切面與縱切面
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            將芹菜插於紅墨水中數小時後觀察：
            <br />• <strong>葉柄橫切面：</strong>外側維管束呈現一圈<strong>紅色的圓點</strong>
            （維管束）。
            <br />• <strong>顯微放大觀察：</strong>只有維管束<strong>內側的木質部導管被染紅</strong>
            ，外側韌皮部與皮層皆未染色！
            <br />• <strong>葉柄縱切面：</strong>可見一條條連續<strong>筆直紅色的細絲</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 6 }}>
            ② 葉片有無之對照實驗（變因設計）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.55 }}>
            • <strong>甲量筒（保留大量葉片）：</strong>
            水面下降極快，紅墨水迅速上升至葉脈，葉脈變紅。
            <br />• <strong>乙量筒（摘除所有葉片）：</strong>水面下降極慢，紅墨水上升緩慢停滯。
            <br />👉 <strong>實驗結論：</strong>證實<strong>葉片是蒸散作用的主要器官</strong>
            ，蒸散拉力主導水分上升速度！
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
            marginTop: 'auto',
          }}
        >
          <strong>💡 實驗操作細節提醒：</strong>
          量筒水面需滴加少許<strong>沙拉油</strong>
          ，阻絕水面直接自然蒸發，確保測得的水位下降完全來自植物吸收！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={labCeleryTransportImg}
            alt="芹菜紅墨水水分運輸實驗"
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
          🔍 課本教材圖 76-1：芹菜紅墨水染色橫縱切面與葉片蒸散對照裝置（點擊可全螢幕放大）
        </div>
      </div>
    </div>

    <PageFooter tip="芹菜紅墨水實驗中，只有「木質部」被染紅，韌皮部完全不染色；量筒加沙拉油防水分蒸發！" />
  </div>
);

/* ────────────────────────── Page 10: 物質運輸總覽（水分 vs 養分） ────────────────────────── */
const PlantTransportOverviewPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="雙軌並行：植物體內水分與養分運輸完整大對決"
      subtitle="木質部死細胞單向由下往上；韌皮部活細胞依供需雙向輸送"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '700px 1fr',
        gap: 32,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: 20,
            textAlign: 'center',
            background: palette.surface,
            borderRadius: 16,
            overflow: 'hidden',
            border: `1px solid ${palette.border}`,
          }}
        >
          <thead>
            <tr
              style={{
                background: palette.surfaceSubtle,
                borderBottom: `2px solid ${palette.border}`,
              }}
            >
              <th style={{ padding: '12px 10px', fontSize: 21 }}>比較項目</th>
              <th style={{ padding: '12px 10px', fontSize: 21, color: palette.blue }}>
                木質部 (Xylem)
              </th>
              <th style={{ padding: '12px 10px', fontSize: 21, color: palette.forest }}>
                韌皮部 (Phloem)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
              <td style={{ padding: '12px 10px', fontWeight: 800 }}>運送物質</td>
              <td style={{ padding: '12px 10px', color: palette.blue, fontWeight: 700 }}>
                水、溶解的礦物質無機鹽
              </td>
              <td style={{ padding: '12px 10px', color: palette.forest, fontWeight: 700 }}>
                蔗糖等可溶性有機養分
              </td>
            </tr>
            <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
              <td style={{ padding: '12px 10px', fontWeight: 800 }}>運送方向</td>
              <td style={{ padding: '12px 10px', color: palette.rose, fontWeight: 800 }}>
                單向：只能由下往上
              </td>
              <td style={{ padding: '12px 10px', color: palette.emerald, fontWeight: 800 }}>
                雙向：可向上或向下（視供需）
              </td>
            </tr>
            <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
              <td style={{ padding: '12px 10px', fontWeight: 800 }}>細胞狀態</td>
              <td style={{ padding: '12px 10px' }}>死細胞（中空管壁加厚）</td>
              <td style={{ padding: '12px 10px' }}>活細胞（具細胞質篩管）</td>
            </tr>
            <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
              <td style={{ padding: '12px 10px', fontWeight: 800 }}>主要動力</td>
              <td style={{ padding: '12px 10px' }}>葉片氣孔之「蒸散拉力」</td>
              <td style={{ padding: '12px 10px' }}>源庫之間的「膨壓流動」</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 10px', fontWeight: 800 }}>空間相對位置</td>
              <td style={{ padding: '12px 10px' }}>莖內側、葉脈上方</td>
              <td style={{ padding: '12px 10px' }}>莖外側、葉脈下方</td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            background: palette.forestLight,
            borderRadius: 14,
            padding: '12px 18px',
            border: `1px solid ${palette.forestBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.45,
            marginTop: 'auto',
          }}
        >
          <strong>雙向運輸生活實例：</strong>
          春天樹木發新芽時，根部儲存的養分會<strong>向上運送到枝頭新芽</strong>；
          夏天葉片盛長時，光合作用產物則<strong>向下運送到根莖果實儲存</strong>！
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 0,
          boxShadow: '0 8px 24px -6px rgba(28, 25, 23, 0.06)',
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
            src={plantTransportOverviewImg}
            alt="植物體內物質運輸總覽"
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
          🔍 課本教材圖 34-1：植物水分與有機養分在全株流動之雙向機制總結圖（點擊可放大）
        </div>
      </div>
    </div>

    <PageFooter tip="水分「只能單向向上」由木質部運送；有機養分「雙向皆可」由韌皮部依供需運送！" />
  </div>
);

/* ────────────────────────── Page 11: 會考常考四大易錯觀念 ────────────────────────── */
const ExamPitfallsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考高頻常考四大易錯地雷觀念辨析"
      subtitle="歷屆會考試題陷阱大公開——避開直覺迷思，精準掌握滿分觀念"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          num: '迷思 01',
          question: '環狀剝皮時，樹木是先死葉子還是先死根？',
          correct: '先死根！',
          explain:
            '環狀剝皮剝除的是樹皮（含韌皮部），木質部依然完好。因此水分仍可向上送達葉子，葉子短時間內依然青綠；但葉片製造的糖分完全無法下傳根部，根部細胞缺乏能量呼吸而先餓死！根死後無法吸水，整株才隨後枯死。',
          tagColor: palette.rose,
          tagBg: palette.roseLight,
          border: palette.roseBorder,
        },
        {
          num: '迷思 02',
          question: '年輪到底是木質部還是韌皮部形成的？',
          correct: '全部都是木質部！',
          explain:
            '年輪「與韌皮部完全無關」！形成層每年向內分裂產生的木質部細胞會永久保留並向內累積，春夏與秋冬細胞大小厚薄不同而形成深淺紋路。而形成層向外產生的韌皮部會隨樹木加粗不斷被擠壓剝落，無法累積中年輪。',
          tagColor: palette.amber,
          tagBg: palette.amberLight,
          border: palette.amberBorder,
        },
        {
          num: '迷思 03',
          question: '有機養分在韌皮部中的運送方向一定是「由上往下」嗎？',
          correct: '不一定，是雙向依供需而定！',
          explain:
            '常見誤解以為重力讓糖往下流。事實上，養分永遠「從製造或儲存部位（源）運往消耗部位（庫）」。夏天成熟葉片產糖，糖往下運到根儲存；春天發芽或開花時，根部儲存的養分分解為糖，經韌皮部「向上」運送給頂芽！',
          tagColor: palette.forest,
          tagBg: palette.forestLight,
          border: palette.forestBorder,
        },
        {
          num: '迷思 04',
          question: '將紅墨水插枝芹菜，葉柄橫切面整面都會被染紅嗎？',
          correct: '只有木質部染紅，呈現外圈點狀分布！',
          explain:
            '水分只在維管束的木質部中向上運送，基本薄壁細胞與韌皮部不運送水分，故不會染色。橫切面呈現的是一個個分立的紅點（每個維管束的木質部部位），絕非整片葉柄染成紅色。',
          tagColor: palette.blue,
          tagBg: palette.blueLight,
          border: palette.blueBorder,
        },
      ].map((item) => (
        <div
          key={item.num}
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '20px 24px',
            border: `1px solid ${item.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: item.tagColor,
                background: item.tagBg,
                padding: '3px 12px',
                borderRadius: 999,
              }}
            >
              {item.num}
            </span>
            <span style={{ fontSize: 22, fontWeight: 800, color: item.tagColor }}>
              {item.correct}
            </span>
          </div>

          <div style={{ fontSize: 23, fontWeight: 800, color: palette.text, lineHeight: 1.35 }}>
            {item.question}
          </div>

          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.55 }}>{item.explain}</div>
        </div>
      ))}
    </div>

    <PageFooter tip="年輪全部都在木質部；環狀剝皮切斷韌皮部是「根先死」；養分運送是「雙向」！" />
  </div>
);

/* ────────────────────────── Page 12: 滿分速記四大口訣 ────────────────────────── */
const SummaryPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="滿分速記四大黃金口訣：植物運輸總複習"
      subtitle="將龐雜概念收斂為朗朗上口的口訣，考場上十秒快速秒殺考題"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        flex: 1,
        minHeight: 0,
        maxHeight: 740,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          tag: '口訣一 · 維管束方位',
          chant: '內木外韌中形成，向內長木向外韌',
          desc: '莖部內側為木質部、外側為韌皮部、中間為形成層；形成層細胞分裂向內形成木質部，向外形成韌皮部。葉脈則是上木下韌！',
          color: palette.forest,
          bg: palette.forestLight,
          border: palette.forestBorder,
        },
        {
          tag: '口訣二 · 年輪特徵判讀',
          chant: '早材色淺細胞大，晚材色深細胞密',
          desc: '春夏溫暖水分多，形成層分裂快，木質部細胞大壁薄顏色淺；秋冬乾冷分裂慢，木質部細胞小壁厚顏色深。一深一淺合為一年！',
          color: palette.amber,
          bg: palette.amberLight,
          border: palette.amberBorder,
        },
        {
          tag: '口訣三 · 物質與方向比對',
          chant: '水死單向靠蒸散，養活雙向看供需',
          desc: '木質部由死細胞組成，只能由下往上單向運送水與礦物質，靠蒸散作用拉動；韌皮部由活細胞組成，可雙向運送蔗糖養分，依生長供需而定！',
          color: palette.blue,
          bg: palette.blueLight,
          border: palette.blueBorder,
        },
        {
          tag: '口訣四 · 樹皮剝皮致命原因',
          chant: '樹皮包含韌皮部，剝皮阻糖根先枯',
          desc: '形成層以外全部統稱樹皮（包含活的韌皮部）；環狀剝皮將韌皮部完全切除，葉片光合作用產物無法下傳，根部活活餓死！',
          color: palette.rose,
          bg: palette.roseLight,
          border: palette.roseBorder,
        },
      ].map((card) => (
        <div
          key={card.tag}
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '24px 26px',
            border: `1px solid ${card.border}`,
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            boxShadow: '0 4px 16px -2px rgba(28, 25, 23, 0.04)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              width: 'fit-content',
              background: card.bg,
              color: card.color,
              padding: '4px 14px',
              borderRadius: 999,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            {card.tag}
          </div>

          <div
            style={{
              fontSize: '26px',
              fontWeight: 900,
              color: card.color,
              lineHeight: 1.3,
              letterSpacing: '-0.01em',
            }}
          >
            「{card.chant}」
          </div>

          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>{card.desc}</div>
        </div>
      ))}
    </div>

    <PageFooter tip="恭喜完成植物體內物質運輸單元！熟記四大口訣，會考題目迎刃而解！" />
  </div>
);

/* ────────────────────────── 演講者備忘稿 (Notes) ────────────────────────── */
export const notes: (string | undefined)[] = [
  '封面頁：引言介紹百米巨木如紅檜、神木如何沒有心臟搏動也能將地下水輸送至幾十公尺高空。揭開維管束系統與蒸散拉力的奧秘。',
  '維管束分布：說明根、莖、葉管腔如何相互貫通銜接。強調「莖內木外韌」與「葉脈上木下韌」的相對立體空間分布。',
  '散生排列維管束：以玉米切片解析單子葉草本植物散漫無同心圓的分布，點出無形成層故無法加粗的關鍵演化特徵。',
  '環狀排列維管束：詳細推演形成層細胞分裂的力學與方向，向內生長木質部速度遠快於向外韌皮部，構成年年加粗的生長基礎。',
  '樹皮與木材：清楚定義形成層為中界線。透過經典環狀剝皮實驗剖析「韌皮部在樹皮內、切斷導致根先餓死」的因果鏈。',
  '年輪成因：比較早材（春夏、分裂快、細胞大壁薄、色淺）與晚材（秋冬、分裂慢、細胞小壁厚、色深），強調年輪全在木質部內。',
  '根毛構造：解析單一表皮細胞如何特化出微細突起以放大表面積，連結園藝移栽帶土球保護根毛之日常生活經驗。',
  '蒸散作用：解析葉片氣孔蒸散水氣產生的負壓拉力是上升最主要動力，並說明保衛細胞因吸失水膨壓變化調控氣孔開閉。',
  '芹菜實驗：剖析紅墨水染色實驗，強調只有木質部導管染紅，橫切呈圈狀紅點、縱切呈紅絲，並對照有葉無葉組水位下降速度。',
  '物質運輸總覽：整合水分（死細胞、單向向上、蒸散拉力）與養分（活細胞、雙向依供需、源庫流動）的全方位對決比較表。',
  '會考陷阱辨析：深入破解環狀剝皮先死根、年輪全為木質部、養分雙向流動、芹菜染色部位四大經典易錯觀念。',
  '總結頁：帶領全班齊聲朗誦四大黃金速記口訣，完成單元核心心法整合閉環。',
];

export const meta: SlideMeta = {
  title: '植物體內物質的運輸',
  createdAt: '2026-09-29T05:20:00.000Z',
};

export default [
  Cover,
  VascularDistributionPage,
  ScatteredVsRingPage,
  RingVascularCambiumPage,
  BarkAndWoodStructurePage,
  TreeGrowthRingsPage,
  RootHairsAbsorptionPage,
  TranspirationStomaPage,
  LabCeleryTransportPage,
  PlantTransportOverviewPage,
  ExamPitfallsPage,
  SummaryPage,
] satisfies Page[];
