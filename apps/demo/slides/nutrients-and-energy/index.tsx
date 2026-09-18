import {
  type DesignSystem,
  type Page,
  type SlideMeta,
  type SlideTransition,
  useSlidePageNumber,
  ZoomableImage,
} from '@open-slide/core';

import labFoodTestsImg from './assets/lab-food-tests.jpg';
import labStarchSugarTestImg from './assets/lab-starch-sugar-test.jpg';
import metabolismEnergyImg from './assets/metabolism-energy.jpg';
import photosynthesisNutrientsImg from './assets/photosynthesis-nutrients.jpg';

export const design: DesignSystem = {
  palette: {
    bg: '#fcfaf8',
    text: '#1c1917',
    accent: '#ea580c',
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
  orange: '#ea580c',
  orangeLight: '#fff7ed',
  orangeBorder: '#fed7aa',
  amber: '#d97706',
  amberLight: '#fffbeb',
  amberBorder: '#fde68a',
  emerald: '#059669',
  emeraldLight: '#ecfdf5',
  emeraldBorder: '#a7f3d0',
  blue: '#0284c7',
  blueLight: '#f0f9ff',
  blueBorder: '#bae6fd',
  rose: '#e11d48',
  roseLight: '#fff1f2',
  roseBorder: '#fecdd3',
  purple: '#7c3aed',
  purpleLight: '#f5f3ff',
  purpleBorder: '#ddd6fe',
  teal: '#0d9488',
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
  category = '國中自然科學 · 生物（一上）單元 3-1',
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
        background: palette.orangeLight,
        border: `1px solid ${palette.orangeBorder}`,
        color: palette.orange,
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: '0.04em',
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 20 }}>●</span>
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
      <span>{tip ? `💡 重點提示：${tip}` : '國中自然科學 · 食物中的養分與能量'}</span>
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
      background: 'radial-gradient(circle at 18% 25%, #fff7ed 0%, #fcfaf8 55%, #fef3c7 100%)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 8,
        background: 'linear-gradient(90deg, #ea580c 0%, #d97706 50%, #059669 100%)',
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
          background: palette.orangeLight,
          border: `1px solid ${palette.orangeBorder}`,
          color: palette.orange,
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
            background: palette.orange,
          }}
        />
        國中自然科學 · 生物
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
        <span>生命運轉的燃料與基石</span>
        <br />
        <span
          style={{
            background: 'linear-gradient(135deg, #ea580c 0%, #d97706 50%, #059669 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '96px',
          }}
        >
          食物中的養分與能量
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
        全方位解析六大營養素的生理功能、卡路里熱量換算、澱粉與糖分探究實驗，以及養分在生命體中的合成與能量轉換
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
          { icon: '🍞', tag: '三大產能養分', desc: '醣類、蛋白質、脂質' },
          { icon: '💧', tag: '三大調節養分', desc: '水、礦物質、維生素' },
          { icon: '🔥', tag: '熱量換算', desc: '4 · 4 · 9 kcal/g 能量法則' },
          { icon: '🧪', tag: '探究測定實驗', desc: '碘液與本氏液檢測試劑' },
        ].map((item) => (
          <div
            key={item.tag}
            style={{
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 18,
              padding: '22px 24px',
              boxShadow: '0 10px 25px -5px rgba(28, 25, 23, 0.05)',
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
                color: palette.orange,
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

/* ────────────────────────── Page 2: 六大營養素分類 ────────────────────────── */
const NutrientClassificationPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="六大營養素分類與生理角色"
      subtitle="食物提供人體維持生命、生長發育與調節機能所需的六種核心物質"
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
      {/* 左欄：能量養分 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.orangeBorder}`,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: '0 8px 24px -6px rgba(234, 88, 12, 0.08)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.orange,
              color: '#ffffff',
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            類別一
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>
            能量養分（可產生熱量）
          </span>
        </div>
        <p style={{ fontSize: 22, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
          經由細胞內的<strong>呼吸作用</strong>氧化分解後，能釋放化學能（ATP），供給各項生命活動。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
          {[
            {
              name: '醣類 (Carbohydrates)',
              cal: '4 kcal/g',
              role: '人體主要且優先消耗的能量來源。',
              example: '米飯、麵包、地瓜、水果、砂糖',
              color: palette.orange,
              bg: palette.orangeLight,
            },
            {
              name: '蛋白質 (Proteins)',
              cal: '4 kcal/g',
              role: '構成身體組織（肌肉、毛髮）、酵素與抗體的主要原料。',
              example: '瘦肉、魚類、蛋、豆類、牛奶',
              color: palette.amber,
              bg: palette.amberLight,
            },
            {
              name: '脂質 (Lipids)',
              cal: '9 kcal/g',
              role: '單位熱量最高，長期能量儲備、維持體溫、保護內臟。',
              example: '食用油、奶油、堅果、肥肉、酪梨',
              color: palette.rose,
              bg: palette.roseLight,
            },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: item.bg,
                borderRadius: 14,
                padding: '16px 20px',
                border: `1px solid ${palette.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 25, fontWeight: 800, color: item.color }}>
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: 21,
                    fontWeight: 800,
                    background: '#ffffff',
                    padding: '2px 10px',
                    borderRadius: 999,
                    color: item.color,
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  {item.cal}
                </span>
              </div>
              <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.4 }}>{item.role}</div>
              <div style={{ fontSize: 20, color: palette.muted }}>主要來源：{item.example}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 右欄：調節養分 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.blueBorder}`,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          boxShadow: '0 8px 24px -6px rgba(2, 132, 199, 0.08)',
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
            類別二
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>
            調節代謝養分（不產熱量）
          </span>
        </div>
        <p style={{ fontSize: 22, color: palette.muted, margin: 0, lineHeight: 1.5 }}>
          <strong>熱量為 0 kcal/g</strong>，但為維持細胞生理代謝、酵素活化及體液平衡所不可或缺。
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 6 }}>
          {[
            {
              name: '水 (Water)',
              cal: '0 kcal/g',
              role: '佔人體體重 60~70%。良好的生物溶劑、運輸養分與廢物、調節恆定體溫。',
              example: '飲用水、湯汁、高含水量蔬果',
              color: palette.blue,
              bg: palette.blueLight,
            },
            {
              name: '礦物質 (Minerals)',
              cal: '0 kcal/g',
              role: '構成骨骼牙齒（鈣）、攜帶氧氣（鐵）、合成甲狀腺素（碘）與維持電解質平衡。',
              example: '深綠色蔬菜、乳製品、海帶、紅肉',
              color: palette.emerald,
              bg: palette.emeraldLight,
            },
            {
              name: '維生素 (Vitamins)',
              cal: '0 kcal/g',
              role: '輔助酵素催化反應，需求量微小但缺乏會導致特定疾病（如壞血病、夜盲症）。',
              example: '新鮮蔬菜、柑橘水果、全穀雜糧、魚肝油',
              color: palette.purple,
              bg: palette.purpleLight,
            },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: item.bg,
                borderRadius: 14,
                padding: '16px 20px',
                border: `1px solid ${palette.border}`,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontSize: 25, fontWeight: 800, color: item.color }}>
                  {item.name}
                </span>
                <span
                  style={{
                    fontSize: 21,
                    fontWeight: 800,
                    background: '#ffffff',
                    padding: '2px 10px',
                    borderRadius: 999,
                    color: item.color,
                    border: `1px solid ${palette.border}`,
                  }}
                >
                  {item.cal}
                </span>
              </div>
              <div style={{ fontSize: 21, color: palette.text, lineHeight: 1.4 }}>{item.role}</div>
              <div style={{ fontSize: 20, color: palette.muted }}>主要來源：{item.example}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="牢記核心分水嶺：醣類、蛋白質、脂質提供能量；水、礦物質、維生素熱量為零！" />
  </div>
);

/* ────────────────────────── Page 3: 熱量定義與能量換算 ────────────────────────── */
const EnergyCalculationPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="養分的熱量定義與卡路里計算"
      subtitle="食物所含能量的測量標準與會考必考計算實戰解碼"
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '22px 26px',
            border: `1px solid ${palette.orangeBorder}`,
            borderLeft: `6px solid ${palette.orange}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            熱量單位：卡 (cal) vs 大卡 (kcal / 千卡)
          </div>
          <div style={{ fontSize: 22, color: palette.muted, lineHeight: 1.6 }}>
            • <strong>1 卡 (cal)：</strong>使 <strong>1 公克</strong>純水溫度上升{' '}
            <strong>1 ℃</strong> 所需的熱量。
            <br />• <strong>1 大卡 (kcal)：</strong>使 <strong>1000 公克 (1 公斤)</strong>
            純水溫度上升 <strong>1 ℃</strong> 所需熱量。
            <br />• <strong>換算關係：</strong>
            <span
              style={{
                display: 'inline-block',
                background: palette.orangeLight,
                color: palette.orange,
                fontWeight: 800,
                padding: '2px 10px',
                borderRadius: 6,
                marginLeft: 6,
              }}
            >
              1 大卡 (kcal) = 1000 卡 (cal)
            </span>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 18,
            padding: '22px 26px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 12 }}>
            三大產能養分產熱基準（必背黃金比例）
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              {
                title: '醣類',
                val: '4 kcal/g',
                desc: '首要燃料',
                col: palette.orange,
                bg: palette.orangeLight,
              },
              {
                title: '蛋白質',
                val: '4 kcal/g',
                desc: '建造修復',
                col: palette.amber,
                bg: palette.amberLight,
              },
              {
                title: '脂質',
                val: '9 kcal/g',
                desc: '高能儲備',
                col: palette.rose,
                bg: palette.roseLight,
              },
            ].map((box) => (
              <div
                key={box.title}
                style={{
                  background: box.bg,
                  borderRadius: 14,
                  padding: '16px',
                  textAlign: 'center',
                  border: `1px solid ${palette.border}`,
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 700, color: palette.muted }}>
                  {box.title}
                </div>
                <div style={{ fontSize: '32px', fontWeight: 900, color: box.col, margin: '6px 0' }}>
                  {box.val}
                </div>
                <div style={{ fontSize: 20, color: palette.muted }}>{box.desc}</div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 14,
              padding: '10px 14px',
              background: palette.surfaceSubtle,
              borderRadius: 10,
              fontSize: 20,
              color: palette.muted,
              textAlign: 'center',
            }}
          >
            ⚠️ 注意：水、礦物質、維生素 <strong>不具熱量 (0 kcal/g)</strong>，計算熱量時直接忽略！
          </div>
        </div>
      </div>

      {/* 右欄：會考計算實戰 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.border}`,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{
              background: palette.emerald,
              color: '#ffffff',
              padding: '4px 12px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 21,
            }}
          >
            會考實戰
          </span>
          <span style={{ fontSize: 28, fontWeight: 800, color: palette.text }}>
            營養標示實例計算
          </span>
        </div>

        <div
          style={{
            background: palette.surfaceSubtle,
            borderRadius: 14,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
            fontSize: 21,
            lineHeight: 1.5,
          }}
        >
          <strong>【例題】</strong>小明午餐吃了一包餅乾，包裝上的營養標示如下：
          <br />• 醣類 <strong>30 g</strong>　• 蛋白質 <strong>5 g</strong>　• 脂質{' '}
          <strong>10 g</strong>
          <br />• 鈉（礦物質） <strong>200 mg</strong>　• 水分 <strong>5 g</strong>
          <br />👉 請問小明總共攝取了多少熱量？
        </div>

        <div
          style={{
            background: palette.emeraldLight,
            border: `1px solid ${palette.emeraldBorder}`,
            borderRadius: 14,
            padding: '18px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.emerald }}>解析步驟：</div>
          <div style={{ fontSize: 22, color: palette.text, lineHeight: 1.6 }}>
            1. 醣類熱量：30 g × 4 kcal/g = <strong>120 kcal</strong>
            <br />
            2. 蛋白質熱量：5 g × 4 kcal/g = <strong>20 kcal</strong>
            <br />
            3. 脂質熱量：10 g × 9 kcal/g = <strong>90 kcal</strong>
            <br />
            4. 鈉與水：不提供熱量 = <strong>0 kcal</strong>
            <br />
            <div
              style={{
                marginTop: 8,
                paddingTop: 8,
                borderTop: `1px dashed ${palette.emeraldBorder}`,
                fontSize: 26,
                fontWeight: 900,
                color: palette.emerald,
              }}
            >
              總熱量 = 120 + 20 + 90 = 230 大卡 (kcal)
            </div>
          </div>
        </div>
      </div>
    </div>

    <PageFooter tip="會考熱量計算訣竅：醣類×4、蛋白質×4、脂質×9，水與礦物質不計，相加即為總熱量！" />
  </div>
);

/* ────────────────────────── Page 4: 醣類深度解析 ────────────────────────── */
const CarbohydratesPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="醣類（碳水化合物）——身體的首選能源"
      subtitle="由碳 (C)、氫 (H)、氧 (O) 組成，人體活動最直接、快速消耗的化學燃料"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {[
        {
          tag: '單醣類',
          badge: '最小吸收單位',
          color: palette.orange,
          light: palette.orangeLight,
          border: palette.orangeBorder,
          members: [
            { name: '葡萄糖 (Glucose)', desc: '細胞呼吸作用最直接利用的受質，血液中的血糖。' },
            { name: '果糖 (Fructose)', desc: '甜度最高，普遍存在於水果與蜂蜜中。' },
            { name: '半乳糖 (Galactose)', desc: '常與葡萄糖結合成乳糖，存於乳製品中。' },
          ],
          feature: '分子最小，可直接被小腸絨毛細胞吸收進入血液。',
        },
        {
          tag: '雙醣類',
          badge: '需消化酵素分解',
          color: palette.amber,
          light: palette.amberLight,
          border: palette.amberBorder,
          members: [
            { name: '麥芽糖 (Maltose)', desc: '由 2 個葡萄糖結合，麥芽與穀物發芽產生。' },
            { name: '蔗糖 (Sucrose)', desc: '由 1 葡萄糖 + 1 果糖結合，甘蔗與白糖主要成分。' },
            { name: '乳糖 (Lactose)', desc: '由 1 葡萄糖 + 1 半乳糖結合，哺乳動物乳汁專屬。' },
          ],
          feature: '分子較大，必須經消化道雙醣酶水解為單醣後才能吸收。',
        },
        {
          tag: '多醣類',
          badge: '儲存與結構巨分子',
          color: palette.emerald,
          light: palette.emeraldLight,
          border: palette.emeraldBorder,
          members: [
            { name: '澱粉 (Starch)', desc: '植物儲存能量的形式（如稻米、小麥、馬鈴薯）。' },
            { name: '肝醣 (Glycogen)', desc: '動物儲存能量的形式（儲存於肝臟與肌肉骨骼肌）。' },
            {
              name: '纖維素 (Cellulose)',
              desc: '構成植物細胞壁，人體無酵素分解但具促進腸蠕動功能。',
            },
          ],
          feature: '由數百至數千個葡萄糖分子聚合成，難溶於水。',
        },
      ].map((cat) => (
        <div
          key={cat.tag}
          style={{
            background: palette.surface,
            borderRadius: 20,
            border: `1px solid ${cat.border}`,
            padding: '24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            boxShadow: '0 6px 20px -4px rgba(28, 25, 23, 0.05)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 30, fontWeight: 900, color: cat.color }}>{cat.tag}</span>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                color: cat.color,
                background: cat.light,
                padding: '3px 10px',
                borderRadius: 6,
              }}
            >
              {cat.badge}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
            {cat.members.map((m) => (
              <div
                key={m.name}
                style={{
                  background: cat.light,
                  borderRadius: 12,
                  padding: '12px 14px',
                  border: `1px solid ${palette.border}`,
                }}
              >
                <div
                  style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}
                >
                  {m.name}
                </div>
                <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>{m.desc}</div>
              </div>
            ))}
          </div>

          <div
            style={{
              padding: '12px 14px',
              background: palette.surfaceSubtle,
              borderRadius: 12,
              fontSize: 20,
              color: palette.muted,
              lineHeight: 1.4,
              borderTop: `2px solid ${cat.color}`,
            }}
          >
            📌 <strong>生理特性：</strong>
            {cat.feature}
          </div>
        </div>
      ))}
    </div>

    <PageFooter tip="會考特別提醒：纖維素是多醣，但人體沒有分解纖維素的酵素，因此不能提供人體熱量！" />
  </div>
);

/* ────────────────────────── Page 5: 蛋白質與脂質深度解析 ────────────────────────── */
const ProteinAndLipidPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="蛋白質與脂質——構建組織與高能儲備"
      subtitle="蛋白質是生命物質的核心基礎，脂質是長期高效的能量庫存與保護層"
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
      {/* 蛋白質 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.amberBorder}`,
          padding: '24px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span
            style={{
              background: palette.amber,
              color: '#ffffff',
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            生命主力
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>
            蛋白質 (Proteins)
          </span>
        </div>

        <div
          style={{
            background: palette.amberLight,
            padding: '14px 18px',
            borderRadius: 14,
            fontSize: 21,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          • <strong>基本組成元素：</strong>碳 (C)、氫 (H)、氧 (O)、氮 (N)，部分含硫 (S)。
          <br />• <strong>最小基本單位：</strong>
          <strong>胺基酸 (Amino Acids)</strong>（約 20 種）。
          <br />• <strong>熱量供應：</strong>每公克提供 <strong>4 大卡</strong>。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              title: '生長與組織修復',
              desc: '構成肌肉纖維、骨骼、皮膚膠原蛋白、頭髮與指甲角蛋白的主要原料。',
            },
            {
              title: '生理機能調節',
              desc: '體內所有的「酵素（生物催化劑）」與免疫系統的「抗體」本質皆為蛋白質！',
            },
            {
              title: '物質運輸載體',
              desc: '紅血球中的血紅素（攜帶氧氣）、細胞膜上的運輸蛋白均為蛋白質構成。',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: palette.surfaceSubtle,
                borderRadius: 12,
                padding: '12px 16px',
                borderLeft: `4px solid ${palette.amber}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 脂質 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.roseBorder}`,
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
              padding: '4px 14px',
              borderRadius: 8,
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            高能儲備
          </span>
          <span style={{ fontSize: 30, fontWeight: 800, color: palette.text }}>脂質 (Lipids)</span>
        </div>

        <div
          style={{
            background: palette.roseLight,
            padding: '14px 18px',
            borderRadius: 14,
            fontSize: 21,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          • <strong>基本組成元素：</strong>碳 (C)、氫 (H)、氧 (O)（氫氧比例遠高於醣類）。
          <br />• <strong>消化分解產物：</strong>
          <strong>脂肪酸 (Fatty Acids)</strong> 與 <strong>甘油 (Glycerol)</strong>。
          <br />• <strong>熱量供應：</strong>每公克提供高達 <strong>9 大卡</strong>
          （單位熱量冠軍）。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              title: '高效長期能量庫存',
              desc: '多餘的熱量會轉化為皮下脂肪與內臟脂肪儲存，以備飢餓時期持續供應。',
            },
            {
              title: '保溫與緩衝避震',
              desc: '皮下脂肪可防止體熱快速散失；包覆於腎臟、心臟外側的脂肪層能吸收外界震盪。',
            },
            {
              title: '細胞構造與維生素載體',
              desc: '磷脂質是構成所有細胞膜的骨架；脂質有助於脂溶性維生素 (A, D, E, K) 的吸收。',
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: palette.surfaceSubtle,
                borderRadius: 12,
                padding: '12px 16px',
                borderLeft: `4px solid ${palette.rose}`,
              }}
            >
              <div style={{ fontSize: 22, fontWeight: 800, color: palette.text, marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 20, color: palette.muted, lineHeight: 1.4 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="生長發育期青少年需補充足夠蛋白質；但過量攝取脂質與醣類均會累積為人體脂肪！" />
  </div>
);

/* ────────────────────────── Page 6: 水、礦物質與維生素 ────────────────────────── */
const MicronutrientsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="水、礦物質與維生素——維持生理平衡的守護者"
      subtitle="雖然不提供熱量，但缺少任何一種，人體代謝工廠即會陷入停擺"
    />

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
        flex: 1,
        minHeight: 0,
        maxHeight: 765,
        alignItems: 'stretch',
      }}
    >
      {/* 水 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.blueBorder}`,
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 34 }}>💧</span>
          <span style={{ fontSize: 28, fontWeight: 800, color: palette.blue }}>水 (Water)</span>
        </div>

        <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
          人體重量約 <strong>60%~70%</strong> 為水分，是細胞內進行一切生物化學反應的共同溶劑環境。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { title: '優良溶劑', desc: '溶解養分（如葡萄糖、維生素C）與代謝廢物（如尿素）。' },
            { title: '物質運輸', desc: '血液的主要成分為水，負責全身循環物質的運送載具。' },
            { title: '調節體溫', desc: '比熱大，吸放熱溫度變化平緩；排汗蒸發可帶走大量體表熱量。' },
          ].map((it) => (
            <div
              key={it.title}
              style={{
                background: palette.blueLight,
                borderRadius: 10,
                padding: '12px 14px',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: palette.blue }}>{it.title}</div>
              <div style={{ fontSize: 20, color: palette.muted, marginTop: 3 }}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 礦物質 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.emeraldBorder}`,
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 34 }}>🥬</span>
          <span style={{ fontSize: 28, fontWeight: 800, color: palette.emerald }}>
            重要礦物質 (Minerals)
          </span>
        </div>

        <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
          無機鹽類，無法在體內自行合成，須從飲食攝取，構成組織或維持生理恆定。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              elem: '鈣 (Ca)',
              role: '構成骨骼與牙齒的主成分，參與血液凝固與肌肉收縮。',
              lack: '缺乏症：兒童佝僂症、成年人骨質疏鬆症。',
            },
            {
              elem: '鐵 (Fe)',
              role: '構成血紅素的重要中心原子，負責與氧氣結合運輸。',
              lack: '缺乏症：缺鐵性貧血（易疲倦、臉色蒼白）。',
            },
            {
              elem: '碘 (I)',
              role: '甲狀腺素合成的關鍵原料，調節生長發育與基礎代謝率。',
              lack: '缺乏症：甲狀腺腫大（俗稱大脖子病）。',
            },
          ].map((it) => (
            <div
              key={it.elem}
              style={{
                background: palette.emeraldLight,
                borderRadius: 10,
                padding: '12px 14px',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: palette.emerald }}>{it.elem}</div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 2 }}>{it.role}</div>
              <div style={{ fontSize: 20, color: palette.rose, fontWeight: 700, marginTop: 2 }}>
                {it.lack}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 維生素 */}
      <div
        style={{
          background: palette.surface,
          borderRadius: 20,
          border: `1px solid ${palette.purpleBorder}`,
          padding: '24px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 34 }}>🍊</span>
          <span style={{ fontSize: 28, fontWeight: 800, color: palette.purple }}>
            關鍵維生素 (Vitamins)
          </span>
        </div>

        <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.5 }}>
          有機化合物，分為<strong>脂溶性 (A, D, E, K)</strong> 與 <strong>水溶性 (B群, C)</strong>{' '}
          兩大類。
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            {
              name: '維生素 A（脂溶性）',
              role: '維持正常視覺（視網膜感光物質）、保護上皮組織健康。',
              lack: '缺乏症：夜盲症、皮膚乾燥角質化。',
            },
            {
              name: '維生素 C（水溶性）',
              role: '促進膠原蛋白合成、抗氧化、增進鐵質吸收。',
              lack: '缺乏症：壞血病（牙齦萎縮出血、傷口難癒合）。',
            },
            {
              name: '維生素 D（脂溶性）',
              role: '促進小腸吸收鈣與磷，可透過適度日曬紫外線於皮膚合成。',
              lack: '缺乏症：骨質軟化、兒童佝僂症。',
            },
          ].map((it) => (
            <div
              key={it.name}
              style={{
                background: palette.purpleLight,
                borderRadius: 10,
                padding: '12px 14px',
                border: `1px solid ${palette.border}`,
              }}
            >
              <div style={{ fontSize: 21, fontWeight: 800, color: palette.purple }}>{it.name}</div>
              <div style={{ fontSize: 20, color: palette.text, marginTop: 2 }}>{it.role}</div>
              <div style={{ fontSize: 20, color: palette.rose, fontWeight: 700, marginTop: 2 }}>
                {it.lack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <PageFooter tip="重要考點速記：缺鐵貧血、缺鈣骨鬆、缺碘大脖子；缺維A夜盲、缺維C壞血、缺維D佝僂！" />
  </div>
);

/* ────────────────────────── Page 7: 實驗 3-1 澱粉與糖分的檢測原理 ────────────────────────── */
const LabStarchSugarTestPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 3-1：澱粉與糖分的測定原理"
      subtitle="課本必考核心實驗——試劑特性、呈色反應與操作關鍵細節對比"
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
      {/* 左欄：試劑對比說明 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        {/* 碘液檢測澱粉 */}
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.amberBorder}`,
            borderLeft: `5px solid ${palette.amber}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              ① 澱粉的測定：碘液 (Iodine solution)
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
              常溫 · 絕不加熱！
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, marginTop: 8, lineHeight: 1.55 }}>
            • <strong>試劑原色：</strong>黃褐色。
            <br />• <strong>陽性反應：</strong>遇澱粉立即轉變為<strong>藍黑色</strong>。
            <br />• <strong>陰性反應：</strong>若無澱粉則維持原試劑的<strong>黃褐色</strong>。
            <br />• <strong>操作關鍵：</strong>常溫滴加即可顯色，<strong>不可加熱</strong>
            （加熱會使藍黑複合物解離褪色！）。
          </div>
        </div>

        {/* 本氏液檢測糖分 */}
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.blueBorder}`,
            borderLeft: `5px solid ${palette.blue}`,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 26, fontWeight: 800, color: palette.text }}>
              ② 糖分的測定：本氏液 (Benedict's reagent)
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
              必須隔水加熱！
            </span>
          </div>
          <div style={{ fontSize: 21, color: palette.muted, marginTop: 8, lineHeight: 1.55 }}>
            • <strong>試劑原色：</strong>淡藍色（含硫酸銅成分）。
            <br />• <strong>檢驗對象：</strong>單醣（葡萄糖、果糖）、雙醣（麥芽糖）等
            <strong>還原糖</strong>（⚠️ 蔗糖不呈色）。
            <br />• <strong>隔水加熱呈色梯次：</strong>淡藍（無糖）➔ 綠 ➔ 黃 ➔ 橙 ➔{' '}
            <strong>紅</strong>（糖濃度極高）。
            <br />• <strong>操作關鍵：</strong>
            <strong>必須隔水加熱</strong>，避免試管底部受熱不均發生暴沸噴濺。
          </div>
        </div>

        <div
          style={{
            background: palette.orangeLight,
            border: `1px solid ${palette.orangeBorder}`,
            borderRadius: 14,
            padding: '12px 18px',
            fontSize: 21,
            color: palette.text,
            lineHeight: 1.5,
          }}
        >
          💡 <strong>半定量分析特點：</strong>
          本氏液的顏色變化能指示糖分濃度多寡：
          <span style={{ color: palette.blue, fontWeight: 800 }}> 藍 (無)</span> ➔
          <span style={{ color: palette.emerald, fontWeight: 800 }}> 綠 (微量)</span> ➔
          <span style={{ color: palette.amber, fontWeight: 800 }}> 黃 (中量)</span> ➔
          <span style={{ color: palette.orange, fontWeight: 800 }}> 橙 (多量)</span> ➔
          <span style={{ color: palette.rose, fontWeight: 800 }}> 紅 (大量)</span>。
        </div>
      </div>

      {/* 右欄：實驗步驟圖照（100% 完整顯示） */}
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
            src={labStarchSugarTestImg}
            alt="實驗 3-1 澱粉與糖分的測定"
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
          🔍 課本教材圖 72-1：澱粉與糖分的檢測流程（點擊圖片可全螢幕放大查看試劑反應）
        </div>
      </div>
    </div>

    <PageFooter tip="會考第一盲點：本氏液需隔水加熱，碘液不可加熱！本氏液不能檢測蔗糖與澱粉！" />
  </div>
);

/* ────────────────────────── Page 8: 實驗 3-1 常見食物中的養分檢測 ────────────────────────── */
const LabFoodTestsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="探究實驗 3-1：常見食物中的養分測定實錄"
      subtitle="應用試劑檢驗日常生活食物中的澱粉與糖分，建立科學探究對照組"
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
      {/* 左欄：食物測試分析 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            實驗樣品檢測結果綜合對照表
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
                <th style={{ padding: '8px' }}>樣品名稱</th>
                <th style={{ padding: '8px' }}>滴加碘液結果</th>
                <th style={{ padding: '8px' }}>滴加本氏液加熱結果</th>
                <th style={{ padding: '8px' }}>主要成分判定</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: '蒸餾水（對照組）',
                  iodine: '黃褐色（不變）',
                  ben: '藍色（不變）',
                  res: '無澱粉、無糖',
                },
                { name: '澱粉液', iodine: '藍黑色', ben: '藍色（不變）', res: '含大量澱粉' },
                {
                  name: '葡萄糖液',
                  iodine: '黃褐色（不變）',
                  ben: '橙色至紅色',
                  res: '含大量糖分',
                },
                { name: '白米飯 / 麵包碎', iodine: '深藍黑色', ben: '淡藍至綠色', res: '富含澱粉' },
                {
                  name: '蘋果汁 / 芭樂汁',
                  iodine: '黃褐色（不變）',
                  ben: '黃色至橙紅色',
                  res: '富含果糖/葡萄糖',
                },
                {
                  name: '洋蔥鱗葉浸出液',
                  iodine: '黃褐色（不變）',
                  ben: '橙黃色',
                  res: '儲存糖分而非澱粉',
                },
              ].map((row, idx) => (
                <tr
                  key={row.name}
                  style={{
                    borderBottom: `1px solid ${palette.border}`,
                    background: idx % 2 === 0 ? '#ffffff' : palette.surfaceSubtle,
                  }}
                >
                  <td style={{ padding: '7px 8px', fontWeight: 700, textAlign: 'left' }}>
                    {row.name}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color: row.iodine.includes('藍黑') ? palette.blue : palette.muted,
                    }}
                  >
                    {row.iodine}
                  </td>
                  <td
                    style={{
                      padding: '7px 8px',
                      color:
                        row.ben.includes('紅') || row.ben.includes('橙')
                          ? palette.rose
                          : palette.muted,
                    }}
                  >
                    {row.ben}
                  </td>
                  <td style={{ padding: '7px 8px', fontWeight: 700, color: palette.orange }}>
                    {row.res}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            background: palette.orangeLight,
            borderRadius: 16,
            padding: '16px 20px',
            border: `1px solid ${palette.orangeBorder}`,
          }}
        >
          <div style={{ fontSize: 23, fontWeight: 800, color: palette.orange, marginBottom: 6 }}>
            🔬 實驗探究核心思維：對照組的必要性
          </div>
          <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.55 }}>
            • <strong>蒸餾水試管</strong>為<strong>空白對照組 (Control group)</strong>
            ，用以確認溶劑本身不會引起試劑變色。
            <br />• 若蒸餾水試管滴入本氏液加熱後變色，代表實驗器材受污染或試劑變質。
            <br />• 洋蔥鱗葉貯存的是<strong>葡萄糖</strong>而非澱粉，因此洋蔥汁遇碘液
            <strong>不變藍黑色</strong>，遇本氏液加熱則<strong>變色</strong>！
          </div>
        </div>
      </div>

      {/* 右欄：常見食物檢測圖片 */}
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
            src={labFoodTestsImg}
            alt="食物中所含澱粉與糖分的測定"
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
          🔍 課本教材圖 73-1：各類食物養分測定（點擊圖片可放大查看實際呈色比對）
        </div>
      </div>
    </div>

    <PageFooter tip="會考經典考題：洋蔥鱗葉細胞不含葉綠體，貯存的是糖分而非澱粉，故遇碘液不變色！" />
  </div>
);

/* ────────────────────────── Page 9: 植物養分的合成與轉換儲存 ────────────────────────── */
const NutrientUtilizationPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="植物體內養分的合成、轉變與儲存"
      subtitle="光合作用製造的葡萄糖如何轉化為各類大分子，並運送至儲存器官"
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
      {/* 左欄：養分合成與轉變路徑 */}
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
            綠色工廠的出發點：葡萄糖
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>
            植物葉肉細胞透過<strong>光合作用</strong>（水 + 二氧化碳 ➔ 葡萄糖 +
            氧氣），將太陽輻射能轉化為穩定儲存於葡萄糖化學鍵中的<strong>化學能</strong>。
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
          }}
        >
          <div style={{ fontSize: 24, fontWeight: 800, color: palette.text, marginBottom: 10 }}>
            葡萄糖的多重利用途徑：
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              {
                title: '立即呼吸產能',
                desc: '直接由粒線體進行呼吸作用分解，釋放能量供細胞生長、主動運輸等機能。',
                tag: '直接供能',
                color: palette.orange,
              },
              {
                title: '合成多醣儲存（澱粉）',
                desc: '暫時合成不溶於水的澱粉粒儲存於葉綠體；夜間轉為蔗糖經韌皮部運至根、莖儲存（如甘藷、馬鈴薯）。',
                tag: '能量儲存',
                color: palette.amber,
              },
              {
                title: '合成蛋白質與脂質',
                desc: '植物吸收土壤中的氮素，進一步合成胺基酸與蛋白質（如大豆）；或轉化為高能脂肪（如花生、芝麻）。',
                tag: '多元營養',
                color: palette.rose,
              },
              {
                title: '構建細胞壁（纖維素）',
                desc: '大量聚合為堅韌的纖維素微纖維，構成植物細胞壁，支撐植物體挺立向上。',
                tag: '結構支持',
                color: palette.emerald,
              },
            ].map((it) => (
              <div
                key={it.title}
                style={{
                  background: palette.surfaceSubtle,
                  borderRadius: 12,
                  padding: '10px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: 21, fontWeight: 700, color: palette.text }}>
                    {it.title}
                  </div>
                  <div style={{ fontSize: 20, color: palette.muted, marginTop: 2 }}>{it.desc}</div>
                </div>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 800,
                    color: it.color,
                    background: '#ffffff',
                    padding: '2px 8px',
                    borderRadius: 6,
                    border: `1px solid ${palette.border}`,
                    whiteSpace: 'nowrap',
                    marginLeft: 10,
                  }}
                >
                  {it.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右欄：教材養分利用圖表 */}
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

    <PageFooter tip="植物是自然界初級生產者，一切食物鏈中的化學能量源頭皆來自光合作用所固定的太陽能！" />
  </div>
);

/* ────────────────────────── Page 10: 代謝作用與能量轉換 ────────────────────────── */
const MetabolismEnergyPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="代謝作用與能量轉換——同化 vs 異化"
      subtitle="食物中的養分在細胞內經過化學反應，釋放能量維持生命活動的恆常運轉"
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
      {/* 左欄：能量轉換概念 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, minHeight: 0 }}>
        <div
          style={{
            background: palette.surface,
            borderRadius: 16,
            padding: '18px 22px',
            border: `1px solid ${palette.border}`,
            borderLeft: `5px solid ${palette.orange}`,
          }}
        >
          <div style={{ fontSize: 26, fontWeight: 800, color: palette.text, marginBottom: 8 }}>
            能量轉移的基本法則：吸能 vs 放能
          </div>
          <div style={{ fontSize: 21, color: palette.muted, lineHeight: 1.6 }}>
            食物中的養分含有化學能。生物體利用<strong>酵素催化</strong>
            化學反應，達成「小分子合成大分子（吸能）」與「大分子分解為小分子（放能）」的動態平衡。
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
        >
          <div
            style={{
              background: palette.emeraldLight,
              borderRadius: 14,
              padding: '16px',
              border: `1px solid ${palette.emeraldBorder}`,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.emerald, marginBottom: 6 }}>
              同化作用 (合成 · 吸收能量)
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              • <strong>過程：</strong>小分子 ➔ 大分子
              <br />• <strong>能量流向：</strong>吸收並儲存化學能
              <br />• <strong>代表實例：</strong>
              <br />
              　- 植物光合作用（造糖）
              <br />
              　- 胺基酸合成肌肉蛋白質
              <br />
              　- 葡萄糖合成肝醣儲存
            </div>
          </div>

          <div
            style={{
              background: palette.roseLight,
              borderRadius: 14,
              padding: '16px',
              border: `1px solid ${palette.roseBorder}`,
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800, color: palette.rose, marginBottom: 6 }}>
              異化作用 (分解 · 釋放能量)
            </div>
            <div style={{ fontSize: 20, color: palette.text, lineHeight: 1.5 }}>
              • <strong>過程：</strong>大分子 ➔ 小分子
              <br />• <strong>能量流向：</strong>釋放能量以供生物利用
              <br />• <strong>代表實例：</strong>
              <br />
              　- 細胞呼吸作用（葡萄糖氧化）
              <br />
              　- 消化道分解食物養分
              <br />
              　- 肝醣分解為血糖應急
            </div>
          </div>
        </div>

        <div
          style={{
            background: palette.surface,
            borderRadius: 14,
            padding: '14px 18px',
            border: `1px solid ${palette.border}`,
            fontSize: 21,
            lineHeight: 1.5,
          }}
        >
          📌 <strong>基礎代謝率 (BMR)：</strong>
          人體在完全靜止、放鬆狀態下，維持心跳、呼吸、體溫等基本生命延續所需的最低熱量消耗。
        </div>
      </div>

      {/* 右欄：教材代謝作用圖照 */}
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
            src={metabolismEnergyImg}
            alt="酵素的代謝作用"
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
          🔍 課本教材圖 20-1：代謝作用中的能量與分子轉換（點擊圖片可全螢幕放大查看）
        </div>
      </div>
    </div>

    <PageFooter tip="黃金速記心法：「合同吸、分離釋」——合成小變大吸能，分解大變小釋能！" />
  </div>
);

/* ────────────────────────── Page 11: 會考常見盲點與易錯陷阱 ────────────────────────── */
const ExamPitfallsPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="會考必避！養分與能量四大常考盲點與易錯陷阱"
      subtitle="歷屆大考最高頻失分觀念辨析，建立嚴密的解題防禦機制"
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
          question: '纖維素是醣類，所以可以提供人體熱量？',
          wrong: '誤以為纖維素由葡萄糖組成，就能被人體消化產能。',
          correct:
            '【觀念矯正】人體消化道內「沒有」能分解纖維素的酵素！因此纖維素完全無法被人體吸收產熱（熱量視為 0 kcal）。但纖維素能增加糞便體積、促進腸道蠕動，是健康不可或缺的膳食纖維。',
          color: palette.rose,
          light: palette.roseLight,
        },
        {
          no: '陷阱 02',
          question: '可以用本氏液來檢驗蔗糖（二砂糖/砂糖）嗎？',
          wrong: '誤以為只要是甜的糖類，本氏液加熱都會呈紅色。',
          correct:
            '【觀念矯正】本氏液只能檢測「還原糖」（如葡萄糖、果糖、麥芽糖）。蔗糖是「非還原糖」，單獨加熱本氏液「完全不會變色（維持淡藍色）」！除非先加酸或酵素水解蔗糖為單醣。',
          color: palette.orange,
          light: palette.orangeLight,
        },
        {
          no: '陷阱 03',
          question: '碘液測定澱粉時，要像本氏液一樣加熱嗎？',
          wrong: '將兩種試劑操作混淆，以為化學反應加熱速度更快。',
          correct:
            '【觀念矯正】碘液測定澱粉「絕對不可以加熱」！碘分子是鑲嵌在澱粉螺旋結構中才顯藍黑色，加熱會破壞該結構使藍黑色完全褪去！本氏液反應才必須隔水加熱。',
          color: palette.amber,
          light: palette.amberLight,
        },
        {
          no: '陷阱 04',
          question: '喝水、吃維他命丸可以提供考試充沛的體力能量嗎？',
          wrong: '將維持精神、調節機能的「健康」與提供動力的「熱量」劃上等號。',
          correct:
            '【觀念矯正】水、礦物質、維生素的產熱值皆為「0 kcal/g」！真正能產生 ATP 提供體力的只有「醣類、蛋白質、脂質」。維生素僅是輔助酵素工作的零件，無法作為燃料燃燒。',
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

    <PageFooter tip="審題防禦：看到「提供能量」先找醣蛋脂；看到「加熱檢測」鎖定本氏液！" />
  </div>
);

/* ────────────────────────── Page 12: 滿分速記心法總整理 ────────────────────────── */
const SummaryPage: Page = () => (
  <div style={fill}>
    <PageHeader
      title="滿分速記心法——養分與能量黃金口訣精華"
      subtitle="濃縮全單元核心觀念，會考上榜必備的四組關鍵記憶心法"
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
          tag: '產熱口訣',
          title: '醣四蛋四脂質九，水維礦物零能量',
          color: palette.orange,
          light: palette.orangeLight,
          border: palette.orangeBorder,
          items: [
            '1 公克醣類 ➔ 4 大卡 (kcal)',
            '1 公克蛋白質 ➔ 4 大卡 (kcal)',
            '1 公克脂質 ➔ 9 大卡 (kcal)（產熱之王）',
            '水、維生素、礦物質 ➔ 0 大卡（調節不產熱）',
            '1 大卡 (kcal) = 1000 卡 (cal)',
          ],
        },
        {
          tag: '試劑口訣',
          title: '碘澱藍黑不加熱，本糖隔水綠到紅',
          color: palette.blue,
          light: palette.blueLight,
          border: palette.blueBorder,
          items: [
            '碘液：原色黃褐，遇澱粉呈藍黑（常溫滴加）',
            '本氏液：原色淡藍，遇還原糖需隔水加熱',
            '糖濃度階梯：藍 (無) ➔ 綠 ➔ 黃 ➔ 橙 ➔ 紅 (極多)',
            '蒸餾水不變色，作為空白對照組',
            '蔗糖不可用本氏液直接驗出',
          ],
        },
        {
          tag: '儲存口訣',
          title: '植物儲澱動物醣，多餘熱量轉脂肪',
          color: palette.emerald,
          light: palette.emeraldLight,
          border: palette.emeraldBorder,
          items: [
            '植物光合作用製糖，轉為澱粉長久儲存（如甘藷、米麥）',
            '動物過剩葡萄糖轉化為「肝醣」（存於肝臟與骨骼肌）',
            '肝醣儲備有限，長期多餘熱量全數轉化為皮下與內臟脂肪',
            '植物細胞壁為纖維素，動物無酵素分解',
          ],
        },
        {
          tag: '微量口訣',
          title: '缺鐵貧血缺鈣骨，缺乏維Ｃ齒齦血',
          color: palette.purple,
          light: palette.purpleLight,
          border: palette.purpleBorder,
          items: [
            '鈣：骨骼、牙齒、血液凝固（缺鈣骨鬆佝僂）',
            '鐵：血紅素核心攜帶氧氣（缺鐵貧血疲倦）',
            '碘：甲狀腺素原料（缺碘大脖子腫大）',
            '維生素 A 顧眼睛（缺維 A 夜盲乾眼）',
            '維生素 C 膠原蛋白（缺維 C 壞血牙齦出血）',
            '維生素 D 助鈣吸收（適度日曬紫外線可合成）',
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
            boxShadow: '0 6px 20px -4px rgba(28, 25, 23, 0.05)',
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

    <PageFooter tip="牢記四大黃金口訣，融會貫通產熱換算與實驗原理，食物中的養分與能量滿分入袋！" />
  </div>
);

/* ────────────────────────── 演講者備忘稿 (Notes) ────────────────────────── */
export const notes: (string | undefined)[] = [
  '封面頁：引導學生進入單元 3-1，說明食物不僅是填飽肚子的日常，更是細胞能量運轉與身體組織建構的化學分子來源。',
  '六大營養素：強調能量養分（醣、蛋白質、脂質）與調節養分（水、礦物質、維生素）的本質區別。讓學生記住後三者熱量為零。',
  '熱量計算：詳細推導卡 (cal) 與大卡 (kcal) 定義，以包裝餅乾為例帶領全班親自演練 4、4、9 的乘法運算與相加。',
  '醣類分析：拆解單醣、雙醣、多醣層級結構。強調葡萄糖是血糖、澱粉是植物儲能、肝醣是動物儲能，特別強調人體無法消化纖維素。',
  '蛋白質與脂質：分析蛋白質在生長發育、酵素與抗體中的核心地位；說明脂質 9 kcal/g 單位熱量最高、保溫保護器官與構成細胞膜特點。',
  '微量養分：盤點水（60~70%）、重要礦物質（鈣、鐵、碘）與維生素（A、C、D）的生理功能及其缺乏症。',
  '實驗3-1原理：說明碘液（常溫不加熱、遇澱粉藍黑）與本氏液（隔水加熱、遇糖變綠黃橙紅）的反應特點與操作防護。',
  '實驗3-1實測：對照不同食物樣品呈色。提醒學生注意蒸餾水對照組的科學意義，以及洋蔥儲存糖分遇碘液不變色的經典考題。',
  '養分利用：結合光合作用圖表，說明葉綠體製造的葡萄糖如何轉換為澱粉、蛋白質、脂質，並經由韌皮部運送至儲藏器官。',
  '代謝與能量：結合代謝作用圖表，複習「合同吸、分離釋」觀念，說明食物養分經過消化分解與呼吸作用釋能的完整閉環。',
  '易錯陷阱：逐一破解纖維素熱量、蔗糖檢驗、碘液加熱褪色、維他命產能四大歷屆大考高頻失分題。',
  '總結頁：帶領全班朗讀四大速記口訣，完成單元知識閉環。',
];

export const meta: SlideMeta = {
  title: '食物中的養分與能量',
  createdAt: '2026-09-18T06:19:00.000Z',
};

export default [
  Cover,
  NutrientClassificationPage,
  EnergyCalculationPage,
  CarbohydratesPage,
  ProteinAndLipidPage,
  MicronutrientsPage,
  LabStarchSugarTestPage,
  LabFoodTestsPage,
  NutrientUtilizationPage,
  MetabolismEnergyPage,
  ExamPitfallsPage,
  SummaryPage,
] satisfies Page[];
