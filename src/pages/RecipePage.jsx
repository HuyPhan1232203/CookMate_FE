import { RecipeDetail, RecipeList } from "../components/Recipe";
import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { id } = useParams();
  if (id) return <RecipeDetail id={id} />;
  return (
    <div style={{ padding: 24 }}>
      <RecipeList />
    </div>
  );
};

export default RecipePage;
