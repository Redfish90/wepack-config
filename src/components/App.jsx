import "../styles/index.scss";
import Recipes from './Recipes'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <Recipes/>
        </section>
      </main>
    </>
  );
}

export default App;
