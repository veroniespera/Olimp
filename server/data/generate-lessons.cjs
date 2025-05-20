const fs = require("fs");
const path = require("path");

const subjects = ["matematica", "romana", "engleza"];
const grades = Array.from({ length: 8 }, (_, i) => 5 + i); // Clasa 5–12

grades.forEach((grade) => {
  subjects.forEach((subject) => {
    const dir = path.join("data/lessons", `clasa-${grade}`);
    fs.mkdirSync(dir, { recursive: true });

    const content = {
      [`Capitolul 1`]: {
        titlu: `${subject} Capitolul 1 - Clasa ${grade}`,
        teme: [
          {
            titlu: `Lecția 1 ${subject} ${grade}`,
            descriere: `Descriere pentru lecția 1 la ${subject} clasa ${grade}`,
            video: `https://youtube.com/watch?v=vid${grade}${subject[0]}1`,
          },
          {
            titlu: `Lecția 2 ${subject} ${grade}`,
            descriere: `Descriere pentru lecția 2 la ${subject} clasa ${grade}`,
            video: `https://youtube.com/watch?v=vid${grade}${subject[0]}2`,
          },
        ],
      },
    };

    fs.writeFileSync(
      path.join(dir, `${subject}.json`),
      JSON.stringify(content, null, 2)
    );
  });
});
