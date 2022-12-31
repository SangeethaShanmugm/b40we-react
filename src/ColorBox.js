export function ColorBox({ color }) {
  //named export
  const styles = {
    backgroundColor: color,
    height: "35px",
    width: "300px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

// export const double = (n) => n * 2;

// const triple = (n) => n * 3;

// export { ColorBox, double, triple };
