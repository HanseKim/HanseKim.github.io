// public/blog.json → src/content/posts/*.mdx 일회성 변환기.
// 변환 결과를 검수한 뒤 이 스크립트와 blog.json은 삭제한다.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const OUT_DIR = 'src/content/posts';

// URL이 되는 값이라 한글 제목 대신 명시적으로 지정한다. 파일명을 바꾸면 URL이 바뀐다.
const SLUGS = {
  0: 'about',
  1: 'chwippohae',
  2: 'neoui-haruneun',
  3: 'moigo',
  4: 'unischedule',
  5: 'realview',
  6: 'footprint',
  7: 'scanops',
};

// 기존 Card.tsx의 제목→이모지 하드코딩 맵을 그대로 옮긴 것. 로고 이미지 2건은 iconImage로 분리.
const ICONS = {
  0: { icon: '📝' },
  1: { icon: '💼' },
  2: { icon: '✏️' },
  3: { iconImage: '/icons/moigo_logo.png' },
  4: { icon: '📝' },
  5: { iconImage: '/icons/realview_logo.svg' },
  6: { icon: '📍' },
  7: { icon: '🔒' },
};

/** 펜스 밖 본문에서 MDX가 JSX로 오해하는 문자를 막는다. */
const escapeMdx = (s) => s.replace(/([{}<>])/g, '\\$1');

/** 본문에 백틱 펜스가 들어있어도 깨지지 않도록 더 긴 펜스를 고른다. */
const fenceFor = (s) => {
  const longest = (s.match(/`+/g) ?? []).reduce((m, r) => Math.max(m, r.length), 0);
  return '`'.repeat(Math.max(3, longest + 1));
};

const yamlString = (s) => `"${String(s).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

function sectionToMdx(section) {
  const { type, content } = section;

  if (type === 'heading') {
    return `## ${escapeMdx(String(content).trim())}`;
  }

  if (type === 'text') {
    const text = String(content);
    // 핵심: 여러 줄 텍스트는 원래 <pre>로 렌더돼 줄바꿈이 의미를 가졌다.
    // 마크다운은 단일 줄바꿈을 합쳐버리므로 펜스로 감싸 원문을 보존한다.
    if (text.includes('\n')) {
      const fence = fenceFor(text);
      return `${fence}text\n${text.replace(/\n+$/, '')}\n${fence}`;
    }
    return escapeMdx(text.trim());
  }

  if (type === 'list') {
    const items = Array.isArray(content) ? content : [content];
    return items.map((item) => `- ${escapeMdx(String(item).trim())}`).join('\n');
  }

  if (type === 'image') {
    const paths = (Array.isArray(content) ? content : [content])
      .map((p) => `'/${String(p).replace(/^\/+/, '')}'`)
      .join(', ');
    return `<Gallery srcs={[${paths}]} />`;
  }

  throw new Error(`알 수 없는 섹션 타입: ${type}`);
}

const posts = JSON.parse(readFileSync('public/blog.json', 'utf8'));
mkdirSync(OUT_DIR, { recursive: true });

for (const post of posts) {
  const slug = SLUGS[post.id];
  if (!slug) throw new Error(`id ${post.id}에 대응하는 슬러그가 없다`);

  const body = post.sections.map(sectionToMdx).join('\n\n');
  const needsGallery = post.sections.some((s) => s.type === 'image');

  const { icon, iconImage } = ICONS[post.id] ?? {};
  const frontmatter = [
    '---',
    `title: ${yamlString(post.title)}`,
    `date: ${yamlString(post.date)}`,
    `bgcolor: ${yamlString(post.bgcolor)}`,
    icon ? `icon: ${yamlString(icon)}` : null,
    iconImage ? `iconImage: ${yamlString(iconImage)}` : null,
    `order: ${post.id}`,
    // id 0("페이지 소개")은 date가 빈 문자열이라 날짜 정렬에서 NaN이 된다. 맨 앞에 고정한다.
    post.date.trim() === '' ? 'pinned: true' : null,
    '---',
  ].filter(Boolean).join('\n');

  const imports = needsGallery
    ? `\nimport Gallery from '../../components/Gallery.astro';\n`
    : '';

  writeFileSync(`${OUT_DIR}/${slug}.mdx`, `${frontmatter}\n${imports}\n${body}\n`, 'utf8');
  console.log(`✓ ${slug}.mdx  (섹션 ${post.sections.length}개${needsGallery ? ', 갤러리 포함' : ''})`);
}

console.log(`\n${posts.length}개 변환 완료 → ${OUT_DIR}/`);
