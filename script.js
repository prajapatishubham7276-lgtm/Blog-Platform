let blogs = [];

function addBlog(){

    let title = document.getElementById("title").value;

    let content = document.getElementById("content").value;

    let blog = {
        title: title,
        content: content
    };

    blogs.push(blog);

    showBlogs();
}

function showBlogs(){

    let output = "";

    blogs.forEach((blog, index)=>{

        output += `
        
        <div class="blog">

            <h2>${blog.title}</h2>

            <p>${blog.content}</p>

            <button onclick="editBlog(${index})">
                Edit
            </button>

            <button onclick="deleteBlog(${index})">
                Delete
            </button>

        </div>
        
        `;
    });

    document.getElementById("blogs").innerHTML = output;
}



function deleteBlog(index){

    blogs.splice(index, 1);

    showBlogs();
}



function editBlog(index){

    let newTitle = prompt("Enter New Title");

    let newContent = prompt("Enter New Content");

    blogs[index].title = newTitle;

    blogs[index].content = newContent;

    showBlogs();
}