import Home from './views/pages/Home'

export default function App() {
  return (
    <div style={styles.main}>
      <Home />
    </div>
  );
}

const styles = {
  main: {
    background: "black",
    color: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  }
}
