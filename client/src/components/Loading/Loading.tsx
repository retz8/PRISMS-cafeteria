import LoadingSpinner from "../ui/LoadingSpinner";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <p>Loading...</p>
      <LoadingSpinner />
    </div>
  );
}
