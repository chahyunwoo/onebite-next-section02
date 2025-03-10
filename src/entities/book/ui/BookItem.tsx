import React from "react";
import { Book } from "../model/book.types";
import Link from "next/link";
import styles from "./BookItem.module.css";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: Book) {
  return (
    <Link href={`/books/${id}`} className={styles.container}>
      <img src={coverImgUrl} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.subTitle}>{subTitle}</div>
        <br />
        <div className={styles.author}>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
