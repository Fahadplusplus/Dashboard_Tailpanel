import Layout from "./layout/Layout";
import ThemeProvider from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}