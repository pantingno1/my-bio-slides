import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import digestivePhFactorsImg from './assets/digestive-ph-factors.jpg';
import digestiveSystemImg from './assets/digestive-system.jpg';
import intestinalVilliImg from './assets/intestinal-villi.jpg';
import labSalivaTemperatureImg from './assets/lab-saliva-temperature.jpg';
import metabolismDigestionImg from './assets/metabolism-digestion.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fcfaf8',
    text: '#1c1917',
    accent: '#c2410c',
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
  bg: '#fcfaf8',
  surface: '#ffffff',
  surfaceSubtle: '#f5f5f4',
  border: '#e7e5e4',
  text: '#1c1917',
  muted: '#78716c',
  faint: '#a8a29e',
  rust: '#c2410c',
  rustLight: '#fff7ed',
  rustBorder: '#fed7aa',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
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
  category = '國中自然科學 · 生物（一上）單元 3-4',
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
        background: palette.rustLight,
        border: `1px solid ${palette.rustBorder}`,
        color: palette.rust,
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
      <span>{tip ? `💡 重點提示：${tip}` : '國中自然科學 · 人體如何獲得養分'}</span>
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
      background: 'radial-gradient(circle at 18% 25%, #fff7ed 0%, #fcfaf8 55%, #fee2e2 100%)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        background: 'linear-gradient(90deg, #c2410c 0%, #d97706 50%, #be123c 100%)',
      }}
    />

    <div
      style={{
        maxWidth: 1440,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 26,
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '8px 22px',
          borderRadius: 999,
          background: palette.rustLight,
          border: `1px solid ${palette.rustBorder}`,
          color: palette.rust,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: '0.06em',
        }}
      >
        <span
          style={{
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: palette.rust,
          }}
        />
        國中自然科學 · 生物（一上）單元 3-4
      </div>

      <h1
        style={{
          fontFamily: 'var(--osd-font-display)',
          fontSize: '96px',
          fontWeight: 900,
          color: palette.text,
          margin: '0 0 10px 0',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
        }}
      >
        <span>生命工廠的拆解與吸收</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #c2410c 0%, #d97706 50%, #be123c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '96px',
          }}
        >
          人體如何獲得養分
        </span>
      </h1>

      <p
        style={{
          fontSize: '28px',
          color: palette.muted,
          margin: 0,
          maxWidth: 1060,
          lineHeight: 1.55,
        }}
      >
        從消化管連續通道、消化腺與酵素分工、小腸絨毛網球場級吸收特化，到會考必考實驗與觀念陷阱全面突破
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
          { icon: '🔄', tag: '消化全覽', desc: '物理碾磨 vs 酵素化學分解' },
          { icon: '🗺️', tag: '消化器官地圖', desc: '消化管通道與五大消化腺' },
          { icon: '⚡', tag: '絨毛吸收特化', desc: '微血管與乳糜管雙軌吸收' },
          { icon: '🧪', tag: '探究實驗', desc: '溫度對唾液澱粉酶活性影響' },
        ].map((item) => (
          <div
            key={item.tag}
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 18,
              padding: '20px 22px',
              boxShadow: '0 10px 25px -5px rgba(28, 25, 23, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: '34px' }}>{item.icon}</div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: palette.rust,
              }}
            >
              {item.tag}
            </div>
            <div style={{ fontSize: '20px', color: palette.muted, lineHeight: 1.4 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ────────────────────────── Page 2: 攝食與消化概念 ────────────────────────── */
const DigestionConceptsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="攝食與消化的本質——大分子化小分子的必要性"
      subtitle="食物中的養分巨分子無法直接穿透細胞膜，必須經過消化作用分解才能被吸收"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
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
          border: `1px solid ${palette.rustBorder}`,
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.rust,
              color: '#ffffff',
              padding: '3px 12px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            形式一
          </span>
          <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
            物理消化（機械消化）
          </span>
        </div>

        <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
          不改變物質的化學成分，僅改變食物的<strong>體積大小或分散狀態</strong>
          ，大幅增加後續酵素接觸與作用的表面積。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
          {[
            { title: '口腔牙齒咀嚼', desc: '門齒切斷、犬齒撕裂、臼齒研磨，將大塊食物嚼碎成小塊。' },
            {
              title: '消化管管壁蠕動',
              desc: '食道、胃、小腸平滑肌推擠與攪拌，使食糜與消化液充分混和。',
            },
            {
              title: '膽汁乳化脂肪',
              desc: '⚠️ 大考必考焦點：膽汁無酵素，純粹將大油滴乳化為微小油滴！',
            },
          ].map((it) => (
            <div
              key={it.title}
              style={{
                background: palette.rustLight,
                borderRadius: 12,
                padding: '12px 16px',
                borderLeft: `4px solid ${palette.rust}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.rust }}>{it.title}</div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 3, lineHeight: 1.45 }}>
                {it.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
          padding: '22px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.emerald,
              color: '#ffffff',
              padding: '3px 12px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            形式二
          </span>
          <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
            化學消化（酵素水解）
          </span>
        </div>

        <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
          利用體內各種專一性<strong>消化酵素 (Digestive enzymes)</strong>{' '}
          催化水解化學反應，將不溶性大分子徹底拆解為可溶性小分子。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
          {[
            {
              title: '澱粉 ➔ 葡萄糖',
              desc: '經唾液與胰液澱粉酶分解為麥芽糖，再由小腸雙醣酶水解為單醣。',
            },
            {
              title: '蛋白質 ➔ 胺基酸',
              desc: '經胃蛋白酶與胰蛋白酶拆成短胜肽，最後由腸胜肽酶水解為單體胺基酸。',
            },
            {
              title: '脂質 ➔ 脂肪酸＋甘油',
              desc: '乳化後由胰脂酶進行化學水解，成為能穿透絨毛膜的微小脂肪酸與甘油。',
            },
          ].map((it) => (
            <div
              key={it.title}
              style={{
                background: palette.emeraldLight,
                borderRadius: 12,
                padding: '12px 16px',
                borderLeft: `4px solid ${palette.emerald}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.emerald }}>
                {it.title}
              </div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 3, lineHeight: 1.45 }}>
                {it.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="會考觀念精準辨析：膽汁乳化脂肪是物理消化（無酵素）；胰液分解脂肪才是化學消化！" />
  </div>
);

/* ────────────────────────── Page 3: 人體消化系統全景地圖 ────────────────────────── */
const DigestiveSystemArchitecturePage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="人體消化系統構造地圖——消化管與消化腺"
      subtitle="長達約 9 公尺的單向連續通道，搭配五大消化腺協同分泌"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 30,
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
            padding: '16px 20px',
            border: `1px solid ${palette.rustBorder}`,
            borderLeft: `5px solid ${palette.rust}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            ① 消化管（食物通過的連續管腔）
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
            <strong>口腔 ➔ 咽 ➔ 食道 ➔ 胃 ➔ 小腸 ➔ 大腸 ➔ 肛門</strong>
            <br />
            管壁均具備平滑肌，透過自主節律性的<strong>蠕動</strong>將食物單向往後推進。
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
            ② 消化腺（分泌消化液的器官）
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
            • <strong>管壁內腺體：</strong>胃腺（位於胃壁）、腸腺（位於小腸壁）。
            <br />• <strong>管壁外腺體：</strong>唾腺、肝臟、胰臟（經專屬導管注入管腔）。
            <br />• ⚠️ <strong>注意：</strong>食物「只通過消化管」，<strong>絕不進入</strong>
            肝臟、膽囊或胰臟內部！
          </div>
        </div>

        <div
          style={{
            background: palette.rustLight,
            borderRadius: 14,
            padding: '14px 18px',
            border: `1px solid ${palette.rustBorder}`,
            fontSize: 20,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          📌 <strong>肝臟與膽囊的重要關係：</strong>
          肝臟是人體最大的內臟器官，<strong>負責製造膽汁</strong>；膽囊僅是
          <strong>儲存與濃縮膽汁</strong>的囊狀構造，膽囊本身不會製造膽汁！
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
            src={digestiveSystemImg}
            alt="人體的消化系統"
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
          🔍 課本教材圖 27-1：人體消化系統各器官位置（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="會考經典陷阱：食物經過口腔、咽、食道、胃、小腸、大腸、肛門；食物絕不進入肝臟與胰臟！" />
  </div>
);

/* ────────────────────────── Page 4: 口腔與食道——消化的起點 ────────────────────────── */
const MouthAndEsophagusPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="口腔與食道——食物消化的第一道關卡"
      subtitle="牙齒切割研磨、唾液初步水解澱粉，以及食道平滑肌的自主蠕動推進"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 28,
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
          border: `1px solid ${palette.rustBorder}`,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 32 }}>👄</span>
          <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
            口腔 (Mouth) 的消化作用
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: palette.rustLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.rust, marginBottom: 4 }}>
              ① 牙齒與舌頭的物理作用
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              • <strong>門齒：</strong>切斷食物；<strong>犬齒：</strong>撕裂食物；
              <strong>臼齒：</strong>磨碎食物。
              <br />• 舌頭協助攪拌食物並與唾液充分融合，捏塑成易於吞嚥的食團 (Bolus)。
            </div>
          </div>

          <div
            style={{
              background: palette.amberLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 4 }}>
              ② 唾液澱粉酶的化學分解
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              • 唾腺分泌之唾液呈<strong>弱鹼性至中性</strong>環境。
              <br />• 含有<strong>唾液澱粉酶 (Salivary amylase)</strong>，能將大分子
              <strong>澱粉分解為麥芽糖</strong>。
              <br />• 這也是為什麼米飯、饅頭在口中細細咀嚼後會漸漸散發甜味的原因！
            </div>
          </div>
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
          <span style={{ fontSize: 32 }}>⬇️</span>
          <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
            咽與食道 (Pharynx & Esophagus)
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: palette.blueLight,
              padding: '16px 20px',
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.blue, marginBottom: 4 }}>
              吞嚥反射與呼吸通道分離
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              吞嚥時，喉部的<strong>會厭軟骨</strong>
              會反射性向下蓋住氣管開口，引導食團進入食道，避免食物誤入氣管引起嗆咳窒息。
            </div>
          </div>

          <div
            style={{
              background: palette.surfaceSubtle,
              padding: '16px 20px',
              borderRadius: 14,
              borderLeft: `5px solid ${palette.blue}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
              食道平滑肌的蠕動 (Peristalsis)
            </div>
            <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
              • 食道<strong>不分泌任何消化酵素</strong>，亦<strong>不吸收養分</strong>！
              <br />• 依靠管壁平滑肌做波浪狀的收縮與舒張（蠕動），主動將食團推向胃部。
              <br />• 即使宇航員在太空無重力下，或是人體倒立吃東西，食團依然能順利進入胃中！
            </div>
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="會考觀念澄清：食道不分泌任何消化酵素，食物在食道中不會發生化學消化！" />
  </div>
);

/* ────────────────────────── Page 5: 胃的酸性環境與蛋白質消化 ────────────────────────── */
const StomachDigestionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="胃的強力攪拌與強酸殺菌——蛋白質消化的序曲"
      subtitle="pH 1.5~2.0 的鹽酸極端環境、胃蛋白酶活化與胃壁自保機制"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
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
          border: `1px solid ${palette.roseBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>🧪</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
          胃酸（鹽酸 HCl）功能
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          胃壁細胞分泌強酸性胃酸，使胃液 pH 值維持在 <strong>1.5 ~ 2.0</strong> 之間：
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '強力殺菌：消滅隨食物吞入的大多數細菌與微生物。',
            '提供最適環境：胃蛋白酶唯有在強酸下才具活性。',
            '使蛋白質變性：強酸促使複雜蛋白質結構展開便於水解。',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.roseLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.amberBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>🥩</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.amber }}>胃蛋白酶 (Pepsin)</div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          人體內<strong>第一個開始消化蛋白質</strong>的場所：
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '初步分解：將龐大的蛋白質分子水解為較短的「多胜肽 (Polypeptides)」。',
            '尚未完成：蛋白質在胃中尚未分解為最終產物（胺基酸）。',
            '醣類暫停：口腔唾液澱粉酶進入強酸胃部後會永久變性失活，停止分解醣類！',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.amberLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>🛡️</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald }}>
          胃壁防護與食糜形成
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          胃如何避免自己被強酸與胃蛋白酶消化？
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '黏液保護層：胃黏膜分泌厚層富含碳酸氫根的鹼性黏液隔絕胃酸。',
            '胃潰瘍原因：幽門螺旋桿菌感染或黏液分泌不足時，胃酸侵蝕胃壁造成潰瘍。',
            '食糜形成：胃厚實的三層肌肉強烈研磨數小時，將食物變成粥狀食糜送入十二指腸。',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.emeraldLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="會考陷阱：胃只分解蛋白質，不分解醣類與脂質！唾液澱粉酶在胃的強酸中會失活！" />
  </div>
);

/* ────────────────────────── Page 6: 小腸的三大消化液匯集 ────────────────────────── */
const SmallIntestineDigestiveJuicesPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="小腸的三大消化液匯集——膽汁、胰液與腸液"
      subtitle="膽汁乳化、胰液全能分解、腸液終點收尾——弱鹼性環境下的化學交響曲"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 30,
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
            border: `1px solid ${palette.amberBorder}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
              ① 膽汁 (Bile) —— 肝臟製造 · 膽囊儲存
            </span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                background: palette.roseLight,
                color: palette.rose,
                padding: '2px 8px',
                borderRadius: 6,
              }}
            >
              不含任何酵素！
            </span>
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 4, lineHeight: 1.5 }}>
            • 經膽管注入十二指腸。呈鹼性，可中和來自胃部的酸性食糜。
            <br />• <strong>唯一作用：物理乳化！</strong>
            將大塊脂肪顆粒分散為微小油滴，大幅擴增表面積。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.emeraldBorder}`,
            borderLeft: `5px solid ${palette.emerald}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
              ② 胰液 (Pancreatic juice) —— 胰臟分泌
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
              全能消化液！
            </span>
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 4, lineHeight: 1.5 }}>
            • 經胰管注入十二指腸，鹼性。
            <br />• 同時含有<strong>胰澱粉酶、胰蛋白酶、胰脂酶</strong>，能同時分解
            <strong>醣類、蛋白質、脂質</strong>！
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.blueBorder}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text }}>
            ③ 腸液 (Intestinal juice) —— 小腸腸腺分泌
          </div>
          <div style={{ fontSize: 20, color: palette.muted, marginTop: 4, lineHeight: 1.5 }}>
            • 含有多種雙醣酶（麥芽糖酶、蔗糖酶、乳糖酶）與腸胜肽酶，將養分徹底分解為最終小分子。
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
            src={digestivePhFactorsImg}
            alt="消化酵素與酸鹼性環境"
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
          🔍 課本教材圖 22-1：胃蛋白酶（酸性）vs 胰蛋白酶（鹼性）最適 pH 曲線對比
        </div>
      </div>
    </div>

    <PageFooter tip="會考第一大常客：膽汁由肝臟製造、無酵素、純乳化；胰液是人體唯一能分解三種主要養分的全能消化液！" />
  </div>
);

/* ────────────────────────── Page 7: 養分消化的終產物 ────────────────────────── */
const EndProductsOfDigestionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="養分消化的終點站——三大營養素的最終產物"
      subtitle="大分子逐步拆解為單體分子，唯有單體小分子才能穿透細胞膜被絨毛吸收"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 30,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minHeight: 0 }}>
        {[
          {
            nutrient: '醣類 (Carbohydrates)',
            start: '口腔開始分解（唾液澱粉酶）',
            finish: '小腸完成（胰澱粉酶、雙醣酶）',
            end: '葡萄糖 (Glucose)',
            color: palette.rust,
            light: palette.rustLight,
          },
          {
            nutrient: '蛋白質 (Proteins)',
            start: '胃開始分解（胃蛋白酶）',
            finish: '小腸完成（胰蛋白酶、腸胜肽酶）',
            end: '胺基酸 (Amino Acids)',
            color: palette.amber,
            light: palette.amberLight,
          },
          {
            nutrient: '脂質 (Lipids)',
            start: '小腸才開始分解（膽汁乳化）',
            finish: '小腸完成（胰脂酶化學分解）',
            end: '脂肪酸 ＋ 甘油',
            color: palette.rose,
            light: palette.roseLight,
          },
        ].map((item) => (
          <div
            key={item.nutrient}
            style={{
              background: palette.surface,
              borderRadius: 16,
              border: `1px solid ${palette.border}`,
              borderLeft: `6px solid ${item.color}`,
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 24, fontWeight: 800, color: item.color }}>
                {item.nutrient}
              </span>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  background: item.light,
                  color: item.color,
                  padding: '2px 10px',
                  borderRadius: 6,
                }}
              >
                終產物：{item.end}
              </span>
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.4 }}>
              • 起始分解部位：{item.start}
              <br />• 最終消化部位：{item.finish}
            </div>
          </div>
        ))}
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
            src={metabolismDigestionImg}
            alt="異化代謝作用與養分分解"
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
          🔍 課本教材圖 20-1：大分子水解為小分子的異化作用（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="會考必備起始部位記憶法：醣始於口、蛋始於胃、脂始於腸！三大養分均在小腸完成最終分解！" />
  </div>
);

/* ────────────────────────── Page 8: 小腸的吸收奇蹟——皺襞與絨毛 ────────────────────────── */
const IntestinalVilliAbsorptionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="小腸內壁的吸收奇蹟——皺襞、絨毛與微絨毛"
      subtitle="極致表面積擴增演化：微血管吸收水溶性養分、乳糜管吸收脂溶性養分"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 30,
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
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.rust}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            三大層次擴大表面積（達 200~300 平方公尺）
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>第 1 層 環狀皺襞：</strong>小腸內壁黏膜形成大量波浪狀皺褶。
            <br />• <strong>第 2 層 指狀絨毛 (Villi)：</strong>皺褶表面密布數百萬個手指狀凸起。
            <br />• <strong>第 3 層 上皮微絨毛：</strong>每個上皮細胞表面還有更微細的微絨毛。
            <br />👉 展開面積相當於一個<strong>標準網球場</strong>！吸收效率無與倫比。
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div
            style={{
              background: palette.roseLight,
              borderRadius: 14,
              padding: '14px',
              border: `1px solid ${palette.roseBorder}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.rose, marginBottom: 4 }}>
              ① 絨毛微血管（血流）
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
              • <strong>吸收對象：</strong>水溶性養分（葡萄糖、胺基酸、水溶性維生素
              B/C、礦物質、水分）。
              <br />• <strong>運送路徑：</strong>經<strong>肝門靜脈</strong>先匯集進入
              <strong>肝臟</strong>調配貯存，再進大循環。
            </div>
          </div>

          <div
            style={{
              background: palette.amberLight,
              borderRadius: 14,
              padding: '14px',
              border: `1px solid ${palette.amberBorder}`,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.amber, marginBottom: 4 }}>
              ② 中央乳糜管（淋巴）
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.45 }}>
              • <strong>吸收對象：</strong>脂溶性養分（脂肪酸、甘油、脂溶性維生素 A/D/E/K）。
              <br />• <strong>運送路徑：</strong>由<strong>淋巴循環</strong>
              運送，最終匯入鎖骨下靜脈進入血液循環。
            </div>
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
            src={intestinalVilliImg}
            alt="小腸內的絨毛"
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
          🔍 課本教材圖 28-1：小腸絨毛剖面構造與微血管、乳糜管分布（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="會考雙軌吸收分工：葡萄糖、胺基酸走微血管進肝門靜脈；脂肪酸、脂溶性維生素走乳糜管進淋巴！" />
  </div>
);

/* ────────────────────────── Page 9: 探究實驗 3-2 溫度對唾液分解澱粉的影響 ────────────────────────── */
const LabSalivaTemperaturePage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 3-2：溫度對唾液分解澱粉的影響"
      subtitle="課本必考實驗——控制變因、操作變因與甲乙丙試管呈色對照"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '720px 1fr',
        gap: 30,
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
            borderLeft: `5px solid ${palette.rust}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
            實驗變因設計：
          </div>
          <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
            • <strong>操作變因：</strong>
            <strong>溫度環境</strong>（甲：37℃ 溫水；乙：100℃ 沸水；丙：0℃ 冰水）。
            <br />• <strong>控制變因：</strong>唾液濃度與量相同、澱粉液濃度與量相同、靜置時間相同。
            <br />• <strong>應變變因：</strong>
            澱粉剩餘量（碘液檢驗）與糖分生成量（本氏液隔水加熱檢驗）。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 6 }}>
            實驗結果與酵素狀態分析表：
          </div>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            <thead>
              <tr
                style={{
                  background: palette.surfaceSubtle,
                  borderBottom: `2px solid ${palette.border}`,
                }}
              >
                <th style={{ padding: '6px' }}>試管組別</th>
                <th style={{ padding: '6px' }}>溫度</th>
                <th style={{ padding: '6px' }}>碘液反應</th>
                <th style={{ padding: '6px' }}>本氏液加熱</th>
                <th style={{ padding: '6px' }}>酵素狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
                <td style={{ padding: '6px', fontWeight: 800, color: palette.emerald }}>甲管</td>
                <td style={{ padding: '6px' }}>37℃</td>
                <td style={{ padding: '6px' }}>黃褐色（澱粉已分解）</td>
                <td style={{ padding: '6px', color: palette.rose, fontWeight: 800 }}>
                  橙紅色（有糖）
                </td>
                <td style={{ padding: '6px', color: palette.emerald, fontWeight: 800 }}>
                  活性極高
                </td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${palette.border}` }}>
                <td style={{ padding: '6px', fontWeight: 800, color: palette.rose }}>乙管</td>
                <td style={{ padding: '6px' }}>100℃</td>
                <td style={{ padding: '6px', color: palette.blue, fontWeight: 800 }}>
                  藍黑色（澱粉仍在）
                </td>
                <td style={{ padding: '6px' }}>藍色（無糖）</td>
                <td style={{ padding: '6px', color: palette.rose, fontWeight: 800 }}>
                  永久變性失活
                </td>
              </tr>
              <tr>
                <td style={{ padding: '6px', fontWeight: 800, color: palette.blue }}>丙管</td>
                <td style={{ padding: '6px' }}>0℃</td>
                <td style={{ padding: '6px', color: palette.blue, fontWeight: 800 }}>
                  藍黑色（澱粉未分解）
                </td>
                <td style={{ padding: '6px' }}>藍色（無糖）</td>
                <td style={{ padding: '6px', color: palette.blue, fontWeight: 800 }}>暫時被抑制</td>
              </tr>
            </tbody>
          </table>
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
            src={labSalivaTemperatureImg}
            alt="溫度對唾液分解澱粉的影響"
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
          🔍 課本教材圖 74-1：實驗 3-2 試管設置與溫控流程（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="會考追問考點：丙管（0℃）若移回 37℃ 溫水中，酵素活性會恢復並能成功分解澱粉！" />
  </div>
);

/* ────────────────────────── Page 10: 水分回收的大腸與排遺作用 ────────────────────────── */
const LargeIntestineAndEgestionPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="水分回收的大腸與排遺作用——消化道的終章"
      subtitle="大腸重吸收水分、腸道共生菌益處，以及排遺與排泄的本質差異"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 22,
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
          border: `1px solid ${palette.blueBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>💧</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.blue }}>
          大腸 (Large Intestine)
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          長約 1.5 公尺，由盲腸（闌尾）、結腸與直腸組成：
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '無消化酵素：大腸不分泌消化酶，不進行化學分解。',
            '水分重吸收：吸收食渣中剩餘的大部分水分與無機鹽，使糞便成形。',
            '腹瀉與便秘：大腸蠕動太快導致腹瀉脫水；蠕動太慢水分被吸太乾導致便秘。',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.blueLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>🦠</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald }}>腸道共生菌群</div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          大腸內棲息數十兆個互利共生的腸道微生物：
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '合成維生素：製造人體所需的維生素 K（參與凝血）與部分維生素 B 群。',
            '抑制病原體：佔據腸道空間與養分，形成屏障防止外來致病菌定植滋生。',
            '發酵未消化纖維：產生短鏈脂肪酸滋養腸道細胞，但伴隨產生屁氣。',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.emeraldLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.roseBorder}`,
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <div style={{ fontSize: 28 }}>⚖️</div>
        <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose }}>
          排遺 (Egestion) vs 排泄
        </div>
        <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
          會考超級陷阱！兩者生理定義完全不同：
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
          {[
            '排遺 (Egestion)：將「未被消化吸收的食物殘渣」經由肛門排出體外（排出糞便）。殘渣從未進入體細胞！',
            '排泄 (Excretion)：細胞代謝產生的含氮廢物、CO2 與多餘水分排出體外（如腎臟排尿、皮膚流汗、肺呼氣）。',
          ].map((t) => (
            <div
              key={t}
              style={{
                background: palette.roseLight,
                padding: '10px 12px',
                borderRadius: 8,
                fontSize: 20,
                color: palette.text,
              }}
            >
              • {t}
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="會考必殺題：排糞便稱為「排遺」不是排泄；排尿、排汗、呼出 CO2 才稱為「排泄」！" />
  </div>
);

/* ────────────────────────── Page 11: 會考常見消化四大易錯陷阱 ────────────────────────── */
const ExamPitfallsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考必避！人體消化與吸收四大常考易錯盲點"
      subtitle="歷屆大考最高頻失分陷阱全面解剖，強化答題防禦力"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 22,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          no: '陷阱 01',
          question: '膽汁是由膽囊製造的，而且含有消化酵素嗎？',
          wrong: '誤以為名稱叫膽汁就是膽囊製造，且消化液一定含有酵素。',
          correct:
            '【觀念矯正】錯！膽汁是由「肝臟」製造，膽囊只是暫時儲存與濃縮的倉庫！更重要的是，膽汁「不含任何消化酵素」，僅靠膽鹽對脂肪進行「物理乳化」，絕非化學分解！',
          color: palette.rose,
          light: palette.roseLight,
        },
        {
          no: '陷阱 02',
          question: '食物在消化過程中，會依序穿過肝臟與胰臟嗎？',
          wrong: '以為圖上畫在一起，食物就會像水管一樣流過肝臟和胰臟。',
          correct:
            '【觀念矯正】錯！消化管是食物唯一行經的通道（口腔➔咽➔食道➔胃➔小腸➔大腸➔肛門）。肝臟與胰臟是「消化腺」，只透過專屬導管分泌消化液注入小腸，食物絕不進入肝臟與胰臟！',
          color: palette.rust,
          light: palette.rustLight,
        },
        {
          no: '陷阱 03',
          question: '排便（拉肚子/大便）屬於人體的排泄作用嗎？',
          wrong: '將排除身體廢物統稱為排泄。',
          correct:
            '【觀念矯正】錯！大便排出的是「未被消化吸收的食物殘渣」，稱為「排遺 (Egestion)」！生物學上的「排泄 (Excretion)」專指細胞新陳代謝產生的廢物（如尿素、CO2、水）排出體外。',
          color: palette.amber,
          light: palette.amberLight,
        },
        {
          no: '陷阱 04',
          question: '胃是人體最重要的消化與吸收器官嗎？',
          wrong: '平常胃痛頻繁，以為胃包辦了一切食物消化與吸收。',
          correct:
            '【觀念矯正】錯！胃只負責初步消化蛋白質，且幾乎不吸收養分（只吸收極少量水與酒精）！人體消化最完全、吸收養分最主要的超級核心是「小腸」！',
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
            padding: '18px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            boxShadow: '0 6px 18px -4px rgba(28, 25, 23, 0.05)',
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

          <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, lineHeight: 1.3 }}>
            ❓ {card.question}
          </div>

          <div
            style={{
              fontSize: 20,
              color: palette.rose,
              background: '#fff1f2',
              padding: '4px 10px',
              borderRadius: 6,
              lineHeight: 1.35,
            }}
          >
            ❌ 常見迷思：{card.wrong}
          </div>

          <div
            style={{
              fontSize: 20,
              color: palette.text,
              background: palette.surfaceSubtle,
              padding: '8px 12px',
              borderRadius: 8,
              lineHeight: 1.45,
              marginTop: 'auto',
            }}
          >
            {card.correct}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="會考保分防禦：肝造膽汁無酵素、食物不經肝與胰、排糞排遺非排泄、小腸才是吸收王！" />
  </div>
);

/* ────────────────────────── Page 12: 滿分速記心法總整理 ────────────────────────── */
const SummaryPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="滿分速記心法——消化與吸收黃金口訣精華"
      subtitle="消化管順序、消化液分工、吸收雙軌與排遺本質四大必勝心法"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 22,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          tag: '路徑口訣',
          title: '口咽食胃小大肛，蠕動單向通遠方',
          color: palette.rust,
          light: palette.rustLight,
          border: palette.rustBorder,
          items: [
            '消化管七大站：口腔 ➔ 咽 ➔ 食道 ➔ 胃 ➔ 小腸 ➔ 大腸 ➔ 肛門',
            '平滑肌波浪狀蠕動推進，倒立亦可進食',
            '食物絕不進入肝臟、膽囊、胰臟等消化腺體',
            '食道無酵素，僅扮演單純輸送通道',
          ],
        },
        {
          tag: '消化口訣',
          title: '口醣胃蛋小腸全，肝製膽汁無酵素',
          color: palette.amber,
          light: palette.amberLight,
          border: palette.amberBorder,
          items: [
            '口腔唾液澱粉酶：澱粉初步水解成麥芽糖',
            '胃酸強酸殺菌活化胃蛋白酶：蛋白質初步分解為多胜肽',
            '肝臟製造膽汁儲於膽囊：不含酵素，純物理乳化脂肪',
            '胰臟分泌胰液：全能消化液，同時水解醣、蛋、脂！',
          ],
        },
        {
          tag: '吸收口訣',
          title: '皺襞絨毛微絨毛，水走微血脂乳糜',
          color: palette.emerald,
          light: palette.emeraldLight,
          border: palette.emeraldBorder,
          items: [
            '三層擴展結構使小腸內表面積擴大達網球場大',
            '終產物：葡萄糖、胺基酸、脂肪酸與甘油',
            '葡萄糖與胺基酸經絨毛微血管 ➔ 肝門靜脈 ➔ 肝臟',
            '脂肪酸與甘油經絨毛中央乳糜管 ➔ 淋巴循環 ➔ 靜脈',
          ],
        },
        {
          tag: '排遺口訣',
          title: '大腸吸水共生菌，糞便排遺非排泄',
          color: palette.purple,
          light: palette.purpleLight,
          border: palette.purpleBorder,
          items: [
            '大腸無消化酵素，專責回收水分與無機鹽成形糞便',
            '腸道共生菌製造維生素 K 與 B 群，保護腸道屏障',
            '排糞便為「排遺」（未消化的食物殘渣）',
            '尿液、汗液、呼氣才叫「排泄」（細胞代謝廢物）',
          ],
        },
      ].map((card) => (
        <div
          key={card.tag}
          style={{
            background: palette.surface,
            borderRadius: 20,
            border: `1px solid ${card.border}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            boxShadow: '0 6px 20px -4px rgba(28, 25, 23, 0.05)',
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
            <span style={{ fontSize: 24, fontWeight: 800, color: palette.text }}>{card.title}</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
            {card.items.map((it, idx) => (
              <div
                key={idx}
                style={{
                  fontSize: 20,
                  color: palette.muted,
                  lineHeight: 1.45,
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

    <PageFooter tip="四大速記口訣融會貫通，掌握消化管道、三大消化液、小腸雙軌吸收與排遺定義，會考滿分入袋！" />
  </div>
);

/* ────────────────────────── 演講者備忘稿 (Notes) ────────────────────────── */
export const notes: (string | undefined)[] = [
  '封面頁：引言介紹生命能量的攝入旅程。說明食物如何經過消化管一步步拆解、小腸吸收與身體細胞利用。',
  '消化概念：強調物理消化（不破壞化學鍵，增加表面積）與化學消化（酵素水解大分子）的本質區別。',
  '系統架構地圖：清楚區分消化管（7段連續管腔）與消化腺（5大分泌腺體），強調食物絕不進入肝臟與胰臟內部。',
  '口腔與食道：牙齒研磨與唾液澱粉酶分解澱粉成麥芽糖；食道無酵素但以自主蠕動將食團推進胃部。',
  '胃部消化：講解鹽酸強酸（殺菌、活化胃蛋白酶、變性蛋白質）與胃壁黏液保護層，澄清胃只消化蛋白質。',
  '小腸三重消化液：比較膽汁（肝造膽存、無酵素、純乳化）、胰液（全能消化液，醣蛋脂皆分解）與腸液。',
  '養分終產物：三種主要養分分解為葡萄糖、胺基酸、脂肪酸與甘油，強調只有單體小分子才能穿透膜被吸收。',
  '小腸絨毛吸收：解析皺襞、絨毛與微絨毛如何將表面積放大至網球場大；詳細說明微血管與乳糜管的雙軌吸收途徑。',
  '實驗3-2唾液實驗：剖析甲管（37度反應完全）、乙管（100度永久變性失活）、丙管（0度暫時抑制）的實驗呈色。',
  '大腸與排遺：說明大腸回收水分與共生菌功能，重點澄清「排遺（排便）」與「排泄（排尿汗呼氣）」的嚴格生物學差異。',
  '會考陷阱剖析：逐一破解膽汁來源與成分、食物路徑、排便非排泄、小腸才是吸收主力四大常見迷思。',
  '總結頁：帶領全班齊聲朗誦四大黃金速記口訣，完成單元核心概念整合閉環。',
];

export const meta: SlideMeta = {
  title: '人體如何獲得養分',
  createdAt: '2026-09-18T07:35:00.000Z',
};

export default [
  Cover,
  DigestionConceptsPage,
  DigestiveSystemArchitecturePage,
  MouthAndEsophagusPage,
  StomachDigestionPage,
  SmallIntestineDigestiveJuicesPage,
  EndProductsOfDigestionPage,
  IntestinalVilliAbsorptionPage,
  LabSalivaTemperaturePage,
  LargeIntestineAndEgestionPage,
  ExamPitfallsPage,
  SummaryPage,
] satisfies Page[];
