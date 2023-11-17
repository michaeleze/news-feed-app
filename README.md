## News Feed App
This News Feed App is a modern web application that aggregates news from various sources, allowing users to browse, search, and filter news articles based on different criteria.

### Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed Node.js (preferably the latest stable version).
You have a basic understanding of JavaScript and React.

### Getting Started
To run the News Feed App on your local machine, follow these steps:

### Clone the Repository
First, clone the repository to your local machine:

```
git clone https://github.com/michaeleze/news-feed-app.git
cd news-feed-app
```

### Install Dependencies
Install the necessary dependencies for the project:

```
npm install
```

### Set Up Environment Variables

Create a .env file in the root directory and add the required API keys and other environment variables as specified in the .env.example file.

### Run the Application

Start the development server:
```
npm run dev
```

For faster dev server using turbo

```
npm run dev --turbo
```
After running the above command, the application should be live at http://localhost:3000.

### Running with Docker
To run the News Feed App using Docker, follow these steps:

Build the Docker Image

```
docker build -t news-feed-app .
```
This command builds the Docker image for the app, tagging it as news-feed-app.

### Run the Docker Container

```
docker run -p 80:80 news-feed-app
```
This command runs the app in a Docker container, mapping port 80 of the container to port 80 on your host machine. You can access the app at http://localhost.

### Using the Application
With the app running, you can:

Browse the latest news from various sources.
Use the search functionality to find specific news articles.
Apply filters to narrow down the news articles based on categories, sources, and dates.

### Pitfalls in Using the Application

- The filtering logic for source and category isn't fully functional as well as the personalize newsfeed due to limited time.
- No test added due to limited time


### Contributing

Contributions to the News Feed App are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.

### License
This project is licensed under MIT License.

### Contact
If you have any questions or want to reach out to the maintainer, you can contact Michael Eze through this GitHub profile.
