import React from "react";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./index.css";

const lessons = {
  "ОГЭ": [
    {
      title: "Степени",
      video: "https://www.youtube.com/embed/WW65iHF5b64",
      summary: `
**Что такое степень числа** $a$? Это сколько раз мы перемножаем число $a$.

$a^n$ — это произведение числа $a$ само на себя $n$ раз.

- $a$ — основание степени
- $n$ — показатель степени

**Свойства:**
1. $a^n \times a^m = a^{n+m}$
2. $a^{-n} = \frac{1}{a^n}$
3. $a^{1/n} = \sqrt[n]{a}$
`,
      hw: [
        "5x + 7 < 2x + 13",
        "3 - 2x ≥ x + 6",
        "4x - 5 ≤ 3x + 9",
        "7 - 3x > 4 - x",
        "-2x + 6 < 10 - x"
      ]
    },
    {
      title: "Теория вероятностей",
      video: "https://www.youtube.com/embed/fUUe82tANB8",
      summary: `
**Формула классической вероятности:**
$P(A) = \frac{m}{n}$

**Правила:**
- $P(A \cup B) = P(A) + P(B)$ (если несовместны)
- $P(A \cap B) = P(A) \cdot P(B)$ (если независимы)
- $P(\overline{A}) = 1 - P(A)$
`,
      hw: [
        "В урне 5 красных, 3 синих и 2 зеленых шара. Вероятность достать синий?",
        "12 конфет, из них 4 с начинкой. Вероятность без начинки?",
        "10 белых и 6 черных шаров. Вероятность достать черный?",
        "8 красных и 5 синих шаров. Вероятность красного?",
        "Карта из 36. Вероятность туз?"
      ]
    }
  ],
  "ЕГЭ": [
    {
      title: "Прогрессии",
      video: "https://www.youtube.com/embed/TSVXnKrY_HM",
      summary: `
**Арифметическая прогрессия**
$a_n = a_1 + (n-1) \cdot d$

**Сумма первых n членов:**
$S_n = \frac{n}{2}(2a_1 + (n-1)d)$

**Пример:**
$a_1 = 5, d = 3 \Rightarrow a_{10} = 5 + 9\cdot3 = 32$
`,
      hw: [
        "Найти 10-й член: $a_1 = 5$, $d = 3$",
        "Сумма 15 членов: $a_1 = 7$, $d = 2$"
      ]
    }
  ]
};

const App = () => {
  return (
    <MathJaxContext>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-cyan-600 mb-6">МатШтат: Онлайн-платформа</h1>
        {Object.entries(lessons).map(([direction, topics]) => (
          <div key={direction} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Направление: {direction}</h2>
            <div className="space-y-6">
              {topics.map(({ title, video, summary, hw }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-200 shadow p-4 bg-white"
                >
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">{title}</h3>
                  <div className="aspect-video mb-4">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={video}
                      title={title}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="prose max-w-none text-gray-800 mb-4 space-y-2">
                    {summary.split('\n').map((line, idx) => (
                      <div key={idx}>
                        <MathJax inline dynamic>{line}</MathJax>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Домашка:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {hw.map((task, idx) => (
                        <li key={idx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MathJaxContext>
  );
};

export default App;
