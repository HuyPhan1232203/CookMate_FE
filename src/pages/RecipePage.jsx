import { RecipeDetail, RecipeList } from "../components/Recipe";
import { useParams } from "react-router-dom";

export const RecipePage = () => {
  const { id } = useParams();
  if (id) return <RecipeDetail id={id} />;
  return (
    <div style={{ padding: 24 }}>
      <RecipeList />
    </div>
  );
};
