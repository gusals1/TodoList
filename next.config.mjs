import withTM from "next-transpile-modules";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/(antd|@ant-design\/icons)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["next/babel"],
            plugins: [
              [
                "import",
                {
                  libraryName: "antd",
                  libraryDirectory: "es",
                  style: true,
                },
              ],
            ],
          },
        },
      });
    }
    return config;
  },
};

export default withTM([
  "antd",
  "rc-util",
  "rc-pagination",
  "@ant-design/icons",
  "rc-picker",
])(nextConfig);
