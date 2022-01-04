import "./styles.scss";

interface IData {
  name: string;
  description: string;
  image: string;
}

interface IProps {
  data: IData;
}

const MeatInformations = ({ data: { name, description, image } }: IProps) => {
  return (
    <section className="c-meat-information">
      <div className="c-meat-information__image-wrapper">
        <img
          src={image}
          alt={`Imagem representativa da ${name}`}
          loading="lazy"
        />
      </div>
      <article>{description}</article>
    </section>
  );
};

export default MeatInformations;
