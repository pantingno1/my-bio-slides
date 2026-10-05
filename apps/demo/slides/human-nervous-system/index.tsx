import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import brainFunctionalAreasImg from './assets/brain-functional-areas.jpg';
import centralNervousSystemImg from './assets/central-nervous-system.jpg';
import consciousActionPathwayImg from './assets/conscious-action-pathway.jpg';
import humanNervousSystemOverviewImg from './assets/human-nervous-system-overview.jpg';
import labReactionTimeImg from './assets/lab-reaction-time.jpg';
import nervousSystemHierarchyImg from './assets/nervous-system-hierarchy.jpg';
import nervousVsEndocrineResponseImg from './assets/nervous-vs-endocrine-response.jpg';
import neuronStructureImg from './assets/neuron-structure.jpg';
import receptorsEyeEarImg from './assets/receptors-eye-ear.jpg';
import receptorsNoseTongueImg from './assets/receptors-nose-tongue.jpg';
import receptorsSkinImg from './assets/receptors-skin.jpg';
import reflexVsConsciousPathwayImg from './assets/reflex-vs-conscious-pathway.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fafafa',
    text: '#0f172a',
    accent: '#6366f1',
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
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
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
        color: palette.indigo,
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
      <span>{tip || '國中自然科學 · 生物（一上）單元 5-1 ~ 5-2 人體神經系統'}</span>
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
      background: 'radial-gradient(circle at 10% 20%, #f5f3ff 0%, #ffffff 60%, #eef2ff 100%)',
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
          color: palette.indigo,
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
        人體的協調與神經系統
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
        刺激與受器偵測環境、神經元訊號傳導、中樞與周圍協同、意識行為與反射弧全方位解析
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
            title: '感覺受器與神經元',
            desc: '眼耳鼻舌皮膚專一感測環境，細胞體、樹突與軸突的電化學訊號傳導。',
            color: palette.indigo,
            bg: palette.indigoLight,
            border: palette.indigoBorder,
          },
          {
            no: '02',
            title: '中樞與周圍神經',
            desc: '大腦、小腦、腦幹與脊髓四大樞紐，腦神經 12 對與脊神經 31 對網絡。',
            color: palette.violet,
            bg: palette.violetLight,
            border: palette.violetBorder,
          },
          {
            no: '03',
            title: '意識動作與反射弧',
            desc: '大腦決策隨意運動，脊髓與腦幹緊急避險反射，先縮後痛時序解碼。',
            color: palette.cyan,
            bg: palette.cyanLight,
            border: palette.cyanBorder,
          },
          {
            no: '04',
            title: '接尺實驗與系統比較',
            desc: '探究實驗 5-1 反應時間測定，神經與內分泌系統反應速度與範圍大對決。',
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
    <PageFooter />
  </div>
);

const SlideReceptorsEyeEar: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="感覺受器：眼睛與耳朵"
        subtitle="偵測光線與聲波振動，將物理刺激轉換為神經衝動"
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
            src={receptorsEyeEarImg}
            alt="受器眼睛耳朵"
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
              border: `1px solid ${palette.border}`,
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
                視覺受器（眼）
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                光刺激與影像感知
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>感光部位：</strong>光線穿過角膜與水晶體聚焦，在<strong>視網膜</strong>
                上的感光細胞接受刺激。
              </li>
              <li>
                <strong>傳導途徑：</strong>感光細胞將光訊號轉化為神經衝動，由<strong>視神經</strong>
                （腦神經）傳送至大腦視覺區產生視覺。
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
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 8,
                  background: palette.cyanLight,
                  color: palette.cyan,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                聽覺與平衡覺（耳）
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                聲波震動與姿勢平衡
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>聽覺機制：</strong>耳廓收集聲波，經外耳道引發鼓膜振動，聽小骨放大後傳入
                <strong>耳蝸</strong>，聽覺細胞受刺激經聽神經傳至大腦聽覺區。
              </li>
              <li>
                <strong>平衡覺機制：</strong>內耳的<strong>前庭與半規管</strong>
                內含感覺毛細胞，能偵測頭部重力傾斜與旋轉加速度。
              </li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.amberLight,
              border: `1.5px solid ${palette.amberBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.amber,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            ★ 會考要點：受器具<strong>專一性</strong>
            ，只能接受特定適當刺激（眼睛只感光、耳朵只感音與平衡）；受器受損將無法產生感覺。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideReceptorsNoseTongue: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="化學受器：鼻腔嗅覺與舌面味覺"
        subtitle="溶於黏液與唾液的化學分子偵測，交織豐富感官體驗"
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
            src={receptorsNoseTongueImg}
            alt="受器鼻腔舌頭"
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
              border: `1px solid ${palette.border}`,
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
                  background: palette.violetLight,
                  color: palette.violet,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                嗅覺受器（鼻腔）
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                氣體化學分子探測
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>分佈位置：</strong>位於鼻腔頂部黏膜上的嗅細胞，其纖毛能接觸擴散進入鼻腔的
                <strong>氣態化學分子</strong>。
              </li>
              <li>
                <strong>嗅覺疲勞現象：</strong>
                持續接觸同一種氣味，嗅覺細胞會逐漸適應而降低反應敏感度（入鮑魚之肆，久而不聞其臭），但對新氣味仍能靈敏感知。
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
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: 8,
                  background: palette.roseLight,
                  color: palette.rose,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                味覺受器（舌頭）
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                水溶性化學分子探測
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>味蕾分佈：</strong>舌表面乳突小丘內散佈著<strong>味蕾</strong>
                ，內含味覺細胞，偵測溶於唾液中的化學物質。
              </li>
              <li>
                <strong>五大基本味覺：</strong>
                酸、甜、苦、鹹、鮮。
                <em>注意：辣覺並非味覺，而是化學物質刺激舌面產生的「痛覺與溫熱感」！</em>
              </li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.indigoLight,
              border: `1.5px solid ${palette.indigoBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.indigo,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            💡 日常生活連結：感冒鼻塞時吃東西覺得「食之無味」，是因為平時品嚐佳餚是
            <strong>嗅覺與味覺共同綜合</strong>在大腦所產生的豐富風味。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideReceptorsSkin: Page = () => {
  return (
    <div style={fill}>
      <PageHeader title="體表防線：皮膚感覺受器" subtitle="觸、壓、冷、熱、痛多維度環境監控屏障" />
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
            src={receptorsSkinImg}
            alt="受器皮膚"
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
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              多元感覺受器精細分工
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.border}`,
                }}
              >
                <strong style={{ fontSize: 20, color: palette.indigo }}>觸覺與壓覺：</strong>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.muted, lineHeight: 1.5 }}
                >
                  觸覺受器靠近表皮偵測輕微接觸；壓覺受器位於真皮深層偵測重壓形變。
                </p>
              </div>
              <div
                style={{
                  background: palette.surfaceSubtle,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.border}`,
                }}
              >
                <strong style={{ fontSize: 20, color: palette.cyan }}>冷覺與熱覺（溫覺）：</strong>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.muted, lineHeight: 1.5 }}
                >
                  偵測皮膚溫度變化。溫覺具有相對性（例如溫水實驗中的相對冷熱感受）。
                </p>
              </div>
            </div>
            <div
              style={{
                background: palette.roseLight,
                padding: '14px 16px',
                borderRadius: 10,
                border: `1px solid ${palette.roseBorder}`,
              }}
            >
              <strong style={{ fontSize: 20, color: palette.rose }}>痛覺（自由神經末梢）：</strong>
              <span style={{ fontSize: 20, color: palette.text, marginLeft: 8 }}>
                分佈最廣且數量最多，當組織受到損傷或強烈化學刺激時發出警訊，是身體關鍵的自我保護機制。
              </span>
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              受器分佈密度的生理意涵
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              人體各部位皮膚的受器分佈極不均勻：<strong>指尖、手掌、唇部與舌尖</strong>
              受器密度最高，兩點辨別閾值最小，觸覺最靈敏；而<strong>背部與大腿</strong>
              受器分佈稀疏，感受相對遲鈍。
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideNeuronStructure: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="神經系統的基本單位：神經元"
        subtitle="細胞體維持代謝，神經突起單向傳遞電化學衝動"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
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
            src={neuronStructureImg}
            alt="神經細胞神經元構造"
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
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              神經元的兩大核心組成
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
              }}
            >
              <div
                style={{
                  background: palette.indigoLight,
                  borderRadius: 12,
                  padding: '16px 18px',
                  border: `1px solid ${palette.indigoBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo }}>
                  ① 細胞體 (Cell Body)
                </div>
                <p
                  style={{ margin: '8px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  內含<strong>細胞核</strong>與細胞質，負責神經細胞的代謝、生長修復與能量維持。
                </p>
              </div>

              <div
                style={{
                  background: palette.violetLight,
                  borderRadius: 12,
                  padding: '16px 18px',
                  border: `1px solid ${palette.violetBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.violet }}>
                  ② 神經突起 (Processes)
                </div>
                <p
                  style={{ margin: '8px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  由細胞質向外延伸：<strong>樹突</strong>（多而短，接收刺激）與
                  <strong>軸突</strong>（長而單一，傳出訊息）。
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              神經訊息傳遞方向與三大神經元分類
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                background: palette.surfaceSubtle,
                padding: '14px 20px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                fontSize: 22,
                fontWeight: 700,
                color: palette.indigo,
              }}
            >
              <span>刺激受器</span>
              <span>➔</span>
              <span>樹突</span>
              <span>➔</span>
              <span>細胞體</span>
              <span>➔</span>
              <span>軸突</span>
              <span>➔</span>
              <span>下個神經元或動器</span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 12,
                marginTop: 6,
              }}
            >
              <div
                style={{
                  background: palette.blueLight,
                  padding: 12,
                  borderRadius: 8,
                  fontSize: 20,
                }}
              >
                <strong style={{ color: palette.blue }}>感覺神經元：</strong>
                <div style={{ color: palette.text, marginTop: 4 }}>傳導受器訊息進入中樞神經</div>
              </div>
              <div
                style={{
                  background: palette.emeraldLight,
                  padding: 12,
                  borderRadius: 8,
                  fontSize: 20,
                }}
              >
                <strong style={{ color: palette.emerald }}>聯絡神經元：</strong>
                <div style={{ color: palette.text, marginTop: 4 }}>中樞內整合分析與轉發訊息</div>
              </div>
              <div
                style={{
                  background: palette.roseLight,
                  padding: 12,
                  borderRadius: 8,
                  fontSize: 20,
                }}
              >
                <strong style={{ color: palette.rose }}>運動神經元：</strong>
                <div style={{ color: palette.text, marginTop: 4 }}>將中樞命令傳出至肌肉或腺體</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideNervousHierarchy: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="神經系統的架構階層與分工"
        subtitle="中樞控制中心與周圍通訊網絡的精密縱深"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
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
            src={nervousSystemHierarchyImg}
            alt="神經系統的階層示意圖"
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  padding: '4px 14px',
                  borderRadius: 8,
                  background: palette.indigo,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                中樞神經系統 (CNS)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                控制、決策與整合指揮所
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>腦 (Brain)：</strong>由顱骨保護，包含<strong>大腦、小腦、腦幹</strong>
                ，主管意識思維、感覺整合、運動指令與生命中樞。
              </li>
              <li>
                <strong>脊髓 (Spinal Cord)：</strong>由脊柱保護，負責
                <strong>頸部以下身體的反射</strong>
                與大腦神經衝動上傳下達的傳導大動脈。
              </li>
            </ul>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1.5px solid ${palette.cyanBorder}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  padding: '4px 14px',
                  borderRadius: 8,
                  background: palette.cyan,
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                周圍神經系統 (PNS)
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                連結中樞與全身的訊號電纜
              </h3>
            </div>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>腦神經 (Cranial Nerves)：</strong>共 <strong>12 對</strong>
                ，由腦部直接發出，主要分佈於頭、面部器官與部分胸腹腔內臟。
              </li>
              <li>
                <strong>脊神經 (Spinal Nerves)：</strong>共 <strong>31 對</strong>
                ，由脊髓兩側發出，廣泛分佈至軀幹、四肢肌肉及內臟器官。
              </li>
            </ul>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.emeraldLight,
              border: `1.5px solid ${palette.emeraldBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.emerald,
              fontWeight: 700,
              lineHeight: 1.5,
            }}
          >
            ✓ 階層聯動路徑：外在環境刺激 ➔ 感覺受器 ➔ 周圍感覺神經 ➔ 中樞分析決策/反射 ➔
            周圍運動神經 ➔ 動器（肌肉收縮或腺體分泌產生反應）。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideNervousOverview: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="人體神經系統解剖分佈總覽"
        subtitle="腦神經 12 對與脊神經 31 對的全身防護網絡"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
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
            src={humanNervousSystemOverviewImg}
            alt="人體的神經系統分佈總覽"
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
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              神經系統兩大樞紐對照
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div
                style={{
                  background: palette.indigoLight,
                  padding: '16px 18px',
                  borderRadius: 12,
                  border: `1px solid ${palette.indigoBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo }}>
                  腦神經（12 對）
                </div>
                <ul
                  style={{
                    margin: '8px 0 0',
                    paddingLeft: 20,
                    fontSize: 20,
                    color: palette.text,
                    lineHeight: 1.55,
                  }}
                >
                  <li>由腦部直接穿出顱骨。</li>
                  <li>主控眼、耳、鼻、舌、面部肌肉與頸部感覺及運動。</li>
                  <li>部分迷走神經調節心肺與腸胃。</li>
                </ul>
              </div>

              <div
                style={{
                  background: palette.cyanLight,
                  padding: '16px 18px',
                  borderRadius: 12,
                  border: `1px solid ${palette.cyanBorder}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan }}>
                  脊神經（31 對）
                </div>
                <ul
                  style={{
                    margin: '8px 0 0',
                    paddingLeft: 20,
                    fontSize: 20,
                    color: palette.text,
                    lineHeight: 1.55,
                  }}
                >
                  <li>由脊椎骨間隙成對穿出。</li>
                  <li>主控頸部以下之軀幹、四肢肌肉及皮膚感覺。</li>
                  <li>包含感覺神經纖維與運動神經纖維。</li>
                </ul>
              </div>
            </div>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              會考黃金解題準則：受器與動器的神經連結
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              判斷神經路徑是否經過脊髓的關鍵：
              <strong>「受器或動器位於頸部以上還是頸部以下」</strong>
              。頭部受器（如看書的眼睛）由<strong>腦神經</strong>
              傳入大腦；若動器在四肢（如手寫字），命令則必須先經<strong>脊髓</strong>
              再轉<strong>脊神經</strong>到達手部肌肉！
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideCentralNervousSystem: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="中樞神經系統：腦與脊髓的核心架構"
        subtitle="骨骼重重護衛下的生命指揮塔與反射中樞"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
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
            src={centralNervousSystemImg}
            alt="中樞神經系統構造"
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span
                style={{
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.indigoLight,
                  color: palette.indigo,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                大腦
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                意識與思維的總司令部
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              分為左右兩半球。掌管<strong>感覺、意識、思考、記憶、語言、情感</strong>
              與下達<strong>隨意運動</strong>指令。左半球控制右側身體，右半球控制左側身體。
            </p>
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
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.violetLight,
                  color: palette.violet,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                小腦
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                肌肉協調與身體平衡樞紐
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              位於大腦後下方。協調<strong>全身骨骼肌</strong>
              進行精細動作（如穿針、體操），維持身體的<strong>平衡與姿態</strong>。
            </p>
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
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.roseLight,
                  color: palette.rose,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                腦幹
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                呼吸與心跳的生命中樞
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              連接大腦與脊髓。調節<strong>心跳、呼吸、血壓</strong>等維持生命之基本機能，並主管
              <strong>吞嚥、嘔吐、眨眼、打噴嚏、咳嗽</strong>等頭面部反射。
            </p>
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
                  padding: '3px 10px',
                  borderRadius: 6,
                  background: palette.cyanLight,
                  color: palette.cyan,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                脊髓
              </span>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
                軀幹反射中樞與訊號傳導高速公路
              </h3>
            </div>
            <p style={{ fontSize: 20, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
              位於脊柱椎管內。主管<strong>頸部以下身體的緊急反射</strong>
              （縮手、膝跳反射、排尿），並將腦部與全身周圍神經訊息雙向串聯傳導。
            </p>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideBrainFunctionalAreas: Page = () => {
  return (
    <div style={fill}>
      <PageHeader title="腦的功能分區與精密調節" subtitle="大腦皮質專屬機能區與交叉支配支配規律" />
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
            src={brainFunctionalAreasImg}
            alt="腦的功能區與大腦皮層"
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
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              大腦皮層核心機能分區
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div
                style={{
                  background: palette.indigoLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.indigoBorder}`,
                }}
              >
                <strong style={{ fontSize: 20, color: palette.indigo }}>感覺區 (Sensory)：</strong>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  接收視覺（枕葉）、聽覺（顳葉）、體表觸覺頂葉等訊號並產生知覺。
                </p>
              </div>
              <div
                style={{
                  background: palette.roseLight,
                  padding: '14px 16px',
                  borderRadius: 10,
                  border: `1px solid ${palette.roseBorder}`,
                }}
              >
                <strong style={{ fontSize: 20, color: palette.rose }}>運動區 (Motor)：</strong>
                <p
                  style={{ margin: '6px 0 0', fontSize: 20, color: palette.text, lineHeight: 1.5 }}
                >
                  發出神經衝動指揮特定骨骼肌進行精準收縮，產生意志動作。
                </p>
              </div>
            </div>
            <p style={{ margin: '4px 0 0', fontSize: 20, color: palette.muted, lineHeight: 1.5 }}>
              此外，額葉掌管高級思維、推理記憶、情緒控制與語言中樞（說話與書寫）。
            </p>
          </div>

          <div
            style={{
              background: palette.surface,
              borderRadius: 14,
              border: `1px solid ${palette.border}`,
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              大腦交叉支配與臨床對比
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>神經交叉支配：</strong>神經纖維在腦幹部位發生左右交叉，因此
                <strong>左腦中風</strong>常導致<strong>右半身癱瘓</strong>與語言障礙。
              </li>
              <li>
                <strong>植物人 vs 腦死：</strong>
                植物人大腦皮層受損（失去意識、無法思考），但<strong>腦幹完好</strong>
                （能自主呼吸、維持心跳）；腦死則是<strong>腦幹功能衰竭</strong>
                ，必須仰賴呼吸器維生。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideConsciousActionPathway: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="大腦主導的意識行為傳導路徑"
        subtitle="大腦思考判斷、意識主導的隨意動作完整神經迴路"
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
            src={consciousActionPathwayImg}
            alt="意識行為傳導路徑示意圖"
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
              gap: 12,
            }}
          >
            <span
              style={{
                alignSelf: 'flex-start',
                padding: '4px 12px',
                borderRadius: 8,
                background: palette.indigoLight,
                color: palette.indigo,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              典型路徑範例：看到考卷並動手作答
            </span>
            <div
              style={{
                background: palette.surfaceSubtle,
                padding: '16px 20px',
                borderRadius: 10,
                border: `1px solid ${palette.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
                fontSize: 20,
                lineHeight: 1.6,
              }}
            >
              <div>
                <strong>① 受器偵測：</strong>眼睛視網膜（感光細胞）接受考題光刺激。
              </div>
              <div>
                <strong>② 感覺傳入：</strong>視神經（腦神經）將訊息直接傳送至中樞。
              </div>
              <div>
                <strong>③ 中樞判斷：</strong>
                <strong>大腦皮層</strong>
                分析題目含意、提取記憶並下達作答命令。
              </div>
              <div>
                <strong>④ 運動傳出：</strong>大腦命令經由<strong>脊髓</strong>傳出，透過
                <strong>手部運動神經</strong>（脊神經）傳送。
              </div>
              <div>
                <strong>⑤ 動器反應：</strong>手指骨骼肌（動器）協同收縮，執筆書寫答案。
              </div>
            </div>
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
              意識行為關鍵三大特質
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>大腦必參與：</strong>所有受意識意志支配的動作，其控制中樞必定為
                <strong>大腦</strong>。
              </li>
              <li>
                <strong>反應速度較慢：</strong>
                因為訊號路徑較長且需經大腦分析判斷，反應時間通常需要數百毫秒。
              </li>
              <li>
                <strong>可經學習訓練：</strong>可透過重複練習建立熟練神經突觸連結，使反應更為敏捷。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideReflexVsConscious: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="反射作用與大腦意識傳導對比"
        subtitle="不由大腦控制的緊急避險機制與先縮後痛時序差"
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
            src={reflexVsConsciousPathwayImg}
            alt="反射作用與大腦意識傳導路徑對比"
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
                  padding: '4px 12px',
                  borderRadius: 8,
                  background: palette.roseLight,
                  color: palette.rose,
                  fontWeight: 800,
                  fontSize: 20,
                }}
              >
                反射弧 5 大核心元件
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: palette.surfaceSubtle,
                padding: '12px 16px',
                borderRadius: 8,
                fontSize: 20,
                fontWeight: 700,
                color: palette.rose,
              }}
            >
              <span>受器</span>➔<span>感覺神經</span>➔<span>反射中樞(脊髓/腦幹)</span>➔
              <span>運動神經</span>➔<span>動器</span>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
            }}
          >
            <div
              style={{
                background: palette.cyanLight,
                padding: '16px 18px',
                borderRadius: 12,
                border: `1px solid ${palette.cyanBorder}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.cyan }}>
                脊髓反射（頸部以下）
              </div>
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingLeft: 20,
                  fontSize: 20,
                  color: palette.text,
                  lineHeight: 1.5,
                }}
              >
                <li>摸熱鍋手立刻縮回。</li>
                <li>腳踩到圖釘立刻抬起。</li>
                <li>膝跳反射、嬰兒排尿反射。</li>
              </ul>
            </div>

            <div
              style={{
                background: palette.violetLight,
                padding: '16px 18px',
                borderRadius: 12,
                border: `1px solid ${palette.violetBorder}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.violet }}>
                腦幹反射（頭頸部）
              </div>
              <ul
                style={{
                  margin: '8px 0 0',
                  paddingLeft: 20,
                  fontSize: 20,
                  color: palette.text,
                  lineHeight: 1.5,
                }}
              >
                <li>強光照射瞳孔縮小。</li>
                <li>異物逼近眨眼反射。</li>
                <li>嗆到咳嗽、打噴嚏、吞嚥。</li>
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 'auto',
              background: palette.amberLight,
              border: `1.5px solid ${palette.amberBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.amber,
              lineHeight: 1.55,
            }}
          >
            <strong>⚡「先縮手後感到痛」的機轉破解：</strong>
            反射弧路徑短（受器→脊髓→動器肌肉），手部已火速縮回避險；同時脊髓內聯絡神經元向上傳遞訊息至大腦感覺區路程較遠，故
            <strong>手縮回後才感覺到疼痛並喊出聲</strong>。
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideLabReactionTime: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="探究實驗 5-1：反應時間的測定"
        subtitle="自由落體掉尺量測法，探索感官判斷與神經傳導時延"
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
            src={labReactionTimeImg}
            alt="實驗5-1反應時間的測定"
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
              實驗原理與落體距離換算
            </h3>
            <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
              受試者手指置於尺刻度 0 cm 處，測試者無預警鬆手，受試者看見尺落下立即以拇指食指夾住。
              利用自由落體公式：
              <span
                style={{
                  display: 'inline-block',
                  background: palette.surfaceSubtle,
                  padding: '2px 10px',
                  borderRadius: 6,
                  fontWeight: 700,
                  color: palette.indigo,
                  margin: '0 6px',
                }}
              >
                d = ½ · g · t²
              </span>
              夾住的公分數越大，代表<strong>反應時間越長</strong>。
            </p>
          </div>

          <div
            style={{
              background: palette.indigoLight,
              borderRadius: 14,
              border: `1.5px solid ${palette.indigoBorder}`,
              padding: '18px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: 8,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: palette.indigo }}>
              接尺實驗神經傳導完整路徑
            </div>
            <div
              style={{
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.7,
              }}
            >
              <strong>眼睛（受器）</strong>➔ <strong>視神經（腦神經）</strong>➔
              <strong>大腦（視覺分析判斷發令）</strong>➔ <strong>脊髓</strong>➔
              <strong>手部運動神經（脊神經）</strong>➔ <strong>手指骨骼肌（動器收縮夾尺）</strong>。
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
              實驗變因探究與考題關鍵
            </h3>
            <ul
              style={{
                margin: 0,
                paddingLeft: 24,
                fontSize: 20,
                color: palette.text,
                lineHeight: 1.6,
              }}
            >
              <li>
                <strong>性質判定：</strong>接尺行為經過大腦思考判斷，是<strong>意識行為</strong>
                ，絕非反射！
              </li>
              <li>
                <strong>練習效應：</strong>反覆多次練習，反應時間會<strong>縮短</strong>。
              </li>
              <li>
                <strong>干擾因素：</strong>疲勞、分心、服用藥物或飲酒會顯著<strong>延長</strong>
                反應時間。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideNervousVsEndocrine: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="刺激與反應：神經系統 vs 內分泌系統"
        subtitle="快速短暫局限的電化學信號 vs 緩慢持久廣泛的血液荷爾蒙"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '44% 56%',
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
            src={nervousVsEndocrineResponseImg}
            alt="動物植物短時間與長時間反應比較"
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
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr 1fr',
                background: palette.surfaceSubtle,
                padding: '12px 16px',
                borderBottom: `1px solid ${palette.border}`,
                fontWeight: 800,
                fontSize: 20,
              }}
            >
              <span>比較項目</span>
              <span style={{ color: palette.indigo }}>神經系統 (Nervous)</span>
              <span style={{ color: palette.amber }}>內分泌系統 (Endocrine)</span>
            </div>

            {[
              { item: '傳遞介質', n: '神經纖維（電化學衝動）', e: '血液循環（激素/荷爾蒙）' },
              { item: '反應速度', n: '極快（毫秒即時發生）', e: '緩慢（數秒、數小時甚至數年）' },
              { item: '作用範圍', n: '精確、局限特定肌肉腺體', e: '廣泛、遍及全身具受體標的器官' },
              {
                item: '持續時間',
                n: '短暫（刺激停止即刻中止）',
                e: '持久（待血液中激素緩慢分解）',
              },
            ].map((row) => (
              <div
                key={row.item}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr 1fr',
                  padding: '12px 16px',
                  borderBottom: `1px solid ${palette.border}`,
                  fontSize: 20,
                  lineHeight: 1.45,
                }}
              >
                <strong style={{ color: palette.text }}>{row.item}</strong>
                <span style={{ color: palette.text }}>{row.n}</span>
                <span style={{ color: palette.text }}>{row.e}</span>
              </div>
            ))}
          </div>

          <div
            style={{
              background: palette.emeraldLight,
              border: `1.5px solid ${palette.emeraldBorder}`,
              borderRadius: 12,
              padding: '16px 20px',
              fontSize: 20,
              color: palette.emerald,
              lineHeight: 1.55,
            }}
          >
            <strong>🤝 兩大調節系統完美協同實例：</strong>
            走在路上突然看見惡犬撲來，<strong>神經系統</strong>
            瞬間令瞳孔放大、心跳加快準備逃跑；同時交感神經刺激
            <strong>腎上腺素</strong>分泌進入血液，維持高血糖、高血壓與全身警備戰力！
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideExamPitfalls: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="會考陷阱與高頻考點精析"
        subtitle="精準破譯四大高頻混淆點，掌握會考神經單元滿分關鍵"
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
              陷阱 1
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              路徑「經不經過脊髓」的判定
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為只要是大腦控制的動作就全部經過脊髓。
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
            <strong>正確觀念：</strong>若動器位於<strong>頭面部</strong>
            （例如看見熟人『點頭』或『微笑』），由大腦經腦神經直接傳至頸部肌肉，
            <strong>不經過脊髓</strong>！只有動器或受器位於<strong>頸部以下</strong>時才經過脊髓。
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
              陷阱 2
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              縮手與感覺到痛的「因果時序」
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>以為是「先感到好燙好痛，所以手才趕快縮回」。
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
            <strong>正確觀念：</strong>縮手是<strong>脊髓反射</strong>
            （不經大腦思考），路徑極短以最快速度避險；痛覺是大腦感覺區產生，訊號上傳需要時間，因此必定是
            <strong>「先縮手，後感到痛」</strong>！
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
              陷阱 3
            </span>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: palette.text, margin: 0 }}>
              植物人與腦死的生理學界定
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>混淆植物人與腦死的受損中樞。
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
            <strong>正確觀念：</strong>
            <strong>植物人</strong>為大腦嚴重受損但
            <strong>腦幹功能正常</strong>，保有自主心跳與呼吸；<strong>腦死</strong>
            則是<strong>腦幹功能衰竭喪失</strong>，自主生命徵象完全停止。
          </p>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            border: `1.5px solid ${palette.cyanBorder}`,
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: palette.cyan,
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
              接尺實驗是意識行為而非反射
            </h3>
          </div>
          <p style={{ fontSize: 20, color: palette.text, margin: 0, lineHeight: 1.6 }}>
            <strong>錯誤認知：</strong>看到尺落下迅速夾住，誤以為是緊急反射。
          </p>
          <p
            style={{
              fontSize: 20,
              color: palette.cyan,
              margin: 0,
              fontWeight: 700,
              lineHeight: 1.6,
            }}
          >
            <strong>正確觀念：</strong>受試者必須經由<strong>大腦視覺區</strong>
            判斷尺已落下，並下達「手指合攏」命令，因此完全是<strong>意識行為</strong>
            ；若手未看見單純被敲膝蓋下韌帶彈起才是反射。
          </p>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

const SlideSummary: Page = () => {
  return (
    <div style={fill}>
      <PageHeader
        title="人體神經系統：滿分衝刺四大速記心法"
        subtitle="核心概念結構化整合，會考考點秒速回顧"
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
            background: palette.indigoLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.indigoBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.indigo }}>口訣一</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            四大中樞四字訣
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
            大腦想 · 小腦平
            <br />
            腦幹命 · 脊髓射
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
            <li>大腦：意識思考、感覺與運動。</li>
            <li>小腦：平衡協調、精細動作。</li>
            <li>腦幹：呼吸心跳生命中樞。</li>
            <li>脊髓：軀幹反射與訊息傳導。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.violetLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.violetBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.violet }}>口訣二</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            神經元傳導方向
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.violet,
              textAlign: 'center',
            }}
          >
            樹突入 · 軸突傳出
            <br />
            感覺傳入 · 運動傳出
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
            <li>樹突接收訊號入細胞體。</li>
            <li>軸突單向傳導衝動向外。</li>
            <li>感覺神經元：受器 ➔ 中樞。</li>
            <li>運動神經元：中樞 ➔ 動器。</li>
          </ul>
        </div>

        <div
          style={{
            background: palette.roseLight,
            borderRadius: 16,
            border: `1.5px solid ${palette.roseBorder}`,
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.rose }}>口訣三</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            反射避險神速訣
          </h3>
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '14px 16px',
              fontSize: 22,
              fontWeight: 800,
              color: palette.rose,
              textAlign: 'center',
            }}
          >
            不經大腦救一命
            <br />
            先縮後痛時間差
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
            <li>反射不由意志自主控制。</li>
            <li>中樞僅脊髓或腦幹。</li>
            <li>爭取黃金避險時間。</li>
            <li>痛覺後到因為上傳路遠。</li>
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
          <div style={{ fontSize: 20, fontWeight: 800, color: palette.amber }}>口訣四</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: palette.text, margin: 0 }}>
            兩大調節系統對決
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
            神經快短準如電報
            <br />
            激素慢長廣如郵件
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
            <li>神經：毫秒即時、局限目標。</li>
            <li>激素：血液運送、長效廣泛。</li>
            <li>危急時神經快速先鋒發起。</li>
            <li>內分泌接棒維持持久戰力。</li>
          </ul>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export const notes: (string | undefined)[] = [
  '各位同學大家好，今天我們進入生物第五章「生物的感應與協調」，探討人體最精密的通訊與指揮指揮網絡——神經系統。',
  '受器是神經訊息的門戶。眼睛視網膜感光細胞與內耳耳蝸聽覺細胞，將物理刺激轉化為神經衝動傳入大腦。',
  '鼻腔頂部的嗅黏膜偵測氣體化學分子，舌面味蕾偵測水溶性化學分子。注意辣味是痛覺而非味覺。',
  '皮膚是體表最龐大的感覺受器網絡。指尖與唇部受器密度最高，溫覺具有相對性，痛覺則是防護身體免受傷害的警訊。',
  '神經元是神經系統的基本結構單位。樹突接收訊息，細胞體維持代謝，軸突單向傳出神經衝動。',
  '神經系統分為中樞神經系統與周圍神經系統。中樞由腦和脊髓組成，周圍神經由腦神經與脊神經組成。',
  '人體有 12 對腦神經與 31 對脊神經。頭面部感覺與運動由腦神經掌管，頸部以下由脊神經掌管。',
  '中樞神經系統中，顱骨保護腦部，脊柱保護脊髓。大腦掌管意識，小腦維持平衡，腦幹是生命中樞，脊髓負責軀幹反射。',
  '大腦皮質分為感覺區、運動區與語言思維區，左右半球交叉支配。植物人保有腦幹功能，腦死則是腦幹功能喪失。',
  '意識行為經過大腦思考判斷。頭部動器不經脊髓，四肢動器必經脊髓傳導。',
  '反射作用不經大腦思考，由脊髓或腦幹直接下達指令。先縮手後感到痛，是因為反射弧路徑短，上傳大腦路徑較長。',
  '探究實驗 5-1 利用自由落體掉尺原理量測反應時間。接尺行為是大腦控制的意識行為，非反射動作。',
  '神經系統與內分泌系統相互協同。神經反應快、短暫、局限；內分泌系統緩慢、持久、廣泛。',
  '會考四大陷阱：經不經過脊髓、縮手與痛覺時序差、植物人與腦死差異、接尺實驗性質判定。',
  '掌握四大速記心法：大腦想小腦平腦幹命脊髓射、樹突入軸突傳出、先縮後痛救一命、神經快短準激素慢長廣。',
];

export const meta: SlideMeta = {
  title: '人體神經系統',
  createdAt: '2026-10-05T02:30:00.000Z',
};

export default [
  Cover,
  SlideReceptorsEyeEar,
  SlideReceptorsNoseTongue,
  SlideReceptorsSkin,
  SlideNeuronStructure,
  SlideNervousHierarchy,
  SlideNervousOverview,
  SlideCentralNervousSystem,
  SlideBrainFunctionalAreas,
  SlideConsciousActionPathway,
  SlideReflexVsConscious,
  SlideLabReactionTime,
  SlideNervousVsEndocrine,
  SlideExamPitfalls,
  SlideSummary,
] satisfies Page[];
