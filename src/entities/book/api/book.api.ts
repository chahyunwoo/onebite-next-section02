import { Book } from "../model/book.types";

export async function fetchBooks(q?: string): Promise<Book[]> {
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchRandomBooks(): Promise<Book[]> {
  const url = `http://localhost:12345/book/random`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch random books");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchBookById(id: number): Promise<Book | null> {
  const url = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch book by id");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
