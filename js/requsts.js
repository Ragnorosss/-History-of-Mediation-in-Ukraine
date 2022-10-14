let author = {
    name,
    lastname,
    email,
    password,
    quilification,
    biography,
    avatar,
    city,
    videos:URL(),
     
  };
  
  let response = await fetch('/article/fetch/post/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(author)
  });
  
  let result = await response.json();
  alert(result.message);