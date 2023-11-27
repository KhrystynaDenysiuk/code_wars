function getPostById(id) {
  const endpoint = "https://jsonplaceholder.typicode.com";
  const result = {
    id,
    name: "",
    posts: [],
  };

  return new Promise((resolve, reject) => {
    fetch(`${endpoint}/users`)
      .then((response) => response.json())
      .then((users) => {
        const foundUser = users.find((user) => user.id === id);
        result.name = foundUser.name;

        fetch(`${endpoint}/posts`)
          .then((response) => response.json())
          .then((posts) => {
            result.posts = posts.filter((post) => post.userId === id);
            resolve(result);
          });
      })
      .catch((error) => console.log(error));
  });
}

getPostById(9).then((data) => console.log(data));
