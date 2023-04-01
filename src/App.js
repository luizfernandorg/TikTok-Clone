import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={300}
          messages={200}
          shares={100}
          name="Luiz"
          description="Goleiro"
          music="Ac/Dc"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={444}
          messages={555}
          shares={666}
          name="Fernando"
          description="Bird"
          music="Foo fithers"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        
      </div>
    </div>
  );
}
export default App;