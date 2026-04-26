// questions.js
const DSE_Library = {
    easy: [
        { q: "若 2x + 5 = 11, 則 x = ?", opts: ["2", "3", "4", "5"], ans: 1 },
        { q: "計算 15% of 200", opts: ["20", "30", "40", "50"], ans: 1 },
        { q: "下列哪項是質數？", opts: ["9", "15", "21", "23"], ans: 3 }
    ],
    normal: [
        { q: "若 log 2 = a, log 3 = b, 則 log 12 = ?", opts: ["2a+b", "a+2b", "a+b^2", "a^2+b"], ans: 0 },
        { q: "拋物線 y = x² - 4x + 7 的頂點座標是？", opts: ["(2, 3)", "(-2, 3)", "(2, 7)", "(4, 7)"], ans: 0 },
        { q: "等差數列 3, 7, 11... 的第 10 項是？", opts: ["39", "43", "36", "40"], ans: 0 }
    ],
    hard: [
        { q: "圓方程 x² + y² - 4x + 6y - 3 = 0 的半徑是？", opts: ["√10", "4", "2", "16"], ans: 1 },
        { q: "一袋中有 3 紅 2 藍球，隨機取兩球。兩球同色的概率是？", opts: ["1/5", "2/5", "3/10", "4/10"], ans: 1 },
        { q: "若 tan θ = 1 且 180° < θ < 270°，則 θ = ?", opts: ["210°", "225°", "240°", "235°"], ans: 2 }
    ]
};

const algebraQuestions = [
    // ==========================================
    // 第一階：基礎代數 (15題) - 測試基本概念、展開、因式分解、簡易方程
    // ==========================================
    { level: 1, difficulty: "basic", question: "化簡 a^3 * a^5", options: ["a^15", "a^8", "2a^8", "a^2"], answer: 1 },
    { level: 1, difficulty: "basic", question: "化簡 (3x)^2", options: ["3x^2", "6x^2", "9x^2", "9x"], answer: 2 },
    { level: 1, difficulty: "basic", question: "因式分解 x^2 - 16", options: ["(x-4)^2", "(x-8)(x+2)", "(x-4)(x+4)", "(x-16)(x+1)"], answer: 2 },
    { level: 1, difficulty: "basic", question: "因式分解 x^2 - 5x + 6", options: ["(x-2)(x-3)", "(x+2)(x+3)", "(x-1)(x-6)", "(x+1)(x-6)"], answer: 0 },
    { level: 1, difficulty: "basic", question: "展開 (x+3)^2", options: ["x^2+9", "x^2+3x+9", "x^2+6x+9", "x^2+6x+6"], answer: 2 },
    { level: 1, difficulty: "basic", question: "若 y = 3x - 1，將 x 寫成主項：", options: ["x=(y-1)/3", "x=(y+1)/3", "x=3y+1", "x=y/3+1"], answer: 1 },
    { level: 1, difficulty: "basic", question: "解方程：4x - 5 = 11", options: ["x=1.5", "x=3", "x=4", "x=16"], answer: 2 },
    { level: 1, difficulty: "basic", question: "解不等式：3x + 2 > 8", options: ["x>2", "x<2", "x>3", "x<3"], answer: 0 },
    { level: 1, difficulty: "basic", question: "解不等式：-2x >= 6", options: ["x >= -3", "x <= -3", "x >= 3", "x <= 3"], answer: 1 },
    { level: 1, difficulty: "basic", question: "解聯立方程：x+y=7, x-y=3，x=?", options: ["2", "4", "5", "10"], answer: 2 },
    { level: 1, difficulty: "basic", question: "若 x:y = 1:2，y:z = 2:3，求 x:z", options: ["1:3", "2:3", "1:6", "3:1"], answer: 0 },
    { level: 1, difficulty: "basic", question: "將 60 增加 20% 後是多少？", options: ["72", "80", "120", "48"], answer: 0 },
    { level: 1, difficulty: "basic", question: "設 f(x) = 3x - 4，求 f(2)", options: ["-2", "2", "6", "10"], answer: 1 },
    { level: 1, difficulty: "basic", question: "若 a/b = 3/4，求 (a+b)/b", options: ["3/4", "4/3", "7/4", "7/3"], answer: 2 },
    { level: 1, difficulty: "basic", question: "化簡 2(x - 3) - 3(x - 2)", options: ["-x-12", "-x", "-x-5", "5x-12"], answer: 1 },

    // ==========================================
    // 第二階：中階代數 (15題) - 二次方程、函數、變分、進階不等式
    // ==========================================
    { level: 1, difficulty: "intermediate", question: "解二次方程：x^2 - 8x + 15 = 0", options: ["x=3或5", "x=-3或-5", "x=1或15", "x=-1或-15"], answer: 0 },
    { level: 1, difficulty: "intermediate", question: "若 x^2 + 4x + k = 0 有等根，求 k", options: ["2", "4", "8", "16"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "餘式定理：(x^2 - 3x + 5) 除以 (x-2) 的餘數是？", options: ["1", "3", "5", "7"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "因式定理：若 x-1 是 x^3 - kx + 2 的因式，k=?", options: ["1", "2", "3", "4"], answer: 2 },
    { level: 1, difficulty: "intermediate", question: "y=x^2 與 y=x+2 交點的 x 坐標是？(取正數)", options: ["1", "2", "3", "4"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "正變：y 隨 x 正變。x=2時y=10；x=3時y=?", options: ["12", "15", "18", "20"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "反變：y 隨 x 反變。x=4時y=3；x=2時y=?", options: ["1.5", "4", "6", "8"], answer: 2 },
    { level: 1, difficulty: "intermediate", question: "指數運算：8^(-1/3) = ?", options: ["-2", "1/2", "1/8", "-1/2"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "化簡分式：(1/x) + (1/2x)", options: ["1/3x", "2/3x", "3/2x", "2/x"], answer: 2 },
    { level: 1, difficulty: "intermediate", question: "解複合不等式：x > 2 且 2x < 10", options: ["2 < x < 5", "x > 2", "x < 5", "無解"], answer: 0 },
    { level: 1, difficulty: "intermediate", question: "若 f(x) = x^2，求 f(x-1) 的展開式", options: ["x^2-1", "x^2+1", "x^2-2x+1", "x^2-x+1"], answer: 2 },
    { level: 1, difficulty: "intermediate", question: "二進制 1011(2) 轉換為十進制是？", options: ["9", "10", "11", "13"], answer: 2 },
    { level: 1, difficulty: "intermediate", question: "拋物線 y = (x-3)^2 + 4 的頂點坐標是？", options: ["(3, 4)", "(-3, 4)", "(3, -4)", "(-3, -4)"], answer: 0 },
    { level: 1, difficulty: "intermediate", question: "等差數列：2, 5, 8... 第10項是？", options: ["27", "29", "30", "32"], answer: 1 },
    { level: 1, difficulty: "intermediate", question: "若 a = (b+1)/(b-1)，求 b", options: ["(a+1)/(a-1)", "(a-1)/(a+1)", "a/(a-1)", "(a+1)/a"], answer: 0 },

    // ==========================================
    // 第三階：進階代數 (15題) - 複數、對數(Log)、進階數列、聯變
    // ==========================================
    { level: 1, difficulty: "advanced", question: "複數化簡：i^13 = ?", options: ["1", "-1", "i", "-i"], answer: 2 },
    { level: 1, difficulty: "advanced", question: "複數運算：(1+i)(2-i) = ?", options: ["3-i", "3+i", "1+i", "2-i"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "對數運算：log(1000) - log(10) = ?", options: ["1", "2", "3", "990"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "解對數方程：log2(x) + log2(2) = 3", options: ["2", "3", "4", "8"], answer: 2 },
    { level: 1, difficulty: "advanced", question: "解指數方程：3^(2x) = 27", options: ["1", "1.5", "2", "3"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "方程 2x^2 - 6x + 1 = 0 的兩根之和？", options: ["-3", "3", "6", "1/2"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "方程 3x^2 - 5x + 2 = 0 的兩根之積？", options: ["5/3", "-5/3", "2/3", "-2/3"], answer: 2 },
    { level: 1, difficulty: "advanced", question: "z 隨 x 正變及 y 正變。x增20%，y增10%，z增？", options: ["30%", "32%", "10%", "200%"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "等比數列：3, 6, 12... 第5項是？", options: ["24", "36", "48", "96"], answer: 2 },
    { level: 1, difficulty: "advanced", question: "無限等比數列求和：1 + 1/2 + 1/4 + ... = ?", options: ["1.5", "2", "2.5", "無限大"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "圖像平移：將 y=f(x) 向右移2單位，新方程是？", options: ["y=f(x)+2", "y=f(x)-2", "y=f(x+2)", "y=f(x-2)"], answer: 3 },
    { level: 1, difficulty: "advanced", question: "求 y = x^2 - 4x + 7 的極小值 (Minimum value)", options: ["2", "3", "4", "7"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "十六進制 A1(16) 轉換為十進制是？", options: ["160", "161", "162", "171"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "若 log(y) = 2*log(x) + 1，將 y 表達為 x 的函數", options: ["y=2x+1", "y=10x^2", "y=x^2+10", "y=20x"], answer: 1 },
    { level: 1, difficulty: "advanced", question: "已知 f(x) = 2x+1，若 f(a) = 9，求 a", options: ["3", "4", "5", "19"], answer: 1 }
];
