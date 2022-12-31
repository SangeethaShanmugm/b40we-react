import "./App.css";
import { AddColor } from "./AddColor";
import { Book } from "./Book";
import { Msg } from "./Msg";
import { Routes, Route, Link, useParams } from "react-router-dom";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 8,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations.",
  },
];

export default function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link change page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book">BookList</Link>
          </li>
          {/* <li>
            <Link to="/book/add">Add Book</Link>
          </li> */}
          <li>
            <Link to="/add-color">AddColor</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/somewhere">Somewhere</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:bookid" element={<BookDetail />} />
        {/* <Route path="/book/add" element={<AddBook />} /> */}
        <Route path="/add-color" element={<AddColor />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

function BookDetail() {
  const { bookid } = useParams();
  return <div>Book detail page- {bookid} </div>;
}

function Users() {
  const users = [
    {
      name: "john",
      pic: "pic",
    },
    {
      name: "jack",
      pic: "pic2",
    },
  ];
  return (
    <div>
      {users.map((usr) => (
        <Msg name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}

function Home() {
  return <div>Welcome to Book App 🥳🥳🥳🥳🥳</div>;
}

function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div>
      <div className="add-book-form">
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter a name"
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          placeholder="Enter a poster"
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          placeholder="Enter a rating"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          placeholder="Enter a summary"
        />
        <Button
          variant="contained"
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };

            setBookList([...bookList, newBook]);
            console.log(bookList, newBook);
            //copy the bookList and add new book
          }}
        >
          Add Book
        </Button>
      </div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}
//Task - 15mins
//AddBook
//4 input field - name, poster, summary, rating
//Add Book button

// function AddBook() {
//   const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);
//   const [name, setName] = useState("");
//   const [poster, setPoster] = useState("");
//   const [rating, setRating] = useState("");
//   const [summary, setSummary] = useState("");
//   return (
//     <div className="add-book-form">
//       <input
//         onChange={(event) => setName(event.target.value)}
//         type="text"
//         placeholder="Enter a name"
//       />
//       <input
//         onChange={(event) => setPoster(event.target.value)}
//         type="text"
//         placeholder="Enter a poster"
//       />
//       <input
//         onChange={(event) => setRating(event.target.value)}
//         type="text"
//         placeholder="Enter a rating"
//       />
//       <input
//         onChange={(event) => setSummary(event.target.value)}
//         type="text"
//         placeholder="Enter a summary"
//       />
//       <button
//         onClick={() => {
//           const newBook = {
//             name: name,
//             poster: poster,
//             rating: rating,
//             summary: summary,
//           };

//           setBookList([...bookList, newBook]);
//           console.log(bookList, newBook);
//           //copy the bookList and add new book
//         }}
//       >
//         Add Book
//       </button>
//     </div>
//   );
// }
