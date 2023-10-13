
export default function Page({ params }) {
  console.log(params);
  return (
    <>Dados dinâmicos: {params.slug}</>
  )
}


export async function generateMetadata({ params }) {
  return {
    title: `Página de ${params.slug}`,
    description: `Descrição de  ${params.slug}`,
  }
}
