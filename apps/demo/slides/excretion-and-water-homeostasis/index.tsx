import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';
import urinarySystemOverview63Img from './assets/63-1上6-2人體的泌尿系統.jpg';
import amoebaFishAmmoniaImg from './assets/amoeba_fish_ammonia.png';
import amphibianFrogImg from './assets/amphibian_frog.jpeg';
import birdUricAcidImg from './assets/bird_uric_acid.png';
import dialysisComic1Img from './assets/dialysis_comic_1.png';
import dialysisComic2Img from './assets/dialysis_comic_2.png';
import dialysisComic3Img from './assets/dialysis_comic_3.png';
import dialysisComic4Img from './assets/dialysis_comic_4.png';
import humanSkinCuticleImg from './assets/human_skin_cuticle.jpeg';
import insectLadybugExoskeletonImg from './assets/insect_ladybug_exoskeleton.png';
import mammalUreaImg from './assets/mammal_urea.png';
import plantCuticleStomaImg from './assets/plant_cuticle_stoma.png';
import plantGuttationImg from './assets/plant_guttation.jpeg';
import question113UrinaryImg from './assets/question_113_urinary.png';
import questionUrinarySystemImg from './assets/question_urinary_system.png';
import reptileSnakeScalesImg from './assets/reptile_snake_scales.jpg';
import reptileTurtlePlatesImg from './assets/reptile_turtle_plates.png';
import uricAcidCrystalImg from './assets/uric_acid_crystal.png';

export const meta: SlideMeta = {
  title: '排泄與水分的恆定',
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
      <span>{tip || '國中自然科學 · 生物（一上）單元 6-2 排泄與水分的恆定'}</span>
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
          background: palette.surface,
          padding: '8px 18px',
          borderRadius: 999,
          border: `1px solid ${palette.blueBorder}`,
          width: 'fit-content',
          marginBottom: 20,
          boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)',
        }}
      >
        <span style={{ fontSize: 22, color: palette.blue }}>●</span>
        <span
          style={{ fontSize: 22, fontWeight: 700, color: palette.blue, letterSpacing: '0.04em' }}
        >
          國中自然科學 生物（一上）單元 6-2
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
        排泄與水分的恆定
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
        掌握細胞代謝廢物的清除途徑，剖析氨、尿素與尿酸三大含氮廢物的演化適應；
        深入人體泌尿系統解剖生理，建立水分動態平衡天平與跨物種保水適應的全方位視野。
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
            title: '代謝廢物與排泄',
            desc: '排泄與排遺本質區別，含氮廢物生成起源',
            color: palette.cyan,
            bg: palette.cyanLight,
            border: palette.cyanBorder,
          },
          {
            num: '02',
            title: '三大含氮廢物比較',
            desc: '氨、尿素、尿酸毒性與溶水性演化適應',
            color: palette.blue,
            bg: palette.blueLight,
            border: palette.blueBorder,
          },
          {
            num: '03',
            title: '人體泌尿系統',
            desc: '腎臟過濾、輸尿管、膀胱、尿道與洗腎透析',
            color: palette.indigo,
            bg: palette.indigoLight,
            border: palette.indigoBorder,
          },
          {
            num: '04',
            title: '水分平衡與生物保水',
            desc: '腦部回饋調控尿量，動植物防水分散失構造',
            color: palette.emerald,
            bg: palette.emeraldLight,
            border: palette.emeraldBorder,
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

const SlideExcretionDefinition: Page = () => (
  <div style={fill}>
    <PageHeader
      title="排泄作用的核心定義與三大廢物"
      subtitle="排除代謝產物維持內部環境恆定 · 嚴格區分排泄與排遺"
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
                background: palette.cyanLight,
                color: palette.cyan,
                padding: '4px 14px',
                borderRadius: 8,
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              生物學定義
            </span>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              什麼是排泄作用？
            </span>
          </div>
          <p style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6, margin: 0 }}>
            生物體進行細胞代謝作用時，除了獲取能量與原料，亦會衍生出許多
            <strong style={{ color: palette.rose }}>代謝廢物</strong>。
            生物體藉由特定器官將這些廢物清除並排出體外的過程，稱為
            <strong style={{ color: palette.cyan }}>排泄作用 (Excretion)</strong>。
          </p>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            border: `1px solid ${palette.cyanBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 10 }}>
            細胞代謝所產生的三大廢物及其主要排出途徑
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                name: '二氧化碳 (CO₂)',
                source: '呼吸作用分解葡萄糖等養分產生',
                route: '經血液運送至肺部，透過「呼氣」排出體外',
                tag: '氣體恆定',
                color: palette.blue,
              },
              {
                name: '多餘的水分 (H₂O)',
                source: '細胞代謝產物及自食物、飲水吸收',
                route: '透過「排尿」、「排汗」、「呼氣水氣」與糞便排出',
                tag: '水分恆定',
                color: palette.cyan,
              },
              {
                name: '含氮廢物 (NH₃ / 尿素 / 尿酸)',
                source: '蛋白質與核酸等含氮養分氧化分解產生',
                route: '經由肝臟解毒、腎臟過濾形成「尿液」或「尿酸結晶」排出',
                tag: '含氮排泄',
                color: palette.rose,
              },
            ].map((waste) => (
              <div
                key={waste.name}
                style={{
                  background: palette.surface,
                  border: `1px solid ${palette.border}`,
                  borderRadius: 12,
                  padding: '12px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    background: waste.color,
                    color: '#fff',
                    borderRadius: 8,
                    padding: '6px 14px',
                    fontSize: 20,
                    fontWeight: 800,
                    minWidth: 150,
                    textAlign: 'center',
                  }}
                >
                  {waste.name}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: palette.text }}>
                    {waste.source}
                  </div>
                  <div style={{ fontSize: 20, color: palette.muted }}>➔ {waste.route}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.roseLight,
            border: `2px solid ${palette.roseBorder}`,
            borderRadius: 16,
            padding: '22px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
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
              會考第一高頻陷阱
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
              排泄 (Excretion) ≠ 排遺 (Defecation)
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 14,
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                background: palette.surface,
                border: `1px solid ${palette.border}`,
                borderRadius: 12,
                padding: '16px 20px',
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan, marginBottom: 6 }}>
                ✔ 排泄作用 (Excretion)
              </div>
              <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.5 }}>
                物質進入細胞後，經由<strong>細胞內的代謝作用</strong>所生成的廢物排出過程。
                <br />
                <span style={{ color: palette.muted }}>
                  例如：肺呼出 CO₂、腎臟排尿（尿素、多餘水）、皮膚排汗。
                </span>
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
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
                ✘ 排遺作用 (Defecation)
              </div>
              <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.5 }}>
                食物經過消化管，<strong>未被吸收的食物殘渣</strong>經由肛門排出形成糞便。
                <br />
                <span style={{ color: palette.rose, fontWeight: 700 }}>
                  殘渣未曾進入細胞內部參與代謝，因此「排便絕非排泄作用」！
                </span>
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            border: `1px solid ${palette.amberBorder}`,
            borderRadius: 16,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 32 }}>💡</div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            <strong>觀念快問：</strong>鳥類隨糞便排出的白色物質是排泄還是排遺？
            <br />
            <span style={{ color: palette.amber, fontWeight: 700 }}>
              ➔ 白色膏狀物為「尿酸結晶」（排泄物），黑色部分為未消化殘渣（排遺物）。
            </span>
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="重點口訣：經細胞代謝排出的才算排泄；消化道殘渣排便屬於排遺" />
  </div>
);

const SlideNitrogenousWastes: Page = () => (
  <div style={fill}>
    <PageHeader
      title="含氮廢物的起源與三大形態演化"
      subtitle="蛋白質分解產生劇毒氨 · 根據生活環境演化出不同的代謝策略"
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
            padding: '20px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            含氮廢物 (Nitrogenous Waste) 是如何產生的？
          </div>
          <p style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5, margin: 0 }}>
            醣類與脂質燃燒只產生 CO₂ 與 H₂O，但
            <strong style={{ color: palette.rose }}>蛋白質 (含胺基酸) 與核酸</strong>
            含有<strong>氮元素 (N)</strong>
            。當細胞將胺基酸氧化作為能量來源或轉化時，會脫去胺基生成具有強烈毒性與腐蝕性的
            <strong style={{ color: palette.rose }}>「氨 (NH₃)」</strong>。
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
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 12 }}>
            三大含氮廢物核心物化特性與演化規律
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 14,
            }}
          >
            {[
              {
                title: '氨 (Ammonia)',
                tox: '毒性極高 (+++)',
                sol: '極易溶於水',
                water: '需大量水分稀釋',
                animal: '草履蟲、變形蟲、多數魚類',
                color: palette.cyan,
                bg: palette.cyanLight,
                border: palette.cyanBorder,
              },
              {
                title: '尿素 (Urea)',
                tox: '毒性中等 (++)',
                sol: '溶於水',
                water: '需中等水分排出',
                animal: '哺乳類、成體兩生類',
                color: palette.blue,
                bg: palette.blueLight,
                border: palette.blueBorder,
              },
              {
                title: '尿酸 (Uric Acid)',
                tox: '毒性極低 (+)',
                sol: '難溶於水 (形成結晶)',
                water: '耗水量極少（極度省水）',
                animal: '昆蟲、鳥類、爬蟲類',
                color: palette.emerald,
                bg: palette.emeraldLight,
                border: palette.emeraldBorder,
              },
            ].map((col) => (
              <div
                key={col.title}
                style={{
                  background: col.bg,
                  border: `1px solid ${col.border}`,
                  borderRadius: 12,
                  padding: '14px 16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div
                  style={{ fontSize: 22, fontWeight: 800, color: col.color, textAlign: 'center' }}
                >
                  {col.title}
                </div>
                <div style={{ fontSize: 20, color: palette.text }}>
                  <strong>毒性：</strong>
                  <span style={{ color: palette.rose, fontWeight: 700 }}>{col.tox}</span>
                </div>
                <div style={{ fontSize: 20, color: palette.text }}>
                  <strong>溶水性：</strong>
                  {col.sol}
                </div>
                <div style={{ fontSize: 20, color: palette.text }}>
                  <strong>需水量：</strong>
                  {col.water}
                </div>
                <div
                  style={{
                    fontSize: 20,
                    color: palette.muted,
                    background: palette.surface,
                    padding: '8px 10px',
                    borderRadius: 8,
                    marginTop: 4,
                  }}
                >
                  <strong>代表：</strong>
                  {col.animal}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 14,
              background: palette.surface,
              padding: '12px 18px',
              borderRadius: 10,
              fontSize: 21,
              fontWeight: 700,
              color: palette.text,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <span>
              毒性大小：<strong style={{ color: palette.rose }}>氨 ＞ 尿素 ＞ 尿酸</strong>
            </span>
            <span>|</span>
            <span>
              排泄需水量：<strong style={{ color: palette.blue }}>氨 ＞ 尿素 ＞ 尿酸</strong>
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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
              marginBottom: 10,
              alignSelf: 'flex-start',
            }}
          >
            課本顯微照片：高倍鏡下的尿酸結晶
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 340,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f1f5f9',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 8,
            }}
          >
            <ZoomableImage
              src={uricAcidCrystalImg}
              alt="尿酸結晶高倍光學顯微照片"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 10, textAlign: 'center' }}>
            ▲ 尿酸難溶於水，在體內沉澱為針狀或板狀微小結晶，可與糞便混合排出，極為省水。
          </div>
        </div>

        <div
          style={{
            background: palette.indigoLight,
            border: `1px solid ${palette.indigoBorder}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 20,
            color: palette.indigo,
            lineHeight: 1.5,
          }}
        >
          <strong>演化觀點：</strong>
          水生生物周圍水分充沛，直接排氨最省能量；陸生生物為防止脫水，演化出消耗能量將氨轉為尿素或尿酸的保水機制。
        </div>
      </div>
    </div>

    <PageFooter tip="會考必背比較：毒性大小 氨 > 尿素 > 尿酸；需水量大小 氨 > 尿素 > 尿酸" />
  </div>
);

const SlideAmmoniaExcretion: Page = () => (
  <div style={fill}>
    <PageHeader
      title="氨的排泄機制：水生小生物與魚類"
      subtitle="毒性大、需大量水稀釋 · 水中生物經由體表或鰓擴散直接排出"
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
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.cyan, marginBottom: 10 }}>
            為什麼水生生物可以直接排氨？
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.6, margin: 0 }}>
            氨 (Ammonia) 的<strong>水溶性極高</strong>，且周圍環境有源源不絕的水流。
            水生生物將氨排入水中後，會立刻被周遭大量的環境水體稀釋至無毒濃度，因此生物體不需額外消耗
            ATP 能量將其轉變為其他物質。
          </p>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            border: `1px solid ${palette.cyanBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 12 }}>
            兩大類水生生物的排氨途徑
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
              1. 單細胞與小型水生生物（如變形蟲、草履蟲、水螅）
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              細胞表面積對體積比大，體內代謝產生的氨直接藉由
              <strong style={{ color: palette.cyan }}>「擴散作用 (Diffusion)」</strong>
              穿過細胞膜散逸排入周遭的水中。
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
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 6 }}>
              2. 多數魚類（如淡水魚、海水魚）
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              體表具有鱗片與黏液阻隔，主要透過
              <strong style={{ color: palette.blue }}>「鰓 (Gills)」</strong>
              的大量微血管網，讓血液中的氨直接擴散排入流經鰓裂的水流中。
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
              marginBottom: 10,
              alignSelf: 'flex-start',
            }}
          >
            課本插圖：單細胞生物擴散排氨與魚鰓水流排氨
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
              src={amoebaFishAmmoniaImg}
              alt="變形蟲體表擴散排氨與魚類鰓部排氨圖解"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 10, textAlign: 'center' }}>
            ▲ 變形蟲體表直接擴散排氨；魚類流經鰓的水流迅速帶走擴散出的氨
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            border: `1px solid ${palette.amberBorder}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          <strong>常考陷阱題：</strong>魚類排出含氮廢物的主要器官是腎臟還是鰓？
          <br />
          <span style={{ color: palette.amber, fontWeight: 700 }}>
            ➔ 答案是「鰓」！魚類絕大部分含氮廢物直接由鰓擴散排氨，腎臟主要負責水鹽調節。
          </span>
        </div>
      </div>
    </div>

    <PageFooter tip="水中小生物靠細胞膜擴散排氨；多數魚類靠鰓部的微血管擴散排氨" />
  </div>
);

const SlideUreaExcretion: Page = () => (
  <div style={fill}>
    <PageHeader
      title="尿素的生成與排泄：哺乳類的肝臟與腎臟"
      subtitle="毒性次之、溶於水 · 肝臟解毒合成尿素，血液送腎臟形成尿液"
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
            padding: '20px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 8 }}>
            陸生哺乳類面臨的生存挑戰：水分有限
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            陸生哺乳動物（如人類、犀牛、牛、羊）無法像魚類隨時有水稀釋氨。若體內累積氨會破壞神經與細胞機能。因此體內必須先將氨轉化為
            <strong style={{ color: palette.blue }}>毒性較低、溶於水的「尿素 (Urea)」</strong>
            暫存，再隨水分受控排出。
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
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 12 }}>
            哺乳類尿素生成的兩大關鍵器官分工（必考核心！）
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                background: palette.purple,
                color: '#fff',
                borderRadius: 10,
                padding: '10px 18px',
                fontSize: 22,
                fontWeight: 800,
                textAlign: 'center',
                minWidth: 110,
              }}
            >
              肝臟
              <br />
              <span style={{ fontSize: 18, fontWeight: 400 }}>製造處</span>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
                氨 ➔ 合成轉化為「尿素」
              </div>
              <div style={{ fontSize: 20, color: palette.muted, marginTop: 4 }}>
                細胞代謝產生的氨隨血液送達肝臟，肝臟進行解毒代謝，消耗能量將氨轉化為毒性大幅降低的尿素。
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', fontSize: 26, color: palette.blue, fontWeight: 800 }}>
            ⬇ 尿素釋入血液，經血液循環系統送達 ⬇
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '16px 20px',
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
                padding: '10px 18px',
                fontSize: 22,
                fontWeight: 800,
                textAlign: 'center',
                minWidth: 110,
              }}
            >
              腎臟
              <br />
              <span style={{ fontSize: 18, fontWeight: 400 }}>排出處</span>
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
                過濾血液 ➔ 形成「尿液」排出
              </div>
              <div style={{ fontSize: 20, color: palette.muted, marginTop: 4 }}>
                腎臟將血液中的尿素、多餘水分與無機鹽類過濾出來形成尿液，經輸尿管、膀胱、尿道排出體外。
              </div>
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
              marginBottom: 10,
              alignSelf: 'flex-start',
            }}
          >
            課本插圖：哺乳類（犀牛）肝臟合成尿素與排尿
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
              src={mammalUreaImg}
              alt="犀牛肝臟轉氨為尿素由腎臟排尿圖解"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 10, textAlign: 'center' }}>
            ▲ 哺乳動物在肝臟將氨轉為尿素，由血液送至腎臟形成尿液排出
          </div>
        </div>

        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 20,
            color: palette.rose,
            lineHeight: 1.5,
          }}
        >
          <strong>高頻混淆觀念（會考第 1 名）：</strong>
          <br />
          尿素是在<strong>肝臟</strong>製造的，不是在腎臟！腎臟只負責<strong>過濾與排出</strong>
          尿素！
        </div>
      </div>
    </div>

    <PageFooter tip="牢記器官分工：肝臟是尿素的『製造廠』，腎臟是尿素的『過濾排出站』" />
  </div>
);

const SlideUricAcidExcretion: Page = () => (
  <div style={fill}>
    <PageHeader
      title="尿酸的生成與排泄：極致省水策略"
      subtitle="鳥類、昆蟲與爬蟲類的演化奇蹟 · 難溶於水形成結晶隨糞便排出"
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
            padding: '20px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald, marginBottom: 8 }}>
            為什麼要將氨轉化為尿酸 (Uric Acid)？
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            尿酸的<strong>毒性極低</strong>且<strong>幾乎不溶於水</strong>。
            它不需要大量水分稀釋，在體內沉澱析出為微細結晶，可直接與消化道未消化的殘渣（糞便）混合排出體外，達到極致的省水效果。
          </p>
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 12 }}>
            三大代表類群與適應優勢
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.emerald, marginBottom: 4 }}>
              1. 鳥類（如家燕、鴿子、麻雀）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              鳥類為適應飛翔生活，體內不具有沉重的液體膀胱儲尿。尿酸結晶經泄殖腔與糞便一同排出，減輕飛行載重並高效保留體內水分。
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 4 }}>
              2. 陸生昆蟲（如蟬、瓢蟲、蝗蟲、蝴蝶）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              昆蟲體型小、比表面積大，極易因蒸散而散失水分。透過馬氏管將含氮廢物轉為尿酸結晶排出，將失水率降至最低。
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo, marginBottom: 4 }}>
              3. 陸生爬蟲類（如蛇、蜥蜴、陸龜）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              棲息在乾旱沙漠或陸地環境，排泄白色膏狀的尿酸沉澱物，維持體內水分穩定。
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
              marginBottom: 10,
              alignSelf: 'flex-start',
            }}
          >
            課本插圖：家燕排便與白色尿酸成分分析
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
              src={birdUricAcidImg}
              alt="家燕排便與白色尿酸晶體圖解"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 10, textAlign: 'center' }}>
            ▲ 鳥類排泄物中的白色膏狀物即為尿酸結晶，黑色部分為未消化之排遺糞便
          </div>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            border: `1px solid ${palette.cyanBorder}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 20,
            color: palette.cyan,
            lineHeight: 1.5,
          }}
        >
          <strong>羊膜卵演化密碼：</strong>
          鳥類與爬蟲類產具有堅硬卵殼的卵。胚胎代謝若排氨或尿素會溶解毒死胚胎；唯有合成不溶性尿酸結晶儲存於尿囊，才能確保胚胎安全發育。
        </div>
      </div>
    </div>

    <PageFooter tip="鳥糞上的白色部分是尿酸結晶（排泄物），黑色部分是未消化殘渣（排遺物）" />
  </div>
);

const SlideUrinaryAnatomy: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體泌尿系統構造與器官途徑"
      subtitle="腎臟、輸尿管、膀胱與尿道 · 完整的過濾、輸送、暫存與排出通道"
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
            課本高清掛圖：人體泌尿系統解剖圖
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
              src={urinarySystemOverview63Img}
              alt="人體泌尿系統解剖圖與血液循環連接圖"
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
            ▲ 包含成對的腎臟、輸尿管，以及單一的膀胱與尿道
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
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          尿液流動順序：腎臟 ➔ 輸尿管 ➔ 膀胱 ➔ 尿道 ➔ 排出體外
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          {
            part: '腎臟 (Kidney)',
            count: '成對（左右各一）',
            loc: '位於腹腔背側、脊柱兩側，形如蠶豆',
            func: '過濾血液中的尿素、多餘水分與無機鹽類形成尿液，並回收葡萄糖等有用物質。',
            color: palette.rose,
            bg: palette.roseLight,
            border: palette.roseBorder,
          },
          {
            part: '輸尿管 (Ureter)',
            count: '成對（左右各一條）',
            loc: '連接腎臟與膀胱的細長管道',
            func: '藉由平滑肌的蠕動，將腎臟形成的尿液向下推送導入膀胱儲存。',
            color: palette.amber,
            bg: palette.amberLight,
            border: palette.amberBorder,
          },
          {
            part: '膀胱 (Urinary Bladder)',
            count: '單一器官',
            loc: '骨盆腔底部的彈性肌性囊袋',
            func: '壁富彈性，平時放鬆擴張暫存尿液；尿量達一定程度產生「尿意」，收縮排尿。',
            color: palette.blue,
            bg: palette.blueLight,
            border: palette.blueBorder,
          },
          {
            part: '尿道 (Urethra)',
            count: '單一管道',
            loc: '連接膀胱通往身體外部',
            func: '受括約肌控制。當膀胱收縮時括約肌舒張，將尿液順暢排出體外。',
            color: palette.purple,
            bg: palette.purpleLight,
            border: palette.purpleBorder,
          },
        ].map((item) => (
          <div
            key={item.part}
            style={{
              background: item.bg,
              border: `1px solid ${item.border}`,
              borderRadius: 14,
              padding: '14px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: item.color }}>{item.part}</span>
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
                {item.count}
              </span>
            </div>
            <div style={{ fontSize: 20, color: palette.text }}>
              <strong>位置：</strong>
              {item.loc}
            </div>
            <div style={{ fontSize: 20, color: palette.muted }}>
              <strong>功能：</strong>
              {item.func}
            </div>
          </div>
        ))}
      </div>
    </div>

    <PageFooter tip="數量記清楚：腎臟 2 個、輸尿管 2 條；膀胱 1 個、尿道 1 條" />
  </div>
);

const SlideKidneyBloodFiltration: Page = () => (
  <div style={fill}>
    <PageHeader
      title="腎臟的血液過濾與成分變化"
      subtitle="進出腎臟的血液大不同 · 腎動脈 vs 腎靜脈物質濃度深度對比"
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
            padding: '20px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            腎臟如何過濾血液？
          </div>
          <p style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5, margin: 0 }}>
            心臟每搏動一次，約有四分之一的血液流向腎臟。含有豐富尿素與代謝廢物的血液經由
            <strong style={{ color: palette.rose }}>腎動脈</strong>
            流入。腎臟微細構造濾出廢物形成尿液，並將葡萄糖、水分與蛋白質等有用物質
            <strong>「再吸收」</strong>回心血管系統，過濾清潔後的血液經由
            <strong style={{ color: palette.blue }}>腎靜脈</strong>匯入下腔靜脈返回心臟。
          </p>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            border: `1px solid ${palette.blueBorder}`,
            borderRadius: 16,
            padding: '18px 22px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 10 }}>
            會考關鍵對比表：腎動脈 vs 腎靜脈物質成分比較
          </div>

          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 20,
              background: palette.surface,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <thead>
              <tr style={{ background: '#e0f2fe', color: palette.text }}>
                <th
                  style={{
                    padding: '10px 14px',
                    textAlign: 'left',
                    borderBottom: `1px solid ${palette.border}`,
                  }}
                >
                  物質項目
                </th>
                <th
                  style={{
                    padding: '10px 14px',
                    textAlign: 'center',
                    borderBottom: `1px solid ${palette.border}`,
                  }}
                >
                  腎動脈（流入腎臟）
                </th>
                <th
                  style={{
                    padding: '10px 14px',
                    textAlign: 'center',
                    borderBottom: `1px solid ${palette.border}`,
                  }}
                >
                  腎靜脈（流出腎臟）
                </th>
                <th
                  style={{
                    padding: '10px 14px',
                    textAlign: 'left',
                    borderBottom: `1px solid ${palette.border}`,
                  }}
                >
                  生理原因剖析
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  item: '尿素濃度',
                  in: '較高 (+++)',
                  out: '極低 (+)',
                  reason: '腎臟過濾尿素並隨尿液排出體外',
                  highlight: true,
                },
                {
                  item: '氧氣 (O₂)',
                  in: '較高 (充氧血)',
                  out: '較低 (缺氧血)',
                  reason: '腎臟細胞進行呼吸作用消耗氧氣',
                  highlight: false,
                },
                {
                  item: '二氧化碳 (CO₂)',
                  in: '較低',
                  out: '較高',
                  reason: '腎臟細胞代謝產生 CO₂ 釋入靜脈',
                  highlight: false,
                },
                {
                  item: '葡萄糖',
                  in: '正常',
                  out: '稍低',
                  reason: '腎細胞消耗少許能量，其餘 100% 回收',
                  highlight: false,
                },
              ].map((row) => (
                <tr
                  key={row.item}
                  style={{
                    background: row.highlight ? '#fef2f2' : 'transparent',
                    borderBottom: `1px solid ${palette.border}`,
                  }}
                >
                  <td
                    style={{
                      padding: '10px 14px',
                      fontWeight: 700,
                      color: row.highlight ? palette.rose : palette.text,
                    }}
                  >
                    {row.item}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      textAlign: 'center',
                      fontWeight: 700,
                      color: palette.rose,
                    }}
                  >
                    {row.in}
                  </td>
                  <td
                    style={{
                      padding: '10px 14px',
                      textAlign: 'center',
                      fontWeight: 700,
                      color: palette.blue,
                    }}
                  >
                    {row.out}
                  </td>
                  <td style={{ padding: '10px 14px', color: palette.muted }}>{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
            課本插圖：腎動脈、腎靜脈與輸尿管關係
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
              src={urinarySystemOverview63Img}
              alt="人體泌尿系統解剖圖與血液循環連接圖"
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
            ▲ 紅色為腎動脈（含較多尿素與氧氣），藍色為腎靜脈（尿素含量最低）
          </div>
        </div>

        <div
          style={{
            background: palette.amberLight,
            border: `1px solid ${palette.amberBorder}`,
            borderRadius: 14,
            padding: '14px 20px',
            fontSize: 20,
            color: palette.amber,
            lineHeight: 1.5,
          }}
        >
          <strong>全身體循環中哪條血管「尿素濃度最低」？</strong>
          <br />➔ 答案就是<strong>「腎靜脈」</strong>！因為血液剛經過腎臟的嚴格過濾與清除。
        </div>
      </div>
    </div>

    <PageFooter tip="會考必考題：全身尿素濃度最高是「肝靜脈」，全身尿素濃度最低是「腎靜脈」" />
  </div>
);

const SlideHemodialysis: Page = () => (
  <div style={fill}>
    <PageHeader
      title="科技延伸：洗腎（血液透析）原理"
      subtitle="透析薄膜模擬腎臟過濾機能 · 挽救腎衰竭與尿毒症患者生命"
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
            padding: '20px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.purple, marginBottom: 8 }}>
            什麼是「洗腎」？真的把腎臟拿出來洗嗎？
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.6, margin: 0 }}>
            「洗腎」的醫學正式名稱是
            <strong style={{ color: palette.purple }}>血液透析 (Hemodialysis)</strong>。
            當患者因慢性腎臟病、糖尿病或高血壓導致兩側腎功能喪失（尿毒症）時，體內尿素、多餘水分與毒素無法排出。此時需藉由「人工腎臟透析機」，將患者血液引出體外進行淨化過濾後再輸回體內。
          </p>
        </div>

        <div
          style={{
            background: palette.purpleLight,
            border: `1px solid ${palette.purpleBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.purple, marginBottom: 10 }}>
            血液透析的核心物理化學機制
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
              1. 半透膜的孔徑篩選（擴散作用）
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              人工腎臟內有數萬根中空微細纖維薄膜。血液中高濃度的尿素、肌酸酐、多餘鹽類分子小，能穿透膜孔擴散進入透析液；而大分子的
              <strong>血球與蛋白質</strong>無法穿透，安全保留在血液中。
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
              2. 透析液的精準配方設計
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              透析液含有與人體相當的葡萄糖與等張電解質濃度，且<strong>完全不含尿素</strong>
              。如此能確保體內養分不流失，同時維持極大的尿素濃度差，快速排出毒素。
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 12,
              padding: '14px 18px',
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
              3. 腎臟保健之道
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>
              少鹽、少油、多喝乾淨白開水、不濫用未經醫師處方之成藥與止痛藥、控制血壓與血糖，是保護腎臟機能的根本之策。
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
            padding: '18px 20px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            課本趣味四格漫畫：洗腎的真相
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 10,
              flex: 1,
              minHeight: 0,
            }}
          >
            {[
              { img: dialysisComic1Img, cap: '1. 陪媽媽去醫院洗腎' },
              { img: dialysisComic2Img, cap: '2. 把腎拿出來洗嗎？！' },
              { img: dialysisComic3Img, cap: '3. 什麼啊！好恐怖…' },
              { img: dialysisComic4Img, cap: '4. 洗腎是血液透析啦！' },
            ].map((comic) => (
              <div
                key={comic.cap}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  background: '#f8fafc',
                  borderRadius: 10,
                  padding: 6,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ZoomableImage
                    src={comic.img}
                    alt={comic.cap}
                    style={{
                      maxWidth: '100%',
                      maxHeight: 160,
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <div style={{ fontSize: 19, fontWeight: 700, color: palette.muted, marginTop: 4 }}>
                  {comic.cap}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: palette.cyanLight,
            border: `1px solid ${palette.cyanBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 20,
            color: palette.cyan,
            textAlign: 'center',
            fontWeight: 700,
          }}
        >
          透析過程小分子（尿素、水）可通過，大分子（蛋白質、血球）不可通過
        </div>
      </div>
    </div>

    <PageFooter tip="血液透析利用人工半透膜與濃度差擴散作用，清除血液中的尿素與多餘水分" />
  </div>
);

const SlideWaterBalanceOverview: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體水分的來源、流失與動態平衡"
      subtitle="水佔體重約 60%~70% · 攝入總量必須精準恆等於排出總量"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 0 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '22px 24px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue, marginBottom: 10 }}>
            為什麼水分恆定 (Water Homeostasis) 如此關鍵？
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.6, margin: 0 }}>
            水是體內最優良的溶劑，參與體內化學反應、運送物質並調節體溫。 若體內水分
            <strong>過多</strong>，會稀釋血液濃度、使紅血球吸水膨脹破裂； 若體內水分
            <strong>過少</strong>，血液滲透壓上升、紅血球萎縮且代謝廢物無法順利排出。
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
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 8 }}>
            💧 人體水分的獲得途徑（約 2500 mL / 天）
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: '直接飲水', val: '約 1200 ~ 1500 mL', desc: '主動飲用白開水、湯品、飲料' },
              {
                name: '食物中的水分',
                val: '約 700 ~ 1000 mL',
                desc: '蔬菜、水果、米飯肉類中富含的水分',
              },
              {
                name: '代謝水 (細胞呼吸)',
                val: '約 300 mL',
                desc: '細胞利用葡萄糖產生能量時化學反應生成的產物水',
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: palette.surface,
                  border: `1px solid ${palette.border}`,
                  borderRadius: 10,
                  padding: '10px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <strong style={{ fontSize: 21, color: palette.text }}>{item.name}</strong>
                  <div style={{ fontSize: 19, color: palette.muted }}>{item.desc}</div>
                </div>
                <span
                  style={{
                    background: palette.cyanLight,
                    color: palette.cyan,
                    padding: '4px 12px',
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.roseLight,
            border: `1px solid ${palette.roseBorder}`,
            borderRadius: 16,
            padding: '20px 24px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 8 }}>
            🌊 人體水分的流失途徑（約 2500 mL / 天）
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              {
                name: '尿液 (腎臟排出)',
                val: '約 1500 mL',
                desc: '體內可「主動調控」水量的最主要關鍵器官',
                control: true,
              },
              {
                name: '汗液 (皮膚排汗)',
                val: '約 500 mL',
                desc: '體溫調節散熱伴隨流失，運動天熱時大幅激增',
                control: false,
              },
              {
                name: '呼氣水氣 (肺部散失)',
                val: '約 350 ~ 400 mL',
                desc: '氣體交換時呼吸道黏膜水分蒸發隨呼氣逸出',
                control: false,
              },
              {
                name: '糞便 (消化道排出)',
                val: '約 100 ~ 150 mL',
                desc: '大腸未吸收完全的殘留水分隨排便釋出',
                control: false,
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: palette.surface,
                  border: `1px solid ${palette.border}`,
                  borderRadius: 10,
                  padding: '10px 16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <strong style={{ fontSize: 21, color: palette.text }}>{item.name}</strong>
                    {item.control && (
                      <span
                        style={{
                          background: palette.emerald,
                          color: '#fff',
                          fontSize: 18,
                          padding: '2px 8px',
                          borderRadius: 6,
                          fontWeight: 700,
                        }}
                      >
                        主控中樞
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 19, color: palette.muted }}>{item.desc}</div>
                </div>
                <span
                  style={{
                    background: palette.roseLight,
                    color: palette.rose,
                    padding: '4px 12px',
                    borderRadius: 8,
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {item.val}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '18px 22px',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div style={{ fontSize: 32 }}>⚖️</div>
          <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.5 }}>
            <strong>動態平衡黃金法則：</strong>
            正常健康狀態下，<strong>每日獲得水總量 ＝ 每日流失水總量</strong>。
            當劇烈運動排汗激增時，腎臟必須立刻製造「較少且濃稠的尿液」來維持平衡！
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="人體每日水分進出維持平衡，腎臟是調節尿量多寡的最核心器官" />
  </div>
);

const SlideWaterRegulationFeedback: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體水分調節機制：天平回饋系統"
      subtitle="腦部偵測血液滲透壓 · 調控口渴感覺與腎臟尿液製造量"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 0 }}
    >
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
            情境 A
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
            體內水分過少（流汗多、少喝水）
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
            <span style={{ fontSize: 21, color: palette.text }}>血液水分減少 ➔ 血液濃度升高</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>② 感測</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              刺激<strong>腦部（下視丘水分調節中樞）</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>③ 行為</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              產生<strong style={{ color: palette.rose }}>「口渴感覺」</strong> ➔ 促使人主動喝水
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.rose, fontWeight: 800 }}>④ 生理</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              促使腎臟加強水分再吸收 ➔ 製造
              <strong style={{ color: palette.rose }}>「較少且濃稠的尿液」</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.emerald, fontWeight: 800 }}>⑤ 結果</span>
            <span style={{ fontSize: 21, color: palette.emerald, fontWeight: 700 }}>
              體內水分增加，血液濃度恢復正常！
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
          💡 <strong>運動下課後：</strong>大汗淋漓時尿量顯著減少、顏色偏深黃，且強烈想喝水。
        </div>
      </div>

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
            情境 B
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.blue }}>
            體內水分過多（大量喝水、吃西瓜）
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
            <span style={{ fontSize: 21, color: palette.text }}>血液水分增加 ➔ 血液濃度降低</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>② 感測</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              刺激<strong>腦部（下視丘水分調節中樞）</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>③ 行為</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              <strong style={{ color: palette.muted }}>「不感口渴」</strong> ➔ 抑制主動飲水慾望
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.blue, fontWeight: 800 }}>④ 生理</span>
            <span style={{ fontSize: 21, color: palette.text }}>
              調節腎臟減少水分再吸收 ➔ 製造
              <strong style={{ color: palette.blue }}>「較多且稀薄的尿液」</strong>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22, color: palette.emerald, fontWeight: 800 }}>⑤ 結果</span>
            <span style={{ fontSize: 21, color: palette.emerald, fontWeight: 700 }}>
              排出多餘水分，血液濃度恢復正常！
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
          💡 <strong>冬日暢飲後：</strong>短時間喝下大量溫開水，頻繁跑廁所排尿且尿液透明清澈。
        </div>
      </div>
    </div>

    <PageFooter tip="口渴感受與腎臟尿液製造量由腦部統一協調，精準維持血液濃度恆定" />
  </div>
);

const SlideAnimalWaterAdaptation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="陸生動物防止水分散失的構造演化"
      subtitle="從水生登上陸地的演化關鍵 · 外骨骼、鱗片、骨板與角質層"
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
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald, marginBottom: 6 }}>
            乾燥陸地環境下的保水生存戰
          </div>
          <p style={{ fontSize: 21, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            陸地空氣乾燥，動物體表極易因水分蒸發而枯竭死亡。成功征服陸地的動物類群，體表均演化出具有
            <strong style={{ color: palette.emerald }}>「不透水」特性的防水保護層</strong>。
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
              group: '節肢動物（昆蟲）',
              feat: '幾丁質外骨骼 (Exoskeleton)',
              desc: '如蟬、瓢蟲、甲蟲，堅硬緻密的外骨骼能完全隔絕水分散失。',
              img: insectLadybugExoskeletonImg,
              color: palette.cyan,
            },
            {
              group: '爬蟲類（蛇、蜥蜴、鱷魚）',
              feat: '角質鱗片與骨板 (Scales)',
              desc: '體表覆蓋乾燥角質化鱗片或堅硬骨板，能在極度乾旱的沙漠中生存。',
              img: reptileSnakeScalesImg,
              color: palette.amber,
            },
            {
              group: '爬蟲類（陸龜、海龜）',
              feat: '骨質甲板與角質盾板',
              desc: '背腹甲由癒合的肋骨、脊椎與角質層構成，具極佳防護與保水力。',
              img: reptileTurtlePlatesImg,
              color: palette.indigo,
            },
            {
              group: '哺乳類與人類',
              feat: '皮膚角質層 (Cuticle/Stratum)',
              desc: '表皮最外層死細胞角質化，並有皮脂腺分泌油脂阻擋水分散逸。',
              img: humanSkinCuticleImg,
              color: palette.purple,
            },
          ].map((card) => (
            <div
              key={card.group}
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
                <div style={{ fontSize: 21, fontWeight: 800, color: card.color }}>{card.group}</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: palette.text, marginTop: 2 }}>
                  {card.feat}
                </div>
                <div style={{ fontSize: 19, color: palette.muted, marginTop: 4, lineHeight: 1.35 }}>
                  {card.desc}
                </div>
              </div>
              <div
                style={{
                  height: 100,
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
                  alt={card.feat}
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
            background: palette.roseLight,
            border: `2px solid ${palette.roseBorder}`,
            borderRadius: 16,
            padding: '20px 22px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
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
              反面教材 · 會考必考特例
            </span>
            <span style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
              兩生類（青蛙、蟾蜍、蠑螈）
            </span>
          </div>

          <p style={{ fontSize: 20, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            蛙類的皮膚<strong>裸露、濕潤，缺乏防止水分散失的角質層或鱗片</strong>！
            雖然有利於輔助呼吸進行氣體交換，但體內水分極易散失。因此蛙類
            <strong>必須終生生活在潮濕環境或水域附近</strong>，無法真正遠離水源。
          </p>

          <div
            style={{
              flex: 1,
              marginTop: 12,
              background: palette.surface,
              borderRadius: 12,
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <ZoomableImage
              src={amphibianFrogImg}
              alt="青蛙濕潤裸露的皮膚圖解"
              style={{
                maxWidth: '100%',
                maxHeight: 220,
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 19, color: palette.muted, marginTop: 6, textAlign: 'center' }}>
            ▲ 青蛙皮膚濕潤無防水角質，限制其只能棲息於潮濕陰暗處
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
          <strong>考題破密：</strong>問何者「最能生活在乾燥沙漠」？
          <br />➔ 爬蟲類（蛇、蜥蜴）優於哺乳類；兩生類（青蛙）絕對無法生存！
        </div>
      </div>
    </div>

    <PageFooter tip="防止水分散失構造：昆蟲外骨骼、爬蟲類鱗片骨板、鳥類羽毛、哺乳類皮膚角質層" />
  </div>
);

const SlidePlantWaterRegulation: Page = () => (
  <div style={fill}>
    <PageHeader
      title="植物的水分調節：角質層、氣孔與吐水現象"
      subtitle="角質層阻擋水分蒸發 · 蒸散作用 vs 夜晚葉緣泌液現象（吐水）"
    />

    <div
      style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, minHeight: 0 }}
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
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald, marginBottom: 6 }}>
            陸生植物的保水雙保險：角質層與氣孔
          </div>
          <p style={{ fontSize: 20, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            陸生植物葉片與幼莖表皮細胞表面分泌有透明不透水的
            <strong style={{ color: palette.emerald }}>「角質層 (Cuticle)」</strong>
            （非細胞構造），能大幅阻止體內水分散逸。 主要的水分進出則由
            <strong style={{ color: palette.cyan }}>保衛細胞開閉「氣孔 (Stoma)」</strong>受控調節。
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '14px 18px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 21,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 6,
              alignSelf: 'flex-start',
            }}
          >
            課本插圖：葉片角質層與表皮氣孔構造
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 290,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 6,
            }}
          >
            <ZoomableImage
              src={plantCuticleStomaImg}
              alt="植物葉片角質層與氣孔解剖構造圖"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 19, color: palette.muted, marginTop: 6, textAlign: 'center' }}>
            ▲ 上下表皮均覆蓋角質層；氣孔由一對保衛細胞控制開閉
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: palette.cyanLight,
            border: `1px solid ${palette.cyanBorder}`,
            borderRadius: 16,
            padding: '18px 22px',
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.cyan, marginBottom: 6 }}>
            奇特的「吐水現象（泌液作用 Guttation）」
          </div>
          <p style={{ fontSize: 20, color: palette.text, lineHeight: 1.5, margin: 0 }}>
            <strong>發生條件：</strong>
            夜晚或清晨、空氣濕度極高（氣孔多已關閉）、土壤水分充足時。
            <br />
            <strong>生成機制：</strong>
            根部持續主動吸水產生「根壓」，多餘水分無法經由氣孔蒸散，便直接從
            <strong style={{ color: palette.blue }}>葉片邊緣或尖端之維管束末端排水孔</strong>
            溢出形成水珠。
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            border: `1px solid ${palette.border}`,
            borderRadius: 16,
            padding: '14px 18px',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              fontSize: 21,
              fontWeight: 800,
              color: palette.text,
              marginBottom: 6,
              alignSelf: 'flex-start',
            }}
          >
            課本照片：清晨葉緣整齊排列的水珠
          </div>
          <div
            style={{
              width: '100%',
              flex: 1,
              maxHeight: 250,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#f8fafc',
              borderRadius: 12,
              overflow: 'hidden',
              padding: 6,
            }}
          >
            <ZoomableImage
              src={plantGuttationImg}
              alt="植物葉片邊緣吐水泌液水滴特寫"
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </div>
          <div style={{ fontSize: 19, color: palette.muted, marginTop: 6, textAlign: 'center' }}>
            ▲ 葉緣水珠由體內水管溢出，非空氣中水蒸氣凝結的「露水」！
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
          <strong>鑑別關鍵：</strong>
          露水是空氣水蒸氣凝結，隨機分佈在葉片表面；吐水水珠則整齊分佈在
          <strong>「葉緣或葉尖」</strong>！
        </div>
      </div>
    </div>

    <PageFooter tip="吐水現象（泌液作用）：夜晚氣孔關閉、土壤水多，水分由葉片邊緣或葉尖溢出" />
  </div>
);

const SlideClassicQuestions: Page = () => (
  <div style={fill}>
    <PageHeader
      title="國中會考經典題型與易錯陷阱深度解析"
      subtitle="直擊歷屆試題關鍵得分點 · 掌握解題思維百戰百勝"
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
              background: palette.blue,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            經典例題 1
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>
            課本例題 6-3：泌尿系統構造
          </span>
        </div>

        <div
          style={{
            height: 200,
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
            src={questionUrinarySystemImg}
            alt="課本 6-3 題泌尿系統示意圖"
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
          <strong>題目：</strong>圖為人體泌尿系統示意圖，下列敘述何者正確？
          <br />
          (A) 尿素在甲（腎臟）處製造而成
          <br />
          (B) 血液中的廢物如尿素在甲處形成尿液
          <br />
          (C) 尿液由丙（膀胱）製造並送至乙（輸尿管）
          <br />
          (D) 丁（尿道）是暫時儲存尿液的器官
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
          <strong>解析：</strong>甲是腎臟，負責過濾血液形成尿液；尿素是在<strong>肝臟</strong>
          製造的（A 錯）；丙是膀胱負責暫存尿液（C 錯）；丁是尿道負責排出體外（D 錯）。
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
              background: palette.indigo,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 800,
            }}
          >
            經典例題 2
          </span>
          <span style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>
            113 年會考真題：腎血管與功能
          </span>
        </div>

        <div
          style={{
            height: 200,
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
            src={question113UrinaryImg}
            alt="113 年會考腎血管血流方向與功能示意圖"
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
          圖中乙血管氧氣含量比甲多。有關丙器官的生理功能及血液進出丙的路徑，何者正確？
          <br />
          (A) 形成尿素，甲 ➔ 丙 ➔ 乙
          <br />
          (B) 形成尿素，乙 ➔ 丙 ➔ 甲
          <br />
          (C) 形成尿液，甲 ➔ 丙 ➔ 乙
          <br />
          (D) 形成尿液，乙 ➔ 丙 ➔ 甲
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
          <strong>正確答案：(D)</strong>
          <br />
          <strong>解析：</strong>
          乙含氧量高，故乙為「腎動脈」；甲為「腎靜脈」。血流由動脈流入器官再由靜脈流出，故路徑為
          <strong>乙 ➔ 丙 ➔ 甲</strong>；丙（腎臟）功能為「形成尿液」。
        </div>
      </div>
    </div>

    <PageFooter tip="會考解題關鍵心法：先判斷動脈（含氧高流入）與靜脈（含氧低流出），再判斷器官機能" />
  </div>
);

const SlideMindMapSummary: Page = () => (
  <div style={fill}>
    <PageHeader
      title="單元重點總結與會考滿分心智圖"
      subtitle="整合排泄定義、三大含氮廢物、泌尿解剖與水分動態平衡"
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
          sec: '1. 排泄 vs 排遺',
          color: palette.cyan,
          bg: palette.cyanLight,
          border: palette.cyanBorder,
          points: [
            '排泄：細胞代謝廢物排出（CO₂、尿素、水）。',
            '排遺：消化管未消化吸收殘渣排便。',
            '鳥糞白色部分為尿酸結晶（排泄）；黑色部分為排遺。',
            '肺、腎臟、皮膚為人體三大排泄器官。',
          ],
        },
        {
          sec: '2. 含氮廢物比較',
          color: palette.blue,
          bg: palette.blueLight,
          border: palette.blueBorder,
          points: [
            '氨：毒性大、易溶水、需水多（變形蟲體表擴散、魚類鰓排氨）。',
            '尿素：毒性中、溶水（哺乳類「肝臟製造」、腎臟排尿）。',
            '尿酸：毒性最小、難溶水、極省水（昆蟲、鳥類、爬蟲類）。',
            '毒性與需水量：氨 ＞ 尿素 ＞ 尿酸。',
          ],
        },
        {
          sec: '3. 泌尿系統生理',
          color: palette.indigo,
          bg: palette.indigoLight,
          border: palette.indigoBorder,
          points: [
            '途徑：腎臟 ➔ 輸尿管 ➔ 膀胱 ➔ 尿道。',
            '腎動脈：尿素高、氧氣多、流入腎臟。',
            '腎靜脈：尿素極低（全身最低）、氧氣少。',
            '血液透析：利用人工半透膜擴散排出尿素。',
          ],
        },
        {
          sec: '4. 水分恆定調節',
          color: palette.emerald,
          bg: palette.emeraldLight,
          border: palette.emeraldBorder,
          points: [
            '中樞：腦部（下視丘）感測血液濃度。',
            '水少：感到口渴、喝水、腎臟製造少且濃尿。',
            '水多：不口渴、腎臟製造多且稀尿。',
            '生物保水：昆蟲外骨骼、爬蟲鱗片、植物角質層；青蛙皮膚裸露易失水。',
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
        🎯 複習心法：分清排泄排遺 ➔ 牢記三大含氮廢物 ➔ 掌握腎動靜脈血流 ➔ 扣緊腦與腎臟水分天平
      </span>
      <span style={{ color: palette.blue }}>祝全體國中同學會考滿分 A++！</span>
    </div>

    <PageFooter tip="恭喜完成國中生物（一上）單元 6-2 排泄與水分的恆定全部課程" />
  </div>
);

export default [
  Cover,
  SlideExcretionDefinition,
  SlideNitrogenousWastes,
  SlideAmmoniaExcretion,
  SlideUreaExcretion,
  SlideUricAcidExcretion,
  SlideUrinaryAnatomy,
  SlideKidneyBloodFiltration,
  SlideHemodialysis,
  SlideWaterBalanceOverview,
  SlideWaterRegulationFeedback,
  SlideAnimalWaterAdaptation,
  SlidePlantWaterRegulation,
  SlideClassicQuestions,
  SlideMindMapSummary,
];
