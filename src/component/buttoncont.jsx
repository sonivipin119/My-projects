import styles from "./buttoncont.module.css";
const buttonConatiner = () => {
  const buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonConatiner}>
      {buttonName.map((name) => (
        <button className={styles.button}>{name}</button>
      ))}
    </div>
  );
};
export default buttonConatiner;
