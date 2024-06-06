# Project Explanation: Luscious Food Recipe App

The Luscious Food Recipe App is a React-based web application that allows users to search for recipes, browse by cuisine, and view detailed recipe information. It leverages the Spoonacular API to fetch recipe data and uses various libraries for animations, routing, and styling.

Project Structure:

1. Home Page:

Displays popular and vegetarian recipes using the Popular and Veggie components.
These components fetch data from the Spoonacular API and use the Splide carousel to display recipes.

2. Search Functionality:

Allows users to search for recipes by typing keywords.
Provides real-time search suggestions using the Spoonacular API's autocomplete endpoint.
Navigates to a search results page (Searched component) when a search is submitted.

3. Cuisine Page:

Displays recipes based on the selected cuisine type.
Fetches recipes from the Spoonacular API using the cuisine query parameter.

4. Recipe Details Page:

Displays detailed information about a selected recipe, including instructions and ingredients.
Allows users to switch between viewing instructions and ingredients.

5. Searched Page:

Displays recipes based on a search query.
Fetches recipes from the Spoonacular API using the query parameter.

## Flow of the Project

1. Home Page:

User visits the home page.
Popular and vegetarian recipes are fetched and displayed.
User can click on a recipe to view its details.

2. Search Functionality:

User types a keyword in the search bar.
Suggestions are fetched and displayed in real-time.
User selects a suggestion or submits the search.
User is navigated to the search results page.

3. Cuisine Navigation:

User clicks on a cuisine icon.
User is navigated to the cuisine page displaying recipes of the selected cuisine.

4. Recipe Details:

User clicks on a recipe.
User is navigated to the recipe details page.
Detailed recipe information is fetched and displayed.

Possible Interview Questions and Answers:

1. How did you fetch and display data from the Spoonacular API?

- I used the fetch API within useEffect hooks to retrieve data from Spoonacular's endpoints. The data is then stored in the component's state using the useState hook. For example, in the Popular component, I fetched popular recipes and saved them in the popular state

2. How do you handle routing in your application?

- I used react-router-dom for routing. The Pages component defines all routes using the Routes and Route components. I also used useParams to extract route parameters and useNavigate for programmatic navigation.

3. How did you implement search suggestions?

- In the Search component, I implemented search suggestions by calling the Spoonacular API's autocomplete endpoint whenever the input value changes. The suggestions are displayed using a datalist element, and users can click on a suggestion to populate the search input.

4. What libraries did you use for animations, and how did you integrate them?

- I used framer-motion for animations and transitions. For page transitions, I wrapped the Routes component with AnimatePresence and used motion.div for animating individual components. Additionally, I configured transition properties like initial, animate, exit, and transition.

5. How do you handle state management in your application?

- I used React's built-in useState and useEffect hooks for state management. For example, in the Recipe component, I maintained the recipe details state using useState and updated it by fetching data in a useEffect hook.

6. How did you ensure responsiveness in your design?

- I used styled-components for styling and included media queries to adjust styles based on screen size. For instance, in the SearchWrapper component, I added styles to ensure the input field and icons are properly aligned on smaller screens.
