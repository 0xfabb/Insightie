# Insightie - A Modern Blog Platform  

## 📌 Overview  
Insightie is a full-stack blog platform built using Node.js, Express, MongoDB, and vanilla HTML, CSS, and JavaScript. Users can create, read, update, and delete blog posts while interacting with a modern UI.  

## 🚀 Features  
- User authentication (Login/Signup)  
- Create, edit, delete, and view blog posts  
- Responsive and modern UI  
- Backend powered by Express and MongoDB  
- Secure authentication with JWT  

## 🛠️ Tech Stack  
**Frontend:** HTML, CSS, JavaScript  
**Backend:** Node.js, Express.js, MongoDB  
**Database:** MongoDB with Mongoose ORM  

## 👤 Folder Structure  
```
Insightie/
│── backend/               # Node.js & Express backend  
│── frontend/              # Static frontend (HTML, CSS, JS)  
│── .env                   # Environment variables  
│── .gitignore             # Ignore node_modules & sensitive files  
│── package.json           # Project dependencies  
│── README.md              # Documentation  
```

## 🔧 Setup & Installation  
### 1️⃣ Clone the repository  
```sh  
git clone https://github.com/YOUR-USERNAME/Insightie.git  
cd Insightie  
```

### 2️⃣ Install dependencies  
```sh  
npm install  
```

### 3️⃣ Set up environment variables  
Create a `.env` file in the root directory and add:  
```
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  
PORT=5000  
```

### 4️⃣ Run the server  
```sh  
npm start  
```
The server will start on `http://localhost:5005`.  

## 📌 Future Enhancements  
- Add rich text editing for blog posts  
- Implement comments & likes system  
- Add a user dashboard  
- Enhance UI with React.js  

## 📝 License  
This project is open-source and available under the MIT License.  

## ✨ Contributing  
Contributions are welcome! Feel free to fork this repository and submit a pull request.  