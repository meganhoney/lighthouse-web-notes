# HTTP Cookies & User Authentication

## HTTP is Stateless

Pros
* Scalability - no session related dependency
* Less complex
* Easier to cache
* The server cannot lose track of information

Cons
* Cannot easily keep track of context
* Context has to be provided on each request
* Good for transactions, not great for conversations


## Browser Cookies

* Cookies can share information between server and browser with each request
* Session cookie - provides a way for servers to recognize the user between requests
* Cookies are used to store a user id


      app.post('/register', (req, res) => {
        
        // 0) VALIDATION

        // 1) Read the name, email and password
        const { name, email, password } = req.body;
        // 2) Check if email is already in DB
        for (const key in usersdb) {
          
        }
        // 3) Add inputs to DB (add new user)

        // 4) Respond back to client with a COOKIE

      })
