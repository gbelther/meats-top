import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SyncLoader } from "react-spinners";

import { api } from "../../services/api";
import { MeatInformations } from "./components";

import "./styles.scss";

interface IMeat {
  id: number;
  name: string;
  description: string;
  image: string;
}

const Home = () => {
  const history = useHistory();

  const [loadingMeats, setLoadingMeats] = useState(false);
  const [meats, setMeats] = useState<IMeat[]>([]);
  const [error, setError] = useState({
    show: false,
    message: "",
  });

  const handleRedirectToContact = () => {
    history.push("contato");
  };

  useEffect(() => {
    const getMeats = async () => {
      setLoadingMeats(true);

      try {
        const response = await api.get("/meats");

        setMeats(
          response.data.map((meat: IMeat) => ({
            id: meat.id,
            name: meat.name,
            description: meat.description,
            image: meat.image,
          }))
        );
      } catch (error: any) {
        setError({
          show: true,
          message: error.message,
        });
      } finally {
        setLoadingMeats(false);
      }
    };

    getMeats();
  }, []);

  return (
    <main id="p-home">
      <h1>Aprenda com os melhores</h1>
      <div className="p-home__content">
        {loadingMeats ? (
          <SyncLoader />
        ) : error.show ? (
          <p>{error.message}</p>
        ) : (
          meats.length > 0 &&
          meats.map((meat) => (
            <MeatInformations
              key={meat.id}
              data={{
                name: meat.name,
                description: meat.description,
                image: meat.image,
              }}
            />
          ))
        )}
      </div>
      <div className="p-home__footer">
        <button type="button" onClick={() => handleRedirectToContact()}>
          Deixar Contato
        </button>
        <p>Entraremos em contato{"\n"} em breve!</p>
      </div>
    </main>
  );
};

export default Home;
