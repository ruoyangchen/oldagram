const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainEl = document.getElementById("main")
let html=""
for(let i = 0; i < posts.length; i++){
    html += `
            <article class="post" >
                <div class="post-header">
                    <img class="avatar" src=${posts[i].avatar} alt="avatar">
                    <div class="user-info">
                        <h3>${posts[i].name}</h3>
                        <p>${posts[i].location}</p>
                    </div>
                </div>
 
                <div class="post-content">
                    <img class="post-img" src=${posts[i].post} alt="self-portrait">
                </div>
                <div class="post-reaction">
                    <div class="icons-container">
                        <img class="icons" src="images/icon-heart.png" alt="heart-icon">
                        <img class="icons" src="images/icon-comment.png" alt="comment-icon">
                        <img class="icons" src="images/icon-dm.png" alt="dm-icon">
                        
                    </div>
                    <h3>${posts[i].likes} likes</h3>
                    <div class="comments">
                        <h3>${posts[i].username}</h3>
                        <p>${posts[i].comment}</p> 
                    </div>
                </div>
            </article>
            <div class="gap">
            </div>
        `
}

mainEl.innerHTML = html