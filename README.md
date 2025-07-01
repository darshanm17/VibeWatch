# 🎬 VibeWatch

**VibeWatch** is a sleek and user-friendly movie and TV show discovery web application built using **React.js** and **TMDB API**. It allows users to search, discover trending content, and manage their own personalized watchlist — all saved locally in the browser!

---

## 🚀 Features

- 🔍 **Search** for any Movie or TV Show using keywords  
- 🎞️ **Discover** trending and top-rated content from The Movie Database (TMDB)  
- ❤️ **Add to Watchlist** feature using browser's local storage  
- 📱 **Responsive UI** that works great on mobile, tablet, and desktop  
- 🍿 Intuitive UI for **browsing, viewing details**, and exploring related content  

---

## 🧰 Tech Stack

- **Frontend:** React.js, HTML, CSS, JavaScript  
- **API:** [TMDB (The Movie Database)](https://www.themoviedb.org/documentation/api)  
- **State Management:** useState, useEffect  
- **Storage:** Local Storage for persistent watchlist  
- **Styling:** CSS Modules / Custom CSS  
- **Routing:** React Router DOM  

---

## 📦 Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/darshanm17/VibeWatch.git
    cd VibeWatch
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up TMDB API Key**

    - Create a `.env` file in the root directory.
    - Add the following line:

    ```env
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```

4. **Run the app**

    ```bash
    npm start
    ```

    The app will open in your browser at `http://localhost:3000`.

---

## 📁 Folder Structure

```
VibeWatch/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Watchlist.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Discover.jsx
│   │   ├── MovieDetails.jsx
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
├── README.md
```

---

## 🖼️ Screenshots

| Home Page | Movie Details | Watchlist |
|-----------|---------------|-----------|
| ![Home](screenshots/home.png) | ![Details](screenshots/details.png) | ![Watchlist](screenshots/watchlist.png) |

---

## 🌐 Live Demo

🚀 Check out the live version here: [https://your-live-link.com](https://your-live-link.com)

---

## 🧑‍💻 Author

**Darshan M R**  
Final Year CSE Student at RV Institute of Technology and Management  
🔗 [GitHub](https://github.com/darshanm17) • 📫 darshanmrd17@gmail.com

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📝 Notes

- Make sure to keep your TMDB API Key secure and avoid exposing it in public repositories.  
- For production, consider integrating user authentication and storing watchlists in a database.
