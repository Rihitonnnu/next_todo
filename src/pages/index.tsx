import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <a href="http://localhost:3000/todo">todoリスト</a>
    </>
  );
}
