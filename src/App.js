
import './App.css';

function App() {
  const movies=[
    {
      pic:"https://m.media-amazon.com/images/M/MV5BMjAxZDEyZTUtMTdiMC00M2FkLWFlYWItZTQ3NWQzNzY2NDdjXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      name:"Vikram",
      Rating:"8.4",
      content:"A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai."
    },
    {
      pic:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/love-today-et00343241-1667476540.jpg",
      name:"Love Today",
      Rating:"8.8",
      content:"Love Today is a 2022 Indian Tamil-language romantic comedy-drama film written and directed by Pradeep Ranganathan of Comali fame, and produced by Kalapathi S. Aghoram under."
    },
    {
      pic:"https://reviewpuram.in/wp-content/uploads/2022/08/Thiruchitrambalam.jpg",
      name:"Thiruchitrambalam",
      Rating:"8",
      content:"A delivery driver navigates life while living with his strict policeman father and sassy grandfather. Meanwhile, he's caught between two women."
    },
    {
      pic:"https://m.media-amazon.com/images/M/MV5BODk1N2NmYWUtMWFlYS00ZDk2LWFkYTgtY2Q1OWMxNWIzNzNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
      name:"VTK",
      Rating:"7.5",
      content:"A young low-caste village boy travels to Mumbai to earn a living. Where he gets involved in the underground activities of Mumbai's Tamil gangsters."
    }

  ]
  return (
    <div className="App">
      {movies.map((usr)=>(<User pic={usr.pic} name={usr.name} Rating={usr.Rating} content={usr.content}/>))}
     
    </div>
  );
}

function User({pic,name,Rating,content}){
  return(
    <>
      {/* <div className="container">
        <div className='row'> */}
          <div className='col-6 col-md-3'>
           <img className='mov-image' src={pic} alt={name}/>
           <h5 className='r'>{name} <span className="fa fa-star"><span className='el'>{Rating}</span></span></h5>
           <p>{content}</p>


          {/* </div>
        </div> */}
        </div>
      
    </>
  )
}

export default App;
