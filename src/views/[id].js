// Пример: src/views/[id].js

import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // Получение всех возможных путей
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
  ];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Получение данных для каждой страницы
  const data = await fetchData(params.id);

  return { props: { data } };
}

const Page = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Page {id}</h1>
      <p>{data}</p>
    </div>
  );
};

export default Page;
