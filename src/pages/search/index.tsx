import SearchableLayout from "@/widgets/SearchableLayout/SearchableLayout";
import BookItem from "@/entities/book/ui/BookItem";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { fetchBooks } from "@/entities/book/api/book.api";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;

  const books = await fetchBooks(q as string);

  return {
    props: {
      books,
    },
  };
};

export default function Page({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

Page.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
