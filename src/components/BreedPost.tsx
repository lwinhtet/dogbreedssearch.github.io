import { BreedType } from "../features/dogs/dogsApiSlice";
import ImageComponent from "./ImageComponent";

type PropType = {
  breed: BreedType;
};

const dogImage = "/images/dog.jpg";

const BreedPost = ({ breed }: PropType) => {
  return (
    <article className="breedPost">
      <ImageComponent
        src={breed?.image?.url ? breed?.image?.url : dogImage}
        alt={breed.name}
        imageClass="breedImage"
      />
      <div className="breedInfo">
        <p className="name">{breed.name}</p>
        <p className="bredFor" data-testid="bred-for">
          Breed For : <span>{breed.bred_for || "N.A"}</span>
        </p>
        <p className="bredGroup" data-testid="breed-group">
          Breed Group : <span>{breed.breed_group || "N.A"}</span>
        </p>
        {/* <img src={"/images/pin.png"} alt="pin" className="pin" /> */}
      </div>
    </article>
  );
};

export default BreedPost;
