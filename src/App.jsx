import Layout from "./layouts/Layout";
import ThemeProvider from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}