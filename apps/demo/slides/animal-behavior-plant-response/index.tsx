import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import animalImprintingImg from './assets/animal-imprinting.jpg';
import plantCarnivorousMovementImg from './assets/plant-carnivorous-movement.jpg';
import plantMimosaTurgorImg from './assets/plant-mimosa-turgor.jpg';
import plantPhototropismImg from './assets/plant-phototropism.png';
import plantSleepMovementImg from './assets/plant-sleep-movement.jpg';
import plantStomaTurgorImg from './assets/plant-stoma-turgor.jpg';
import plantThigmotropismImg from './assets/plant-thigmotropism.jpg';
import plantTropismOverviewImg from './assets/plant-tropism-overview.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fafafa',
    text: '#0f172a',
    accent: '#16a34a',
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
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  green: '#16a34a',
  greenLight: '#f0fdf4',
  greenBorder: '#bbf7d0',
  indigo: '#4f46e5',
  indigoLight: '#eef2ff',
  indigoBorder: '#c7d2fe',
  violet: '#7c3aed',
  violetLight: '#f5f3ff',
  violetBorder: '#ddd6fe',
  cyan: '#0891b2',
  cyanLight: '#ecfeff',
  cyanBorder: '#a5f3fc',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
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
        color: palette.green,
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

const PageFooter = ({ current, total }: { current: number; total: number }) => (
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
    <span>國中自然科學 · 生物（一上）單元 5-4 動物行為與植物感應</span>
    <span>
      {String(current).padStart(2, '0')}/{String(total).padStart(2, '0')}
    </span>
  </div>
);

const Cover: Page = () => (
  <div
    style={{
      ...fill,
      justifyContent: 'center',
      padding: '72px 88px',
      background: 'radial-gradient(circle at 10% 20%, #f0fdf4 0%, #ffffff 60%, #ecfdf5 100%)',
    }}
  >
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: 22,
        fontWeight: 700,
        color: palette.green,
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
      動物行為與植物感應
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
      先天本能與後天學習、植物向性生長素調控、膨壓運動與動植物感應全方位解析
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
          title: '動物行為雙軌分類',
          desc: '遺傳決定的先天本能、反射與趨性，生活經驗累積的印痕、嘗試錯誤與推理。',
          color: palette.indigo,
          bg: palette.indigoLight,
          border: palette.indigoBorder,
        },
        {
          no: '02',
          title: '植物向性生長運動',
          desc: '生長素不均勻分佈驅動向光性、向地性、背地性與向觸性，不可逆生長伸長。',
          color: palette.green,
          bg: palette.greenLight,
          border: palette.greenBorder,
        },
        {
          no: '03',
          title: '植物膨壓快速運動',
          desc: '水分得失引起細胞膨壓改變，含羞草觸發、葉片睡眠、捕蟲運動與氣孔開閉。',
          color: palette.cyan,
          bg: palette.cyanLight,
          border: palette.cyanBorder,
        },
        {
          no: '04',
          title: '向性膨壓綜合對決',
          desc: '生長不可逆 vs 膨壓可逆性本質鑑別，食蟲植物補氮考點與滿分速記心法。',
          color: palette.amber,
          bg: palette.amberLight,
          border: palette.amberBorder,
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
);

const SlideAnimalBehaviorOverview: Page = () => {
  const pageNo = useSlidePageNumber() ?? 2;
  return (
    <div style={fill}>
      <PageHeader
        title="動物行為概說：先天行為 vs 後天學習"
        subtitle="基因遺傳刻劃的生存本能 vs 生活經驗重塑的學習適應"
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
            border: `1.5px solid ${palette.indigoBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
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
                padding: '2px 12px',
              }}
            >
              先天行為 (Innate Behavior)
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              生來即具、遺傳決定
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            不需要經過後天學習或經驗練習，由神經系統遺傳結構所主導，同一物種個體表現一致。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.indigo }}>① 反射作用：</strong>
              不受大腦意識控制的迅速反應（膝跳反射、眨眼、縮手、瞳孔縮小）。
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
              <strong style={{ color: palette.indigo }}>② 趨性 (Taxis)：</strong>
              低等動物對單一環境刺激的方向性定向運動（飛蛾撲火趨光性、蚯蚓背光性、草履蟲趨向微酸肉汁）。
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
              <strong style={{ color: palette.indigo }}>③ 複雜本能 (Instinct)：</strong>
              連貫複雜的先天行為（鳥類築巢育幼、蜘蛛織網捕蟲、鮭魚逆流洄游產卵、蜜蜂搖擺舞傳遞蜜源位置）。
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.greenBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.green,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 12px',
              }}
            >
              後天學習 (Learned Behavior)
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              經驗累積、適應改變
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            動物出生後在生活環境中，透過嘗試、觀察、模仿或經驗建立起來的新行為，能隨環境改變而靈活調整。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.green }}>① 嘗試錯誤學習：</strong>
              在反覆嘗試中淘汰失敗行為、強化成功模式（白鼠走迷宮、小狗訓練定點如廁）。
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
              <strong style={{ color: palette.green }}>② 印痕行為 (Imprinting)：</strong>
              幼雛在關鍵期認同第一眼見到的移動物體並終身跟隨（勞倫茲小鵝實驗）。
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
              <strong style={{ color: palette.green }}>③ 頓悟與推理思考：</strong>
              高等哺乳類（如黑猩猩疊箱子拿高處香蕉、人類學習科學與語言），神經系統越發達學習能力越卓越。
            </div>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideAnimalImprintingAndLearning: Page = () => {
  const pageNo = useSlidePageNumber() ?? 3;
  return (
    <div style={fill}>
      <PageHeader
        title="後天學習經典：勞倫茲與小雁鵝印痕實驗"
        subtitle="關鍵期內的銘印定型，兼具遺傳傾向與後天學習雙重特質"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
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
            src={animalImprintingImg}
            alt="小鵝印痕行為實驗"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minHeight: 0 }}>
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
                  padding: '4px 12px',
                  borderRadius: 8,
                  background: palette.indigoLight,
                  color: palette.indigo,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                印痕行為 (Imprinting) 解析
              </span>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.65,
              }}
            >
              <li>
                <strong>經典實驗：</strong>奧地利生物學家<strong>勞倫茲 (Konrad Lorenz)</strong>
                人工孵化灰雁卵，剛出生的小雁鵝第一眼看見的是勞倫茲，便將他視為母親寸步不離跟隨。
              </li>
              <li>
                <strong>關鍵期 (Critical Period)：</strong>
                印痕只發生在剛孵化後的特定短暫時間窗口（通常為數小時至一兩天內）。一旦錯過關鍵期，印痕便無法建立。
              </li>
              <li>
                <strong>不可逆持久性：</strong>
                一旦在關鍵期內銘印建立，即使日後見到親生母雁，小雁鵝依然只認勞倫茲為母親！
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              會考深度思考：印痕是先天還是後天？
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              會考關鍵鑑別：印痕行為具有「跟隨移動目標」的<strong>先天遺傳傾向</strong>
              ，但「認定的特定對象（如母鳥、人或滾動皮球）」完全取決於
              <strong>後天第一眼的經驗學習</strong>
              。因此，印痕是<strong>受先天限制的特殊後天學習行為</strong>！
            </p>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideAnimalCommunication: Page = () => {
  const pageNo = useSlidePageNumber() ?? 4;
  return (
    <div style={fill}>
      <PageHeader
        title="動物的訊息溝通與社會性行為"
        subtitle="視覺、聲音、氣味與觸覺交織的生存協調網絡"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          flex: 1,
          minHeight: 0,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                  background: palette.amberLight,
                  color: palette.amber,
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                ① 視覺訊號
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                姿態、色彩與光線展示
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.55,
              }}
            >
              <li>
                <strong>雄孔雀開屏：</strong>鮮豔羽毛吸引雌孔雀求偶。
              </li>
              <li>
                <strong>螢火蟲閃光：</strong>特定發光頻率在暗夜辨識同種配偶。
              </li>
              <li>
                <strong>蜜蜂搖擺舞：</strong>以舞姿角度與擺動時間向蜂群通報蜜源方位與距離。
              </li>
            </ul>
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
                  background: palette.blueLight,
                  color: palette.blue,
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                ② 聲音訊號
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                聲波振動長距離傳播
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.55,
              }}
            >
              <li>
                <strong>鳥類鳴囀：</strong>春天鳴唱吸引異性並宣告領域主權。
              </li>
              <li>
                <strong>青蛙鳴囊鳴叫：</strong>繁殖期雄蛙求偶吸引雌蛙。
              </li>
              <li>
                <strong>猴群警戒叫聲：</strong>發現老鷹或獵豹時發出特定音頻警報。
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
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
                  background: palette.roseLight,
                  color: palette.rose,
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                ③ 化學訊號（費洛蒙）
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                專一氣味標記與傳訊
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.55,
              }}
            >
              <li>
                <strong>螞蟻路徑費洛蒙：</strong>工蟻沿途分泌氣味標記路徑，指引蟻群搬運食物。
              </li>
              <li>
                <strong>雌蛾性費洛蒙：</strong>微量揮發，雄蛾藉由羽狀觸角可自數公里外精準循味而來。
              </li>
              <li>
                <strong>狗尿液標記：</strong>沿路排尿劃分個體專屬生活領域。
              </li>
            </ul>
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
                  background: palette.emeraldLight,
                  color: palette.emerald,
                  fontSize: 20,
                  fontWeight: 800,
                  borderRadius: 6,
                  padding: '2px 10px',
                }}
              >
                ④ 觸覺與社會組織
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                個體接觸與階級分工
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.55,
              }}
            >
              <li>
                <strong>黑猩猩梳毛理毛：</strong>建立階級信任，維持群體和平。
              </li>
              <li>
                <strong>蜜蜂社會分工：</strong>蜂后產卵、雄蜂交配、工蜂築巢採蜜防禦，協同生存。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlidePlantTropismOverview: Page = () => {
  const pageNo = useSlidePageNumber() ?? 5;
  return (
    <div style={fill}>
      <PageHeader
        title="植物感應總覽：向性 (Tropism) 的本質"
        subtitle="無神經系統！生長素分佈不均主導的不對稱生長運動"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
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
            src={plantTropismOverviewImg}
            alt="植物向性總覽"
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
              border: `1.5px solid ${palette.greenBorder}`,
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
                  background: palette.greenLight,
                  color: palette.green,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                向性核心定義
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                方向性單側刺激的不對稱生長
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              植物受<strong>單一方向外在刺激</strong>時，體內<strong>生長素 (Auxin)</strong>
              發生不均勻分佈，使器官兩側細胞<strong>生長伸長速率不同</strong>
              ，進而造成向著或背離刺激方向的彎曲生長。
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}
          >
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.green }}>① 向光性：</strong>
              幼莖朝向單側光彎曲（正向光性），爭取最大陽光照射。
            </div>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.indigo }}>② 向地性 / 背地性：</strong>
              根向地心生長（正向地性）；莖向上背向地心生長（負向地性）。
            </div>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.amber }}>③ 向觸性：</strong>
              豌豆卷鬚或牽牛花藤接觸支架纏繞向上攀爬。
            </div>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.cyan }}>④ 向濕性：</strong>
              根系朝向土壤水分較多之處彎曲伸展吸收水分。
            </div>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.roseLight,
              border: `1.5px solid ${palette.roseBorder}`,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 20,
              color: palette.rose,
              lineHeight: 1.55,
            }}
          >
            <strong>⚡ 向性的兩大關鍵鐵律：</strong>① 與刺激方向<strong>密切相關</strong>；②
            是細胞生長造成的，<strong>反應緩慢且不可逆</strong>！
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlidePlantPhototropism: Page = () => {
  const pageNo = useSlidePageNumber() ?? 6;
  return (
    <div style={fill}>
      <PageHeader
        title="向性經典機制：莖的向光性 (Phototropism)"
        subtitle="生長素移向背光側，背光側細胞快速伸長彎向光源"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '50% 50%',
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
            src={plantPhototropismImg}
            alt="植物向光性機制示意圖"
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
              border: `1.5px solid ${palette.greenBorder}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              向光性發生的 4 步神級推導
            </h3>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <div>
                <strong>① 生長素合成：</strong>幼苗莖頂端分生組織持續合成生長素。
              </div>
              <div>
                <strong>② 單側光照射：</strong>受單側光照射時，生長素會橫向擴散轉移至
                <strong>背光側</strong>。
              </div>
              <div>
                <strong>③ 濃度不均勻：</strong>
                <strong>背光側生長素濃度偏高</strong>，向光側生長素濃度偏低。
              </div>
              <div>
                <strong>④ 生長伸長不對稱：</strong>高濃度生長素<strong>加速背光側細胞伸長</strong>
                ，背光側長得比向光側快，促使幼莖<strong>朝光源彎曲生長</strong>！
              </div>
            </div>
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
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              會考延伸情境實驗思考
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>光線均勻照射時：</strong>生長素分佈均勻，幼苗直立向上生長。
              </li>
              <li>
                <strong>完全置於暗室中：</strong>無單側光刺激，生長素均勻分佈，幼苗直立向上徒長。
              </li>
              <li>
                <strong>切除莖頂芽尖：</strong>無法合成生長素，幼苗停止生長且失去向光彎曲能力。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideGeotropismRootStem: Page = () => {
  const pageNo = useSlidePageNumber() ?? 7;
  return (
    <div style={fill}>
      <PageHeader
        title="重力感應：莖的背地性 vs 根的向地性"
        subtitle="同一重力刺激，莖與根對生長素敏感度截然相反的演化智慧"
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
            border: `1.5px solid ${palette.greenBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.green,
                color: '#fff',
                fontSize: 20,
                fontWeight: 800,
                borderRadius: 6,
                padding: '2px 10px',
              }}
            >
              莖的背地性 (負向地性)
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              生長素促進莖伸長
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
            <div>
              ① 植物水平橫放時，受地心引力吸引，生長素沉降累積在<strong>莖的下側</strong>。
            </div>
            <div>
              ② 莖部細胞對生長素耐受度高，<strong>下側高濃度生長素強烈促進細胞伸長</strong>。
            </div>
            <div>
              ③ 莖下側長得快、上側長得慢，兩側生長速度差促使<strong>幼莖向上彎曲生長</strong>！
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, color: palette.green }}>
              🌿 生存價值：讓葉片向上破土伸向天空，爭取最大陽光進行光合作用。
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
              根的向地性 (正向地性)
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              高濃度生長素抑制根生長
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
            <div>
              ① 橫放時，生長素同樣受重力累積在<strong>根的下側</strong>。
            </div>
            <div>
              ② <strong>根細胞對生長素極度敏感</strong>，下側高濃度的生長素反而
              <strong>抑制了細胞伸長</strong>！
            </div>
            <div>
              ③ 根上側（低生長素濃度）長得快、下側生長被抑制，促使<strong>根向下彎曲生長</strong>！
            </div>
            <div style={{ marginTop: 8, fontWeight: 700, color: palette.amber }}>
              🌰 生存價值：引導根系深扎土壤深處吸收水分與無機鹽，並穩固植物主體。
            </div>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideThigmotropismAndHydrotropism: Page = () => {
  const pageNo = useSlidePageNumber() ?? 8;
  return (
    <div style={fill}>
      <PageHeader
        title="向觸性與向濕性：植物攀緣與尋水策略"
        subtitle="攀緣藤蔓纏繞支柱爭取光線，根系追尋水分深扎土壤"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '46% 54%',
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
            src={plantThigmotropismImg}
            alt="植物向觸性示意圖"
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
              border: `1.5px solid ${palette.greenBorder}`,
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
                  background: palette.greenLight,
                  color: palette.green,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                向觸性 (Thigmotropism)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                藤蔓與卷鬚的螺旋纏繞
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>代表物種：</strong>豌豆、葡萄卷鬚、絲瓜、牽牛花等攀緣植物。
              </li>
              <li>
                <strong>生長機制：</strong>卷鬚接觸竹竿等物體時，接觸刺激促使生長素轉移至
                <strong>未接觸的外側</strong>。
              </li>
              <li>
                <strong>纏繞結果：</strong>外側細胞生長快於接觸內側，卷鬚便緊密
                <strong>螺旋纏繞支柱</strong>向上生長！
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.cyanBorder}`,
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
                  background: palette.cyanLight,
                  color: palette.cyan,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                向濕性 (Hydrotropism)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                根系的生命尋水導航
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              在土壤中，植物根端會感應濕度梯度，朝著<strong>水分含量較豐富的濕潤區域</strong>
              彎曲伸展，確保在水分分佈不均的土壤中維持水分與礦物質供應。
            </p>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideMimosaTurgorMovement: Page = () => {
  const pageNo = useSlidePageNumber() ?? 9;
  return (
    <div style={fill}>
      <PageHeader
        title="膨壓運動代表作：含羞草的觸發運動"
        subtitle="葉枕細胞水分瞬間流失，小葉閉合葉柄垂下的秒級避險"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
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
            src={plantMimosaTurgorImg}
            alt="含羞草觸發運動示意圖"
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
              border: `1.5px solid ${palette.cyanBorder}`,
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
                  background: palette.cyanLight,
                  color: palette.cyan,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                膨壓運動核心構造
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                特化的「葉枕 (Pulvinus)」構造
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              含羞草葉柄基部與小葉基部具備球狀膨大的<strong>葉枕</strong>
              ，由大量薄壁細胞組成，是控制水分進出的敏感閥門。
            </p>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
              fontSize: 20,
              color: palette.text,
              lineHeight: 1.65,
            }}
          >
            <div>① 受到外力碰觸或震動時，電訊號瞬間傳至葉枕。</div>
            <div>
              ② <strong>葉枕下半部細胞膜透性劇增</strong>，鉀離子與<strong>水分迅速向外流失</strong>
              進入細胞間隙。
            </div>
            <div>
              ③ 下半部細胞<strong>膨壓驟降萎縮</strong>，而上半部細胞仍維持飽水膨脹，導致
              <strong>整片小葉迅速閉合、葉柄無力下垂</strong>！
            </div>
            <div>
              ④ 靜置一段時間後，細胞主動將水重新吸回，<strong>膨壓復原重新平展</strong>。
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
              lineHeight: 1.5,
            }}
          >
            ★ 概念關鍵：含羞草觸發運動是<strong>膨壓改變引起的「可逆」運動</strong>
            ，與生長素無關，也<strong>不屬於生長現象</strong>！
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlidePlantSleepMovement: Page = () => {
  const pageNo = useSlidePageNumber() ?? 10;
  return (
    <div style={fill}>
      <PageHeader
        title="晝夜感光的週期節律：睡眠運動 (Nyctinasty)"
        subtitle="白天吸水平展接受陽光，夜間失水閉合安然休眠"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '48% 52%',
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
            src={plantSleepMovementImg}
            alt="植物睡眠運動示意圖"
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
              border: `1.5px solid ${palette.violetBorder}`,
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
                  background: palette.violetLight,
                  color: palette.violet,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                睡眠運動表現
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                日夜光照週期感應
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>代表物種：</strong>豆科植物（如含羞草、落花生、相思樹）與
                <strong>酢漿草</strong>。
              </li>
              <li>
                <strong>白天現象：</strong>
                受光線照射，葉枕細胞大量吸水膨脹，葉片平展接受陽光行光合作用。
              </li>
              <li>
                <strong>夜晚現象：</strong>
                光線消失，葉枕細胞失水萎縮，葉片自然垂下或重疊互抱，狀似沉睡。
              </li>
            </ul>
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
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              生態適應與生存優勢
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              夜間葉片折疊下垂，大幅減少暴露面積，有效
              <strong>降低體表熱量散失與夜間蒸散失水</strong>
              ，同時能保護脆弱新芽免受霜凍或夜行性害蟲侵害。此種運動隨日出日落
              <strong>天天可逆循環</strong>！
            </p>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideCarnivorousPlantMovement: Page = () => {
  const pageNo = useSlidePageNumber() ?? 11;
  return (
    <div style={fill}>
      <PageHeader
        title="肉食植物的閃電陷阱：捕蟲運動"
        subtitle="捕蠅草感應毛觸發雙葉瞬間合攏，捕蟲是為了補氮而非能量！"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '40% 60%',
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
            src={plantCarnivorousMovementImg}
            alt="捕蟲運動示意圖"
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
              border: `1.5px solid ${palette.roseBorder}`,
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
                  background: palette.roseLight,
                  color: palette.rose,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                捕食觸發機轉
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                感應毛與 0.1 秒極速閉合
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 22,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>感應毛雙擊機制：</strong>捕蠅草葉面內側有數根敏感的<strong>感應毛</strong>
                ，昆蟲短時間內觸動兩次即引發電訊號。
              </li>
              <li>
                <strong>膨壓改變形變：</strong>葉片鉸鏈處細胞<strong>水分瞬移，細胞膨壓驟變</strong>
                ，使葉片在 0.1 秒內迅速合攏鎖死！
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.amberLight,
              border: `1.5px solid ${palette.amberBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.amber,
              lineHeight: 1.6,
            }}
          >
            <strong>🚨 會考超高頻陷阱突破：</strong>
            <div style={{ marginTop: 6, color: palette.text }}>
              ① 食蟲植物（捕蠅草、毛氈苔、豬籠草）生長在貧瘠酸性土壤中，捕蟲是為了分解吸收昆蟲體內的
              <strong>「氮 (N) 與磷 (P)」</strong>元素來合成蛋白質與核酸！
            </div>
            <div style={{ marginTop: 4, color: palette.text }}>
              ② 食蟲植物<strong>依然具有葉綠體能進行光合作用</strong>
              自製葡萄糖能源！絕不是靠吃蟲獲取能量！
            </div>
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideStomaTurgorMovement: Page = () => {
  const pageNo = useSlidePageNumber() ?? 12;
  return (
    <div style={fill}>
      <PageHeader
        title="水分散失的閘門：氣孔開閉的膨壓機制"
        subtitle="成對保衛細胞內厚外薄，吸水膨脹開孔、失水萎縮閉合"
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
            src={plantStomaTurgorImg}
            alt="氣孔開閉與保衛細胞膨壓變化"
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
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              保衛細胞的解剖不對稱性
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              兩個半月形保衛細胞相對構成氣孔。
              <strong>靠近氣孔的內壁較厚且富彈性，外側的背孔壁較薄</strong>。
              此結構差異是水壓改變能開啟氣孔的關鍵物理基礎！
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 12,
            }}
          >
            <div
              style={{
                background: palette.cyanLight,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.cyanBorder}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan }}>
                氣孔張開（吸水膨脹）
              </div>
              <ul
                style={{
                  margin: '6px 0 0',
                  paddingLeft: 18,
                  fontSize: 20,
                  color: palette.text,
                  lineHeight: 1.5,
                }}
              >
                <li>光照與光合作用促使水分大量進入保衛細胞。</li>
                <li>
                  膨壓升高，較薄外壁向外大幅伸展，拉開內壁 ➔ <strong>氣孔張開</strong>！
                </li>
              </ul>
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
                氣孔關閉（失水萎縮）
              </div>
              <ul
                style={{
                  margin: '6px 0 0',
                  paddingLeft: 18,
                  fontSize: 20,
                  color: palette.text,
                  lineHeight: 1.5,
                }}
              >
                <li>乾旱缺水或夜間無光，保衛細胞失水。</li>
                <li>
                  膨壓驟降細胞變扁，厚內壁彈性回縮 ➔ <strong>氣孔關閉</strong>防水分散失！
                </li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.emeraldLight,
              border: `1.5px solid ${palette.emeraldBorder}`,
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 20,
              color: palette.emerald,
              lineHeight: 1.5,
            }}
          >
            ✓ 本質定調：氣孔開閉是維持植物蒸散作用與光合氣體交換的
            <strong>最頻繁可逆膨壓運動</strong>。
          </div>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideTropismVsTurgorMatrix: Page = () => {
  const pageNo = useSlidePageNumber() ?? 13;
  return (
    <div style={fill}>
      <PageHeader
        title="植物運動大對決：向性 (Tropism) vs 膨壓運動"
        subtitle="成因、方向、速度與可逆性全維度會考對決總表"
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
            gridTemplateColumns: '160px 1fr 1fr',
            background: palette.surfaceSubtle,
            padding: '14px 20px',
            borderBottom: `1.5px solid ${palette.border}`,
            fontWeight: 800,
            fontSize: 20,
            color: palette.text,
          }}
        >
          <span>比較維度</span>
          <span style={{ color: palette.green }}>向性運動 (Tropism)</span>
          <span style={{ color: palette.cyan }}>膨壓運動 (Turgor Movement)</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {[
            {
              dim: '成因機轉',
              tropism: '生長素 (Auxin) 分佈不均勻，引發細胞生長伸長速率不同',
              turgor: '細胞（如葉枕、保衛細胞）水分迅速得失，改變細胞內部水壓',
            },
            {
              dim: '刺激方向關聯',
              tropism: '與刺激方向密切相關（朝向刺激為正向，背離刺激為負向）',
              turgor: '與刺激方向無直接關聯（固定朝預設解剖方向閉合或張開）',
            },
            {
              dim: '反應速度',
              tropism: '極緩慢（需要細胞分裂生長，耗時數小時至數天）',
              turgor: '極迅速（純粹水分進出與物理形變，秒級或毫秒級）',
            },
            {
              dim: '可逆性',
              tropism: '不可逆（已生長延長之細胞無法再縮減縮短）',
              turgor: '完全可逆（水分重新補充吸飽後即可完全復原）',
            },
            {
              dim: '是否屬於生長',
              tropism: '是（依靠植物細胞實質生長與組織延長）',
              turgor: '否（不涉及細胞生長，純粹為水分充盈與萎縮變化）',
            },
            {
              dim: '典型代表實例',
              tropism: '莖向光性、莖背地性、根向地性、藤蔓向觸性、根向濕性',
              turgor: '含羞草觸發閉合、酢漿草睡眠運動、捕蠅草捕蟲、保衛細胞氣孔開閉',
            },
          ].map((row, idx) => (
            <div
              key={row.dim}
              style={{
                display: 'grid',
                gridTemplateColumns: '160px 1fr 1fr',
                padding: '12px 20px',
                borderBottom: `1px solid ${palette.border}`,
                background: idx % 2 === 1 ? palette.surfaceSubtle : '#ffffff',
                fontSize: 20,
                lineHeight: 1.5,
              }}
            >
              <strong style={{ color: palette.indigo }}>{row.dim}</strong>
              <span style={{ color: palette.text }}>{row.tropism}</span>
              <span style={{ color: palette.text }}>{row.turgor}</span>
            </div>
          ))}
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideExamPitfalls: Page = () => {
  const pageNo = useSlidePageNumber() ?? 14;
  return (
    <div style={fill}>
      <PageHeader
        title="會考陷阱與高頻考點精析"
        subtitle="四大高頻混淆觀念深入辨析，秒殺歷屆考題地雷"
      />
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
            border: `1.5px solid ${palette.greenBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.green,
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
              向性與膨壓運動本質判定
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>看見含羞草小葉快速閉合，誤答為向觸性。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.green,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>含羞草葉片閉合是葉枕水分流失的<strong>「膨壓運動」</strong>
            ，反應快且可逆；而豌豆卷鬚纏繞竹竿生長才是依靠生長素的<strong>「向觸性」</strong>！
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
              陷阱 2
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              根向地與莖背地的生長素濃度差
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為生長素在植物體任何器官永遠只會促進生長。
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
            <strong>正確觀念：</strong>根部對生長素敏感度極高，下側積聚的高濃度生長素
            <strong>反而會強烈抑制根細胞伸長</strong>，上側長得快才向下彎曲！
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
              肉食植物捕蟲的營養本質
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為捕蠅草捕食昆蟲是為了獲取熱量能量（當作食物吃飽）。
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
            <strong>正確觀念：</strong>
            食蟲植物具葉綠體仍行光合作用製造糖類能量；捕蟲是為了補充酸性貧瘠土壤中缺乏的
            <strong>氮 (N)、磷 (P) 等礦物質營養</strong>！
          </p>
        </div>

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
              陷阱 4
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              印痕行為的歸屬定位
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>小鵝跟隨是本能，誤答為純粹先天行為。
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
            <strong>正確觀念：</strong>印痕的「跟隨傾向」雖源於天生，但「認定的特定母體」必須在
            <strong>關鍵期內經由第一眼視覺經驗建立</strong>，屬於<strong>後天學習行為</strong>！
          </p>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

const SlideSummary: Page = () => {
  const pageNo = useSlidePageNumber() ?? 15;
  return (
    <div style={fill}>
      <PageHeader
        title="動植物感應與行為：滿分衝刺四大速記心法"
        subtitle="核心架構口訣化，關鍵觀念秒速整合閉環"
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
            background: palette.greenLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.greenBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.green }}>心法一</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            植物向性口訣
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.green,
              textAlign: 'center',
            }}
          >
            生長素分佈不均勻
            <br />
            莖背光長根向下生
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
            <li>向性屬於生長現象。</li>
            <li>反應緩慢不可逆。</li>
            <li>莖向光背地伸向陽。</li>
            <li>根向地下側受抑制。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.cyanBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.cyan }}>心法二</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            膨壓運動四寶
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.cyan,
              textAlign: 'center',
            }}
          >
            含羞觸發氣孔開
            <br />
            捕蠅夾蟲酢漿眠
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
            <li>純粹水分出入水壓變。</li>
            <li>秒級快速完全可逆。</li>
            <li>非生長也無關生長素。</li>
            <li>與刺激方向無直接關聯。</li>
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
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.indigo }}>心法三</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            動物行為雙軌訣
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
            反射趨性天生本能
            <br />
            印痕迷宮推理經驗
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
            <li>先天：遺傳決定免學習。</li>
            <li>後天：經驗練習可重塑。</li>
            <li>勞倫茲小鵝關鍵期印痕。</li>
            <li>腦越發達學習能力越高。</li>
          </ul>
        </div>

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
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.amber }}>心法四</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            會考避雷真言
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
            食蟲捕蟲為補氮
            <br />
            生長不可逆膨壓反
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
            <li>食蟲植物自製葡萄糖。</li>
            <li>生長向性不可復原。</li>
            <li>膨壓脫水吸水能重開。</li>
            <li>動植物各顯神通應對環境。</li>
          </ul>
        </div>
      </div>
      <PageFooter current={pageNo} total={15} />
    </div>
  );
};

export const notes: (string | undefined)[] = [
  '各位同學好，今天我們要探討生物如何與多變的環境互動——動物的複雜行為與植物的巧妙感應。',
  '動物行為可分為先天行為（反射、趨性、本能）與後天學習行為（嘗試錯誤、印痕、推理）。',
  '勞倫茲的小雁鵝實驗揭示了「印痕行為」的特質：必須在關鍵期內建立，兼具先天遺傳與後天學習雙重特性。',
  '動物透過視覺、聲音、氣味（費洛蒙）與觸覺傳遞訊息，維持族群繁衍與高度社會化分工。',
  '植物沒有神經系統，但擁有兩大感應機制：生長素主導的「向性」與水分進出主導的「膨壓運動」。',
  '向光性是向性的經典代表：單側光促使生長素移向背光側，背光側細胞快速生長伸長，使幼莖朝光源彎曲。',
  '重力感應中，莖與根對生長素敏感度不同：下側高濃度生長素促進莖向上生長（背地性），卻抑制根向下生長（向地性）。',
  '向觸性使攀緣藤蔓纏繞支架，向濕性引導根部尋覓水源，皆為生長素調控的不對稱生長。',
  '含羞草的觸發運動是典型的膨壓運動：葉枕下半部細胞水分瞬間流失，導致小葉閉合葉柄下垂，可逆且非生長。',
  '睡眠運動是受晝夜光線週期刺激的葉片膨壓運動，夜間閉合減少散熱與水分散失。',
  '捕蠅草捕蟲也是膨壓急遽改變所引發的閉合，注意捕食昆蟲是為了補充酸性土壤中缺乏的氮元素，植物依然行光合作用！',
  '氣孔開閉是保衛細胞利用吸水與失水膨壓調控氣孔大小，兼顧蒸散拉力與光合氣體交換。',
  '綜合向性與膨壓運動：向性有方向性、慢且不可逆；膨壓運動與刺激方向無關、快且可逆。',
  '會考四大陷阱：含羞草是膨壓非向觸、根下側生長素是抑制、食蟲捕蟲為了補氮、印痕屬後天學習。',
  '熟記四大衝刺口訣，從向性、膨壓、動物行為到會考避雷，徹底融會貫通單元考點。',
];

export const meta: SlideMeta = {
  title: '動物行為與植物感應',
  createdAt: '2026-10-05T06:30:00.000Z',
};

export default [
  Cover,
  SlideAnimalBehaviorOverview,
  SlideAnimalImprintingAndLearning,
  SlideAnimalCommunication,
  SlidePlantTropismOverview,
  SlidePlantPhototropism,
  SlideGeotropismRootStem,
  SlideThigmotropismAndHydrotropism,
  SlideMimosaTurgorMovement,
  SlidePlantSleepMovement,
  SlideCarnivorousPlantMovement,
  SlideStomaTurgorMovement,
  SlideTropismVsTurgorMatrix,
  SlideExamPitfalls,
  SlideSummary,
] satisfies Page[];
