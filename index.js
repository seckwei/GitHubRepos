const GitHubAPI = {
    fetchUserRepo (username, props) {
        return new Promise((resolve, reject) => {
            
            var oReq = new XMLHttpRequest(),
                self = this;
            
            oReq.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    resolve(self.filterRepoProp(props, oReq.responseText));
                }
            };
            
            oReq.open('GET', 'https://api.github.com/search/repositories?q=user:' + username);
            oReq.send(); 
        });
    },
    
    filterRepoProp (props, response) {
        var res = JSON.parse(response);
        return res.items.map(repo => {
            var obj = {};
            props.forEach(prop => {
               obj[prop] = repo[prop] !== null ? repo[prop] : ''; 
            });
            return obj;
        });
    }
}

module.exports = GitHubAPI;
