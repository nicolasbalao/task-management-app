import useAxios from "../../../../Hooks/useAxios";
import "./Crypto.scss";
import addIcon from "../../../../assets/add.svg";



function Crypto() {
  //const [listCrypto, updateListCrypto] = useState(["bitcoin", "ethereum"]);
  const { response, error, loading } = useAxios(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h%2C7d`
  );

  // useEffect(() => {
  //   if (response !== null) {
  //     setCryptoData(response);
  //   }
  // }, [response, listCrypto]);

  return (
    <>
      {!loading ? (
        <div className="cryptoWidget">
          <div className="cryptoWidget__header">
            <h1 className="cryptoWidget__title">Crypto</h1>
            <button className="cryptoWidget__button">
              <img src={addIcon} alt="add logo" />
            </button>
          </div>
          <div className="cryptoWidget__listContainer">
            <table>
              <thead>
                <tr className="table__header">
                  <th></th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>7d</th>
                </tr>
              </thead>
              <tbody>
                {response.map((crypto, index) => (
                  <tr className="crypto" key={`column ${index}`}>
                    <td>
                      <img src={crypto.image} alt="logo" />
                    </td>
                    <td>{crypto.market_cap_rank}</td>
                    <td>{crypto.name}</td>
                    <td className="price">{crypto.current_price} €</td>
                    <td
                      className={
                        crypto.price_change_percentage_24h_in_currency < 0
                          ? "red"
                          : "green"
                      }
                    >
                      {crypto.price_change_percentage_24h_in_currency.toFixed(
                        1
                      )}{" "}
                      %
                    </td>
                    <td
                      className={
                        crypto.price_change_percentage_7d_in_currency < 0
                          ? "red"
                          : "green"
                      }
                    >
                      {crypto.price_change_percentage_7d_in_currency.toFixed(1)}{" "}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Crypto;
