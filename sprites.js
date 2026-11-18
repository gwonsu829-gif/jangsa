(function(){const DARK='#1a1430';const FA=[{"key": "서울", "sprite": "tower"}, {"key": "부산", "sprite": "gull"}, {"key": "대구", "sprite": "apple"}, {"key": "인천", "sprite": "crab"}, {"key": "광주", "sprite": "watermelon"}, {"key": "대전", "sprite": "bread"}, {"key": "울산", "sprite": "whale"}, {"key": "세종", "sprite": "peach"}, {"key": "경기", "sprite": "rice"}, {"key": "강원", "sprite": "potato"}, {"key": "충북", "sprite": "garlic"}, {"key": "충남", "sprite": "chestnut"}, {"key": "전북", "sprite": "bibim"}, {"key": "전남", "sprite": "tea"}, {"key": "경북", "sprite": "melon"}, {"key": "경남", "sprite": "strawberry"}, {"key": "제주", "sprite": "tangerine"}];
function makeSprite(id, walk, happy) {
  const g = Array.from({ length: 20 }, () => Array(20).fill(null));
  const set = (x, y, c) => { x = Math.round(x) + 2; y = Math.round(y) + 2; if (x >= 0 && y >= 0 && x < 20 && y < 20) g[y][x] = c; };
  const sym = (x, y, c) => { set(x, y, c); set(15 - x, y, c); };
  const ell = (cx, cy, rx, ry, c) => { for (let y = -2; y < 18; y++) for (let x = -2; x < 18; x++) if (((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1) set(x, y, c); };
  const rect = (x0, y0, x1, y1, c) => { for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) set(x, y, c); };
  const over = (x, y, c) => { if (g[Math.round(y) + 2]?.[Math.round(x) + 2]) set(x, y, c); }, osym = (x, y, c) => { over(x, y, c); over(15 - x, y, c); };   // 이미 칠한 곳에만 덧칠
  const head = c => ell(7.5, 8, 6.4, 5.4, c);
  const feet = c => { rect(4, 14, 5, walk ? 14 : 15, c); rect(10, 14, 11, walk ? 15 : 14, c); if (!walk) rect(10, 15, 11, 15, c); };
  const PK = '#ff8fa8', WH = '#ffffff', K = '#2b2118';
  let eyeY = 7, eyeC = K, blush = false;
  switch (FA[id].sprite) {
    case 'rat': { const c = '#9aa7b8'; feet('#6f7c8f'); ell(2.5, 3.5, 2.7, 2.7, c); ell(12.5, 3.5, 2.7, 2.7, c); ell(2.5, 3.5, 1.3, 1.3, PK); ell(12.5, 3.5, 1.3, 1.3, PK); head(c); sym(7, 10, PK); sym(7, 11, WH); blush = true; break; }
    case 'ox': { const c = '#b0703f'; feet('#5a3a22'); for (const [x, y] of [[1, 1], [1, 2], [2, 2], [2, 3], [3, 3]]) sym(x, y, '#f3e6c4'); sym(0, 6, c); sym(0, 7, c); head(c); ell(7.5, 11, 4.2, 2.5, '#f1c9a5'); sym(6, 11, '#5a3a22'); rect(7, 3, 8, 5, WH); eyeY = 6; break; }
    case 'tiger': { const c = '#f39a2d'; feet('#c46f12'); ell(3, 3.2, 2.1, 2.1, c); ell(12, 3.2, 2.1, 2.1, c); sym(3, 3, K); head(c); ell(7.5, 11, 3.4, 2.3, WH); sym(7, 10, PK); rect(7, 3, 8, 4, K); sym(5, 3, K); sym(1, 8, K); sym(2, 8, K); sym(1, 10, K); sym(2, 10, K); eyeY = 6; break; }
    case 'rabbit': { const c = WH; feet('#d8d0e8'); for (let y = -1; y <= 4; y++) { sym(3, y, c); sym(4, y, c); sym(5, y, c); } for (let y = 0; y <= 3; y++) sym(4, y, PK); head(c); sym(7, 10, PK); blush = true; break; }
    case 'dragon': { const c = '#1fae8c'; feet('#0f7a61'); for (const [x, y] of [[4, 2], [3, 1], [3, 0], [5, 0], [4, 1], [2, 0]]) sym(x, y, '#ffd34d'); head(c); rect(7, 1, 8, 3, '#ff6a3d'); ell(7.5, 11, 4.4, 2.5, '#8be8cf'); sym(6, 11, '#0f7a61'); sym(-1, 11, '#ffd34d'); sym(-2, 12, '#ffd34d'); sym(0, 10, '#ffd34d'); eyeY = 6; break; }
    case 'snake': { const c = '#8fd046'; ell(7.5, 14, 7.4, 2.6, c); rect(2, 14, 13, 14, '#5fa02a'); ell(7.5, 7.5, 5.6, 5.2, c); sym(4, 4, '#5fa02a'); sym(6, 3, '#5fa02a'); ell(7.5, 10.5, 3, 1.6, '#e9f7a8'); sym(7, 12, '#e8372f'); sym(6, 13, '#e8372f'); eyeY = 6; break; }
    case 'horse': { const c = '#a5623a'; feet('#3a2418'); for (const [x, y] of [[3, 0], [3, 1], [4, 1], [3, 2], [4, 2], [5, 2]]) sym(x, y, c); ell(7.5, 8, 5.8, 5.6, c); rect(6, 1, 9, 3, '#3a2418'); rect(7, 0, 8, 0, '#3a2418'); rect(7, 4, 8, 8, WH); ell(7.5, 11.6, 4, 2.3, '#e0b891'); sym(6, 12, '#3a2418'); eyeY = 7; break; }
    case 'sheep': { const c = '#fff6e0'; feet('#5a4a42'); ell(3, 4.5, 3, 3, c); ell(7.5, 3.2, 3.4, 3, c); ell(12, 4.5, 3, 3, c); ell(1.2, 8, 2.4, 2.6, c); ell(13.8, 8, 2.4, 2.6, c); ell(7.5, 9, 6, 4.6, c); ell(7.5, 9.3, 4.4, 4.2, '#eac49c'); sym(7, 11, '#b07a5a'); eyeY = 8; blush = true; break; }
    case 'monkey': { const c = '#9a5b34'; feet('#5a3018'); ell(0.8, 8, 2.2, 2.2, c); ell(14.2, 8, 2.2, 2.2, c); sym(0, 8, '#f0c79a'); head(c); ell(5.3, 7.4, 2.7, 2.5, '#f0c79a'); ell(9.7, 7.4, 2.7, 2.5, '#f0c79a'); ell(7.5, 10.6, 4.2, 2.7, '#f0c79a'); sym(7, 10, '#5a3018'); rect(6, 12, 9, 12, '#b07a5a'); break; }
    case 'rooster': { const c = WH; feet('#ffb52e'); ell(7.5, 2, 3, 1.7, '#e8372f'); sym(6, 0, '#e8372f'); rect(7, -1, 8, 0, '#e8372f'); head(c); rect(7, 9, 8, 10, '#ffb52e'); rect(7, 11, 8, 12, '#e8372f'); blush = true; break; }
    case 'dog': { const c = '#e2ab6b'; feet('#8a5a34'); head(c); for (let y = 3; y <= 10; y++) { sym(0, y, '#8a5a34'); sym(1, y, '#8a5a34'); if (y < 9) sym(2, y, '#8a5a34'); } sym(2, 2, '#8a5a34'); sym(3, 2, '#8a5a34'); ell(7.5, 11, 3.5, 2.4, WH); sym(7, 10, K); sym(7, 12, PK); eyeY = 6; break; }
    case 'pig': { const c = '#ffa3b8'; feet('#d9627f'); for (const [x, y] of [[1, 3], [2, 2], [2, 3], [3, 2], [3, 3], [4, 3], [2, 1]]) sym(x, y, '#f07a98'); head(c); ell(7.5, 10.4, 3.3, 2.2, '#f07a98'); sym(6, 10, '#a8425f'); eyeY = 6; blush = true; break; }
    // ---- 지역 대전: 특산물·상징 (설정의 sprite 이름으로 고른다) ----
    case 'tower': { feet('#7c879c'); rect(7, -2, 8, 2, '#e8372f'); sym(7, -1, WH); ell(7.5, 7.5, 6.3, 4.2, '#e6ecf8'); rect(2, 5, 13, 5, '#6f8fd0'); rect(5, 11, 10, 13, '#b4bfd4'); rect(6, 12, 9, 12, '#8a97b0'); eyeY = 7; blush = true; break; }
    case 'gull': { feet('#ffb52e'); ell(0.5, 9, 2.4, 3, '#aebbd0'); ell(14.5, 9, 2.4, 3, '#aebbd0'); head(WH); sym(5, 3, '#aebbd0'); sym(6, 2, '#aebbd0'); sym(7, 2, '#aebbd0'); rect(6, 10, 9, 10, '#ffb52e'); rect(7, 11, 8, 11, '#e8872a'); eyeY = 7; break; }
    case 'apple': { feet('#8a2a22'); ell(7.5, 8.5, 6.5, 5.6, '#e8372f'); sym(7, 3, '#b3261e'); rect(7, 0, 8, 2, '#5a3a22'); ell(10.5, 1, 2, 1.2, '#5fa02a'); over(3, 5, '#ff9a8f'); over(3, 6, '#ff9a8f'); over(4, 5, '#ff9a8f'); eyeY = 8; break; }
    case 'crab': { const c = '#f2643a'; for (const [x, y] of [[0, 11], [-1, 12], [1, 13], [0, 14], [2, 14]]) sym(x, y, '#c9401f'); ell(1.5, 3.5, 2.4, 2.4, c); ell(13.5, 3.5, 2.4, 2.4, c); sym(2, 2, '#c9401f'); sym(2, 6, c); sym(2, 7, c); ell(7.5, 9.5, 6.4, 4.4, c); ell(7.5, 11.5, 4, 1.6, '#ffb08a'); eyeY = 8; blush = true; break; }
    case 'watermelon': { feet('#2f6b22'); rect(7, 1, 8, 2, '#5a3a22'); ell(7.5, 8.5, 6.5, 5.6, '#4faf3f'); for (let y = 3; y <= 13; y++) { osym(2, y, '#1f6b2a'); osym(6, y, '#1f6b2a'); if (y % 4 === 1) { osym(1, y, '#1f6b2a'); osym(7, y, '#1f6b2a'); } } eyeY = 8; break; }
    case 'bread': { feet('#8a5a2a'); ell(7.5, 9, 6.8, 5, '#e3a857'); ell(7.5, 6.5, 6, 3, '#c9792e'); osym(4, 5, '#f6dca8'); osym(5, 4, '#f6dca8'); osym(7, 4, '#f6dca8'); osym(7, 5, '#f6dca8'); eyeY = 9; blush = true; break; }
    case 'whale': { const c = '#4a8fe0'; sym(5, 0, '#9fd8ff'); sym(6, 1, '#9fd8ff'); rect(7, 1, 8, 3, '#9fd8ff'); sym(-1, 11, c); sym(-2, 10, c); ell(7.5, 9, 7, 5.2, c); ell(7.5, 12, 5, 2.2, '#e6f4ff'); eyeY = 7; blush = true; break; }
    case 'peach': { const c = '#ffb3a6'; feet('#d9627f'); rect(7, 1, 8, 2, '#5a3a22'); ell(10.5, 1.5, 2.2, 1.2, '#5fa02a'); ell(4.8, 7.5, 4.4, 4.6, c); ell(10.2, 7.5, 4.4, 4.6, c); ell(7.5, 10, 5.6, 4, c); ell(7.5, 12, 3.6, 1.6, '#ff8f9a'); rect(7, 4, 8, 6, '#f08a8a'); eyeY = 8; blush = true; break; }
    case 'rice': { feet('#2a4fa8'); ell(7.5, 10, 6.8, 4.4, '#3f6fd0'); ell(7.5, 6, 5.8, 4.4, WH); osym(4, 3, '#d5deec'); osym(6, 2, '#d5deec'); rect(1, 9, 14, 9, '#2a4fa8'); rect(2, 10, 13, 11, '#3f6fd0'); rect(5, 12, 10, 12, '#9fb8f0'); eyeY = 5; blush = true; break; }
    case 'potato': { const c = '#d8b06c'; feet('#8a6a3a'); rect(8, 2, 8, 3, '#7fbf4a'); set(9, 1, '#7fbf4a'); ell(7.5, 8.5, 6.8, 5.2, c); ell(4, 6.5, 3.4, 3.4, c); over(10, 5, '#b08a4a'); over(12, 9, '#b08a4a'); over(5, 12, '#b08a4a'); over(2, 9, '#b08a4a'); eyeY = 8; break; }
    case 'garlic': { const c = '#f6f1e4'; feet('#b8a890'); rect(7, -1, 8, 3, '#cfc4a8'); ell(7.5, 5.5, 3, 3, c); ell(7.5, 9.5, 6.4, 4.8, c); for (let y = 5; y <= 13; y++) osym(6, y, '#d9cfb8'); eyeY = 9; blush = true; break; }
    case 'chestnut': { const c = '#9a5a2a'; feet('#5a3018'); for (const [x, y] of [[7, 2], [6, 3], [7, 3], [5, 4], [6, 4], [7, 4]]) sym(x, y, c); ell(7.5, 9, 6.6, 5, c); ell(7.5, 13, 5, 1.6, '#e8cfa6'); over(3, 6, '#c98a4a'); over(4, 5, '#c98a4a'); eyeY = 8; blush = true; break; }
    case 'bibim': { feet('#2a2a32'); ell(7.5, 10, 6.8, 4.6, '#4a4a58'); ell(7.5, 6, 6, 3.6, '#f6f1e4'); rect(2, 5, 4, 7, '#5fa02a'); rect(11, 5, 13, 7, '#f28c28'); rect(4, 3, 6, 4, '#e8372f'); rect(9, 3, 11, 4, '#8a5a2a'); ell(7.5, 5.5, 2, 1.6, '#ffd34d'); rect(1, 8, 14, 8, '#2a2a32'); eyeY = 10; eyeC = WH; break; }
    case 'tea': { const c = '#cfeadf'; feet('#8fb8a8'); set(5, 2, WH); set(6, 1, WH); set(5, 0, WH); set(10, 3, WH); set(9, 2, WH); set(10, 1, WH); rect(14, 8, 15, 8, c); rect(15, 9, 15, 11, c); rect(14, 12, 15, 12, c); ell(7.5, 10, 6.2, 4.6, c); ell(7.5, 6.6, 5.4, 1.8, '#7fc24a'); over(7, 6, '#3f8a2a'); over(8, 7, '#3f8a2a'); eyeY = 9; blush = true; break; }
    case 'melon': { feet('#c99a12'); rect(7, 0, 8, 1, '#5fa02a'); ell(7.5, 8, 5.8, 6.2, '#ffd83a'); for (let y = 2; y <= 14; y++) { osym(2, y, '#fff6c8'); osym(6, y, '#fff6c8'); } eyeY = 8; blush = true; break; }
    case 'strawberry': { const gr = '#3f9a3a'; feet('#a8222a'); for (let y = 4; y <= 13; y++) { const h = y < 7 ? 6 : 6 - Math.floor((y - 6) * 0.7); rect(8 - h, y, 7 + h, y, '#f0344a'); } for (const [x, y] of [[2, 5], [6, 5], [3, 6], [5, 10], [6, 8], [7, 12]]) osym(x, y, '#ffe14d'); rect(4, 3, 11, 3, gr); sym(3, 4, gr); sym(5, 2, gr); rect(7, 1, 8, 2, gr); eyeY = 7; break; }
    case 'tangerine': { feet('#c9601a'); set(7, 2, '#5a3a22'); set(8, 2, '#5a3a22'); ell(10, 1.5, 2.4, 1.3, '#3f9a3a'); ell(7.5, 8.5, 6.5, 5.4, '#ff9a1f'); over(3, 5, '#ffc06a'); over(4, 4, '#ffc06a'); over(11, 12, '#e07a10'); over(9, 13, '#e07a10'); eyeY = 8; blush = true; break; }
  }
  if (happy) { sym(3, eyeY + 1, eyeC); sym(4, eyeY, eyeC); sym(5, eyeY + 1, eyeC); }
  else { sym(4, eyeY, eyeC); sym(4, eyeY + 1, eyeC); }
  if (blush) { sym(2, eyeY + 3, '#ffb3c1'); }
  const c = document.createElement('canvas'); c.width = c.height = 20; const x = c.getContext('2d');
  for (let yy = 0; yy < 20; yy++) for (let xx = 0; xx < 20; xx++) {
    let col = g[yy][xx];
    if (!col) { for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const n = g[yy + dy]?.[xx + dx]; if (n) { col = DARK; break; } } }
    if (col) { x.fillStyle = col; x.fillRect(xx, yy, 1, 1); }
  }
  return c;
}
window.SPRITE=(k,walk,happy)=>makeSprite(FA.findIndex(f=>f.key===k),walk?1:0,happy?1:0);})();
