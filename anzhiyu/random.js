var posts=["2025/08/05/hello-world/","2025/08/08/题解：P2679-NOIP-2015-提高组-子串/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };