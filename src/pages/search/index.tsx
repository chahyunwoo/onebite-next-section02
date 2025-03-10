import SearchableLayout from "@/widgets/SearchableLayout/SearchableLayout";
import books from "@/mock/books.json";
import BookItem from "@/entities/book/ui/BookItem";

export default function Page() {
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
