-- For each of the following use the SWAPI docs, to figure out the complete URL(s) (including params or queries) that you need to go to in order to reach the following data:

-- the height of Darth Vader

https://swapi.dev/api/people/4

-- the population of the planet Alderaan

https://swapi.dev/api/planets/2

-- the name of the manufacturer of the Millennium Falcon

https://swapi.dev/api/starships/10

-- the name of the species that C-3PO belongs to (multiple URLs)

https://swapi.dev/api/people/2
https://swapi.dev/api/species/2/

-- the title of each film that Obi-Wan Kenobi is in (multiple URLs)

https://swapi.dev/api/people/10

https://swapi.dev/api/films/1/
https://swapi.dev/api/films/2/
https://swapi.dev/api/films/3/
https://swapi.dev/api/films/4/
https://swapi.dev/api/films/5/
https://swapi.dev/api/films/6/

-- use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship 

https://swapi.dev/api/starships/?search=Millennium


--------------------------------------------------------------------------------------------------------------------------------------------------------------------


-- In this section, you’ll be looking through the documentation for the Social Mountain API and answering questions. You’ll also be making requests and recording the URLs and some information about the responses. Run the requests in Postman. Note: this API is live and viewable by your classmates and staff. Keep things appropriate for class.

-- You can view the documentation for the Social Mountain API here

-- The base URL of your requests is: https://practiceapi.devmountain.com/api (make sure to have the “s” in “https”)

-- Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?

https://practiceapi.devmountain.com/api/trivia/questions
Send the question in the body

-- What data type does the GET request return?

JSON

-- What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )

/api/trivia/questions/555

-- List the possible response codes from the GET request at ‘/posts/filter’

409

-- Create a post whose text is your name, record the URL and body here:

https://practiceapi.devmountain.com/api/posts

body: {
    "text": "name"
}

-- What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?

https://practiceapi.devmountain.com/api/posts/?id=6869

body: {
    "text": "black"
}
-- What is the URL to get posts that contain the text “blue”?

https://practiceapi.devmountain.com/api/posts/filter/?text=blue

-- Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)

json, utf-8

-- What would cause a PUT request to return a 409 status?

Not adding a body

-- What happens if you try to send a query in the GET request URL? Why do you get that response?

it just responds with the same data that you would get without a query. because theres no endpoint set up to accept queries without /filter/