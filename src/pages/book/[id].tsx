import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import styles from "./[id].module.css";
import { fetchBookById } from "@/entities/book/api/book.api";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { id } = context.params!;
  const book = await fetchBookById(Number(id));

  return {
    props: {
      book,
    },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) {
    return <div>존재하지 않는 도서입니다.</div>;
  }

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;

  return (
    <div className={styles.container}>
      <div
        style={{ backgroundImage: `url(${coverImgUrl})` }}
        className={styles.cover_img_container}
      >
        <img src={coverImgUrl} alt="" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} | {publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
