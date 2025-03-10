import SearchableLayout from "@/widgets/SearchableLayout/SearchableLayout";
import styles from "./index.module.css";
import BookItem from "@/entities/book/ui/BookItem";
import { InferGetServerSidePropsType } from "next";
import { fetchBooks, fetchRandomBooks } from "@/entities/book/api/book.api";

// 해당 페이지는 해당 함수를 선언함으로서, SSR로 동작하게 됨
// 컴포넌트보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러옴
export const getServerSideProps = async () => {
  const [allBooks, recommendedBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recommendedBooks,
    },
  };
};

export default function Home({
  allBooks,
  recommendedBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recommendedBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
