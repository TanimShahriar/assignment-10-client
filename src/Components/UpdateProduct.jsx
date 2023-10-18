import { useLoaderData } from "react-router-dom";


const UpdateProduct = () => {
  const product = useLoaderData();

  const { _id, name } = product;
  return (
    <div>
      <h2>update: {name}</h2>
    </div>
  );
};

export default UpdateProduct;