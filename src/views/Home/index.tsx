import { useHistory } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  const history = useHistory();

  const handleRedirectToContact = () => {
    history.push("contato");
  };

  return (
    <main id="p-home">
      <h1>Aprenda com os melhores</h1>
      <div className="p-home__content">
        <section className="p-home__content__wrapper">
          <div className="p-home__content__wrapper__image-wrapper">
            <img
              src="https://res.cloudinary.com/dlsi7gupe/image/upload/v1641264750/Market-app/picanha_kvs5jx.jpg"
              alt="Imagem de picanha assada"
              loading="lazy"
            />
          </div>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            odit dolorum exercitationem deleniti neque omnis corrupti? Veritatis
            dolorum in et quos aspernatur molestiae ab, harum ipsa? Libero
            voluptatem maxime fugiat.
          </article>
        </section>
        <section className="p-home__content__wrapper">
          <div className="p-home__content__wrapper__image-wrapper">
            <img
              src="https://res.cloudinary.com/dlsi7gupe/image/upload/v1641264694/Market-app/costela_zqrp3d.jpg"
              alt="Imagem de costela assada"
              loading="lazy"
            />
          </div>
          <article>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            odit dolorum exercitationem deleniti neque omnis corrupti? Veritatis
            dolorum in et quos aspernatur molestiae ab, harum ipsa? Libero
            voluptatem maxime fugiat.
          </article>
        </section>
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
