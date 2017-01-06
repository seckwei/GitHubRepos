# GitHubRepos
Retrieves a user's repositories along with user-specified fields.

### Example
```javascript
var props = ['name', 'html_url', 'description'],
    username = 'seckwei';

GitHubAPI
    .fetchUserRepo(username, props)
    .then((data) => {
        console.log(data);
    });
``` 
