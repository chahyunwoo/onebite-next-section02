import SearchableLayout from "@/widgets/SearchableLayout/SearchableLayout";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.h1}>INDEX</h1>
      <h2 className={styles.h2}>H2</h2>
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
