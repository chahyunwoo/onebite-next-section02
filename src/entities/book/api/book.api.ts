import { Book } from "../model/book.types";

export async function fetchBooks(): Promise<Book[]> {
  const url = `http://localhost:12345/book`;

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
