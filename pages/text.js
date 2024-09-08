// pages/TestPage.js
import { usePosts } from "@/hooks"; // Ajusta la ruta según la ubicación de tu archivo
import { formatDate } from "@/utils/formatDate";

export default function TestPage() {
  const posts = usePosts(); // Usa el hook
  console.log(posts);
  formatDate("2024-08-13T05:53:35.550Z");

  // No necesitas retornar nada visible; esto es solo para ver los resultados en la consola
  return null; // No se muestra nada en la pantalla
}
