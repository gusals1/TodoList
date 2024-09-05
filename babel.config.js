module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true, // `style: true`는 CSS 파일을 포함합니다.
      },
    ],
  ],
};
