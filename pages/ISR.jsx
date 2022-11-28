const ISR = ({ products }) => {

  return (
    <div>
      <h1>Aprendendo ISR - MESSI</h1>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>CFOP</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {
            products.data.map(it => (
              <tr key={it.codigo}>
                <td>{it.codigo}</td>
                <td>{it.nome}</td>
                <td>{it.cfop}</td>
                <td>{it.qtde}</td>
                <td>{it.preco}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )

}

export default ISR;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { 
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": process.env.NEXT_PUBLIC_API_TOKEN
    },
  })

  const products = await res.json();

  return {
    props: {
      products
    },
    revalidate: 30
  }
}