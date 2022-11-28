import React from 'react';

const CSR = () => {
  const [lista, setLista] = React.useState([])

  React.useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, { 
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": process.env.NEXT_PUBLIC_API_TOKEN
      },
    })
      .then(res => res.json())
      .then(json => setLista(json.data))
  }, [])

  return (
    <div>
      <h1>CSR nextjs - CR7</h1>
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
            lista.map(it => (
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

export default CSR;